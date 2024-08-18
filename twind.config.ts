import { defineConfig, Preset } from "twind";
import * as colors from "https://esm.sh/@twind/preset-tailwind@1.1.4/colors"
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
    theme:{
      colors:{
        ...colors,
        background:'hsl(var(--background) / <alpha-value>)',
        foreground:'hsl(var(--foreground) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)'
      },
      extend: {
        keyframes: {
          "accordion-down": {
            '0%': { height: '0' },
            '100%': { height: 'var(--radix-accordion-content-height)' },
          },
          "accordion-up": {
            '0%': { height: 'var(--radix-accordion-content-height)' },
            '100%': { height: '0' },
          },
        },
        animation: {
          "accordion-down": 'accordion-down .2s ease-out',
          "accordion-up": 'accordion-up .2s ease-out'
        }
      }
    }
  }),
  selfURL: import.meta.url,
};