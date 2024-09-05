import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import IconCalculator from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/calculator.tsx"
import IconCalendar from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/calendar.tsx"
import IconCreditCard from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/credit-card.tsx"
import IconSettings from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/settings.tsx"
import IconMoodSmile from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mood-smile.tsx"
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user.tsx"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/command.tsx"

export function CommandDemo() {
  return (
    <Command class="rounded-lg border shadow-md h-fit">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty{">No results found."}</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <IconCalendar class="mr-2 h-4 w-4" />
            <span>{"Calendar"}</span>
          </CommandItem>
          <CommandItem>
            <IconMoodSmile class="mr-2 h-4 w-4" />
            <span>{"Search Emoji"}</span>
          </CommandItem>
          <CommandItem disabled>
            <IconCalculator class="mr-2 h-4 w-4" />
            <span>{"Calculator"}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <IconUser class="mr-2 h-4 w-4" />
            <span>{"Profile"}</span>
            <CommandShortcut>{"⌘P"}</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconCreditCard class="mr-2 h-4 w-4" />
            <span>{"Billing"}</span>
            <CommandShortcut>{"⌘B"}</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconSettings class="mr-2 h-4 w-4" />
            <span>{"Settings"}</span>
            <CommandShortcut>{"⌘S"}</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
`

const info = {
  title: "Command",
  text: "Fast, composable, unstyled command menu for React."
}


export function CommandDemo() {
  const createComp = async () => {
    const { default: IconCalculator } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/calculator.tsx")
    const { default: IconCalendar } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/calendar.tsx")
    const { default: IconCreditCard } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/credit-card.tsx")
    const { default: IconSettings } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/settings.tsx")
    const { default: IconMoodSmile } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mood-smile.tsx")
    const { default: IconUser } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user.tsx")
    const {
      Command,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      CommandSeparator,
      CommandShortcut,
    } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/command.tsx")

    const Demo = () => {
      return (
        <Command class="rounded-lg border shadow-md h-fit">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <IconCalendar class="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <IconMoodSmile class="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <IconCalculator class="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <IconUser class="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconCreditCard class="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconSettings class="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp}
                 preview_h={360} place_class="justify-center" />
  )
}
