import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/alert-circle.tsx"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.3/components/alert.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.3/components/alert.tsx"

export function AlertDemo() {
  return (
    <Alert class="h-fit">
      <IconAlertCircle class="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {"Your session has expired. Please log in again."}
      </AlertDescription>
    </Alert>
  )
}
`


export function AlertDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <Alert class="h-fit">
        <IconAlertCircle class="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </DemoWrapper>
  )
}
