export default defineAppConfig({
  ui: {
    colors: {
      amber: 'amber',
      // Base colors
      'brand-primary': 'var(--ui-primary)',
      'brand-accent-light': 'var(--ui-accent)',
      'brand-background': 'var(--ui-bg)',
      'brand-contrast-dark': 'var(--ui-contrast)',
      'brand-base': 'var(--ui-color-base)', // <-- agregado aquí

      // Primary scale
      'brand-primary-50': 'var(--ui-color-primary-50)',
      'brand-primary-100': 'var(--ui-color-primary-100)',
      'brand-primary-200': 'var(--ui-color-primary-200)',
      'brand-primary-300': 'var(--ui-color-primary-300)',
      'brand-primary-400': 'var(--ui-color-primary-400)',
      'brand-primary-500': 'var(--ui-color-primary-500)',
      'brand-primary-600': 'var(--ui-color-primary-600)',
      'brand-primary-700': 'var(--ui-color-primary-700)',
      'brand-primary-800': 'var(--ui-color-primary-800)',
      'brand-primary-900': 'var(--ui-color-primary-900)',
      'brand-primary-950': 'var(--ui-color-primary-950)',

      // Secondary scale
      'brand-secondary-50': 'var(--ui-color-secondary-50)',
      'brand-secondary-100': 'var(--ui-color-secondary-100)',
      'brand-secondary-200': 'var(--ui-color-secondary-200)',
      'brand-secondary-300': 'var(--ui-color-secondary-300)',
      'brand-secondary-400': 'var(--ui-color-secondary-400)',
      'brand-secondary-500': 'var(--ui-color-secondary-500)',
      'brand-secondary-600': 'var(--ui-color-secondary-600)',
      'brand-secondary-700': 'var(--ui-color-secondary-700)',
      'brand-secondary-800': 'var(--ui-color-secondary-800)',
      'brand-secondary-900': 'var(--ui-color-secondary-900)',
      'brand-secondary-950': 'var(--ui-color-secondary-950)',

      // Tertiary scale
      'brand-tertiary-50': 'var(--ui-color-tertiary-50)',
      'brand-tertiary-100': 'var(--ui-color-tertiary-100)',
      'brand-tertiary-200': 'var(--ui-color-tertiary-200)',
      'brand-tertiary-300': 'var(--ui-color-tertiary-300)',
      'brand-tertiary-400': 'var(--ui-color-tertiary-400)',
      'brand-tertiary-500': 'var(--ui-color-tertiary-500)',
      'brand-tertiary-600': 'var(--ui-color-tertiary-600)',
      'brand-tertiary-700': 'var(--ui-color-tertiary-700)',
      'brand-tertiary-800': 'var(--ui-color-tertiary-800)',
      'brand-tertiary-900': 'var(--ui-color-tertiary-900)',
      'brand-tertiary-950': 'var(--ui-color-tertiary-950)',

      // Neutral scale
      'brand-neutral-50': 'var(--ui-color-neutral-50)',
      'brand-neutral-100': 'var(--ui-color-neutral-100)',
      'brand-neutral-200': 'var(--ui-color-neutral-200)',
      'brand-neutral-300': 'var(--ui-color-neutral-300)',
      'brand-neutral-400': 'var(--ui-color-neutral-400)',
      'brand-neutral-500': 'var(--ui-color-neutral-500)',
      'brand-neutral-600': 'var(--ui-color-neutral-600)',
      'brand-neutral-700': 'var(--ui-color-neutral-700)',
      'brand-neutral-800': 'var(--ui-color-neutral-800)',
      'brand-neutral-900': 'var(--ui-color-neutral-900)',
      'brand-neutral-950': 'var(--ui-color-neutral-950)',
    },
    footer: {
      base: "relative bottom-0 mt-auto flex items-baseline justify-around h-20 gap-8 w-full",
    },
    button: {
      variants: {
        color: {
          base: "bg-primary text-white",
        },
        variant: {

          solid: "bg-primary"
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: {
            base: "text-white",
            trailingIcon: "text-white",
            leadingIcon: "text-white"
          },
        },
        {
          color: "neutral",
          variant: "solid",
          class: "text-black"
        }
      ],
    },
    navigationMenu: {
      slots: {
        list: 'flex gap-3',
        link: 'text-lg before:rounded-full'
      },
      variants: {
        active: {
          true: {
            link: 'bg-primary-100 rounded-full before:text-default',
            
          },
          false: {
          }
        },
        color: {
          neutral: {
            link: 'text-black',
            linkLeadingIcon: 'text-black'
          },
          onDark: {
            link: 'bg-accent text-white hover:text-black hover:bg-default rounded-full',
            linkLeadingIcon: 'text-white'
          }
        }
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "pill",
          class: {
            link: [
              'text-white hover:text-black transition-colors'
            ]
          }
        },
        {
          color: "onDark",
          variant: "pill",
          class: {
            link: [
              'text-white hover:text-black transition-colors'
            ],
            linkLeadingIcon: [
              'text-white group-hover:text-black',
              'transition-colors'
            ]
          }
        }
      ],
      defaultVariants: {
        variant: 'pill',
        color: 'neutral'
      }
    },
    carousel: {
      variants: {
        active: {
          true: {
            dot: 'data-[state=active]:bg-primary'
          },
          false: {
            dot: 'bg-primary'
          }
        }
      }
    }
  },
});
