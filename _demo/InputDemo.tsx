import { Input } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/input.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Input } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/input.tsx"

export function InputDemo() {
  return <Input type="email" placeholder="Email" class="w-90% max-w-450px" />
}
`

export function InputDemo() {
  return(
    <DemoWrapper code_text={Code.trim()}>
      <Input type="email" placeholder="Email" class="w-90% max-w-450px" />
    </DemoWrapper>
)}
