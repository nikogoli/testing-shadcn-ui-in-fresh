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

import { signal } from "@preact/signals"

import Sidepanel from "./Sidepanel.tsx"
import Viewarea from "./Viewarea.tsx"
import { ITEM_NAMES } from "../types.ts"

type ITEM_NAMES_type = typeof ITEM_NAMES[number]

function App() {
  const item_sig = signal<ITEM_NAMES_type>("Accordion" as const)

  return (
    <div class="Appw-full h-screen p-8 grid grid-cols-4 gap-2 place-content-center">
      <Sidepanel item_sig={item_sig} />
      <Viewarea item_sig={item_sig} />
    </div>
  )
}

export default App
