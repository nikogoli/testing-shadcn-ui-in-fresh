import { Progress } from "../../testing_shadcn_ui_for_deno/components/progress.tsx"
import { useState, useEffect, useRef } from "preact/hooks"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Progress } from "../../testing_shadcn_ui_for_deno/components/progress.tsx"
import { useState, useEffect, useRef } from "preact/hooks"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic" variant="default">
      <IconBold class="h-4 w-4" />
    </Toggle>
  )
}
`


const info = {
  title: "Progress",
  text: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
}


export function ProgressDemo() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <Progress value={progress} class="w-[60%]" />
    </DemoWrapper>
  )
}
