import * as React from "preact/compat"
import { FocusScope } from "./type-utils-FocusScope.d.ts";
import { DismissableLayer } from "./type-utils-DismissableLayer.d.ts";
import * as RovingFocusGroup from "./type-utils-RovingFocus.d.ts"
import * as PopperPrimitive from "./type-utils-PopperPrimitive.d.ts"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "./type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-menu@2.0.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 

type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;


// -------- CheckboxItem -------------

type CheckedState = boolean | 'indeterminate';
// I ignore the below error...
interface MenuCheckboxItemProps extends MenuItemProps {
  checked?: CheckedState;
  onCheckedChange?: (checked: boolean) => void;
}
export const CheckboxItem: React.ForwardRefExoticComponent<
  MenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>
>;



// deno-lint-ignore no-empty-interface
interface MenuLabelProps extends PrimitiveDivProps {
}
export const Label: React.ForwardRefExoticComponent<
  MenuLabelProps & React.RefAttributes<HTMLDivElement>
>;



// -------- Item -------------

interface MenuItemImplProps extends PrimitiveDivProps {
  disabled?: boolean;
  textValue?: string;
}
interface MenuItemProps extends Omit<MenuItemImplProps, 'onSelect'> {
  onSelect?: (event: Event) => void;
}

export const Item: React.ForwardRefExoticComponent<
  MenuItemProps & React.RefAttributes<HTMLDivElement>
>;




// -------- RadioItem -------------

interface MenuRadioItemProps extends MenuItemProps {
  value: string;
}
export const RadioItem: React.ForwardRefExoticComponent<
  MenuRadioItemProps & React.RefAttributes<HTMLDivElement>
>;




// -------- Separator -------------

// deno-lint-ignore no-empty-interface
interface MenuSeparatorProps extends PrimitiveDivProps {
}
export const Separator: React.ForwardRefExoticComponent<
  MenuSeparatorProps & React.RefAttributes<HTMLDivElement>
>;




// -------- SubTrigger -------------

interface MenuItemImplProps extends PrimitiveDivProps {
  disabled?: boolean;
  textValue?: string;
}
// deno-lint-ignore no-empty-interface
interface MenuSubTriggerProps extends MenuItemImplProps {
}

export const SubTrigger: React.ForwardRefExoticComponent<
  MenuSubTriggerProps & React.RefAttributes<HTMLDivElement>
>;



// -------- Content -------------

type FocusScopeProps = ComponentPropsWithoutRef<typeof FocusScope>;
type DismissableLayerProps = ComponentPropsWithoutRef<typeof DismissableLayer>;
type MenuContentImplPrivateProps = {
  onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];
  onDismiss?: DismissableLayerProps['onDismiss'];
  disableOutsidePointerEvents?: DismissableLayerProps['disableOutsidePointerEvents'];
  /**
   * Whether scrolling outside the `MenuContent` should be prevented
   * (default: `false`)
   */
  disableOutsideScroll?: boolean;
  /**
   * Whether focus should be trapped within the `MenuContent`
   * (default: false)
   */
  trapFocus?: FocusScopeProps['trapped'];
};
// deno-lint-ignore no-empty-interface
interface MenuRootContentTypeProps extends Omit<MenuContentImplProps, keyof MenuContentImplPrivateProps> {
}
interface MenuContentProps extends MenuRootContentTypeProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const Content: React.ForwardRefExoticComponent<
  MenuContentProps & React.RefAttributes<HTMLDivElement>
>;



// -------- SubContent -------------

type RovingFocusGroupProps = ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;
type PopperContentProps = ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;
interface MenuContentImplProps extends MenuContentImplPrivateProps, Omit<PopperContentProps, 'dir' | 'onPlaced'> {
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
  /**
   * Whether keyboard navigation should loop around
   * @defaultValue false
   */
  loop?: RovingFocusGroupProps['loop'];
  onEntryFocus?: RovingFocusGroupProps['onEntryFocus'];
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
  onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
  onFocusOutside?: DismissableLayerProps['onFocusOutside'];
  onInteractOutside?: DismissableLayerProps['onInteractOutside'];
}

// deno-lint-ignore no-empty-interface
interface MenuRootContentTypeProps extends Omit<MenuContentImplProps, keyof MenuContentImplPrivateProps> {
}
interface MenuSubContentProps extends Omit<MenuContentImplProps, keyof MenuContentImplPrivateProps | 'onCloseAutoFocus' | 'onEntryFocus' | 'side' | 'align'> {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const SubContent: React.ForwardRefExoticComponent<
  MenuSubContentProps & React.RefAttributes<HTMLDivElement>
>;