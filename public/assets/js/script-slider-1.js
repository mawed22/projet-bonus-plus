/**
 * @module       jQuery
 * @author       jQuery Foundation and other contributors
 * @see          https://code.jquery.com/jquery/
 * @license      MIT (jquery.org/license)
 * @version      3.2.1
 */
! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

    function o(e, t, n) { return he.isFunction(t) ? he.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? he.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? he.grep(e, function(e) { return ae.call(t, e) > -1 !== n }) : Ee.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) { return ae.call(t, e) > -1 !== n && 1 === e.nodeType })) }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) { var t = {}; return he.each(e.match(je) || [], function(e, n) { t[n] = !0 }), t }

    function u(e) { return e }

    function l(e) { throw e }

    function c(e, t, n, r) { var i; try { e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }

    function f() { te.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready() }

    function p() { this.expando = he.expando + p.uid++ }

    function d(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e) }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = d(n) } catch (e) {}
                Oe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function g(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() { return r.cur() } : function() { return he.css(e, t, "") },
            u = s(),
            l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            c = (he.cssNumber[t] || "px" !== l && +u) && Ie.exec(he.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do { o = o || ".5", c /= o, he.style(e, t, c + l) } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function v(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = _e[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), _e[r] = i, i)
    }

    function m(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Fe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && $e(r) && (i[o] = v(r))) : "none" !== n && (i[o] = "none", Fe.set(r, "display", n))); for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]); return e }

    function y(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? he.merge([e], n) : n }

    function x(e, t) { for (var n = 0, r = e.length; n < r; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval")) }

    function b(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o);
                else if (Ge.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = Ve[s] || Ve._default, a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            he.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && he.inArray(o, r) > -1) i && i.push(o);
            else if (l = he.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), l && x(a), n)
            for (c = 0; o = a[c++];) Ue.test(o.type || "") && n.push(o);
        return f
    }

    function w() { return !0 }

    function T() { return !1 }

    function C() { try { return te.activeElement } catch (e) {} }

    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) E(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = T;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) { return he().off(e), a.apply(this, arguments) }, i.guid = a.guid || (a.guid = he.guid++)), e.each(function() { he.event.add(this, t, i, r, n) })
    }

    function k(e, t) { return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e }

    function S(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function N(e) { var t = nt.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function D(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Fe.hasData(e) && (o = Fe.access(e), a = Fe.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) he.event.add(t, i, l[i][n])
            }
            Oe.hasData(e) && (s = Oe.access(e), u = he.extend({}, s), Oe.set(t, u))
        }
    }

    function j(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function A(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = he.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !pe.checkClone && tt.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), A(o, t, r, i)
        });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (u = (s = he.map(y(o, "script"), S)).length; f < p; f++) l = o, f !== d && (l = he.clone(l, !0, !0), u && he.merge(s, y(l, "script"))), r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, he.map(s, N), f = 0; f < u; f++) l = s[f], Ue.test(l.type || "") && !Fe.access(l, "globalEval") && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(rt, ""), c))
        }
        return e
    }

    function q(e, t, n) { for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)), r.parentNode && (n && he.contains(r.ownerDocument, r) && x(y(r, "script")), r.parentNode.removeChild(r)); return e }

    function L(e, t, n) { var r, i, o, a, s = e.style; return (n = n || at(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && ot.test(a) && it.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function H(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function F(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
            if ((e = ft[n] + t) in pt) return e
    }

    function O(e) { var t = he.cssProps[e]; return t || (t = he.cssProps[e] = F(e) || e), t }

    function P(e, t, n) { var r = Ie.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function R(e, t, n, r, i) { var o, a = 0; for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += he.css(e, n + We[o], !0, i)), r ? ("content" === n && (a -= he.css(e, "padding" + We[o], !0, i)), "margin" !== n && (a -= he.css(e, "border" + We[o] + "Width", !0, i))) : (a += he.css(e, "padding" + We[o], !0, i), "padding" !== n && (a += he.css(e, "border" + We[o] + "Width", !0, i))); return a }

    function M(e, t, n) {
        var r, i = at(e),
            o = L(e, t, i),
            a = "border-box" === he.css(e, "boxSizing", !1, i);
        return ot.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + R(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function I(e, t, n, r, i) { return new I.prototype.init(e, t, n, r, i) }

    function W() { ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, he.fx.interval), he.fx.tick()) }

    function $() { return e.setTimeout(function() { dt = void 0 }), dt = he.now() }

    function B(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = We[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function _(e, t, n) {
        for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function z(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = he.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = he.cssHooks[r]) && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i
    }

    function X(e, t, n) {
        var r, i, o = 0,
            a = X.prefilters.length,
            s = he.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = dt || $(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
            l = s.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: dt || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (z(c, l.opts.specialEasing); o < a; o++)
            if (r = X.prefilters[o].call(l, e, c, l.opts)) return he.isFunction(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(r.stop, r)), r;
        return he.map(c, _, l), he.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), he.fx.timer(he.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l
    }

    function U(e) { return (e.match(je) || []).join(" ") }

    function V(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function G(e, t, n, r) {
        var i;
        if (Array.isArray(t)) he.each(t, function(t, i) { n || St.test(e) ? r(e, i) : G(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== he.type(t)) r(e, t);
        else
            for (i in t) G(e + "[" + i + "]", t[i], n, r)
    }

    function Y(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(je) || [];
            if (he.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Q(e, t, n, r) {
        function i(s) { var u; return o[s] = !0, he.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) }), u }
        var o = {},
            a = e === Mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function J(e, t) { var n, r, i = he.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && he.extend(!0, e, r), e }

    function K(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) { u.unshift(i); break }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Z(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
        }
        return { state: "success", data: t }
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        re = ee.slice,
        ie = ee.concat,
        oe = ee.push,
        ae = ee.indexOf,
        se = {},
        ue = se.toString,
        le = se.hasOwnProperty,
        ce = le.toString,
        fe = ce.call(Object),
        pe = {},
        de = "3.2.1",
        he = function(e, t) { return new he.fn.init(e, t) },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        me = /-([a-z])/g,
        ye = function(e, t) { return t.toUpperCase() };
    he.fn = he.prototype = {
        jquery: de,
        constructor: he,
        length: 0,
        toArray: function() { return re.call(this) },
        get: function(e) { return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = he.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return he.each(this, e) },
        map: function(e) { return this.pushStack(he.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(re.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, he.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isFunction: function(e) { return "function" === he.type(e) },
        isWindow: function(e) { return null != e && e === e.window },
        isNumeric: function(e) { var t = he.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) },
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== ue.call(e) || (t = ne(e)) && ("function" != typeof(n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== fe)) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e },
        globalEval: function(e) { n(e) },
        camelCase: function(e) { return e.replace(ve, "ms-").replace(me, ye) },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(ge, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : ae.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var i, o, a = 0,
                s = [];
            if (r(e))
                for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return ie.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return r = re.call(arguments, 2), i = function() { return e.apply(t || this, r.concat(re.call(arguments))) }, i.guid = e.guid = e.guid || he.guid++, i },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { se["[object " + t + "]"] = t.toLowerCase() });
    var xe = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, p, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t), t = t || q, H)) {
                if (11 !== h && (u = ge.exec(e)))
                    if (i = u[1]) { if (9 === h) { if (!(a = t.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (d && (a = d.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n } else { if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n; if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n }
                if (b.qsa && !z[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h) d = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = M), o = (c = E(e)).length; o--;) c[o] = "#" + s + " " + f(c[o]);
                        p = c.join(","), d = ve.test(e) && l(t.parentNode) || t
                    }
                    if (p) try { return Q.apply(n, d.querySelectorAll(p)), n } catch (e) {} finally { s === M && t.removeAttribute("id") }
                }
            }
            return S(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) { return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r }
            var t = [];
            return e
        }

        function r(e) { return e[M] = !0, e }

        function i(e) { var t = q.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function u(e) { return r(function(t) { return t = +t, r(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function l(e) { return e && void 0 !== e.getElementsByTagName && e }

        function c() {}

        function f(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function p(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = $++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [W, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[M] || (t[M] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((l = c[o]) && l[0] === W && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 } return !1
            }
        }

        function d(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) { for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r); return r }

        function g(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function v(e, t, n, i, o, a) {
            return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    v = a.length,
                    m = r || h(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? m : g(m, p, e, s, u),
                    x = n ? o || (r ? e : v || i) ? [] : a : y;
                if (n && n(y, x, s, u), i)
                    for (l = g(x, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else x = g(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = p(function(e) { return e === t }, a, !0), l = p(function(e) { return K(t, e) > -1 }, a, !0), c = [function(e, n, r) { var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)); return t = null, i }]; s < i; s++)
                if (n = w.relative[e[s].type]) c = [p(d(c), n)];
                else {
                    if ((n = w.filter[e[s].type].apply(null, e[s].matches))[M]) { for (r = ++s; r < i && !w.relative[e[r].type]; r++); return v(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(oe, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e)) }
                    c.push(n)
                }
            return d(c)
        }

        function y(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        v = r && [],
                        m = [],
                        y = N,
                        x = r || o && w.find.TAG("*", l),
                        b = W += null == y ? 1 : Math.random() || .1,
                        T = x.length;
                    for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === q || (A(c), s = !H); p = e[f++];)
                                if (p(c, a || q, s)) { u.push(c); break }
                            l && (W = b)
                        }
                        i && ((c = !p && c) && d--, r && v.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(v, m, a, s);
                        if (r) {
                            if (d > 0)
                                for (; h--;) v[h] || m[h] || (m[h] = G.call(u));
                            m = g(m)
                        }
                        Q.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = b, N = y), v
                };
            return i ? r(a) : a
        }
        var x, b, w, T, C, E, k, S, N, D, j, A, q, L, H, F, O, P, R, M = "sizzle" + 1 * new Date,
            I = e.document,
            W = 0,
            $ = 0,
            B = n(),
            _ = n(),
            z = n(),
            X = function(e, t) { return e === t && (j = !0), 0 },
            U = {}.hasOwnProperty,
            V = [],
            G = V.pop,
            Y = V.push,
            Q = V.push,
            J = V.slice,
            K = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            fe = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + re), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + Z + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
            pe = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            be = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            we = function() { A() },
            Te = p(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { Q.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType } catch (e) {
            Q = {
                apply: V.length ? function(e, t) { Y.apply(e, J.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, A = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, H = !C(q), I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = i(function(e) { return e.className = "i", !e.getAttribute("className") }), b.getElementsByTagName = i(function(e) { return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function(e) { return L.appendChild(e).id = M, !q.getElementsByName || !q.getElementsByName(M).length }), b.getById ? (w.filter.ID = function(e) { var t = e.replace(me, ye); return function(e) { return e.getAttribute("id") === t } }, w.find.ID = function(e, t) { if (void 0 !== t.getElementById && H) { var n = t.getElementById(e); return n ? [n] : [] } }) : (w.filter.ID = function(e) { var t = e.replace(me, ye); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), w.find.TAG = b.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e) }, O = [], F = [], (b.qsa = he.test(q.querySelectorAll)) && (i(function(e) { L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]") }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) { b.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), O.push("!=", re) }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) { if (e === t) return j = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? -1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0
            }, q) : q
        }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && A(e), n = n.replace(ue, "='$1']"), b.matchesSelector && H && !z[n + " "] && (!O || !O.test(n)) && (!F || !F.test(n))) try { var r = P.call(e, n); if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) { return (e.ownerDocument || e) !== q && A(e), R(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && A(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) { return (e + "").replace(xe, be) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(X), j) { for (; t = e[i++];) t === e[i] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) }
            return D = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += T(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                for (; t = e[r++];) n += T(t);
            return n
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(e) { return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
            filter: {
                TAG: function(e) { var t = e.replace(me, ye).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                CLASS: function(e) { var t = B[e + " "]; return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                ATTR: function(e, n, r) { return function(i) { var o = t.attr(i, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-")) } },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (x = (d = (l = (c = (f = (p = v)[M] || (p[M] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === W && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) { c[e] = [W, d, x]; break }
                            } else if (y && (p = t, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === W && l[1], x = d), !1 === x)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [W, x]), p !== t)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) { var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) { for (var r, i = o(e, n), a = i.length; a--;) r = K(e, i[a]), e[r] = !(t[r] = i[a]) }) : function(e) { return o(e, 0, i) }) : o }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(oe, "$1"));
                    return i[M] ? r(function(e, t, n, r) { for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) { return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() }
                }),
                has: r(function(e) { return function(n) { return t(e, n).length > 0 } }),
                contains: r(function(e) {
                    return e = e.replace(me, ye),
                        function(t) { return (t.textContent || t.innerText || T(t)).indexOf(e) > -1 }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do { if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                root: function(e) { return e === L },
                focus: function(e) { return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) { return !w.pseudos.empty(e) },
                header: function(e) { return de.test(e.nodeName) },
                input: function(e) { return pe.test(e.nodeName) },
                button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                first: u(function() { return [0] }),
                last: u(function(e, t) { return [t - 1] }),
                eq: u(function(e, t, n) { return [n < 0 ? n + t : n] }),
                even: u(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                odd: u(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                lt: u(function(e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r); return e }),
                gt: u(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[x] = function(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }(x);
        for (x in { submit: !0, reset: !0 }) w.pseudos[x] = function(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }(x);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function(e, n) { var r, i, o, a, s, u, l, c = _[e + " "]; if (c) return n ? 0 : c.slice(0); for (s = e, u = [], l = w.preFilter; s;) { r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(oe, " ") }), s = s.slice(r.length)); for (a in w.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length)); if (!r) break } return n ? s.length : s ? t.error(e) : _(e, u).slice(0) }, k = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = m(t[n]), o[M] ? r.push(o) : i.push(o);
                (o = z(e, y(i, r))).selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e,
                p = !r && E(e = c.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                    if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n; break }
            }
            return (c || k(e, p))(r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t), n
        }, b.sortStable = M.split("").sort(X).join("") === M, b.detectDuplicates = !!j, A(), b.sortDetached = i(function(e) { return 1 & e.compareDocumentPosition(q.createElement("fieldset")) }), i(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), b.attributes && i(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), i(function(e) { return null == e.getAttribute("disabled") }) || o(Z, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t
    }(e);
    he.find = xe, he.expr = xe.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = xe.uniqueSort, he.text = xe.getText, he.isXMLDoc = xe.isXML, he.contains = xe.contains, he.escapeSelector = xe.escape;
    var be = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && he(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        we = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        Te = he.expr.match.needsContext,
        Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ee = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) { return 1 === e.nodeType })) }, he.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (he.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
            return r > 1 ? he.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(o(this, e || [], !1)) },
        not: function(e) { return this.pushStack(o(this, e || [], !0)) },
        is: function(e) { return !!o(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length }
    });
    var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(r[1]) && he.isPlainObject(t))
                    for (r in t) he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, ke = he(te);
    var Ne = /^(?:parents|prev(?:Until|All))/,
        De = { children: !0, contents: !0, next: !0, prev: !0 };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && he(e);
            if (!Te.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), he.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return be(e, "parentNode") }, parentsUntil: function(e, t, n) { return be(e, "parentNode", n) }, next: function(e) { return a(e, "nextSibling") }, prev: function(e) { return a(e, "previousSibling") }, nextAll: function(e) { return be(e, "nextSibling") }, prevAll: function(e) { return be(e, "previousSibling") }, nextUntil: function(e, t, n) { return be(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return be(e, "previousSibling", n) }, siblings: function(e) { return we((e.parentNode || {}).firstChild, e) }, children: function(e) { return we(e.firstChild) }, contents: function(e) { return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), he.merge([], e.childNodes)) } }, function(e, t) { he.fn[e] = function(n, r) { var i = he.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), this.length > 1 && (De[e] || he.uniqueSort(i), Ne.test(e) && i.reverse()), this.pushStack(i) } });
    var je = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            u = -1,
            l = function() {
                for (i = i || e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function() { return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) { he.each(n, function(n, r) { he.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r) }) }(arguments), n && !t && l()), this },
                remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n;
                            (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) { return e ? he.inArray(e, o) > -1 : o.length > 0 },
                empty: function() { return o && (o = []), this },
                disable: function() { return i = a = [], o = n = "", this },
                disabled: function() { return !o },
                lock: function() { return i = a = [], n || t || (o = n = ""), this },
                locked: function() { return !!i },
                fireWith: function(e, n) { return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this },
                fire: function() { return c.fireWith(this, arguments), this },
                fired: function() { return !!r }
            };
        return c
    }, he.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() { return r },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    catch: function(e) { return i.then(null, e) },
                    pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) {
                            he.each(n, function(n, r) {
                                var i = he.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var s = this,
                                    c = arguments,
                                    f = function() {
                                        var e, f;
                                        if (!(t < a)) {
                                            if ((e = r.apply(s, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                        }
                                    },
                                    p = i ? f : function() { try { f() } catch (e) { he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== l && (s = void 0, c = [e]), n.rejectWith(s, c)) } };
                                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var a = 0;
                        return he.Deferred(function(e) { n[0][3].add(o(0, e, he.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : u)), n[2][3].add(o(0, e, he.isFunction(r) ? r : l)) }).promise()
                    },
                    promise: function(e) { return null != e ? he.extend(e, i) : i }
                },
                o = {};
            return he.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() { r = s }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = re.call(arguments),
                o = he.Deferred(),
                a = function(e) { return function(n) { r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i) } };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || he.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, he.readyException = function(t) { e.setTimeout(function() { throw t }) };
    var qe = he.Deferred();
    he.fn.ready = function(e) { return qe.then(e).catch(function(e) { he.readyException(e) }), this }, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [he]))
        }
    }), he.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Le = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === he.type(n)) { i = !0; for (s in n) Le(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, he.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(he(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        He = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
    p.uid = 1, p.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[he.camelCase(t)] = n;
            else
                for (r in t) i[he.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in r ? [t] : t.match(je) || []), n = t.length; for (; n--;) delete r[t[n]] }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !he.isEmptyObject(t) }
    };
    var Fe = new p,
        Oe = new p,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Re = /[A-Z]/g;
    he.extend({ hasData: function(e) { return Oe.hasData(e) || Fe.hasData(e) }, data: function(e, t, n) { return Oe.access(e, t, n) }, removeData: function(e, t) { Oe.remove(e, t) }, _data: function(e, t, n) { return Fe.access(e, t, n) }, _removeData: function(e, t) { Fe.remove(e, t) } }), he.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Oe.get(o), 1 === o.nodeType && !Fe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = he.camelCase(r.slice(5)), h(o, r, i[r]));
                    Fe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() { Oe.set(this, e) }) : Le(this, function(t) { var n; if (o && void 0 === t) { if (void 0 !== (n = Oe.get(o, e))) return n; if (void 0 !== (n = h(o, e))) return n } else this.each(function() { Oe.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { Oe.remove(this, e) }) }
    }), he.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Fe.get(e, t), n && (!r || Array.isArray(n) ? r = Fe.access(e, t, he.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = he._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { he.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Fe.get(e, n) || Fe.access(e, n, { empty: he.Callbacks("once memory").add(function() { Fe.remove(e, [t + "queue", n]) }) }) }
    }), he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { he.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = he.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Fe.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"],
        $e = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display") },
        Be = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        _e = {};
    he.fn.extend({ show: function() { return m(this, !0) }, hide: function() { return m(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { $e(this) ? he(this).show() : he(this).hide() }) } });
    var ze = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ge = /<|&#?\w+;/;
    ! function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")),
            t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = te.documentElement,
        Qe = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && he.find.matchesSelector(Ye, i), n.guid || (n.guid = he.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) { return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(je) || [""]).length; l--;) s = Ke.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = he.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {}, c = he.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && he.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), he.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Fe.hasData(e) && Fe.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(je) || [""]).length; l--;)
                    if (s = Ke.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = he.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) he.event.remove(e, d + t[l], n, r, !0);
                he.isEmptyObject(u) && Fe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = he.event.fix(e),
                u = new Array(arguments.length),
                l = (Fe.get(this, "events") || {})[s.type] || [],
                c = he.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = he.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(l) > -1 : he.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(e, t) { Object.defineProperty(he.Event.prototype, e, { enumerable: !0, configurable: !0, get: he.isFunction(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(e) { return e[he.expando] ? e : new he.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== C() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === C() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1 }, _default: function(e) { return i(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, he.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, he.Event = function(e, t) { return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t) }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, he.event.addProp), he.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || he.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({ on: function(e, t, n, r) { return E(this, e, t, n, r) }, one: function(e, t, n, r) { return E(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function() { he.event.remove(this, e, n, t) }) } });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) { return e.replace(Ze, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (a = y(s), o = y(e), r = 0, i = o.length; r < i; r++) j(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(s), r = 0, i = o.length; r < i; r++) D(o[r], a[r]);
                else D(e, s);
            return (a = y(s, "script")).length > 0 && x(a, !u && y(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (He(n)) {
                    if (t = n[Fe.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[Fe.expando] = void 0
                    }
                    n[Oe.expando] && (n[Oe.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function(e) { return q(this, e, !0) },
        remove: function(e) { return q(this, e) },
        text: function(e) { return Le(this, function(e) { return void 0 === e ? he.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return A(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e) }) },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return A(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return A(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return he.clone(this, e, t) }) },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Ve[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { he.fn[e] = function(e) { for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), he(i[a])[t](n), oe.apply(r, n.get()); return this.pushStack(r) } });
    var it = /^margin/,
        ot = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
        at = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(a), s = null
            }
        }
        var n, r, i, o, a = te.createElement("div"),
            s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, { pixelPosition: function() { return t(), n }, boxSizingReliable: function() { return t(), r }, pixelMarginRight: function() { return t(), i }, reliableMarginLeft: function() { return t(), o } }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        lt = { position: "absolute", visibility: "hidden", display: "block" },
        ct = { letterSpacing: "0", fontWeight: "400" },
        ft = ["Webkit", "Moz", "ms"],
        pt = te.createElement("div").style;
    he.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = L(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: "cssFloat" },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = he.camelCase(t),
                    u = ut.test(t),
                    l = e.style;
                return u || (t = O(s)), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = Ie.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), void(null != n && n === n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = he.camelCase(t); return ut.test(t) || (t = O(s)), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = L(e, t, r)), "normal" === i && t in ct && (i = ct[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, r) { if (n) return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : Be(e, lt, function() { return M(e, t, r) }) },
            set: function(e, n, r) {
                var i, o = r && at(e),
                    a = r && R(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return a && (i = Ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), P(e, n, a)
            }
        }
    }), he.cssHooks.marginLeft = H(pe.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), he.each({ margin: "", padding: "", border: "Width" }, function(e, t) { he.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + We[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, it.test(e) || (he.cssHooks[e + t].set = P) }), he.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = at(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r); return o }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = I, I.prototype = { constructor: I, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px") }, cur: function() { var e = I.propHooks[this.prop]; return e && e.get ? e.get(this) : I.propHooks._default.get(this) }, run: function(e) { var t, n = I.propHooks[this.prop]; return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this } }, I.prototype.init.prototype = I.prototype, I.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit) } } }, I.propHooks.scrollTop = I.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, he.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, he.fx = I.prototype.init, he.fx.step = {};
    var dt, ht, gt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    he.Animation = he.extend(X, {
            tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return g(n.elem, e, Ie.exec(t), n), n }] },
            tweener: function(e, t) { he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(je); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t) },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && $e(e),
                    v = Fe.get(e, "fxshow");
                n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, he.queue(e, "fx").length || a.empty.fire() }) }));
                for (r in t)
                    if (i = t[r], gt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        d[r] = v && v[r] || he.style(e, r)
                    }
                if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Fe.get(e, "display")), "none" === (c = he.css(e, "display")) && (l ? c = l : (m([e], !0), l = e.style.display || l, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = Fe.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && m([e], !0), p.done(function() { g || m([e]), Fe.remove(e, "fxshow"); for (r in d) he.style(e, r, d[r]) })), u = _(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }
            }],
            prefilter: function(e, t) { t ? X.prefilters.unshift(e) : X.prefilters.push(e) }
        }), he.speed = function(e, t, n) { var r = e && "object" == typeof e ? he.extend({}, e) : { complete: n || !n && t || he.isFunction(e) && e, duration: e, easing: n && t || t && !he.isFunction(t) && t }; return he.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { he.isFunction(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue) }, r }, he.fn.extend({
            fadeTo: function(e, t, n, r) { return this.filter($e).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
            animate: function(e, t, n, r) {
                var i = he.isEmptyObject(e),
                    o = he.speed(t, n, r),
                    a = function() {
                        var t = X(this, he.extend({}, e), o);
                        (i || Fe.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = he.timers,
                        a = Fe.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Fe.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = he.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i) }
        }), he.each({ slideDown: B("show"), slideUp: B("hide"), slideToggle: B("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { he.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), he.timers = [], he.fx.tick = function() {
            var e, t = 0,
                n = he.timers;
            for (dt = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), dt = void 0
        }, he.fx.timer = function(e) { he.timers.push(e), he.fx.start() }, he.fx.interval = 13, he.fx.start = function() { ht || (ht = !0, W()) }, he.fx.stop = function() { ht = null }, he.fx.speeds = { slow: 600, fast: 200, _default: 400 }, he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() { e.clearTimeout(i) }
            })
        },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select").appendChild(te.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var mt, yt = he.expr.attrHandle;
    he.fn.extend({ attr: function(e, t) { return Le(this, he.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { he.removeAttr(this, e) }) } }), he.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t), null == r ? void 0 : r)) },
        attrHooks: { type: { set: function(e, t) { if (!pe.radioValue && "radio" === t && i(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(je);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), mt = { set: function(e, t, n) { return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n } }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), i }
    });
    var xt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    he.fn.extend({ prop: function(e, t) { return Le(this, he.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[he.propFix[e] || e] }) } }), he.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = he.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), pe.optSelected || (he.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { he.propFix[this.toLowerCase()] = this }), he.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).addClass(e.call(this, t, V(this))) });
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[u++];)
                    if (i = V(n), r = 1 === n.nodeType && " " + U(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = U(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).removeClass(e.call(this, t, V(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(je) || []; n = this[u++];)
                    if (i = V(n), r = 1 === n.nodeType && " " + U(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = U(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) { he(this).toggleClass(e.call(this, n, V(this), t), t) }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = he(this), o = e.match(je) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = V(this)) && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Fe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + U(V(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = he.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = he.map(i, function(e) { return null == e ? "" : e + "" })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
        }
    }), he.extend({
        valHooks: {
            option: { get: function(e) { var t = he.find.attr(e, "value"); return null != t ? t : U(he.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : o.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), s) return t;
                            u.push(t)
                        }
                    return u
                },
                set: function(e, t) { for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o }
            }
        }
    }), he.each(["radio", "checkbox"], function() { he.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1 } }, pe.checkOn || (he.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, p = [r || te],
                d = le.call(t, "type") ? t.type : t,
                h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + he.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[he.expando] ? t : new he.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !he.isWindow(r)) {
                    for (u = f.delegateType || d, Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, (c = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && He(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !He(r) || l && he.isFunction(r[d]) && !he.isWindow(r) && ((s = r[l]) && (r[l] = null), he.event.triggered = d, r[d](), he.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = he.extend(new he.Event, n, { type: e, isSimulated: !0 });
            he.event.trigger(r, null, t)
        }
    }), he.fn.extend({ trigger: function(e, t) { return this.each(function() { he.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return he.event.trigger(e, t, n, !0) } }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { he.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), he.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { he.event.simulate(t, e.target, he.event.fix(e)) };
        he.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Fe.access(r, t);
                i || r.addEventListener(e, n, !0), Fe.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Fe.access(r, t) - 1;
                i ? Fe.access(r, t, i) : (r.removeEventListener(e, n, !0), Fe.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = he.now(),
        kt = /\?/;
    he.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n };
    var St = /\[\]$/,
        Nt = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = he.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) G(n, e[n], t, i);
        return r.join("&")
    }, he.fn.extend({ serialize: function() { return he.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = he.prop(this, "elements"); return e ? he.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !he(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ze.test(e)) }).map(function(e, t) { var n = he(this).val(); return null == n ? null : Array.isArray(n) ? he.map(n, function(e) { return { name: t.name, value: e.replace(Nt, "\r\n") } }) : { name: t.name, value: n.replace(Nt, "\r\n") } }).get() } });
    var At = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = te.createElement("a");
    Wt.href = Ct.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Ct.href, type: "GET", isLocal: Ft.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e) },
        ajaxPrefilter: Y(Rt),
        ajaxTransport: Y(Mt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var l, p, d, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = K(h, C, r)), b = Z(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = he.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
                m = he.Deferred(),
                y = he.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ht.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return c ? a : null },
                    setRequestHeader: function(e, t) { return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this },
                    overrideMimeType: function(e) { return null == c && (h.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || T; return i && i.abort(t), r(0, t), this }
                };
            if (m.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(je) || [""], null == h.crossDomain) { l = te.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Q(Rt, h, n, C), c) return C;
            (f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), o = h.url.replace(qt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (d = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Q(Mt, h, n, C)) {
                if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() { C.abort("timeout") }, h.timeout));
                try { c = !1, i.send(b, r) } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) { return he.get(e, t, n, "json") },
        getScript: function(e, t) { return he.get(e, void 0, t, "script") }
    }), he.each(["get", "post"], function(e, t) { he[t] = function(e, n, r, i) { return he.isFunction(n) && (i = i || r, r = n, n = void 0), he.ajax(he.extend({ url: e, type: t, dataType: i, data: n, success: r }, he.isPlainObject(e) && e)) } }), he._evalUrl = function(e) { return he.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, he.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) { he(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = he.isFunction(e); return this.each(function(n) { he(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { he(this).replaceWith(this.childNodes) }), this }
    }), he.expr.pseudos.hidden = function(e) { return !he.expr.pseudos.visible(e) }, he.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, he.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} };
    var $t = { 0: 200, 1223: 204 },
        Bt = he.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, he.ajaxTransport(function(t) {
        var n, r;
        if (pe.cors || Bt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) { return function() { n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && r() }) }, n = n("abort");
                try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e }
            },
            abort: function() { n && n() }
        }
    }), he.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), he.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return he.globalEval(e), e } } }), he.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), he.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(r, i) { t = he("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type) }), te.head.appendChild(t[0]) }, abort: function() { n && n() } } } });
    var _t = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = _t.pop() || he.expando + "_" + Et++; return this[e] = !0, e } }), he.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || he.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? he(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, _t.push(i)), a && he.isFunction(o) && o(a[0]), a = o = void 0 }), "script" }), pe.createHTMLDocument = function() { var e = te.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), he.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var r, i, o; return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = te.location.href, t.head.appendChild(r)) : t = te), i = Ce.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes)) }, he.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = U(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && he.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { he.fn[t] = function(e) { return this.on(t, e) } }), he.expr.pseudos.animated = function(e) { return he.grep(he.timers, function(t) { return e === t.elem }).length }, he.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = he.css(e, "position"),
                c = he(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = he.css(e, "top"), u = he.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (r = c.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, he.fn.extend({
        offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { he.offset.setOffset(this, e, t) }); var t, n, r, i, o = this[0]; return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, { top: r.top + i.pageYOffset - n.clientTop, left: r.left + i.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = { top: 0, left: 0 };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = { top: r.top + he.css(e[0], "borderTopWidth", !0), left: r.left + he.css(e[0], "borderLeftWidth", !0) }), { top: t.top - r.top - he.css(n, "marginTop", !0), left: t.left - r.left - he.css(n, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent; return e || Ye }) }
    }), he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(r) { return Le(this, function(e, r, i) { var o; return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i) }, e, r, arguments.length) }
    }), he.each(["top", "left"], function(e, t) { he.cssHooks[t] = H(pe.pixelPosition, function(e, n) { if (n) return n = L(e, t), ot.test(n) ? he(e).position()[t] + "px" : n }) }), he.each({ Height: "height", Width: "width" }, function(e, t) {
        he.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            he.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Le(this, function(t, n, i) { var o; return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s) }, t, a ? i : void 0, a)
            }
        })
    }), he.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), he.holdReady = function(e) { e ? he.readyWait++ : he.ready(!0) }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() { return he });
    var Xt = e.jQuery,
        Ut = e.$;
    return he.noConflict = function(t) { return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = Xt), he }, t || (e.jQuery = e.$ = he), he
});

