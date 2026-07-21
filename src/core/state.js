import { Events } from './events.js';

const state = {
  route: 'dashboard',
  files: [],
  collections: [],
  activity: [],
  settings: {
    theme: 'light',
    defaultCollectionId: '',
    compactMode: false
  },
  filters: {
    query: '',
    collectionId: 'all',
    type: 'all',
    favoriteOnly: false
  },
  selectedFileId: ''
};

export function getState() {
  return structuredClone(state);
}

export function readState() {
  return state;
}

export function setState(patch) {
  Object.assign(state, patch);
  Events.emit('state:changed', getState());
}

export function updateFilters(patch) {
  state.filters = { ...state.filters, ...patch };
  Events.emit('state:changed', getState());
}
