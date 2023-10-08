import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "./type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/radix-ui/react-popper@1.1.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdC1kb206cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
*/ 

export const SIDE_OPTIONS: readonly ["top", "right", "bottom", "left"];
export const ALIGN_OPTIONS: readonly ["start", "center", "end"];
type Side = typeof SIDE_OPTIONS[number];
type Align = typeof ALIGN_OPTIONS[number];
type Boundary = Element | null;
type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;
interface PopperContentProps extends PrimitiveDivProps {
    side?: Side;
    sideOffset?: number;
    align?: Align;
    alignOffset?: number;
    arrowPadding?: number;
    avoidCollisions?: boolean;
    collisionBoundary?: Boundary | Boundary[];
    collisionPadding?: number | Partial<Record<Side, number>>;
    sticky?: 'partial' | 'always';
    hideWhenDetached?: boolean;
    updatePositionStrategy?: 'optimized' | 'always';
    onPlaced?: () => void;
}


export const Content: React.ForwardRefExoticComponent<
    PopperContentProps & React.RefAttributes<HTMLDivElement>
>;