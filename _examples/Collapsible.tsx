import {
  Collapsible,  CollapsibleContent,  CollapsibleTrigger,
} from "../components/ui/collapsible.tsx"
 
export function CollapsibleDemo() {
  return (
    <div class="w-[60%] border-b p-2">
      <Collapsible>
        <CollapsibleTrigger class="font-bold hover:underline">Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent class="mt-2">
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}