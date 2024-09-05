import DemoWrapper from "./_DemoWrapper.tsx"
import WrapperSelect from "./_WrapperSelect.tsx"
import { useState } from "preact/hooks"
import { Fragment } from "preact"


const Code = `
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx"
import { Input } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/sheet.tsx"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
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
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
`

const info = {
  title: "Sheet",
  text: "Extends the Dialog component to display content that complements the main content of the screen."
}


export function SheetDemo() {
  const createComp = async () => {
    const { Button } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx")
    const { Input } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx")
    const { Label } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx")
    const {
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
      sheetVariatns,
    } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/sheet.tsx")

    const Demo = () => {
      const defVari = sheetVariatns.defaultVariants.side
      const [actVariant, setVariant] = useState<typeof sheetVariatns["defaultVariants"]["side"]>(defVari)
      const variNames = Object.keys(sheetVariatns.variants.side) as Array<typeof sheetVariatns["defaultVariants"]["side"]>
      return (
        <Fragment>
          <WrapperSelect  {...{setVariant, variNames, defVari}}/>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent side={actVariant}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
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
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Fragment>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
