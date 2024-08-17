import { Toggle } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/toggle.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
import { Toggle } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/toggle.tsx'

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <span class="i-lucide:bold flex h-4 w-4" />
    </Toggle>
  )
}

`

const info = {
  title: "Toggle",
  text: "A two-state button that can be either on or off."
}


export function ToggleDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <Toggle aria-label="Toggle italic">
        <span class="i-lucide:bold flex h-4 w-4" />
      </Toggle>
    </DemoWrapper>
  )
}
