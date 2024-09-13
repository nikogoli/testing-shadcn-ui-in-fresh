import { useState } from "preact/hooks"

import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/button.tsx'
import { Input } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/input.tsx'
import { Label } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/label.tsx'
import { Popover, PopoverContent, PopoverTrigger } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/popover.tsx'
import IconSettings from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/settings.tsx"

import DemoWrapper from "../_DemoWrapper.tsx"


const Code = `
import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/button.tsx'
import { Input } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/input.tsx'
import { Label } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/label.tsx'
import { Popover, PopoverContent, PopoverTrigger } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/popover.tsx'
import IconSettings from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/settings.tsx"

export function PopoverDemo() {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" class="w-10 rounded-full p-0">
          <IconSettings class='h-4 w-4'/>
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
  )
}
`

const info = {
  title: "Popover",
  text: "Displays rich content in a portal, triggered by a button."
}


export function PopoverDemo() {
  const [open, setOpen] = useState(false)
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" class="w-10 rounded-full p-0">
            <IconSettings class='h-4 w-4'/>
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
