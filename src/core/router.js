import { setState } from './state.js';

const routes = new Set(['dashboard', 'files', 'collections', 'preview', 'backup', 'settings']);

export function getRouteFromHash() {
  const route = window.location.hash.replace('#', '').trim() || 'dashboard';
  return routes.has(route) ? route : 'dashboard';
}

export function navigate(route) {
  window.location.hash = routes.has(route) ? route : 'dashboard';
}

export function initRouter() {
  const applyRoute = () => setState({ route: getRouteFromHash() });
  window.addEventListener('hashchange', applyRoute);
  applyRoute();
}
