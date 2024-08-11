import { Slider } from "../../testing_shadcn_ui_for_deno/components/slider.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Slider } from "../../testing_shadcn_ui_for_deno/components/slider.tsx"
`


export function SliderDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} is_error={true}>
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
