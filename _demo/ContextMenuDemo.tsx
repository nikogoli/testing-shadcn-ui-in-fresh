import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '../../testing_shadcn_ui_for_deno/components/context-menu.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/context-menu.tsx'

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-slate-200 text-sm dark:border-slate-700">
        {"Right click here"}
      </ContextMenuTrigger>
      <ContextMenuContent class="w-64">
        <ContextMenuItem inset>
          {"Back"}
          <ContextMenuShortcut>{"⌘[<"}/ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          {"Forward"}
          <ContextMenuShortcut>{"⌘]"}</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          {"Reload"}
          <ContextMenuShortcut>{"⌘R"}</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>{"More Tools"}</ContextMenuSubTrigger>
          <ContextMenuSubContent class="w-48">
            <ContextMenuItem>
              {"Save Page As..."}
              <ContextMenuShortcut>{"⇧⌘S"}</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>{"Create Shortcut..."}</ContextMenuItem>
            <ContextMenuItem>{"Name Window..."}</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>{"Developer Tools"}</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          {"Show Bookmarks Bar"}
          <ContextMenuShortcut>{"⌘⇧B"}</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>{"Show Full URLs"}</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>{"People"}</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro">{"Pedro Duarte"}</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">{"Colm Tuite"}</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
`

const info = {
  title: "ContextMenu",
  text: "Displays a menu to the user — such as a set of actions or functions — triggered by a button."
}


export function ContextMenuDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <ContextMenu>
        <ContextMenuTrigger class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-slate-200 text-sm dark:border-slate-700">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent class="w-64">
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent class="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DemoWrapper>
  )
}