/**
 * @module       jQuery Migrate
 * @author       jQuery Foundation and other contributors
 * @see          https://code.jquery.com/jquery/
 * @license      MIT
 * @version      3.0.0
 */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b) {
        "use strict";

        function c(c) {
            var d = b.console;
            e[c] || (e[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function d(a, b, d, e) { Object.defineProperty(a, b, { configurable: !0, enumerable: !0, get: function() { return c(e), d } }) }
        a.migrateVersion = "3.0.0",
            function() {
                var c = b.console && b.console.log && function() { b.console.log.apply(b.console, arguments) },
                    d = /^[12]\./;
                c && (a && !d.test(a.fn.jquery) || c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), a.migrateWarnings && c("JQMIGRATE: Migrate plugin loaded multiple times"), c("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion))
            }();
        var e = {};
        a.migrateWarnings = [], void 0 === a.migrateTrace && (a.migrateTrace = !0), a.migrateReset = function() { e = {}, a.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && c("jQuery is not compatible with Quirks Mode");
        var f = a.fn.init,
            g = a.isNumeric,
            h = a.find,
            i = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            j = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
        a.fn.init = function(a) { var b = Array.prototype.slice.call(arguments); return "string" == typeof a && "#" === a && (c("jQuery( '#' ) is not a valid selector"), b[0] = []), f.apply(this, b) }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && i.test(a)) try { document.querySelector(a) } catch (d) { a = a.replace(j, function(a, b, c, d) { return "[" + b + c + '"' + d + '"]' }); try { document.querySelector(a), c("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a } catch (e) { c("Attribute selector with '#' was not fixed: " + b[0]) } }
            return h.apply(this, b)
        };
        var k;
        for (k in h) Object.prototype.hasOwnProperty.call(h, k) && (a.find[k] = h[k]);
        a.fn.size = function() { return c("jQuery.fn.size() is deprecated; use the .length property"), this.length }, a.parseJSON = function() { return c("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments) }, a.isNumeric = function(b) {
            function d(b) { var c = b && b.toString(); return !a.isArray(b) && c - parseFloat(c) + 1 >= 0 }
            var e = g(b),
                f = d(b);
            return e !== f && c("jQuery.isNumeric() should not be called on constructed objects"), f
        }, d(a, "unique", a.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), d(a.expr, "filters", a.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), d(a.expr, ":", a.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
        var l = a.ajax;
        a.ajax = function() { var a = l.apply(this, arguments); return a.promise && (d(a, "success", a.done, "jQXHR.success is deprecated and removed"), d(a, "error", a.fail, "jQXHR.error is deprecated and removed"), d(a, "complete", a.always, "jQXHR.complete is deprecated and removed")), a };
        var m = a.fn.removeAttr,
            n = a.fn.toggleClass,
            o = /\S+/g;
        a.fn.removeAttr = function(b) { var d = this; return a.each(b.match(o), function(b, e) { a.expr.match.bool.test(e) && (c("jQuery.fn.removeAttr no longer sets boolean properties: " + e), d.prop(e, !1)) }), m.apply(this, arguments) }, a.fn.toggleClass = function(b) {
            return void 0 !== b && "boolean" != typeof b ? n.apply(this, arguments) : (c("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var c = this.getAttribute && this.getAttribute("class") || "";
                c && a.data(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || b === !1 ? "" : a.data(this, "__className__") || "")
            }))
        };
        var p = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() { var a; return p = !0, a = d.apply(this, arguments), p = !1, a })
        }), a.swap = function(a, b, d, e) {
            var f, g, h = {};
            p || c("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = d.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        };
        var q = a.data;
        a.data = function(b, d, e) { var f; return d && d !== a.camelCase(d) && (f = a.hasData(b) && q.call(this, b), f && d in f) ? (c("jQuery.data() always sets/gets camelCased names: " + d), arguments.length > 2 && (f[d] = e), f[d]) : q.apply(this, arguments) };
        var r = a.Tween.prototype.run;
        a.Tween.prototype.run = function(b) { a.easing[this.easing].length > 1 && (c('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), a.easing[this.easing] = a.easing[this.easing].bind(a.easing, b, this.options.duration * b, 0, 1, this.options.duration)), r.apply(this, arguments) };
        var s = a.fn.load,
            t = a.event.fix;
        a.event.props = [], a.event.fixHooks = {}, a.event.fix = function(b) {
            var d, e = b.type,
                f = this.fixHooks[e],
                g = a.event.props;
            if (g.length)
                for (c("jQuery.event.props are deprecated and removed: " + g.join()); g.length;) a.event.addProp(g.pop());
            if (f && !f._migrated_ && (f._migrated_ = !0, c("jQuery.event.fixHooks are deprecated and removed: " + e), (g = f.props) && g.length))
                for (; g.length;) a.event.addProp(g.pop());
            return d = t.call(this, b), f && f.filter ? f.filter(d, b) : d
        }, a.each(["load", "unload", "error"], function(b, d) { a.fn[d] = function() { var a = Array.prototype.slice.call(arguments, 0); return "load" === d && "string" == typeof a[0] ? s.apply(this, a) : (c("jQuery.fn." + d + "() is deprecated"), a.splice(0, 0, d), arguments.length ? this.on.apply(this, a) : (this.triggerHandler.apply(this, a), this)) } }), a(function() { a(document).triggerHandler("ready") }), a.event.special.ready = { setup: function() { this === document && c("'ready' event is deprecated") } }, a.fn.extend({ bind: function(a, b, d) { return c("jQuery.fn.bind() is deprecated"), this.on(a, null, b, d) }, unbind: function(a, b) { return c("jQuery.fn.unbind() is deprecated"), this.off(a, null, b) }, delegate: function(a, b, d, e) { return c("jQuery.fn.delegate() is deprecated"), this.on(b, a, d, e) }, undelegate: function(a, b, d) { return c("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d) } });
        var u = a.fn.offset;
        a.fn.offset = function() {
            var b, d = this[0],
                e = { top: 0, left: 0 };
            return d && d.nodeType ? (b = (d.ownerDocument || document).documentElement, a.contains(b, d) ? u.apply(this, arguments) : (c("jQuery.fn.offset() requires an element connected to a document"), e)) : (c("jQuery.fn.offset() requires a valid DOM element"), e)
        };
        var v = a.param;
        a.param = function(b, d) { var e = a.ajaxSettings && a.ajaxSettings.traditional; return void 0 === d && e && (c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), d = e), v.call(this, b, d) };
        var w = a.fn.andSelf || a.fn.addBack;
        a.fn.andSelf = function() { return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments) };
        var x = a.Deferred,
            y = [
                ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
            ];
        a.Deferred = function(b) {
            var d = x(),
                e = d.promise();
            return d.pipe = e.pipe = function() {
                var b = arguments;
                return c("deferred.pipe() is deprecated"), a.Deferred(function(c) {
                    a.each(y, function(f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        d[g[1]](function() {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g[0] + "With"](this === e ? c.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, b && b.call(d, d), d
        }
    }(jQuery, window);

/**
 * @module       jQuery Cookie Plugin
 * @see          https://github.com/carhartl/jquery-cookie
 * @license      MIT
 */
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) {
    function n(e) { return u.raw ? e : encodeURIComponent(e) }

    function o(e) { return u.raw ? e : decodeURIComponent(e) }

    function i(e) { return n(u.json ? JSON.stringify(e) : String(e)) }

    function t(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e } catch (e) {} }

    function r(n, o) { var i = u.raw ? n : t(n); return e.isFunction(o) ? o(i) : i }
    var c = /\+/g,
        u = e.cookie = function(t, c, s) {
            if (arguments.length > 1 && !e.isFunction(c)) {
                if ("number" == typeof(s = e.extend({}, u.defaults, s)).expires) {
                    var d = s.expires,
                        f = s.expires = new Date;
                    f.setMilliseconds(f.getMilliseconds() + 864e5 * d)
                }
                return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var a = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; l < m; l++) {
                var x = p[l].split("="),
                    g = o(x.shift()),
                    j = x.join("=");
                if (t === g) { a = r(j, c); break }
                t || void 0 === (j = r(j)) || (a[g] = j)
            }
            return a
        };
    u.defaults = {}, e.removeCookie = function(n, o) { return e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n) }
});

/**
 * Device.js
 * @see          https://github.com/matthewhudson/device.js
 * @license      MIT License
 */
(function() {
    var e, i, n, o, d, c, t, r, a, v;
    e = window.device, window.device = {}, n = window.document.documentElement, v = window.navigator.userAgent.toLowerCase(), device.ios = function() { return device.iphone() || device.ipod() || device.ipad() }, device.iphone = function() { return o("iphone") }, device.ipod = function() { return o("ipod") }, device.ipad = function() { return o("ipad") }, device.android = function() { return o("android") }, device.androidPhone = function() { return device.android() && o("mobile") }, device.androidTablet = function() { return device.android() && !o("mobile") }, device.blackberry = function() { return o("blackberry") || o("bb10") || o("rim") }, device.blackberryPhone = function() { return device.blackberry() && !o("tablet") }, device.blackberryTablet = function() { return device.blackberry() && o("tablet") }, device.windows = function() { return o("windows") }, device.windowsPhone = function() { return device.windows() && o("phone") }, device.windowsTablet = function() { return device.windows() && o("touch") && !device.windowsPhone() }, device.fxos = function() { return (o("(mobile;") || o("(tablet;")) && o("; rv:") }, device.fxosPhone = function() { return device.fxos() && o("mobile") }, device.fxosTablet = function() { return device.fxos() && o("tablet") }, device.meego = function() { return o("meego") }, device.cordova = function() { return window.cordova && "file:" === location.protocol }, device.nodeWebkit = function() { return "object" == typeof window.process }, device.mobile = function() { return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego() }, device.tablet = function() { return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet() }, device.desktop = function() { return !device.tablet() && !device.mobile() }, device.portrait = function() { return window.innerHeight / window.innerWidth > 1 }, device.landscape = function() { return window.innerHeight / window.innerWidth < 1 }, device.noConflict = function() { return window.device = e, this }, o = function(e) { return -1 !== v.indexOf(e) }, c = function(e) { var i; return i = new RegExp(e, "i"), n.className.match(i) }, i = function(e) { return c(e) ? void 0 : n.className += " " + e }, r = function(e) { return c(e) ? n.className = n.className.replace(e, "") : void 0 }, device.ios() ? device.ipad() ? i("ios ipad tablet") : device.iphone() ? i("ios iphone mobile") : device.ipod() && i("ios ipod mobile") : i(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && i("cordova"), d = function() { return device.landscape() ? (r("portrait"), i("landscape")) : (r("landscape"), i("portrait")) }, a = "onorientationchange" in window, t = a ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(t, d, !1) : window.attachEvent ? window.attachEvent(t, d) : window[t] = d, d()
}).call(this);

/**
 * jQuery resize event
 * @see          http://benalman.com/projects/jquery-resize-plugin/
 * @license      MIT license
 */
(function($, h, c) {
    var a = $([]),
        e = $.resize = $.extend($.resize, {}),
        i, k = "setTimeout",
        j = "resize",
        d = j + "-special-event",
        b = "delay",
        f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function() {
            if (!e[f] && this[k]) { return false }
            var l = $(this);
            a = a.add(l);
            $.data(this, d, { w: l.width(), h: l.height() });
            if (a.length === 1) { g() }
        },
        teardown: function() {
            if (!e[f] && this[k]) { return false }
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) { clearTimeout(i) }
        },
        add: function(l) {
            if (!e[f] && this[k]) { return false }
            var n;

            function m(s, o, p) {
                var q = $(this),
                    r = $.data(this, d);
                r.w = o !== c ? o : q.width();
                r.h = p !== c ? p : q.height();
                n.apply(this, arguments)
            }
            if ($.isFunction(l)) { n = l; return m } else {
                n = l.handler;
                l.handler = m
            }
        }
    };

    function g() {
        i = h[k](function() {
            a.each(function() {
                var n = $(this),
                    m = n.width(),
                    l = n.height(),
                    o = $.data(this, d);
                if (m !== o.w || l !== o.h) { n.trigger(j, [o.w = m, o.h = l]) }
            });
            g()
        }, e[b])
    }
})(jQuery, this);

/**
 * @module       jQuery easing
 * @author       George McGinley Smith
 * @see          http://gsgd.co.uk/sandbox/jquery/easing/
 * @license      BSD
 * @version      1.4.0
 */
! function(n) { "function" == typeof define && define.amd ? define(["jquery"], function(e) { return n(e) }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery) }(function(n) {
    function e(n) {
        var e = 7.5625,
            t = 2.75;
        return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
    }
    n.easing.jswing = n.easing.swing;
    var t = Math.pow,
        u = Math.sqrt,
        r = Math.sin,
        i = Math.cos,
        a = Math.PI,
        c = 1.70158,
        o = 1.525 * c,
        s = 2 * a / 3,
        f = 2 * a / 4.5;
    n.extend(n.easing, { def: "easeOutQuad", swing: function(e) { return n.easing[n.easing.def](e) }, easeInQuad: function(n) { return n * n }, easeOutQuad: function(n) { return 1 - (1 - n) * (1 - n) }, easeInOutQuad: function(n) { return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2 }, easeInCubic: function(n) { return n * n * n }, easeOutCubic: function(n) { return 1 - t(1 - n, 3) }, easeInOutCubic: function(n) { return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2 }, easeInQuart: function(n) { return n * n * n * n }, easeOutQuart: function(n) { return 1 - t(1 - n, 4) }, easeInOutQuart: function(n) { return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2 }, easeInQuint: function(n) { return n * n * n * n * n }, easeOutQuint: function(n) { return 1 - t(1 - n, 5) }, easeInOutQuint: function(n) { return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2 }, easeInSine: function(n) { return 1 - i(n * a / 2) }, easeOutSine: function(n) { return r(n * a / 2) }, easeInOutSine: function(n) { return -(i(a * n) - 1) / 2 }, easeInExpo: function(n) { return 0 === n ? 0 : t(2, 10 * n - 10) }, easeOutExpo: function(n) { return 1 === n ? 1 : 1 - t(2, -10 * n) }, easeInOutExpo: function(n) { return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2 }, easeInCirc: function(n) { return 1 - u(1 - t(n, 2)) }, easeOutCirc: function(n) { return u(1 - t(n - 1, 2)) }, easeInOutCirc: function(n) { return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2 }, easeInElastic: function(n) { return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s) }, easeOutElastic: function(n) { return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1 }, easeInOutElastic: function(n) { return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -t(2, 20 * n - 10) * r((20 * n - 11.125) * f) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1 }, easeInBack: function(n) { return 2.70158 * n * n * n - c * n * n }, easeOutBack: function(n) { return 1 + 2.70158 * t(n - 1, 3) + c * t(n - 1, 2) }, easeInOutBack: function(n) { return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2 }, easeInBounce: function(n) { return 1 - e(1 - n) }, easeOutBounce: e, easeInOutBounce: function(n) { return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2 } })
});

/**
 * Regula: An annotation-based form-validation framework in Javascript
 * @version 1.3.4
 * @license BSD License
 * @copyright Robert Nyman, http://www.robertnyman.com
 */
(function(e, t) { typeof define == "function" && define.amd ? define("utils/MapUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.MapUtils = t()) })(this, function() {
    return {
        iterateOverMap: function(e, t) { var n = 0; for (var r in e) e.hasOwnProperty(r) && r !== "__size__" && (t.call(e, r, e[r], n), n++) },
        exists: function(e, t) {
            var n = !1,
                r = 0;
            while (!n && r < e.length) n = t == e[r], r++;
            return n
        },
        put: function(e, t, n) { e.__size__ || (e.__size__ = 0), e[t] || e.__size__++, e[t] = n },
        isEmpty: function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0
        }
    }
}),
function(e, t) { typeof define == "function" && define.amd ? define("utils/DOMUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.DOMUtils = t()) }(this, function() {
    function t(e, t, n, r) {
        var i = t == "*" && e.all ? e.all : e.getElementsByTagName(t),
            s = [],
            o = typeof r != "undefined" ? new RegExp("(^|\\s)" + r + "(\\s|$)") : null,
            u, a;
        for (var f = 0; f < i.length; f++) u = i[f], a = u.getAttribute && u.getAttribute(n), typeof a == "string" && a.length > 0 && (typeof r == "undefined" || o && o.test(a)) && s.push(u);
        return s
    }

    function n(e, t) { var n = e.getAttribute && e.getAttribute(t) || null; if (!n) { var r = e.attributes; for (var i = 0; i < r.length; i++) r[i].nodeName === t && (n = r[i].nodeValue) } return n }

    function r() { return "regula-generated-" + Math.floor(Math.random() * 1e6) }

    function i() { return typeof document.createElement("input").checkValidity == "function" }
    var e = { form: "The form", select: "The select box", textarea: "The text area", checkbox: "The checkbox", radio: "The radio button", text: "The text field", password: "The password", email: "The email", url: "The URL", number: "The number", datetime: "The datetime", "datetime-local": "The local datetime", date: "The date", month: "The month", time: "The time", week: "The week", range: "The range", tel: "The telephone number", color: "The color" };
    return { friendlyInputNames: e, getElementsByAttribute: t, getAttributeValueForElement: n, generateRandomId: r, supportsHTML5Validation: i }
}),
function(e, t) { typeof define == "function" && define.amd ? define("service/GroupService", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.GroupService = t()) }(this, function() {
    var e = { Default: 0 },
        t = { 0: "Default" },
        n = [],
        r = 1;
    return { Group: e, ReverseGroup: t, deletedGroupIndices: n, firstCustomGroupIndex: r }
}),
function(e, t) { typeof define == "function" && define.amd ? define("utils/ArrayUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ArrayUtils = t()) }(this, function() {
    function e(e, t) { var n = ""; for (var r = 0; r < e.length; r++) n += e[r] + t; return n.replace(new RegExp(t + "$"), "") }
    return { explode: e }
}),
function(e, t) { typeof define == "function" && define.amd ? define("service/ExceptionService", ["utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ExceptionService = t(e.regulaModules.ArrayUtils)) }(this, function(e) {
    function i(e, t, n) { var r = ""; return e != null ? (r = e.id, t == "" || t == null || t == undefined ? r += ": " : r += "." + t + ": ") : t != "" && t != null && t != undefined && (r = "@" + t + ": "), r + n }

    function s(t) { var n = "Function received: {"; for (var r in t) t.hasOwnProperty(r) && (typeof t[r] == "string" ? n += r + ": " + t[r] + ", " : t[r] instanceof Array && (n += r + ": [" + e.explode(t[r], ", ") + "], ")); return n = n.replace(/, $/, "") + "}", n }
    var t = { IllegalArgumentException: function(e) { this.name = "IllegalArgumentException", this.message = e }, ConstraintDefinitionException: function(e) { this.name = "ConstraintDefinitionException", this.message = e }, BindException: function(e) { this.name = "BindException", this.message = e }, MissingFeatureException: function(e) { this.name = "MissingFeatureException", this.message = e } };
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = t[n];
            r.prototype = new Error, r.prototype.constructor = r
        }
    return { Exception: t, generateExceptionMessage: i, explodeParameters: s }
}),
function(e, t) { typeof define == "function" && define.amd ? define("service/ValidationService", ["utils/DOMUtils", "utils/MapUtils", "service/GroupService", "service/ExceptionService", "utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ValidationService = t(e.regulaModules.DOMUtils, e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.ExceptionService, e.regulaModules.ArrayUtils)) }(this, function(e, t, n, r, i) {
    function h(e) { for (var t in e) e.hasOwnProperty(t) && v(t, e) }

    function p(e) { s = e.config, o = e.ReverseConstraint, u = e.constraintDefinitions, a = e.boundConstraints }

    function v(e, t) {
        var n = t[e],
            i = e.replace(/(^[A-Z]+)/, function(e) { return e.toLowerCase() });
        n.async ? c[i] = function(t, i, s) { if (typeof s == "undefined") throw new r.Exception.IllegalArgumentException(e + " is an asynchronous constraint, but you have not provided a callback."); return n.validator.call(t, i, c, s) } : c[i] = function(e, t) { return n.validator.call(e, t, c) }
    }

    function m(e, n, r, i) {
        function a(n, r) {
            var i = {};
            for (var s in n) n.hasOwnProperty(s) && s != "__size__" && t.put(i, s, n[s]);
            if (r.length > 0)
                for (var s in e) e.hasOwnProperty(s) && s != "__size__" && t.put(i, s, e[s]);
            return i
        }

        function f(e, t, n, i) {
            var s = o[y.constraintType],
                a = W(t, s, i),
                f = { group: n, constraintName: e.constraintName, custom: u[s].custom, compound: u[s].compound, async: u[s].async, constraintParameters: y.params, failingElements: e.failingElements, message: a };
            return r.reportAsSingleViolation || (f.composingConstraintViolations = e.composingConstraintViolations || []), f
        }
        var l = [],
            c = [];
        for (var h = 0; h < r.composingConstraints.length; h++) {
            var p = r.composingConstraints[h],
                d = o[p.constraintType];
            u[d].async ? c.push(p) : l.push(p)
        }
        var v = null,
            m = this;
        if (g(this, e)) {
            if (l.length > 0) {
                v = [];
                for (var h = 0; h < l.length; h++) {
                    var y = l[h],
                        b = o[y.constraintType],
                        w = a(y.params, r.params),
                        E = U(n, m.id, b, w);
                    if (!E.constraintPassed) {
                        var S = f(E, m.id, n, w);
                        if (s.enableHTML5Validation)
                            for (var x = 0; x < E.failingElements.length; x++) E.failingElements[x].setCustomValidity(S.message);
                        v.push(S)
                    }
                }
            }
            if (c.length > 0) {
                v === null && (v = []);
                var T = 0;
                for (var h = 0; h < c.length; h++) {
                    var y = c[h],
                        b = o[y.constraintType],
                        w = a(y.params, r.params);
                    z(n, m.id, b, w, N)
                }

                function N(e) {
                    if (!e.constraintPassed) {
                        var t = f(e, m.id, n, w);
                        if (s.enableHTML5Validation)
                            for (var r = 0; r < e.failingElements.length; r++) e.failingElements[r].setCustomValidity(t.message);
                        v.push(t)
                    }
                    T++, T === c.length && i(v)
                }
            }
        } else v = [];
        return v
    }

    function g(e, t) { var n = s.validateEmptyFields; return typeof t["ignoreEmpty"] != "undefined" && (n = !t.ignoreEmpty), !d.blank.call(e) || !!n }

    function y(e) {
        var t = { YMD: { Year: 0, Month: 1, Day: 2 }, MDY: { Month: 0, Day: 1, Year: 2 }, DMY: { Day: 0, Month: 1, Year: 2 } },
            n = t[e.format],
            r = e.separator;
        typeof e["separator"] == "undefined" && (r = /\//.test(this.value) ? "/" : /\./.test(this.value) ? "." : / /.test(this.value) ? " " : /[^0-9]+/);
        var i = this.value.split(r),
            s = new Date(i[n.Year], i[n.Month] - 1, i[n.Day]),
            o = new Date;
        return typeof e["date"] != "undefined" && (i = e.date.split(r), o = new Date(i[n.Year], i[n.Month] - 1, i[n.Day])), { dateToValidate: s, dateToTestAgainst: o }
    }

    function b(e) { return function(t, n, r) { var i = !0; return g(this, t) && (i = e.call(this, t, n, r)), i } }

    function w() { return !this.validity.typeMismatch }

    function E(e) {
        function t(e) {
            var t = e.groups || null,
                n = e.elementIds || null,
                r = (typeof e.constraintType == "undefined" ? null : e.constraintType) || null,
                i = "";
            return i += t == null ? "0" : "1", i += n == null ? "0" : "1", i += r == null ? "0" : "1", i
        }
        f = {}, l = {};
        var r = { "000": S, "001": x, "010": T, "011": N, 100: C, 101: k, 110: L, 111: A };
        if (!e || typeof e == "undefined") e = {};
        typeof e.independent == "undefined" && (e.independent = !0), typeof e.constraintType != "undefined" && (e.constraintType = o[e.constraintType]);
        if (typeof e.groups != "undefined") {
            var i = e.groups;
            e.groups = [];
            for (var s = 0; s < i.length; s++) e.groups.push(n.ReverseGroup[i[s]])
        }
        if (typeof e.elements != "undefined") { e.elementIds = []; for (var s = 0; s < e.elements.length; s++) e.elementIds.push(e.elements[s].id) } else typeof e.elementId != "undefined" && (e.elementIds = [e.elementId]);
        return r[t(e)](e)
    }

    function S(e) {
        var t = { asyncContexts: [], syncContexts: [] };
        for (var n in a)
            if (a.hasOwnProperty(n)) {
                var r = a[n];
                for (var i in r)
                    if (r.hasOwnProperty(i))
                        if (!document.getElementById(i)) delete r[i];
                        else {
                            var s = r[i];
                            for (var o in s)
                                if (s.hasOwnProperty(o)) {
                                    var u = H(n, i, o);
                                    u.async ? t.asyncContexts.push(u) : t.syncContexts.push(u)
                                }
                        }
            }
        return t = M(t), D(t, e)
    }

    function x(e) {
        var t = { asyncContexts: [], syncContexts: [] };
        for (var n in a)
            if (a.hasOwnProperty(n)) {
                var r = a[n];
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        var s = r[i];
                        if (s[e.constraintType]) {
                            var o = H(n, i, e.constraintType);
                            o.async ? t.asyncContexts.push(o) : t.syncContexts.push(o)
                        }
                    }
            }
        return t = M(t), D(t, e)
    }

    function T(e) {
        var t = {},
            n = { asyncContexts: [], syncContexts: [] };
        for (var s in a)
            if (a.hasOwnProperty(s)) {
                var o = a[s];
                for (var u = 0; u < e.elementIds.length; u++) {
                    var f = e.elementIds[u];
                    typeof t[f] == "undefined" && (t[f] = 0);
                    var l = o[f];
                    if (typeof l != "undefined") {
                        t[f]++;
                        for (var c in l)
                            if (l.hasOwnProperty(c)) {
                                var h = H(s, f, c);
                                h.async ? n.asyncContexts.push(h) : n.syncContexts.push(h)
                            }
                    }
                }
            }
        var p = [];
        for (var f in t) t.hasOwnProperty(f) && t[f] === 0 && p.push(f);
        if (p.length > 0) throw new r.Exception.IllegalArgumentException("No constraints have been bound to the specified elements: " + i.explode(p) + ". " + r.explodeParameters(e));
        return n = M(n), D(n, e)
    }

    function N(e) {
        var t = [],
            n = { asyncContexts: [], syncContexts: [] };
        for (var s in a)
            if (a.hasOwnProperty(s)) {
                var o = a[s];
                for (var u = 0; u < e.elementIds.length; u++) {
                    var f = e.elementIds[u],
                        l = o[f];
                    if (typeof l != "undefined") {
                        var c = H(s, f, e.constraintType);
                        c.async ? n.asyncContexts.push(c) : n.syncContexts.push(c)
                    } else t.push(f)
                }
            }
        if (t.length > 0) throw new r.Exception.IllegalArgumentException("No constraints have been bound to the specified elements: " + i.explode(t) + ". " + r.explodeParameters(e));
        return n = M(n), D(n, e)
    }

    function C(e) {
        var t = !1,
            n = { groupedContexts: {} },
            i = 0;
        while (i < e.groups.length) {
            var s = e.groups[i],
                o = a[s];
            if (typeof o == "undefined") throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            for (var u in o)
                if (o.hasOwnProperty(u)) {
                    var f = o[u];
                    for (var l in f)
                        if (f.hasOwnProperty(l)) {
                            var c = H(s, u, l);
                            n.groupedContexts[s] || (n.groupedContexts[s] = { asyncContexts: [], syncContexts: [] }), c.async ? (t = !0, n.groupedContexts[s].asyncContexts.push(c)) : n.groupedContexts[s].syncContexts.push(c)
                        }
                }
            i++
        }
        var h = _(n);
        return e.groups = h.groups, n = h.uniqueConstraintsToValidate, P(e, n, t)
    }

    function k(e) {
        var t = !1,
            n = { groupedContexts: {} },
            i = 0;
        while (i < e.groups.length) {
            var s = e.groups[i],
                o = a[s];
            if (typeof o == "undefined") throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            var u = !1;
            for (var f in o)
                if (o.hasOwnProperty(f)) {
                    var l = o[f];
                    if (l[e.constraintType]) {
                        u = !0;
                        var c = H(s, f, e.constraintType);
                        n.groupedContexts[s] || (n.groupedContexts[s] = { asyncContexts: [], syncContexts: [] }), c.async ? (t = !0, n.groupedContexts[s].asyncContexts.push(c)) : n.groupedContexts[s].syncContexts.push(c)
                    }
                }
            if (!u) throw new r.Exception.IllegalArgumentException("Constraint " + e.constraintType + " has not been bound to any element under group " + s + ". " + r.explodeParameters(e));
            i++
        }
        var h = _(n);
        return e.groups = h.groups, n = h.uniqueConstraintsToValidate, P(e, n, t)
    }

    function L(e) {
        var t = [],
            n = [],
            s = !1,
            o = { groupedContexts: {} },
            u = 0;
        while (u < e.groups.length) {
            var f = e.groups[u],
                l = a[f];
            if (!l) throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            for (var c = 0; c < e.elementIds.length; c++) {
                var h = e.elementIds[c],
                    p = l[h];
                if (p) {
                    for (var d in p)
                        if (p.hasOwnProperty(d)) {
                            var v = H(f, h, d);
                            o.groupedContexts[f] || (o.groupedContexts[f] = { asyncContexts: [], syncContexts: [] }), v.async ? (s = !0, o.groupedContexts[f].asyncContexts.push(v)) : o.groupedContexts[f].syncContexts.push(v)
                        }
                } else t.push(f), n.push(h)
            }
            u++
        }
        if (t.length > 0) throw new r.Exception.IllegalArgumentException("The following elements: " + i.explode(n) + " were not found in one or more of the following group(s): [" + i.explode(t, ",").replace(/,/g, ", ") + "]. " + r.explodeParameters(e));
        var m = _(o);
        return e.groups = m.groups, o = m.uniqueConstraintsToValidate, P(e, o, s)
    }

    function A(e) {
        var t = !1,
            n = { groupedContexts: {} },
            r = 0;
        while (r < e.groups.length) {
            var i = e.groups[r];
            for (var s = 0; s < e.elementIds.length; s++) {
                var o = e.elementIds[s],
                    u = H(i, o, e.constraintType);
                n.groupedContexts[i] || (n.groupedContexts[i] = { asyncContexts: [], syncContexts: [] }), u.async ? (t = !0, n.groupedContexts[i].asyncContexts.push(u)) : n.groupedContexts[i].syncContexts.push(u)
            }
            r++
        }
        var a = _(n);
        return e.groups = a.groups, n = a.uniqueConstraintsToValidate, P(e, n, t)
    }

    function O(e) {
        var t = !0;
        f[e.elementId] || (f[e.elementId] = {});
        var n = document.getElementById(e.elementId).cloneNode(!1),
            r = n.name.replace(/\s/g, "");
        return typeof n.type != "undefined" && n.type.toLowerCase() === "radio" && r !== "" ? l[r] || (l[r] = {}) : l[r] = {}, !f[e.elementId][e.elementConstraint] && !l[r][e.elementConstraint] && (t = !1, f[e.elementId][e.elementConstraint] = !0, typeof n.type != "undefined" && n.type.toLowerCase() === "radio" && r !== "" && (l[r][e.elementConstraint] = !0)), t
    }

    function M(e) {
        var t = { asyncContexts: [], syncContexts: [] };
        for (var n = 0; n < e.syncContexts.length; n++) {
            var r = e.syncContexts[n];
            O(r) || t.syncContexts.push(r)
        }
        for (var n = 0; n < e.asyncContexts.length; n++) {
            var r = e.asyncContexts[n];
            O(r) || t.asyncContexts.push(r)
        }
        return t
    }

    function _(e) {
        var t = [],
            n = { groupedContexts: {} };
        for (var r in e.groupedContexts)
            if (e.groupedContexts.hasOwnProperty(r)) {
                for (var i = 0; i < e.groupedContexts[r].syncContexts.length; i++) {
                    var s = e.groupedContexts[r].syncContexts[i];
                    O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = { asyncContexts: [], syncContexts: [] }), n.groupedContexts[r].syncContexts.push(s), t.indexOf(r) == -1 && t.push(r))
                }
                for (var i = 0; i < e.groupedContexts[r].asyncContexts.length; i++) {
                    var s = e.groupedContexts[r].asyncContexts[i];
                    O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = { asyncContexts: [], syncContexts: [] }), n.groupedContexts[r].asyncContexts.push(s), t.indexOf(r) == -1 && t.push(r))
                }
            }
        return { groups: t, uniqueConstraintsToValidate: n }
    }

    function D(e, t) {
        var n = [];
        e.syncContexts.length > 0 && (n = B(e));
        if (e.asyncContexts.length > 0) {
            if (!t.callback) throw new r.Exception.IllegalArgumentException("One or more constraints to be validated are asynchronous, but a callback has not been provided.");
            j(e, function(e) { n.length > 0 ? n = n.concat(e) : n = e, t.callback(n) })
        } else t.callback && t.callback(n);
        return n
    }

    function P(e, t, n) {
        var i = F(e.groups, e.independent, t);
        if (n) {
            if (!e.callback) throw new r.Exception.IllegalArgumentException("One or more constraints to be validated are asynchronous, but a callback has not been provided.");
            if (!e.independent && i.length > 0) {
                var s = i[0].group,
                    o = t.groupedContexts[s];
                t.groupedContexts = {}, t.groupedContexts[s] = o
            }
            I(e.groups, e.independent, t, function(t) { i.length > 0 ? i = i.concat(t) : i = t, e.callback(i) })
        } else e.callback && e.callback(i);
        return i
    }

    function H(e, t, n) { var i = a[e]; if (!i) throw new r.Exception.IllegalArgumentException("Undefined group in group list (group: " + e + ", elementId: " + t + ", constraint: " + n + ")"); var s = i[t]; if (!s) throw new r.Exception.IllegalArgumentException("No constraints have been defined for the element with id: " + t + " in group " + e); var o = s[n]; if (!o) throw new r.Exception.IllegalArgumentException("Constraint " + n + " in group " + e + " hasn't been bound to the element with id " + t); return { group: e, elementId: t, elementConstraint: n, params: o, async: u[n].async } }

    function B(e) {
        var t = [],
            n = 0;
        while (n < e.syncContexts.length) {
            var r = e.syncContexts[n],
                i = q(r.group, r.elementId, r.elementConstraint, r.params);
            i && t.push(i), n++
        }
        return t
    }

    function j(e, t) {
        function o(i) { r++, i && n.push(i), r === e.asyncContexts.length && t(n) }
        var n = [],
            r = 0;
        for (var i = 0; i < e.asyncContexts.length; i++) {
            var s = e.asyncContexts[i];
            R(s.group, s.elementId, s.elementConstraint, s.params, o)
        }
    }

    function F(e, t, n) {
        var r = [],
            i = 0,
            s = !0;
        while (i < e.length && s) {
            var o = e[i],
                u = n.groupedContexts[o].syncContexts;
            for (var a = 0; a < u.length; a++) {
                var f = u[a],
                    l = q(f.group, f.elementId, f.elementConstraint, f.params);
                l && r.push(l)
            }
            i++, s = r.length == 0 || t && r.length != 0
        }
        return r
    }

    function I(e, t, n, r) {
        var i = [],
            s = !0;
        (function o(u) {
            if (u < e.length && s) {
                var a = e[u],
                    f = n.groupedContexts[a].asyncContexts,
                    l = 0;
                for (var c = 0; c < f.length; c++) {
                    var h = f[c];
                    R(h.group, h.elementId, h.elementConstraint, h.params, p)
                }

                function p(e) { l++, e && i.push(e), l === f.length && (s = i.length === 0 || t && i.length != 0, o(++u)) }
            } else r(i)
        })(0)
    }

    function q(e, t, n, r) {
        var i, o = U(e, t, n, r),
            a = "";
        o.constraintPassed || (a = W(t, n, r), i = { group: e, constraintName: n, formSpecific: u[n].formSpecific, custom: u[n].custom, compound: u[n].compound, async: u[n].async, composingConstraintViolations: o.composingConstraintViolations || [], constraintParameters: r, failingElements: o.failingElements, message: a });
        if (s.enableHTML5Validation)
            for (var f = 0; f < o.failingElements.length; f++) o.failingElements[f].setCustomValidity("");
        return i
    }

    function R(e, t, n, r, i) {
        var o;
        z(e, t, n, r, function(a) {
            var f = "";
            a.constraintPassed || (f = W(t, n, r), o = { group: e, constraintName: n, formSpecific: u[n].formSpecific, custom: u[n].custom, compound: u[n].compound, async: u[n].async, composingConstraintViolations: a.composingConstraintViolations || [], constraintParameters: r, failingElements: a.failingElements, message: f });
            if (s.enableHTML5Validation)
                for (var l = 0; l < a.failingElements.length; l++) a.failingElements[l].setCustomValidity("");
            i(o)
        })
    }

    function U(t, n, r, i) {
        var s = !1,
            o = [],
            a = document.getElementById(n),
            f = [];
        u[r].formSpecific ? (o = u[r].validator.call(a, i, c), s = o.length == 0) : u[r].compound ? (f = u[r].validator.call(a, i, t, u[r], null), s = f.length == 0, s || o.push(a)) : (s = u[r].validator.call(a, i, c), s || o.push(a));
        var l = a.cloneNode(!1).name.replace(/\s/g, ""),
            h = a.cloneNode(!1).type;
        typeof h != "undefined" && h.toLowerCase() === "radio" && l !== "" && (o = e.getElementsByAttribute(document.body, "input", "name", l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")));
        var p = { constraintName: r, constraintPassed: s, failingElements: o };
        return u[r].reportAsSingleViolation || (p.composingConstraintViolations = f), p
    }

    function z(t, n, r, i, s) {
        function a(t, n, i, s) {
            var a = o.cloneNode(!1).name.replace(/\s/g, ""),
                f = o.cloneNode(!1).type;
            typeof f != "undefined" && f.toLowerCase() === "radio" && a !== "" && (i = e.getElementsByAttribute(document.body, "input", "name", a));
            var l = { constraintName: r, constraintPassed: t, failingElements: i };
            u[r].reportAsSingleViolation || (l.composingConstraintViolations = n), s(l)
        }
        var o = document.getElementById(n);
        u[r].formSpecific ? u[r].validator.call(o, i, c, function(e) { a(e.length === 0, null, e, s) }) : u[r].compound ? u[r].validator.call(o, i, t, u[r], function(e) {
            var t = [],
                n = e.length === 0;
            n || t.push(o), a(n, e, t, s)
        }) : u[r].validator.call(o, i, c, function(e) {
            var t = [];
            e || t.push(o), a(e, null, t, s)
        })
    }

    function W(t, n, r) {
        var i = document.getElementById(t),
            s = "";
        r.message ? s = r.message : r.msg ? s = r.msg : s = u[n].defaultMessage;
        for (var o in r)
            if (r.hasOwnProperty(o)) {
                var a = new RegExp("{" + o + "}", "g");
                s = s.replace(a, r[o])
            }
        if (u[n].compound && typeof u[n].composingConstraints != "undefined")
            for (var f = 0; f < u[n].composingConstraints.length; f++) {
                var l = u[n].composingConstraints[f];
                for (var o in l.params)
                    if (l.params.hasOwnProperty(o)) {
                        var a = new RegExp("{" + o + "}", "g");
                        s = s.replace(a, l.params[o])
                    }
            }
        if (/{label}/.test(s)) {
            var c = e.friendlyInputNames[i.cloneNode(!1).tagName.toLowerCase()];
            c || (c = e.friendlyInputNames[i.cloneNode(!1).type.toLowerCase()]), s = s.replace(/{label}/, c), s = s.replace(/{flags}/g, "")
        }
        return s = s.replace(/\\\"/g, '"'), s
    }
    var s = {},
        o = {},
        u = {},
        a = {},
        f = {},
        l = {},
        c = {},
        d = {
            checked: function(t) {
                var n = !1;
                if (this.type.toLowerCase() === "radio" && this.name.replace(/\s/g, "") !== "") {
                    var r = e.getElementsByAttribute(document.body, "input", "name", this.name.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                        i = 0;
                    while (i < r.length && !n) n = r[i].checked, i++
                } else n = this.checked;
                return n
            },
            selected: function(e) { return this.selectedIndex > 0 },
            max: function(e) { var t = !0; return g(this, e) && (t = parseFloat(this.value) <= parseFloat(e.value)), t },
            min: function(e) { var t = !0; return g(this, e) && (t = parseFloat(this.value) >= parseFloat(e.value)), t },
            range: function(e) { var t = !0; return g(this, e) && (t = this.value.replace(/\s/g, "") != "" && parseFloat(this.value) <= parseFloat(e.max) && parseFloat(this.value) >= parseFloat(e.min)), t },
            notBlank: function(e) { return this.value.replace(/\s/g, "") != "" },
            blank: function(e) { return this.value.replace(/\s/g, "") === "" },
            matches: function(e) {
                var t = !0;
                if (g(this, e)) {
                    var n, r;
                    typeof e["regex"] == "string" ? r = e.regex.replace(/^\//, "").replace(/\/$/, "") : r = e.regex, typeof e["flags"] != "undefined" ? n = new RegExp(r.toString().replace(/^\//, "").replace(/\/[^\/]*$/, ""), e.flags) : n = new RegExp(r), t = n.test(this.value)
                }
                return t
            },
            email: function(e) { var t = !0; return g(this, e) && (t = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(this.value)), t },
            alpha: function(e) { var t = !0; return g(this, e) && (t = /^[A-Za-z]+$/.test(this.value)), t },
            numeric: function(e) { var t = !0; return g(this, e) && (t = /^[0-9]+$/.test(this.value)), t },
            integer: function(e) { var t = !0; return g(this, e) && (t = /^-?[0-9]+$/.test(this.value)), t },
            real: function(e) { var t = !0; return g(this, e) && (t = /^-?([0-9]+(\.[0-9]+)?|\.[0-9]+)$/.test(this.value)), t },
            alphaNumeric: function(e) { var t = !0; return g(this, e) && (t = /^[0-9A-Za-z]+$/.test(this.value)), t },
            completelyFilled: function(e) {
                var t = [];
                for (var n = 0; n < this.elements.length; n++) {
                    var r = this.elements[n];
                    d.required.call(r) || t.push(r)
                }
                return t
            },
            passwordsMatch: function(e) {
                var t = [],
                    n = document.getElementById(e.field1),
                    r = document.getElementById(e.field2);
                return n.value != r.value && (t = [n, r]), t
            },
            required: function(e) { var t = !0; return this.tagName && (this.tagName.toLowerCase() === "select" ? t = d.selected.call(this) : this.type.toLowerCase() === "checkbox" || this.type.toLowerCase() === "radio" ? t = d.checked.call(this) : (this.tagName.toLowerCase() === "input" || this.tagName.toLowerCase() === "textarea") && this.type.toLowerCase() != "button" && (t = d.notBlank.call(this))), t },
            length: function(e) { var t = !0; return g(this, e) && (t = this.value.length >= e.min && this.value.length <= e.max), t },
            digits: function(e) {
                var t = !0;
                if (g(this, e)) {
                    var n = this.value.replace(/\s/g, ""),
                        r = n.split(/\./);
                    t = !1, n.length > 0 && (r.length == 1 && (r[1] = ""), e.integer > 0 ? t = r[0].length <= e.integer : t = !0, e.fraction > 0 && (t = t && r[1].length <= e.fraction))
                }
                return t
            },
            past: function(e) {
                var t = !0;
                if (g(this, e)) {
                    var n = y.call(this, e);
                    t = n.dateToValidate < n.dateToTestAgainst
                }
                return t
            },
            future: function(e) {
                var t = !0;
                if (g(this, e)) {
                    var n = y.call(this, e);
                    t = n.dateToValidate > n.dateToTestAgainst
                }
                return t
            },
            url: function(e) { var t = !0; return g(this, e) && (t = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(this.value)), t },
            step: function(e) {
                var t = !0;
                if (g(this, e)) {
                    var n = parseFloat(this.value),
                        r = parseFloat(e.max),
                        i = parseFloat(e.min),
                        s = parseFloat(e.value);
                    t = n <= r && n >= i && n % s === 0
                }
                return t
            },
            html5Required: function(e) { return !this.validity.valueMissing },
            html5Email: w,
            html5URL: w,
            html5Number: w,
            html5DateTime: w,
            html5DateTimeLocal: w,
            html5Date: w,
            html5Month: w,
            html5Time: w,
            html5Week: w,
            html5Range: w,
            html5Tel: w,
            html5Color: w,
            html5Pattern: function(e) { return !this.validity.patternMismatch },
            html5MaxLength: function(e) { return !this.validity.tooLong },
            html5Min: function(e) { return !this.validity.rangeUnderflow },
            html5Max: function(e) { return !this.validity.rangeOverflow },
            html5Step: function(e) { return !this.validity.stepMismatch }
        };
    return { Validator: d, init: p, wrapValidatorWithEmptyCheck: b, initializePublicValidators: h, compoundValidator: m, validate: E, runValidatorFor: U, interpolateConstraintDefaultMessage: W, createPublicValidator: v }
}),
function(e, t) { typeof define == "function" && define.amd ? define("domain/CompositionGraph", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.CompositionGraph = t()) }(this, function() {
    function n(n) {
        var r = n.type,
            i = n.name,
            s = n.parent,
            o = typeof e[r] == "undefined" ? { visited: !1, name: i, type: r, parents: [], children: [] } : e[r];
        s == null ? t.children.push(o) : (s.children.push(o), o.parents.push(s)), e[r] = o
    }

    function r() {
        var e = {},
            n = function r(t, n) {
                var i = typeof e[t.type] == "undefined" ? { visited: t.visited, name: t.name, type: t.type, parents: [], children: [] } : e[t.type];
                n !== null && i.parents.push(n);
                for (var s = 0; s < t.children.length; s++) i.children.push(r(t.children[s], i));
                return e[t.type] = i, i
            }(t, null);
        return { typeToNodeMap: e, root: n }
    }

    function i(t) { var n = e[t]; return typeof n == "undefined" ? null : n }

    function s(e) {
        var t = function n(e, t) {
            var r = { cycle: !1, path: t };
            if (e.visited) r.cycle = !0;
            else { e.visited = !0; var i = 0; while (i < e.children.length && !r.cycle) r = n(e.children[i], t + "." + e.children[i].name), i++ }
            return r
        }(e, e.name);
        return t.cycle || o(), t
    }

    function o() {
        (function e(t) { t.visited = !1; for (var n = 0; n < t.children.length; n++) e(t.children[n]) })(t)
    }

    function u() { return t }

    function a(e) { t = e }

    function f(n) { e = n.typeToNodeMap, t = n.root }
    var e = {},
        t = { visited: !1, name: "RootNode", type: -1, parents: [], children: [] };
    return { ROOT: -1, addNode: n, getNodeByType: i, analyze: s, getRoot: u, setRoot: a, clone: r, initializeFromClone: f }
}),
function(e, t) { typeof define == "function" && define.amd ? define("service/ConstraintService", ["service/ValidationService", "domain/CompositionGraph", "service/ExceptionService", "utils/MapUtils", "utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ConstraintService = t(e.regulaModules.ValidationService, e.regulaModules.CompositionGraph, e.regulaModules.ExceptionService, e.regulaModules.MapUtils, e.regulaModules.ArrayUtils)) }(this, function(e, t, n, r, i) {
    function f(r) {
        var i = typeof r.async == "undefined" ? a[r.name].async : r.async,
            u = r.validator;
        r.validatorRedefined && !r.formSpecific && (u = e.wrapValidatorWithEmptyCheck(u));
        var f = t.getNodeByType(r.constraintType);
        if (r.compound) {
            v(r.name, r.composingConstraints, r.params);
            var l = t.clone();
            d(r.name, r.composingConstraints);
            var c = t.analyze(f);
            if (c.cycle) throw t.initializeFromClone(l), new n.Exception.ConstraintDefinitionException("regula.override: The overriding composing-constraints you have specified have created a cyclic composition: " + c.path);
            i = !1;
            var h = 0;
            while (h < r.composingConstraints.length && !i) {
                var p = r.composingConstraints[h],
                    m = a[o[p.constraintType]];
                i = m.async, h++
            }
        }
        f !== null && function g(e) {
            for (var n = 0; n < e.parents.length; n++) {
                var r = e.parents[n];
                if (r.type !== t.ROOT) {
                    var s = o[r.type],
                        u = a[s];
                    u.async = i, g(r)
                }
            }
        }(f), a[r.name] = { async: i, formSpecific: r.formSpecific, constraintType: s[r.name], custom: !0, compound: r.compound, params: r.params, composingConstraints: r.composingConstraints, defaultMessage: r.defaultMessage, validator: u }, a[r.name].custom && r.validatorRedefined && e.createPublicValidator(r.name, a)
    }

    function l(t) {
        s[t.name] = u, o[u++] = t.name;
        var n = t.validator;
        t.formSpecific || (n = e.wrapValidatorWithEmptyCheck(t.validator)), a[t.name] = { async: t.async, formSpecific: t.formSpecific, validator: n, constraintType: s[t.name], custom: !0, compound: !1, params: t.params, defaultMessage: t.defaultMessage }, e.createPublicValidator(t.name, a)
    }

    function c(t) {
        v(t.name, t.constraints, t.params);
        var n = !1,
            r = 0;
        while (r < t.constraints.length && !n) {
            var i = t.constraints[r],
                f = o[i.constraintType];
            n = n || a[f].async, r++
        }
        s[t.name] = u, o[u++] = t.name, a[t.name] = { async: n, formSpecific: t.formSpecific, constraintType: s[t.name], custom: !0, compound: !0, params: t.params, reportAsSingleViolation: t.reportAsSingleViolation, composingConstraints: t.constraints, defaultMessage: t.defaultMessage, validator: e.compoundValidator }, e.createPublicValidator(t.name, a), d(t.name, t.constraints)
    }

    function h(e, t, r) {
        var i = { successful: !0, message: "", data: null },
            s = e.cloneNode(!1);
        if (s.tagName.toLowerCase() == "form" && !a[t].formSpecific) i = { successful: !1, message: n.generateExceptionMessage(e, t, "@" + t + " is not a form constraint, but you are trying to bind it to a form"), data: null };
        else if (s.tagName.toLowerCase() != "form" && a[t].formSpecific) i = { successful: !1, message: n.generateExceptionMessage(e, t, "@" + t + " is a form constraint, but you are trying to bind it to a non-form element"), data: null };
        else if ((typeof s.type == "undefined" || s.type.toLowerCase() != "checkbox" && s.type.toLowerCase() != "radio") && t == "Checked") i = { successful: !1, message: n.generateExceptionMessage(e, t, "@" + t + " is only applicable to checkboxes and radio buttons. You are trying to bind it to an input element that is neither a checkbox nor a radio button."), data: null };
        else if (s.tagName.toLowerCase() != "select" && t == "Selected") i = { successful: !1, message: n.generateExceptionMessage(e, t, "@" + t + " is only applicable to select boxes. You are trying to bind it to an input element that is not a select box."), data: null };
        else {
            var o = p(e, a[t], r);
            o.error ? i = { successful: !1, message: o.message, data: null } : i.data = r
        }
        return i
    }

    function p(e, t, r) {
        var s = { error: !1, message: "" };
        r.__size__ < t.params.length && (s = { error: !0, message: n.generateExceptionMessage(e, o[t.constraintType], "@" + o[t.constraintType] + " expects at least " + t.params.length + " parameter(s). However, you have provided only " + r.__size__), data: null });
        var u = [];
        for (var a = 0; a < t.params.length; a++) {
            var f = t.params[a];
            typeof r[f] == "undefined" && u.push(f)
        }
        return u.length > 0 && (s = { error: !0, message: n.generateExceptionMessage(e, o[t.constraintType], "You seem to have provided some optional or required parameters for @" + o[t.constraintType] + ", but you are still missing the following " + u.length + " required parameter(s): " + i.explode(u, ", ")), data: null }), s
    }

    function d(e, n) {
        var r = t.getNodeByType(s[e]);
        r == null && (t.addNode({ type: s[e], name: e, parent: null }), r = t.getNodeByType(s[e]));
        for (var i = 0; i < r.children.length; i++) {
            var u = r.children[i],
                f = [];
            for (var l = 0; l < u.parents.length; l++) u.parents[l] !== r && f.push(u.parents[l]);
            u.parents = f
        }
        r.children = [];
        for (var i = 0; i < n.length; i++) {
            var c = o[n[i].constraintType],
                h = a[c];
            t.addNode({ type: h.constraintType, name: o[h.constraintType], parent: r })
        }
    }

    function v(e, t, i) {
        for (var s = 0; s < t.length; s++) {
            if (typeof t[s].constraintType == "undefined") throw new n.Exception.ConstraintDefinitionException("In compound constraint " + e + ": A composing constraint has no constraint type specified.");
            var u = t[s],
                f = o[u.constraintType],
                l = { __size__: 0 };
            u.params = u.params || {};
            for (var c in u.params) u.params.hasOwnProperty(c) && r.put(l, c, u.params[c]);
            var h = 0;
            for (var d in u.params) u.params.hasOwnProperty(d) && h++;
            u.params.__size__ = h;
            for (var v = 0; v < i.length; v++) r.put(l, i[v], null);
            var m = p(null, a[f], l);
            if (m.error) throw new n.Exception.ConstraintDefinitionException("In compound constraint " + e + ": " + m.message)
        }
    }
    var s = {},
        o = {},
        u = 0;
    (function(e) {
        for (var t = 0; t < e.length; t++) s[e[t]] = t, o[t] = e[t];
        u = t, s.Between = s.Range, s.Matches = s.Pattern, s.Empty = s.Blank, s.NotEmpty = s.NotBlank, s.IsAlpha = s.Alpha, s.IsNumeric = s.Numeric, s.IsAlphaNumeric = s.AlphaNumeric
    })(["Checked", "Selected", "Max", "Min", "Range", "Between", "NotBlank", "NotEmpty", "Blank", "Empty", "Pattern", "Matches", "Email", "Alpha", "IsAlpha", "Numeric", "IsNumeric", "AlphaNumeric", "IsAlphaNumeric", "Integer", "Real", "CompletelyFilled", "PasswordsMatch", "Required", "Length", "Digits", "Past", "Future", "Step", "URL", "HTML5Required", "HTML5Email", "HTML5URL", "HTML5MaxLength", "HTML5Pattern", "HTML5Min", "HTML5Max", "HTML5Step"]);
    var a = { Checked: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.checked, constraintType: s.Checked, custom: !1, compound: !1, params: [], defaultMessage: "{label} needs to be checked." }, Selected: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.selected, constraintType: s.Selected, custom: !1, compound: !1, params: [], defaultMessage: "{label} needs to be selected." }, Max: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.max, constraintType: s.Max, custom: !1, compound: !1, params: ["value"], defaultMessage: "{label} needs to be lesser than or equal to {value}." }, Min: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.min, constraintType: s.Min, custom: !1, compound: !1, params: ["value"], defaultMessage: "{label} needs to be greater than or equal to {value}." }, Range: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.range, constraintType: s.Range, custom: !1, compound: !1, params: ["min", "max"], defaultMessage: "{label} needs to be between {min} and {max}." }, NotBlank: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.notBlank, constraintType: s.NotBlank, custom: !1, compound: !1, params: [], defaultMessage: "{label} cannot be blank." }, Blank: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.blank, constraintType: s.Blank, custom: !1, compound: !1, params: [], defaultMessage: "{label} needs to be blank." }, Pattern: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.matches, constraintType: s.Pattern, custom: !1, compound: !1, params: ["regex"], defaultMessage: "{label} needs to match {regex}{flags}." }, Email: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.email, constraintType: s.Email, custom: !1, compound: !1, params: [], defaultMessage: "{label} is not a valid email." }, Alpha: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.alpha, constraintType: s.Alpha, custom: !1, compound: !1, params: [], defaultMessage: "{label} can only contain letters." }, Numeric: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.numeric, constraintType: s.Numeric, custom: !1, compound: !1, params: [], defaultMessage: "Only numbers are required" }, AlphaNumeric: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.alphaNumeric, constraintType: s.AlphaNumeric, custom: !1, compound: !1, params: [], defaultMessage: "{label} can only contain numbers and letters." }, Integer: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.integer, constraintType: s.Integer, custom: !1, compound: !1, params: [], defaultMessage: "{label} must be an integer." }, Real: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.real, constraintType: s.Real, custom: !1, compound: !1, params: [], defaultMessage: "{label} must be a real number." }, CompletelyFilled: { async: !1, html5: !1, formSpecific: !0, validator: e.Validator.completelyFilled, constraintType: s.CompletelyFilled, custom: !1, compound: !1, params: [], defaultMessage: "{label} must be completely filled." }, PasswordsMatch: { async: !1, html5: !1, formSpecific: !0, validator: e.Validator.passwordsMatch, constraintType: s.PasswordsMatch, custom: !1, compound: !1, params: ["field1", "field2"], defaultMessage: "Passwords do not match." }, Required: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.required, constraintType: s.Required, custom: !1, compound: !1, params: [], defaultMessage: "{label} is required." }, Length: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.length, constraintType: s.Length, custom: !1, compound: !1, params: ["min", "max"], defaultMessage: "{label} length must be between {min} and {max}." }, Digits: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.digits, constraintType: s.Digits, custom: !1, compound: !1, params: ["integer", "fraction"], defaultMessage: "{label} must have up to {integer} digits and {fraction} fractional digits." }, Past: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.past, constraintType: s.Past, custom: !1, compound: !1, params: ["format"], defaultMessage: "{label} must be in the past." }, Future: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.future, constraintType: s.Future, custom: !1, compound: !1, params: ["format"], defaultMessage: "{label} must be in the future." }, Step: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.step, constraintType: s.Step, custom: !1, compound: !1, params: ["min", "max", "value"], defaultMessage: "{label} must be equal to {min} or greater, and equal to {max} or lesser, at increments of {value}." }, URL: { async: !1, html5: !1, formSpecific: !1, validator: e.Validator.url, constraintType: s.URL, custom: !1, compound: !1, params: [], defaultMessage: "{label} must be a valid URL." }, HTML5Required: { async: !1, html5: !0, inputType: null, attribute: "required", formSpecific: !1, validator: e.Validator.html5Required, constraintType: s.HTML5Required, custom: !1, compound: !1, params: [], defaultMessage: "{label} is required." }, HTML5Email: { async: !1, html5: !0, inputType: "email", attribute: null, formSpecific: !1, validator: e.Validator.html5Email, constraintType: s.HTML5Email, custom: !1, compound: !1, params: [], defaultMessage: "{label} is not a valid email." }, HTML5Pattern: { async: !1, html5: !0, inputType: null, attribute: "pattern", formSpecific: !1, validator: e.Validator.html5Pattern, constraintType: s.HTML5Pattern, custom: !1, compound: !1, params: ["pattern"], defaultMessage: "{label} needs to match {pattern}." }, HTML5URL: { async: !1, html5: !0, inputType: "url", attribute: null, formSpecific: !1, validator: e.Validator.html5URL, constraintType: s.HTML5URL, custom: !1, compound: !1, params: [], defaultMessage: "{label} is not a valid URL." }, HTML5MaxLength: { async: !1, html5: !0, inputType: null, attribute: "maxlength", formSpecific: !1, validator: e.Validator.html5MaxLength, constraintType: s.HTML5MaxLength, custom: !1, compound: !1, params: ["maxlength"], defaultMessage: "{label} must be less than {maxlength} characters." }, HTML5Min: { async: !1, html5: !0, inputType: null, attribute: "min", formSpecific: !1, validator: e.Validator.html5Min, constraintType: s.HTML5Min, custom: !1, compound: !1, params: ["min"], defaultMessage: "{label} needs to be greater than or equal to {min}." }, HTML5Max: { async: !1, html5: !0, inputType: null, attribute: "max", formSpecific: !1, validator: e.Validator.html5Max, constraintType: s.HTML5Max, custom: !1, compound: !1, params: ["max"], defaultMessage: "{label} needs to be lesser than or equal to {max}." }, HTML5Step: { async: !1, html5: !0, inputType: null, attribute: "step", formSpecific: !1, validator: e.Validator.html5Step, constraintType: s.HTML5Step, custom: !1, compound: !1, params: ["step"], defaultMessage: "{label} must be equal to the minimum value or greater at increments of {step}." } };
    return { Constraint: s, ReverseConstraint: o, firstCustomConstraintIndex: u, constraintDefinitions: a, override: f, custom: l, compound: c, verifyConstraintDefinition: h, verifyParameterCountMatches: p }
}),
function(e, t) { typeof define == "function" && define.amd ? define("parser/Parser", ["utils/MapUtils", "service/ExceptionService", "service/ConstraintService"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.Parser = t(e.regulaModules.MapUtils, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService)) }(this, function(e, t, n) {
    function r(e) { return e ? e.replace(/^\s+/, "").replace(/\s+$/, "") : "" }

    function i(e) { return e[0] }

    function s(t) {
        var n = t.str,
            r = t.delimiters.split(""),
            i = t.returnDelimiters || !1,
            s = t.returnEmptyTokens || !1,
            o = [],
            u = 0;
        for (var a = 0; a < n.length; a++)
            if (e.exists(r, n.charAt(a))) {
                var f = n.substring(u, a);
                f.length == 0 ? s && o.push(f) : o.push(f), i && o.push(n.charAt(a)), u = a + 1
            }
        if (u < n.length) {
            var f = n.substring(u, n.length);
            f.length == 0 ? s && o.push(f) : o.push(f)
        }
        return o
    }

    function o(o, u) {
        function l(e) {
            var t = { successful: !0, message: "", data: null },
                n = [];
            while (e.length > 0 && t.successful) t = c(e), n.push(t.data);
            return t.data = n, t
        }

        function c(e) {
            var n = { successful: !0, message: "", data: null },
                i = e.shift();
            return r(i).length == 0 && (i = e.shift()), i == "@" ? n = h(e) : n = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid constraint. Constraint definitions need to start with '@'") + " " + n.message, data: null }, n
        }

        function h(e) {
            var r = { Between: "Range", Matches: "Pattern", Empty: "Blank", NotEmpty: "NotBlank", IsAlpha: "Alpha", IsNumeric: "Integer", IsAlphaNumeric: "AlphaNumeric" },
                i = p(e);
            if (i.successful) {
                a = i.data, a = r[a] ? r[a] : a;
                if (n.constraintDefinitions[a]) {
                    i = m(e);
                    if (i.successful) {
                        i = n.verifyConstraintDefinition(o, a, i.data);
                        if (i.successful) {
                            var s = i.data;
                            i.data = { element: o, constraintName: a, definedParameters: s }
                        }
                    }
                } else i = { successful: !1, message: t.generateExceptionMessage(o, a, "I cannot find the specified constraint name. If this is a custom constraint, you need to define it before you bind to it") + " " + i.message, data: null }
            } else i = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid constraint name in constraint definition") + " " + i.message, data: null };
            return i
        }

        function p(e) {
            var n = r(e.shift()),
                i = d(n.charAt(0));
            if (i.successful) {
                var s = 1;
                while (s < n.length && i.successful) i = v(n.charAt(s)), s++;
                i.successful && (i.data = n)
            } else i = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid starting character for constraint name. Can only include A-Z, a-z, and _") + " " + i.message, data: null };
            return i
        }

        function d(e) { var n = { successful: !0, message: "", data: null }; if (!/[A-Za-z_]/.test(e) || typeof e == "undefined" || e == null) n = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid starting character"), data: null }; return n }

        function v(e) { var n = { successful: !0, message: "", data: null }; return /[0-9A-Za-z_]/.test(e) || (n = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid character in identifier. Can only include 0-9, A-Z, a-z, and _") + " " + n.message, data: null }), n }

        function m(n) {
            var s = { successful: !0, message: "", data: {} };
            if (i(n) == "(") {
                n.shift();
                var u = {};
                if (i(n) == ")") n.shift();
                else {
                    s = g(n);
                    if (s.successful) {
                        e.put(u, s.data.name, s.data.value), r(i(n)).length == 0 && n.shift();
                        while (n.length > 0 && i(n) == "," && s.successful) n.shift(), s = g(n), s.successful && (e.put(u, s.data.name, s.data.value), r(i(n)).length == 0 && n.shift());
                        if (s.successful) {
                            var f = n.shift();
                            r(f).length == 0 && (f = n.shift()), f != ")" ? s = { successful: !1, message: t.generateExceptionMessage(o, a, "Cannot find matching closing ) in parameter list") + " " + s.message, data: null } : s.data = u
                        }
                    } else s = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid parameter definition") + " " + s.message, data: null }
                }
            } else i(n) !== undefined && i(n) != "@" && (s = { successful: !1, message: t.generateExceptionMessage(o, a, "Unexpected character '" + i(n) + "'" + " after constraint definition") + " " + s.message, data: null });
            return s
        }

        function g(e) {
            var n = y(e);
            if (n.successful) {
                var r = n.data,
                    i = e.shift();
                i == "=" ? (n = b(e), n.successful ? n.data = { name: r, value: n.data } : n = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid parameter value") + " " + n.message, data: null }) : (e.unshift(i), n = { successful: !1, message: t.generateExceptionMessage(o, a, "'=' expected after parameter name " + n.message), data: null })
            } else n = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid parameter name. You might have unmatched parentheses") + " " + n.message, data: null };
            return n
        }

        function y(e) {
            var n = r(e.shift());
            n.length == 0 && (n = e.shift());
            var i = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid starting character for parameter name. Can only include A-Z, a-z, and _"), data: null };
            if (typeof n != "undefined") {
                i = d(n.charAt(0));
                if (i.successful) {
                    var s = 1;
                    while (s < n.length && i.successful) i = v(n.charAt(s)), s++;
                    i.successful && (i.data = n)
                } else i = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid starting character for parameter name. Can only include A-Z, a-z, and _") + " " + i.message, data: null }
            }
            return i
        }

        function b(e) {
            r(i(e)).length == 0 && e.shift();
            var n = { successful: !0, message: "", data: [] };
            if (i(e) == ")") n = { successful: !1, message: t.generateExceptionMessage(o, a, "Parameter value expected") + " " + n.message, data: null };
            else {
                n = w(e);
                var s = n.message;
                n.successful || (n = C(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = L(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = A(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = O(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = { successful: !1, message: t.generateExceptionMessage(o, a, "Parameter value must be a number, quoted string, regular expression, or a boolean") + " " + s, data: null })))))
            }
            return n
        }

        function w(e) { var n = E(e); return n.successful || (n = S(e), n.successful || (n = { successful: !1, message: t.generateExceptionMessage(o, a, "Parameter value is not a number") + " " + n.message, data: null })), n }

        function E(e) {
            var n = e.shift(),
                r = { successful: !0, message: "", data: null };
            return n == "-" ? (r = S(e), r.successful && (r.data = n + r.data)) : (e.unshift(n), r = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a negative number"), data: null }), r
        }

        function S(e) {
            var n = null;
            if (i(e) != ".") {
                n = T(e);
                if (i(e) == ".") {
                    var r = n.data;
                    n = x(e), n.successful && (n.data = r + n.data)
                }
            } else n = x(e);
            return n.successful || (n = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a positive number") + " " + n.message, data: null }), n
        }

        function x(e) {
            var n = e.shift(),
                r = T(e);
            return r.successful ? r.data = n + r.data : r = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a valid fraction"), data: null }, r
        }

        function T(e) {
            var n = r(e.shift()),
                i = N(n.charAt(0));
            if (i.successful) {
                var s = 1;
                while (s < n.length && i.successful) i = N(n.charAt(s)), s++;
                i.successful && (i.data = n)
            } else e.unshift(n), i = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a valid integer") + " " + i.message, data: [] };
            return i
        }

        function N(e) { var n = { successful: !0, message: "", data: null }; return /[0-9]/.test(e) || (n = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a valid digit"), data: null }), n }

        function C(e) {
            var n = e.shift(),
                r = "",
                s = { successful: !0, message: "", data: null };
            if (n == '"') {
                var u = !1;
                while (e.length > 0 && s.successful && !u) i(e) == '"' ? (u = !0, e.shift()) : (s = k(e), r += s.data);
                u || (s = { successful: !1, message: t.generateExceptionMessage(o, a, "Unterminated string literal"), data: null })
            } else e.unshift(n), s = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid quoted string"), data: null };
            return s.successful = s.successful && u, s.data = r, s
        }

        function k(e) {
            var t = "",
                n = e.shift();
            return n == "\\" && (t = e.shift()), { successful: !0, message: "", data: n + t }
        }

        function L(e) {
            var n = "",
                r = e.shift(),
                s = { successful: !0, message: "", data: null };
            if (r == "/") {
                n = r;
                var u = !1;
                while (e.length > 0 && s.successful && !u) i(e) == "/" ? (n += e.shift(), u = !0) : (s = k(e), n += s.data);
                u || (s = { successful: !1, message: t.generateExceptionMessage(o, a, "Unterminated regex literal"), data: null })
            } else e.unshift(r), s = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a regular expression"), data: null };
            return s.successful = s.successful && u, s.data = n, s
        }

        function A(e) {
            var n = e.shift(),
                i = { successful: !0, message: "", data: null };
            return r(n) == "true" || r(n) == "false" ? i = { successful: !0, message: "", data: n === "true" } : (e.unshift(n), i = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a boolean"), data: null }), i
        }

        function O(e) {
            var n = [],
                s = e.shift(),
                u = { successful: !0, message: "", data: null };
            if (s == "[") {
                r(i(e)).length == 0 && e.shift(), i(e) == "]" ? u = { successful: !0, message: "", data: "" } : u = M(e);
                if (u.successful) {
                    n.push(u.data), r(i(e)).length == 0 && e.shift();
                    while (e.length > 0 && i(e) == "," && u.successful) e.shift(), u = M(e), n.push(u.data), r(i(e)).length == 0 && e.shift();
                    u.data = n, s = e.shift(), r(s).length == 0 && e.shift(), s != "]" && (u = { successful: !1, message: t.generateExceptionMessage(o, a, "Cannot find matching closing ] in group definition") + " " + u.message, data: null })
                } else u = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid group definition") + " " + u.message, data: null }
            } else e.unshift(s), u = { successful: !1, message: t.generateExceptionMessage(o, a, "Not a valid group definition"), data: null };
            return u
        }

        function M(e) {
            var n = { successful: !0, message: "", data: "" },
                i = r(e.shift());
            i.length == 0 && (i = e.shift()), n = d(i.charAt(0));
            if (n.successful) {
                var s = 1;
                while (s < i.length && n.successful) n = v(i.charAt(s)), s++;
                n.successful && (n.data = i)
            } else n = { successful: !1, message: t.generateExceptionMessage(o, a, "Invalid starting character for group name. Can only include A-Z, a-z, and _") + " " + n.message, data: null };
            return n
        }
        var a = "",
            f = s({ str: r(u.replace(/\s*\n\s*/g, "")), delimiters: '@()[]=,"\\/-\\.', returnDelimiters: !0, returnEmptyTokens: !1 });
        return l(f)
    }
    return { parse: o }
}),
function(e, t) { typeof define == "function" && define.amd ? define("service/BindingService", ["utils/MapUtils", "service/GroupService", "utils/DOMUtils", "parser/Parser", "service/ConstraintService", "service/ExceptionService"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.BindingService = t(e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.DOMUtils, e.regulaModules.Parser, e.regulaModules.ConstraintService, e.regulaModules.ExceptionService)) }(this, function(e, t, n, r, i, s) {
    function a() { o === null && f() }

    function f() { o = { Default: {} } }

    function l() { return o }

    function c(n, r) {
        if (e.isEmpty(o[r][n])) {
            delete o[r][n];
            if (e.isEmpty(o[r])) {
                delete o[r];
                var i = t.Group[r];
                delete t.Group[r], delete t.ReverseGroup[i], t.deletedGroupIndices.push(i)
            }
        }
    }

    function h(e) {
        var t = { successful: !0, message: "", data: null },
            n = typeof e.cloneNode != "undefined" ? e.cloneNode(!1) : e,
            r = null;
        return typeof n.tagName != "undefined" && (r = n.tagName.toLowerCase()), r !== "form" && r !== "select" && r !== "textarea" && r !== "input" ? t = { successful: !1, message: r + "#" + e.id + " is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements.", data: null } : r === "input" && e.getAttribute("type") === null && (t = { successful: !1, message: r + "#" + e.id + " does not have a type attribute.", data: null }), t
    }

    function p(e) {
        var t = e.element,
            i;
        t === null ? i = n.getElementsByAttribute(document.body, "*", "data-constraints") : i = [t];
        var s = { successful: !0, message: "", data: null },
            o = 0;
        while (o < i.length && s.successful) {
            t = i[o], s = h(t);
            if (s.successful) {
                t.id || (t.id = n.generateRandomId());
                var u = t.getAttribute("data-constraints");
                if (u !== null) {
                    s = r.parse(t, u);
                    if (s.successful && s.data !== null) {
                        var a = s.data,
                            f = 0;
                        while (s.successful && f < a.length) {
                            var l = a[f];
                            s = g(l.element, l.constraintName, l.definedParameters), f++
                        }
                    }
                }
                o++
            }
        }
        return s
    }

    function d(t) {
        function a(e, t, r) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.id || (s.id = n.generateRandomId()), e[s.id] || (e[s.id] = []);
                var o = { constraint: r.constraint, params: {} };
                r.value === null && (o.params[r.attribute] = n.getAttributeValueForElement(s, r.attribute)), e[s.id].push(o)
            }
        }
        var r = t.element,
            s = { successful: !0, message: "", data: null },
            o = [{ attribute: "required", value: null, constraint: i.Constraint.HTML5Required }, { attribute: "type", value: "email", constraint: i.Constraint.HTML5Email }, { attribute: "type", value: "url", constraint: i.Constraint.HTML5URL }, { attribute: "pattern", value: null, constraint: i.Constraint.HTML5Pattern }, { attribute: "maxlength", value: null, constraint: i.Constraint.HTML5MaxLength }, { attribute: "min", value: null, constraint: i.Constraint.HTML5Min }, { attribute: "max", value: null, constraint: i.Constraint.HTML5Max }, { attribute: "step", value: null, constraint: i.Constraint.HTML5Step }],
            u = { email: i.Constraint.HTML5Email, url: i.Constraint.HTML5URL },
            f = {};
        if (r === null)
            for (var l = 0; l < o.length; l++) {
                var c = o[l],
                    p = null;
                c.value == null ? p = n.getElementsByAttribute(document.body, "*", c.attribute) : p = n.getElementsByAttribute(document.body, "*", c.attribute, c.value), a(f, p, c)
            } else {
                r.id || (r.id = n.generateRandomId()), s = h(r);
                if (s.successful) {
                    f[r.id] = [];
                    for (var l = 0; l < o.length; l++) {
                        var c = o[l];
                        if (c.value === null) {
                            if (n.getAttributeValueForElement(r, c.attribute) != null) {
                                var d = { constraint: c.constraint, params: {} };
                                d.params[c.attribute] = n.getAttributeValueForElement(r, c.attribute), f[r.id].push(d)
                            }
                        } else {
                            var v = n.getAttributeValueForElement(r, c.attribute);
                            v != null && typeof u[v] != "undefined" && f[r.id].push({ constraint: u[v], params: {} })
                        }
                    }
                }
            }
        return e.iterateOverMap(f, function(e, t, n) {
            var r = document.getElementById(e);
            for (var o = 0; o < t.length; o++) {
                var u = t[o];
                s = g(r, i.ReverseConstraint[u.constraint], u.params)
            }
        }), s
    }

    function v(e) {
        var t = { successful: !0, message: "", data: null },
            n = e.element,
            r = e.constraints || [],
            i = n && n.tagName ? n.tagName.toLowerCase() : null;
        if (!n) t = { successful: !1, message: "regula.bind expects a non-null element attribute in the options argument. " + s.explodeParameters(e), data: null };
        else if (n.nodeType !== 1) t = { successful: !1, message: "regula.bind: element attribute is expected to be an HTMLElement, but was of unexpected type: " + typeof n + ". " + s.explodeParameters(e), data: null };
        else if (i != "form" && i != "select" && i != "textarea" && i != "input") t = { successful: !1, message: i + "#" + n.id + " is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements. " + s.explodeParameters(e), data: null };
        else if (r.length > 0) { var o = 0; while (o < r.length && t.successful) t = m(r[o], e), o++ } else t = p({ element: n });
        return t
    }

    function m(n, r) {
        function u(e, t) {
            var n = {},
                r = [];
            for (var i = 0; i < e.length; i++) r.push(e[i]), n[e[i]] = !0;
            for (var s = 0; s < t.length; s++) n[t[s]] || r.push(t[s]);
            return r
        }

        function a(t, n) { var r = []; for (var i = 0; i < n.length; i++) e.exists(t, n[i]) || r.push(n[i]); return r }

        function f(n, r, s) {
            var f = o[t.ReverseGroup[t.Group.Default]][n.id][i.ReverseConstraint[r]].groups,
                l = [];
            s.groups ? l = s.groups : l.push(t.ReverseGroup[t.Group.Default]), e.exists(l, t.ReverseGroup[t.Group.Default]) || l.push(t.ReverseGroup[t.Group.Default]);
            var h = a(l, u(f, l));
            for (var p = 0; p < h.length; p++) {
                var d = h[p];
                delete o[d][n.id][i.ReverseConstraint[r]], c(n.id, d)
            }
        }
        var l = { successful: !0, message: "", data: null },
            h = r.element,
            p = n.overwriteConstraint || !1,
            d = n.overwriteParameters || !1,
            v = n.constraintType,
            m = n.params || {},
            y = { __size__: 0 },
            b = m.groups;
        if (typeof v == "undefined") l = { successful: !1, message: "regula.bind expects a valid constraint type for each constraint in constraints attribute of the options argument. " + s.explodeParameters(r), data: null };
        else if (m && m.groups)
            if (m.groups instanceof Array) {
                var w = [],
                    E = 0;
                while (E < m.groups.length && l.successful) typeof m["groups"][E] == "string" ? w.push(m.groups[E]) : typeof t.ReverseGroup[m["groups"][E]] != "undefined" ? w.push(t.ReverseGroup[m.groups[E]]) : l = { successful: !1, message: "Invalid group: " + m.groups[E] + ". " + s.explodeParameters(r), data: null }, E++;
                l.successful && (m.groups = w)
            } else l = { successful: !1, message: "The groups parameter must be an array of enums or strings " + s.explodeParameters(r), data: null };
        if (l.successful) {
            if (!o[t.ReverseGroup[t.Group.Default]][h.id] || !o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]]) {
                for (var S in m) m.hasOwnProperty(S) && e.put(y, S, m[S]);
                l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y)
            } else if (p) {
                for (var S in m) m.hasOwnProperty(S) && e.put(y, S, m[S]);
                l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y), l.successful && f(h, v, m)
            } else {
                var x = o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]];
                for (var S in x) x.hasOwnProperty(S) && e.put(y, S, x[S]);
                if (d) {
                    for (var S in m) m.hasOwnProperty(S) && e.put(y, S, m[S]);
                    l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y), l.successful && f(h, v, y)
                } else
                    for (var S in m) m.hasOwnProperty(S) && (x[S] || e.put(y, S, m[S]))
            }
            l.successful && (l = g(h, i.ReverseConstraint[v], y))
        }
        return m.groups = b, l
    }

    function g(n, r, u) {
        var a = { successful: !0, message: "", data: null };
        u.groups || e.put(u, "groups", [t.ReverseGroup[t.Group.Default]]);
        var f = u.groups;
        f.indexOf(t.ReverseGroup[t.Group.Default]) === -1 && (f.push(t.ReverseGroup[t.Group.Default]), u.groups = f);
        for (var l = 0; l < f.length; l++) {
            var c = f[l];
            if (!o[c]) {
                var h = -1;
                t.deletedGroupIndices.length > 0 ? h = t.deletedGroupIndices.pop() : h = t.firstCustomGroupIndex++, t.Group[c] = h, t.ReverseGroup[h] = c, o[c] = {}
            }
            o[c][n.id] || (o[c][n.id] = {}), o[c][n.id][r] = u
        }
        if (i.constraintDefinitions[r].html5)
            if (n.getAttribute("type") !== null && i.constraintDefinitions[r].inputType !== null && n.getAttribute("type") !== i.constraintDefinitions[r].inputType) a = { successful: !1, message: s.generateExceptionMessage(n, r, "Element type of " + n.getAttribute("type") + " conflicts with type of constraint @" + r + ": " + i.constraintDefinitions[r].inputType), data: null };
            else {
                var p = i.constraintDefinitions[r].attribute,
                    d = i.constraintDefinitions[r].inputType;
                (p !== null && n.getAttribute(p) === null || d !== null && n.getAttribute("type") === null) && y(n, r, u)
            }
        return a
    }

    function y(e, t, n) {
        if (t === i.ReverseConstraint[i.Constraint.HTML5Required]) e.setAttribute("required", "true");
        else { var r = i.constraintDefinitions[t]; for (var s = 0; s < r.params.length; s++) e.setAttribute(r.params[s], n[r.params[s]]) }
        var o = e.getAttribute("class");
        /regula-modified/.test(o) || e.setAttribute("class", o + " regula-modified")
    }

    function b(e) {
        var t = !1;
        for (var n = 0; n < e.elements.length; n++) {
            var r = e.elements[n].id,
                u = e.constraints || [];
            if (u.length == 0)
                for (var a in o) o.hasOwnProperty(a) && typeof o[a][r] != "undefined" && (delete o[a][r], a !== "Default" && c(r, a), t = !0);
            else
                for (var f = 0; f < u.length; f++) { var l = u[f]; for (var a in o) o.hasOwnProperty(a) && typeof o[a][r] != "undefined" && (delete o[a][r][i.ReverseConstraint[l]], a !== "Default" && c(r, a), t = !0) }
        }
        if (e.elements.length > 0 && !t) throw new s.Exception.IllegalArgumentException("Element with id " + r + " does not have any constraints bound to it. " + s.explodeParameters(e))
    }

    function w(e) {
        var n = e.elementId,
            r = e.group,
            s = e.constraint,
            u = typeof o[t.ReverseGroup[t.Group.Default]][n] != "undefined";
        if (u && typeof r != "undefined" && typeof s == "undefined") {
            var a = t.ReverseGroup[r];
            u = typeof a != "undefined" && typeof o[a][n] != "undefined"
        } else if (u && typeof r == "undefined" && typeof s != "undefined") {
            var f = i.ReverseConstraint[s];
            u = typeof f != "undefined" && typeof o[t.ReverseGroup[t.Group.Default]][n][f] != "undefined"
        } else if (u && typeof r != "undefined" && typeof s != "undefined") {
            var a = t.ReverseGroup[r],
                f = i.ReverseConstraint[s];
            u = typeof a != "undefined" && typeof f != "undefined" && typeof o[a][n] != "undefined" && typeof o[a][n][f] != "undefined"
        }
        return u
    }
    var o = null,
        u = {};
    return { initializeBoundConstraints: a, resetBoundConstraints: f, getBoundConstraints: l, removeElementAndGroupFromBoundConstraintsIfEmpty: c, bindAfterParsing: p, bindHTML5ValidationConstraints: d, bindFromOptions: v, unbind: b, isBound: w }
}),
function(e, t) { typeof define == "function" && define.amd ? define("regula", ["utils/MapUtils", "utils/DOMUtils", "service/BindingService", "service/ExceptionService", "service/ConstraintService", "service/ValidationService", "service/GroupService"], t) : (e.regula = t(e.regulaModules.MapUtils, e.regulaModules.DOMUtils, e.regulaModules.BindingService, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService, e.regulaModules.ValidationService, e.regulaModules.GroupService), e.regula._modules = e.regulaModules, e.regulaModules = undefined) }(this, function(e, t, n, r, i, s, o) {
    function f(t) { e.iterateOverMap(t, function(e, t, n) { typeof u[e] != "undefined" && (u[e] = t) }) }

    function l(e) {
        var i = { successful: !0, message: "", data: null };
        if (typeof e == "undefined" || !e) n.resetBoundConstraints(), u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({ element: null })), i.successful && (i = n.bindAfterParsing({ element: null }));
        else {
            var s = e.elements;
            if (typeof s == "undefined" || !s) u.enableHTML5Validation && t.supportsHTML5Validation() && typeof e.element != "undefined" && e.element !== null && (i = n.bindHTML5ValidationConstraints({ element: e.element })), i.successful && (i = n.bindFromOptions(e));
            else { var o = 0; while (i.successful && o < s.length) e.element = s[o], u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({ element: e.element })), i.successful ? (i = n.bindFromOptions(e), i.successful || (i.message = "regula.bind: Element " + (o + 1) + " of " + s.length + " failed: " + i.message)) : i.message = "regula.bind: Failed binding HTML5 validation constraints: Element " + (o + 1) + " of " + s.length + " failed: " + i.message, o++ }
        }
        if (!i.successful) throw new r.Exception.BindException(i.message)
    }

    function c(e) {
        if (typeof e == "undefined" || !e) n.resetBoundConstraints();
        else {
            if (typeof e.elementId == "undefined" && typeof e.elements == "undefined") throw new r.Exception.IllegalArgumentException("regula.unbind requires an elementId attribute, or an elements attribute if options are provided");
            if (!(typeof e.elements == "undefined" || e.elements instanceof Array)) throw new r.Exception.IllegalArgumentException("regula.unbind expects the elements attribute to be an array, if it is provided");
            if (typeof e.elements == "undefined") { e.elements = [document.getElementById(e.elementId)]; if (e.elements[0] === null) throw new r.Exception.IllegalArgumentException("Element with id " + e.elementId + " does not have any constraints bound to it. " + r.explodeParameters(e)) }
            n.unbind(e)
        }
    }

    function h(e) {
        if (typeof e == "undefined") throw new r.Exception.IllegalArgumentException("regula.isBound expects options");
        var t = e.element,
            i = e.elementId;
        if (typeof t == "undefined" && typeof i == "undefined") throw new r.Exception.IllegalArgumentException("regula.isBound expects at the very least, either an element or elementId attribute");
        if (e.hasOwnProperty("constraint") && typeof e.constraint == "undefined") throw new r.Exception.IllegalArgumentException("Undefined constraint was supplied as a parameter");
        if (e.hasOwnProperty("group") && typeof e.group == "undefined") throw new r.Exception.IllegalArgumentException("Undefined group was supplied as a parameter");
        return typeof t != "undefined" && (i = t.id), n.isBound({ elementId: i, group: e.group, constraint: e.constraint })
    }

    function p(e) {
        if (!e) throw new r.Exception.IllegalArgumentException("regula.override expects options");
        if (typeof e.constraintType == "undefined") throw new r.Exception.IllegalArgumentException("regula.override expects a valid constraintType attribute in the options argument");
        var t = i.ReverseConstraint[e.constraintType];
        if (typeof t == "undefined") throw new r.Exception.IllegalArgumentException("regula.override: I could not find the specified constraint. Perhaps it has not been defined? Function received: " + r.explodeParameters(e));
        var n = !1,
            s = i.constraintDefinitions[t].formSpecific;
        i.constraintDefinitions[t].custom && (s = typeof e.formSpecific == "undefined" ? i.constraintDefinitions[t].formSpecific : e.formSpecific);
        var o = i.constraintDefinitions[t].custom && typeof e.async != "undefined" ? e.async : i.constraintDefinitions[t].async,
            u = i.constraintDefinitions[t].custom ? e.params || i.constraintDefinitions[t].params : i.constraintDefinitions[t].params,
            a = e.defaultMessage || i.constraintDefinitions[t].defaultMessage,
            f = i.constraintDefinitions[t].compound,
            l = e.constraints || i.constraintDefinitions[t].constraints,
            c = i.constraintDefinitions[t].validator;
        i.constraintDefinitions[t].custom && !i.constraintDefinitions[t].compound && typeof e.validator != "undefined" && (c = e.validator, n = !0);
        if (typeof s != "boolean") throw new r.Exception.IllegalArgumentException("regula.override expects the formSpecific attribute in the options argument to be a boolean");
        if (typeof c != "function") throw new r.Exception.IllegalArgumentException("regula.override expects the validator attribute in the options argument to be a function");
        if (!(u instanceof Array)) throw new r.Exception.IllegalArgumentException("regula.override expects the params attribute in the options argument to be an array");
        if (typeof a != "string") throw new r.Exception.IllegalArgumentException("regula.override expects the defaultMessage attribute in the options argument to be a string");
        i.override({ async: o, formSpecific: s, name: t, constraintType: e.constraintType, compound: f, params: u, composingConstraints: l, defaultMessage: a, validator: c, validatorRedefined: n })
    }

    function d(e) {
        if (!e) throw new r.Exception.IllegalArgumentException("regula.custom expects options");
        var t = e.name,
            n = e.formSpecific || !1,
            s = e.validator,
            o = e.params || [],
            u = e.defaultMessage || "",
            a = typeof e.async == "undefined" ? !1 : e.async;
        if (!t) throw new r.Exception.IllegalArgumentException("regula.custom expects a name attribute in the options argument");
        if (typeof t != "string") throw new r.Exception.IllegalArgumentException("regula.custom expects the name attribute in the options argument to be a string");
        if (t.replace(/\s/g, "").length == 0) throw new r.Exception.IllegalArgumentException("regula.custom cannot accept an empty string for the name attribute in the options argument");
        if (typeof n != "boolean") throw new r.Exception.IllegalArgumentException("regula.custom expects the formSpecific attribute in the options argument to be a boolean");
        if (!s) throw new r.Exception.IllegalArgumentException("regula.custom expects a validator attribute in the options argument");
        if (typeof s != "function") throw new r.Exception.IllegalArgumentException("regula.custom expects the validator attribute in the options argument to be a function");
        if (o.constructor.toString().indexOf("Array") < 0) throw new r.Exception.IllegalArgumentException("regula.custom expects the params attribute in the options argument to be an array");
        if (typeof u != "string") throw new r.Exception.IllegalArgumentException("regula.custom expects the defaultMessage attribute in the options argument to be a string");
        if (i.constraintDefinitions[t]) throw new r.Exception.IllegalArgumentException("There is already a constraint called " + t + ". If you wish to override this constraint, use regula.override");
        i.custom({ async: a, name: t, formSpecific: n, validator: s, custom: !0, compound: !1, params: o, defaultMessage: u })
    }

    function v(e) {
        if (!e) throw new r.Exception.IllegalArgumentException("regula.compound expects options");
        var t = e.name,
            n = e.constraints || [],
            s = e.formSpecific || !1,
            o = e.defaultMessage || "",
            u = e.params || [],
            a = typeof e.reportAsSingleViolation == "undefined" ? !1 : e.reportAsSingleViolation;
        if (!t) throw new r.Exception.IllegalArgumentException("regula.compound expects a name attribute in the options argument");
        if (typeof t != "string") throw new r.Exception.IllegalArgumentException("regula.compound expects name to be a string parameter");
        if (u.constructor.toString().indexOf("Array") < 0) throw new r.Exception.IllegalArgumentException("regula.compound expects the params attribute in the options argument to be an array");
        if (n.length == 0) throw new r.Exception.IllegalArgumentException("regula.compound expects an array of composing constraints under a constraints attribute in the options argument");
        if (i.constraintDefinitions[t]) throw new r.Exception.IllegalArgumentException("regula.compound: There is already a constraint called " + t + ". If you wish to override this constraint, use regula.override");
        i.compound({ name: t, formSpecific: s, params: u, reportAsSingleViolation: a, constraints: n, defaultMessage: o })
    }

    function m(e, t) {
        s.init({ config: u, ReverseConstraint: i.ReverseConstraint, constraintDefinitions: i.constraintDefinitions, boundConstraints: n.getBoundConstraints() });
        var o = [];
        if (typeof e == "undefined" || typeof e.groups == "undefined" || e.groups instanceof Array) {
            if (typeof e != "undefined" && typeof e.groups != "undefined" && e.groups.length == 0) throw new r.Exception.IllegalArgumentException("regula.validate: If a groups attribute is provided, it must not be empty.");
            if (typeof e != "undefined" && e.hasOwnProperty("constraintType") && typeof e.constraintType == "undefined") throw new r.Exception.IllegalArgumentException("regula.validate: If a constraintType attribute is provided, it cannot be undefined.");
            typeof t == "undefined" && typeof e == "function" && (e = { callback: e }), typeof t != "undefined" && (e.callback = t);
            if (typeof e != "undefined" && typeof e.elements != "undefined") {
                if (!(e.elements instanceof Array)) throw new r.Exception.IllegalArgumentException("regula.validate: If an elements attribute is provided, it must be an array.");
                if (e.elements.length == 0) throw new r.Exception.IllegalArgumentException("regula.validate: If an elements attribute is provided, it must not be empty.");
                o = s.validate(e)
            } else o = s.validate(e);
            return o
        }
        throw new r.Exception.IllegalArgumentException("regula.validate: If a groups attribute is provided, it must be an array.")
    }
    var u = { validateEmptyFields: !0, enableHTML5Validation: !0, debug: !1 },
        a = { DMY: "DMY", MDY: "MDY", YMD: "YMD" };
    return n.initializeBoundConstraints(), s.initializePublicValidators(i.constraintDefinitions), { configure: f, bind: l, unbind: c, isBound: h, validate: m, custom: d, compound: v, override: p, Constraint: i.Constraint, Group: o.Group, DateFormat: a, Exception: r.Exception }
});
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function(e) {
    function t(e) { return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void n.error("Method " + e + " does not exist on jQuery.regula") : i.bind.apply(this, arguments) }
    var n = e,
        i = { bind: function(t) { return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, { elements: this.get() })), regula.bind(t), this }, unbind: function(t) { return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, { elements: this.get() })), regula.unbind(t), this }, isBound: function(t) { return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, { element: this.get(0) })), regula.isBound(t), this }, validate: function(t) { return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, { elements: this.get() })), regula.validate(t) }, custom: function(e) { return regula.custom(e), this }, compound: function(e) { return regula.compound(e), this }, override: function(e) { return regula.override(e), this } };
    i.on = i.bind, i.off = i.unbind, n.fn.regula = t, n.regula = t
});

