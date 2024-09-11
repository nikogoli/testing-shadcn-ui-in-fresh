import DemoWrapper from "../../islands/_DemoWrapper.tsx"


const info = {
  title: "",
  text: "Select a component from the list in the side panel."
}

export default function NoneDemo() {
  return (
    <DemoWrapper code_text={`\n\n\n`} info={info} />
  )
}