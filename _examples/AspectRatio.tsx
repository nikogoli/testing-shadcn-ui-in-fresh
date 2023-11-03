import { AspectRatio } from "../components/ui/aspect-ratio.tsx"

export function AspectRatioDemo() {
  return (
    <div class="w-[60%]">
      <AspectRatio ratio={16 / 9} class="bg-muted">
        <image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          class="w-full h-full block rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}
