import { Slider } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/slider.tsx"
import { signal } from "@preact/signals"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Slider } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/slider.tsx"
import { signal } from "@preact/signals"

export function SliderDemo() {
  const val_sig = signal(50)
  return (
    <div class="flex gap-4 items-center">
      <div class="w-[450px]">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          class="w-full"
          onValueChange={val => val_sig.value = val[0]}
        />
      </div>
      <div class="w-6 border-b-2 border-black">
        <span class="text-xl font-bold">{val_sig}</span> 
      </div>
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
  const val_sig = signal(50)
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <div class="flex gap-4 items-center">
        <div class="w-[450px]">
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            class="w-full"
            onValueChange={val => val_sig.value = val[0]}
          />
        </div>
        <div class="w-6 border-b-2 border-black">
          <span class="text-xl font-bold">{val_sig}</span> 
        </div>
      </div>
    </DemoWrapper>
  )
}
