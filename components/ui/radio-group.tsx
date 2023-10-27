"use client"

import * as React from "preact/compat"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import * as AltRadioGroupPrimitive from "../../lib/components/radio-group.d.ts"

import { cn } from "../../lib/utils.ts"
import { ElementRef, ComponentPropsWithoutRef } from "../../lib/type-utils.ts"

const RadioGroup = React.forwardRef<
  ElementRef<typeof AltRadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltRadioGroupPrimitive.Root>
>(({ class:className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  ElementRef<typeof AltRadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AltRadioGroupPrimitive.Item>
>(({ class:className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "h-4 w-4 rounded-full border border-input ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span class="i-tabler:circle-filled flex h-2.5 w-2.5 fill-primary text-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
