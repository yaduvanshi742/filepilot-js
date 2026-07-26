import { fileExtension } from '../utils/format.js';

const iconMap = {
  png: 'IMG',
  jpg: 'IMG',
  jpeg: 'IMG',
  webp: 'IMG',
  gif: 'GIF',
  svg: 'SVG',
  js: 'JS',
  mjs: 'JS',
  css: 'CSS',
  html: 'HTML',
  json: 'JSON',
  md: 'MD',
  txt: 'TXT',
  pdf: 'PDF'
};

export function fileIcon(name) {
  return iconMap[fileExtension(name)] || 'FILE';
}
