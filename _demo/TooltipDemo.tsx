import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/button.tsx'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/tooltip.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/button.tsx'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/tool

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" class="w-10 rounded-full p-0">
            <span class="i-lucide:plus flex h-4 w-4" />
            <span class="sr-only">Add</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
`

const info = {
  title: "Tooltip",
  text: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
}

const has_error = {
  type: "mejor" as const,
  text: "The tooltip disappeares immediately."
}

export function TooltipDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} has_error={has_error} >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" class="w-10 rounded-full p-0">
              <span class="i-lucide:plus flex h-4 w-4" />
              <span class="sr-only">Add</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DemoWrapper>
  )
}
