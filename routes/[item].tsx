import { asset } from "$fresh/runtime.ts"
import { PageProps } from "$fresh/server.ts"

import SidePanel from "../islands/SidePanel.tsx"

import { AccordionDemo } from "../islands/DemoComponents/Accordion.tsx"
import { AlertDemo } from "../islands/DemoComponents/Alert.tsx"
import { AlertDialogDemo } from "../islands/DemoComponents/AlertDialog.tsx"
import { AspectRatioDemo } from "../islands/DemoComponents/AspectRatio.tsx"
import { BadgeDemo } from "../islands/DemoComponents/Badge.tsx"
import { ButtonDemo } from "../islands/DemoComponents/Button.tsx"
import { CollapsibleDemo } from "../islands/DemoComponents/Collapsible.tsx"
import { ContextMenuDemo } from '../islands/DemoComponents/ContextMenu.tsx'
import { ComboboxDemo } from "../islands/DemoComponents/Combobox.tsx"
import { CommandDemo } from "../islands/DemoComponents/Command.tsx"
import { DataTableDemo } from "../islands/DemoComponents/DataTable.tsx"
import { DialogDemo } from '../islands/DemoComponents/Dialog.tsx'
import { DropdownMenuDemo } from '../islands/DemoComponents/DropdownMenu.tsx'
import { HoverCardDemo } from '../islands/DemoComponents/HoverCard.tsx'
import { InputDemo } from '../islands/DemoComponents/Input.tsx'
import { LabelDemo } from '../islands/DemoComponents/Label.tsx'
import { MenubarDemo } from '../islands/DemoComponents/Menubar.tsx'
import { PopoverDemo } from '../islands/DemoComponents/Popover.tsx'
import { RadioGroupDemo } from '../islands/DemoComponents/RadioGroup.tsx'
import { SelectDemo } from '../islands/DemoComponents/Select.tsx'
import { SheetDemo } from '../islands/DemoComponents/Sheet.tsx'
import { SkeletonDemo } from '../islands/DemoComponents/Skeleton.tsx'
import { SliderDemo } from '../islands/DemoComponents/Slider.tsx'
import { SwitchDemo } from '../islands/DemoComponents/Switch.tsx'
import { TabsDemo } from '../islands/DemoComponents/Tabs.tsx'
import { TableDemo } from "../islands/DemoComponents/Table.tsx"
import { TextareaDemo } from '../islands/DemoComponents/Textarea.tsx'
import { ToastDemo } from '../islands/DemoComponents/Toast.tsx'
import { ToggleDemo } from '../islands/DemoComponents/Toggle.tsx'
import { TooltipDemo } from '../islands/DemoComponents/Tooltip.tsx'
import { NavigationMenuDemo } from '../islands/DemoComponents/NavigationMenu.tsx'

import { ITEM_NAMES } from "../types.ts"


export default function Home(props: PageProps){
  const { item } = props.params

  if (!ITEM_NAMES.includes(item)){
    return (
      <div>
      <div class="App w-full h-screen p-8 flex gap-2 place-content-center">
        <SidePanel item={item} />
        <div class="col-span-3 flex-col-center gap-12 overflow-hidden">
          <span class="text-2xl">No Match</span>
        </div>
      </div>
      <link href={asset("/uno.css")} rel="stylesheet" />
      <style> {`button:focus { outline-style: none !important}`} </style>
    </div>
    )
  }

  return (
    <div>
      <div class="App w-full h-screen p-8 flex gap-2 place-content-center">
        <SidePanel item={item} />
        <div class="grow flex-col-center gap-12 overflow-hidden">
          {
            item == "Accordion" ? <AccordionDemo />
              : item == "Alert" ? <AlertDemo />
              : item == "AlertDialog" ? <AlertDialogDemo />
              : item == "AspectRatio" ? <AspectRatioDemo />
              : item == "Badge" ? <BadgeDemo />
              : item == "Button" ? <ButtonDemo />
              : item == "Collapsible" ? <CollapsibleDemo />
              : item == "ContextMenu" ? <ContextMenuDemo />
              : item == "Combobox" ? <ComboboxDemo />
              : item == "Command" ? <CommandDemo />
              : item == "DataTable" ? <DataTableDemo />
              : item == "Dialog" ? <DialogDemo />
              : item == "DropdownMenu" ? <DropdownMenuDemo />
              : item == "HoverCard" ? <HoverCardDemo />
              : item == "Input" ? <InputDemo />
              : item == "Label" ? <LabelDemo />
              : item == "NavigationMenu" ? <NavigationMenuDemo />
              : item == "Menubar" ? <MenubarDemo />
              : item == "Popover" ? <PopoverDemo />
              : item == "RadioGroup" ? <RadioGroupDemo />
              : item == "Select" ? <SelectDemo />
              : item == "Sheet" ? <SheetDemo />
              : item == "Skeleton" ? <SkeletonDemo />
              : item == "Slider" ? <SliderDemo />
              : item == "Switch" ? <SwitchDemo />
              : item == "Tabs" ? <TabsDemo />
              : item == "Table" ? <TableDemo />
              : item == "Textarea" ? <TextareaDemo />
              : item == "Toast" ? <ToastDemo />
              : item == "Toggle" ? <ToggleDemo />
              : item == "Tooltip" ? <TooltipDemo />
              : <></>
          }
        </div>
      </div>
      <link href={asset("/uno.css")} rel="stylesheet" />
      <style> {`button:focus { outline-style: none !important}`} </style>
    </div>
  )
}