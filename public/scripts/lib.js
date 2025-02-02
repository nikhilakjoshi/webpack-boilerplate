/********************************
 ** FILE: lib/jquery.js
 ********************************/

// NOTE: nytg Additions at bottom of file

/*! jQuery v1.7.1 jquery.com | jquery.org/license */
;(function (a, b) {
  function cy(a) {
    return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
  }

  function cv(a) {
    if (!ck[a]) {
      var b = c.body,
        d = f('<' + a + '>').appendTo(b),
        e = d.css('display')
      d.remove()
      if (e === 'none' || e === '') {
        cl || ((cl = c.createElement('iframe')), (cl.frameBorder = cl.width = cl.height = 0)),
          b.appendChild(cl)
        if (!cm || !cl.createElement)
          (cm = (cl.contentWindow || cl.contentDocument).document),
            cm.write((c.compatMode === 'CSS1Compat' ? '<!doctype html>' : '') + '<html><body>'),
            cm.close()
        ;(d = cm.createElement(a)),
          cm.body.appendChild(d),
          (e = f.css(d, 'display')),
          b.removeChild(cl)
      }
      ck[a] = e
    }
    return ck[a]
  }

  function cu(a, b) {
    var c = {}
    f.each(cq.concat.apply([], cq.slice(0, b)), function () {
      c[this] = a
    })
    return c
  }

  function ct() {
    cr = b
  }

  function cs() {
    setTimeout(ct, 0)
    return (cr = f.now())
  }

  function cj() {
    try {
      return new a.ActiveXObject('Microsoft.XMLHTTP')
    } catch (b) {}
  }

  function ci() {
    try {
      return new a.XMLHttpRequest()
    } catch (b) {}
  }

  function cc(a, c) {
    a.dataFilter && (c = a.dataFilter(c, a.dataType))
    var d = a.dataTypes,
      e = {},
      g,
      h,
      i = d.length,
      j,
      k = d[0],
      l,
      m,
      n,
      o,
      p
    for (g = 1; g < i; g++) {
      if (g === 1)
        for (h in a.converters) typeof h == 'string' && (e[h.toLowerCase()] = a.converters[h])
      ;(l = k), (k = d[g])
      if (k === '*') k = l
      else if (l !== '*' && l !== k) {
        ;(m = l + ' ' + k), (n = e[m] || e['* ' + k])
        if (!n) {
          p = b
          for (o in e) {
            j = o.split(' ')
            if (j[0] === l || j[0] === '*') {
              p = e[j[1] + ' ' + k]
              if (p) {
                ;(o = e[o]), o === !0 ? (n = p) : p === !0 && (n = o)
                break
              }
            }
          }
        }
        !n && !p && f.error('No conversion from ' + m.replace(' ', ' to ')),
          n !== !0 && (c = n ? n(c) : p(o(c)))
      }
    }
    return c
  }

  function cb(a, c, d) {
    var e = a.contents,
      f = a.dataTypes,
      g = a.responseFields,
      h,
      i,
      j,
      k
    for (i in g) i in d && (c[g[i]] = d[i])
    while (f[0] === '*')
      f.shift(), h === b && (h = a.mimeType || c.getResponseHeader('content-type'))
    if (h)
      for (i in e)
        if (e[i] && e[i].test(h)) {
          f.unshift(i)
          break
        }
    if (f[0] in d) j = f[0]
    else {
      for (i in d) {
        if (!f[0] || a.converters[i + ' ' + f[0]]) {
          j = i
          break
        }
        k || (k = i)
      }
      j = j || k
    }
    if (j) {
      j !== f[0] && f.unshift(j)
      return d[j]
    }
  }

  function ca(a, b, c, d) {
    if (f.isArray(b))
      f.each(b, function (b, e) {
        c || bE.test(a)
          ? d(a, e)
          : ca(a + '[' + (typeof e == 'object' || f.isArray(e) ? b : '') + ']', e, c, d)
      })
    else if (!c && b != null && typeof b == 'object')
      for (var e in b) ca(a + '[' + e + ']', b[e], c, d)
    else d(a, b)
  }

  function b_(a, c) {
    var d,
      e,
      g = f.ajaxSettings.flatOptions || {}
    for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
    e && f.extend(!0, a, e)
  }

  function b$(a, c, d, e, f, g) {
    ;(f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0)
    var h = a[f],
      i = 0,
      j = h ? h.length : 0,
      k = a === bT,
      l
    for (; i < j && (k || !l); i++)
      (l = h[i](c, d, e)),
        typeof l == 'string' &&
          (!k || g[l] ? (l = b) : (c.dataTypes.unshift(l), (l = b$(a, c, d, e, l, g))))
    ;(k || !l) && !g['*'] && (l = b$(a, c, d, e, '*', g))
    return l
  }

  function bZ(a) {
    return function (b, c) {
      typeof b != 'string' && ((c = b), (b = '*'))
      if (f.isFunction(c)) {
        var d = b.toLowerCase().split(bP),
          e = 0,
          g = d.length,
          h,
          i,
          j
        for (; e < g; e++)
          (h = d[e]),
            (j = /^\+/.test(h)),
            j && (h = h.substr(1) || '*'),
            (i = a[h] = a[h] || []),
            i[j ? 'unshift' : 'push'](c)
      }
    }
  }

  function bC(a, b, c) {
    var d = b === 'width' ? a.offsetWidth : a.offsetHeight,
      e = b === 'width' ? bx : by,
      g = 0,
      h = e.length
    if (d > 0) {
      if (c !== 'border')
        for (; g < h; g++)
          c || (d -= parseFloat(f.css(a, 'padding' + e[g])) || 0),
            c === 'margin'
              ? (d += parseFloat(f.css(a, c + e[g])) || 0)
              : (d -= parseFloat(f.css(a, 'border' + e[g] + 'Width')) || 0)
      return d + 'px'
    }
    d = bz(a, b, b)
    if (d < 0 || d == null) d = a.style[b] || 0
    d = parseFloat(d) || 0
    if (c)
      for (; g < h; g++)
        (d += parseFloat(f.css(a, 'padding' + e[g])) || 0),
          c !== 'padding' && (d += parseFloat(f.css(a, 'border' + e[g] + 'Width')) || 0),
          c === 'margin' && (d += parseFloat(f.css(a, c + e[g])) || 0)
    return d + 'px'
  }

  function bp(a, b) {
    b.src
      ? f.ajax({
          url: b.src,
          async: !1,
          dataType: 'script',
        })
      : f.globalEval((b.text || b.textContent || b.innerHTML || '').replace(bf, '/*$0*/')),
      b.parentNode && b.parentNode.removeChild(b)
  }

  function bo(a) {
    var b = c.createElement('div')
    bh.appendChild(b), (b.innerHTML = a.outerHTML)
    return b.firstChild
  }

  function bn(a) {
    var b = (a.nodeName || '').toLowerCase()
    b === 'input'
      ? bm(a)
      : b !== 'script' &&
        typeof a.getElementsByTagName != 'undefined' &&
        f.grep(a.getElementsByTagName('input'), bm)
  }

  function bm(a) {
    if (a.type === 'checkbox' || a.type === 'radio') a.defaultChecked = a.checked
  }

  function bl(a) {
    return typeof a.getElementsByTagName != 'undefined'
      ? a.getElementsByTagName('*')
      : typeof a.querySelectorAll != 'undefined'
      ? a.querySelectorAll('*')
      : []
  }

  function bk(a, b) {
    var c
    if (b.nodeType === 1) {
      b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
        (c = b.nodeName.toLowerCase())
      if (c === 'object') b.outerHTML = a.outerHTML
      else if (c !== 'input' || (a.type !== 'checkbox' && a.type !== 'radio')) {
        if (c === 'option') b.selected = a.defaultSelected
        else if (c === 'input' || c === 'textarea') b.defaultValue = a.defaultValue
      } else
        a.checked && (b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value)
      b.removeAttribute(f.expando)
    }
  }

  function bj(a, b) {
    if (b.nodeType === 1 && !!f.hasData(a)) {
      var c,
        d,
        e,
        g = f._data(a),
        h = f._data(b, g),
        i = g.events
      if (i) {
        delete h.handle, (h.events = {})
        for (c in i)
          for (d = 0, e = i[c].length; d < e; d++)
            f.event.add(
              b,
              c + (i[c][d].namespace ? '.' : '') + i[c][d].namespace,
              i[c][d],
              i[c][d].data
            )
      }
      h.data && (h.data = f.extend({}, h.data))
    }
  }

  function bi(a, b) {
    return f.nodeName(a, 'table')
      ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody'))
      : a
  }

  function U(a) {
    var b = V.split('|'),
      c = a.createDocumentFragment()
    if (c.createElement) while (b.length) c.createElement(b.pop())
    return c
  }

  function T(a, b, c) {
    b = b || 0
    if (f.isFunction(b))
      return f.grep(a, function (a, d) {
        var e = !!b.call(a, d, a)
        return e === c
      })
    if (b.nodeType)
      return f.grep(a, function (a, d) {
        return (a === b) === c
      })
    if (typeof b == 'string') {
      var d = f.grep(a, function (a) {
        return a.nodeType === 1
      })
      if (O.test(b)) return f.filter(b, d, !c)
      b = f.filter(b, d)
    }
    return f.grep(a, function (a, d) {
      return f.inArray(a, b) >= 0 === c
    })
  }

  function S(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11
  }

  function K() {
    return !0
  }

  function J() {
    return !1
  }

  function n(a, b, c) {
    var d = b + 'defer',
      e = b + 'queue',
      g = b + 'mark',
      h = f._data(a, d)
    h &&
      (c === 'queue' || !f._data(a, e)) &&
      (c === 'mark' || !f._data(a, g)) &&
      setTimeout(function () {
        !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
      }, 0)
  }

  function m(a) {
    for (var b in a) {
      if (b === 'data' && f.isEmptyObject(a[b])) continue
      if (b !== 'toJSON') return !1
    }
    return !0
  }

  function l(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = 'data-' + c.replace(k, '-$1').toLowerCase()
      d = a.getAttribute(e)
      if (typeof d == 'string') {
        try {
          d =
            d === 'true'
              ? !0
              : d === 'false'
              ? !1
              : d === 'null'
              ? null
              : f.isNumeric(d)
              ? parseFloat(d)
              : j.test(d)
              ? f.parseJSON(d)
              : d
        } catch (g) {}
        f.data(a, c, d)
      } else d = b
    }
    return d
  }

  function h(a) {
    var b = (g[a] = {}),
      c,
      d
    a = a.split(/\s+/)
    for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0
    return b
  }
  var c = a.document,
    d = a.navigator,
    e = a.location,
    f = (function () {
      function J() {
        if (!e.isReady) {
          try {
            c.documentElement.doScroll('left')
          } catch (a) {
            setTimeout(J, 1)
            return
          }
          e.ready()
        }
      }
      var e = function (a, b) {
          return new e.fn.init(a, b, h)
        },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/gi,
        w = /^-ms-/,
        x = function (a, b) {
          return (b + '').toUpperCase()
        },
        y = d.userAgent,
        z,
        A,
        B,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {}
      ;(e.fn = e.prototype =
        {
          constructor: e,
          init: function (a, d, f) {
            var g, h, j, k
            if (!a) return this
            if (a.nodeType) {
              ;(this.context = this[0] = a), (this.length = 1)
              return this
            }
            if (a === 'body' && !d && c.body) {
              ;(this.context = c), (this[0] = c.body), (this.selector = a), (this.length = 1)
              return this
            }
            if (typeof a == 'string') {
              a.charAt(0) !== '<' || a.charAt(a.length - 1) !== '>' || a.length < 3
                ? (g = i.exec(a))
                : (g = [null, a, null])
              if (g && (g[1] || !d)) {
                if (g[1]) {
                  ;(d = d instanceof e ? d[0] : d),
                    (k = d ? d.ownerDocument || d : c),
                    (j = m.exec(a)),
                    j
                      ? e.isPlainObject(d)
                        ? ((a = [c.createElement(j[1])]), e.fn.attr.call(a, d, !0))
                        : (a = [k.createElement(j[1])])
                      : ((j = e.buildFragment([g[1]], [k])),
                        (a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes))
                  return e.merge(this, a)
                }
                h = c.getElementById(g[2])
                if (h && h.parentNode) {
                  if (h.id !== g[2]) return f.find(a)
                  ;(this.length = 1), (this[0] = h)
                }
                ;(this.context = c), (this.selector = a)
                return this
              }
              return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
            }
            if (e.isFunction(a)) return f.ready(a)
            a.selector !== b && ((this.selector = a.selector), (this.context = a.context))
            return e.makeArray(a, this)
          },
          selector: '',
          jquery: '1.7.1',
          length: 0,
          size: function () {
            return this.length
          },
          toArray: function () {
            return F.call(this, 0)
          },
          get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
          },
          pushStack: function (a, b, c) {
            var d = this.constructor()
            e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
              (d.prevObject = this),
              (d.context = this.context),
              b === 'find'
                ? (d.selector = this.selector + (this.selector ? ' ' : '') + c)
                : b && (d.selector = this.selector + '.' + b + '(' + c + ')')
            return d
          },
          each: function (a, b) {
            return e.each(this, a, b)
          },
          ready: function (a) {
            e.bindReady(), A.add(a)
            return this
          },
          eq: function (a) {
            a = +a
            return a === -1 ? this.slice(a) : this.slice(a, a + 1)
          },
          first: function () {
            return this.eq(0)
          },
          last: function () {
            return this.eq(-1)
          },
          slice: function () {
            return this.pushStack(F.apply(this, arguments), 'slice', F.call(arguments).join(','))
          },
          map: function (a) {
            return this.pushStack(
              e.map(this, function (b, c) {
                return a.call(b, c, b)
              })
            )
          },
          end: function () {
            return this.prevObject || this.constructor(null)
          },
          push: E,
          sort: [].sort,
          splice: [].splice,
        }),
        (e.fn.init.prototype = e.fn),
        (e.extend = e.fn.extend =
          function () {
            var a,
              c,
              d,
              f,
              g,
              h,
              i = arguments[0] || {},
              j = 1,
              k = arguments.length,
              l = !1
            typeof i == 'boolean' && ((l = i), (i = arguments[1] || {}), (j = 2)),
              typeof i != 'object' && !e.isFunction(i) && (i = {}),
              k === j && ((i = this), --j)
            for (; j < k; j++)
              if ((a = arguments[j]) != null)
                for (c in a) {
                  ;(d = i[c]), (f = a[c])
                  if (i === f) continue
                  l && f && (e.isPlainObject(f) || (g = e.isArray(f)))
                    ? (g
                        ? ((g = !1), (h = d && e.isArray(d) ? d : []))
                        : (h = d && e.isPlainObject(d) ? d : {}),
                      (i[c] = e.extend(l, h, f)))
                    : f !== b && (i[c] = f)
                }
            return i
          }),
        e.extend({
          noConflict: function (b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f)
            return e
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0)
          },
          ready: function (a) {
            if ((a === !0 && !--e.readyWait) || (a !== !0 && !e.isReady)) {
              if (!c.body) return setTimeout(e.ready, 1)
              e.isReady = !0
              if (a !== !0 && --e.readyWait > 0) return
              A.fireWith(c, [e]), e.fn.trigger && e(c).trigger('ready').off('ready')
            }
          },
          bindReady: function () {
            if (!A) {
              A = e.Callbacks('once memory')
              if (c.readyState === 'complete') return setTimeout(e.ready, 1)
              if (c.addEventListener)
                c.addEventListener('DOMContentLoaded', B, !1),
                  a.addEventListener('load', e.ready, !1)
              else if (c.attachEvent) {
                c.attachEvent('onreadystatechange', B), a.attachEvent('onload', e.ready)
                var b = !1
                try {
                  b = a.frameElement == null
                } catch (d) {}
                c.documentElement.doScroll && b && J()
              }
            }
          },
          isFunction: function (a) {
            return e.type(a) === 'function'
          },
          isArray:
            Array.isArray ||
            function (a) {
              return e.type(a) === 'array'
            },
          isWindow: function (a) {
            return a && typeof a == 'object' && 'setInterval' in a
          },
          isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
          },
          type: function (a) {
            return a == null ? String(a) : I[C.call(a)] || 'object'
          },
          isPlainObject: function (a) {
            if (!a || e.type(a) !== 'object' || a.nodeType || e.isWindow(a)) return !1
            try {
              if (
                a.constructor &&
                !D.call(a, 'constructor') &&
                !D.call(a.constructor.prototype, 'isPrototypeOf')
              )
                return !1
            } catch (c) {
              return !1
            }
            var d
            for (d in a);
            return d === b || D.call(a, d)
          },
          isEmptyObject: function (a) {
            for (var b in a) return !1
            return !0
          },
          error: function (a) {
            throw new Error(a)
          },
          parseJSON: function (b) {
            if (typeof b != 'string' || !b) return null
            b = e.trim(b)
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b)
            if (n.test(b.replace(o, '@').replace(p, ']').replace(q, '')))
              return new Function('return ' + b)()
            e.error('Invalid JSON: ' + b)
          },
          parseXML: function (c) {
            var d, f
            try {
              a.DOMParser
                ? ((f = new DOMParser()), (d = f.parseFromString(c, 'text/xml')))
                : ((d = new ActiveXObject('Microsoft.XMLDOM')), (d.async = 'false'), d.loadXML(c))
            } catch (g) {
              d = b
            }
            ;(!d || !d.documentElement || d.getElementsByTagName('parsererror').length) &&
              e.error('Invalid XML: ' + c)
            return d
          },
          noop: function () {},
          globalEval: function (b) {
            b &&
              j.test(b) &&
              (
                a.execScript ||
                function (b) {
                  a.eval.call(a, b)
                }
              )(b)
          },
          camelCase: function (a) {
            return a.replace(w, 'ms-').replace(v, x)
          },
          nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
          },
          each: function (a, c, d) {
            var f,
              g = 0,
              h = a.length,
              i = h === b || e.isFunction(a)
            if (d) {
              if (i) {
                for (f in a) if (c.apply(a[f], d) === !1) break
              } else for (; g < h; ) if (c.apply(a[g++], d) === !1) break
            } else if (i) {
              for (f in a) if (c.call(a[f], f, a[f]) === !1) break
            } else for (; g < h; ) if (c.call(a[g], g, a[g++]) === !1) break
            return a
          },
          trim: G
            ? function (a) {
                return a == null ? '' : G.call(a)
              }
            : function (a) {
                return a == null ? '' : (a + '').replace(k, '').replace(l, '')
              },
          makeArray: function (a, b) {
            var c = b || []
            if (a != null) {
              var d = e.type(a)
              a.length == null ||
              d === 'string' ||
              d === 'function' ||
              d === 'regexp' ||
              e.isWindow(a)
                ? E.call(c, a)
                : e.merge(c, a)
            }
            return c
          },
          inArray: function (a, b, c) {
            var d
            if (b) {
              if (H) return H.call(b, a, c)
              ;(d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0)
              for (; c < d; c++) if (c in b && b[c] === a) return c
            }
            return -1
          },
          merge: function (a, c) {
            var d = a.length,
              e = 0
            if (typeof c.length == 'number') for (var f = c.length; e < f; e++) a[d++] = c[e]
            else while (c[e] !== b) a[d++] = c[e++]
            a.length = d
            return a
          },
          grep: function (a, b, c) {
            var d = [],
              e
            c = !!c
            for (var f = 0, g = a.length; f < g; f++) (e = !!b(a[f], f)), c !== e && d.push(a[f])
            return d
          },
          map: function (a, c, d) {
            var f,
              g,
              h = [],
              i = 0,
              j = a.length,
              k =
                a instanceof e ||
                (j !== b &&
                  typeof j == 'number' &&
                  ((j > 0 && a[0] && a[j - 1]) || j === 0 || e.isArray(a)))
            if (k) for (; i < j; i++) (f = c(a[i], i, d)), f != null && (h[h.length] = f)
            else for (g in a) (f = c(a[g], g, d)), f != null && (h[h.length] = f)
            return h.concat.apply([], h)
          },
          guid: 1,
          proxy: function (a, c) {
            if (typeof c == 'string') {
              var d = a[c]
              ;(c = a), (a = d)
            }
            if (!e.isFunction(a)) return b
            var f = F.call(arguments, 2),
              g = function () {
                return a.apply(c, f.concat(F.call(arguments)))
              }
            g.guid = a.guid = a.guid || g.guid || e.guid++
            return g
          },
          access: function (a, c, d, f, g, h) {
            var i = a.length
            if (typeof c == 'object') {
              for (var j in c) e.access(a, j, c[j], f, g, d)
              return a
            }
            if (d !== b) {
              f = !h && f && e.isFunction(d)
              for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h)
              return a
            }
            return i ? g(a[0], c) : b
          },
          now: function () {
            return new Date().getTime()
          },
          uaMatch: function (a) {
            a = a.toLowerCase()
            var b =
              r.exec(a) ||
              s.exec(a) ||
              t.exec(a) ||
              (a.indexOf('compatible') < 0 && u.exec(a)) ||
              []
            return {
              browser: b[1] || '',
              version: b[2] || '0',
            }
          },
          sub: function () {
            function a(b, c) {
              return new a.fn.init(b, c)
            }
            e.extend(!0, a, this),
              (a.superclass = this),
              (a.fn = a.prototype = this()),
              (a.fn.constructor = a),
              (a.sub = this.sub),
              (a.fn.init = function (d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f))
                return e.fn.init.call(this, d, f, b)
              }),
              (a.fn.init.prototype = a.fn)
            var b = a(c)
            return a
          },
          browser: {},
        }),
        e.each(
          'Boolean Number String Function Array Date RegExp Object'.split(' '),
          function (a, b) {
            I['[object ' + b + ']'] = b.toLowerCase()
          }
        ),
        (z = e.uaMatch(y)),
        z.browser && ((e.browser[z.browser] = !0), (e.browser.version = z.version)),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(' ') && ((k = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
        (h = e(c)),
        c.addEventListener
          ? (B = function () {
              c.removeEventListener('DOMContentLoaded', B, !1), e.ready()
            })
          : c.attachEvent &&
            (B = function () {
              c.readyState === 'complete' && (c.detachEvent('onreadystatechange', B), e.ready())
            })
      return e
    })(),
    g = {}
  f.Callbacks = function (a) {
    a = a ? g[a] || h(a) : {}
    var c = [],
      d = [],
      e,
      i,
      j,
      k,
      l,
      m = function (b) {
        var d, e, g, h, i
        for (d = 0, e = b.length; d < e; d++)
          (g = b[d]),
            (h = f.type(g)),
            h === 'array' ? m(g) : h === 'function' && (!a.unique || !o.has(g)) && c.push(g)
      },
      n = function (b, f) {
        ;(f = f || []), (e = !a.memory || [b, f]), (i = !0), (l = j || 0), (j = 0), (k = c.length)
        for (; c && l < k; l++)
          if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
            e = !0
            break
          }
        ;(i = !1),
          c &&
            (a.once
              ? e === !0
                ? o.disable()
                : (c = [])
              : d && d.length && ((e = d.shift()), o.fireWith(e[0], e[1])))
      },
      o = {
        add: function () {
          if (c) {
            var a = c.length
            m(arguments), i ? (k = c.length) : e && e !== !0 && ((j = a), n(e[0], e[1]))
          }
          return this
        },
        remove: function () {
          if (c) {
            var b = arguments,
              d = 0,
              e = b.length
            for (; d < e; d++)
              for (var f = 0; f < c.length; f++)
                if (b[d] === c[f]) {
                  i && f <= k && (k--, f <= l && l--), c.splice(f--, 1)
                  if (a.unique) break
                }
          }
          return this
        },
        has: function (a) {
          if (c) {
            var b = 0,
              d = c.length
            for (; b < d; b++) if (a === c[b]) return !0
          }
          return !1
        },
        empty: function () {
          c = []
          return this
        },
        disable: function () {
          c = d = e = b
          return this
        },
        disabled: function () {
          return !c
        },
        lock: function () {
          ;(d = b), (!e || e === !0) && o.disable()
          return this
        },
        locked: function () {
          return !d
        },
        fireWith: function (b, c) {
          d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c))
          return this
        },
        fire: function () {
          o.fireWith(this, arguments)
          return this
        },
        fired: function () {
          return !!e
        },
      }
    return o
  }
  var i = [].slice
  f.extend({
    Deferred: function (a) {
      var b = f.Callbacks('once memory'),
        c = f.Callbacks('once memory'),
        d = f.Callbacks('memory'),
        e = 'pending',
        g = {
          resolve: b,
          reject: c,
          notify: d,
        },
        h = {
          done: b.add,
          fail: c.add,
          progress: d.add,
          state: function () {
            return e
          },
          isResolved: b.fired,
          isRejected: c.fired,
          then: function (a, b, c) {
            i.done(a).fail(b).progress(c)
            return this
          },
          always: function () {
            i.done.apply(i, arguments).fail.apply(i, arguments)
            return this
          },
          pipe: function (a, b, c) {
            return f
              .Deferred(function (d) {
                f.each(
                  {
                    done: [a, 'resolve'],
                    fail: [b, 'reject'],
                    progress: [c, 'notify'],
                  },
                  function (a, b) {
                    var c = b[0],
                      e = b[1],
                      g
                    f.isFunction(c)
                      ? i[a](function () {
                          ;(g = c.apply(this, arguments)),
                            g && f.isFunction(g.promise)
                              ? g.promise().then(d.resolve, d.reject, d.notify)
                              : d[e + 'With'](this === i ? d : this, [g])
                        })
                      : i[a](d[e])
                  }
                )
              })
              .promise()
          },
          promise: function (a) {
            if (a == null) a = h
            else for (var b in h) a[b] = h[b]
            return a
          },
        },
        i = h.promise({}),
        j
      for (j in g) (i[j] = g[j].fire), (i[j + 'With'] = g[j].fireWith)
      i
        .done(
          function () {
            e = 'resolved'
          },
          c.disable,
          d.lock
        )
        .fail(
          function () {
            e = 'rejected'
          },
          b.disable,
          d.lock
        ),
        a && a.call(i, i)
      return i
    },
    when: function (a) {
      function m(a) {
        return function (b) {
          ;(e[a] = arguments.length > 1 ? i.call(arguments, 0) : b), j.notifyWith(k, e)
        }
      }

      function l(a) {
        return function (c) {
          ;(b[a] = arguments.length > 1 ? i.call(arguments, 0) : c), --g || j.resolveWith(j, b)
        }
      }
      var b = i.call(arguments, 0),
        c = 0,
        d = b.length,
        e = Array(d),
        g = d,
        h = d,
        j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
        k = j.promise()
      if (d > 1) {
        for (; c < d; c++)
          b[c] && b[c].promise && f.isFunction(b[c].promise)
            ? b[c].promise().then(l(c), j.reject, m(c))
            : --g
        g || j.resolveWith(j, b)
      } else j !== a && j.resolveWith(j, d ? [a] : [])
      return k
    },
  }),
    (f.support = (function () {
      var b,
        d,
        e,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = c.createElement('div'),
        r = c.documentElement
      q.setAttribute('className', 't'),
        (q.innerHTML =
          "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
        (d = q.getElementsByTagName('*')),
        (e = q.getElementsByTagName('a')[0])
      if (!d || !d.length || !e) return {}
      ;(g = c.createElement('select')),
        (h = g.appendChild(c.createElement('option'))),
        (i = q.getElementsByTagName('input')[0]),
        (b = {
          leadingWhitespace: q.firstChild.nodeType === 3,
          tbody: !q.getElementsByTagName('tbody').length,
          htmlSerialize: !!q.getElementsByTagName('link').length,
          style: /top/.test(e.getAttribute('style')),
          hrefNormalized: e.getAttribute('href') === '/a',
          opacity: /^0.55/.test(e.style.opacity),
          cssFloat: !!e.style.cssFloat,
          checkOn: i.value === 'on',
          optSelected: h.selected,
          getSetAttribute: q.className !== 't',
          enctype: !!c.createElement('form').enctype,
          html5Clone: c.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>',
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
        }),
        (i.checked = !0),
        (b.noCloneChecked = i.cloneNode(!0).checked),
        (g.disabled = !0),
        (b.optDisabled = !h.disabled)
      try {
        delete q.test
      } catch (s) {
        b.deleteExpando = !1
      }
      !q.addEventListener &&
        q.attachEvent &&
        q.fireEvent &&
        (q.attachEvent('onclick', function () {
          b.noCloneEvent = !1
        }),
        q.cloneNode(!0).fireEvent('onclick')),
        (i = c.createElement('input')),
        (i.value = 't'),
        i.setAttribute('type', 'radio'),
        (b.radioValue = i.value === 't'),
        i.setAttribute('checked', 'checked'),
        q.appendChild(i),
        (k = c.createDocumentFragment()),
        k.appendChild(q.lastChild),
        (b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = i.checked),
        k.removeChild(i),
        k.appendChild(q),
        (q.innerHTML = ''),
        a.getComputedStyle &&
          ((j = c.createElement('div')),
          (j.style.width = '0'),
          (j.style.marginRight = '0'),
          (q.style.width = '2px'),
          q.appendChild(j),
          (b.reliableMarginRight =
            (parseInt(
              (
                a.getComputedStyle(j, null) || {
                  marginRight: 0,
                }
              ).marginRight,
              10
            ) || 0) === 0))
      if (q.attachEvent)
        for (o in {
          submit: 1,
          change: 1,
          focusin: 1,
        })
          (n = 'on' + o),
            (p = n in q),
            p || (q.setAttribute(n, 'return;'), (p = typeof q[n] == 'function')),
            (b[o + 'Bubbles'] = p)
      k.removeChild(q),
        (k = g = h = j = q = i = null),
        f(function () {
          var a,
            d,
            e,
            g,
            h,
            i,
            j,
            k,
            m,
            n,
            o,
            r = c.getElementsByTagName('body')[0]
          !r ||
            ((j = 1),
            (k = 'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;'),
            (m = 'visibility:hidden;border:0;'),
            (n = "style='" + k + "border:5px solid #000;padding:0;'"),
            (o =
              '<div ' +
              n +
              '><div></div></div>' +
              '<table ' +
              n +
              " cellpadding='0' cellspacing='0'>" +
              '<tr><td></td></tr></table>'),
            (a = c.createElement('div')),
            (a.style.cssText = m + 'width:0;height:0;position:static;top:0;margin-top:' + j + 'px'),
            r.insertBefore(a, r.firstChild),
            (q = c.createElement('div')),
            a.appendChild(q),
            (q.innerHTML =
              "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
            (l = q.getElementsByTagName('td')),
            (p = l[0].offsetHeight === 0),
            (l[0].style.display = ''),
            (l[1].style.display = 'none'),
            (b.reliableHiddenOffsets = p && l[0].offsetHeight === 0),
            (q.innerHTML = ''),
            (q.style.width = q.style.paddingLeft = '1px'),
            (f.boxModel = b.boxModel = q.offsetWidth === 2),
            typeof q.style.zoom != 'undefined' &&
              ((q.style.display = 'inline'),
              (q.style.zoom = 1),
              (b.inlineBlockNeedsLayout = q.offsetWidth === 2),
              (q.style.display = ''),
              (q.innerHTML = "<div style='width:4px;'></div>"),
              (b.shrinkWrapBlocks = q.offsetWidth !== 2)),
            (q.style.cssText = k + m),
            (q.innerHTML = o),
            (d = q.firstChild),
            (e = d.firstChild),
            (h = d.nextSibling.firstChild.firstChild),
            (i = {
              doesNotAddBorder: e.offsetTop !== 5,
              doesAddBorderForTableAndCells: h.offsetTop === 5,
            }),
            (e.style.position = 'fixed'),
            (e.style.top = '20px'),
            (i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15),
            (e.style.position = e.style.top = ''),
            (d.style.overflow = 'hidden'),
            (d.style.position = 'relative'),
            (i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5),
            (i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j),
            r.removeChild(a),
            (q = a = null),
            f.extend(b, i))
        })
      return b
    })())
  var j = /^(?:\{.*\}|\[.*\])$/,
    k = /([A-Z])/g
  f.extend({
    cache: {},
    uuid: 0,
    expando: 'jQuery' + (f.fn.jquery + Math.random()).replace(/\D/g, ''),
    noData: {
      embed: !0,
      object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
      applet: !0,
    },
    hasData: function (a) {
      a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando]
      return !!a && !m(a)
    },
    data: function (a, c, d, e) {
      if (!!f.acceptData(a)) {
        var g,
          h,
          i,
          j = f.expando,
          k = typeof c == 'string',
          l = a.nodeType,
          m = l ? f.cache : a,
          n = l ? a[j] : a[j] && j,
          o = c === 'events'
        if ((!n || !m[n] || (!o && !e && !m[n].data)) && k && d === b) return
        n || (l ? (a[j] = n = ++f.uuid) : (n = j)),
          m[n] || ((m[n] = {}), l || (m[n].toJSON = f.noop))
        if (typeof c == 'object' || typeof c == 'function')
          e ? (m[n] = f.extend(m[n], c)) : (m[n].data = f.extend(m[n].data, c))
        ;(g = h = m[n]),
          e || (h.data || (h.data = {}), (h = h.data)),
          d !== b && (h[f.camelCase(c)] = d)
        if (o && !h[c]) return g.events
        k ? ((i = h[c]), i == null && (i = h[f.camelCase(c)])) : (i = h)
        return i
      }
    },
    removeData: function (a, b, c) {
      if (!!f.acceptData(a)) {
        var d,
          e,
          g,
          h = f.expando,
          i = a.nodeType,
          j = i ? f.cache : a,
          k = i ? a[h] : h
        if (!j[k]) return
        if (b) {
          d = c ? j[k] : j[k].data
          if (d) {
            f.isArray(b) ||
              (b in d ? (b = [b]) : ((b = f.camelCase(b)), b in d ? (b = [b]) : (b = b.split(' '))))
            for (e = 0, g = b.length; e < g; e++) delete d[b[e]]
            if (!(c ? m : f.isEmptyObject)(d)) return
          }
        }
        if (!c) {
          delete j[k].data
          if (!m(j[k])) return
        }
        f.support.deleteExpando || !j.setInterval ? delete j[k] : (j[k] = null),
          i &&
            (f.support.deleteExpando
              ? delete a[h]
              : a.removeAttribute
              ? a.removeAttribute(h)
              : (a[h] = null))
      }
    },
    _data: function (a, b, c) {
      return f.data(a, b, c, !0)
    },
    acceptData: function (a) {
      if (a.nodeName) {
        var b = f.noData[a.nodeName.toLowerCase()]
        if (b) return b !== !0 && a.getAttribute('classid') === b
      }
      return !0
    },
  }),
    f.fn.extend({
      data: function (a, c) {
        var d,
          e,
          g,
          h = null
        if (typeof a == 'undefined') {
          if (this.length) {
            h = f.data(this[0])
            if (this[0].nodeType === 1 && !f._data(this[0], 'parsedAttrs')) {
              e = this[0].attributes
              for (var i = 0, j = e.length; i < j; i++)
                (g = e[i].name),
                  g.indexOf('data-') === 0 &&
                    ((g = f.camelCase(g.substring(5))), l(this[0], g, h[g]))
              f._data(this[0], 'parsedAttrs', !0)
            }
          }
          return h
        }
        if (typeof a == 'object')
          return this.each(function () {
            f.data(this, a)
          })
        ;(d = a.split('.')), (d[1] = d[1] ? '.' + d[1] : '')
        if (c === b) {
          ;(h = this.triggerHandler('getData' + d[1] + '!', [d[0]])),
            h === b && this.length && ((h = f.data(this[0], a)), (h = l(this[0], a, h)))
          return h === b && d[1] ? this.data(d[0]) : h
        }
        return this.each(function () {
          var b = f(this),
            e = [d[0], c]
          b.triggerHandler('setData' + d[1] + '!', e),
            f.data(this, a, c),
            b.triggerHandler('changeData' + d[1] + '!', e)
        })
      },
      removeData: function (a) {
        return this.each(function () {
          f.removeData(this, a)
        })
      },
    }),
    f.extend({
      _mark: function (a, b) {
        a && ((b = (b || 'fx') + 'mark'), f._data(a, b, (f._data(a, b) || 0) + 1))
      },
      _unmark: function (a, b, c) {
        a !== !0 && ((c = b), (b = a), (a = !1))
        if (b) {
          c = c || 'fx'
          var d = c + 'mark',
            e = a ? 0 : (f._data(b, d) || 1) - 1
          e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, 'mark'))
        }
      },
      queue: function (a, b, c) {
        var d
        if (a) {
          ;(b = (b || 'fx') + 'queue'),
            (d = f._data(a, b)),
            c && (!d || f.isArray(c) ? (d = f._data(a, b, f.makeArray(c))) : d.push(c))
          return d || []
        }
      },
      dequeue: function (a, b) {
        b = b || 'fx'
        var c = f.queue(a, b),
          d = c.shift(),
          e = {}
        d === 'inprogress' && (d = c.shift()),
          d &&
            (b === 'fx' && c.unshift('inprogress'),
            f._data(a, b + '.run', e),
            d.call(
              a,
              function () {
                f.dequeue(a, b)
              },
              e
            )),
          c.length || (f.removeData(a, b + 'queue ' + b + '.run', !0), n(a, b, 'queue'))
      },
    }),
    f.fn.extend({
      queue: function (a, c) {
        typeof a != 'string' && ((c = a), (a = 'fx'))
        if (c === b) return f.queue(this[0], a)
        return this.each(function () {
          var b = f.queue(this, a, c)
          a === 'fx' && b[0] !== 'inprogress' && f.dequeue(this, a)
        })
      },
      dequeue: function (a) {
        return this.each(function () {
          f.dequeue(this, a)
        })
      },
      delay: function (a, b) {
        ;(a = f.fx ? f.fx.speeds[a] || a : a), (b = b || 'fx')
        return this.queue(b, function (b, c) {
          var d = setTimeout(b, a)
          c.stop = function () {
            clearTimeout(d)
          }
        })
      },
      clearQueue: function (a) {
        return this.queue(a || 'fx', [])
      },
      promise: function (a, c) {
        function m() {
          --h || d.resolveWith(e, [e])
        }
        typeof a != 'string' && ((c = a), (a = b)), (a = a || 'fx')
        var d = f.Deferred(),
          e = this,
          g = e.length,
          h = 1,
          i = a + 'defer',
          j = a + 'queue',
          k = a + 'mark',
          l
        while (g--)
          if (
            (l =
              f.data(e[g], i, b, !0) ||
              ((f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) &&
                f.data(e[g], i, f.Callbacks('once memory'), !0)))
          )
            h++, l.add(m)
        m()
        return d.promise()
      },
    })
  var o = /[\n\t\r]/g,
    p = /\s+/,
    q = /\r/g,
    r = /^(?:button|input)$/i,
    s = /^(?:button|input|object|select|textarea)$/i,
    t = /^a(?:rea)?$/i,
    u =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    v = f.support.getSetAttribute,
    w,
    x,
    y
  f.fn.extend({
    attr: function (a, b) {
      return f.access(this, a, b, !0, f.attr)
    },
    removeAttr: function (a) {
      return this.each(function () {
        f.removeAttr(this, a)
      })
    },
    prop: function (a, b) {
      return f.access(this, a, b, !0, f.prop)
    },
    removeProp: function (a) {
      a = f.propFix[a] || a
      return this.each(function () {
        try {
          ;(this[a] = b), delete this[a]
        } catch (c) {}
      })
    },
    addClass: function (a) {
      var b, c, d, e, g, h, i
      if (f.isFunction(a))
        return this.each(function (b) {
          f(this).addClass(a.call(this, b, this.className))
        })
      if (a && typeof a == 'string') {
        b = a.split(p)
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c]
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a
            else {
              g = ' ' + e.className + ' '
              for (h = 0, i = b.length; h < i; h++)
                ~g.indexOf(' ' + b[h] + ' ') || (g += b[h] + ' ')
              e.className = f.trim(g)
            }
        }
      }
      return this
    },
    removeClass: function (a) {
      var c, d, e, g, h, i, j
      if (f.isFunction(a))
        return this.each(function (b) {
          f(this).removeClass(a.call(this, b, this.className))
        })
      if ((a && typeof a == 'string') || a === b) {
        c = (a || '').split(p)
        for (d = 0, e = this.length; d < e; d++) {
          g = this[d]
          if (g.nodeType === 1 && g.className)
            if (a) {
              h = (' ' + g.className + ' ').replace(o, ' ')
              for (i = 0, j = c.length; i < j; i++) h = h.replace(' ' + c[i] + ' ', ' ')
              g.className = f.trim(h)
            } else g.className = ''
        }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = typeof b == 'boolean'
      if (f.isFunction(a))
        return this.each(function (c) {
          f(this).toggleClass(a.call(this, c, this.className, b), b)
        })
      return this.each(function () {
        if (c === 'string') {
          var e,
            g = 0,
            h = f(this),
            i = b,
            j = a.split(p)
          while ((e = j[g++])) (i = d ? i : !h.hasClass(e)), h[i ? 'addClass' : 'removeClass'](e)
        } else if (c === 'undefined' || c === 'boolean') this.className && f._data(this, '__className__', this.className), (this.className = this.className || a === !1 ? '' : f._data(this, '__className__') || '')
      })
    },
    hasClass: function (a) {
      var b = ' ' + a + ' ',
        c = 0,
        d = this.length
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (' ' + this[c].className + ' ').replace(o, ' ').indexOf(b) > -1
        )
          return !0
      return !1
    },
    val: function (a) {
      var c,
        d,
        e,
        g = this[0]
      {
        if (!!arguments.length) {
          e = f.isFunction(a)
          return this.each(function (d) {
            var g = f(this),
              h
            if (this.nodeType === 1) {
              e ? (h = a.call(this, d, g.val())) : (h = a),
                h == null
                  ? (h = '')
                  : typeof h == 'number'
                  ? (h += '')
                  : f.isArray(h) &&
                    (h = f.map(h, function (a) {
                      return a == null ? '' : a + ''
                    })),
                (c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type])
              if (!c || !('set' in c) || c.set(this, h, 'value') === b) this.value = h
            }
          })
        }
        if (g) {
          c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type]
          if (c && 'get' in c && (d = c.get(g, 'value')) !== b) return d
          d = g.value
          return typeof d == 'string' ? d.replace(q, '') : d == null ? '' : d
        }
      }
    },
  }),
    f.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value
            return !b || b.specified ? a.value : a.text
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              g = a.selectedIndex,
              h = [],
              i = a.options,
              j = a.type === 'select-one'
            if (g < 0) return null
            ;(c = j ? g : 0), (d = j ? g + 1 : i.length)
            for (; c < d; c++) {
              e = i[c]
              if (
                e.selected &&
                (f.support.optDisabled ? !e.disabled : e.getAttribute('disabled') === null) &&
                (!e.parentNode.disabled || !f.nodeName(e.parentNode, 'optgroup'))
              ) {
                b = f(e).val()
                if (j) return b
                h.push(b)
              }
            }
            if (j && !h.length && i.length) return f(i[g]).val()
            return h
          },
          set: function (a, b) {
            var c = f.makeArray(b)
            f(a)
              .find('option')
              .each(function () {
                this.selected = f.inArray(f(this).val(), c) >= 0
              }),
              c.length || (a.selectedIndex = -1)
            return c
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (a, c, d, e) {
        var g,
          h,
          i,
          j = a.nodeType
        if (!!a && j !== 3 && j !== 8 && j !== 2) {
          if (e && c in f.attrFn) return f(a)[c](d)
          if (typeof a.getAttribute == 'undefined') return f.prop(a, c, d)
          ;(i = j !== 1 || !f.isXMLDoc(a)),
            i && ((c = c.toLowerCase()), (h = f.attrHooks[c] || (u.test(c) ? x : w)))
          if (d !== b) {
            if (d === null) {
              f.removeAttr(a, c)
              return
            }
            if (h && 'set' in h && i && (g = h.set(a, d, c)) !== b) return g
            a.setAttribute(c, '' + d)
            return d
          }
          if (h && 'get' in h && i && (g = h.get(a, c)) !== null) return g
          g = a.getAttribute(c)
          return g === null ? b : g
        }
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          g,
          h = 0
        if (b && a.nodeType === 1) {
          ;(d = b.toLowerCase().split(p)), (g = d.length)
          for (; h < g; h++)
            (e = d[h]),
              e &&
                ((c = f.propFix[e] || e),
                f.attr(a, e, ''),
                a.removeAttribute(v ? e : c),
                u.test(e) && c in a && (a[c] = !1))
        }
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed")
            else if (!f.support.radioValue && b === 'radio' && f.nodeName(a, 'input')) {
              var c = a.value
              a.setAttribute('type', b), c && (a.value = c)
              return b
            }
          },
        },
        value: {
          get: function (a, b) {
            if (w && f.nodeName(a, 'button')) return w.get(a, b)
            return b in a ? a.value : null
          },
          set: function (a, b, c) {
            if (w && f.nodeName(a, 'button')) return w.set(a, b, c)
            a.value = b
          },
        },
      },
      propFix: {
        tabindex: 'tabIndex',
        readonly: 'readOnly',
        for: 'htmlFor',
        class: 'className',
        maxlength: 'maxLength',
        cellspacing: 'cellSpacing',
        cellpadding: 'cellPadding',
        rowspan: 'rowSpan',
        colspan: 'colSpan',
        usemap: 'useMap',
        frameborder: 'frameBorder',
        contenteditable: 'contentEditable',
      },
      prop: function (a, c, d) {
        var e,
          g,
          h,
          i = a.nodeType
        if (!!a && i !== 3 && i !== 8 && i !== 2) {
          ;(h = i !== 1 || !f.isXMLDoc(a)), h && ((c = f.propFix[c] || c), (g = f.propHooks[c]))
          return d !== b
            ? g && 'set' in g && (e = g.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : g && 'get' in g && (e = g.get(a, c)) !== null
            ? e
            : a[c]
        }
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode('tabindex')
            return c && c.specified
              ? parseInt(c.value, 10)
              : s.test(a.nodeName) || (t.test(a.nodeName) && a.href)
              ? 0
              : b
          },
        },
      },
    }),
    (f.attrHooks.tabindex = f.propHooks.tabIndex),
    (x = {
      get: function (a, c) {
        var d,
          e = f.prop(a, c)
        return e === !0 ||
          (typeof e != 'boolean' && (d = a.getAttributeNode(c)) && d.nodeValue !== !1)
          ? c.toLowerCase()
          : b
      },
      set: function (a, b, c) {
        var d
        b === !1
          ? f.removeAttr(a, c)
          : ((d = f.propFix[c] || c), d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()))
        return c
      },
    }),
    v ||
      ((y = {
        name: !0,
        id: !0,
      }),
      (w = f.valHooks.button =
        {
          get: function (a, c) {
            var d
            d = a.getAttributeNode(c)
            return d && (y[c] ? d.nodeValue !== '' : d.specified) ? d.nodeValue : b
          },
          set: function (a, b, d) {
            var e = a.getAttributeNode(d)
            e || ((e = c.createAttribute(d)), a.setAttributeNode(e))
            return (e.nodeValue = b + '')
          },
        }),
      (f.attrHooks.tabindex.set = w.set),
      f.each(['width', 'height'], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
          set: function (a, c) {
            if (c === '') {
              a.setAttribute(b, 'auto')
              return c
            }
          },
        })
      }),
      (f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
          b === '' && (b = 'false'), w.set(a, b, c)
        },
      })),
    f.support.hrefNormalized ||
      f.each(['href', 'src', 'width', 'height'], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2)
            return d === null ? b : d
          },
        })
      }),
    f.support.style ||
      (f.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
          return (a.style.cssText = '' + b)
        },
      }),
    f.support.optSelected ||
      (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
          return null
        },
      })),
    f.support.enctype || (f.propFix.enctype = 'encoding'),
    f.support.checkOn ||
      f.each(['radio', 'checkbox'], function () {
        f.valHooks[this] = {
          get: function (a) {
            return a.getAttribute('value') === null ? 'on' : a.value
          },
        }
      }),
    f.each(['radio', 'checkbox'], function () {
      f.valHooks[this] = f.extend(f.valHooks[this], {
        set: function (a, b) {
          if (f.isArray(b)) return (a.checked = f.inArray(f(a).val(), b) >= 0)
        },
      })
    })
  var z = /^(?:textarea|input|select)$/i,
    A = /^([^\.]*)?(?:\.(.+))?$/,
    B = /\bhover(\.\S+)?\b/,
    C = /^key/,
    D = /^(?:mouse|contextmenu)|click/,
    E = /^(?:focusinfocus|focusoutblur)$/,
    F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    G = function (a) {
      var b = F.exec(a)
      b &&
        ((b[1] = (b[1] || '').toLowerCase()),
        (b[3] = b[3] && new RegExp('(?:^|\\s)' + b[3] + '(?:\\s|$)')))
      return b
    },
    H = function (a, b) {
      var c = a.attributes || {}
      return (
        (!b[1] || a.nodeName.toLowerCase() === b[1]) &&
        (!b[2] || (c.id || {}).value === b[2]) &&
        (!b[3] || b[3].test((c['class'] || {}).value))
      )
    },
    I = function (a) {
      return f.event.special.hover ? a : a.replace(B, 'mouseenter$1 mouseleave$1')
    }
  ;(f.event = {
    add: function (a, c, d, e, g) {
      var h, i, j, k, l, m, n, o, p, q, r, s
      if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
        d.handler && ((p = d), (d = p.handler)),
          d.guid || (d.guid = f.guid++),
          (j = h.events),
          j || (h.events = j = {}),
          (i = h.handle),
          i ||
            ((h.handle = i =
              function (a) {
                return typeof f != 'undefined' && (!a || f.event.triggered !== a.type)
                  ? f.event.dispatch.apply(i.elem, arguments)
                  : b
              }),
            (i.elem = a)),
          (c = f.trim(I(c)).split(' '))
        for (k = 0; k < c.length; k++) {
          ;(l = A.exec(c[k]) || []),
            (m = l[1]),
            (n = (l[2] || '').split('.').sort()),
            (s = f.event.special[m] || {}),
            (m = (g ? s.delegateType : s.bindType) || m),
            (s = f.event.special[m] || {}),
            (o = f.extend(
              {
                type: m,
                origType: l[1],
                data: e,
                handler: d,
                guid: d.guid,
                selector: g,
                quick: G(g),
                namespace: n.join('.'),
              },
              p
            )),
            (r = j[m])
          if (!r) {
            ;(r = j[m] = []), (r.delegateCount = 0)
            if (!s.setup || s.setup.call(a, e, n, i) === !1)
              a.addEventListener
                ? a.addEventListener(m, i, !1)
                : a.attachEvent && a.attachEvent('on' + m, i)
          }
          s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
            g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
            (f.event.global[m] = !0)
        }
        a = null
      }
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var g = f.hasData(a) && f._data(a),
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s
      if (!!g && !!(o = g.events)) {
        b = f.trim(I(b || '')).split(' ')
        for (h = 0; h < b.length; h++) {
          ;(i = A.exec(b[h]) || []), (j = k = i[1]), (l = i[2])
          if (!j) {
            for (j in o) f.event.remove(a, j + b[h], c, d, !0)
            continue
          }
          ;(p = f.event.special[j] || {}),
            (j = (d ? p.delegateType : p.bindType) || j),
            (r = o[j] || []),
            (m = r.length),
            (l = l
              ? new RegExp('(^|\\.)' + l.split('.').sort().join('\\.(?:.*\\.)?') + '(\\.|$)')
              : null)
          for (n = 0; n < r.length; n++)
            (s = r[n]),
              (e || k === s.origType) &&
                (!c || c.guid === s.guid) &&
                (!l || l.test(s.namespace)) &&
                (!d || d === s.selector || (d === '**' && s.selector)) &&
                (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
          r.length === 0 &&
            m !== r.length &&
            ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle),
            delete o[j])
        }
        f.isEmptyObject(o) &&
          ((q = g.handle), q && (q.elem = null), f.removeData(a, ['events', 'handle'], !0))
      }
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0,
    },
    trigger: function (c, d, e, g) {
      if (!e || (e.nodeType !== 3 && e.nodeType !== 8)) {
        var h = c.type || c,
          i = [],
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s
        if (E.test(h + f.event.triggered)) return
        h.indexOf('!') >= 0 && ((h = h.slice(0, -1)), (k = !0)),
          h.indexOf('.') >= 0 && ((i = h.split('.')), (h = i.shift()), i.sort())
        if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return
        ;(c = typeof c == 'object' ? (c[f.expando] ? c : new f.Event(h, c)) : new f.Event(h)),
          (c.type = h),
          (c.isTrigger = !0),
          (c.exclusive = k),
          (c.namespace = i.join('.')),
          (c.namespace_re = c.namespace
            ? new RegExp('(^|\\.)' + i.join('\\.(?:.*\\.)?') + '(\\.|$)')
            : null),
          (o = h.indexOf(':') < 0 ? 'on' + h : '')
        if (!e) {
          j = f.cache
          for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
          return
        }
        ;(c.result = b),
          c.target || (c.target = e),
          (d = d != null ? f.makeArray(d) : []),
          d.unshift(c),
          (p = f.event.special[h] || {})
        if (p.trigger && p.trigger.apply(e, d) === !1) return
        r = [[e, p.bindType || h]]
        if (!g && !p.noBubble && !f.isWindow(e)) {
          ;(s = p.delegateType || h), (m = E.test(s + h) ? e : e.parentNode), (n = null)
          for (; m; m = m.parentNode) r.push([m, s]), (n = m)
          n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
        }
        for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
          (m = r[l][0]),
            (c.type = r[l][1]),
            (q = (f._data(m, 'events') || {})[c.type] && f._data(m, 'handle')),
            q && q.apply(m, d),
            (q = o && m[o]),
            q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
        ;(c.type = h),
          !g &&
            !c.isDefaultPrevented() &&
            (!p._default || p._default.apply(e.ownerDocument, d) === !1) &&
            (h !== 'click' || !f.nodeName(e, 'a')) &&
            f.acceptData(e) &&
            o &&
            e[h] &&
            ((h !== 'focus' && h !== 'blur') || c.target.offsetWidth !== 0) &&
            !f.isWindow(e) &&
            ((n = e[o]),
            n && (e[o] = null),
            (f.event.triggered = h),
            e[h](),
            (f.event.triggered = b),
            n && (e[o] = n))
        return c.result
      }
    },
    dispatch: function (c) {
      c = f.event.fix(c || a.event)
      var d = (f._data(this, 'events') || {})[c.type] || [],
        e = d.delegateCount,
        g = [].slice.call(arguments, 0),
        h = !c.exclusive && !c.namespace,
        i = [],
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t
      ;(g[0] = c), (c.delegateTarget = this)
      if (e && !c.target.disabled && (!c.button || c.type !== 'click')) {
        ;(m = f(this)), (m.context = this.ownerDocument || this)
        for (l = c.target; l != this; l = l.parentNode || this) {
          ;(o = {}), (q = []), (m[0] = l)
          for (j = 0; j < e; j++)
            (r = d[j]),
              (s = r.selector),
              o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),
              o[s] && q.push(r)
          q.length &&
            i.push({
              elem: l,
              matches: q,
            })
        }
      }
      d.length > e &&
        i.push({
          elem: this,
          matches: d.slice(e),
        })
      for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
        ;(p = i[j]), (c.currentTarget = p.elem)
        for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
          r = p.matches[k]
          if (
            h ||
            (!c.namespace && !r.namespace) ||
            (c.namespace_re && c.namespace_re.test(r.namespace))
          )
            (c.data = r.data),
              (c.handleObj = r),
              (n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g)),
              n !== b && ((c.result = n), n === !1 && (c.preventDefault(), c.stopPropagation()))
        }
      }
      return c.result
    },
    props:
      'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode)
        return a
      },
    },
    mouseHooks: {
      props:
        'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' '
        ),
      filter: function (a, d) {
        var e,
          f,
          g,
          h = d.button,
          i = d.fromElement
        a.pageX == null &&
          d.clientX != null &&
          ((e = a.target.ownerDocument || c),
          (f = e.documentElement),
          (g = e.body),
          (a.pageX =
            d.clientX +
            ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
            ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
          (a.pageY =
            d.clientY +
            ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
            ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i),
          !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0)
        return a
      },
    },
    fix: function (a) {
      if (a[f.expando]) return a
      var d,
        e,
        g = a,
        h = f.event.fixHooks[a.type] || {},
        i = h.props ? this.props.concat(h.props) : this.props
      a = f.Event(g)
      for (d = i.length; d; ) (e = i[--d]), (a[e] = g[e])
      a.target || (a.target = g.srcElement || c),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        a.metaKey === b && (a.metaKey = a.ctrlKey)
      return h.filter ? h.filter(a, g) : a
    },
    special: {
      ready: {
        setup: f.bindReady,
      },
      load: {
        noBubble: !0,
      },
      focus: {
        delegateType: 'focusin',
      },
      blur: {
        delegateType: 'focusout',
      },
      beforeunload: {
        setup: function (a, b, c) {
          f.isWindow(this) && (this.onbeforeunload = c)
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null)
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = f.extend(new f.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      })
      d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault()
    },
  }),
    (f.event.handle = f.event.dispatch),
    (f.removeEvent = c.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1)
        }
      : function (a, b, c) {
          a.detachEvent && a.detachEvent('on' + b, c)
        }),
    (f.Event = function (a, b) {
      if (!(this instanceof f.Event)) return new f.Event(a, b)
      a && a.type
        ? ((this.originalEvent = a),
          (this.type = a.type),
          (this.isDefaultPrevented =
            a.defaultPrevented ||
            a.returnValue === !1 ||
            (a.getPreventDefault && a.getPreventDefault())
              ? K
              : J))
        : (this.type = a),
        b && f.extend(this, b),
        (this.timeStamp = (a && a.timeStamp) || f.now()),
        (this[f.expando] = !0)
    }),
    (f.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = K
        var a = this.originalEvent
        !a || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1))
      },
      stopPropagation: function () {
        this.isPropagationStopped = K
        var a = this.originalEvent
        !a || (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0))
      },
      stopImmediatePropagation: function () {
        ;(this.isImmediatePropagationStopped = K), this.stopPropagation()
      },
      isDefaultPrevented: J,
      isPropagationStopped: J,
      isImmediatePropagationStopped: J,
    }),
    f.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
      },
      function (a, b) {
        f.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c = this,
              d = a.relatedTarget,
              e = a.handleObj,
              g = e.selector,
              h
            if (!d || (d !== c && !f.contains(c, d)))
              (a.type = e.origType), (h = e.handler.apply(this, arguments)), (a.type = b)
            return h
          },
        }
      }
    ),
    f.support.submitBubbles ||
      (f.event.special.submit = {
        setup: function () {
          if (f.nodeName(this, 'form')) return !1
          f.event.add(this, 'click._submit keypress._submit', function (a) {
            var c = a.target,
              d = f.nodeName(c, 'input') || f.nodeName(c, 'button') ? c.form : b
            d &&
              !d._submit_attached &&
              (f.event.add(d, 'submit._submit', function (a) {
                this.parentNode &&
                  !a.isTrigger &&
                  f.event.simulate('submit', this.parentNode, a, !0)
              }),
              (d._submit_attached = !0))
          })
        },
        teardown: function () {
          if (f.nodeName(this, 'form')) return !1
          f.event.remove(this, '._submit')
        },
      }),
    f.support.changeBubbles ||
      (f.event.special.change = {
        setup: function () {
          if (z.test(this.nodeName)) {
            if (this.type === 'checkbox' || this.type === 'radio')
              f.event.add(this, 'propertychange._change', function (a) {
                a.originalEvent.propertyName === 'checked' && (this._just_changed = !0)
              }),
                f.event.add(this, 'click._change', function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    ((this._just_changed = !1), f.event.simulate('change', this, a, !0))
                })
            return !1
          }
          f.event.add(this, 'beforeactivate._change', function (a) {
            var b = a.target
            z.test(b.nodeName) &&
              !b._change_attached &&
              (f.event.add(b, 'change._change', function (a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  f.event.simulate('change', this.parentNode, a, !0)
              }),
              (b._change_attached = !0))
          })
        },
        handle: function (a) {
          var b = a.target
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== 'radio' && b.type !== 'checkbox')
          )
            return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
          f.event.remove(this, '._change')
          return z.test(this.nodeName)
        },
      }),
    f.support.focusinBubbles ||
      f.each(
        {
          focus: 'focusin',
          blur: 'focusout',
        },
        function (a, b) {
          var d = 0,
            e = function (a) {
              f.event.simulate(b, a.target, f.event.fix(a), !0)
            }
          f.event.special[b] = {
            setup: function () {
              d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
              --d === 0 && c.removeEventListener(a, e, !0)
            },
          }
        }
      ),
    f.fn.extend({
      on: function (a, c, d, e, g) {
        var h, i
        if (typeof a == 'object') {
          typeof c != 'string' && ((d = c), (c = b))
          for (i in a) this.on(i, c, d, a[i], g)
          return this
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null && (typeof c == 'string' ? ((e = d), (d = b)) : ((e = d), (d = c), (c = b)))
        if (e === !1) e = J
        else if (!e) return this
        g === 1 &&
          ((h = e),
          (e = function (a) {
            f().off(a)
            return h.apply(this, arguments)
          }),
          (e.guid = h.guid || (h.guid = f.guid++)))
        return this.each(function () {
          f.event.add(this, a, e, d, c)
        })
      },
      one: function (a, b, c, d) {
        return this.on.call(this, a, b, c, d, 1)
      },
      off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
          var e = a.handleObj
          f(a.delegateTarget).off(
            e.namespace ? e.type + '.' + e.namespace : e.type,
            e.selector,
            e.handler
          )
          return this
        }
        if (typeof a == 'object') {
          for (var g in a) this.off(g, c, a[g])
          return this
        }
        if (c === !1 || typeof c == 'function') (d = c), (c = b)
        d === !1 && (d = J)
        return this.each(function () {
          f.event.remove(this, a, d, c)
        })
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function (a, b) {
        return this.off(a, null, b)
      },
      live: function (a, b, c) {
        f(this.context).on(a, this.selector, b, c)
        return this
      },
      die: function (a, b) {
        f(this.context).off(a, this.selector || '**', b)
        return this
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, '**') : this.off(b, a, c)
      },
      trigger: function (a, b) {
        return this.each(function () {
          f.event.trigger(a, b, this)
        })
      },
      triggerHandler: function (a, b) {
        if (this[0]) return f.event.trigger(a, b, this[0], !0)
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || f.guid++,
          d = 0,
          e = function (c) {
            var e = (f._data(this, 'lastToggle' + a.guid) || 0) % d
            f._data(this, 'lastToggle' + a.guid, e + 1), c.preventDefault()
            return b[e].apply(this, arguments) || !1
          }
        e.guid = c
        while (d < b.length) b[d++].guid = c
        return this.click(e)
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      },
    }),
    f.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (a, b) {
        ;(f.fn[b] = function (a, c) {
          c == null && ((c = a), (a = null))
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }),
          f.attrFn && (f.attrFn[b] = !0),
          C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
          D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
      }
    ),
    (function () {
      function x(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h]
          if (j) {
            var k = !1
            j = j[a]
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset]
                break
              }
              if (j.nodeType === 1) {
                g || ((j[d] = c), (j.sizset = h))
                if (typeof b != 'string') {
                  if (j === b) {
                    k = !0
                    break
                  }
                } else if (m.filter(b, [j]).length > 0) {
                  k = j
                  break
                }
              }
              j = j[a]
            }
            e[h] = k
          }
        }
      }

      function w(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h]
          if (j) {
            var k = !1
            j = j[a]
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset]
                break
              }
              j.nodeType === 1 && !g && ((j[d] = c), (j.sizset = h))
              if (j.nodeName.toLowerCase() === b) {
                k = j
                break
              }
              j = j[a]
            }
            e[h] = k
          }
        }
      }
      var a =
          /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = 'sizcache' + (Math.random() + '').replace('.', ''),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/
      ;[0, 0].sort(function () {
        i = !1
        return 0
      })
      var m = function (b, d, e, f) {
        ;(e = e || []), (d = d || c)
        var h = d
        if (d.nodeType !== 1 && d.nodeType !== 9) return []
        if (!b || typeof b != 'string') return e
        var i,
          j,
          k,
          l,
          n,
          q,
          r,
          t,
          u = !0,
          v = m.isXML(d),
          w = [],
          x = b
        do {
          a.exec(''), (i = a.exec(x))
          if (i) {
            ;(x = i[3]), w.push(i[1])
            if (i[2]) {
              l = i[3]
              break
            }
          }
        } while (i)
        if (w.length > 1 && p.exec(b))
          if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f)
          else {
            j = o.relative[w[0]] ? [d] : m(w.shift(), d)
            while (w.length) (b = w.shift()), o.relative[b] && (b += w.shift()), (j = y(b, j, f))
          }
        else {
          !f &&
            w.length > 1 &&
            d.nodeType === 9 &&
            !v &&
            o.match.ID.test(w[0]) &&
            !o.match.ID.test(w[w.length - 1]) &&
            ((n = m.find(w.shift(), d, v)), (d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]))
          if (d) {
            ;(n = f
              ? {
                  expr: w.pop(),
                  set: s(f),
                }
              : m.find(
                  w.pop(),
                  w.length === 1 && (w[0] === '~' || w[0] === '+') && d.parentNode
                    ? d.parentNode
                    : d,
                  v
                )),
              (j = n.expr ? m.filter(n.expr, n.set) : n.set),
              w.length > 0 ? (k = s(j)) : (u = !1)
            while (w.length)
              (q = w.pop()),
                (r = q),
                o.relative[q] ? (r = w.pop()) : (q = ''),
                r == null && (r = d),
                o.relative[q](k, r, v)
          } else k = w = []
        }
        k || (k = j), k || m.error(q || b)
        if (g.call(k) === '[object Array]')
          if (!u) e.push.apply(e, k)
          else if (d && d.nodeType === 1)
            for (t = 0; k[t] != null; t++)
              k[t] && (k[t] === !0 || (k[t].nodeType === 1 && m.contains(d, k[t]))) && e.push(j[t])
          else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t])
        else s(k, e)
        l && (m(l, h, e, f), m.uniqueSort(e))
        return e
      }
      ;(m.uniqueSort = function (a) {
        if (u) {
          ;(h = i), a.sort(u)
          if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
        }
        return a
      }),
        (m.matches = function (a, b) {
          return m(a, null, null, b)
        }),
        (m.matchesSelector = function (a, b) {
          return m(b, null, null, [a]).length > 0
        }),
        (m.find = function (a, b, c) {
          var d, e, f, g, h, i
          if (!a) return []
          for (e = 0, f = o.order.length; e < f; e++) {
            h = o.order[e]
            if ((g = o.leftMatch[h].exec(a))) {
              ;(i = g[1]), g.splice(1, 1)
              if (i.substr(i.length - 1) !== '\\') {
                ;(g[1] = (g[1] || '').replace(j, '')), (d = o.find[h](g, b, c))
                if (d != null) {
                  a = a.replace(o.match[h], '')
                  break
                }
              }
            }
          }
          d || (d = typeof b.getElementsByTagName != 'undefined' ? b.getElementsByTagName('*') : [])
          return {
            set: d,
            expr: a,
          }
        }),
        (m.filter = function (a, c, d, e) {
          var f,
            g,
            h,
            i,
            j,
            k,
            l,
            n,
            p,
            q = a,
            r = [],
            s = c,
            t = c && c[0] && m.isXML(c[0])
          while (a && c.length) {
            for (h in o.filter)
              if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                ;(k = o.filter[h]), (l = f[1]), (g = !1), f.splice(1, 1)
                if (l.substr(l.length - 1) === '\\') continue
                s === r && (r = [])
                if (o.preFilter[h]) {
                  f = o.preFilter[h](f, s, d, r, e, t)
                  if (!f) g = i = !0
                  else if (f === !0) continue
                }
                if (f)
                  for (n = 0; (j = s[n]) != null; n++)
                    j &&
                      ((i = k(j, f, n, s)),
                      (p = e ^ i),
                      d && i != null ? (p ? (g = !0) : (s[n] = !1)) : p && (r.push(j), (g = !0)))
                if (i !== b) {
                  d || (s = r), (a = a.replace(o.match[h], ''))
                  if (!g) return []
                  break
                }
              }
            if (a === q)
              if (g == null) m.error(a)
              else break
            q = a
          }
          return s
        }),
        (m.error = function (a) {
          throw new Error('Syntax error, unrecognized expression: ' + a)
        })
      var n = (m.getText = function (a) {
          var b,
            c,
            d = a.nodeType,
            e = ''
          if (d) {
            if (d === 1 || d === 9) {
              if (typeof a.textContent == 'string') return a.textContent
              if (typeof a.innerText == 'string') return a.innerText.replace(k, '')
              for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
            } else if (d === 3 || d === 4) return a.nodeValue
          } else for (b = 0; (c = a[b]); b++) c.nodeType !== 8 && (e += n(c))
          return e
        }),
        o = (m.selectors = {
          order: ['ID', 'NAME', 'TAG'],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD:
              /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: {
            class: 'className',
            for: 'htmlFor',
          },
          attrHandle: {
            href: function (a) {
              return a.getAttribute('href')
            },
            type: function (a) {
              return a.getAttribute('type')
            },
          },
          relative: {
            '+': function (a, b) {
              var c = typeof b == 'string',
                d = c && !l.test(b),
                e = c && !d
              d && (b = b.toLowerCase())
              for (var f = 0, g = a.length, h; f < g; f++)
                if ((h = a[f])) {
                  while ((h = h.previousSibling) && h.nodeType !== 1);
                  a[f] = e || (h && h.nodeName.toLowerCase() === b) ? h || !1 : h === b
                }
              e && m.filter(b, a, !0)
            },
            '>': function (a, b) {
              var c,
                d = typeof b == 'string',
                e = 0,
                f = a.length
              if (d && !l.test(b)) {
                b = b.toLowerCase()
                for (; e < f; e++) {
                  c = a[e]
                  if (c) {
                    var g = c.parentNode
                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                  }
                }
              } else {
                for (; e < f; e++) (c = a[e]), c && (a[e] = d ? c.parentNode : c.parentNode === b)
                d && m.filter(b, a, !0)
              }
            },
            '': function (a, b, c) {
              var d,
                f = e++,
                g = x
              typeof b == 'string' && !l.test(b) && ((b = b.toLowerCase()), (d = b), (g = w)),
                g('parentNode', b, f, a, d, c)
            },
            '~': function (a, b, c) {
              var d,
                f = e++,
                g = x
              typeof b == 'string' && !l.test(b) && ((b = b.toLowerCase()), (d = b), (g = w)),
                g('previousSibling', b, f, a, d, c)
            },
          },
          find: {
            ID: function (a, b, c) {
              if (typeof b.getElementById != 'undefined' && !c) {
                var d = b.getElementById(a[1])
                return d && d.parentNode ? [d] : []
              }
            },
            NAME: function (a, b) {
              if (typeof b.getElementsByName != 'undefined') {
                var c = [],
                  d = b.getElementsByName(a[1])
                for (var e = 0, f = d.length; e < f; e++)
                  d[e].getAttribute('name') === a[1] && c.push(d[e])
                return c.length === 0 ? null : c
              }
            },
            TAG: function (a, b) {
              if (typeof b.getElementsByTagName != 'undefined') return b.getElementsByTagName(a[1])
            },
          },
          preFilter: {
            CLASS: function (a, b, c, d, e, f) {
              a = ' ' + a[1].replace(j, '') + ' '
              if (f) return a
              for (var g = 0, h; (h = b[g]) != null; g++)
                h &&
                  (e ^
                  (h.className &&
                    (' ' + h.className + ' ').replace(/[\t\n\r]/g, ' ').indexOf(a) >= 0)
                    ? c || d.push(h)
                    : c && (b[g] = !1))
              return !1
            },
            ID: function (a) {
              return a[1].replace(j, '')
            },
            TAG: function (a, b) {
              return a[1].replace(j, '').toLowerCase()
            },
            CHILD: function (a) {
              if (a[1] === 'nth') {
                a[2] || m.error(a[0]), (a[2] = a[2].replace(/^\+|\s*/g, ''))
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  (a[2] === 'even' && '2n') ||
                    (a[2] === 'odd' && '2n+1') ||
                    (!/\D/.test(a[2]) && '0n+' + a[2]) ||
                    a[2]
                )
                ;(a[2] = b[1] + (b[2] || 1) - 0), (a[3] = b[3] - 0)
              } else a[2] && m.error(a[0])
              a[0] = e++
              return a
            },
            ATTR: function (a, b, c, d, e, f) {
              var g = (a[1] = a[1].replace(j, ''))
              !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                (a[4] = (a[4] || a[5] || '').replace(j, '')),
                a[2] === '~=' && (a[4] = ' ' + a[4] + ' ')
              return a
            },
            PSEUDO: function (b, c, d, e, f) {
              if (b[1] === 'not')
                if ((a.exec(b[3]) || '').length > 1 || /^\w/.test(b[3]))
                  b[3] = m(b[3], null, null, c)
                else {
                  var g = m.filter(b[3], c, d, !0 ^ f)
                  d || e.push.apply(e, g)
                  return !1
                }
              else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0
              return b
            },
            POS: function (a) {
              a.unshift(!0)
              return a
            },
          },
          filters: {
            enabled: function (a) {
              return a.disabled === !1 && a.type !== 'hidden'
            },
            disabled: function (a) {
              return a.disabled === !0
            },
            checked: function (a) {
              return a.checked === !0
            },
            selected: function (a) {
              a.parentNode && a.parentNode.selectedIndex
              return a.selected === !0
            },
            parent: function (a) {
              return !!a.firstChild
            },
            empty: function (a) {
              return !a.firstChild
            },
            has: function (a, b, c) {
              return !!m(c[3], a).length
            },
            header: function (a) {
              return /h\d/i.test(a.nodeName)
            },
            text: function (a) {
              var b = a.getAttribute('type'),
                c = a.type
              return a.nodeName.toLowerCase() === 'input' && 'text' === c && (b === c || b === null)
            },
            radio: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'radio' === a.type
            },
            checkbox: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'checkbox' === a.type
            },
            file: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'file' === a.type
            },
            password: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'password' === a.type
            },
            submit: function (a) {
              var b = a.nodeName.toLowerCase()
              return (b === 'input' || b === 'button') && 'submit' === a.type
            },
            image: function (a) {
              return a.nodeName.toLowerCase() === 'input' && 'image' === a.type
            },
            reset: function (a) {
              var b = a.nodeName.toLowerCase()
              return (b === 'input' || b === 'button') && 'reset' === a.type
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase()
              return (b === 'input' && 'button' === a.type) || b === 'button'
            },
            input: function (a) {
              return /input|select|textarea|button/i.test(a.nodeName)
            },
            focus: function (a) {
              return a === a.ownerDocument.activeElement
            },
          },
          setFilters: {
            first: function (a, b) {
              return b === 0
            },
            last: function (a, b, c, d) {
              return b === d.length - 1
            },
            even: function (a, b) {
              return b % 2 === 0
            },
            odd: function (a, b) {
              return b % 2 === 1
            },
            lt: function (a, b, c) {
              return b < c[3] - 0
            },
            gt: function (a, b, c) {
              return b > c[3] - 0
            },
            nth: function (a, b, c) {
              return c[3] - 0 === b
            },
            eq: function (a, b, c) {
              return c[3] - 0 === b
            },
          },
          filter: {
            PSEUDO: function (a, b, c, d) {
              var e = b[1],
                f = o.filters[e]
              if (f) return f(a, c, b, d)
              if (e === 'contains')
                return (a.textContent || a.innerText || n([a]) || '').indexOf(b[3]) >= 0
              if (e === 'not') {
                var g = b[3]
                for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1
                return !0
              }
              m.error(e)
            },
            CHILD: function (a, b) {
              var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = b[1],
                l = a
              switch (k) {
                case 'only':
                case 'first':
                  while ((l = l.previousSibling)) if (l.nodeType === 1) return !1
                  if (k === 'first') return !0
                  l = a
                case 'last':
                  while ((l = l.nextSibling)) if (l.nodeType === 1) return !1
                  return !0
                case 'nth':
                  ;(c = b[2]), (e = b[3])
                  if (c === 1 && e === 0) return !0
                  ;(f = b[0]), (g = a.parentNode)
                  if (g && (g[d] !== f || !a.nodeIndex)) {
                    i = 0
                    for (l = g.firstChild; l; l = l.nextSibling)
                      l.nodeType === 1 && (l.nodeIndex = ++i)
                    g[d] = f
                  }
                  j = a.nodeIndex - e
                  return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
              }
            },
            ID: function (a, b) {
              return a.nodeType === 1 && a.getAttribute('id') === b
            },
            TAG: function (a, b) {
              return (
                (b === '*' && a.nodeType === 1) || (!!a.nodeName && a.nodeName.toLowerCase() === b)
              )
            },
            CLASS: function (a, b) {
              return (' ' + (a.className || a.getAttribute('class')) + ' ').indexOf(b) > -1
            },
            ATTR: function (a, b) {
              var c = b[1],
                d = m.attr
                  ? m.attr(a, c)
                  : o.attrHandle[c]
                  ? o.attrHandle[c](a)
                  : a[c] != null
                  ? a[c]
                  : a.getAttribute(c),
                e = d + '',
                f = b[2],
                g = b[4]
              return d == null
                ? f === '!='
                : !f && m.attr
                ? d != null
                : f === '='
                ? e === g
                : f === '*='
                ? e.indexOf(g) >= 0
                : f === '~='
                ? (' ' + e + ' ').indexOf(g) >= 0
                : g
                ? f === '!='
                  ? e !== g
                  : f === '^='
                  ? e.indexOf(g) === 0
                  : f === '$='
                  ? e.substr(e.length - g.length) === g
                  : f === '|='
                  ? e === g || e.substr(0, g.length + 1) === g + '-'
                  : !1
                : e && d !== !1
            },
            POS: function (a, b, c, d) {
              var e = b[2],
                f = o.setFilters[e]
              if (f) return f(a, c, b, d)
            },
          },
        }),
        p = o.match.POS,
        q = function (a, b) {
          return '\\' + (b - 0 + 1)
        }
      for (var r in o.match)
        (o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source)),
          (o.leftMatch[r] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)
          ))
      var s = function (a, b) {
        a = Array.prototype.slice.call(a, 0)
        if (b) {
          b.push.apply(b, a)
          return b
        }
        return a
      }
      try {
        Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
      } catch (t) {
        s = function (a, b) {
          var c = 0,
            d = b || []
          if (g.call(a) === '[object Array]') Array.prototype.push.apply(d, a)
          else if (typeof a.length == 'number') for (var e = a.length; c < e; c++) d.push(a[c])
          else for (; a[c]; c++) d.push(a[c])
          return d
        }
      }
      var u, v
      c.documentElement.compareDocumentPosition
        ? (u = function (a, b) {
            if (a === b) {
              h = !0
              return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)
              return a.compareDocumentPosition ? -1 : 1
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
          })
        : ((u = function (a, b) {
            if (a === b) {
              h = !0
              return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex
            var c,
              d,
              e = [],
              f = [],
              g = a.parentNode,
              i = b.parentNode,
              j = g
            if (g === i) return v(a, b)
            if (!g) return -1
            if (!i) return 1
            while (j) e.unshift(j), (j = j.parentNode)
            j = i
            while (j) f.unshift(j), (j = j.parentNode)
            ;(c = e.length), (d = f.length)
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k])
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
          }),
          (v = function (a, b, c) {
            if (a === b) return c
            var d = a.nextSibling
            while (d) {
              if (d === b) return -1
              d = d.nextSibling
            }
            return 1
          })),
        (function () {
          var a = c.createElement('div'),
            d = 'script' + new Date().getTime(),
            e = c.documentElement
          ;(a.innerHTML = "<a name='" + d + "'/>"),
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) &&
              ((o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != 'undefined' && !d) {
                  var e = c.getElementById(a[1])
                  return e
                    ? e.id === a[1] ||
                      (typeof e.getAttributeNode != 'undefined' &&
                        e.getAttributeNode('id').nodeValue === a[1])
                      ? [e]
                      : b
                    : []
                }
              }),
              (o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != 'undefined' && a.getAttributeNode('id')
                return a.nodeType === 1 && c && c.nodeValue === b
              })),
            e.removeChild(a),
            (e = a = null)
        })(),
        (function () {
          var a = c.createElement('div')
          a.appendChild(c.createComment('')),
            a.getElementsByTagName('*').length > 0 &&
              (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1])
                if (a[1] === '*') {
                  var d = []
                  for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e])
                  c = d
                }
                return c
              }),
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute != 'undefined' &&
              a.firstChild.getAttribute('href') !== '#' &&
              (o.attrHandle.href = function (a) {
                return a.getAttribute('href', 2)
              }),
            (a = null)
        })(),
        c.querySelectorAll &&
          (function () {
            var a = m,
              b = c.createElement('div'),
              d = '__sizzle__'
            b.innerHTML = "<p class='TEST'></p>"
            if (!b.querySelectorAll || b.querySelectorAll('.TEST').length !== 0) {
              m = function (b, e, f, g) {
                e = e || c
                if (!g && !m.isXML(e)) {
                  var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b)
                  if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                    if (h[1]) return s(e.getElementsByTagName(b), f)
                    if (h[2] && o.find.CLASS && e.getElementsByClassName)
                      return s(e.getElementsByClassName(h[2]), f)
                  }
                  if (e.nodeType === 9) {
                    if (b === 'body' && e.body) return s([e.body], f)
                    if (h && h[3]) {
                      var i = e.getElementById(h[3])
                      if (!i || !i.parentNode) return s([], f)
                      if (i.id === h[3]) return s([i], f)
                    }
                    try {
                      return s(e.querySelectorAll(b), f)
                    } catch (j) {}
                  } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== 'object') {
                    var k = e,
                      l = e.getAttribute('id'),
                      n = l || d,
                      p = e.parentNode,
                      q = /^\s*[+~]/.test(b)
                    l ? (n = n.replace(/'/g, '\\$&')) : e.setAttribute('id', n),
                      q && p && (e = e.parentNode)
                    try {
                      if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                    } catch (r) {
                    } finally {
                      l || k.removeAttribute('id')
                    }
                  }
                }
                return a(b, e, f, g)
              }
              for (var e in a) m[e] = a[e]
              b = null
            }
          })(),
        (function () {
          var a = c.documentElement,
            b =
              a.matchesSelector ||
              a.mozMatchesSelector ||
              a.webkitMatchesSelector ||
              a.msMatchesSelector
          if (b) {
            var d = !b.call(c.createElement('div'), 'div'),
              e = !1
            try {
              b.call(c.documentElement, "[test!='']:sizzle")
            } catch (f) {
              e = !0
            }
            m.matchesSelector = function (a, c) {
              c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")
              if (!m.isXML(a))
                try {
                  if (e || (!o.match.PSEUDO.test(c) && !/!=/.test(c))) {
                    var f = b.call(a, c)
                    if (f || !d || (a.document && a.document.nodeType !== 11)) return f
                  }
                } catch (g) {}
              return m(c, null, null, [a]).length > 0
            }
          }
        })(),
        (function () {
          var a = c.createElement('div')
          a.innerHTML = "<div class='test e'></div><div class='test'></div>"
          if (!!a.getElementsByClassName && a.getElementsByClassName('e').length !== 0) {
            a.lastChild.className = 'e'
            if (a.getElementsByClassName('e').length === 1) return
            o.order.splice(1, 0, 'CLASS'),
              (o.find.CLASS = function (a, b, c) {
                if (typeof b.getElementsByClassName != 'undefined' && !c)
                  return b.getElementsByClassName(a[1])
              }),
              (a = null)
          }
        })(),
        c.documentElement.contains
          ? (m.contains = function (a, b) {
              return a !== b && (a.contains ? a.contains(b) : !0)
            })
          : c.documentElement.compareDocumentPosition
          ? (m.contains = function (a, b) {
              return !!(a.compareDocumentPosition(b) & 16)
            })
          : (m.contains = function () {
              return !1
            }),
        (m.isXML = function (a) {
          var b = (a ? a.ownerDocument || a : 0).documentElement
          return b ? b.nodeName !== 'HTML' : !1
        })
      var y = function (a, b, c) {
        var d,
          e = [],
          f = '',
          g = b.nodeType ? [b] : b
        while ((d = o.match.PSEUDO.exec(a))) (f += d[0]), (a = a.replace(o.match.PSEUDO, ''))
        a = o.relative[a] ? a + '*' : a
        for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c)
        return m.filter(f, e)
      }
      ;(m.attr = f.attr),
        (m.selectors.attrMap = {}),
        (f.find = m),
        (f.expr = m.selectors),
        (f.expr[':'] = f.expr.filters),
        (f.unique = m.uniqueSort),
        (f.text = m.getText),
        (f.isXMLDoc = m.isXML),
        (f.contains = m.contains)
    })()
  var L = /Until$/,
    M = /^(?:parents|prevUntil|prevAll)/,
    N = /,/,
    O = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    Q = f.expr.match.POS,
    R = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    }
  f.fn.extend({
    find: function (a) {
      var b = this,
        c,
        d
      if (typeof a != 'string')
        return f(a).filter(function () {
          for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
        })
      var e = this.pushStack('', 'find', a),
        g,
        h,
        i
      for (c = 0, d = this.length; c < d; c++) {
        ;(g = e.length), f.find(a, this[c], e)
        if (c > 0)
          for (h = g; h < e.length; h++)
            for (i = 0; i < g; i++)
              if (e[i] === e[h]) {
                e.splice(h--, 1)
                break
              }
      }
      return e
    },
    has: function (a) {
      var b = f(a)
      return this.filter(function () {
        for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
      })
    },
    not: function (a) {
      return this.pushStack(T(this, a, !1), 'not', a)
    },
    filter: function (a) {
      return this.pushStack(T(this, a, !0), 'filter', a)
    },
    is: function (a) {
      return (
        !!a &&
        (typeof a == 'string'
          ? Q.test(a)
            ? f(a, this.context).index(this[0]) >= 0
            : f.filter(a, this).length > 0
          : this.filter(a).length > 0)
      )
    },
    closest: function (a, b) {
      var c = [],
        d,
        e,
        g = this[0]
      if (f.isArray(a)) {
        var h = 1
        while (g && g.ownerDocument && g !== b) {
          for (d = 0; d < a.length; d++)
            f(g).is(a[d]) &&
              c.push({
                selector: a[d],
                elem: g,
                level: h,
              })
          ;(g = g.parentNode), h++
        }
        return c
      }
      var i = Q.test(a) || typeof a != 'string' ? f(a, b || this.context) : 0
      for (d = 0, e = this.length; d < e; d++) {
        g = this[d]
        while (g) {
          if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
            c.push(g)
            break
          }
          g = g.parentNode
          if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
        }
      }
      c = c.length > 1 ? f.unique(c) : c
      return this.pushStack(c, 'closest', a)
    },
    index: function (a) {
      if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1
      if (typeof a == 'string') return f.inArray(this[0], f(a))
      return f.inArray(a.jquery ? a[0] : a, this)
    },
    add: function (a, b) {
      var c = typeof a == 'string' ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
        d = f.merge(this.get(), c)
      return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
    },
    andSelf: function () {
      return this.add(this.prevObject)
    },
  }),
    f.each(
      {
        parent: function (a) {
          var b = a.parentNode
          return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
          return f.dir(a, 'parentNode')
        },
        parentsUntil: function (a, b, c) {
          return f.dir(a, 'parentNode', c)
        },
        next: function (a) {
          return f.nth(a, 2, 'nextSibling')
        },
        prev: function (a) {
          return f.nth(a, 2, 'previousSibling')
        },
        nextAll: function (a) {
          return f.dir(a, 'nextSibling')
        },
        prevAll: function (a) {
          return f.dir(a, 'previousSibling')
        },
        nextUntil: function (a, b, c) {
          return f.dir(a, 'nextSibling', c)
        },
        prevUntil: function (a, b, c) {
          return f.dir(a, 'previousSibling', c)
        },
        siblings: function (a) {
          return f.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
          return f.sibling(a.firstChild)
        },
        contents: function (a) {
          return f.nodeName(a, 'iframe')
            ? a.contentDocument || a.contentWindow.document
            : f.makeArray(a.childNodes)
        },
      },
      function (a, b) {
        f.fn[a] = function (c, d) {
          var e = f.map(this, b, c)
          L.test(a) || (d = c),
            d && typeof d == 'string' && (e = f.filter(d, e)),
            (e = this.length > 1 && !R[a] ? f.unique(e) : e),
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse())
          return this.pushStack(e, a, P.call(arguments).join(','))
        }
      }
    ),
    f.extend({
      filter: function (a, b, c) {
        c && (a = ':not(' + a + ')')
        return b.length === 1
          ? f.find.matchesSelector(b[0], a)
            ? [b[0]]
            : []
          : f.find.matches(a, b)
      },
      dir: function (a, c, d) {
        var e = [],
          g = a[c]
        while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
          g.nodeType === 1 && e.push(g), (g = g[c])
        return e
      },
      nth: function (a, b, c, d) {
        b = b || 1
        var e = 0
        for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break
        return a
      },
      sibling: function (a, b) {
        var c = []
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a)
        return c
      },
    })
  var V =
      'abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    W = / jQuery\d+="(?:\d+|null)"/g,
    X = /^\s+/,
    Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Z = /<([\w:]+)/,
    $ = /<tbody/i,
    _ = /<|&#?\w+;/,
    ba = /<(?:script|style)/i,
    bb = /<(?:script|object|embed|option|style)/i,
    bc = new RegExp('<(?:' + V + ')', 'i'),
    bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    be = /\/(java|ecma)script/i,
    bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    bg = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      area: [1, '<map>', '</map>'],
      _default: [0, '', ''],
    },
    bh = U(c)
  ;(bg.optgroup = bg.option),
    (bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead),
    (bg.th = bg.td),
    f.support.htmlSerialize || (bg._default = [1, 'div<div>', '</div>']),
    f.fn.extend({
      text: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            var c = f(this)
            c.text(a.call(this, b, c.text()))
          })
        if (typeof a != 'object' && a !== b)
          return this.empty().append(((this[0] && this[0].ownerDocument) || c).createTextNode(a))
        return f.text(this)
      },
      wrapAll: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).wrapAll(a.call(this, b))
          })
        if (this[0]) {
          var b = f(a, this[0].ownerDocument).eq(0).clone(!0)
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this
                while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild
                return a
              })
              .append(this)
        }
        return this
      },
      wrapInner: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).wrapInner(a.call(this, b))
          })
        return this.each(function () {
          var b = f(this),
            c = b.contents()
          c.length ? c.wrapAll(a) : b.append(a)
        })
      },
      wrap: function (a) {
        var b = f.isFunction(a)
        return this.each(function (c) {
          f(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            f.nodeName(this, 'body') || f(this).replaceWith(this.childNodes)
          })
          .end()
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          this.nodeType === 1 && this.appendChild(a)
        })
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          this.nodeType === 1 && this.insertBefore(a, this.firstChild)
        })
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this)
          })
        if (arguments.length) {
          var a = f.clean(arguments)
          a.push.apply(a, this.toArray())
          return this.pushStack(a, 'before', arguments)
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling)
          })
        if (arguments.length) {
          var a = this.pushStack(this, 'after', arguments)
          a.push.apply(a, f.clean(arguments))
          return a
        }
      },
      remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)
          if (!a || f.filter(a, [d]).length)
            !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName('*')), f.cleanData([d])),
              d.parentNode && d.parentNode.removeChild(d)
        return this
      },
      empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
          b.nodeType === 1 && f.cleanData(b.getElementsByTagName('*'))
          while (b.firstChild) b.removeChild(b.firstChild)
        }
        return this
      },
      clone: function (a, b) {
        ;(a = a == null ? !1 : a), (b = b == null ? a : b)
        return this.map(function () {
          return f.clone(this, a, b)
        })
      },
      html: function (a) {
        if (a === b)
          return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, '') : null
        if (
          typeof a == 'string' &&
          !ba.test(a) &&
          (f.support.leadingWhitespace || !X.test(a)) &&
          !bg[(Z.exec(a) || ['', ''])[1].toLowerCase()]
        ) {
          a = a.replace(Y, '<$1></$2>')
          try {
            for (var c = 0, d = this.length; c < d; c++)
              this[c].nodeType === 1 &&
                (f.cleanData(this[c].getElementsByTagName('*')), (this[c].innerHTML = a))
          } catch (e) {
            this.empty().append(a)
          }
        } else
          f.isFunction(a)
            ? this.each(function (b) {
                var c = f(this)
                c.html(a.call(this, b, c.html()))
              })
            : this.empty().append(a)
        return this
      },
      replaceWith: function (a) {
        if (this[0] && this[0].parentNode) {
          if (f.isFunction(a))
            return this.each(function (b) {
              var c = f(this),
                d = c.html()
              c.replaceWith(a.call(this, b, d))
            })
          typeof a != 'string' && (a = f(a).detach())
          return this.each(function () {
            var b = this.nextSibling,
              c = this.parentNode
            f(this).remove(), b ? f(b).before(a) : f(c).append(a)
          })
        }
        return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), 'replaceWith', a) : this
      },
      detach: function (a) {
        return this.remove(a, !0)
      },
      domManip: function (a, c, d) {
        var e,
          g,
          h,
          i,
          j = a[0],
          k = []
        if (!f.support.checkClone && arguments.length === 3 && typeof j == 'string' && bd.test(j))
          return this.each(function () {
            f(this).domManip(a, c, d, !0)
          })
        if (f.isFunction(j))
          return this.each(function (e) {
            var g = f(this)
            ;(a[0] = j.call(this, e, c ? g.html() : b)), g.domManip(a, c, d)
          })
        if (this[0]) {
          ;(i = j && j.parentNode),
            f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length
              ? (e = {
                  fragment: i,
                })
              : (e = f.buildFragment(a, this, k)),
            (h = e.fragment),
            h.childNodes.length === 1 ? (g = h = h.firstChild) : (g = h.firstChild)
          if (g) {
            c = c && f.nodeName(g, 'tr')
            for (var l = 0, m = this.length, n = m - 1; l < m; l++)
              d.call(
                c ? bi(this[l], g) : this[l],
                e.cacheable || (m > 1 && l < n) ? f.clone(h, !0, !0) : h
              )
          }
          k.length && f.each(k, bp)
        }
        return this
      },
    }),
    (f.buildFragment = function (a, b, d) {
      var e,
        g,
        h,
        i,
        j = a[0]
      b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 &&
          typeof j == 'string' &&
          j.length < 512 &&
          i === c &&
          j.charAt(0) === '<' &&
          !bb.test(j) &&
          (f.support.checkClone || !bd.test(j)) &&
          (f.support.html5Clone || !bc.test(j)) &&
          ((g = !0), (h = f.fragments[j]), h && h !== 1 && (e = h)),
        e || ((e = i.createDocumentFragment()), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e : 1)
      return {
        fragment: e,
        cacheable: g,
      }
    }),
    (f.fragments = {}),
    f.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (a, b) {
        f.fn[a] = function (c) {
          var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode
          if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
            e[b](this[0])
            return this
          }
          for (var h = 0, i = e.length; h < i; h++) {
            var j = (h > 0 ? this.clone(!0) : this).get()
            f(e[h])[b](j), (d = d.concat(j))
          }
          return this.pushStack(d, a, e.selector)
        }
      }
    ),
    f.extend({
      clone: function (a, b, c) {
        var d,
          e,
          g,
          h = f.support.html5Clone || !bc.test('<' + a.nodeName) ? a.cloneNode(!0) : bo(a)
        if (
          (!f.support.noCloneEvent || !f.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !f.isXMLDoc(a)
        ) {
          bk(a, h), (d = bl(a)), (e = bl(h))
          for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
        }
        if (b) {
          bj(a, h)
          if (c) {
            ;(d = bl(a)), (e = bl(h))
            for (g = 0; d[g]; ++g) bj(d[g], e[g])
          }
        }
        d = e = null
        return h
      },
      clean: function (a, b, d, e) {
        var g
        ;(b = b || c),
          typeof b.createElement == 'undefined' &&
            (b = b.ownerDocument || (b[0] && b[0].ownerDocument) || c)
        var h = [],
          i
        for (var j = 0, k; (k = a[j]) != null; j++) {
          typeof k == 'number' && (k += '')
          if (!k) continue
          if (typeof k == 'string')
            if (!_.test(k)) k = b.createTextNode(k)
            else {
              k = k.replace(Y, '<$1></$2>')
              var l = (Z.exec(k) || ['', ''])[1].toLowerCase(),
                m = bg[l] || bg._default,
                n = m[0],
                o = b.createElement('div')
              b === c ? bh.appendChild(o) : U(b).appendChild(o), (o.innerHTML = m[1] + k + m[2])
              while (n--) o = o.lastChild
              if (!f.support.tbody) {
                var p = $.test(k),
                  q =
                    l === 'table' && !p
                      ? o.firstChild && o.firstChild.childNodes
                      : m[1] === '<table>' && !p
                      ? o.childNodes
                      : []
                for (i = q.length - 1; i >= 0; --i)
                  f.nodeName(q[i], 'tbody') &&
                    !q[i].childNodes.length &&
                    q[i].parentNode.removeChild(q[i])
              }
              !f.support.leadingWhitespace &&
                X.test(k) &&
                o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                (k = o.childNodes)
            }
          var r
          if (!f.support.appendChecked)
            if (k[0] && typeof (r = k.length) == 'number') for (i = 0; i < r; i++) bn(k[i])
            else bn(k)
          k.nodeType ? h.push(k) : (h = f.merge(h, k))
        }
        if (d) {
          g = function (a) {
            return !a.type || be.test(a.type)
          }
          for (j = 0; h[j]; j++)
            if (
              e &&
              f.nodeName(h[j], 'script') &&
              (!h[j].type || h[j].type.toLowerCase() === 'text/javascript')
            )
              e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j])
            else {
              if (h[j].nodeType === 1) {
                var s = f.grep(h[j].getElementsByTagName('script'), g)
                h.splice.apply(h, [j + 1, 0].concat(s))
              }
              d.appendChild(h[j])
            }
        }
        return h
      },
      cleanData: function (a) {
        var b,
          c,
          d = f.cache,
          e = f.event.special,
          g = f.support.deleteExpando
        for (var h = 0, i; (i = a[h]) != null; h++) {
          if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue
          c = i[f.expando]
          if (c) {
            b = d[c]
            if (b && b.events) {
              for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
              b.handle && (b.handle.elem = null)
            }
            g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
          }
        }
      },
    })
  var bq = /alpha\([^)]*\)/i,
    br = /opacity=([^)]*)/,
    bs = /([A-Z]|^ms)/g,
    bt = /^-?\d+(?:px)?$/i,
    bu = /^-?\d/,
    bv = /^([\-+])=([\-+.\de]+)/,
    bw = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block',
    },
    bx = ['Left', 'Right'],
    by = ['Top', 'Bottom'],
    bz,
    bA,
    bB
  ;(f.fn.css = function (a, c) {
    if (arguments.length === 2 && c === b) return this
    return f.access(this, a, c, !0, function (a, c, d) {
      return d !== b ? f.style(a, c, d) : f.css(a, c)
    })
  }),
    f.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = bz(a, 'opacity', 'opacity')
              return c === '' ? '1' : c
            }
            return a.style.opacity
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: f.support.cssFloat ? 'cssFloat' : 'styleFloat',
      },
      style: function (a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
          var g,
            h,
            i = f.camelCase(c),
            j = a.style,
            k = f.cssHooks[i]
          c = f.cssProps[i] || i
          if (d === b) {
            if (k && 'get' in k && (g = k.get(a, !1, e)) !== b) return g
            return j[c]
          }
          ;(h = typeof d),
            h === 'string' &&
              (g = bv.exec(d)) &&
              ((d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c))), (h = 'number'))
          if (d == null || (h === 'number' && isNaN(d))) return
          h === 'number' && !f.cssNumber[i] && (d += 'px')
          if (!k || !('set' in k) || (d = k.set(a, d)) !== b)
            try {
              j[c] = d
            } catch (l) {}
        }
      },
      css: function (a, c, d) {
        var e, g
        ;(c = f.camelCase(c)),
          (g = f.cssHooks[c]),
          (c = f.cssProps[c] || c),
          c === 'cssFloat' && (c = 'float')
        if (g && 'get' in g && (e = g.get(a, !0, d)) !== b) return e
        if (bz) return bz(a, c)
      },
      swap: function (a, b, c) {
        var d = {}
        for (var e in b) (d[e] = a.style[e]), (a.style[e] = b[e])
        c.call(a)
        for (e in b) a.style[e] = d[e]
      },
    }),
    (f.curCSS = f.css),
    f.each(['height', 'width'], function (a, b) {
      f.cssHooks[b] = {
        get: function (a, c, d) {
          var e
          if (c) {
            if (a.offsetWidth !== 0) return bC(a, b, d)
            f.swap(a, bw, function () {
              e = bC(a, b, d)
            })
            return e
          }
        },
        set: function (a, b) {
          if (!bt.test(b)) return b
          b = parseFloat(b)
          if (b >= 0) return b + 'px'
        },
      }
    }),
    f.support.opacity ||
      (f.cssHooks.opacity = {
        get: function (a, b) {
          return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '')
            ? parseFloat(RegExp.$1) / 100 + ''
            : b
            ? '1'
            : ''
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? 'alpha(opacity=' + b * 100 + ')' : '',
            g = (d && d.filter) || c.filter || ''
          c.zoom = 1
          if (b >= 1 && f.trim(g.replace(bq, '')) === '') {
            c.removeAttribute('filter')
            if (d && !d.filter) return
          }
          c.filter = bq.test(g) ? g.replace(bq, e) : g + ' ' + e
        },
      }),
    f(function () {
      f.support.reliableMarginRight ||
        (f.cssHooks.marginRight = {
          get: function (a, b) {
            var c
            f.swap(
              a,
              {
                display: 'inline-block',
              },
              function () {
                b ? (c = bz(a, 'margin-right', 'marginRight')) : (c = a.style.marginRight)
              }
            )
            return c
          },
        })
    }),
    c.defaultView &&
      c.defaultView.getComputedStyle &&
      (bA = function (a, b) {
        var c, d, e
        ;(b = b.replace(bs, '-$1').toLowerCase()),
          (d = a.ownerDocument.defaultView) &&
            (e = d.getComputedStyle(a, null)) &&
            ((c = e.getPropertyValue(b)),
            c === '' && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)))
        return c
      }),
    c.documentElement.currentStyle &&
      (bB = function (a, b) {
        var c,
          d,
          e,
          f = a.currentStyle && a.currentStyle[b],
          g = a.style
        f === null && g && (e = g[b]) && (f = e),
          !bt.test(f) &&
            bu.test(f) &&
            ((c = g.left),
            (d = a.runtimeStyle && a.runtimeStyle.left),
            d && (a.runtimeStyle.left = a.currentStyle.left),
            (g.left = b === 'fontSize' ? '1em' : f || 0),
            (f = g.pixelLeft + 'px'),
            (g.left = c),
            d && (a.runtimeStyle.left = d))
        return f === '' ? 'auto' : f
      }),
    (bz = bA || bB),
    f.expr &&
      f.expr.filters &&
      ((f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
          c = a.offsetHeight
        return (
          (b === 0 && c === 0) ||
          (!f.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || f.css(a, 'display')) === 'none')
        )
      }),
      (f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
      }))
  var bD = /%20/g,
    bE = /\[\]$/,
    bF = /\r?\n/g,
    bG = /#.*$/,
    bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    bI =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bK = /^(?:GET|HEAD)$/,
    bL = /^\/\//,
    bM = /\?/,
    bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bO = /^(?:select|textarea)/i,
    bP = /\s+/,
    bQ = /([?&])_=[^&]*/,
    bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bS = f.fn.load,
    bT = {},
    bU = {},
    bV,
    bW,
    bX = ['*/'] + ['*']
  try {
    bV = e.href
  } catch (bY) {
    ;(bV = c.createElement('a')), (bV.href = ''), (bV = bV.href)
  }
  ;(bW = bR.exec(bV.toLowerCase()) || []),
    f.fn.extend({
      load: function (a, c, d) {
        if (typeof a != 'string' && bS) return bS.apply(this, arguments)
        if (!this.length) return this
        var e = a.indexOf(' ')
        if (e >= 0) {
          var g = a.slice(e, a.length)
          a = a.slice(0, e)
        }
        var h = 'GET'
        c &&
          (f.isFunction(c)
            ? ((d = c), (c = b))
            : typeof c == 'object' && ((c = f.param(c, f.ajaxSettings.traditional)), (h = 'POST')))
        var i = this
        f.ajax({
          url: a,
          type: h,
          dataType: 'html',
          data: c,
          complete: function (a, b, c) {
            ;(c = a.responseText),
              a.isResolved() &&
                (a.done(function (a) {
                  c = a
                }),
                i.html(g ? f('<div>').append(c.replace(bN, '')).find(g) : c)),
              d && i.each(d, [c, b, a])
          },
        })
        return this
      },
      serialize: function () {
        return f.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? f.makeArray(this.elements) : this
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            )
          })
          .map(function (a, b) {
            var c = f(this).val()
            return c == null
              ? null
              : f.isArray(c)
              ? f.map(c, function (a, c) {
                  return {
                    name: b.name,
                    value: a.replace(bF, '\r\n'),
                  }
                })
              : {
                  name: b.name,
                  value: c.replace(bF, '\r\n'),
                }
          })
          .get()
      },
    }),
    f.each(
      'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '),
      function (a, b) {
        f.fn[b] = function (a) {
          return this.on(b, a)
        }
      }
    ),
    f.each(['get', 'post'], function (a, c) {
      f[c] = function (a, d, e, g) {
        f.isFunction(d) && ((g = g || e), (e = d), (d = b))
        return f.ajax({
          type: c,
          url: a,
          data: d,
          success: e,
          dataType: g,
        })
      }
    }),
    f.extend({
      getScript: function (a, c) {
        return f.get(a, b, c, 'script')
      },
      getJSON: function (a, b, c) {
        return f.get(a, b, c, 'json')
      },
      ajaxSetup: function (a, b) {
        b ? b_(a, f.ajaxSettings) : ((b = a), (a = f.ajaxSettings)), b_(a, b)
        return a
      },
      ajaxSettings: {
        url: bV,
        isLocal: bJ.test(bW[1]),
        global: !0,
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded',
        processData: !0,
        async: !0,
        accepts: {
          xml: 'application/xml, text/xml',
          html: 'text/html',
          text: 'text/plain',
          json: 'application/json, text/javascript',
          '*': bX,
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/,
        },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
        },
        converters: {
          '* text': a.String,
          'text html': !0,
          'text json': f.parseJSON,
          'text xml': f.parseXML,
        },
        flatOptions: {
          context: !0,
          url: !0,
        },
      },
      ajaxPrefilter: bZ(bT),
      ajaxTransport: bZ(bU),
      ajax: function (a, c) {
        function w(a, c, l, m) {
          if (s !== 2) {
            ;(s = 2), q && clearTimeout(q), (p = b), (n = m || ''), (v.readyState = a > 0 ? 4 : 0)
            var o,
              r,
              u,
              w = c,
              x = l ? cb(d, v, l) : b,
              y,
              z
            if ((a >= 200 && a < 300) || a === 304) {
              if (d.ifModified) {
                if ((y = v.getResponseHeader('Last-Modified'))) f.lastModified[k] = y
                if ((z = v.getResponseHeader('Etag'))) f.etag[k] = z
              }
              if (a === 304) (w = 'notmodified'), (o = !0)
              else
                try {
                  ;(r = cc(d, x)), (w = 'success'), (o = !0)
                } catch (A) {
                  ;(w = 'parsererror'), (u = A)
                }
            } else {
              u = w
              if (!w || a) (w = 'error'), a < 0 && (a = 0)
            }
            ;(v.status = a),
              (v.statusText = '' + (c || w)),
              o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
              v.statusCode(j),
              (j = b),
              t && g.trigger('ajax' + (o ? 'Success' : 'Error'), [v, d, o ? r : u]),
              i.fireWith(e, [v, w]),
              t && (g.trigger('ajaxComplete', [v, d]), --f.active || f.event.trigger('ajaxStop'))
          }
        }
        typeof a == 'object' && ((c = a), (a = b)), (c = c || {})
        var d = f.ajaxSetup({}, c),
          e = d.context || d,
          g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
          h = f.Deferred(),
          i = f.Callbacks('once memory'),
          j = d.statusCode || {},
          k,
          l = {},
          m = {},
          n,
          o,
          p,
          q,
          r,
          s = 0,
          t,
          u,
          v = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!s) {
                var c = a.toLowerCase()
                ;(a = m[c] = m[c] || a), (l[a] = b)
              }
              return this
            },
            getAllResponseHeaders: function () {
              return s === 2 ? n : null
            },
            getResponseHeader: function (a) {
              var c
              if (s === 2) {
                if (!o) {
                  o = {}
                  while ((c = bH.exec(n))) o[c[1].toLowerCase()] = c[2]
                }
                c = o[a.toLowerCase()]
              }
              return c === b ? null : c
            },
            overrideMimeType: function (a) {
              s || (d.mimeType = a)
              return this
            },
            abort: function (a) {
              ;(a = a || 'abort'), p && p.abort(a), w(0, a)
              return this
            },
          }
        h.promise(v),
          (v.success = v.done),
          (v.error = v.fail),
          (v.complete = i.add),
          (v.statusCode = function (a) {
            if (a) {
              var b
              if (s < 2) for (b in a) j[b] = [j[b], a[b]]
              else (b = a[v.status]), v.then(b, b)
            }
            return this
          }),
          (d.url = ((a || d.url) + '').replace(bG, '').replace(bL, bW[1] + '//')),
          (d.dataTypes = f
            .trim(d.dataType || '*')
            .toLowerCase()
            .split(bP)),
          d.crossDomain == null &&
            ((r = bR.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !r ||
              (r[1] == bW[1] &&
                r[2] == bW[2] &&
                (r[3] || (r[1] === 'http:' ? 80 : 443)) ==
                  (bW[3] || (bW[1] === 'http:' ? 80 : 443)))
            ))),
          d.data &&
            d.processData &&
            typeof d.data != 'string' &&
            (d.data = f.param(d.data, d.traditional)),
          b$(bT, d, c, v)
        if (s === 2) return !1
        ;(t = d.global),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !bK.test(d.type)),
          t && f.active++ === 0 && f.event.trigger('ajaxStart')
        if (!d.hasContent) {
          d.data && ((d.url += (bM.test(d.url) ? '&' : '?') + d.data), delete d.data), (k = d.url)
          if (d.cache === !1) {
            var x = f.now(),
              y = d.url.replace(bQ, '$1_=' + x)
            d.url = y + (y === d.url ? (bM.test(d.url) ? '&' : '?') + '_=' + x : '')
          }
        }
        ;((d.data && d.hasContent && d.contentType !== !1) || c.contentType) &&
          v.setRequestHeader('Content-Type', d.contentType),
          d.ifModified &&
            ((k = k || d.url),
            f.lastModified[k] && v.setRequestHeader('If-Modified-Since', f.lastModified[k]),
            f.etag[k] && v.setRequestHeader('If-None-Match', f.etag[k])),
          v.setRequestHeader(
            'Accept',
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== '*' ? ', ' + bX + '; q=0.01' : '')
              : d.accepts['*']
          )
        for (u in d.headers) v.setRequestHeader(u, d.headers[u])
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
          v.abort()
          return !1
        }
        for (u in {
          success: 1,
          error: 1,
          complete: 1,
        })
          v[u](d[u])
        p = b$(bU, d, c, v)
        if (!p) w(-1, 'No Transport')
        else {
          ;(v.readyState = 1),
            t && g.trigger('ajaxSend', [v, d]),
            d.async &&
              d.timeout > 0 &&
              (q = setTimeout(function () {
                v.abort('timeout')
              }, d.timeout))
          try {
            ;(s = 1), p.send(l, w)
          } catch (z) {
            if (s < 2) w(-1, z)
            else throw z
          }
        }
        return v
      },
      param: function (a, c) {
        var d = [],
          e = function (a, b) {
            ;(b = f.isFunction(b) ? b() : b),
              (d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b))
          }
        c === b && (c = f.ajaxSettings.traditional)
        if (f.isArray(a) || (a.jquery && !f.isPlainObject(a)))
          f.each(a, function () {
            e(this.name, this.value)
          })
        else for (var g in a) ca(g, a[g], c, e)
        return d.join('&').replace(bD, '+')
      },
    }),
    f.extend({
      active: 0,
      lastModified: {},
      etag: {},
    })
  var cd = f.now(),
    ce = /(\=)\?(&|$)|\?\?/i
  f.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      return f.expando + '_' + cd++
    },
  }),
    f.ajaxPrefilter('json jsonp', function (b, c, d) {
      var e = b.contentType === 'application/x-www-form-urlencoded' && typeof b.data == 'string'
      if (
        b.dataTypes[0] === 'jsonp' ||
        (b.jsonp !== !1 && (ce.test(b.url) || (e && ce.test(b.data))))
      ) {
        var g,
          h = (b.jsonpCallback = f.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          i = a[h],
          j = b.url,
          k = b.data,
          l = '$1' + h + '$2'
        b.jsonp !== !1 &&
          ((j = j.replace(ce, l)),
          b.url === j &&
            (e && (k = k.replace(ce, l)),
            b.data === k && (j += (/\?/.test(j) ? '&' : '?') + b.jsonp + '=' + h))),
          (b.url = j),
          (b.data = k),
          (a[h] = function (a) {
            g = [a]
          }),
          d.always(function () {
            ;(a[h] = i), g && f.isFunction(i) && a[h](g[0])
          }),
          (b.converters['script json'] = function () {
            g || f.error(h + ' was not called')
            return g[0]
          }),
          (b.dataTypes[0] = 'json')
        return 'script'
      }
    }),
    f.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: {
        script: /javascript|ecmascript/,
      },
      converters: {
        'text script': function (a) {
          f.globalEval(a)
          return a
        },
      },
    }),
    f.ajaxPrefilter('script', function (a) {
      a.cache === b && (a.cache = !1), a.crossDomain && ((a.type = 'GET'), (a.global = !1))
    }),
    f.ajaxTransport('script', function (a) {
      if (a.crossDomain) {
        var d,
          e = c.head || c.getElementsByTagName('head')[0] || c.documentElement
        return {
          send: function (f, g) {
            ;(d = c.createElement('script')),
              (d.async = 'async'),
              a.scriptCharset && (d.charset = a.scriptCharset),
              (d.src = a.url),
              (d.onload = d.onreadystatechange =
                function (a, c) {
                  if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                    (d.onload = d.onreadystatechange = null),
                      e && d.parentNode && e.removeChild(d),
                      (d = b),
                      c || g(200, 'success')
                }),
              e.insertBefore(d, e.firstChild)
          },
          abort: function () {
            d && d.onload(0, 1)
          },
        }
      }
    })
  var cf = a.ActiveXObject
      ? function () {
          for (var a in ch) ch[a](0, 1)
        }
      : !1,
    cg = 0,
    ch
  ;(f.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && ci()) || cj()
      }
    : ci),
    (function (a) {
      f.extend(f.support, {
        ajax: !!a,
        cors: !!a && 'withCredentials' in a,
      })
    })(f.ajaxSettings.xhr()),
    f.support.ajax &&
      f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
          var d
          return {
            send: function (e, g) {
              var h = c.xhr(),
                i,
                j
              c.username
                ? h.open(c.type, c.url, c.async, c.username, c.password)
                : h.open(c.type, c.url, c.async)
              if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j]
              c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e['X-Requested-With'] &&
                  (e['X-Requested-With'] = 'XMLHttpRequest')
              try {
                for (j in e) h.setRequestHeader(j, e[j])
              } catch (k) {}
              h.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var j, k, l, m, n
                  try {
                    if (d && (e || h.readyState === 4)) {
                      ;(d = b), i && ((h.onreadystatechange = f.noop), cf && delete ch[i])
                      if (e) h.readyState !== 4 && h.abort()
                      else {
                        ;(j = h.status),
                          (l = h.getAllResponseHeaders()),
                          (m = {}),
                          (n = h.responseXML),
                          n && n.documentElement && (m.xml = n),
                          (m.text = h.responseText)
                        try {
                          k = h.statusText
                        } catch (o) {
                          k = ''
                        }
                        !j && c.isLocal && !c.crossDomain
                          ? (j = m.text ? 200 : 404)
                          : j === 1223 && (j = 204)
                      }
                    }
                  } catch (p) {
                    e || g(-1, p)
                  }
                  m && g(j, k, m, l)
                }),
                !c.async || h.readyState === 4
                  ? d()
                  : ((i = ++cg),
                    cf && (ch || ((ch = {}), f(a).unload(cf)), (ch[i] = d)),
                    (h.onreadystatechange = d))
            },
            abort: function () {
              d && d(0, 1)
            },
          }
        }
      })
  var ck = {},
    cl,
    cm,
    cn = /^(?:toggle|show|hide)$/,
    co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    cp,
    cq = [
      ['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'],
      ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'],
      ['opacity'],
    ],
    cr
  f.fn.extend({
    show: function (a, b, c) {
      var d, e
      if (a || a === 0) return this.animate(cu('show', 3), a, b, c)
      for (var g = 0, h = this.length; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = d.style.display),
            !f._data(d, 'olddisplay') && e === 'none' && (e = d.style.display = ''),
            e === '' && f.css(d, 'display') === 'none' && f._data(d, 'olddisplay', cv(d.nodeName)))
      for (g = 0; g < h; g++) {
        d = this[g]
        if (d.style) {
          e = d.style.display
          if (e === '' || e === 'none') d.style.display = f._data(d, 'olddisplay') || ''
        }
      }
      return this
    },
    hide: function (a, b, c) {
      if (a || a === 0) return this.animate(cu('hide', 3), a, b, c)
      var d,
        e,
        g = 0,
        h = this.length
      for (; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = f.css(d, 'display')),
            e !== 'none' && !f._data(d, 'olddisplay') && f._data(d, 'olddisplay', e))
      for (g = 0; g < h; g++) this[g].style && (this[g].style.display = 'none')
      return this
    },
    _toggle: f.fn.toggle,
    toggle: function (a, b, c) {
      var d = typeof a == 'boolean'
      f.isFunction(a) && f.isFunction(b)
        ? this._toggle.apply(this, arguments)
        : a == null || d
        ? this.each(function () {
            var b = d ? a : f(this).is(':hidden')
            f(this)[b ? 'show' : 'hide']()
          })
        : this.animate(cu('toggle', 3), a, b, c)
      return this
    },
    fadeTo: function (a, b, c, d) {
      return this.filter(':hidden').css('opacity', 0).show().end().animate(
        {
          opacity: b,
        },
        a,
        c,
        d
      )
    },
    animate: function (a, b, c, d) {
      function g() {
        e.queue === !1 && f._mark(this)
        var b = f.extend({}, e),
          c = this.nodeType === 1,
          d = c && f(this).is(':hidden'),
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o
        b.animatedProperties = {}
        for (i in a) {
          ;(g = f.camelCase(i)),
            i !== g && ((a[g] = a[i]), delete a[i]),
            (h = a[g]),
            f.isArray(h)
              ? ((b.animatedProperties[g] = h[1]), (h = a[g] = h[0]))
              : (b.animatedProperties[g] =
                  (b.specialEasing && b.specialEasing[g]) || b.easing || 'swing')
          if ((h === 'hide' && d) || (h === 'show' && !d)) return b.complete.call(this)
          c &&
            (g === 'height' || g === 'width') &&
            ((b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY]),
            f.css(this, 'display') === 'inline' &&
              f.css(this, 'float') === 'none' &&
              (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === 'inline'
                ? (this.style.display = 'inline-block')
                : (this.style.zoom = 1)))
        }
        b.overflow != null && (this.style.overflow = 'hidden')
        for (i in a)
          (j = new f.fx(this, b, i)),
            (h = a[i]),
            cn.test(h)
              ? ((o = f._data(this, 'toggle' + i) || (h === 'toggle' ? (d ? 'show' : 'hide') : 0)),
                o ? (f._data(this, 'toggle' + i, o === 'show' ? 'hide' : 'show'), j[o]()) : j[h]())
              : ((k = co.exec(h)),
                (l = j.cur()),
                k
                  ? ((m = parseFloat(k[2])),
                    (n = k[3] || (f.cssNumber[i] ? '' : 'px')),
                    n !== 'px' &&
                      (f.style(this, i, (m || 1) + n),
                      (l = ((m || 1) / j.cur()) * l),
                      f.style(this, i, l + n)),
                    k[1] && (m = (k[1] === '-=' ? -1 : 1) * m + l),
                    j.custom(l, m, n))
                  : j.custom(l, h, ''))
        return !0
      }
      var e = f.speed(b, c, d)
      if (f.isEmptyObject(a)) return this.each(e.complete, [!1])
      a = f.extend({}, a)
      return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
    },
    stop: function (a, c, d) {
      typeof a != 'string' && ((d = c), (c = a), (a = b)),
        c && a !== !1 && this.queue(a || 'fx', [])
      return this.each(function () {
        function h(a, b, c) {
          var e = b[c]
          f.removeData(a, c, !0), e.stop(d)
        }
        var b,
          c = !1,
          e = f.timers,
          g = f._data(this)
        d || f._unmark(!0, this)
        if (a == null)
          for (b in g) g[b] && g[b].stop && b.indexOf('.run') === b.length - 4 && h(this, g, b)
        else g[(b = a + '.run')] && g[b].stop && h(this, g, b)
        for (b = e.length; b--; )
          e[b].elem === this &&
            (a == null || e[b].queue === a) &&
            (d ? e[b](!0) : e[b].saveState(), (c = !0), e.splice(b, 1))
        ;(!d || !c) && f.dequeue(this, a)
      })
    },
  }),
    f.each(
      {
        slideDown: cu('show', 1),
        slideUp: cu('hide', 1),
        slideToggle: cu('toggle', 1),
        fadeIn: {
          opacity: 'show',
        },
        fadeOut: {
          opacity: 'hide',
        },
        fadeToggle: {
          opacity: 'toggle',
        },
      },
      function (a, b) {
        f.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d)
        }
      }
    ),
    f.extend({
      speed: function (a, b, c) {
        var d =
          a && typeof a == 'object'
            ? f.extend({}, a)
            : {
                complete: c || (!c && b) || (f.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !f.isFunction(b) && b),
              }
        d.duration = f.fx.off
          ? 0
          : typeof d.duration == 'number'
          ? d.duration
          : d.duration in f.fx.speeds
          ? f.fx.speeds[d.duration]
          : f.fx.speeds._default
        if (d.queue == null || d.queue === !0) d.queue = 'fx'
        ;(d.old = d.complete),
          (d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this),
              d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
          })
        return d
      },
      easing: {
        linear: function (a, b, c, d) {
          return c + d * a
        },
        swing: function (a, b, c, d) {
          return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c
        },
      },
      timers: [],
      fx: function (a, b, c) {
        ;(this.options = b), (this.elem = a), (this.prop = c), (b.orig = b.orig || {})
      },
    }),
    (f.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (f.fx.step[this.prop] || f.fx.step._default)(this)
      },
      cur: function () {
        if (
          this.elem[this.prop] != null &&
          (!this.elem.style || this.elem.style[this.prop] == null)
        )
          return this.elem[this.prop]
        var a,
          b = f.css(this.elem, this.prop)
        return isNaN((a = parseFloat(b))) ? (!b || b === 'auto' ? 0 : b) : a
      },
      custom: function (a, c, d) {
        function h(a) {
          return e.step(a)
        }
        var e = this,
          g = f.fx
        ;(this.startTime = cr || cs()),
          (this.end = c),
          (this.now = this.start = a),
          (this.pos = this.state = 0),
          (this.unit = d || this.unit || (f.cssNumber[this.prop] ? '' : 'px')),
          (h.queue = this.options.queue),
          (h.elem = this.elem),
          (h.saveState = function () {
            e.options.hide &&
              f._data(e.elem, 'fxshow' + e.prop) === b &&
              f._data(e.elem, 'fxshow' + e.prop, e.start)
          }),
          h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
      },
      show: function () {
        var a = f._data(this.elem, 'fxshow' + this.prop)
        ;(this.options.orig[this.prop] = a || f.style(this.elem, this.prop)),
          (this.options.show = !0),
          a !== b
            ? this.custom(this.cur(), a)
            : this.custom(this.prop === 'width' || this.prop === 'height' ? 1 : 0, this.cur()),
          f(this.elem).show()
      },
      hide: function () {
        ;(this.options.orig[this.prop] =
          f._data(this.elem, 'fxshow' + this.prop) || f.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0)
      },
      step: function (a) {
        var b,
          c,
          d,
          e = cr || cs(),
          g = !0,
          h = this.elem,
          i = this.options
        if (a || e >= i.duration + this.startTime) {
          ;(this.now = this.end),
            (this.pos = this.state = 1),
            this.update(),
            (i.animatedProperties[this.prop] = !0)
          for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1)
          if (g) {
            i.overflow != null &&
              !f.support.shrinkWrapBlocks &&
              f.each(['', 'X', 'Y'], function (a, b) {
                h.style['overflow' + b] = i.overflow[a]
              }),
              i.hide && f(h).hide()
            if (i.hide || i.show)
              for (b in i.animatedProperties)
                f.style(h, b, i.orig[b]),
                  f.removeData(h, 'fxshow' + b, !0),
                  f.removeData(h, 'toggle' + b, !0)
            ;(d = i.complete), d && ((i.complete = !1), d.call(h))
          }
          return !1
        }
        i.duration == Infinity
          ? (this.now = e)
          : ((c = e - this.startTime),
            (this.state = c / i.duration),
            (this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration)),
            (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update()
        return !0
      },
    }),
    f.extend(f.fx, {
      tick: function () {
        var a,
          b = f.timers,
          c = 0
        for (; c < b.length; c++) (a = b[c]), !a() && b[c] === a && b.splice(c--, 1)
        b.length || f.fx.stop()
      },
      interval: 13,
      stop: function () {
        clearInterval(cp), (cp = null)
      },
      speeds: {
        slow: 600,
        fast: 200,
        _default: 400,
      },
      step: {
        opacity: function (a) {
          f.style(a.elem, 'opacity', a.now)
        },
        _default: function (a) {
          a.elem.style && a.elem.style[a.prop] != null
            ? (a.elem.style[a.prop] = a.now + a.unit)
            : (a.elem[a.prop] = a.now)
        },
      },
    }),
    f.each(['width', 'height'], function (a, b) {
      f.fx.step[b] = function (a) {
        f.style(a.elem, b, Math.max(0, a.now) + a.unit)
      }
    }),
    f.expr &&
      f.expr.filters &&
      (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
          return a === b.elem
        }).length
      })
  var cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i
  'getBoundingClientRect' in c.documentElement
    ? (f.fn.offset = function (a) {
        var b = this[0],
          c
        if (a)
          return this.each(function (b) {
            f.offset.setOffset(this, a, b)
          })
        if (!b || !b.ownerDocument) return null
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b)
        try {
          c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
          g = e.documentElement
        if (!c || !f.contains(g, b))
          return c
            ? {
                top: c.top,
                left: c.left,
              }
            : {
                top: 0,
                left: 0,
              }
        var h = e.body,
          i = cy(e),
          j = g.clientTop || h.clientTop || 0,
          k = g.clientLeft || h.clientLeft || 0,
          l = i.pageYOffset || (f.support.boxModel && g.scrollTop) || h.scrollTop,
          m = i.pageXOffset || (f.support.boxModel && g.scrollLeft) || h.scrollLeft,
          n = c.top + l - j,
          o = c.left + m - k
        return {
          top: n,
          left: o,
        }
      })
    : (f.fn.offset = function (a) {
        var b = this[0]
        if (a)
          return this.each(function (b) {
            f.offset.setOffset(this, a, b)
          })
        if (!b || !b.ownerDocument) return null
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b)
        var c,
          d = b.offsetParent,
          e = b,
          g = b.ownerDocument,
          h = g.documentElement,
          i = g.body,
          j = g.defaultView,
          k = j ? j.getComputedStyle(b, null) : b.currentStyle,
          l = b.offsetTop,
          m = b.offsetLeft
        while ((b = b.parentNode) && b !== i && b !== h) {
          if (f.support.fixedPosition && k.position === 'fixed') break
          ;(c = j ? j.getComputedStyle(b, null) : b.currentStyle),
            (l -= b.scrollTop),
            (m -= b.scrollLeft),
            b === d &&
              ((l += b.offsetTop),
              (m += b.offsetLeft),
              f.support.doesNotAddBorder &&
                (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) &&
                ((l += parseFloat(c.borderTopWidth) || 0),
                (m += parseFloat(c.borderLeftWidth) || 0)),
              (e = d),
              (d = b.offsetParent)),
            f.support.subtractsBorderForOverflowNotVisible &&
              c.overflow !== 'visible' &&
              ((l += parseFloat(c.borderTopWidth) || 0), (m += parseFloat(c.borderLeftWidth) || 0)),
            (k = c)
        }
        if (k.position === 'relative' || k.position === 'static')
          (l += i.offsetTop), (m += i.offsetLeft)
        f.support.fixedPosition &&
          k.position === 'fixed' &&
          ((l += Math.max(h.scrollTop, i.scrollTop)), (m += Math.max(h.scrollLeft, i.scrollLeft)))
        return {
          top: l,
          left: m,
        }
      }),
    (f.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft
        f.support.doesNotIncludeMarginInBodyOffset &&
          ((b += parseFloat(f.css(a, 'marginTop')) || 0),
          (c += parseFloat(f.css(a, 'marginLeft')) || 0))
        return {
          top: b,
          left: c,
        }
      },
      setOffset: function (a, b, c) {
        var d = f.css(a, 'position')
        d === 'static' && (a.style.position = 'relative')
        var e = f(a),
          g = e.offset(),
          h = f.css(a, 'top'),
          i = f.css(a, 'left'),
          j = (d === 'absolute' || d === 'fixed') && f.inArray('auto', [h, i]) > -1,
          k = {},
          l = {},
          m,
          n
        j
          ? ((l = e.position()), (m = l.top), (n = l.left))
          : ((m = parseFloat(h) || 0), (n = parseFloat(i) || 0)),
          f.isFunction(b) && (b = b.call(a, c, g)),
          b.top != null && (k.top = b.top - g.top + m),
          b.left != null && (k.left = b.left - g.left + n),
          'using' in b ? b.using.call(a, k) : e.css(k)
      },
    }),
    f.fn.extend({
      position: function () {
        if (!this[0]) return null
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = cx.test(b[0].nodeName)
            ? {
                top: 0,
                left: 0,
              }
            : b.offset()
        ;(c.top -= parseFloat(f.css(a, 'marginTop')) || 0),
          (c.left -= parseFloat(f.css(a, 'marginLeft')) || 0),
          (d.top += parseFloat(f.css(b[0], 'borderTopWidth')) || 0),
          (d.left += parseFloat(f.css(b[0], 'borderLeftWidth')) || 0)
        return {
          top: c.top - d.top,
          left: c.left - d.left,
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || c.body
          while (a && !cx.test(a.nodeName) && f.css(a, 'position') === 'static') a = a.offsetParent
          return a
        })
      },
    }),
    f.each(['Left', 'Top'], function (a, c) {
      var d = 'scroll' + c
      f.fn[d] = function (c) {
        var e, g
        if (c === b) {
          e = this[0]
          if (!e) return null
          g = cy(e)
          return g
            ? 'pageXOffset' in g
              ? g[a ? 'pageYOffset' : 'pageXOffset']
              : (f.support.boxModel && g.document.documentElement[d]) || g.document.body[d]
            : e[d]
        }
        return this.each(function () {
          ;(g = cy(this)),
            g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : (this[d] = c)
        })
      }
    }),
    f.each(['Height', 'Width'], function (a, c) {
      var d = c.toLowerCase()
      ;(f.fn['inner' + c] = function () {
        var a = this[0]
        return a ? (a.style ? parseFloat(f.css(a, d, 'padding')) : this[d]()) : null
      }),
        (f.fn['outer' + c] = function (a) {
          var b = this[0]
          return b ? (b.style ? parseFloat(f.css(b, d, a ? 'margin' : 'border')) : this[d]()) : null
        }),
        (f.fn[d] = function (a) {
          var e = this[0]
          if (!e) return a == null ? null : this
          if (f.isFunction(a))
            return this.each(function (b) {
              var c = f(this)
              c[d](a.call(this, b, c[d]()))
            })
          if (f.isWindow(e)) {
            var g = e.document.documentElement['client' + c],
              h = e.document.body
            return (e.document.compatMode === 'CSS1Compat' && g) || (h && h['client' + c]) || g
          }
          if (e.nodeType === 9)
            return Math.max(
              e.documentElement['client' + c],
              e.body['scroll' + c],
              e.documentElement['scroll' + c],
              e.body['offset' + c],
              e.documentElement['offset' + c]
            )
          if (a === b) {
            var i = f.css(e, d),
              j = parseFloat(i)
            return f.isNumeric(j) ? j : i
          }
          return this.css(d, typeof a == 'string' ? a : a + 'px')
        })
    }),
    (a.jQuery = a.$ = f),
    typeof define == 'function' &&
      define.amd &&
      define.amd.jQuery &&
      define('jquery', [], function () {
        return f
      })
})(window)

