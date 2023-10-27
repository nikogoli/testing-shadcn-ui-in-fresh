import * as React from 'preact/compat'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import * as AltMenubarPrimitive from "../../lib/components/menubar.d.ts"

import { cn } from '../../lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../../lib/type-utils.ts"


const MenubarMenu = MenubarPrimitive.Menu


const MenubarGroup = MenubarPrimitive.Group


const MenubarPortal = MenubarPrimitive.Portal


const MenubarSub = MenubarPrimitive.Sub


const MenubarRadioGroup = MenubarPrimitive.RadioGroup


const Menubar = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.Root>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className)}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName


const MenubarTrigger = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.Trigger>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName


const MenubarSubTrigger = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ class:className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <span className="i-lucide:chevron-right flex ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName


const MenubarSubContent = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.SubContent>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName


const MenubarContent = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.Content>
>(({ class:className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-top-1',
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName


const MenubarItem = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName


const MenubarCheckboxItem = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.CheckboxItem>
>(({ class:className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <span className="i-lucide:check flex h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName


const MenubarRadioItem = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.RadioItem>
>(({ class:className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <span className="i-tabler:circle-filled flex h-2 w-2 text-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName


const MenubarLabel = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.Label>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName


const MenubarSeparator = React.forwardRef<
  ElementRef<typeof AltMenubarPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof AltMenubarPrimitive.Separator>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName


const MenubarShortcut = ({ class:className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
MenubarShortcut.displayname = 'MenubarShortcut'


export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
