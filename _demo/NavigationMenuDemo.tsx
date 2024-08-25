import { ComponentProps } from "preact"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/navigation-menu.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { ComponentProps } from "preact"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.0/components/navigation-menu.tsx'

const components: { title: string; href: string; description: string }[] = [
  { title: 'Alert Dialog', href: '/docs/primitives/alert-dialog', description:
    'A modal dialog that interrupts the user with important content and expects a response.' },
  { title: 'Hover Card', href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.' },
  { title: 'Progress', href: '/docs/primitives/progress', description:
    'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.' },
  { title: 'Scroll-area', href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.' },
  { title: 'Tabs', href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
  { title: 'Tooltip', href: '/docs/primitives/tooltip', description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.' }
]


const FirstItem = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li class="row-span-3">
          <NavigationMenuLink asChild>
            <a
              class="flex h-full w-full select-none flex-col justify-end rounded-md bg-accent/50 p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
              <p class="text-sm leading-tight text-muted-foreground">
                Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        <ListItem href="/docs" title="Introduction">
          Re-usable components built using Radix UI and Tailwind CSS.
        </ListItem>
        <ListItem href="/docs/installation" title="Installation">
          How to install dependencies and structure your app.
        </ListItem>
        <ListItem href="/docs/primitives/typography" title="Typography">
          Styles for headings, paragraphs, lists...etc
        </ListItem>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)


const SecondItem = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {components.map((component) => (
          <li>
            <NavigationMenuLink asChild>
              <a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none
                       transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                       focus:text-accent-foreground"
                    key={component.title} href={component.href}>
                <div class="text-sm font-medium leading-none">{component.title}</div>
                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">{component.description}</p>
              </a>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)


const ThirdItem = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink asChild>
        <ul class="grid w-[400px] h-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          <li>
            <NavigationMenuLink asChild>
              <a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none
                  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                  focus:text-accent-foreground">
                <div class="font-medium leading-none">Documentation</div>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
)


function ListItem(props:{ title: string } & ComponentProps<"a">){
  const { title, children, class:classStr, ...others } = props
  return (
  <li>
    <NavigationMenuLink asChild>
      <a class={\`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground \${classStr}\`}
        {...others}>
        <div class="text-sm font-medium leading-none">{title}</div>
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
)}


export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <FirstItem />
        <SecondItem />
        <ThirdItem />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
`

const info = {
  title: "Navigation Menu",
  text: "A collection of links for navigating websites."
}


const components: { title: string; href: string; description: string }[] = [
  { title: 'Alert Dialog', href: '/docs/primitives/alert-dialog', description:
    'A modal dialog that interrupts the user with important content and expects a response.' },
  { title: 'Hover Card', href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.' },
  { title: 'Progress', href: '/docs/primitives/progress', description:
    'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.' },
  { title: 'Scroll-area', href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.' },
  { title: 'Tabs', href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
  { title: 'Tooltip', href: '/docs/primitives/tooltip', description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.' }
]


const FirstItem = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li class="row-span-3">
          <NavigationMenuLink asChild>
            <a
              class="flex h-full w-full select-none flex-col justify-end rounded-md bg-accent/50 p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
              <p class="text-sm leading-tight text-muted-foreground">
                Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        <ListItem href="/docs" title="Introduction">
          Re-usable components built using Radix UI and Tailwind CSS.
        </ListItem>
        <ListItem href="/docs/installation" title="Installation">
          How to install dependencies and structure your app.
        </ListItem>
        <ListItem href="/docs/primitives/typography" title="Typography">
          Styles for headings, paragraphs, lists...etc
        </ListItem>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)


const SecondItem = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {components.map((component) => (
          <li>
            <NavigationMenuLink asChild>
              <a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none
                       transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                       focus:text-accent-foreground"
                    key={component.title} href={component.href}>
                <div class="text-sm font-medium leading-none">{component.title}</div>
                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">{component.description}</p>
              </a>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
)


const ThirdItem = () => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink asChild>
        <ul class="grid w-[400px] h-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          <li>
            <NavigationMenuLink asChild>
              <a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none
                  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                  focus:text-accent-foreground">
                <div class="font-medium leading-none">Documentation</div>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
)


function ListItem(props:{ title: string } & ComponentProps<"a">){
  const { title, children, class:classStr, ...others } = props
  return (
  <li>
    <NavigationMenuLink asChild>
      <a class={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${classStr}`}
        {...others}>
        <div class="text-sm font-medium leading-none">{title}</div>
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
)}


export function NavigationMenuDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <NavigationMenu>
        <NavigationMenuList>
          <FirstItem />
          <SecondItem />
          <ThirdItem />
        </NavigationMenuList>
      </NavigationMenu>
    </DemoWrapper>
  )
}