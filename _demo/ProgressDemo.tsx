import DemoWrapper from "./_DemoWrapper.tsx"
import { useState, useEffect } from "preact/hooks"


const Code = `
import { Progress } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/progress.tsx"
import { useState, useEffect } from "preact/hooks"
import { Button } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx"
import IconReload from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/reload.tsx"

export function ProgressDemo() {
  const [progress, setProgress] = useState(-3)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100){ setProgress(prev => prev+1) }
      else { clearTimeout(timer) }
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div class="flex gap-6 items-center">
      <Progress value={progress} class="w-80" />
      <Button disabled={progress < 100} variant="outline" class="w-fit h-fit"
              onClick={_ev => setProgress(-3)} >
        <IconReload class="w-4 h-4" />
      </Button>
    </div>
  )
}
`


const info = {
  title: "Progress",
  text: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
}


export function ProgressDemo() {
  const createComp = async () => {
    const { Progress } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/progress.tsx")
    const { Button } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/button.tsx")
    const { default: IconReload } = await import("https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/reload.tsx")

    const Demo = () => {
      const [progress, setProgress] = useState(-3)

      useEffect(() => {
        const timer = setInterval(() => {
          if (progress < 100){ setProgress(prev => prev+1) }
          else { clearTimeout(timer) }
        }, 80)
        return () => clearTimeout(timer)
      }, [])
  
      return (
        <div class="flex gap-6 items-center">
          <Progress value={progress} class="w-80" />
          <Button disabled={progress < 100} variant="outline" class="w-fit h-fit"
                  onClick={_ev => setProgress(-3)} >
            <IconReload class="w-4 h-4" />
          </Button>
        </div>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
  )
}
