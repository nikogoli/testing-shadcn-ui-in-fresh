import * as React from "preact/compat"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v133/@radix-ui/react-slider@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;
type SliderOrientationPrivateProps = {
  min: number;
  max: number;
  inverted: boolean;
  onSlideStart?(value: number): void;
  onSlideMove?(value: number): void;
  onSlideEnd?(): void;
  onHomeKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
  onEndKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
  onStepKeyDown(step: {
      event: React.JSX.TargetedKeyboardEvent<HTMLElement>;
      direction: number;
  }): void;
};
type SliderImplPrivateProps = {
  onSlideStart(event: React.JSX.TargetedPointerEvent<HTMLElement>): void;
  onSlideMove(event: React.JSX.TargetedPointerEvent<HTMLElement>): void;
  onSlideEnd(event: React.JSX.TargetedPointerEvent<HTMLElement>): void;
  onHomeKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
  onEndKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
  onStepKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
};
interface SliderImplProps extends PrimitiveDivProps, SliderImplPrivateProps {
}
type Direction = 'ltr' | 'rtl';
interface SliderOrientationProps extends Omit<SliderImplProps, keyof SliderImplPrivateProps|"min"|"max">, SliderOrientationPrivateProps {
}
interface SliderHorizontalProps extends SliderOrientationProps {
  dir?: Direction;
}
// deno-lint-ignore no-empty-interface
interface SliderVerticalProps extends SliderOrientationProps {
}
interface SliderProps extends Omit<SliderHorizontalProps | SliderVerticalProps, keyof SliderOrientationPrivateProps | 'defaultValue' | 'value'> {
  name?: string;
  disabled?: boolean;
  orientation?: React.HTMLAttributes['aria-orientation'];
  dir?: Direction;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
  value?: number[];
  defaultValue?: number[];
  onValueChange?(value: number[]): void;
  onValueCommit?(value: number[]): void;
  inverted?: boolean;
}
export const Root: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;