/**
 * @module       jQuery Form Plugin
 * @version      3.51
 * @author       M. Alsup
 * @see          http://malsup.com/jquery/form/
 * @license      MIT and GPL licenses
 */
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["../jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto) }(function(e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() { i.clk = i.clk_x = i.clk_y = null }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() { if (!i) return this.attr.apply(this, arguments); var e = this.prop.apply(this, arguments); return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) { var o = r(t.extraData); for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]) }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) { r.data = t.formData ? t.formData : n, c && c.call(this, e, r) }, e.ajax(s)
        }

        function s(r) {
            function n(e) { var t = null; try { e.contentWindow && (t = e.contentWindow.document) } catch (r) { a("cannot get iframe.contentWindow document: " + r) } if (t) return t; try { t = e.contentDocument ? e.contentDocument : e.document } catch (r) { a("cannot get iframe.contentDocument: " + r), t = e.document } return t }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) { a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0 }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m.timeout && (j = setTimeout(function() { T = !0, s(D) }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try { w.submit() } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally { w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove() }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) { var t = { "content-type": m.dataType }; return t[e.toLowerCase()] }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try { E = _(x, c, m) } catch (y) { i = "parsererror", x.error = r = y || i }
                        } catch (y) { a("error caught: ", y), i = "error", x.error = r = y || i }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() { m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function(e) { x.abort(e) }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try { g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop") } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function(e, t) { return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null },
                C = e.parseJSON || function(e) { return window.eval("(" + e + ")") },
                _ = function(t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() { f.resetForm() }), t.clearForm && x.push(function() { f.clearForm(t.includeHidden) }), !t.dataType && t.target) {
            var y = t.success || function() {};
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function(e, r, a) { for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f]) }, t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() { return "" !== e(this).val() }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() { A = s(v) }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) { if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) { var i = { s: this.selector, c: this.context }; return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() { e(i.s, i.c).ajaxForm(n) }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) } return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r) }, e.fn.ajaxFormUnbind = function() { return this.unbind("submit.form-plugin click.form-plugin") }, e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({ name: f, value: e(d).val(), type: d.type }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({ name: f, value: m[l] });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: "", type: d.type })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({ name: f, value: m, type: d.type, required: d.required }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({ name: f, value: g.val() }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }))
        }
        return a
    }, e.fn.formSerialize = function(t) { return e.param(this.formToArray(t)) }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({ name: a, value: n[i] });
                else null !== n && "undefined" != typeof n && r.push({ name: this.name, value: n })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) { return this.each(function() { e("input,select,textarea", this).clearFields(t) }) }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) { return void 0 === e && (e = !0), this.each(function() { this.disabled = !e }) }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});

