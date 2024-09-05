import DemoWrapper from "./_DemoWrapper.tsx"


const Code = `
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from 'https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/accordion.tsx'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible class="w-[500px]" >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`


const info = {
  title: "Accordion",
  text: "A vertically stacked set of interactive headings that each reveal a section of content."
}


const has_error = {
  type: "minor" as const,
  text: "The closing-animation is not played.\nThe opening-animation is not played smoothly."
}


export function AccordionDemo() {
  async function createComp() {
    const {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger
    } = await import('https://deno.land/x/testing_shadcn_ui_for_deno@0.1.1/components/accordion.tsx')

    const Demo = () => {
      return(
        <Accordion type="single" collapsible class="w-[500px]" >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    }
    return Demo
  }

  return (
    <DemoWrapper code_text={Code.trim()} info={info} funcCompForDemo={createComp}
                has_error={has_error} preview_h={280} place_class="justify-center" />
  )
}
