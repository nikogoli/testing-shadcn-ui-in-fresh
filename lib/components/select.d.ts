import * as React from "preact/compat"
import { DismissableLayerProps } from "../type-utils-MenuPrimitve.d.ts";
import { FocusScopeProps } from "../type-utils-FocusScope.d.ts";
import * as PopperPrimitive from "../type-utils-PopperPrimitive.d.ts"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-select@2.0.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>;
type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;

type PopperContentProps = ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;
interface SelectPopperPositionProps extends PopperContentProps, SelectPopperPrivateProps {
}

type SelectPopperPrivateProps = {
  onPlaced?: PopperContentProps['onPlaced'];
};
interface SelectItemAlignedPositionProps extends PrimitiveDivProps, SelectPopperPrivateProps {
}
interface SelectContentImplProps extends Omit<SelectPopperPositionProps, keyof SelectPopperPrivateProps>, Omit<SelectItemAlignedPositionProps, keyof SelectPopperPrivateProps> {
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
   * Can be prevented.
   */
  onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
  position?: 'item-aligned' | 'popper';
}
// deno-lint-ignore no-empty-interface
interface SelectContentProps extends SelectContentImplProps {
}

export const Content: React.ForwardRefExoticComponent<
  SelectContentProps & React.RefAttributes<HTMLDivElement>
>;




interface SelectItemProps extends PrimitiveDivProps {
  value: string;
  disabled?: boolean;
  textValue?: string;
}
export const Item: React.ForwardRefExoticComponent<
  SelectItemProps & React.RefAttributes<HTMLDivElement>
>;



// deno-lint-ignore no-empty-interface
interface SelectLabelProps extends PrimitiveDivProps {
}
export const Label: React.ForwardRefExoticComponent<
  SelectLabelProps & React.RefAttributes<HTMLDivElement>
>;



// deno-lint-ignore no-empty-interface
interface SelectTriggerProps extends PrimitiveButtonProps {
}

export const Trigger: React.ForwardRefExoticComponent<
  SelectTriggerProps & React.RefAttributes<HTMLButtonElement>
>;



// deno-lint-ignore no-empty-interface
interface SelectSeparatorProps extends PrimitiveDivProps {
}
export const Separator: React.ForwardRefExoticComponent<
  SelectSeparatorProps & React.RefAttributes<HTMLDivElement>
>;