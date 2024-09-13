import { Button, buttonVariants } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/button.tsx'

import DemoWrapper from "../_DemoWrapper.tsx"
import WrapperSelect from "../_WrapperSelect.tsx"
import { useState } from "preact/hooks"


const Code = `
import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/button.tsx'

export const ButtonDemo = () => {
  return (
    <div class="flex gap-3 items-center">
      <Button variant="default" size="lg">Button</Button>
      <Button variant="default" size="default">Button</Button>
      <Button variant="default" size="sm">Button</Button>
    </div>
  )
}
`

const info = {
  title: "Button",
  text: "Displays a button or a component that looks like a button."
}


export const ButtonDemo = () => {
  const defVari = buttonVariants.defaultVariants.variant
  const [actVariant, setVariant] = useState<keyof typeof buttonVariants["variants"]["variant"]>(defVari)
  const variNames = Object.keys(buttonVariants.variants.variant) as Array<typeof buttonVariants["defaultVariants"]["variant"]>
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <WrapperSelect {...{setVariant, variNames, defVari}} />
      <div class="flex gap-3 items-center">
        <Button variant={actVariant} size="lg">Button</Button>
        <Button variant={actVariant} size="default">Button</Button>
        <Button variant={actVariant} size="sm">Button</Button>
      </div>
    </DemoWrapper>
)}