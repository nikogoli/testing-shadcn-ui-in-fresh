import { useState } from "preact/hooks"

import { Button } from '../../testing_shadcn_ui_for_deno/components/button.tsx'
import { Input } from '../../testing_shadcn_ui_for_deno/components/input.tsx'
import { Label } from '../../testing_shadcn_ui_for_deno/components/label.tsx'
import { Popover, PopoverContent, PopoverTrigger } from '../../testing_shadcn_ui_for_deno/components/popover.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Button } from '../../testing_shadcn_ui_for_deno/components/button.tsx'
import { Input } from '../../testing_shadcn_ui_for_deno/components/input.tsx'
import { Label } from '../../testing_shadcn_ui_for_deno/components/label.tsx'
import { Popover, PopoverContent, PopoverTrigger } from '../../testing_shadcn_ui_for_deno/components/popover.tsx'
`

export function PopoverDemo() {
  const [open, setOpen] = useState(false)
  return (
    <DemoWrapper code_text={Code.trim()}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" class="w-10 rounded-full p-0">
            <span class='i-lucide:settings-2 flex h-4 w-4'></span>
            <span class="sr-only">Open popover</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" class="col-span-2 h-8" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input id="maxWidth" defaultValue="300px" class="col-span-2 h-8" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" class="col-span-2 h-8" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input id="maxHeight" defaultValue="none" class="col-span-2 h-8" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </DemoWrapper>
  )
}
