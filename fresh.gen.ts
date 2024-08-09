// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $test_index from "./routes/test/index.tsx";
import * as $App from "./islands/App.tsx";
import * as $SidePanel from "./islands/SidePanel.tsx";
import * as $ViewArea from "./islands/ViewArea.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
    "./routes/test/index.tsx": $test_index,
  },
  islands: {
    "./islands/App.tsx": $App,
    "./islands/SidePanel.tsx": $SidePanel,
    "./islands/ViewArea.tsx": $ViewArea,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
