var st = Object.defineProperty;
var ot = (e, t, n) => t in e ? st(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => ot(e, typeof t != "symbol" ? t + "" : t, n);
import { reactive as it } from "vue";
function at(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ee, we;
function ct() {
  if (we) return ee;
  we = 1;
  var e = Array.prototype, t = e.join;
  function n(r, s) {
    return r == null ? "" : t.call(r, s);
  }
  return ee = n, ee;
}
var ut = ct();
const Ue = /* @__PURE__ */ at(ut);
function Be(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: lt } = Object.prototype, { getPrototypeOf: de } = Object, K = /* @__PURE__ */ ((e) => (t) => {
  const n = lt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), x = (e) => (e = e.toLowerCase(), (t) => K(t) === e), X = (e) => (t) => typeof t === e, { isArray: j } = Array, H = X("undefined");
function ft(e) {
  return e !== null && !H(e) && e.constructor !== null && !H(e.constructor) && C(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const De = x("ArrayBuffer");
function dt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && De(e.buffer), t;
}
const pt = X("string"), C = X("function"), je = X("number"), G = (e) => e !== null && typeof e == "object", ht = (e) => e === !0 || e === !1, J = (e) => {
  if (K(e) !== "object")
    return !1;
  const t = de(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, mt = x("Date"), yt = x("File"), bt = x("Blob"), wt = x("FileList"), Et = (e) => G(e) && C(e.pipe), Rt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || C(e.append) && ((t = K(e)) === "formdata" || // detect form-data instance
  t === "object" && C(e.toString) && e.toString() === "[object FormData]"));
}, St = x("URLSearchParams"), [gt, Ot, Tt, At] = ["ReadableStream", "Request", "Response", "Headers"].map(x), Ct = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function I(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), j(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function ke(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const L = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, qe = (e) => !H(e) && e !== L;
function oe() {
  const { caseless: e } = qe(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && ke(t, s) || s;
    J(t[o]) && J(r) ? t[o] = oe(t[o], r) : J(r) ? t[o] = oe({}, r) : j(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && I(arguments[r], n);
  return t;
}
const xt = (e, t, n, { allOwnKeys: r } = {}) => (I(t, (s, o) => {
  n && C(s) ? e[o] = Be(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Pt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Nt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, _t = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && de(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ft = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Lt = (e) => {
  if (!e) return null;
  if (j(e)) return e;
  let t = e.length;
  if (!je(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ut = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && de(Uint8Array)), Bt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Dt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, jt = x("HTMLFormElement"), kt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ee = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), qt = x("RegExp"), He = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  I(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ht = (e) => {
  He(e, (t, n) => {
    if (C(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (C(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, It = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return j(e) ? r(e) : r(String(e).split(t)), n;
}, Mt = () => {
}, zt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, te = "abcdefghijklmnopqrstuvwxyz", Re = "0123456789", Ie = {
  DIGIT: Re,
  ALPHA: te,
  ALPHA_DIGIT: te + te.toUpperCase() + Re
}, Jt = (e = 16, t = Ie.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function vt(e) {
  return !!(e && C(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const $t = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (G(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = j(r) ? [] : {};
        return I(r, (i, c) => {
          const f = n(i, s + 1);
          !H(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Vt = x("AsyncFunction"), Wt = (e) => e && (G(e) || C(e)) && C(e.then) && C(e.catch), Me = ((e, t) => e ? setImmediate : t ? ((n, r) => (L.addEventListener("message", ({ source: s, data: o }) => {
  s === L && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), L.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  C(L.postMessage)
), Kt = typeof queueMicrotask < "u" ? queueMicrotask.bind(L) : typeof process < "u" && process.nextTick || Me, a = {
  isArray: j,
  isArrayBuffer: De,
  isBuffer: ft,
  isFormData: Rt,
  isArrayBufferView: dt,
  isString: pt,
  isNumber: je,
  isBoolean: ht,
  isObject: G,
  isPlainObject: J,
  isReadableStream: gt,
  isRequest: Ot,
  isResponse: Tt,
  isHeaders: At,
  isUndefined: H,
  isDate: mt,
  isFile: yt,
  isBlob: bt,
  isRegExp: qt,
  isFunction: C,
  isStream: Et,
  isURLSearchParams: St,
  isTypedArray: Ut,
  isFileList: wt,
  forEach: I,
  merge: oe,
  extend: xt,
  trim: Ct,
  stripBOM: Pt,
  inherits: Nt,
  toFlatObject: _t,
  kindOf: K,
  kindOfTest: x,
  endsWith: Ft,
  toArray: Lt,
  forEachEntry: Bt,
  matchAll: Dt,
  isHTMLForm: jt,
  hasOwnProperty: Ee,
  hasOwnProp: Ee,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: He,
  freezeMethods: Ht,
  toObjectSet: It,
  toCamelCase: kt,
  noop: Mt,
  toFiniteNumber: zt,
  findKey: ke,
  global: L,
  isContextDefined: qe,
  ALPHABET: Ie,
  generateString: Jt,
  isSpecCompliantForm: vt,
  toJSONObject: $t,
  isAsyncFn: Vt,
  isThenable: Wt,
  setImmediate: Me,
  asap: Kt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ze = m.prototype, Je = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Je[e] = { value: e };
});
Object.defineProperties(m, Je);
Object.defineProperty(ze, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(ze);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Xt = null;
function ie(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ve(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Se(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ve(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Gt(e) {
  return a.isArray(e) && !e.some(ie);
}
const Qt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Q(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, h) {
    return !a.isUndefined(h[y]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, y, h) {
    let w = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && Gt(p) || (a.isFileList(p) || a.endsWith(y, "[]")) && (w = a.toArray(p)))
        return y = ve(y), w.forEach(function(g, N) {
          !(a.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Se([y], N, o) : i === null ? y : y + "[]",
            u(g)
          );
        }), !1;
    }
    return ie(p) ? !0 : (t.append(Se(h, y, o), u(p)), !1);
  }
  const d = [], b = Object.assign(Qt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: ie
  });
  function R(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), a.forEach(p, function(w, S) {
        (!(a.isUndefined(w) || w === null) && s.call(
          t,
          w,
          a.isString(S) ? S.trim() : S,
          y,
          b
        )) === !0 && R(w, y ? y.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function ge(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function pe(e, t) {
  this._pairs = [], e && Q(e, this, t);
}
const $e = pe.prototype;
$e.append = function(t, n) {
  this._pairs.push([t, n]);
};
$e.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ge);
  } : ge;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Zt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ve(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Zt;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new pe(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Oe {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const We = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yt = typeof URLSearchParams < "u" ? URLSearchParams : pe, en = typeof FormData < "u" ? FormData : null, tn = typeof Blob < "u" ? Blob : null, nn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yt,
    FormData: en,
    Blob: tn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, he = typeof window < "u" && typeof document < "u", ae = typeof navigator == "object" && navigator || void 0, rn = he && (!ae || ["ReactNative", "NativeScript", "NS"].indexOf(ae.product) < 0), sn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", on = he && window.location.href || "http://localhost", an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: he,
  hasStandardBrowserEnv: rn,
  hasStandardBrowserWebWorkerEnv: sn,
  navigator: ae,
  origin: on
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...an,
  ...nn
};
function cn(e, t) {
  return Q(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function un(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ln(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ke(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = ln(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(un(r), s, n, 0);
    }), n;
  }
  return null;
}
function fn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const M = {
  transitional: We,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Ke(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return cn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Q(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), fn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || M.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  M.headers[e] = {};
});
const dn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), pn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && dn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Te = Symbol("internals");
function q(e) {
  return e && String(e).trim().toLowerCase();
}
function v(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(v) : String(e);
}
function hn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const mn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ne(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function yn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function bn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class A {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, u) {
      const l = q(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, l);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || f] = v(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => o(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !mn(t))
      i(pn(t), n);
    else if (a.isHeaders(t))
      for (const [c, f] of t.entries())
        o(f, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = q(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return hn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = q(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ne(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = q(i), i) {
        const c = a.findKey(r, i);
        c && (!n || ne(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ne(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = v(s), delete n[o];
        return;
      }
      const c = t ? yn(o) : String(o).trim();
      c !== o && delete n[o], n[c] = v(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Te] = this[Te] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = q(i);
      r[c] || (bn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
A.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(A);
function re(e, t) {
  const n = this || M, r = t || n, s = A.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Xe(e) {
  return !!(e && e.__CANCEL__);
}
function k(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(k, m, {
  __CANCEL__: !0
});
function Ge(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function wn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function En(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let d = o, b = 0;
    for (; d !== s; )
      b += n[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const R = l && u - l;
    return R ? Math.round(b * 1e3 / R) : void 0;
  };
}
function Rn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), d = l - n;
    d >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const V = (e, t, n = 3) => {
  let r = 0;
  const s = En(50, 250);
  return Rn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), l = i <= c;
    r = i;
    const d = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Ae = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ce = (e) => (...t) => a.asap(() => e(...t)), Sn = O.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, O.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(O.origin),
  O.navigator && /(msie|trident)/i.test(O.navigator.userAgent)
) : () => !0, gn = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function On(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qe(e, t) {
  return e && !On(t) ? Tn(e, t) : t;
}
const xe = (e) => e instanceof A ? { ...e } : e;
function B(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, d, b) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: b }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, d, b) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, d, b);
    } else return r(u, l, d, b);
  }
  function o(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, d) {
    if (d in t)
      return r(u, l);
    if (d in e)
      return r(void 0, u);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l, d) => s(xe(u), xe(l), d, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = f[l] || s, b = d(e[l], t[l], l);
    a.isUndefined(b) && d !== c || (n[l] = b);
  }), n;
}
const Ze = (e) => {
  const t = B({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = A.from(i), t.url = Ve(Qe(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...l] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (O.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Sn(t.url))) {
    const u = s && o && gn.read(o);
    u && i.set(s, u);
  }
  return t;
}, An = typeof XMLHttpRequest < "u", Cn = An && function(e) {
  return new Promise(function(n, r) {
    const s = Ze(e);
    let o = s.data;
    const i = A.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, d, b, R, p;
    function y() {
      R && R(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function w() {
      if (!h)
        return;
      const g = A.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), T = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: e,
        request: h
      };
      Ge(function(F) {
        n(F), y();
      }, function(F) {
        r(F), y();
      }, T), h = null;
    }
    "onloadend" in h ? h.onloadend = w : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, h.onabort = function() {
      h && (r(new m("Request aborted", m.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const T = s.transitional || We;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), r(new m(
        N,
        T.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        h
      )), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && a.forEach(i.toJSON(), function(N, T) {
      h.setRequestHeader(T, N);
    }), a.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), c && c !== "json" && (h.responseType = s.responseType), u && ([b, p] = V(u, !0), h.addEventListener("progress", b)), f && h.upload && ([d, R] = V(f), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (l = (g) => {
      h && (r(!g || g.type ? new k(null, e, h) : g), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const S = wn(s.url);
    if (S && O.protocols.indexOf(S) === -1) {
      r(new m("Unsupported protocol " + S + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(o || null);
  });
}, xn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof m ? l : new k(l instanceof Error ? l.message : l));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(c), f;
  }
}, Pn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Nn = async function* (e, t) {
  for await (const n of _n(e))
    yield* Pn(n, t);
}, _n = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Pe = (e, t, n, r) => {
  const s = Nn(e, t);
  let o = 0, i, c = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), f.close();
          return;
        }
        let d = l.byteLength;
        if (n) {
          let b = o += d;
          n(b);
        }
        f.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(f) {
      return c(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Z = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ye = Z && typeof ReadableStream == "function", Fn = Z && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), et = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ln = Ye && et(() => {
  let e = !1;
  const t = new Request(O.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ne = 64 * 1024, ce = Ye && et(() => a.isReadableStream(new Response("").body)), W = {
  stream: ce && ((e) => e.body)
};
Z && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !W[t] && (W[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Un = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(O.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Fn(e)).byteLength;
}, Bn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? Un(t);
}, Dn = Z && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: u,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: b
  } = Ze(e);
  u = u ? (u + "").toLowerCase() : "text";
  let R = xn([s, o && o.toAbortSignal()], i), p;
  const y = R && R.unsubscribe && (() => {
    R.unsubscribe();
  });
  let h;
  try {
    if (f && Ln && n !== "get" && n !== "head" && (h = await Bn(l, r)) !== 0) {
      let T = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), _;
      if (a.isFormData(r) && (_ = T.headers.get("content-type")) && l.setContentType(_), T.body) {
        const [F, z] = Ae(
          h,
          V(Ce(f))
        );
        r = Pe(T.body, Ne, F, z);
      }
    }
    a.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    p = new Request(t, {
      ...b,
      signal: R,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let S = await fetch(p);
    const g = ce && (u === "stream" || u === "response");
    if (ce && (c || g && y)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((ye) => {
        T[ye] = S[ye];
      });
      const _ = a.toFiniteNumber(S.headers.get("content-length")), [F, z] = c && Ae(
        _,
        V(Ce(c), !0)
      ) || [];
      S = new Response(
        Pe(S.body, Ne, F, () => {
          z && z(), y && y();
        }),
        T
      );
    }
    u = u || "text";
    let N = await W[a.findKey(W, u) || "text"](S, e);
    return !g && y && y(), await new Promise((T, _) => {
      Ge(T, _, {
        data: N,
        headers: A.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: p
      });
    });
  } catch (w) {
    throw y && y(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, p),
      {
        cause: w.cause || w
      }
    ) : m.from(w, w && w.code, e, p);
  }
}), ue = {
  http: Xt,
  xhr: Cn,
  fetch: Dn
};
a.forEach(ue, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _e = (e) => `- ${e}`, jn = (e) => a.isFunction(e) || e === null || e === !1, tt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !jn(n) && (r = ue[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(_e).join(`
`) : " " + _e(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ue
};
function se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new k(null, e);
}
function Fe(e) {
  return se(e), e.headers = A.from(e.headers), e.data = re.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), tt.getAdapter(e.adapter || M.adapter)(e).then(function(r) {
    return se(e), r.data = re.call(
      e,
      e.transformResponse,
      r
    ), r.headers = A.from(r.headers), r;
  }, function(r) {
    return Xe(r) || (se(e), r && r.response && (r.response.data = re.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = A.from(r.response.headers))), Promise.reject(r);
  });
}
const nt = "1.7.9", Y = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Y[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Le = {};
Y.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + nt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Le[i] && (Le[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
Y.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function kn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const $ = {
  assertOptions: kn,
  validators: Y
}, P = $.validators;
class U {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Oe(),
      response: new Oe()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = B(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && $.assertOptions(r, {
      silentJSONParsing: P.transitional(P.boolean),
      forcedJSONParsing: P.transitional(P.boolean),
      clarifyTimeoutError: P.transitional(P.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : $.assertOptions(s, {
      encode: P.function,
      serialize: P.function
    }, !0)), $.assertOptions(n, {
      baseUrl: P.spelling("baseURL"),
      withXsrfToken: P.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = A.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, b;
    if (!f) {
      const p = [Fe.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, u), b = p.length, l = Promise.resolve(n); d < b; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    b = c.length;
    let R = n;
    for (d = 0; d < b; ) {
      const p = c[d++], y = c[d++];
      try {
        R = p(R);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      l = Fe.call(this, R);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, b = u.length; d < b; )
      l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = Qe(t.baseURL, t.url);
    return Ve(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  U.prototype[t] = function(n, r) {
    return this.request(B(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(B(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  U.prototype[t] = n(), U.prototype[t + "Form"] = n(!0);
});
class me {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new k(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new me(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function qn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Hn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const le = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(le).forEach(([e, t]) => {
  le[t] = e;
});
function rt(e) {
  const t = new U(e), n = Be(U.prototype.request, t);
  return a.extend(n, U.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return rt(B(e, s));
  }, n;
}
const E = rt(M);
E.Axios = U;
E.CanceledError = k;
E.CancelToken = me;
E.isCancel = Xe;
E.VERSION = nt;
E.toFormData = Q;
E.AxiosError = m;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = qn;
E.isAxiosError = Hn;
E.mergeConfig = B;
E.AxiosHeaders = A;
E.formToJSON = (e) => Ke(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = tt.getAdapter;
E.HttpStatusCode = le;
E.default = E;
let D, fe = "api";
function vn(e) {
  if (!e.httpClient && !e.baseURL)
    throw new Error("You must provide either a httpClient or a baseURL");
  return e.httpClient ? D = e.httpClient : D = E.create({
    withCredentials: !0,
    baseURL: e.baseURL
  }), e.apiPrefix && (fe = e.apiPrefix), e.bearerToken && (D.defaults.headers.common.Authorization = `Bearer ${e.bearerToken}`), D;
}
const In = (e, t) => {
  const n = Ue([t.apiPrefix, t.resource, e], "/");
  return new Promise((r, s) => {
    D.get(n).then((o) => {
      r(o.data);
    }).catch((o) => {
      s(o);
    });
  });
}, Mn = (e, t) => {
  const n = Ue([t.apiPrefix, t.resource, e.id], "/");
  return new Promise((r, s) => {
    D.patch(n, e).then((o) => {
      r(o.data);
    }).catch((o) => {
      s(o);
    });
  });
};
class $n {
  constructor() {
    be(this, "attributes");
    Object.defineProperty(this, "attributes", {
      value: it({}),
      writable: !0,
      configurable: !1,
      enumerable: !1
    });
  }
  create(t) {
    const n = t ?? this;
    for (const r in n)
      this.attributes[r] = n[r], Object.defineProperty(this, r, {
        get() {
          return this.attributes[r];
        },
        set(s) {
          this.hasCast(r) ? (console.log("hasCast: ", r, this.hasCast(r)), this.attributes[r] = this.castTo(this.getCast(r), r, s)) : this.attributes[r] = s;
        }
      });
  }
  async find(t) {
    try {
      const n = await In(t, {
        apiPrefix: fe,
        resource: this.resource()
      });
      return console.log("this: ", this), this.create(n.data), n.data;
    } catch (n) {
      console.error(n);
    }
  }
  async update() {
    try {
      const t = await Mn(this.attributes, {
        apiPrefix: fe,
        resource: this.resource()
      });
      return console.log("find: ", t.data), this.create(t.data), t.data;
    } catch (t) {
      console.error(t);
    }
  }
  casts() {
    return {
      created_at: "date",
      updated_at: "date",
      deleted_at: "date"
    };
  }
  hasCast(t) {
    return console.log("hasCast: ", t, Object.prototype.hasOwnProperty.call(this.casts(), t)), Object.prototype.hasOwnProperty.call(this.casts(), t);
  }
  getCast(t) {
    if (this.hasCast(t))
      return this.casts()[t];
  }
  castTo(t, n, r) {
    switch (t) {
      case "date":
        return new Date(r);
      case "number":
        return Number(r);
      default:
        return t(this, n, r, this.casts());
    }
  }
}
export {
  $n as BaseModel,
  vn as createHttp
};
//# sourceMappingURL=vue-eloquent-v2.js.map
