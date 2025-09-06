export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: '/assets/icons'
    }]
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "nuxt-aos",
    "nuxt-lottie",
    "motion-v/nuxt"
  ],
  pages: true,

  app: {
    head: {
      title: "Japonizando América",
      htmlAttrs: {
        lang: "es",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in", // default
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // default
    },
  },

  ui: {
    colorMode: false,
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'info',
        'error',
        'amber',
        'onDark'
      ]
    }
  },

  lottie: {
    componentName: 'Lottie', // Optional: Customize the component name
    lottieFolder: '/assets/lottie', // Optional: Customize the Lottie folder path
    autoFolderCreation: true, // Optional: Auto create lottie folder (default: true)
    enableLogs: true // Optional: Enable console logs from module (default: true)
  }
});