"use client"

import { VNode, JSX, Fragment } from "preact";
import { Button } from "../components/ui/button.tsx"
import { ToastAction } from "../components/ui/toast.tsx"
import { Toaster } from "../components/ui/toaster.tsx"
import { useToast } from "../components/ui/use-toast.ts"

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
    <Fragment>
      <ToastDemoBase />
      <Toaster />
    </Fragment>
  )
}