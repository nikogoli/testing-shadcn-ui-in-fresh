import * as React from "preact/compat"
import { ElementRef, PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"
import { DismissableLayerProps } from "../type-utils-DismissableLayer.d.ts";


/**
 * Following type-definitions are based on "https://esm.sh/v133/@radix-ui/react-toast@1.1.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;
type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>;
type PrimitiveOrderedListProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"ol">>;
type PrimitiveListItemProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"li">>;


interface ToastViewportProps extends PrimitiveOrderedListProps {
  /**
   * The keys to use as the keyboard shortcut that will move focus to the toast viewport.
   * @defaultValue ['F8']
   */
  hotkey?: string[];
  /**
   * An author-localized label for the toast viewport to provide context for screen reader users
   * when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.
   * @defaultValue 'Notifications ({hotkey})'
   */
  label?: string;
}
export const Viewport: React.ForwardRefExoticComponent<ToastViewportProps & React.RefAttributes<HTMLOListElement>>;


type ToastImplPrivateProps = {
  open: boolean;
  onClose(): void;
};
type ToastImplElement = ElementRef<PrimitiveForwardRefComponent<"li">>;
type ToastElement = ToastImplElement;
type SwipeEvent = {
  currentTarget: EventTarget & ToastElement;
} & Omit<CustomEvent<{
  originalEvent: React.JSX.TargetedPointerEvent<HTMLElement>;
  delta: {
      x: number;
      y: number;
  };
}>, 'currentTarget'>;
interface ToastImplProps extends ToastImplPrivateProps, Omit<PrimitiveListItemProps, "open"|"onClose"> {
  type?: 'foreground' | 'background';
  /**
   * Time in milliseconds that toast should remain visible for. Overrides value
   * given to `ToastProvider`.
   */
  duration?: number;
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
  onPause?(): void;
  onResume?(): void;
  onSwipeStart?(event: SwipeEvent): void;
  onSwipeMove?(event: SwipeEvent): void;
  onSwipeCancel?(event: SwipeEvent): void;
  onSwipeEnd?(event: SwipeEvent): void;
}
interface ToastProps extends Omit<ToastImplProps, keyof ToastImplPrivateProps> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const Root: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLLIElement>>;


// deno-lint-ignore no-empty-interface
interface ToastCloseProps extends PrimitiveButtonProps {
}
interface ToastActionProps extends ToastCloseProps {
  /**
   * A short description for an alternate way to carry out the action. For screen reader users
   * who will not be able to navigate to the button easily/quickly.
   * @example <ToastAction altText="Goto account settings to upgrade">Upgrade</ToastAction>
   * @example <ToastAction altText="Undo (Alt+U)">Undo</ToastAction>
   */
  altText: string;
}
export const Action: React.ForwardRefExoticComponent<ToastActionProps & React.RefAttributes<HTMLButtonElement>>;


export const Close: React.ForwardRefExoticComponent<ToastCloseProps & React.RefAttributes<HTMLButtonElement>>;


// deno-lint-ignore no-empty-interface
interface ToastTitleProps extends PrimitiveDivProps {
}
export const Title: React.ForwardRefExoticComponent<ToastTitleProps & React.RefAttributes<HTMLDivElement>>;


// deno-lint-ignore no-empty-interface
interface ToastDescriptionProps extends PrimitiveDivProps {
}
export const Description: React.ForwardRefExoticComponent<ToastDescriptionProps & React.RefAttributes<HTMLDivElement>>;