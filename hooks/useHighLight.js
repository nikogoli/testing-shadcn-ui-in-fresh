// from "https://zenn.dev/kstdx/articles/2874b355035d22"

import css from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/css.js'
import csv from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/csv.js'
import html from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/html.js'
import js from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/js.js'
import js_template_literals from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/js_template_literals.js'
import jsdoc from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/jsdoc.js'
import json from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/json.js'
import md from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/md.js'
import plain from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/plain.js'
import py from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/py.js'
import ts from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/ts.js'
import xml from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/xml.js'
import yaml from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/languages/yaml.js'

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

const langs = {
        css,
        csv,
        html,
        js,
        js_template_literals,
        jsdoc,
        json,
        md,
        plain,
        py,
        ts,
        xml,
        yaml
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