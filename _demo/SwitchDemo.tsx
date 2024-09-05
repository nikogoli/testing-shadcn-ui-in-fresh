import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx"
import { Switch } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/switch.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx"
import { Switch } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/switch.tsx"

export function SwitchDemo() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div class="flex items-center space-x-2">
        <Switch id="bluetooth-tethering" disabled />
        <Label htmlFor="bluetooth-tethering">Bluetooth Tethering</Label>
      </div>
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
      <div class="flex flex-col gap-4">
        <div class="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Switch id="bluetooth-tethering" disabled />
          <Label htmlFor="bluetooth-tethering">Bluetooth Tethering</Label>
        </div>
      </div>
    </DemoWrapper>
  )
}
