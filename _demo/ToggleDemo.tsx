import { Toggle } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/toggle.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
`


export function ToggleDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <Toggle aria-label="Toggle italic">
        <span class="i-lucide:bold flex h-4 w-4" />
      </Toggle>
    </DemoWrapper>
  )
}
