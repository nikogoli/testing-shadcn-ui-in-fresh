import * as React from "preact/compat"
import { ComponentPropsWithoutRef } from "../type-utils.ts"
import * as AltPopperPrimitive from "../type-utils-PopperPrimitive.d.ts"
import { FocusScopeProps } from "../type-utils-FocusScope.d.ts"
import { DismissableLayerProps } from "../type-utils-DismissableLayer.d.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v133/@radix-ui/react-popover@1.0.7/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
*/ 


type PopperContentProps = ComponentPropsWithoutRef<typeof AltPopperPrimitive.Content>;
interface PopoverContentImplProps extends Omit<PopperContentProps, 'onPlaced'>, Omit<DismissableLayerProps, 'onDismiss'> {
  /**
   * Whether focus should be trapped within the `Popover`
   * (default: false)
   */
  trapFocus?: FocusScopeProps['trapped'];
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
}
// deno-lint-ignore no-empty-interface
interface PopoverContentTypeProps extends Omit<PopoverContentImplProps, 'trapFocus' | 'disableOutsidePointerEvents'> {
}
interface PopoverContentProps extends PopoverContentTypeProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const Content: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;