/**
 * @module       Swiper 3.1.7
 * @description  Most modern mobile touch slider and framework with
 *               hardware accelerated transitions
 * @author       Vladimir Kharlampidi
 * @see          http://www.idangero.us/swiper/
 * @licesne      MIT License
 */
! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(a) {
            var s;
            return e(this).each(function() {
                var e = new t(this, a);
                s || (s = e)
            }), s
        }
    }
    var a, t = function(e, s) {
        function r() { return "horizontal" === v.params.direction }

        function i(e) { return Math.floor(e) }

        function n() { v.autoplayTimeoutId = setTimeout(function() { v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? s.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext() }, v.params.autoplay) }

        function o(e, t) {
            var s = a(e.target);
            if (!s.is(t))
                if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) { var r; return s.parents().each(function(e, a) { a === t && (r = t) }), r ? t : void 0 }
            return 0 === s.length ? void 0 : s[0]
        }

        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                s = new t(function(e) { e.forEach(function(e) { v.onResize(!0), v.emit("onObserverUpdate", v, e) }) });
            s.observe(e, { attributes: "undefined" == typeof a.attributes ? !0 : a.attributes, childList: "undefined" == typeof a.childList ? !0 : a.childList, characterData: "undefined" == typeof a.characterData ? !0 : a.characterData }), v.observers.push(s)
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!v.params.allowSwipeToNext && (r() && 39 === a || !r() && 40 === a)) return !1;
            if (!v.params.allowSwipeToPrev && (r() && 37 === a || !r() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length) return;
                    var s = { left: window.pageXOffset, top: window.pageYOffset },
                        i = window.innerWidth,
                        n = window.innerHeight,
                        o = v.container.offset();
                    v.rtl && (o.left = o.left - v.container[0].scrollLeft);
                    for (var l = [
                            [o.left, o.top],
                            [o.left + v.width, o.top],
                            [o.left, o.top + v.height],
                            [o.left + v.width, o.top + v.height]
                        ], p = 0; p < l.length; p++) {
                        var d = l[p];
                        d[0] >= s.left && d[0] <= s.left + i && d[1] >= s.top && d[1] <= s.top + n && (t = !0)
                    }
                    if (!t) return
                }
                r() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !v.rtl || 37 === a && v.rtl) && v.slideNext(), (37 === a && !v.rtl || 39 === a && v.rtl) && v.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && v.slideNext(), 38 === a && v.slidePrev())
            }
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = v.mousewheel.event,
                t = 0;
            if (e.detail) t = -e.detail;
            else if ("mousewheel" === a)
                if (v.params.mousewheelForceToAxis)
                    if (r()) {
                        if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                        t = e.wheelDeltaX
                    } else {
                        if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                        t = e.wheelDeltaY
                    }
            else t = e.wheelDelta;
            else if ("DOMMouseScroll" === a) t = -e.detail;
            else if ("wheel" === a)
                if (v.params.mousewheelForceToAxis)
                    if (r()) {
                        if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                        t = -e.deltaX
                    } else {
                        if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                        t = -e.deltaY
                    }
            else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            if (v.params.mousewheelInvert && (t = -t), v.params.freeMode) { var s = v.getWrapperTranslate() + t * v.params.mousewheelSensitivity; if (s > v.minTranslate() && (s = v.minTranslate()), s < v.maxTranslate() && (s = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(s), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function() { v.slideReset() }, 300)), 0 === s || s === v.maxTranslate()) return } else {
                if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60)
                    if (0 > t)
                        if (v.isEnd && !v.params.loop || v.animating) { if (v.params.mousewheelReleaseOnEdges) return !0 } else v.slideNext();
                else if (v.isBeginning && !v.params.loop || v.animating) { if (v.params.mousewheelReleaseOnEdges) return !0 } else v.slidePrev();
                v.mousewheel.lastScrollTime = (new window.Date).getTime()
            }
            return v.params.autoplay && v.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        }

        function c(e, t) {
            e = a(e);
            var s, i, n;
            s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), n = e.attr("data-swiper-parallax-y"), i || n ? (i = i || "0", n = n || "0") : r() ? (i = s, n = "0") : (n = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%" : n * t + "px", e.transform("translate3d(" + i + ", " + n + ",0px)")
        }

        function u(e) { return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e }
        if (!(this instanceof t)) return new t(e, s);
        var m = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationHiddenClass: "swiper-pagination-hidden", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
            f = s && s.virtualTranslate;
        s = s || {};
        for (var h in m)
            if ("undefined" == typeof s[h]) s[h] = m[h];
            else if ("object" == typeof s[h])
            for (var g in m[h]) "undefined" == typeof s[h][g] && (s[h][g] = m[h][g]);
        var v = this;
        if (v.params = s, v.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (v.$ = a, v.container = a(e), 0 !== v.container.length)) {
            if (v.container.length > 1) return void v.container.each(function() { new t(this, s) });
            v.container[0].swiper = v, v.container.data("swiper", v), v.classNames.push("swiper-container-" + v.params.direction), v.params.freeMode && v.classNames.push("swiper-container-free-mode"), v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1), (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"), "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect), "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1), "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof f && (v.params.virtualTranslate = !0)), v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1), v.wrapper = v.container.children("." + v.params.wrapperClass), v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")), v.rtl = r() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")), v.rtl && v.classNames.push("swiper-container-rtl"), v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")), v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"), v.device.android && v.classNames.push("swiper-container-android"), v.container.addClass(v.classNames.join(" ")), v.translate = 0, v.progress = 0, v.velocity = 0, v.lockSwipeToNext = function() { v.params.allowSwipeToNext = !1 }, v.lockSwipeToPrev = function() { v.params.allowSwipeToPrev = !1 }, v.lockSwipes = function() { v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1 }, v.unlockSwipeToNext = function() { v.params.allowSwipeToNext = !0 }, v.unlockSwipeToPrev = function() { v.params.allowSwipeToPrev = !0 }, v.unlockSwipes = function() { v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0 }, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"), v.imagesToLoad = [], v.imagesLoaded = 0, v.loadImage = function(e, a, t, s, r) {
                function i() { r && r() }
                var n;
                e.complete && s ? i() : a ? (n = new window.Image, n.onload = i, n.onerror = i, t && (n.srcset = t), a && (n.src = a)) : i()
            }, v.preloadImages = function() {
                function e() { "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v))) }
                v.imagesToLoad = v.container.find("img");
                for (var a = 0; a < v.imagesToLoad.length; a++) v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), v.imagesToLoad[a].srcset || v.imagesToLoad[a].getAttribute("srcset"), !0, e)
            }, v.autoplayTimeoutId = void 0, v.autoplaying = !1, v.autoplayPaused = !1, v.startAutoplay = function() { return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void n()) : !1 }, v.stopAutoplay = function() { v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v)) }, v.pauseAutoplay = function(e) { v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, n()) : v.wrapper.transitionEnd(function() { v && (v.autoplayPaused = !1, v.autoplaying ? n() : v.stopAutoplay()) })) }, v.minTranslate = function() { return -v.snapGrid[0] }, v.maxTranslate = function() { return -v.snapGrid[v.snapGrid.length - 1] }, v.updateContainerSize = function() {
                var e, a;
                e = "undefined" != typeof v.params.width ? v.params.width : v.container[0].clientWidth, a = "undefined" != typeof v.params.height ? v.params.height : v.container[0].clientHeight, 0 === e && r() || 0 === a && !r() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = r() ? v.width : v.height)
            }, v.updateSlidesSize = function() {
                v.slides = v.wrapper.children("." + v.params.slideClass), v.snapGrid = [], v.slidesGrid = [], v.slidesSizesGrid = [];
                var e, a = v.params.spaceBetween,
                    t = -v.params.slidesOffsetBefore,
                    s = 0,
                    n = 0;
                "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size), v.virtualSize = -a, v.slides.css(v.rtl ? { marginLeft: "", marginTop: "" } : { marginRight: "", marginBottom: "" });
                var o;
                v.params.slidesPerColumn > 1 && (o = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn, "auto" !== v.params.slidesPerView && "row" === v.params.slidesPerColumnFill && (o = Math.max(o, v.params.slidesPerView * v.params.slidesPerColumn)));
                var l, p = v.params.slidesPerColumn,
                    d = o / p,
                    c = d - (v.params.slidesPerColumn * d - v.slides.length);
                for (e = 0; e < v.slides.length; e++) { l = 0; var u = v.slides.eq(e); if (v.params.slidesPerColumn > 1) { var m, f, h; "column" === v.params.slidesPerColumnFill ? (f = Math.floor(e / p), h = e - f * p, (f > c || f === c && h === p - 1) && ++h >= p && (h = 0, f++), m = f + h * o / p, u.css({ "-webkit-box-ordinal-group": m, "-moz-box-ordinal-group": m, "-ms-flex-order": m, "-webkit-order": m, order: m })) : (h = Math.floor(e / d), f = e - h * d), u.css({ "margin-top": 0 !== h && v.params.spaceBetween && v.params.spaceBetween + "px" }).attr("data-swiper-column", f).attr("data-swiper-row", h) } "none" !== u.css("display") && ("auto" === v.params.slidesPerView ? (l = r() ? u.outerWidth(!0) : u.outerHeight(!0), v.params.roundLengths && (l = i(l))) : (l = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), r() ? v.slides[e].style.width = l + "px" : v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (t = t + l / 2 + s / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + l + a), v.virtualSize += l + a, s = l, n++) }
                v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                var g;
                if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({ width: v.virtualSize + v.params.spaceBetween + "px" }), (!v.support.flexbox || v.params.setWrapperSize) && v.wrapper.css(r() ? { width: v.virtualSize + v.params.spaceBetween + "px" } : { height: v.virtualSize + v.params.spaceBetween + "px" }), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * o, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({ width: v.virtualSize + v.params.spaceBetween + "px" }), v.params.centeredSlides)) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
                    v.snapGrid = g
                }
                if (!v.params.centeredSlides) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
                    v.snapGrid = g, Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
                }
                0 === v.snapGrid.length && (v.snapGrid = [0]), 0 !== v.params.spaceBetween && v.slides.css(r() ? v.rtl ? { marginLeft: a + "px" } : { marginRight: a + "px" } : { marginBottom: a + "px" }), v.params.watchSlidesProgress && v.updateSlidesOffset()
            }, v.updateSlidesOffset = function() { for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = r() ? v.slides[e].offsetLeft : v.slides[e].offsetTop }, v.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                    "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                    var a = -e;
                    v.rtl && (a = e); { v.container[0].getBoundingClientRect(), r() ? "left" : "top", r() ? "right" : "bottom" }
                    v.slides.removeClass(v.params.slideVisibleClass);
                    for (var t = 0; t < v.slides.length; t++) {
                        var s = v.slides[t],
                            i = (a - s.swiperSlideOffset) / (s.swiperSlideSize + v.params.spaceBetween);
                        if (v.params.watchSlidesVisibility) {
                            var n = -(a - s.swiperSlideOffset),
                                o = n + v.slidesSizesGrid[t],
                                l = n >= 0 && n < v.size || o > 0 && o <= v.size || 0 >= n && o >= v.size;
                            l && v.slides.eq(t).addClass(v.params.slideVisibleClass)
                        }
                        s.progress = v.rtl ? -i : i
                    }
                }
            }, v.updateProgress = function(e) {
                "undefined" == typeof e && (e = v.translate || 0);
                var a = v.maxTranslate() - v.minTranslate();
                0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1), v.isBeginning && v.emit("onReachBeginning", v), v.isEnd && v.emit("onReachEnd", v), v.params.watchSlidesProgress && v.updateSlidesProgress(e), v.emit("onProgress", v, v.progress)
            }, v.updateActiveIndex = function() {
                var e, a, t, s = v.rtl ? v.translate : -v.translate;
                for (a = 0; a < v.slidesGrid.length; a++) "undefined" != typeof v.slidesGrid[a + 1] ? s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a : s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] && (e = a + 1) : s >= v.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / v.params.slidesPerGroup), t >= v.snapGrid.length && (t = v.snapGrid.length - 1), e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
            }, v.updateClasses = function() {
                v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                var e = v.slides.eq(v.activeIndex);
                if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
                    v.bullets.removeClass(v.params.bulletActiveClass);
                    var t;
                    v.params.loop ? (t = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, t > v.slides.length - 1 - 2 * v.loopedSlides && (t -= v.slides.length - 2 * v.loopedSlides), t > v.bullets.length - 1 && (t -= v.bullets.length)) : t = "undefined" != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0, v.paginationContainer.length > 1 ? v.bullets.each(function() { a(this).index() === t && a(this).addClass(v.params.bulletActiveClass) }) : v.bullets.eq(t).addClass(v.params.bulletActiveClass)
                }
                v.params.loop || (v.params.prevButton && (v.isBeginning ? (a(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.prevButton))) : (a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (a(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.nextButton))) : (a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.nextButton)))))
            }, v.updatePagination = function() {
                if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                    for (var e = "", a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                    v.paginationContainer.html(e), v.bullets = v.paginationContainer.find("." + v.params.bulletClass), v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                }
            }, v.update = function(e) {
                function a() { s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()), v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses() }
                if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                    var t, s;
                    v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode ? a() : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
                }
            }, v.onResize = function(e) {
                var a = v.params.allowSwipeToPrev,
                    t = v.params.allowSwipeToNext;
                if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
                    var s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                    v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                } else v.updateClasses(), ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                v.params.allowSwipeToPrev = a, v.params.allowSwipeToNext = t
            };
            var w = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEvents = { start: v.support.touch || !v.params.simulateTouch ? "touchstart" : w[0], move: v.support.touch || !v.params.simulateTouch ? "touchmove" : w[1], end: v.support.touch || !v.params.simulateTouch ? "touchend" : w[2] }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container : v.wrapper).addClass("swiper-wp8-" + v.params.direction), v.initEvents = function(e) {
                var t = e ? "off" : "on",
                    r = e ? "removeEventListener" : "addEventListener",
                    i = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                    n = v.support.touch ? i : document,
                    o = v.params.nested ? !0 : !1;
                v.browser.ie ? (i[r](v.touchEvents.start, v.onTouchStart, !1), n[r](v.touchEvents.move, v.onTouchMove, o), n[r](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (i[r](v.touchEvents.start, v.onTouchStart, !1), i[r](v.touchEvents.move, v.onTouchMove, o), i[r](v.touchEvents.end, v.onTouchEnd, !1)), !s.simulateTouch || v.device.ios || v.device.android || (i[r]("mousedown", v.onTouchStart, !1), document[r]("mousemove", v.onTouchMove, o), document[r]("mouseup", v.onTouchEnd, !1))), window[r]("resize", v.onResize), v.params.nextButton && (a(v.params.nextButton)[t]("click", v.onClickNext), v.params.a11y && v.a11y && a(v.params.nextButton)[t]("keydown", v.a11y.onEnterKey)), v.params.prevButton && (a(v.params.prevButton)[t]("click", v.onClickPrev), v.params.a11y && v.a11y && a(v.params.prevButton)[t]("keydown", v.a11y.onEnterKey)), v.params.pagination && v.params.paginationClickable && (a(v.paginationContainer)[t]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && a(v.paginationContainer)[t]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)), (v.params.preventClicks || v.params.preventClicksPropagation) && i[r]("click", v.preventClicks, !0)
            }, v.attachEvents = function() { v.initEvents() }, v.detachEvents = function() { v.initEvents(!0) }, v.allowClick = !0, v.preventClicks = function(e) { v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }, v.onClickNext = function(e) { e.preventDefault(), (!v.isEnd || v.params.loop) && v.slideNext() }, v.onClickPrev = function(e) { e.preventDefault(), (!v.isBeginning || v.params.loop) && v.slidePrev() }, v.onClickIndex = function(e) {
                e.preventDefault();
                var t = a(this).index() * v.params.slidesPerGroup;
                v.params.loop && (t += v.loopedSlides), v.slideTo(t)
            }, v.updateClickedSlide = function(e) {
                var t = o(e, "." + v.params.slideClass),
                    s = !1;
                if (t)
                    for (var r = 0; r < v.slides.length; r++) v.slides[r] === t && (s = !0);
                if (!t || !s) return v.clickedSlide = void 0, void(v.clickedIndex = void 0);
                if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                    var i, n = v.clickedIndex;
                    if (v.params.loop) {
                        if (v.animating) return;
                        i = a(v.clickedSlide).attr("data-swiper-slide-index"), v.params.centeredSlides ? n < v.loopedSlides - v.params.slidesPerView / 2 || n > v.slides.length - v.loopedSlides + v.params.slidesPerView / 2 ? (v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { v.slideTo(n) }, 0)) : v.slideTo(n) : n > v.slides.length - v.params.slidesPerView ? (v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { v.slideTo(n) }, 0)) : v.slideTo(n)
                    } else v.slideTo(n)
                }
            };
            var b, y, x, T, S, C, M, P, z, I = "input, select, textarea, button",
                E = Date.now(),
                k = [];
            v.animating = !1, v.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };
            var D, L;
            if (v.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                        if (v.params.noSwiping && o(e, "." + v.params.noSwipingClass)) return void(v.allowClick = !0);
                        if (!v.params.swipeHandler || o(e, v.params.swipeHandler)) {
                            var t = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                s = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(v.device.ios && v.params.iOSEdgeSwipeDetection && t <= v.params.iOSEdgeSwipeThreshold)) {
                                if (b = !0, y = !1, T = void 0, L = void 0, v.touches.startX = t, v.touches.startY = s, x = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                                    var r = !0;
                                    a(e.target).is(I) && (r = !1), document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(), r && e.preventDefault()
                                }
                                v.emit("onTouchStart", v, e)
                            }
                        }
                    }
                }, v.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                        if (v.params.onlyExternal) return v.allowClick = !1, void(b && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, x = Date.now()));
                        if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I)) return y = !0, void(v.allowClick = !1);
                        if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof T) {
                                var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                                T = r() ? t > v.params.touchAngle : 90 - t > v.params.touchAngle
                            }
                            if (T && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof L && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (L = !0), b) {
                                if (T) return void(b = !1);
                                if (L || !v.browser.ieTouch) {
                                    v.allowClick = !1, v.emit("onSliderMove", v, e), e.preventDefault(), v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(), y || (s.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), z = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")), y = !0;
                                    var i = v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
                                    i *= v.params.touchRatio, v.rtl && (i = -i), v.swipeDirection = i > 0 ? "prev" : "next", S = i + C;
                                    var n = !0;
                                    if (i > 0 && S > v.minTranslate() ? (n = !1, v.params.resistance && (S = v.minTranslate() - 1 + Math.pow(-v.minTranslate() + C + i, v.params.resistanceRatio))) : 0 > i && S < v.maxTranslate() && (n = !1, v.params.resistance && (S = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > S && (S = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && S > C && (S = C), v.params.followFinger) { if (v.params.threshold > 0) { if (!(Math.abs(i) > v.params.threshold || M)) return void(S = C); if (!M) return M = !0, v.touches.startX = v.touches.currentX, v.touches.startY = v.touches.currentY, S = C, void(v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY) }(v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(), v.params.freeMode && (0 === k.length && k.push({ position: v.touches[r() ? "startX" : "startY"], time: x }), k.push({ position: v.touches[r() ? "currentX" : "currentY"], time: (new window.Date).getTime() })), v.updateProgress(S), v.setWrapperTranslate(S) }
                                }
                            }
                        }
                    }
                }, v.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), b) {
                        v.params.grabCursor && y && b && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                        var t = Date.now(),
                            s = t - x;
                        if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > s && t - E > 300 && (P && clearTimeout(P), P = setTimeout(function() { v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e)) }, 300)), 300 > s && 300 > t - E && (P && clearTimeout(P), v.emit("onDoubleTap", v, e))), E = Date.now(), setTimeout(function() { v && (v.allowClick = !0) }, 0), !b || !y || !v.swipeDirection || 0 === v.touches.diff || S === C) return void(b = y = !1);
                        b = y = !1;
                        var r;
                        if (r = v.params.followFinger ? v.rtl ? v.translate : -v.translate : -S, v.params.freeMode) {
                            if (r < -v.minTranslate()) return void v.slideTo(v.activeIndex);
                            if (r > -v.maxTranslate()) return void v.slideTo(v.slides.length < v.snapGrid.length ? v.snapGrid.length - 1 : v.slides.length - 1);
                            if (v.params.freeModeMomentum) {
                                if (k.length > 1) {
                                    var i = k.pop(),
                                        n = k.pop(),
                                        o = i.position - n.position,
                                        l = i.time - n.time;
                                    v.velocity = o / l, v.velocity = v.velocity / 2, Math.abs(v.velocity) < v.params.freeModeMinimumVelocity && (v.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                                } else v.velocity = 0;
                                k.length = 0;
                                var p = 1e3 * v.params.freeModeMomentumRatio,
                                    d = v.velocity * p,
                                    c = v.translate + d;
                                v.rtl && (c = -c);
                                var u, m = !1,
                                    f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                                if (c < v.maxTranslate()) v.params.freeModeMomentumBounce ? (c + v.maxTranslate() < -f && (c = v.maxTranslate() - f), u = v.maxTranslate(), m = !0, z = !0) : c = v.maxTranslate();
                                else if (c > v.minTranslate()) v.params.freeModeMomentumBounce ? (c - v.minTranslate() > f && (c = v.minTranslate() + f), u = v.minTranslate(), m = !0, z = !0) : c = v.minTranslate();
                                else if (v.params.freeModeSticky) {
                                    var h, g = 0;
                                    for (g = 0; g < v.snapGrid.length; g += 1)
                                        if (v.snapGrid[g] > -c) { h = g; break }
                                    c = Math.abs(v.snapGrid[h] - c) < Math.abs(v.snapGrid[h - 1] - c) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1], v.rtl || (c = -c)
                                }
                                if (0 !== v.velocity) p = Math.abs(v.rtl ? (-c - v.translate) / v.velocity : (c - v.translate) / v.velocity);
                                else if (v.params.freeModeSticky) return void v.slideReset();
                                v.params.freeModeMomentumBounce && m ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function() { v && z && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(u), v.wrapper.transitionEnd(function() { v && v.onTransitionEnd() })) })) : v.velocity ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() { v && v.onTransitionEnd() }))) : v.updateProgress(c), v.updateActiveIndex()
                            }
                            return void((!v.params.freeModeMomentum || s >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                        }
                        var w, T = 0,
                            M = v.slidesSizesGrid[0];
                        for (w = 0; w < v.slidesGrid.length; w += v.params.slidesPerGroup) "undefined" != typeof v.slidesGrid[w + v.params.slidesPerGroup] ? r >= v.slidesGrid[w] && r < v.slidesGrid[w + v.params.slidesPerGroup] && (T = w, M = v.slidesGrid[w + v.params.slidesPerGroup] - v.slidesGrid[w]) : r >= v.slidesGrid[w] && (T = w, M = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                        var I = (r - v.slidesGrid[T]) / M;
                        if (s > v.params.longSwipesMs) { if (!v.params.longSwipes) return void v.slideTo(v.activeIndex); "next" === v.swipeDirection && v.slideTo(I >= v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T), "prev" === v.swipeDirection && v.slideTo(I > 1 - v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T) } else { if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex); "next" === v.swipeDirection && v.slideTo(T + v.params.slidesPerGroup), "prev" === v.swipeDirection && v.slideTo(T) }
                    }
                }, v._slideTo = function(e, a) { return v.slideTo(e, a, !0, !0) }, v.slideTo = function(e, a, t, s) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), v.snapIndex = Math.floor(e / v.params.slidesPerGroup), v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                    var i = -v.snapGrid[v.snapIndex];
                    v.params.autoplay && v.autoplaying && (s || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()), v.updateProgress(i);
                    for (var n = 0; n < v.slidesGrid.length; n++) - Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[n]) && (e = n);
                    if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate()) return !1;
                    if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate() && (v.activeIndex || 0) !== e) return !1;
                    if ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate) return v.updateClasses(), !1;
                    v.updateClasses(), v.onTransitionStart(t);
                    r() ? i : 0, r() ? 0 : i;
                    return 0 === a ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(t)) : (v.setWrapperTransition(a), v.setWrapperTranslate(i), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() { v && v.onTransitionEnd(t) }))), !0
                }, v.onTransitionStart = function(e) { "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionStart(), e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v)) }, v.onTransitionEnd = function(e) { v.animating = !1, v.setWrapperTransition(0), "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionEnd(), e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)), v.params.hashnav && v.hashnav && v.hashnav.setHash() }, v.slideNext = function(e, a, t) {
                    if (v.params.loop) {
                        if (v.animating) return !1;
                        v.fixLoop(); { v.container[0].clientLeft }
                        return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                    }
                    return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                }, v._slideNext = function(e) { return v.slideNext(!0, e, !0) }, v.slidePrev = function(e, a, t) {
                    if (v.params.loop) {
                        if (v.animating) return !1;
                        v.fixLoop(); { v.container[0].clientLeft }
                        return v.slideTo(v.activeIndex - 1, a, e, t)
                    }
                    return v.slideTo(v.activeIndex - 1, a, e, t)
                }, v._slidePrev = function(e) { return v.slidePrev(!0, e, !0) }, v.slideReset = function(e, a) { return v.slideTo(v.activeIndex, a, e) }, v.setWrapperTransition = function(e, a) { v.wrapper.transition(e), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e), v.params.parallax && v.parallax && v.parallax.setTransition(e), v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e), v.params.control && v.controller && v.controller.setTransition(e, a), v.emit("onSetTransition", v, e) }, v.setWrapperTranslate = function(e, a, t) {
                    var s = 0,
                        n = 0,
                        o = 0;
                    r() ? s = v.rtl ? -e : e : n = e, v.params.roundLengths && (s = i(s), n = i(n)), v.params.virtualTranslate || v.wrapper.transform(v.support.transforms3d ? "translate3d(" + s + "px, " + n + "px, " + o + "px)" : "translate(" + s + "px, " + n + "px)"), v.translate = r() ? s : n, a && v.updateActiveIndex(), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate), v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate), v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate), v.params.control && v.controller && v.controller.setTranslate(v.translate, t), v.emit("onSetTranslate", v, v.translate)
                }, v.getTranslate = function(e, a) { var t, s, r, i; return "undefined" == typeof a && (a = "x"), v.params.virtualTranslate ? v.rtl ? -v.translate : v.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), i = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : parseFloat(16 === t.length ? t[13] : t[5])), v.rtl && s && (s = -s), s || 0) }, v.getWrapperTranslate = function(e) { return "undefined" == typeof e && (e = r() ? "x" : "y"), v.getTranslate(v.wrapper[0], e) }, v.observers = [], v.initObservers = function() {
                    if (v.params.observeParents)
                        for (var e = v.container.parents(), a = 0; a < e.length; a++) l(e[a]);
                    l(v.container[0], { childList: !1 }), l(v.wrapper[0], { attributes: !1 })
                }, v.disconnectObservers = function() {
                    for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
                    v.observers = []
                }, v.createLoop = function() {
                    v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                    var e = v.wrapper.children("." + v.params.slideClass);
                    "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length), v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10), v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides, v.loopedSlides > e.length && (v.loopedSlides = e.length);
                    var t, s = [],
                        r = [];
                    for (e.each(function(t, i) {
                            var n = a(this);
                            t < v.loopedSlides && r.push(i), t < e.length && t >= e.length - v.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                        }), t = 0; t < r.length; t++) v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                    for (t = s.length - 1; t >= 0; t--) v.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
                }, v.destroyLoop = function() { v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(), v.slides.removeAttr("data-swiper-slide-index") }, v.fixLoop = function() {
                    var e;
                    v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
                }, v.appendSlide = function(e) {
                    if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length)
                        for (var a = 0; a < e.length; a++) e[a] && v.wrapper.append(e[a]);
                    else v.wrapper.append(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0)
                }, v.prependSlide = function(e) {
                    v.params.loop && v.destroyLoop();
                    var a = v.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++) e[t] && v.wrapper.prepend(e[t]);
                        a = v.activeIndex + e.length
                    } else v.wrapper.prepend(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.slideTo(a, 0, !1)
                }, v.removeSlide = function(e) {
                    v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                    var a, t = v.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var s = 0; s < e.length; s++) a = e[s], v.slides[a] && v.slides.eq(a).remove(), t > a && t--;
                        t = Math.max(t, 0)
                    } else a = e, v.slides[a] && v.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
                }, v.removeAllSlides = function() {
                    for (var e = [], a = 0; a < v.slides.length; a++) e.push(a);
                    v.removeSlide(e)
                }, v.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < v.slides.length; e++) {
                                var a = v.slides.eq(e),
                                    t = a[0].swiperSlideOffset,
                                    s = -t;
                                v.params.virtualTranslate || (s -= v.translate);
                                var i = 0;
                                r() || (i = s, s = 0);
                                var n = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({ opacity: n }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                v.slides.transitionEnd(function() { if (!a && v) { a = !0, v.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) v.wrapper.trigger(e[t]) } })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, t = 0;
                            v.params.cube.shadow && (r() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({ height: v.width + "px" })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                            for (var s = 0; s < v.slides.length; s++) {
                                var i = v.slides.eq(s),
                                    n = 90 * s,
                                    o = Math.floor(n / 360);
                                v.rtl && (n = -n, o = Math.floor(-n / 360));
                                var l = Math.max(Math.min(i[0].progress, 1), -1),
                                    p = 0,
                                    d = 0,
                                    c = 0;
                                s % 4 === 0 ? (p = 4 * -o * v.size, c = 0) : (s - 1) % 4 === 0 ? (p = 0, c = 4 * -o * v.size) : (s - 2) % 4 === 0 ? (p = v.size + 4 * o * v.size, c = v.size) : (s - 3) % 4 === 0 && (p = -v.size, c = 3 * v.size + 4 * v.size * o), v.rtl && (p = -p), r() || (d = p, p = 0);
                                var u = "rotateX(" + (r() ? 0 : -n) + "deg) rotateY(" + (r() ? n : 0) + "deg) translate3d(" + p + "px, " + d + "px, " + c + "px)";
                                if (1 >= l && l > -1 && (t = 90 * s + 90 * l, v.rtl && (t = 90 * -s - 90 * l)), i.transform(u), v.params.cube.slideShadows) {
                                    var m = i.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        f = i.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), i.append(m)), 0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), i.append(f)); { i[0].progress }
                                    m.length && (m[0].style.opacity = -i[0].progress), f.length && (f[0].style.opacity = i[0].progress)
                                }
                            }
                            if (v.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px", "transform-origin": "50% 50% -" + v.size / 2 + "px" }), v.params.cube.shadow)
                                if (r()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                        g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                        w = v.params.cube.shadowScale,
                                        b = v.params.cube.shadowScale / g,
                                        y = v.params.cube.shadowOffset;
                                    e.transform("scale3d(" + w + ", 1, " + b + ") translate3d(0px, " + (v.height / 2 + y) + "px, " + -v.height / 2 / b + "px) rotateX(-90deg)")
                                }
                            var x = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                            v.wrapper.transform("translate3d(0px,0," + x + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t : 0) + "deg)")
                        },
                        setTransition: function(e) { v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.cube.shadow && !r() && v.container.find(".swiper-cube-shadow").transition(e) }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = v.translate, t = r() ? -e + v.width / 2 : -e + v.height / 2, s = r() ? v.params.coverflow.rotate : -v.params.coverflow.rotate, i = v.params.coverflow.depth, n = 0, o = v.slides.length; o > n; n++) {
                                var l = v.slides.eq(n),
                                    p = v.slidesSizesGrid[n],
                                    d = l[0].swiperSlideOffset,
                                    c = (t - d - p / 2) / p * v.params.coverflow.modifier,
                                    u = r() ? s * c : 0,
                                    m = r() ? 0 : s * c,
                                    f = -i * Math.abs(c),
                                    h = r() ? 0 : v.params.coverflow.stretch * c,
                                    g = r() ? v.params.coverflow.stretch * c : 0;
                                Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(m) < .001 && (m = 0);
                                var w = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + u + "deg)";
                                if (l.transform(w), l[0].style.zIndex = -Math.abs(Math.round(c)) + 1, v.params.coverflow.slideShadows) {
                                    var b = l.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        y = l.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), l.append(b)), 0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), l.append(y)), b.length && (b[0].style.opacity = c > 0 ? c : 0), y.length && (y[0].style.opacity = -c > 0 ? -c : 0)
                                }
                            }
                            if (v.browser.ie) {
                                var x = v.wrapper[0].style;
                                x.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) { v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) }
                    }
                }, v.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, t) {
                        if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
                            var s = v.slides.eq(e),
                                r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || (r = r.add(s[0])), 0 !== r.length && r.each(function() {
                                var e = a(this);
                                e.addClass("swiper-lazy-loading");
                                var r = e.attr("data-background"),
                                    i = e.attr("data-src"),
                                    n = e.attr("data-srcset");
                                v.loadImage(e[0], i || r, n, !1, function() {
                                    if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                                        var a = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(v.params.slideDuplicateClass)) {
                                            var o = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                            v.lazy.loadImageInSlide(o.index(), !1)
                                        } else {
                                            var l = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            v.lazy.loadImageInSlide(l.index(), !1)
                                        }
                                    }
                                    v.emit("onLazyImageReady", v, s[0], e[0])
                                }), v.emit("onLazyImageLoad", v, s[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e;
                        if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function() { v.lazy.loadImageInSlide(a(this).index()) });
                        else if (v.params.slidesPerView > 1)
                            for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                        else v.lazy.loadImageInSlide(v.activeIndex);
                        if (v.params.lazyLoadingInPrevNext)
                            if (v.params.slidesPerView > 1) { for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e); for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++) v.slides[e] && v.lazy.loadImageInSlide(e) } else {
                                var t = v.wrapper.children("." + v.params.slideNextClass);
                                t.length > 0 && v.lazy.loadImageInSlide(t.index());
                                var s = v.wrapper.children("." + v.params.slidePrevClass);
                                s.length > 0 && v.lazy.loadImageInSlide(s.index())
                            }
                    },
                    onTransitionStart: function() { v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load() },
                    onTransitionEnd: function() { v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load() }
                }, v.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var a = v.scrollbar,
                            t = r() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                            s = t - a.track.offset()[r() ? "left" : "top"] - a.dragSize / 2,
                            i = -v.minTranslate() * a.moveDivider,
                            n = -v.maxTranslate() * a.moveDivider;
                        i > s ? s = i : s > n && (s = n), s = -s / a.moveDivider, v.updateProgress(s), v.setWrapperTranslate(s, !0)
                    },
                    dragStart: function(e) {
                        var a = v.scrollbar;
                        a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), v.params.scrollbarHide && a.track.css("opacity", 1), v.wrapper.transition(100), a.drag.transition(100), v.emit("onScrollbarDragStart", v)
                    },
                    dragMove: function(e) {
                        var a = v.scrollbar;
                        a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), v.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), v.emit("onScrollbarDragMove", v))
                    },
                    dragEnd: function() {
                        var e = v.scrollbar;
                        e.isTouched && (e.isTouched = !1, v.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function() { e.track.css("opacity", 0), e.track.transition(400) }, 1e3)), v.emit("onScrollbarDragEnd", v), v.params.scrollbarSnapOnRelease && v.slideReset())
                    },
                    enableDraggable: function() {
                        var e = v.scrollbar,
                            t = v.support.touch ? e.track : document;
                        a(e.track).on(v.touchEvents.start, e.dragStart), a(t).on(v.touchEvents.move, e.dragMove), a(t).on(v.touchEvents.end, e.dragEnd)
                    },
                    disableDraggable: function() {
                        var e = v.scrollbar,
                            t = v.support.touch ? e.track : document;
                        a(e.track).off(v.touchEvents.start, e.dragStart), a(t).off(v.touchEvents.move, e.dragMove), a(t).off(v.touchEvents.end, e.dragEnd)
                    },
                    set: function() {
                        if (v.params.scrollbar) {
                            var e = v.scrollbar;
                            e.track = a(v.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = v.size / v.virtualSize, e.moveDivider = e.divider * (e.trackSize / v.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (v.params.scrollbar) {
                            var e, a = v.scrollbar,
                                t = (v.translate || 0, a.dragSize);
                            e = (a.trackSize - a.dragSize) * v.progress, v.rtl && r() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), r() ? (a.drag.transform(v.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (a.drag.transform(v.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() { a.track[0].style.opacity = 0, a.track.transition(400) }, 1e3))
                        }
                    },
                    setTransition: function(e) { v.params.scrollbar && v.scrollbar.drag.transition(e) }
                }, v.controller = {
                    LinearSpline: function(e, a) {
                        this.x = e, this.y = a, this.lastIndex = e.length - 1; {
                            var t, s;
                            this.x.length
                        }
                        this.interpolate = function(e) { return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0 };
                        var r = function() { var e, a, t; return function(s, r) { for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t : e = t; return e } }()
                    },
                    getInterpolateFunction: function(e) { v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid)) },
                    setTranslate: function(e, a) {
                        function s(a) { e = a.rtl && "horizontal" === a.params.direction ? -v.translate : v.translate, "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), i = -v.controller.spline.interpolate(-e)), i && "container" !== v.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * r + a.minTranslate()), v.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, v), a.updateActiveIndex() }
                        var r, i, n = v.params.control;
                        if (v.isArray(n))
                            for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);
                        else n instanceof t && a !== n && s(n)
                    },
                    setTransition: function(e, a) {
                        function s(a) { a.setWrapperTransition(e, v), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() { i && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd()) })) }
                        var r, i = v.params.control;
                        if (v.isArray(i))
                            for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && s(i[r]);
                        else i instanceof t && a !== i && s(i)
                    }
                }, v.hashnav = {
                    init: function() {
                        if (v.params.hashnav) {
                            v.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var a = 0, t = 0, s = v.slides.length; s > t; t++) {
                                    var r = v.slides.eq(t),
                                        i = r.attr("data-hash");
                                    if (i === e && !r.hasClass(v.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        v.slideTo(n, a, v.params.runCallbacksOnInit, !0)
                                    }
                                }
                        }
                    },
                    setHash: function() { v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "") }
                }, v.disableKeyboardControl = function() { a(document).off("keydown", p) }, v.enableKeyboardControl = function() { a(document).on("keydown", p) }, v.mousewheel = { event: !1, lastScrollTime: (new window.Date).getTime() }, v.params.mousewheelControl) {
                try { new window.WheelEvent("wheel"), v.mousewheel.event = "wheel" } catch (G) {}
                v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = "mousewheel"), v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
            }
            v.disableMousewheelControl = function() { return v.mousewheel.event ? (v.container.off(v.mousewheel.event, d), !0) : !1 }, v.enableMousewheelControl = function() { return v.mousewheel.event ? (v.container.on(v.mousewheel.event, d), !0) : !1 }, v.parallax = {
                setTranslate: function() {
                    v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { c(this, v.progress) }), v.slides.each(function() {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            c(this, a)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = v.params.speed), v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = a(this),
                            s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.transition(s)
                    })
                }
            }, v._plugins = [];
            for (var B in v.plugins) {
                var O = v.plugins[B](v, v.params[B]);
                O && v._plugins.push(O)
            }
            return v.callPlugins = function(e) { for (var a = 0; a < v._plugins.length; a++) e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, v.emitterEventListeners = {}, v.emit = function(e) {
                v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (v.emitterEventListeners[e])
                    for (a = 0; a < v.emitterEventListeners[e].length; a++) v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.on = function(e, a) { return e = u(e), v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []), v.emitterEventListeners[e].push(a), v }, v.off = function(e, a) { var t; if (e = u(e), "undefined" == typeof a) return v.emitterEventListeners[e] = [], v; if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) { for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1); return v } }, v.once = function(e, a) { e = u(e); var t = function() { a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), v.off(e, t) }; return v.on(e, t), v }, v.a11y = {
                makeFocusable: function(e) { return e.attr("tabIndex", "0"), e },
                addRole: function(e, a) { return e.attr("role", a), e },
                addLabel: function(e, a) { return e.attr("aria-label", a), e },
                disable: function(e) { return e.attr("aria-disabled", !0), e },
                enable: function(e) { return e.attr("aria-disabled", !1), e },
                onEnterKey: function(e) { 13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.a11y.notify(v.isEnd ? v.params.lastSlideMessage : v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.a11y.notify(v.isBeginning ? v.params.firstSlideMessage : v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click()) },
                liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = v.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    if (v.params.nextButton) {
                        var e = a(v.params.nextButton);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.nextSlideMessage)
                    }
                    if (v.params.prevButton) {
                        var t = a(v.params.prevButton);
                        v.a11y.makeFocusable(t), v.a11y.addRole(t, "button"), v.a11y.addLabel(t, v.params.prevSlideMessage)
                    }
                    a(v.container).append(v.a11y.liveRegion)
                },
                initPagination: function() {
                    v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function() {
                        var e = a(this);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() { v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove() }
            }, v.init = function() { v.params.loop && v.createLoop(), v.updateContainerSize(), v.updateSlidesSize(), v.updatePagination(), v.params.scrollbar && v.scrollbar && (v.scrollbar.set(), v.params.scrollbarDraggable && v.scrollbar.enableDraggable()), "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()), v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))), v.attachEvents(), v.params.observer && v.support.observer && v.initObservers(), v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(), v.params.autoplay && v.startAutoplay(), v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(), v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(), v.params.hashnav && v.hashnav && v.hashnav.init(), v.params.a11y && v.a11y && v.a11y.init(), v.emit("onInit", v) }, v.cleanupStyles = function() { v.container.removeClass(v.classNames.join(" ")).removeAttr("style"), v.wrapper.removeAttr("style"), v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass), v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass), v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style")) }, v.destroy = function(e, a) { v.detachEvents(), v.stopAutoplay(), v.params.scrollbar && v.scrollbar && v.params.scrollbarDraggable && v.scrollbar.disableDraggable(), v.params.loop && v.destroyLoop(), a && v.cleanupStyles(), v.disconnectObservers(), v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(), v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(), v.params.a11y && v.a11y && v.a11y.destroy(), v.emit("onDestroy"), e !== !1 && (v = null) }, v.init(), v
        }
    };
    t.prototype = {
        isSafari: function() { var e = navigator.userAgent.toLowerCase(); return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0 }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) { return "[object Array]" === Object.prototype.toString.apply(e) },
        browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1 },
        device: function() {
            var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return { ios: t || r || s, android: a }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() { return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() { var e = document.createElement("div").style; return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() { return "MutationObserver" in window || "WebkitMutationObserver" in window }()
        },
        plugins: {}
    };
    for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (t = 0; t < s.length; t++) r.on(s[t], a);
        return this
    }), "transform" in i.fn || (i.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() { "use strict"; return window.Swiper });

