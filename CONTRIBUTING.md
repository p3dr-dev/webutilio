# Contributing to SLIT.IO

Thanks for your interest in contributing! This guide will help you get started.

## Table of Contents

- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Adding a New Tool](#adding-a-new-tool)
- [Code Style](#code-style)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or higher
- npm

### Getting Started

```bash
# Clone the repository
git clone https://github.com/p3dr-dev/webutilio.git
cd webutilio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `https://localhost:4321` (with self-signed SSL).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run check` | Run Astro type checking |
| `npm run test` | Run tests with Vitest |

## Project Structure

```
src/
├── assets/              # Logo images (black/white)
├── components/          # Reusable components
│   ├── Header.astro     # Site header with navigation
│   ├── Footer.astro     # Site footer
│   ├── SupportFab.astro # Floating support button
│   ├── ToolCard.astro   # Tool card for homepage grid
│   └── tools/           # Tool-specific components
│       ├── common/      # Shared components (LoadingSpinner, ErrorBoundary)
│       ├── converters/  # FileConverter, QrGenerator
│       ├── files/       # FileCompressor, FileDecompressor, FileEncryptor
│       ├── images/      # BackgroundRemover, ImageResizer, ExifExtractor
│       ├── media/       # MediaCompressor
│       └── text/        # WordCounter, JsonFormatter, HashGenerator
├── data/
│   └── tools.ts         # Tool registry (add new tools here)
├── i18n/                # Translations (en.json, pt.json)
├── layouts/
│   └── Layout.astro     # Main HTML layout
├── pages/               # Route pages
│   ├── [lang]/          # Dynamic language routes
│   ├── en/              # English pages
│   └── pt/              # Portuguese pages
├── utils/
│   └── format.ts        # Utility functions
└── workers/             # Web Workers (FFmpeg, compressor, encryptor)
```

## Adding a New Tool

### 1. Create the component

Create a new file in `src/components/tools/<category>/<ToolName>.tsx`:

```tsx
import React, { useState } from 'react';
import { useTranslations } from '../../../i18n/utils';

const ToolName: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const t = useTranslations(lang);
  // ... your tool logic
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
      {/* Your tool UI */}
    </div>
  );
};

export default ToolName;
```

### 2. Register the tool

Add the tool to `src/data/tools.ts`:

```ts
{
  id: 'toolName',
  icon: '🔧',
  category: 'converters', // or 'files', 'images', 'media', 'text'
  slugs: {
    pt: 'nome-da-ferramenta',
    en: 'tool-name'
  },
  keywords: ['keyword1', 'keyword2']
}
```

### 3. Add translations

Add the tool's translations to both `src/i18n/en.json` and `src/i18n/pt.json`:

```json
{
  "tools": {
    "toolName": {
      "title": "Tool Name",
      "description": "Tool description",
      "features": ["Feature 1", "Feature 2"],
      "faq": [
        { "q": "Question?", "a": "Answer" }
      ]
    }
  },
  "howItWorks": {
    "toolName": "How this tool works..."
  },
  "components": {
    "toolName": {
      "placeholder": "Enter text...",
      // ... component-specific translations
    }
  }
}
```

### 4. Test your tool

1. Run `npm run dev` and navigate to your tool's page
2. Verify both PT and EN versions work
3. Run `npm run check` to ensure no type errors
4. Run `npm run lint` to check code style

## Code Style

We use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code formatting.

- **React components**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **TypeScript**: Strict mode, no `any` when possible
- **Accessibility**: Always include `aria-label` on interactive elements

Run `npm run lint:fix` and `npm run format` before committing.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(tools): add new tool
fix(compressor): resolve memory leak
docs(readme): update contributing guide
refactor(header): simplify navigation logic
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes
4. Run checks: `npm run lint && npm run check`
5. Commit with a descriptive message
6. Push and create a Pull Request
7. Fill out the PR template

### PR Requirements

- [ ] Code passes `npm run lint` without errors
- [ ] Code passes `npm run check` without errors
- [ ] Both PT and EN translations are complete
- [ ] New tools include features, FAQ, and howItWorks translations
- [ ] Changes are tested locally

## Reporting Bugs

Use the [Bug Report](https://github.com/p3dr-dev/webutilio/issues/new?template=bug_report.yml) template when opening an issue.

Include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Questions?

Open a [Discussion](https://github.com/p3dr-dev/webutilio/discussions) or reach out via the [Feedback page](https://slitio.vercel.app/en/feedback).
