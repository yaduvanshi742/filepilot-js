<div align="center">
  
# FilePilot JS

**A local-first JavaScript file organizer for previewing, tagging, searching, and managing browser-based file collections.**

FilePilot JS helps users import local files, preview supported formats, organize files into collections, add tags and notes, detect duplicates, and manage file metadata directly in the browser.

</div>

---

## Overview

FilePilot JS is a modern browser-based file organization workspace built with HTML, CSS, and JavaScript.

It is designed for users who want a simple, private, and lightweight way to organize local files without uploading them to a server. The app stores file metadata and supported file data inside the browser using IndexedDB, making it useful for personal file management, quick previews, collection building, and offline organization.

The project is built as a major frontend JavaScript application with a modular folder structure, clean UI, IndexedDB storage, PWA support, offline caching, tests, documentation, and deployment-ready static files.

---

## Why FilePilot JS?

Managing files across folders, downloads, screenshots, notes, and code files can get messy quickly. FilePilot JS gives users a clean browser workspace where they can import files, organize them visually, add useful metadata, and find them later through search, tags, and collections.

It is not a cloud file manager. It is a local-first browser app where the user stays in control of their data.

---

## Features

### Local File Import

- Import files from your device
- Store file metadata locally
- Save supported file content for preview
- Track file name, type, size, date, tags, notes, and collection
- Keep everything inside the browser workspace

### File Preview

Preview supported file types directly inside the app.

Supported previews include:

- Images
- Text files
- JSON files
- HTML files
- CSS files
- JavaScript files
- Markdown-like text files
- General code/text-based files

### Collections

- Create file collections
- Organize files by project, topic, type, or purpose
- Move files between collections
- View collection-based file counts
- Keep related files grouped together

### Tags and Notes

- Add tags to files
- Add personal notes to files
- Search files by tags or notes
- Mark important files as favorites
- Build a useful local file reference system

### Search and Filters

- Search files by name
- Filter by file type
- Filter by collection
- Filter by tags
- Find favorite files quickly
- Locate recently imported files faster

### Duplicate Detection

- Uses file hashing to detect duplicate files
- Helps reduce repeated imports
- Shows duplicate warnings
- Keeps the workspace cleaner

### Dashboard

- View total files
- View total collections
- View favorite files
- View duplicate count
- See recent activity
- Understand workspace usage at a glance

### Backup and Restore

- Export workspace metadata as JSON
- Import previous workspace backups
- Keep a copy of organized file data
- Restore workspace structure when needed

### Offline Support

- Includes a service worker
- Supports offline access after the first load
- Can work as a Progressive Web App
- Designed for static hosting platforms

### Theme Support

- Light mode
- Dark mode
- Persistent theme preference
- Clean responsive interface

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | App structure |
| CSS3 | Layout, styling, responsiveness, and UI design |
| JavaScript | Application logic and browser interactions |
| IndexedDB | Local database for files, collections, tags, notes, and settings |
| Web Crypto API | File hash generation for duplicate detection |
| Service Worker | Offline support and asset caching |
| Web App Manifest | PWA install support |
| Local Browser APIs | File reading, storage, import, export, and preview handling |

---

## Project Structure

```text
filepilot-js/
├── index.html
├── package.json
├── manifest.json
├── service-worker.js
├── README.md
├── .gitignore
├── public/
│   └── icons/
├── src/
│   ├── app/
│   ├── config/
│   ├── core/
│   ├── data/
│   ├── features/
│   │   ├── backup/
│   │   ├── collections/
│   │   ├── dashboard/
│   │   ├── files/
│   │   ├── search/
│   │   ├── settings/
│   │   └── tags/
│   ├── styles/
│   ├── ui/
│   └── utils/
├── docs/
├── scripts/
└── tests/
```

---

## Folder Explanation

| Folder | Purpose |
|---|---|
| `src/app` | Main app initialization and layout setup |
| `src/config` | App constants, defaults, and configuration |
| `src/core` | Shared state, routing, and core app logic |
| `src/data` | IndexedDB setup and repository functions |
| `src/features` | Main feature modules of the app |
| `src/features/files` | File import, preview, metadata, and file actions |
| `src/features/collections` | Collection creation and file grouping |
| `src/features/tags` | Tag handling and tag-based organization |
| `src/features/search` | Search and filtering logic |
| `src/features/backup` | JSON export and import tools |
| `src/features/dashboard` | Workspace stats and activity overview |
| `src/features/settings` | Theme, reset, and user preferences |
| `src/styles` | CSS files split by base, layout, components, views, and responsive rules |
| `src/ui` | Reusable UI components |
| `src/utils` | Helper functions used across the project |
| `docs` | Project documentation |
| `scripts` | Utility scripts for checks and development |
| `tests` | Test files for app logic and utilities |
| `public` | Public static assets |

---

## Getting Started

FilePilot JS is a frontend-only project. It does not require a backend, database server, authentication system, or cloud storage.

### Clone the Repository

