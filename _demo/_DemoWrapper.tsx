import { ComponentProps } from "preact"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/alert.tsx"
import IconAlertCircle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/alert-circle.tsx"

import { highlightText } from "../hooks/useHighLight.js"


export default function DemoWrapper(props:{
  code_text: string,
  preview_h?: number,
  place_class?: string,
  is_error?: true,
} & ComponentProps<"div">) {
  const { code_text, children, is_error } = props
  const preview_h = props.preview_h ?? 200
  const place_class = props.place_class ?? "place-content-center"
  return (
    <div class="h-full w-full flex flex-col gap-8 p-6">
      { !is_error ? <></>
      : <Alert class="h-fit border-red-700 text-red-700">
          <IconAlertCircle class="h-4 w-4 red-700" />
          <AlertTitle class="font-bold">CAUTION</AlertTitle>
          <AlertDescription> This components does not work properly. </AlertDescription>
        </Alert> }
      <div class="flex flex-col gap-1">
        <div class="text-2xl font-semibold">Preview</div>
        <div class={`h-[${preview_h}px] p-4 border rounded-xl grid ${place_class}`}>
          {children}
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-2xl font-semibold">Code</div>
        <code class='shj-lang-ts py-4 px-6 mb-6 rounded-xl overflow-x-scroll'
              style={`font-size:.875rem!important; line-height:1.25rem!important`}
              dangerouslySetInnerHTML={{__html:highlightText(code_text, "ts", false)}}>
        </code>
      </div>
    </div>
  )
}
