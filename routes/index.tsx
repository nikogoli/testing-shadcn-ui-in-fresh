import { asset } from "$fresh/runtime.ts"
import SidePanel from "../islands/SidePanel.tsx"


export default function Home(){
  return (
    <div>
      <div class="App w-full h-screen p-8 grid grid-cols-4 gap-2 place-content-center">
        <SidePanel item={""} />
        <div class="col-span-3 flex-col-center gap-12 overflow-hidden">
          <div class="text-3xl">Issues</div>
        </div>
      </div>
      <link href={asset("/uno.css")} rel="stylesheet" />
      <style> {`button:focus { outline-style: none !important}`} </style>
    </div>
  )
}