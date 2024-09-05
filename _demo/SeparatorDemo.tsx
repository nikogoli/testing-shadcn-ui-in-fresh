import { Separator } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/separator.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Separator } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/separator.tsx"

export function SeparatorDemo() {
  return (
    <div>
      <div class="space-y-1">
        <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
        <p class="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator class="my-4" />
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}
`

const info = {
  title: "Separator",
  text: "Visually or semantically separates content."
}


export function SeparatorDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <div>
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
          <p class="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </DemoWrapper>
  )
}