/**
 * @module       WOW
 * @author       Matthieu Aussaguel
 * @version      v1.1.2
 * @license      MIT License
 */
(function() {
    var t, e, n, i, o, r = function(t, e) { return function() { return t.apply(e, arguments) } },
        s = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) { var n, i; for (n in e) i = e[n], null == t[n] && (t[n] = i); return t }, t.prototype.isMobile = function(t) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) }, t.prototype.createEvent = function(t, e, n, i) { var o; return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o }, t.prototype.emitEvent = function(t, e) { return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0 }, t.prototype.addEvent = function(t, e, n) { return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n }, t.prototype.removeEvent = function(t, e, n) { return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e] }, t.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() { this.keys = [], this.values = [] }
        return t.prototype.get = function(t) {
            var e, n, i, o, r;
            for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i)
                if (n = r[e], n === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, r, s;
            for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)
                if (i = s[n], i === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t) { return this.getPropertyValue = function(e) { var n; return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) { return e.toUpperCase() }), (null != (n = t.currentStyle) ? n[e] : void 0) || null }, this }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) { null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass) }
        return o.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, o.prototype.init = function() { var t; return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() { var t, n, i, o; for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e); return o }.call(this), this.all = function() { var t, n, i, o; for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e); return o }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) { return function(e) { var n, i, o, r, s; for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function() { var t, e, n, i; for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o)); return i }.call(t)); return s } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0
        }, o.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, o.prototype.sync = function() { return t.notSupported ? this.doSync(this.element) : void 0 }, o.prototype.doSync = function(t) { var e, n, i, o, r; if (null == t && (t = this.element), 1 === t.nodeType) { for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0); return r } }, o.prototype.show = function(t) { return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t }, o.prototype.applyStyle = function(t, e) { var n, i, o; return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) { return function() { return r.customStyle(t, e, i, n, o) } }(this)) }, o.prototype.animate = function() { return "requestAnimationFrame" in window ? function(t) { return window.requestAnimationFrame(t) } : function(t) { return t() } }(), o.prototype.resetStyle = function() { var t, e, n, i, o; for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible"); return o }, o.prototype.resetAnimation = function(t) { var e; return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0 }, o.prototype.customStyle = function(t, e, n, i, o) { return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, { animationDuration: n }), i && this.vendorSet(t.style, { animationDelay: i }), o && this.vendorSet(t.style, { animationIterationCount: o }), this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }), t }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, r;
            i = [];
            for (n in e) o = e[n], t["" + n] = o, i.push(function() { var e, i, s, l; for (s = this.vendors, l = [], e = 0, i = s.length; i > e; e++) r = s[e], l.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o); return l }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) { var n, o, r, s, l, a; for (l = i(t), s = l.getPropertyCSSValue(e), r = this.vendors, n = 0, o = r.length; o > n; n++) a = r[n], s = s || l.getPropertyCSSValue("-" + a + "-" + e); return s }, o.prototype.animationName = function(t) { var e; try { e = this.vendorCSS(t, "animation-name").cssText } catch (n) { e = i(t).getPropertyValue("animation-name") } return "none" === e ? "" : e }, o.prototype.cacheAnimationName = function(t) { return this.animationNameCache.set(t, this.animationName(t)) }, o.prototype.cachedAnimationName = function(t) { return this.animationNameCache.get(t) }, o.prototype.scrollHandler = function() { return this.scrolled = !0 }, o.prototype.scrollCallback = function() { var t; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var e, n, i, o; for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t)); return o }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, o.prototype.offsetTop = function(t) { for (var e; void 0 === t.offsetTop;) t = t.parentNode; for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop; return e }, o.prototype.isVisible = function(t) { var e, n, i, o, r; return n = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r }, o.prototype.util = function() { return null != this._util ? this._util : this._util = new e }, o.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, o
    }()
}).call(this);

