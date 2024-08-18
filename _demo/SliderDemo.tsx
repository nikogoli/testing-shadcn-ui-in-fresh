import { Slider } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/slider.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Slider } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/slider.tsx"

export function SliderDemo() {
  return (
    <div class="w-[450px]">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        class="w-full"
      />
    </div>
  )
}
`

const info = {
  title: "Slider",
  text: "An input where the user selects a value from within a given range."
}

const has_error = {
  type: "mejor" as const,
  text: "The slider's Thumb does not apper."
}

export function SliderDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <div class="w-[450px]">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          class="w-full"
        />
      </div>
    </DemoWrapper>
  )
}
