import { Fragment } from "preact"
import { useState } from "preact/hooks"
import DemoWrapper from "./_DemoWrapper.tsx"
import WrapperSelect from "./_WrapperSelect.tsx"


const Code = `
import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/alert-circle.tsx"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/alert.tsx"

export function AlertDemo() {
  return (
    <Alert class="h-fit" variant="destructive">
      <IconAlertCircle class="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
`

const info = {
  title: "Alert",
  text: "Displays a callout for user attention."
}


export function AlertDemo() {
  async function createComp(){
    const { default: IconAlertCircle } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/alert-circle.tsx")
    const {
      Alert,
      AlertDescription,
      AlertTitle,
      AlertVariants
    } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/alert.tsx")

    const Demo = () => {
      const [actVariant, setVariant] = useState<typeof AlertVariants["defaultVariants"]["variant"]>("destructive")
      const defVari = AlertVariants.defaultVariants.variant
      const variNames = Object.keys(AlertVariants.variants.variant) as Array<typeof AlertVariants["defaultVariants"]["variant"]>
    
      return (
        <Fragment>
          <WrapperSelect {...{setVariant, variNames, defVari}} />
          <Alert class="h-fit" variant={actVariant}>
            <IconAlertCircle class="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </Fragment>
      )
    }
    return Demo    
  }
  
  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
