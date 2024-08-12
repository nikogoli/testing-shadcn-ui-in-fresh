import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/button.tsx'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/tooltip.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"

const Code = `
`

export function TooltipDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
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
