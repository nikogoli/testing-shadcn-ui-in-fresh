import { PageProps } from "$fresh/server.ts";
import { MiddleState } from "../../types.ts";
import { Partial } from "$fresh/runtime.ts";

import SidePanel from "../../islands/SidePanel.tsx"


export default function Layout(
  { Component, state }: PageProps<unknown, MiddleState>
) {
  const { compName } = state
  return (
    <div class="layout">
      <div class="w-full h-screen p-8 grid grid-cols-4 gap-2 place-content-center"  f-client-nav>
        <SidePanel compName={compName} />
        <div class="col-span-3 flex-col-center gap-12 overflow-y-scroll">
          <Partial name="inner" >
            <Component />
          </Partial>
        </div>
      </div>
    </div>
  );
}