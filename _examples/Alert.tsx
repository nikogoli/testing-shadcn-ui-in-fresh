import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/alert-circle.tsx"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert.tsx"

export function AlertDemo() {
  return (
    <Alert class="w-[40%]">
      <IconAlertCircle class="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
