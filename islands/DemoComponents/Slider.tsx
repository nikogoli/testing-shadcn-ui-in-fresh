import { cn } from "../../lib/utils.ts"
import { Slider } from "../../_bundled/ui/slider.js"


export function SliderDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      class={cn("w-[60%]")}
    />
  )
}
