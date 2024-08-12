import { Toggle } from '../../testing_shadcn_ui_for_deno/components/toggle.tsx'

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
