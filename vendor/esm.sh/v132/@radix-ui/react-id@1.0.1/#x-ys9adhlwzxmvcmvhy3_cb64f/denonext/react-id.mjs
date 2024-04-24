/* esm.sh - esbuild bundle(@radix-ui/react-id@1.0.1) denonext production */
import*as a from"preact/compat";import{useLayoutEffect as f}from"@radix-ui/react-use-layout-effect";var u=a["useId".toString()]||(()=>{}),r=0;function n(t){let[e,o]=a.useState(u());return f(()=>{t||o($=>$??String(r++))},[t]),t||(e?`radix-${e}`:"")}export{n as useId};
//# sourceMappingURL=react-id.mjs.map