export function createId(prefix = 'id') {
  const random = crypto.getRandomValues(new Uint32Array(2));
  return `${prefix}_${Date.now().toString(36)}_${random[0].toString(36)}${random[1].toString(36)}`;
}

export function createSlug(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'item';
}
