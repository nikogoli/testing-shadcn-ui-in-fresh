import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/label.tsx"
import { RadioGroup, RadioGroupItem } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/radio-group.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/label.tsx"
import { RadioGroup, RadioGroupItem } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/radio-group.tsx"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}
`

const info = {
  title: "Radio Group",
  text: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
}


export function RadioGroupDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <RadioGroup defaultValue="comfortable">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </DemoWrapper>
  )
}
