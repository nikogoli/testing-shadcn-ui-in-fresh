import * as React from "preact/compat"
import { DismissableLayerProps } from "../type-utils-MenuPrimitve.d.ts";
import { PopperContentProps } from "../type-utils-PopperPrimitive.d.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-hover-card@1.0.7/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


interface HoverCardContentImplProps extends Omit<PopperContentProps, 'onPlaced'> {
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `HoverCard`.
   * Can be prevented.
   */
  onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
  /**
   * Event handler called when the focus moves outside of the `HoverCard`.
   * Can be prevented.
   */
  onFocusOutside?: DismissableLayerProps['onFocusOutside'];
  /**
   * Event handler called when an interaction happens outside the `HoverCard`.
   * Specifically, when a `pointerdown` event happens outside or focus moves outside of it.
   * Can be prevented.
   */
  onInteractOutside?: DismissableLayerProps['onInteractOutside'];
}

interface HoverCardContentProps extends HoverCardContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const Content: React.ForwardRefExoticComponent<
  HoverCardContentProps & React.RefAttributes<HTMLDivElement>
>;