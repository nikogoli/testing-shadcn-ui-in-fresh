import * as React from "preact/compat"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-toggle@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjE1LjEKZS8q/dist/index.d.ts"
 */ 

type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>;
export interface ToggleProps extends PrimitiveButtonProps {
    /**
     * The controlled state of the toggle.
     */
    pressed?: boolean;
    /**
     * The state of the toggle when initially rendered. Use `defaultPressed`
     * if you do not need to control the state of the toggle.
     * @defaultValue false
     */
    defaultPressed?: boolean;
    /**
     * The callback that fires when the state of the toggle changes.
     */
    onPressedChange?(pressed: boolean): void;
}

export const Toggle: React.ForwardRefExoticComponent<
  ToggleProps & React.RefAttributes<HTMLButtonElement>
>;

export const Root: React.ForwardRefExoticComponent<
  ToggleProps & React.RefAttributes<HTMLButtonElement>
>;