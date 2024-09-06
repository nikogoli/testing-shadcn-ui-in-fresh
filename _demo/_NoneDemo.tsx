import DemoWrapper from "./_DemoWrapper.tsx"


const info = {
  title: "",
  text: "Select a component from the list in the side panel."
}

export function NoneDemo() {
  return (
    <DemoWrapper code_text="" info={info} funcCompForDemo={null} />
  )
}