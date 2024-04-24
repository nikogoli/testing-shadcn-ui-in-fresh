import { ClassNameValue } from './tw-join.d.ts';
import { Config } from './types.d.ts';
type CreateConfigFirst = () => Config;
type CreateConfigSubsequent = (config: Config) => Config;
type TailwindMerge = (...classLists: ClassNameValue[]) => string;
export declare function createTailwindMerge(...createConfig: [CreateConfigFirst, ...CreateConfigSubsequent[]]): TailwindMerge;
export {};
