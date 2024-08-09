import { signal } from "@preact/signals"

import SidePanel from "./SidePanel.tsx"
import ViewArea from "./ViewArea.tsx"
import { ITEM_NAMES } from "../types.ts"


type ITEM_NAMES_type = typeof ITEM_NAMES[number]


export default function App(props:{testmode?: true}) {
  const item_sig = signal<ITEM_NAMES_type>("Accordion" as const)
  const is_testmode = props.testmode ?? false

  return (
    <div class="App w-full h-screen p-8 grid grid-cols-4 gap-2 place-content-center">
      <SidePanel item_sig={item_sig} />
      <ViewArea item_sig={item_sig} testmode={is_testmode} />
    </div>
  )
}