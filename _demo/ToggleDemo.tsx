import DemoWrapper from "./_DemoWrapper.tsx"
import WrapperSelect from "./_WrapperSelect.tsx"
import { useState } from "preact/hooks"
import { Fragment } from "preact"


const Code = `
import { Toggle } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/toggle.tsx'

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic" variant="default">
      <IconBold class="h-4 w-4" />
    </Toggle>
  )
}

`

const info = {
  title: "Toggle",
  text: "A two-state button that can be either on or off."
}


export function ToggleDemo() {
  const createComp = async () => {
    const {
      Toggle,
      toggleVariants,
    } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/toggle.tsx')
    const { default: IconBold } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/bold.tsx")
  
    const Demo = () => {
      const defVari = toggleVariants.defaultVariants.variant
      const [actVariant, setVariant] = useState<typeof toggleVariants["defaultVariants"]["variant"]>(defVari)
      const variNames = Object.keys(toggleVariants.variants.variant) as Array<typeof toggleVariants["defaultVariants"]["variant"]>
      return (
        <Fragment>
          <WrapperSelect {...{setVariant, variNames, defVari}} />
          <Toggle aria-label="Toggle italic" variant={actVariant}>
            <IconBold class="h-4 w-4" />
          </Toggle>
        </Fragment>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
