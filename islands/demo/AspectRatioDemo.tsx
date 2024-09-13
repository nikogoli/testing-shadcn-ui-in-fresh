import { AspectRatio } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/aspect-ratio.tsx"

import DemoWrapper from "../_DemoWrapper.tsx"


const Code = `
import { AspectRatio } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.2/components/aspect-ratio.tsx"

export function AspectRatioDemo() {
  return (
    <div class="w-[415px]">
      <AspectRatio ratio={16 / 9} class="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="w-full h-full block rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}
`

const info = {
  title: "Aspect Ratio",
  text: "Displays content within a desired ratio."
}


export function AspectRatioDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} preview_h={300}>
      <div class="w-[415px]">
        <AspectRatio ratio={16 / 9} class="bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="w-full h-full block rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </DemoWrapper>
  )
}
