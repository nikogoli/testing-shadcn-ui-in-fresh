'use client'

import * as React from 'preact/compat'
import { DialogProps } from '@radix-ui/react-dialog'
import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/search.tsx"

import { Command as CommandPrimitive } from 'cmdk'
import { Command as AltCommandPrimitive } from "../../lib/type-utils-cmdk.d.ts"

import { cn } from '../../lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../../lib/type-utils.ts"

import { Dialog, DialogContent } from './dialog.tsx'

const Command = React.forwardRef<
  ElementRef<typeof AltCommandPrimitive>,
  ComponentPropsWithoutRef<typeof AltCommandPrimitive>
>(({ class:className, children, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className
    )}
    //somehow a variant "aria-selected:" in CommandItem does not work. Thus, define style here. (nikogoli)
    children={!children ? children : ( 
      <React.Fragment>
        {children}
        <style>{`
          .aria-selected\\:bg-accent[aria-selected=true] { background-color: hsl(var(--accent)) } 
          .aria-selected\\:text-accent-foreground[aria-selected=true] { color: hsl(var(--accent-foreground)) }
        `}</style>
      </React.Fragment>
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

// deno-lint-ignore no-empty-interface
interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent class="overflow-hidden p-0 shadow-2xl">
        <Command class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  ElementRef<typeof AltCommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof AltCommandPrimitive.Input>
>(({ class:className, ...props }, ref) => (
  <div class="flex items-center border-b px-3" cmdk-input-wrapper="">
    <IconSearch class="flex mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'placeholder:text-foreground-muted flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  ElementRef<typeof AltCommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof AltCommandPrimitive.List>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  ElementRef<typeof AltCommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof AltCommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />)

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  ElementRef<typeof AltCommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof AltCommandPrimitive.Group>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[hsl(var(--muted-foreground))]', // somehow "text-muted-foreground" not work. (nikogoli)
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  ElementRef<typeof AltCommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof AltCommandPrimitive.Separator>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  ElementRef<typeof AltCommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AltCommandPrimitive.Item>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ class:className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span class={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
