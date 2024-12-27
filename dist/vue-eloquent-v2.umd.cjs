(function(T,x){typeof exports=="object"&&typeof module<"u"?x(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],x):(T=typeof globalThis<"u"?globalThis:T||self,x(T.VueEloquent={},T.Vue))})(this,function(T,x){"use strict";var kn=Object.defineProperty;var qn=(T,x,k)=>x in T?kn(T,x,{enumerable:!0,configurable:!0,writable:!0,value:k}):T[x]=k;var it=(T,x,k)=>qn(T,typeof x!="symbol"?x+"":x,k);function k(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var re,Ee;function at(){if(Ee)return re;Ee=1;var e=Array.prototype,t=e.join;function r(n,s){return n==null?"":t.call(n,s)}return re=r,re}var ct=at();const Re=k(ct);function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:ut}=Object.prototype,{getPrototypeOf:se}=Object,$=(e=>t=>{const r=ut.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>$(t)===e),V=e=>t=>typeof t===e,{isArray:q}=Array,M=V("undefined");function lt(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ge=N("ArrayBuffer");function ft(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ge(e.buffer),t}const dt=V("string"),P=V("function"),Oe=V("number"),W=e=>e!==null&&typeof e=="object",pt=e=>e===!0||e===!1,K=e=>{if($(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ht=N("Date"),mt=N("File"),yt=N("Blob"),bt=N("FileList"),wt=e=>W(e)&&P(e.pipe),Et=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||P(e.append)&&((t=$(e))==="formdata"||t==="object"&&P(e.toString)&&e.toString()==="[object FormData]"))},Rt=N("URLSearchParams"),[St,gt,Ot,Tt]=["ReadableStream","Request","Response","Headers"].map(N),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function z(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),q(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function Te(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ae=e=>!M(e)&&e!==B;function oe(){const{caseless:e}=Ae(this)&&this||{},t={},r=(n,s)=>{const o=e&&Te(t,s)||s;K(t[o])&&K(n)?t[o]=oe(t[o],n):K(n)?t[o]=oe({},n):q(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&z(arguments[n],r);return t}const Ct=(e,t,r,{allOwnKeys:n}={})=>(z(t,(s,o)=>{r&&P(s)?e[o]=Se(s,r):e[o]=s},{allOwnKeys:n}),e),xt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Pt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Nt=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&se(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},_t=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Ft=e=>{if(!e)return null;if(q(e))return e;let t=e.length;if(!Oe(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Lt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),Bt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ut=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Dt=N("HTMLFormElement"),jt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ce=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),kt=N("RegExp"),xe=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};z(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},qt=e=>{xe(e,(t,r)=>{if(P(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(P(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Ht=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return q(e)?n(e):n(String(e).split(t)),r},It=()=>{},Mt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ie="abcdefghijklmnopqrstuvwxyz",Pe="0123456789",Ne={DIGIT:Pe,ALPHA:ie,ALPHA_DIGIT:ie+ie.toUpperCase()+Pe},zt=(e=16,t=Ne.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Jt(e){return!!(e&&P(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vt=e=>{const t=new Array(10),r=(n,s)=>{if(W(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=q(n)?[]:{};return z(n,(i,c)=>{const f=r(i,s+1);!M(f)&&(o[c]=f)}),t[s]=void 0,o}}return n};return r(e,0)},$t=N("AsyncFunction"),Vt=e=>e&&(W(e)||P(e))&&P(e.then)&&P(e.catch),_e=((e,t)=>e?setImmediate:t?((r,n)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===r&&n.length&&n.shift()()},!1),s=>{n.push(s),B.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",P(B.postMessage)),Wt=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||_e,a={isArray:q,isArrayBuffer:ge,isBuffer:lt,isFormData:Et,isArrayBufferView:ft,isString:dt,isNumber:Oe,isBoolean:pt,isObject:W,isPlainObject:K,isReadableStream:St,isRequest:gt,isResponse:Ot,isHeaders:Tt,isUndefined:M,isDate:ht,isFile:mt,isBlob:yt,isRegExp:kt,isFunction:P,isStream:wt,isURLSearchParams:Rt,isTypedArray:Lt,isFileList:bt,forEach:z,merge:oe,extend:Ct,trim:At,stripBOM:xt,inherits:Pt,toFlatObject:Nt,kindOf:$,kindOfTest:N,endsWith:_t,toArray:Ft,forEachEntry:Bt,matchAll:Ut,isHTMLForm:Dt,hasOwnProperty:Ce,hasOwnProp:Ce,reduceDescriptors:xe,freezeMethods:qt,toObjectSet:Ht,toCamelCase:jt,noop:It,toFiniteNumber:Mt,findKey:Te,global:B,isContextDefined:Ae,ALPHABET:Ne,generateString:zt,isSpecCompliantForm:Jt,toJSONObject:vt,isAsyncFn:$t,isThenable:Vt,setImmediate:_e,asap:Wt};function m(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Fe=m.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}}),Object.defineProperties(m,Le),Object.defineProperty(Fe,"isAxiosError",{value:!0}),m.from=(e,t,r,n,s,o)=>{const i=Object.create(Fe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Kt=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function Be(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ue(e,t,r){return e?e.concat(t).map(function(s,o){return s=Be(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function Xt(e){return a.isArray(e)&&!e.some(ae)}const Gt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const n=r.metaTokens,s=r.visitor||l,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,y,h){let w=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=n?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Xt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(w=a.toArray(p)))return y=Be(y),w.forEach(function(g,F){!(a.isUndefined(g)||g===null)&&t.append(i===!0?Ue([y],F,o):i===null?y:y+"[]",u(g))}),!1}return ae(p)?!0:(t.append(Ue(h,y,o),u(p)),!1)}const d=[],b=Object.assign(Gt,{defaultVisitor:l,convertValue:u,isVisitable:ae});function R(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(w,S){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(S)?S.trim():S,y,b))===!0&&R(w,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function De(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ce(e,t){this._pairs=[],e&&X(e,this,t)}const je=ce.prototype;je.append=function(t,r){this._pairs.push([t,r])},je.toString=function(t){const r=t?function(n){return t.call(this,n,De)}:De;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Qt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ke(e,t,r){if(!t)return e;const n=r&&r.encode||Qt;a.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new ce(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class qe{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zt={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:ce,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},ue=typeof window<"u"&&typeof document<"u",le=typeof navigator=="object"&&navigator||void 0,Yt=ue&&(!le||["ReactNative","NativeScript","NS"].indexOf(le.product)<0),en=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tn=ue&&window.location.href||"http://localhost",O={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ue,hasStandardBrowserEnv:Yt,hasStandardBrowserWebWorkerEnv:en,navigator:le,origin:tn},Symbol.toStringTag,{value:"Module"})),...Zt};function nn(e,t){return X(e,new O.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return O.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function rn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sn(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function Ie(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=sn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(rn(n),s,r,0)}),r}return null}function on(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(e)}const J={transitional:He,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return nn(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return X(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),on(t)):t}],transformResponse:[function(t){const r=this.transitional||J.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{J.headers[e]={}});const an=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cn=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&an[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Me=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function G(e){return e===!1||e==null?e:a.isArray(e)?e.map(G):String(e)}function un(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const ln=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fe(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function fn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function dn(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,f,u){const l=v(f);if(!l)throw new Error("header name must be a non-empty string");const d=a.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||f]=G(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(a.isString(t)&&(t=t.trim())&&!ln(t))i(cn(t),r);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,n);else t!=null&&o(r,t,n);return this}get(t,r){if(t=v(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return un(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=v(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||fe(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=v(i),i){const c=a.findKey(n,i);c&&(!r||fe(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||fe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=G(s),delete r[o];return}const c=t?fn(o):String(o).trim();c!==o&&delete r[o],r[c]=G(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Me]=this[Me]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=v(i);n[c]||(dn(s,i),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),a.reduceDescriptors(A.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}}),a.freezeMethods(A);function de(e,t){const r=this||J,n=t||r,s=A.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ze(e){return!!(e&&e.__CANCEL__)}function H(e,t,r){m.call(this,e??"canceled",m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(H,m,{__CANCEL__:!0});function Je(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function pn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=n[o];i||(i=u),r[s]=f,n[s]=u;let d=o,b=0;for(;d!==s;)b+=r[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const R=l&&u-l;return R?Math.round(b*1e3/R):void 0}}function mn(e,t){let r=0,n=1e3/t,s,o;const i=(u,l=Date.now())=>{r=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),d=l-r;d>=n?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},n-d)))},()=>s&&i(s)]}const Q=(e,t,r=3)=>{let n=0;const s=hn(50,250);return mn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-n,u=s(f),l=i<=c;n=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},r)},ve=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},$e=e=>(...t)=>a.asap(()=>e(...t)),yn=O.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,O.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(O.origin),O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent)):()=>!0,bn=O.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function En(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!wn(t)?En(e,t):t}const We=e=>e instanceof A?{...e}:e;function U(e,t){t=t||{};const r={};function n(u,l,d,b){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:b},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,d,b){if(a.isUndefined(l)){if(!a.isUndefined(u))return n(void 0,u,d,b)}else return n(u,l,d,b)}function o(u,l){if(!a.isUndefined(l))return n(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return n(void 0,u)}else return n(void 0,l)}function c(u,l,d){if(d in t)return n(u,l);if(d in e)return n(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l,d)=>s(We(u),We(l),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=f[l]||s,b=d(e[l],t[l],l);a.isUndefined(b)&&d!==c||(r[l]=b)}),r}const Ke=e=>{const t=U({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=ke(Ve(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(r)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[u,...l]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(O.hasStandardBrowserEnv&&(n&&a.isFunction(n)&&(n=n(t)),n||n!==!1&&yn(t.url))){const u=s&&o&&bn.read(o);u&&i.set(s,u)}return t},Rn=typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(r,n){const s=Ke(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=s,l,d,b,R,p;function y(){R&&R(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function w(){if(!h)return;const g=A.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),C={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:g,config:e,request:h};Je(function(j){r(j),y()},function(j){n(j),y()},C),h=null}"onloadend"in h?h.onloadend=w:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(w)},h.onabort=function(){h&&(n(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let F=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const C=s.transitional||He;s.timeoutErrorMessage&&(F=s.timeoutErrorMessage),n(new m(F,C.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(F,C){h.setRequestHeader(C,F)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),u&&([b,p]=Q(u,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,R]=Q(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",R)),(s.cancelToken||s.signal)&&(l=g=>{h&&(n(!g||g.type?new H(null,e,h):g),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const S=pn(s.url);if(S&&O.protocols.indexOf(S)===-1){n(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Sn=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,s;const o=function(u){if(!s){s=!0,c();const l=u instanceof Error?u:this.reason;n.abort(l instanceof m?l:new H(l instanceof Error?l.message:l))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:f}=n;return f.unsubscribe=()=>a.asap(c),f}},gn=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},On=async function*(e,t){for await(const r of Tn(e))yield*gn(r,t)},Tn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Xe=(e,t,r,n)=>{const s=On(e,t);let o=0,i,c=f=>{i||(i=!0,n&&n(f))};return new ReadableStream({async pull(f){try{const{done:u,value:l}=await s.next();if(u){c(),f.close();return}let d=l.byteLength;if(r){let b=o+=d;r(b)}f.enqueue(new Uint8Array(l))}catch(u){throw c(u),u}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Z=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ge=Z&&typeof ReadableStream=="function",An=Z&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Qe=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Cn=Ge&&Qe(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ze=64*1024,pe=Ge&&Qe(()=>a.isReadableStream(new Response("").body)),Y={stream:pe&&(e=>e.body)};Z&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Y[t]&&(Y[t]=a.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,n)})})})(new Response);const xn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await An(e)).byteLength},Pn=async(e,t)=>{const r=a.toFiniteNumber(e.getContentLength());return r??xn(t)},he={http:Kt,xhr:Rn,fetch:Z&&(async e=>{let{url:t,method:r,data:n,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:u,headers:l,withCredentials:d="same-origin",fetchOptions:b}=Ke(e);u=u?(u+"").toLowerCase():"text";let R=Sn([s,o&&o.toAbortSignal()],i),p;const y=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let h;try{if(f&&Cn&&r!=="get"&&r!=="head"&&(h=await Pn(l,n))!==0){let C=new Request(t,{method:"POST",body:n,duplex:"half"}),L;if(a.isFormData(n)&&(L=C.headers.get("content-type"))&&l.setContentType(L),C.body){const[j,ne]=ve(h,Q($e(f)));n=Xe(C.body,Ze,j,ne)}}a.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;p=new Request(t,{...b,signal:R,method:r.toUpperCase(),headers:l.normalize().toJSON(),body:n,duplex:"half",credentials:w?d:void 0});let S=await fetch(p);const g=pe&&(u==="stream"||u==="response");if(pe&&(c||g&&y)){const C={};["status","statusText","headers"].forEach(ot=>{C[ot]=S[ot]});const L=a.toFiniteNumber(S.headers.get("content-length")),[j,ne]=c&&ve(L,Q($e(c),!0))||[];S=new Response(Xe(S.body,Ze,j,()=>{ne&&ne(),y&&y()}),C)}u=u||"text";let F=await Y[a.findKey(Y,u)||"text"](S,e);return!g&&y&&y(),await new Promise((C,L)=>{Je(C,L,{data:F,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}})};a.forEach(he,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ye=e=>`- ${e}`,Nn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!Nn(r)&&(n=he[(i=String(r)).toLowerCase()],n===void 0))throw new m(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ye).join(`
`):" "+Ye(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:he};function me(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function tt(e){return me(e),e.headers=A.from(e.headers),e.data=de.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||J.adapter)(e).then(function(n){return me(e),n.data=de.call(e,e.transformResponse,n),n.headers=A.from(n.headers),n},function(n){return ze(n)||(me(e),n&&n.response&&(n.response.data=de.call(e,e.transformResponse,n.response),n.response.headers=A.from(n.response.headers))),Promise.reject(n)})}const nt="1.7.9",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const rt={};ee.transitional=function(t,r,n){function s(o,i){return"[Axios v"+nt+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!rt[i]&&(rt[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}},ee.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function _n(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const te={assertOptions:_n,validators:ee},_=te.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new qe,response:new qe}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=U(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&te.assertOptions(n,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:te.assertOptions(s,{encode:_.function,serialize:_.function},!0)),te.assertOptions(r,{baseUrl:_.spelling("baseURL"),withXsrfToken:_.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),r.headers=A.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,d=0,b;if(!f){const p=[tt.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,u),b=p.length,l=Promise.resolve(r);d<b;)l=l.then(p[d++],p[d++]);return l}b=c.length;let R=r;for(d=0;d<b;){const p=c[d++],y=c[d++];try{R=p(R)}catch(h){y.call(this,h);break}}try{l=tt.call(this,R)}catch(p){return Promise.reject(p)}for(d=0,b=u.length;d<b;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=U(this.defaults,t);const r=Ve(t.baseURL,t.url);return ke(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(r,n){return this.request(U(n||{},{method:t,url:r,data:(n||{}).data}))}}),a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request(U(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=r(),D.prototype[t+"Form"]=r(!0)});class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new H(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}function Fn(e){return function(r){return e.apply(null,r)}}function Ln(e){return a.isObject(e)&&e.isAxiosError===!0}const be={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(be).forEach(([e,t])=>{be[t]=e});function st(e){const t=new D(e),r=Se(D.prototype.request,t);return a.extend(r,D.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return st(U(e,s))},r}const E=st(J);E.Axios=D,E.CanceledError=H,E.CancelToken=ye,E.isCancel=ze,E.VERSION=nt,E.toFormData=X,E.AxiosError=m,E.Cancel=E.CanceledError,E.all=function(t){return Promise.all(t)},E.spread=Fn,E.isAxiosError=Ln,E.mergeConfig=U,E.AxiosHeaders=A,E.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e),E.getAdapter=et.getAdapter,E.HttpStatusCode=be,E.default=E;let I,we="api";function Bn(e){if(!e.httpClient&&!e.baseURL)throw new Error("You must provide either a httpClient or a baseURL");return e.httpClient?I=e.httpClient:I=E.create({withCredentials:!0,baseURL:e.baseURL}),e.apiPrefix&&(we=e.apiPrefix),e.bearerToken&&(I.defaults.headers.common.Authorization=`Bearer ${e.bearerToken}`),I}const Un=(e,t)=>{const r=Re([t.apiPrefix,t.resource,e],"/");return new Promise((n,s)=>{I.get(r).then(o=>{n(o.data)}).catch(o=>{s(o)})})},Dn=(e,t)=>{const r=Re([t.apiPrefix,t.resource,e.id],"/");return new Promise((n,s)=>{I.patch(r,e).then(o=>{n(o.data)}).catch(o=>{s(o)})})};class jn{constructor(){it(this,"attributes");Object.defineProperty(this,"attributes",{value:x.reactive({}),writable:!0,configurable:!1,enumerable:!1})}create(t){const r=t??this;for(const n in r)this.attributes[n]=r[n],Object.defineProperty(this,n,{get(){return this.attributes[n]},set(s){this.hasCast(n)?(console.log("hasCast: ",n,this.hasCast(n)),this.attributes[n]=this.castTo(this.getCast(n),n,s)):this.attributes[n]=s}})}async find(t){try{const r=await Un(t,{apiPrefix:we,resource:this.resource()});return console.log("this: ",this),this.create(r.data),r.data}catch(r){console.error(r)}}async update(){try{const t=await Dn(this.attributes,{apiPrefix:we,resource:this.resource()});return console.log("find: ",t.data),this.create(t.data),t.data}catch(t){console.error(t)}}casts(){return{created_at:"date",updated_at:"date",deleted_at:"date"}}hasCast(t){return console.log("hasCast: ",t,Object.prototype.hasOwnProperty.call(this.casts(),t)),Object.prototype.hasOwnProperty.call(this.casts(),t)}getCast(t){if(this.hasCast(t))return this.casts()[t]}castTo(t,r,n){switch(t){case"date":return new Date(n);case"number":return Number(n);default:return t(this,r,n,this.casts())}}}T.BaseModel=jn,T.createHttp=Bn,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=vue-eloquent-v2.umd.cjs.map
