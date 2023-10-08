import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar.tsx'
import { Button } from '../components/ui/button.tsx'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card.tsx'

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent class="w-80">
        <div class="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">@nextjs</h4>
            <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div class="flex items-center pt-2">
              <span class="i-lucide:calendar-days mr-2 h-4 w-4 opacity-70" />{' '}
              <span class="text-xs text-slate-500 dark:text-slate-400">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
