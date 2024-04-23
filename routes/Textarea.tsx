import { asset } from "$fresh/runtime.ts"
import { PageProps } from "$fresh/server.ts"

import SidePanel from "../islands/SidePanel.tsx"
import { TextareaDemo } from '../islands/DemoComponents/Textarea.tsx'


export default function Home(props: PageProps){
  const { item } = props.params

  return (
    <div>
      <div class="App w-full h-screen p-8 flex gap-2 place-content-center">
        <SidePanel item={item} />
        <div class="grow flex-col-center gap-12 overflow-hidden">
          <TextareaDemo />
        </div>
      </div>
      <link href={asset("/uno.css")} rel="stylesheet" />
      <style> {`button:focus { outline-style: none !important}`} </style>
    </div>
  )
}