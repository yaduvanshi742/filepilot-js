import { DB_NAME, DB_VERSION, STORE_NAMES } from '../config/constants.js';

let dbPromise;

export function openDatabase() {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_NAMES.files)) {
        const store = db.createObjectStore(STORE_NAMES.files, { keyPath: 'id' });
        store.createIndex('name', 'name', { unique: false });
        store.createIndex('collectionId', 'collectionId', { unique: false });
        store.createIndex('checksum', 'checksum', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_NAMES.collections)) {
        const store = db.createObjectStore(STORE_NAMES.collections, { keyPath: 'id' });
        store.createIndex('name', 'name', { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_NAMES.settings)) {
        db.createObjectStore(STORE_NAMES.settings, { keyPath: 'key' });
      }

      if (!db.objectStoreNames.contains(STORE_NAMES.activity)) {
        const store = db.createObjectStore(STORE_NAMES.activity, { keyPath: 'id' });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return dbPromise;
}

export async function withStore(storeName, mode, callback) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, mode);
    const store = transaction.objectStore(storeName);
    const result = callback(store);

    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () => reject(transaction.error);
  });
}
