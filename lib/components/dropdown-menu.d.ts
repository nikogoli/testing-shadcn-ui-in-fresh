import * as React from "preact/compat"
import * as AltMenuPrimitive from "../type-utils-MenuPrimitve.d.ts"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"


/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-dropdown-menu@2.0.6/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


type MenuCheckboxItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.CheckboxItem>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {
}
export const CheckboxItem: React.ForwardRefExoticComponent<
    DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>
>;

type MenuContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Content>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus'> {
}
export const Content: React.ForwardRefExoticComponent<
    DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>
>;




type MenuSubContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubContent>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuSubContentProps extends MenuSubContentProps {
}
export const SubContent: React.ForwardRefExoticComponent<
    DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>
>;



type MenuItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Item>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuItemProps extends MenuItemProps {
}
export const Item: React.ForwardRefExoticComponent<
    DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>
>;



type MenuLabelProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Label>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuLabelProps extends MenuLabelProps {
}
export const Label: React.ForwardRefExoticComponent<
    DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>
>;


type MenuRadioItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioItem>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuRadioItemProps extends MenuRadioItemProps {
}
export const RadioItem: React.ForwardRefExoticComponent<
    DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>
>;



type MenuSeparatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Separator>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuSeparatorProps extends MenuSeparatorProps {
}
export const Separator: React.ForwardRefExoticComponent<
    DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>
>;




type MenuSubTriggerProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubTrigger>;
// deno-lint-ignore no-empty-interface
interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {
}
export const SubTrigger: React.ForwardRefExoticComponent<
    DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>
>;