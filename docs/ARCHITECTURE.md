# Architecture

FilePilot JS uses a modular vanilla JavaScript architecture. The app is split by responsibility instead of keeping all logic inside one large file.

## Main Layers

- `src/app`: bootstraps the application and renders the active view.
- `src/core`: global state, event bus, and hash-based routing.
- `src/data`: IndexedDB setup and repository helpers.
- `src/features`: feature-specific modules such as files, collections, backup, dashboard, search, tags, and settings.
- `src/ui`: reusable UI helpers such as toast, modal, icons, and empty states.
- `src/utils`: pure helper functions for formatting, validation, IDs, dates, file previews, and debounce logic.
- `src/styles`: CSS split by base styles, layout, components, views, and responsive rules.

## Data Flow

1. The app starts in `src/app/main.js`.
2. `bootApp()` loads collections, files, activity, and settings from IndexedDB.
3. State updates trigger a `state:changed` event.
4. The current route decides which view is rendered.
5. Feature modules bind their own events after rendering.
6. Data changes are saved through repositories.

## Storage

IndexedDB stores:

- Files
- Collections
- Settings
- Activity timeline

Files are saved with metadata, tags, notes, checksums, preview content, and image data URLs when supported.
