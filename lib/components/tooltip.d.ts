import * as React from "preact/compat"
import { DismissableLayerProps } from "../type-utils-DismissableLayer.d.ts";
import { PopperContentProps } from "../type-utils-PopperPrimitive.d.ts"; 

/**
 * Following type-definitions are based on "https://esm.sh/v133/@radix-ui/react-tooltip@1.0.7/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


interface TooltipContentImplProps extends Omit<PopperContentProps, 'onPlaced'> {
  /**
   * A more descriptive label for accessibility purpose
   */
  'aria-label'?: string;
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `Tooltip`.
   * Can be prevented.
   */
  onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
}
interface TooltipContentProps extends TooltipContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const Content: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;