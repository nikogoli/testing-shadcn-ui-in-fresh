import { useRef, useLayoutEffect } from "preact/hooks"
import { ITEM_NAMES } from "../types.ts"


type ITEM_NAMES_type = typeof ITEM_NAMES[number]


export default function SidePanel(props:{compName:string}) {
  const { compName } = props
  const item_ref = useRef<HTMLAnchorElement>(null)

  const item_sty = (targ:ITEM_NAMES_type, act:string) => {
    return targ == act ? "bg-sky-100" : "hover:bg-gray-100"
  }

  useLayoutEffect(() => {
    item_ref.current?.scrollIntoView({
      behavior: "instant", block: "center"
    })
  }, [item_ref.current])

  return(
    <div class="h-full overflow-y-scroll col-span-1 p-2 flex flex-col gap-2 border border-lg">
      {ITEM_NAMES.map(name => (
        <a href={`/${name}Demo`} ref={ name == compName ? item_ref : null}
            class={"p-1 text-center " + item_sty(name, compName)}>
          {name}
        </a>
      ))}
    </div>
  )
}