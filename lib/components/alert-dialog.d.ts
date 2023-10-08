import * as React from "preact/compat"
import { ComponentPropsWithoutRef } from "../type-utils.ts"
import * as AltDialogPrimitive from "../type-utils-DialogPrimitive.d.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-alert-dialog@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.ts"
 */ 


type DialogProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Root>
// deno-lint-ignore no-empty-interface
interface AlertDialogProps extends Omit<DialogProps, 'modal'> {
}

export const Root: React.FC<AlertDialogProps>;




type DialogTriggerProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Trigger>;
// deno-lint-ignore no-empty-interface
interface AlertDialogTriggerProps extends DialogTriggerProps {
}

export const Trigger: React.ForwardRefExoticComponent<
  AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>;



type DialogPortalProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Portal>;
// deno-lint-ignore no-empty-interface
interface AlertDialogPortalProps extends DialogPortalProps {
}

export const Portal: React.FC<AlertDialogPortalProps>;



type DialogOverlayProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Overlay>;
// deno-lint-ignore no-empty-interface
interface AlertDialogOverlayProps extends DialogOverlayProps {
}

export const Overlay: React.ForwardRefExoticComponent<
  AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>
>;



type DialogContentProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Content>;
// deno-lint-ignore no-empty-interface
interface AlertDialogContentProps extends Omit<DialogContentProps, 'onPointerDownOutside' | 'onInteractOutside'> {
}

export const Content: React.ForwardRefExoticComponent<
  AlertDialogContentProps & React.RefAttributes<HTMLDivElement>
>;



type DialogCloseProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Close>;
// deno-lint-ignore no-empty-interface
interface AlertDialogActionProps extends DialogCloseProps {
}

export const Action: React.ForwardRefExoticComponent<
  AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>
>;



// deno-lint-ignore no-empty-interface
interface AlertDialogCancelProps extends DialogCloseProps {
}
export const Cancel: React.ForwardRefExoticComponent<
  AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>
>;



type DialogTitleProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Title>;
// deno-lint-ignore no-empty-interface
interface AlertDialogTitleProps extends DialogTitleProps {
}

export const Title: React.ForwardRefExoticComponent<
  AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>
>;



type DialogDescriptionProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Description>;
// deno-lint-ignore no-empty-interface
interface AlertDialogDescriptionProps extends DialogDescriptionProps {
}

export const Description: React.ForwardRefExoticComponent<
  AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>;