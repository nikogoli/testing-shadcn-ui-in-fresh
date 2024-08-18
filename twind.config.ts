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
      }
    }
  }),
  selfURL: import.meta.url,
};