/**
 * @module     Owl carousel
 * @version    2.2.1
 * @author     Bartosz Wojciechowski
 * @author     David Deutsch
 * @copyright  2013-2018 David Deutsch
 * @license    MIT
 * @see        {@link https://github.com/OwlCarousel2/OwlCarousel2/releases/tag/2.2.1}
 */
! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }
    e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
    }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) { return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1 }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" })
    }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 };
        return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null })
    }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c })
    }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this)))
    }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) { this.load(b) }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = { lazyLoad: !1 }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) { e.push(a(c).height()) }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
            "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this),
            "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this),
            "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this))
    };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) {
        var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } })
    }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function(a, b) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function(d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), d || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, e.prototype.stop = function() { this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) }
    }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { if (g[b] !== d) return e = !c || b, !1 }), e
    }

    function f(a) { return e(a, !0) }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/**
 * @module       RD Navbar
 * @author       Evgeniy Gusarov
 * @see          https://ua.linkedin.com/pub/evgeniy-gusarov/8a/a40/54a
 * @version      2.2.5
 */
(function() {
    var t;
    t = "ontouchstart" in window,
        function(n, o, e) {
            var a;
            a = function() {
                function a(t, a) { this.options = n.extend(!0, {}, this.Defaults, a), this.$element = n(t), this.$clone = null, this.$win = n(e), this.$doc = n(o), this.currentLayout = this.options.layout, this.loaded = !1, this.focusOnHover = this.options.focusOnHover, this.focusTimer = !1, this.cloneTimer = !1, this.isStuck = !1, this.initialize() }
                return a.prototype.Defaults = { layout: "rd-navbar-static", deviceLayout: "rd-navbar-fixed", focusOnHover: !0, focusOnHoverTimeout: 800, linkedElements: ["html"], domAppend: !0, stickUp: !0, stickUpClone: !0, stickUpOffset: "100%", anchorNav: !0, anchorNavSpeed: 400, anchorNavOffset: 0, anchorNavEasing: "swing", autoHeight: !0, responsive: { 0: { layout: "rd-navbar-fixed", deviceLayout: "rd-navbar-fixed", focusOnHover: !1, stickUp: !1 }, 992: { layout: "rd-navbar-static", deviceLayout: "rd-navbar-static", focusOnHover: !0, stickUp: !0 } }, callbacks: { onToggleSwitch: !1, onToggleClose: !1, onDomAppend: !1, onDropdownOver: !1, onDropdownOut: !1, onDropdownToggle: !1, onDropdownClose: !1, onStuck: !1, onUnstuck: !1, onAnchorChange: !1 } }, a.prototype.initialize = function() { var n; return (n = this).$element.addClass("rd-navbar").addClass(n.options.layout), t && n.$element.addClass("rd-navbar--is-touch"), n.options.domAppend && n.createNav(n), n.options.stickUpClone && n.createClone(n), n.$element.addClass("rd-navbar-original"), n.addAdditionalClassToToggles(".rd-navbar-original", "toggle-original", "toggle-original-elements"), n.applyHandlers(n), n.offset = n.$element.offset().top, n.height = n.$element.outerHeight(), n.loaded = !0, n }, a.prototype.resize = function(o, e) { var a, s; return s = t ? o.getOption("deviceLayout") : o.getOption("layout"), a = o.$element.add(o.$clone), s === o.currentLayout && o.loaded || (o.switchClass(a, o.currentLayout, s), null != o.options.linkedElements && n.grep(o.options.linkedElements, function(t, n) { return o.switchClass(t, o.currentLayout + "-linked", s + "-linked") }), o.currentLayout = s), o.focusOnHover = o.getOption("focusOnHover"), o }, a.prototype.stickUp = function(t, o) {
                    function e() { "resize" === o.type ? t.switchClass(i, "", "rd-navbar--is-stuck") : i.addClass("rd-navbar--is-stuck"), t.isStuck = !0 }
                    var a, s, r, i, l;
                    return s = t.getOption("stickUp"), (n("html").hasClass("ios") || t.$element.hasClass("rd-navbar-fixed")) && (s = !1), a = t.$doc.scrollTop(), i = null != t.$clone ? t.$clone : t.$element, r = t.getOption("stickUpOffset"), l = "string" == typeof r ? r.indexOf("%") > 0 ? parseFloat(r) * t.height / 100 : parseFloat(r) : r, s ? (a >= l && !t.isStuck || a < l && t.isStuck) && (t.$element.add(t.$clone).find("[data-rd-navbar-toggle]").each(function() { n.proxy(t.closeToggle, this)(t, !1) }).end().find(".rd-navbar-submenu").removeClass("opened").removeClass("focus"), a >= l && !t.isStuck && !t.$element.hasClass("rd-navbar-fixed") ? (t.options.callbacks.onStuck && t.options.callbacks.onStuck.call(t), navigator.platform.match(/(Mac)/i) ? setTimeout(e, 10) : e()) : ("resize" === o.type ? t.switchClass(i, "rd-navbar--is-stuck", "") : i.removeClass("rd-navbar--is-stuck").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", n.proxy(t.resizeWrap, t, o)), t.isStuck = !1, t.options.callbacks.onUnstuck && t.options.callbacks.onUnstuck.call(t))) : (t.$element.find(".rd-navbar-submenu").removeClass("opened").removeClass("focus"), t.isStuck && (t.switchClass(i, "rd-navbar--is-stuck", ""), t.isStuck = !1, t.resizeWrap(o))), t
                }, a.prototype.resizeWrap = function(t) { var n, o; if (null == (o = this).$clone && !o.isStuck) return n = o.$element.parent(), o.getOption("autoHeight") ? (o.height = o.$element.outerHeight(), "resize" === t.type ? (n.addClass("rd-navbar--no-transition").css("height", o.height), n[0].offsetHeight, n.removeClass("rd-navbar--no-transition")) : n.css("height", o.height)) : void n.css("height", "auto") }, a.prototype.createNav = function(t) { return t.$element.find(".rd-navbar-dropdown, .rd-navbar-megamenu").each(function() { var t; return t = n(this), this.getBoundingClientRect(), t.hasClass("rd-navbar-megamenu") ? t.parent().addClass("rd-navbar--has-megamenu") : t.parent().addClass("rd-navbar--has-dropdown") }).parents("li").addClass("rd-navbar-submenu"), n('<span class="rd-navbar-submenu-toggle"></span>').insertAfter(".rd-navbar-nav li.rd-navbar-submenu > a"), t.options.callbacks.onDomAppend && t.options.callbacks.onDomAppend.call(this), t }, a.prototype.createClone = function(t) { return t.$clone = t.$element.clone().insertAfter(t.$element).addClass("rd-navbar--is-clone"), t.addAdditionalClassToToggles(".rd-navbar--is-clone", "toggle-cloned", "toggle-cloned-elements"), t }, a.prototype.closeToggle = function(t, o) { var e, a, s, r, i, l, c; return a = n(o.target), i = !1, l = this.getAttribute("data-rd-navbar-toggle"), t.options.stickUpClone && t.isStuck ? (r = ".toggle-cloned", s = ".toggle-cloned-elements", c = !a.hasClass("toggle-cloned")) : (r = ".toggle-original", s = ".toggle-original-elements", c = !a.hasClass("toggle-original")), o.target !== this && !a.parents(r + "[data-rd-navbar-toggle]").length && !a.parents(s).length && l && c && ((e = n(this).parents("body").find(l).add(n(this).parents(".rd-navbar")[0])).each(function() { if (!i) return i = !0 === (o.target === this || n.contains(this, o.target)) }), i || (e.add(this).removeClass("active"), t.options.callbacks.onToggleClose && t.options.callbacks.onToggleClose.call(this, t))), this }, a.prototype.switchToggle = function(t, o) { var e, a, s; return o.preventDefault(), n(this).hasClass("toggle-cloned") ? (s = ".rd-navbar--is-clone", e = ".toggle-cloned-elements") : (s = ".rd-navbar-original", e = ".toggle-original-elements"), (a = this.getAttribute("data-rd-navbar-toggle")) && (n(s + " [data-rd-navbar-toggle]").not(this).each(function() { var t; if (t = this.getAttribute("data-rd-navbar-toggle")) return n(this).parents("body").find(s + " " + t + e).add(this).add(n.inArray(".rd-navbar", t.split(/\s*,\s*/i)) > -1 && n(this).parents("body")[0]).removeClass("active") }), n(this).parents("body").find(s + " " + a + e).add(this).add(n.inArray(".rd-navbar", a.split(/\s*,\s*/i)) > -1 && n(this).parents(".rd-navbar")[0]).toggleClass("active")), t.options.callbacks.onToggleSwitch && t.options.callbacks.onToggleSwitch.call(this, t), this }, a.prototype.dropdownOver = function(t, o) {
                    var e;
                    if (t.focusOnHover) {
                        if (e = n(this), clearTimeout(o), t.options.callbacks.onDropdownOver && !t.options.callbacks.onDropdownOver.call(this, t)) return this;
                        e.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus)
                    }
                    return this
                }, a.prototype.dropdownTouch = function(t, o) {
                    var e, a;
                    if (e = n(this), clearTimeout(o), t.focusOnHover) {
                        if (a = !1, e.hasClass("focus") && (a = !0), !a) return e.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus), !1;
                        t.options.callbacks.onDropdownOver && t.options.callbacks.onDropdownOver.call(this, t)
                    }
                    return this
                }, a.prototype.dropdownOut = function(t, o) { return t.focusOnHover && (n(this).one("mouseenter.navbar", function() { return clearTimeout(o) }), t.options.callbacks.onDropdownOut && t.options.callbacks.onDropdownOut.call(this, t), clearTimeout(o), o = setTimeout(n.proxy(t.dropdownUnfocus, this, t), t.options.focusOnHoverTimeout)), this }, a.prototype.dropdownUnfocus = function(t) { return n(this).find("li.focus").add(this).removeClass("focus"), this }, a.prototype.dropdownClose = function(t, o) { return o.target === this || n(o.target).parents(".rd-navbar-submenu").length || (n(this).find("li.focus").add(this).removeClass("focus").removeClass("opened"), t.options.callbacks.onDropdownClose && t.options.callbacks.onDropdownClose.call(this, t)), this }, a.prototype.dropdownToggle = function(t) { return n(this).toggleClass("opened").siblings().removeClass("opened"), t.options.callbacks.onDropdownToggle && t.options.callbacks.onDropdownToggle.call(this, t), this }, a.prototype.goToAnchor = function(t, o) { var e, a; return a = this.hash, e = n(a), !!t.getOption("anchorNav") && (e.length && (o.preventDefault(), n("html, body").stop().animate({ scrollTop: e.offset().top + t.getOption("anchorNavOffset") + 1 }, t.getOption("anchorNavSpeed"), t.getOption("anchorNavEasing"), function() { return t.changeAnchor(a) })), this) }, a.prototype.activateAnchor = function(t) {
                    var o, e, a, s, r, i, l, c, d, p, u, h;
                    if (s = this, u = s.$doc.scrollTop(), h = s.$win.height(), r = s.$doc.height(), p = s.getOption("anchorNavOffset"), !s.options.anchorNav) return !1;
                    if (u + h > r - 50) return (o = n('[data-type="anchor"]').last()).length && o.offset().top >= u && (i = "#" + o.attr("id"), (e = n('.rd-navbar-nav a[href^="' + i + '"]').parent()).hasClass("active") || (e.addClass("active").siblings().removeClass("active"), s.options.callbacks.onAnchorChange && s.options.callbacks.onAnchorChange.call(o[0], s))), o;
                    d = n('.rd-navbar-nav a[href^="#"]').get();
                    for (l in d) c = d[l], i = (a = n(c)).attr("href"), (o = n(i)).length && o.offset().top + p <= u && o.offset().top + o.outerHeight() > u && (a.parent().addClass("active").siblings().removeClass("active"), s.options.callbacks.onAnchorChange && s.options.callbacks.onAnchorChange.call(o[0], s));
                    return null
                }, a.prototype.getAnchor = function() { return history && history.state ? history.state.id : null }, a.prototype.changeAnchor = function(t) { return history && (history.state && history.state.id !== t ? history.replaceState({ anchorId: t }, null, t) : history.pushState({ anchorId: t }, null, t)), this }, a.prototype.applyHandlers = function(t) {
                    return null != t.options.responsive && t.$win.on("resize.navbar", n.proxy(t.resize, t.$win[0], t)).on("resize.navbar", n.proxy(t.resizeWrap, t)).on("resize.navbar", n.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("orientationchange.navbar", n.proxy(t.resize, t.$win[0], t)).trigger("resize.navbar"), t.$doc.on("scroll.navbar", n.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("scroll.navbar", n.proxy(t.activateAnchor, t)), t.$element.add(t.$clone).find("[data-rd-navbar-toggle]").each(function() { var o; return (o = n(this)).on("click", n.proxy(t.switchToggle, this, t)), o.parents("body").on("click", n.proxy(t.closeToggle, this, t)) }), t.$element.add(t.$clone).find(".rd-navbar-submenu").each(function() { var o, e; return o = n(this), e = o.parents(".rd-navbar--is-clone").length ? t.cloneTimer : t.focusTimer, o.on("mouseleave.navbar", n.proxy(t.dropdownOut, this, t, e)), o.find("> a").on("mouseenter.navbar", n.proxy(t.dropdownOver, this, t, e)), o.find("> a").on("touchstart.navbar", n.proxy(t.dropdownTouch, this, t, e)), o.find("> .rd-navbar-submenu-toggle").on("click", n.proxy(t.dropdownToggle, this, t)), o.parents("body").on("click", n.proxy(t.dropdownClose, this, t)) }), t.$element.add(t.$clone).find('.rd-navbar-nav a[href^="#"]').each(function() { return n(this).on("click", n.proxy(t.goToAnchor, this, t)) }), t.$element.find(".rd-navbar-dropdown, .rd-navbar-megamenu").each(function() {
                        var t, o;
                        t = n(this), (o = this.getBoundingClientRect()).left + t.outerWidth() >= e.innerWidth - 10 ? this.className += " rd-navbar-open-left" : o.left - t.outerWidth() <= 10 && (this.className += " rd-navbar-open-right")
                    }), t
                }, a.prototype.switchClass = function(t, o, e) { var a; return (a = t instanceof jQuery ? t : n(t)).addClass("rd-navbar--no-transition").removeClass(o).addClass(e), a[0].offsetHeight, a.removeClass("rd-navbar--no-transition") }, a.prototype.getOption = function(t) { var n, o; for (n in this.options.responsive) n <= e.innerWidth && (o = n); return null != this.options.responsive && null != this.options.responsive[o][t] ? this.options.responsive[o][t] : this.options[t] }, a.prototype.addAdditionalClassToToggles = function(t, o, e) { return n(t).find("[data-rd-navbar-toggle]").each(function() { var a; return n(this).addClass(o), a = this.getAttribute("data-rd-navbar-toggle"), n(this).parents("body").find(t).find(a).addClass(e) }) }, a
            }(), n.fn.extend({ RDNavbar: function(t) { var o; if (!(o = n(this)).data("RDNavbar")) return o.data("RDNavbar", new a(this, t)) } }), e.RDNavbar = a
        }(window.jQuery, document, window), "undefined" != typeof module && null !== module ? module.exports = window.RDNavbar : "function" == typeof define && define.amd && define(["jquery"], function() { "use strict"; return window.RDNavbar })
}).call(this);

/**
 * @module       jQuery RD Twitter Feed
 * @author       Rafael Shayvolodyan (raffa)
 * @version      1.0.3
 */
(function() {
    (function(k, p, q) {
        return function() {
            function h(a, c) {
                this.options = k.extend(!0, {}, this.Defaults, c);
                this.$element = k(a);
                this.initialize()
            }
            h.prototype.Defaults = {
                username: "templatemonster",
                list: null,
                hashtag: null,
                hideReplies: !0,
                dateFormat: "%b/%d/%Y",
                apiPath: "bat/twitter_api/tweet.php",
                loadingText: "Loading...",
                localTemplate: {
                    message: "This is sample tweet for local testing. Upload your project to the live hosting server for get data from twitter.com",
                    serverMessage: "RD Twitter Feed: Please upload project to the server for enable plugin!",
                    user_name: "TemplateMonster",
                    date: "Fri Nov 06 11:20:43 +0000 2015",
                    tweet: "Check Out NEW #Photographer Portfolio Responsive Photo - goo.gl/ECjPvq",
                    avatar: "http://pbs.twimg.com/profile_images/611164752396419072/hJYLqLJR_normal.jpg",
                    url: "https://twitter.com/templatemonster/status/660069673464160256",
                    screen_name: "@templatemonster",
                    media_url: ["https://pbs.twimg.com/media/CS6HxzwUEAALx0y.jpg", "http://pbs.twimg.com/media/CShUCIYUcAABb53.jpg"]
                },
                dateText: { seconds: "less 1m", minutes: "m", hours: "h", yesterday: "yd" },
                callback: !1
            };
            h.prototype.initialize = function() {
                var a = this.$element;
                this.options.list && !this.options.username && console.error("If you want to fetch tweets from a list, you must define the username of the list owner.");
                if (this.isLocal()) a.prepend("<h6>" + this.options.localTemplate.message + "</h6>");
                else if (!this.isServer()) { a.prepend("<h6>" + this.options.localTemplate.serverMessage + "</h6>"); return }
                a.append('<span id="loading_tweet">' + (a.attr("data-twitter-loading") ? a.attr("data-twitter-loading") : this.options.loadingText +
                    "</span>"));
                this.fetch()
            };
            h.prototype.linking = function(a, c) {
                var d, b;
                var e = a.replace(/#([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>').replace(/@([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>');
                var g = a.match(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig);
                if (null !== g) {
                    var f = 0;
                    for (d = g.length; f < d; f++) {
                        var h = g[f];
                        var k = c.entities.urls;
                        var l = 0;
                        for (b = k.length; l <
                            b; l++) {
                            var n = k[l];
                            e = e.replace(h, '<a href="' + n.expanded_url + '" target="_blank">' + n.display_url + "</a> ")
                        }
                        e = e.replace(h, "")
                    }
                }
                return e
            };
            h.prototype.dating = function(a, c) {
                var d;
                var b = a.split(" ");
                a = new Date(Date.parse(b[1] + " " + b[2] + ", " + b[5] + " " + b[3] + " UTC"));
                var e = ((new Date).getTime() - a.getTime()) / 1E3;
                b = "January February March April May June July August September October November December".split(" ");
                b = {
                    "%d": a.getDate(),
                    "%m": a.getMonth() + 1,
                    "%b": b[a.getMonth()].substr(0, 3),
                    "%B": b[a.getMonth()],
                    "%y": String(a.getFullYear()).slice(-2),
                    "%Y": a.getFullYear()
                };
                var g = c ? "%Y-%m-%d" : this.$element.attr("data-twitter-date-format") ? this.$element.attr("data-twitter-date-format") : this.options.dateFormat;
                if (60 > e) return this.$element.attr("data-twitter-date-seconds") ? this.$element.attr("data-twitter-date-seconds") : this.options.dateText.seconds;
                if (60 > e / 60) return Math.round(e / 60) + (this.$element.attr("data-twitter-date-minutes") ? this.$element.attr("data-twitter-date-minutes") : this.options.dateText.minutes);
                if (24 > e / 60 / 60) return Math.round(e / 60 / 60) +
                    (this.$element.attr("data-twitter-date-hours") ? this.$element.attr("data-twitter-date-hours") : this.options.dateText.hours);
                if (2 > e / 60 / 60 / 24) return this.$element.attr("data-twitter-date-yesterday") ? this.$element.attr("data-twitter-date-yesterday") : this.options.dateText.yesterday;
                var f = g.match(/%[dmbByY]/g);
                var h = 0;
                for (d = f.length; h < d; h++) e = f[h], g = g.replace(e, b[e]);
                return g
            };
            h.prototype.isLocal = function() {
                var a;
                var c = ["127.0.0.1", "192.168", "localhost"];
                var d = 0;
                for (a = c.length; d < a; d++) {
                    var b = c[d];
                    if (-1 <
                        p.location.hostname.indexOf(b)) return !0
                }
                return !1
            };
            h.prototype.isServer = function() { var a = q.location.href; return -1 < a.indexOf("http://") || -1 < a.indexOf("https://") ? !0 : !1 };
            h.prototype.getMedia = function(a) { var c; if (a.extended_entities) { if (a.extended_entities.media) { var d = []; var b = a.extended_entities.media; var e = 0; for (c = b.length; e < c; e++) a = b[e], d.push(a.media_url); return d } } else return a.entities && a.entities.media ? a.entities.media[0].media_url : null };
            h.prototype.getTempData = function(a, c) {
                var d;
                var b = a.$element.find('[data-twitter-type="tweet"]').length;
                var e = [];
                if (a.isLocal())
                    for (d = 0; 0 <= b ? d < b : d > b; 0 <= b ? ++d : --d) {
                        var g = { user_name: a.options.localTemplate.user_name, date: a.dating(a.options.localTemplate.date, !1), datetime: a.dating(a.options.localTemplate.date, !0), tweet: a.linking(a.options.localTemplate.tweet), avatar: a.options.localTemplate.avatar, url: a.options.localTemplate.url, retweeted: !1, screen_name: a.linking(a.options.localTemplate.screen_name), media_url: a.options.localTemplate.media_url };
                        e.push(g)
                    } else
                        for (g = d = 0; 0 <= b ? d < b : d > b; g = 0 <= b ? ++d : --d) {
                            if (c[g]) var f =
                                c[g];
                            else if (c.statuses && c.statuses[g]) f = c.statuses[g];
                            else break;
                            g = { user_name: f.user.name, date: a.dating(f.created_at, !1), datetime: a.dating(f.created_at, !0), tweet: a.linking(f.text, f), avatar: f.user.profile_image_url, url: "https://twitter.com/" + f.user.screen_name + "/status/" + f.id_str, retweeted: f.retweeted, screen_name: a.linking("@" + f.user.screen_name, f) };
                            g.media_url = a.getMedia(f);
                            e.push(g)
                        }
                return e
            };
            h.prototype.fetch = function() {
                var a = this.$element;
                k.getJSON(this.options.apiPath, {
                    username: a.attr("data-twitter-username") ?
                        a.attr("data-twitter-username") : this.options.username,
                    list: a.attr("data-twitter-listname") ? a.attr("data-twitter-listname") : this.options.list,
                    hashtag: a.attr("data-twitter-hashtag") ? a.attr("data-twitter-hashtag") : this.options.hashtag,
                    count: a.find('[data-twitter-type="tweet"]').length + 1,
                    exclude_replies: this.options.hideReplies
                }, k.proxy(function(c) {
                    a.find("#loading_tweet").fadeOut("fast");
                    this.construct(this.getTempData(this, c))
                }, this));
                "function" === typeof this.options.callback && this.options.callback()
            };
            h.prototype.construct = function(a) {
                var c, d;
                var b = this;
                var e = b.$element.find('[data-twitter-type="tweet"]');
                var g = c = 0;
                for (d = e.length; 0 <= d ? c < d : c > d; g = 0 <= d ? ++c : --c) {
                    "A" === e.prop("tagName") && this.tweetLink(e.eq(g), a[g]);
                    var f = 0;
                    e.eq(g).find("*").each(function() {
                        b.parseAttributes(this, a[g], f);
                        this.hasAttribute("data-media_url") && f++
                    });
                    e.css("opacity", "1")
                }
            };
            h.prototype.tweetLink = function(a, c) { a.attr("href", c.url) };
            h.prototype.parseAttributes = function(a, c, d) {
                var b, e;
                var g = k(a);
                var f = g.data();
                for (b in f)
                    if ((f[b] ||
                            "xImage" !== f[b] && "xId" !== f[b]) && f.hasOwnProperty(b) && "string" === typeof f[b]) { var h = f[b].split(/\s?,\s?/i); var m = 0; for (e = h.length; m < e; m++) { var l = h[m]; "data-x-id" !== l && "data-x-image" !== l && ("text" === l.toLowerCase() ? a.innerHTML = c[b] : "media_url" === b ? k.isArray(c[b]) && c[b].length > d ? a.setAttribute(l, c[b][d]) : null !== c[b] && 0 === d ? a.setAttribute(l, c[b]) : g.remove() : a.setAttribute(l, c[b])) } }
            };
            k.fn.extend({
                RDTwitter: function(a) {
                    this.each(function() {});
                    var c = k(this);
                    if (!c.data("RDTwitter")) return c.data("RDTwitter",
                        new h(this, a))
                }
            });
            return h
        }()
    })(window.jQuery, document, window);
    "undefined" !== typeof module && null !== module ? module.exports = window.RDTwitter : "function" === typeof define && define.amd && define(["jquery"], function() { return window.RDTwitter })
}).call(this);

/**
 * @module       UIToTop
 * @author       Matt Varone
 * @see          http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
 * @license      MIT License
 
! function(o) {
    o.fn.UItoTop = function(n) {
        var e = { text: "", min: 500, scrollSpeed: 800, containerID: "ui-to-top", containerClass: "ui-to-top fa fa-whatsapp", easingType: "easeIn" },
            t = o.extend(e, n),
            i = "#" + t.containerID;
        o("body").append('<a href="#" id="' + t.containerID + '" class="' + t.containerClass + '" >' + t.text + "</a>"), o(i).click(function() { return o("html, body").stop().animate({ scrollTop: 0 }, t.scrollSpeed, t.easingType), !1 }), o(window).scroll(function() { var n = o(window).scrollTop(); "undefined" == typeof document.body.style.maxHeight && o(i).css({ position: "absolute", top: o(window).scrollTop() + o(window).height() - 50 }), n > t.min ? o(i).stop(!0, !0).addClass("active") : o(i).removeClass("active") })
    }
}(jQuery);*/

/**
 * @module       RD Flickr Gallery
 * @author       Rafael Shayvolodyan
 * @see          https://ua.linkedin.com/in/rafael-shayvolodyan-3a297b96
 * @version      1.0.0
 */
(function() {
    (function(f, l, k) {
        var h;
        h = function() {
            function d(a, c) {
                this.options = f.extend(!0, {}, this.Defaults, c);
                this.$element = f(a);
                this.initialize()
            }
            d.prototype.Defaults = { flickrbase: "http://api.flickr.com/services/feeds/", feedapi: "photos_public.gne", qstrings: { ids: "", tags: "", tagmode: "", lang: "en-us", format: "json", jsoncallback: "?" }, dateFormat: "%b/%d/%Y", cleanDescription: !0, callback: !1 };
            d.prototype.initialize = function() { this.fetchData(this.makeUrl()) };
            d.prototype.makeUrl = function() {
                var a, c, b, e;
                e = this.options.flickrbase +
                    this.options.feedapi + "?";
                a = !0;
                b = { ids: this.$element.attr("data-flickr-id") ? this.$element.attr("data-flickr-id") : this.options.qstrings.ids, tags: this.$element.attr("data-flickr-tags") ? this.$element.attr("data-flickr-tags") : this.options.qstrings.tags, tagmode: this.$element.attr("data-flickr-tagmode") ? this.$element.attr("data-flickr-tagmode") : this.options.qstrings.tagmode, lang: this.$element.attr("data-flickr-lang") ? this.$element.attr("data-flickr-lang") : this.options.qstrings.lang, format: "json", jsoncallback: "?" };
                for (c in b) b[c] && (a || (e += "&"), e += c + "=" + b[c], a = !1);
                return e
            };
            d.prototype.fetchData = function(a) {
                var c;
                c = this;
                return f.getJSON(a, function(a) { f.each(a.items, function(a, b) { a < c.$element.find('[data-type="flickr-item"]').length && (c.options.cleanDescription && c.cleanDescription(b), c.setImageSizes(b), b.author_name = c.getAuthor(b.author), b.dating = c.dating(b.date_taken, !1), b.datetime = c.dating(b.date_taken, !0), c.setHTML(b, a)) }); "function" === typeof c.options.callback && c.options.callback() })
            };
            d.prototype.cleanDescription =
                function(a) {
                    var c, b;
                    b = /<p>(.*?)<\/p>/g;
                    c = a.description;
                    b.test(c) && (a.description = c.match(b)[2], null != a.description && (a.description = a.description.replace("<p>", "").replace("</p>", "")));
                    return a
                };
            d.prototype.setImageSizes = function(a) {
                var c, b, e, d;
                d = "_s _q _t _m _n _- _z _c _b _h _k _o ".split(" ");
                c = 0;
                for (b = d.length; c < b; c++) e = d[c], a["image" + e] = a.media.m.replace("_m", e);
                delete a.media;
                return a
            };
            d.prototype.getAuthor = function(a) { a = /\(([^]+)\)/.exec(a); return null != a[1] ? a[1] : !1 };
            d.prototype.dating = function(a,
                c) {
                var b, e, d, g, f;
                b = new Date(Date.parse(a));
                e = "January February March April May June July August September October November December".split(" ");
                b = { "%d": b.getDate(), "%m": b.getMonth() + 1, "%b": e[b.getMonth()].substr(0, 3), "%B": e[b.getMonth()], "%y": String(b.getFullYear()).slice(-2), "%Y": b.getFullYear() };
                a = c ? "%Y-%m-%d" : this.$element.attr("data-flickr-date-format") ? this.$element.attr("data-flickr-date-format") : this.options.dateFormat;
                d = a.match(/%[dmbByY]/g);
                g = 0;
                for (f = d.length; g < f; g++) e = d[g], a = a.replace(e,
                    b[e]);
                return a
            };
            d.prototype.setHTML = function(a, c) {
                var b, e;
                e = this;
                b = this.$element.find('[data-type="flickr-item"]');
                e.parseAttributes(b.eq(c), a);
                b.eq(c).find("*").each(function() { e.parseAttributes(f(this), a) })
            };
            d.prototype.parseAttributes = function(a, c) {
                var b, e, d, g, f, h;
                d = a.data();
                for (g in d)
                    if (d.hasOwnProperty(g) && "string" === typeof d[g])
                        for (e = d[g].split(/\s?,\s?/i), f = 0, h = e.length; f < h; f++) b = e[f], "text" === b.toLowerCase() ? a.html(c[g]) : a.attr(b, c[g])
            };
            return d
        }();
        f.fn.extend({
            RDFlickr: function(d) {
                return this.each(function() {
                    var a;
                    a = f(this);
                    if (!a.data("RDFlickr")) return a.data("RDFlickr", new h(this, d))
                })
            }
        });
        return k.RDFlickr = h
    })(window.jQuery, document, window);
    "undefined" !== typeof module && null !== module ? module.exports = window.RDFlickr : "function" === typeof define && define.amd && define(["jquery"], function() { return window.RDFlickr })
}).call(this);

/**
 * @module       Bootstrap
 * @version      v4.1.1
 * @author       Twitter, Inc.
 * @see          http://getbootstrap.com
 * @copyright    2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * @license      MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function(t, e, c) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function o(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

    function h(r) {
        for (var t = 1; t < arguments.length; t++) {
            var s = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function(t) { return Object.getOwnPropertyDescriptor(s, t).enumerable }))), e.forEach(function(t) {
                var e, n, i;
                e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i
            })
        }
        return r
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;
    var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function(i) {
            var e = "transitionend";

            function t(t) {
                var e = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || l.triggerTransitionEnd(e) }, t), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try { return 0 < i(document).find(e).length ? e : null } catch (t) { return null }
                },
                getTransitionDurationFromElement: function(t) { if (!t) return 0; var e = i(t).css("transition-duration"); return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0 },
                reflow: function(t) { return t.offsetHeight },
                triggerTransitionEnd: function(t) { i(t).trigger(e) },
                supportsTransitionEnd: function() { return Boolean(e) },
                isElement: function(t) { return (t[0] || t).nodeType },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                s = e[i],
                                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                        }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t) { if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }, l
        }(e),
        In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() { r.removeData(this._element, s), this._element = null }, t._getRootElement = function(t) {
                var e = Cn.getSelectorFromElement(t),
                    n = !1;
                return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function(t) { var e = r.Event(u.CLOSE); return r(t).trigger(e), e }, t._removeElement = function(e) {
                var n = this;
                if (r(e).removeClass(_), r(e).hasClass(d)) {
                    var t = Cn.getTransitionDurationFromElement(e);
                    r(e).one(Cn.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) { r(t).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = r(this),
                        e = t.data(s);
                    e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function() { return r.fn[n] = l, g._jQueryInterface }, g),
        An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + y, FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y }, k = function() {
            function n(t) { this._element = t }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = m(this._element).closest(b)[0];
                if (n) {
                    var i = m(this._element).find(S)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && m(this._element).hasClass(C)) t = !1;
                            else {
                                var r = m(n).find(w)[0];
                                r && m(r).removeClass(C)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !m(this._element).hasClass(C), m(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C)
            }, t.dispose = function() { m.removeData(this._element, v), this._element = null }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = m(this).data(v);
                    t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, o(n, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), n
        }(), m(document).on(O.CLICK_DATA_API, D, function(t) {
            t.preventDefault();
            var e = t.target;
            m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, D, function(t) {
            var e = m(t.target).closest(N)[0];
            m(e).toggleClass(A, /^focus(in)?$/.test(t.type))
        }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() { return m.fn[p] = T, k._jQueryInterface }, k),
        Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, x = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, U = "next", K = "prev", F = "left", V = "right", Q = { SLIDE: "slide" + R, SLID: "slid" + R, KEYDOWN: "keydown" + R, MOUSEENTER: "mouseenter" + R, MOUSELEAVE: "mouseleave" + R, TOUCHEND: "touchend" + R, LOAD_DATA_API: "load" + R + H, CLICK_DATA_API: "click" + R + H }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, $ = function() {
            function s(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners() }
            var t = s.prototype;
            return t.next = function() { this._isSliding || this._slide(U) }, t.nextWhenVisible = function() {!document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next() }, t.prev = function() { this._isSliding || this._slide(K) }, t.pause = function(t) { t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function(t) {
                var e = this;
                this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) P(this._element).one(Q.SLID, function() { return e.to(t) });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? U : K;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() { P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function(t) { return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) { return e.pause(t) }).on(Q.MOUSELEAVE, function(t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval) }))
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) { return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t) }, t._getItemByDirection = function(t, e) {
                var n = t === U,
                    i = t === K,
                    r = this._getItemIndex(e),
                    s = this._items.length - 1;
                if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
                var o = (r + (t === K ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
                    r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                return P(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && P(e).addClass(Y)
                }
            }, t._slide = function(t, e) {
                var n, i, r, s = this,
                    o = P(this._element).find(Z.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(o),
                    l = e || o && this._getItemByDirection(t, o),
                    h = this._getItemIndex(l),
                    c = Boolean(this._interval);
                if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
                    var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: h });
                    if (P(this._element).hasClass(G)) {
                        P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
                        var f = Cn.getTransitionDurationFromElement(o);
                        P(o).one(Cn.TRANSITION_END, function() { P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function() { return P(s._element).trigger(u) }, 0) }).emulateTransitionEnd(f)
                    } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
                    c && this.cycle()
                }
            }, s._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = P(this).data(j),
                        e = h({}, M, P(this).data());
                    "object" == typeof i && (e = h({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, s._dataApiClickHandler = function(t) {
                var e = Cn.getSelectorFromElement(this);
                if (e) {
                    var n = P(e)[0];
                    if (n && P(n).hasClass(B)) {
                        var i = h({}, P(n).data(), P(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault()
                    }
                }
            }, o(s, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return M } }]), s
        }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
            P(Z.DATA_RIDE).each(function() {
                var t = P(this);
                $._jQueryInterface.call(t, t.data())
            })
        }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function() { return P.fn[L] = W, $._jQueryInterface }, $),
        bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, at = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + ".data-api" }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, gt = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
                    var r = n[i],
                        s = Cn.getSelectorFromElement(r);
                    null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() { tt(this._element).hasClass(lt) ? this.hide() : this.show() }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
                    var i = tt.Event(at.SHOW);
                    if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
                        var r = this._getDimension();
                        tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() { tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN) }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                    var e = tt.Event(at.HIDE);
                    if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length)
                            for (var i = 0; i < this._triggerArray.length; i++) {
                                var r = this._triggerArray[i],
                                    s = Cn.getSelectorFromElement(r);
                                if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() { t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN) }).emulateTransitionEnd(o)
                    }
                }
            }, t.setTransitioning = function(t) { this._isTransitioning = t }, t.dispose = function() { tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function(t) { return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t }, t._getDimension = function() { return tt(this._element).hasClass(ft) ? ft : dt }, t._getParent = function() {
                var n = this,
                    t = null;
                Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return tt(t).find(e).each(function(t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = tt(t).hasClass(lt);
                    0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(t) { var e = Cn.getSelectorFromElement(t); return e ? tt(e)[0] : null }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = tt(this),
                        e = t.data(nt),
                        n = h({}, st, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, o(a, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return st } }]), a
        }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = tt(this),
                e = Cn.getSelectorFromElement(this);
            tt(e).each(function() {
                var t = tt(this),
                    e = t.data(nt) ? "toggle" : n.data();
                gt._jQueryInterface.call(t, e)
            })
        }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function() { return tt.fn[et] = rt, gt._jQueryInterface }, gt),
        Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = { HIDE: "hide" + Et, HIDDEN: "hidden" + Et, SHOW: "show" + Et, SHOWN: "shown" + Et, CLICK: "click" + Et, CLICK_DATA_API: "click" + Et + yt, KEYDOWN_DATA_API: "keydown" + Et + yt, KEYUP_DATA_API: "keyup" + Et + yt }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Vt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Qt = function() {
            function l(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var t = l.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !mt(this._element).hasClass(At)) {
                    var t = l._getParentFromElement(this._element),
                        e = mt(this._menu).hasClass(Dt);
                    if (l._clearMenus(), !e) {
                        var n = { relatedTarget: this._element },
                            i = mt.Event(It.SHOW, n);
                        if (mt(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n)) }
                    }
                }
            }, t.dispose = function() { mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function() {
                var e = this;
                mt(this._element).on(It.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })
            }, t._getConfig = function(t) { return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = mt(t).find(Lt)[0]
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = mt(this._element).parent(),
                    e = Mt;
                return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e
            }, t._detectNavbar = function() { return 0 < mt(this._element).closest(".navbar").length }, t._getPopperConfig = function() {
                var e = this,
                    t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t } : t.offset = this._config.offset;
                var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n
            }, l._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = mt(this).data(vt);
                    if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, l._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                        var i = l._getParentFromElement(e[n]),
                            r = mt(e[n]).data(vt),
                            s = { relatedTarget: e[n] };
                        if (r) {
                            var o = r._menu;
                            if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
                                var a = mt.Event(It.HIDE, s);
                                mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)))
                            }
                        }
                    }
            }, l._getParentFromElement = function(t) { var e, n = Cn.getSelectorFromElement(t); return n && (e = mt(n)[0]), e || t.parentNode }, l._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
                    var e = l._getParentFromElement(this),
                        n = mt(e).hasClass(Dt);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = mt(e).find(Rt).get();
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var s = mt(e).find(kt)[0];
                            mt(s).trigger("focus")
                        }
                        mt(this).trigger("click")
                    }
                }
            }, o(l, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Ft } }, { key: "DefaultType", get: function() { return Vt } }]), l
        }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function(t) { t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle") }).on(It.CLICK_DATA_API, Pt, function(t) { t.stopPropagation() }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function() { return mt.fn[pt] = Tt, Qt._jQueryInterface }, Qt),
        wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Jt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Zt = { HIDE: "hide" + qt, HIDDEN: "hidden" + qt, SHOW: "show" + qt, SHOWN: "shown" + qt, FOCUSIN: "focusin" + qt, RESIZE: "resize" + qt, CLICK_DISMISS: "click.dismiss" + qt, KEYDOWN_DISMISS: "keydown.dismiss" + qt, MOUSEUP_DISMISS: "mouseup.dismiss" + qt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt, CLICK_DATA_API: "click" + qt + ".data-api" }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, se = function() {
            function r(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 }
            var t = r.prototype;
            return t.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function(t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
                    var n = Bt.Event(Zt.SHOW, { relatedTarget: t });
                    Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function(t) { return e.hide(t) }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() { Bt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) { Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Bt.Event(Zt.HIDE);
                    if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = Bt(this._element).hasClass(ne);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
                            var r = Cn.getTransitionDurationFromElement(this._element);
                            Bt(this._element).one(Cn.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() { Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, t.handleUpdate = function() { this._adjustDialog() }, t._getConfig = function(t) { return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t }, t._showElement = function(t) {
                var e = this,
                    n = Bt(this._element).hasClass(ne);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();
                var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
                    r = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i) };
                if (n) {
                    var s = Cn.getTransitionDurationFromElement(this._element);
                    Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, t._enforceFocus = function() {
                var e = this;
                Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function(t) { document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus() })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? Bt(window).on(Zt.RESIZE, function(t) { return e.handleUpdate(t) }) : Bt(window).off(Zt.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN) })
            }, t._removeBackdrop = function() { this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function(t) {
                var e = this,
                    n = Bt(this._element).hasClass(ne) ? ne : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
                    if (!n) return void t();
                    var i = Cn.getTransitionDurationFromElement(this._backdrop);
                    Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    Bt(this._backdrop).removeClass(ie);
                    var r = function() { e._removeBackdrop(), t && t() };
                    if (Bt(this._element).hasClass(ne)) {
                        var s = Cn.getTransitionDurationFromElement(this._backdrop);
                        Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    Bt(re.FIXED_CONTENT).each(function(t, e) {
                        var n = Bt(e)[0].style.paddingRight,
                            i = Bt(e).css("padding-right");
                        Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), Bt(re.STICKY_CONTENT).each(function(t, e) {
                        var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    }), Bt(re.NAVBAR_TOGGLER).each(function(t, e) {
                        var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight,
                        e = Bt(document.body).css("padding-right");
                    Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function() { Bt(re.FIXED_CONTENT).each(function(t, e) { var n = Bt(e).data("padding-right"); "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right") }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function(t, e) { var n = Bt(e).data("margin-right"); "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right") }); var t = Bt(document.body).data("padding-right"); "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right") }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = $t, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = Bt(this).data(Gt),
                        e = h({}, Xt, Bt(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, o(r, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Xt } }]), r
        }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function(t) {
            var e, n = this,
                i = Cn.getSelectorFromElement(this);
            i && (e = Bt(i)[0]);
            var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var s = Bt(e).one(Zt.SHOW, function(t) { t.isDefaultPrevented() || s.one(Zt.HIDDEN, function() { Bt(n).is(":visible") && n.focus() }) });
            se._jQueryInterface.call(Bt(e), r, this)
        }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function() { return Bt.fn[Yt] = zt, se._jQueryInterface }, se),
        Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(_e = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(de = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, pe = "out", ve = { HIDE: "hide" + he, HIDDEN: "hidden" + he, SHOW: (me = "show") + he, SHOWN: "shown" + he, INSERTED: "inserted" + he, CLICK: "click" + he, FOCUSIN: "focusin" + he, FOCUSOUT: "focusout" + he, MOUSEENTER: "mouseenter" + he, MOUSELEAVE: "mouseleave" + he }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function() {
            function i(t, e) {
                if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() { this._isEnabled = !0 }, t.disable = function() { this._isEnabled = !1 }, t.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = oe(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() { clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function() {
                var e = this;
                if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = oe.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    oe(this.element).trigger(t);
                    var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = Cn.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        o = this._getAttachment(s);
                    this.addAttachmentClass(o);
                    var a = !1 === this.config.container ? document.body : oe(this.config.container);
                    oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, { placement: o, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Ce }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { e._handlePopperPlacementChange(t) } }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
                    var l = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e)
                    };
                    if (oe(this.tip).hasClass(Ee)) {
                        var h = Cn.getTransitionDurationFromElement(this.tip);
                        oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h)
                    } else l()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = oe.Event(this.constructor.Event.HIDE),
                    r = function() { e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() };
                if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
                        var s = Cn.getTransitionDurationFromElement(n);
                        oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function() { return Boolean(this.getTitle()) }, t.addAttachmentClass = function(t) { oe(this.getTipElement()).addClass(ue + "-" + t) }, t.getTipElement = function() { return this.tip = this.tip || oe(this.config.template)[0], this.tip }, t.setContent = function() {
                var t = oe(this.getTipElement());
                this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye)
            }, t.setElementContent = function(t, e) { var n = this.config.html; "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e) }, t.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getAttachment = function(t) { return _e[t.toUpperCase()] }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) { return i.toggle(t) });
                    else if (t !== be) {
                        var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        oe(i.element).on(e, i.config.selector, function(t) { return i._enter(t) }).on(n, i.config.selector, function(t) { return i._leave(t) })
                    }
                    oe(i.element).closest(".modal").on("hide.bs.modal", function() { return i.hide() })
                }), this.config.selector ? this.config = h({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === me && e.show() }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === pe && e.hide() }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) { return "number" == typeof(t = h({}, this.constructor.Default, oe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = oe(this.getTipElement()),
                    e = t.attr("class").match(fe);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = oe(this).data(le),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return ge } }, { key: "NAME", get: function() { return ae } }, { key: "DATA_KEY", get: function() { return le } }, { key: "Event", get: function() { return ve } }, { key: "EVENT_KEY", get: function() { return he } }, { key: "DefaultType", get: function() { return de } }]), i
        }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function() { return oe.fn[ae] = ce, Se._jQueryInterface }, Se),
        On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), He = h({}, Nn.DefaultType, { content: "(string|element|function)" }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = { HIDE: "hide" + ke, HIDDEN: "hidden" + ke, SHOW: (Me = "show") + ke, SHOWN: "shown" + ke, INSERTED: "inserted" + ke, CLICK: "click" + ke, FOCUSIN: "focusin" + ke, FOCUSOUT: "focusout" + ke, MOUSEENTER: "mouseenter" + ke, MOUSELEAVE: "mouseleave" + ke }, Fe = function(t) {
            var e, n;

            function i() { return t.apply(this, arguments) || this }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(t) { we(this.getTipElement()).addClass(Le + "-" + t) }, r.getTipElement = function() { return this.tip = this.tip || we(this.config.template)[0], this.tip }, r.setContent = function() {
                var t = we(this.getTipElement());
                this.setElementContent(t.find(xe), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me)
            }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() {
                var t = we(this.getTipElement()),
                    e = t.attr("class").match(je);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = we(this).data(Oe),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return Re } }, { key: "NAME", get: function() { return Ne } }, { key: "DATA_KEY", get: function() { return Oe } }, { key: "Event", get: function() { return Ke } }, { key: "EVENT_KEY", get: function() { return ke } }, { key: "DefaultType", get: function() { return He } }]), i
        }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function() { return we.fn[Ne] = Pe, Fe._jQueryInterface }, Fe),
        kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = { offset: 10, method: "auto", target: "" }, ze = { offset: "number", method: "string", target: "(string|element)" }, Xe = { ACTIVATE: "activate" + Ye, SCROLL: "scroll" + Ye, LOAD_DATA_API: "load" + Ye + ".data-api" }, Je = "dropdown-item", Ze = "active", $e = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, tn = "offset", en = "position", nn = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? tn : en,
                    r = "auto" === this._config.method ? t : this._config.method,
                    s = r === en ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function(t) { var e, n = Cn.getSelectorFromElement(t); if (n && (e = Ve(n)[0]), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [Ve(e)[r]().top + s, n] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })
            }, t.dispose = function() { Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function(t) {
                if ("string" != typeof(t = h({}, qe, "object" == typeof t && t ? t : {})).target) {
                    var e = Ve(t.target).attr("id");
                    e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e
                }
                return Cn.typeCheckConfig(Qe, t, ze), t
            }, t._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' });
                var n = Ve(t.join(","));
                n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e })
            }, t._clear = function() { Ve(this._selector).filter($e.ACTIVE).removeClass(Ze) }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = Ve(this).data(Be);
                    if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, o(n, null, [{ key: "VERSION", get: function() { return "4.1.1" } }, { key: "Default", get: function() { return qe } }]), n
        }(), Ve(window).on(Xe.LOAD_DATA_API, function() {
            for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
                var n = Ve(t[e]);
                nn._jQueryInterface.call(n, n.data())
            }
        }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function() { return Ve.fn[Qe] = Ge, nn._jQueryInterface }, nn),
        Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = { HIDE: "hide" + on, HIDDEN: "hidden" + on, SHOW: "show" + on, SHOWN: "shown" + on, CLICK_DATA_API: "click" + on + ".data-api" }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function() {
            function i(t) { this._element = t }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
                    var t, i, e = rn(this._element).closest(gn)[0],
                        r = Cn.getSelectorFromElement(this._element);
                    if (e) {
                        var s = "UL" === e.nodeName ? pn : mn;
                        i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1]
                    }
                    var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
                        a = rn.Event(ln.SHOW, { relatedTarget: i });
                    if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        r && (t = rn(r)[0]), this._activate(this._element, e);
                        var l = function() {
                            var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                                e = rn.Event(ln.SHOWN, { relatedTarget: i });
                            rn(i).trigger(t), rn(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() { rn.removeData(this._element, sn), this._element = null }, t._activate = function(t, e, n) {
                var i = this,
                    r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
                    s = n && r && rn(r).hasClass(fn),
                    o = function() { return i._transitionComplete(t, r, n) };
                if (r && s) {
                    var a = Cn.getTransitionDurationFromElement(r);
                    rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    rn(e).removeClass(dn + " " + cn);
                    var i = rn(e.parentNode).find(yn)[0];
                    i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
                    var r = rn(t).closest(_n)[0];
                    r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = rn(this),
                        e = t.data(sn);
                    if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.1" } }]), i
        }(), rn(document).on(ln.CLICK_DATA_API, vn, function(t) { t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show") }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function() { return rn.fn.tab = an, Tn._jQueryInterface }, Tn);
    ! function(t) { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", { value: !0 })
});

/**
 * @module       RDInputLabel
 * @author       Evgeniy Gusarov
 * @license      MIT License
 */
(function() {
    ! function(t, e, i) {
        var s, n;
        return n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isWebkit = /safari|chrome/i.test(navigator.userAgent), s = function() {
            function s(s, n) { this.options = t.extend(!0, {}, this.Defaults, n), this.$element = t(s).addClass("rd-input-label"), this.$target = t("#" + this.$element.attr("for")), this.$win = t(i), this.$doc = t(e), this.initialize() }
            return s.prototype.Defaults = { callbacks: null }, s.prototype.initialize = function() { return this.$target.on("input", t.proxy(this.change, this)).on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("hover", t.proxy(this.hover, this)).parents("form").on("reset", t.proxy(this.reset, this)), this.change(), this.hover(), this }, s.prototype.hover = function() { return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")), this }, s.prototype.change = function() { return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")), "" !== this.$target.val() ? (this.$element.hasClass("focus") || this.focus(), this.$element.addClass("not-empty")) : this.$element.removeClass("not-empty"), this }, s.prototype.focus = function() { return this.$element.addClass("focus"), this }, s.prototype.reset = function() { return setTimeout(t.proxy(this.blur, this)), this }, s.prototype.blur = function(t) { return "" === this.$target.val() && this.$element.removeClass("focus").removeClass("not-empty"), this }, s
        }(), t.fn.extend({ RDInputLabel: function(e) { return this.each(function() { var i; return i = t(this), i.data("RDInputLabel") ? void 0 : i.data("RDInputLabel", new s(this, e)) }) } }), i.RDInputLabel = s
    }(window.jQuery, document, window), "undefined" != typeof module && null !== module ? module.exports = window.RDInputLabel : "function" == typeof define && define.amd && define(["jquery"], function() { "use strict"; return window.RDInputLabel })
}).call(this);

/**
 * @module       Materianize Parallax
 * @licesne      MIT License
 * @see          http://materializecss.com/parallax-demo.html
 */
! function(i) {
    i.fn.parallax = function() {
        var a = i(window).width();
        return this.each(function(t) {
            function n(t) {
                var n;
                n = a < 601 ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;
                var e = r.children("img").first(),
                    l = e.height() - n,
                    o = r.offset().top + n,
                    h = r.offset().top,
                    d = i(window).scrollTop(),
                    s = window.innerHeight,
                    c = (d + s - h) / (n + s),
                    g = Math.round(l * c);
                t && e.css("display", "block"), o > d && h < d + s && e.css("transform", "translate3D(-50%," + g + "px, 0)")
            }
            var r = i(this).prepend('<div class="material-parallax parallax"><img src="images/_blank.png" alt=""></div>').find(".material-parallax");
            r.children("img").first().attr("src", r.parents("[data-parallax-img]").data("parallax-img")), r.children("img").one("load", function() { n(!0) }).each(function() { this.complete && i(this).trigger("load") }), i(window).scroll(function() { a = i(window).width(), n(!1) }), i(window).resize(function() { a = i(window).width(), n(!1) })
        })
    }
}(jQuery);

/**
 * @module       Lightgallery
 * @author       Sachin N
 * @see          http://sachinchoolur.github.io/lightGallery/
 * @license      GPLv3
 * @version      1.6.2 - 2017-10-03
 */
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery) }(this, function(a) {
    ! function() {
        "use strict";

        function b(b, d) { if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this }
        var c = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !0, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 };
        b.prototype.init = function() {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() { b.build(b.index) }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() { b.build(b.index), a("body").addClass("lg-on") })) : b.$items.on("click.lgcustom", function(c) {
                try { c.preventDefault(), c.preventDefault() } catch (a) { c.returnValue = !1 }
                b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"))
            })
        }, b.prototype.build = function(b) {
            var c = this;
            c.structure(), a.each(a.fn.lightGallery.modules, function(b) { c.modules[b] = new a.fn.lightGallery.modules[b](c.el) }), c.slide(b, !1, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 ? (c.arrow(), setTimeout(function() { c.enableDrag(), c.enableSwipe() }, 50), c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() { c.$el.trigger("onSlideClick.lg") }), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() { c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() { c.$outer.addClass("lg-hide-items") }, c.s.hideBarsDelay) }), c.$outer.trigger("mousemove.lg")
        }, b.prototype.structure = function() {
            var b, c = "",
                d = "",
                e = 0,
                f = "",
                g = this;
            for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function() { setTimeout(function() { g.setTop() }, 100) }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                var h = this.$outer.find(".lg-inner");
                h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
            }
            setTimeout(function() { a(".lg-backdrop").addClass("in") }), setTimeout(function() { g.$outer.addClass("lg-visible") }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop()
        }, b.prototype.setTop = function() {
            if ("100%" !== this.s.height) {
                var b = a(window).height(),
                    c = (b - parseInt(this.s.height, 10)) / 2,
                    d = this.$outer.find(".lg");
                b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
            }
        }, b.prototype.doCss = function() {
            var a = function() {
                var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                    b = document.documentElement,
                    c = 0;
                for (c = 0; c < a.length; c++)
                    if (a[c] in b.style) return !0
            };
            return !!a()
        }, b.prototype.isVideo = function(a, b) {
            var c;
            if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a) return c ? { html5: !0 } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
            var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : g ? { vk: g } : void 0
        }, b.prototype.counter = function() { this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>") }, b.prototype.addHtml = function(b) {
            var c, d, e = null;
            if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
                if ("undefined" != typeof e && null !== e) { var f = e.substring(0, 1); "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html()) } else e = "";
                ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
        }, b.prototype.preload = function(a) {
            var b = 1,
                c = 1;
            for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
            for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
        }, b.prototype.loadContent = function(b, c, d) {
            var e, f, g, h, i, j, k = this,
                l = !1,
                m = function(b) {
                    for (var c = [], d = [], e = 0; e < b.length; e++) { var g = b[e].split(" "); "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]) }
                    for (var h = a(window).width(), i = 0; i < c.length; i++)
                        if (parseInt(c[i], 10) > h) { f = d[i]; break }
                };
            if (k.s.dynamic) {
                if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
                    var n = k.s.dynamicEl[b].responsive.split(",");
                    m(n)
                }
                h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes
            } else {
                if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
                    var o = k.$items.eq(b).attr("data-responsive").split(",");
                    m(o)
                }
                h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes")
            }
            var p = !1;
            k.s.dynamic ? k.s.dynamicEl[b].iframe && (p = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (p = !0);
            var q = k.isVideo(f, b);
            if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                if (p) k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
                else if (l) {
                    var r = "";
                    r = q && q.youtube ? "lg-has-youtube" : q && q.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + r + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
                } else q ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) { e.attr("srcset", h); try { picturefill({ elements: [e[0]] }) } catch (a) { console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.") } }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded")
            }
            k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                var c = 0;
                d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function() { k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0]) }, c)
            }), q && q.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), c === !0 && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() { k.preload(b) }))
        }, b.prototype.slide = function(b, c, d, e) {
            var f = this.$outer.find(".lg-current").index(),
                g = this;
            if (!g.lGalleryOn || f !== b) {
                var h = this.$slide.length,
                    i = g.lGalleryOn ? this.s.speed : 0;
                if (!g.lgBusy) {
                    if (this.s.download) {
                        var j;
                        j = g.s.dynamic ? g.s.dynamicEl[b].downloadUrl !== !1 && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
                    }
                    if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() { g.addHtml(b) }, i), this.arrowDisable(b), e || (b < f ? e = "prev" : b > f && (e = "next")), c) {
                        this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                        var k, l;
                        h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1) : b === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b).addClass("lg-current")
                    } else g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function() { g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans") }, 50);
                    g.lGalleryOn ? (setTimeout(function() { g.loadContent(b, !0, 0) }, this.s.speed + 50), setTimeout(function() { g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d]) }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])), g.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
                }
                g.index = b
            }
        }, b.prototype.goToNextSlide = function(a) {
            var b = this,
                c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : c ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"), setTimeout(function() { b.$outer.removeClass("lg-right-end") }, 400)))
        }, b.prototype.goToPrevSlide = function(a) {
            var b = this,
                c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"), setTimeout(function() { b.$outer.removeClass("lg-left-end") }, 400)))
        }, b.prototype.keyPress = function() {
            var b = this;
            this.$items.length > 1 && a(window).on("keyup.lg", function(a) { b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide())) }), a(window).on("keydown.lg", function(a) { b.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy()) })
        }, b.prototype.arrow = function() {
            var a = this;
            this.$outer.find(".lg-prev").on("click.lg", function() { a.goToPrevSlide() }), this.$outer.find(".lg-next").on("click.lg", function() { a.goToNextSlide() })
        }, b.prototype.arrowDisable = function(a) {!this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled")) }, b.prototype.setTranslate = function(a, b, c) { this.s.useLeft ? a.css("left", b) : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" }) }, b.prototype.touchMove = function(b, c) {
            var d = c - b;
            Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
        }, b.prototype.touchEnd = function(a) { var b = this; "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() { b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style") }), setTimeout(function() { b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide") }, b.s.speed + 100) }, b.prototype.enableSwipe = function() {
            var a = this,
                b = 0,
                c = 0,
                d = !1;
            a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) { a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX) }), a.$slide.on("touchmove.lg", function(e) { a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0) }), a.$slide.on("touchend.lg", function() { a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg")) }))
        }, b.prototype.enableDrag = function() {
            var b = this,
                c = 0,
                d = 0,
                e = !1,
                f = !1;
            b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) { b.$outer.hasClass("lg-zoomed") || (a(d.target).hasClass("lg-object") || a(d.target).hasClass("lg-video-play")) && (d.preventDefault(), b.lgBusy || (b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg"))) }), a(window).on("mousemove.lg", function(a) { e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg")) }), a(window).on("mouseup.lg", function(g) { f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab")) }))
        }, b.prototype.manageSwipeClass = function() {
            var a = this.index + 1,
                b = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
        }, b.prototype.mousewheel = function() {
            var a = this;
            a.$outer.on("mousewheel.lg", function(b) { b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault()) })
        }, b.prototype.closeGallery = function() {
            var b = this,
                c = !1;
            this.$outer.find(".lg-close").on("click.lg", function() { b.destroy() }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) { c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap")) }), b.$outer.on("mouseup.lg", function(d) {
                (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
            }))
        }, b.prototype.destroy = function(b) {
            var c = this;
            b || (c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop)), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) { c.modules[a] && c.modules[a].destroy() }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() { c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg") }, c.s.backdropDuration + 50)
        }, a.fn.lightGallery = function(c) { return this.each(function() { if (a.data(this, "lightGallery")) try { a(this).data("lightGallery").init() } catch (a) { console.error("lightGallery has not initiated properly") } else a.data(this, "lightGallery", new b(this, c)) }) }, a.fn.lightGallery.modules = {}
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = { autoplay: !1, pause: 5e3, progressBar: !0, fourceAutoplay: !1, autoplayControls: !0, appendAutoplayControlsTo: ".lg-toolbar" },
            c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this) };
        c.prototype.init = function() {
            var a = this;
            a.core.s.autoplayControls && a.controls(), a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), a.progress(), a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function() { a.startlAuto() }), a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() { a.interval && (a.cancelAuto(), a.canceledOnTouch = !0) }), a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {!a.interval && a.canceledOnTouch && (a.startlAuto(), a.canceledOnTouch = !1) })
        }, c.prototype.progress = function() {
            var a, b, c = this;
            c.$el.on("onBeforeSlide.lg.tm", function() { c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"), b = c.core.$outer.find(".lg-progress"), c.interval && (b.removeAttr("style"), a.removeClass("lg-start"), setTimeout(function() { b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"), a.addClass("lg-start") }, 20))), c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(), c.fromAuto = !1 })
        }, c.prototype.controls = function() {
            var b = this,
                c = '<span class="lg-autoplay-button lg-icon"></span>';
            a(this.core.s.appendAutoplayControlsTo).append(c), b.core.$outer.find(".lg-autoplay-button").on("click.lg", function() { a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(), b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(), b.core.s.fourceAutoplay = b.fourceAutoplayTemp) })
        }, c.prototype.startlAuto = function() {
            var a = this;
            a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"), a.core.$outer.addClass("lg-show-autoplay"), a.core.$outer.find(".lg-progress-bar").addClass("lg-start"), a.interval = setInterval(function() { a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0, a.fromAuto = !0, a.core.slide(a.core.index, !1, !1, "next") }, a.core.s.speed + a.core.s.pause)
        }, c.prototype.cancelAuto = function() { clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start") }, c.prototype.destroy = function() { this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove() }, a.fn.lightGallery.modules.autoplay = c
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = { fullScreen: !0 },
            c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.init(), this };
        c.prototype.init = function() {
            var a = "";
            if (this.core.s.fullScreen) {
                if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                a = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(a), this.fullScreen()
            }
        }, c.prototype.requestFullscreen = function() {
            var a = document.documentElement;
            a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
        }, c.prototype.exitFullscreen = function() { window.fullScreen ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : null }, c.prototype.fullScreen = function() {
            var b = this;
            a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() { b.core.$outer.toggleClass("lg-fullscreen-on") }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() { document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen() })
        }, c.prototype.destroy = function() { this.exitFullscreen(), a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg") }, a.fn.lightGallery.modules.fullscreen = c
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = { pager: !1 },
            c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this };
        c.prototype.init = function() {
            var b, c, d, e = this,
                f = "";
            if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic)
                for (var g = 0; g < e.core.s.dynamicEl.length; g++) f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
            else e.core.$items.each(function() { f += e.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>' });
            c = e.core.$outer.find(".lg-pager-outer"), c.html(f), b = e.core.$outer.find(".lg-pager-cont"), b.on("click.lg touchend.lg", function() {
                var b = a(this);
                e.core.index = b.index(), e.core.slide(e.core.index, !1, !0, !1)
            }), c.on("mouseover.lg", function() { clearTimeout(d), c.addClass("lg-pager-hover") }), c.on("mouseout.lg", function() { d = setTimeout(function() { c.removeClass("lg-pager-hover") }) }), e.core.$el.on("onBeforeSlide.lg.tm", function(a, c, d) { b.removeClass("lg-pager-active"), b.eq(d).addClass("lg-pager-active") })
        }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.pager = c
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = { thumbnail: !0, animateThumb: !0, currentPagerPosition: "middle", thumbWidth: 100, thumbHeight: "80px", thumbContHeight: 100, thumbMargin: 5, exThumbImage: !1, showThumbByDefault: !0, toogleThumb: !0, pullCaptionUp: !0, enableThumbDrag: !0, enableThumbSwipe: !0, swipeThreshold: 50, loadYoutubeThumbnail: !0, youtubeThumbSize: 1, loadVimeoThumbnail: !0, vimeoThumbSize: "thumbnail_small", loadDailymotionThumbnail: !0 },
            c = function(c) { return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.$el = a(c), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this };
        c.prototype.init = function() {
            var a = this;
            this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() { a.core.$outer.addClass("lg-thumb-open") }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
        }, c.prototype.build = function() {
            function b(a, b, c) {
                var g, h = d.core.isVideo(a, c) || {},
                    i = "";
                h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg", i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b, e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>', i = ""
            }
            var c, d = this,
                e = "",
                f = "",
                g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
            switch (this.core.s.vimeoThumbSize) {
                case "thumbnail_large":
                    f = "640";
                    break;
                case "thumbnail_medium":
                    f = "200x150";
                    break;
                case "thumbnail_small":
                    f = "100x75"
            }
            if (d.core.$outer.addClass("lg-has-thumb"), d.core.$outer.find(".lg").append(g), d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"), d.thumbOuterWidth = d.$thumbOuter.width(), d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({ width: d.thumbTotalWidth + "px", position: "relative" }), this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"), d.core.s.dynamic)
                for (var h = 0; h < d.core.s.dynamicEl.length; h++) b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
            else d.core.$items.each(function(c) { d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c) });
            d.core.$outer.find(".lg-thumb").html(e), c = d.core.$outer.find(".lg-thumb-item"), c.each(function() {
                var b = a(this),
                    c = b.attr("data-vimeo-id");
                c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", { format: "json" }, function(a) { b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize]) })
            }), c.eq(d.core.index).addClass("active"), d.core.$el.on("onBeforeSlide.lg.tm", function() { c.removeClass("active"), c.eq(d.core.index).addClass("active") }), c.on("click.lg touchend.lg", function() {
                var b = a(this);
                setTimeout(function() {
                    (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(), d.core.slide(d.core.index, !1, !0, !1))
                }, 50)
            }), d.core.$el.on("onBeforeSlide.lg.tm", function() { d.animateThumb(d.core.index) }), a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() { setTimeout(function() { d.animateThumb(d.core.index), d.thumbOuterWidth = d.$thumbOuter.width() }, 200) })
        }, c.prototype.setTranslate = function(a) { this.core.$outer.find(".lg-thumb").css({ transform: "translate3d(-" + a + "px, 0px, 0px)" }) }, c.prototype.animateThumb = function(a) {
            var b = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
                var c;
                switch (this.core.s.currentPagerPosition) {
                    case "left":
                        c = 0;
                        break;
                    case "middle":
                        c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                        break;
                    case "right":
                        c = this.thumbOuterWidth - this.core.s.thumbWidth
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({ left: -this.left + "px" }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"), this.setTranslate(this.left)
            }
        }, c.prototype.enableThumbDrag = function() {
            var b = this,
                c = 0,
                d = 0,
                e = !1,
                f = !1,
                g = 0;
            b.$thumbOuter.addClass("lg-grab"), b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a) { b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(), c = a.pageX, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.thumbClickable = !1, b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing")) }), a(window).on("mousemove.lg.thumb", function(a) { e && (g = b.left, f = !0, d = a.pageX, b.$thumbOuter.addClass("lg-dragging"), g -= d - c, g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth), g < 0 && (g = 0), b.setTranslate(g)) }), a(window).on("mouseup.lg.thumb", function() { f ? (f = !1, b.$thumbOuter.removeClass("lg-dragging"), b.left = g, Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0, e && (e = !1, b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")) })
        }, c.prototype.enableThumbSwipe = function() {
            var a = this,
                b = 0,
                c = 0,
                d = !1,
                e = 0;
            a.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c) { a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1) }), a.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) { a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass("lg-dragging"), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), e < 0 && (e = 0), a.setTranslate(e)) }), a.core.$outer.find(".lg-thumb").on("touchend.lg", function() { a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e) : a.thumbClickable = !0 })
        }, c.prototype.toogle = function() {
            var a = this;
            a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() { a.core.$outer.toggleClass("lg-thumb-open") }))
        }, c.prototype.thumbkeyPress = function() {
            var b = this;
            a(window).on("keydown.lg.thumb", function(a) { 38 === a.keyCode ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), b.core.$outer.removeClass("lg-thumb-open")) })
        }, c.prototype.destroy = function() {
            this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
                this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
        }, a.fn.lightGallery.modules.Thumbnail = c
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = { videoMaxWidth: "855px", youtubePlayerParams: !1, vimeoPlayerParams: !1, dailymotionPlayerParams: !1, vkPlayerParams: !1, videojs: !1, videojsOptions: {} },
            c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.videoLoaded = !1, this.init(), this };
        c.prototype.init = function() {
            var b = this;
            b.core.$el.on("hasVideo.lg.tm", function(a, c, d, e) {
                if (b.core.$slide.eq(c).find(".lg-video").append(b.loadVideo(d, "lg-object", !0, c, e)), e)
                    if (b.core.s.videojs) try { videojs(b.core.$slide.eq(c).find(".lg-html5").get(0), b.core.s.videojsOptions, function() { b.videoLoaded || this.play() }) } catch (a) { console.error("Make sure you have included videojs") } else b.videoLoaded || b.core.$slide.eq(c).find(".lg-html5").get(0).play()
            }), b.core.$el.on("onAferAppendSlide.lg.tm", function(a, c) {
                var d = b.core.$slide.eq(c).find(".lg-video-cont");
                d.hasClass("lg-has-iframe") || (d.css("max-width", b.core.s.videoMaxWidth), b.videoLoaded = !0)
            });
            var c = function(a) {
                if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible"))
                    if (a.hasClass("lg-has-video")) {
                        var c = a.find(".lg-youtube").get(0),
                            d = a.find(".lg-vimeo").get(0),
                            e = a.find(".lg-dailymotion").get(0),
                            f = a.find(".lg-html5").get(0);
                        if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                        else if (d) try { $f(d).api("play") } catch (a) { console.error("Make sure you have included froogaloop2 js") } else if (e) e.contentWindow.postMessage("play", "*");
                            else if (f)
                            if (b.core.s.videojs) try { videojs(f).play() } catch (a) { console.error("Make sure you have included videojs") } else f.play();
                        a.addClass("lg-video-playing")
                    } else {
                        a.addClass("lg-video-playing lg-has-video");
                        var g, h, i = function(c, d) {
                            if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)), d)
                                if (b.core.s.videojs) try { videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function() { this.play() }) } catch (a) { console.error("Make sure you have included videojs") } else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()
                        };
                        b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src, h = b.core.s.dynamicEl[b.core.index].html, i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"), h = b.core.$items.eq(b.core.index).attr("data-html"), i(g, h));
                        var j = a.find(".lg-object");
                        a.find(".lg-video").append(j), a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"), a.find(".lg-video-object").on("load.lg error.lg", function() { a.addClass("lg-complete") }))
                    }
            };
            b.core.doCss() && b.core.$items.length > 1 && (b.core.s.enableSwipe || b.core.s.enableDrag) ? b.core.$el.on("onSlideClick.lg.tm", function() {
                var a = b.core.$slide.eq(b.core.index);
                c(a)
            }) : b.core.$slide.on("click.lg", function() { c(a(this)) }), b.core.$el.on("onBeforeSlide.lg.tm", function(c, d, e) {
                var f = b.core.$slide.eq(d),
                    g = f.find(".lg-youtube").get(0),
                    h = f.find(".lg-vimeo").get(0),
                    i = f.find(".lg-dailymotion").get(0),
                    j = f.find(".lg-vk").get(0),
                    k = f.find(".lg-html5").get(0);
                if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                else if (h) try { $f(h).api("pause") } catch (a) { console.error("Make sure you have included froogaloop2 js") } else if (i) i.contentWindow.postMessage("pause", "*");
                    else if (k)
                    if (b.core.s.videojs) try { videojs(k).pause() } catch (a) { console.error("Make sure you have included videojs") } else k.pause();
                j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
                var l;
                l = b.core.s.dynamic ? b.core.s.dynamicEl[e].src : b.core.$items.eq(e).attr("href") || b.core.$items.eq(e).attr("data-src");
                var m = b.core.isVideo(l, e) || {};
                (m.youtube || m.vimeo || m.dailymotion || m.vk) && b.core.$outer.addClass("lg-hide-download")
            }), b.core.$el.on("onAfterSlide.lg.tm", function(a, c) { b.core.$slide.eq(c).removeClass("lg-video-playing") })
        }, c.prototype.loadVideo = function(b, c, d, e, f) {
            var g = "",
                h = 1,
                i = "",
                j = this.core.isVideo(b, e) || {};
            if (d && (h = this.videoLoaded ? 0 : 1), j.youtube) i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1", this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)), g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.vimeo) i = "?autoplay=" + h + "&api=1", this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)), g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            else if (j.dailymotion) i = "?wmode=opaque&autoplay=" + h + "&api=postMessage", this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)), g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
            else if (j.html5) { var k = f.substring(0, 1); "." !== k && "#" !== k || (f = a(f).html()), g = f } else j.vk && (i = "&autoplay=" + h, this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="http://vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
            return g
        }, c.prototype.destroy = function() { this.videoLoaded = !1 }, a.fn.lightGallery.modules.video = c
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = function() {
                var a = !1,
                    b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                return b && parseInt(b[2], 10) < 54 && (a = !0), a
            },
            c = { scale: 1, zoom: !0, actualSize: !0, enableZoomAfter: 300, useLeftForZoom: b() },
            d = function(b) { return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, c, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this };
        d.prototype.init = function() {
            var b = this,
                c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
            b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'), b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(c), b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
                var f = b.core.s.enableZoomAfter + e;
                a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), b.zoomabletimeout = setTimeout(function() { b.core.$slide.eq(d).addClass("lg-zoomable") }, f + 30)
            });
            var d = 1,
                e = function(c) {
                    var d, e, f = b.core.$outer.find(".lg-current .lg-image"),
                        g = (a(window).width() - f.prop("offsetWidth")) / 2,
                        h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
                    d = b.pageX - g, e = b.pageY - h;
                    var i = (c - 1) * d,
                        j = (c - 1) * e;
                    f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c), b.core.s.useLeftForZoom ? f.parent().css({ left: -i + "px", top: -j + "px" }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
                },
                f = function() { d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d) },
                g = function(c, e, g, h) {
                    var i, j = e.prop("offsetWidth");
                    i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
                    var k;
                    b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j, d = k || 2), h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY), f(), setTimeout(function() { b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab") }, 10)
                },
                h = !1;
            b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
                var d = b.core.$slide.eq(c).find(".lg-image");
                d.on("dblclick", function(a) { g(a, d, c) }), d.on("touchstart", function(a) { h ? (clearTimeout(h), h = null, g(a, d, c)) : h = setTimeout(function() { h = null }, 300), a.preventDefault() })
            }), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() { b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d) }), a("#lg-zoom-out").on("click.lg", function() { b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale, f()) }), a("#lg-zoom-in").on("click.lg", function() { b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale, f()) }), a("#lg-actual-size").on("click.lg", function(a) { g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0) }), b.core.$el.on("onBeforeSlide.lg.tm", function() { d = 1, b.resetZoom() }), b.zoomDrag(), b.zoomSwipe()
        }, d.prototype.resetZoom = function() { this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop() }, d.prototype.zoomSwipe = function() {
            var a = this,
                b = {},
                c = {},
                d = !1,
                e = !1,
                f = !1;
            a.core.$slide.on("touchstart.lg", function(c) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                    f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = { x: c.originalEvent.targetTouches[0].pageX, y: c.originalEvent.targetTouches[0].pageY })
                }
            }), a.core.$slide.on("touchmove.lg", function(g) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                    g.preventDefault(), d = !0, c = { x: g.originalEvent.targetTouches[0].pageX, y: g.originalEvent.targetTouches[0].pageY }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({ left: h + "px", top: i + "px" }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
                }
            }), a.core.$slide.on("touchend.lg", function() { a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f)) })
        }, d.prototype.zoomDrag = function() {
            var b = this,
                c = {},
                d = {},
                e = !1,
                f = !1,
                g = !1,
                h = !1;
            b.core.$slide.on("mousedown.lg.zoom", function(d) {
                var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(), g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(), b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(), c = { x: d.pageX, y: d.pageY }, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
            }), a(window).on("mousemove.lg.zoom", function(a) {
                if (e) {
                    var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                    f = !0, d = { x: a.pageX, y: a.pageY }, b.core.$outer.addClass("lg-zoom-dragging"), j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")), i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")), b.core.s.useLeftForZoom ? k.css({ left: i + "px", top: j + "px" }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
                }
            }), a(window).on("mouseup.lg.zoom", function(a) { e && (e = !1, b.core.$outer.removeClass("lg-zoom-dragging"), !f || c.x === d.x && c.y === d.y || (d = { x: a.pageX, y: a.pageY }, b.touchendZoom(c, d, g, h)), f = !1), b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab") })
        }, d.prototype.touchendZoom = function(a, b, c, d) {
            var e = this,
                f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
                g = e.core.$slide.eq(e.core.index).find(".lg-object"),
                h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
                i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
                j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
                k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
                l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
                m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
            (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), e.core.s.useLeftForZoom ? f.css({ left: h + "px", top: i + "px" }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }, d.prototype.destroy = function() {
            var b = this;
            b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), b.zoomabletimeout = !1
        }, a.fn.lightGallery.modules.zoom = d
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = { hash: !0 },
            c = function(c) { return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this };
        c.prototype.init = function() {
            var b, c = this;
            c.core.$el.on("onAfterSlide.lg.tm", function(a, b, d) { history.replaceState ? history.replaceState(null, null, "#lg=" + c.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d }), a(window).on("hashchange.lg.hash", function() {
                b = window.location.hash;
                var a = parseInt(b.split("&slide=")[1], 10);
                b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy()
            })
        }, c.prototype.destroy = function() { this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash")) }, a.fn.lightGallery.modules.hash = c
    }()
}),
function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
    ! function() {
        "use strict";
        var b = { share: !0, facebook: !0, facebookDropdownText: "Facebook", twitter: !0, twitterDropdownText: "Twitter", googlePlus: !0, googlePlusDropdownText: "GooglePlus", pinterest: !0, pinterestDropdownText: "Pinterest" },
            c = function(c) { return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.share && this.init(), this };
        c.prototype.init = function() {
            var b = this,
                c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
            c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", c += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(c), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), a("#lg-share").on("click.lg", function() { b.core.$outer.toggleClass("lg-dropdown-active") }), a("#lg-dropdown-overlay").on("click.lg", function() { b.core.$outer.removeClass("lg-dropdown-active") }), b.core.$el.on("onAfterSlide.lg.tm", function(c, d, e) { setTimeout(function() { a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.getSahreProps(e, "facebookShareUrl") || window.location.href)), a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b.getSahreProps(e, "twitterShareUrl") || window.location.href)), a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.getSahreProps(e, "googleplusShareUrl") || window.location.href)), a("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.getSahreProps(e, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(b.getSahreProps(e, "src")) + "&description=" + b.getSahreProps(e, "pinterestText")) }, 100) })
        }, c.prototype.getSahreProps = function(a, b) {
            var c = "";
            if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
            else {
                var d = this.core.$items.eq(a).attr("href"),
                    e = this.core.$items.eq(a).data(b);
                c = "src" === b ? d || e : e
            }
            return c
        }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.share = c
    }()
});

