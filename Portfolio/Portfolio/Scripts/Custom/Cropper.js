﻿/*!
 * Cropper.js v0.7.2
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-06-08T12:25:05.932Z
 */
!function (t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) { if (!t.document) throw new Error("Cropper requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function (t, e) { "use strict"; function i(t) { return le.call(t).slice(8, -1).toLowerCase() } function a(t) { return "number" == typeof t && !isNaN(t) } function n(t) { return "undefined" == typeof t } function o(t) { return "object" == typeof t && null !== t } function r(t) { var e, i; if (!o(t)) return !1; try { return e = t.constructor, i = e.prototype, e && i && ce.call(i, "isPrototypeOf") } catch (a) { return !1 } } function h(t) { return "function" === i(t) } function l(t) { return J.isArray ? J.isArray(t) : "array" === i(t) } function c(t, e) { return e = e >= 0 ? e : 0, J.from ? J.from(t).slice(e) : se.call(t, e) } function s(t) { return "string" == typeof t && (t = t.trim ? t.trim() : t.replace(Wt, "$1")), t } function d(t, e) { var i, n; if (t && h(e)) if (l(t) || a(t.length)) for (n = 0, i = t.length; i > n && e.call(t, t[n], n, t) !== !1; n++); else if (o(t)) for (n in t) if (t.hasOwnProperty(n) && e.call(t, t[n], n, t) === !1) break; return t } function p(t) { var e; if (arguments.length > 1) { if (e = c(arguments), G.assign) return G.assign.apply(G, e); e.shift(), d(e, function (e) { d(e, function (e, i) { t[i] = e }) }) } return t } function u(t, e) { var i = c(arguments, 2); return function () { return t.apply(e, i.concat(c(arguments))) } } function g(t, e) { var i = t.style; d(e, function (t, e) { Xt.test(e) && a(t) && (t += "px"), i[e] = t }) } function f(t, e) { return t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1 } function m(t, e) { var i; return a(t.length) ? d(t, function (t) { m(t, e) }) : t.classList ? t.classList.add(e) : (i = s(t.className), void (i ? i.indexOf(e) < 0 && (t.className = i + " " + e) : t.className = e)) } function v(t, e) { return a(t.length) ? d(t, function (t) { v(t, e) }) : t.classList ? t.classList.remove(e) : void (t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, ""))) } function w(t, e, i) { return a(t.length) ? d(t, function (t) { w(t, e, i) }) : void (i ? m(t, e) : v(t, e)) } function b(t) { return t.replace(zt, "$1-$2").toLowerCase() } function x(t, e) { return o(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-" + b(e)) } function D(t, e, i) { o(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-" + b(e), i) } function C(t, e) { o(t[e]) ? delete t[e] : t.dataset ? delete t.dataset[e] : t.removeAttribute("data-" + b(e)) } function y(t, e, i) { var a = s(e).split(kt); return a.length > 1 ? d(a, function (e) { y(t, e, i) }) : void (t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i)) } function B(t, e, i, a) { var n = s(e).split(kt), o = i; return n.length > 1 ? d(n, function (e) { B(t, e, i) }) : (a && (i = function () { return y(t, e, i), o.apply(t, arguments) }), void (t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i))) } function T(t, e, i) { var a; return t.dispatchEvent ? (h(Event) && h(CustomEvent) ? a = n(i) ? new Event(e, { bubbles: !0, cancelable: !0 }) : new CustomEvent(e, { detail: i, bubbles: !0, cancelable: !0 }) : n(i) ? (a = F.createEvent("Event"), a.initEvent(e, !0, !0)) : (a = F.createEvent("CustomEvent"), a.initCustomEvent(e, !0, !0, i)), t.dispatchEvent(a)) : t.fireEvent ? t.fireEvent("on" + e) : void 0 } function L(t) { t.preventDefault ? t.preventDefault() : t.returnValue = !1 } function X(e) { var i, n = e || t.event; return n.target || (n.target = n.srcElement || F), a(n.pageX) || (i = F.documentElement, n.pageX = n.clientX + (t.scrollX || i && i.scrollLeft || 0) - (i && i.clientLeft || 0), n.pageY = n.clientY + (t.scrollY || i && i.scrollTop || 0) - (i && i.clientTop || 0)), n } function Y(e) { var i = F.documentElement, a = e.getBoundingClientRect(); return { left: a.left + (t.scrollX || i && i.scrollLeft || 0) - (i && i.clientLeft || 0), top: a.top + (t.scrollY || i && i.scrollTop || 0) - (i && i.clientTop || 0) } } function W(t) { var e = t.length, i = 0, a = 0; return e && (d(t, function (t) { i += t.pageX, a += t.pageY }), i /= e, a /= e), { pageX: i, pageY: a } } function k(t, e) { return t.getElementsByTagName(e) } function E(t, e) { return t.getElementsByClassName ? t.getElementsByClassName(e) : t.querySelectorAll("." + e) } function H(t) { return F.createElement(t) } function M(t, e) { t.appendChild(e) } function z(t) { t.parentNode && t.parentNode.removeChild(t) } function O(t) { for (; t.firstChild;) t.removeChild(t.firstChild) } function R(t) { var e = t.match(Yt); return e && (e[1] !== Z.protocol || e[2] !== Z.hostname || e[3] !== Z.port) } function A(t) { var e = "timestamp=" + (new Date).getTime(); return t + (-1 === t.indexOf("?") ? "?" : "&") + e } function N(t, e) { var i; return t.naturalWidth && !Gt ? e(t.naturalWidth, t.naturalHeight) : (i = H("img"), i.onload = function () { e(this.width, this.height) }, void (i.src = t.src)) } function U(t) { var e = [], i = t.rotate, n = t.scaleX, o = t.scaleY; return a(n) && a(o) && e.push("scale(" + n + "," + o + ")"), a(i) && e.push("rotate(" + i + "deg)"), e.length ? e.join(" ") : "none" } function I(t, e) { var i, a, n = te(t.degree) % 180, o = (n > 90 ? 180 - n : n) * re / 180, r = ee(o), h = ie(o), l = t.width, c = t.height, s = t.aspectRatio; return e ? (i = l / (h + r / s), a = i / s) : (i = l * h + c * r, a = l * r + c * h), { width: i, height: a } } function S(t, e) { var i, n, o, r = H("canvas"), h = r.getContext("2d"), l = 0, c = 0, s = e.naturalWidth, d = e.naturalHeight, p = e.rotate, u = e.scaleX, g = e.scaleY, f = a(u) && a(g) && (1 !== u || 1 !== g), m = a(p) && 0 !== p, v = m || f, w = s * te(u || 1), b = d * te(g || 1); return f && (i = w / 2, n = b / 2), m && (o = I({ width: w, height: b, degree: p }), w = o.width, b = o.height, i = w / 2, n = b / 2), r.width = w, r.height = b, v && (l = -s / 2, c = -d / 2, h.save(), h.translate(i, n)), f && h.scale(u, g), m && h.rotate(p * re / 180), h.drawImage(t, oe(l), oe(c), oe(s), oe(d)), v && h.restore(), r } function _(t, e, i) { var a = "", n = e; for (i += e; i > n; n++) a += de(t.getUint8(n)); return a } function P(t) { var e, i, a, n, o, r, h, l, c, s, d = new DataView(t), p = d.byteLength; if (255 === d.getUint8(0) && 216 === d.getUint8(1)) for (c = 2; p > c;) { if (255 === d.getUint8(c) && 225 === d.getUint8(c + 1)) { h = c; break } c++ } if (h && (i = h + 4, a = h + 10, "Exif" === _(d, i, 4) && (r = d.getUint16(a), o = 18761 === r, (o || 19789 === r) && 42 === d.getUint16(a + 2, o) && (n = d.getUint32(a + 4, o), n >= 8 && (l = a + n)))), l) for (p = d.getUint16(l, o), s = 0; p > s; s++) if (c = l + 12 * s + 2, 274 === d.getUint16(c, o)) { c += 8, e = d.getUint16(c, o), Gt && d.setUint16(c, 1, o); break } return e } function j(t) { var e, i = t.replace(Ht, ""), a = atob(i), n = a.length, o = new V(n), r = new Uint8Array(o); for (e = 0; n > e; e++) r[e] = a.charCodeAt(e); return o } function q(t) { var e, i = new Uint8Array(t), a = i.length, n = ""; for (e = 0; a > e; e++) n += de(i[e]); return "data:image/jpeg;base64," + btoa(n) } function $(t, e) { var i = this; i.element = t, i.options = p({}, $.DEFAULTS, r(e) && e), i.ready = !1, i.built = !1, i.complete = !1, i.rotated = !1, i.cropped = !1, i.disabled = !1, i.replaced = !1, i.limited = !1, i.wheeling = !1, i.isImg = !1, i.originalUrl = "", i.canvasData = null, i.cropBoxData = null, i.previews = null, i.init() } var F = t.document, Z = t.location, K = t.navigator, V = t.ArrayBuffer, G = t.Object, J = t.Array, Q = t.String, tt = t.Number, et = t.Math, it = "cropper", at = it + "-modal", nt = it + "-hide", ot = it + "-hidden", rt = it + "-invisible", ht = it + "-move", lt = it + "-crop", ct = it + "-disabled", st = it + "-bg", dt = "mousedown touchstart pointerdown MSPointerDown", pt = "mousemove touchmove pointermove MSPointerMove", ut = "mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", gt = "wheel mousewheel DOMMouseScroll", ft = "dblclick", mt = "resize", vt = "error", wt = "load", bt = "build", xt = "built", Dt = "cropstart", Ct = "cropmove", yt = "cropend", Bt = "crop", Tt = "zoom", Lt = /e|w|s|n|se|sw|ne|nw|all|crop|move|zoom/, Xt = /width|height|left|top|marginLeft|marginTop/, Yt = /^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i, Wt = /^\s+(.*)\s+$/, kt = /\s+/, Et = /^data\:/, Ht = /^data\:([^\;]+)\;base64,/, Mt = /^data\:image\/jpeg.*;base64,/, zt = /([a-z\d])([A-Z])/g, Ot = "preview", Rt = "action", At = "e", Nt = "w", Ut = "s", It = "n", St = "se", _t = "sw", Pt = "ne", jt = "nw", qt = "all", $t = "crop", Ft = "move", Zt = "zoom", Kt = "none", Vt = !!F.createElement("canvas").getContext, Gt = K && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(K.userAgent), Jt = et.min, Qt = et.max, te = et.abs, ee = et.sin, ie = et.cos, ae = et.sqrt, ne = et.round, oe = et.floor, re = et.PI, he = G.prototype, le = he.toString, ce = he.hasOwnProperty, se = J.prototype.slice, de = Q.fromCharCode; $.prototype = { constructor: $, init: function () { var t, e = this, i = e.element, a = i.tagName.toLowerCase(); if (!x(i, it)) { if (D(i, it, e), "img" === a) { if (e.isImg = !0, e.originalUrl = t = i.getAttribute("src"), !t) return; t = i.src } else "canvas" === a && Vt && (t = i.toDataURL()); e.load(t) } }, load: function (t) { var e, i = this, a = i.options, n = i.element; if (t && (h(a.build) && B(n, bt, a.build, !0), T(n, bt) !== !1)) { if (i.url = t, i.imageData = {}, !a.checkOrientation || !V) return i.clone(); if (Et.test(t)) return Mt.test(t) ? i.read(j(t)) : i.clone(); e = new XMLHttpRequest, e.onerror = e.onabort = function () { i.clone() }, e.onload = function () { i.read(this.response) }, a.checkCrossOrigin && R(t) && n.crossOrigin && (t = A(t)), e.open("get", t), e.responseType = "arraybuffer", e.send() } }, read: function (t) { var e, i, a, n = this, o = n.options, r = P(t), h = n.imageData; if (r > 1) switch (n.url = q(t), r) { case 2: i = -1; break; case 3: e = -180; break; case 4: a = -1; break; case 5: e = 90, a = -1; break; case 6: e = 90; break; case 7: e = 90, i = -1; break; case 8: e = -90 } o.rotatable && (h.rotate = e), o.scalable && (h.scaleX = i, h.scaleY = a), n.clone() }, clone: function () { var t, e, i, a, n, o = this, r = o.element, h = o.url; o.options.checkCrossOrigin && R(h) && (t = r.crossOrigin, t ? e = h : (t = "anonymous", e = A(h))), o.crossOrigin = t, o.crossOriginUrl = e, i = H("img"), t && (i.crossOrigin = t), i.src = e || h, o.image = i, o._start = a = u(o.start, o), o._stop = n = u(o.stop, o), o.isImg ? r.complete ? o.start() : B(r, wt, a) : (B(i, wt, a), B(i, vt, n), m(i, nt), r.parentNode.insertBefore(i, r.nextSibling)) }, start: function (t) { var e = this, i = e.isImg ? e.element : e.image; t && (y(i, wt, e._start), y(i, vt, e._stop)), N(i, function (t, i) { p(e.imageData, { naturalWidth: t, naturalHeight: i, aspectRatio: t / i }), e.ready = !0, e.build() }) }, stop: function () { var t = this, e = t.image; y(e, wt, t._start), y(e, vt, t._stop), z(e), t.image = null }, build: function () { var t, e, i, a, n, o, r, l = this, c = l.options, s = l.element, d = l.image; l.ready && (l.built && l.unbuild(), e = H("div"), e.innerHTML = $.TEMPLATE, l.container = t = s.parentNode, l.cropper = i = E(e, "cropper-container")[0], l.canvas = a = E(i, "cropper-canvas")[0], l.dragBox = n = E(i, "cropper-drag-box")[0], l.cropBox = o = E(i, "cropper-crop-box")[0], l.viewBox = E(i, "cropper-view-box")[0], l.face = r = E(o, "cropper-face")[0], M(a, d), m(s, ot), t.insertBefore(i, s.nextSibling), l.isImg || v(d, nt), l.initPreview(), l.bind(), c.aspectRatio = Qt(0, c.aspectRatio) || NaN, c.viewMode = Qt(0, Jt(3, ne(c.viewMode))) || 0, c.autoCrop ? (l.cropped = !0, c.modal && m(n, at)) : m(o, ot), c.guides || m(E(o, "cropper-dashed"), ot), c.center || m(E(o, "cropper-center"), ot), c.background && m(i, st), c.highlight || m(r, rt), c.cropBoxMovable && (m(r, ht), D(r, Rt, qt)), c.cropBoxResizable || (m(E(o, "cropper-line"), ot), m(E(o, "cropper-point"), ot)), l.setDragMode(c.dragMode), l.render(), l.built = !0, l.setData(c.data), setTimeout(function () { h(c.built) && B(s, xt, c.built, !0), T(s, xt), T(s, Bt, l.getData()), l.complete = !0 }, 0)) }, unbuild: function () { var t = this; t.built && (t.built = !1, t.complete = !1, t.initialImageData = null, t.initialCanvasData = null, t.initialCropBoxData = null, t.containerData = null, t.canvasData = null, t.cropBoxData = null, t.unbind(), t.resetPreview(), t.previews = null, t.viewBox = null, t.cropBox = null, t.dragBox = null, t.canvas = null, t.container = null, z(t.cropper), t.cropper = null) }, render: function () { var t = this; t.initContainer(), t.initCanvas(), t.initCropBox(), t.renderCanvas(), t.cropped && t.renderCropBox() }, initContainer: function () { var t, e = this, i = e.options, a = e.element, n = e.container, o = e.cropper; m(o, ot), v(a, ot), e.containerData = t = { width: Qt(n.offsetWidth, tt(i.minContainerWidth) || 200), height: Qt(n.offsetHeight, tt(i.minContainerHeight) || 100) }, g(o, { width: t.width, height: t.height }), m(a, ot), v(o, ot) }, initCanvas: function () { var t, e = this, i = e.options.viewMode, a = e.containerData, n = e.imageData, o = 90 === te(n.rotate), r = o ? n.naturalHeight : n.naturalWidth, h = o ? n.naturalWidth : n.naturalHeight, l = r / h, c = a.width, s = a.height; a.height * l > a.width ? 3 === i ? c = a.height * l : s = a.width / l : 3 === i ? s = a.width / l : c = a.height * l, t = { naturalWidth: r, naturalHeight: h, aspectRatio: l, width: c, height: s }, t.oldLeft = t.left = (a.width - c) / 2, t.oldTop = t.top = (a.height - s) / 2, e.canvasData = t, e.limited = 1 === i || 2 === i, e.limitCanvas(!0, !0), e.initialImageData = p({}, n), e.initialCanvasData = p({}, t) }, limitCanvas: function (t, e) { var i, a, n, o, r = this, h = r.options, l = h.viewMode, c = r.containerData, s = r.canvasData, d = s.aspectRatio, p = r.cropBoxData, u = r.cropped && p; t && (i = tt(h.minCanvasWidth) || 0, a = tt(h.minCanvasHeight) || 0, l > 1 ? (i = Qt(i, c.width), a = Qt(a, c.height), 3 === l && (a * d > i ? i = a * d : a = i / d)) : l > 0 && (i ? i = Qt(i, u ? p.width : 0) : a ? a = Qt(a, u ? p.height : 0) : u && (i = p.width, a = p.height, a * d > i ? i = a * d : a = i / d)), i && a ? a * d > i ? a = i / d : i = a * d : i ? a = i / d : a && (i = a * d), s.minWidth = i, s.minHeight = a, s.maxWidth = 1 / 0, s.maxHeight = 1 / 0), e && (l ? (n = c.width - s.width, o = c.height - s.height, s.minLeft = Jt(0, n), s.minTop = Jt(0, o), s.maxLeft = Qt(0, n), s.maxTop = Qt(0, o), u && r.limited && (s.minLeft = Jt(p.left, p.left + p.width - s.width), s.minTop = Jt(p.top, p.top + p.height - s.height), s.maxLeft = p.left, s.maxTop = p.top, 2 === l && (s.width >= c.width && (s.minLeft = Jt(0, n), s.maxLeft = Qt(0, n)), s.height >= c.height && (s.minTop = Jt(0, o), s.maxTop = Qt(0, o))))) : (s.minLeft = -s.width, s.minTop = -s.height, s.maxLeft = c.width, s.maxTop = c.height)) }, renderCanvas: function (t) { var e, i, a = this, n = a.canvasData, o = a.imageData, r = o.rotate; a.rotated && (a.rotated = !1, i = I({ width: o.width, height: o.height, degree: r }), e = i.width / i.height, e !== n.aspectRatio && (n.left -= (i.width - n.width) / 2, n.top -= (i.height - n.height) / 2, n.width = i.width, n.height = i.height, n.aspectRatio = e, n.naturalWidth = o.naturalWidth, n.naturalHeight = o.naturalHeight, r % 180 && (i = I({ width: o.naturalWidth, height: o.naturalHeight, degree: r }), n.naturalWidth = i.width, n.naturalHeight = i.height), a.limitCanvas(!0, !1))), (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Jt(Qt(n.width, n.minWidth), n.maxWidth), n.height = Jt(Qt(n.height, n.minHeight), n.maxHeight), a.limitCanvas(!1, !0), n.oldLeft = n.left = Jt(Qt(n.left, n.minLeft), n.maxLeft), n.oldTop = n.top = Jt(Qt(n.top, n.minTop), n.maxTop), g(a.canvas, { width: n.width, height: n.height, left: n.left, top: n.top }), a.renderImage(), a.cropped && a.limited && a.limitCropBox(!0, !0), t && a.output() }, renderImage: function (t) { var e, i, a, n, o, r = this, h = r.canvasData, l = r.imageData; l.rotate && (i = I({ width: h.width, height: h.height, degree: l.rotate, aspectRatio: l.aspectRatio }, !0), a = i.width, n = i.height, e = { width: a, height: n, left: (h.width - a) / 2, top: (h.height - n) / 2 }), p(l, e || { width: h.width, height: h.height, left: 0, top: 0 }), o = U(l), g(r.image, { width: l.width, height: l.height, marginLeft: l.left, marginTop: l.top, WebkitTransform: o, msTransform: o, transform: o }), t && r.output() }, initCropBox: function () { var t = this, e = t.options, i = e.aspectRatio, a = tt(e.autoCropArea) || .8, n = t.canvasData, o = { width: n.width, height: n.height }; i && (n.height * i > n.width ? o.height = o.width / i : o.width = o.height * i), t.cropBoxData = o, t.limitCropBox(!0, !0), o.width = Jt(Qt(o.width, o.minWidth), o.maxWidth), o.height = Jt(Qt(o.height, o.minHeight), o.maxHeight), o.width = Qt(o.minWidth, o.width * a), o.height = Qt(o.minHeight, o.height * a), o.oldLeft = o.left = n.left + (n.width - o.width) / 2, o.oldTop = o.top = n.top + (n.height - o.height) / 2, t.initialCropBoxData = p({}, o) }, limitCropBox: function (t, e) { var i, a, n, o, r = this, h = r.options, l = h.aspectRatio, c = r.containerData, s = r.canvasData, d = r.cropBoxData, p = r.limited; t && (i = tt(h.minCropBoxWidth) || 0, a = tt(h.minCropBoxHeight) || 0, i = Jt(i, c.width), a = Jt(a, c.height), n = Jt(c.width, p ? s.width : c.width), o = Jt(c.height, p ? s.height : c.height), l && (i && a ? a * l > i ? a = i / l : i = a * l : i ? a = i / l : a && (i = a * l), o * l > n ? o = n / l : n = o * l), d.minWidth = Jt(i, n), d.minHeight = Jt(a, o), d.maxWidth = n, d.maxHeight = o), e && (p ? (d.minLeft = Qt(0, s.left), d.minTop = Qt(0, s.top), d.maxLeft = Jt(c.width, s.left + s.width) - d.width, d.maxTop = Jt(c.height, s.top + s.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = c.width - d.width, d.maxTop = c.height - d.height)) }, renderCropBox: function () { var t = this, e = t.options, i = t.containerData, a = t.cropBoxData; (a.width > a.maxWidth || a.width < a.minWidth) && (a.left = a.oldLeft), (a.height > a.maxHeight || a.height < a.minHeight) && (a.top = a.oldTop), a.width = Jt(Qt(a.width, a.minWidth), a.maxWidth), a.height = Jt(Qt(a.height, a.minHeight), a.maxHeight), t.limitCropBox(!1, !0), a.oldLeft = a.left = Jt(Qt(a.left, a.minLeft), a.maxLeft), a.oldTop = a.top = Jt(Qt(a.top, a.minTop), a.maxTop), e.movable && e.cropBoxMovable && D(t.face, Rt, a.width === i.width && a.height === i.height ? Ft : qt), g(t.cropBox, { width: a.width, height: a.height, left: a.left, top: a.top }), t.cropped && t.limited && t.limitCanvas(!0, !0), t.disabled || t.output() }, output: function () { var t = this; t.preview(), t.complete && T(t.element, Bt, t.getData()) }, initPreview: function () { var t, e = this, i = e.options.preview, a = H("img"), n = e.crossOrigin, o = n ? e.crossOriginUrl : e.url; n && (a.crossOrigin = n), a.src = o, M(e.viewBox, a), e.image2 = a, i && (e.previews = t = F.querySelectorAll(i), d(t, function (t) { var e = H("img"); D(t, Ot, { width: t.offsetWidth, height: t.offsetHeight, html: t.innerHTML }), n && (e.crossOrigin = n), e.src = o, e.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', O(t), M(t, e) })) }, resetPreview: function () { d(this.previews, function (t) { var e = x(t, Ot); g(t, { width: e.width, height: e.height }), t.innerHTML = e.html, C(t, Ot) }) }, preview: function () { var t = this, e = t.imageData, i = t.canvasData, a = t.cropBoxData, n = a.width, o = a.height, r = e.width, h = e.height, l = a.left - i.left - e.left, c = a.top - i.top - e.top, s = U(e), u = { WebkitTransform: s, msTransform: s, transform: s }; t.cropped && !t.disabled && (g(t.image2, p({ width: r, height: h, marginLeft: -l, marginTop: -c }, u)), d(t.previews, function (t) { var e = x(t, Ot), i = e.width, a = e.height, s = i, d = a, f = 1; n && (f = i / n, d = o * f), o && d > a && (f = a / o, s = n * f, d = a), g(t, { width: s, height: d }), g(k(t, "img")[0], p({ width: r * f, height: h * f, marginLeft: -l * f, marginTop: -c * f }, u)) })) }, bind: function () { var e = this, i = e.options, a = e.element, n = e.cropper; h(i.cropstart) && B(a, Dt, i.cropstart), h(i.cropmove) && B(a, Ct, i.cropmove), h(i.cropend) && B(a, yt, i.cropend), h(i.crop) && B(a, Bt, i.crop), h(i.zoom) && B(a, Tt, i.zoom), B(n, dt, e._cropStart = u(e.cropStart, e)), i.zoomable && i.zoomOnWheel && B(n, gt, e._wheel = u(e.wheel, e)), i.toggleDragModeOnDblclick && B(n, ft, e._dblclick = u(e.dblclick, e)), B(F, pt, e._cropMove = u(e.cropMove, e)), B(F, ut, e._cropEnd = u(e.cropEnd, e)), i.responsive && B(t, mt, e._resize = u(e.resize, e)) }, unbind: function () { var e = this, i = e.options, a = e.element, n = e.cropper; h(i.cropstart) && y(a, Dt, i.cropstart), h(i.cropmove) && y(a, Ct, i.cropmove), h(i.cropend) && y(a, yt, i.cropend), h(i.crop) && y(a, Bt, i.crop), h(i.zoom) && y(a, Tt, i.zoom), y(n, dt, e._cropStart), i.zoomable && i.zoomOnWheel && y(n, gt, e._wheel), i.toggleDragModeOnDblclick && y(n, ft, e._dblclick), y(F, pt, e._cropMove), y(F, ut, e._cropEnd), i.responsive && y(t, mt, e._resize) }, resize: function () { var t, e, i, a = this, n = a.options.restore, o = a.container, r = a.containerData; !a.disabled && r && (i = o.offsetWidth / r.width, 1 === i && o.offsetHeight === r.height || (n && (t = a.getCanvasData(), e = a.getCropBoxData()), a.render(), n && (a.setCanvasData(d(t, function (e, a) { t[a] = e * i })), a.setCropBoxData(d(e, function (t, a) { e[a] = t * i }))))) }, dblclick: function () { var t = this; t.disabled || t.setDragMode(f(t.dragBox, lt) ? Ft : $t) }, wheel: function (t) { var e = this, i = X(t), a = tt(e.options.wheelZoomRatio) || .1, n = 1; e.disabled || (L(i), e.wheeling || (e.wheeling = !0, setTimeout(function () { e.wheeling = !1 }, 50), i.deltaY ? n = i.deltaY > 0 ? 1 : -1 : i.wheelDelta ? n = -i.wheelDelta / 120 : i.detail && (n = i.detail > 0 ? 1 : -1), e.zoom(-n * a, i))) }, cropStart: function (t) { var e, i, a, n = this, o = n.options, r = X(t), h = r.touches; if (!n.disabled) { if (h) { if (e = h.length, e > 1) { if (!o.zoomable || !o.zoomOnTouch || 2 !== e) return; i = h[1], n.startX2 = i.pageX, n.startY2 = i.pageY, a = Zt } i = h[0] } if (a = a || x(r.target, Rt), Lt.test(a)) { if (T(n.element, Dt, { originalEvent: r, action: a }) === !1) return; L(r), n.action = a, n.cropping = !1, n.startX = i ? i.pageX : r.pageX, n.startY = i ? i.pageY : r.pageY, a === $t && (n.cropping = !0, m(n.dragBox, at)) } } }, cropMove: function (t) { var e, i, a = this, n = a.options, o = X(t), r = o.touches, h = a.action; if (!a.disabled) { if (r) { if (e = r.length, e > 1) { if (!n.zoomable || !n.zoomOnTouch || 2 !== e) return; i = r[1], a.endX2 = i.pageX, a.endY2 = i.pageY } i = r[0] } if (h) { if (T(a.element, Ct, { originalEvent: o, action: h }) === !1) return; L(o), a.endX = i ? i.pageX : o.pageX, a.endY = i ? i.pageY : o.pageY, a.change(o.shiftKey, h === Zt ? o : null) } } }, cropEnd: function (t) { var e = this, i = e.options, a = X(t), n = e.action; e.disabled || n && (L(a), e.cropping && (e.cropping = !1, w(e.dragBox, at, e.cropped && i.modal)), e.action = "", T(e.element, yt, { originalEvent: a, action: n })) }, change: function (t, e) { var i, a, n = this, o = n.options, r = o.aspectRatio, h = n.action, l = n.containerData, c = n.canvasData, s = n.cropBoxData, d = s.width, p = s.height, u = s.left, g = s.top, f = u + d, m = g + p, w = 0, b = 0, x = l.width, D = l.height, C = !0; switch (!r && t && (r = d && p ? d / p : 1), n.limited && (w = s.minLeft, b = s.minTop, x = w + Jt(l.width, c.left + c.width), D = b + Jt(l.height, c.top + c.height)), a = { x: n.endX - n.startX, y: n.endY - n.startY }, r && (a.X = a.y * r, a.Y = a.x / r), h) { case qt: u += a.x, g += a.y; break; case At: if (a.x >= 0 && (f >= x || r && (b >= g || m >= D))) { C = !1; break } d += a.x, r && (p = d / r, g -= a.Y / 2), 0 > d && (h = Nt, d = 0); break; case It: if (a.y <= 0 && (b >= g || r && (w >= u || f >= x))) { C = !1; break } p -= a.y, g += a.y, r && (d = p * r, u += a.X / 2), 0 > p && (h = Ut, p = 0); break; case Nt: if (a.x <= 0 && (w >= u || r && (b >= g || m >= D))) { C = !1; break } d -= a.x, u += a.x, r && (p = d / r, g += a.Y / 2), 0 > d && (h = At, d = 0); break; case Ut: if (a.y >= 0 && (m >= D || r && (w >= u || f >= x))) { C = !1; break } p += a.y, r && (d = p * r, u -= a.X / 2), 0 > p && (h = It, p = 0); break; case Pt: if (r) { if (a.y <= 0 && (b >= g || f >= x)) { C = !1; break } p -= a.y, g += a.y, d = p * r } else a.x >= 0 ? x > f ? d += a.x : a.y <= 0 && b >= g && (C = !1) : d += a.x, a.y <= 0 ? g > b && (p -= a.y, g += a.y) : (p -= a.y, g += a.y); 0 > d && 0 > p ? (h = _t, p = 0, d = 0) : 0 > d ? (h = jt, d = 0) : 0 > p && (h = St, p = 0); break; case jt: if (r) { if (a.y <= 0 && (b >= g || w >= u)) { C = !1; break } p -= a.y, g += a.y, d = p * r, u += a.X } else a.x <= 0 ? u > w ? (d -= a.x, u += a.x) : a.y <= 0 && b >= g && (C = !1) : (d -= a.x, u += a.x), a.y <= 0 ? g > b && (p -= a.y, g += a.y) : (p -= a.y, g += a.y); 0 > d && 0 > p ? (h = St, p = 0, d = 0) : 0 > d ? (h = Pt, d = 0) : 0 > p && (h = _t, p = 0); break; case _t: if (r) { if (a.x <= 0 && (w >= u || m >= D)) { C = !1; break } d -= a.x, u += a.x, p = d / r } else a.x <= 0 ? u > w ? (d -= a.x, u += a.x) : a.y >= 0 && m >= D && (C = !1) : (d -= a.x, u += a.x), a.y >= 0 ? D > m && (p += a.y) : p += a.y; 0 > d && 0 > p ? (h = Pt, p = 0, d = 0) : 0 > d ? (h = St, d = 0) : 0 > p && (h = jt, p = 0); break; case St: if (r) { if (a.x >= 0 && (f >= x || m >= D)) { C = !1; break } d += a.x, p = d / r } else a.x >= 0 ? x > f ? d += a.x : a.y >= 0 && m >= D && (C = !1) : d += a.x, a.y >= 0 ? D > m && (p += a.y) : p += a.y; 0 > d && 0 > p ? (h = jt, p = 0, d = 0) : 0 > d ? (h = _t, d = 0) : 0 > p && (h = Pt, p = 0); break; case Ft: n.move(a.x, a.y), C = !1; break; case Zt: n.zoom(function (t, e, i, a) { var n = ae(t * t + e * e), o = ae(i * i + a * a); return (o - n) / n }(te(n.startX - n.startX2), te(n.startY - n.startY2), te(n.endX - n.endX2), te(n.endY - n.endY2)), e), n.startX2 = n.endX2, n.startY2 = n.endY2, C = !1; break; case $t: if (!a.x || !a.y) { C = !1; break } i = Y(n.cropper), u = n.startX - i.left, g = n.startY - i.top, d = s.minWidth, p = s.minHeight, a.x > 0 ? h = a.y > 0 ? St : Pt : a.x < 0 && (u -= d, h = a.y > 0 ? _t : jt), a.y < 0 && (g -= p), n.cropped || (v(n.cropBox, ot), n.cropped = !0, n.limited && n.limitCropBox(!0, !0)) } C && (s.width = d, s.height = p, s.left = u, s.top = g, n.action = h, n.renderCropBox()), n.startX = n.endX, n.startY = n.endY }, crop: function () { var t = this; return t.built && !t.disabled && (t.cropped || (t.cropped = !0, t.limitCropBox(!0, !0), t.options.modal && m(t.dragBox, at), v(t.cropBox, ot)), t.setCropBoxData(t.initialCropBoxData)), t }, reset: function () { var t = this; return t.built && !t.disabled && (t.imageData = p({}, t.initialImageData), t.canvasData = p({}, t.initialCanvasData), t.cropBoxData = p({}, t.initialCropBoxData), t.renderCanvas(), t.cropped && t.renderCropBox()), t }, clear: function () { var t = this; return t.cropped && !t.disabled && (p(t.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }), t.cropped = !1, t.renderCropBox(), t.limitCanvas(), t.renderCanvas(), v(t.dragBox, at), m(t.cropBox, ot)), t }, replace: function (t, e) { var i = this; return !i.disabled && t && (i.isImg && (i.element.src = t), e ? (i.url = t, i.image.src = t, i.built && (i.image2.src = t, d(i.previews, function (e) { k(e, "img")[0].src = t }))) : (i.isImg && (i.replaced = !0), i.options.data = null, i.load(t))), i }, enable: function () { var t = this; return t.built && (t.disabled = !1, v(t.cropper, ct)), t }, disable: function () { var t = this; return t.built && (t.disabled = !0, m(t.cropper, ct)), t }, destroy: function () { var t = this, e = t.element, i = t.image; return t.ready ? (t.isImg && t.replaced && (e.src = t.originalUrl), t.unbuild(), v(e, ot)) : t.isImg ? y(e, wt, t.start) : i && z(i), C(e, it), t }, move: function (t, e) { var i = this, a = i.canvasData; return i.moveTo(n(t) ? t : a.left + tt(t), n(e) ? e : a.top + tt(e)) }, moveTo: function (t, e) { var i = this, o = i.canvasData, r = !1; return n(e) && (e = t), t = tt(t), e = tt(e), i.built && !i.disabled && i.options.movable && (a(t) && (o.left = t, r = !0), a(e) && (o.top = e, r = !0), r && i.renderCanvas(!0)), i }, zoom: function (t, e) { var i = this, a = i.canvasData; return t = tt(t), t = 0 > t ? 1 / (1 - t) : 1 + t, i.zoomTo(a.width * t / a.naturalWidth, e) }, zoomTo: function (t, e) { var i, a, n, o, r = this, h = r.options, l = r.canvasData, c = l.width, s = l.height, d = l.naturalWidth, p = l.naturalHeight; if (t = tt(t), t >= 0 && r.built && !r.disabled && h.zoomable) { if (i = d * t, a = p * t, T(r.element, Tt, { originalEvent: e, oldRatio: c / d, ratio: i / d }) === !1) return r; e ? (n = Y(r.cropper), o = e.touches ? W(e.touches) : { pageX: e.pageX, pageY: e.pageY }, l.left -= (i - c) * ((o.pageX - n.left - l.left) / c), l.top -= (a - s) * ((o.pageY - n.top - l.top) / s)) : (l.left -= (i - c) / 2, l.top -= (a - s) / 2), l.width = i, l.height = a, r.renderCanvas(!0) } return r }, rotate: function (t) { var e = this; return e.rotateTo((e.imageData.rotate || 0) + tt(t)) }, rotateTo: function (t) { var e = this; return t = tt(t), a(t) && e.built && !e.disabled && e.options.rotatable && (e.imageData.rotate = t % 360, e.rotated = !0, e.renderCanvas(!0)), e }, scale: function (t, e) { var i = this, o = i.imageData, r = !1; return n(e) && (e = t), t = tt(t), e = tt(e), i.built && !i.disabled && i.options.scalable && (a(t) && (o.scaleX = t, r = !0), a(e) && (o.scaleY = e, r = !0), r && i.renderImage(!0)), i }, scaleX: function (t) { var e = this, i = e.imageData.scaleY; return e.scale(t, a(i) ? i : 1) }, scaleY: function (t) { var e = this, i = e.imageData.scaleX; return e.scale(a(i) ? i : 1, t) }, getData: function (t) { var e, i, a = this, n = a.options, o = a.imageData, r = a.canvasData, h = a.cropBoxData; return a.built && a.cropped ? (i = { x: h.left - r.left, y: h.top - r.top, width: h.width, height: h.height }, e = o.width / o.naturalWidth, d(i, function (a, n) { a /= e, i[n] = t ? ne(a) : a })) : i = { x: 0, y: 0, width: 0, height: 0 }, n.rotatable && (i.rotate = o.rotate || 0), n.scalable && (i.scaleX = o.scaleX || 1, i.scaleY = o.scaleY || 1), i }, setData: function (t) { var e, i, n, o = this, l = o.options, c = o.imageData, s = o.canvasData, d = {}; return h(t) && (t = t.call(o.element)), o.built && !o.disabled && r(t) && (l.rotatable && a(t.rotate) && t.rotate !== c.rotate && (c.rotate = t.rotate, o.rotated = e = !0), l.scalable && (a(t.scaleX) && t.scaleX !== c.scaleX && (c.scaleX = t.scaleX, i = !0), a(t.scaleY) && t.scaleY !== c.scaleY && (c.scaleY = t.scaleY, i = !0)), e ? o.renderCanvas() : i && o.renderImage(), n = c.width / c.naturalWidth, a(t.x) && (d.left = t.x * n + s.left), a(t.y) && (d.top = t.y * n + s.top), a(t.width) && (d.width = t.width * n), a(t.height) && (d.height = t.height * n), o.setCropBoxData(d)), o }, getContainerData: function () { var t = this; return t.built ? t.containerData : {} }, getImageData: function () { var t = this; return t.ready ? t.imageData : {} }, getCanvasData: function () { var t = this, e = t.canvasData, i = {}; return t.built && d(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function (t) { i[t] = e[t] }), i }, setCanvasData: function (t) { var e = this, i = e.canvasData, n = i.aspectRatio; return h(t) && (t = t.call(e.element)), e.built && !e.disabled && r(t) && (a(t.left) && (i.left = t.left), a(t.top) && (i.top = t.top), a(t.width) ? (i.width = t.width, i.height = t.width / n) : a(t.height) && (i.height = t.height, i.width = t.height * n), e.renderCanvas(!0)), e }, getCropBoxData: function () { var t, e = this, i = e.cropBoxData; return e.built && e.cropped && (t = { left: i.left, top: i.top, width: i.width, height: i.height }), t || {} }, setCropBoxData: function (t) { var e, i, n = this, o = n.cropBoxData, l = n.options.aspectRatio; return h(t) && (t = t.call(n.element)), n.built && n.cropped && !n.disabled && r(t) && (a(t.left) && (o.left = t.left), a(t.top) && (o.top = t.top), a(t.width) && (e = !0, o.width = t.width), a(t.height) && (i = !0, o.height = t.height), l && (e ? o.height = o.width / l : i && (o.width = o.height * l)), n.renderCropBox()), n }, getCroppedCanvas: function (t) { var e, i, a, n, o, h, l, c, s, d, p, u = this; return u.built && Vt ? u.cropped ? (r(t) || (t = {}), p = u.getData(), e = p.width, i = p.height, c = e / i, r(t) && (o = t.width, h = t.height, o ? (h = o / c, l = o / e) : h && (o = h * c, l = h / i)), a = oe(o || e), n = oe(h || i), s = H("canvas"), s.width = a, s.height = n, d = s.getContext("2d"), t.fillColor && (d.fillStyle = t.fillColor, d.fillRect(0, 0, a, n)), d.drawImage.apply(d, function () { var t, a, n, o, r, h, c = S(u.image, u.imageData), s = c.width, d = c.height, g = u.canvasData, f = [c], m = p.x + g.naturalWidth * (te(p.scaleX || 1) - 1) / 2, v = p.y + g.naturalHeight * (te(p.scaleY || 1) - 1) / 2; return -e >= m || m > s ? m = t = n = r = 0 : 0 >= m ? (n = -m, m = 0, t = r = Jt(s, e + m)) : s >= m && (n = 0, t = r = Jt(e, s - m)), 0 >= t || -i >= v || v > d ? v = a = o = h = 0 : 0 >= v ? (o = -v, v = 0, a = h = Jt(d, i + v)) : d >= v && (o = 0, a = h = Jt(i, d - v)), f.push(oe(m), oe(v), oe(t), oe(a)), l && (n *= l, o *= l, r *= l, h *= l), r > 0 && h > 0 && f.push(oe(n), oe(o), oe(r), oe(h)), f }.call(u)), s) : S(u.image, u.imageData) : void 0 }, setAspectRatio: function (t) { var e = this, i = e.options; return e.disabled || n(t) || (i.aspectRatio = Qt(0, t) || NaN, e.built && (e.initCropBox(), e.cropped && e.renderCropBox())), e }, setDragMode: function (t) { var e, i, a = this, n = a.options, o = a.dragBox, r = a.face; return a.ready && !a.disabled && (e = t === $t, i = n.movable && t === Ft, t = e || i ? t : Kt, D(o, Rt, t), w(o, lt, e), w(o, ht, i), n.cropBoxMovable || (D(r, Rt, t), w(r, lt, e), w(r, ht, i))), a } }, $.DEFAULTS = { viewMode: 0, dragMode: "crop", aspectRatio: NaN, data: null, preview: "", responsive: !0, restore: !0, checkCrossOrigin: !0, checkOrientation: !0, modal: !0, guides: !0, center: !0, highlight: !0, background: !0, autoCrop: !0, autoCropArea: .8, movable: !0, rotatable: !0, scalable: !0, zoomable: !0, zoomOnTouch: !0, zoomOnWheel: !0, wheelZoomRatio: .1, cropBoxMovable: !0, cropBoxResizable: !0, toggleDragModeOnDblclick: !0, minCanvasWidth: 0, minCanvasHeight: 0, minCropBoxWidth: 0, minCropBoxHeight: 0, minContainerWidth: 200, minContainerHeight: 100, build: null, built: null, cropstart: null, cropmove: null, cropend: null, crop: null, zoom: null }, $.TEMPLATE = function (t, e) { return e = e.split(","), t.replace(/\d+/g, function (t) { return e[t] }) }('<0 6="5-container"><0 6="5-wrap-9"><0 6="5-canvas"></0></0><0 6="5-drag-9"></0><0 6="5-crop-9"><1 6="5-view-9"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-center"></1><1 6="5-face"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>', "div,span,action,data,point,cropper,class,line,dashed,box"); var pe = t.Cropper; return $.noConflict = function () { return t.Cropper = pe, $ }, $.setDefaults = function (t) { p($.DEFAULTS, t) }, "function" == typeof define && define.amd && define("cropper", [], function () { return $ }), e || (t.Cropper = $), $ });

window.onload = function () {

    'use strict';

    var Cropper = window.Cropper;
    var console = window.console || { log: function () { } };
    var container = document.querySelector('.img-container');
    var image = container.getElementsByTagName('img').item(0);
    var download = document.getElementById('download');
    var actions = document.getElementById('actions');

    var isUndefined = function (obj) {
        return typeof obj === 'undefined';
    };
    var options = {
        aspectRatio: 16 / 9,
        preview: '.img-preview',
    };
    var cropper = new Cropper(image, options);

    function preventDefault(e) {
        if (e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    }

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();


    // Buttons
    if (!document.createElement('canvas').getContext) {
        $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
    }

    if (typeof document.createElement('cropper').style.transition === 'undefined') {
        $('button[data-method="rotate"]').prop('disabled', true);
        $('button[data-method="scale"]').prop('disabled', true);
    }


    // Download
    if (typeof download.download === 'undefined') {
        download.className += ' disabled';
    }
    // Options
    actions.querySelector('.docs-toggles').onclick = function (event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var cropBoxData;
        var canvasData;
        var isCheckbox;
        var isRadio;

        if (!cropper) {
            return;
        }

        if (target.tagName.toLowerCase() === 'span') {
            target = target.parentNode;
        }

        if (target.tagName.toLowerCase() === 'label') {
            target = target.getElementsByTagName('input').item(0);
        }

        isCheckbox = target.type === 'checkbox';
        isRadio = target.type === 'radio';

        if (isCheckbox || isRadio) {
            if (isCheckbox) {
                options[target.name] = target.checked;
                cropBoxData = cropper.getCropBoxData();
                canvasData = cropper.getCanvasData();

                options.built = function () {
                    console.log('built');
                    cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
                };
            } else {
                options[target.name] = target.value;
                options.built = function () {
                    console.log('built');
                };
            }

            // Restart
            cropper.destroy();
            cropper = new Cropper(image, options);
        }
    };

    // Methods
    actions.querySelector('.docs-buttons').onclick = function (event) {
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var result;
        var input;
        var data;

        if (!cropper) {
            return;
        }

        while (target !== this) {
            if (target.getAttribute('data-method')) {
                break;
            }

            target = target.parentNode;
        }

        if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
            return;
        }

        data = {
            method: target.getAttribute('data-method'),
            target: target.getAttribute('data-target'),
            option: target.getAttribute('data-option'),
            secondOption: target.getAttribute('data-second-option')
        };

        if (data.method) {
            if (typeof data.target !== 'undefined') {
                input = document.querySelector(data.target);

                if (!target.hasAttribute('data-option') && data.target && input) {
                    try {
                        data.option = JSON.parse(input.value);
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }

            if (data.method === 'getCroppedCanvas') {
                data.option = JSON.parse(data.option);
            }

            result = cropper[data.method](data.option, data.secondOption);

            switch (data.method) {
                case 'scaleX':
                case 'scaleY':
                    target.setAttribute('data-option', -data.option);
                    break;

                case 'getCroppedCanvas':
                    if (result) {

                        // Bootstrap's Modal
                        $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

                        if (!download.disabled) {
                            download.href = result.toDataURL('image/jpeg');
                        }
                    }

                    break;

                case 'destroy':
                    cropper = null;
                    break;
            }

            if (typeof result === 'object' && result !== cropper && input) {
                try {
                    input.value = JSON.stringify(result);
                } catch (e) {
                    console.log(e.message);
                }
            }

        }
    };

    document.body.onkeydown = function (event) {
        var e = event || window.event;

        if (!cropper || this.scrollTop > 300) {
            return;
        }

        switch (e.charCode || e.keyCode) {
            case 37:
                preventDefault(e);
                cropper.move(-1, 0);
                break;

            case 38:
                preventDefault(e);
                cropper.move(0, -1);
                break;

            case 39:
                preventDefault(e);
                cropper.move(1, 0);
                break;

            case 40:
                preventDefault(e);
                cropper.move(0, 1);
                break;
        }
    };


    // Import image
    var inputImage = document.getElementById('inputImage');
    var URL = window.URL || window.webkitURL;
    var blobURL;

    if (URL) {
        inputImage.onchange = function () {
            var files = this.files;
            var file;

            if (cropper && files && files.length) {
                file = files[0];

                if (/^image\/\w+/.test(file.type)) {
                    blobURL = URL.createObjectURL(file);
                    cropper.reset().replace(blobURL);
                    inputImage.value = null;
                } else {
                    window.alert('Please choose an image file.');
                }
            }
        };
    } else {
        inputImage.disabled = true;
        inputImage.parentNode.className += ' disabled';
    }

};

