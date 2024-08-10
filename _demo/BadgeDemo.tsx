import { Badge } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/badge.tsx"

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Badge } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.5/components/badge.tsx"

export function BadgeDemo() {
  return <Badge variant="default">Badge</Badge>
}
`

export function BadgeDemo() {
  return(
    <DemoWrapper code_text={Code.trim()}>
      <Badge variant="default">Badge</Badge>
    </DemoWrapper>
)}