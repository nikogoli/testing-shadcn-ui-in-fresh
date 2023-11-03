import { asset } from "$fresh/runtime.ts"
import App from "../islands/App.tsx"


export default function Home(){
  return (
    <div>
      <App />
      <link href={asset("/uno.css")} rel="stylesheet" />
      <style> {`button:focus { outline-style: none !important}`} </style>
    </div>
  )
}