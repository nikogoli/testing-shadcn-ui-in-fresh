import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/avatar.tsx"
 
import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "https://deno.land/x/testing_shadcn_ui_for_deno@0.0.6/components/avatar.tsx"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
`

const info = {
  title: "Avatar",
  text: "An image element with a fallback for representing the user."
}



export function AvatarDemo() {
  return (
    <DemoWrapper code_text={Code.trim()} info={info}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DemoWrapper>
  )
}