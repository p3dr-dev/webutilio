# Changelog

All notable changes to SLIT.IO will be documented in this file.

## [Unreleased]

### Added
- MIT License
- CONTRIBUTING.md with full contribution guide
- GitHub Actions CI (lint + check + build)
- Issue templates (bug report, feature request)
- Pull request template
- SupportFab floating button (Ko-fi, PIX, PayPal)
- Improved footer with 3-column layout and support CTA
- Tool page support CTA card
- Privacy Policy page (PT/EN)
- About page (PT/EN)
- apple-touch-icon for iOS
- Structured data (JSON-LD WebPage) on support/about/privacy pages
- OG meta tags: og:locale, og:site_name, og:image dimensions
- LanguageSwitcher aria-current="page"
- Accessibility: aria-labels on tool inputs, skip-to-content link
- 192x192 icon for PWA

### Fixed
- Header nav links missing language prefix (`/${lang}/`)
- LanguageSwitcher slug mapping for static pages
- Tool page 404 returns real 404 status
- ErrorBoundary wrapping lazy-loaded tools
- CSP: added base-uri and form-action directives
- COEP header removed (broke BackgroundRemover)
- BackgroundRemover originalUrl memory leak
- MediaCompressor PNG transparency preserved
- DonationOptions QR alt text internationalized
- WordCounter trailing space fix
- HashGenerator error cleared on typing
- VercelAnalytics/SpeedInsights warn instead of throw
- PWA manifest id corrected, maskable icon fixed
- x-default hreflang points to EN
- FeedbackForm 5s rate limiting
- All console.error/log removed from production code
- ESLint: process defined for .mjs files, media-has-caption, exhaustive-deps

### Changed
- EN support page slug renamed from `apoie.astro` to `support.astro`
- README.md completely rewritten with badges, tool table, stack info

## [0.0.1] - 2025-01-01

### Added
- Initial release with 12 client-side tools
- i18n support (PT/EN)
- PWA with offline support
- Vercel deployment
