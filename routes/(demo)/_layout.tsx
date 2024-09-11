import { PageProps } from "$fresh/server.ts";
import { MiddleState } from "../../types.ts";

import SidePanel from "../../islands/SidePanel.tsx"


export default function Layout(
  { Component, state }: PageProps<unknown, MiddleState>
) {
  const { compName } = state
  return (
    <div class="layout">
      <div class="w-full h-screen p-8 grid grid-cols-4 gap-2 place-content-center">
        <SidePanel compName={compName} />
        <div class="col-span-3 flex-col-center gap-12 overflow-y-scroll">
          <Component />
        </div>
      </div>
    </div>
  );
}