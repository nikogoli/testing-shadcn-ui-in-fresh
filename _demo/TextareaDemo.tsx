import { Textarea } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/textarea.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Textarea } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/textarea.tsx'

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." class='!w-100' />
}
`


export function TextareaDemo() {
  return (
    <DemoWrapper code_text={Code.trim()}>
      <Textarea placeholder="Type your message here." class='!w-100' />
    </DemoWrapper>
  
)}
