import { VNode, JSX } from "preact";
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "./type-utils.ts"

import { DialogProps } from '@radix-ui/react-dialog'

/**
 * Following type-definitions are based on "https://esm.sh/v133/cmdk@0.2.0/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.ts"
*/ 


declare type Children = {
    children?: Array<VNode | string> | VNode | string;
};
declare type DivProps = React.HTMLAttributes<HTMLDivElement>;

declare const pkg: React.ForwardRefExoticComponent<Children & DivProps & {
    /**
     * Accessible label for this command menu. Not shown visibly.
     */
    label?: string;
    /**
     * Optionally set to `false` to turn off the automatic filtering and sorting.
     * If `false`, you must conditionally render valid items based on the search query yourself.
     */
    shouldFilter?: boolean;
    /**
     * Custom filter function for whether each command menu item should matches the given search query.
     * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
     * By default, uses the `command-score` library.
     */
    filter?: (value: string, search: string) => number;
    /**
     * Optional controlled state of the selected command menu item.
     */
    value?: string;
    /**
     * Event handler called when the selected item of the menu changes.
     */
    onValueChange?: (value: string) => void;
    /**
     * Optionally set to `true` to turn on looping around when using the arrow keys.
     */
    loop?: boolean;
} & React.RefAttributes<HTMLDivElement>> & {
    List: React.ForwardRefExoticComponent<Children & DivProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Children & Omit<DivProps, "disabled" | "onSelect" | "value"> & {
        /** Whether this item is currently disabled. */
        disabled?: boolean;
        /** Event handler for when this item is selected, either via click or keyboard selection. */
        onSelect?: (value: string) => void;
        /**
         * A unique value for this item.
         * If no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`.
         */
        value?: string;
    } & React.RefAttributes<HTMLDivElement>>;
    Input: React.ForwardRefExoticComponent<Omit<JSX.HTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> & {
        /**
         * Optional controlled state for the value of the search input.
         */
        value?: string;
        /**
         * Event handler called when the search value changes.
         */
        onValueChange?: (search: string) => void;
    } & React.RefAttributes<HTMLInputElement>>;
    Group: React.ForwardRefExoticComponent<Children & Omit<DivProps, "value" | "heading"> & {
        /** Optional heading to render for this group. */
        heading?: VNode | string;
        /** If no heading is provided, you must provide a value that is unique for this group. */
        value?: string;
    } & React.RefAttributes<HTMLDivElement>>;
    Separator: React.ForwardRefExoticComponent<DivProps & {
        /** Whether this separator should always be rendered. Useful if you disable automatic filtering. */
        alwaysRender?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    Dialog: React.ForwardRefExoticComponent<DialogProps & Children & DivProps & {
        /**
         * Accessible label for this command menu. Not shown visibly.
         */
        label?: string;
        /**
         * Optionally set to `false` to turn off the automatic filtering and sorting.
         * If `false`, you must conditionally render valid items based on the search query yourself.
         */
        shouldFilter?: boolean;
        /**
         * Custom filter function for whether each command menu item should matches the given search query.
         * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
         * By default, uses the `command-score` library.
         */
        filter?: (value: string, search: string) => number;
        /**
         * Optional controlled state of the selected command menu item.
         */
        value?: string;
        /**
         * Event handler called when the selected item of the menu changes.
         */
        onValueChange?: (value: string) => void;
        /**
         * Optionally set to `true` to turn on looping around when using the arrow keys.
         */
        loop?: boolean;
    } & {
        /** Provide a custom element the Dialog should portal into. */
        container?: HTMLElement;
    } & React.RefAttributes<HTMLDivElement>>;
    Empty: React.ForwardRefExoticComponent<Children & DivProps & React.RefAttributes<HTMLDivElement>>;
    Loading: React.ForwardRefExoticComponent<Children & {
        /** Estimated progress of loading asynchronous options. */
        progress?: number;
    } & React.RefAttributes<HTMLDivElement>>;
};

export {
    pkg as Command,
}