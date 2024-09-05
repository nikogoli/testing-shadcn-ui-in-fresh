import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Textarea } from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/textarea.tsx'

export function TextareaDemo() {
  return (<Textarea placeholder="Type your message here." class='w-[400px]' />)
}
`

const info = {
  title: "Textarea",
  text: "Displays a form textarea or a component that looks like a textarea."
}


export function TextareaDemo() {
  const createComp = async () => {
    const { Textarea } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/textarea.tsx')
    const Demo = () => {
      return (
        <Textarea placeholder="Type your message here." class='w-[400px]' />
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
)}
