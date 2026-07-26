export function showToast(title, message = '', tone = 'info') {
  const root = document.querySelector('#toastRoot');
  if (!root) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${tone}`;
  toast.innerHTML = `<strong>${title}</strong>${message ? `<span>${message}</span>` : ''}`;
  root.append(toast);

  setTimeout(() => toast.remove(), 3400);
}
