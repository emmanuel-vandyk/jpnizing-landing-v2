export default defineAppConfig({
  ui: {
    colors: {
      amber: 'amber'
    },
    button: {
      variants: {
        color: {
          base: "bg-none",
          tertiary: "bg-fuchsia"
        },
      },
    },
    card: {
      slots: {
        root: "rounded-xl overflow-hidden",
        header: "p-4",
        body: "p-4",
        footer: "p-4",
      },
      variants: {
        variant: {
          olid: {
            root: "bg-white/10 backdrop-blur-sm border border-white/20",
          },
          outline: {
            root: "bg-white/5 backdrop-blur-sm border border-white/20",
          },
          soft: {
            root: "bg-white/5 backdrop-blur-sm",
          },
          subtle: {
            root: "bg-white/10 backdrop-blur-sm border border-white/20",
          },
        },
      },
      defaultVariants: {
        variant: "soft",
      },
    },
    container: {
      base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 rounded-lg ",
    },
    header: {
      base: "bg-gradient from-rose-400 via-orange-400 to-yellow-300"
    },
    footer: {
      base: "relative bottom-0 mt-auto flex items-baseline justify-around h-20 gap-8 w-full",
    },
    navigationMenu: {
      slots: {
        root: 'text-black',
        list: 'flex gap-3',
        linkLeadingIcon: 'bg-black',
        link: 'text-lg'
      },
      variants: {
        active: {
          true: {
            link: 'bg-rose-400 rounded-md',
            linkLeadingIcon: 'bg-white',
          },
          false: {
            link: 'text-black',
          }
        },
      },
      compoundVariants: [
        { 
          color: 'primary'
        }
      ],
      defaultVariants: {
        variant: 'pill'
      }
    },
  },
});
