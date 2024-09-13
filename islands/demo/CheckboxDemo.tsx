import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/checkbox.tsx"

import DemoWrapper from "../_DemoWrapper.tsx"


const Code = `
import { Checkbox } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/checkbox.tsx"

export function CheckboxDemo() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms" class="text-sm font-medium leading-none">
          Accept terms and conditions
        </label>
      </div>
      <div class="flex items-center space-x-2">
        <Checkbox id="not" disabled />
        <label htmlFor="not" class="text-sm font-medium leading-none">
          Disabled
        </label>
      </div>
    </div>
  )
}
`

const info = {
  title: "Checkbox",
  text: "A control that allows the user to toggle between checked and not checked."
}


export function CheckboxDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <div class="flex flex-col gap-4">
        <div class="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" class="text-sm font-medium leading-none">
            Accept terms and conditions
          </label>
        </div>
        <div class="flex items-center space-x-2">
          <Checkbox id="not" disabled />
          <label htmlFor="not" class="text-sm font-medium leading-none">
            Disabled
          </label>
        </div>
      </div>
    </DemoWrapper>
  )
}