// BEGIN nytg Additions
jQuery.noConflict()
var $j = jQuery
// END nytg Additions

/********************************
 ** FILE: lib/d3.min.js
 ********************************/

;(function () {
  function e(a) {
    var b = -1,
      c = a.length,
      d = []
    while (++b < c) d.push(a[b])
    return d
  }

  function f(a) {
    return Array.prototype.slice.call(a)
  }

  function i() {
    return this
  }

  function j(a, b, c) {
    return function () {
      var d = c.apply(b, arguments)
      return arguments.length ? a : d
    }
  }

  function k(a) {
    return a != null && !isNaN(a)
  }

  function l(a) {
    return a.length
  }

  function m(a) {
    return a == null
  }

  function n(a) {
    return a.replace(/(^\s+)|(\s+$)/g, '').replace(/\s+/g, ' ')
  }

  function q() {}

  function r(a) {
    function d() {
      var c = b,
        d = -1,
        e = c.length,
        f
      while (++d < e) (f = c[d].on) && f.apply(this, arguments)
      return a
    }
    var b = [],
      c = {}
    return (
      (d.on = function (d, e) {
        var f, g
        if (arguments.length < 2) return (f = c[d]) && f.on
        if ((f = c[d]))
          (f.on = null), (b = b.slice(0, (g = b.indexOf(f))).concat(b.slice(g + 1))), delete c[d]
        return (
          e &&
            b.push(
              (c[d] = {
                on: e,
              })
            ),
          a
        )
      }),
      d
    )
  }

  function u(a, b) {
    return (
      b -
      (a
        ? 1 +
          Math.floor(
            Math.log(a + Math.pow(10, 1 + Math.floor(Math.log(a) / Math.LN10) - b)) / Math.LN10
          )
        : 1)
    )
  }

  function v(a) {
    return a + ''
  }

  function w(a) {
    var b = a.lastIndexOf('.'),
      c = b >= 0 ? a.substring(b) : ((b = a.length), ''),
      d = []
    while (b > 0) d.push(a.substring((b -= 3), b + 3))
    return d.reverse().join(',') + c
  }

  function y(a, b) {
    return {
      scale: Math.pow(10, (8 - b) * 3),
      symbol: a,
    }
  }

  function D(a) {
    return function (b) {
      return b <= 0 ? 0 : b >= 1 ? 1 : a(b)
    }
  }

  function E(a) {
    return function (b) {
      return 1 - a(1 - b)
    }
  }

  function F(a) {
    return function (b) {
      return 0.5 * (b < 0.5 ? a(2 * b) : 2 - a(2 - 2 * b))
    }
  }

  function G(a) {
    return a
  }

  function H(a) {
    return function (b) {
      return Math.pow(b, a)
    }
  }

  function I(a) {
    return 1 - Math.cos((a * Math.PI) / 2)
  }

  function J(a) {
    return Math.pow(2, 10 * (a - 1))
  }

  function K(a) {
    return 1 - Math.sqrt(1 - a * a)
  }

  function L(a, b) {
    var c
    return (
      arguments.length < 2 && (b = 0.45),
      arguments.length < 1 ? ((a = 1), (c = b / 4)) : (c = (b / (2 * Math.PI)) * Math.asin(1 / a)),
      function (d) {
        return 1 + a * Math.pow(2, 10 * -d) * Math.sin(((d - c) * 2 * Math.PI) / b)
      }
    )
  }

  function M(a) {
    return (
      a || (a = 1.70158),
      function (b) {
        return b * b * ((a + 1) * b - a)
      }
    )
  }

  function N(a) {
    return a < 1 / 2.75
      ? 7.5625 * a * a
      : a < 2 / 2.75
      ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
      : a < 2.5 / 2.75
      ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
      : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
  }

  function O() {
    d3.event.stopPropagation(), d3.event.preventDefault()
  }

  function Q(a) {
    return a == 'transform' ? d3.interpolateTransform : d3.interpolate
  }

  function R(a, b) {
    return (
      (b = b - (a = +a) ? 1 / (b - a) : 0),
      function (c) {
        return (c - a) * b
      }
    )
  }

  function S(a, b) {
    return (
      (b = b - (a = +a) ? 1 / (b - a) : 0),
      function (c) {
        return Math.max(0, Math.min(1, (c - a) * b))
      }
    )
  }

  function T(a, b, c) {
    return new U(a, b, c)
  }

  function U(a, b, c) {
    ;(this.r = a), (this.g = b), (this.b = c)
  }

  function V(a) {
    return a < 16 ? '0' + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
  }

  function W(a, b, c) {
    var d = 0,
      e = 0,
      f = 0,
      g,
      h,
      i
    g = /([a-z]+)\((.*)\)/i.exec(a)
    if (g) {
      h = g[2].split(',')
      switch (g[1]) {
        case 'hsl':
          return c(parseFloat(h[0]), parseFloat(h[1]) / 100, parseFloat(h[2]) / 100)
        case 'rgb':
          return b(Y(h[0]), Y(h[1]), Y(h[2]))
      }
    }
    return (i = Z[a])
      ? b(i.r, i.g, i.b)
      : (a != null &&
          a.charAt(0) === '#' &&
          (a.length === 4
            ? ((d = a.charAt(1)),
              (d += d),
              (e = a.charAt(2)),
              (e += e),
              (f = a.charAt(3)),
              (f += f))
            : a.length === 7 &&
              ((d = a.substring(1, 3)), (e = a.substring(3, 5)), (f = a.substring(5, 7))),
          (d = parseInt(d, 16)),
          (e = parseInt(e, 16)),
          (f = parseInt(f, 16))),
        b(d, e, f))
  }

  function X(a, b, c) {
    var d = Math.min((a /= 255), (b /= 255), (c /= 255)),
      e = Math.max(a, b, c),
      f = e - d,
      g,
      h,
      i = (e + d) / 2
    return (
      f
        ? ((h = i < 0.5 ? f / (e + d) : f / (2 - e - d)),
          a == e
            ? (g = (b - c) / f + (b < c ? 6 : 0))
            : b == e
            ? (g = (c - a) / f + 2)
            : (g = (a - b) / f + 4),
          (g *= 60))
        : (h = g = 0),
      _(g, h, i)
    )
  }

  function Y(a) {
    var b = parseFloat(a)
    return a.charAt(a.length - 1) === '%' ? Math.round(b * 2.55) : b
  }

  function _(a, b, c) {
    return new ba(a, b, c)
  }

  function ba(a, b, c) {
    ;(this.h = a), (this.s = b), (this.l = c)
  }

  function bb(a, b, c) {
    function f(a) {
      return (
        a > 360 ? (a -= 360) : a < 0 && (a += 360),
        a < 60 ? d + ((e - d) * a) / 60 : a < 180 ? e : a < 240 ? d + ((e - d) * (240 - a)) / 60 : d
      )
    }

    function g(a) {
      return Math.round(f(a) * 255)
    }
    var d, e
    return (
      (a %= 360),
      a < 0 && (a += 360),
      (b = b < 0 ? 0 : b > 1 ? 1 : b),
      (c = c < 0 ? 0 : c > 1 ? 1 : c),
      (e = c <= 0.5 ? c * (1 + b) : c + b - c * b),
      (d = 2 * c - e),
      T(g(a + 120), g(a), g(a - 120))
    )
  }

  function bc(a) {
    return h(a, bi), a
  }

  function bj(a) {
    return function () {
      return bd(a, this)
    }
  }

  function bk(a) {
    return function () {
      return be(a, this)
    }
  }

  function bm(a, b) {
    function f() {
      if ((b = this.classList)) return b.add(a)
      var b = this.className,
        d = b.baseVal != null,
        e = d ? b.baseVal : b
      ;(c.lastIndex = 0),
        c.test(e) || ((e = n(e + ' ' + a)), d ? (b.baseVal = e) : (this.className = e))
    }

    function g() {
      if ((b = this.classList)) return b.remove(a)
      var b = this.className,
        d = b.baseVal != null,
        e = d ? b.baseVal : b
      ;(e = n(e.replace(c, ' '))), d ? (b.baseVal = e) : (this.className = e)
    }

    function h() {
      ;(b.apply(this, arguments) ? f : g).call(this)
    }
    var c = new RegExp('(^|\\s+)' + d3.requote(a) + '(\\s+|$)', 'g')
    if (arguments.length < 2) {
      var d = this.node()
      if ((e = d.classList)) return e.contains(a)
      var e = d.className
      return (c.lastIndex = 0), c.test(e.baseVal != null ? e.baseVal : e)
    }
    return this.each(typeof b == 'function' ? h : b ? f : g)
  }

  function bn(a) {
    return {
      __data__: a,
    }
  }

  function bo(a) {
    return function () {
      return bh(this, a)
    }
  }

  function bp(a) {
    return (
      arguments.length || (a = d3.ascending),
      function (b, c) {
        return a(b && b.__data__, c && c.__data__)
      }
    )
  }

  function br(a) {
    return h(a, bs), a
  }

  function bt(a, b, c) {
    h(a, bx)
    var d = {},
      e = d3.dispatch('start', 'end'),
      f = bA
    return (
      (a.id = b),
      (a.time = c),
      (a.tween = function (b, c) {
        return arguments.length < 2 ? d[b] : (c == null ? delete d[b] : (d[b] = c), a)
      }),
      (a.ease = function (b) {
        return arguments.length
          ? ((f = typeof b == 'function' ? b : d3.ease.apply(d3, arguments)), a)
          : f
      }),
      (a.each = function (b, c) {
        return arguments.length < 2 ? bB.call(a, b) : (e.on(b, c), a)
      }),
      d3.timer(
        function (g) {
          return (
            a.each(function (h, i, j) {
              function p(a) {
                if (o.active > b) return r()
                o.active = b
                for (var f in d) (f = d[f].call(l, h, i)) && k.push(f)
                return e.start.call(l, h, i), q(a) || d3.timer(q, 0, c), 1
              }

              function q(a) {
                if (o.active !== b) return r()
                var c = (a - m) / n,
                  d = f(c),
                  g = k.length
                while (g > 0) k[--g].call(l, d)
                if (c >= 1) return r(), (bz = b), e.end.call(l, h, i), (bz = 0), 1
              }

              function r() {
                return --o.count || delete l.__transition__, 1
              }
              var k = [],
                l = this,
                m = a[j][i].delay,
                n = a[j][i].duration,
                o =
                  l.__transition__ ||
                  (l.__transition__ = {
                    active: 0,
                    count: 0,
                  })
              ++o.count, m <= g ? p(g) : d3.timer(p, m, c)
            }),
            1
          )
        },
        0,
        c
      ),
      a
    )
  }

  function bv(a, b, c) {
    return c != '' && bu
  }

  function bw(a, b) {
    function d(a, d, e) {
      var f = b.call(this, a, d)
      return f == null ? e != '' && bu : e != f && c(e, f)
    }

    function e(a, d, e) {
      return e != b && c(e, b)
    }
    var c = Q(a)
    return typeof b == 'function' ? d : b == null ? bv : ((b += ''), e)
  }

  function bB(a) {
    for (var b = 0, c = this.length; b < c; b++)
      for (var d = this[b], e = 0, f = d.length; e < f; e++) {
        var g = d[e]
        g && a.call((g = g.node), g.__data__, e, b)
      }
    return this
  }

  function bF() {
    var a,
      b = Date.now(),
      c = bC
    while (c) (a = b - c.then), a >= c.delay && (c.flush = c.callback(a)), (c = c.next)
    var d = bG() - b
    d > 24
      ? (isFinite(d) && (clearTimeout(bE), (bE = setTimeout(bF, d))), (bD = 0))
      : ((bD = 1), bH(bF))
  }

  function bG() {
    var a = null,
      b = bC,
      c = Infinity
    while (b)
      b.flush
        ? (b = a ? (a.next = b.next) : (bC = b.next))
        : ((c = Math.min(c, b.then + b.delay)), (b = (a = b).next))
    return c
  }

  function bI(a) {
    var b = [a.a, a.b],
      c = [a.c, a.d],
      d = bK(b),
      e = bJ(b, c),
      f = bK(bL(c, b, -e)) || 0
    b[0] * c[1] < c[0] * b[1] && ((b[0] *= -1), (b[1] *= -1), (d *= -1), (e *= -1)),
      (this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * bM),
      (this.translate = [a.e, a.f]),
      (this.scale = [d, f]),
      (this.skew = f ? Math.atan2(e, f) * bM : 0)
  }

  function bJ(a, b) {
    return a[0] * b[0] + a[1] * b[1]
  }

  function bK(a) {
    var b = Math.sqrt(bJ(a, a))
    return b && ((a[0] /= b), (a[1] /= b)), b
  }

  function bL(a, b, c) {
    return (a[0] += c * b[0]), (a[1] += c * b[1]), a
  }

  function bN() {}

  function bO(a) {
    var b = a[0],
      c = a[a.length - 1]
    return b < c ? [b, c] : [c, b]
  }

  function bP(a) {
    return a.rangeExtent ? a.rangeExtent() : bO(a.range())
  }

  function bQ(a, b) {
    var c = 0,
      d = a.length - 1,
      e = a[c],
      f = a[d],
      g
    f < e && ((g = c), (c = d), (d = g), (g = e), (e = f), (f = g))
    if ((g = f - e)) (b = b(g)), (a[c] = b.floor(e)), (a[d] = b.ceil(f))
    return a
  }

  function bR() {
    return Math
  }

  function bS(a, b, c, d) {
    function g() {
      var g = a.length == 2 ? bY : bZ,
        i = d ? S : R
      return (e = g(a, b, i, c)), (f = g(b, a, i, d3.interpolate)), h
    }

    function h(a) {
      return e(a)
    }
    var e, f
    return (
      (h.invert = function (a) {
        return f(a)
      }),
      (h.domain = function (b) {
        return arguments.length ? ((a = b.map(Number)), g()) : a
      }),
      (h.range = function (a) {
        return arguments.length ? ((b = a), g()) : b
      }),
      (h.rangeRound = function (a) {
        return h.range(a).interpolate(d3.interpolateRound)
      }),
      (h.clamp = function (a) {
        return arguments.length ? ((d = a), g()) : d
      }),
      (h.interpolate = function (a) {
        return arguments.length ? ((c = a), g()) : c
      }),
      (h.ticks = function (b) {
        return bW(a, b)
      }),
      (h.tickFormat = function (b) {
        return bX(a, b)
      }),
      (h.nice = function () {
        return bQ(a, bU), g()
      }),
      (h.copy = function () {
        return bS(a, b, c, d)
      }),
      g()
    )
  }

  function bT(a, b) {
    return d3.rebind(a, b, 'range', 'rangeRound', 'interpolate', 'clamp')
  }

  function bU(a) {
    return (
      (a = Math.pow(10, Math.round(Math.log(a) / Math.LN10) - 1)),
      {
        floor: function (b) {
          return Math.floor(b / a) * a
        },
        ceil: function (b) {
          return Math.ceil(b / a) * a
        },
      }
    )
  }

  function bV(a, b) {
    var c = bO(a),
      d = c[1] - c[0],
      e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
      f = (b / d) * e
    return (
      f <= 0.15 ? (e *= 10) : f <= 0.35 ? (e *= 5) : f <= 0.75 && (e *= 2),
      (c[0] = Math.ceil(c[0] / e) * e),
      (c[1] = Math.floor(c[1] / e) * e + e * 0.5),
      (c[2] = e),
      c
    )
  }

  function bW(a, b) {
    return d3.range.apply(d3, bV(a, b))
  }

  function bX(a, b) {
    return d3.format(
      ',.' + Math.max(0, -Math.floor(Math.log(bV(a, b)[2]) / Math.LN10 + 0.01)) + 'f'
    )
  }

  function bY(a, b, c, d) {
    var e = c(a[0], a[1]),
      f = d(b[0], b[1])
    return function (a) {
      return f(e(a))
    }
  }

  function bZ(a, b, c, d) {
    var e = [],
      f = [],
      g = 0,
      h = a.length - 1
    a[h] < a[0] && ((a = a.slice().reverse()), (b = b.slice().reverse()))
    while (++g <= h) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]))
    return function (b) {
      var c = d3.bisect(a, b, 1, h) - 1
      return f[c](e[c](b))
    }
  }

  function b$(a, b) {
    function d(c) {
      return a(b(c))
    }
    var c = b.pow
    return (
      (d.invert = function (b) {
        return c(a.invert(b))
      }),
      (d.domain = function (e) {
        return arguments.length
          ? ((b = e[0] < 0 ? cb : ca), (c = b.pow), a.domain(e.map(b)), d)
          : a.domain().map(c)
      }),
      (d.nice = function () {
        return a.domain(bQ(a.domain(), bR)), d
      }),
      (d.ticks = function () {
        var d = bO(a.domain()),
          e = []
        if (d.every(isFinite)) {
          var f = Math.floor(d[0]),
            g = Math.ceil(d[1]),
            h = c(d[0]),
            i = c(d[1])
          if (b === cb) {
            e.push(c(f))
            for (; f++ < g; ) for (var j = 9; j > 0; j--) e.push(c(f) * j)
          } else {
            for (; f < g; f++) for (var j = 1; j < 10; j++) e.push(c(f) * j)
            e.push(c(f))
          }
          for (f = 0; e[f] < h; f++);
          for (g = e.length; e[g - 1] > i; g--);
          e = e.slice(f, g)
        }
        return e
      }),
      (d.tickFormat = function (a, e) {
        arguments.length < 2 && (e = b_)
        if (arguments.length < 1) return e
        var f = a / d.ticks().length,
          g = b === cb ? ((h = -1e-12), Math.floor) : ((h = 1e-12), Math.ceil),
          h
        return function (a) {
          return a / c(g(b(a) + h)) < f ? e(a) : ''
        }
      }),
      (d.copy = function () {
        return b$(a.copy(), b)
      }),
      bT(d, a)
    )
  }

  function ca(a) {
    return Math.log(a < 0 ? 0 : a) / Math.LN10
  }

  function cb(a) {
    return -Math.log(a > 0 ? 0 : -a) / Math.LN10
  }

  function cc(a, b) {
    function e(b) {
      return a(c(b))
    }
    var c = cd(b),
      d = cd(1 / b)
    return (
      (e.invert = function (b) {
        return d(a.invert(b))
      }),
      (e.domain = function (b) {
        return arguments.length ? (a.domain(b.map(c)), e) : a.domain().map(d)
      }),
      (e.ticks = function (a) {
        return bW(e.domain(), a)
      }),
      (e.tickFormat = function (a) {
        return bX(e.domain(), a)
      }),
      (e.nice = function () {
        return e.domain(bQ(e.domain(), bU))
      }),
      (e.exponent = function (a) {
        if (!arguments.length) return b
        var f = e.domain()
        return (c = cd((b = a))), (d = cd(1 / b)), e.domain(f)
      }),
      (e.copy = function () {
        return cc(a.copy(), b)
      }),
      bT(e, a)
    )
  }

  function cd(a) {
    return function (b) {
      return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a)
    }
  }

  function ce(a, b) {
    function f(b) {
      return d[((c[b] || (c[b] = a.push(b))) - 1) % d.length]
    }

    function g(b, c) {
      return d3.range(a.length).map(function (a) {
        return b + c * a
      })
    }
    var c, d, e
    return (
      (f.domain = function (d) {
        if (!arguments.length) return a
        ;(a = []), (c = {})
        var e = -1,
          g = d.length,
          h
        while (++e < g) c[(h = d[e])] || (c[h] = a.push(h))
        return f[b.t](b.x, b.p)
      }),
      (f.range = function (a) {
        return arguments.length
          ? ((d = a),
            (e = 0),
            (b = {
              t: 'range',
              x: a,
            }),
            f)
          : d
      }),
      (f.rangePoints = function (c, h) {
        arguments.length < 2 && (h = 0)
        var i = c[0],
          j = c[1],
          k = (j - i) / (a.length - 1 + h)
        return (
          (d = g(a.length < 2 ? (i + j) / 2 : i + (k * h) / 2, k)),
          (e = 0),
          (b = {
            t: 'rangePoints',
            x: c,
            p: h,
          }),
          f
        )
      }),
      (f.rangeBands = function (c, h) {
        arguments.length < 2 && (h = 0)
        var i = c[0],
          j = c[1],
          k = (j - i) / (a.length + h)
        return (
          (d = g(i + k * h, k)),
          (e = k * (1 - h)),
          (b = {
            t: 'rangeBands',
            x: c,
            p: h,
          }),
          f
        )
      }),
      (f.rangeRoundBands = function (c, h) {
        arguments.length < 2 && (h = 0)
        var i = c[0],
          j = c[1],
          k = Math.floor((j - i) / (a.length + h))
        return (
          (d = g(i + Math.round((j - i - (a.length - h) * k) / 2), k)),
          (e = Math.round(k * (1 - h))),
          (b = {
            t: 'rangeRoundBands',
            x: c,
            p: h,
          }),
          f
        )
      }),
      (f.rangeBand = function () {
        return e
      }),
      (f.rangeExtent = function () {
        return b.t === 'range' ? bO(b.x) : b.x
      }),
      (f.copy = function () {
        return ce(a, b)
      }),
      f.domain(a)
    )
  }

  function cj(a, b) {
    function d() {
      var d = 0,
        f = a.length,
        g = b.length
      c = []
      while (++d < g) c[d - 1] = d3.quantile(a, d / g)
      return e
    }

    function e(a) {
      return isNaN((a = +a)) ? NaN : b[d3.bisect(c, a)]
    }
    var c
    return (
      (e.domain = function (b) {
        return arguments.length
          ? ((a = b
              .filter(function (a) {
                return !isNaN(a)
              })
              .sort(d3.ascending)),
            d())
          : a
      }),
      (e.range = function (a) {
        return arguments.length ? ((b = a), d()) : b
      }),
      (e.quantiles = function () {
        return c
      }),
      (e.copy = function () {
        return cj(a, b)
      }),
      d()
    )
  }

  function ck(a, b, c) {
    function f(b) {
      return c[Math.max(0, Math.min(e, Math.floor(d * (b - a))))]
    }

    function g() {
      return (d = c.length / (b - a)), (e = c.length - 1), f
    }
    var d, e
    return (
      (f.domain = function (c) {
        return arguments.length ? ((a = +c[0]), (b = +c[c.length - 1]), g()) : [a, b]
      }),
      (f.range = function (a) {
        return arguments.length ? ((c = a), g()) : c
      }),
      (f.copy = function () {
        return ck(a, b, c)
      }),
      g()
    )
  }

  function cn(a) {
    return a.innerRadius
  }

  function co(a) {
    return a.outerRadius
  }

  function cp(a) {
    return a.startAngle
  }

  function cq(a) {
    return a.endAngle
  }

  function cr(a) {
    function g(d) {
      return d.length < 1 ? null : 'M' + e(a(cs(this, d, b, c)), f)
    }
    var b = ct,
      c = cu,
      d = 'linear',
      e = cv[d],
      f = 0.7
    return (
      (g.x = function (a) {
        return arguments.length ? ((b = a), g) : b
      }),
      (g.y = function (a) {
        return arguments.length ? ((c = a), g) : c
      }),
      (g.interpolate = function (a) {
        return arguments.length ? ((e = cv[(d = a)]), g) : d
      }),
      (g.tension = function (a) {
        return arguments.length ? ((f = a), g) : f
      }),
      g
    )
  }

  function cs(a, b, c, d) {
    var e = [],
      f = -1,
      g = b.length,
      h = typeof c == 'function',
      i = typeof d == 'function',
      j
    if (h && i) while (++f < g) e.push([c.call(a, (j = b[f]), f), d.call(a, j, f)])
    else if (h) while (++f < g) e.push([c.call(a, b[f], f), d])
    else if (i) while (++f < g) e.push([c, d.call(a, b[f], f)])
    else while (++f < g) e.push([c, d])
    return e
  }

  function ct(a) {
    return a[0]
  }

  function cu(a) {
    return a[1]
  }

  function cw(a) {
    var b = 0,
      c = a.length,
      d = a[0],
      e = [d[0], ',', d[1]]
    while (++b < c) e.push('L', (d = a[b])[0], ',', d[1])
    return e.join('')
  }

  function cx(a) {
    var b = 0,
      c = a.length,
      d = a[0],
      e = [d[0], ',', d[1]]
    while (++b < c) e.push('V', (d = a[b])[1], 'H', d[0])
    return e.join('')
  }

  function cy(a) {
    var b = 0,
      c = a.length,
      d = a[0],
      e = [d[0], ',', d[1]]
    while (++b < c) e.push('H', (d = a[b])[0], 'V', d[1])
    return e.join('')
  }

  function cz(a, b) {
    return a.length < 4 ? cw(a) : a[1] + cC(a.slice(1, a.length - 1), cD(a, b))
  }

  function cA(a, b) {
    return a.length < 3
      ? cw(a)
      : a[0] + cC((a.push(a[0]), a), cD([a[a.length - 2]].concat(a, [a[1]]), b))
  }

  function cB(a, b, c) {
    return a.length < 3 ? cw(a) : a[0] + cC(a, cD(a, b))
  }

  function cC(a, b) {
    if (b.length < 1 || (a.length != b.length && a.length != b.length + 2)) return cw(a)
    var c = a.length != b.length,
      d = '',
      e = a[0],
      f = a[1],
      g = b[0],
      h = g,
      i = 1
    c &&
      ((d +=
        'Q' + (f[0] - (g[0] * 2) / 3) + ',' + (f[1] - (g[1] * 2) / 3) + ',' + f[0] + ',' + f[1]),
      (e = a[1]),
      (i = 2))
    if (b.length > 1) {
      ;(h = b[1]),
        (f = a[i]),
        i++,
        (d +=
          'C' +
          (e[0] + g[0]) +
          ',' +
          (e[1] + g[1]) +
          ',' +
          (f[0] - h[0]) +
          ',' +
          (f[1] - h[1]) +
          ',' +
          f[0] +
          ',' +
          f[1])
      for (var j = 2; j < b.length; j++, i++)
        (f = a[i]),
          (h = b[j]),
          (d += 'S' + (f[0] - h[0]) + ',' + (f[1] - h[1]) + ',' + f[0] + ',' + f[1])
    }
    if (c) {
      var k = a[i]
      d += 'Q' + (f[0] + (h[0] * 2) / 3) + ',' + (f[1] + (h[1] * 2) / 3) + ',' + k[0] + ',' + k[1]
    }
    return d
  }

  function cD(a, b) {
    var c = [],
      d = (1 - b) / 2,
      e,
      f = a[0],
      g = a[1],
      h = 1,
      i = a.length
    while (++h < i) (e = f), (f = g), (g = a[h]), c.push([d * (g[0] - e[0]), d * (g[1] - e[1])])
    return c
  }

  function cE(a) {
    if (a.length < 3) return cw(a)
    var b = 1,
      c = a.length,
      d = a[0],
      e = d[0],
      f = d[1],
      g = [e, e, e, (d = a[1])[0]],
      h = [f, f, f, d[1]],
      i = [e, ',', f]
    cM(i, g, h)
    while (++b < c) (d = a[b]), g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), cM(i, g, h)
    b = -1
    while (++b < 2) g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), cM(i, g, h)
    return i.join('')
  }

  function cF(a) {
    if (a.length < 4) return cw(a)
    var b = [],
      c = -1,
      d = a.length,
      e,
      f = [0],
      g = [0]
    while (++c < 3) (e = a[c]), f.push(e[0]), g.push(e[1])
    b.push(cI(cL, f) + ',' + cI(cL, g)), --c
    while (++c < d) (e = a[c]), f.shift(), f.push(e[0]), g.shift(), g.push(e[1]), cM(b, f, g)
    return b.join('')
  }

  function cG(a) {
    var b,
      c = -1,
      d = a.length,
      e = d + 4,
      f,
      g = [],
      h = []
    while (++c < 4) (f = a[c % d]), g.push(f[0]), h.push(f[1])
    ;(b = [cI(cL, g), ',', cI(cL, h)]), --c
    while (++c < e) (f = a[c % d]), g.shift(), g.push(f[0]), h.shift(), h.push(f[1]), cM(b, g, h)
    return b.join('')
  }

  function cH(a, b) {
    var c = a.length - 1,
      d = a[0][0],
      e = a[0][1],
      f = a[c][0] - d,
      g = a[c][1] - e,
      h = -1,
      i,
      j
    while (++h <= c)
      (i = a[h]),
        (j = h / c),
        (i[0] = b * i[0] + (1 - b) * (d + j * f)),
        (i[1] = b * i[1] + (1 - b) * (e + j * g))
    return cE(a)
  }

  function cI(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
  }

  function cM(a, b, c) {
    a.push(
      'C',
      cI(cJ, b),
      ',',
      cI(cJ, c),
      ',',
      cI(cK, b),
      ',',
      cI(cK, c),
      ',',
      cI(cL, b),
      ',',
      cI(cL, c)
    )
  }

  function cN(a, b) {
    return (b[1] - a[1]) / (b[0] - a[0])
  }

  function cO(a) {
    var b = 0,
      c = a.length - 1,
      d = [],
      e = a[0],
      f = a[1],
      g = (d[0] = cN(e, f))
    while (++b < c) d[b] = g + (g = cN((e = f), (f = a[b + 1])))
    return (d[b] = g), d
  }

  function cP(a) {
    var b = [],
      c,
      d,
      e,
      f,
      g = cO(a),
      h = -1,
      i = a.length - 1
    while (++h < i)
      (c = cN(a[h], a[h + 1])),
        Math.abs(c) < 1e-6
          ? (g[h] = g[h + 1] = 0)
          : ((d = g[h] / c),
            (e = g[h + 1] / c),
            (f = d * d + e * e),
            f > 9 && ((f = (c * 3) / Math.sqrt(f)), (g[h] = f * d), (g[h + 1] = f * e)))
    h = -1
    while (++h <= i)
      (f = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h]))),
        b.push([f || 0, g[h] * f || 0])
    return b
  }

  function cQ(a) {
    return a.length < 3 ? cw(a) : a[0] + cC(a, cP(a))
  }

  function cR(a) {
    var b,
      c = -1,
      d = a.length,
      e,
      f
    while (++c < d)
      (b = a[c]), (e = b[0]), (f = b[1] + cl), (b[0] = e * Math.cos(f)), (b[1] = e * Math.sin(f))
    return a
  }

  function cS(a) {
    function j(f) {
      if (f.length < 1) return null
      var j = cs(this, f, b, d),
        k = cs(this, f, b === c ? cT(j) : c, d === e ? cU(j) : e)
      return 'M' + g(a(k), i) + 'L' + h(a(j.reverse()), i) + 'Z'
    }
    var b = ct,
      c = ct,
      d = 0,
      e = cu,
      f,
      g,
      h,
      i = 0.7
    return (
      (j.x = function (a) {
        return arguments.length ? ((b = c = a), j) : c
      }),
      (j.x0 = function (a) {
        return arguments.length ? ((b = a), j) : b
      }),
      (j.x1 = function (a) {
        return arguments.length ? ((c = a), j) : c
      }),
      (j.y = function (a) {
        return arguments.length ? ((d = e = a), j) : e
      }),
      (j.y0 = function (a) {
        return arguments.length ? ((d = a), j) : d
      }),
      (j.y1 = function (a) {
        return arguments.length ? ((e = a), j) : e
      }),
      (j.interpolate = function (a) {
        return arguments.length ? ((g = cv[(f = a)]), (h = g.reverse || g), j) : f
      }),
      (j.tension = function (a) {
        return arguments.length ? ((i = a), j) : i
      }),
      j.interpolate('linear')
    )
  }

  function cT(a) {
    return function (b, c) {
      return a[c][0]
    }
  }

  function cU(a) {
    return function (b, c) {
      return a[c][1]
    }
  }

  function cV(a) {
    return a.source
  }

  function cW(a) {
    return a.target
  }

  function cX(a) {
    return a.radius
  }

  function cY(a) {
    return a.startAngle
  }

  function cZ(a) {
    return a.endAngle
  }

  function c$(a) {
    return [a.x, a.y]
  }

  function c_(a) {
    return function () {
      var b = a.apply(this, arguments),
        c = b[0],
        d = b[1] + cl
      return [c * Math.cos(d), c * Math.sin(d)]
    }
  }

  function db(a, b) {
    var c = (a.ownerSVGElement || a).createSVGPoint()
    if (da < 0 && (window.scrollX || window.scrollY)) {
      var d = d3
          .select(document.body)
          .append('svg')
          .style('position', 'absolute')
          .style('top', 0)
          .style('left', 0),
        e = d[0][0].getScreenCTM()
      ;(da = !e.f && !e.e), d.remove()
    }
    return (
      da ? ((c.x = b.pageX), (c.y = b.pageY)) : ((c.x = b.clientX), (c.y = b.clientY)),
      (c = c.matrixTransform(a.getScreenCTM().inverse())),
      [c.x, c.y]
    )
  }

  function dc() {
    return 64
  }

  function dd() {
    return 'circle'
  }

  function dh(a, b) {
    a.attr('transform', function (a) {
      return 'translate(' + b(a) + ',0)'
    })
  }

  function di(a, b) {
    a.attr('transform', function (a) {
      return 'translate(0,' + b(a) + ')'
    })
  }

  function dj(a, b, c) {
    e = []
    if (c && b.length > 1) {
      var d = bO(a.domain()),
        e,
        f = -1,
        g = b.length,
        h = (b[1] - b[0]) / ++c,
        i,
        j
      while (++f < g) for (i = c; --i > 0; ) (j = +b[f] - i * h) >= d[0] && e.push(j)
      for (--f, i = 0; ++i < c && (j = +b[f] + i * h) < d[1]; ) e.push(j)
    }
    return e
  }

  function dv(a, b) {
    a.select('.extent').attr('x', b[0][0]),
      a.selectAll('.n,.s,.w,.nw,.sw').attr('x', b[0][0] - 2),
      a.selectAll('.e,.ne,.se').attr('x', b[1][0] - 3),
      a.selectAll('.extent,.n,.s').attr('width', b[1][0] - b[0][0])
  }

  function dw(a, b) {
    a.select('.extent').attr('y', b[0][1]),
      a.selectAll('.n,.e,.w,.nw,.ne').attr('y', b[0][1] - 3),
      a.selectAll('.s,.se,.sw').attr('y', b[1][1] - 4),
      a.selectAll('.extent,.e,.w').attr('height', b[1][1] - b[0][1])
  }

  function dx() {
    d3.event.keyCode == 32 &&
      dm &&
      !dr &&
      ((dt = null), (du[0] -= dq[1][0]), (du[1] -= dq[1][1]), (dr = 2), O())
  }

  function dy() {
    d3.event.keyCode == 32 && dr == 2 && ((du[0] += dq[1][0]), (du[1] += dq[1][1]), (dr = 0), O())
  }

  function dz() {
    if (du) {
      var a = d3.svg.mouse(dm),
        b = d3.select(dm)
      dr ||
        (d3.event.altKey
          ? (dt || (dt = [(dq[0][0] + dq[1][0]) / 2, (dq[0][1] + dq[1][1]) / 2]),
            (du[0] = dq[+(a[0] < dt[0])][0]),
            (du[1] = dq[+(a[1] < dt[1])][1]))
          : (dt = null)),
        dn && (dA(a, dn, 0), dv(b, dq)),
        dp && (dA(a, dp, 1), dw(b, dq)),
        dl('brush')
    }
  }

  function dA(a, b, c) {
    var d = bP(b),
      e = d[0],
      f = d[1],
      g = du[c],
      h = dq[1][c] - dq[0][c],
      i,
      j
    dr && ((e -= g), (f -= h + g)),
      (i = Math.max(e, Math.min(f, a[c]))),
      dr
        ? (j = (i += g) + h)
        : (dt && (g = Math.max(e, Math.min(f, 2 * dt[c] - i))),
          g < i ? ((j = i), (i = g)) : (j = g)),
      (dq[0][c] = i),
      (dq[1][c] = j)
  }

  function dB() {
    du &&
      (dz(),
      d3
        .select(dm)
        .selectAll('.resize')
        .style('pointer-events', dk.empty() ? 'none' : 'all'),
      dl('brushend'),
      (dk = dl = dm = dn = dp = dq = dr = ds = dt = du = null),
      O())
  }

  function dK(a) {
    var b = dL(),
      c = d3.event,
      d = (d3.event = {
        type: a,
      })
    b &&
      ((d.x = b[0] + dH[0]),
      (d.y = b[1] + dH[1]),
      (d.dx = b[0] - dI[0]),
      (d.dy = b[1] - dI[1]),
      (dJ |= d.dx | d.dy),
      (dI = b))
    try {
      dD[a].apply(dF, dG)
    } finally {
      d3.event = c
    }
    c.stopPropagation(), c.preventDefault()
  }

  function dL() {
    var a = dF.parentNode,
      b = d3.event.changedTouches
    return a && (b ? d3.svg.touches(a, b)[0] : d3.svg.mouse(a))
  }

  function dM() {
    if (!dF) return
    var a = dF.parentNode
    if (!a) return dN()
    dK('drag'), O()
  }

  function dN() {
    if (!dF) return
    dK('dragend'), dJ && (O(), (dJ = d3.event.target === dE)), (dD = dE = dF = dG = dH = dI = null)
  }

  function dO() {
    dJ && (O(), (dJ = 0))
  }

  function d_(a) {
    return [a[0] - dU[0], a[1] - dU[1], dU[2]]
  }

  function ea() {
    dP ||
      (dP = d3
        .select('body')
        .append('div')
        .style('visibility', 'hidden')
        .style('top', 0)
        .style('height', 0)
        .style('width', 0)
        .style('overflow-y', 'scroll')
        .append('div')
        .style('height', '2000px')
        .node().parentNode)
    var a = d3.event,
      b
    try {
      ;(dP.scrollTop = 1e3), dP.dispatchEvent(a), (b = 1e3 - dP.scrollTop)
    } catch (c) {
      b = a.wheelDelta || -a.detail * 5
    }
    return b * 0.005
  }

  function eb() {
    var a = d3.svg.touches(dY),
      b = -1,
      c = a.length,
      d
    while (++b < c) dS[(d = a[b]).identifier] = d_(d)
    return a
  }

  function ec() {
    var a = d3.svg.touches(dY)
    switch (a.length) {
      case 1:
        var b = a[0]
        eg(dU[2], b, dS[b.identifier])
        break
      case 2:
        var c = a[0],
          d = a[1],
          e = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2],
          f = dS[c.identifier],
          g = dS[d.identifier],
          h = [(f[0] + g[0]) / 2, (f[1] + g[1]) / 2, f[2]]
        eg(Math.log(d3.event.scale) / Math.LN2 + f[2], e, h)
    }
  }

  function ed() {
    ;(dR = null), dQ && ((d$ = 1), eg(dU[2], d3.svg.mouse(dY), dQ))
  }

  function ee() {
    dQ && (d$ && (O(), (d$ = dX === d3.event.target)), (dU = dV = dW = dX = dY = dZ = dQ = null))
  }

  function ef() {
    d$ && (O(), (d$ = 0))
  }

  function eg(a, b, c) {
    function l(a, b, c) {
      a.domain(
        a.range().map(function (f) {
          return a.invert(((f - c) * d) / e + b)
        })
      )
    }
    a = ei(a, 2)
    var d = Math.pow(2, dU[2]),
      e = Math.pow(2, a),
      f = Math.pow(2, (dU[2] = a) - c[2]),
      g = dU[0],
      h = dU[1],
      i = (dU[0] = ei(b[0] - c[0] * f, 0, e)),
      j = (dU[1] = ei(b[1] - c[1] * f, 1, e)),
      k = d3.event
    d3.event = {
      scale: e,
      translate: [i, j],
      transform: function (a, b) {
        a && l(a, g, i), b && l(b, h, j)
      },
    }
    try {
      dW.apply(dY, dZ)
    } finally {
      d3.event = k
    }
    k.preventDefault()
  }

  function ei(a, b, c) {
    var d = dV[b],
      e = d[0],
      f = d[1]
    return arguments.length === 3
      ? Math.max(
          f * (f === Infinity ? -Infinity : 1 / c - 1),
          Math.min(e === -Infinity ? Infinity : e, a / c)
        ) * c
      : Math.max(e, Math.min(f, a))
  }
  Date.now ||
    (Date.now = function () {
      return +new Date()
    })
  try {
    document.createElement('div').style.setProperty('opacity', 0, '')
  } catch (a) {
    var b = CSSStyleDeclaration.prototype,
      c = b.setProperty
    b.setProperty = function (a, b, d) {
      c.call(this, a, b + '', d)
    }
  }
  d3 = {
    version: '2.7.4',
  }
  var d = f
  try {
    d(document.documentElement.childNodes)[0].nodeType
  } catch (g) {
    d = e
  }
  var h = [].__proto__
    ? function (a, b) {
        a.__proto__ = b
      }
    : function (a, b) {
        for (var c in b) a[c] = b[c]
      }
  ;(d3.functor = function (a) {
    return typeof a == 'function'
      ? a
      : function () {
          return a
        }
  }),
    (d3.rebind = function (a, b) {
      var c = 1,
        d = arguments.length,
        e
      while (++c < d) a[(e = arguments[c])] = j(a, b, b[e])
      return a
    }),
    (d3.ascending = function (a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
    }),
    (d3.descending = function (a, b) {
      return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
    }),
    (d3.mean = function (a, b) {
      var c = a.length,
        d,
        e = 0,
        f = -1,
        g = 0
      if (arguments.length === 1) while (++f < c) k((d = a[f])) && (e += (d - e) / ++g)
      else while (++f < c) k((d = b.call(a, a[f], f))) && (e += (d - e) / ++g)
      return g ? e : undefined
    }),
    (d3.median = function (a, b) {
      return (
        arguments.length > 1 && (a = a.map(b)),
        (a = a.filter(k)),
        a.length ? d3.quantile(a.sort(d3.ascending), 0.5) : undefined
      )
    }),
    (d3.min = function (a, b) {
      var c = -1,
        d = a.length,
        e,
        f
      if (arguments.length === 1) {
        while (++c < d && ((e = a[c]) == null || e != e)) e = undefined
        while (++c < d) (f = a[c]) != null && e > f && (e = f)
      } else {
        while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e)) e = undefined
        while (++c < d) (f = b.call(a, a[c], c)) != null && e > f && (e = f)
      }
      return e
    }),
    (d3.max = function (a, b) {
      var c = -1,
        d = a.length,
        e,
        f
      if (arguments.length === 1) {
        while (++c < d && ((e = a[c]) == null || e != e)) e = undefined
        while (++c < d) (f = a[c]) != null && f > e && (e = f)
      } else {
        while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e)) e = undefined
        while (++c < d) (f = b.call(a, a[c], c)) != null && f > e && (e = f)
      }
      return e
    }),
    (d3.extent = function (a, b) {
      var c = -1,
        d = a.length,
        e,
        f,
        g
      if (arguments.length === 1) {
        while (++c < d && ((e = g = a[c]) == null || e != e)) e = g = undefined
        while (++c < d) (f = a[c]) != null && (e > f && (e = f), g < f && (g = f))
      } else {
        while (++c < d && ((e = g = b.call(a, a[c], c)) == null || e != e)) e = undefined
        while (++c < d) (f = b.call(a, a[c], c)) != null && (e > f && (e = f), g < f && (g = f))
      }
      return [e, g]
    }),
    (d3.random = {
      normal: function (a, b) {
        return (
          arguments.length < 2 && (b = 1),
          arguments.length < 1 && (a = 0),
          function () {
            var c, d, e
            do (c = Math.random() * 2 - 1), (d = Math.random() * 2 - 1), (e = c * c + d * d)
            while (!e || e > 1)
            return a + b * c * Math.sqrt((-2 * Math.log(e)) / e)
          }
        )
      },
    }),
    (d3.sum = function (a, b) {
      var c = 0,
        d = a.length,
        e,
        f = -1
      if (arguments.length === 1) while (++f < d) isNaN((e = +a[f])) || (c += e)
      else while (++f < d) isNaN((e = +b.call(a, a[f], f))) || (c += e)
      return c
    }),
    (d3.quantile = function (a, b) {
      var c = (a.length - 1) * b + 1,
        d = Math.floor(c),
        e = a[d - 1],
        f = c - d
      return f ? e + f * (a[d] - e) : e
    }),
    (d3.transpose = function (a) {
      return d3.zip.apply(d3, a)
    }),
    (d3.zip = function () {
      if (!(e = arguments.length)) return []
      for (var a = -1, b = d3.min(arguments, l), c = new Array(b); ++a < b; )
        for (var d = -1, e, f = (c[a] = new Array(e)); ++d < e; ) f[d] = arguments[d][a]
      return c
    }),
    (d3.bisectLeft = function (a, b, c, d) {
      arguments.length < 3 && (c = 0), arguments.length < 4 && (d = a.length)
      while (c < d) {
        var e = (c + d) >> 1
        a[e] < b ? (c = e + 1) : (d = e)
      }
      return c
    }),
    (d3.bisect = d3.bisectRight =
      function (a, b, c, d) {
        arguments.length < 3 && (c = 0), arguments.length < 4 && (d = a.length)
        while (c < d) {
          var e = (c + d) >> 1
          b < a[e] ? (d = e) : (c = e + 1)
        }
        return c
      }),
    (d3.first = function (a, b) {
      var c = 0,
        d = a.length,
        e = a[0],
        f
      arguments.length === 1 && (b = d3.ascending)
      while (++c < d) b.call(a, e, (f = a[c])) > 0 && (e = f)
      return e
    }),
    (d3.last = function (a, b) {
      var c = 0,
        d = a.length,
        e = a[0],
        f
      arguments.length === 1 && (b = d3.ascending)
      while (++c < d) b.call(a, e, (f = a[c])) <= 0 && (e = f)
      return e
    }),
    (d3.nest = function () {
      function f(c, g) {
        if (g >= b.length) return e ? e.call(a, c) : d ? c.sort(d) : c
        var h = -1,
          i = c.length,
          j = b[g++],
          k,
          l,
          m = {}
        while (++h < i) (k = j((l = c[h]))) in m ? m[k].push(l) : (m[k] = [l])
        for (k in m) m[k] = f(m[k], g)
        return m
      }

      function g(a, d) {
        if (d >= b.length) return a
        var e = [],
          f = c[d++],
          h
        for (h in a)
          e.push({
            key: h,
            values: g(a[h], d),
          })
        return (
          f &&
            e.sort(function (a, b) {
              return f(a.key, b.key)
            }),
          e
        )
      }
      var a = {},
        b = [],
        c = [],
        d,
        e
      return (
        (a.map = function (a) {
          return f(a, 0)
        }),
        (a.entries = function (a) {
          return g(f(a, 0), 0)
        }),
        (a.key = function (c) {
          return b.push(c), a
        }),
        (a.sortKeys = function (d) {
          return (c[b.length - 1] = d), a
        }),
        (a.sortValues = function (b) {
          return (d = b), a
        }),
        (a.rollup = function (b) {
          return (e = b), a
        }),
        a
      )
    }),
    (d3.keys = function (a) {
      var b = []
      for (var c in a) b.push(c)
      return b
    }),
    (d3.values = function (a) {
      var b = []
      for (var c in a) b.push(a[c])
      return b
    }),
    (d3.entries = function (a) {
      var b = []
      for (var c in a)
        b.push({
          key: c,
          value: a[c],
        })
      return b
    }),
    (d3.permute = function (a, b) {
      var c = [],
        d = -1,
        e = b.length
      while (++d < e) c[d] = a[b[d]]
      return c
    }),
    (d3.merge = function (a) {
      return Array.prototype.concat.apply([], a)
    }),
    (d3.split = function (a, b) {
      var c = [],
        d = [],
        e,
        f = -1,
        g = a.length
      arguments.length < 2 && (b = m)
      while (++f < g) b.call(d, (e = a[f]), f) ? (d = []) : (d.length || c.push(d), d.push(e))
      return c
    }),
    (d3.range = function (a, b, c) {
      arguments.length < 3 && ((c = 1), arguments.length < 2 && ((b = a), (a = 0)))
      if ((b - a) / c == Infinity) throw new Error('infinite range')
      var d = [],
        e = -1,
        f
      if (c < 0) while ((f = a + c * ++e) > b) d.push(f)
      else while ((f = a + c * ++e) < b) d.push(f)
      return d
    }),
    (d3.requote = function (a) {
      return a.replace(o, '\\$&')
    })
  var o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
  ;(d3.round = function (a, b) {
    return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
  }),
    (d3.xhr = function (a, b, c) {
      var d = new XMLHttpRequest()
      arguments.length < 3
        ? ((c = b), (b = null))
        : b && d.overrideMimeType && d.overrideMimeType(b),
        d.open('GET', a, !0),
        b && d.setRequestHeader('Accept', b),
        (d.onreadystatechange = function () {
          d.readyState === 4 && c(d.status < 300 ? d : null)
        }),
        d.send(null)
    }),
    (d3.text = function (a, b, c) {
      function d(a) {
        c(a && a.responseText)
      }
      arguments.length < 3 && ((c = b), (b = null)), d3.xhr(a, b, d)
    }),
    (d3.json = function (a, b) {
      d3.text(a, 'application/json', function (a) {
        b(a ? JSON.parse(a) : null)
      })
    }),
    (d3.html = function (a, b) {
      d3.text(a, 'text/html', function (a) {
        if (a != null) {
          var c = document.createRange()
          c.selectNode(document.body), (a = c.createContextualFragment(a))
        }
        b(a)
      })
    }),
    (d3.xml = function (a, b, c) {
      function d(a) {
        c(a && a.responseXML)
      }
      arguments.length < 3 && ((c = b), (b = null)), d3.xhr(a, b, d)
    })
  var p = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
  }
  ;(d3.ns = {
    prefix: p,
    qualify: function (a) {
      var b = a.indexOf(':')
      return b < 0
        ? a in p
          ? {
              space: p[a],
              local: a,
            }
          : a
        : {
            space: p[a.substring(0, b)],
            local: a.substring(b + 1),
          }
    },
  }),
    (d3.dispatch = function () {
      var a = new q(),
        b = -1,
        c = arguments.length
      while (++b < c) a[arguments[b]] = r(a)
      return a
    }),
    (q.prototype.on = function (a, b) {
      var c = a.indexOf('.'),
        d = ''
      return (
        c > 0 && ((d = a.substring(c + 1)), (a = a.substring(0, c))),
        arguments.length < 2 ? this[a].on(d) : this[a].on(d, b)
      )
    }),
    (d3.format = function (a) {
      var b = s.exec(a),
        c = b[1] || ' ',
        d = b[3] || '',
        e = b[5],
        f = +b[6],
        g = b[7],
        h = b[8],
        i = b[9],
        j = 1,
        k = '',
        l = !1
      h && (h = +h.substring(1)), e && ((c = '0'), g && (f -= Math.floor((f - 1) / 4)))
      switch (i) {
        case 'n':
          ;(g = !0), (i = 'g')
          break
        case '%':
          ;(j = 100), (k = '%'), (i = 'f')
          break
        case 'p':
          ;(j = 100), (k = '%'), (i = 'r')
          break
        case 'd':
          ;(l = !0), (h = 0)
          break
        case 's':
          ;(j = -1), (i = 'r')
      }
      return (
        i == 'r' && !h && (i = 'g'),
        (i = t[i] || v),
        function (a) {
          if (l && a % 1) return ''
          var b = a < 0 && (a = -a) ? '&minus;' : d
          if (j < 0) {
            var m = d3.formatPrefix(a, h)
            ;(a *= m.scale), (k = m.symbol)
          } else a *= j
          a = i(a, h)
          if (e) {
            var n = a.length + b.length
            n < f && (a = new Array(f - n + 1).join(c) + a), g && (a = w(a)), (a = b + a)
          } else {
            g && (a = w(a)), (a = b + a)
            var n = a.length
            n < f && (a = new Array(f - n + 1).join(c) + a)
          }
          return a + k
        }
      )
    })
  var s = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
    t = {
      g: function (a, b) {
        return a.toPrecision(b)
      },
      e: function (a, b) {
        return a.toExponential(b)
      },
      f: function (a, b) {
        return a.toFixed(b)
      },
      r: function (a, b) {
        return d3.round(a, (b = u(a, b))).toFixed(Math.max(0, Math.min(20, b)))
      },
    },
    x = ['y', 'z', 'a', 'f', 'p', 'n', '&mu;', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'].map(
      y
    )
  d3.formatPrefix = function (a, b) {
    var c = 0
    return (
      a &&
        (a < 0 && (a *= -1),
        b && (a = d3.round(a, u(a, b))),
        (c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10)),
        (c = Math.max(-24, Math.min(24, Math.floor((c <= 0 ? c + 1 : c - 1) / 3) * 3)))),
      x[8 + c / 3]
    )
  }
  var z = H(2),
    A = H(3),
    B = {
      linear: function () {
        return G
      },
      poly: H,
      quad: function () {
        return z
      },
      cubic: function () {
        return A
      },
      sin: function () {
        return I
      },
      exp: function () {
        return J
      },
      circle: function () {
        return K
      },
      elastic: L,
      back: M,
      bounce: function () {
        return N
      },
    },
    C = {
      in: function (a) {
        return a
      },
      out: E,
      'in-out': F,
      'out-in': function (a) {
        return F(E(a))
      },
    }
  ;(d3.ease = function (a) {
    var b = a.indexOf('-'),
      c = b >= 0 ? a.substring(0, b) : a,
      d = b >= 0 ? a.substring(b + 1) : 'in'
    return D(C[d](B[c].apply(null, Array.prototype.slice.call(arguments, 1))))
  }),
    (d3.event = null),
    (d3.interpolate = function (a, b) {
      var c = d3.interpolators.length,
        d
      while (--c >= 0 && !(d = d3.interpolators[c](a, b)));
      return d
    }),
    (d3.interpolateNumber = function (a, b) {
      return (
        (b -= a),
        function (c) {
          return a + b * c
        }
      )
    }),
    (d3.interpolateRound = function (a, b) {
      return (
        (b -= a),
        function (c) {
          return Math.round(a + b * c)
        }
      )
    }),
    (d3.interpolateString = function (a, b) {
      var c,
        d,
        e,
        f = 0,
        g = 0,
        h = [],
        i = [],
        j,
        k
      P.lastIndex = 0
      for (d = 0; (c = P.exec(b)); ++d)
        c.index && h.push(b.substring(f, (g = c.index))),
          i.push({
            i: h.length,
            x: c[0],
          }),
          h.push(null),
          (f = P.lastIndex)
      f < b.length && h.push(b.substring(f))
      for (d = 0, j = i.length; (c = P.exec(a)) && d < j; ++d) {
        k = i[d]
        if (k.x == c[0]) {
          if (k.i)
            if (h[k.i + 1] == null) {
              ;(h[k.i - 1] += k.x), h.splice(k.i, 1)
              for (e = d + 1; e < j; ++e) i[e].i--
            } else {
              ;(h[k.i - 1] += k.x + h[k.i + 1]), h.splice(k.i, 2)
              for (e = d + 1; e < j; ++e) i[e].i -= 2
            }
          else if (h[k.i + 1] == null) h[k.i] = k.x
          else {
            ;(h[k.i] = k.x + h[k.i + 1]), h.splice(k.i + 1, 1)
            for (e = d + 1; e < j; ++e) i[e].i--
          }
          i.splice(d, 1), j--, d--
        } else k.x = d3.interpolateNumber(parseFloat(c[0]), parseFloat(k.x))
      }
      while (d < j)
        (k = i.pop()),
          h[k.i + 1] == null ? (h[k.i] = k.x) : ((h[k.i] = k.x + h[k.i + 1]), h.splice(k.i + 1, 1)),
          j--
      return h.length === 1
        ? h[0] == null
          ? i[0].x
          : function () {
              return b
            }
        : function (a) {
            for (d = 0; d < j; ++d) h[(k = i[d]).i] = k.x(a)
            return h.join('')
          }
    }),
    (d3.interpolateTransform = function (a, b) {
      var c = [],
        d = [],
        e,
        f = d3.transform(a),
        g = d3.transform(b),
        h = f.translate,
        i = g.translate,
        j = f.rotate,
        k = g.rotate,
        l = f.skew,
        m = g.skew,
        n = f.scale,
        o = g.scale
      return (
        h[0] != i[0] || h[1] != i[1]
          ? (c.push('translate(', null, ',', null, ')'),
            d.push(
              {
                i: 1,
                x: d3.interpolateNumber(h[0], i[0]),
              },
              {
                i: 3,
                x: d3.interpolateNumber(h[1], i[1]),
              }
            ))
          : i[0] || i[1]
          ? c.push('translate(' + i + ')')
          : c.push(''),
        j != k
          ? d.push({
              i: c.push(c.pop() + 'rotate(', null, ')') - 2,
              x: d3.interpolateNumber(j, k),
            })
          : k && c.push(c.pop() + 'rotate(' + k + ')'),
        l != m
          ? d.push({
              i: c.push(c.pop() + 'skewX(', null, ')') - 2,
              x: d3.interpolateNumber(l, m),
            })
          : m && c.push(c.pop() + 'skewX(' + m + ')'),
        n[0] != o[0] || n[1] != o[1]
          ? ((e = c.push(c.pop() + 'scale(', null, ',', null, ')')),
            d.push(
              {
                i: e - 4,
                x: d3.interpolateNumber(n[0], o[0]),
              },
              {
                i: e - 2,
                x: d3.interpolateNumber(n[1], o[1]),
              }
            ))
          : (o[0] != 1 || o[1] != 1) && c.push(c.pop() + 'scale(' + o + ')'),
        (e = d.length),
        function (a) {
          var b = -1,
            f
          while (++b < e) c[(f = d[b]).i] = f.x(a)
          return c.join('')
        }
      )
    }),
    (d3.interpolateRgb = function (a, b) {
      ;(a = d3.rgb(a)), (b = d3.rgb(b))
      var c = a.r,
        d = a.g,
        e = a.b,
        f = b.r - c,
        g = b.g - d,
        h = b.b - e
      return function (a) {
        return '#' + V(Math.round(c + f * a)) + V(Math.round(d + g * a)) + V(Math.round(e + h * a))
      }
    }),
    (d3.interpolateHsl = function (a, b) {
      ;(a = d3.hsl(a)), (b = d3.hsl(b))
      var c = a.h,
        d = a.s,
        e = a.l,
        f = b.h - c,
        g = b.s - d,
        h = b.l - e
      return function (a) {
        return bb(c + f * a, d + g * a, e + h * a).toString()
      }
    }),
    (d3.interpolateArray = function (a, b) {
      var c = [],
        d = [],
        e = a.length,
        f = b.length,
        g = Math.min(a.length, b.length),
        h
      for (h = 0; h < g; ++h) c.push(d3.interpolate(a[h], b[h]))
      for (; h < e; ++h) d[h] = a[h]
      for (; h < f; ++h) d[h] = b[h]
      return function (a) {
        for (h = 0; h < g; ++h) d[h] = c[h](a)
        return d
      }
    }),
    (d3.interpolateObject = function (a, b) {
      var c = {},
        d = {},
        e
      for (e in a) e in b ? (c[e] = Q(e)(a[e], b[e])) : (d[e] = a[e])
      for (e in b) e in a || (d[e] = b[e])
      return function (a) {
        for (e in c) d[e] = c[e](a)
        return d
      }
    })
  var P = /[-+]?(?:\d*\.?\d+)(?:[eE][-+]?\d+)?/g
  ;(d3.interpolators = [
    d3.interpolateObject,
    function (a, b) {
      return b instanceof Array && d3.interpolateArray(a, b)
    },
    function (a, b) {
      return (typeof a == 'string' || typeof b == 'string') && d3.interpolateString(a + '', b + '')
    },
    function (a, b) {
      return (
        (typeof b == 'string'
          ? b in Z || /^(#|rgb\(|hsl\()/.test(b)
          : b instanceof U || b instanceof ba) && d3.interpolateRgb(a, b)
      )
    },
    function (a, b) {
      return !isNaN((a = +a)) && !isNaN((b = +b)) && d3.interpolateNumber(a, b)
    },
  ]),
    (d3.rgb = function (a, b, c) {
      return arguments.length === 1
        ? a instanceof U
          ? T(a.r, a.g, a.b)
          : W('' + a, T, bb)
        : T(~~a, ~~b, ~~c)
    }),
    (U.prototype.brighter = function (a) {
      a = Math.pow(0.7, arguments.length ? a : 1)
      var b = this.r,
        c = this.g,
        d = this.b,
        e = 30
      return !b && !c && !d
        ? T(e, e, e)
        : (b && b < e && (b = e),
          c && c < e && (c = e),
          d && d < e && (d = e),
          T(
            Math.min(255, Math.floor(b / a)),
            Math.min(255, Math.floor(c / a)),
            Math.min(255, Math.floor(d / a))
          ))
    }),
    (U.prototype.darker = function (a) {
      return (
        (a = Math.pow(0.7, arguments.length ? a : 1)),
        T(Math.floor(a * this.r), Math.floor(a * this.g), Math.floor(a * this.b))
      )
    }),
    (U.prototype.hsl = function () {
      return X(this.r, this.g, this.b)
    }),
    (U.prototype.toString = function () {
      return '#' + V(this.r) + V(this.g) + V(this.b)
    })
  var Z = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
  }
  for (var $ in Z) Z[$] = W(Z[$], T, bb)
  ;(d3.hsl = function (a, b, c) {
    return arguments.length === 1
      ? a instanceof ba
        ? _(a.h, a.s, a.l)
        : W('' + a, X, _)
      : _(+a, +b, +c)
  }),
    (ba.prototype.brighter = function (a) {
      return (a = Math.pow(0.7, arguments.length ? a : 1)), _(this.h, this.s, this.l / a)
    }),
    (ba.prototype.darker = function (a) {
      return (a = Math.pow(0.7, arguments.length ? a : 1)), _(this.h, this.s, a * this.l)
    }),
    (ba.prototype.rgb = function () {
      return bb(this.h, this.s, this.l)
    }),
    (ba.prototype.toString = function () {
      return this.rgb().toString()
    })
  var bd = function (a, b) {
      return b.querySelector(a)
    },
    be = function (a, b) {
      return b.querySelectorAll(a)
    },
    bf = document.documentElement,
    bg =
      bf.matchesSelector ||
      bf.webkitMatchesSelector ||
      bf.mozMatchesSelector ||
      bf.msMatchesSelector ||
      bf.oMatchesSelector,
    bh = function (a, b) {
      return bg.call(a, b)
    }
  typeof Sizzle == 'function' &&
    ((bd = function (a, b) {
      return Sizzle(a, b)[0]
    }),
    (be = function (a, b) {
      return Sizzle.uniqueSort(Sizzle(a, b))
    }),
    (bh = Sizzle.matchesSelector))
  var bi = []
  ;(d3.selection = function () {
    return bq
  }),
    (d3.selection.prototype = bi),
    (bi.select = function (a) {
      var b = [],
        c,
        d,
        e,
        f
      typeof a != 'function' && (a = bj(a))
      for (var g = -1, h = this.length; ++g < h; ) {
        b.push((c = [])), (c.parentNode = (e = this[g]).parentNode)
        for (var i = -1, j = e.length; ++i < j; )
          (f = e[i])
            ? (c.push((d = a.call(f, f.__data__, i))),
              d && '__data__' in f && (d.__data__ = f.__data__))
            : c.push(null)
      }
      return bc(b)
    }),
    (bi.selectAll = function (a) {
      var b = [],
        c,
        e
      typeof a != 'function' && (a = bk(a))
      for (var f = -1, g = this.length; ++f < g; )
        for (var h = this[f], i = -1, j = h.length; ++i < j; )
          if ((e = h[i])) b.push((c = d(a.call(e, e.__data__, i)))), (c.parentNode = e)
      return bc(b)
    }),
    (bi.attr = function (a, b) {
      function d() {
        this.removeAttribute(a)
      }

      function e() {
        this.removeAttributeNS(a.space, a.local)
      }

      function f() {
        this.setAttribute(a, b)
      }

      function g() {
        this.setAttributeNS(a.space, a.local, b)
      }

      function h() {
        var c = b.apply(this, arguments)
        c == null ? this.removeAttribute(a) : this.setAttribute(a, c)
      }

      function i() {
        var c = b.apply(this, arguments)
        c == null
          ? this.removeAttributeNS(a.space, a.local)
          : this.setAttributeNS(a.space, a.local, c)
      }
      a = d3.ns.qualify(a)
      if (arguments.length < 2) {
        var c = this.node()
        return a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
      }
      return this.each(
        b == null ? (a.local ? e : d) : typeof b == 'function' ? (a.local ? i : h) : a.local ? g : f
      )
    }),
    (bi.classed = function (a, b) {
      var c = a.split(bl),
        d = c.length,
        e = -1
      if (arguments.length > 1) {
        while (++e < d) bm.call(this, c[e], b)
        return this
      }
      while (++e < d) if (!bm.call(this, c[e])) return !1
      return !0
    })
  var bl = /\s+/g
  ;(bi.style = function (a, b, c) {
    function d() {
      this.style.removeProperty(a)
    }

    function e() {
      this.style.setProperty(a, b, c)
    }

    function f() {
      var d = b.apply(this, arguments)
      d == null ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
    }
    return (
      arguments.length < 3 && (c = ''),
      arguments.length < 2
        ? window.getComputedStyle(this.node(), null).getPropertyValue(a)
        : this.each(b == null ? d : typeof b == 'function' ? f : e)
    )
  }),
    (bi.property = function (a, b) {
      function c() {
        delete this[a]
      }

      function d() {
        this[a] = b
      }

      function e() {
        var c = b.apply(this, arguments)
        c == null ? delete this[a] : (this[a] = c)
      }
      return arguments.length < 2
        ? this.node()[a]
        : this.each(b == null ? c : typeof b == 'function' ? e : d)
    }),
    (bi.text = function (a) {
      return arguments.length < 1
        ? this.node().textContent
        : this.each(
            typeof a == 'function'
              ? function () {
                  var b = a.apply(this, arguments)
                  this.textContent = b == null ? '' : b
                }
              : a == null
              ? function () {
                  this.textContent = ''
                }
              : function () {
                  this.textContent = a
                }
          )
    }),
    (bi.html = function (a) {
      return arguments.length < 1
        ? this.node().innerHTML
        : this.each(
            typeof a == 'function'
              ? function () {
                  var b = a.apply(this, arguments)
                  this.innerHTML = b == null ? '' : b
                }
              : a == null
              ? function () {
                  this.innerHTML = ''
                }
              : function () {
                  this.innerHTML = a
                }
          )
    }),
    (bi.append = function (a) {
      function b() {
        return this.appendChild(document.createElementNS(this.namespaceURI, a))
      }

      function c() {
        return this.appendChild(document.createElementNS(a.space, a.local))
      }
      return (a = d3.ns.qualify(a)), this.select(a.local ? c : b)
    }),
    (bi.insert = function (a, b) {
      function c() {
        return this.insertBefore(document.createElementNS(this.namespaceURI, a), bd(b, this))
      }

      function d() {
        return this.insertBefore(document.createElementNS(a.space, a.local), bd(b, this))
      }
      return (a = d3.ns.qualify(a)), this.select(a.local ? d : c)
    }),
    (bi.remove = function () {
      return this.each(function () {
        var a = this.parentNode
        a && a.removeChild(this)
      })
    }),
    (bi.data = function (a, b) {
      function f(a, f) {
        var g,
          h = a.length,
          i = f.length,
          j = Math.min(h, i),
          k = Math.max(h, i),
          l = [],
          m = [],
          n = [],
          o,
          p
        if (b) {
          var q = {},
            r = [],
            s,
            t = f.length
          for (g = -1; ++g < h; )
            (s = b.call((o = a[g]), o.__data__, g)), s in q ? (n[t++] = o) : (q[s] = o), r.push(s)
          for (g = -1; ++g < i; )
            (o = q[(s = b.call(f, (p = f[g]), g))]),
              o
                ? ((o.__data__ = p), (l[g] = o), (m[g] = n[g] = null))
                : ((m[g] = bn(p)), (l[g] = n[g] = null)),
              delete q[s]
          for (g = -1; ++g < h; ) r[g] in q && (n[g] = a[g])
        } else {
          for (g = -1; ++g < j; )
            (o = a[g]),
              (p = f[g]),
              o
                ? ((o.__data__ = p), (l[g] = o), (m[g] = n[g] = null))
                : ((m[g] = bn(p)), (l[g] = n[g] = null))
          for (; g < i; ++g) (m[g] = bn(f[g])), (l[g] = n[g] = null)
          for (; g < k; ++g) (n[g] = a[g]), (m[g] = l[g] = null)
        }
        ;(m.update = l),
          (m.parentNode = l.parentNode = n.parentNode = a.parentNode),
          c.push(m),
          d.push(l),
          e.push(n)
      }
      var c = [],
        d = [],
        e = [],
        g = -1,
        h = this.length,
        i
      if (typeof a == 'function')
        while (++g < h) f((i = this[g]), a.call(i, i.parentNode.__data__, g))
      else while (++g < h) f((i = this[g]), a)
      var j = bc(d)
      return (
        (j.enter = function () {
          return br(c)
        }),
        (j.exit = function () {
          return bc(e)
        }),
        j
      )
    }),
    (bi.filter = function (a) {
      var b = [],
        c,
        d,
        e
      typeof a != 'function' && (a = bo(a))
      for (var f = 0, g = this.length; f < g; f++) {
        b.push((c = [])), (c.parentNode = (d = this[f]).parentNode)
        for (var h = 0, i = d.length; h < i; h++)
          (e = d[h]) && a.call(e, e.__data__, h) && c.push(e)
      }
      return bc(b)
    }),
    (bi.map = function (a) {
      return this.each(function () {
        this.__data__ = a.apply(this, arguments)
      })
    }),
    (bi.order = function () {
      for (var a = -1, b = this.length; ++a < b; )
        for (var c = this[a], d = c.length - 1, e = c[d], f; --d >= 0; )
          if ((f = c[d])) e && e !== f.nextSibling && e.parentNode.insertBefore(f, e), (e = f)
      return this
    }),
    (bi.sort = function (a) {
      a = bp.apply(this, arguments)
      for (var b = -1, c = this.length; ++b < c; ) this[b].sort(a)
      return this.order()
    }),
    (bi.on = function (a, b, c) {
      arguments.length < 3 && (c = !1)
      var d = '__on' + a,
        e = a.indexOf('.')
      return (
        e > 0 && (a = a.substring(0, e)),
        arguments.length < 2
          ? (e = this.node()[d]) && e._
          : this.each(function (e, f) {
              function h(a) {
                var c = d3.event
                d3.event = a
                try {
                  b.call(g, g.__data__, f)
                } finally {
                  d3.event = c
                }
              }
              var g = this
              g[d] && g.removeEventListener(a, g[d], c),
                b && g.addEventListener(a, (g[d] = h), c),
                (h._ = b)
            })
      )
    }),
    (bi.each = function (a) {
      for (var b = -1, c = this.length; ++b < c; )
        for (var d = this[b], e = -1, f = d.length; ++e < f; ) {
          var g = d[e]
          g && a.call(g, g.__data__, e, b)
        }
      return this
    }),
    (bi.call = function (a) {
      return a.apply(this, ((arguments[0] = this), arguments)), this
    }),
    (bi.empty = function () {
      return !this.node()
    }),
    (bi.node = function (a) {
      for (var b = 0, c = this.length; b < c; b++)
        for (var d = this[b], e = 0, f = d.length; e < f; e++) {
          var g = d[e]
          if (g) return g
        }
      return null
    }),
    (bi.transition = function () {
      var a = [],
        b,
        c
      for (var d = -1, e = this.length; ++d < e; ) {
        a.push((b = []))
        for (var f = this[d], g = -1, h = f.length; ++g < h; )
          b.push(
            (c = f[g])
              ? {
                  node: c,
                  delay: 0,
                  duration: 250,
                }
              : null
          )
      }
      return bt(a, bz || ++by, Date.now())
    })
  var bq = bc([[document]])
  ;(bq[0].parentNode = bf),
    (d3.select = function (a) {
      return typeof a == 'string' ? bq.select(a) : bc([[a]])
    }),
    (d3.selectAll = function (a) {
      return typeof a == 'string' ? bq.selectAll(a) : bc([d(a)])
    })
  var bs = []
  ;(bs.append = bi.append),
    (bs.insert = bi.insert),
    (bs.empty = bi.empty),
    (bs.node = bi.node),
    (bs.select = function (a) {
      var b = [],
        c,
        d,
        e,
        f,
        g
      for (var h = -1, i = this.length; ++h < i; ) {
        ;(e = (f = this[h]).update), b.push((c = [])), (c.parentNode = f.parentNode)
        for (var j = -1, k = f.length; ++j < k; )
          (g = f[j])
            ? (c.push((e[j] = d = a.call(f.parentNode, g.__data__, j))), (d.__data__ = g.__data__))
            : c.push(null)
      }
      return bc(b)
    })
  var bu = {},
    bx = [],
    by = 0,
    bz = 0,
    bA = d3.ease('cubic-in-out')
  ;(bx.call = bi.call),
    (d3.transition = function () {
      return bq.transition()
    }),
    (d3.transition.prototype = bx),
    (bx.select = function (a) {
      var b = [],
        c,
        d,
        e
      typeof a != 'function' && (a = bj(a))
      for (var f = -1, g = this.length; ++f < g; ) {
        b.push((c = []))
        for (var h = this[f], i = -1, j = h.length; ++i < j; )
          (e = h[i]) && (d = a.call(e.node, e.node.__data__, i))
            ? ('__data__' in e.node && (d.__data__ = e.node.__data__),
              c.push({
                node: d,
                delay: e.delay,
                duration: e.duration,
              }))
            : c.push(null)
      }
      return bt(b, this.id, this.time).ease(this.ease())
    }),
    (bx.selectAll = function (a) {
      var b = [],
        c,
        d,
        e
      typeof a != 'function' && (a = bk(a))
      for (var f = -1, g = this.length; ++f < g; )
        for (var h = this[f], i = -1, j = h.length; ++i < j; )
          if ((e = h[i])) {
            ;(d = a.call(e.node, e.node.__data__, i)), b.push((c = []))
            for (var k = -1, l = d.length; ++k < l; )
              c.push({
                node: d[k],
                delay: e.delay,
                duration: e.duration,
              })
          }
      return bt(b, this.id, this.time).ease(this.ease())
    }),
    (bx.attr = function (a, b) {
      return this.attrTween(a, bw(a, b))
    }),
    (bx.attrTween = function (a, b) {
      function d(a, d) {
        var e = b.call(this, a, d, this.getAttribute(c))
        return e === bu
          ? (this.removeAttribute(c), null)
          : e &&
              function (a) {
                this.setAttribute(c, e(a))
              }
      }

      function e(a, d) {
        var e = b.call(this, a, d, this.getAttributeNS(c.space, c.local))
        return e === bu
          ? (this.removeAttributeNS(c.space, c.local), null)
          : e &&
              function (a) {
                this.setAttributeNS(c.space, c.local, e(a))
              }
      }
      var c = d3.ns.qualify(a)
      return this.tween('attr.' + a, c.local ? e : d)
    }),
    (bx.style = function (a, b, c) {
      return arguments.length < 3 && (c = ''), this.styleTween(a, bw(a, b), c)
    }),
    (bx.styleTween = function (a, b, c) {
      return (
        arguments.length < 3 && (c = ''),
        this.tween('style.' + a, function (d, e) {
          var f = b.call(this, d, e, window.getComputedStyle(this, null).getPropertyValue(a))
          return f === bu
            ? (this.style.removeProperty(a), null)
            : f &&
                function (b) {
                  this.style.setProperty(a, f(b), c)
                }
        })
      )
    }),
    (bx.text = function (a) {
      return this.tween('text', function (b, c) {
        this.textContent = typeof a == 'function' ? a.call(this, b, c) : a
      })
    }),
    (bx.remove = function () {
      return this.each('end.transition', function () {
        var a
        !this.__transition__ && (a = this.parentNode) && a.removeChild(this)
      })
    }),
    (bx.delay = function (a) {
      var b = this
      return b.each(
        typeof a == 'function'
          ? function (c, d, e) {
              b[e][d].delay = +a.apply(this, arguments)
            }
          : ((a = +a),
            function (c, d, e) {
              b[e][d].delay = a
            })
      )
    }),
    (bx.duration = function (a) {
      var b = this
      return b.each(
        typeof a == 'function'
          ? function (c, d, e) {
              b[e][d].duration = +a.apply(this, arguments)
            }
          : ((a = +a),
            function (c, d, e) {
              b[e][d].duration = a
            })
      )
    }),
    (bx.transition = function () {
      return this.select(i)
    })
  var bC = null,
    bD,
    bE
  ;(d3.timer = function (a, b, c) {
    var d = !1,
      e,
      f = bC
    if (arguments.length < 3) {
      if (arguments.length < 2) b = 0
      else if (!isFinite(b)) return
      c = Date.now()
    }
    while (f) {
      if (f.callback === a) {
        ;(f.then = c), (f.delay = b), (d = !0)
        break
      }
      ;(e = f), (f = f.next)
    }
    d ||
      (bC = {
        callback: a,
        then: c,
        delay: b,
        next: bC,
      }),
      bD || ((bE = clearTimeout(bE)), (bD = 1), bH(bF))
  }),
    (d3.timer.flush = function () {
      var a,
        b = Date.now(),
        c = bC
      while (c) (a = b - c.then), c.delay || (c.flush = c.callback(a)), (c = c.next)
      bG()
    })
  var bH =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      setTimeout(a, 17)
    }
  ;(d3.transform = function (a) {
    var b = document.createElementNS(d3.ns.prefix.svg, 'g'),
      c = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0,
      }
    return (d3.transform = function (a) {
      b.setAttribute('transform', a)
      var d = b.transform.baseVal.consolidate()
      return new bI(d ? d.matrix : c)
    })(a)
  }),
    (bI.prototype.toString = function () {
      return (
        'translate(' +
        this.translate +
        ')rotate(' +
        this.rotate +
        ')skewX(' +
        this.skew +
        ')scale(' +
        this.scale +
        ')'
      )
    })
  var bM = 180 / Math.PI
  ;(d3.scale = {}),
    (d3.scale.linear = function () {
      return bS([0, 1], [0, 1], d3.interpolate, !1)
    }),
    (d3.scale.log = function () {
      return b$(d3.scale.linear(), ca)
    })
  var b_ = d3.format('.0e')
  ;(ca.pow = function (a) {
    return Math.pow(10, a)
  }),
    (cb.pow = function (a) {
      return -Math.pow(10, -a)
    }),
    (d3.scale.pow = function () {
      return cc(d3.scale.linear(), 1)
    }),
    (d3.scale.sqrt = function () {
      return d3.scale.pow().exponent(0.5)
    }),
    (d3.scale.ordinal = function () {
      return ce([], {
        t: 'range',
        x: [],
      })
    }),
    (d3.scale.category10 = function () {
      return d3.scale.ordinal().range(cf)
    }),
    (d3.scale.category20 = function () {
      return d3.scale.ordinal().range(cg)
    }),
    (d3.scale.category20b = function () {
      return d3.scale.ordinal().range(ch)
    }),
    (d3.scale.category20c = function () {
      return d3.scale.ordinal().range(ci)
    })
  var cf = [
      '#1f77b4',
      '#ff7f0e',
      '#2ca02c',
      '#d62728',
      '#9467bd',
      '#8c564b',
      '#e377c2',
      '#7f7f7f',
      '#bcbd22',
      '#17becf',
    ],
    cg = [
      '#1f77b4',
      '#aec7e8',
      '#ff7f0e',
      '#ffbb78',
      '#2ca02c',
      '#98df8a',
      '#d62728',
      '#ff9896',
      '#9467bd',
      '#c5b0d5',
      '#8c564b',
      '#c49c94',
      '#e377c2',
      '#f7b6d2',
      '#7f7f7f',
      '#c7c7c7',
      '#bcbd22',
      '#dbdb8d',
      '#17becf',
      '#9edae5',
    ],
    ch = [
      '#393b79',
      '#5254a3',
      '#6b6ecf',
      '#9c9ede',
      '#637939',
      '#8ca252',
      '#b5cf6b',
      '#cedb9c',
      '#8c6d31',
      '#bd9e39',
      '#e7ba52',
      '#e7cb94',
      '#843c39',
      '#ad494a',
      '#d6616b',
      '#e7969c',
      '#7b4173',
      '#a55194',
      '#ce6dbd',
      '#de9ed6',
    ],
    ci = [
      '#3182bd',
      '#6baed6',
      '#9ecae1',
      '#c6dbef',
      '#e6550d',
      '#fd8d3c',
      '#fdae6b',
      '#fdd0a2',
      '#31a354',
      '#74c476',
      '#a1d99b',
      '#c7e9c0',
      '#756bb1',
      '#9e9ac8',
      '#bcbddc',
      '#dadaeb',
      '#636363',
      '#969696',
      '#bdbdbd',
      '#d9d9d9',
    ]
  ;(d3.scale.quantile = function () {
    return cj([], [])
  }),
    (d3.scale.quantize = function () {
      return ck(0, 1, [0, 1])
    }),
    (d3.svg = {}),
    (d3.svg.arc = function () {
      function e() {
        var e = a.apply(this, arguments),
          f = b.apply(this, arguments),
          g = c.apply(this, arguments) + cl,
          h = d.apply(this, arguments) + cl,
          i = (h < g && ((i = g), (g = h), (h = i)), h - g),
          j = i < Math.PI ? '0' : '1',
          k = Math.cos(g),
          l = Math.sin(g),
          m = Math.cos(h),
          n = Math.sin(h)
        return i >= cm
          ? e
            ? 'M0,' +
              f +
              'A' +
              f +
              ',' +
              f +
              ' 0 1,1 0,' +
              -f +
              'A' +
              f +
              ',' +
              f +
              ' 0 1,1 0,' +
              f +
              'M0,' +
              e +
              'A' +
              e +
              ',' +
              e +
              ' 0 1,0 0,' +
              -e +
              'A' +
              e +
              ',' +
              e +
              ' 0 1,0 0,' +
              e +
              'Z'
            : 'M0,' +
              f +
              'A' +
              f +
              ',' +
              f +
              ' 0 1,1 0,' +
              -f +
              'A' +
              f +
              ',' +
              f +
              ' 0 1,1 0,' +
              f +
              'Z'
          : e
          ? 'M' +
            f * k +
            ',' +
            f * l +
            'A' +
            f +
            ',' +
            f +
            ' 0 ' +
            j +
            ',1 ' +
            f * m +
            ',' +
            f * n +
            'L' +
            e * m +
            ',' +
            e * n +
            'A' +
            e +
            ',' +
            e +
            ' 0 ' +
            j +
            ',0 ' +
            e * k +
            ',' +
            e * l +
            'Z'
          : 'M' +
            f * k +
            ',' +
            f * l +
            'A' +
            f +
            ',' +
            f +
            ' 0 ' +
            j +
            ',1 ' +
            f * m +
            ',' +
            f * n +
            'L0,0' +
            'Z'
      }
      var a = cn,
        b = co,
        c = cp,
        d = cq
      return (
        (e.innerRadius = function (b) {
          return arguments.length ? ((a = d3.functor(b)), e) : a
        }),
        (e.outerRadius = function (a) {
          return arguments.length ? ((b = d3.functor(a)), e) : b
        }),
        (e.startAngle = function (a) {
          return arguments.length ? ((c = d3.functor(a)), e) : c
        }),
        (e.endAngle = function (a) {
          return arguments.length ? ((d = d3.functor(a)), e) : d
        }),
        (e.centroid = function () {
          var e = (a.apply(this, arguments) + b.apply(this, arguments)) / 2,
            f = (c.apply(this, arguments) + d.apply(this, arguments)) / 2 + cl
          return [Math.cos(f) * e, Math.sin(f) * e]
        }),
        e
      )
    })
  var cl = -Math.PI / 2,
    cm = 2 * Math.PI - 1e-6
  d3.svg.line = function () {
    return cr(Object)
  }
  var cv = {
      linear: cw,
      'step-before': cx,
      'step-after': cy,
      basis: cE,
      'basis-open': cF,
      'basis-closed': cG,
      bundle: cH,
      cardinal: cB,
      'cardinal-open': cz,
      'cardinal-closed': cA,
      monotone: cQ,
    },
    cJ = [0, 2 / 3, 1 / 3, 0],
    cK = [0, 1 / 3, 2 / 3, 0],
    cL = [0, 1 / 6, 2 / 3, 1 / 6]
  ;(d3.svg.line.radial = function () {
    var a = cr(cR)
    return (a.radius = a.x), delete a.x, (a.angle = a.y), delete a.y, a
  }),
    (cx.reverse = cy),
    (cy.reverse = cx),
    (d3.svg.area = function () {
      return cS(Object)
    }),
    (d3.svg.area.radial = function () {
      var a = cS(cR)
      return (
        (a.radius = a.x),
        delete a.x,
        (a.innerRadius = a.x0),
        delete a.x0,
        (a.outerRadius = a.x1),
        delete a.x1,
        (a.angle = a.y),
        delete a.y,
        (a.startAngle = a.y0),
        delete a.y0,
        (a.endAngle = a.y1),
        delete a.y1,
        a
      )
    }),
    (d3.svg.chord = function () {
      function f(c, d) {
        var e = g(this, a, c, d),
          f = g(this, b, c, d)
        return (
          'M' +
          e.p0 +
          i(e.r, e.p1, e.a1 - e.a0) +
          (h(e, f)
            ? j(e.r, e.p1, e.r, e.p0)
            : j(e.r, e.p1, f.r, f.p0) + i(f.r, f.p1, f.a1 - f.a0) + j(f.r, f.p1, e.r, e.p0)) +
          'Z'
        )
      }

      function g(a, b, f, g) {
        var h = b.call(a, f, g),
          i = c.call(a, h, g),
          j = d.call(a, h, g) + cl,
          k = e.call(a, h, g) + cl
        return {
          r: i,
          a0: j,
          a1: k,
          p0: [i * Math.cos(j), i * Math.sin(j)],
          p1: [i * Math.cos(k), i * Math.sin(k)],
        }
      }

      function h(a, b) {
        return a.a0 == b.a0 && a.a1 == b.a1
      }

      function i(a, b, c) {
        return 'A' + a + ',' + a + ' 0 ' + +(c > Math.PI) + ',1 ' + b
      }

      function j(a, b, c, d) {
        return 'Q 0,0 ' + d
      }
      var a = cV,
        b = cW,
        c = cX,
        d = cp,
        e = cq
      return (
        (f.radius = function (a) {
          return arguments.length ? ((c = d3.functor(a)), f) : c
        }),
        (f.source = function (b) {
          return arguments.length ? ((a = d3.functor(b)), f) : a
        }),
        (f.target = function (a) {
          return arguments.length ? ((b = d3.functor(a)), f) : b
        }),
        (f.startAngle = function (a) {
          return arguments.length ? ((d = d3.functor(a)), f) : d
        }),
        (f.endAngle = function (a) {
          return arguments.length ? ((e = d3.functor(a)), f) : e
        }),
        f
      )
    }),
    (d3.svg.diagonal = function () {
      function d(d, e) {
        var f = a.call(this, d, e),
          g = b.call(this, d, e),
          h = (f.y + g.y) / 2,
          i = [
            f,
            {
              x: f.x,
              y: h,
            },
            {
              x: g.x,
              y: h,
            },
            g,
          ]
        return (i = i.map(c)), 'M' + i[0] + 'C' + i[1] + ' ' + i[2] + ' ' + i[3]
      }
      var a = cV,
        b = cW,
        c = c$
      return (
        (d.source = function (b) {
          return arguments.length ? ((a = d3.functor(b)), d) : a
        }),
        (d.target = function (a) {
          return arguments.length ? ((b = d3.functor(a)), d) : b
        }),
        (d.projection = function (a) {
          return arguments.length ? ((c = a), d) : c
        }),
        d
      )
    }),
    (d3.svg.diagonal.radial = function () {
      var a = d3.svg.diagonal(),
        b = c$,
        c = a.projection
      return (
        (a.projection = function (a) {
          return arguments.length ? c(c_((b = a))) : b
        }),
        a
      )
    }),
    (d3.svg.mouse = function (a) {
      return db(a, d3.event)
    })
  var da = /WebKit/.test(navigator.userAgent) ? -1 : 0
  ;(d3.svg.touches = function (a, b) {
    return (
      arguments.length < 2 && (b = d3.event.touches),
      b
        ? d(b).map(function (b) {
            var c = db(a, b)
            return (c.identifier = b.identifier), c
          })
        : []
    )
  }),
    (d3.svg.symbol = function () {
      function c(c, d) {
        return (de[a.call(this, c, d)] || de.circle)(b.call(this, c, d))
      }
      var a = dd,
        b = dc
      return (
        (c.type = function (b) {
          return arguments.length ? ((a = d3.functor(b)), c) : a
        }),
        (c.size = function (a) {
          return arguments.length ? ((b = d3.functor(a)), c) : b
        }),
        c
      )
    })
  var de = {
    circle: function (a) {
      var b = Math.sqrt(a / Math.PI)
      return (
        'M0,' + b + 'A' + b + ',' + b + ' 0 1,1 0,' + -b + 'A' + b + ',' + b + ' 0 1,1 0,' + b + 'Z'
      )
    },
    cross: function (a) {
      var b = Math.sqrt(a / 5) / 2
      return (
        'M' +
        -3 * b +
        ',' +
        -b +
        'H' +
        -b +
        'V' +
        -3 * b +
        'H' +
        b +
        'V' +
        -b +
        'H' +
        3 * b +
        'V' +
        b +
        'H' +
        b +
        'V' +
        3 * b +
        'H' +
        -b +
        'V' +
        b +
        'H' +
        -3 * b +
        'Z'
      )
    },
    diamond: function (a) {
      var b = Math.sqrt(a / (2 * dg)),
        c = b * dg
      return 'M0,' + -b + 'L' + c + ',0' + ' 0,' + b + ' ' + -c + ',0' + 'Z'
    },
    square: function (a) {
      var b = Math.sqrt(a) / 2
      return 'M' + -b + ',' + -b + 'L' + b + ',' + -b + ' ' + b + ',' + b + ' ' + -b + ',' + b + 'Z'
    },
    'triangle-down': function (a) {
      var b = Math.sqrt(a / df),
        c = (b * df) / 2
      return 'M0,' + c + 'L' + b + ',' + -c + ' ' + -b + ',' + -c + 'Z'
    },
    'triangle-up': function (a) {
      var b = Math.sqrt(a / df),
        c = (b * df) / 2
      return 'M0,' + -c + 'L' + b + ',' + c + ' ' + -b + ',' + c + 'Z'
    },
  }
  d3.svg.symbolTypes = d3.keys(de)
  var df = Math.sqrt(3),
    dg = Math.tan((30 * Math.PI) / 180)
  ;(d3.svg.axis = function () {
    function j(j) {
      j.each(function (k, l, m) {
        var n = d3.select(this),
          o = j.delay
            ? function (a) {
                var b = bz
                try {
                  return (
                    (bz = j.id),
                    a.transition().delay(j[m][l].delay).duration(j[m][l].duration).ease(j.ease())
                  )
                } finally {
                  bz = b
                }
              }
            : Object,
          p = a.ticks ? a.ticks.apply(a, g) : a.domain(),
          q = h == null ? (a.tickFormat ? a.tickFormat.apply(a, g) : String) : h,
          r = dj(a, p, i),
          s = n.selectAll('.minor').data(r, String),
          t = s.enter().insert('line', 'g').attr('class', 'tick minor').style('opacity', 1e-6),
          u = o(s.exit()).style('opacity', 1e-6).remove(),
          v = o(s).style('opacity', 1),
          w = n.selectAll('g').data(p, String),
          x = w.enter().insert('g', 'path').style('opacity', 1e-6),
          y = o(w.exit()).style('opacity', 1e-6).remove(),
          z = o(w).style('opacity', 1),
          A,
          B = bP(a),
          C = n.selectAll('.domain').data([0]),
          D = C.enter().append('path').attr('class', 'domain'),
          E = o(C),
          F = a.copy(),
          G = this.__chart__ || F
        ;(this.__chart__ = F),
          x.append('line').attr('class', 'tick'),
          x.append('text'),
          z.select('text').text(q)
        switch (b) {
          case 'bottom':
            ;(A = dh),
              t.attr('y2', d),
              v.attr('x2', 0).attr('y2', d),
              x.select('line').attr('y2', c),
              x.select('text').attr('y', Math.max(c, 0) + f),
              z.select('line').attr('x2', 0).attr('y2', c),
              z
                .select('text')
                .attr('x', 0)
                .attr('y', Math.max(c, 0) + f)
                .attr('dy', '.71em')
                .attr('text-anchor', 'middle'),
              E.attr('d', 'M' + B[0] + ',' + e + 'V0H' + B[1] + 'V' + e)
            break
          case 'top':
            ;(A = dh),
              t.attr('y2', -d),
              v.attr('x2', 0).attr('y2', -d),
              x.select('line').attr('y2', -c),
              x.select('text').attr('y', -(Math.max(c, 0) + f)),
              z.select('line').attr('x2', 0).attr('y2', -c),
              z
                .select('text')
                .attr('x', 0)
                .attr('y', -(Math.max(c, 0) + f))
                .attr('dy', '0em')
                .attr('text-anchor', 'middle'),
              E.attr('d', 'M' + B[0] + ',' + -e + 'V0H' + B[1] + 'V' + -e)
            break
          case 'left':
            ;(A = di),
              t.attr('x2', -d),
              v.attr('x2', -d).attr('y2', 0),
              x.select('line').attr('x2', -c),
              x.select('text').attr('x', -(Math.max(c, 0) + f)),
              z.select('line').attr('x2', -c).attr('y2', 0),
              z
                .select('text')
                .attr('x', -(Math.max(c, 0) + f))
                .attr('y', 0)
                .attr('dy', '.32em')
                .attr('text-anchor', 'end'),
              E.attr('d', 'M' + -e + ',' + B[0] + 'H0V' + B[1] + 'H' + -e)
            break
          case 'right':
            ;(A = di),
              t.attr('x2', d),
              v.attr('x2', d).attr('y2', 0),
              x.select('line').attr('x2', c),
              x.select('text').attr('x', Math.max(c, 0) + f),
              z.select('line').attr('x2', c).attr('y2', 0),
              z
                .select('text')
                .attr('x', Math.max(c, 0) + f)
                .attr('y', 0)
                .attr('dy', '.32em')
                .attr('text-anchor', 'start'),
              E.attr('d', 'M' + e + ',' + B[0] + 'H0V' + B[1] + 'H' + e)
        }
        if (a.ticks)
          x.call(A, G), z.call(A, F), y.call(A, F), t.call(A, G), v.call(A, F), u.call(A, F)
        else {
          var H = F.rangeBand() / 2,
            I = function (a) {
              return F(a) + H
            }
          x.call(A, I), z.call(A, I)
        }
      })
    }
    var a = d3.scale.linear(),
      b = 'bottom',
      c = 6,
      d = 6,
      e = 6,
      f = 3,
      g = [10],
      h,
      i = 0
    return (
      (j.scale = function (b) {
        return arguments.length ? ((a = b), j) : a
      }),
      (j.orient = function (a) {
        return arguments.length ? ((b = a), j) : b
      }),
      (j.ticks = function () {
        return arguments.length ? ((g = arguments), j) : g
      }),
      (j.tickFormat = function (a) {
        return arguments.length ? ((h = a), j) : h
      }),
      (j.tickSize = function (a, b, f) {
        if (!arguments.length) return c
        var g = arguments.length - 1
        return (c = +a), (d = g > 1 ? +b : c), (e = g > 0 ? +arguments[g] : c), j
      }),
      (j.tickPadding = function (a) {
        return arguments.length ? ((f = +a), j) : f
      }),
      (j.tickSubdivide = function (a) {
        return arguments.length ? ((i = +a), j) : i
      }),
      j
    )
  }),
    (d3.svg.brush = function () {
      function e(a) {
        var g =
          b && c
            ? ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw']
            : b
            ? ['e', 'w']
            : c
            ? ['n', 's']
            : []
        a.each(function () {
          var a = d3.select(this).on('mousedown.brush', f),
            h = a.selectAll('.background').data([0]),
            i = a.selectAll('.extent').data([0]),
            j = a.selectAll('.resize').data(g, String),
            k
          h
            .enter()
            .append('rect')
            .attr('class', 'background')
            .style('visibility', 'hidden')
            .style('pointer-events', 'all')
            .style('cursor', 'crosshair'),
            i.enter().append('rect').attr('class', 'extent').style('cursor', 'move'),
            j
              .enter()
              .append('rect')
              .attr('class', function (a) {
                return 'resize ' + a
              })
              .attr('width', 6)
              .attr('height', 6)
              .style('visibility', 'hidden')
              .style('cursor', function (a) {
                return dC[a]
              }),
            j.style('pointer-events', e.empty() ? 'none' : 'all'),
            j.exit().remove(),
            b && ((k = bP(b)), h.attr('x', k[0]).attr('width', k[1] - k[0]), dv(a, d)),
            c && ((k = bP(c)), h.attr('y', k[0]).attr('height', k[1] - k[0]), dw(a, d))
        })
      }

      function f() {
        var a = d3.select(d3.event.target)
        ;(dk = e),
          (dm = this),
          (dq = d),
          (du = d3.svg.mouse(dm)),
          (dr = a.classed('extent'))
            ? ((du[0] = d[0][0] - du[0]), (du[1] = d[0][1] - du[1]))
            : a.classed('resize')
            ? ((ds = d3.event.target.__data__),
              (du[0] = d[+/w$/.test(ds)][0]),
              (du[1] = d[+/^n/.test(ds)][1]))
            : d3.event.altKey && (dt = du.slice()),
          (dn = !/^(n|s)$/.test(ds) && b),
          (dp = !/^(e|w)$/.test(ds) && c),
          (dl = g(this, arguments)),
          dl('brushstart'),
          dz(),
          O()
      }

      function g(b, c) {
        return function (d) {
          var f = d3.event
          try {
            ;(d3.event = {
              type: d,
              target: e,
            }),
              a[d].apply(b, c)
          } finally {
            d3.event = f
          }
        }
      }
      var a = d3.dispatch('brushstart', 'brush', 'brushend'),
        b,
        c,
        d = [
          [0, 0],
          [0, 0],
        ]
      return (
        (e.x = function (a) {
          return arguments.length ? ((b = a), e) : b
        }),
        (e.y = function (a) {
          return arguments.length ? ((c = a), e) : c
        }),
        (e.extent = function (a) {
          var f, g, h, i, j
          return arguments.length
            ? (b &&
                ((f = a[0]),
                (g = a[1]),
                c && ((f = f[0]), (g = g[0])),
                b.invert && ((f = b(f)), (g = b(g))),
                g < f && ((j = f), (f = g), (g = j)),
                (d[0][0] = f),
                (d[1][0] = g)),
              c &&
                ((h = a[0]),
                (i = a[1]),
                b && ((h = h[1]), (i = i[1])),
                c.invert && ((h = c(h)), (i = c(i))),
                i < h && ((j = h), (h = i), (i = j)),
                (d[0][1] = h),
                (d[1][1] = i)),
              e)
            : (b &&
                ((f = d[0][0]),
                (g = d[1][0]),
                b.invert && ((f = b.invert(f)), (g = b.invert(g))),
                g < f && ((j = f), (f = g), (g = j))),
              c &&
                ((h = d[0][1]),
                (i = d[1][1]),
                c.invert && ((h = c.invert(h)), (i = c.invert(i))),
                i < h && ((j = h), (h = i), (i = j))),
              b && c
                ? [
                    [f, h],
                    [g, i],
                  ]
                : b
                ? [f, g]
                : c && [h, i])
        }),
        (e.clear = function () {
          return (d[0][0] = d[0][1] = d[1][0] = d[1][1] = 0), e
        }),
        (e.empty = function () {
          return (b && d[0][0] === d[1][0]) || (c && d[0][1] === d[1][1])
        }),
        d3
          .select(window)
          .on('mousemove.brush', dz)
          .on('mouseup.brush', dB)
          .on('keydown.brush', dx)
          .on('keyup.brush', dy),
        d3.rebind(e, a, 'on')
      )
    })
  var dk,
    dl,
    dm,
    dn,
    dp,
    dq,
    dr,
    ds,
    dt,
    du,
    dC = {
      n: 'ns-resize',
      e: 'ew-resize',
      s: 'ns-resize',
      w: 'ew-resize',
      nw: 'nwse-resize',
      ne: 'nesw-resize',
      se: 'nwse-resize',
      sw: 'nesw-resize',
    }
  ;(d3.behavior = {}),
    (d3.behavior.drag = function () {
      function c() {
        this.on('mousedown.drag', e).on('touchstart.drag', e),
          d3
            .select(window)
            .on('mousemove.drag', dM)
            .on('touchmove.drag', dM)
            .on('mouseup.drag', dN, !0)
            .on('touchend.drag', dN, !0)
            .on('click.drag', dO, !0)
      }

      function d() {
        ;(dD = a),
          (dE = d3.event.target),
          (dF = this),
          (dG = arguments),
          (dI = dL()),
          b ? ((dH = b.apply(dF, dG)), (dH = [dH.x - dI[0], dH.y - dI[1]])) : (dH = [0, 0]),
          (dJ = 0)
      }

      function e() {
        d.apply(this, arguments), dK('dragstart')
      }
      var a = d3.dispatch('drag', 'dragstart', 'dragend'),
        b = null
      return (
        (c.origin = function (a) {
          return arguments.length ? ((b = a), c) : b
        }),
        d3.rebind(c, a, 'on')
      )
    })
  var dD, dE, dF, dG, dH, dI, dJ
  d3.behavior.zoom = function () {
    function d() {
      this.on('mousedown.zoom', f)
        .on('mousewheel.zoom', g)
        .on('DOMMouseScroll.zoom', g)
        .on('dblclick.zoom', h)
        .on('touchstart.zoom', i),
        d3
          .select(window)
          .on('mousemove.zoom', ed)
          .on('mouseup.zoom', ee)
          .on('touchmove.zoom', ec)
          .on('touchend.zoom', eb)
          .on('click.zoom', ef, !0)
    }

    function e() {
      ;(dU = a), (dV = c), (dW = b.zoom), (dX = d3.event.target), (dY = this), (dZ = arguments)
    }

    function f() {
      e.apply(this, arguments),
        (dQ = d_(d3.svg.mouse(dY))),
        (d$ = 0),
        d3.event.preventDefault(),
        window.focus()
    }

    function g() {
      e.apply(this, arguments),
        dR || (dR = d_(d3.svg.mouse(dY))),
        eg(ea() + a[2], d3.svg.mouse(dY), dR)
    }

    function h() {
      e.apply(this, arguments)
      var b = d3.svg.mouse(dY)
      eg(d3.event.shiftKey ? Math.ceil(a[2] - 1) : Math.floor(a[2] + 1), b, d_(b))
    }

    function i() {
      e.apply(this, arguments)
      var b = eb(),
        c,
        d = Date.now()
      b.length === 1 && d - dT < 300 && eg(1 + Math.floor(a[2]), (c = b[0]), dS[c.identifier]),
        (dT = d)
    }
    var a = [0, 0, 0],
      b = d3.dispatch('zoom'),
      c = eh
    return (
      (d.extent = function (a) {
        return arguments.length ? ((c = a == null ? eh : a), d) : c
      }),
      d3.rebind(d, b, 'on')
    )
  }
  var dP,
    dQ,
    dR,
    dS = {},
    dT = 0,
    dU,
    dV,
    dW,
    dX,
    dY,
    dZ,
    d$,
    eh = [
      [-Infinity, Infinity],
      [-Infinity, Infinity],
      [-Infinity, Infinity],
    ]
})()

