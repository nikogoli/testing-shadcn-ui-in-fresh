import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import IconBold from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/bold.tsx"
import IconItalic from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/italic.tsx"
import IconUnderline from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/underline.tsx"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/toggle-group.tsx"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <IconBold class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <IconItalic class="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <IconUnderline class="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

`

const info = {
  title: "Toggle Group",
  text: "A set of two-state buttons that can be toggled on or off."
}


export function ToggleGroupDemo() {
  const createComp = async () => {
    const { default: IconBold } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/bold.tsx")
    const { default: IconItalic } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/italic.tsx")
    const { default: IconUnderline } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/underline.tsx")
    const {
      ToggleGroup,
      ToggleGroupItem,
    } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/toggle-group.tsx")

    const Demo = () => {
      return (
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <IconBold class="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <IconItalic class="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <IconUnderline class="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      )
    }
    return Demo
  }
  
  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
