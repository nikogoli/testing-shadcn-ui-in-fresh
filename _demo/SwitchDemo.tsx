import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/label.tsx"
import { Switch } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/switch.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/label.tsx"
import { Switch } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/switch.tsx"

export function SwitchDemo() {
  return (
    <div class="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
`

const info = {
  title: "Switch",
  text: "A control that allows the user to toggle between checked and not checked."
}


export function SwitchDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </DemoWrapper>
  )
}
