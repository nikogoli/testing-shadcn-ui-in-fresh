import { VNode, JSX, Fragment } from "preact";
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/button.tsx"
import {
  ToastAction,
  Toaster,
  useToast,
  toastVariants
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/toast.tsx"

import DemoWrapper from "./_DemoWrapper.tsx";
import WrapperSelect from "./_WrapperSelect.tsx"
import { useState } from "preact/hooks"


const Code = `
import { VNode, JSX, Fragment } from "preact";
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/button.tsx"
import {
  ToastAction,
  Toaster,
  useToast,
  toastVariants
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/toast.tsx"

function ToastDemoBase(porps:{variant:keyof typeof toastVariants["variants"]["variant"]}) {
  const { toast } = useToast()
  return (
    <Button
      variant={porps.variant == "default" ? "outline" : "destructive"}
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ) as VNode<typeof ToastAction> & JSX.SignalLike<string|undefined>,
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
      <ToastDemoBase variant="default" />
      <Toaster variant="default" />
    </Fragment>
  )
}
`

const info = {
  title: "Toast",
  text: "A succinct message that is displayed temporarily."
}


function ToastDemoBase(porps:{variant:keyof typeof toastVariants["variants"]["variant"]}) {
  const { toast } = useToast()
  return (
    <Button
      variant={porps.variant == "default" ? "outline" : "destructive"}
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
  const defVari = toastVariants.defaultVariants.variant
  const [actVariant, setVariant] = useState<keyof typeof toastVariants["variants"]["variant"]>(defVari)
  const variNames = Object.keys(toastVariants.variants.variant) as Array<typeof toastVariants["defaultVariants"]["variant"]>
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <WrapperSelect {...{setVariant, variNames, defVari}} />
      <Fragment>
        <ToastDemoBase variant={actVariant} />
        <Toaster variant={actVariant} />
      </Fragment>
    </DemoWrapper>
  )
}