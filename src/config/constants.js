export const APP_NAME = 'FilePilot JS';
export const DB_NAME = 'filepilot-js-db';
export const DB_VERSION = 1;

export const STORE_NAMES = {
  files: 'files',
  collections: 'collections',
  settings: 'settings',
  activity: 'activity'
};

export const DEFAULT_COLLECTIONS = [
  {
    name: 'General',
    description: 'Default collection for imported files.',
    color: '#2563eb'
  },
  {
    name: 'Code References',
    description: 'JavaScript, CSS, HTML, JSON, and text-based developer files.',
    color: '#06b6d4'
  },
  {
    name: 'Design Assets',
    description: 'Images, icons, screenshots, and visual references.',
    color: '#8b5cf6'
  }
];

export const PREVIEW_GROUPS = {
  image: ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'],
  text: [
    'text/plain',
    'text/markdown',
    'text/html',
    'text/css',
    'text/javascript',
    'application/javascript',
    'application/json',
    'application/xml',
    'text/xml'
  ]
};

export const MAX_TEXT_PREVIEW_BYTES = 1024 * 350;
