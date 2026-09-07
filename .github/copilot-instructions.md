
# AI Agent Instructions: Learning Notes App

## 1. Project Structure & Purpose
- **Type:** React + Vite SPA for interactive learning and documentation.
- **Key Folders:**
  - `src/`: React components, context, data, and pages
  - `public/html/`: Static HTML docs, organized by topic/category
  - `public/images/`: Images for docs and UI

## 2. Core Architecture
- **Routing:** `react-router-dom` (see `src/App.jsx`)
- **Theme:** Global context in `src/context/ThemeContext.jsx` (light/dark, localStorage)
- **Docs Rendering:**
  - `DocumentationPage.jsx` loads HTML from `public/html/` by topic
  - Sidebar is built from `.sidebar-section` or `h2` tags in HTML
  - Code blocks get a copy button at runtime
- **Topics & Categories:**
  - Defined in `src/data/categories.js` and `src/data/allTopics.js`
  - Each topic points to a static HTML file

## 3. Developer Workflow
- **Start dev server:** `npm run dev` (http://localhost:5173)
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **No built-in tests** (add if needed)

## 4. Project Conventions
- **Component structure:**
  - Pages: `src/pages/`, Shared UI: `src/components/`
  - CSS module per component/page (e.g., `ComponentName.css`)
- **Data:**
  - Topic/category metadata is JS (not JSON)
- **Docs:**
  - Static HTML only (not Markdown)
  - Place new docs in correct `public/html/<Category>/` subfolder
- **No Redux/global state** (except Theme)

## 5. Integrations & Dependencies
- **Libraries:**
  - `react-syntax-highlighter` (code blocks)
  - `framer-motion` (animation)
  - `lucide-react` (icons)
- **Vite plugin:** `@vitejs/plugin-react` (see `vite.config.js`)

## 6. Example: Adding a Topic
1. Add HTML file to `public/html/<Category>/`
2. Update `src/data/categories.js` and/or `src/data/allTopics.js`
3. Topic appears in UI automatically

---
### AI Agent Guidance
- Always update both JS data and HTML files for topics
- Use CSS/component co-location
- Do not add Redux/global state unless requested
- Use ThemeContext for theme logic
- See `DocumentationPage.jsx` for doc rendering logic
