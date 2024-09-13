import { JSX } from "preact"
import { ITEM_NAMES } from "../types.ts"


type ITEM_NAMES_type = typeof ITEM_NAMES[number]


export default function SidePanel(props:{compName:string}) {
  const { compName } = props

  const item_sty = (targ:ITEM_NAMES_type, act:string) => {
    return targ == act ? "bg-sky-100" : "hover:bg-gray-100"
  }

  const when_clicked = (ev: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
    const prev = ev.currentTarget.parentElement!.querySelector('a[data-state="selected"]')
    if (prev){
      prev.setAttribute("data-state", "")
      prev.setAttribute("class", "p-1 text-center hover:bg-gray-100")
    }
    ev.currentTarget.setAttribute("data-state", "selected")
    ev.currentTarget.setAttribute("class", "p-1 text-center bg-sky-100")
  }

  return(
    <div class="h-full overflow-y-scroll col-span-1 p-2 flex flex-col gap-2 border border-lg">
      {ITEM_NAMES.map(name => (
        <a href={`/${name}Demo`} data-state={name == compName ? "selected": ""}
           onClick={when_clicked}
           class={"p-1 text-center " + item_sty(name, compName)}>
          {name}
        </a>
      ))}
    </div>
  )
}