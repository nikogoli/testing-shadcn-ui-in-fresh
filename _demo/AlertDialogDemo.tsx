import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/alert-dialog.tsx'
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
`

const info = {
  title: "Alert Dialog",
  text: "A modal dialog that interrupts the user with important content and expects a response."
}


export function AlertDialogDemo() {
  const createComp = async () => {
    const {
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
    } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/alert-dialog.tsx')
    const { Button } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx")
    
    const Demo = () => {
      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Open</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our
                servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
