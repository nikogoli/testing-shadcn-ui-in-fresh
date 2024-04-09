import { ITEM_NAMES } from "../types.ts"


export default function SidePanel(props:{item: string}) {
  const { item } = props

  return(
    <div class={`h-fit w-72 self-center p-2 grid grid-cols-2 gap-1 border border-lg`}>
      {ITEM_NAMES.map(name => (
        <a class={"py-1 pl-4 " + (item == name ? "bg-sky-100" : "hover:bg-gray-100")}
           href={`/${name}`}>
          {name}
        </a>
      ))}
    </div>
  )
}