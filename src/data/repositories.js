import { STORE_NAMES } from '../config/constants.js';
import { withStore } from './db.js';

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export const Repository = {
  async all(storeName) {
    return withStore(storeName, 'readonly', (store) => requestToPromise(store.getAll()));
  },

  async get(storeName, id) {
    return withStore(storeName, 'readonly', (store) => requestToPromise(store.get(id)));
  },

  async put(storeName, value) {
    await withStore(storeName, 'readwrite', (store) => store.put(value));
    return value;
  },

  async delete(storeName, id) {
    await withStore(storeName, 'readwrite', (store) => store.delete(id));
  },

  async clear(storeName) {
    await withStore(storeName, 'readwrite', (store) => store.clear());
  }
};

export const FileRepository = {
  all: () => Repository.all(STORE_NAMES.files),
  put: (file) => Repository.put(STORE_NAMES.files, file),
  delete: (id) => Repository.delete(STORE_NAMES.files, id),
  clear: () => Repository.clear(STORE_NAMES.files)
};

export const CollectionRepository = {
  all: () => Repository.all(STORE_NAMES.collections),
  put: (collection) => Repository.put(STORE_NAMES.collections, collection),
  delete: (id) => Repository.delete(STORE_NAMES.collections, id),
  clear: () => Repository.clear(STORE_NAMES.collections)
};

export const ActivityRepository = {
  all: () => Repository.all(STORE_NAMES.activity),
  put: (item) => Repository.put(STORE_NAMES.activity, item),
  clear: () => Repository.clear(STORE_NAMES.activity)
};

export const SettingsRepository = {
  async get() {
    const row = await Repository.get(STORE_NAMES.settings, 'workspace');
    return row?.value || null;
  },

  async put(value) {
    return Repository.put(STORE_NAMES.settings, { key: 'workspace', value });
  }
};
