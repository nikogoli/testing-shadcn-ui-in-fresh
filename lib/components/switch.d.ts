import * as React from "preact/compat"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v133/@radix-ui/react-switch@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>
interface SwitchProps extends PrimitiveButtonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onCheckedChange?(checked: boolean): void;
}
export const Root: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;