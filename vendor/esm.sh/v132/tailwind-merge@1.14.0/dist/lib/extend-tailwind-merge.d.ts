import { Config } from './types.d.ts';
type CreateConfigSubsequent = (config: Config) => Config;
export declare function extendTailwindMerge(configExtension: Partial<Config> | CreateConfigSubsequent, ...createConfig: CreateConfigSubsequent[]): (...classLists: import("./tw-join.d.ts").ClassNameValue[]) => string;
export {};
