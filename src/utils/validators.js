export function sanitizeTags(input) {
  if (Array.isArray(input)) {
    return [...new Set(input.map((item) => String(item).trim().toLowerCase()).filter(Boolean))];
  }

  return [...new Set(String(input || '')
    .split(',')
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean))];
}

export function isValidCollectionName(name) {
  return String(name || '').trim().length >= 2;
}
