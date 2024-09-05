import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/dropdown-menu.tsx"
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-github.tsx"
import IconCirclePlus from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/circle-plus.tsx"
import IconCloud from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/cloud.tsx"
import IconCreditCard from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/credit-card.tsx"
import IconLifebuoy from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/lifebuoy.tsx"
import IconLogout from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/logout.tsx"
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail.tsx"
import IconMessage from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/message.tsx"
import IconPlus from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/plus.tsx"
import IconSettings from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/settings.tsx"
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user.tsx"
import IconUsers from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/users.tsx"
import IconUserPlus from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user-plus.tsx"
import IconKeyboard from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/keyboard.tsx"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUser class="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconCreditCard class="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconSettings class="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconKeyboard class="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUsers class="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <IconUserPlus class="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <IconMail class="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconMessage class="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IconCirclePlus class="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <IconPlus class="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconBrandGithub class="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconLifebuoy class="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <IconCloud class="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconLogout class="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
`

const info = {
  title: "Dropdown Menu",
  text: "Displays a menu to the user — such as a set of actions or functions — triggered by a button."
}


export function DropdownMenuDemo() {
  const createComp = async () => {
    const { Button } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx")
    const {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuPortal,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      DropdownMenuSub,
      DropdownMenuSubContent,
      DropdownMenuSubTrigger,
      DropdownMenuTrigger,
    } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/dropdown-menu.tsx")
    const { default: IconBrandGithub } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-github.tsx")
    const { default: IconCirclePlus } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/circle-plus.tsx")
    const { default: IconCloud } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/cloud.tsx")
    const { default: IconCreditCard } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/credit-card.tsx")
    const { default: IconLifebuoy } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/lifebuoy.tsx")
    const { default: IconLogout } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/logout.tsx")
    const { default: IconMail } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/mail.tsx")
    const { default: IconMessage } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/message.tsx")
    const { default: IconPlus } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/plus.tsx")
    const { default: IconSettings } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/settings.tsx")
    const { default: IconUser } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user.tsx")
    const { default: IconUsers } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/users.tsx")
    const { default: IconUserPlus } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/user-plus.tsx")
    const { default: IconKeyboard } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/keyboard.tsx")

    const Demo = () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUser class="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard class="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconSettings class="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconKeyboard class="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUsers class="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <IconUserPlus class="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <IconMail class="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <IconMessage class="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <IconCirclePlus class="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <IconPlus class="mr-2 h-4 w-4" />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IconBrandGithub class="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconLifebuoy class="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <IconCloud class="mr-2 h-4 w-4" />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IconLogout class="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
    return Demo
  }
  
  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
