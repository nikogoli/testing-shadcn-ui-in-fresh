import { Fragment } from "preact"
import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Fragment } from "preact";
import { ScrollArea } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/scroll-area.tsx"
import { Separator } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/separator.tsx"

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {[...Array(50)].map((_x, idx) => (
          <Fragment>
            <div key={\`v1.2.0-beta.\${idx+1}\`} class="text-sm">
              {\`v1.2.0-beta.\${idx+1}\`}
            </div>
            <Separator className="my-2" />
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
`

const info = {
  title: "Scroll-area",
  text: "Augments native scroll functionality for custom, cross-browser styling."
}


export function ScrollAreaDemo() {
  const createComp = async () => {
    const { ScrollArea } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/scroll-area.tsx")
    const { Separator } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/separator.tsx")

    const Demo = () => {
      return (
        <ScrollArea class="h-72 w-48 rounded-md border">
          <div class="p-4">
            <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
            {[...Array(50)].map((_x, idx) => (
              <Fragment>
                <div key={`v1.2.0-beta.${50-idx}`} class="text-sm">
                  {`v1.2.0-beta.${50-idx}`}
                </div>
                <Separator class="my-2" />
              </Fragment>
            ))}
          </div>
        </ScrollArea>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp}
                 preview_h={350} />
  )
}
