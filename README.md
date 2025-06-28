# Resume App Codebase

This project is a modern resume web app built with React, TypeScript, and Vite. It is structured for modularity, maintainability, and SEO best practices.

[View the live version](https://resume-rosy-one-38.vercel.app/)

## Project Structure

```
app/
├── public/                # Static assets (images, favicon, etc.)
├── src/                   # Main source code
│   ├── components/        # Reusable React components
│   │   ├── common/        # Shared utilities/components (Markdown, Microdata, date)
│   │   ├── Print/         # Print-specific components (PageBreak)
│   │   ├── Avatar.tsx     # Profile avatar component
│   │   ├── ContactInfo.tsx# Contact details section
│   │   ├── ExperienceItem.tsx # Work experience item
│   │   ├── Header.tsx     # Resume header (uses Microdata)
│   │   └── Section.tsx    # Generic section wrapper
│   ├── data/              # Resume content and structured data
│   │   ├── profile.ts     # Main profile (schema.org Person JSON-LD, TypeScript)
│   │   ├── professionalExperience.json # Work experience
│   │   ├── coreSkills.md  # Core skills
│   │   ├── languages.md   # Languages
│   │   ├── education.md   # Education
│   │   ├── leadershipCollaboration.md # Leadership & collaboration
│   │   ├── technicalHighlights.md # Technical highlights
│   │   └── summary.md     # Profile summary
│   ├── lib/               # Utility libraries (date, link, class helpers)
│   │   ├── class.ts
│   │   ├── date.ts
│   │   └── link.ts
│   ├── config/            # App configuration
│   │   └── env/           # Environment variables (index.ts)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   ├── App.css            # Global styles
│   └── vite-env.d.ts      # Vite/TypeScript env types
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
└── ...                    # Config files (Vite, TypeScript, ESLint)
```

## Key Concepts

### 1. **Schema.org Person Microdata**
- The file `src/data/profile.ts` contains your profile as a [schema.org Person](https://schema.org/Person) in JSON-LD format (TypeScript export).
- This enables rich search engine results and better SEO.
- Example fields: `name`, `jobTitle`, `address`, `worksFor`, `sameAs` (social links), etc.

### 2. **Microdata Injection**
- The `Microdata` component (`src/components/common/Microdata.tsx`) injects the JSON-LD from `profile.ts` into the page as a `<script type="application/ld+json">` tag.
- The `Header` component imports and uses this microdata, ensuring your profile is discoverable by search engines.

### 3. **Content Organization**
- All resume content (experience, skills, education, etc.) is stored in Markdown or JSON files in `src/data/` for easy editing and localization.
- Components in `src/components/` are organized by function and reusability. Common utilities are in `common/`, and print-specific logic is in `Print/`.
- Utility functions (date formatting, class helpers, etc.) are in `src/lib/`.
- App configuration and environment variables are in `src/config/`.

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
- Update `src/data/profile.ts` with your own information.
- Add or edit content in `src/data/` for your experience, skills, etc.
- Customize components or styles as needed.

---

For more details, see the inline comments in each file or open an issue for help.
