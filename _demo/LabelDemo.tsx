import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/checkbox.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/label.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/checkbox.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/label.tsx"

export function LabelDemo() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" class="cursor-pointer">Accept terms and conditions</Label>
      </div>
      <div class="flex items-center space-x-2">
        <Checkbox id="not" disabled />
        <Label htmlFor="not" >Not Accept</Label>
      </div>
    </div>
  )
}
`

const info = {
  title: "Label",
  text: "Renders an accessible label associated with controls."
}



export function LabelDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <div class="flex flex-col gap-4">
        <div class="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" class="cursor-pointer">Accept terms and conditions</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox id="not" disabled />
          <Label htmlFor="not" >Not Accept</Label>
        </div>
      </div>
    </DemoWrapper>
  )
}
