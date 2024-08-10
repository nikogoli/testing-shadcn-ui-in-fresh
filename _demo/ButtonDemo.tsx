import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/button.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/button.tsx'

export const ButtonDemo = () => {
  return <Button>Button</Button>
}
`

export const ButtonDemo = () => {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <Button>Button</Button>
    </DemoWrapper>
)}