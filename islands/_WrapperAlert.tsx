import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/alert.tsx"
import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/alert-circle.tsx"


export default function WrapperAlert(props:{
  has_error?: {type:"mejor"|"minor", text:string},
}) {
  const { has_error } = props

  if (!has_error){
    return <></>
  }

  const err_sty = has_error.type == "mejor"
    ? "border-red-700 text-red-700"
    : "border-fuchsia-700 text-fuchsia-700"

  return (
    <Alert class={`h-fit w-[80%] ${err_sty!}`}>
      <IconAlertCircle class={`h-4 w-4 ${err_sty!.split(" ")[1]}`} />
      <AlertTitle class="font-bold">CAUTION</AlertTitle>
      <AlertDescription class="flex flex-col gap-1">{
        ["This components does not work properly.\n", ...has_error!.text.split("\n").map(t => "・ "+t)]
          .map(tx => <p>{tx}</p>)
      }</AlertDescription>
    </Alert>
  )
}
