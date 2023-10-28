import { cn } from "../lib/utils.ts"
import { Slider } from "../components/ui/slider.tsx"


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
