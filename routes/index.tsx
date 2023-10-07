import { asset } from "$fresh/runtime.ts"
//import { Toaster } from "./components/ui/toaster"
import App from "../islands/App.tsx"


export default function Home(){
  return (
    <div>
      <App />
      {/*<Toaster />*/}
      <link href={asset("/uno.css")} rel="stylesheet" />
    </div>
  )
}