import { AccordionDemo } from "../_examples/Accordion.tsx"
import { AlertDemo } from "../_examples/Alert.tsx"
import { AlertDialogDemo } from "../_examples/AlertDialog.tsx"
import { AspectRatioDemo } from "../_examples/AspectRatio.tsx"
import { BadgeDemo } from "../_examples/Badge.tsx"
import { ButtonDemo } from "../_examples/Button.tsx"
import { CollapsibleDemo } from "../_examples/Collapsible.tsx"
import { ContextMenuDemo } from '../_examples/ContextMenu.tsx'
import { ComboboxDemo } from "../_examples/Combobox.tsx"
import { CommandDemo } from "../_examples/Command.tsx"
import { DataTableDemo } from "../_examples/DataTable.tsx"
import { DialogDemo } from '../_examples/Dialog.tsx'
import { DropdownMenuDemo } from '../_examples/DropdownMenu.tsx'
import { HoverCardDemo } from '../_examples/HoverCard.tsx'
import { InputDemo } from '../_examples/Input.tsx'
import { LabelDemo } from '../_examples/Label.tsx'
import { MenubarDemo } from '../_examples/Menubar.tsx'
import { PopoverDemo } from '../_examples/Popover.tsx'
import { RadioGroupDemo } from '../_examples/RadioGroup.tsx'
import { SelectDemo } from '../_examples/Select.tsx'
import { SheetDemo } from '../_examples/Sheet.tsx'
import { SkeletonDemo } from '../_examples/Skeleton.tsx'
import { SliderDemo } from '../_examples/Slider.tsx'
import { SwitchDemo } from '../_examples/Switch.tsx'
import { TabsDemo } from '../_examples/Tabs.tsx'
import { TableDemo } from "../_examples/Table.tsx"
import { TextareaDemo } from '../_examples/Textarea.tsx'
import { ToastDemo } from '../_examples/Toast.tsx'
import { ToggleDemo } from '../_examples/Toggle.tsx'
import { TooltipDemo } from '../_examples/Tooltip.tsx'
import { NavigationMenuDemo } from '../_examples/NavigationMenu.tsx'

import { ITEM_NAMES } from "../types.ts"


export default function ViewArea(props:{item: string}) {
  const { item } = props

  if (!ITEM_NAMES.includes(item)){
    return (
      <div class="col-span-3 flex-col-center gap-12 overflow-hidden">
        <span class="text-2xl">No Match</span>
      </div>
    )
  }

  return (
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
  )
}