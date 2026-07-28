import { MAX_TEXT_PREVIEW_BYTES, PREVIEW_GROUPS } from '../config/constants.js';
import { fileExtension } from './format.js';

export function detectPreviewType(fileLike = {}) {
  const type = String(fileLike.type || '').toLowerCase();
  const extension = fileExtension(fileLike.name || '');

  if (PREVIEW_GROUPS.image.includes(type) || ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(extension)) {
    return 'image';
  }

  if (
    PREVIEW_GROUPS.text.includes(type) ||
    ['txt', 'md', 'html', 'css', 'js', 'mjs', 'json', 'xml', 'csv', 'log'].includes(extension)
  ) {
    return 'text';
  }

  if (type === 'application/pdf' || extension === 'pdf') return 'pdf';
  return 'unsupported';
}

export async function checksumFile(file) {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  return [...new Uint8Array(hashBuffer)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Unable to read file as data URL.'));
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

export function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    if (file.size > MAX_TEXT_PREVIEW_BYTES) {
      resolve('This file is too large for inline text preview. Export or open it with a dedicated editor.');
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Unable to read file as text.'));
    reader.onload = () => resolve(String(reader.result || ''));
    reader.readAsText(file);
  });
}
