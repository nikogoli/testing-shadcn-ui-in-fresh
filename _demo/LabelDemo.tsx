import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/checkbox.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/label.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/checkbox.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/label.tsx"

export function LabelDemo() {
  return (
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" class="cursor-pointer">{"Accept terms and conditions"}</Label>
    </div>
  )
}
`

export function LabelDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" class="cursor-pointer">Accept terms and conditions</Label>
      </div>
    </DemoWrapper>
  )
}
