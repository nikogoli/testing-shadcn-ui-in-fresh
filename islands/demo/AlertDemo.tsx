import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/alert-circle.tsx"

import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertVariants,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/alert.tsx"


import DemoWrapper from "../_DemoWrapper.tsx"
import WrapperSelect from "../_WrapperSelect.tsx"
import { useState } from "preact/hooks"


const Code = `
import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/alert-circle.tsx"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/alert.tsx"

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
  const defVari = AlertVariants.defaultVariants.variant
  const [actVariant, setVariant] = useState<keyof typeof AlertVariants["variants"]["variant"]>(defVari)
  const variNames = Object.keys(AlertVariants.variants.variant) as Array<typeof AlertVariants["defaultVariants"]["variant"]>
  
  return (
    <DemoWrapper code_text={Code.trim()} info={info}>
      <WrapperSelect {...{setVariant, variNames, defVari}} />
      <Alert class="h-fit" variant={actVariant}>
        <IconAlertCircle class="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </DemoWrapper>
  )
}
