import { Fragment } from "preact";
import DemoWrapper from "./_DemoWrapper.tsx"
import WrapperSelect from "./_WrapperSelect.tsx"
import { useState } from "preact/hooks"


const Code = `
import { Badge } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/badge.tsx"

export function BadgeDemo() {
  return (<Badge variant="default">Badge</Badge>)
}
`

const info = {
  title: "Badge",
  text: "Displays a badge or a component that looks like a badge."
}


export function BadgeDemo() {
  const createComp = async () => {
    const { Badge, badgeVariants } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/badge.tsx")

    const Demo = () => {
      const defVari = badgeVariants.defaultVariants.variant
      const [actVariant, setVariant] = useState<typeof badgeVariants["defaultVariants"]["variant"]>(defVari)
      const variNames = Object.keys(badgeVariants.variants.variant) as Array<typeof badgeVariants["defaultVariants"]["variant"]>
      
      return(
        <Fragment>
          <WrapperSelect {...{setVariant, variNames, defVari}} />
          <Badge variant={actVariant}>Badge</Badge>
        </Fragment>
      )
    }
    return Demo
  }

  return(
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
)}