import { Signal } from "@preact/signals"
import { ITEM_NAMES } from "../types.ts"

type ITEM_NAMES_type = typeof ITEM_NAMES[number]

export default function Sidepanel(props:{item_sig: Signal<ITEM_NAMES_type>}) {
  const { item_sig } = props

  const item_sty = (targ:ITEM_NAMES_type, act:ITEM_NAMES_type) => {
    return targ == act ? "bg-sky-100" : "hover:bg-gray-100"
  }

  return(
    <div class="h-full overflow-y-scroll col-span-1 p-2 flex flex-col gap-2 border border-lg">
      {ITEM_NAMES.map(name => (
        <button class={"p-1 " + item_sty(name, item_sig.value)}
                onClick={()=> item_sig.value = name}>
          {name}
        </button>
      ))}
    </div>
  )
}