/**
 * @module       PageTransition
 * @author       Roman Kravchuk (JeremyLuis)
 * @license      MIT
 * @version      1.1.3
 * @description  Smooth transition between pages
 * @requires     module:jQuery
 */
function pageTransition(t) {
    t = t || {}, t.target = t.target || null, t.delay = t.delay || 500, t.duration = t.duration || 1e3, t.classIn = t.classIn || null, t.classOut = t.classOut || null, t.classActive = t.classActive || null, t.onReady = t.onReady || null, t.onTransitionStart = t.onTransitionStart || null, t.onTransitionEnd = t.onTransitionEnd || null, t.conditions = t.conditions || function(t, n) { return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(n) }, t.target && (setTimeout(function() { t.onReady && t.onReady(t), t.classIn && t.target.classList.add(t.classIn), t.classActive && t.target.classList.add(t.classActive), t.duration && (t.target.style.animationDuration = t.duration + "ms"), t.target.addEventListener("animationstart", function() { setTimeout(function() { t.classIn && t.target.classList.remove(t.classIn), t.onTransitionEnd && t.onTransitionEnd(t) }, t.duration) }) }, t.delay), $("a").click(function(n) {
        var a = n.currentTarget.getAttribute("href");
        if (t.conditions(n, a)) {
            var s = this.href;
            n.preventDefault(), t.onTransitionStart && t.onTransitionStart(t), t.classIn && t.target.classList.remove(t.classIn), t.classOut && t.target.classList.add(t.classOut), setTimeout(function() { window.location = s, /firefox/i.test(navigator.userAgent) && setTimeout(function() { t.onReady && t.onReady(t), t.classOut && t.target.classList.remove(t.classOut) }, 1e3), /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && (t.onReady && t.onReady(t), t.classOut && t.target.classList.remove(t.classOut)) }, t.duration)
        }
    }))
}

