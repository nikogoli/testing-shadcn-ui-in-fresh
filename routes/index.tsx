import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts"
import App from "../islands/App.tsx"


export default function Home(){
  return (
    <>
      <Head>
        <link href={asset("/default.css")} rel="stylesheet" />
        <link href={asset("/visual-studio-dark.css")} rel="stylesheet" />
        <style>{`
          :root{
            --background: 0 0% 100%;
            --foreground: 240 10% 3.9%;
            --card: 0 0% 100%;
            --card-foreground: 240 10% 3.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 240 10% 3.9%;
            --primary: 240 5.9% 10%;
            --primary-foreground: 0 0% 98%;
            --secondary: 240 4.8% 95.9%;
            --secondary-foreground: 240 5.9% 10%;
            --muted: 240 4.8% 95.9%;
            --muted-foreground: 240 3.8% 46.1%;
            --accent: 240 4.8% 95.9%;
            --accent-foreground: 240 5.9% 10%;
            --destructive: 0 72.22% 50.59%;
            --destructive-foreground: 0 0% 98%;
            --border: 240 5.9% 90%;
            --input: 240 5.9% 90%;
            --ring: 240 5% 64.9%;
            --radius: 0.5rem
          }
      `}</style>
      </Head>
      <div>
        <App />
      </div>
    </>
  )
}