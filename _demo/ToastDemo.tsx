import { VNode, JSX, Fragment } from "preact";
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.7/components/button.tsx"
import {
  ToastAction,
  Toaster,
  useToast
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.7/components/toast.tsx"

import DemoWrapper from "./_DemoWrapper.tsx";


const Code = `
import { VNode, JSX, Fragment } from "preact";
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.7/components/button.tsx"
import {
  ToastAction,
  Toaster,
  useToast,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.7/components/toast.tsx"

function ToastDemoBase() {
  const { toast } = useToast()
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ) as VNode<typeof ToastAction> & JSX.SignalLike<string|undefined>
        })
      }}
    >
      Add to calendar
    </Button>
  )
}

export function ToastDemo(){
  return (
    <Fragment>
      <ToastDemoBase />
      <Toaster />
    </Fragment>
  )
}
`

const info = {
  title: "Toast",
  text: "A succinct message that is displayed temporarily."
}

const has_error = {
  type: "minor" as const,
  text: "The popup does not close automatically after closing the popup manually by clicking 'X' or 'Undo'"
}

function ToastDemoBase() {
  const { toast } = useToast()
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ) as VNode<typeof ToastAction> & JSX.SignalLike<string|undefined>,
          // <ToastAction />'s type is not VNode<typeof ToastAction> but VNode<any>,
          // and somehow preact requires type SignalLike<string|undefined>. (nikogoli)
        })
      }}
    >
      Add to calendar
    </Button>
  )
}


export function ToastDemo(){
  return (
    <DemoWrapper code_text={Code.trim()} info={info} has_error={has_error}>
      <Fragment>
        <ToastDemoBase />
        <Toaster />
      </Fragment>
    </DemoWrapper>
  )
}