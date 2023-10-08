import * as React from "preact/compat"
import * as AltMenuPrimitive from "../type-utils-MenuPrimitve.d.ts"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"


/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-context-menu@2.1.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 



type MenuCheckboxItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.CheckboxItem>;
// deno-lint-ignore no-empty-interface
interface ContextMenuCheckboxItemProps extends MenuCheckboxItemProps {
}
export const CheckboxItem: React.ForwardRefExoticComponent<
    ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>
>;




type MenuContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Content>;
// deno-lint-ignore no-empty-interface
interface ContextMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus' | 'side' | 'sideOffset' | 'align'> {
}

export const Content: React.ForwardRefExoticComponent<
    ContextMenuContentProps & React.RefAttributes<HTMLDivElement>
>;




type MenuSubContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubContent>;
// deno-lint-ignore no-empty-interface
interface ContextMenuSubContentProps extends MenuSubContentProps {
}

export const SubContent: React.ForwardRefExoticComponent<
    ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>
>;



type MenuItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Item>;
 // deno-lint-ignore no-empty-interface
 interface ContextMenuItemProps extends MenuItemProps {
}
export const Item: React.ForwardRefExoticComponent<
    ContextMenuItemProps & React.RefAttributes<HTMLDivElement>
>;



type MenuLabelProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Label>;
// deno-lint-ignore no-empty-interface
interface ContextMenuLabelProps extends MenuLabelProps {
}
export const Label: React.ForwardRefExoticComponent<
    ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>
>;




type MenuRadioItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioItem>;
// deno-lint-ignore no-empty-interface
interface ContextMenuRadioItemProps extends MenuRadioItemProps {
}
export const RadioItem: React.ForwardRefExoticComponent<
    ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>
>;




type MenuSubTriggerProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubTrigger>;
// deno-lint-ignore no-empty-interface
interface ContextMenuSubTriggerProps extends MenuSubTriggerProps {
}

export const SubTrigger: React.ForwardRefExoticComponent<
  ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>
>;




type MenuSeparatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Separator>;
// deno-lint-ignore no-empty-interface
interface ContextMenuSeparatorProps extends MenuSeparatorProps {
}
export const Separator: React.ForwardRefExoticComponent<
    ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>
>;