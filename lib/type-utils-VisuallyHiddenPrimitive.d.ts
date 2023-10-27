import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "./type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-visually-hidden@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
*/ 

type PrimitiveSpanProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"span">>;
// deno-lint-ignore no-empty-interface
interface VisuallyHiddenProps extends PrimitiveSpanProps {
}
export const Root: React.ForwardRefExoticComponent<
    VisuallyHiddenProps & React.RefAttributes<HTMLSpanElement>
>;