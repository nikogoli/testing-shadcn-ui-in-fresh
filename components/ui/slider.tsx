'use client'

import * as React from 'preact/compat'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as AltSliderPrimitive from "../../lib/components/slider.d.ts"

import { cn } from '../../lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../../lib/type-utils.ts"

const Slider = React.forwardRef<
  ElementRef<typeof AltSliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltSliderPrimitive.Root>
>(({ class:className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range class="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors hover:cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
