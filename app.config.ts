export default defineAppConfig({
  ui: {
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
      white: "#f6f6f6",
      success: "#28a745",
      danger: "#dc3545",
      warning: "#ffc107",
      info: "#17a2b8",
      light: "#f8f9fa",
      dark: "#343a40",
    },
    card: {
      slots: {
        root: "rounded-lg overflow-hidden w-lg",
        header: "p-4 sm:px-6",
        body: "p-4 sm:p-6",
        footer: "p-4 sm:px-6",
      },
      variants: {
        variant: {
          solid: {
            root: "bg-inverted text-inverted",
          },
          outline: {
            root: "bg-white ring ring-default divide-y divide-default",
          },
          soft: {
            root: "bg-elevated/50 divide-y divide-default",
          },
          subtle: {
            root: "bg-elevated/50 ring ring-default divide-y divide-default",
          },
        },
      },
      defaultVariants: {
        variant: "outline",
      },
    },
    container: {
      base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 rounded-lg ",
    },

    navigationMenu: {
      slots: {
        root: "overflow-hidden w-lg",
      },
      variants: {
        highlight: {
          true: {
            indicator: "bg-white",
          },
        },
      },
      variant: {
        solid: {
          root: "bg-inverted text-inverted",
        },
        outline: {
          root: "bg-white ring ring-default divide-y divide-default",
        },
        soft: {
          root: "bg-elevated/50 divide-y divide-default",
        },
        subtle: {
          root: "bg-elevated/50 ring ring-default divide-y divide-default",
        },
        transparent: {
          root: "bg-transparent",
        },
      },
    },
    defaultVariants: {
      variant: "pill",
    },
  },
  footer: {
    base: "flex items-baseline justify-around h-20 gap-8 w-full",
  },
});
