﻿"use strict";

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (e) {
    var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] >= 3) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v3.0.0");
})(jQuery), +(function (e) {
    "use strict";function t(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var i = function i(e, t, n) {
        for (var i = !0; i;) {
            var r = e,
                s = t,
                o = n;i = !1, null === r && (r = Function.prototype);var a = Object.getOwnPropertyDescriptor(r, s);if (void 0 !== a) {
                if ("value" in a) return a.value;var l = a.get;return void 0 === l ? void 0 : l.call(o);
            }var u = Object.getPrototypeOf(r);if (null === u) return void 0;e = u, t = s, n = o, i = !0, a = u = void 0;
        }
    },
        r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })(),
        s = (function (e) {
        function t(e) {
            return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }function n(e) {
            return (e[0] || e).nodeType;
        }function i() {
            return { bindType: a.end, delegateType: a.end, handle: function handle(t) {
                    return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0;
                } };
        }function r() {
            if (window.QUnit) return !1;var e = document.createElement("bootstrap");for (var t in l) if (void 0 !== e.style[t]) return { end: l[t] };return !1;
        }function s(t) {
            var n = this,
                i = !1;return e(this).one(u.TRANSITION_END, function () {
                i = !0;
            }), setTimeout(function () {
                i || u.triggerTransitionEnd(n);
            }, t), this;
        }function o() {
            a = r(), e.fn.emulateTransitionEnd = s, u.supportsTransitionEnd() && (e.event.special[u.TRANSITION_END] = i());
        }var a = !1,
            l = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
            u = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
                do e += ~ ~(1e6 * Math.random()); while (document.getElementById(e));return e;
            }, getSelectorFromElement: function getSelectorFromElement(e) {
                var t = e.getAttribute("data-target");return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t;
            }, reflow: function reflow(e) {
                new Function("bs", "return bs")(e.offsetHeight);
            }, triggerTransitionEnd: function triggerTransitionEnd(t) {
                e(t).trigger(a.end);
            }, supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(a);
            }, typeCheckConfig: function typeCheckConfig(e, i, r) {
                for (var s in r) if (r.hasOwnProperty(s)) {
                    var o = r[s],
                        a = i[s],
                        l = void 0;if ((l = a && n(a) ? "element" : t(a), !new RegExp(o).test(l))) throw new Error(e.toUpperCase() + ": " + ('Option "' + s + '" provided type "' + l + '" ') + ('but expected type "' + o + '".'));
                }
            } };return o(), u;
    })(jQuery),
        o = ((function (e) {
        var t = "alert",
            i = "4.0.0-alpha.2",
            o = "bs.alert",
            a = "." + o,
            l = ".data-api",
            u = e.fn[t],
            h = 150,
            c = { DISMISS: '[data-dismiss="alert"]' },
            d = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + l },
            f = { ALERT: "alert", FADE: "fade", IN: "in" },
            _ = (function () {
            function t(e) {
                n(this, t), this._element = e;
            }return r(t, [{ key: "close", value: function value(e) {
                    e = e || this._element;var t = this._getRootElement(e),
                        n = this._triggerCloseEvent(t);n.isDefaultPrevented() || this._removeElement(t);
                } }, { key: "dispose", value: function value() {
                    e.removeData(this._element, o), this._element = null;
                } }, { key: "_getRootElement", value: function value(t) {
                    var n = s.getSelectorFromElement(t),
                        i = !1;return n && (i = e(n)[0]), i || (i = e(t).closest("." + f.ALERT)[0]), i;
                } }, { key: "_triggerCloseEvent", value: function value(t) {
                    var n = e.Event(d.CLOSE);return e(t).trigger(n), n;
                } }, { key: "_removeElement", value: function value(t) {
                    return e(t).removeClass(f.IN), s.supportsTransitionEnd() && e(t).hasClass(f.FADE) ? void e(t).one(s.TRANSITION_END, e.proxy(this._destroyElement, this, t)).emulateTransitionEnd(h) : void this._destroyElement(t);
                } }, { key: "_destroyElement", value: function value(t) {
                    e(t).detach().trigger(d.CLOSED).remove();
                } }], [{ key: "_jQueryInterface", value: function value(n) {
                    return this.each(function () {
                        var i = e(this),
                            r = i.data(o);r || (r = new t(this), i.data(o, r)), "close" === n && r[n](this);
                    });
                } }, { key: "_handleDismiss", value: function value(e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this);
                    };
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }]), t;
        })();return e(document).on(d.CLICK_DATA_API, c.DISMISS, _._handleDismiss(new _())), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
            return e.fn[t] = u, _._jQueryInterface;
        }, _;
    })(jQuery), (function (e) {
        var t = "button",
            i = "4.0.0-alpha.2",
            s = "bs.button",
            o = "." + s,
            a = ".data-api",
            l = e.fn[t],
            u = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            h = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
            c = { CLICK_DATA_API: "click" + o + a, FOCUS_BLUR_DATA_API: "focus" + o + a + " " + ("blur" + o + a) },
            d = (function () {
            function t(e) {
                n(this, t), this._element = e;
            }return r(t, [{ key: "toggle", value: function value() {
                    var t = !0,
                        n = e(this._element).closest(h.DATA_TOGGLE)[0];if (n) {
                        var i = e(this._element).find(h.INPUT)[0];if (i) {
                            if ("radio" === i.type) if (i.checked && e(this._element).hasClass(u.ACTIVE)) t = !1;else {
                                var r = e(n).find(h.ACTIVE)[0];r && e(r).removeClass(u.ACTIVE);
                            }t && (i.checked = !e(this._element).hasClass(u.ACTIVE), e(this._element).trigger("change")), i.focus();
                        }
                    } else this._element.setAttribute("aria-pressed", !e(this._element).hasClass(u.ACTIVE));t && e(this._element).toggleClass(u.ACTIVE);
                } }, { key: "dispose", value: function value() {
                    e.removeData(this._element, s), this._element = null;
                } }], [{ key: "_jQueryInterface", value: function value(n) {
                    return this.each(function () {
                        var i = e(this).data(s);i || (i = new t(this), e(this).data(s, i)), "toggle" === n && i[n]();
                    });
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }]), t;
        })();return e(document).on(c.CLICK_DATA_API, h.DATA_TOGGLE_CARROT, function (t) {
            t.preventDefault();var n = t.target;e(n).hasClass(u.BUTTON) || (n = e(n).closest(h.BUTTON)), d._jQueryInterface.call(e(n), "toggle");
        }).on(c.FOCUS_BLUR_DATA_API, h.DATA_TOGGLE_CARROT, function (t) {
            var n = e(t.target).closest(h.BUTTON)[0];e(n).toggleClass(u.FOCUS, /^focus(in)?$/.test(t.type));
        }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = l, d._jQueryInterface;
        }, d;
    })(jQuery), (function (e) {
        var t = "carousel",
            i = "4.0.0-alpha.2",
            o = "bs.carousel",
            a = "." + o,
            l = ".data-api",
            u = e.fn[t],
            h = 600,
            c = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
            d = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
            f = { NEXT: "next", PREVIOUS: "prev" },
            _ = { SLIDE: "slide" + a, SLID: "slid" + a, KEYDOWN: "keydown" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a, LOAD_DATA_API: "load" + a + l, CLICK_DATA_API: "click" + a + l },
            g = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "right", LEFT: "left", ITEM: "carousel-item" },
            v = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".next, .prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
            m = (function () {
            function l(t, i) {
                n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(v.INDICATORS)[0], this._addEventListeners();
            }return r(l, [{ key: "next", value: function value() {
                    this._isSliding || this._slide(f.NEXT);
                } }, { key: "nextWhenVisible", value: function value() {
                    document.hidden || this.next();
                } }, { key: "prev", value: function value() {
                    this._isSliding || this._slide(f.PREVIOUS);
                } }, { key: "pause", value: function value(t) {
                    t || (this._isPaused = !0), e(this._element).find(v.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
                } }, { key: "cycle", value: function value(t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(e.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval));
                } }, { key: "to", value: function value(t) {
                    var n = this;this._activeElement = e(this._element).find(v.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || 0 > t)) {
                        if (this._isSliding) return void e(this._element).one(_.SLID, function () {
                            return n.to(t);
                        });if (i === t) return this.pause(), void this.cycle();var r = t > i ? f.NEXT : f.PREVIOUS;this._slide(r, this._items[t]);
                    }
                } }, { key: "dispose", value: function value() {
                    e(this._element).off(a), e.removeData(this._element, o), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
                } }, { key: "_getConfig", value: function value(n) {
                    return n = e.extend({}, c, n), s.typeCheckConfig(t, n, d), n;
                } }, { key: "_addEventListeners", value: function value() {
                    this._config.keyboard && e(this._element).on(_.KEYDOWN, e.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || e(this._element).on(_.MOUSEENTER, e.proxy(this.pause, this)).on(_.MOUSELEAVE, e.proxy(this.cycle, this));
                } }, { key: "_keydown", value: function value(e) {
                    if ((e.preventDefault(), !/input|textarea/i.test(e.target.tagName))) switch (e.which) {case 37:
                            this.prev();break;case 39:
                            this.next();break;default:
                            return;}
                } }, { key: "_getItemIndex", value: function value(t) {
                    return this._items = e.makeArray(e(t).parent().find(v.ITEM)), this._items.indexOf(t);
                } }, { key: "_getItemByDirection", value: function value(e, t) {
                    var n = e === f.NEXT,
                        i = e === f.PREVIOUS,
                        r = this._getItemIndex(t),
                        s = this._items.length - 1,
                        o = i && 0 === r || n && r === s;if (o && !this._config.wrap) return t;var a = e === f.PREVIOUS ? -1 : 1,
                        l = (r + a) % this._items.length;return -1 === l ? this._items[this._items.length - 1] : this._items[l];
                } }, { key: "_triggerSlideEvent", value: function value(t, n) {
                    var i = e.Event(_.SLIDE, { relatedTarget: t, direction: n });return e(this._element).trigger(i), i;
                } }, { key: "_setActiveIndicatorElement", value: function value(t) {
                    if (this._indicatorsElement) {
                        e(this._indicatorsElement).find(v.ACTIVE).removeClass(g.ACTIVE);var n = this._indicatorsElement.children[this._getItemIndex(t)];n && e(n).addClass(g.ACTIVE);
                    }
                } }, { key: "_slide", value: function value(t, n) {
                    var i = this,
                        r = e(this._element).find(v.ACTIVE_ITEM)[0],
                        o = n || r && this._getItemByDirection(t, r),
                        a = Boolean(this._interval),
                        l = t === f.NEXT ? g.LEFT : g.RIGHT;if (o && e(o).hasClass(g.ACTIVE)) return void (this._isSliding = !1);var u = this._triggerSlideEvent(o, l);if (!u.isDefaultPrevented() && r && o) {
                        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o);var c = e.Event(_.SLID, { relatedTarget: o, direction: l });s.supportsTransitionEnd() && e(this._element).hasClass(g.SLIDE) ? (e(o).addClass(t), s.reflow(o), e(r).addClass(l), e(o).addClass(l), e(r).one(s.TRANSITION_END, function () {
                            e(o).removeClass(l).removeClass(t), e(o).addClass(g.ACTIVE), e(r).removeClass(g.ACTIVE).removeClass(t).removeClass(l), i._isSliding = !1, setTimeout(function () {
                                return e(i._element).trigger(c);
                            }, 0);
                        }).emulateTransitionEnd(h)) : (e(r).removeClass(g.ACTIVE), e(o).addClass(g.ACTIVE), this._isSliding = !1, e(this._element).trigger(c)), a && this.cycle();
                    }
                } }], [{ key: "_jQueryInterface", value: function value(t) {
                    return this.each(function () {
                        var n = e(this).data(o),
                            i = e.extend({}, c, e(this).data());"object" == typeof t && e.extend(i, t);var r = "string" == typeof t ? t : i.slide;if ((n || (n = new l(this, i), e(this).data(o, n)), "number" == typeof t)) n.to(t);else if ("string" == typeof r) {
                            if (void 0 === n[r]) throw new Error('No method named "' + r + '"');n[r]();
                        } else i.interval && (n.pause(), n.cycle());
                    });
                } }, { key: "_dataApiClickHandler", value: function value(t) {
                    var n = s.getSelectorFromElement(this);if (n) {
                        var i = e(n)[0];if (i && e(i).hasClass(g.CAROUSEL)) {
                            var r = e.extend({}, e(i).data(), e(this).data()),
                                a = this.getAttribute("data-slide-to");a && (r.interval = !1), l._jQueryInterface.call(e(i), r), a && e(i).data(o).to(a), t.preventDefault();
                        }
                    }
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }, { key: "Default", get: function get() {
                    return c;
                } }]), l;
        })();return e(document).on(_.CLICK_DATA_API, v.DATA_SLIDE, m._dataApiClickHandler), e(window).on(_.LOAD_DATA_API, function () {
            e(v.DATA_RIDE).each(function () {
                var t = e(this);m._jQueryInterface.call(t, t.data());
            });
        }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
            return e.fn[t] = u, m._jQueryInterface;
        }, m;
    })(jQuery), (function (e) {
        var t = "collapse",
            i = "4.0.0-alpha.2",
            o = "bs.collapse",
            a = "." + o,
            l = ".data-api",
            u = e.fn[t],
            h = 600,
            c = { toggle: !0, parent: "" },
            d = { toggle: "boolean", parent: "string" },
            f = { SHOW: "show" + a, SHOWN: "shown" + a, HIDE: "hide" + a, HIDDEN: "hidden" + a, CLICK_DATA_API: "click" + a + l },
            _ = { IN: "in", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
            g = { WIDTH: "width", HEIGHT: "height" },
            v = { ACTIVES: ".panel > .in, .panel > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
            m = (function () {
            function a(t, i) {
                n(this, a), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }return r(a, [{ key: "toggle", value: function value() {
                    e(this._element).hasClass(_.IN) ? this.hide() : this.show();
                } }, { key: "show", value: function value() {
                    var t = this;if (!this._isTransitioning && !e(this._element).hasClass(_.IN)) {
                        var n = void 0,
                            i = void 0;if ((this._parent && (n = e.makeArray(e(v.ACTIVES)), n.length || (n = null)), !(n && (i = e(n).data(o), i && i._isTransitioning)))) {
                            var r = e.Event(f.SHOW);if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
                                n && (a._jQueryInterface.call(e(n), "hide"), i || e(n).data(o, null));var l = this._getDimension();e(this._element).removeClass(_.COLLAPSE).addClass(_.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && e(this._triggerArray).removeClass(_.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);var u = function u() {
                                    e(t._element).removeClass(_.COLLAPSING).addClass(_.COLLAPSE).addClass(_.IN), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(f.SHOWN);
                                };if (!s.supportsTransitionEnd()) return void u();var c = l[0].toUpperCase() + l.slice(1),
                                    d = "scroll" + c;e(this._element).one(s.TRANSITION_END, u).emulateTransitionEnd(h), this._element.style[l] = this._element[d] + "px";
                            }
                        }
                    }
                } }, { key: "hide", value: function value() {
                    var t = this;if (!this._isTransitioning && e(this._element).hasClass(_.IN)) {
                        var n = e.Event(f.HIDE);if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                            var i = this._getDimension(),
                                r = i === g.WIDTH ? "offsetWidth" : "offsetHeight";this._element.style[i] = this._element[r] + "px", s.reflow(this._element), e(this._element).addClass(_.COLLAPSING).removeClass(_.COLLAPSE).removeClass(_.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && e(this._triggerArray).addClass(_.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);var o = function o() {
                                t.setTransitioning(!1), e(t._element).removeClass(_.COLLAPSING).addClass(_.COLLAPSE).trigger(f.HIDDEN);
                            };return this._element.style[i] = 0, s.supportsTransitionEnd() ? void e(this._element).one(s.TRANSITION_END, o).emulateTransitionEnd(h) : void o();
                        }
                    }
                } }, { key: "setTransitioning", value: function value(e) {
                    this._isTransitioning = e;
                } }, { key: "dispose", value: function value() {
                    e.removeData(this._element, o), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
                } }, { key: "_getConfig", value: function value(n) {
                    return n = e.extend({}, c, n), n.toggle = Boolean(n.toggle), s.typeCheckConfig(t, n, d), n;
                } }, { key: "_getDimension", value: function value() {
                    var t = e(this._element).hasClass(g.WIDTH);return t ? g.WIDTH : g.HEIGHT;
                } }, { key: "_getParent", value: function value() {
                    var t = this,
                        n = e(this._config.parent)[0],
                        i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return e(n).find(i).each(function (e, n) {
                        t._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n]);
                    }), n;
                } }, { key: "_addAriaAndCollapsedClass", value: function value(t, n) {
                    if (t) {
                        var i = e(t).hasClass(_.IN);t.setAttribute("aria-expanded", i), n.length && e(n).toggleClass(_.COLLAPSED, !i).attr("aria-expanded", i);
                    }
                } }], [{ key: "_getTargetFromElement", value: function value(t) {
                    var n = s.getSelectorFromElement(t);return n ? e(n)[0] : null;
                } }, { key: "_jQueryInterface", value: function value(t) {
                    return this.each(function () {
                        var n = e(this),
                            i = n.data(o),
                            r = e.extend({}, c, n.data(), "object" == typeof t && t);if ((!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || (i = new a(this, r), n.data(o, i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new Error('No method named "' + t + '"');i[t]();
                        }
                    });
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }, { key: "Default", get: function get() {
                    return c;
                } }]), a;
        })();return e(document).on(f.CLICK_DATA_API, v.DATA_TOGGLE, function (t) {
            t.preventDefault();var n = m._getTargetFromElement(this),
                i = e(n).data(o),
                r = i ? "toggle" : e(this).data();m._jQueryInterface.call(e(n), r);
        }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
            return e.fn[t] = u, m._jQueryInterface;
        }, m;
    })(jQuery), (function (e) {
        var t = "dropdown",
            i = "4.0.0-alpha.2",
            o = "bs.dropdown",
            a = "." + o,
            l = ".data-api",
            u = e.fn[t],
            h = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, CLICK: "click" + a, CLICK_DATA_API: "click" + a + l, KEYDOWN_DATA_API: "keydown" + a + l },
            c = { BACKDROP: "dropdown-backdrop", DISABLED: "disabled", OPEN: "open" },
            d = { BACKDROP: ".dropdown-backdrop", DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", ROLE_MENU: '[role="menu"]', ROLE_LISTBOX: '[role="listbox"]', NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a' },
            f = (function () {
            function t(e) {
                n(this, t), this._element = e, this._addEventListeners();
            }return r(t, [{ key: "toggle", value: function value() {
                    if (this.disabled || e(this).hasClass(c.DISABLED)) return !1;var n = t._getParentFromElement(this),
                        i = e(n).hasClass(c.OPEN);if ((t._clearMenus(), i)) return !1;if ("ontouchstart" in document.documentElement && !e(n).closest(d.NAVBAR_NAV).length) {
                        var r = document.createElement("div");r.className = c.BACKDROP, e(r).insertBefore(this), e(r).on("click", t._clearMenus);
                    }var s = { relatedTarget: this },
                        o = e.Event(h.SHOW, s);return e(n).trigger(o), o.isDefaultPrevented() ? !1 : (this.focus(), this.setAttribute("aria-expanded", "true"), e(n).toggleClass(c.OPEN), e(n).trigger(e.Event(h.SHOWN, s)), !1);
                } }, { key: "dispose", value: function value() {
                    e.removeData(this._element, o), e(this._element).off(a), this._element = null;
                } }, { key: "_addEventListeners", value: function value() {
                    e(this._element).on(h.CLICK, this.toggle);
                } }], [{ key: "_jQueryInterface", value: function value(n) {
                    return this.each(function () {
                        var i = e(this).data(o);if ((i || e(this).data(o, i = new t(this)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new Error('No method named "' + n + '"');i[n].call(this);
                        }
                    });
                } }, { key: "_clearMenus", value: function value(n) {
                    if (!n || 3 !== n.which) {
                        var i = e(d.BACKDROP)[0];i && i.parentNode.removeChild(i);for (var r = e.makeArray(e(d.DATA_TOGGLE)), s = 0; s < r.length; s++) {
                            var o = t._getParentFromElement(r[s]),
                                a = { relatedTarget: r[s] };if (e(o).hasClass(c.OPEN) && !(n && "click" === n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o, n.target))) {
                                var l = e.Event(h.HIDE, a);e(o).trigger(l), l.isDefaultPrevented() || (r[s].setAttribute("aria-expanded", "false"), e(o).removeClass(c.OPEN).trigger(e.Event(h.HIDDEN, a)));
                            }
                        }
                    }
                } }, { key: "_getParentFromElement", value: function value(t) {
                    var n = void 0,
                        i = s.getSelectorFromElement(t);return i && (n = e(i)[0]), n || t.parentNode;
                } }, { key: "_dataApiKeydownHandler", value: function value(n) {
                    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(c.DISABLED))) {
                        var i = t._getParentFromElement(this),
                            r = e(i).hasClass(c.OPEN);if (!r && 27 !== n.which || r && 27 === n.which) {
                            if (27 === n.which) {
                                var s = e(i).find(d.DATA_TOGGLE)[0];e(s).trigger("focus");
                            }return void e(this).trigger("click");
                        }var o = e.makeArray(e(d.VISIBLE_ITEMS));if ((o = o.filter(function (e) {
                            return e.offsetWidth || e.offsetHeight;
                        }), o.length)) {
                            var a = o.indexOf(n.target);38 === n.which && a > 0 && a--, 40 === n.which && a < o.length - 1 && a++, 0 > a && (a = 0), o[a].focus();
                        }
                    }
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }]), t;
        })();return e(document).on(h.KEYDOWN_DATA_API, d.DATA_TOGGLE, f._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, d.ROLE_MENU, f._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, d.ROLE_LISTBOX, f._dataApiKeydownHandler).on(h.CLICK_DATA_API, f._clearMenus).on(h.CLICK_DATA_API, d.DATA_TOGGLE, f.prototype.toggle).on(h.CLICK_DATA_API, d.FORM_CHILD, function (e) {
            e.stopPropagation();
        }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = u, f._jQueryInterface;
        }, f;
    })(jQuery), (function (e) {
        var t = "modal",
            i = "4.0.0-alpha.2",
            o = "bs.modal",
            a = "." + o,
            l = ".data-api",
            u = e.fn[t],
            h = 300,
            c = 150,
            d = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            f = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            _ = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, FOCUSIN: "focusin" + a, RESIZE: "resize" + a, CLICK_DISMISS: "click.dismiss" + a, KEYDOWN_DISMISS: "keydown.dismiss" + a, MOUSEUP_DISMISS: "mouseup.dismiss" + a, MOUSEDOWN_DISMISS: "mousedown.dismiss" + a, CLICK_DATA_API: "click" + a + l },
            g = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", IN: "in" },
            v = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed" },
            m = (function () {
            function l(t, i) {
                n(this, l), this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(v.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
            }return r(l, [{ key: "toggle", value: function value(e) {
                    return this._isShown ? this.hide() : this.show(e);
                } }, { key: "show", value: function value(t) {
                    var n = this,
                        i = e.Event(_.SHOW, { relatedTarget: t });e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), e(document.body).addClass(g.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(_.CLICK_DISMISS, v.DATA_DISMISS, e.proxy(this.hide, this)), e(this._dialog).on(_.MOUSEDOWN_DISMISS, function () {
                        e(n._element).one(_.MOUSEUP_DISMISS, function (t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                        });
                    }), this._showBackdrop(e.proxy(this._showElement, this, t)));
                } }, { key: "hide", value: function value(t) {
                    t && t.preventDefault();var n = e.Event(_.HIDE);e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), e(document).off(_.FOCUSIN), e(this._element).removeClass(g.IN), e(this._element).off(_.CLICK_DISMISS), e(this._dialog).off(_.MOUSEDOWN_DISMISS), s.supportsTransitionEnd() && e(this._element).hasClass(g.FADE) ? e(this._element).one(s.TRANSITION_END, e.proxy(this._hideModal, this)).emulateTransitionEnd(h) : this._hideModal());
                } }, { key: "dispose", value: function value() {
                    e.removeData(this._element, o), e(window).off(a), e(document).off(a), e(this._element).off(a), e(this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null;
                } }, { key: "_getConfig", value: function value(n) {
                    return n = e.extend({}, d, n), s.typeCheckConfig(t, n, f), n;
                } }, { key: "_showElement", value: function value(t) {
                    var n = this,
                        i = s.supportsTransitionEnd() && e(this._element).hasClass(g.FADE);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass(g.IN), this._config.focus && this._enforceFocus();var r = e.Event(_.SHOWN, { relatedTarget: t }),
                        o = function o() {
                        n._config.focus && n._element.focus(), e(n._element).trigger(r);
                    };i ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(h) : o();
                } }, { key: "_enforceFocus", value: function value() {
                    var t = this;e(document).off(_.FOCUSIN).on(_.FOCUSIN, function (n) {
                        document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus();
                    });
                } }, { key: "_setEscapeEvent", value: function value() {
                    var t = this;this._isShown && this._config.keyboard ? e(this._element).on(_.KEYDOWN_DISMISS, function (e) {
                        27 === e.which && t.hide();
                    }) : this._isShown || e(this._element).off(_.KEYDOWN_DISMISS);
                } }, { key: "_setResizeEvent", value: function value() {
                    this._isShown ? e(window).on(_.RESIZE, e.proxy(this._handleUpdate, this)) : e(window).off(_.RESIZE);
                } }, { key: "_hideModal", value: function value() {
                    var t = this;this._element.style.display = "none", this._showBackdrop(function () {
                        e(document.body).removeClass(g.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(_.HIDDEN);
                    });
                } }, { key: "_removeBackdrop", value: function value() {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
                } }, { key: "_showBackdrop", value: function value(t) {
                    var n = this,
                        i = e(this._element).hasClass(g.FADE) ? g.FADE : "";if (this._isShown && this._config.backdrop) {
                        var r = s.supportsTransitionEnd() && i;if ((this._backdrop = document.createElement("div"), this._backdrop.className = g.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(_.CLICK_DISMISS, function (e) {
                            return n._ignoreBackdropClick ? void (n._ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()));
                        }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(g.IN), !t)) return;if (!r) return void t();e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(c);
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(g.IN);var o = function o() {
                            n._removeBackdrop(), t && t();
                        };s.supportsTransitionEnd() && e(this._element).hasClass(g.FADE) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(c) : o();
                    } else t && t();
                } }, { key: "_handleUpdate", value: function value() {
                    this._adjustDialog();
                } }, { key: "_adjustDialog", value: function value() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px~");
                } }, { key: "_resetAdjustments", value: function value() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
                } }, { key: "_checkScrollbar", value: function value() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
                } }, { key: "_setScrollbar", value: function value() {
                    var t = parseInt(e(v.FIXED_CONTENT).css("padding-right") || 0, 10);this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px");
                } }, { key: "_resetScrollbar", value: function value() {
                    document.body.style.paddingRight = this._originalBodyPadding;
                } }, { key: "_getScrollbarWidth", value: function value() {
                    var e = document.createElement("div");e.className = g.SCROLLBAR_MEASURER, document.body.appendChild(e);var t = e.offsetWidth - e.clientWidth;return document.body.removeChild(e), t;
                } }], [{ key: "_jQueryInterface", value: function value(t, n) {
                    return this.each(function () {
                        var i = e(this).data(o),
                            r = e.extend({}, l.Default, e(this).data(), "object" == typeof t && t);if ((i || (i = new l(this, r), e(this).data(o, i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new Error('No method named "' + t + '"');i[t](n);
                        } else r.show && i.show(n);
                    });
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }, { key: "Default", get: function get() {
                    return d;
                } }]), l;
        })();return e(document).on(_.CLICK_DATA_API, v.DATA_TOGGLE, function (t) {
            var n = this,
                i = void 0,
                r = s.getSelectorFromElement(this);r && (i = e(r)[0]);var a = e(i).data(o) ? "toggle" : e.extend({}, e(i).data(), e(this).data());"A" === this.tagName && t.preventDefault();var l = e(i).one(_.SHOW, function (t) {
                t.isDefaultPrevented() || l.one(_.HIDDEN, function () {
                    e(n).is(":visible") && n.focus();
                });
            });m._jQueryInterface.call(e(i), a, this);
        }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
            return e.fn[t] = u, m._jQueryInterface;
        }, m;
    })(jQuery), (function (e) {
        var t = "scrollspy",
            i = "4.0.0-alpha.2",
            o = "bs.scrollspy",
            a = "." + o,
            l = ".data-api",
            u = e.fn[t],
            h = { offset: 10, method: "auto", target: "" },
            c = { offset: "number", method: "string", target: "(string|element)" },
            d = { ACTIVATE: "activate" + a, SCROLL: "scroll" + a, LOAD_DATA_API: "load" + a + l },
            f = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", NAV_LINK: "nav-link", NAV: "nav", ACTIVE: "active" },
            _ = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
            g = { OFFSET: "offset", POSITION: "position" },
            v = (function () {
            function l(t, i) {
                n(this, l), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + _.NAV_LINKS + "," + (this._config.target + " " + _.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(d.SCROLL, e.proxy(this._process, this)), this.refresh(), this._process();
            }return r(l, [{ key: "refresh", value: function value() {
                    var t = this,
                        n = this._scrollElement !== this._scrollElement.window ? g.POSITION : g.OFFSET,
                        i = "auto" === this._config.method ? n : this._config.method,
                        r = i === g.POSITION ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();var o = e.makeArray(e(this._selector));o.map(function (t) {
                        var n = void 0,
                            o = s.getSelectorFromElement(t);return o && (n = e(o)[0]), n && (n.offsetWidth || n.offsetHeight) ? [e(n)[i]().top + r, o] : void 0;
                    }).filter(function (e) {
                        return e;
                    }).sort(function (e, t) {
                        return e[0] - t[0];
                    }).forEach(function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1]);
                    });
                } }, { key: "dispose", value: function value() {
                    e.removeData(this._element, o), e(this._scrollElement).off(a), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
                } }, { key: "_getConfig", value: function value(n) {
                    if ((n = e.extend({}, h, n), "string" != typeof n.target)) {
                        var i = e(n.target).attr("id");i || (i = s.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i;
                    }return s.typeCheckConfig(t, n, c), n;
                } }, { key: "_getScrollTop", value: function value() {
                    return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
                } }, { key: "_getScrollHeight", value: function value() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                } }, { key: "_process", value: function value() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._scrollElement.offsetHeight;if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
                    }if (this._activeTarget && e < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
                        var s = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]);s && this._activate(this._targets[r]);
                    }
                } }, { key: "_activate", value: function value(t) {
                    this._activeTarget = t, this._clear();var n = this._selector.split(",");n = n.map(function (e) {
                        return e + '[data-target="' + t + '"],' + (e + '[href="' + t + '"]');
                    });var i = e(n.join(","));i.hasClass(f.DROPDOWN_ITEM) ? (i.closest(_.DROPDOWN).find(_.DROPDOWN_TOGGLE).addClass(f.ACTIVE), i.addClass(f.ACTIVE)) : i.parents(_.LI).find(_.NAV_LINKS).addClass(f.ACTIVE), e(this._scrollElement).trigger(d.ACTIVATE, { relatedTarget: t });
                } }, { key: "_clear", value: function value() {
                    e(this._selector).filter(_.ACTIVE).removeClass(f.ACTIVE);
                } }], [{ key: "_jQueryInterface", value: function value(t) {
                    return this.each(function () {
                        var n = e(this).data(o),
                            i = "object" == typeof t && t || null;if ((n || (n = new l(this, i), e(this).data(o, n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new Error('No method named "' + t + '"');n[t]();
                        }
                    });
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }, { key: "Default", get: function get() {
                    return h;
                } }]), l;
        })();return e(window).on(d.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(_.DATA_SPY)), n = t.length; n--;) {
                var i = e(t[n]);v._jQueryInterface.call(i, i.data());
            }
        }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
            return e.fn[t] = u, v._jQueryInterface;
        }, v;
    })(jQuery), (function (e) {
        var t = "tab",
            i = "4.0.0-alpha.2",
            o = "bs.tab",
            a = "." + o,
            l = ".data-api",
            u = e.fn[t],
            h = 150,
            c = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, CLICK_DATA_API: "click" + a + l },
            d = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", FADE: "fade", IN: "in" },
            f = {
            A: "a", LI: "li", DROPDOWN: ".dropdown", UL: "ul:not(.dropdown-menu)", FADE_CHILD: "> .nav-item .fade, > .fade", ACTIVE: ".active", ACTIVE_CHILD: "> .nav-item > .active, > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        },
            _ = (function () {
            function t(e) {
                n(this, t), this._element = e;
            }return r(t, [{ key: "show", value: function value() {
                    var t = this;if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !e(this._element).hasClass(d.ACTIVE)) {
                        var n = void 0,
                            i = void 0,
                            r = e(this._element).closest(f.UL)[0],
                            o = s.getSelectorFromElement(this._element);r && (i = e.makeArray(e(r).find(f.ACTIVE)), i = i[i.length - 1]);var a = e.Event(c.HIDE, { relatedTarget: this._element }),
                            l = e.Event(c.SHOW, { relatedTarget: i });if ((i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented())) {
                            o && (n = e(o)[0]), this._activate(this._element, r);var u = function u() {
                                var n = e.Event(c.HIDDEN, { relatedTarget: t._element }),
                                    r = e.Event(c.SHOWN, { relatedTarget: i });e(i).trigger(n), e(t._element).trigger(r);
                            };n ? this._activate(n, n.parentNode, u) : u();
                        }
                    }
                } }, { key: "dispose", value: function value() {
                    e.removeClass(this._element, o), this._element = null;
                } }, { key: "_activate", value: function value(t, n, i) {
                    var r = e(n).find(f.ACTIVE_CHILD)[0],
                        o = i && s.supportsTransitionEnd() && (r && e(r).hasClass(d.FADE) || Boolean(e(n).find(f.FADE_CHILD)[0])),
                        a = e.proxy(this._transitionComplete, this, t, r, o, i);r && o ? e(r).one(s.TRANSITION_END, a).emulateTransitionEnd(h) : a(), r && e(r).removeClass(d.IN);
                } }, { key: "_transitionComplete", value: function value(t, n, i, r) {
                    if (n) {
                        e(n).removeClass(d.ACTIVE);var o = e(n).find(f.DROPDOWN_ACTIVE_CHILD)[0];o && e(o).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1);
                    }if ((e(t).addClass(d.ACTIVE), t.setAttribute("aria-expanded", !0), i ? (s.reflow(t), e(t).addClass(d.IN)) : e(t).removeClass(d.FADE), t.parentNode && e(t.parentNode).hasClass(d.DROPDOWN_MENU))) {
                        var a = e(t).closest(f.DROPDOWN)[0];a && e(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), t.setAttribute("aria-expanded", !0);
                    }r && r();
                } }], [{ key: "_jQueryInterface", value: function value(n) {
                    return this.each(function () {
                        var i = e(this),
                            r = i.data(o);if ((r || (r = r = new t(this), i.data(o, r)), "string" == typeof n)) {
                            if (void 0 === r[n]) throw new Error('No method named "' + n + '"');r[n]();
                        }
                    });
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }]), t;
        })();return e(document).on(c.CLICK_DATA_API, f.DATA_TOGGLE, function (t) {
            t.preventDefault(), _._jQueryInterface.call(e(this), "show");
        }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function () {
            return e.fn[t] = u, _._jQueryInterface;
        }, _;
    })(jQuery), (function (e) {
        if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");var t = "tooltip",
            i = "4.0.0-alpha.2",
            o = "bs.tooltip",
            a = "." + o,
            l = e.fn[t],
            u = 150,
            h = "bs-tether",
            c = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [] },
            d = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array" },
            f = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
            _ = { IN: "in", OUT: "out" },
            g = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, INSERTED: "inserted" + a, CLICK: "click" + a, FOCUSIN: "focusin" + a, FOCUSOUT: "focusout" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a },
            v = { FADE: "fade", IN: "in" },
            m = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" },
            E = { element: !1, enabled: !1 },
            p = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
            T = (function () {
            function l(e, t) {
                n(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
            }return r(l, [{ key: "enable", value: function value() {
                    this._isEnabled = !0;
                } }, { key: "disable", value: function value() {
                    this._isEnabled = !1;
                } }, { key: "toggleEnabled", value: function value() {
                    this._isEnabled = !this._isEnabled;
                } }, { key: "toggle", value: function value(t) {
                    if (t) {
                        var n = this.constructor.DATA_KEY,
                            i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                    } else {
                        if (e(this.getTipElement()).hasClass(v.IN)) return void this._leave(null, this);this._enter(null, this);
                    }
                } }, { key: "dispose", value: function value() {
                    clearTimeout(this._timeout), this.cleanupTether(), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null;
                } }, { key: "show", value: function value() {
                    var t = this,
                        n = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(n);var i = e.contains(this.element.ownerDocument.documentElement, this.element);if (n.isDefaultPrevented() || !i) return;var r = this.getTipElement(),
                            o = s.getUID(this.constructor.NAME);r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && e(r).addClass(v.FADE);var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                            u = this._getAttachment(a);e(r).data(this.constructor.DATA_KEY, this).appendTo(document.body), e(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: u, element: r, target: this.element, classes: E, classPrefix: h, offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), s.reflow(r), this._tether.position(), e(r).addClass(v.IN);var c = function c() {
                            var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === _.OUT && t._leave(null, t);
                        };if (s.supportsTransitionEnd() && e(this.tip).hasClass(v.FADE)) return void e(this.tip).one(s.TRANSITION_END, c).emulateTransitionEnd(l._TRANSITION_DURATION);c();
                    }
                } }, { key: "hide", value: function value(t) {
                    var n = this,
                        i = this.getTipElement(),
                        r = e.Event(this.constructor.Event.HIDE),
                        o = function o() {
                        n._hoverState !== _.IN && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), t && t();
                    };e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(v.IN), s.supportsTransitionEnd() && e(this.tip).hasClass(v.FADE) ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(u) : o(), this._hoverState = "");
                } }, { key: "isWithContent", value: function value() {
                    return Boolean(this.getTitle());
                } }, { key: "getTipElement", value: function value() {
                    return this.tip = this.tip || e(this.config.template)[0];
                } }, { key: "setContent", value: function value() {
                    var t = e(this.getTipElement());this.setElementContent(t.find(m.TOOLTIP_INNER), this.getTitle()), t.removeClass(v.FADE).removeClass(v.IN), this.cleanupTether();
                } }, { key: "setElementContent", value: function value(t, n) {
                    var i = this.config.html;"object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n);
                } }, { key: "getTitle", value: function value() {
                    var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
                } }, { key: "cleanupTether", value: function value() {
                    this._tether && this._tether.destroy();
                } }, { key: "_getAttachment", value: function value(e) {
                    return f[e.toUpperCase()];
                } }, { key: "_setListeners", value: function value() {
                    var t = this,
                        n = this.config.trigger.split(" ");n.forEach(function (n) {
                        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, e.proxy(t.toggle, t));else if (n !== p.MANUAL) {
                            var i = n === p.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                r = n === p.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, e.proxy(t._enter, t)).on(r, t.config.selector, e.proxy(t._leave, t));
                        }
                    }), this.config.selector ? this.config = e.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
                } }, { key: "_fixTitle", value: function value() {
                    var e = typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                } }, { key: "_enter", value: function value(t, n) {
                    var i = this.constructor.DATA_KEY;return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? p.FOCUS : p.HOVER] = !0), e(n.getTipElement()).hasClass(v.IN) || n._hoverState === _.IN ? void (n._hoverState = _.IN) : (clearTimeout(n._timeout), n._hoverState = _.IN, n.config.delay && n.config.delay.show ? void (n._timeout = setTimeout(function () {
                        n._hoverState === _.IN && n.show();
                    }, n.config.delay.show)) : void n.show());
                } }, { key: "_leave", value: function value(t, n) {
                    var i = this.constructor.DATA_KEY;return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? p.FOCUS : p.HOVER] = !1), n._isWithActiveTrigger() ? void 0 : (clearTimeout(n._timeout), n._hoverState = _.OUT, n.config.delay && n.config.delay.hide ? void (n._timeout = setTimeout(function () {
                        n._hoverState === _.OUT && n.hide();
                    }, n.config.delay.hide)) : void n.hide());
                } }, { key: "_isWithActiveTrigger", value: function value() {
                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;return !1;
                } }, { key: "_getConfig", value: function value(n) {
                    return n = e.extend({}, this.constructor.Default, e(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = { show: n.delay, hide: n.delay }), s.typeCheckConfig(t, n, this.constructor.DefaultType), n;
                } }, { key: "_getDelegateConfig", value: function value() {
                    var e = {};if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);return e;
                } }], [{ key: "_jQueryInterface", value: function value(t) {
                    return this.each(function () {
                        var n = e(this).data(o),
                            i = "object" == typeof t ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new l(this, i), e(this).data(o, n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new Error('No method named "' + t + '"');n[t]();
                        }
                    });
                } }, { key: "VERSION", get: function get() {
                    return i;
                } }, { key: "Default", get: function get() {
                    return c;
                } }, { key: "NAME", get: function get() {
                    return t;
                } }, { key: "DATA_KEY", get: function get() {
                    return o;
                } }, { key: "Event", get: function get() {
                    return g;
                } }, { key: "EVENT_KEY", get: function get() {
                    return a;
                } }, { key: "DefaultType", get: function get() {
                    return d;
                } }]), l;
        })();return e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function () {
            return e.fn[t] = l, T._jQueryInterface;
        }, T;
    })(jQuery));(function (e) {
        var s = "popover",
            a = "4.0.0-alpha.2",
            l = "bs.popover",
            u = "." + l,
            h = e.fn[s],
            c = e.extend({}, o.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }),
            d = e.extend({}, o.DefaultType, { content: "(string|element|function)" }),
            f = { FADE: "fade", IN: "in" },
            _ = { TITLE: ".popover-title", CONTENT: ".popover-content", ARROW: ".popover-arrow" },
            g = { HIDE: "hide" + u, HIDDEN: "hidden" + u, SHOW: "show" + u, SHOWN: "shown" + u, INSERTED: "inserted" + u, CLICK: "click" + u, FOCUSIN: "focusin" + u, FOCUSOUT: "focusout" + u, MOUSEENTER: "mouseenter" + u, MOUSELEAVE: "mouseleave" + u },
            v = (function (o) {
            function h() {
                n(this, h), i(Object.getPrototypeOf(h.prototype), "constructor", this).apply(this, arguments);
            }return t(h, o), r(h, [{ key: "isWithContent", value: function value() {
                    return this.getTitle() || this._getContent();
                } }, { key: "getTipElement", value: function value() {
                    return this.tip = this.tip || e(this.config.template)[0];
                } }, { key: "setContent", value: function value() {
                    var t = e(this.getTipElement());this.setElementContent(t.find(_.TITLE), this.getTitle()), this.setElementContent(t.find(_.CONTENT), this._getContent()), t.removeClass(f.FADE).removeClass(f.IN), this.cleanupTether();
                } }, { key: "_getContent", value: function value() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
                } }], [{ key: "_jQueryInterface", value: function value(t) {
                    return this.each(function () {
                        var n = e(this).data(l),
                            i = "object" == typeof t ? t : null;if ((n || !/destroy|hide/.test(t)) && (n || (n = new h(this, i), e(this).data(l, n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new Error('No method named "' + t + '"');n[t]();
                        }
                    });
                } }, { key: "VERSION", get: function get() {
                    return a;
                } }, { key: "Default", get: function get() {
                    return c;
                } }, { key: "NAME", get: function get() {
                    return s;
                } }, { key: "DATA_KEY", get: function get() {
                    return l;
                } }, { key: "Event", get: function get() {
                    return g;
                } }, { key: "EVENT_KEY", get: function get() {
                    return u;
                } }, { key: "DefaultType", get: function get() {
                    return d;
                } }]), h;
        })(o);return e.fn[s] = v._jQueryInterface, e.fn[s].Constructor = v, e.fn[s].noConflict = function () {
            return e.fn[s] = h, v._jQueryInterface;
        }, v;
    })(jQuery);
})(jQuery);

