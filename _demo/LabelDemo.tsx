import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/checkbox.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/label.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/checkbox.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/label.tsx"

export function LabelDemo() {
  return (
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" class="cursor-pointer">{"Accept terms and conditions"}</Label>
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
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" class="cursor-pointer">Accept terms and conditions</Label>
      </div>
    </DemoWrapper>
  )
}
