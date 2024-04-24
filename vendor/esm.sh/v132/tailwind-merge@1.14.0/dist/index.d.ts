import { twJoin } from './lib/tw-join.d.ts';
export { createTailwindMerge } from './lib/create-tailwind-merge.d.ts';
export { getDefaultConfig } from './lib/default-config.d.ts';
export { extendTailwindMerge } from './lib/extend-tailwind-merge.d.ts';
export { fromTheme } from './lib/from-theme.d.ts';
export { mergeConfigs } from './lib/merge-configs.d.ts';
export { twJoin, type ClassNameValue } from './lib/tw-join.d.ts';
export { twMerge } from './lib/tw-merge.d.ts';
export type { Config } from './lib/types.d.ts';
export * as validators from './lib/validators.d.ts';
/**
 * @deprecated Will be removed in next major version. Use `twJoin` instead.
 */
export declare const join: typeof twJoin;
