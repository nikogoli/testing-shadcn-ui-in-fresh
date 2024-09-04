import { render, JSX } from "preact"


export default async function useRender (
  vnode: JSX.Element | (()=>Promise<JSX.Element>),
  applyFuncForEach: (arg:Element) => void
) {
  const temp = document.createElement("div")
  const elem = typeof vnode === "function"
    ? await vnode()
    : vnode
    
  render(elem, temp)
  if (!temp.children){
    throw new Error("render(vnode, HTMLDivElement) failed.")
  } else {
    Array.from(temp.children).forEach(elem => applyFuncForEach(elem))
  }
}