/********************************
 ** FILE: lib/d3.geom.min.js
 ********************************/
;(function () {
  function c(a) {
    var b = 0,
      c = 0
    for (;;) {
      if (a(b, c)) return [b, c]
      b === 0 ? ((b = c + 1), (c = 0)) : ((b -= 1), (c += 1))
    }
  }

  function d(a, b, c, d) {
    var e, f, g, h, i, j, k
    return (
      (e = d[a]),
      (f = e[0]),
      (g = e[1]),
      (e = d[b]),
      (h = e[0]),
      (i = e[1]),
      (e = d[c]),
      (j = e[0]),
      (k = e[1]),
      (k - g) * (h - f) - (i - g) * (j - f) > 0
    )
  }

  function e(a, b, c) {
    return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
  }

  function f(a, b, c, d) {
    var e = a[0],
      f = b[0],
      g = c[0],
      h = d[0],
      i = a[1],
      j = b[1],
      k = c[1],
      l = d[1],
      m = e - g,
      n = f - e,
      o = h - g,
      p = i - k,
      q = j - i,
      r = l - k,
      s = (o * p - r * m) / (r * n - o * q)
    return [e + s * n, i + s * q]
  }

  function h(a, b) {
    var c = {
        list: a
          .map(function (a, b) {
            return {
              index: b,
              x: a[0],
              y: a[1],
            }
          })
          .sort(function (a, b) {
            return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0
          }),
        bottomSite: null,
      },
      d = {
        list: [],
        leftEnd: null,
        rightEnd: null,
        init: function () {
          ;(d.leftEnd = d.createHalfEdge(null, 'l')),
            (d.rightEnd = d.createHalfEdge(null, 'l')),
            (d.leftEnd.r = d.rightEnd),
            (d.rightEnd.l = d.leftEnd),
            d.list.unshift(d.leftEnd, d.rightEnd)
        },
        createHalfEdge: function (a, b) {
          return {
            edge: a,
            side: b,
            vertex: null,
            l: null,
            r: null,
          }
        },
        insert: function (a, b) {
          ;(b.l = a), (b.r = a.r), (a.r.l = b), (a.r = b)
        },
        leftBound: function (a) {
          var b = d.leftEnd
          do b = b.r
          while (b != d.rightEnd && e.rightOf(b, a))
          return (b = b.l), b
        },
        del: function (a) {
          ;(a.l.r = a.r), (a.r.l = a.l), (a.edge = null)
        },
        right: function (a) {
          return a.r
        },
        left: function (a) {
          return a.l
        },
        leftRegion: function (a) {
          return a.edge == null ? c.bottomSite : a.edge.region[a.side]
        },
        rightRegion: function (a) {
          return a.edge == null ? c.bottomSite : a.edge.region[g[a.side]]
        },
      },
      e = {
        bisect: function (a, b) {
          var c = {
              region: {
                l: a,
                r: b,
              },
              ep: {
                l: null,
                r: null,
              },
            },
            d = b.x - a.x,
            e = b.y - a.y,
            f = d > 0 ? d : -d,
            g = e > 0 ? e : -e
          return (
            (c.c = a.x * d + a.y * e + (d * d + e * e) * 0.5),
            f > g ? ((c.a = 1), (c.b = e / d), (c.c /= d)) : ((c.b = 1), (c.a = d / e), (c.c /= e)),
            c
          )
        },
        intersect: function (a, b) {
          var c = a.edge,
            d = b.edge
          if (!c || !d || c.region.r == d.region.r) return null
          var e = c.a * d.b - c.b * d.a
          if (Math.abs(e) < 1e-10) return null
          var f = (c.c * d.b - d.c * c.b) / e,
            g = (d.c * c.a - c.c * d.a) / e,
            h = c.region.r,
            i = d.region.r,
            j,
            k
          h.y < i.y || (h.y == i.y && h.x < i.x) ? ((j = a), (k = c)) : ((j = b), (k = d))
          var l = f >= k.region.r.x
          return (l && j.side === 'l') || (!l && j.side === 'r')
            ? null
            : {
                x: f,
                y: g,
              }
        },
        rightOf: function (a, b) {
          var c = a.edge,
            d = c.region.r,
            e = b.x > d.x
          if (e && a.side === 'l') return 1
          if (!e && a.side === 'r') return 0
          if (c.a === 1) {
            var f = b.y - d.y,
              g = b.x - d.x,
              h = 0,
              i = 0
            ;(!e && c.b < 0) || (e && c.b >= 0)
              ? (i = h = f >= c.b * g)
              : ((i = b.x + b.y * c.b > c.c), c.b < 0 && (i = !i), i || (h = 1))
            if (!h) {
              var j = d.x - c.region.l.x
              ;(i = c.b * (g * g - f * f) < j * f * (1 + (2 * g) / j + c.b * c.b)),
                c.b < 0 && (i = !i)
            }
          } else {
            var k = c.c - c.a * b.x,
              l = b.y - k,
              m = b.x - d.x,
              n = k - d.y
            i = l * l > m * m + n * n
          }
          return a.side === 'l' ? i : !i
        },
        endPoint: function (a, c, d) {
          a.ep[c] = d
          if (!a.ep[g[c]]) return
          b(a)
        },
        distance: function (a, b) {
          var c = a.x - b.x,
            d = a.y - b.y
          return Math.sqrt(c * c + d * d)
        },
      },
      f = {
        list: [],
        insert: function (a, b, c) {
          ;(a.vertex = b), (a.ystar = b.y + c)
          for (var d = 0, e = f.list, g = e.length; d < g; d++) {
            var h = e[d]
            if (a.ystar > h.ystar || (a.ystar == h.ystar && b.x > h.vertex.x)) continue
            break
          }
          e.splice(d, 0, a)
        },
        del: function (a) {
          for (var b = 0, c = f.list, d = c.length; b < d && c[b] != a; ++b);
          c.splice(b, 1)
        },
        empty: function () {
          return f.list.length === 0
        },
        nextEvent: function (a) {
          for (var b = 0, c = f.list, d = c.length; b < d; ++b) if (c[b] == a) return c[b + 1]
          return null
        },
        min: function () {
          var a = f.list[0]
          return {
            x: a.vertex.x,
            y: a.ystar,
          }
        },
        extractMin: function () {
          return f.list.shift()
        },
      }
    d.init(), (c.bottomSite = c.list.shift())
    var h = c.list.shift(),
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u
    for (;;) {
      f.empty() || (i = f.min())
      if (h && (f.empty() || h.y < i.y || (h.y == i.y && h.x < i.x)))
        (j = d.leftBound(h)),
          (k = d.right(j)),
          (o = d.rightRegion(j)),
          (t = e.bisect(o, h)),
          (n = d.createHalfEdge(t, 'l')),
          d.insert(j, n),
          (r = e.intersect(j, n)),
          r && (f.del(j), f.insert(j, r, e.distance(r, h))),
          (j = n),
          (n = d.createHalfEdge(t, 'r')),
          d.insert(j, n),
          (r = e.intersect(n, k)),
          r && f.insert(n, r, e.distance(r, h)),
          (h = c.list.shift())
      else if (!f.empty())
        (j = f.extractMin()),
          (l = d.left(j)),
          (k = d.right(j)),
          (m = d.right(k)),
          (o = d.leftRegion(j)),
          (p = d.rightRegion(k)),
          (s = j.vertex),
          e.endPoint(j.edge, j.side, s),
          e.endPoint(k.edge, k.side, s),
          d.del(j),
          f.del(k),
          d.del(k),
          (u = 'l'),
          o.y > p.y && ((q = o), (o = p), (p = q), (u = 'r')),
          (t = e.bisect(o, p)),
          (n = d.createHalfEdge(t, u)),
          d.insert(l, n),
          e.endPoint(t, g[u], s),
          (r = e.intersect(l, n)),
          r && (f.del(l), f.insert(l, r, e.distance(r, o))),
          (r = e.intersect(n, m)),
          r && f.insert(n, r, e.distance(r, o))
      else break
    }
    for (j = d.right(d.leftEnd); j != d.rightEnd; j = d.right(j)) b(j.edge)
  }

  function i() {
    return {
      leaf: !0,
      nodes: [],
      point: null,
    }
  }

  function j(a, b, c, d, e, f) {
    if (!a(b, c, d, e, f)) {
      var g = (c + e) * 0.5,
        h = (d + f) * 0.5,
        i = b.nodes
      i[0] && j(a, i[0], c, d, g, h),
        i[1] && j(a, i[1], g, d, e, h),
        i[2] && j(a, i[2], c, h, g, f),
        i[3] && j(a, i[3], g, h, e, f)
    }
  }

  function k(a) {
    return {
      x: a[0],
      y: a[1],
    }
  }
  ;(d3.geom = {}),
    (d3.geom.contour = function (d, e) {
      var f = e || c(d),
        g = [],
        h = f[0],
        i = f[1],
        j = 0,
        k = 0,
        l = NaN,
        m = NaN,
        n = 0
      do
        (n = 0),
          d(h - 1, i - 1) && (n += 1),
          d(h, i - 1) && (n += 2),
          d(h - 1, i) && (n += 4),
          d(h, i) && (n += 8),
          n === 6
            ? ((j = m === -1 ? -1 : 1), (k = 0))
            : n === 9
            ? ((j = 0), (k = l === 1 ? -1 : 1))
            : ((j = a[n]), (k = b[n])),
          j != l && k != m && (g.push([h, i]), (l = j), (m = k)),
          (h += j),
          (i += k)
      while (f[0] != h || f[1] != i)
      return g
    })
  var a = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN],
    b = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN]
  ;(d3.geom.hull = function (a) {
    if (a.length < 3) return []
    var b = a.length,
      c = b - 1,
      e = [],
      f = [],
      g,
      h,
      i = 0,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q
    for (g = 1; g < b; ++g)
      a[g][1] < a[i][1] ? (i = g) : a[g][1] == a[i][1] && (i = a[g][0] < a[i][0] ? g : i)
    for (g = 0; g < b; ++g) {
      if (g === i) continue
      ;(k = a[g][1] - a[i][1]),
        (j = a[g][0] - a[i][0]),
        e.push({
          angle: Math.atan2(k, j),
          index: g,
        })
    }
    e.sort(function (a, b) {
      return a.angle - b.angle
    }),
      (p = e[0].angle),
      (o = e[0].index),
      (n = 0)
    for (g = 1; g < c; ++g)
      (h = e[g].index),
        p == e[g].angle
          ? ((j = a[o][0] - a[i][0]),
            (k = a[o][1] - a[i][1]),
            (l = a[h][0] - a[i][0]),
            (m = a[h][1] - a[i][1]),
            j * j + k * k >= l * l + m * m
              ? (e[g].index = -1)
              : ((e[n].index = -1), (p = e[g].angle), (n = g), (o = h)))
          : ((p = e[g].angle), (n = g), (o = h))
    f.push(i)
    for (g = 0, h = 0; g < 2; ++h) e[h].index !== -1 && (f.push(e[h].index), g++)
    q = f.length
    for (; h < c; ++h) {
      if (e[h].index === -1) continue
      while (!d(f[q - 2], f[q - 1], e[h].index, a)) --q
      f[q++] = e[h].index
    }
    var r = []
    for (g = 0; g < q; ++g) r.push(a[f[g]])
    return r
  }),
    (d3.geom.polygon = function (a) {
      return (
        (a.area = function () {
          var b = 0,
            c = a.length,
            d = a[c - 1][0] * a[0][1],
            e = a[c - 1][1] * a[0][0]
          while (++b < c) (d += a[b - 1][0] * a[b][1]), (e += a[b - 1][1] * a[b][0])
          return (e - d) * 0.5
        }),
        (a.centroid = function (b) {
          var c = -1,
            d = a.length,
            e = 0,
            f = 0,
            g,
            h = a[d - 1],
            i
          arguments.length || (b = -1 / (6 * a.area()))
          while (++c < d)
            (g = h),
              (h = a[c]),
              (i = g[0] * h[1] - h[0] * g[1]),
              (e += (g[0] + h[0]) * i),
              (f += (g[1] + h[1]) * i)
          return [e * b, f * b]
        }),
        (a.clip = function (b) {
          var c,
            d = -1,
            g = a.length,
            h,
            i,
            j = a[g - 1],
            k,
            l,
            m
          while (++d < g) {
            ;(c = b.slice()), (b.length = 0), (k = a[d]), (l = c[(i = c.length) - 1]), (h = -1)
            while (++h < i)
              (m = c[h]),
                e(m, j, k)
                  ? (e(l, j, k) || b.push(f(l, m, j, k)), b.push(m))
                  : e(l, j, k) && b.push(f(l, m, j, k)),
                (l = m)
            j = k
          }
          return b
        }),
        a
      )
    }),
    (d3.geom.voronoi = function (a) {
      var b = a.map(function () {
        return []
      })
      return (
        h(a, function (a) {
          var c, d, e, f, g, h
          a.a === 1 && a.b >= 0 ? ((c = a.ep.r), (d = a.ep.l)) : ((c = a.ep.l), (d = a.ep.r)),
            a.a === 1
              ? ((g = c ? c.y : -1e6),
                (e = a.c - a.b * g),
                (h = d ? d.y : 1e6),
                (f = a.c - a.b * h))
              : ((e = c ? c.x : -1e6),
                (g = a.c - a.a * e),
                (f = d ? d.x : 1e6),
                (h = a.c - a.a * f))
          var i = [e, g],
            j = [f, h]
          b[a.region.l.index].push(i, j), b[a.region.r.index].push(i, j)
        }),
        b.map(function (b, c) {
          var d = a[c][0],
            e = a[c][1]
          return (
            b.forEach(function (a) {
              a.angle = Math.atan2(a[0] - d, a[1] - e)
            }),
            b
              .sort(function (a, b) {
                return a.angle - b.angle
              })
              .filter(function (a, c) {
                return !c || a.angle - b[c - 1].angle > 1e-10
              })
          )
        })
      )
    })
  var g = {
    l: 'r',
    r: 'l',
  }
  ;(d3.geom.delaunay = function (a) {
    var b = a.map(function () {
        return []
      }),
      c = []
    return (
      h(a, function (c) {
        b[c.region.l.index].push(a[c.region.r.index])
      }),
      b.forEach(function (b, d) {
        var e = a[d],
          f = e[0],
          g = e[1]
        b.forEach(function (a) {
          a.angle = Math.atan2(a[0] - f, a[1] - g)
        }),
          b.sort(function (a, b) {
            return a.angle - b.angle
          })
        for (var h = 0, i = b.length - 1; h < i; h++) c.push([e, b[h], b[h + 1]])
      }),
      c
    )
  }),
    (d3.geom.quadtree = function (a, b, c, d, e) {
      function n(a, b, c, d, e, f) {
        if (isNaN(b.x) || isNaN(b.y)) return
        if (a.leaf) {
          var g = a.point
          g
            ? Math.abs(g.x - b.x) + Math.abs(g.y - b.y) < 0.01
              ? o(a, b, c, d, e, f)
              : ((a.point = null), o(a, g, c, d, e, f), o(a, b, c, d, e, f))
            : (a.point = b)
        } else o(a, b, c, d, e, f)
      }

      function o(a, b, c, d, e, f) {
        var g = (c + e) * 0.5,
          h = (d + f) * 0.5,
          j = b.x >= g,
          k = b.y >= h,
          l = (k << 1) + j
        ;(a.leaf = !1),
          (a = a.nodes[l] || (a.nodes[l] = i())),
          j ? (c = g) : (e = g),
          k ? (d = h) : (f = h),
          n(a, b, c, d, e, f)
      }
      var f,
        g = -1,
        h = a.length
      h && isNaN(a[0].x) && (a = a.map(k))
      if (arguments.length < 5)
        if (arguments.length === 3) (e = d = c), (c = b)
        else {
          ;(b = c = Infinity), (d = e = -Infinity)
          while (++g < h)
            (f = a[g]),
              f.x < b && (b = f.x),
              f.y < c && (c = f.y),
              f.x > d && (d = f.x),
              f.y > e && (e = f.y)
          var l = d - b,
            m = e - c
          l > m ? (e = c + l) : (d = b + m)
        }
      var p = i()
      return (
        (p.add = function (a) {
          n(p, a, b, c, d, e)
        }),
        (p.visit = function (a) {
          j(a, p, b, c, d, e)
        }),
        a.forEach(p.add),
        p
      )
    })
})()

