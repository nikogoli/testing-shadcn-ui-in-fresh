import { VNode, JSX, Fragment } from "preact";
import { Button } from "../../testing_shadcn_ui_for_deno/components/button.tsx"
import {
  ToastAction,
  Toaster,
  useToast
} from "../../testing_shadcn_ui_for_deno/components/toast.tsx"

import DemoWrapper from "./_DemoWrapper.tsx";


const Code = `
`

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
    <DemoWrapper code_text={Code.trim()} is_error={true}>
      <Fragment>
        <ToastDemoBase />
        <Toaster />
      </Fragment>
    </DemoWrapper>
  )
}