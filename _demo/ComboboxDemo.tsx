import { useState } from "preact/hooks"

import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/check.tsx"
import IconBracketsAngle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brackets-angle.tsx"

import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/button.tsx"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/command.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/popover.tsx"


import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { useState } from "preact/hooks"
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/check.tsx"
import IconBracketsAngle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brackets-angle.tsx"
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/button.tsx"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/command.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.8/components/popover.tsx"

const frameworks = [ { value: "next.js", label: "Next.js" },
                    { value: "sveltekit", label: "SvelteKit" },
                    { value: "nuxt.js", label: "Nuxt.js" },
                    { value: "remix", label: "Remix" },
                    { value: "astro", label: "Astro" } ]


export function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
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
                  \`mr-2 h-4 w-4 \${value === framework.value ? "opacity-100" : "opacity-0"}\`}/>
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
`

const info = {
  title: "Combobox",
  text: "Autocomplete input and command palette with a list of suggestions."
}


const frameworks = [ { value: "next.js", label: "Next.js" },
                    { value: "sveltekit", label: "SvelteKit" },
                    { value: "nuxt.js", label: "Nuxt.js" },
                    { value: "remix", label: "Remix" },
                    { value: "astro", label: "Astro" } ]


export function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
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
    </DemoWrapper>
  )
}
