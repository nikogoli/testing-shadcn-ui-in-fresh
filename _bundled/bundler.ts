import { toFileUrl, resolve } from "https://deno.land/std@0.200.0/path/mod.ts"
import * as esbuild from "https://deno.land/x/esbuild@v0.19.2/mod.js"
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts"
import { PathLike } from "https://raw.githubusercontent.com/nikogoli/deno_pathlib/0.0.4/mod.ts"

const UI_DIR = new PathLike("../components/ui")
const OUT_DIR = new PathLike("./ui")

const importMapURL = toFileUrl(resolve("./import_map.json")).href
const omit_files = [
  "scroll-area.tsx",
  "separator.tsx"
]

await UI_DIR.iterdirMap(async p => await bundle_comp(p))


async function bundle_comp(input_p: PathLike){
  if (omit_files.includes(input_p.name)){return }

  const outfile_p = new PathLike(OUT_DIR, input_p.stem+".js")
  const is_exist = await outfile_p.exists()
  if (is_exist){
    console.log(`[PASS] ${outfile_p.name}`)
    return
  }
  
  esbuild.initialize({})
  await esbuild.build({
    plugins: [ ...denoPlugins({importMapURL}) ],
    entryPoints: { main: input_p.as_uri() },
    bundle: true,
    format: "esm",
    platform: "neutral",
    outfile: outfile_p.path,
    jsx: "automatic",
    jsxImportSource: "preact",
  })
    .then(() => console.log(`[create] ${outfile_p.name}`))
  
  esbuild.stop()
}

