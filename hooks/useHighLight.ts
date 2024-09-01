import { dedent } from "https://esm.sh/@qnighy/dedent@0.1.1";

/**
 * This script is based on "https://zenn.dev/kstdx/articles/2874b355035d22",
 * but that blog had been deleted...
 */


type DataTypeBase = {
  type: string,
  match: RegExp,
  name?: string,
  overraped?: (data:DataType) => boolean
}


type DataType = {
  match: RegExp,
  sub: string,
  name?: string,
  overraped?: (data:DataType) => boolean,
} | {
  match: RegExp,
  handleGroups: Record<string, string>,
  name?: string,
  overraped?: (data:DataType) => boolean,
} | DataTypeBase


type DataDict = {
  items: Array<DataType>,
  type: string | null
}


/** from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/todo.js' */
const ToDo = {items: [
  {
    type: 'err',
    match: /\b(TODO|FIXME|DEBUG|OPTIMIZE|WARNING|XXX|BUG)\b/g
  },
  {
    type: 'class',
    match: /\bIDEA\b/g
  },
  {
    type: 'insert',
    match: /\b(CHANGED|FIX|CHANGE)\b/g
  },
  {
    type: 'oper',
    match: /\bQUESTION\b/g
  }
], type: 'cmnt'} satisfies DataDict


