import { Button } from "../../testing_shadcn_ui_for_deno/components/button.tsx"
import { Input } from "../../testing_shadcn_ui_for_deno/components/input.tsx"
import { Label } from "../../testing_shadcn_ui_for_deno/components/label.tsx"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../testing_shadcn_ui_for_deno/components/sheet.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Button } from "../../testing_shadcn_ui_for_deno/components/button.tsx"
import { Input } from "../../testing_shadcn_ui_for_deno/components/input.tsx"
import { Label } from "../../testing_shadcn_ui_for_deno/components/label.tsx"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../testing_shadcn_ui_for_deno/components/sheet.tsx"
`

export function SheetDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent position="right" size="sm">
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
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </DemoWrapper>
  )
}
