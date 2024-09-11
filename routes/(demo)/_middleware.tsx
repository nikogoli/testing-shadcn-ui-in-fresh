import { FreshContext } from "$fresh/server.ts";
import { MiddleState } from "../../types.ts"


export async function handler(
  req: Request,
  ctx: FreshContext<MiddleState>,
) {
  const pattern = new URLPattern({pathname:"/:name"}).exec(new URL(req.url))
  if (pattern?.pathname.groups["name"]){
    ctx.state.compName = pattern!.pathname.groups["name"]!.replace("Demo","")
  }
  return await ctx.next();
}