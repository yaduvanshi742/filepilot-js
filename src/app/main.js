import { bootApp } from './app.js';

bootApp().catch((error) => {
  console.error(error);
  document.querySelector('#viewRoot').innerHTML = `
    <section class="panel">
      <p class="eyebrow">Startup error</p>
      <h1>FilePilot could not start</h1>
      <p>Please refresh the page. If the issue continues, check whether IndexedDB is enabled in your browser.</p>
    </section>
  `;
});
