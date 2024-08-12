import { Slider } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/slider.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Slider } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/slider.tsx"

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


export function SliderDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} is_error={true}>
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
