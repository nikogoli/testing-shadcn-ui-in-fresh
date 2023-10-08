import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion.tsx'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog.tsx'
import { Button } from '../components/ui/button.tsx'
import { Checkbox } from '../components/ui/checkbox.tsx'
//import { ContextMenuDemo } from '@/examples/ContextMenu'
//import { DialogDemo } from './examples/Dialog'
//import { DropdownMenuDemo } from './examples/DropdownMenu'
//import { HoverCardDemo } from './examples/HoverCard'
import { InputDemo } from '../_examples/Input.tsx'
//import { LabelDemo } from './examples/Label'
//import { MenubarDemo } from './examples/Menubar'
//import { PopoverDemo } from './examples/Popover'
//import { RadioGroupDemo } from './examples/RadioGroup'
//import { SelectDemo } from './examples/Select'
//import { SheetDemo } from './examples/Sheet'
import { SkeletonDemo } from '../_examples/Skeleton.tsx'
//import { SliderDemo } from './examples/Slider'
//import { SwitchDemo } from './examples/Switch'
//import { TabsDemo } from './examples/Tabs'
import { TextareaDemo } from '../_examples/Textarea.tsx'
//import { ToastDemo } from './examples/Toast'
import { ToggleDemo } from '../_examples/Toggle.tsx'
//import { TooltipDemo } from './examples/Tooltip'
//import { NavigationMenuDemo } from './examples/NavigationMenu'

function App() {
  return (
    <div class="App w-full py-20 flex-col-center gap-12 overflow-hidden">
      <Accordion type="single" collapsible class="w-90% max-w-450px">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components' aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={(_ev) => console.log("Button is clicked!!")}>Button</Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent class="relative md:-top-25">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div class="flex items-center space-x-2">
        <Checkbox defaultChecked id="terms" />
        <label
          htmlFor="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
        >
          Accept terms and conditions
        </label>
      </div>

      {/*<ContextMenuDemo />

      <SelectDemo />

      <DialogDemo />

      <LabelDemo />*/}

      <InputDemo />

      {/*<DropdownMenuDemo />

      <HoverCardDemo />

      <MenubarDemo />

      <NavigationMenuDemo />

      <PopoverDemo />

      <RadioGroupDemo />

      <SheetDemo />

      <SliderDemo />

      <SwitchDemo />

    <TabsDemo />*/}

      <TextareaDemo />

      {/*<ToastDemo />*/}

      <ToggleDemo />

      {/*<TooltipDemo />*/}

      <SkeletonDemo />
    </div>
  )
}

export default App
