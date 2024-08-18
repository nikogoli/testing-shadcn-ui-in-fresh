import { ComponentProps } from "preact"

import WrapperAlert from "./_WrapperAlert.tsx"
import { highlightText } from "../hooks/useHighLight.js"



export default function DemoWrapper(props:{
  code_text: string,
  info?: {title:string, text:string},
  preview_h?: number,
  place_class?: string,
  has_error?: {type:"mejor"|"minor", text:string},
} & ComponentProps<"div">) {
  const { code_text, info, children, has_error } = props
  const preview_h = props.preview_h ?? 200
  const place_class = props.place_class ?? "place-content-center"
  return (
    <div class="h-full w-full flex flex-col gap-8 p-6">
      <WrapperAlert has_error={has_error} />
      <div class="flex flex-col gap-3">
        <div>
          <div class="text-2xl font-semibold">{info?.title ?? "Preview"}</div>
          <p class="text-gray-500">{info?.text ?? ""}</p>
        </div>
        <div class={`h-[${preview_h}px] p-4 border rounded-xl grid ${place_class} relative`}>
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
