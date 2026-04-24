# Japonizando América Landing Page

![Logo del proyecto](public/images/client-logo-japan.png)

This is the landing page project for Japonizando América, built with Nuxt.js 4.x and Vue 3.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js +20 (Latest LTS version recommended)
- npm (comes with Node.js) or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/emmanuel-vandyk/jpnizing-landing.git
cd jpnizing-landing
```

2. Install dependencies:
```bash
# Using npm
npm install
```

## Development

To start the development server on `http://localhost:3000`:

```bash
# Using npm
npm run dev
```

## Building for Production

To build the application for production:

```bash
# Using npm
npm run build
```

To preview the production build:
```bash
# Using npm
npm run preview
```

## Project Structure

```
├── app.config.ts          # App configuration
├── app.vue               # Main app component
├── nuxt.config.ts        # Nuxt configuration
├── assets/               # Static assets (CSS, fonts, etc.)
├── components/           # Vue components
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   └── various sections...
├── content/             # Content files
├── interfaces/          # TypeScript interfaces
├── layouts/            # Layout components
├── pages/              # Application pages
└── public/             # Public static files
    ├── fonts/
    └── images/
```

## Features

- Built with Nuxt.js 4.x and Vue 3
- TypeScript support
- UI components from @nuxt/ui
- Content management with @nuxt/content
- Image optimization with @nuxt/image
- ESLint integration for code quality
- Page and layout transitions
- Responsive navigation menu
- Custom font integration (Inter font family)

## Dependencies

Main dependencies include:
- @nuxt/content: ^3.6.3
- @nuxt/ui: ^3.3.0
- @nuxt/image: ^1.11.0
- Vue: ^3.5.18
- TypeScript: ^5.9.2

## Contact

For more information, visit [Japonizando América](https://japonizandoamerica.com)

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
