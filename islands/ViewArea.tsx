import { AccordionDemo } from "../_demo/AccordionDemo.tsx"
import { AlertDemo } from "../_demo/AlertDemo.tsx"
import { AlertDialogDemo } from "../_demo/AlertDialogDemo.tsx"
import { AspectRatioDemo } from "../_demo/AspectRatioDemo.tsx"
import { AvatarDemo } from "../_demo/AvatarDemo.tsx"
import { BadgeDemo } from "../_demo/BadgeDemo.tsx"
import { ButtonDemo } from "../_demo/ButtonDemo.tsx"
import { CheckboxDemo } from "../_demo/CheckboxDemo.tsx"
import { CollapsibleDemo } from "../_demo/CollapsibleDemo.tsx"
import { ContextMenuDemo } from "../_demo/ContextMenuDemo.tsx"
import { ComboboxDemo } from "../_demo/ComboboxDemo.tsx"
import { CommandDemo } from "../_demo/CommandDemo.tsx"
import { DialogDemo } from "../_demo/DialogDemo.tsx"
import { DropdownMenuDemo } from '../_demo/DropdownMenuDemo.tsx'
import { HoverCardDemo } from '../_demo/HoverCardDemo.tsx'
import { InputDemo } from '../_demo/InputDemo.tsx'
import { LabelDemo } from "../_demo/LabelDemo.tsx"
import { MenubarDemo } from '../_demo/MenubarDemo.tsx'
import { NavigationMenuDemo } from '../_demo/NavigationMenuDemo.tsx'
import { PopoverDemo } from '../_demo/PopoverDemo.tsx'
import { RadioGroupDemo } from '../_demo/RadioGroupDemo.tsx'
import { SelectDemo } from '../_demo/SelectDemo.tsx'
import { SheetDemo } from '../_demo/SheetDemo.tsx'
import { SkeletonDemo } from '../_demo/SkeletonDemo.tsx'
import { SliderDemo } from '../_demo/SliderDemo.tsx'
import { SwitchDemo } from '../_demo/SwitchDemo.tsx'
import { TabsDemo } from '../_demo/TabsDemo.tsx'
import { TableDemo } from "../_demo/TableDemo.tsx"
import { TextareaDemo } from '../_demo/TextareaDemo.tsx'
//import { ToastDemo } from '../_demo/Toast.tsx'
//import { ToggleDemo } from '../_demo/Toggle.tsx'
//import { TooltipDemo } from '../_demo/Tooltip.tsx'


import { Signal } from "@preact/signals"

import { ITEM_NAMES } from "../types.ts"

type ITEM_NAMES_type = typeof ITEM_NAMES[number]


export default function ViewArea(props:{
  item_sig: Signal<ITEM_NAMES_type>,
}) {
  const { item_sig } = props

  return (
    <div class="col-span-3 flex-col-center gap-12 overflow-y-scroll">
      {
        item_sig.value == "Accordion" ? <AccordionDemo />
        : item_sig.value == "Alert" ? <AlertDemo />
        : item_sig.value == "AlertDialog" ? <AlertDialogDemo />
        : item_sig.value == "AspectRatio" ? <AspectRatioDemo />
        : item_sig.value == "Avatar" ? <AvatarDemo />
        : item_sig.value == "Badge" ? <BadgeDemo />
        : item_sig.value == "Button" ? <ButtonDemo />
        : item_sig.value == "Checkbox"  ? <CheckboxDemo />
        : item_sig.value == "Collapsible" ? <CollapsibleDemo />
        : item_sig.value == "Combobox" ? <ComboboxDemo />
        : item_sig.value == "Command" ? <CommandDemo />
        : item_sig.value == "ContextMenu" ? <ContextMenuDemo />
        : item_sig.value == "Dialog" ? <DialogDemo />
        : item_sig.value == "DropdownMenu" ? <DropdownMenuDemo />
        : item_sig.value == "HoverCard" ? <HoverCardDemo />
        : item_sig.value == "Input" ? <InputDemo />
        : item_sig.value == "Label" ? <LabelDemo />
        : item_sig.value == "Menubar" ? <MenubarDemo />
        : item_sig.value == "NavigationMenu" ? <NavigationMenuDemo />
        : item_sig.value == "Popover" ? <PopoverDemo />
        : item_sig.value == "RadioGroup" ? <RadioGroupDemo />
        : item_sig.value == "Select" ? <SelectDemo />
        : item_sig.value == "Sheet" ? <SheetDemo />
        : item_sig.value == "Slider" ? <SliderDemo />
        : item_sig.value == "Skeleton" ? <SkeletonDemo />
        : item_sig.value == "Switch" ? <SwitchDemo />
        : item_sig.value == "Table" ? <TableDemo />
        : item_sig.value == "Tabs" ? <TabsDemo />
        : item_sig.value == "Textarea" ? <TextareaDemo />
        : <></>
        /*
          : item_sig.value == "Toast" ? <ToastDemo />
          : item_sig.value == "Toggle" ? <ToggleDemo />
          : item_sig.value == "Tooltip" ? <TooltipDemo />
          */
      }
    </div>
  )
}