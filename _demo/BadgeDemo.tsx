import { Badge, badgeVariants } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/badge.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"
import WrapperSelect from "./_WrapperSelect.tsx"
import { useState } from "preact/hooks"


const Code = `
import { Badge } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/badge.tsx"

export function BadgeDemo() {
  return (<Badge variant="default">Badge</Badge>)
}
`

const info = {
  title: "Badge",
  text: "Displays a badge or a component that looks like a badge."
}


export function BadgeDemo() {
  const defVari = badgeVariants.defaultVariants.variant
  const [actVariant, setVariant] = useState<keyof typeof badgeVariants["variants"]["variant"]>(defVari)
  const variNames = Object.keys(badgeVariants.variants.variant) as Array<typeof badgeVariants["defaultVariants"]["variant"]>
  return(
    <DemoWrapper code_text={Code.trim()} info={info} >
      <WrapperSelect {...{setVariant, variNames, defVari}} />
      <Badge variant={actVariant}>Badge</Badge>
    </DemoWrapper>
)}