```bash
git clone https://github.com/yaduvanshi742/filepilot-js.git
cd filepilot-js
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

After running the local server, open the provided local URL in your browser.

You can also open `index.html` directly, but using a local server is recommended for service worker, PWA, and module-based browser behavior.

---

## Available Scripts

```bash
npm run dev
```

Starts a local development server.

```bash
npm run check
```

Checks JavaScript files for syntax errors.

```bash
npm test
```

Runs the included test files.

---

## Usage Guide

### Import Files

Use the import option to select files from your device. FilePilot JS reads the selected files and stores useful metadata such as name, size, type, tags, notes, favorite status, collection, and hash.

### Preview Files

Open a file from the workspace to preview supported content. Images and text-based files can be viewed directly inside the app.

### Create Collections

Use collections to group files by project, topic, category, or workflow. For example:

- Web Assets
- JavaScript Notes
- Screenshots
- Documents
- Project Files
- Design References

### Add Tags

Tags help organize files across collections. A file can be part of one collection but still have multiple tags for faster searching.

Example tags:

- important
- reference
- image
- code
- client
- personal
- archive

### Add Notes

Notes can be used to describe why a file was saved, what it contains, where it came from, or how it should be used later.

### Detect Duplicates

When files are imported, FilePilot JS can create a hash for duplicate detection. If a duplicate is found, the app can warn the user before adding repeated content.

### Export Backup

Use the backup feature to export workspace data as a JSON file. This is useful before clearing browser storage or moving to another browser.

### Import Backup

Use the import feature to restore a previous FilePilot JS workspace backup.

---

## Data Storage

FilePilot JS uses IndexedDB to store local workspace data in the browser.

The app may store:

- File metadata
- File preview data for supported files
- Collection details
- Tags
- Notes
- Favorite status
- Hash values for duplicate detection
- Workspace settings
- Activity data

Because the app is local-first, data stays inside the browser where it was created.

---

## Important Storage Notes

FilePilot JS does not upload files to a server.

However, browser storage is still controlled by the browser. Clearing site data, resetting the browser, or using cleanup tools may remove saved workspace data.

For safety:

- Export backups regularly
- Keep important original files outside the browser
- Do not treat browser storage as the only copy of important files
- Use the backup feature before resetting workspace data

---

## Privacy

FilePilot JS is designed around local-first usage.

- No login is required
- No backend server is required
- No cloud upload is required
- File metadata is stored locally
- Workspace data stays in the browser
- The app can run on static hosting

This makes it useful for personal file organization without depending on external services.

---

## Offline and PWA Support

FilePilot JS includes a web app manifest and service worker.

After the app loads once, supported browsers can cache the main files and allow the app to open again offline.

For the best PWA experience, deploy it on HTTPS. GitHub Pages, Netlify, Vercel, and Cloudflare Pages provide HTTPS by default.

---

## Deployment

FilePilot JS is a static frontend project, so it can be deployed easily.

Good deployment options:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Firebase Hosting

### Deploy on GitHub Pages

1. Push the project to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch.
6. Select the root folder.
7. Save the settings.

Your site will be available at:

```text
https://yaduvanshi742.github.io/filepilot-js/
```

---

## Documentation

More details are available inside the `docs` folder.

| File | Description |
|---|---|
| `docs/ARCHITECTURE.md` | Explains the project structure and app architecture |
| `docs/DEPLOYMENT.md` | Explains how to deploy the project |
| `docs/FEATURES.md` | Explains the main features in detail |

---

## Code Quality

FilePilot JS is structured as a major JavaScript project instead of a single-file demo.

It includes:

- Modular JavaScript architecture
- Feature-based folders
- Separate data layer
- Reusable utilities
- Organized CSS files
- Tests folder
- Syntax check script
- Documentation folder
- PWA-ready files
- Clean deployment structure

---

## Browser Support

FilePilot JS works best in modern browsers that support IndexedDB, service workers, JavaScript modules, FileReader, and modern CSS.

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Firefox
- Brave
- Safari

---

## Best Use Cases

FilePilot JS is useful for organizing:

- Screenshots
- Code files
- Text notes
- JSON files
- Frontend assets
- Design references
- Small documents
- Project files
- Learning materials
- Personal file collections

---

## Limitations

FilePilot JS is a local-first browser app, so it has some natural limitations.

- It does not sync data between devices automatically
- It does not replace full desktop file managers
- It does not upload files to cloud storage
- Very large files may depend on browser storage limits
- Clearing browser site data may remove saved workspace data
- Some advanced file system features depend on browser support

These limitations are intentional because the project focuses on privacy, simplicity, and static deployment.

---

## Future Improvements

Possible future upgrades:

- Drag and drop file import
- Advanced file type preview
- PDF preview
- Audio and video preview
- File rename tools
- Collection cover colors
- Bulk file actions
- Smart duplicate grouping
- File size analytics
- Advanced search operators
- PWA install prompt
- Export selected collection
- Cloud sync option
- File System Access API support
- Workspace encryption
- More test coverage

---

## Author

**Yadhuvanshi**

JavaScript Developer building useful, practical, and local-first web projects.

GitHub: [@yaduvanshi742](https://github.com/yaduvanshi742)

---

## Final Note

FilePilot JS is built to be more than a basic file preview demo. It is a local-first browser workspace for importing, previewing, tagging, searching, organizing, and backing up file metadata in a clean JavaScript application.