/********************************
 ** FILE: lib/d3.layout.min.js
 ********************************/
;(function () {
  function a(a) {
    var b = a.source,
      d = a.target,
      e = c(b, d),
      f = [b]
    while (b !== e) (b = b.parent), f.push(b)
    var g = f.length
    while (d !== e) f.splice(g, 0, d), (d = d.parent)
    return f
  }

  function b(a) {
    var b = [],
      c = a.parent
    while (c != null) b.push(a), (a = c), (c = c.parent)
    return b.push(a), b
  }

  function c(a, c) {
    if (a === c) return a
    var d = b(a),
      e = b(c),
      f = d.pop(),
      g = e.pop(),
      h = null
    while (f === g) (h = f), (f = d.pop()), (g = e.pop())
    return h
  }

  function g(a) {
    a.fixed |= 2
  }

  function h(a) {
    a !== f && (a.fixed &= 1)
  }

  function i() {
    j(), (f.fixed &= 1), (e = f = null)
  }

  function j() {
    ;(f.px = d3.event.x), (f.py = d3.event.y), e.resume()
  }

  function k(a, b, c) {
    var d = 0,
      e = 0
    a.charge = 0
    if (!a.leaf) {
      var f = a.nodes,
        g = f.length,
        h = -1,
        i
      while (++h < g) {
        i = f[h]
        if (i == null) continue
        k(i, b, c), (a.charge += i.charge), (d += i.charge * i.cx), (e += i.charge * i.cy)
      }
    }
    if (a.point) {
      a.leaf || ((a.point.x += Math.random() - 0.5), (a.point.y += Math.random() - 0.5))
      var j = b * c[a.point.index]
      ;(a.charge += a.pointCharge = j), (d += j * a.point.x), (e += j * a.point.y)
    }
    ;(a.cx = d / a.charge), (a.cy = e / a.charge)
  }

  function l(a) {
    return 20
  }

  function m(a) {
    return 1
  }

  function o(a) {
    return a.x
  }

  function p(a) {
    return a.y
  }

  function q(a, b, c) {
    ;(a.y0 = b), (a.y = c)
  }

  function t(a) {
    var b = 1,
      c = 0,
      d = a[0][1],
      e,
      f = a.length
    for (; b < f; ++b) (e = a[b][1]) > d && ((c = b), (d = e))
    return c
  }

  function u(a) {
    return a.reduce(v, 0)
  }

  function v(a, b) {
    return a + b[1]
  }

  function w(a, b) {
    return x(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
  }

  function x(a, b) {
    var c = -1,
      d = +a[0],
      e = (a[1] - d) / b,
      f = []
    while (++c <= b) f[c] = e * c + d
    return f
  }

  function y(a) {
    return [d3.min(a), d3.max(a)]
  }

  function z(a, b) {
    return (
      d3.rebind(a, b, 'sort', 'children', 'value'),
      (a.links = D),
      (a.nodes = function (b) {
        return (E = !0), (a.nodes = a)(b)
      }),
      a
    )
  }

  function A(a) {
    return a.children
  }

  function B(a) {
    return a.value
  }

  function C(a, b) {
    return b.value - a.value
  }

  function D(a) {
    return d3.merge(
      a.map(function (a) {
        return (a.children || []).map(function (b) {
          return {
            source: a,
            target: b,
          }
        })
      })
    )
  }

  function F(a, b) {
    return a.value - b.value
  }

  function G(a, b) {
    var c = a._pack_next
    ;(a._pack_next = b), (b._pack_prev = a), (b._pack_next = c), (c._pack_prev = b)
  }

  function H(a, b) {
    ;(a._pack_next = b), (b._pack_prev = a)
  }

  function I(a, b) {
    var c = b.x - a.x,
      d = b.y - a.y,
      e = a.r + b.r
    return e * e - c * c - d * d > 0.001
  }

  function J(a) {
    function l(a) {
      ;(b = Math.min(a.x - a.r, b)),
        (c = Math.max(a.x + a.r, c)),
        (d = Math.min(a.y - a.r, d)),
        (e = Math.max(a.y + a.r, e))
    }
    var b = Infinity,
      c = -Infinity,
      d = Infinity,
      e = -Infinity,
      f = a.length,
      g,
      h,
      i,
      j,
      k
    a.forEach(K), (g = a[0]), (g.x = -g.r), (g.y = 0), l(g)
    if (f > 1) {
      ;(h = a[1]), (h.x = h.r), (h.y = 0), l(h)
      if (f > 2) {
        ;(i = a[2]), O(g, h, i), l(i), G(g, i), (g._pack_prev = i), G(i, h), (h = g._pack_next)
        for (var m = 3; m < f; m++) {
          O(g, h, (i = a[m]))
          var n = 0,
            o = 1,
            p = 1
          for (j = h._pack_next; j !== h; j = j._pack_next, o++)
            if (I(j, i)) {
              n = 1
              break
            }
          if (n == 1)
            for (k = g._pack_prev; k !== j._pack_prev; k = k._pack_prev, p++) if (I(k, i)) break
          n
            ? (o < p || (o == p && h.r < g.r) ? H(g, (h = j)) : H((g = k), h), m--)
            : (G(g, i), (h = i), l(i))
        }
      }
    }
    var q = (b + c) / 2,
      r = (d + e) / 2,
      s = 0
    for (var m = 0; m < f; m++) {
      var t = a[m]
      ;(t.x -= q), (t.y -= r), (s = Math.max(s, t.r + Math.sqrt(t.x * t.x + t.y * t.y)))
    }
    return a.forEach(L), s
  }

  function K(a) {
    a._pack_next = a._pack_prev = a
  }

  function L(a) {
    delete a._pack_next, delete a._pack_prev
  }

  function M(a) {
    var b = a.children
    b && b.length ? (b.forEach(M), (a.r = J(b))) : (a.r = Math.sqrt(a.value))
  }

  function N(a, b, c, d) {
    var e = a.children
    ;(a.x = b += d * a.x), (a.y = c += d * a.y), (a.r *= d)
    if (e) {
      var f = -1,
        g = e.length
      while (++f < g) N(e[f], b, c, d)
    }
  }

  function O(a, b, c) {
    var d = a.r + c.r,
      e = b.x - a.x,
      f = b.y - a.y
    if (d && (e || f)) {
      var g = b.r + c.r,
        h = Math.sqrt(e * e + f * f),
        i = Math.max(-1, Math.min(1, (d * d + h * h - g * g) / (2 * d * h))),
        j = Math.acos(i),
        k = i * (d /= h),
        l = Math.sin(j) * d
      ;(c.x = a.x + k * e + l * f), (c.y = a.y + k * f - l * e)
    } else (c.x = a.x + d), (c.y = a.y)
  }

  function P(a) {
    return (
      1 +
      d3.max(a, function (a) {
        return a.y
      })
    )
  }

  function Q(a) {
    return (
      a.reduce(function (a, b) {
        return a + b.x
      }, 0) / a.length
    )
  }

  function R(a) {
    var b = a.children
    return b && b.length ? R(b[0]) : a
  }

  function S(a) {
    var b = a.children,
      c
    return b && (c = b.length) ? S(b[c - 1]) : a
  }

  function T(a, b) {
    return a.parent == b.parent ? 1 : 2
  }

  function U(a) {
    var b = a.children
    return b && b.length ? b[0] : a._tree.thread
  }

  function V(a) {
    var b = a.children,
      c
    return b && (c = b.length) ? b[c - 1] : a._tree.thread
  }

  function W(a, b) {
    var c = a.children
    if (c && (e = c.length)) {
      var d,
        e,
        f = -1
      while (++f < e) b((d = W(c[f], b)), a) > 0 && (a = d)
    }
    return a
  }

  function X(a, b) {
    return a.x - b.x
  }

  function Y(a, b) {
    return b.x - a.x
  }

  function Z(a, b) {
    return a.depth - b.depth
  }

  function $(a, b) {
    function c(a, d) {
      var e = a.children
      if (e && (i = e.length)) {
        var f,
          g = null,
          h = -1,
          i
        while (++h < i) (f = e[h]), c(f, g), (g = f)
      }
      b(a, d)
    }
    c(a, null)
  }

  function _(a) {
    var b = 0,
      c = 0,
      d = a.children,
      e = d.length,
      f
    while (--e >= 0)
      (f = d[e]._tree), (f.prelim += b), (f.mod += b), (b += f.shift + (c += f.change))
  }

  function ba(a, b, c) {
    ;(a = a._tree), (b = b._tree)
    var d = c / (b.number - a.number)
    ;(a.change += d), (b.change -= d), (b.shift += c), (b.prelim += c), (b.mod += c)
  }

  function bb(a, b, c) {
    return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c
  }

  function bc(a) {
    return {
      x: a.x,
      y: a.y,
      dx: a.dx,
      dy: a.dy,
    }
  }

  function bd(a, b) {
    var c = a.x + b[3],
      d = a.y + b[0],
      e = a.dx - b[1] - b[3],
      f = a.dy - b[0] - b[2]
    return (
      e < 0 && ((c += e / 2), (e = 0)),
      f < 0 && ((d += f / 2), (f = 0)),
      {
        x: c,
        y: d,
        dx: e,
        dy: f,
      }
    )
  }
  ;(d3.layout = {}),
    (d3.layout.bundle = function () {
      return function (b) {
        var c = [],
          d = -1,
          e = b.length
        while (++d < e) c.push(a(b[d]))
        return c
      }
    }),
    (d3.layout.chord = function () {
      function j() {
        var a = {},
          j = [],
          l = d3.range(e),
          m = [],
          n,
          o,
          p,
          q,
          r
        ;(b = []), (c = []), (n = 0), (q = -1)
        while (++q < e) {
          ;(o = 0), (r = -1)
          while (++r < e) o += d[q][r]
          j.push(o), m.push(d3.range(e)), (n += o)
        }
        g &&
          l.sort(function (a, b) {
            return g(j[a], j[b])
          }),
          h &&
            m.forEach(function (a, b) {
              a.sort(function (a, c) {
                return h(d[b][a], d[b][c])
              })
            }),
          (n = (2 * Math.PI - f * e) / n),
          (o = 0),
          (q = -1)
        while (++q < e) {
          ;(p = o), (r = -1)
          while (++r < e) {
            var s = l[q],
              t = m[s][r],
              u = d[s][t],
              v = o,
              w = (o += u * n)
            a[s + '-' + t] = {
              index: s,
              subindex: t,
              startAngle: v,
              endAngle: w,
              value: u,
            }
          }
          c.push({
            index: s,
            startAngle: p,
            endAngle: o,
            value: (o - p) / n,
          }),
            (o += f)
        }
        q = -1
        while (++q < e) {
          r = q - 1
          while (++r < e) {
            var x = a[q + '-' + r],
              y = a[r + '-' + q]
            ;(x.value || y.value) &&
              b.push(
                x.value < y.value
                  ? {
                      source: y,
                      target: x,
                    }
                  : {
                      source: x,
                      target: y,
                    }
              )
          }
        }
        i && k()
      }

      function k() {
        b.sort(function (a, b) {
          return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
        })
      }
      var a = {},
        b,
        c,
        d,
        e,
        f = 0,
        g,
        h,
        i
      return (
        (a.matrix = function (f) {
          return arguments.length ? ((e = (d = f) && d.length), (b = c = null), a) : d
        }),
        (a.padding = function (d) {
          return arguments.length ? ((f = d), (b = c = null), a) : f
        }),
        (a.sortGroups = function (d) {
          return arguments.length ? ((g = d), (b = c = null), a) : g
        }),
        (a.sortSubgroups = function (c) {
          return arguments.length ? ((h = c), (b = null), a) : h
        }),
        (a.sortChords = function (c) {
          return arguments.length ? ((i = c), b && k(), a) : i
        }),
        (a.chords = function () {
          return b || j(), b
        }),
        (a.groups = function () {
          return c || j(), c
        }),
        a
      )
    }),
    (d3.layout.force = function () {
      function A(a) {
        return function (b, c, d, e, f) {
          if (b.point !== a) {
            var g = b.cx - a.x,
              h = b.cy - a.y,
              i = 1 / Math.sqrt(g * g + h * h)
            if ((e - c) * i < t) {
              var j = b.charge * i * i
              return (a.px -= g * j), (a.py -= h * j), !0
            }
            if (b.point && isFinite(i)) {
              var j = b.pointCharge * i * i
              ;(a.px -= g * j), (a.py -= h * j)
            }
          }
          return !b.charge
        }
      }

      function B() {
        var a = v.length,
          d = w.length,
          e,
          f,
          g,
          h,
          i,
          j,
          l,
          m,
          p
        for (f = 0; f < d; ++f) {
          ;(g = w[f]), (h = g.source), (i = g.target), (m = i.x - h.x), (p = i.y - h.y)
          if ((j = m * m + p * p))
            (j = (n * y[f] * ((j = Math.sqrt(j)) - x[f])) / j),
              (m *= j),
              (p *= j),
              (i.x -= m * (l = h.weight / (i.weight + h.weight))),
              (i.y -= p * l),
              (h.x += m * (l = 1 - l)),
              (h.y += p * l)
        }
        if ((l = n * s)) {
          ;(m = c[0] / 2), (p = c[1] / 2), (f = -1)
          if (l) while (++f < a) (g = v[f]), (g.x += (m - g.x) * l), (g.y += (p - g.y) * l)
        }
        if (r) {
          k((e = d3.geom.quadtree(v)), n, z), (f = -1)
          while (++f < a) (g = v[f]).fixed || e.visit(A(g))
        }
        f = -1
        while (++f < a)
          (g = v[f]),
            g.fixed
              ? ((g.x = g.px), (g.y = g.py))
              : ((g.x -= (g.px - (g.px = g.x)) * o), (g.y -= (g.py - (g.py = g.y)) * o))
        return (
          b.tick({
            type: 'tick',
            alpha: n,
          }),
          (n *= 0.99) < 0.005
        )
      }

      function C(b) {
        g((f = b)), (e = a)
      }
      var a = {},
        b = d3.dispatch('tick'),
        c = [1, 1],
        d,
        n,
        o = 0.9,
        p = l,
        q = m,
        r = -30,
        s = 0.1,
        t = 0.8,
        u,
        v = [],
        w = [],
        x,
        y,
        z
      return (
        (a.nodes = function (b) {
          return arguments.length ? ((v = b), a) : v
        }),
        (a.links = function (b) {
          return arguments.length ? ((w = b), a) : w
        }),
        (a.size = function (b) {
          return arguments.length ? ((c = b), a) : c
        }),
        (a.linkDistance = function (b) {
          return arguments.length ? ((p = d3.functor(b)), a) : p
        }),
        (a.distance = a.linkDistance),
        (a.linkStrength = function (b) {
          return arguments.length ? ((q = d3.functor(b)), a) : q
        }),
        (a.friction = function (b) {
          return arguments.length ? ((o = b), a) : o
        }),
        (a.charge = function (b) {
          return arguments.length ? ((r = typeof b == 'function' ? b : +b), a) : r
        }),
        (a.gravity = function (b) {
          return arguments.length ? ((s = b), a) : s
        }),
        (a.theta = function (b) {
          return arguments.length ? ((t = b), a) : t
        }),
        (a.start = function () {
          function k(a, c) {
            var d = l(b),
              e = -1,
              f = d.length,
              g
            while (++e < f) if (!isNaN((g = d[e][a]))) return g
            return Math.random() * c
          }

          function l() {
            if (!i) {
              i = []
              for (d = 0; d < e; ++d) i[d] = []
              for (d = 0; d < f; ++d) {
                var a = w[d]
                i[a.source.index].push(a.target), i[a.target.index].push(a.source)
              }
            }
            return i[b]
          }
          var b,
            d,
            e = v.length,
            f = w.length,
            g = c[0],
            h = c[1],
            i,
            j
          for (b = 0; b < e; ++b) ((j = v[b]).index = b), (j.weight = 0)
          ;(x = []), (y = [])
          for (b = 0; b < f; ++b)
            (j = w[b]),
              typeof j.source == 'number' && (j.source = v[j.source]),
              typeof j.target == 'number' && (j.target = v[j.target]),
              (x[b] = p.call(this, j, b)),
              (y[b] = q.call(this, j, b)),
              ++j.source.weight,
              ++j.target.weight
          for (b = 0; b < e; ++b)
            (j = v[b]),
              isNaN(j.x) && (j.x = k('x', g)),
              isNaN(j.y) && (j.y = k('y', h)),
              isNaN(j.px) && (j.px = j.x),
              isNaN(j.py) && (j.py = j.y)
          z = []
          if (typeof r == 'function') for (b = 0; b < e; ++b) z[b] = +r.call(this, v[b], b)
          else for (b = 0; b < e; ++b) z[b] = r
          return a.resume()
        }),
        (a.resume = function () {
          return (n = 0.1), d3.timer(B), a
        }),
        (a.stop = function () {
          return (n = 0), a
        }),
        (a.drag = function () {
          d ||
            (d = d3.behavior
              .drag()
              .origin(Object)
              .on('dragstart', C)
              .on('drag', j)
              .on('dragend', i)),
            this.on('mouseover.force', g).on('mouseout.force', h).call(d)
        }),
        d3.rebind(a, b, 'on')
      )
    })
  var e, f
  ;(d3.layout.partition = function () {
    function c(a, b, d, e) {
      var f = a.children
      ;(a.x = b), (a.y = a.depth * e), (a.dx = d), (a.dy = e)
      if (f && (h = f.length)) {
        var g = -1,
          h,
          i,
          j
        d = a.value ? d / a.value : 0
        while (++g < h) c((i = f[g]), b, (j = i.value * d), e), (b += j)
      }
    }

    function d(a) {
      var b = a.children,
        c = 0
      if (b && (f = b.length)) {
        var e = -1,
          f
        while (++e < f) c = Math.max(c, d(b[e]))
      }
      return 1 + c
    }

    function e(e, f) {
      var g = a.call(this, e, f)
      return c(g[0], 0, b[0], b[1] / d(g[0])), g
    }
    var a = d3.layout.hierarchy(),
      b = [1, 1]
    return (
      (e.size = function (a) {
        return arguments.length ? ((b = a), e) : b
      }),
      z(e, a)
    )
  }),
    (d3.layout.pie = function () {
      function f(g, h) {
        var i = g.map(function (b, c) {
            return +a.call(f, b, c)
          }),
          j = +(typeof c == 'function' ? c.apply(this, arguments) : c),
          k = ((typeof e == 'function' ? e.apply(this, arguments) : e) - c) / d3.sum(i),
          l = d3.range(g.length)
        b != null &&
          l.sort(
            b === n
              ? function (a, b) {
                  return i[b] - i[a]
                }
              : function (a, c) {
                  return b(g[a], g[c])
                }
          )
        var m = []
        return (
          l.forEach(function (a) {
            m[a] = {
              data: g[a],
              value: (d = i[a]),
              startAngle: j,
              endAngle: (j += d * k),
            }
          }),
          m
        )
      }
      var a = Number,
        b = n,
        c = 0,
        e = 2 * Math.PI
      return (
        (f.value = function (b) {
          return arguments.length ? ((a = b), f) : a
        }),
        (f.sort = function (a) {
          return arguments.length ? ((b = a), f) : b
        }),
        (f.startAngle = function (a) {
          return arguments.length ? ((c = a), f) : c
        }),
        (f.endAngle = function (a) {
          return arguments.length ? ((e = a), f) : e
        }),
        f
      )
    })
  var n = {}
  d3.layout.stack = function () {
    function g(h, i) {
      var j = h.map(function (b, c) {
          return a.call(g, b, c)
        }),
        k = j.map(function (a, b) {
          return a.map(function (a, b) {
            return [e.call(g, a, b), f.call(g, a, b)]
          })
        }),
        l = b.call(g, k, i)
      ;(j = d3.permute(j, l)), (k = d3.permute(k, l))
      var m = c.call(g, k, i),
        n = j.length,
        o = j[0].length,
        p,
        q,
        r
      for (q = 0; q < o; ++q) {
        d.call(g, j[0][q], (r = m[q]), k[0][q][1])
        for (p = 1; p < n; ++p) d.call(g, j[p][q], (r += k[p - 1][q][1]), k[p][q][1])
      }
      return h
    }
    var a = Object,
      b = r['default'],
      c = s.zero,
      d = q,
      e = o,
      f = p
    return (
      (g.values = function (b) {
        return arguments.length ? ((a = b), g) : a
      }),
      (g.order = function (a) {
        return arguments.length ? ((b = typeof a == 'function' ? a : r[a]), g) : b
      }),
      (g.offset = function (a) {
        return arguments.length ? ((c = typeof a == 'function' ? a : s[a]), g) : c
      }),
      (g.x = function (a) {
        return arguments.length ? ((e = a), g) : e
      }),
      (g.y = function (a) {
        return arguments.length ? ((f = a), g) : f
      }),
      (g.out = function (a) {
        return arguments.length ? ((d = a), g) : d
      }),
      g
    )
  }
  var r = {
      'inside-out': function (a) {
        var b = a.length,
          c,
          d,
          e = a.map(t),
          f = a.map(u),
          g = d3.range(b).sort(function (a, b) {
            return e[a] - e[b]
          }),
          h = 0,
          i = 0,
          j = [],
          k = []
        for (c = 0; c < b; ++c)
          (d = g[c]), h < i ? ((h += f[d]), j.push(d)) : ((i += f[d]), k.push(d))
        return k.reverse().concat(j)
      },
      reverse: function (a) {
        return d3.range(a.length).reverse()
      },
      default: function (a) {
        return d3.range(a.length)
      },
    },
    s = {
      silhouette: function (a) {
        var b = a.length,
          c = a[0].length,
          d = [],
          e = 0,
          f,
          g,
          h,
          i = []
        for (g = 0; g < c; ++g) {
          for (f = 0, h = 0; f < b; f++) h += a[f][g][1]
          h > e && (e = h), d.push(h)
        }
        for (g = 0; g < c; ++g) i[g] = (e - d[g]) / 2
        return i
      },
      wiggle: function (a) {
        var b = a.length,
          c = a[0],
          d = c.length,
          e = 0,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = []
        o[0] = m = n = 0
        for (g = 1; g < d; ++g) {
          for (f = 0, i = 0; f < b; ++f) i += a[f][g][1]
          for (f = 0, j = 0, l = c[g][0] - c[g - 1][0]; f < b; ++f) {
            for (h = 0, k = (a[f][g][1] - a[f][g - 1][1]) / (2 * l); h < f; ++h)
              k += (a[h][g][1] - a[h][g - 1][1]) / l
            j += k * a[f][g][1]
          }
          ;(o[g] = m -= i ? (j / i) * l : 0), m < n && (n = m)
        }
        for (g = 0; g < d; ++g) o[g] -= n
        return o
      },
      expand: function (a) {
        var b = a.length,
          c = a[0].length,
          d = 1 / b,
          e,
          f,
          g,
          h = []
        for (f = 0; f < c; ++f) {
          for (e = 0, g = 0; e < b; e++) g += a[e][f][1]
          if (g) for (e = 0; e < b; e++) a[e][f][1] /= g
          else for (e = 0; e < b; e++) a[e][f][1] = d
        }
        for (f = 0; f < c; ++f) h[f] = 0
        return h
      },
      zero: function (a) {
        var b = -1,
          c = a[0].length,
          d = []
        while (++b < c) d[b] = 0
        return d
      },
    }
  ;(d3.layout.histogram = function () {
    function e(e, f) {
      var g = [],
        h = e.map(b, this),
        i = c.call(this, h, f),
        j = d.call(this, i, h, f),
        k,
        f = -1,
        l = h.length,
        m = j.length - 1,
        n = a ? 1 : 1 / l,
        o
      while (++f < m) (k = g[f] = []), (k.dx = j[f + 1] - (k.x = j[f])), (k.y = 0)
      f = -1
      while (++f < l)
        (o = h[f]),
          o >= i[0] && o <= i[1] && ((k = g[d3.bisect(j, o, 1, m) - 1]), (k.y += n), k.push(e[f]))
      return g
    }
    var a = !0,
      b = Number,
      c = y,
      d = w
    return (
      (e.value = function (a) {
        return arguments.length ? ((b = a), e) : b
      }),
      (e.range = function (a) {
        return arguments.length ? ((c = d3.functor(a)), e) : c
      }),
      (e.bins = function (a) {
        return arguments.length
          ? ((d =
              typeof a == 'number'
                ? function (b) {
                    return x(b, a)
                  }
                : d3.functor(a)),
            e)
          : d
      }),
      (e.frequency = function (b) {
        return arguments.length ? ((a = !!b), e) : a
      }),
      e
    )
  }),
    (d3.layout.hierarchy = function () {
      function e(f, h, i) {
        var j = b.call(g, f, h),
          k = E
            ? f
            : {
                data: f,
              }
        ;(k.depth = h), i.push(k)
        if (j && (m = j.length)) {
          var l = -1,
            m,
            n = (k.children = []),
            o = 0,
            p = h + 1
          while (++l < m) (d = e(j[l], p, i)), (d.parent = k), n.push(d), (o += d.value)
          a && n.sort(a), c && (k.value = o)
        } else c && (k.value = +c.call(g, f, h) || 0)
        return k
      }

      function f(a, b) {
        var d = a.children,
          e = 0
        if (d && (i = d.length)) {
          var h = -1,
            i,
            j = b + 1
          while (++h < i) e += f(d[h], j)
        } else c && (e = +c.call(g, E ? a : a.data, b) || 0)
        return c && (a.value = e), e
      }

      function g(a) {
        var b = []
        return e(a, 0, b), b
      }
      var a = C,
        b = A,
        c = B
      return (
        (g.sort = function (b) {
          return arguments.length ? ((a = b), g) : a
        }),
        (g.children = function (a) {
          return arguments.length ? ((b = a), g) : b
        }),
        (g.value = function (a) {
          return arguments.length ? ((c = a), g) : c
        }),
        (g.revalue = function (a) {
          return f(a, 0), a
        }),
        g
      )
    })
  var E = !1
  ;(d3.layout.pack = function () {
    function c(c, d) {
      var e = a.call(this, c, d),
        f = e[0]
      ;(f.x = 0), (f.y = 0), M(f)
      var g = b[0],
        h = b[1],
        i = 1 / Math.max((2 * f.r) / g, (2 * f.r) / h)
      return N(f, g / 2, h / 2, i), e
    }
    var a = d3.layout.hierarchy().sort(F),
      b = [1, 1]
    return (
      (c.size = function (a) {
        return arguments.length ? ((b = a), c) : b
      }),
      z(c, a)
    )
  }),
    (d3.layout.cluster = function () {
      function d(d, e) {
        var f = a.call(this, d, e),
          g = f[0],
          h,
          i = 0,
          j,
          k
        $(g, function (a) {
          var c = a.children
          c && c.length
            ? ((a.x = Q(c)), (a.y = P(c)))
            : ((a.x = h ? (i += b(a, h)) : 0), (a.y = 0), (h = a))
        })
        var l = R(g),
          m = S(g),
          n = l.x - b(l, m) / 2,
          o = m.x + b(m, l) / 2
        return (
          $(g, function (a) {
            ;(a.x = ((a.x - n) / (o - n)) * c[0]), (a.y = (1 - (g.y ? a.y / g.y : 1)) * c[1])
          }),
          f
        )
      }
      var a = d3.layout.hierarchy().sort(null).value(null),
        b = T,
        c = [1, 1]
      return (
        (d.separation = function (a) {
          return arguments.length ? ((b = a), d) : b
        }),
        (d.size = function (a) {
          return arguments.length ? ((c = a), d) : c
        }),
        z(d, a)
      )
    }),
    (d3.layout.tree = function () {
      function d(d, e) {
        function h(a, c) {
          var d = a.children,
            e = a._tree
          if (d && (f = d.length)) {
            var f,
              g = d[0],
              i,
              k = g,
              l,
              m = -1
            while (++m < f) (l = d[m]), h(l, i), (k = j(l, i, k)), (i = l)
            _(a)
            var n = 0.5 * (g._tree.prelim + l._tree.prelim)
            c ? ((e.prelim = c._tree.prelim + b(a, c)), (e.mod = e.prelim - n)) : (e.prelim = n)
          } else c && (e.prelim = c._tree.prelim + b(a, c))
        }

        function i(a, b) {
          a.x = a._tree.prelim + b
          var c = a.children
          if (c && (e = c.length)) {
            var d = -1,
              e
            b += a._tree.mod
            while (++d < e) i(c[d], b)
          }
        }

        function j(a, c, d) {
          if (c) {
            var e = a,
              f = a,
              g = c,
              h = a.parent.children[0],
              i = e._tree.mod,
              j = f._tree.mod,
              k = g._tree.mod,
              l = h._tree.mod,
              m
            while (((g = V(g)), (e = U(e)), g && e))
              (h = U(h)),
                (f = V(f)),
                (f._tree.ancestor = a),
                (m = g._tree.prelim + k - e._tree.prelim - i + b(g, e)),
                m > 0 && (ba(bb(g, a, d), a, m), (i += m), (j += m)),
                (k += g._tree.mod),
                (i += e._tree.mod),
                (l += h._tree.mod),
                (j += f._tree.mod)
            g && !V(f) && ((f._tree.thread = g), (f._tree.mod += k - j)),
              e && !U(h) && ((h._tree.thread = e), (h._tree.mod += i - l), (d = a))
          }
          return d
        }
        var f = a.call(this, d, e),
          g = f[0]
        $(g, function (a, b) {
          a._tree = {
            ancestor: a,
            prelim: 0,
            mod: 0,
            change: 0,
            shift: 0,
            number: b ? b._tree.number + 1 : 0,
          }
        }),
          h(g),
          i(g, -g._tree.prelim)
        var k = W(g, Y),
          l = W(g, X),
          m = W(g, Z),
          n = k.x - b(k, l) / 2,
          o = l.x + b(l, k) / 2,
          p = m.depth || 1
        return (
          $(g, function (a) {
            ;(a.x = ((a.x - n) / (o - n)) * c[0]), (a.y = (a.depth / p) * c[1]), delete a._tree
          }),
          f
        )
      }
      var a = d3.layout.hierarchy().sort(null).value(null),
        b = T,
        c = [1, 1]
      return (
        (d.separation = function (a) {
          return arguments.length ? ((b = a), d) : b
        }),
        (d.size = function (a) {
          return arguments.length ? ((c = a), d) : c
        }),
        z(d, a)
      )
    }),
    (d3.layout.treemap = function () {
      function i(a, b) {
        var c = -1,
          d = a.length,
          e,
          f
        while (++c < d)
          (f = (e = a[c]).value * (b < 0 ? 0 : b)), (e.area = isNaN(f) || f <= 0 ? 0 : f)
      }

      function j(a) {
        var b = a.children
        if (b && b.length) {
          var c = e(a),
            d = [],
            f = b.slice(),
            g,
            h = Infinity,
            k,
            n = Math.min(c.dx, c.dy),
            o
          i(f, (c.dx * c.dy) / a.value), (d.area = 0)
          while ((o = f.length) > 0)
            d.push((g = f[o - 1])),
              (d.area += g.area),
              (k = l(d, n)) <= h
                ? (f.pop(), (h = k))
                : ((d.area -= d.pop().area),
                  m(d, n, c, !1),
                  (n = Math.min(c.dx, c.dy)),
                  (d.length = d.area = 0),
                  (h = Infinity))
          d.length && (m(d, n, c, !0), (d.length = d.area = 0)), b.forEach(j)
        }
      }

      function k(a) {
        var b = a.children
        if (b && b.length) {
          var c = e(a),
            d = b.slice(),
            f,
            g = []
          i(d, (c.dx * c.dy) / a.value), (g.area = 0)
          while ((f = d.pop()))
            g.push(f),
              (g.area += f.area),
              f.z != null && (m(g, f.z ? c.dx : c.dy, c, !d.length), (g.length = g.area = 0))
          b.forEach(k)
        }
      }

      function l(a, b) {
        var c = a.area,
          d,
          e = 0,
          f = Infinity,
          g = -1,
          i = a.length
        while (++g < i) {
          if (!(d = a[g].area)) continue
          d < f && (f = d), d > e && (e = d)
        }
        return (c *= c), (b *= b), c ? Math.max((b * e * h) / c, c / (b * f * h)) : Infinity
      }

      function m(a, c, d, e) {
        var f = -1,
          g = a.length,
          h = d.x,
          i = d.y,
          j = c ? b(a.area / c) : 0,
          k
        if (c == d.dx) {
          if (e || j > d.dy) j = d.dy
          while (++f < g)
            (k = a[f]),
              (k.x = h),
              (k.y = i),
              (k.dy = j),
              (h += k.dx = Math.min(d.x + d.dx - h, j ? b(k.area / j) : 0))
          ;(k.z = !0), (k.dx += d.x + d.dx - h), (d.y += j), (d.dy -= j)
        } else {
          if (e || j > d.dx) j = d.dx
          while (++f < g)
            (k = a[f]),
              (k.x = h),
              (k.y = i),
              (k.dx = j),
              (i += k.dy = Math.min(d.y + d.dy - i, j ? b(k.area / j) : 0))
          ;(k.z = !1), (k.dy += d.y + d.dy - i), (d.x += j), (d.dx -= j)
        }
      }

      function n(b) {
        var d = g || a(b),
          e = d[0]
        return (
          (e.x = 0),
          (e.y = 0),
          (e.dx = c[0]),
          (e.dy = c[1]),
          g && a.revalue(e),
          i([e], (e.dx * e.dy) / e.value),
          (g ? k : j)(e),
          f && (g = d),
          d
        )
      }
      var a = d3.layout.hierarchy(),
        b = Math.round,
        c = [1, 1],
        d = null,
        e = bc,
        f = !1,
        g,
        h = 0.5 * (1 + Math.sqrt(5))
      return (
        (n.size = function (a) {
          return arguments.length ? ((c = a), n) : c
        }),
        (n.padding = function (a) {
          function b(b) {
            var c = a.call(n, b, b.depth)
            return c == null ? bc(b) : bd(b, typeof c == 'number' ? [c, c, c, c] : c)
          }

          function c(b) {
            return bd(b, a)
          }
          if (!arguments.length) return d
          var f
          return (
            (e =
              (d = a) == null
                ? bc
                : (f = typeof a) === 'function'
                ? b
                : f === 'number'
                ? ((a = [a, a, a, a]), c)
                : c),
            n
          )
        }),
        (n.round = function (a) {
          return arguments.length ? ((b = a ? Math.round : Number), n) : b != Number
        }),
        (n.sticky = function (a) {
          return arguments.length ? ((f = a), (g = null), n) : f
        }),
        (n.ratio = function (a) {
          return arguments.length ? ((h = a), n) : h
        }),
        z(n, a)
      )
    })
})()

/********************************
 ** FILE: lib/nytg.js
 ********************************/

var nytg = nytg || {}

nytg.formatNumber = function (n, decimals) {
  var s, remainder, num, negativePrefix, negativeSuffix, prefix, suffix
  suffix = ''
  negativePrefix = ''
  negativeSuffix = ''
  if (n < 0) {
    negativePrefix = ''
    negativeSuffix = ' in income'
    n = -n
  }

  if (n >= 1000000000000) {
    suffix = ' trillion'
    n = n / 1000000000000
    decimals = 2
  } else if (n >= 1000000000) {
    suffix = ' billion'
    n = n / 1000000000
    decimals = 1
  } else if (n >= 1000000) {
    suffix = ' million'
    n = n / 1000000
    decimals = 1
  }

  prefix = ''
  if (decimals > 0) {
    if (n < 1) {
      prefix = '0'
    }
    s = String(Math.round(n * Math.pow(10, decimals)))
    if (s < 10) {
      remainder = '0' + s.substr(s.length - decimals, decimals)
      num = ''
    } else {
      remainder = s.substr(s.length - decimals, decimals)
      num = s.substr(0, s.length - decimals)
    }

    return (
      negativePrefix +
      prefix +
      num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') +
      '.' +
      remainder +
      suffix +
      negativeSuffix
    )
  } else {
    s = String(Math.round(n))
    s = s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    return negativePrefix + s + suffix + negativeSuffix
  }
}

/********************************
 ** FILE: Chart.js
 ********************************/

var nytg = nytg || {}

nytg.Chart = function () {
  return {
    $j: jQuery,
    //defaults
    width: 970,
    height: 850,
    groupPadding: 10,
    totalValue: 3700000000,
    deficitValue: 901000000,
    // CONST
    MANDATORY: 'Mandatory',
    DISCRETIONARY: 'Discretionary',
    NET_INTEREST: 'Net interest',

    //will be calculated later
    boundingRadius: null,
    maxRadius: null,
    centerX: null,
    centerY: null,
    scatterPlotY: null,

    //d3 settings
    defaultGravity: 0.1,
    defaultCharge: function (d) {
      if (d.value < 0) {
        return 0
      } else {
        return -Math.pow(d.radius, 2.0) / 8
      }
    },
    links: [],
    nodes: [],
    positiveNodes: [],
    force: {},
    svg: {},
    circle: {},
    gravity: null,
    charge: null,
    changeTickValues: [-0.25, -0.15, -0.05, 0.05, 0.15, 0.25],
    categorizeChange: function (c) {
      if (isNaN(c)) {
        return 0
      } else if (c < -0.25) {
        return -3
      } else if (c < -0.05) {
        return -2
      } else if (c < -0.001) {
        return -1
      } else if (c <= 0.001) {
        return 0
      } else if (c <= 0.05) {
        return 1
      } else if (c <= 0.25) {
        return 2
      } else {
        return 3
      }
    },
    fillColor: d3.scale
      .ordinal()
      .domain([-3, -2, -1, 0, 1, 2, 3])
      .range(['#d84b2a', '#ee9586', '#e4b7b2', '#AAA', '#beccae', '#9caf84', '#7aa25c']),
    strokeColor: d3.scale
      .ordinal()
      .domain([-3, -2, -1, 0, 1, 2, 3])
      .range(['#c72d0a', '#e67761', '#d9a097', '#999', '#a7bb8f', '#7e965d', '#5a8731']),
    getFillColor: null,
    getStrokeColor: null,
    pFormat: d3.format('+.1%'),
    pctFormat: function () {
      return false
    },
    tickChangeFormat: d3.format('+%'),
    simpleFormat: d3.format(','),
    simpleDecimal: d3.format(',.2f'),

    bigFormat: function (n) {
      return nytg.formatNumber(n * 1000)
    },
    nameFormat: function (n) {
      return n
    },
    discretionFormat: function (d) {
      if (d == 'Discretionary' || d == 'Mandatory') {
        return d + ' spending'
      } else {
        return d
      }
    },

    rScale: d3.scale.pow().exponent(0.5).domain([0, 1000000000]).range([1, 90]),
    radiusScale: null,
    changeScale: d3.scale.linear().domain([-0.28, 0.28]).range([620, 180]).clamp(true),
    sizeScale: d3.scale.linear().domain([0, 110]).range([0, 1]),
    groupScale: {},

    //data settings
    currentYearDataColumn: 'budget_2013',
    previousYearDataColumn: 'budget_2012',
    data: nytg.budget_array_data,
    categoryPositionLookup: {},
    categoriesList: [],

    //
    //
    //
    init: function () {
      var that = this

      this.scatterPlotY = this.changeScale(0)

      this.pctFormat = function (p) {
        if (p === Infinity || p === -Infinity) {
          return 'N.A.'
        } else {
          return that.pFormat(p)
        }
      }

      this.radiusScale = function (n) {
        return that.rScale(Math.abs(n))
      }
      this.getStrokeColor = function (d) {
        // if (d.isNegative) {
        //   return "#333"
        // }
        return that.strokeColor(d.changeCategory)
      }
      this.getFillColor = function (d) {
        if (d.isNegative) {
          return '#fff'
        }
        return that.fillColor(d.changeCategory)
      }

      this.boundingRadius = this.radiusScale(this.totalValue)
      this.centerX = this.width / 2
      this.centerY = 300

      nytg.category_data.sort(function (a, b) {
        return b['total'] - a['total']
      })

      //calculates positions of the category clumps
      //it is probably overly complicated
      var columns = [4, 7, 9, 9]
      ;(rowPadding = [150, 100, 90, 80, 70]),
        (rowPosition = [220, 450, 600, 720, 817]),
        (rowOffsets = [130, 80, 60, 45, 48])
      ;(currentX = 0), (currentY = 0)
      for (var i = 0; i < nytg.category_data.length; i++) {
        var t = 0,
          w,
          numInRow = -1,
          positionInRow = -1,
          currentRow = -1,
          cat = nytg.category_data[i]['label']
        // calc num in this row
        for (var j = 0; j < columns.length; j++) {
          if (i < t + columns[j]) {
            numInRow = columns[j]
            positionInRow = i - t
            currentRow = j
            break
          }
          t += columns[j]
        }
        if (numInRow === -1) {
          numInRow = nytg.category_data.length - d3.sum(columns)
          currentRow = columns.length
          positionInRow = i - d3.sum(columns)
        }
        nytg.category_data[i].row = currentRow
        nytg.category_data[i].column = positionInRow
        w = (this.width - 2 * rowPadding[currentRow]) / (numInRow - 1)
        currentX = w * positionInRow + rowPadding[currentRow]
        currentY = rowPosition[currentRow]
        this.categoriesList.push(cat)
        this.categoryPositionLookup[cat] = {
          x: currentX,
          y: currentY,
          w: w * 0.9,
          offsetY: rowOffsets[currentRow],
          numInRow: numInRow,
          positionInRow: positionInRow,
        }
      }

      //
      this.groupScale = d3.scale.ordinal().domain(this.categoriesList).rangePoints([0, 1])

      // Builds the nodes data array from the original data
      for (var i = 0; i < this.data.length; i++) {
        var n = this.data[i]
        var out = {
          sid: n['id'],
          radius: this.radiusScale(n[this.currentYearDataColumn]),
          group: n['department'],
          change: n['change'],
          changeCategory: this.categorizeChange(n['change']),
          value: n[this.currentYearDataColumn],
          name: n['name'],
          discretion: n['discretion'],
          isNegative: n[this.currentYearDataColumn] < 0,
          positions: n.positions,
          x: Math.random() * 1000,
          y: Math.random() * 1000,
        }
        if (n.positions.total) {
          out.x = n.positions.total.x + (n.positions.total.x - that.width / 2) * 0.5
          out.y = n.positions.total.y + (n.positions.total.y - 150) * 0.5
        }
        if (n[this.currentYearDataColumn] > 0 !== n[this.previousYearDataColumn] > 0) {
          out.change = 'N.A.'
          out.changeCategory = 0
        }
        this.nodes.push(out)
      }

      this.nodes.sort(function (a, b) {
        return Math.abs(b.value) - Math.abs(a.value)
      })

      for (var i = 0; i < this.nodes.length; i++) {
        if (!this.nodes[i].isNegative) {
          this.positiveNodes.push(this.nodes[i])
        }
      }

      this.svg = d3.select('#nytg-chartCanvas').append('svg:svg').attr('width', this.width)

      for (var i = 0; i < this.changeTickValues.length; i++) {
        d3.select('#nytg-discretionaryOverlay')
          .append('div')
          .html('<p>' + this.tickChangeFormat(this.changeTickValues[i]) + '</p>')
          .style('top', this.changeScale(this.changeTickValues[i]) + 'px')
          .classed('nytg-discretionaryTick', true)
          .classed('nytg-discretionaryZeroTick', this.changeTickValues[i] === 0)
      }
      d3.select('#nytg-discretionaryOverlay')
        .append('div')
        .html('<p></p>')
        .style('top', this.changeScale(0) + 'px')
        .classed('nytg-discretionaryTick', true)
        .classed('nytg-discretionaryZeroTick', true)
      d3.select('#nytg-discretionaryOverlay')
        .append('div')
        .html('<p>+26% or higher</p>')
        .style('top', this.changeScale(100) + 'px')
        .classed('nytg-discretionaryTickLabel', true)
      d3.select('#nytg-discretionaryOverlay')
        .append('div')
        .html('<p>&minus;26% or lower</p>')
        .style('top', this.changeScale(-100) + 'px')
        .classed('nytg-discretionaryTickLabel', true)

      // total circle
      // this.svg.append("circle")
      //   .attr('r', this.radiusScale(this.totalValue))
      //   .style("stroke-width",1)
      //   .style('stroke',"#AAA")
      //   .style('fill','none')
      //   .attr('cx', this.width/2)
      //   .attr('cy', this.height/2);

      // deficit circle
      d3.select('#nytg-deficitCircle')
        .append('circle')
        .attr('r', this.radiusScale(this.deficitValue))
        .attr('class', 'nytg-deficitCircle')
        .attr('cx', 125)
        .attr('cy', 125)

      d3.select('#nytg-scaleKey')
        .append('circle')
        .attr('r', this.radiusScale(100000000))
        .attr('class', 'nytg-scaleKeyCircle')
        .attr('cx', 30)
        .attr('cy', 30)
      d3.select('#nytg-scaleKey')
        .append('circle')
        .attr('r', this.radiusScale(10000000))
        .attr('class', 'nytg-scaleKeyCircle')
        .attr('cx', 30)
        .attr('cy', 50)
      d3.select('#nytg-scaleKey')
        .append('circle')
        .attr('r', this.radiusScale(1000000))
        .attr('class', 'nytg-scaleKeyCircle')
        .attr('cx', 30)
        .attr('cy', 55)

      var departmentOverlay = $j('#nytg-departmentOverlay')

      for (var i = 0; i < nytg.category_data.length; i++) {
        var cat = nytg.category_data[i]['label']
        var catLabel = nytg.category_data[i]['short_label']
        var catTot = this.bigFormat(nytg.category_data[i]['total'])
        var catWidth = this.categoryPositionLookup[cat].w
        var catYOffset = this.categoryPositionLookup[cat].offsetY
        var catNode
        if (catLabel === 'Other') {
          catNode = $j(
            "<div class='nytg-departmentAnnotation nytg-row" +
              nytg.category_data[i]['row'] +
              "'><p class='department'>" +
              catLabel +
              '</p></div>'
          )
        } else {
          catNode = $j(
            "<div class='nytg-departmentAnnotation nytg-row" +
              nytg.category_data[i]['row'] +
              "'><p class='total'>$" +
              catTot +
              "</p><p class='department'>" +
              catLabel +
              '</p></div>'
          )
        }
        catNode.css({
          left: this.categoryPositionLookup[cat].x - catWidth / 2,
          top: this.categoryPositionLookup[cat].y - catYOffset,
          width: catWidth,
        })
        departmentOverlay.append(catNode)
      }

      // This is the every circle
      this.circle = this.svg.selectAll('circle').data(this.nodes, function (d) {
        return d.sid
      })

      this.circle
        .enter()
        .append('svg:circle')
        .attr('r', function (d) {
          return 0
        })
        .style('fill', function (d) {
          return that.getFillColor(d)
        })
        .style('stroke-width', 1)
        .attr('id', function (d) {
          return 'nytg-circle' + d.sid
        })
        .style('stroke', function (d) {
          return that.getStrokeColor(d)
        })
        .on('mouseover', function (d, i) {
          var el = d3.select(this)
          var xpos = Number(el.attr('cx')) + 50
          var ypos = el.attr('cy') - d.radius + 75
          el.style('stroke', '#000').style('stroke-width', 3)
          d3.select('#nytg-tooltip')
            .style('top', ypos + 'px')
            .style('left', xpos + 'px')
            .style('display', 'block')
            .classed('nytg-plus', d.changeCategory > 0)
            .classed('nytg-minus', d.changeCategory < 0)
          d3.select('#nytg-tooltip .nytg-name').html(that.nameFormat(d.name))

          d3.select('#nytg-tooltip .nytg-discretion').text(that.discretionFormat(d.discretion))
          d3.select('#nytg-tooltip .nytg-department').text(d.group)
          d3.select('#nytg-tooltip .nytg-value').html('$' + that.bigFormat(d.value))

          var pctchngout = that.pctFormat(d.change)
          if (d.change == 'N.A.') {
            pctchngout = 'N.A.'
          }
          d3.select('#nytg-tooltip .nytg-change').html(pctchngout)
        })
        .on('mouseout', function (d, i) {
          d3.select(this)
            .style('stroke-width', 1)
            .style('stroke', function (d) {
              return that.getStrokeColor(d)
            })
          d3.select('#nytg-tooltip').style('display', 'none')
        })

      this.circle
        .transition()
        .duration(2000)
        .attr('r', function (d) {
          return d.radius
        })
    },

    //
    //
    //
    getCirclePositions: function () {
      var that = this
      var circlePositions = {}
      this.circle.each(function (d) {
        circlePositions[d.sid] = {
          x: Math.round(d.x),
          y: Math.round(d.y),
        }
      })
      return JSON.stringify(circlePositions)
    },

    //
    //
    //
    start: function () {
      var that = this

      this.force = d3.layout.force().nodes(this.nodes).size([this.width, this.height])

      // this.circle.call(this.force.drag)
    },

    //
    //
    //
    totalLayout: function () {
      var that = this
      this.force
        .gravity(-0.01)
        .charge(that.defaultCharge)
        .friction(0.9)
        .on('tick', function (e) {
          that.circle
            .each(that.totalSort(e.alpha))
            .each(that.buoyancy(e.alpha))
            .attr('cx', function (d) {
              return d.x
            })
            .attr('cy', function (d) {
              return d.y
            })
        })
        .start()
    },

    //
    //
    //
    mandatoryLayout: function () {
      var that = this
      this.force
        .gravity(0)
        .friction(0.9)
        .charge(that.defaultCharge)
        .on('tick', function (e) {
          that.circle
            .each(that.mandatorySort(e.alpha))
            .each(that.buoyancy(e.alpha))
            .attr('cx', function (d) {
              return d.x
            })
            .attr('cy', function (d) {
              return d.y
            })
        })
        .start()
    },

    //
    //
    //
    discretionaryLayout: function () {
      var that = this
      this.force
        .gravity(0)
        .charge(0)
        .friction(0.2)
        .on('tick', function (e) {
          that.circle
            .each(that.discretionarySort(e.alpha))
            .attr('cx', function (d) {
              return d.x
            })
            .attr('cy', function (d) {
              return d.y
            })
        })
        .start()
    },

    //
    //
    //
    departmentLayout: function () {
      var that = this
      this.force
        .gravity(0)
        .charge(1)
        .friction(0)
        .on('tick', function (e) {
          that.circle
            // .each(that.departmentSort(e.alpha))
            // .each(that.collide(0.5))
            .each(that.staticDepartment(e.alpha))
            .attr('cx', function (d) {
              return d.x
            })
            .attr('cy', function (d) {
              return d.y
            })
        })
        .start()
    },

    //
    //
    //
    comparisonLayout: function () {
      var that = this
      this.force
        .gravity(0)
        .charge(that.defaultCharge)
        .friction(0.9)
        .on('tick', function (e) {
          that.circle
            .each(that.comparisonSort(e.alpha))
            .attr('cx', function (d) {
              return d.x
            })
            .attr('cy', function (d) {
              return d.y
            })
        })
        .start()
    },

    // ----------------------------------------------------------------------------------------
    // FORCES
    // ----------------------------------------------------------------------------------------

    //
    //
    //
    totalSort: function (alpha) {
      var that = this
      return function (d) {
        var targetY = that.centerY
        var targetX = that.width / 2

        if (d.isNegative) {
          if (d.changeCategory > 0) {
            d.x = -200
          } else {
            d.x = 1100
          }
        }

        // if (d.positions.total) {
        //   targetX = d.positions.total.x
        //   targetY = d.positions.total.y
        // };

        //
        d.y = d.y + (targetY - d.y) * (that.defaultGravity + 0.02) * alpha
        d.x = d.x + (targetX - d.x) * (that.defaultGravity + 0.02) * alpha
      }
    },

    //
    //
    //
    buoyancy: function (alpha) {
      var that = this
      return function (d) {
        // d.y -= 1000 * alpha * alpha * alpha * d.changeCategory

        // if (d.changeCategory >= 0) {
        //   d.y -= 1000 * alpha * alpha * alpha
        // } else {
        //   d.y += 1000 * alpha * alpha * alpha
        // }

        var targetY = that.centerY - (d.changeCategory / 3) * that.boundingRadius
        d.y = d.y + (targetY - d.y) * that.defaultGravity * alpha * alpha * alpha * 100
      }
    },

    //
    //
    //
    mandatorySort: function (alpha) {
      var that = this
      return function (d) {
        var targetY = that.centerY
        var targetX = 0

        if (d.isNegative) {
          if (d.changeCategory > 0) {
            d.x = -200
          } else {
            d.x = 1100
          }
          return
        }

        if (d.discretion === that.DISCRETIONARY) {
          targetX = 550
        } else if (d.discretion === that.MANDATORY || d.discretion === that.NET_INTEREST) {
          targetX = 400
        } else {
          targetX = 900
        }

        d.y = d.y + (targetY - d.y) * that.defaultGravity * alpha * 1.1
        d.x = d.x + (targetX - d.x) * that.defaultGravity * alpha * 1.1
      }
    },

    //
    //
    //
    discretionarySort: function (alpha) {
      var that = this
      return function (d) {
        var targetY = that.height / 2
        var targetX = 0

        if (d.isNegative) {
          if (d.changeCategory > 0) {
            d.x = -200
          } else {
            d.x = 1100
          }
          return
        }

        if (d.discretion === 'Discretionary') {
          targetY = that.changeScale(d.change)
          targetX = 100 + that.groupScale(d.group) * (that.width - 120)
          if (isNaN(targetY)) {
            targetY = that.centerY
          }
          if (targetY > that.height - 80) {
            targetY = that.height - 80
          }
          if (targetY < 80) {
            targetY = 80
          }
        } else if (d.discretion === 'Mandatory' || d.discretion === 'Net interest') {
          targetX = -300 + Math.random() * 100
          targetY = d.y
        } else {
          targetX = 0
        }

        d.y = d.y + (targetY - d.y) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.2
        d.x = d.x + (targetX - d.x) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.1
      }
    },

    //
    //
    //
    departmentSort: function (alpha) {
      var that = this
      return function (d) {
        var targetY = 0,
          targetX = 0

        if (that.categoryPositionLookup[d.group]) {
          targetY = that.categoryPositionLookup[d.group].y
          targetX = that.categoryPositionLookup[d.group].x
        } else {
        }

        var r = Math.max(5, d.radius)
        d.y = d.y + (targetY - d.y) * that.defaultGravity * alpha * 0.5 * r
        d.x = d.x + (targetX - d.x) * that.defaultGravity * alpha * 0.5 * r
      }
    },

    //
    //
    //
    staticDepartment: function (alpha) {
      var that = this
      return function (d) {
        var targetY = 0
        var targetX = 0

        if (d.positions.department) {
          targetX = d.positions.department.x
          targetY = d.positions.department.y
        }

        d.y += (targetY - d.y) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.6
        d.x += (targetX - d.x) * Math.sin(Math.PI * (1 - alpha * 10)) * 0.4
      }
    },

    //
    //
    //
    comparisonSort: function (alpha) {
      var that = this
      return function (d) {
        var targetY = that.height / 2
        var targetX = 650

        d.y = d.y + (targetY - d.y) * that.defaultGravity * alpha
        d.x = d.x + (targetX - d.x) * that.defaultGravity * alpha
      }
    },

    //
    //
    //
    collide: function (alpha) {
      var that = this
      var padding = 6
      var quadtree = d3.geom.quadtree(this.nodes)
      return function (d) {
        var r = d.radius + that.maxRadius + padding,
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r
        quadtree.visit(function (quad, x1, y1, x2, y2) {
          if (quad.point && quad.point !== d && d.group === quad.point.group) {
            var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius
            if (l < r) {
              l = ((l - r) / l) * alpha
              d.x -= x *= l
              d.y -= y *= l
              quad.point.x += x
              quad.point.y += y
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1
        })
      }
    },
  }
}

/********************************
 ** FILE: ChooseList.js
 ********************************/

var nytg = nytg || {}
var $j = jQuery

nytg.ChooseList = function (node, changeCallback) {
  this.container = $j(node)
  this.selectedNode = null
  this.currentIndex = null
  this.onChange = changeCallback
  this.elements = this.container.find('li')
  this.container.find('li').on('click', $j.proxy(this.onClickHandler, this))
  this.selectByIndex(0)
}

nytg.ChooseList.prototype.onClickHandler = function (evt) {
  evt.preventDefault()
  this.selectByElement(evt.currentTarget)
}

nytg.ChooseList.prototype.selectByIndex = function (i) {
  this.selectByElement(this.elements[i])
}

nytg.ChooseList.prototype.selectByElement = function (el) {
  if (this.selectedNode) {
    $j(this.selectedNode).removeClass('selected')
  }
  $j(el).addClass('selected')
  for (var i = 0; i < this.elements.length; i++) {
    if (this.elements[i] === el) {
      this.currentIndex = i
    }
  }
  this.selectedNode = el
  this.onChange(this)
}
