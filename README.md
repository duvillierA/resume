# Resume App Codebase

This project is a modern resume web app built with React, TypeScript, and Vite. It is structured for modularity, maintainability, and SEO best practices.

## Project Structure

```
app/
├── public/                # Static assets (images, favicon, etc.)
├── src/                   # Main source code
│   ├── components/        # Reusable React components
│   │   ├── common/        # Shared utilities/components (e.g., Microdata)
│   │   ├── Print/         # Print-specific components (e.g., PageBreak)
│   │   └── ...            # Resume sections (Header, ContactInfo, etc.)
│   ├── data/              # Resume content and structured data
│   │   ├── profile.json   # Main profile (schema.org Person JSON-LD)
│   │   └── *.md            # Experience, skills, education, etc.
│   ├── lib/               # Utility libraries (date, link, class helpers)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── App.css            # Global styles
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
└── ...                    # Config files (Vite, TypeScript, ESLint)
```

## Key Concepts

### 1. **Schema.org Person Microdata**
- The file `src/data/profile.json` contains your profile as a [schema.org Person](https://schema.org/Person) in JSON-LD format.
- This enables rich search engine results and better SEO.
- Example fields: `name`, `jobTitle`, `address`, `worksFor`, `sameAs` (social links), etc.

### 2. **Microdata Injection**
- The `Microdata` component (`src/components/common/Microdata.tsx`) injects the JSON-LD from `profile.json` into the page as a `<script type="application/ld+json">` tag.
- The `Header` component imports and uses this microdata, ensuring your profile is discoverable by search engines.

### 3. **Content Organization**
- All resume content (experience, skills, education, etc.) is stored in Markdown or JSON files in `src/data/` for easy editing and localization.
- Components in `src/components/` are organized by function and reusability. Common utilities are in `common/`, and print-specific logic is in `Print/`.
- Utility functions (date formatting, class helpers, etc.) are in `src/lib/`.

## Development

- **Install dependencies:**
  ```bash
  npm install
  ```
- **Run the dev server:**
  ```bash
  npm run dev
  ```
- **Build for production:**
  ```bash
  npm run build
  ```

## Customization
- Update `src/data/profile.json` with your own information.
- Add or edit content in `src/data/` for your experience, skills, etc.
- Customize components or styles as needed.

---

For more details, see the inline comments in each file or open an issue for help.
