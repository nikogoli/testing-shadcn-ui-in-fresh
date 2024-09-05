import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Button } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/card.tsx'
import { Input } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx'
import { Label } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/tabs.tsx'

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" class="w-[400px]">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
`

const info = {
  title: "Tabs",
  text: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
}


export function TabsDemo() {
  const crateComp = async () => {
    const { Button } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx')
    const {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle
    } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/card.tsx')
    const { Input } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx')
    const { Label } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/label.tsx')
    const {
      Tabs,
      TabsContent,
      TabsList,
      TabsTrigger
    } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/tabs.tsx')

    const Demo = () => {
      return (
        <Tabs defaultValue="account" class="w-[400px]">
          <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
              </CardHeader>
              <CardContent class="space-y-2">
                <div class="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div class="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
              </CardHeader>
              <CardContent class="space-y-2">
                <div class="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div class="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )
    }
    return Demo
  }
  
  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={crateComp}
                  preview_h={500} />
  )
}
