import test from 'node:test';
import assert from 'node:assert/strict';
import { formatBytes, fileExtension, escapeHtml } from '../src/utils/format.js';
import { createSlug } from '../src/utils/id.js';
import { sanitizeTags } from '../src/utils/validators.js';
import { detectPreviewType } from '../src/utils/file.js';

test('formatBytes formats common values', () => {
  assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(1024), '1 KB');
  assert.equal(formatBytes(1536), '1.5 KB');
});

test('fileExtension returns lower-case extension', () => {
  assert.equal(fileExtension('Photo.PNG'), 'png');
  assert.equal(fileExtension('README'), 'file');
});

test('sanitizeTags removes duplicates and empty values', () => {
  assert.deepEqual(sanitizeTags('js, UI, js, , css'), ['js', 'ui', 'css']);
});

test('createSlug creates clean slugs', () => {
  assert.equal(createSlug('Design Assets 2026!'), 'design-assets-2026');
});

test('detectPreviewType detects supported previews', () => {
  assert.equal(detectPreviewType({ name: 'main.js', type: 'text/javascript' }), 'text');
  assert.equal(detectPreviewType({ name: 'image.png', type: 'image/png' }), 'image');
  assert.equal(detectPreviewType({ name: 'doc.pdf', type: 'application/pdf' }), 'pdf');
});

test('escapeHtml escapes unsafe text', () => {
  assert.equal(escapeHtml('<script>'), '&lt;script&gt;');
});
