import * as React from "preact/compat"
import { DismissableLayerProps } from "../type-utils-MenuPrimitve.d.ts";
import * as VisuallyHiddenPrimitive from "../type-utils-VisuallyHiddenPrimitive.d.ts"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef, ElementRef } from "../type-utils.ts"
import { Scope } from "@radix-ui/react-context";
import { VNode } from "preact";

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-navigation-menu@1.1.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>;
type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;
type PrimitiveNavProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"nav">>;
type NavigationMenuElement = ElementRef<PrimitiveForwardRefComponent<"nav">>;
type NavigationMenuTriggerElement = ElementRef<PrimitiveForwardRefComponent<"button">>;

type Orientation = 'vertical' | 'horizontal';
type Direction = 'ltr' | 'rtl';

interface NavigationMenuProviderPrivateProps {
  isRootMenu: boolean;
  scope: Scope;
  children: VNode | Array<VNode>;
  orientation: Orientation;
  dir: Direction;
  rootNavigationMenu: NavigationMenuElement | null;
  value: string;
  onTriggerEnter(itemValue: string): void;
  onTriggerLeave?(): void;
  onContentEnter?(): void;
  onContentLeave?(): void;
  onItemSelect(itemValue: string): void;
  onItemDismiss(): void;
}
// deno-lint-ignore no-empty-interface
interface NavigationMenuProviderProps extends NavigationMenuProviderPrivateProps {
}

interface NavigationMenuProps extends Omit<NavigationMenuProviderProps, keyof NavigationMenuProviderPrivateProps>, PrimitiveNavProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    dir?: Direction;
    orientation?: Orientation;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened.
     * @defaultValue 200
     */
    delayDuration?: number;
    /**
     * How much time a user has to enter another trigger without incurring a delay again.
     * @defaultValue 300
     */
    skipDelayDuration?: number;
}

export const Root: React.ForwardRefExoticComponent<
  NavigationMenuProps & React.RefAttributes<HTMLElement>
>;



type FocusProxyElement = ElementRef<typeof VisuallyHiddenPrimitive.Root>;
interface NavigationMenuContentImplPrivateProps {
  value: string;
  triggerRef: React.RefObject<NavigationMenuTriggerElement>;
  focusProxyRef: React.RefObject<FocusProxyElement>;
  wasEscapeCloseRef: React.MutableRefObject<boolean>;
  onContentFocusOutside(): void;
  onRootContentClose(): void;
}
interface NavigationMenuContentImplProps extends Omit<DismissableLayerProps, 'onDismiss'|'value'>, NavigationMenuContentImplPrivateProps {
}
interface NavigationMenuContentProps extends Omit<NavigationMenuContentImplProps, keyof NavigationMenuContentImplPrivateProps> {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}

export const Content: React.ForwardRefExoticComponent<
  NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>
>;



// deno-lint-ignore no-empty-interface
interface NavigationMenuIndicatorImplProps extends PrimitiveDivProps {
}
interface NavigationMenuIndicatorProps extends NavigationMenuIndicatorImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const Indicator: React.ForwardRefExoticComponent<
  NavigationMenuIndicatorProps & React.RefAttributes<HTMLDivElement>
>;




type PrimitiveListItemProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"li">>;
interface NavigationMenuItemProps extends PrimitiveListItemProps {
    value?: string;
}
export const Item: React.ForwardRefExoticComponent<
  NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>
>;



type PrimitiveLinkProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"a">>;
interface NavigationMenuLinkProps extends Omit<PrimitiveLinkProps, 'onSelect'> {
    active?: boolean;
    onSelect?: (event: Event) => void;
}
export const Link: React.ForwardRefExoticComponent<
  NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>
>;



type PrimitiveUnorderedListProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"ul">>;
// deno-lint-ignore no-empty-interface
interface NavigationMenuListProps extends PrimitiveUnorderedListProps {
}
export const List: React.ForwardRefExoticComponent<
  NavigationMenuListProps & React.RefAttributes<HTMLUListElement>
>;



// deno-lint-ignore no-empty-interface
interface NavigationMenuTriggerProps extends PrimitiveButtonProps {
}
export const Trigger: React.ForwardRefExoticComponent<
  NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>
>;




// deno-lint-ignore no-empty-interface
interface NavigationMenuViewportImplProps extends PrimitiveDivProps {
}
interface NavigationMenuViewportProps extends Omit<NavigationMenuViewportImplProps, 'children' | 'activeContentValue'> {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
export const Viewport: React.ForwardRefExoticComponent<
  NavigationMenuViewportProps & React.RefAttributes<HTMLDivElement>
>;