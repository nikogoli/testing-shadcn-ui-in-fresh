import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/card.tsx"
import { Input } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/input.tsx"
import { Label } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/label.tsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/select.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
`

export function CardDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} preview_h={400}>
      <Card class="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid w-full items-center gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </DemoWrapper>
  )
}
