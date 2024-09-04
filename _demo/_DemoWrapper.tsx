import { ComponentProps, JSX } from "preact"
import { Suspense, lazy } from 'preact/compat';
import { useRef } from "preact/hooks"

import WrapperAlert from "./_WrapperAlert.tsx"
import { highlightText } from "../hooks/useHighLight.ts"


export default function DemoWrapper(props:{
  code_text: string,
  info: {title:string, text:string},
  funcCompForDemo: (()=>Promise<()=>JSX.Element>) | null,
  preview_h?: number,
  place_class?: string,
  has_error?: {type:"mejor"|"minor", text:string},
} & ComponentProps<"div">) {
  const { code_text, info, funcCompForDemo, has_error } = props
  const preview_h = props.preview_h ?? 200
  const place_class = props.place_class ?? "place-content-center"
  
  const container_ref = useRef<HTMLDivElement>(null)
  const Demo = funcCompForDemo ? lazy(funcCompForDemo) : () => (<></>)

  return (
    <div class="h-full w-full flex flex-col gap-8 p-6">
      <WrapperAlert has_error={has_error} />
      <div class="flex flex-col gap-3">
        <div>
          <div class="text-2xl font-semibold">{info?.title ?? "Preview"}</div>
          <p class="text-gray-500">{info?.text ?? ""}</p>
        </div>
        <div class={`h-[${preview_h}px] p-4 border rounded-xl grid relative
                     has-[div#spinner]:place-content-center ${place_class}`}
              ref={container_ref} >
          <Suspense fallback={<SimpleSpinner id="spinner" />}>
            <Demo />
          </Suspense>
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


function SimpleSpinner(props:{
  size?: number,
  main_color?: string,
  bg_color?: string,
}&ComponentProps<"div">){
  const { size, main_color, bg_color, ...others } = props
  const size_sty = size ? `h-${size} w-${size}` : "h-10 w-10"
  const main = "border-" + (main_color ?? "sky-400")
  const bg = bg_color ?? "inherit"
  return (
    <div class="flex justify-center" {...others} >
      <div class={`animate-spin ${size_sty} border-4 ${main} rounded-full`}
            style={{"border-top-color": bg}}></div>
    </div>
  )
}