import { Badge, badgeVariants } from "../../testing_shadcn_ui_for_deno/components/badge.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"
import WrapperSelect from "./_WrapperSelect.tsx"
import { useState } from "preact/hooks"


const Code = `
import { Badge } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/badge.tsx"

export function BadgeDemo() {
  return <Badge variant="default">Badge</Badge>
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