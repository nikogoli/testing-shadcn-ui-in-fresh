import { useState } from "preact/hooks"
import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
import { useState } from "preact/hooks"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/collapsible.tsx"
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx"
import IconCaretUpDown from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/caret-up-down.tsx"


export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      class="w-[350px] space-y-2"
    >
      <div class="flex items-center justify-between space-x-4 px-4">
        <h4 class="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" class="w-9 p-0">
            <IconCaretUpDown class="h-4 w-4" />
            <span class="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent class="space-y-2">
        <div class="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div class="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
`

const info = {
  title: "Collapsible",
  text: "An interactive component which expands/collapses a panel."
}


export function CollapsibleDemo() {
  const createComp = async () => {
    const {
      Collapsible,
      CollapsibleContent,
      CollapsibleTrigger,
    } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/collapsible.tsx")
    const { Button } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx")
    const { default: IconCaretUpDown} = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/caret-up-down.tsx")

    const Demo = () => {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          class="w-[350px] space-y-2"
        >
          <div class="flex items-center justify-between space-x-4 px-4">
            <h4 class="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" class="w-9 p-0">
                <IconCaretUpDown class="h-4 w-4" />
                <span class="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div class="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent class="space-y-2">
            <div class="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div class="rounded-md border px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp}
                  preview_h={250} place_class="justify-center" />
  )
}
