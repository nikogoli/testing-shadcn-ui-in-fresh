import { StateUpdater } from "preact/hooks"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/select.tsx"


export default function WrapperSelect<T extends string>(props:{
  setVariant: StateUpdater<T>,
  variNames: Array<T>,
  defVari: T,
}){
  const { setVariant, variNames, defVari } = props
  
  return (
    <div class="absolute left-3 top-3 flex gap-2 py-1 px-2 border rounded-lg items-center">
      <div class="text-sm text-gray-500">Variant: </div>
      <Select defaultValue={defVari} onValueChange={value => {setVariant(value as T)}}>
        <SelectTrigger class="w-[6.25rem] h-fit border-none p-0">
          <SelectValue placeholder="Variant" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Variant</SelectLabel>
            {variNames.map(nm => <SelectItem value={nm}>{nm}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}