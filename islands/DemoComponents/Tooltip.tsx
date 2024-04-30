import { Button } from '../../_bundled/ui/button.js'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../_bundled/ui/tooltip.js'

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
