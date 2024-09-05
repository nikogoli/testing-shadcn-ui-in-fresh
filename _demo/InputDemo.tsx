import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import { Input } from "https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx"

export function InputDemo() {
  return (<Input type="email" placeholder="Email" class="w-90% max-w-450px" />)
}
`

const info = {
  title: "Input",
  text: "Displays a form input field or a component that looks like an input field."
}


export function InputDemo() {
  const createComp = async () => {
    const { Input } = await import("https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/input.tsx")

    const Demo = () => {
      return ( 
        <Input type="email" placeholder="Email" class="w-90% max-w-450px" />
      )
    }
    return Demo
  }
  
  return(
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp} />
)}
