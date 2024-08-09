import { AccordionDemo } from "../_examples/Accordion.tsx"
import { AccordionDemo as AccordionDemoTest } from "../_demo/AccordionDemo.tsx"
import { AlertDemo } from "../_examples/Alert.tsx"
import { AlertDemo as AlertDemoTest } from "../_demo/AlertDemo.tsx"
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

import { Signal } from "@preact/signals"

import { ITEM_NAMES } from "../types.ts"

type ITEM_NAMES_type = typeof ITEM_NAMES[number]


export default function ViewArea(props:{
  item_sig: Signal<ITEM_NAMES_type>,
  testmode: boolean,
}) {
  const { item_sig, testmode } = props

  return (
    <div class="col-span-3 flex-col-center gap-12 overflow-hidden">
      {
        item_sig.value == "Accordion" ? testmode ? <AccordionDemoTest /> : <AccordionDemo />
          : item_sig.value == "Alert" ? testmode ? <AlertDemoTest /> : <AlertDemo />
          : item_sig.value == "AlertDialog" ? <AlertDialogDemo />
          : item_sig.value == "AspectRatio" ? <AspectRatioDemo />
          : item_sig.value == "Badge" ? <BadgeDemo />
          : item_sig.value == "Button" ? <ButtonDemo />
          : item_sig.value == "Collapsible" ? <CollapsibleDemo />
          : item_sig.value == "ContextMenu" ? <ContextMenuDemo />
          : item_sig.value == "Combobox" ? <ComboboxDemo />
          : item_sig.value == "Command" ? <CommandDemo />
          : item_sig.value == "DataTable" ? <DataTableDemo />
          : item_sig.value == "Dialog" ? <DialogDemo />
          : item_sig.value == "DropdownMenu" ? <DropdownMenuDemo />
          : item_sig.value == "HoverCard" ? <HoverCardDemo />
          : item_sig.value == "Input" ? <InputDemo />
          : item_sig.value == "Label" ? <LabelDemo />
          : item_sig.value == "NavigationMenu" ? <NavigationMenuDemo />
          : item_sig.value == "Menubar" ? <MenubarDemo />
          : item_sig.value == "Popover" ? <PopoverDemo />
          : item_sig.value == "RadioGroup" ? <RadioGroupDemo />
          : item_sig.value == "Select" ? <SelectDemo />
          : item_sig.value == "Sheet" ? <SheetDemo />
          : item_sig.value == "Skeleton" ? <SkeletonDemo />
          : item_sig.value == "Slider" ? <SliderDemo />
          : item_sig.value == "Switch" ? <SwitchDemo />
          : item_sig.value == "Tabs" ? <TabsDemo />
          : item_sig.value == "Table" ? <TableDemo />
          : item_sig.value == "Textarea" ? <TextareaDemo />
          : item_sig.value == "Toast" ? <ToastDemo />
          : item_sig.value == "Toggle" ? <ToggleDemo />
          : item_sig.value == "Tooltip" ? <TooltipDemo />
          : <></>
      }
    </div>
  )
}