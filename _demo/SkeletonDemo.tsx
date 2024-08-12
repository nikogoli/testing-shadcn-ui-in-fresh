import { Skeleton } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/skeleton.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Skeleton } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/skeleton.tsx'

export function SkeletonDemo() {
  return (
    <div class="flex items-center space-x-4">
      <Skeleton class="h-12 w-12 rounded-full" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-[250px]" />
        <Skeleton class="h-4 w-[200px]" />
      </div>
    </div>
  )
}
`

const info = {
  title: "Skeleton",
  text: "Use to show a placeholder while content is loading."
}


export function SkeletonDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </DemoWrapper>
  )
}
