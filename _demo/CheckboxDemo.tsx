import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/checkbox.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/checkbox.tsx"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {"Accept terms and conditions"}
      </label>
    </div>
  )
}
`

export function CheckboxDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowedpeer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </DemoWrapper>
  )
}
