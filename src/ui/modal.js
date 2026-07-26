export function openModal(content) {
  const root = document.querySelector('#modalRoot');
  root.hidden = false;
  root.innerHTML = `<section class="modal" role="dialog" aria-modal="true">${content}</section>`;

  root.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });
}

export function closeModal() {
  const root = document.querySelector('#modalRoot');
  root.hidden = true;
  root.innerHTML = '';
}

export function confirmDialog({ title, message, confirmText = 'Confirm', tone = 'danger' }) {
  return new Promise((resolve) => {
    openModal(`
      <div class="modal-header">
        <div>
          <p class="eyebrow">Please confirm</p>
          <h2>${title}</h2>
        </div>
        <button class="icon-button" type="button" data-close-modal>×</button>
      </div>
      <p>${message}</p>
      <div class="actions">
        <button class="${tone === 'danger' ? 'danger-button' : 'button'}" data-confirm-action>${confirmText}</button>
        <button class="secondary-button" data-close-modal>Cancel</button>
      </div>
    `);

    document.querySelector('[data-confirm-action]').addEventListener('click', () => {
      closeModal();
      resolve(true);
    });

    document.querySelector('#modalRoot').addEventListener('click', (event) => {
      if (event.target.matches('[data-close-modal]')) resolve(false);
    }, { once: true });
  });
}
