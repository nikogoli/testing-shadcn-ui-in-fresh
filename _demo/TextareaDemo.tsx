import { Textarea } from '../../testing_shadcn_ui_for_deno/components/textarea.tsx'

import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Textarea } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.0.9/components/textarea.tsx'

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." class='w-[400px]' />
}
`

const info = {
  title: "Textarea",
  text: "Displays a form textarea or a component that looks like a textarea."
}


export function TextareaDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info} >
      <Textarea placeholder="Type your message here." class='w-[400px]' />
    </DemoWrapper>
  
)}
