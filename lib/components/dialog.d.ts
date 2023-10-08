import * as React from "preact/compat"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"
import * as AltDialogPrimitive from "../type-utils-DialogPrimitive.d.ts"
import { DismissableLayer } from "../type-utils-DismissableLayer.d.ts";
import { FocusScope } from "../type-utils-FocusScope.d.ts";
import { PortalProps } from "../type-utils-DialogPrimitive.d.ts"; 
import { VNode } from "preact";

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-dialog@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.ts"
 */ 


type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;



type DismissableLayerProps = ComponentPropsWithoutRef<typeof DismissableLayer>;
type FocusScopeProps = ComponentPropsWithoutRef<typeof FocusScope>;
interface DialogContentImplProps extends Omit<DismissableLayerProps, 'onDismiss'> {
    /**
     * When `true`, focus cannot escape the `Content` via keyboard,
     * pointer, or a programmatic focus.
     * @defaultValue false
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
interface DialogContentTypeProps extends Omit<DialogContentImplProps, 'trapFocus' | 'disableOutsidePointerEvents'> {
}
interface DialogContentProps extends DialogContentTypeProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const Content: React.ForwardRefExoticComponent<
  DialogContentProps & React.RefAttributes<HTMLDivElement>
>;



type PrimitiveParagraphProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"p">>;
// deno-lint-ignore no-empty-interface
interface DialogDescriptionProps extends PrimitiveParagraphProps {
}
export const Description: React.ForwardRefExoticComponent<
  DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>;



export interface DialogPortalProps {
  // I add this, and cannot understand why the original type-definition omits the 'className' prop. (Nikogoli)
  class?: string | React.JSX.SignalLike<string | undefined> | undefined;
  children?: VNode | Array<VNode>;
  /**
   * Specify a container element to portal the content into.
   */
  container?: PortalProps['container'];
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}


// deno-lint-ignore no-empty-interface
interface DialogOverlayImplProps extends PrimitiveDivProps {
}
interface DialogOverlayProps extends DialogOverlayImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const Overlay: React.ForwardRefExoticComponent<
  DialogOverlayProps & React.RefAttributes<HTMLDivElement>
>;



type PrimitiveHeading2Props = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"h2">>;
// deno-lint-ignore no-empty-interface
interface DialogTitleProps extends PrimitiveHeading2Props {
}
export const Title: React.ForwardRefExoticComponent<
  DialogTitleProps & React.RefAttributes<HTMLHeadingElement>
>;