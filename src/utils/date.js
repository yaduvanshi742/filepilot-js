export function formatDate(value) {
  if (!value) return 'Not available';
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(value));
}

export function nowIso() {
  return new Date().toISOString();
}
