import * as React from "preact/compat"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "./type-utils.ts"
import { DismissableLayerProps as BaseDismissableLayerProps } from "./type-utils-DismissableLayer.d.ts";
import { FocusScopeProps as BaseFocusScopeProps } from "./type-utils-FocusScope.d.ts";
import { VNode } from "preact";

/**
 * Following type-definitions are based on " https://esm.sh/v132/@radix-ui/react-dialog@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.ts"
 */ 



// ---------- Root -----------

interface DialogProps {
  children?: VNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  modal?: boolean;
}

export const Root: React.FC<DialogProps>;



// -------- Portal -------------

type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;
interface _PortalProps extends PrimitiveDivProps {
    /**
     * An optional container where the portaled content should be appended.
     */
    container?: HTMLElement | null;
}
type PortalProps = ComponentPropsWithoutRef<
  React.ForwardRefExoticComponent<_PortalProps & React.RefAttributes<HTMLDivElement>>
>

interface DialogPortalProps {
  children?: VNode;
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

export const Portal: React.FC<DialogPortalProps>;



// ---------- Trigger -----------

type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>;
// deno-lint-ignore no-empty-interface
interface DialogTriggerProps extends PrimitiveButtonProps {
}

export const Trigger: React.ForwardRefExoticComponent<
  DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>;



// ---------- Overlay -----------

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



// ---------- Close -----------

// deno-lint-ignore no-empty-interface
interface DialogCloseProps extends PrimitiveButtonProps {
}

export const Close: React.ForwardRefExoticComponent<
  DialogCloseProps & React.RefAttributes<HTMLButtonElement>
>;



// ---------- Ttile -----------

type PrimitiveHeading2Props = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"h2">>;
// deno-lint-ignore no-empty-interface
interface DialogTitleProps extends PrimitiveHeading2Props {
}

export const Title: React.ForwardRefExoticComponent<
  DialogTitleProps & React.RefAttributes<HTMLHeadingElement>
>;



// ---------- Description -----------

type PrimitiveParagraphProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"p">>;
// deno-lint-ignore no-empty-interface
interface DialogDescriptionProps extends PrimitiveParagraphProps {
}

export const Description: React.ForwardRefExoticComponent<
  DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>;



// ---------- Content -----------

type DismissableLayerProps = ComponentPropsWithoutRef<
  React.ForwardRefExoticComponent<BaseDismissableLayerProps & React.RefAttributes<HTMLDivElement>>
>;

type FocusScopeProps = ComponentPropsWithoutRef<
  React.ForwardRefExoticComponent<BaseFocusScopeProps & React.RefAttributes<HTMLDivElement>>
>;

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