/**
 * @module  αUtil
 * @version v1.0.1
 * @desc    Service functions for α-modules
 * @author  OXAYAZA {@link https://github.com/OXAYAZA}
 * @license CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @see     {@link https://www.linkedin.com/in/%D1%8E%D1%80%D0%B8%D0%B9-%D0%B1%D0%B0%D0%B7%D0%B0%D0%B5%D0%B2-166479165/}
 */
function Util() {}
Util.inViewport = function(element, cb) {
    var rect = element.getBoundingClientRect(),
        inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (cb instanceof Function && inView) cb();
    return inView
};
Util.merge = function(sources, options) { options = options || {}; var initial = {}; for (var s = 0; s < sources.length; s++) { var source = sources[s]; if (!source) continue; for (var key in source) { if (options.except && !options.except.indexOf(key)) { continue } else if (source[key] instanceof Object && !(source[key] instanceof Node) && !(source[key] instanceof Function)) { initial[key] = Util.merge([initial[key], source[key]], options) } else if (options.skipNull && source[key] === null) { continue } else { initial[key] = source[key] } } } return initial };
Util.uId = function(length) { var uId = ""; for (var i = 0; i < length; i++) { uId += String.fromCharCode(97 + Math.random() * 25) } return uId };

/**
 * @module   αCounter
 * @version  v0.1.1
 * @author   OXAYAZA {@link https://github.com/OXAYAZA}
 * @license  CC BY-SA 4.0 {@link https://creativecommons.org/licenses/by-sa/4.0/}
 * @requires module:αUtil
 * @see      {@link https://oxayaza.page.link/gitHub_aCounters}
 */
function aCounter(data) {
    function Counter(data) {
        if (!data || !data.node) throw Error('Missing required aCounter parameters (node).');
        this.params = Util.merge([this.defaults, data]);
        this.params.node.counter = this;
        if (!this.params.to) { try { this.params.to = parseInt(this.params.node.textContent, 10) } catch (error) { throw Error('Unable to get aCounter value') } }
        this.run = this.run.bind(this);
        return this
    }
    Counter.prototype.internal = { intervalId: null, value: 0, loops: 0, increment: 0, loop: 0 };
    Counter.prototype.defaults = { node: null, from: 0, to: null, duration: 3000, refresh: 30, formatter: null, onStart: null, onUpdate: null, onComplete: null };
    Counter.prototype.run = function() {
        clearInterval(this.internal.intervalId);
        this.internal.value = this.params.from;
        this.internal.loops = Math.ceil(this.params.duration / this.params.refresh);
        this.internal.increment = (this.params.to - this.params.from) / this.internal.loops;
        this.internal.loop = 0;
        if (this.params.onStart instanceof Function) this.params.onStart.call(this, ~~this.internal.value);
        this.internal.intervalId = setInterval(this.update.bind(this), this.params.refresh)
    };
    Counter.prototype.update = function() {
        this.internal.value += this.internal.increment;
        this.internal.loop++;
        if (this.params.onUpdate instanceof Function) this.params.onUpdate.call(this, ~~this.internal.value);
        if (this.internal.loop >= this.internal.loops) {
            clearInterval(this.internal.intervalId);
            this.internal.value = this.params.to;
            if (this.params.onComplete instanceof Function) this.params.onComplete.call(this, ~~this.internal.value)
        }
        this.render()
    };
    Counter.prototype.render = function() { if (this.params.formatter instanceof Function) { this.params.node.innerHTML = this.params.formatter.call(this, ~~this.internal.value) } else { this.params.node.innerHTML = ~~this.internal.value } };
    return new Counter(data)
}