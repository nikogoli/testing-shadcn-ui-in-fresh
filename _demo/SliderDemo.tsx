import { signal } from "@preact/signals"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Slider } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/slider.tsx"
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


export function SliderDemo() {
  const createComp = async () => {
    const { Slider } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/slider.tsx")

    const Demo = () => {
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
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
