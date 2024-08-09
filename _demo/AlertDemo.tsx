import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/alert-circle.tsx"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.3/components/alert.tsx"



const Code = `
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.3/components/alert.tsx"

export function AlertDemo() {
  return (
    <Alert>
      <IconAlertCircle class="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
`


export function AlertDemo() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-3">
        <div class="text-2xl">Preview</div>
        <Alert class="">
          <IconAlertCircle class="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
      <div class="flex flex-col gap-3">
        <div class="text-2xl">Code</div>
        <div class="bg-black py-4 px-6 rounded-xl flex flex-col gap-1 font-mono text-sm">
          {Code.trim().split("\n").map(tx => {
            return(<pre class="text-white">{tx == "" ? "　" : tx}</pre> )
          })}
        </div>
      </div>
    </div>
  )
}
