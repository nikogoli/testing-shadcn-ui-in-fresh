import * as React from "preact/compat"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-label@2.0.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 

type PrimitiveLabelProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"label">>;
// deno-lint-ignore no-empty-interface
export interface LabelProps extends PrimitiveLabelProps {
}
export const Root: React.ForwardRefExoticComponent<
  LabelProps & React.RefAttributes<HTMLLabelElement>
>;