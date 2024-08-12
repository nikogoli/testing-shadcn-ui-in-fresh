import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/button.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/button.tsx'

export const ButtonDemo = () => {
  return <Button>Button</Button>
}
`

const info = {
  title: "Button",
  text: "Displays a button or a component that looks like a button."
}


export const ButtonDemo = () => {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <Button>Button</Button>
    </DemoWrapper>
)}