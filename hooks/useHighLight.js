// from "https://zenn.dev/kstdx/articles/2874b355035d22"

const expandData = {
    num: {
        type: 'num',
        match: /(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g
    },
    str: {
        type: 'str',
        match: /(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g
    },
    strDouble: {
        type: 'str',
        match: /"((?!")[^\r\n\\]|\\[^])*"?/g
    }
}

/** from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/js.js' */
const JavaScript = [
	{
		match: /\/\*\*((?!\*\/)[^])*(\*\/)?/g,
		sub: 'jsdoc'
	},
	{
		match: /\/\/.*\n?|\/\*((?!\*\/)[^])*(\*\/)?/g,
		sub: 'todo'
	},
	{
		expand: 'str'
	},
	{
		match: /`((?!`)[^]|\\[^])*`?/g,
		sub: 'js_template_literals'
	},
	{
		type: 'kwd',
		match: /=>|\b(this|set|get|as|async|await|break|case|catch|class|const|constructor|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|if|implements|import|in|instanceof|interface|let|var|of|new|package|private|protected|public|return|static|super|switch|throw|throws|try|typeof|void|while|with|yield)\b/g
	},
	{
		match: /\/((?!\/)[^\r\n\\]|\\.)+\/[dgimsuy]*/g,
		sub: 'regex'
	},
	{
		expand: 'num'
	},
	{
		type: 'num',
		match: /\b(NaN|null|undefined|[A-Z][A-Z_]*)\b/g
	},
	{
		type: 'bool',
		match: /\b(true|false)\b/g
	},
	{
		type: 'oper',
		match: /[/*+:?&|%^~=!,<>.^-]+/g
	},
	{
		type: 'class',
		match: /\b[A-Z][\w_]*\b/g
	},
	{
		type: 'func',
		match: /[a-zA-Z$_][\w$_]*(?=\s*((\?\.)?\s*\(|=\s*(\(?[\w,{}\[\])]+\)? =>|function\b)))/g
	}
]


/** from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/ts.js' */
const TypeScript = [
	{
		type: 'type',
		match: /:\s*(any|void|number|boolean|string|object|never|enum)\b/g
	},
	{
		type: 'kwd',
		match: /\b(type|namespace|typedef|interface|public|private|protected|implements|declare|abstract|readonly)\b/g
	},
	...JavaScript
]


const langs = {
        js: JavaScript,
        ts: TypeScript,
    }

const sanitize = (str = '') =>str.replaceAll('&', '&#38;')
              .replaceAll?.('<', '&lt;')
              .replaceAll?.('>', '&gt;')

const toSpan = (str, token) => token
  ? `<span class="shj-syn-${token}">${str}</span>`
  : str

export function tokenize(src, lang, token) {
    try {
        let m,
            part,
            first = {},
            match,
            cache = [],
            i = 0,
            data = typeof lang === 'string' ? langs[lang] : lang,
            // make a fast shallow copy to bee able to splice lang without change the original one
            arr = [...(typeof lang === 'string' ? data : lang.sub)]

        while (i < src.length) {
            first.index = null
            for (m = arr.length; m-- > 0; ) {
                part = arr[m].expand ? expandData[arr[m].expand] : arr[m]
                // do not call again exec if the previous result is sufficient
                if (cache[m] === undefined || cache[m].match.index < i) {
                    part.match.lastIndex = i
                    match = part.match.exec(src)
                    if (match === null) {
                        // no more match with this regex can be disposed
                        arr.splice(m, 1)
                        cache.splice(m, 1)
                        continue
                    }
                    // save match for later use to decrease performance cost
                    cache[m] = { match, lastIndex: part.match.lastIndex }
                }
                // check if it the first match in the string
                if (
                    cache[m].match[0] &&
                    (cache[m].match.index <= first.index ||
                        first.index === null)
                )
                    first = {
                        part: part,
                        index: cache[m].match.index,
                        match: cache[m].match[0],
                        end: cache[m].lastIndex
                    }
            }
            if (first.index === null) break
            token(src.slice(i, first.index), data.type)
            i = first.end
            if (first.part.sub)
                tokenize(
                    first.match,
                    typeof first.part.sub === 'string'
                        ? first.part.sub
                        : typeof first.part.sub === 'function'
                        ? first.part.sub(first.match)
                        : first.part,
                    token
                )
            else token(first.match, first.part.type)
        }
        token(src.slice(i, src.length), data.type)
    } catch {
        token(src)
    }
}

export function highlightText(src, lang, multiline = true, opt = {}) {
    let tmp = ''
    tokenize(src, lang, (str, type) => (tmp += toSpan(sanitize(str), type)))

    return multiline
        ? `<div><div class="shj-numbers">${'<div></div>'.repeat(
              !opt.hideLineNumbers && src.split('\n').length
          )}</div><div>${tmp}</div></div>`
        : tmp
}

export const loadLanguage = (languageName, language) => {
    langs[languageName] = language
}