/** from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/jsdoc.js' */
const JsDoc = {items: [
  { type: 'kwd',
    match: /@\w+/g
  },
  { type: 'class',
    match: /{[\w\s|<>,.@\[\]]+}/g
  },
  { type: 'var',
    match: /\[[\w\s="']+\]/g
  },
  ...ToDo.items
], type: 'cmnt'} satisfies DataDict


/** from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/regex.js' */
const RegEx = {items: [
  {
    match: /^(?!\/).*/gm,
    sub: 'todo'
  },
  {
    type: 'num',
    match: /\[((?!\])[^\\]|\\.)*\]/g
  },
  {
    type: 'kwd',
    match: /\||\^|\$|\\.|\w+($|\r|\n)/g
  },
  {
    type: 'var',
    match: /\*|\+|\{\d+,\d+\}/g
  }
], type: 'oper'} satisfies DataDict


const JsxProps: DataDict = {
  items: [
    { match: /(?<name>\s\s*\w+?)(?<val>(?:=["'].+?["'])|(?:={[\S\s]+?}))/g,
      handleGroups: {
        name: 'TYPE:insert',
        val: 'ts'
      }
    },
    { match: /\s\s*\w+?\b/g,
      type: 'insert'
    }
  ],
  type: null
}


const Jsx:DataDict = {
  items: [
    { match: /(?<open><\/?)(?<name>[\w.]+\b)(?<props>(?:(?:\s*\s[\w-]+\b)|(?:\s\s*[\w-]+=["'].+?["'])|(?:\s\s*[\w-]+={[\S\s]+?}))*?)(?<close>\s*\/?>)/g,
      handleGroups: {
        open: 'TYPE:oper',
        name: 'TYPE:class',
        props: 'jsx_props',
        close: 'TYPE:oper',
      }
    },
    { match: /{[\S\s]+?}/g,
      sub: 'ts'
    }
  ],
  type: null
}



/** from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/js.js' */
const JavaScript: DataDict = {items: [
  { match: /\/\*\*((?!\*\/)[^])*(\*\/)?/g,
    sub: 'jsdoc'
  },
  { match: /\/\/.*\n?|\/\*((?!\*\/)[^])*(\*\/)?/g,
    sub: 'todo'
  },
  { type: 'str',
    match: /(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g,
  },
  { match: /`((?!`)[^]|\\[^])*`?/g,
    type: 'str'
  },
  { type: 'kwd',
    match: /=>|\b(this|set|get|as|async|await|break|case|catch|class|const|constructor|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|if|implements|import|in|instanceof|interface|let|var|of|new|package|private|protected|public|return|static|super|switch|throw|throws|try|typeof|void|while|with|yield)\b/g,
    name: 'jskwd'
  },
  { match: /\/((?!\/)[^\r\n\\]|\\.)+\/[dgimsuy]*/g,
    sub: 'regex'
  },
  { type: 'num',
    match: /(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g,
  },
  { type: 'num',
    match: /\b(NaN|null|undefined|[A-Z][A-Z_]*)\b/g
  },
  { type: 'bool',
    match: /\b(true|false)\b/g
  },
  { type: 'oper',
    match: /[/*+:?&|%^~=!,<>.^-]+/g,
    name: 'oper',
  },
  { type: 'class',
    match: /\b[A-Z][\w_]*\b/g
  },
  { type: 'func',
    match: /[a-zA-Z$_][\w$_]*(?=\s*((\?\.)?\s*\(|=\s*(\(?[\w,{}\[\])]+\)? =>|function\b)))/g
  },
  { match: /(?<start>return\s*\(\s*)(?<jsx><[\w.]+[\S\s]+?(?:<\/[\w.]+?>|\/>))(?<end>\s*\)\s*}\n*)/g,
    handleGroups: {
      start: 'ts',
      jsx: 'jsx',
      end: 'ts'
    },
    overraped: (data:DataType)=>{
      return data.name ? data.name == "jskwd" : false
    },
  },
  { match: /(?<start>=>\s*\(\s*)(?<jsx><[\w.]+\b[\S\s]+?(?:<\/[\w.]+?>|\/>))(?<end>\s*\)\n*)/g,
    handleGroups: {
      start: 'ts',
      jsx: 'jsx',
      end: 'ts'
    },
    overraped: (data:DataType)=>{
      return data.name ? data.name == "jskwd" : false
    },
  },
], type: null}


/** from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/ts.js' */
const TypeScript: DataDict = {items: [
  {
    type: 'type',
    match: /:\s*(any|void|number|boolean|string|object|never|enum)\b/g
  },
  {
    type: 'kwd',
    match: /\b(type|namespace|typedef|interface|public|private|protected|implements|declare|abstract|readonly)\b/g
  },
  ...JavaScript.items
], type: null}


const langs: Record<string, DataDict> = {
  js: JavaScript,
  ts: TypeScript,
  todo: ToDo,
  jsdoc: JsDoc,
  regex: RegEx,
  jsx: Jsx,
  jsx_props: JsxProps,
}


const sanitize = (str = '') =>str.replaceAll('&', '&#38;')
              .replaceAll?.('<', '&lt;')
              .replaceAll?.('>', '&gt;')


const toSpan = (str:string, tokenType: string|null) => tokenType
  ? `<span class="shj-syn-${tokenType}">${str}</span>`
  : str


type MatchedData = {
  data: DataType,
  match: RegExpMatchArray,
  endIndex: number,
}


export function tokenize(
  src: string,
  lang: string | DataDict,
  toToken: (str: string, type: string | null) => string,
  debug: boolean
) {
  let i = 0
  let actMatchData: MatchedData | null = null
  
  const data = (typeof lang === 'string') ? langs[lang] : lang
  const cache: Map<number, RegExpMatchArray|null> = new Map(
    data.items.map((_x, idx) => [idx, null])
  )
  const noMatchId: Array<number> = []

  while (i < src.length) {
    if (debug){ console.log(`\n------------------- ${i} --------------`) }
    actMatchData = null
    data.items.forEach((data, idx) => {
      if (noMatchId.includes(idx)){ return }

      let matchedArr = cache.get(idx)

      // キャッシュされていない(=初ヒット) or キャッシュされた前回のヒットが
      // 現在の match の開始点より前(=前回ヒットは不使用)の場合のみ、
      // match を実施する
      if ( !matchedArr || matchedArr.index! < i){
        // match の出発点を i字目に設定する
        data.match.lastIndex = i
        const matched = data.match.exec(src)
        if (matched === null) { // 1つもヒットしない場合は、以後利用しない
          noMatchId.push(idx)
          matchedArr = null
        }
        // ヒットした最初の結果をキャッシュする
        cache.set(idx, matched)
        matchedArr = matched
      }
      if (matchedArr === null){ return }
      if (debug){
        console.log(matchedArr)
        console.log(`lastIndex: ${data.match.lastIndex}`)
      }

      // 可能性 1. 上の if節 の中でヒットがあった
      //        2. キャッシュされた以前のヒットが現在の検索開始点より後ろ

      // 記録されたヒットがない or 記録されたヒットよりもヒット位置が前なら、
      // 現在のヒット結果を記録する
      if (actMatchData === null){
        actMatchData = {
          data, match: matchedArr, endIndex: matchedArr.index! + matchedArr[0].length
        }
      }
      const actIndex = actMatchData.match.index!
      const actData = actMatchData.data
      if (
          matchedArr.index! < actIndex ||
          (matchedArr.index! == actIndex && data.overraped && data.overraped(actData) )
        ){
        actMatchData = {
          data, match: matchedArr, endIndex: matchedArr.index! + matchedArr[0].length
        }
      }
    })

    const matchedData = (actMatchData as MatchedData | null)
    // 全ての候補で検索してもヒットがない場合は終了する
    if (matchedData === null){ break }
    if (debug){ 
      console.log(`\n------------------- matchedData --------------`)
      console.log(matchedData)
      console.log(`------------------------------------------\n`)
    }

    const txtToMached = src.slice(i, matchedData.match.index!)
    toToken(txtToMached, data.type)

    // 次の検索開始点を match した部分の最後尾に変更
    i = matchedData.endIndex

    const matchedTxt = matchedData.match[0]
    // sub がある場合が、ヒット部分の内部の再帰的な検索を行う
    if ("sub" in matchedData.data){
      const newDict = langs[matchedData.data.sub]
      if (!newDict){ throw new Error(`sub-name "${matchedData.data.sub}" is not in langs.`) }
      tokenize(matchedTxt, newDict, toToken, debug)
    }
    else if ("handleGroups" in matchedData.data){
      const handler = matchedData.data.handleGroups
      Object.entries(matchedData.match.groups!).forEach(([ky, groupedTxt]) => {
        if (ky in handler){
          const handle = handler[ky]
          if (handle.startsWith("TYPE:")){
            toToken(groupedTxt, handle.split(":")[1])
          }
          else {
            const newDict = langs[handler[ky]]
            if (!newDict){ throw new Error(`sub-name "${handler[ky]}" is not in langs.`) }
            tokenize(groupedTxt, newDict, toToken, debug)
          }
        }
      })
    }
    else {
      toToken(matchedTxt, matchedData.data.type)
    }
  }

  // ヒットがなくなり break された場合は、残りを処理する
  toToken(src.slice(i, src.length), data.type)
}


export function highlightText(
  src:string,
  lang:string,
  showLineNumbers =true,
  debug = false,
) {
  let tmp = ''
  const toToken = (str:string, type:string|null) => (tmp += toSpan(sanitize(str), type))
  tokenize(src, lang, toToken, debug)

  return showLineNumbers
  ? dedent`<div>
      <div class="shj-numbers">
        ${'<div></div>'.repeat(src.split('\n').length)}
      </div>
      <div>${tmp}</div>
    </div>`
  : tmp
}