'use client'

import * as React from 'preact/compat'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as AltTabsPrimitive from "../../lib/components/tabs.d.ts"

import { cn } from '../../lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../../lib/type-utils.ts"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  ElementRef<typeof AltTabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof AltTabsPrimitive.List>
>(({ class:className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  ElementRef<typeof AltTabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AltTabsPrimitive.Trigger>
>(({ class:className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  ElementRef<typeof AltTabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltTabsPrimitive.Content>
>(({ class:className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
