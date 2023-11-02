import { AccordionDemo } from "../_examples/Accordion.tsx"
import { AlertDemo } from "../_examples/Alert.tsx"
import { AlertDialogDemo } from "../_examples/AlertDialog.tsx"
import { Button } from '../components/ui/button.tsx'
import { ContextMenuDemo } from '../_examples/ContextMenu.tsx'
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
import { TextareaDemo } from '../_examples/Textarea.tsx'
import { ToastDemo } from '../_examples/Toast.tsx'
import { ToggleDemo } from '../_examples/Toggle.tsx'
import { TooltipDemo } from '../_examples/Tooltip.tsx'
import { NavigationMenuDemo } from '../_examples/NavigationMenu.tsx'

function App() {
  return (
    <div class="App w-full py-20 flex-col-center gap-12 overflow-hidden">
      <AccordionDemo />

      <Button>Button</Button>

      <AlertDemo />

      <AlertDialogDemo />

      <LabelDemo />

      <ContextMenuDemo />

      <SelectDemo />

      <DialogDemo />

      <InputDemo />

      <DropdownMenuDemo />

      <HoverCardDemo />

      <MenubarDemo />

      <NavigationMenuDemo />

      <PopoverDemo />

      <RadioGroupDemo />

      <SheetDemo />

      <SliderDemo />

      <SwitchDemo />

      <TabsDemo />

      <TextareaDemo />

      <ToastDemo />

      <ToggleDemo />

      <TooltipDemo />

      <SkeletonDemo />
    </div>
  )
}

export default App
