"use client"

import * as React from "preact/compat"

import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/check.tsx"
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/search.tsx"
import IconBracketsAngle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brackets-angle.tsx"

import { cn } from "../lib/utils.ts"
import { Button } from "../components/ui/button.tsx"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../components/ui/command.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover.tsx"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          class="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <IconBracketsAngle class="rotate-90 ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <IconCheck class={
                  `mr-2 h-4 w-4 ${value === framework.value ? "opacity-100" : "opacity-0"}`}/>
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
