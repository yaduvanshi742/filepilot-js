import { DEFAULT_COLLECTIONS } from '../config/constants.js';
import { CollectionRepository } from './repositories.js';
import { createId } from '../utils/id.js';
import { nowIso } from '../utils/date.js';

export async function ensureDefaultCollections() {
  const collections = await CollectionRepository.all();
  if (collections.length) return collections;

  const created = DEFAULT_COLLECTIONS.map((collection) => ({
    id: createId('collection'),
    ...collection,
    createdAt: nowIso(),
    updatedAt: nowIso()
  }));

  await Promise.all(created.map((collection) => CollectionRepository.put(collection)));
  return created;
}
