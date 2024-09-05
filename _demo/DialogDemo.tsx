import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/dialog.tsx'
import { Input } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx'
import { Label } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx'

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" class="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" class="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
`

const info = {
  title: "Dialog",
  text: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
}


export function DialogDemo() {
  const createComp = async () => {
    const { Button } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx')
    const {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/dialog.tsx')
    const { Input } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx')
    const { Label } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx')

    const Demo = () => {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" class="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" class="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" class="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }
    return Demo
  }
  
  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
