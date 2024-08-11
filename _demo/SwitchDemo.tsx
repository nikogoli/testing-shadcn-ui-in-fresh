import { Label } from "../../testing_shadcn_ui_for_deno/components/label.tsx"
import { Switch } from "../../testing_shadcn_ui_for_deno/components/switch.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
`

export function SwitchDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </DemoWrapper>
    
  )
}
