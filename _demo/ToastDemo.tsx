import { Fragment } from "preact"

import DemoWrapper from "./_DemoWrapper.tsx"
import WrapperSelect from "./_WrapperSelect.tsx"
import { useState } from "preact/hooks"


const Code = `
import { Fragment } from "preact";
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx"
import {
  ToastAction,
  Toaster,
  useToast,
  toastVariants
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/toast.tsx"

function ToastDemoBase(porps:{variant:keyof typeof toastVariants["variants"]["variant"]}) {
  const { toast } = useToast()
  return (
    <Button
      variant={porps.variant == "default" ? "outline" : "destructive"}
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
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


export function ToastDemo(){
  const createComp = async () => {
    const { Button } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx")
    const {
      ToastAction,
      Toaster,
      useToast,
      toastVariants
    } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/toast.tsx")

    function ToastDemoBase(porps:{variant:keyof typeof toastVariants["variants"]["variant"]}) {
      const { toast } = useToast()
      return (
        <Button
          variant={porps.variant == "default" ? "outline" : "destructive"}
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            })
          }}
        >
          Add to calendar
        </Button>
      )
    }

    const Demo = () => {
      const defVari = toastVariants.defaultVariants.variant
      const [actVariant, setVariant] = useState<typeof toastVariants["defaultVariants"]["variant"]>(defVari)
      const variNames = Object.keys(toastVariants.variants.variant) as Array<typeof toastVariants["defaultVariants"]["variant"]>
      return (
        <Fragment>
          <WrapperSelect {...{setVariant, variNames, defVari}} />
          <ToastDemoBase variant={actVariant} />
          <Toaster variant={actVariant} />
        </Fragment>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}