import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "./type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-roving-focus@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
*/ 



type Orientation = React.HTMLAttributes['aria-orientation'];
type Direction = 'ltr' | 'rtl';
interface RovingFocusGroupOptions {
    /**
     * The orientation of the group.
     * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
     */
    orientation?: Orientation;
    /**
     * The direction of navigation between items.
     */
    dir?: Direction;
    /**
     * Whether keyboard navigation should loop around
     * @defaultValue false
     */
    loop?: boolean;
}

type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;
interface RovingFocusGroupImplProps extends Omit<PrimitiveDivProps, 'dir'|'loop'>, RovingFocusGroupOptions {
    currentTabStopId?: string | null;
    defaultCurrentTabStopId?: string;
    onCurrentTabStopIdChange?: (tabStopId: string | null) => void;
    onEntryFocus?: (event: Event) => void;
}

// deno-lint-ignore no-empty-interface
interface RovingFocusGroupProps extends RovingFocusGroupImplProps {
}

export const Root: React.ForwardRefExoticComponent<
    RovingFocusGroupProps & React.RefAttributes<HTMLDivElement>
>;