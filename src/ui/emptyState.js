export function emptyState(title, message, action = '') {
  return `
    <div class="empty-state">
      <div>
        <h2>${title}</h2>
        <p>${message}</p>
        ${action}
      </div>
    </div>
  `;
}
