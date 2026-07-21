import { ensureDefaultCollections } from '../data/seed.js';
import { FileRepository, ActivityRepository, SettingsRepository } from '../data/repositories.js';
import { initRouter, navigate } from '../core/router.js';
import { Events } from '../core/events.js';
import { readState, setState, updateFilters } from '../core/state.js';
import { debounce } from '../utils/debounce.js';
import { importFiles } from '../features/files/fileImport.js';
import { renderDashboardView } from '../features/dashboard/dashboard.js';
import { renderFileListView, bindFileListEvents } from '../features/files/fileList.js';
import { renderCollectionsView, bindCollectionEvents } from '../features/collections/collections.js';
import { renderPreviewView } from '../features/files/filePreview.js';
import { renderBackupView, bindBackupEvents } from '../features/backup/backup.js';
import { renderSettingsView, bindSettingsEvents, applyTheme } from '../features/settings/settings.js';
import { showToast } from '../ui/toast.js';

const titles = {
  dashboard: ['Workspace', 'Dashboard'],
  files: ['Library', 'Files'],
  collections: ['Organization', 'Collections'],
  preview: ['Viewer', 'Preview'],
  backup: ['Data', 'Backup'],
  settings: ['Preferences', 'Settings']
};

export async function bootApp() {
  const collections = await ensureDefaultCollections();
  const [files, activity, settings] = await Promise.all([
    FileRepository.all(),
    ActivityRepository.all(),
    SettingsRepository.get()
  ]);

  const finalSettings = {
    ...readState().settings,
    ...(settings || {}),
    defaultCollectionId: settings?.defaultCollectionId || collections[0]?.id || ''
  };

  setState({
    collections,
    files: files.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    activity: activity.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    settings: finalSettings
  });
  applyTheme(finalSettings.theme);

  bindGlobalEvents();
  initRouter();
  Events.on('state:changed', render);
  render();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }
}

function bindGlobalEvents() {
  document.querySelector('#globalFileInput')?.addEventListener('change', (event) => importFiles(event.target.files));

  document.querySelector('#globalSearch')?.addEventListener('input', debounce((event) => {
    updateFilters({ query: event.target.value });
  }, 180));

  document.querySelector('#themeToggle')?.addEventListener('click', async () => {
    const state = readState();
    const theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    const next = { ...state.settings, theme };
    const { SettingsRepository } = await import('../data/repositories.js');
    await SettingsRepository.put(next);
    applyTheme(theme);
    setState({ settings: next });
  });

  window.addEventListener('keydown', (event) => {
    const target = event.target;
    const isTyping = target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
    if (isTyping) return;

    if (event.key === '/') {
      event.preventDefault();
      document.querySelector('#globalSearch')?.focus();
    }

    if (event.key.toLowerCase() === 'f') navigate('files');
    if (event.key.toLowerCase() === 'c') navigate('collections');
    if (event.key.toLowerCase() === 'b') navigate('backup');
  });
}

function render() {
  const state = readState();
  const root = document.querySelector('#viewRoot');
  const [eyebrow, title] = titles[state.route] || titles.dashboard;
  document.querySelector('#pageEyebrow').textContent = eyebrow;
  document.querySelector('#pageTitle').textContent = title;

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('is-active', link.dataset.route === state.route);
  });

  const views = {
    dashboard: renderDashboardView,
    files: renderFileListView,
    collections: renderCollectionsView,
    preview: renderPreviewView,
    backup: renderBackupView,
    settings: renderSettingsView
  };

  root.innerHTML = (views[state.route] || renderDashboardView)();
  bindRouteEvents(root, state.route);
}

function bindRouteEvents(root, route) {
  if (route === 'files') bindFileListEvents(root);
  if (route === 'collections') bindCollectionEvents(root);
  if (route === 'backup') bindBackupEvents(root);
  if (route === 'settings') bindSettingsEvents(root);
}
