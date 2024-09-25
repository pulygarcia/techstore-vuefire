(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Vd(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ze={},gi=[],yn=()=>{},ZA=()=>!1,eR=/^on[^a-z]/,su=t=>eR.test(t),$d=t=>t.startsWith("onUpdate:"),vt=Object.assign,Fd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tR=Object.prototype.hasOwnProperty,Ie=(t,e)=>tR.call(t,e),se=Array.isArray,_i=t=>iu(t)==="[object Map]",eE=t=>iu(t)==="[object Set]",ce=t=>typeof t=="function",nt=t=>typeof t=="string",ru=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",tE=t=>(je(t)||ce(t))&&ce(t.then)&&ce(t.catch),nE=Object.prototype.toString,iu=t=>nE.call(t),nR=t=>iu(t).slice(8,-1),sE=t=>iu(t)==="[object Object]",Ud=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bl=Vd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ou=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sR=/-(\w)/g,Yn=ou(t=>t.replace(sR,(e,n)=>n?n.toUpperCase():"")),rR=/\B([A-Z])/g,Ji=ou(t=>t.replace(rR,"-$1").toLowerCase()),au=ou(t=>t.charAt(0).toUpperCase()+t.slice(1)),gh=ou(t=>t?`on${au(t)}`:""),Tr=(t,e)=>!Object.is(t,e),_h=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ic=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},iR=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mg;const lf=()=>mg||(mg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jd(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=nt(s)?cR(s):jd(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(nt(t)||je(t))return t}const oR=/;(?![^(]*\))/g,aR=/:([^]+)/,lR=/\/\*[^]*?\*\//g;function cR(t){const e={};return t.replace(lR,"").split(oR).forEach(n=>{if(n){const s=n.split(aR);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function lu(t){let e="";if(nt(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const s=lu(t[n]);s&&(e+=s+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hR=Vd(uR);function rE(t){return!!t||t===""}const $5=t=>nt(t)?t:t==null?"":se(t)||je(t)&&(t.toString===nE||!ce(t.toString))?JSON.stringify(t,iE,2):String(t),iE=(t,e)=>e&&e.__v_isRef?iE(t,e.value):_i(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:eE(e)?{[`Set(${e.size})`]:[...e.values()]}:je(e)&&!se(e)&&!sE(e)?String(e):e;let Gt;class oE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Bd(t){return new oE(t)}function fR(t,e=Gt){e&&e.active&&e.effects.push(t)}function qd(){return Gt}function aE(t){Gt&&Gt.cleanups.push(t)}const Wd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lE=t=>(t.w&qs)>0,cE=t=>(t.n&qs)>0,dR=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qs},pR=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];lE(r)&&!cE(r)?r.delete(t):e[n++]=r,r.w&=~qs,r.n&=~qs}e.length=n}},oc=new WeakMap;let ko=0,qs=1;const cf=30;let hn;const gr=Symbol(""),uf=Symbol("");class Hd{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fR(this,s)}run(){if(!this.active)return this.fn();let e=hn,n=Vs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,Vs=!0,qs=1<<++ko,ko<=cf?dR(this):gg(this),this.fn()}finally{ko<=cf&&pR(this),qs=1<<--ko,hn=this.parent,Vs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(gg(this),this.onStop&&this.onStop(),this.active=!1)}}function gg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vs=!0;const uE=[];function Zi(){uE.push(Vs),Vs=!1}function eo(){const t=uE.pop();Vs=t===void 0?!0:t}function Ht(t,e,n){if(Vs&&hn){let s=oc.get(t);s||oc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Wd()),hE(r)}}function hE(t,e){let n=!1;ko<=cf?cE(t)||(t.n|=qs,n=!lE(t)):n=!t.has(hn),n&&(t.add(hn),hn.deps.push(t))}function cs(t,e,n,s,r,i){const o=oc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!ru(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?Ud(n)&&a.push(o.get("length")):(a.push(o.get(gr)),_i(t)&&a.push(o.get(uf)));break;case"delete":se(t)||(a.push(o.get(gr)),_i(t)&&a.push(o.get(uf)));break;case"set":_i(t)&&a.push(o.get(gr));break}if(a.length===1)a[0]&&hf(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);hf(Wd(l))}}function hf(t,e){const n=se(t)?t:[...t];for(const s of n)s.computed&&_g(s);for(const s of n)s.computed||_g(s)}function _g(t,e){(t!==hn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function mR(t,e){var n;return(n=oc.get(t))==null?void 0:n.get(e)}const gR=Vd("__proto__,__v_isRef,__isVue"),fE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ru)),yg=_R();function _R(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=be(this);for(let i=0,o=this.length;i<o;i++)Ht(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(be)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zi();const s=be(this)[e].apply(this,n);return eo(),s}}),t}function yR(t){const e=be(this);return Ht(e,"has",t),e.hasOwnProperty(t)}class dE{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&s===(r?i?NR:_E:i?gE:mE).get(e))return e;const o=se(e);if(!r){if(o&&Ie(yg,n))return Reflect.get(yg,n,s);if(n==="hasOwnProperty")return yR}const a=Reflect.get(e,n,s);return(ru(n)?fE.has(n):gR(n))||(r||Ht(e,"get",n),i)?a:Me(a)?o&&Ud(n)?a:a.value:je(a)?r?vE(a):$n(a):a}}class pE extends dE{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(ki(i)&&Me(i)&&!Me(s))return!1;if(!this._shallow&&(!ac(s)&&!ki(s)&&(i=be(i),s=be(s)),!se(e)&&Me(i)&&!Me(s)))return i.value=s,!0;const o=se(e)&&Ud(n)?Number(n)<e.length:Ie(e,n),a=Reflect.set(e,n,s,r);return e===be(r)&&(o?Tr(s,i)&&cs(e,"set",n,s):cs(e,"add",n,s)),a}deleteProperty(e,n){const s=Ie(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&cs(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!ru(n)||!fE.has(n))&&Ht(e,"has",n),s}ownKeys(e){return Ht(e,"iterate",se(e)?"length":gr),Reflect.ownKeys(e)}}class vR extends dE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ER=new pE,wR=new vR,TR=new pE(!0),zd=t=>t,cu=t=>Reflect.getPrototypeOf(t);function _l(t,e,n=!1,s=!1){t=t.__v_raw;const r=be(t),i=be(e);n||(Tr(e,i)&&Ht(r,"get",e),Ht(r,"get",i));const{has:o}=cu(r),a=s?zd:n?Qd:la;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function yl(t,e=!1){const n=this.__v_raw,s=be(n),r=be(t);return e||(Tr(t,r)&&Ht(s,"has",t),Ht(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function vl(t,e=!1){return t=t.__v_raw,!e&&Ht(be(t),"iterate",gr),Reflect.get(t,"size",t)}function vg(t){t=be(t);const e=be(this);return cu(e).has.call(e,t)||(e.add(t),cs(e,"add",t,t)),this}function Eg(t,e){e=be(e);const n=be(this),{has:s,get:r}=cu(n);let i=s.call(n,t);i||(t=be(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Tr(e,o)&&cs(n,"set",t,e):cs(n,"add",t,e),this}function wg(t){const e=be(this),{has:n,get:s}=cu(e);let r=n.call(e,t);r||(t=be(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&cs(e,"delete",t,void 0),i}function Tg(){const t=be(this),e=t.size!==0,n=t.clear();return e&&cs(t,"clear",void 0,void 0),n}function El(t,e){return function(s,r){const i=this,o=i.__v_raw,a=be(o),l=e?zd:t?Qd:la;return!t&&Ht(a,"iterate",gr),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function wl(t,e,n){return function(...s){const r=this.__v_raw,i=be(r),o=_i(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?zd:e?Qd:la;return!e&&Ht(i,"iterate",l?uf:gr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function As(t){return function(...e){return t==="delete"?!1:this}}function IR(){const t={get(i){return _l(this,i)},get size(){return vl(this)},has:yl,add:vg,set:Eg,delete:wg,clear:Tg,forEach:El(!1,!1)},e={get(i){return _l(this,i,!1,!0)},get size(){return vl(this)},has:yl,add:vg,set:Eg,delete:wg,clear:Tg,forEach:El(!1,!0)},n={get(i){return _l(this,i,!0)},get size(){return vl(this,!0)},has(i){return yl.call(this,i,!0)},add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear"),forEach:El(!0,!1)},s={get(i){return _l(this,i,!0,!0)},get size(){return vl(this,!0)},has(i){return yl.call(this,i,!0)},add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear"),forEach:El(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wl(i,!1,!1),n[i]=wl(i,!0,!1),e[i]=wl(i,!1,!0),s[i]=wl(i,!0,!0)}),[t,n,e,s]}const[bR,AR,RR,CR]=IR();function Kd(t,e){const n=e?t?CR:RR:t?AR:bR;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ie(n,r)&&r in s?n:s,r,i)}const SR={get:Kd(!1,!1)},PR={get:Kd(!1,!0)},kR={get:Kd(!0,!1)},mE=new WeakMap,gE=new WeakMap,_E=new WeakMap,NR=new WeakMap;function OR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xR(t){return t.__v_skip||!Object.isExtensible(t)?0:OR(nR(t))}function $n(t){return ki(t)?t:Gd(t,!1,ER,SR,mE)}function yE(t){return Gd(t,!1,TR,PR,gE)}function vE(t){return Gd(t,!0,wR,kR,_E)}function Gd(t,e,n,s,r){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=xR(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Hn(t){return ki(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function ki(t){return!!(t&&t.__v_isReadonly)}function ac(t){return!!(t&&t.__v_isShallow)}function EE(t){return Hn(t)||ki(t)}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function Lr(t){return ic(t,"__v_skip",!0),t}const la=t=>je(t)?$n(t):t,Qd=t=>je(t)?vE(t):t;function wE(t){Vs&&hn&&(t=be(t),hE(t.dep||(t.dep=Wd())))}function Yd(t,e){t=be(t);const n=t.dep;n&&hf(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Ke(t){return IE(t,!1)}function TE(t){return IE(t,!0)}function IE(t,e){return Me(t)?t:new DR(t,e)}class DR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:be(e),this._value=n?e:la(e)}get value(){return wE(this),this._value}set value(e){const n=this.__v_isShallow||ac(e)||ki(e);e=n?e:be(e),Tr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:la(e),Yd(this))}}function Tl(t){Yd(t)}function qt(t){return Me(t)?t.value:t}function ts(t){return ce(t)?t():qt(t)}const MR={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function bE(t){return Hn(t)?t:new Proxy(t,MR)}function LR(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=AE(t,n);return e}class VR{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mR(be(this._object),this._key)}}class $R{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function FR(t,e,n){return Me(t)?t:ce(t)?new $R(t):je(t)&&arguments.length>1?AE(t,e,n):Ke(t)}function AE(t,e,n){const s=t[e];return Me(s)?s:new VR(t,e,n)}class UR{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Hd(e,()=>{this._dirty||(this._dirty=!0,Yd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=be(this);return wE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function jR(t,e,n=!1){let s,r;const i=ce(t);return i?(s=t,r=yn):(s=t.get,r=t.set),new UR(s,r,i||!r,n)}function $s(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){uu(i,e,n)}return r}function vn(t,e,n,s){if(ce(t)){const i=$s(t,e,n,s);return i&&tE(i)&&i.catch(o=>{uu(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(vn(t[i],e,n,s));return r}function uu(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){$s(l,null,10,[t,o,a]);return}}BR(t,n,r,s)}function BR(t,e,n,s=!0){console.error(t)}let ca=!1,ff=!1;const Ct=[];let Ln=0;const yi=[];let ns=null,cr=0;const RE=Promise.resolve();let Xd=null;function hu(t){const e=Xd||RE;return t?e.then(this?t.bind(this):t):e}function qR(t){let e=Ln+1,n=Ct.length;for(;e<n;){const s=e+n>>>1,r=Ct[s],i=ua(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function Jd(t){(!Ct.length||!Ct.includes(t,ca&&t.allowRecurse?Ln+1:Ln))&&(t.id==null?Ct.push(t):Ct.splice(qR(t.id),0,t),CE())}function CE(){!ca&&!ff&&(ff=!0,Xd=RE.then(PE))}function WR(t){const e=Ct.indexOf(t);e>Ln&&Ct.splice(e,1)}function HR(t){se(t)?yi.push(...t):(!ns||!ns.includes(t,t.allowRecurse?cr+1:cr))&&yi.push(t),CE()}function Ig(t,e=ca?Ln+1:0){for(;e<Ct.length;e++){const n=Ct[e];n&&n.pre&&(Ct.splice(e,1),e--,n())}}function SE(t){if(yi.length){const e=[...new Set(yi)];if(yi.length=0,ns){ns.push(...e);return}for(ns=e,ns.sort((n,s)=>ua(n)-ua(s)),cr=0;cr<ns.length;cr++)ns[cr]();ns=null,cr=0}}const ua=t=>t.id==null?1/0:t.id,zR=(t,e)=>{const n=ua(t)-ua(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function PE(t){ff=!1,ca=!0,Ct.sort(zR);const e=yn;try{for(Ln=0;Ln<Ct.length;Ln++){const n=Ct[Ln];n&&n.active!==!1&&$s(n,null,14)}}finally{Ln=0,Ct.length=0,SE(),ca=!1,Xd=null,(Ct.length||yi.length)&&PE()}}function KR(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ze;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ze;f&&(r=n.map(d=>nt(d)?d.trim():d)),h&&(r=n.map(iR))}let a,l=s[a=gh(e)]||s[a=gh(Yn(e))];!l&&i&&(l=s[a=gh(Ji(e))]),l&&vn(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vn(c,t,6,r)}}function kE(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ce(t)){const l=c=>{const u=kE(c,e,!0);u&&(a=!0,vt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(je(t)&&s.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):vt(o,i),je(t)&&s.set(t,o),o)}function fu(t,e){return!t||!su(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Ji(e))||Ie(t,e))}let Yt=null,du=null;function lc(t){const e=Yt;return Yt=t,du=t&&t.type.__scopeId||null,e}function F5(t){du=t}function U5(){du=null}function ir(t,e=Yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Mg(-1);const i=lc(e);let o;try{o=t(...r)}finally{lc(i),s._d&&Mg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function yh(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:p}=t;let g,v;const T=lc(t);try{if(n.shapeFlag&4){const w=r||s;g=Mn(u.call(w,w,h,i,d,f,m)),v=l}else{const w=e;g=Mn(w.length>1?w(i,{attrs:l,slots:a,emit:c}):w(i,null)),v=e.props?l:GR(l)}}catch(w){zo.length=0,uu(w,t,1),g=xe(Ir)}let I=g;if(v&&p!==!1){const w=Object.keys(v),{shapeFlag:N}=I;w.length&&N&7&&(o&&w.some($d)&&(v=QR(v,o)),I=Ni(I,v))}return n.dirs&&(I=Ni(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),g=I,lc(T),g}const GR=t=>{let e;for(const n in t)(n==="class"||n==="style"||su(n))&&((e||(e={}))[n]=t[n]);return e},QR=(t,e)=>{const n={};for(const s in t)(!$d(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function YR(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?bg(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!fu(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bg(s,o,c):!0:!!o;return!1}function bg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!fu(n,i))return!0}return!1}function XR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const NE="components";function JR(t,e){return eC(NE,t,!0,e)||t}const ZR=Symbol.for("v-ndc");function eC(t,e,n=!0,s=!1){const r=Yt||st;if(r){const i=r.type;if(t===NE){const a=zC(i,!1);if(a&&(a===e||a===Yn(e)||a===au(Yn(e))))return i}const o=Ag(r[t]||i[t],e)||Ag(r.appContext[t],e);return!o&&s?i:o}}function Ag(t,e){return t&&(t[e]||t[Yn(e)]||t[au(Yn(e))])}const tC=t=>t.__isSuspense;function nC(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):HR(t)}function ss(t,e){return Zd(t,null,e)}const Il={};function En(t,e,n){return Zd(t,e,n)}function Zd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ze){var a;const l=qd()===((a=st)==null?void 0:a.scope)?st:null;let c,u=!1,h=!1;if(Me(t)?(c=()=>t.value,u=ac(t)):Hn(t)?(c=()=>t,s=!0):se(t)?(h=!0,u=t.some(w=>Hn(w)||ac(w)),c=()=>t.map(w=>{if(Me(w))return w.value;if(Hn(w))return ci(w);if(ce(w))return $s(w,l,2)})):ce(t)?e?c=()=>$s(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),vn(t,l,3,[d])}:c=yn,e&&s){const w=c;c=()=>ci(w())}let f,d=w=>{f=T.onStop=()=>{$s(w,l,4)}},m;if(da)if(d=yn,e?n&&vn(e,l,3,[c(),h?[]:void 0,d]):c(),r==="sync"){const w=QC();m=w.__watcherHandles||(w.__watcherHandles=[])}else return yn;let p=h?new Array(t.length).fill(Il):Il;const g=()=>{if(T.active)if(e){const w=T.run();(s||u||(h?w.some((N,b)=>Tr(N,p[b])):Tr(w,p)))&&(f&&f(),vn(e,l,3,[w,p===Il?void 0:h&&p[0]===Il?[]:p,d]),p=w)}else T.run()};g.allowRecurse=!!e;let v;r==="sync"?v=g:r==="post"?v=()=>jt(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),v=()=>Jd(g));const T=new Hd(c,v);e?n?g():p=T.run():r==="post"?jt(T.run.bind(T),l&&l.suspense):T.run();const I=()=>{T.stop(),l&&l.scope&&Fd(l.scope.effects,T)};return m&&m.push(I),I}function sC(t,e,n){const s=this.proxy,r=nt(t)?t.includes(".")?OE(s,t):()=>s[t]:t.bind(s,s);let i;ce(e)?i=e:(i=e.handler,n=e);const o=st;xi(this);const a=Zd(r,i.bind(s),n);return o?xi(o):_r(),a}function OE(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ci(t,e){if(!je(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))ci(t.value,e);else if(se(t))for(let n=0;n<t.length;n++)ci(t[n],e);else if(eE(t)||_i(t))t.forEach(n=>{ci(n,e)});else if(sE(t))for(const n in t)ci(t[n],e);return t}function sr(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Zi(),vn(l,n,8,[t.el,a,t,e]),eo())}}/*! #__NO_SIDE_EFFECTS__ */function pu(t,e){return ce(t)?(()=>vt({name:t.name},e,{setup:t}))():t}const ql=t=>!!t.type.__asyncLoader,xE=t=>t.type.__isKeepAlive;function rC(t,e){DE(t,"a",e)}function iC(t,e){DE(t,"da",e)}function DE(t,e,n=st){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(mu(e,s,n),n){let r=n.parent;for(;r&&r.parent;)xE(r.parent.vnode)&&oC(s,e,n,r),r=r.parent}}function oC(t,e,n,s){const r=mu(e,t,s,!0);ep(()=>{Fd(s[e],r)},n)}function mu(t,e,n=st,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zi(),xi(n);const a=vn(e,n,t,o);return _r(),eo(),a});return s?r.unshift(i):r.push(i),i}}const Is=t=>(e,n=st)=>(!da||t==="sp")&&mu(t,(...s)=>e(...s),n),aC=Is("bm"),ME=Is("m"),lC=Is("bu"),cC=Is("u"),LE=Is("bum"),ep=Is("um"),VE=Is("sp"),uC=Is("rtg"),hC=Is("rtc");function fC(t,e=st){mu("ec",t,e)}function j5(t,e,n,s){let r;const i=n&&n[s];if(se(t)||nt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(je(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const df=t=>t?QE(t)?op(t)||t.proxy:df(t.parent):null,qo=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>df(t.parent),$root:t=>df(t.root),$emit:t=>t.emit,$options:t=>tp(t),$forceUpdate:t=>t.f||(t.f=()=>Jd(t.update)),$nextTick:t=>t.n||(t.n=hu.bind(t.proxy)),$watch:t=>sC.bind(t)}),vh=(t,e)=>t!==ze&&!t.__isScriptSetup&&Ie(t,e),dC={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(vh(s,e))return o[e]=1,s[e];if(r!==ze&&Ie(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ie(c,e))return o[e]=3,i[e];if(n!==ze&&Ie(n,e))return o[e]=4,n[e];pf&&(o[e]=0)}}const u=qo[e];let h,f;if(u)return e==="$attrs"&&Ht(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ze&&Ie(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return vh(r,e)?(r[e]=n,!0):s!==ze&&Ie(s,e)?(s[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ze&&Ie(t,o)||vh(e,o)||(a=i[0])&&Ie(a,o)||Ie(s,o)||Ie(qo,o)||Ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rg(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pf=!0;function pC(t){const e=tp(t),n=t.proxy,s=t.ctx;pf=!1,e.beforeCreate&&Cg(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:p,deactivated:g,beforeDestroy:v,beforeUnmount:T,destroyed:I,unmounted:w,render:N,renderTracked:b,renderTriggered:R,errorCaptured:E,serverPrefetch:C,expose:V,inheritAttrs:B,components:he,directives:Z,filters:He}=e;if(c&&mC(c,s,null),o)for(const oe in o){const de=o[oe];ce(de)&&(s[oe]=de.bind(n))}if(r){const oe=r.call(n,n);je(oe)&&(t.data=$n(oe))}if(pf=!0,i)for(const oe in i){const de=i[oe],rt=ce(de)?de.bind(n,n):ce(de.get)?de.get.bind(n,n):yn,zt=!ce(de)&&ce(de.set)?de.set.bind(n):yn,Et=dt({get:rt,set:zt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Ft=>Et.value=Ft})}if(a)for(const oe in a)$E(a[oe],s,n,oe);if(l){const oe=ce(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(de=>{Wo(de,oe[de])})}u&&Cg(u,t,"c");function K(oe,de){se(de)?de.forEach(rt=>oe(rt.bind(n))):de&&oe(de.bind(n))}if(K(aC,h),K(ME,f),K(lC,d),K(cC,m),K(rC,p),K(iC,g),K(fC,E),K(hC,b),K(uC,R),K(LE,T),K(ep,w),K(VE,C),se(V))if(V.length){const oe=t.exposed||(t.exposed={});V.forEach(de=>{Object.defineProperty(oe,de,{get:()=>n[de],set:rt=>n[de]=rt})})}else t.exposed||(t.exposed={});N&&t.render===yn&&(t.render=N),B!=null&&(t.inheritAttrs=B),he&&(t.components=he),Z&&(t.directives=Z)}function mC(t,e,n=yn){se(t)&&(t=mf(t));for(const s in t){const r=t[s];let i;je(r)?"default"in r?i=gt(r.from||s,r.default,!0):i=gt(r.from||s):i=gt(r),Me(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Cg(t,e,n){vn(se(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function $E(t,e,n,s){const r=s.includes(".")?OE(n,s):()=>n[s];if(nt(t)){const i=e[t];ce(i)&&En(r,i)}else if(ce(t))En(r,t.bind(n));else if(je(t))if(se(t))t.forEach(i=>$E(i,e,n,s));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&En(r,i,t)}}function tp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>cc(l,c,o,!0)),cc(l,e,o)),je(e)&&i.set(e,l),l}function cc(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&cc(t,i,n,!0),r&&r.forEach(o=>cc(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=gC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gC={data:Sg,props:Pg,emits:Pg,methods:No,computed:No,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:No,directives:No,watch:yC,provide:Sg,inject:_C};function Sg(t,e){return e?t?function(){return vt(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function _C(t,e){return No(mf(t),mf(e))}function mf(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function No(t,e){return t?vt(Object.create(null),t,e):e}function Pg(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:vt(Object.create(null),Rg(t),Rg(e??{})):e}function yC(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const s in e)n[s]=Dt(t[s],e[s]);return n}function FE(){return{app:null,config:{isNativeTag:ZA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vC=0;function EC(t,e){return function(s,r=null){ce(s)||(s=vt({},s)),r!=null&&!je(r)&&(r=null);const i=FE(),o=new WeakSet;let a=!1;const l=i.app={_uid:vC++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:YC,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ce(c.install)?(o.add(c),c.install(l,...u)):ce(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=xe(s,r);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,op(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ha=l;try{return c()}finally{ha=null}}};return l}}let ha=null;function Wo(t,e){if(st){let n=st.provides;const s=st.parent&&st.parent.provides;s===n&&(n=st.provides=Object.create(s)),n[t]=e}}function gt(t,e,n=!1){const s=st||Yt;if(s||ha){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ha._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ce(e)?e.call(s&&s.proxy):e}}function wC(){return!!(st||Yt||ha)}function TC(t,e,n,s=!1){const r={},i={};ic(i,_u,1),t.propsDefaults=Object.create(null),UE(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:yE(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function IC(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=be(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(fu(t.emitsOptions,f))continue;const d=e[f];if(l)if(Ie(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const m=Yn(f);r[m]=gf(l,a,m,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{UE(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!Ie(e,h)&&((u=Ji(h))===h||!Ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=gf(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Ie(e,h))&&(delete i[h],c=!0)}c&&cs(t,"set","$attrs")}function UE(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bl(l))continue;const c=e[l];let u;r&&Ie(r,u=Yn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:fu(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=be(n),c=a||ze;for(let u=0;u<i.length;u++){const h=i[u];n[h]=gf(r,l,h,c[h],t,!Ie(c,h))}}return o}function gf(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ce(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(xi(r),s=c[n]=l.call(null,e),_r())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ji(n))&&(s=!0))}return s}function jE(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!ce(t)){const u=h=>{l=!0;const[f,d]=jE(h,e,!0);vt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return je(t)&&s.set(t,gi),gi;if(se(i))for(let u=0;u<i.length;u++){const h=Yn(i[u]);kg(h)&&(o[h]=ze)}else if(i)for(const u in i){const h=Yn(u);if(kg(h)){const f=i[u],d=o[h]=se(f)||ce(f)?{type:f}:vt({},f);if(d){const m=xg(Boolean,d.type),p=xg(String,d.type);d[0]=m>-1,d[1]=p<0||m<p,(m>-1||Ie(d,"default"))&&a.push(h)}}}const c=[o,a];return je(t)&&s.set(t,c),c}function kg(t){return t[0]!=="$"}function Ng(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Og(t,e){return Ng(t)===Ng(e)}function xg(t,e){return se(e)?e.findIndex(n=>Og(n,t)):ce(e)&&Og(e,t)?0:-1}const BE=t=>t[0]==="_"||t==="$stable",np=t=>se(t)?t.map(Mn):[Mn(t)],bC=(t,e,n)=>{if(e._n)return e;const s=ir((...r)=>np(e(...r)),n);return s._c=!1,s},qE=(t,e,n)=>{const s=t._ctx;for(const r in t){if(BE(r))continue;const i=t[r];if(ce(i))e[r]=bC(r,i,s);else if(i!=null){const o=np(i);e[r]=()=>o}}},WE=(t,e)=>{const n=np(e);t.slots.default=()=>n},AC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=be(e),ic(e,"_",n)):qE(e,t.slots={})}else t.slots={},e&&WE(t,e);ic(t.slots,_u,1)},RC=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ze;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(vt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,qE(e,r)),o=e}else e&&(WE(t,e),o={default:1});if(i)for(const a in r)!BE(a)&&o[a]==null&&delete r[a]};function _f(t,e,n,s,r=!1){if(se(t)){t.forEach((f,d)=>_f(f,e&&(se(e)?e[d]:e),n,s,r));return}if(ql(s)&&!r)return;const i=s.shapeFlag&4?op(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ze?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,Ie(h,c)&&(h[c]=null)):Me(c)&&(c.value=null)),ce(l))$s(l,a,12,[o,u]);else{const f=nt(l),d=Me(l);if(f||d){const m=()=>{if(t.f){const p=f?Ie(h,l)?h[l]:u[l]:l.value;r?se(p)&&Fd(p,i):se(p)?p.includes(i)||p.push(i):f?(u[l]=[i],Ie(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Ie(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,jt(m,n)):m()}}}const jt=nC;function CC(t){return SC(t)}function SC(t,e){const n=lf();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=yn,insertStaticContent:m}=t,p=(_,y,A,S=null,O=null,x=null,q=!1,L=null,$=!!y.dynamicChildren)=>{if(_===y)return;_&&!Eo(_,y)&&(S=P(_),Ft(_,O,x,!0),_=null),y.patchFlag===-2&&($=!1,y.dynamicChildren=null);const{type:M,ref:X,shapeFlag:G}=y;switch(M){case gu:g(_,y,A,S);break;case Ir:v(_,y,A,S);break;case Wl:_==null&&T(y,A,S,q);break;case Dn:he(_,y,A,S,O,x,q,L,$);break;default:G&1?N(_,y,A,S,O,x,q,L,$):G&6?Z(_,y,A,S,O,x,q,L,$):(G&64||G&128)&&M.process(_,y,A,S,O,x,q,L,$,F)}X!=null&&O&&_f(X,_&&_.ref,x,y||_,!y)},g=(_,y,A,S)=>{if(_==null)s(y.el=a(y.children),A,S);else{const O=y.el=_.el;y.children!==_.children&&c(O,y.children)}},v=(_,y,A,S)=>{_==null?s(y.el=l(y.children||""),A,S):y.el=_.el},T=(_,y,A,S)=>{[_.el,_.anchor]=m(_.children,y,A,S,_.el,_.anchor)},I=({el:_,anchor:y},A,S)=>{let O;for(;_&&_!==y;)O=f(_),s(_,A,S),_=O;s(y,A,S)},w=({el:_,anchor:y})=>{let A;for(;_&&_!==y;)A=f(_),r(_),_=A;r(y)},N=(_,y,A,S,O,x,q,L,$)=>{q=q||y.type==="svg",_==null?b(y,A,S,O,x,q,L,$):C(_,y,O,x,q,L,$)},b=(_,y,A,S,O,x,q,L)=>{let $,M;const{type:X,props:G,shapeFlag:J,transition:le,dirs:pe}=_;if($=_.el=o(_.type,x,G&&G.is,G),J&8?u($,_.children):J&16&&E(_.children,$,null,S,O,x&&X!=="foreignObject",q,L),pe&&sr(_,null,S,"created"),R($,_,_.scopeId,q,S),G){for(const ke in G)ke!=="value"&&!Bl(ke)&&i($,ke,null,G[ke],x,_.children,S,O,wt);"value"in G&&i($,"value",null,G.value),(M=G.onVnodeBeforeMount)&&On(M,S,_)}pe&&sr(_,null,S,"beforeMount");const De=PC(O,le);De&&le.beforeEnter($),s($,y,A),((M=G&&G.onVnodeMounted)||De||pe)&&jt(()=>{M&&On(M,S,_),De&&le.enter($),pe&&sr(_,null,S,"mounted")},O)},R=(_,y,A,S,O)=>{if(A&&d(_,A),S)for(let x=0;x<S.length;x++)d(_,S[x]);if(O){let x=O.subTree;if(y===x){const q=O.vnode;R(_,q,q.scopeId,q.slotScopeIds,O.parent)}}},E=(_,y,A,S,O,x,q,L,$=0)=>{for(let M=$;M<_.length;M++){const X=_[M]=L?Ps(_[M]):Mn(_[M]);p(null,X,y,A,S,O,x,q,L)}},C=(_,y,A,S,O,x,q)=>{const L=y.el=_.el;let{patchFlag:$,dynamicChildren:M,dirs:X}=y;$|=_.patchFlag&16;const G=_.props||ze,J=y.props||ze;let le;A&&rr(A,!1),(le=J.onVnodeBeforeUpdate)&&On(le,A,y,_),X&&sr(y,_,A,"beforeUpdate"),A&&rr(A,!0);const pe=O&&y.type!=="foreignObject";if(M?V(_.dynamicChildren,M,L,A,S,pe,x):q||de(_,y,L,null,A,S,pe,x,!1),$>0){if($&16)B(L,y,G,J,A,S,O);else if($&2&&G.class!==J.class&&i(L,"class",null,J.class,O),$&4&&i(L,"style",G.style,J.style,O),$&8){const De=y.dynamicProps;for(let ke=0;ke<De.length;ke++){const Xe=De[ke],cn=G[Xe],Yr=J[Xe];(Yr!==cn||Xe==="value")&&i(L,Xe,cn,Yr,O,_.children,A,S,wt)}}$&1&&_.children!==y.children&&u(L,y.children)}else!q&&M==null&&B(L,y,G,J,A,S,O);((le=J.onVnodeUpdated)||X)&&jt(()=>{le&&On(le,A,y,_),X&&sr(y,_,A,"updated")},S)},V=(_,y,A,S,O,x,q)=>{for(let L=0;L<y.length;L++){const $=_[L],M=y[L],X=$.el&&($.type===Dn||!Eo($,M)||$.shapeFlag&70)?h($.el):A;p($,M,X,null,S,O,x,q,!0)}},B=(_,y,A,S,O,x,q)=>{if(A!==S){if(A!==ze)for(const L in A)!Bl(L)&&!(L in S)&&i(_,L,A[L],null,q,y.children,O,x,wt);for(const L in S){if(Bl(L))continue;const $=S[L],M=A[L];$!==M&&L!=="value"&&i(_,L,M,$,q,y.children,O,x,wt)}"value"in S&&i(_,"value",A.value,S.value)}},he=(_,y,A,S,O,x,q,L,$)=>{const M=y.el=_?_.el:a(""),X=y.anchor=_?_.anchor:a("");let{patchFlag:G,dynamicChildren:J,slotScopeIds:le}=y;le&&(L=L?L.concat(le):le),_==null?(s(M,A,S),s(X,A,S),E(y.children,A,X,O,x,q,L,$)):G>0&&G&64&&J&&_.dynamicChildren?(V(_.dynamicChildren,J,A,O,x,q,L),(y.key!=null||O&&y===O.subTree)&&sp(_,y,!0)):de(_,y,A,X,O,x,q,L,$)},Z=(_,y,A,S,O,x,q,L,$)=>{y.slotScopeIds=L,_==null?y.shapeFlag&512?O.ctx.activate(y,A,S,q,$):He(y,A,S,O,x,q,$):Oe(_,y,$)},He=(_,y,A,S,O,x,q)=>{const L=_.component=jC(_,S,O);if(xE(_)&&(L.ctx.renderer=F),BC(L),L.asyncDep){if(O&&O.registerDep(L,K),!_.el){const $=L.subTree=xe(Ir);v(null,$,y,A)}return}K(L,_,y,A,O,x,q)},Oe=(_,y,A)=>{const S=y.component=_.component;if(YR(_,y,A))if(S.asyncDep&&!S.asyncResolved){oe(S,y,A);return}else S.next=y,WR(S.update),S.update();else y.el=_.el,S.vnode=y},K=(_,y,A,S,O,x,q)=>{const L=()=>{if(_.isMounted){let{next:X,bu:G,u:J,parent:le,vnode:pe}=_,De=X,ke;rr(_,!1),X?(X.el=pe.el,oe(_,X,q)):X=pe,G&&_h(G),(ke=X.props&&X.props.onVnodeBeforeUpdate)&&On(ke,le,X,pe),rr(_,!0);const Xe=yh(_),cn=_.subTree;_.subTree=Xe,p(cn,Xe,h(cn.el),P(cn),_,O,x),X.el=Xe.el,De===null&&XR(_,Xe.el),J&&jt(J,O),(ke=X.props&&X.props.onVnodeUpdated)&&jt(()=>On(ke,le,X,pe),O)}else{let X;const{el:G,props:J}=y,{bm:le,m:pe,parent:De}=_,ke=ql(y);if(rr(_,!1),le&&_h(le),!ke&&(X=J&&J.onVnodeBeforeMount)&&On(X,De,y),rr(_,!0),G&&Re){const Xe=()=>{_.subTree=yh(_),Re(G,_.subTree,_,O,null)};ke?y.type.__asyncLoader().then(()=>!_.isUnmounted&&Xe()):Xe()}else{const Xe=_.subTree=yh(_);p(null,Xe,A,S,_,O,x),y.el=Xe.el}if(pe&&jt(pe,O),!ke&&(X=J&&J.onVnodeMounted)){const Xe=y;jt(()=>On(X,De,Xe),O)}(y.shapeFlag&256||De&&ql(De.vnode)&&De.vnode.shapeFlag&256)&&_.a&&jt(_.a,O),_.isMounted=!0,y=A=S=null}},$=_.effect=new Hd(L,()=>Jd(M),_.scope),M=_.update=()=>$.run();M.id=_.uid,rr(_,!0),M()},oe=(_,y,A)=>{y.component=_;const S=_.vnode.props;_.vnode=y,_.next=null,IC(_,y.props,S,A),RC(_,y.children,A),Zi(),Ig(),eo()},de=(_,y,A,S,O,x,q,L,$=!1)=>{const M=_&&_.children,X=_?_.shapeFlag:0,G=y.children,{patchFlag:J,shapeFlag:le}=y;if(J>0){if(J&128){zt(M,G,A,S,O,x,q,L,$);return}else if(J&256){rt(M,G,A,S,O,x,q,L,$);return}}le&8?(X&16&&wt(M,O,x),G!==M&&u(A,G)):X&16?le&16?zt(M,G,A,S,O,x,q,L,$):wt(M,O,x,!0):(X&8&&u(A,""),le&16&&E(G,A,S,O,x,q,L,$))},rt=(_,y,A,S,O,x,q,L,$)=>{_=_||gi,y=y||gi;const M=_.length,X=y.length,G=Math.min(M,X);let J;for(J=0;J<G;J++){const le=y[J]=$?Ps(y[J]):Mn(y[J]);p(_[J],le,A,null,O,x,q,L,$)}M>X?wt(_,O,x,!0,!1,G):E(y,A,S,O,x,q,L,$,G)},zt=(_,y,A,S,O,x,q,L,$)=>{let M=0;const X=y.length;let G=_.length-1,J=X-1;for(;M<=G&&M<=J;){const le=_[M],pe=y[M]=$?Ps(y[M]):Mn(y[M]);if(Eo(le,pe))p(le,pe,A,null,O,x,q,L,$);else break;M++}for(;M<=G&&M<=J;){const le=_[G],pe=y[J]=$?Ps(y[J]):Mn(y[J]);if(Eo(le,pe))p(le,pe,A,null,O,x,q,L,$);else break;G--,J--}if(M>G){if(M<=J){const le=J+1,pe=le<X?y[le].el:S;for(;M<=J;)p(null,y[M]=$?Ps(y[M]):Mn(y[M]),A,pe,O,x,q,L,$),M++}}else if(M>J)for(;M<=G;)Ft(_[M],O,x,!0),M++;else{const le=M,pe=M,De=new Map;for(M=pe;M<=J;M++){const Kt=y[M]=$?Ps(y[M]):Mn(y[M]);Kt.key!=null&&De.set(Kt.key,M)}let ke,Xe=0;const cn=J-pe+1;let Yr=!1,fg=0;const vo=new Array(cn);for(M=0;M<cn;M++)vo[M]=0;for(M=le;M<=G;M++){const Kt=_[M];if(Xe>=cn){Ft(Kt,O,x,!0);continue}let Nn;if(Kt.key!=null)Nn=De.get(Kt.key);else for(ke=pe;ke<=J;ke++)if(vo[ke-pe]===0&&Eo(Kt,y[ke])){Nn=ke;break}Nn===void 0?Ft(Kt,O,x,!0):(vo[Nn-pe]=M+1,Nn>=fg?fg=Nn:Yr=!0,p(Kt,y[Nn],A,null,O,x,q,L,$),Xe++)}const dg=Yr?kC(vo):gi;for(ke=dg.length-1,M=cn-1;M>=0;M--){const Kt=pe+M,Nn=y[Kt],pg=Kt+1<X?y[Kt+1].el:S;vo[M]===0?p(null,Nn,A,pg,O,x,q,L,$):Yr&&(ke<0||M!==dg[ke]?Et(Nn,A,pg,2):ke--)}}},Et=(_,y,A,S,O=null)=>{const{el:x,type:q,transition:L,children:$,shapeFlag:M}=_;if(M&6){Et(_.component.subTree,y,A,S);return}if(M&128){_.suspense.move(y,A,S);return}if(M&64){q.move(_,y,A,F);return}if(q===Dn){s(x,y,A);for(let G=0;G<$.length;G++)Et($[G],y,A,S);s(_.anchor,y,A);return}if(q===Wl){I(_,y,A);return}if(S!==2&&M&1&&L)if(S===0)L.beforeEnter(x),s(x,y,A),jt(()=>L.enter(x),O);else{const{leave:G,delayLeave:J,afterLeave:le}=L,pe=()=>s(x,y,A),De=()=>{G(x,()=>{pe(),le&&le()})};J?J(x,pe,De):De()}else s(x,y,A)},Ft=(_,y,A,S=!1,O=!1)=>{const{type:x,props:q,ref:L,children:$,dynamicChildren:M,shapeFlag:X,patchFlag:G,dirs:J}=_;if(L!=null&&_f(L,null,A,_,!0),X&256){y.ctx.deactivate(_);return}const le=X&1&&J,pe=!ql(_);let De;if(pe&&(De=q&&q.onVnodeBeforeUnmount)&&On(De,y,_),X&6)gl(_.component,A,S);else{if(X&128){_.suspense.unmount(A,S);return}le&&sr(_,null,y,"beforeUnmount"),X&64?_.type.remove(_,y,A,O,F,S):M&&(x!==Dn||G>0&&G&64)?wt(M,y,A,!1,!0):(x===Dn&&G&384||!O&&X&16)&&wt($,y,A),S&&Gr(_)}(pe&&(De=q&&q.onVnodeUnmounted)||le)&&jt(()=>{De&&On(De,y,_),le&&sr(_,null,y,"unmounted")},A)},Gr=_=>{const{type:y,el:A,anchor:S,transition:O}=_;if(y===Dn){Qr(A,S);return}if(y===Wl){w(_);return}const x=()=>{r(A),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(_.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:L}=O,$=()=>q(A,x);L?L(_.el,x,$):$()}else x()},Qr=(_,y)=>{let A;for(;_!==y;)A=f(_),r(_),_=A;r(y)},gl=(_,y,A)=>{const{bum:S,scope:O,update:x,subTree:q,um:L}=_;S&&_h(S),O.stop(),x&&(x.active=!1,Ft(q,_,y,A)),L&&jt(L,y),jt(()=>{_.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},wt=(_,y,A,S=!1,O=!1,x=0)=>{for(let q=x;q<_.length;q++)Ft(_[q],y,A,S,O)},P=_=>_.shapeFlag&6?P(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),W=(_,y,A)=>{_==null?y._vnode&&Ft(y._vnode,null,null,!0):p(y._vnode||null,_,y,null,null,null,A),Ig(),SE(),y._vnode=_},F={p,um:Ft,m:Et,r:Gr,mt:He,mc:E,pc:de,pbc:V,n:P,o:t};let Q,Re;return e&&([Q,Re]=e(F)),{render:W,hydrate:Q,createApp:EC(W,Q)}}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function PC(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function sp(t,e,n=!1){const s=t.children,r=e.children;if(se(s)&&se(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ps(r[i]),a.el=o.el),n||sp(o,a)),a.type===gu&&(a.el=o.el)}}function kC(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const NC=t=>t.__isTeleport,Ho=t=>t&&(t.disabled||t.disabled===""),Dg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,yf=(t,e)=>{const n=t&&t.to;return nt(n)?e?e(n):null:n},OC={__isTeleport:!0,process(t,e,n,s,r,i,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:m,createText:p,createComment:g}}=c,v=Ho(e.props);let{shapeFlag:T,children:I,dynamicChildren:w}=e;if(t==null){const N=e.el=p(""),b=e.anchor=p("");d(N,n,s),d(b,n,s);const R=e.target=yf(e.props,m),E=e.targetAnchor=p("");R&&(d(E,R),o=o||Dg(R));const C=(V,B)=>{T&16&&u(I,V,B,r,i,o,a,l)};v?C(n,b):R&&C(R,E)}else{e.el=t.el;const N=e.anchor=t.anchor,b=e.target=t.target,R=e.targetAnchor=t.targetAnchor,E=Ho(t.props),C=E?n:b,V=E?N:R;if(o=o||Dg(b),w?(f(t.dynamicChildren,w,C,r,i,o,a),sp(t,e,!0)):l||h(t,e,C,V,r,i,o,a,!1),v)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):bl(e,n,N,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const B=e.target=yf(e.props,m);B&&bl(e,B,null,c,0)}else E&&bl(e,b,R,c,1)}HE(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),o&&i(c),a&16){const d=o||!Ho(f);for(let m=0;m<l.length;m++){const p=l[m];r(p,e,n,d,!!p.dynamicChildren)}}},move:bl,hydrate:xC};function bl(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||Ho(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,n,2);h&&s(a,e,n)}function xC(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=yf(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Ho(e.props))e.anchor=c(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,s,r,i)}HE(e)}return e.anchor&&o(e.anchor)}const B5=OC;function HE(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Dn=Symbol.for("v-fgt"),gu=Symbol.for("v-txt"),Ir=Symbol.for("v-cmt"),Wl=Symbol.for("v-stc"),zo=[];let dn=null;function In(t=!1){zo.push(dn=t?null:[])}function DC(){zo.pop(),dn=zo[zo.length-1]||null}let fa=1;function Mg(t){fa+=t}function zE(t){return t.dynamicChildren=fa>0?dn||gi:null,DC(),fa>0&&dn&&dn.push(t),t}function ms(t,e,n,s,r,i){return zE(ee(t,e,n,s,r,i,!0))}function KE(t,e,n,s,r){return zE(xe(t,e,n,s,r,!0))}function vf(t){return t?t.__v_isVNode===!0:!1}function Eo(t,e){return t.type===e.type&&t.key===e.key}const _u="__vInternal",GE=({key:t})=>t??null,Hl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Me(t)||ce(t)?{i:Yt,r:t,k:e,f:!!n}:t:null);function ee(t,e=null,n=null,s=0,r=null,i=t===Dn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&GE(e),ref:e&&Hl(e),scopeId:du,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return a?(rp(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),fa>0&&!o&&dn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&dn.push(l),l}const xe=MC;function MC(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ZR)&&(t=Ir),vf(t)){const a=Ni(t,e,!0);return n&&rp(a,n),fa>0&&!i&&dn&&(a.shapeFlag&6?dn[dn.indexOf(t)]=a:dn.push(a)),a.patchFlag|=-2,a}if(KC(t)&&(t=t.__vccOpts),e){e=LC(e);let{class:a,style:l}=e;a&&!nt(a)&&(e.class=lu(a)),je(l)&&(EE(l)&&!se(l)&&(l=vt({},l)),e.style=jd(l))}const o=nt(t)?1:tC(t)?128:NC(t)?64:je(t)?4:ce(t)?2:0;return ee(t,e,n,s,r,o,i,!0)}function LC(t){return t?EE(t)||_u in t?vt({},t):t:null}function Ni(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?$C(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&GE(a),ref:e&&e.ref?n&&r?se(r)?r.concat(Hl(e)):[r,Hl(e)]:Hl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dn?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ni(t.ssContent),ssFallback:t.ssFallback&&Ni(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ui(t=" ",e=0){return xe(gu,null,t,e)}function Qs(t,e){const n=xe(Wl,null,t);return n.staticCount=e,n}function VC(t="",e=!1){return e?(In(),KE(Ir,null,t)):xe(Ir,null,t)}function Mn(t){return t==null||typeof t=="boolean"?xe(Ir):se(t)?xe(Dn,null,t.slice()):typeof t=="object"?Ps(t):xe(gu,null,String(t))}function Ps(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ni(t)}function rp(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),rp(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(_u in e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Yt},n=32):(e=String(e),s&64?(n=16,e=[ui(e)]):n=8);t.children=e,t.shapeFlag|=n}function $C(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=lu([e.class,s.class]));else if(r==="style")e.style=jd([e.style,s.style]);else if(su(r)){const i=e[r],o=s[r];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function On(t,e,n,s=null){vn(t,e,7,[n,s])}const FC=FE();let UC=0;function jC(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||FC,i={uid:UC++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new oE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jE(s,r),emitsOptions:kE(s,r),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:s.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=KR.bind(null,i),t.ce&&t.ce(i),i}let st=null;const Oi=()=>st||Yt;let ip,Xr,Lg="__VUE_INSTANCE_SETTERS__";(Xr=lf()[Lg])||(Xr=lf()[Lg]=[]),Xr.push(t=>st=t),ip=t=>{Xr.length>1?Xr.forEach(e=>e(t)):Xr[0](t)};const xi=t=>{ip(t),t.scope.on()},_r=()=>{st&&st.scope.off(),ip(null)};function QE(t){return t.vnode.shapeFlag&4}let da=!1;function BC(t,e=!1){da=e;const{props:n,children:s}=t.vnode,r=QE(t);TC(t,n,r,e),AC(t,s);const i=r?qC(t,e):void 0;return da=!1,i}function qC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Lr(new Proxy(t.ctx,dC));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?HC(t):null;xi(t),Zi();const i=$s(s,t,0,[t.props,r]);if(eo(),_r(),tE(i)){if(i.then(_r,_r),e)return i.then(o=>{Vg(t,o,e)}).catch(o=>{uu(o,t,0)});t.asyncDep=i}else Vg(t,i,e)}else YE(t,e)}function Vg(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=bE(e)),YE(t,n)}let $g;function YE(t,e,n){const s=t.type;if(!t.render){if(!e&&$g&&!s.render){const r=s.template||tp(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=vt(vt({isCustomElement:i,delimiters:a},o),l);s.render=$g(r,c)}}t.render=s.render||yn}{xi(t),Zi();try{pC(t)}finally{eo(),_r()}}}function WC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ht(t,"get","$attrs"),e[n]}}))}function HC(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return WC(t)},slots:t.slots,emit:t.emit,expose:e}}function op(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bE(Lr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qo)return qo[n](t)},has(e,n){return n in e||n in qo}}))}function zC(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function KC(t){return ce(t)&&"__vccOpts"in t}const dt=(t,e)=>jR(t,e,da);function pa(t,e,n){const s=arguments.length;return s===2?je(e)&&!se(e)?vf(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&vf(n)&&(n=[n]),xe(t,e,n))}const GC=Symbol.for("v-scx"),QC=()=>gt(GC),YC="3.3.8",XC="http://www.w3.org/2000/svg",ur=typeof document<"u"?document:null,Fg=ur&&ur.createElement("template"),JC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ur.createElementNS(XC,t):ur.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ur.createTextNode(t),createComment:t=>ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fg.innerHTML=s?`<svg>${t}</svg>`:t;const a=Fg.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ZC=Symbol("_vtc");function eS(t,e,n){const s=t[ZC];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const tS=Symbol("_vod");function nS(t,e,n){const s=t.style,r=nt(n);if(n&&!r){if(e&&!nt(e))for(const i in e)n[i]==null&&Ef(s,i,"");for(const i in n)Ef(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),tS in t&&(s.display=i)}}const Ug=/\s*!important$/;function Ef(t,e,n){if(se(n))n.forEach(s=>Ef(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=sS(t,e);Ug.test(n)?t.setProperty(Ji(s),n.replace(Ug,""),"important"):t[s]=n}}const jg=["Webkit","Moz","ms"],Eh={};function sS(t,e){const n=Eh[e];if(n)return n;let s=Yn(e);if(s!=="filter"&&s in t)return Eh[e]=s;s=au(s);for(let r=0;r<jg.length;r++){const i=jg[r]+s;if(i in t)return Eh[e]=i}return e}const Bg="http://www.w3.org/1999/xlink";function rS(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bg,e.slice(6,e.length)):t.setAttributeNS(Bg,e,n);else{const i=hR(e);n==null||i&&!rE(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function iS(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=rE(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function oS(t,e,n,s){t.addEventListener(e,n,s)}function aS(t,e,n,s){t.removeEventListener(e,n,s)}const qg=Symbol("_vei");function lS(t,e,n,s,r=null){const i=t[qg]||(t[qg]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=cS(e);if(s){const c=i[e]=fS(s,r);oS(t,a,c,l)}else o&&(aS(t,a,o,l),i[e]=void 0)}}const Wg=/(?:Once|Passive|Capture)$/;function cS(t){let e;if(Wg.test(t)){e={};let s;for(;s=t.match(Wg);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ji(t.slice(2)),e]}let wh=0;const uS=Promise.resolve(),hS=()=>wh||(uS.then(()=>wh=0),wh=Date.now());function fS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vn(dS(s,n.value),e,5,[s])};return n.value=t,n.attached=hS(),n}function dS(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hg=/^on[a-z]/,pS=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?eS(t,s,r):e==="style"?nS(t,n,s):su(e)?$d(e)||lS(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mS(t,e,s,r))?iS(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rS(t,e,s,r))};function mS(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Hg.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hg.test(e)&&nt(n)?!1:e in t}const gS=vt({patchProp:pS},JC);let zg;function _S(){return zg||(zg=CC(gS))}const yS=(...t)=>{const e=_S().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=vS(s);if(!r)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function vS(t){return nt(t)?document.querySelector(t):t}var ES=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let XE;const yu=t=>XE=t,JE=Symbol();function wf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ko;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ko||(Ko={}));function wS(){const t=Bd(!0),e=t.run(()=>Ke({}));let n=[],s=[];const r=Lr({install(i){yu(r),r._a=i,i.provide(JE,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!ES?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const ZE=()=>{};function Kg(t,e,n,s=ZE){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&qd()&&aE(r),r}function Jr(t,...e){t.slice().forEach(n=>{n(...e)})}const TS=t=>t();function Tf(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];wf(r)&&wf(s)&&t.hasOwnProperty(n)&&!Me(s)&&!Hn(s)?t[n]=Tf(r,s):t[n]=s}return t}const IS=Symbol();function bS(t){return!wf(t)||!t.hasOwnProperty(IS)}const{assign:Ss}=Object;function AS(t){return!!(Me(t)&&t.effect)}function RS(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=LR(n.state.value[t]);return Ss(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Lr(dt(()=>{yu(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=e0(t,c,e,n,s,!0),l}function e0(t,e,n={},s,r,i){let o;const a=Ss({actions:{}},n),l={deep:!0};let c,u,h=[],f=[],d;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),Ke({});let p;function g(E){let C;c=u=!1,typeof E=="function"?(E(s.state.value[t]),C={type:Ko.patchFunction,storeId:t,events:d}):(Tf(s.state.value[t],E),C={type:Ko.patchObject,payload:E,storeId:t,events:d});const V=p=Symbol();hu().then(()=>{p===V&&(c=!0)}),u=!0,Jr(h,C,s.state.value[t])}const v=i?function(){const{state:C}=n,V=C?C():{};this.$patch(B=>{Ss(B,V)})}:ZE;function T(){o.stop(),h=[],f=[],s._s.delete(t)}function I(E,C){return function(){yu(s);const V=Array.from(arguments),B=[],he=[];function Z(K){B.push(K)}function He(K){he.push(K)}Jr(f,{args:V,name:E,store:N,after:Z,onError:He});let Oe;try{Oe=C.apply(this&&this.$id===t?this:N,V)}catch(K){throw Jr(he,K),K}return Oe instanceof Promise?Oe.then(K=>(Jr(B,K),K)).catch(K=>(Jr(he,K),Promise.reject(K))):(Jr(B,Oe),Oe)}}const w={_p:s,$id:t,$onAction:Kg.bind(null,f),$patch:g,$reset:v,$subscribe(E,C={}){const V=Kg(h,E,C.detached,()=>B()),B=o.run(()=>En(()=>s.state.value[t],he=>{(C.flush==="sync"?u:c)&&E({storeId:t,type:Ko.direct,events:d},he)},Ss({},l,C)));return V},$dispose:T},N=$n(w);s._s.set(t,N);const R=(s._a&&s._a.runWithContext||TS)(()=>s._e.run(()=>(o=Bd()).run(e)));for(const E in R){const C=R[E];if(Me(C)&&!AS(C)||Hn(C))i||(m&&bS(C)&&(Me(C)?C.value=m[E]:Tf(C,m[E])),s.state.value[t][E]=C);else if(typeof C=="function"){const V=I(E,C);R[E]=V,a.actions[E]=C}}return Ss(N,R),Ss(be(N),R),Object.defineProperty(N,"$state",{get:()=>s.state.value[t],set:E=>{g(C=>{Ss(C,E)})}}),s._p.forEach(E=>{Ss(N,o.run(()=>E({store:N,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(N.$state,m),c=!0,u=!0,N}function q5(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=wC();return a=a||(c?gt(JE,null):null),a&&yu(a),a=XE,a._s.has(s)||(i?e0(s,e,r,a):RS(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(t,e){if(!t)throw to(e)},to=function(t){return new Error("Firebase Database ("+t0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},CS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new SS;const f=i<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s0=function(t){const e=n0(t);return vu.encodeByteArray(e,!0)},uc=function(t){return s0(t).replace(/\./g,"")},hc=function(t){try{return vu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){return r0(void 0,t)}function r0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kS(n)||(t[n]=r0(t[n],e[n]));return t}function kS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=()=>NS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hc(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return OS()||xS()||DS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i0=t=>{var e,n;return(n=(e=Eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},o0=t=>{const e=i0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},a0=()=>{var t;return(t=Eu())===null||t===void 0?void 0:t.config},l0=t=>{var e;return(e=Eu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function MS(){var t;const e=(t=Eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function u0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VS(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function h0(){return t0.NODE_ADMIN===!0}function f0(){try{return typeof indexedDB=="object"}catch{return!1}}function $S(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="FirebaseError";class Zn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=FS,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?US(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Zn(r,a,s)}}function US(t,e){return t.replace(jS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const jS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return JSON.parse(t)}function pt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=ga(hc(i[0])||""),n=ga(hc(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},BS=function(t){const e=d0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qS=function(t){const e=d0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function If(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fc(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function dc(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Gg(i)&&Gg(o)){if(!dc(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Gg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function xo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function HS(t,e){const n=new zS(t,e);return n.subscribe.bind(n)}class zS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");KS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Th),r.error===void 0&&(r.error=Th),r.complete===void 0&&(r.complete=Th);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Th(){}function GS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,U(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},wu=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ma;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JS(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:XS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XS(t){return t===or?void 0:t}function JS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const eP={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},tP=me.INFO,nP={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},sP=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=nP[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fa{constructor(e){this.name=e,this._logLevel=tP,this._logHandler=sP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const rP=(t,e)=>e.some(n=>t instanceof n);let Qg,Yg;function iP(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oP(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p0=new WeakMap,bf=new WeakMap,m0=new WeakMap,Ih=new WeakMap,lp=new WeakMap;function aP(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&p0.set(n,t)}).catch(()=>{}),lp.set(e,t),e}function lP(t){if(bf.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bf.set(t,e)}let Af={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||m0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cP(t){Af=t(Af)}function uP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(bh(this),e,...n);return m0.set(s,e.sort?e.sort():[e]),Fs(s)}:oP().includes(t)?function(...e){return t.apply(bh(this),e),Fs(p0.get(this))}:function(...e){return Fs(t.apply(bh(this),e))}}function hP(t){return typeof t=="function"?uP(t):(t instanceof IDBTransaction&&lP(t),rP(t,iP())?new Proxy(t,Af):t)}function Fs(t){if(t instanceof IDBRequest)return aP(t);if(Ih.has(t))return Ih.get(t);const e=hP(t);return e!==t&&(Ih.set(t,e),lp.set(e,t)),e}const bh=t=>lp.get(t);function fP(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Fs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Fs(o.result),l.oldVersion,l.newVersion,Fs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dP=["get","getKey","getAll","getAllKeys","count"],pP=["put","add","delete","clear"],Ah=new Map;function Xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=pP.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dP.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ah.set(e,i),i}cP(t=>({...t,get:(e,n,s)=>Xg(e,n)||t.get(e,n,s),has:(e,n)=>!!Xg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gP(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function gP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rf="@firebase/app",Jg="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Fa("@firebase/app"),_P="@firebase/app-compat",yP="@firebase/analytics-compat",vP="@firebase/analytics",EP="@firebase/app-check-compat",wP="@firebase/app-check",TP="@firebase/auth",IP="@firebase/auth-compat",bP="@firebase/database",AP="@firebase/database-compat",RP="@firebase/functions",CP="@firebase/functions-compat",SP="@firebase/installations",PP="@firebase/installations-compat",kP="@firebase/messaging",NP="@firebase/messaging-compat",OP="@firebase/performance",xP="@firebase/performance-compat",DP="@firebase/remote-config",MP="@firebase/remote-config-compat",LP="@firebase/storage",VP="@firebase/storage-compat",$P="@firebase/firestore",FP="@firebase/firestore-compat",UP="firebase",jP="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="[DEFAULT]",BP={[Rf]:"fire-core",[_P]:"fire-core-compat",[vP]:"fire-analytics",[yP]:"fire-analytics-compat",[wP]:"fire-app-check",[EP]:"fire-app-check-compat",[TP]:"fire-auth",[IP]:"fire-auth-compat",[bP]:"fire-rtdb",[AP]:"fire-rtdb-compat",[RP]:"fire-fn",[CP]:"fire-fn-compat",[SP]:"fire-iid",[PP]:"fire-iid-compat",[kP]:"fire-fcm",[NP]:"fire-fcm-compat",[OP]:"fire-perf",[xP]:"fire-perf-compat",[DP]:"fire-rc",[MP]:"fire-rc-compat",[LP]:"fire-gcs",[VP]:"fire-gcs-compat",[$P]:"fire-fst",[FP]:"fire-fst-compat","fire-js":"fire-js",[UP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Map,Sf=new Map;function qP(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(Sf.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;Sf.set(e,t);for(const n of pc.values())qP(n,t);return!0}function Tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Us=new no("app","Firebase",WP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Us.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=jP;function g0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cf,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Us.create("bad-app-name",{appName:String(r)});if(n||(n=a0()),!n)throw Us.create("no-options");const i=pc.get(r);if(i){if(dc(n,i.options)&&dc(s,i.config))return i;throw Us.create("duplicate-app",{appName:r})}const o=new ZS(r);for(const l of Sf.values())o.addComponent(l);const a=new HP(n,s,o);return pc.set(r,a),a}function Iu(t=Cf){const e=pc.get(t);if(!e&&t===Cf&&a0())return g0();if(!e)throw Us.create("no-app",{appName:t});return e}function Zt(t,e,n){var s;let r=(s=BP[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}Xn(new bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="firebase-heartbeat-database",KP=1,_a="firebase-heartbeat-store";let Rh=null;function _0(){return Rh||(Rh=fP(zP,KP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_a)}}}).catch(t=>{throw Us.create("idb-open",{originalErrorMessage:t.message})})),Rh}async function GP(t){try{return await(await _0()).transaction(_a).objectStore(_a).get(y0(t))}catch(e){if(e instanceof Zn)br.warn(e.message);else{const n=Us.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Zg(t,e){try{const s=(await _0()).transaction(_a,"readwrite");await s.objectStore(_a).put(e,y0(t)),await s.done}catch(n){if(n instanceof Zn)br.warn(n.message);else{const s=Us.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(s.message)}}}function y0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=1024,YP=30*24*60*60*1e3;class XP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZP(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=e_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=YP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=e_(),{heartbeatsToSend:s,unsentEntries:r}=JP(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function e_(){return new Date().toISOString().substring(0,10)}function JP(t,e=QP){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),t_(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),t_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ZP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f0()?$S().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await GP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function t_(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){Xn(new bn("platform-logger",e=>new mP(e),"PRIVATE")),Xn(new bn("heartbeat",e=>new XP(e),"PRIVATE")),Zt(Rf,Jg,t),Zt(Rf,Jg,"esm2017"),Zt("fire-js","")}ek("");function cp(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function v0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tk=v0,E0=new no("auth","Firebase",v0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Fa("@firebase/auth");function nk(t,...e){mc.logLevel<=me.WARN&&mc.warn(`Auth (${Ys}): ${t}`,...e)}function zl(t,...e){mc.logLevel<=me.ERROR&&mc.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,...e){throw up(t,...e)}function zn(t,...e){return up(t,...e)}function sk(t,e,n){const s=Object.assign(Object.assign({},tk()),{[e]:n});return new no("auth","Firebase",s).create(e,{appName:t.name})}function up(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return E0.create(t,...e)}function te(t,e,...n){if(!t)throw up(e,...n)}function is(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zl(e),new Error(e)}function gs(t,e){t||is(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rk(){return n_()==="http:"||n_()==="https:"}function n_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rk()||LS()||"connection"in navigator)?navigator.onLine:!0}function ok(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,gs(n>e,"Short delay should be less than long delay!"),this.isMobile=ap()||u0()}get(){return ik()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){gs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;is("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;is("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;is("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new Ua(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xs(t,e,n,s,r={}){return T0(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=so(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),w0.fetch()(I0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function T0(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ak),e);try{const r=new uk(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Al(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sk(t,u,c);An(t,u)}}catch(r){if(r instanceof Zn)throw r;An(t,"network-request-failed",{message:String(r)})}}async function bu(t,e,n,s,r={}){const i=await Xs(t,e,n,s,r);return"mfaPendingCredential"in i&&An(t,"multi-factor-auth-required",{_serverResponse:i}),i}function I0(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?hp(t.config,r):`${t.config.apiScheme}://${r}`}function ck(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zn(this.auth,"network-request-failed")),lk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Al(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=zn(t,e,s);return r.customData._tokenResponse=n,r}function s_(t){return t!==void 0&&t.enterprise!==void 0}class hk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ck(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fk(t,e){return Xs(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function pk(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mk(t,e=!1){const n=Be(t),s=await n.getIdToken(e),r=fp(s);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Go(Ch(r.auth_time)),issuedAtTime:Go(Ch(r.iat)),expirationTime:Go(Ch(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ch(t){return Number(t)*1e3}function fp(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zl("JWT malformed, contained fewer than 3 sections"),null;try{const r=hc(n);return r?JSON.parse(r):(zl("Failed to decode base64 JWT payload"),null)}catch(r){return zl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gk(t){const e=fp(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zn&&_k(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function _k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ya(t,pk(n,{idToken:s}));te(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wk(i.providerUserInfo):[],a=Ek(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new b0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vk(t){const e=Be(t);await gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ek(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function wk(t){return t.map(e=>{var{providerId:n}=e,s=cp(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e){const n=await T0(t,{},async()=>{const s=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=I0(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",w0.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ik(t,e){return Xs(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Tk(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new va;return s&&(te(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(te(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new va,this.toJSON())}_performRefresh(){return is("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new b0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ya(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mk(this,e)}reload(){return vk(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ya(this,dk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:w,isAnonymous:N,providerData:b,stsTokenManager:R}=n;te(I&&R,e,"internal-error");const E=va.fromJSON(this.name,R);te(typeof I=="string",e,"internal-error"),Rs(h,e.name),Rs(f,e.name),te(typeof w=="boolean",e,"internal-error"),te(typeof N=="boolean",e,"internal-error"),Rs(d,e.name),Rs(m,e.name),Rs(p,e.name),Rs(g,e.name),Rs(v,e.name),Rs(T,e.name);const C=new yr({uid:I,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:N,photoURL:m,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:v,lastLoginAt:T});return b&&Array.isArray(b)&&(C.providerData=b.map(V=>Object.assign({},V))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,n,s=!1){const r=new va;r.updateFromServerResponse(n);const i=new yr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await gc(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new Map;function os(t){gs(t instanceof Function,"Expected a class definition");let e=r_.get(t);return e?(gs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A0.type="NONE";const i_=A0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Kl(this.userKey,r.apiKey,i),this.fullPersistenceKey=Kl("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new vi(os(i_),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||os(i_);const o=Kl(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=yr._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new vi(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new vi(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k0(e))return"Blackberry";if(N0(e))return"Webos";if(dp(e))return"Safari";if((e.includes("chrome/")||C0(e))&&!e.includes("edge/"))return"Chrome";if(P0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function R0(t=Nt()){return/firefox\//i.test(t)}function dp(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C0(t=Nt()){return/crios\//i.test(t)}function S0(t=Nt()){return/iemobile/i.test(t)}function P0(t=Nt()){return/android/i.test(t)}function k0(t=Nt()){return/blackberry/i.test(t)}function N0(t=Nt()){return/webos/i.test(t)}function Au(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bk(t=Nt()){var e;return Au(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ak(){return VS()&&document.documentMode===10}function O0(t=Nt()){return Au(t)||P0(t)||N0(t)||k0(t)||/windows phone/i.test(t)||S0(t)}function Rk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t,e=[]){let n;switch(t){case"Browser":n=o_(Nt());break;case"Worker":n=`${o_(Nt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e={}){return Xs(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=6;class kk{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.beforeStateQueue=new Ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=os(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ok()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(os(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sk(this),n=new kk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ik(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&os(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[os(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ro(t){return Be(t)}class a_{constructor(e){this.auth=e,this.observer=null,this.addObserver=HS(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function D0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=zn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ok().appendChild(s)})}function xk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Dk="https://www.google.com/recaptcha/enterprise.js?render=",Mk="recaptcha-enterprise",Lk="NO_RECAPTCHA";class Vk{constructor(e){this.type=Mk,this.auth=ro(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{fk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new hk(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;s_(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Lk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&s_(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}D0(Dk+a).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function l_(t,e,n,s=!1){const r=new Vk(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function c_(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await l_(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await l_(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t,e){const n=Tu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(dc(i,e??{}))return r;An(r,"already-initialized")}return n.initialize({options:e})}function Fk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(os);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Uk(t,e,n){const s=ro(t);te(s._canInitEmulator,s,"emulator-config-failed"),te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=M0(e),{host:o,port:a}=jk(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Bk()}function M0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jk(t){const e=M0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:u_(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:u_(o)}}}function u_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return is("not implemented")}_getIdTokenResponse(e){return is("not implemented")}_linkToIdToken(e,n){return is("not implemented")}_getReauthenticationResolver(e){return is("not implemented")}}async function qk(t,e){return Xs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return bu(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e){return bu(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function zk(t,e){return bu(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends pp{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ea(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ea(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return c_(e,n,"signInWithPassword",Wk);case"emailLink":return Hk(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return c_(e,s,"signUpPassword",qk);case"emailLink":return zk(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return bu(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="http://localhost";class Ar extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=cp(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ar(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ei(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:Kk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qk(t){const e=Oo(xo(t)).link,n=e?Oo(xo(e)).deep_link_id:null,s=Oo(xo(t)).deep_link_id;return(s?Oo(xo(s)).link:null)||s||n||e||t}class mp{constructor(e){var n,s,r,i,o,a;const l=Oo(xo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Gk((r=l.mode)!==null&&r!==void 0?r:null);te(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qk(e);try{return new mp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.providerId=io.PROVIDER_ID}static credential(e,n){return Ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=mp.parseLink(n);return te(s,"argument-error"),Ea._fromEmailAndCode(e,s.code,s.tenantId)}}io.PROVIDER_ID="password";io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends L0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends ja{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ns.credential(e.oauthAccessToken)}catch{return null}}}Ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ns.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Os.credential(n,s)}catch{return null}}}Os.GOOGLE_SIGN_IN_METHOD="google.com";Os.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends ja{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xs.credential(e.oauthAccessToken)}catch{return null}}}xs.GITHUB_SIGN_IN_METHOD="github.com";xs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends ja{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ds.credential(n,s)}catch{return null}}}Ds.TWITTER_SIGN_IN_METHOD="twitter.com";Ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await yr._fromIdTokenResponse(e,s,r),o=h_(s);return new Mi({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=h_(s);return new Mi({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function h_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends Zn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new _c(e,n,s,r)}}function V0(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,i,e,s):i})}async function Yk(t,e,n=!1){const s=await ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ya(t,V0(s,r,e,t),n);te(i.idToken,s,"internal-error");const o=fp(i.idToken);te(o,s,"internal-error");const{sub:a}=o;return te(t.uid===a,s,"user-mismatch"),Mi._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&An(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e,n=!1){const s="signIn",r=await V0(t,s,e),i=await Mi._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Jk(t,e){return $0(ro(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t){const e=ro(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function W5(t,e,n){return Jk(Be(t),io.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Zk(t),s})}function F0(t,e,n,s){return Be(t).onIdTokenChanged(e,n,s)}function e1(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function t1(t,e,n,s){return Be(t).onAuthStateChanged(e,n,s)}function H5(t){return Be(t).signOut()}const yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yc,"1"),this.storage.removeItem(yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(){const t=Nt();return dp(t)||Au(t)}const s1=1e3,r1=10;class j0 extends U0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=n1()&&Rk(),this.fallbackToPolling=O0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Ak()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,r1):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},s1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}j0.type="LOCAL";const i1=j0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends U0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}B0.type="SESSION";const q0=B0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ru(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await o1(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=gp("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function l1(t){Kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function c1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function u1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function h1(){return W0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebaseLocalStorageDb",f1=1,vc="firebaseLocalStorage",z0="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([vc],e?"readwrite":"readonly").objectStore(vc)}function d1(){const t=indexedDB.deleteDatabase(H0);return new Ba(t).toPromise()}function kf(){const t=indexedDB.open(H0,f1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(vc,{keyPath:z0})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(vc)?e(s):(s.close(),await d1(),e(await kf()))})})}async function f_(t,e,n){const s=Cu(t,!0).put({[z0]:e,value:n});return new Ba(s).toPromise()}async function p1(t,e){const n=Cu(t,!1).get(e),s=await new Ba(n).toPromise();return s===void 0?null:s.value}function d_(t,e){const n=Cu(t,!0).delete(e);return new Ba(n).toPromise()}const m1=800,g1=3;class K0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>g1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(h1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await c1(),!this.activeServiceWorker)return;this.sender=new a1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||u1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kf();return await f_(e,yc,"1"),await d_(e,yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>f_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>p1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>d_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Cu(r,!1).getAll();return new Ba(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K0.type="LOCAL";const _1=K0;new Ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t,e){return e?os(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function v1(t){return $0(t.auth,new _p(t),t.bypassAuthState)}function E1(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Xk(n,new _p(t),t.bypassAuthState)}async function w1(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Yk(n,new _p(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v1;case"linkViaPopup":case"linkViaRedirect":return w1;case"reauthViaPopup":case"reauthViaRedirect":return E1;default:An(this.auth,"internal-error")}}resolve(e){gs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new Ua(2e3,1e4);class hi extends G0{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){gs(this.filter.length===1,"Popup operations only handle one event");const e=gp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T1.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="pendingRedirect",Gl=new Map;class b1 extends G0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gl.get(this.auth._key());if(!e){try{const s=await A1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gl.set(this.auth._key(),e)}return this.bypassAuthState||Gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A1(t,e){const n=S1(e),s=C1(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function R1(t,e){Gl.set(t._key(),e)}function C1(t){return os(t._redirectPersistence)}function S1(t){return Kl(I1,t.config.apiKey,t.name)}async function P1(t,e,n=!1){const s=ro(t),r=y1(s,e),o=await new b1(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=10*60*1e3;class N1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Q0(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(zn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=k1&&this.cachedEventUids.clear(),this.cachedEventUids.has(p_(e))}saveEventToCache(e){this.cachedEventUids.add(p_(e)),this.lastProcessedEventTime=Date.now()}}function p_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Q0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M1=/^https?/;async function L1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x1(t);for(const n of e)try{if(V1(n))return}catch{}An(t,"unauthorized-domain")}function V1(t){const e=Pf(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!M1.test(n))return!1;if(D1.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new Ua(3e4,6e4);function m_(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function F1(t){return new Promise((e,n)=>{var s,r,i;function o(){m_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{m_(),n(zn(t,"network-request-failed"))},timeout:$1.get()})}if(!((r=(s=Kn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Kn().gapi)===null||i===void 0)&&i.load)o();else{const a=xk("iframefcb");return Kn()[a]=()=>{gapi.load?o():n(zn(t,"network-request-failed"))},D0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ql=null,e})}let Ql=null;function U1(t){return Ql=Ql||F1(t),Ql}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new Ua(5e3,15e3),B1="__/auth/iframe",q1="emulator/auth/iframe",W1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z1(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,q1):`https://${t.config.authDomain}/${B1}`,s={apiKey:e.apiKey,appName:t.name,v:Ys},r=H1.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${so(s).slice(1)}`}async function K1(t){const e=await U1(t),n=Kn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:z1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W1,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=zn(t,"network-request-failed"),a=Kn().setTimeout(()=>{i(o)},j1.get());function l(){Kn().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Q1=500,Y1=600,X1="_blank",J1="http://localhost";class g_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z1(t,e,n,s=Q1,r=Y1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},G1),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Nt().toLowerCase();n&&(a=C0(c)?X1:n),R0(c)&&(e=e||J1,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if(bk(c)&&a!=="_self")return eN(e||"",a),new g_(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new g_(h)}function eN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="__/auth/handler",nN="emulator/auth/handler",sN=encodeURIComponent("fac");async function __(t,e,n,s,r,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ys,eventId:r};if(e instanceof L0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",If(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ja){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${sN}=${encodeURIComponent(l)}`:"";return`${rN(t)}?${so(a).slice(1)}${c}`}function rN({config:t}){return t.emulator?hp(t,nN):`https://${t.authDomain}/${tN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="webStorageSupport";class iN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q0,this._completeRedirectFn=P1,this._overrideRedirectResult=R1}async _openPopup(e,n,s,r){var i;gs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await __(e,n,s,Pf(),r);return Z1(e,o,gp())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await __(e,n,s,Pf(),r);return l1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(gs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await K1(e),s=new N1(e);return n.register("authEvent",r=>(te(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sh,{type:Sh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Sh];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return O0()||dp()||Au()}}const oN=iN;var y_="@firebase/auth",v_="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cN(t){Xn(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x0(t)},c=new Nk(s,r,i,l);return Fk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xn(new bn("auth-internal",e=>{const n=ro(e.getProvider("auth").getImmediate());return(s=>new aN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(y_,v_,lN(t)),Zt(y_,v_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=5*60,hN=l0("authIdTokenMaxAge")||uN;let E_=null;const fN=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hN)return;const r=n==null?void 0:n.token;E_!==r&&(E_=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Y0(t=Iu()){const e=Tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$k(t,{popupRedirectResolver:oN,persistence:[_1,i1,q0]}),s=l0("authTokenSyncURL");if(s){const i=fN(s);e1(n,i,()=>i(n.currentUser)),F0(n,o=>i(o))}const r=i0("auth");return r&&Uk(n,`http://${r}`),n}cN("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=new Map,pN={activated:!1,tokenObservers:[]};function Rn(t){return dN.get(t)||Object.assign({},pN)}const w_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ma,await gN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ma,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function gN(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ec=new no("appCheck","AppCheck",_N);function X0(t){if(!Rn(t).activated)throw Ec.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="firebase-app-check-database",vN=1,Nf="firebase-app-check-store";let Rl=null;function EN(){return Rl||(Rl=new Promise((t,e)=>{try{const n=indexedDB.open(yN,vN);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Ec.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Nf,{keyPath:"compositeKey"})}}}catch(n){e(Ec.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Rl)}function wN(t,e){return TN(IN(t),e)}async function TN(t,e){const s=(await EN()).transaction(Nf,"readwrite"),i=s.objectStore(Nf).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Ec.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function IN(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Fa("@firebase/app-check");function T_(t,e){return f0()?wN(t,e).catch(n=>{Of.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN={error:"UNKNOWN_ERROR"};function AN(t){return vu.encodeString(JSON.stringify(t),!1)}async function xf(t,e=!1){const n=t.app;X0(n);const s=Rn(n);let r=s.token,i;if(r&&!Do(r)&&(s.token=void 0,r=void 0),!r){const l=await s.cachedTokenPromise;l&&(Do(l)?r=l:await T_(n,void 0))}if(!e&&r&&Do(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await Rn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Of.warn(l.message):Of.error(l),i=l}let a;return r?i?Do(r)?a={token:r.token,internalError:i}:a=b_(i):(a={token:r.token},s.token=r,await T_(n,r)):a=b_(i),o&&PN(n,a),a}async function RN(t){const e=t.app;X0(e);const{provider:n}=Rn(e);{const{token:s}=await n.getToken();return{token:s}}}function CN(t,e,n,s){const{app:r}=t,i=Rn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Do(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),I_(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>I_(t))}function J0(t,e){const n=Rn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function I_(t){const{app:e}=t,n=Rn(e);let s=n.tokenRefresher;s||(s=SN(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function SN(t){const{app:e}=t;return new mN(async()=>{const n=Rn(e);let s;if(n.token?s=await xf(t,!0):s=await xf(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Rn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},w_.RETRIAL_MIN_WAIT,w_.RETRIAL_MAX_WAIT)}function PN(t,e){const n=Rn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Do(t){return t.expireTimeMillis-Date.now()>0}function b_(t){return{token:AN(bN),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Rn(this.app);for(const n of e)J0(this.app,n.next);return Promise.resolve()}}function NN(t,e){return new kN(t,e)}function ON(t){return{getToken:e=>xf(t,e),getLimitedUseToken:()=>RN(t),addTokenListener:e=>CN(t,"INTERNAL",e),removeTokenListener:e=>J0(t.app,e)}}const xN="@firebase/app-check",DN="0.8.0",MN="app-check",A_="app-check-internal";function LN(){Xn(new bn(MN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return NN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(A_).initialize()})),Xn(new bn(A_,t=>{const e=t.getProvider("app-check").getImmediate();return ON(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Zt(xN,DN)}LN();var VN="firebase",$N="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(VN,$N,"app");const Z0=Symbol("firebaseApp");function oo(t){return Oi()&&gt(Z0,null)||Iu(t)}const Fn=()=>{},FN=typeof window<"u";function yp(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function UN(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function $r(t){return!!t&&typeof t=="object"}const jN=Object.prototype;function BN(t){return $r(t)&&Object.getPrototypeOf(t)===jN}function vp(t){return $r(t)&&t.type==="document"}function qN(t){return $r(t)&&t.type==="collection"}function WN(t){return vp(t)||qN(t)}function HN(t){return $r(t)&&t.type==="query"}function zN(t){return $r(t)&&"ref"in t}function KN(t){return $r(t)&&typeof t.bucket=="string"}function GN(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const QN=Symbol.for("v-scx");function YN(){return Oi(),!!gt(QN,0)}const Cl=new WeakMap;function XN(t,e){if(!Cl.has(t)){const n=Bd(!0);Cl.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Cl.delete(t)}}return Cl.get(t)}const JN=new WeakMap,Sl=new WeakMap;function ZN(t){const e=oo(t);if(!Sl.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{Sl.set(e,i),n(i.value)}];Sl.set(e,r)}return Sl.get(e)}function eO(t,e){const n=Y0(e);F0(n,s=>{const r=ZN();t.value=s,Array.isArray(r)&&r[1](t)})}const R_="@firebase/database",C_="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew="";function tO(t){ew=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ga(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nO(e)}}catch{}return new sO},fr=tw("localStorage"),Df=tw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Fa("@firebase/database"),rO=function(){let t=1;return function(){return t++}}(),nw=function(t){const e=QS(t),n=new WS;n.update(e);const s=n.digest();return vu.encodeByteArray(s)},qa=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qa.apply(null,s):typeof s=="object"?e+=pt(s):e+=s,e+=" "}return e};let vr=null,S_=!0;const iO=function(t,e){U(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(wi.logLevel=me.VERBOSE,vr=wi.log.bind(wi),e&&Df.set("logging_enabled",!0)):typeof t=="function"?vr=t:(vr=null,Df.remove("logging_enabled"))},bt=function(...t){if(S_===!0&&(S_=!1,vr===null&&Df.get("logging_enabled")===!0&&iO(!0)),vr){const e=qa.apply(null,t);vr(e)}},Wa=function(t){return function(...e){bt(t,...e)}},Mf=function(...t){const e="FIREBASE INTERNAL ERROR: "+qa(...t);wi.error(e)},Rr=function(...t){const e=`FIREBASE FATAL ERROR: ${qa(...t)}`;throw wi.error(e),new Error(e)},en=function(...t){const e="FIREBASE WARNING: "+qa(...t);wi.warn(e)},oO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Li="[MIN_NAME]",Cr="[MAX_NAME]",ao=function(t,e){if(t===e)return 0;if(t===Li||e===Cr)return-1;if(e===Li||t===Cr)return 1;{const n=P_(t),s=P_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},lO=function(t,e){return t===e?0:t<e?-1:1},wo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pt(e))},Ep=function(t){if(typeof t!="object"||t===null)return pt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=pt(e[s]),n+=":",n+=Ep(t[e[s]]);return n+="}",n},rw=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iw=function(t){U(!sw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},cO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},hO=new RegExp("^-?(0*)\\d{1,10}$"),fO=-2147483648,dO=2147483647,P_=function(t){if(hO.test(t)){const e=Number(t);if(e>=fO&&e<=dO)return e}return null},Ha=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw en("Exception was thrown by user callback.",n),e},Math.floor(0))}},pO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class Lf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="5",ow="v",aw="s",lw="r",cw="f",uw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hw="ls",fw="p",Vf="ac",dw="websocket",pw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mw(t,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===dw)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yO(t)&&(n.ns=t.namespace);const r=[];return ln(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.counters_={}}incrementCounter(e,n=1){bs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return PS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={},kh={};function Tp(t){const e=t.toString();return Ph[e]||(Ph[e]=new vO),Ph[e]}function EO(t,e){const n=t.toString();return kh[n]||(kh[n]=e()),kh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Ha(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="start",TO="close",IO="pLPCommand",bO="pRTLPCB",gw="id",_w="pw",yw="ser",AO="cb",RO="seg",CO="ts",SO="d",PO="dframe",vw=1870,Ew=30,kO=vw-Ew,NO=25e3,OO=3e4;class fi{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wa(e),this.stats_=Tp(n),this.urlFn=l=>(this.appCheckToken&&(l[Vf]=this.appCheckToken),mw(n,pw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(OO)),aO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ip((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===k_)this.id=a,this.password=l;else if(o===TO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[k_]="t",s[yw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[AO]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ow]=wp,this.transportSessionId&&(s[aw]=this.transportSessionId),this.lastSessionId&&(s[hw]=this.lastSessionId),this.applicationId&&(s[fw]=this.applicationId),this.appCheckToken&&(s[Vf]=this.appCheckToken),typeof location<"u"&&location.hostname&&uw.test(location.hostname)&&(s[lw]=cw);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fi.forceAllow_=!0}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){return fi.forceAllow_?!0:!fi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cO()&&!uO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=s0(n),r=rw(s,kO);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[PO]="t",s[gw]=e,s[_w]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ip{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rO(),window[IO+this.uniqueCallbackIdentifier]=e,window[bO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ip.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){bt("frame writing exception"),a.stack&&bt(a.stack),bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gw]=this.myID,e[_w]=this.myPW,e[yw]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ew+s.length<=vw;){const o=this.pendingSegs.shift();s=s+"&"+RO+r+"="+o.seg+"&"+CO+r+"="+o.ts+"&"+SO+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(NO)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=16384,DO=45e3;let wc=null;typeof MozWebSocket<"u"?wc=MozWebSocket:typeof WebSocket<"u"&&(wc=WebSocket);class fn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wa(this.connId),this.stats_=Tp(n),this.connURL=fn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[ow]=wp,typeof location<"u"&&location.hostname&&uw.test(location.hostname)&&(o[lw]=cw),n&&(o[aw]=n),s&&(o[hw]=s),r&&(o[Vf]=r),i&&(o[fw]=i),mw(e,dw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fr.set("previous_websocket_failure",!0);try{let s;h0(),this.mySock=new wc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wc!==null&&!fn.forceDisallow_}static previouslyFailed(){return fr.isInMemoryStorage||fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ga(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rw(n,xO);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(DO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fi,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=fn&&fn.isAvailable();let s=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[fn];else{const r=this.transports_=[];for(const i of wa.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);wa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=6e4,LO=5e3,VO=10*1024,$O=100*1024,Nh="t",N_="d",FO="s",O_="r",UO="e",x_="o",D_="a",M_="n",L_="p",jO="h";class BO{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wa("c:"+this.id+":"),this.transportManager_=new wa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Qo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$O?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nh in e){const n=e[Nh];n===D_?this.upgradeIfSecondaryHealthy_():n===O_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===x_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wo("t",e),s=wo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:L_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:D_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:M_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wo("t",e),s=wo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wo(Nh,e);if(N_ in e){const s=e[N_];if(n===jO){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===M_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===FO?this.onConnectionShutdown_(s):n===O_?this.onReset_(s):n===UO?Mf("Server Error: "+s):n===x_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wp!==s&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:L_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Tw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tc}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=32,$_=768;class qe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ne(){return new qe("")}function Ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ws(t){return t.pieces_.length-t.pieceNum_}function Ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new qe(t.pieces_,e)}function Iw(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bw(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Aw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new qe(e,0)}function at(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof qe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new qe(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function rn(t,e){const n=Ee(t),s=Ee(e);if(n===null)return e;if(n===s)return rn(Ve(t),Ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rw(t,e){if(Ws(t)!==Ws(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function pn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ws(t)>Ws(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class WO{constructor(e,n){this.errorPrefix_=n,this.parts_=bw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wu(this.parts_[s]);Cw(this)}}function HO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wu(e),Cw(t)}function zO(t){const e=t.parts_.pop();t.byteLength_-=wu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Cw(t){if(t.byteLength_>$_)throw new Error(t.errorPrefix_+"has a key path longer than "+$_+" bytes ("+t.byteLength_+").");if(t.parts_.length>V_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+V_+") or object contains a cycle "+ar(t))}function ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends Tw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new bp}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=1e3,KO=60*5*1e3,F_=30*1e3,GO=1.3,QO=3e4,YO="server_kill",U_=3;class us extends ww{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=us.nextPersistentConnectionId_++,this.log_=Wa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=To,this.maxReconnectDelay_=KO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!h0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(pt(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new ma,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;us.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bs(e,"w")){const s=Di(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=F_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=BS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mf("Unrecognized action received from server: "+pt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=To,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=To,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QO&&(this.reconnectDelay_=To),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+us.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new BO(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{en(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(YO)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&en(h),l())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],If(this.interruptReasons_)&&(this.reconnectDelay_=To,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Ep(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new qe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=U_&&(this.reconnectDelay_=F_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=U_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ew.replace(/\./g,"-")]=1,ap()?e["framework.cordova"]=1:u0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tc.getInstance().currentlyOnline();return If(this.interruptReasons_)&&e}}us.nextPersistentConnectionId_=0;us.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new we(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new we(Li,e),r=new we(Li,n);return this.compare(s,r)!==0}minPost(){return we.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;class Sw extends Su{static get __EMPTY_NODE(){return Pl}static set __EMPTY_NODE(e){Pl=e}compare(e,n){return ao(e.name,n.name)}isDefinedOn(e){throw to("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return we.MIN}maxPost(){return new we(Cr,Pl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new we(e,Pl)}toString(){return".key"}}const Ti=new Sw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl=class{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Qt=class Mo{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Mo.RED,this.left=r??Un.EMPTY_NODE,this.right=i??Un.EMPTY_NODE}copy(e,n,s,r,i){return new Mo(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Un.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Un.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Mo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Mo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Qt.RED=!0;Qt.BLACK=!1;class XO{copy(e,n,s,r,i){return this}insert(e,n,s){return new Qt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Un=class Yl{constructor(e,n=Yl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Yl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new Yl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kl(this.root_,null,this.comparator_,!0,e)}};Un.EMPTY_NODE=new XO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t,e){return ao(t.name,e.name)}function Ap(t,e){return ao(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f;function ZO(t){$f=t}const Pw=function(t){return typeof t=="number"?"number:"+iw(t):"string:"+t},kw=function(t){if(t.isLeafNode()){const e=t.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bs(e,".sv"),"Priority must be a string or number.")}else U(t===$f||t.isEmpty(),"priority of unexpected type.");U(t===$f||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j_;class it{constructor(e,n=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kw(this.priorityNode_)}static set __childrenNodeConstructor(e){j_=e}static get __childrenNodeConstructor(){return j_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:Ee(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||Ws(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iw(this.value_):e+=this.value_,this.lazyHash_=nw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=it.VALUE_TYPE_ORDER.indexOf(n),i=it.VALUE_TYPE_ORDER.indexOf(s);return U(r>=0,"Unknown leaf type: "+n),U(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nw,Ow;function ex(t){Nw=t}function tx(t){Ow=t}class nx extends Su{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?ao(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return we.MIN}maxPost(){return new we(Cr,new it("[PRIORITY-POST]",Ow))}makePost(e,n){const s=Nw(e);return new we(n,new it("[PRIORITY-POST]",s))}toString(){return".priority"}}const St=new nx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=Math.log(2);class rx{constructor(e){const n=i=>parseInt(Math.log(i)/sx,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ic=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Qt(f,h.node,Qt.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=r(l,d),p=r(d+1,c);return h=t[d],f=n?n(h):h,new Qt(f,h.node,Qt.BLACK,m,p)}},i=function(l){let c=null,u=null,h=t.length;const f=function(m,p){const g=h-m,v=h;h-=m;const T=r(g+1,v),I=t[g],w=n?n(I):I;d(new Qt(w,I.node,p,null,T))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const p=l.nextBitIsOne(),g=Math.pow(2,l.count-(m+1));p?f(g,Qt.BLACK):(f(g,Qt.BLACK),f(g,Qt.RED))}return u},o=new rx(t.length),a=i(o);return new Un(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh;const Zr={};class as{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return U(Zr&&St,"ChildrenNode.ts has not been loaded"),Oh=Oh||new as({".priority":Zr},{".priority":St}),Oh}get(e){const n=Di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Un?n:null}hasIndex(e){return bs(this.indexSet_,e.toString())}addIndex(e,n){U(e!==Ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(we.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Ic(s,e.getCompare()):a=Zr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new as(u,c)}addToIndexes(e,n){const s=fc(this.indexes_,(r,i)=>{const o=Di(this.indexSet_,i);if(U(o,"Missing index implementation for "+i),r===Zr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(we.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ic(a,o.getCompare())}else return Zr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new we(e.name,a))),l.insert(e,e.node)}});return new as(s,this.indexSet_)}removeFromIndexes(e,n){const s=fc(this.indexes_,r=>{if(r===Zr)return r;{const i=n.get(e.name);return i?r.remove(new we(e.name,i)):r}});return new as(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;class Ce{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&kw(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Io||(Io=new Ce(new Un(Ap),null,as.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Io}updatePriority(e){return this.children_.isEmpty()?this:new Ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Io:n}}getChild(e){const n=Ee(e);return n===null?this:this.getImmediateChild(n).getChild(Ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new we(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Io:this.priorityNode_;return new Ce(r,o,i)}}updateChild(e,n){const s=Ee(e);if(s===null)return n;{U(Ee(e)!==".priority"||Ws(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ve(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(St,(o,a)=>{n[o]=a.val(e),s++,i&&Ce.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pw(this.getPriority().val())+":"),this.forEachChild(St,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":nw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new we(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new we(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new we(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,we.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,we.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===za?-1:0}withIndex(e){if(e===Ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(St),r=n.getIterator(St);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ti?null:this.indexMap_.get(e.toString())}}Ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ix extends Ce{constructor(){super(new Un(Ap),Ce.EMPTY_NODE,as.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ce.EMPTY_NODE}isEmpty(){return!1}}const za=new ix;Object.defineProperties(we,{MIN:{value:new we(Li,Ce.EMPTY_NODE)},MAX:{value:new we(Cr,za)}});Sw.__EMPTY_NODE=Ce.EMPTY_NODE;it.__childrenNodeConstructor=Ce;ZO(za);tx(za);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=!0;function At(t,e=null){if(t===null)return Ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new it(n,At(e))}if(!(t instanceof Array)&&ox){const n=[];let s=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=At(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new we(o,l)))}}),n.length===0)return Ce.EMPTY_NODE;const i=Ic(n,JO,o=>o.name,Ap);if(s){const o=Ic(n,St.getCompare());return new Ce(i,At(e),new as({".priority":o},{".priority":St}))}else return new Ce(i,At(e),as.Default)}else{let n=Ce.EMPTY_NODE;return ln(t,(s,r)=>{if(bs(t,s)&&s.substring(0,1)!=="."){const i=At(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(At(e))}}ex(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax extends Su{constructor(e){super(),this.indexPath_=e,U(!_e(e)&&Ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?ao(e.name,n.name):i}makePost(e,n){const s=At(e),r=Ce.EMPTY_NODE.updateChild(this.indexPath_,s);return new we(n,r)}maxPost(){const e=Ce.EMPTY_NODE.updateChild(this.indexPath_,za);return new we(Cr,e)}toString(){return bw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx extends Su{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ao(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return we.MIN}maxPost(){return we.MAX}makePost(e,n){const s=At(e);return new we(n,s)}toString(){return".value"}}const cx=new lx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){return{type:"value",snapshotNode:t}}function hx(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fx(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function B_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=St}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===St}copy(){const e=new Rp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function q_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===St?n="$priority":t.index_===cx?n="$value":t.index_===Ti?n="$key":(U(t.index_ instanceof ax,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=pt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+pt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=pt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+pt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function W_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==St&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends ww{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Wa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=bc.getListenId_(e,s),a={};this.listens_[o]=a;const l=q_(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),Di(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const s=bc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=q_(e._queryParams),s=e._path.toString(),r=new ma;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+so(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ga(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.rootNode_=Ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return{value:null,children:new Map}}function xw(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ee(e);t.children.has(s)||t.children.set(s,Ac());const r=t.children.get(s);e=Ve(e),xw(r,e,n)}}function Ff(t,e,n){t.value!==null?n(e,t.value):mx(t,(s,r)=>{const i=new qe(e.toString()+"/"+s);Ff(r,i,n)})}function mx(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=10*1e3,_x=30*1e3,yx=5*60*1e3;class vx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gx(e);const s=H_+(_x-H_)*Math.random();Qo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ln(e,(r,i)=>{i>0&&bs(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Qo(this.reportStats_.bind(this),Math.floor(Math.random()*2*yx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jn||(jn={}));function Dw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Lw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=jn.ACK_USER_WRITE,this.source=Dw()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qe(e));return new Rc(Ne(),n,this.revert)}}else return U(Ee(this.path)===e,"operationForChild called for unrelated child."),new Rc(Ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=jn.OVERWRITE}operationForChild(e){return _e(this.path)?new Sr(this.source,Ne(),this.snap.getImmediateChild(e)):new Sr(this.source,Ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=jn.MERGE}operationForChild(e){if(_e(this.path)){const n=this.children.subtree(new qe(e));return n.isEmpty()?null:n.value?new Sr(this.source,Ne(),n.value):new Ta(this.source,Ne(),n)}else return U(Ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ta(this.source,Ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ex(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(dx(o.childName,o.snapshotNode))}),bo(t,r,"child_removed",e,s,n),bo(t,r,"child_added",e,s,n),bo(t,r,"child_moved",i,s,n),bo(t,r,"child_changed",e,s,n),bo(t,r,"value",e,s,n),r}function bo(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Tx(t,a,l)),o.forEach(a=>{const l=wx(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function wx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Tx(t,e,n){if(e.childName==null||n.childName==null)throw to("Should only compare child_ events.");const s=new we(e.childName,e.snapshotNode),r=new we(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t,e){return{eventCache:t,serverCache:e}}function Yo(t,e,n,s){return Vw(new Cp(e,n,s),t.serverCache)}function $w(t,e,n,s){return Vw(t.eventCache,new Cp(e,n,s))}function Uf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh;const Ix=()=>(xh||(xh=new Un(lO)),xh);class Le{constructor(e,n=Ix()){this.value=e,this.children=n}static fromObject(e){let n=new Le(null);return ln(e,(s,r)=>{n=n.set(new qe(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ne(),value:this.value};if(_e(e))return null;{const s=Ee(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ve(e),n);return i!=null?{path:at(new qe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=Ee(e),s=this.children.get(n);return s!==null?s.subtree(Ve(e)):new Le(null)}}set(e,n){if(_e(e))return new Le(n,this.children);{const s=Ee(e),i=(this.children.get(s)||new Le(null)).set(Ve(e),n),o=this.children.insert(s,i);return new Le(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=Ee(e),s=this.children.get(n);if(s){const r=s.remove(Ve(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Le(null):new Le(this.value,i)}else return this}}get(e){if(_e(e))return this.value;{const n=Ee(e),s=this.children.get(n);return s?s.get(Ve(e)):null}}setTree(e,n){if(_e(e))return n;{const s=Ee(e),i=(this.children.get(s)||new Le(null)).setTree(Ve(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Le(this.value,o)}}fold(e){return this.fold_(Ne(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(at(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ne(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(_e(e))return null;{const i=Ee(e),o=this.children.get(i);return o?o.findOnPath_(Ve(e),at(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ne(),n)}foreachOnPath_(e,n,s){if(_e(e))return this;{this.value&&s(n,this.value);const r=Ee(e),i=this.children.get(r);return i?i.foreachOnPath_(Ve(e),at(n,r),s):new Le(null)}}foreach(e){this.foreach_(Ne(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(at(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.writeTree_=e}static empty(){return new wn(new Le(null))}}function Xo(t,e,n){if(_e(e))return new wn(new Le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=rn(r,e);return i=i.updateChild(o,n),new wn(t.writeTree_.set(r,i))}else{const r=new Le(n),i=t.writeTree_.setTree(e,r);return new wn(i)}}}function z_(t,e,n){let s=t;return ln(n,(r,i)=>{s=Xo(s,at(e,r),i)}),s}function K_(t,e){if(_e(e))return wn.empty();{const n=t.writeTree_.setTree(e,new Le(null));return new wn(n)}}function jf(t,e){return Fr(t,e)!=null}function Fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rn(n.path,e)):null}function G_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(St,(s,r)=>{e.push(new we(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new we(s,r.value))}),e}function js(t,e){if(_e(e))return t;{const n=Fr(t,e);return n!=null?new wn(new Le(n)):new wn(t.writeTree_.subtree(e))}}function Bf(t){return t.writeTree_.isEmpty()}function Vi(t,e){return Fw(Ne(),t.writeTree_,e)}function Fw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(U(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Fw(at(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(at(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e){return Hw(e,t)}function bx(t,e,n,s,r){U(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Xo(t.visibleWrites,e,n)),t.lastWriteId=s}function Ax(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Rx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Cx(a,s.path)?r=!1:pn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return Sx(t),!0;if(s.snap)t.visibleWrites=K_(t.visibleWrites,s.path);else{const a=s.children;ln(a,l=>{t.visibleWrites=K_(t.visibleWrites,at(s.path,l))})}return!0}else return!1}function Cx(t,e){if(t.snap)return pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pn(at(t.path,n),e))return!0;return!1}function Sx(t){t.visibleWrites=jw(t.allWrites,Px,Ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Px(t){return t.visible}function jw(t,e,n){let s=wn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)pn(n,o)?(a=rn(n,o),s=Xo(s,a,i.snap)):pn(o,n)&&(a=rn(o,n),s=Xo(s,Ne(),i.snap.getChild(a)));else if(i.children){if(pn(n,o))a=rn(n,o),s=z_(s,a,i.children);else if(pn(o,n))if(a=rn(o,n),_e(a))s=z_(s,Ne(),i.children);else{const l=Di(i.children,Ee(a));if(l){const c=l.getChild(Ve(a));s=Xo(s,Ne(),c)}}}else throw to("WriteRecord should have .snap or .children")}}return s}function Bw(t,e,n,s,r){if(!s&&!r){const i=Fr(t.visibleWrites,e);if(i!=null)return i;{const o=js(t.visibleWrites,e);if(Bf(o))return n;if(n==null&&!jf(o,Ne()))return null;{const a=n||Ce.EMPTY_NODE;return Vi(o,a)}}}else{const i=js(t.visibleWrites,e);if(!r&&Bf(i))return n;if(!r&&n==null&&!jf(i,Ne()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(pn(c.path,e)||pn(e,c.path))},a=jw(t.allWrites,o,e),l=n||Ce.EMPTY_NODE;return Vi(a,l)}}}function kx(t,e,n){let s=Ce.EMPTY_NODE;const r=Fr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(St,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=js(t.visibleWrites,e);return n.forEachChild(St,(o,a)=>{const l=Vi(js(i,new qe(o)),a);s=s.updateImmediateChild(o,l)}),G_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=js(t.visibleWrites,e);return G_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Nx(t,e,n,s,r){U(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=at(e,n);if(jf(t.visibleWrites,i))return null;{const o=js(t.visibleWrites,i);return Bf(o)?r.getChild(n):Vi(o,r.getChild(n))}}function Ox(t,e,n,s){const r=at(e,n),i=Fr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=js(t.visibleWrites,r);return Vi(o,s.getNode().getImmediateChild(n))}else return null}function xx(t,e){return Fr(t.visibleWrites,e)}function Dx(t,e,n,s,r,i,o){let a;const l=js(t.visibleWrites,e),c=Fr(l,Ne());if(c!=null)a=c;else if(n!=null)a=Vi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<r;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function Mx(){return{visibleWrites:wn.empty(),allWrites:[],lastWriteId:-1}}function qf(t,e,n,s){return Bw(t.writeTree,t.treePath,e,n,s)}function qw(t,e){return kx(t.writeTree,t.treePath,e)}function Q_(t,e,n,s){return Nx(t.writeTree,t.treePath,e,n,s)}function Cc(t,e){return xx(t.writeTree,at(t.treePath,e))}function Lx(t,e,n,s,r,i){return Dx(t.writeTree,t.treePath,e,n,s,r,i)}function Sp(t,e,n){return Ox(t.writeTree,t.treePath,e,n)}function Ww(t,e){return Hw(at(t.treePath,e),t.writeTree)}function Hw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,B_(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,fx(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,hx(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,B_(s,e.snapshotNode,r.oldSnap));else throw to("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zw=new $x;class Pp{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sp(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),i=Lx(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function Fx(t,e){U(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ux(t,e,n,s,r){const i=new Vx;let o,a;if(n.type===jn.OVERWRITE){const c=n;c.source.fromUser?o=Wf(t,e,c.path,c.snap,s,r,i):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!_e(c.path),o=Sc(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===jn.MERGE){const c=n;c.source.fromUser?o=Bx(t,e,c.path,c.children,s,r,i):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hf(t,e,c.path,c.children,s,r,a,i))}else if(n.type===jn.ACK_USER_WRITE){const c=n;c.revert?o=Hx(t,e,c.path,s,r,i):o=qx(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===jn.LISTEN_COMPLETE)o=Wx(t,e,n.path,s,i);else throw to("Unknown operation type: "+n.type);const l=i.getChanges();return jx(e,o,l),{viewCache:o,changes:l}}function jx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Uf(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(ux(Uf(e)))}}function Kw(t,e,n,s,r,i){const o=e.eventCache;if(Cc(s,n)!=null)return e;{let a,l;if(_e(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pr(e),u=c instanceof Ce?c:Ce.EMPTY_NODE,h=qw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=qf(s,Pr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=Ee(n);if(c===".priority"){U(Ws(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Q_(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ve(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Q_(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Sp(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return Yo(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function Sc(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(_e(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Ee(n);if(!l.isCompleteForPath(n)&&Ws(n)>1)return e;const m=Ve(n),g=l.getNode().getImmediateChild(d).updateChild(m,s);d===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),d,g,m,zw,null)}const h=$w(e,c,l.isFullyInitialized()||_e(n),u.filtersNodes()),f=new Pp(r,h,i);return Kw(t,h,n,r,f,a)}function Wf(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Pp(r,e,i);if(_e(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Yo(e,c,!0,t.filter.filtersNodes());else{const h=Ee(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Yo(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Ve(n),d=a.getNode().getImmediateChild(h);let m;if(_e(f))m=s;else{const p=u.getCompleteChild(h);p!=null?Iw(f)===".priority"&&p.getChild(Aw(f)).isEmpty()?m=p:m=p.updateChild(f,s):m=Ce.EMPTY_NODE}if(d.equals(m))l=e;else{const p=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=Yo(e,p,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Y_(t,e){return t.eventCache.isCompleteForChild(e)}function Bx(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=at(n,l);Y_(e,Ee(u))&&(a=Wf(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=at(n,l);Y_(e,Ee(u))||(a=Wf(t,a,u,c,r,i,o))}),a}function X_(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Hf(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;_e(n)?c=s:c=new Le(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=X_(t,d,f);l=Sc(t,l,new qe(h),m,r,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),p=X_(t,m,f);l=Sc(t,l,new qe(h),p,r,i,o,a)}}),l}function qx(t,e,n,s,r,i,o){if(Cc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(_e(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Sc(t,e,n,l.getNode().getChild(n),r,i,a,o);if(_e(n)){let c=new Le(null);return l.getNode().forEachChild(Ti,(u,h)=>{c=c.set(new qe(u),h)}),Hf(t,e,n,c,r,i,a,o)}else return e}else{let c=new Le(null);return s.foreach((u,h)=>{const f=at(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Hf(t,e,n,c,r,i,a,o)}}function Wx(t,e,n,s,r){const i=e.serverCache,o=$w(e,i.getNode(),i.isFullyInitialized()||_e(n),i.isFiltered());return Kw(t,o,n,s,zw,r)}function Hx(t,e,n,s,r,i){let o;if(Cc(s,n)!=null)return e;{const a=new Pp(s,e,r),l=e.eventCache.getNode();let c;if(_e(n)||Ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=qf(s,Pr(e));else{const h=e.serverCache.getNode();U(h instanceof Ce,"serverChildren would be complete if leaf node"),u=qw(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=Ee(n);let h=Sp(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ve(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ce.EMPTY_NODE,Ve(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qf(s,Pr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Cc(s,Ne())!=null,Yo(e,c,o,t.filter.filtersNodes())}}function zx(t,e){const n=Pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(Ee(e)).isEmpty())?n.getChild(e):null}function J_(t,e,n,s){e.type===jn.MERGE&&e.source.queryId!==null&&(U(Pr(t.viewCache_),"We should always have a full cache before handling merges"),U(Uf(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=Ux(t.processor_,r,e,n,s);return Fx(t.processor_,i.viewCache),U(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Kx(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Kx(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return Ex(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z_;function Gx(t){U(!Z_,"__referenceConstructor has already been defined"),Z_=t}function kp(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return U(i!=null,"SyncTree gave us an op for an invalid query."),J_(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(J_(o,e,n,s));return i}}function Np(t,e){let n=null;for(const s of t.views.values())n=n||zx(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey;function Qx(t){U(!ey,"__referenceConstructor has already been defined"),ey=t}class ty{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=Mx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yx(t,e,n,s,r){return bx(t.pendingWriteTree_,e,n,s,r),r?ku(t,new Sr(Dw(),e,n)):[]}function di(t,e,n=!1){const s=Ax(t.pendingWriteTree_,e);if(Rx(t.pendingWriteTree_,e)){let i=new Le(null);return s.snap!=null?i=i.set(Ne(),!0):ln(s.children,o=>{i=i.set(new qe(o),!0)}),ku(t,new Rc(s.path,i,n))}else return[]}function Pu(t,e,n){return ku(t,new Sr(Mw(),e,n))}function Xx(t,e,n){const s=Le.fromObject(n);return ku(t,new Ta(Mw(),e,s))}function Jx(t,e,n,s){const r=Xw(t,s);if(r!=null){const i=Jw(r),o=i.path,a=i.queryId,l=rn(o,e),c=new Sr(Lw(a),l,n);return Zw(t,o,c)}else return[]}function Zx(t,e,n,s){const r=Xw(t,s);if(r){const i=Jw(r),o=i.path,a=i.queryId,l=rn(o,e),c=Le.fromObject(n),u=new Ta(Lw(a),l,c);return Zw(t,o,u)}else return[]}function Gw(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rn(o,e),c=Np(a,l);if(c)return c});return Bw(r,e,i,n,!0)}function ku(t,e){return Qw(e,t.syncPointTree_,null,Uw(t.pendingWriteTree_,Ne()))}function Qw(t,e,n,s){if(_e(t.path))return Yw(t,e,n,s);{const r=e.get(Ne());n==null&&r!=null&&(n=Np(r,Ne()));let i=[];const o=Ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ww(s,o);i=i.concat(Qw(a,l,c,u))}return r&&(i=i.concat(kp(r,t,s,n))),i}}function Yw(t,e,n,s){const r=e.get(Ne());n==null&&r!=null&&(n=Np(r,Ne()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ww(s,o),u=t.operationForChild(o);u&&(i=i.concat(Yw(u,a,l,c)))}),r&&(i=i.concat(kp(r,t,s,n))),i}function Xw(t,e){return t.tagToQueryMap.get(e)}function Jw(t){const e=t.indexOf("$");return U(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new qe(t.substr(0,e))}}function Zw(t,e,n){const s=t.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const r=Uw(t.pendingWriteTree_,e);return kp(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Op(n)}node(){return this.node_}}class xp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=at(this.path_,e);return new xp(this.syncTree_,n)}node(){return Gw(this.syncTree_,this.path_)}}const eD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ny=function(t,e,n){if(!t||typeof t!="object")return t;if(U(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nD(t[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+t)}},nD=function(t,e,n){t.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const r=e.node();if(U(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},sD=function(t,e,n,s){return Dp(e,new xp(n,t),s)},rD=function(t,e,n){return Dp(t,new Op(e),n)};function Dp(t,e,n){const s=t.getPriority().val(),r=ny(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=ny(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new it(a,At(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new it(r))),o.forEachChild(St,(a,l)=>{const c=Dp(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Lp(t,e){let n=e instanceof qe?e:new qe(e),s=t,r=Ee(n);for(;r!==null;){const i=Di(s.node.children,r)||{children:{},childCount:0};s=new Mp(r,s,i),n=Ve(n),r=Ee(n)}return s}function lo(t){return t.node.value}function eT(t,e){t.node.value=e,zf(t)}function tT(t){return t.node.childCount>0}function iD(t){return lo(t)===void 0&&!tT(t)}function Nu(t,e){ln(t.node.children,(n,s)=>{e(new Mp(n,t,s))})}function nT(t,e,n,s){n&&!s&&e(t),Nu(t,r=>{nT(r,e,!0,s)}),n&&s&&e(t)}function oD(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ka(t){return new qe(t.parent===null?t.name:Ka(t.parent)+"/"+t.name)}function zf(t){t.parent!==null&&aD(t.parent,t.name,t)}function aD(t,e,n){const s=iD(n),r=bs(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,zf(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,zf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=/[\[\].#$\/\u0000-\u001F\u007F]/,cD=/[\[\].#$\u0000-\u001F\u007F]/,Dh=10*1024*1024,sT=function(t){return typeof t=="string"&&t.length!==0&&!lD.test(t)},uD=function(t){return typeof t=="string"&&t.length!==0&&!cD.test(t)},hD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uD(t)},rT=function(t,e,n){const s=n instanceof qe?new WO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ar(s));if(typeof e=="function")throw new Error(t+"contains a function "+ar(s)+" with contents = "+e.toString());if(sw(e))throw new Error(t+"contains "+e.toString()+" "+ar(s));if(typeof e=="string"&&e.length>Dh/3&&wu(e)>Dh)throw new Error(t+"contains a string greater than "+Dh+" utf8 bytes "+ar(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(ln(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!sT(o)))throw new Error(t+" contains an invalid key ("+o+") "+ar(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HO(s,o),rT(t,a,s),zO(s)}),r&&i)throw new Error(t+' contains ".value" child '+ar(s)+" in addition to actual children.")}},fD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hD(n))throw new Error(GS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pD(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Rw(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Ur(t,e,n){pD(t,n),mD(t,s=>pn(s,e)||pn(e,s))}function mD(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(gD(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();vr&&bt("event: "+n.toString()),Ha(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="repo_interrupt",yD=25;class vD{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ac(),this.transactionQueueTree_=new Mp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ED(t,e,n){if(t.stats_=Tp(t.repoInfo_),t.forceRestClient_||pO())t.server_=new bc(t.repoInfo_,(s,r,i,o)=>{sy(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ry(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new us(t.repoInfo_,e,(s,r,i,o)=>{sy(t,s,r,i,o)},s=>{ry(t,s)},s=>{TD(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=EO(t.repoInfo_,()=>new vx(t.stats_,t.server_)),t.infoData_=new px,t.infoSyncTree_=new ty({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Pu(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vp(t,"connected",!1),t.serverSyncTree_=new ty({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Ur(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function wD(t){const n=t.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function iT(t){return eD({timestamp:wD(t)})}function sy(t,e,n,s,r){t.dataUpdateCount++;const i=new qe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=fc(n,c=>At(c));o=Zx(t.serverSyncTree_,i,l,r)}else{const l=At(n);o=Jx(t.serverSyncTree_,i,l,r)}else if(s){const l=fc(n,c=>At(c));o=Xx(t.serverSyncTree_,i,l)}else{const l=At(n);o=Pu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Fp(t,i)),Ur(t.eventQueue_,a,o)}function ry(t,e){Vp(t,"connected",e),e===!1&&bD(t)}function TD(t,e){ln(e,(n,s)=>{Vp(t,n,s)})}function Vp(t,e,n){const s=new qe("/.info/"+e),r=At(n);t.infoData_.updateSnapshot(s,r);const i=Pu(t.infoSyncTree_,s,r);Ur(t.eventQueue_,s,i)}function ID(t){return t.nextWriteId_++}function bD(t){oT(t,"onDisconnectEvents");const e=iT(t),n=Ac();Ff(t.onDisconnect_,Ne(),(r,i)=>{const o=sD(r,i,t.serverSyncTree_,e);xw(n,r,o)});let s=[];Ff(n,Ne(),(r,i)=>{s=s.concat(Pu(t.serverSyncTree_,r,i));const o=SD(t,r);Fp(t,o)}),t.onDisconnect_=Ac(),Ur(t.eventQueue_,Ne(),s)}function AD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_D)}function oT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),bt(n,...e)}function aT(t,e,n){return Gw(t.serverSyncTree_,e,n)||Ce.EMPTY_NODE}function $p(t,e=t.transactionQueueTree_){if(e||Ou(t,e),lo(e)){const n=cT(t,e);U(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&RD(t,Ka(e),n)}else tT(e)&&Nu(e,n=>{$p(t,n)})}function RD(t,e,n){const s=n.map(c=>c.currentWriteId),r=aT(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];U(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=rn(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{oT(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(di(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ou(t,Lp(t.transactionQueueTree_,e)),$p(t,t.transactionQueueTree_),Ur(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ha(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{en("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Fp(t,e)}},o)}function Fp(t,e){const n=lT(t,e),s=Ka(n),r=cT(t,n);return CD(t,r,s),s}function CD(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=rn(n,l.path);let u=!1,h;if(U(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(di(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yD)u=!0,h="maxretry",r=r.concat(di(t.serverSyncTree_,l.currentWriteId,!0));else{const f=aT(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){rT("transaction failed: Data returned ",d,l.path);let m=At(d);typeof d=="object"&&d!=null&&bs(d,".priority")||(m=m.updatePriority(f.getPriority()));const g=l.currentWriteId,v=iT(t),T=rD(m,f,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=T,l.currentWriteId=ID(t),o.splice(o.indexOf(g),1),r=r.concat(Yx(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat(di(t.serverSyncTree_,g,!0))}else u=!0,h="nodata",r=r.concat(di(t.serverSyncTree_,l.currentWriteId,!0))}Ur(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ou(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ha(s[a]);$p(t,t.transactionQueueTree_)}function lT(t,e){let n,s=t.transactionQueueTree_;for(n=Ee(e);n!==null&&lo(s)===void 0;)s=Lp(s,n),e=Ve(e),n=Ee(e);return s}function cT(t,e){const n=[];return uT(t,e,n),n.sort((s,r)=>s.order-r.order),n}function uT(t,e,n){const s=lo(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Nu(e,r=>{uT(t,r,n)})}function Ou(t,e){const n=lo(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,eT(e,n.length>0?n:void 0)}Nu(e,s=>{Ou(t,s)})}function SD(t,e){const n=Ka(lT(t,e)),s=Lp(t.transactionQueueTree_,e);return oD(s,r=>{Mh(t,r)}),Mh(t,s),nT(s,r=>{Mh(t,r)}),n}function Mh(t,e){const n=lo(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(U(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(U(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(di(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?eT(e,void 0):n.length=i+1,Ur(t.eventQueue_,Ka(e),r);for(let o=0;o<s.length;o++)Ha(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function kD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):en(`Invalid query segment '${n}' in query '${t}'`)}return e}const iy=function(t,e){const n=ND(t),s=n.namespace;n.domain==="firebase.com"&&Rr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Rr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||oO();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _O(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new qe(n.pathString)}},ND=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=PD(t.substring(u,h)));const f=kD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return _e(this._path)?null:Iw(this._path)}get ref(){return new co(this._repo,this._path)}get _queryIdentifier(){const e=W_(this._queryParams),n=Ep(e);return n==="{}"?"default":n}get _queryObject(){return W_(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof Up))return!1;const n=this._repo===e._repo,s=Rw(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+qO(this._path)}}class co extends Up{constructor(e,n){super(e,n,new Rp,!1)}get parent(){const e=Aw(this._path);return e===null?null:new co(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}Gx(co);Qx(co);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="FIREBASE_DATABASE_EMULATOR_HOST",Kf={};let xD=!1;function DD(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Rr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=iy(i,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[OD]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=iy(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Lf(Lf.OWNER):new gO(t.name,t.options,e);fD("Invalid Firebase Database URL",o),_e(o.path)||Rr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=LD(a,t,u,new mO(t.name,n));return new VD(h,t)}function MD(t,e){const n=Kf[e];(!n||n[t.key]!==t)&&Rr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),AD(t),delete n[t.key]}function LD(t,e,n,s){let r=Kf[e.name];r||(r={},Kf[e.name]=r);let i=r[t.toURLString()];return i&&Rr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new vD(t,xD,n,s),r[t.toURLString()]=i,i}class VD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ED(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new co(this._repo,Ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t){tO(Ys),Xn(new bn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return DD(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Zt(R_,C_,t),Zt(R_,C_,"esm2017")}us.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};us.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$D();var FD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,jp=jp||{},re=FD||self;function xu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ga(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UD(t){return Object.prototype.hasOwnProperty.call(t,Lh)&&t[Lh]||(t[Lh]=++jD)}var Lh="closure_uid_"+(1e9*Math.random()>>>0),jD=0;function BD(t,e,n){return t.call.apply(t.bind,arguments)}function qD(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=BD:Pt=qD,Pt.apply(null,arguments)}function Nl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Js(){this.s=this.s,this.o=this.o}var WD=0;Js.prototype.s=!1;Js.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),WD!=0)&&UD(this)};Js.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bp(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function oy(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(xu(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var HD=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",()=>{},e),re.removeEventListener("test",()=>{},e)}catch{}return t}();function Ia(t){return/^[\s\xa0]*$/.test(t)}function Du(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function Vn(t){return Du().indexOf(t)!=-1}function qp(t){return qp[" "](t),t}qp[" "]=function(){};function zD(t,e){var n=$M;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var KD=Vn("Opera"),$i=Vn("Trident")||Vn("MSIE"),fT=Vn("Edge"),Gf=fT||$i,dT=Vn("Gecko")&&!(Du().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge"))&&!(Vn("Trident")||Vn("MSIE"))&&!Vn("Edge"),GD=Du().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge");function pT(){var t=re.document;return t?t.documentMode:void 0}var Qf;e:{var Vh="",$h=function(){var t=Du();if(dT)return/rv:([^\);]+)(\)|;)/.exec(t);if(fT)return/Edge\/([\d\.]+)/.exec(t);if($i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GD)return/WebKit\/(\S+)/.exec(t);if(KD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($h&&(Vh=$h?$h[1]:""),$i){var Fh=pT();if(Fh!=null&&Fh>parseFloat(Vh)){Qf=String(Fh);break e}}Qf=Vh}var Yf;if(re.document&&$i){var ay=pT();Yf=ay||parseInt(Qf,10)||void 0}else Yf=void 0;var QD=Yf;function ba(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dT){e:{try{qp(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ba.$.h.call(this)}}ut(ba,kt);var YD={2:"touch",3:"pen",4:"mouse"};ba.prototype.h=function(){ba.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qa="closure_listenable_"+(1e6*Math.random()|0),XD=0;function JD(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++XD,this.fa=this.ia=!1}function Mu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wp(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ZD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function mT(t){const e={};for(const n in t)e[n]=t[n];return e}const ly="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gT(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<ly.length;i++)n=ly[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Lu(t){this.src=t,this.g={},this.h=0}Lu.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Jf(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new JD(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Xf(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=hT(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Mu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jf(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Hp="closure_lm_"+(1e6*Math.random()|0),Uh={};function _T(t,e,n,s,r){if(s&&s.once)return vT(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)_T(t,e[i],n,s,r);return null}return n=Gp(n),t&&t[Qa]?t.O(e,n,Ga(s)?!!s.capture:!!s,r):yT(t,e,n,!1,s,r)}function yT(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ga(r)?!!r.capture:!!r,a=Kp(t);if(a||(t[Hp]=a=new Lu(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=eM(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)HD||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wT(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eM(){function t(n){return e.call(t.src,t.listener,n)}const e=tM;return t}function vT(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vT(t,e[i],n,s,r);return null}return n=Gp(n),t&&t[Qa]?t.P(e,n,Ga(s)?!!s.capture:!!s,r):yT(t,e,n,!0,s,r)}function ET(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ET(t,e[i],n,s,r);else s=Ga(s)?!!s.capture:!!s,n=Gp(n),t&&t[Qa]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Jf(i,n,s,r),-1<n&&(Mu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jf(e,n,s,r)),(n=-1<t?e[t]:null)&&zp(n))}function zp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qa])Xf(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wT(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Kp(e))?(Xf(n,t),n.h==0&&(n.src=null,e[Hp]=null)):Mu(t)}}}function wT(t){return t in Uh?Uh[t]:Uh[t]="on"+t}function tM(t,e){if(t.fa)t=!0;else{e=new ba(e,this);var n=t.listener,s=t.la||t.src;t.ia&&zp(t),t=n.call(s,e)}return t}function Kp(t){return t=t[Hp],t instanceof Lu?t:null}var jh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gp(t){return typeof t=="function"?t:(t[jh]||(t[jh]=function(e){return t.handleEvent(e)}),t[jh])}function ct(){Js.call(this),this.i=new Lu(this),this.S=this,this.J=null}ut(ct,Js);ct.prototype[Qa]=!0;ct.prototype.removeEventListener=function(t,e,n,s){ET(this,t,e,n,s)};function _t(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var r=e;e=new kt(s,t),gT(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ol(o,s,!0,e)&&r}if(o=e.g=t,r=Ol(o,s,!0,e)&&r,r=Ol(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ol(o,s,!1,e)&&r}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Mu(n[s]);delete t.g[e],t.h--}}this.J=null};ct.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ct.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ol(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Xf(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Qp=re.JSON.stringify;class nM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sM(){var t=Yp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rM{constructor(){this.h=this.g=null}add(e,n){const s=TT.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var TT=new nM(()=>new iM,t=>t.reset());class iM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aM(t){re.setTimeout(()=>{throw t},0)}let Aa,Ra=!1,Yp=new rM,IT=()=>{const t=re.Promise.resolve(void 0);Aa=()=>{t.then(lM)}};var lM=()=>{for(var t;t=sM();){try{t.h.call(t.g)}catch(n){aM(n)}var e=TT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ra=!1};function Vu(t,e){ct.call(this),this.h=t||1,this.g=e||re,this.j=Pt(this.qb,this),this.l=Date.now()}ut(Vu,ct);j=Vu.prototype;j.ga=!1;j.T=null;j.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_t(this,"tick"),this.ga&&(Xp(this),this.start()))}};j.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}j.N=function(){Vu.$.N.call(this),Xp(this),delete this.g};function Jp(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function bT(t){t.g=Jp(()=>{t.g=null,t.i&&(t.i=!1,bT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cM extends Js{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bT(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ca(t){Js.call(this),this.h=t,this.g={}}ut(Ca,Js);var cy=[];function AT(t,e,n,s){Array.isArray(n)||(n&&(cy[0]=n.toString()),n=cy);for(var r=0;r<n.length;r++){var i=_T(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function RT(t){Wp(t.g,function(e,n){this.g.hasOwnProperty(n)&&zp(e)},t),t.g={}}Ca.prototype.N=function(){Ca.$.N.call(this),RT(this)};Ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $u(){this.g=!0}$u.prototype.Ea=function(){this.g=!1};function uM(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function hM(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function pi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dM(t,n)+(s?" "+s:"")})}function fM(t,e){t.info(function(){return"TIMEOUT: "+e})}$u.prototype.info=function(){};function dM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Qp(n)}catch{return e}}var jr={},uy=null;function Fu(){return uy=uy||new ct}jr.Ta="serverreachability";function CT(t){kt.call(this,jr.Ta,t)}ut(CT,kt);function Sa(t){const e=Fu();_t(e,new CT(e))}jr.STAT_EVENT="statevent";function ST(t,e){kt.call(this,jr.STAT_EVENT,t),this.stat=e}ut(ST,kt);function Lt(t){const e=Fu();_t(e,new ST(e,t))}jr.Ua="timingevent";function PT(t,e){kt.call(this,jr.Ua,t),this.size=e}ut(PT,kt);function Ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Uu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zp(){}Zp.prototype.h=null;function hy(t){return t.h||(t.h=t.i())}function NT(){}var Xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function em(){kt.call(this,"d")}ut(em,kt);function tm(){kt.call(this,"c")}ut(tm,kt);var Zf;function ju(){}ut(ju,Zp);ju.prototype.g=function(){return new XMLHttpRequest};ju.prototype.i=function(){return{}};Zf=new ju;function Ja(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ca(this),this.P=pM,t=Gf?125:void 0,this.V=new Vu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new OT}function OT(){this.i=null,this.g="",this.h=!1}var pM=45e3,ed={},Pc={};j=Ja.prototype;j.setTimeout=function(t){this.P=t};function td(t,e,n){t.L=1,t.v=qu(_s(e)),t.s=n,t.S=!0,xT(t,null)}function xT(t,e){t.G=Date.now(),Za(t),t.A=_s(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),jT(n.i,"t",s),t.C=0,n=t.l.J,t.h=new OT,t.g=lI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new cM(Pt(t.Pa,t,t.g),t.O)),AT(t.U,t.g,"readystatechange",t.nb),e=t.I?mT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Sa(),uM(t.j,t.u,t.A,t.m,t.W,t.s)}j.nb=function(t){t=t.target;const e=this.M;e&&Bn(t)==3?e.l():this.Pa(t)};j.Pa=function(t){try{if(t==this.g)e:{const u=Bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Gf||this.g&&(this.h.h||this.g.ja()||my(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Sa(3):Sa(2)),Bu(this);var n=this.g.da();this.ca=n;t:if(DT(this)){var s=my(this.g);t="";var r=s.length,i=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),Jo(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hM(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ia(a)){var c=a;break t}}c=null}if(n=c)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nd(this,n);else{this.i=!1,this.o=3,Lt(12),dr(this),Jo(this);break e}}this.S?(MT(this,u,o),Gf&&this.i&&u==3&&(AT(this.U,this.V,"tick",this.mb),this.V.start())):(pi(this.j,this.m,o,null),nd(this,o)),u==4&&dr(this),this.i&&!this.J&&(u==4?rI(this.l,this):(this.i=!1,Za(this)))}else MM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Lt(12)):(this.o=0,Lt(13)),dr(this),Jo(this)}}}catch{}finally{}};function DT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function MT(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=mM(t,n),r==Pc){e==4&&(t.o=4,Lt(14),s=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ed){t.o=4,Lt(15),pi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else pi(t.j,t.m,r,null),nd(t,r);DT(t)&&r!=Pc&&r!=ed&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Lt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),am(e),e.M=!0,Lt(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),dr(t),Jo(t))}j.mb=function(){if(this.g){var t=Bn(this.g),e=this.g.ja();this.C<e.length&&(Bu(this),MT(this,t,e),this.i&&t!=4&&Za(this))}};function mM(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Pc:(n=Number(e.substring(n,s)),isNaN(n)?ed:(s+=1,s+n>e.length?Pc:(e=e.slice(s,s+n),t.C=s+n,e)))}j.cancel=function(){this.J=!0,dr(this)};function Za(t){t.Y=Date.now()+t.P,LT(t,t.P)}function LT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ya(Pt(t.lb,t),e)}function Bu(t){t.B&&(re.clearTimeout(t.B),t.B=null)}j.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fM(this.j,this.A),this.L!=2&&(Sa(),Lt(17)),dr(this),this.o=2,Jo(this)):LT(this,this.Y-t)};function Jo(t){t.l.H==0||t.J||rI(t.l,t)}function dr(t){Bu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Xp(t.V),RT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function nd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||sd(n.i,t))){if(!t.K&&sd(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Oc(n),zu(n);else break e;om(n),Lt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ya(Pt(n.ib,n),6e3));if(1>=WT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else pr(n,11)}else if((t.K||n.g==t)&&Oc(n),!Ia(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(nm(i,i.h),i.h=null))}if(s.F){const p=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(s.Da=p,$e(s.I,s.F,p))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=aI(s,s.J?s.pa:null,s.Y),o.K){HT(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Bu(a),Za(a)),s.g=o}else nI(s);0<n.j.length&&Ku(n)}else c[0]!="stop"&&c[0]!="close"||pr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?pr(n,7):im(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Sa(4)}catch{}}function gM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xu(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function _M(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function VT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_M(t),s=gM(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var $T=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Er(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Er){this.h=t.h,kc(this,t.j),this.s=t.s,this.g=t.g,Nc(this,t.m),this.l=t.l;var e=t.i,n=new Pa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fy(this,n),this.o=t.o}else t&&(e=String(t).match($T))?(this.h=!1,kc(this,e[1]||"",!0),this.s=Lo(e[2]||""),this.g=Lo(e[3]||"",!0),Nc(this,e[4]),this.l=Lo(e[5]||"",!0),fy(this,e[6]||"",!0),this.o=Lo(e[7]||"")):(this.h=!1,this.i=new Pa(null,this.h))}Er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vo(e,dy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vo(e,dy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vo(n,n.charAt(0)=="/"?wM:EM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vo(n,IM)),t.join("")};function _s(t){return new Er(t)}function kc(t,e,n){t.j=n?Lo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fy(t,e,n){e instanceof Pa?(t.i=e,bM(t.i,t.h)):(n||(e=Vo(e,TM)),t.i=new Pa(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function qu(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Lo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dy=/[#\/\?@]/g,EM=/[#\?:]/g,wM=/[#\?]/g,TM=/[#\?@]/g,IM=/#/g;function Pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zs(t){t.g||(t.g=new Map,t.h=0,t.i&&yM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=Pa.prototype;j.add=function(t,e){Zs(this),this.i=null,t=uo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function FT(t,e){Zs(t),e=uo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function UT(t,e){return Zs(t),e=uo(t,e),t.g.has(e)}j.forEach=function(t,e){Zs(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};j.ta=function(){Zs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};j.Z=function(t){Zs(this);let e=[];if(typeof t=="string")UT(this,t)&&(e=e.concat(this.g.get(uo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Zs(this),this.i=null,t=uo(this,t),UT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jT(t,e,n){FT(t,e),0<n.length&&(t.i=null,t.g.set(uo(t,e),Bp(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function uo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bM(t,e){e&&!t.j&&(Zs(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(FT(this,s),jT(this,r,n))},t)),t.j=e}var AM=class{constructor(t,e){this.g=t,this.map=e}};function BT(t){this.l=t||RM,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RM=10;function qT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function WT(t){return t.h?1:t.g?t.g.size:0}function sd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nm(t,e){t.g?t.g.add(e):t.h=e}function HT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}BT.prototype.cancel=function(){if(this.i=zT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Bp(t.i)}var CM=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function SM(){this.g=new CM}function PM(t,e,n){const s=n||"";try{VT(t,function(r,i){let o=r;Ga(r)&&(o=Qp(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function kM(t,e){const n=new $u;if(re.Image){const s=new Image;s.onload=Nl(xl,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Nl(xl,n,s,"TestLoadImage: error",!1,e),s.onabort=Nl(xl,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Nl(xl,n,s,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function xl(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function el(t){this.l=t.ec||null,this.j=t.ob||!1}ut(el,Zp);el.prototype.g=function(){return new Wu(this.l,this.j)};el.prototype.i=function(t){return function(){return t}}({});function Wu(t,e){ct.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=sm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(Wu,ct);var sm=0;j=Wu.prototype;j.open=function(t,e){if(this.readyState!=sm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ka(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tl(this)),this.readyState=sm};j.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ka(this)),this.g&&(this.readyState=3,ka(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;KT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function KT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}j.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tl(this):ka(this),this.readyState==3&&KT(this)}};j.Za=function(t){this.g&&(this.response=this.responseText=t,tl(this))};j.Ya=function(t){this.g&&(this.response=t,tl(this))};j.ka=function(){this.g&&tl(this)};function tl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ka(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ka(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NM=re.JSON.parse;function Ye(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=GT,this.L=this.M=!1}ut(Ye,ct);var GT="",OM=/^https?$/i,xM=["POST","PUT"];j=Ye.prototype;j.Oa=function(t){this.M=t};j.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zf.g(),this.C=this.u?hy(this.u):hy(Zf),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){py(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=re.FormData&&t instanceof re.FormData,!(0<=hT(xM,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{XT(this),0<this.B&&((this.L=DM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=Jp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){py(this,i)}};function DM(t){return $i&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.ua=function(){typeof jp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function py(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,QT(t),Hu(t)}function QT(t){t.F||(t.F=!0,_t(t,"complete"),_t(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Hu(this))};j.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hu(this,!0)),Ye.$.N.call(this)};j.La=function(){this.s||(this.G||this.v||this.l?YT(this):this.kb())};j.kb=function(){YT(this)};function YT(t){if(t.h&&typeof jp<"u"&&(!t.C[1]||Bn(t)!=4||t.da()!=2)){if(t.v&&Bn(t)==4)Jp(t.La,0,t);else if(_t(t,"readystatechange"),Bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match($T)[1]||null;!r&&re.self&&re.self.location&&(r=re.self.location.protocol.slice(0,-1)),s=!OM.test(r?r.toLowerCase():"")}n=s}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var i=2<Bn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",QT(t)}}finally{Hu(t)}}}}function Hu(t,e){if(t.g){XT(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=s}catch{}}}function XT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}j.isActive=function(){return!!this.g};function Bn(t){return t.g?t.g.readyState:0}j.da=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}};j.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NM(e)}};function my(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case GT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function MM(t){const e={};t=(t.g&&2<=Bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ia(t[s]))continue;var n=oM(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}ZD(e,function(s){return s.join(", ")})}j.Ia=function(){return this.m};j.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function JT(t){let e="";return Wp(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function rm(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=JT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function Ao(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ZT(t){this.Ga=0,this.j=[],this.l=new $u,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ao("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ao("baseRetryDelayMs",5e3,t),this.hb=Ao("retryDelaySeedMs",1e4,t),this.eb=Ao("forwardChannelMaxRetries",2,t),this.xa=Ao("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new BT(t&&t.concurrentRequestLimit),this.Ja=new SM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}j=ZT.prototype;j.ra=8;j.H=1;function im(t){if(eI(t),t.H==3){var e=t.W++,n=_s(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),nl(t,n),e=new Ja(t,t.l,e),e.L=2,e.v=qu(_s(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=lI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Za(e)}oI(t)}function zu(t){t.g&&(am(t),t.g.cancel(),t.g=null)}function eI(t){zu(t),t.u&&(re.clearTimeout(t.u),t.u=null),Oc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Ku(t){if(!qT(t.i)&&!t.m){t.m=!0;var e=t.Na;Aa||IT(),Ra||(Aa(),Ra=!0),Yp.add(e,t),t.C=0}}function LM(t,e){return WT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ya(Pt(t.Na,t,e),iI(t,t.C)),t.C++,!0)}j.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ja(this,this.l,t);let i=this.s;if(this.U&&(i?(i=mT(i),gT(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tI(this,r,e),n=_s(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),nl(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(JT(i)))+"&"+e:this.o&&rm(n,this.o,i)),nm(this.i,r),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),r.aa=!0,td(r,n,null)):td(r,n,e),this.H=2}}else this.H==3&&(t?gy(this,t):this.j.length==0||qT(this.i)||gy(this))};function gy(t,e){var n;e?n=e.m:n=t.W++;const s=_s(t.I);$e(s,"SID",t.K),$e(s,"RID",n),$e(s,"AID",t.V),nl(t,s),t.o&&t.s&&rm(s,t.o,t.s),n=new Ja(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nm(t.i,n),td(n,s,e)}function nl(t,e){t.na&&Wp(t.na,function(n,s){$e(e,s,n)}),t.h&&VT({},function(n,s){$e(e,s,n)})}function tI(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Pt(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{PM(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function nI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Aa||IT(),Ra||(Aa(),Ra=!0),Yp.add(e,t),t.A=0}}function om(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ya(Pt(t.Ma,t),iI(t,t.A)),t.A++,!0)}j.Ma=function(){if(this.u=null,sI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ya(Pt(this.jb,this),t)}};j.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Lt(10),zu(this),sI(this))};function am(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function sI(t){t.g=new Ja(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_s(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),nl(t,e),t.o&&t.s&&rm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qu(_s(e)),n.s=null,n.S=!0,xT(n,t)}j.ib=function(){this.v!=null&&(this.v=null,zu(this),om(this),Lt(19))};function Oc(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function rI(t,e){var n=null;if(t.g==e){Oc(t),am(t),t.g=null;var s=2}else if(sd(t.i,e))n=e.F,HT(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Fu(),_t(s,new PT(s,n)),Ku(t)}else nI(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&LM(t,e)||s==2&&om(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:pr(t,5);break;case 4:pr(t,10);break;case 3:pr(t,6);break;default:pr(t,2)}}}function iI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function pr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Pt(t.pb,t);n||(n=new Er("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||kc(n,"https"),qu(n)),kM(n.toString(),s)}else Lt(2);t.H=0,t.h&&t.h.za(e),oI(t),eI(t)}j.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Lt(2)):(this.l.info("Failed to ping google.com"),Lt(1))};function oI(t){if(t.H=0,t.ma=[],t.h){const e=zT(t.i);(e.length!=0||t.j.length!=0)&&(oy(t.ma,e),oy(t.ma,t.j),t.i.i.length=0,Bp(t.j),t.j.length=0),t.h.ya()}}function aI(t,e,n){var s=n instanceof Er?_s(n):new Er(n);if(s.g!="")e&&(s.g=e+"."+s.g),Nc(s,s.m);else{var r=re.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Er(null);s&&kc(i,s),e&&(i.g=e),r&&Nc(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&$e(s,n,e),$e(s,"VER",t.ra),nl(t,s),s}function lI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ye(new el({ob:!0})):new Ye(t.va),e.Oa(t.J),e}j.isActive=function(){return!!this.h&&this.h.isActive(this)};function cI(){}j=cI.prototype;j.Ba=function(){};j.Aa=function(){};j.za=function(){};j.ya=function(){};j.isActive=function(){return!0};j.Va=function(){};function xc(){if($i&&!(10<=Number(QD)))throw Error("Environmental error: no available transport.")}xc.prototype.g=function(t,e){return new nn(t,e)};function nn(t,e){ct.call(this),this.g=new ZT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ia(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ia(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ho(this)}ut(nn,ct);nn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=aI(t,null,t.Y),Ku(t)};nn.prototype.close=function(){im(this.g)};nn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qp(t),t=n);e.j.push(new AM(e.fb++,t)),e.H==3&&Ku(e)};nn.prototype.N=function(){this.g.h=null,delete this.j,im(this.g),delete this.g,nn.$.N.call(this)};function uI(t){em.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(uI,em);function hI(){tm.call(this),this.status=1}ut(hI,tm);function ho(t){this.g=t}ut(ho,cI);ho.prototype.Ba=function(){_t(this.g,"a")};ho.prototype.Aa=function(t){_t(this.g,new uI(t))};ho.prototype.za=function(t){_t(this.g,new hI)};ho.prototype.ya=function(){_t(this.g,"b")};function VM(){this.blockSize=-1}function Cn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ut(Cn,VM);Cn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bh(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Cn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Bh(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Bh(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Bh(this,s),r=0;break}}this.h=r,this.i+=e};Cn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Pe(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var $M={};function lm(t){return-128<=t&&128>t?zD(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function qn(t){if(isNaN(t)||!isFinite(t))return Ii;if(0>t)return ft(qn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=rd;return new Pe(e,0)}function fI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ft(fI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qn(Math.pow(e,8)),s=Ii,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=qn(Math.pow(e,i)),s=s.R(i).add(qn(o))):(s=s.R(n),s=s.add(qn(o)))}return s}var rd=4294967296,Ii=lm(0),id=lm(1),_y=lm(16777216);j=Pe.prototype;j.ea=function(){if(sn(this))return-ft(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:rd+s)*e,e*=rd}return t};j.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ls(this))return"0";if(sn(this))return"-"+ft(this).toString(t);for(var e=qn(Math.pow(t,6)),n=this,s="";;){var r=Mc(n,e).g;n=Dc(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,ls(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};j.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ls(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}j.X=function(t){return t=Dc(this,t),sn(t)?-1:ls(t)?0:1};function ft(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Pe(n,~t.h).add(id)}j.abs=function(){return sn(this)?ft(this):this};j.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function Dc(t,e){return t.add(ft(e))}j.R=function(t){if(ls(this)||ls(t))return Ii;if(sn(this))return sn(t)?ft(this).R(ft(t)):ft(ft(this).R(t));if(sn(t))return ft(this.R(ft(t)));if(0>this.X(_y)&&0>t.X(_y))return qn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,Dl(n,2*s+2*r),n[2*s+2*r+1]+=i*l,Dl(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Dl(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Dl(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Pe(n,0)};function Dl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ro(t,e){this.g=t,this.h=e}function Mc(t,e){if(ls(e))throw Error("division by zero");if(ls(t))return new Ro(Ii,Ii);if(sn(t))return e=Mc(ft(t),e),new Ro(ft(e.g),ft(e.h));if(sn(e))return e=Mc(t,ft(e)),new Ro(ft(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=id,s=e;0>=s.X(t);)n=yy(n),s=yy(s);var r=ei(n,1),i=ei(s,1);for(s=ei(s,2),n=ei(n,2);!ls(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=ei(s,1),n=ei(n,1)}return e=Dc(t,r.R(e)),new Ro(r,e)}for(r=Ii;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=qn(n),o=i.R(e);sn(o)||0<o.X(t);)n-=s,i=qn(n),o=i.R(e);ls(i)&&(i=id),r=r.add(i),t=Dc(t,o)}return new Ro(r,t)}j.gb=function(t){return Mc(this,t).h};j.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Pe(n,this.h&t.h)};j.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Pe(n,this.h|t.h)};j.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Pe(n,this.h^t.h)};function yy(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Pe(n,t.h)}function ei(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Pe(r,t.h)}xc.prototype.createWebChannel=xc.prototype.g;nn.prototype.send=nn.prototype.u;nn.prototype.open=nn.prototype.m;nn.prototype.close=nn.prototype.close;Uu.NO_ERROR=0;Uu.TIMEOUT=8;Uu.HTTP_ERROR=6;kT.COMPLETE="complete";NT.EventType=Xa;Xa.OPEN="a";Xa.CLOSE="b";Xa.ERROR="c";Xa.MESSAGE="d";ct.prototype.listen=ct.prototype.O;Ye.prototype.listenOnce=Ye.prototype.P;Ye.prototype.getLastError=Ye.prototype.Sa;Ye.prototype.getLastErrorCode=Ye.prototype.Ia;Ye.prototype.getStatus=Ye.prototype.da;Ye.prototype.getResponseJson=Ye.prototype.Wa;Ye.prototype.getResponseText=Ye.prototype.ja;Ye.prototype.send=Ye.prototype.ha;Ye.prototype.setWithCredentials=Ye.prototype.Oa;Cn.prototype.digest=Cn.prototype.l;Cn.prototype.reset=Cn.prototype.reset;Cn.prototype.update=Cn.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=qn;Pe.fromString=fI;var FM=function(){return new xc},UM=function(){return Fu()},qh=Uu,jM=kT,BM=jr,vy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qM=el,Ml=NT,WM=Ye,HM=Cn,bi=Pe;const Ey="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Fa("@firebase/firestore");function Co(){return kr.logLevel}function z(t,...e){if(kr.logLevel<=me.DEBUG){const n=e.map(cm);kr.debug(`Firestore (${fo}): ${t}`,...n)}}function ys(t,...e){if(kr.logLevel<=me.ERROR){const n=e.map(cm);kr.error(`Firestore (${fo}): ${t}`,...n)}}function Fi(t,...e){if(kr.logLevel<=me.WARN){const n=e.map(cm);kr.warn(`Firestore (${fo}): ${t}`,...n)}}function cm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+t;throw ys(e),new Error(e)}function Ue(t,e){t||ne()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class KM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GM{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new hs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new dI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new It(e)}}class QM{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YM{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new QM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new XM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ZM(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Ae(t,e){return t<e?-1:t>e?1:0}function Ui(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new tt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new tt(0,0))}static max(){return new ae(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(),s===void 0?s=e.length-n:s>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Na{construct(e,n,s){return new Fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const eL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Na{construct(e,n,s){return new mt(e,n,s)}static isValidIdentifier(e){return eL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new H(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new H(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Fe.fromString(e))}static fromName(e){return new Y(Fe.fromString(e).popFirst(5))}static empty(){return new Y(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Fe(e.slice()))}}function tL(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ae.fromTimestamp(s===1e9?new tt(n+1,0):new tt(n,s));return new Hs(r,Y.empty(),e)}function nL(t){return new Hs(t.readTime,t.key,-1)}class Hs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Hs(ae.min(),Y.empty(),-1)}static max(){return new Hs(ae.max(),Y.empty(),-1)}}function sL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==rL)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,s)=>{n(e)})}static reject(e){return new D((n,s)=>{s(e)})}static waitFor(e){return new D((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=D.resolve(!1);for(const s of e)n=n.next(r=>r?D.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new D((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new D((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function rl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}um._e=-1;function Gu(t){return t==null}function Lc(t){return t===0&&1/t==-1/0}function oL(t){return typeof t=="number"&&Number.isInteger(t)&&!Lc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ll(this.root,e,this.comparator,!0)}}class Ll{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ht.RED,this.left=r??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ht(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ht.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,s,r,i){return this}insert(e,n,s){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new yt(mt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gI("Invalid base64 string: "+i):i}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const aL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zs(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=aL.exec(t);if(Ue(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fm(t){const e=t.mapValue.fields.__previous_value__;return hm(e)?fm(e):e}function Oa(t){const e=zs(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class xa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hm(t)?4:cL(t)?9007199254740991:10:ne()}function Jn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oa(t).isEqual(Oa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=zs(r.timestampValue),a=zs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Nr(r.bytesValue).isEqual(Nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ze(r.doubleValue),a=Ze(i.doubleValue);return o===a?Lc(o)===Lc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ui(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(wy(o)!==wy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jn(o[l],a[l])))return!1;return!0}(t,e);default:return ne()}}function Da(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=Or(t),s=Or(e);if(n!==s)return Ae(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ze(i.integerValue||i.doubleValue),l=Ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(Oa(t),Oa(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Nr(i),l=Nr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ae(Ze(i.latitude),Ze(o.latitude));return a!==0?a:Ae(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ji(a[c],l[c]);if(u)return u}return Ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Vl.mapValue&&o===Vl.mapValue)return 0;if(i===Vl.mapValue)return 1;if(o===Vl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Ae(l[h],u[h]);if(f!==0)return f;const d=ji(a[l[h]],c[u[h]]);if(d!==0)return d}return Ae(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=zs(t),s=zs(e),r=Ae(n.seconds,s.seconds);return r!==0?r:Ae(n.nanos,s.nanos)}function Bi(t){return od(t)}function od(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=zs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=od(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${od(n.fields[o])}`;return r+"}"}(t.mapValue):ne()}function by(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ad(t){return!!t&&"integerValue"in t}function dm(t){return!!t&&"arrayValue"in t}function Ay(t){return!!t&&"nullValue"in t}function Ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xl(t){return!!t&&"mapValue"in t}function Zo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Zo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zo(n)}setAll(e){let n=mt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Zo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Xl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Br(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Wt(Zo(this.value))}}function _I(t){const e=[];return Br(t.fields,(n,s)=>{const r=new mt([n]);if(Xl(s)){const i=_I(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,ae.min(),ae.min(),ae.min(),Wt.empty(),0)}static newFoundDocument(e,n,s,r){return new Rt(e,1,n,ae.min(),s,r,0)}static newNoDocument(e,n){return new Rt(e,2,n,ae.min(),ae.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ae.min(),ae.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.position=e,this.inclusive=n}}function Cy(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),n.key):s=ji(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n="asc"){this.field=e,this.dir=n}}function uL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{}class et extends yI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new fL(e,n,s):n==="array-contains"?new mL(e,s):n==="in"?new gL(e,s):n==="not-in"?new _L(e,s):n==="array-contains-any"?new yL(e,s):new et(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new dL(e,s):new pL(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ji(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends yI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Sn(e,n)}matches(e){return vI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vI(t){return t.op==="and"}function EI(t){return hL(t)&&vI(t)}function hL(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function ld(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(EI(t))return t.filters.map(e=>ld(e)).join(",");{const e=t.filters.map(n=>ld(n)).join(",");return`${t.op}(${e})`}}function wI(t,e){return t instanceof et?function(s,r){return r instanceof et&&s.op===r.op&&s.field.isEqual(r.field)&&Jn(s.value,r.value)}(t,e):t instanceof Sn?function(s,r){return r instanceof Sn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&wI(o,r.filters[a]),!0):!1}(t,e):void ne()}function TI(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(TI).join(" ,")+"}"}(t):"Filter"}class fL extends et{constructor(e,n,s){super(e,n,s),this.key=Y.fromName(s.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class dL extends et{constructor(e,n){super(e,"in",n),this.keys=II("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pL extends et{constructor(e,n){super(e,"not-in",n),this.keys=II("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function II(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Y.fromName(s.referenceValue))}class mL extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dm(n)&&Da(n.arrayValue,this.value)}}class gL extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class _L extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Da(this.value.arrayValue,n)}}class yL extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Da(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Py(t,e=null,n=[],s=[],r=null,i=null,o=null){return new vL(t,e,n,s,r,i,o)}function pm(t){const e=ue(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ld(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bi(s)).join(",")),e.ce=n}return e.ce}function mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sy(t.startAt,e.startAt)&&Sy(t.endAt,e.endAt)}function cd(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function EL(t,e,n,s,r,i,o,a){return new il(t,e,n,s,r,i,o,a)}function Qu(t){return new il(t)}function ky(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bI(t){return t.collectionGroup!==null}function ea(t){const e=ue(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new yt(mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new $c(i,s))}),n.has(mt.keyField().canonicalString())||e.le.push(new $c(mt.keyField(),s))}return e.le}function Gn(t){const e=ue(t);return e.he||(e.he=wL(e,ea(t))),e.he}function wL(t,e){if(t.limitType==="F")return Py(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new $c(r.field,i)});const n=t.endAt?new Vc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Vc(t.startAt.position,t.startAt.inclusive):null;return Py(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function ud(t,e){const n=t.filters.concat([e]);return new il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hd(t,e,n){return new il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yu(t,e){return mm(Gn(t),Gn(e))&&t.limitType===e.limitType}function AI(t){return`${pm(Gn(t))}|lt:${t.limitType}`}function ri(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>TI(r)).join(", ")}]`),Gu(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Bi(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Bi(r)).join(",")),`Target(${s})`}(Gn(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Y.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of ea(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const c=Cy(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,ea(s),r)||s.endAt&&!function(o,a,l){const c=Cy(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,ea(s),r))}(t,e)}function TL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RI(t){return(e,n)=>{let s=!1;for(const r of ea(t)){const i=IL(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function IL(t,e,n){const s=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?ji(l,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return mI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL=new Ge(Y.comparator);function vs(){return bL}const CI=new Ge(Y.comparator);function $o(...t){let e=CI;for(const n of t)e=e.insert(n.key,n);return e}function SI(t){let e=CI;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function mr(){return ta()}function PI(){return ta()}function ta(){return new po(t=>t.toString(),(t,e)=>t.isEqual(e))}const AL=new Ge(Y.comparator),RL=new yt(Y.comparator);function ge(...t){let e=RL;for(const n of t)e=e.add(n);return e}const CL=new yt(Ae);function SL(){return CL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(e)?"-0":e}}function NI(t){return{integerValue:""+t}}function PL(t,e){return oL(e)?NI(e):kI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this._=void 0}}function kL(t,e,n){return t instanceof Fc?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&hm(i)&&(i=fm(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ma?xI(t,e):t instanceof La?DI(t,e):function(r,i){const o=OI(r,i),a=Ny(o)+Ny(r.Ie);return ad(o)&&ad(r.Ie)?NI(a):kI(r.serializer,a)}(t,e)}function NL(t,e,n){return t instanceof Ma?xI(t,e):t instanceof La?DI(t,e):n}function OI(t,e){return t instanceof Uc?function(s){return ad(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Fc extends Ju{}class Ma extends Ju{constructor(e){super(),this.elements=e}}function xI(t,e){const n=MI(e);for(const s of t.elements)n.some(r=>Jn(r,s))||n.push(s);return{arrayValue:{values:n}}}class La extends Ju{constructor(e){super(),this.elements=e}}function DI(t,e){let n=MI(e);for(const s of t.elements)n=n.filter(r=>!Jn(r,s));return{arrayValue:{values:n}}}class Uc extends Ju{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Ny(t){return Ze(t.integerValue||t.doubleValue)}function MI(t){return dm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OL(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Ma&&r instanceof Ma||s instanceof La&&r instanceof La?Ui(s.elements,r.elements,Jn):s instanceof Uc&&r instanceof Uc?Jn(s.Ie,r.Ie):s instanceof Fc&&r instanceof Fc}(t.transform,e.transform)}class xL{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zu{}function LI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gm(t.key,Tn.none()):new ol(t.key,t.data,Tn.none());{const n=t.data,s=Wt.empty();let r=new yt(mt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new er(t.key,s,new Xt(r.toArray()),Tn.none())}}function DL(t,e,n){t instanceof ol?function(r,i,o){const a=r.value.clone(),l=xy(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof er?function(r,i,o){if(!Jl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=xy(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(VI(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,s){return t instanceof ol?function(i,o,a,l){if(!Jl(i.precondition,o))return a;const c=i.value.clone(),u=Dy(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof er?function(i,o,a,l){if(!Jl(i.precondition,o))return a;const c=Dy(i.fieldTransforms,l,o),u=o.data;return u.setAll(VI(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Jl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ML(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=OI(s.transform,r||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(s.field,i))}return n||null}function Oy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ui(s,r,(i,o)=>OL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ol extends Zu{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class er extends Zu{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function VI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xy(t,e,n){const s=new Map;Ue(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,NL(o,a,n[r]))}return s}function Dy(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,kL(i,o,e))}return s}class gm extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LL extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&DL(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=na(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=na(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=PI();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=LI(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(n,s)=>Oy(n,s))&&Ui(this.baseMutations,e.baseMutations,(n,s)=>Oy(n,s))}}class _m{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ue(e.mutations.length===s.length);let r=function(){return AL}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new _m(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,ye;function UL(t){switch(t){default:return ne();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function $I(t){if(t===void 0)return ys("GRPC error has no .code"),k.UNKNOWN;switch(t){case Je.OK:return k.OK;case Je.CANCELLED:return k.CANCELLED;case Je.UNKNOWN:return k.UNKNOWN;case Je.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Je.INTERNAL:return k.INTERNAL;case Je.UNAVAILABLE:return k.UNAVAILABLE;case Je.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Je.NOT_FOUND:return k.NOT_FOUND;case Je.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Je.ABORTED:return k.ABORTED;case Je.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Je.DATA_LOSS:return k.DATA_LOSS;default:return ne()}}(ye=Je||(Je={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL=new bi([4294967295,4294967295],0);function My(t){const e=jL().encode(t),n=new HM;return n.update(e),new Uint8Array(n.digest())}function Ly(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new bi([n,s],0),new bi([r,i],0)]}class ym{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Fo(`Invalid padding: ${n}`);if(s<0)throw new Fo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Fo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Fo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=bi.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(bi.fromNumber(s)));return r.compare(BL)===1&&(r=new bi([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=My(e),[s,r]=Ly(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ym(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=My(e),[s,r]=Ly(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new eh(ae.min(),r,new Ge(Ae),vs(),ge())}}class al{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new al(s,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,s,r){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=r}}class FI{constructor(e,n){this.targetId=e,this.fe=n}}class UI{constructor(e,n,s=Ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Vy{constructor(){this.ge=0,this.pe=Fy(),this.ye=Ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ge(),n=ge(),s=ge();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ne()}}),new al(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=Fy()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class qL{constructor(e){this.Le=e,this.ke=new Map,this.qe=vs(),this.Qe=$y(),this.Ke=new Ge(Ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.fe.count,r=this.Ye(n);if(r){const i=r.target;if(cd(i))if(s===0){const o=new Y(i.path);this.We(n,o,Rt.newNoDocument(o,ae.min()))}else Ue(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Nr(s).toUint8Array()}catch(l){if(l instanceof gI)return Fi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ym(o,r,i)}catch(l){return Fi(l instanceof Fo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&cd(a.target)){const l=new Y(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Rt.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let s=ge();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const r=new eh(e,n,this.Ke,this.qe,s);return this.qe=vs(),this.Qe=$y(),this.Ke=new Ge(Ae),r}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.st(e,n)?r.Me(n,1):r.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Vy,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new yt(Ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Vy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $y(){return new Ge(Y.comparator)}function Fy(){return new Ge(Y.comparator)}const WL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zL=(()=>({and:"AND",or:"OR"}))();class KL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fd(t,e){return t.useProto3Json||Gu(e)?e:{value:e}}function jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GL(t,e){return jc(t,e.toTimestamp())}function Qn(t){return Ue(!!t),ae.fromTimestamp(function(n){const s=zs(n);return new tt(s.seconds,s.nanos)}(t))}function vm(t,e){return function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function BI(t){const e=Fe.fromString(t);return Ue(zI(e)),e}function dd(t,e){return vm(t.databaseId,e.path)}function Wh(t,e){const n=BI(e);if(n.get(1)!==t.databaseId.projectId)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(qI(n))}function pd(t,e){return vm(t.databaseId,e)}function QL(t){const e=BI(t);return e.length===4?Fe.emptyPath():qI(e)}function md(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qI(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uy(t,e,n){return{name:dd(t,e),fields:n.value.mapValue.fields}}function YL(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Ue(u===void 0||typeof u=="string"),Ot.fromBase64String(u||"")):(Ue(u===void 0||u instanceof Uint8Array),Ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?k.UNKNOWN:$I(c.code);return new H(u,c.message||"")}(o);n=new UI(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Wh(t,s.document.name),i=Qn(s.document.updateTime),o=s.document.createTime?Qn(s.document.createTime):ae.min(),a=new Wt({mapValue:{fields:s.document.fields}}),l=Rt.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Zl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Wh(t,s.document),i=s.readTime?Qn(s.readTime):ae.min(),o=Rt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Zl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Wh(t,s.document),i=s.removedTargetIds||[];n=new Zl([],i,r,null)}else{if(!("filter"in e))return ne();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new FL(r,i),a=s.targetId;n=new FI(a,o)}}return n}function XL(t,e){let n;if(e instanceof ol)n={update:Uy(t,e.key,e.value)};else if(e instanceof gm)n={delete:dd(t,e.key)};else if(e instanceof er)n={update:Uy(t,e.key,e.data),updateMask:oV(e.fieldMask)};else{if(!(e instanceof LL))return ne();n={verify:dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof La)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Uc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ne()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:GL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function JL(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Qn(r.updateTime):Qn(i);return o.isEqual(ae.min())&&(o=Qn(i)),new xL(o,r.transformResults||[])}(n,e))):[]}function ZL(t,e){return{documents:[pd(t,e.path)]}}function eV(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=pd(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pd(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return HI(Sn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ii(h.field),direction:sV(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=fd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function tV(t){let e=QL(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ue(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=WI(h);return f instanceof Sn&&EI(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new $c(oi(m.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Gu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new Vc(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new Vc(d,f)}(n.endAt)),EL(e,r,o,i,a,"F",l,c)}function nV(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=oi(n.unaryFilter.field);return et.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=oi(n.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=oi(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return et.create(oi(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(s=>WI(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function sV(t){return WL[t]}function rV(t){return HL[t]}function iV(t){return zL[t]}function ii(t){return{fieldPath:t.canonicalString()}}function oi(t){return mt.fromServerFormat(t.fieldPath)}function HI(t){return t instanceof et?function(n){if(n.op==="=="){if(Ry(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NAN"}};if(Ay(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ry(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NAN"}};if(Ay(n.value))return{unaryFilter:{field:ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(n.field),op:rV(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const s=n.getFilters().map(r=>HI(r));return s.length===1?s[0]:{compositeFilter:{op:iV(n.op),filters:s}}}(t):ne()}function oV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s,r,i=ae.min(),o=ae.min(),a=Ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.ut=e}}function lV(t){const e=tV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(){this.on=new uV}addToCollectionParentIndex(e,n){return this.on.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Hs.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Hs.min())}updateCollectionGroup(e,n,s){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class uV{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new yt(Fe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new yt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new qi(0)}static Nn(){return new qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(){this.changes=new po(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?D.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&na(s.mutation,r,Xt.empty(),tt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ge()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ge()){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=$o();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ge()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=vs();const o=ta(),a=function(){return ta()}();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof er)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),na(u.mutation,c,u.mutation.getFieldMask(),tt.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new fV(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ta();let r=new Ge((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Xt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||ge()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=PI();u.forEach(f=>{if(!i.has(f)){const d=LI(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return D.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):D.resolve(mr());let a=-1,l=i;return o.next(c=>D.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?D.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ge())).next(u=>({batchId:a,changes:SI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(s=>{let r=$o();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=$o();return this.indexManager.getCollectionParents(e,i).next(a=>D.forEach(a,l=>{const c=function(h,f){return new il(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s,r).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Rt.newInvalidDocument(u)))});let a=$o();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&na(u.mutation,c,Xt.empty(),tt.now()),Xu(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return D.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Qn(r.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:lV(r.bundledQuery),readTime:Qn(r.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(){this.overlays=new Ge(Y.comparator),this.lr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const s=mr();return D.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),D.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),D.resolve()}getOverlaysForCollection(e,n,s){const r=mr(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return D.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ge((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=mr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return D.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new $L(n,s));let i=this.lr.get(n);i===void 0&&(i=ge(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.hr=new yt(ot.Pr),this.Ir=new yt(ot.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new ot(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new ot(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new Y(new Fe([])),s=new ot(n,e),r=new ot(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new Y(new Fe([])),s=new ot(n,e),r=new ot(n,e+1);let i=ge();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ot{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return Y.comparator(e.key,n.key)||Ae(e.gr,n.gr)}static Tr(e,n){return Ae(e.gr,n.gr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new yt(ot.Pr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VL(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new ot(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ot(n,0),r=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new yt(Ae);return n.forEach(r=>{const i=new ot(r,0),o=new ot(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),D.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new ot(new Y(i),0);let a=new yt(Ae);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.gr)),!0)},o),D.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ue(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return D.forEach(n.mutations,r=>{const i=new ot(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new ot(n,0),r=this.yr.firstAfterOrEqual(s);return D.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(e){this.Cr=e,this.docs=function(){return new Ge(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return D.resolve(s?s.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let s=vs();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Rt.newInvalidDocument(r))}),D.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=vs();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sL(nL(u),s)<=0||(r.has(u.key)||Xu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ne()}vr(e,n){return D.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new yV(this)}getSize(e){return D.resolve(this.size)}}class yV extends hV{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),D.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.persistence=e,this.Fr=new po(n=>pm(n),mm),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Em,this.targetCount=0,this.Nr=qi.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),D.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.kn(n),D.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),D.waitFor(i).next(()=>r)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return D.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),D.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return D.resolve(s)}containsKey(e,n){return D.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,n){this.Br={},this.overlays={},this.Lr=new um(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new vV(this),this.indexManager=new cV,this.remoteDocumentCache=function(r){return new _V(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new aV(n),this.Kr=new pV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new gV(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){z("MemoryPersistence","Starting transaction:",e);const r=new wV(this.Lr.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return D.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class wV extends iL{constructor(e){super(),this.currentSequenceNumber=e}}class wm{constructor(e){this.persistence=e,this.Gr=new Em,this.zr=null}static jr(e){return new wm(e)}get Hr(){if(this.zr)return this.zr;throw ne()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),D.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),D.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Hr,s=>{const r=Y.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,ae.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return D.or([()=>D.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=ge(),r=ge();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tm(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TV;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(Co()<=me.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),D.resolve()):(Co()<=me.DEBUG&&z("QueryEngine","Query:",ri(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(Co()<=me.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):D.resolve())}zi(e,n){if(ky(n))return D.resolve(null);let s=Gn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=hd(n,null,"F"),s=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ge(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,hd(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,r){return ky(n)||r.isEqual(ae.min())?D.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?D.resolve(null):(Co()<=me.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ri(n)),this.Xi(e,o,n,tL(r,-1)).next(a=>a))})}Yi(e,n){let s=new yt(RI(e));return n.forEach((r,i)=>{Xu(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return Co()<=me.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",ri(n)),this.Gi.getDocumentsMatchingQuery(e,n,Hs.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new Ge(Ae),this.ns=new po(i=>pm(i),mm),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dV(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function AV(t,e,n,s){return new bV(t,e,n,s)}async function KI(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=ge();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function RV(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=D.resolve();return f.forEach(m=>{d=d.next(()=>u.getEntry(l,m)).next(p=>{const g=c.docVersions.get(m);Ue(g!==null),p.version.compareTo(g)<0&&(h.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function GI(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function CV(t,e){const n=ue(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Ot.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(p,g,v){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,u)&&a.push(n.qr.updateTargetData(i,d))});let l=vs(),c=ge();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(SV(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(ae.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=r,i))}function SV(t,e,n){let s=ge(),r=ge();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=vs();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:r}})}function PV(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function kV(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,D.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new Ls(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function gd(t,e,n){const s=ue(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!rl(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function jy(t,e,n){const s=ue(t);let r=ae.min(),i=ge();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ue(l),f=h.ns.get(u);return f!==void 0?D.resolve(h.ts.get(f)):h.qr.getTargetData(c,u)}(s,o,Gn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:ae.min(),n?i:ge())).next(a=>(NV(s,TL(e),a),{documents:a,ls:i})))}function NV(t,e,n){let s=t.rs.get(e)||ae.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class By{constructor(){this.activeTargetIds=SL()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OV{constructor(){this.eo=new By,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new By,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l=null;function Hh(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class LV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${r}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get yo(){return!1}wo(n,s,r,i,o){const a=Hh(),l=this.So(n,s);z("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,r).then(u=>(z("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Fi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(n,s,r,i,o,a){return this.wo(n,s,r,i,o)}bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}So(n,s){const r=DV[n];return`${this.mo}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,r){const i=Hh();return new Promise((o,a)=>{const l=new WM;l.setWithCredentials(!0),l.listenOnce(jM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qh.NO_ERROR:const u=l.getResponseJson();z(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case qh.TIMEOUT:z(Tt,`RPC '${e}' ${i} timed out`),a(new H(k.DEADLINE_EXCEEDED,"Request time out"));break;case qh.HTTP_ERROR:const h=l.getStatus();if(z(Tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(v)>=0?v:k.UNKNOWN}(d.status);a(new H(m,d.message))}else a(new H(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(k.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{z(Tt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);z(Tt,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}vo(e,n,s){const r=Hh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FM(),a=UM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new qM({})),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");z(Tt,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const m=new MV({co:g=>{d?z(Tt,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(f||(z(Tt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),z(Tt,`RPC '${e}' stream ${r} sending:`,g),h.send(g))},lo:()=>h.close()}),p=(g,v,T)=>{g.listen(v,I=>{try{T(I)}catch(w){setTimeout(()=>{throw w},0)}})};return p(h,Ml.EventType.OPEN,()=>{d||z(Tt,`RPC '${e}' stream ${r} transport opened.`)}),p(h,Ml.EventType.CLOSE,()=>{d||(d=!0,z(Tt,`RPC '${e}' stream ${r} transport closed`),m.Ro())}),p(h,Ml.EventType.ERROR,g=>{d||(d=!0,Fi(Tt,`RPC '${e}' stream ${r} transport errored:`,g),m.Ro(new H(k.UNAVAILABLE,"The operation could not be completed")))}),p(h,Ml.EventType.MESSAGE,g=>{var v;if(!d){const T=g.data[0];Ue(!!T);const I=T,w=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(w){z(Tt,`RPC '${e}' stream ${r} received error:`,w);const N=w.status;let b=function(C){const V=Je[C];if(V!==void 0)return $I(V)}(N),R=w.message;b===void 0&&(b=k.INTERNAL,R="Unknown error status: "+N+" with message "+w.message),d=!0,m.Ro(new H(b,R)),h.close()}else z(Tt,`RPC '${e}' stream ${r} received:`,T),m.Vo(T)}}),p(a,BM.STAT_EVENT,g=>{g.stat===vy.PROXY?z(Tt,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===vy.NOPROXY&&z(Tt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t){return new KL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-s);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,s,r,i,o,a,l){this.si=e,this.Ko=s,this.$o=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new QI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(ys(n.toString()),ys("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Uo===n&&this.s_(s,r)},s=>{e(()=>{const r=new H(k.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(r)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(r=>{s(()=>this.o_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VV extends YI{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=YL(this.serializer,e),s=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Qn(o.readTime):ae.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=md(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=cd(l)?{documents:ZL(i,l)}:{query:eV(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jI(i,o.resumeToken);const c=fd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=jc(i,o.snapshotVersion.toTimestamp());const c=fd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=nV(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=md(this.serializer),n.removeTarget=e,this.e_(n)}}class $V extends YI{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=JL(e.writeResults,e.commitTime),s=Qn(e.commitTime);return this.listener.I_(s,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=md(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>XL(this.serializer,s))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(k.UNKNOWN,r.toString())})}Co(e,n,s,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(k.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class UV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ys(n),this.f_=!1):z("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{s.enqueueAndForget(async()=>{qr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.C_.add(4),await ll(c),c.M_.set("Unknown"),c.C_.delete(4),await nh(c)}(this))})}),this.M_=new UV(s,r)}}async function nh(t){if(qr(t))for(const e of t.v_)await e(!0)}async function ll(t){for(const e of t.v_)await e(!1)}function XI(t,e){const n=ue(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Am(n)?bm(n):mo(n).Ho()&&Im(n,e))}function JI(t,e){const n=ue(t),s=mo(n);n.D_.delete(e),s.Ho()&&ZI(n,e),n.D_.size===0&&(s.Ho()?s.Zo():qr(n)&&n.M_.set("Unknown"))}function Im(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mo(t).u_(e)}function ZI(t,e){t.x_.Oe(e),mo(t).c_(e)}function bm(t){t.x_=new qL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),mo(t).start(),t.M_.g_()}function Am(t){return qr(t)&&!mo(t).jo()&&t.D_.size>0}function qr(t){return ue(t).C_.size===0}function eb(t){t.x_=void 0}async function BV(t){t.D_.forEach((e,n)=>{Im(t,e)})}async function qV(t,e){eb(t),Am(t)?(t.M_.w_(e),bm(t)):t.M_.set("Unknown")}async function WV(t,e,n){if(t.M_.set("Online"),e instanceof UI&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.D_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.D_.delete(a),r.x_.removeTarget(a))}(t,e)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bc(t,s)}else if(e instanceof Zl?t.x_.$e(e):e instanceof FI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ae.min()))try{const s=await GI(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(Ot.EMPTY_BYTE_STRING,u.snapshotVersion)),ZI(i,l);const h=new Ls(u.target,l,c,u.sequenceNumber);Im(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Bc(t,s)}}async function Bc(t,e,n){if(!rl(e))throw e;t.C_.add(1),await ll(t),t.M_.set("Offline"),n||(n=()=>GI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await nh(t)})}function tb(t,e){return e().catch(n=>Bc(t,n,e))}async function sh(t){const e=ue(t),n=Ks(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;HV(e);)try{const r=await PV(e.localStore,s);if(r===null){e.b_.length===0&&n.Zo();break}s=r.batchId,zV(e,r)}catch(r){await Bc(e,r)}nb(e)&&sb(e)}function HV(t){return qr(t)&&t.b_.length<10}function zV(t,e){t.b_.push(e);const n=Ks(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function nb(t){return qr(t)&&!Ks(t).jo()&&t.b_.length>0}function sb(t){Ks(t).start()}async function KV(t){Ks(t).E_()}async function GV(t){const e=Ks(t);for(const n of t.b_)e.P_(n.mutations)}async function QV(t,e,n){const s=t.b_.shift(),r=_m.from(s,e,n);await tb(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await sh(t)}async function YV(t,e){e&&Ks(t).h_&&await async function(s,r){if(function(o){return UL(o)&&o!==k.ABORTED}(r.code)){const i=s.b_.shift();Ks(s).Yo(),await tb(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await sh(s)}}(t,e),nb(t)&&sb(t)}async function Wy(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=qr(n);n.C_.add(3),await ll(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await nh(n)}async function XV(t,e){const n=ue(t);e?(n.C_.delete(2),await nh(n)):e||(n.C_.add(2),await ll(n),n.M_.set("Unknown"))}function mo(t){return t.O_||(t.O_=function(n,s,r){const i=ue(n);return i.A_(),new VV(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:BV.bind(null,t),Io:qV.bind(null,t),a_:WV.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Am(t)?bm(t):t.M_.set("Unknown")):(await t.O_.stop(),eb(t))})),t.O_}function Ks(t){return t.N_||(t.N_=function(n,s,r){const i=ue(n);return i.A_(),new $V(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:KV.bind(null,t),Io:YV.bind(null,t),T_:GV.bind(null,t),I_:QV.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await sh(t)):(await t.N_.stop(),t.b_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Rm(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cm(t,e){if(ys("AsyncQueue",`${e}: ${t}`),rl(t))return new H(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Y.comparator(n.key,s.key):(n,s)=>Y.comparator(n.key,s.key),this.keyedMap=$o(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ai;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.B_=new Ge(Y.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ne():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Wi{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Wi(e,n,Ai.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(){this.k_=void 0,this.listeners=[]}}class ZV{constructor(){this.queries=new po(e=>AI(e),Yu),this.onlineState="Unknown",this.q_=new Set}}async function Sm(t,e){const n=ue(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new JV),r)try{i.k_=await n.onListen(s)}catch(o){const a=Cm(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&km(n)}async function Pm(t,e){const n=ue(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function e2(t,e){const n=ue(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(r)&&(s=!0);o.k_=r}}s&&km(n)}function t2(t,e,n){const s=ue(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function km(t){t.q_.forEach(e=>{e.next()})}class Nm{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Wi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.key=e}}class ib{constructor(e){this.key=e}}class n2{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ge(),this.mutatedKeys=ge(),this._a=RI(e),this.aa=new Ai(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new Hy,r=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=Xu(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),p=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?m!==p&&(s.track({type:3,doc:d}),g=!0):this.ha(f,d)||(s.track({type:2,doc:d}),g=!0,(l&&this._a(d,l)>0||c&&this._a(d,c)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),g=!0):f&&!d&&(s.track({type:1,doc:f}),g=!0,(l||c)&&(a=!0)),g&&(d?(o=o.add(d),i=p?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const i=e.la.L_();i.sort((c,u)=>function(f,d){const m=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return m(f)-m(d)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(s);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,i.length!==0||l?{snapshot:new Wi(this.query,e.aa,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Hy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ge(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new ib(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new rb(s))}),n}da(e){this.ia=e.ls,this.oa=ge();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Wi.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class s2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class r2{constructor(e){this.key=e,this.Ra=!1}}class i2{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new po(a=>AI(a),Yu),this.fa=new Map,this.ga=new Set,this.pa=new Ge(Y.comparator),this.ya=new Map,this.wa=new Em,this.Sa={},this.ba=new Map,this.Da=qi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function o2(t,e){const n=g2(t);let s,r;const i=n.ma.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Aa();else{const o=await kV(n.localStore,Gn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await a2(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&XI(n.remoteStore,o)}return r}async function a2(t,e,n,s,r){t.va=(h,f,d)=>async function(p,g,v,T){let I=g.view.ca(v);I.Zi&&(I=await jy(p.localStore,g.query,!1).then(({documents:b})=>g.view.ca(b,I)));const w=T&&T.targetChanges.get(g.targetId),N=g.view.applyChanges(I,p.isPrimaryClient,w);return Ky(p,g.targetId,N.Ta),N.snapshot}(t,h,f,d);const i=await jy(t.localStore,e,!0),o=new n2(e,i.ls),a=o.ca(i.documents),l=al.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Ky(t,n,c.Ta);const u=new s2(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function l2(t,e){const n=ue(t),s=n.ma.get(e),r=n.fa.get(s.targetId);if(r.length>1)return n.fa.set(s.targetId,r.filter(i=>!Yu(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gd(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),JI(n.remoteStore,s.targetId),_d(n,s.targetId)}).catch(sl)):(_d(n,s.targetId),await gd(n.localStore,s.targetId,!0))}async function c2(t,e,n){const s=_2(t);try{const r=await function(o,a){const l=ue(o),c=tt.now(),u=a.reduce((d,m)=>d.add(m.key),ge());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=vs(),p=ge();return l.ss.getEntries(d,u).next(g=>{m=g,m.forEach((v,T)=>{T.isValidDocument()||(p=p.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(g=>{h=g;const v=[];for(const T of a){const I=ML(T,h.get(T.key).overlayedDocument);I!=null&&v.push(new er(T.key,I,_I(I.value.mapValue),Tn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,v,a)}).next(g=>{f=g;const v=g.applyToLocalDocumentSet(h,p);return l.documentOverlayCache.saveOverlays(d,g.batchId,v)})}).then(()=>({batchId:f.batchId,changes:SI(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Ge(Ae)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(s,r.batchId,n),await cl(s,r.changes),await sh(s.remoteStore)}catch(r){const i=Cm(r,"Failed to persist write");n.reject(i)}}async function ob(t,e){const n=ue(t);try{const s=await CV(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ya.get(i);o&&(Ue(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ra=!0:r.modifiedDocuments.size>0?Ue(o.Ra):r.removedDocuments.size>0&&(Ue(o.Ra),o.Ra=!1))}),await cl(n,s,e)}catch(s){await sl(s)}}function zy(t,e,n){const s=ue(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(c=!0)}),c&&km(l)}(s.eventManager,e),r.length&&s.Va.a_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function u2(t,e,n){const s=ue(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ya.get(e),i=r&&r.key;if(i){let o=new Ge(Y.comparator);o=o.insert(i,Rt.newNoDocument(i,ae.min()));const a=ge().add(i),l=new eh(ae.min(),new Map,new Ge(Ae),o,a);await ob(s,l),s.pa=s.pa.remove(i),s.ya.delete(e),Om(s)}else await gd(s.localStore,e,!1).then(()=>_d(s,e,n)).catch(sl)}async function h2(t,e){const n=ue(t),s=e.batch.batchId;try{const r=await RV(n.localStore,e);lb(n,s,null),ab(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await cl(n,r)}catch(r){await sl(r)}}async function f2(t,e,n){const s=ue(t);try{const r=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ue(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);lb(s,e,n),ab(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await cl(s,r)}catch(r){await sl(r)}}function ab(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function lb(t,e,n){const s=ue(t);let r=s.Sa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Sa[s.currentUser.toKey()]=r}}function _d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||cb(t,s)})}function cb(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(JI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Om(t))}function Ky(t,e,n){for(const s of n)s instanceof rb?(t.wa.addReference(s.key,e),d2(t,s)):s instanceof ib?(z("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||cb(t,s.key)):ne()}function d2(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(z("SyncEngine","New document in limbo: "+n),t.ga.add(s),Om(t))}function Om(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Y(Fe.fromString(e)),s=t.Da.next();t.ya.set(s,new r2(n)),t.pa=t.pa.insert(n,s),XI(t.remoteStore,new Ls(Gn(Qu(n.path)),s,"TargetPurposeLimboResolution",um._e))}}async function cl(t,e,n){const s=ue(t),r=[],i=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Tm.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Va.a_(r),await async function(l,c){const u=ue(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>D.forEach(c,f=>D.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>D.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!rl(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),m=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(m);u.ts=u.ts.insert(f,p)}}}(s.localStore,i))}async function p2(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const s=await KI(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new H(k.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cl(n,s._s)}}function m2(t,e){const n=ue(t),s=n.ya.get(e);if(s&&s.Ra)return ge().add(s.key);{let r=ge();const i=n.fa.get(e);if(!i)return r;for(const o of i){const a=n.ma.get(o);r=r.unionWith(a.view.ua)}return r}}function g2(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ob.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u2.bind(null,e),e.Va.a_=e2.bind(null,e.eventManager),e.Va.Fa=t2.bind(null,e.eventManager),e}function _2(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=f2.bind(null,e),e}class Gy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=th(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return AV(this.persistence,new IV,e.initialUser,this.serializer)}createPersistence(e){return new EV(wm.jr,this.serializer)}createSharedClientState(e){return new OV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class y2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=p2.bind(null,this.syncEngine),await XV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZV}()}createDatastore(e){const n=th(e.databaseInfo.databaseId),s=function(i){return new LV(i)}(e.databaseInfo);return function(i,o,a,l){return new FV(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new jV(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>zy(this.syncEngine,n,0),function(){return qy.D()?new qy:new xV}())}createSyncEngine(e,n){return function(r,i,o,a,l,c,u){const h=new i2(r,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=ue(n);z("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await ll(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):ys("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=It.UNAUTHENTICATED,this.clientId=pI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cm(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await KI(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await w2(t);z("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Wy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wy(e.remoteStore,i)),t._onlineComponents=e}function E2(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function w2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!E2(n))throw n;Fi("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new Gy)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new Gy);return t._offlineComponents}async function ub(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Qy(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Qy(t,new y2))),t._onlineComponents}function T2(t){return ub(t).then(e=>e.syncEngine)}async function qc(t){const e=await ub(t),n=e.eventManager;return n.onListen=o2.bind(null,e.syncEngine),n.onUnlisten=l2.bind(null,e.syncEngine),n}function I2(t,e,n={}){const s=new hs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new xm({next:f=>{o.enqueueAndForget(()=>Pm(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new H(k.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new H(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Nm(Qu(a.path),u,{includeMetadataChanges:!0,J_:!0});return Sm(i,h)}(await qc(t),t.asyncQueue,e,n,s)),s.promise}function b2(t,e,n={}){const s=new hs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new xm({next:f=>{o.enqueueAndForget(()=>Pm(i,h)),f.fromCache&&l.source==="server"?c.reject(new H(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Nm(a,u,{includeMetadataChanges:!0,J_:!0});return Sm(i,h)}(await qc(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t,e,n){if(!n)throw new H(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function A2(t,e,n,s){if(e===!0&&s===!0)throw new H(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xy(t){if(!Y.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jy(t){if(Y.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function on(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rh(t);throw new H(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new H(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ih{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new zM;switch(s.type){case"firstParty":return new YM(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new H(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Yy.get(n);s&&(z("ComponentProvider","Removing Datastore"),Yy.delete(n),s.terminate())}(this),Promise.resolve()}}function R2(t,e,n,s={}){var r;const i=(t=on(t,ih))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=It.MOCK_USER;else{a=c0(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new H(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new It(c)}t._authCredentials=new KM(new dI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class Vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Bs extends Wr{constructor(e,n,s){super(e,n,Qu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new Y(e))}withConverter(e){return new Bs(this.firestore,e,this._path)}}function Y5(t,e,...n){if(t=Be(t),fb("collection","path",e),t instanceof ih){const s=Fe.fromString(e,...n);return Jy(s),new Bs(t,null,s)}{if(!(t instanceof Vt||t instanceof Bs))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return Jy(s),new Bs(t.firestore,null,s)}}function C2(t,e,...n){if(t=Be(t),arguments.length===1&&(e=pI.newId()),fb("doc","path",e),t instanceof ih){const s=Fe.fromString(e,...n);return Xy(s),new Vt(t,null,new Y(s))}{if(!(t instanceof Vt||t instanceof Bs))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return Xy(s),new Vt(t.firestore,t instanceof Bs?t.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new QI(this,"async_queue_retry"),this.iu=()=>{const n=zh();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new hs;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!rl(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ys("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const r=Rm.createAndSchedule(this,e,n,s,i=>this.au(i));return this.Xa.push(r),r}su(){this.eu&&ne()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function ev(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Gs extends ih{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new S2}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||db(this),this._firestoreClient.terminate()}}function P2(t,e){const n=typeof t=="object"?t:Iu(),s=typeof t=="string"?t:e||"(default)",r=Tu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=o0("firestore");i&&R2(r,...i)}return r}function oh(t){return t._firestoreClient||db(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function db(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,c,u){return new lL(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,hb(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new v2(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(Ot.fromBase64String(e))}catch(n){throw new H(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=/^__.*__$/;class N2{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new er(e,this.data,this.fieldMask,n,this.fieldTransforms):new ol(e,this.data,n,this.fieldTransforms)}}class pb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Mm{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Mm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Au(e),r}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Wc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(mb(this.Iu)&&k2.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class O2{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||th(e)}pu(e,n,s,r=!1){return new Mm({Iu:e,methodName:n,gu:s,path:mt.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lm(t){const e=t._freezeSettings(),n=th(t._databaseId);return new O2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function x2(t,e,n,s,r,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,r);Vm("Data must be an object, but it was:",o,s);const a=gb(s,o);let l,c;if(i.merge)l=new Xt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=yd(e,h,n);if(!o.contains(f))throw new H(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);yb(u,f)||u.push(f)}l=new Xt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new N2(new Wt(a),l,c)}class ch extends Dm{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}function D2(t,e,n,s){const r=t.pu(1,e,n);Vm("Data must be an object, but it was:",r,s);const i=[],o=Wt.empty();Br(s,(l,c)=>{const u=$m(e,l,n);c=Be(c);const h=r.Ru(u);if(c instanceof ch)i.push(u);else{const f=ul(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Xt(i);return new pb(o,a,r.fieldTransforms)}function M2(t,e,n,s,r,i){const o=t.pu(1,e,n),a=[yd(e,s,n)],l=[r];if(i.length%2!=0)throw new H(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(yd(e,i[f])),l.push(i[f+1]);const c=[],u=Wt.empty();for(let f=a.length-1;f>=0;--f)if(!yb(c,a[f])){const d=a[f];let m=l[f];m=Be(m);const p=o.Ru(d);if(m instanceof ch)c.push(d);else{const g=ul(m,p);g!=null&&(c.push(d),u.set(d,g))}}const h=new Xt(c);return new pb(u,h,o.fieldTransforms)}function L2(t,e,n,s=!1){return ul(n,t.pu(s?4:3,e))}function ul(t,e){if(_b(t=Be(t)))return Vm("Unsupported field value:",e,t),gb(t,e);if(t instanceof Dm)return function(s,r){if(!mb(r.Iu))throw r.mu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.mu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=ul(a,r.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Be(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return PL(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=tt.fromDate(s);return{timestampValue:jc(r.serializer,i)}}if(s instanceof tt){const i=new tt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:jc(r.serializer,i)}}if(s instanceof lh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Hi)return{bytesValue:jI(r.serializer,s._byteString)};if(s instanceof Vt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vm(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.mu(`Unsupported field value: ${rh(s)}`)}(t,e)}function gb(t,e){const n={};return mI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(s,r)=>{const i=ul(r,e.Eu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function _b(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof lh||t instanceof Hi||t instanceof Vt||t instanceof Dm)}function Vm(t,e,n){if(!_b(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=rh(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function yd(t,e,n){if((e=Be(e))instanceof ah)return e._internalPath;if(typeof e=="string")return $m(t,e);throw Wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const V2=new RegExp("[~\\*/\\[\\]]");function $m(t,e,n){if(e.search(V2)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ah(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new H(k.INVALID_ARGUMENT,a+t+l)}function yb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Eb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $2 extends vb{data(){return super.data()}}function Eb(t,e){return typeof e=="string"?$m(t,e):e instanceof ah?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fm{}class F2 extends Fm{}function X5(t,e,...n){let s=[];e instanceof Fm&&s.push(e),s=s.concat(n),function(i){const o=i.filter(l=>l instanceof jm).length,a=i.filter(l=>l instanceof Um).length;if(o>1||o>0&&a>0)throw new H(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Um extends F2{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Um(e,n,s)}_apply(e){const n=this._parse(e);return Tb(e._query,n),new Wr(e.firestore,e.converter,ud(e._query,n))}_parse(e){const n=Lm(e.firestore);return function(i,o,a,l,c,u,h){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new H(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){nv(h,u);const d=[];for(const m of h)d.push(tv(l,i,m));f={arrayValue:{values:d}}}else f=tv(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||nv(h,u),f=L2(a,o,h,u==="in"||u==="not-in");return et.create(c,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class jm extends Fm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jm(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const l of a)Tb(o,l),o=ud(o,l)}(e._query,n),new Wr(e.firestore,e.converter,ud(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function tv(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new H(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bI(e)&&n.indexOf("/")!==-1)throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Fe.fromString(n));if(!Y.isDocumentKey(s))throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return by(t,new Y(s))}if(n instanceof Vt)return by(t,n._key);throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rh(n)}.`)}function nv(t,e){if(!Array.isArray(t)||t.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tb(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class U2{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Br(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new lh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=fm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const n=zs(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Fe.fromString(e);Ue(zI(s));const r=new xa(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(n)||ys(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ib extends vb{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Eb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ec extends Ib{data(e={}){return super.data(e)}}class bb{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Uo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ec(this._firestore,this._userDataWriter,s.key,s,new Uo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new ec(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Uo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new ec(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Uo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:B2(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function B2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t){t=on(t,Vt);const e=on(t.firestore,Gs);return I2(oh(e),t._key).then(n=>Rb(e,t,n))}class Bm extends U2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function q2(t){t=on(t,Wr);const e=on(t.firestore,Gs),n=oh(e),s=new Bm(e);return wb(t._query),b2(n,t._query).then(r=>new bb(e,s,t,r))}function J5(t,e,n,...s){t=on(t,Vt);const r=on(t.firestore,Gs),i=Lm(r);let o;return o=typeof(e=Be(e))=="string"||e instanceof ah?M2(i,"updateDoc",t._key,e,n,s):D2(i,"updateDoc",t._key,e),Wm(r,[o.toMutation(t._key,Tn.exists(!0))])}function Z5(t){return Wm(on(t.firestore,Gs),[new gm(t._key,Tn.none())])}function e6(t,e){const n=on(t.firestore,Gs),s=C2(t),r=j2(t.converter,e);return Wm(n,[x2(Lm(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then(()=>s)}function qm(t,...e){var n,s,r;t=Be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ev(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ev(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof Vt)c=on(t.firestore,Gs),u=Qu(t._key.path),l={next:h=>{e[o]&&e[o](Rb(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=on(t,Wr);c=on(h.firestore,Gs),u=h._query;const f=new Bm(c);l={next:d=>{e[o]&&e[o](new bb(c,f,h,d))},error:e[o+1],complete:e[o+2]},wb(t._query)}return function(f,d,m,p){const g=new xm(p),v=new Nm(d,g,m);return f.asyncQueue.enqueueAndForget(async()=>Sm(await qc(f),v)),()=>{g.Na(),f.asyncQueue.enqueueAndForget(async()=>Pm(await qc(f),v))}}(oh(c),u,a,l)}function Wm(t,e){return function(s,r){const i=new hs;return s.asyncQueue.enqueueAndForget(async()=>c2(await T2(s),r,i)),i.promise}(oh(t),e)}function Rb(t,e,n){const s=n.docs.get(e._key),r=new Bm(t);return new Ib(t,r,e._key,s,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){fo=r})(Ys),Xn(new bn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Gs(new GM(s.getProvider("auth-internal")),new JM(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xa(c.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Zt(Ey,"4.3.2",e),Zt(Ey,"4.3.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="firebasestorage.googleapis.com",Sb="storageBucket",W2=2*60*1e3,H2=10*60*1e3,z2=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Zn{constructor(e,n,s=0){super(Gh(e),`Firebase Storage: ${n} (${Gh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Gh(t){return"storage/"+t}function Hm(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(We.UNKNOWN,t)}function K2(t){return new Qe(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function G2(t){return new Qe(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Q2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(We.UNAUTHENTICATED,t)}function Y2(){return new Qe(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function X2(t){return new Qe(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Pb(){return new Qe(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kb(){return new Qe(We.CANCELED,"User canceled the upload/download.")}function J2(t){return new Qe(We.INVALID_URL,"Invalid URL '"+t+"'.")}function Z2(t){return new Qe(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function e$(){return new Qe(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sb+"' property when initializing the app?")}function Nb(){return new Qe(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function t$(){return new Qe(We.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function n$(){return new Qe(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function s$(t){return new Qe(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vd(t){return new Qe(We.INVALID_ARGUMENT,t)}function Ob(){return new Qe(We.APP_DELETED,"The Firebase app was deleted.")}function r$(t){return new Qe(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sa(t,e){return new Qe(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function So(t){throw new Qe(We.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(s.path==="")return s;throw Z2(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},p=n===Cb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",v=new RegExp(`^https?://${p}/${r}/${g}`,"i"),I=[{regex:a,indices:l,postModify:i},{regex:d,indices:m,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<I.length;w++){const N=I[w],b=N.regex.exec(e);if(b){const R=b[N.indices.bucket];let E=b[N.indices.path];E||(E=""),s=new Jt(R,E),N.postModify(s);break}}if(s==null)throw J2(e);return s}}class i${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){r=setTimeout(()=>{r=null,t(d,l())},g)}function f(){i&&clearTimeout(i)}function d(g,...v){if(c){f();return}if(g){f(),u.call(null,g,...v);return}if(l()||o){f(),u.call(null,g,...v);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let m=!1;function p(g){m||(m=!0,f(),!c&&(r!==null?(g||(a=2),clearTimeout(r),h(0)):g||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,p(!0)},n),p}function a$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l$(t){return t!==void 0}function c$(t){return typeof t=="function"}function u$(t){return typeof t=="object"&&!Array.isArray(t)}function uh(t){return typeof t=="string"||t instanceof String}function sv(t){return zm()&&t instanceof Blob}function zm(){return typeof Blob<"u"&&!MS()}function rv(t,e,n,s){if(s<e)throw vd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw vd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function xb(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wr||(wr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e,n,s,r,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Fl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===wr.NO_ERROR,l=i.getStatus();if(!a||Db(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===wr.ABORT;s(!1,new Fl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Fl(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());l$(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Hm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Ob():kb();o(l)}else{const l=Pb();o(l)}};this.canceled_?n(!1,new Fl(!1,null,!0)):this.backoffId_=o$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&a$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function f$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function d$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function p$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function m$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function g$(t,e,n,s,r,i,o=!0){const a=xb(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return p$(c,e),f$(c,n),d$(c,i),m$(c,s),new h$(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function y$(...t){const e=_$();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(zm())return new Blob(t);throw new Qe(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function v$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E$(t){if(typeof atob>"u")throw s$("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qh{constructor(e,n){this.data=e,this.contentType=n||null}}function w$(t,e){switch(t){case Wn.RAW:return new Qh(Mb(e));case Wn.BASE64:case Wn.BASE64URL:return new Qh(Lb(t,e));case Wn.DATA_URL:return new Qh(I$(e),b$(e))}throw Hm()}function Mb(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function T$(t){let e;try{e=decodeURIComponent(t)}catch{throw sa(Wn.DATA_URL,"Malformed data URL.")}return Mb(e)}function Lb(t,e){switch(t){case Wn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw sa(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Wn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw sa(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=E$(e)}catch(r){throw r.message.includes("polyfill")?r:sa(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Vb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw sa(Wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=A$(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function I$(t){const e=new Vb(t);return e.base64?Lb(Wn.BASE64,e.rest):T$(e.rest)}function b$(t){return new Vb(t).contentType}function A$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){let s=0,r="";sv(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(sv(this.data_)){const s=this.data_,r=v$(s,e,n);return r===null?null:new Ms(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Ms(s,!0)}}static getBlob(...e){if(zm()){const n=e.map(s=>s instanceof Ms?s.data_:s);return new Ms(y$.apply(null,n))}else{const n=e.map(o=>uh(o)?w$(Wn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Ms(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t){let e;try{e=JSON.parse(t)}catch{return null}return u$(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function C$(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Fb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(t,e){return e}class xt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||S$}}let Ul=null;function P$(t){return!uh(t)||t.length<2?t:Fb(t)}function Ub(){if(Ul)return Ul;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(i,o){return P$(o)}const n=new xt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new xt("size");return r.xform=s,t.push(r),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),Ul=t,Ul}function k$(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Jt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function N$(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return k$(s,t),s}function jb(t,e,n){const s=$b(e);return s===null?null:N$(t,s,n)}function O$(t,e,n,s){const r=$b(e);if(r===null||!uh(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=go(f,n,s),m=xb({alt:"media",token:c});return d+m})[0]}function Bb(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Hr{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){if(!t)throw Hm()}function Km(t,e){function n(s,r){const i=jb(t,r,e);return fs(i!==null),i}return n}function x$(t,e){function n(s,r){const i=jb(t,r,e);return fs(i!==null),O$(i,r,t.host,t._protocol)}return n}function hl(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Y2():r=Q2():n.getStatus()===402?r=G2(t.bucket):n.getStatus()===403?r=X2(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Gm(t){const e=hl(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=K2(t.path)),i.serverResponse=r.serverResponse,i}return n}function D$(t,e,n){const s=e.fullServerUrl(),r=go(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Hr(r,i,Km(t,n),o);return a.errorHandler=Gm(e),a}function M$(t,e,n){const s=e.fullServerUrl(),r=go(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Hr(r,i,x$(t,n),o);return a.errorHandler=Gm(e),a}function L$(t,e){const n=e.fullServerUrl(),s=go(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(l,c){}const a=new Hr(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=Gm(e),a}function V$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qb(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=V$(null,e)),s}function $$(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let w=0;w<2;w++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=qb(e,s,r),u=Bb(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=Ms.getBlob(h,s,f);if(d===null)throw Nb();const m={name:c.fullPath},p=go(i,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,T=new Hr(p,g,Km(t,n),v);return T.urlParams=m,T.headers=o,T.body=d.uploadData(),T.errorHandler=hl(e),T}class Hc{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function Qm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{fs(!1)}return fs(!!n&&(e||["active"]).indexOf(n)!==-1),n}function F$(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=qb(e,s,r),a={name:o.fullPath},l=go(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Bb(o,n),f=t.maxUploadRetryTime;function d(p){Qm(p);let g;try{g=p.getResponseHeader("X-Goog-Upload-URL")}catch{fs(!1)}return fs(uh(g)),g}const m=new Hr(l,c,d,f);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=hl(e),m}function U$(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(c){const u=Qm(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{fs(!1)}h||fs(!1);const f=Number(h);return fs(!isNaN(f)),new Hc(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Hr(n,o,i,a);return l.headers=r,l.errorHandler=hl(e),l}const iv=256*1024;function j$(t,e,n,s,r,i,o,a){const l=new Hc(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw t$();const c=l.total-l.current;let u=c;r>0&&(u=Math.min(u,r));const h=l.current,f=h+u;let d="";u===0?d="finalize":c===u?d="upload, finalize":d="upload";const m={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${l.current}`},p=s.slice(h,f);if(p===null)throw Nb();function g(w,N){const b=Qm(w,["active","final"]),R=l.current+u,E=s.size();let C;return b==="final"?C=Km(e,i)(w,N):C=null,new Hc(R,E,b==="final",C)}const v="POST",T=e.maxUploadRetryTime,I=new Hr(n,v,g,T);return I.headers=m,I.body=p.uploadData(),I.progressCallback=a||null,I.errorHandler=hl(t),I}const Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Yh(t){switch(t){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(e,n,s){if(c$(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class q${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw So("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw So("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw So("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw So("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw So("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class W$ extends q${initXhr(){this.xhr_.responseType="text"}}function hr(){return new W$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Ub(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(We.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Db(r.status,[]))if(i)r=Pb();else{this.sleepTime=Math.max(this.sleepTime*2,z2),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(We.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=F$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,hr,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=U$(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,hr,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=iv*this._chunkMultiplier,n=new Hc(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=j$(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,hr,r,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){iv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=D$(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,hr,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=$$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,hr,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=kb(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Yh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new B$(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Yh(this._state)){case Bt.SUCCESS:ti(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const n=this._reject;ti(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Yh(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&ti(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&ti(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&ti(e.error.bind(e,this._error))();break;default:e.error&&ti(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xr(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fb(this._location.path)}get storage(){return this._service}get parent(){const e=R$(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw r$(e)}}function z$(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new H$(t,new Ms(e),n)}function K$(t){t._throwIfRoot("getDownloadURL");const e=M$(t.storage,t._location,Ub());return t.storage.makeRequestWithTokens(e,hr).then(n=>{if(n===null)throw n$();return n})}function G$(t){t._throwIfRoot("deleteObject");const e=L$(t.storage,t._location);return t.storage.makeRequestWithTokens(e,hr)}function Q$(t,e){const n=C$(t._location.path,e),s=new Jt(t._location.bucket,n);return new xr(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y$(t){return/^[A-Za-z]+:\/\//.test(t)}function X$(t,e){return new xr(t,e)}function Wb(t,e){if(t instanceof Ym){const n=t;if(n._bucket==null)throw e$();const s=new xr(n,n._bucket);return e!=null?Wb(s,e):s}else return e!==void 0?Q$(t,e):t}function J$(t,e){if(e&&Y$(e)){if(t instanceof Ym)return X$(t,e);throw vd("To use ref(service, url), the first argument must be a Storage instance.")}else return Wb(t,e)}function ov(t,e){const n=e==null?void 0:e[Sb];return n==null?null:Jt.makeFromBucketSpec(n,t)}function Z$(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:c0(r,t.app.options.projectId))}class Ym{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Cb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=W2,this._maxUploadRetryTime=H2,this._requests=new Set,r!=null?this._bucket=Jt.makeFromBucketSpec(r,this._host):this._bucket=ov(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=ov(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new i$(Ob());{const o=g$(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const av="@firebase/storage",lv="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="storage";function t6(t,e,n){return t=Be(t),z$(t,e,n)}function n6(t){return t=Be(t),K$(t)}function s6(t){return t=Be(t),G$(t)}function r6(t,e){return t=Be(t),J$(t,e)}function eF(t=Iu(),e){t=Be(t);const s=Tu(t,Hb).getImmediate({identifier:e}),r=o0("storage");return r&&tF(s,...r),s}function tF(t,e,n,s={}){Z$(t,e,n,s)}function nF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ym(n,s,r,e,Ys)}function sF(){Xn(new bn(Hb,nF,"PUBLIC").setMultipleInstances(!0)),Zt(av,lv,""),Zt(av,lv,"esm2017")}sF();const Xh=new WeakMap;function zb(t,e){return Xh.has(e)||Xh.set(e,t||{f:{},r:{},s:{},u:{}}),Xh.get(e)}function rF(t,e,n,s){if(!t)return n;const[r,i]=Kb(t);if(!r)return n;const o=zb(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function iF(t,e,n,s){if(!t)return;const[r,i]=Kb(t);if(!r)return;const o=zb(void 0,s)[r],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(Fn),a}function Kb(t){return WN(t)||HN(t)?["f",t.path]:zN(t)?["r",t.toString()]:KN(t)?["s",t.toString()]:[]}const Jh=new WeakMap;function oF(t,e,n){const s=oo();Jh.has(s)||Jh.set(s,new Map);const r=Jh.get(s),i=iF(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Fn}const aF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Ed(t,e,n,s){if(!BN(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof tt||m instanceof lh)h[d]=m;else if(vp(m)){const p=c+d;h[d]=p in n?l[d]:m.path,f[p]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let p=0;p<m.length;p++){const g=m[p];g&&g.path in i&&(h[d][p]=i[g.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else $r(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",r),r}const Xm={reset:!1,wait:!0,maxRefDepth:2,converter:aF,snapshotOptions:{serverTimestamps:"estimate"}};function zc(t){for(const e in t)t[e].unsub()}function wd(t,e,n,s,r,i,o,a,l){const[c,u]=Ed(s.data(t.snapshotOptions),yp(e,n),r,t);i.set(e,n,c),Td(t,e,n,r,u,i,o,a,l)}function lF({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const l=Object.create(null);let c=Fn;return a.once?Ab(t).then(u=>{u.exists()?wd(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())}).catch(i):c=qm(t,u=>{u.exists()?wd(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())},i),()=>{c(),zc(l)}}function Td(t,e,n,s,r,i,o,a,l){const c=Object.keys(r);if(Object.keys(s).filter(p=>c.indexOf(p)<0).forEach(p=>{s[p].unsub(),delete s[p]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(p){p in d&&++h>=f&&a(n)}c.forEach(p=>{const g=s[p],v=r[p],T=`${n}.${p}`;if(d[T]=!0,g)if(g.path!==v.path)g.unsub();else return;s[p]={data:()=>yp(e,T),unsub:lF({ref:v,target:e,path:T,depth:o,ops:i,resolve:m.bind(null,T),reject:l},t),path:v.path}})}function cF(t,e,n,s,r,i){const o=Object.assign({},Xm,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Ke(c?[]:t.value);c||n.set(t,h,[]);const d=s;let m,p=Fn;const g=[],v={added:({newIndex:I,doc:w})=>{g.splice(I,0,Object.create(null));const N=g[I],[b,R]=Ed(w.data(l),void 0,N,o);n.add(ts(f),I,b),Td(o,f,`${h}.${I}`,N,R,n,0,s.bind(null,w),r)},modified:({oldIndex:I,newIndex:w,doc:N})=>{const b=ts(f),R=g[I],E=b[I],[C,V]=Ed(N.data(l),E,R,o);g.splice(w,0,R),n.remove(b,I),n.add(b,w,C),Td(o,f,`${h}.${w}`,R,V,n,0,s,r)},removed:({oldIndex:I})=>{const w=ts(f);n.remove(w,I),zc(g.splice(I,1)[0])}};function T(I){const w=I.docChanges(a);if(!m&&w.length){m=!0;let N=0;const b=w.length,R=Object.create(null);for(let E=0;E<b;E++)R[w[E].doc.id]=!0;s=E=>{E&&E.id in R&&++N>=b&&(c&&(n.set(t,h,ts(f)),f=t),d(ts(f)),s=Fn)}}w.forEach(N=>{v[N.type](N)}),w.length||(c&&(n.set(t,h,ts(f)),f=t),s(ts(f)))}return u?q2(e).then(T).catch(r):p=qm(e,T,r),I=>{if(p(),I){const w=typeof I=="function"?I():[];n.set(t,h,w)}g.forEach(zc)}}function uF(t,e,n,s,r,i){const o=Object.assign({},Xm,i),a="value",l=Object.create(null);s=GN(s,()=>yp(t,a));let c=Fn;function u(h){h.exists()?wd(o,t,a,h,l,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?Ab(e).then(u).catch(r):c=qm(e,u,r),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}zc(l)}}const cv=Symbol();function Gb(t,e){let n=Fn;const s=Object.assign({},Xm,e),r=ts(t),i=s.target||Ke();YN()&&(s.once=!0);const o=rF(r,s.ssrKey,cv,oo()),a=o!==cv;a&&(i.value=o);let l=!a;const c=Ke(!1),u=Ke(),h=TE(),f=qd();let d=Fn;function m(){let v=ts(t);const T=new Promise((I,w)=>{if(n(s.reset),!v)return n=Fn,I(null);c.value=l,l=!0,v.converter||(v=v.withConverter(s.converter)),n=(vp(v)?uF:cF)(i,v,hF,I,w,s)}).catch(I=>(h.value===T&&(u.value=I),Promise.reject(I))).finally(()=>{h.value===T&&(c.value=!1)});h.value=T}let p=Fn;Me(t)&&(p=En(t,m)),m(),r&&(d=oF(h.value,r,s.ssrKey)),Oi()&&VE(()=>h.value),f&&aE(g);function g(v=s.reset){p(),d(),n(v)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>g}})}const hF={set:(t,e,n)=>UN(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function i6(t,e){return Gb(t,{target:Ke([]),...e})}function o6(t,e){return Gb(t,e)}function a6(t){return P2(oo(t))}function fF(t){return(e,n)=>{const s=XN(e,n).run(()=>Ke(t));JN.set(e,s),eO(s,e)}}function dF(t){return FN?Y0(oo(t)):null}function l6(t){return eF(oo(t))}function pF(t,{firebaseApp:e,modules:n=[]}){t.provide(Z0,e);for(const s of n)s(e,t)}const mF={apiKey:"AIzaSyDHpWEKfxDE7LGyKua1I8WV-3DeE7_LLZY",authDomain:"sushimenu-dfb1c.firebaseapp.com",projectId:"sushimenu-dfb1c",storageBucket:"sushimenu-dfb1c.appspot.com",messagingSenderId:"888388003516",appId:"1:888388003516:web:ef8ae9957ebd14bcdb12b9"},gF=g0(mF),Qb=["__key","__init","__shim","__original","__index","__prevKey"];function _o(){return Math.random().toString(36).substring(2,15)}function _F(t,e){const n=t instanceof Set?t:new Set(t);return e&&e.forEach(s=>n.add(s)),[...n]}function ie(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $t(t,e,n=!0,s=["__key"]){if(t===e)return!0;if(typeof e=="object"&&typeof t=="object"){if(t instanceof Map||t instanceof Set)return!1;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return yF(t,e);if(t===null||e===null||Object.keys(t).length!==Object.keys(e).length)return!1;for(const r of s)if((r in t||r in e)&&t[r]!==e[r])return!1;for(const r in t)if(!(r in e)||t[r]!==e[r]&&!n||n&&!$t(t[r],e[r],n,s))return!1;return!0}return!1}function yF(t,e){return t.source===e.source&&t.flags.split("").sort().join("")===e.flags.split("").sort().join("")}function an(t){const e=typeof t;if(e==="number")return!1;if(t===void 0)return!0;if(e==="string")return t==="";if(e==="object"){if(t===null)return!0;for(const n in t)return!1;return!(t instanceof RegExp||t instanceof Date)}return!1}function vF(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function EF(t){const e=`^${vF(t)}$`,n={MM:"(0[1-9]|1[012])",M:"([1-9]|1[012])",DD:"([012][0-9]|3[01])",D:"([012]?[0-9]|3[01])",YYYY:"\\d{4}",YY:"\\d{2}"},s=Object.keys(n);return new RegExp(s.reduce((r,i)=>r.replace(i,n[i]),e))}function Id(t){return Object.prototype.toString.call(t)==="[object Object]"}function ra(t){return Id(t)||Array.isArray(t)}function zi(t){if(Id(t)===!1||t.__FKNode__||t.__POJO__===!1)return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(Id(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)}function Dr(t,e,n=!1,s=!1){if(e===null)return null;const r={};if(typeof e=="string")return e;for(const i in t)if(ie(e,i)&&(e[i]!==void 0||!s)){if(n&&Array.isArray(t[i])&&Array.isArray(e[i])){r[i]=t[i].concat(e[i]);continue}if(e[i]===void 0)continue;zi(t[i])&&zi(e[i])?r[i]=Dr(t[i],e[i],n,s):r[i]=e[i]}else r[i]=t[i];for(const i in e)!ie(r,i)&&e[i]!==void 0&&(r[i]=e[i]);return r}function wF(t){if(t[0]!=='"'&&t[0]!=="'"||t[0]!==t[t.length-1])return!1;const e=t[0];for(let n=1;n<t.length;n++)if(t[n]===e&&(n===1||t[n-1]!=="\\")&&n!==t.length-1)return!1;return!0}function TF(t){if(!t.length)return"";let e="",n="";for(let s=0;s<t.length;s++){const r=t.charAt(s);(r!=="\\"||n==="\\")&&(e+=r),n=r}return e}function ni(...t){return t.reduce((e,n)=>{const{value:s,name:r,modelValue:i,config:o,plugins:a,...l}=n;return Object.assign(e,l)},{})}function IF(t){const e=[];let n="",s=0,r="",i="";for(let o=0;o<t.length;o++){const a=t.charAt(o);a===r&&i!=="\\"?r="":(a==="'"||a==='"')&&!r&&i!=="\\"?r=a:a==="("&&!r?s++:a===")"&&!r&&s--,a===","&&!r&&s===0?(e.push(n),n=""):(a!==" "||r)&&(n+=a),i=a}return n&&e.push(n),e}function uv(t,e){const n={},s=e.filter(i=>i instanceof RegExp),r=new Set(e);for(const i in t)!r.has(i)&&!s.some(o=>o.test(i))&&(n[i]=t[i]);return n}function hv(t,e){const n={},s=e.filter(r=>r instanceof RegExp);return e.forEach(r=>{r instanceof RegExp||(n[r]=t[r])}),Object.keys(t).forEach(r=>{s.some(i=>i.test(r))&&(n[r]=t[r])}),n}function Ri(t){return t.replace(/-([a-z0-9])/gi,(e,n)=>n.toUpperCase())}function Yb(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,n,s)=>n+"-"+s.toLowerCase()).replace(" ","-").toLowerCase()}function bd(t,e=Qb){if(t!==null&&typeof t=="object"){let n;if(Array.isArray(t)?n=[...t]:zi(t)&&(n={...t}),n)return AF(t,n,e),n}return t}function Ki(t,e=Qb){if(t===null||t instanceof RegExp||t instanceof Date||t instanceof Map||t instanceof Set||typeof File=="function"&&t instanceof File)return t;let n;Array.isArray(t)?n=t.map(s=>typeof s=="object"?Ki(s,e):s):n=Object.keys(t).reduce((s,r)=>(s[r]=typeof t[r]=="object"?Ki(t[r],e):t[r],s),{});for(const s of e)s in t&&Object.defineProperty(n,s,{enumerable:!1,value:t[s]});return n}function mn(t){return typeof t=="object"?Ki(t):t}function bF(t,e){if(!t||typeof t!="object")return null;const n=e.split(".");let s=t;for(const r in n){const i=n[r];if(ie(s,i)&&(s=s[i]),+r===n.length-1)return s;if(!s||typeof s!="object")return null}return null}function gn(t){return t!==void 0&&t!=="false"&&t!==!1?!0:void 0}function Gi(t){return Object.isFrozen(t)?t:Object.defineProperty(t,"__init",{enumerable:!1,value:!0})}function Jm(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g," ").trim().replace(/\s+/g,"-")}function AF(t,e,n){for(const s of n)s in t&&Object.defineProperty(e,s,{enumerable:!1,value:t[s]});return e}function RF(t){let e=!1;return(...n)=>{if(!e)return e=!0,queueMicrotask(()=>e=!1),t(...n)}}function Zm(){const t=[];let e=0;const n=r=>t.push(r),s=r=>{const i=t[e];return typeof i=="function"?i(r,o=>(e++,s(o))):(e=0,r)};return n.dispatch=s,n.unshift=r=>t.unshift(r),n.remove=r=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)},n}function Xb(){const t=new Map,e=new Map;let n;const s=(r,i)=>{if(n){n.set(i.name,[r,i]);return}t.has(i.name)&&t.get(i.name).forEach(o=>{(i.origin===r||o.modifiers.includes("deep"))&&o.listener(i)}),i.bubble&&r.bubble(i)};return s.flush=()=>{t.clear(),e.clear(),n==null||n.clear()},s.on=(r,i)=>{const[o,...a]=r.split("."),l=i.receipt||_o(),c={modifiers:a,event:o,listener:i,receipt:l};return t.has(o)?t.get(o).push(c):t.set(o,[c]),e.has(l)?e.get(l).push(o):e.set(l,[o]),l},s.off=r=>{var i;e.has(r)&&((i=e.get(r))===null||i===void 0||i.forEach(o=>{const a=t.get(o);Array.isArray(a)&&t.set(o,a.filter(l=>l.receipt!==r))}),e.delete(r))},s.pause=r=>{n||(n=new Map),r&&r.walk(i=>i._e.pause())},s.play=r=>{if(!n)return;const i=n;n=void 0,i.forEach(([o,a])=>s(o,a)),r&&r.walk(o=>o._e.play())},s}function CF(t,e,n,s,r=!0,i){return e._e(t,{payload:s,name:n,bubble:r,origin:t,meta:i}),t}function SF(t,e,n){return dl(t.parent)&&t.parent._e(t.parent,n),t}function PF(t,e,n,s){return e._e.on(n,s)}function kF(t,e,n){return e._e.off(n),t}const eg=Zm();eg((t,e)=>(t.message||(t.message=`E${t.code}`),e(t)));const tg=Zm();tg((t,e)=>{t.message||(t.message=`W${t.code}`);const n=e(t);return console&&typeof console.warn=="function"&&console.warn(n.message),n});function zr(t,e={}){tg.dispatch({code:t,data:e})}function tn(t,e={}){throw Error(eg.dispatch({code:t,data:e}).message)}function Pn(t,e){const n={blocking:!1,key:_o(),meta:{},type:"state",visible:!0,...t};return e&&n.value&&n.meta.localize!==!1&&(n.value=e.t(n),n.meta.locale=e.config.locale),n}const fv={apply:LF,set:OF,remove:Jb,filter:DF,reduce:MF,release:FF,touch:xF};function NF(t=!1){const e={};let n,s=t,r=[];const i=new Map;let o;const a=new Proxy(e,{get(...l){const[c,u]=l;return u==="buffer"?s:u==="_b"?r:u==="_m"?i:u==="_r"?o:ie(fv,u)?fv[u].bind(null,e,a,n):Reflect.get(...l)},set(l,c,u){return c==="_n"?(n=u,o==="__n"&&Zb(n,a),!0):c==="_b"?(r=u,!0):c==="buffer"?(s=u,!0):c==="_r"?(o=u,!0):(tn(101,n),!1)}});return a}function OF(t,e,n,s){if(e.buffer)return e._b.push([[s]]),e;if(t[s.key]!==s){if(typeof s.value=="string"&&s.meta.localize!==!1){const i=s.value;s.value=n.t(s),s.value!==i&&(s.meta.locale=n.props.locale)}const r=`message-${ie(t,s.key)?"updated":"added"}`;t[s.key]=Object.freeze(n.hook.message.dispatch(s)),n.emit(r,s)}return e}function xF(t,e){for(const n in t){const s={...t[n]};e.set(s)}}function Jb(t,e,n,s){if(ie(t,s)){const r=t[s];delete t[s],n.emit("message-removed",r)}return e.buffer===!0&&(e._b=e._b.filter(r=>(r[0]=r[0].filter(i=>i.key!==s),r[1]||r[0].length))),e}function DF(t,e,n,s,r){for(const i in t){const o=t[i];(!r||o.type===r)&&!s(o)&&Jb(t,e,n,i)}}function MF(t,e,n,s,r){for(const i in t){const o=t[i];r=s(r,o)}return r}function LF(t,e,n,s,r){if(Array.isArray(s)){if(e.buffer){e._b.push([s,r]);return}const i=new Set(s.map(o=>(e.set(o),o.key)));typeof r=="string"?e.filter(o=>o.type!==r||i.has(o.key)):typeof r=="function"&&e.filter(o=>!r(o)||i.has(o.key))}else for(const i in s){const o=n.at(i);o?o.store.apply(s[i],r):$F(n,e,i,s[i],r)}}function VF(t,...e){const n=`${t.name}-set`,s=r=>Pn({key:Jm(r),type:"error",value:r,meta:{source:n,autoClear:!0}});return e.filter(r=>!!r).map(r=>{if(typeof r=="string"&&(r=[r]),Array.isArray(r))return r.map(i=>s(i));{const i={};for(const o in r)Array.isArray(r[o])?i[o]=r[o].map(a=>s(a)):i[o]=[s(r[o])];return i}})}function $F(t,e,n,s,r){var i;const o=e._m;o.has(n)||o.set(n,[]),e._r||(e._r=Zb(t,e)),(i=o.get(n))===null||i===void 0||i.push([s,r])}function Zb(t,e){return t.on("child.deep",({payload:n})=>{e._m.forEach((s,r)=>{t.at(r)===n&&(s.forEach(([i,o])=>{n.store.apply(i,o)}),e._m.delete(r))}),e._m.size===0&&e._r&&(t.off(e._r),e._r=void 0)})}function FF(t,e){e.buffer=!1,e._b.forEach(([n,s])=>e.apply(n,s)),e._b=[]}function UF(){const t={};let e;return{count:(...n)=>jF(e,t,...n),init(n){e=n,n.on("message-added.deep",dv(t,1)),n.on("message-removed.deep",dv(t,-1))},merge:n=>pv(e,t,n),settled(n){return ie(t,n)?t[n].promise:Promise.resolve()},unmerge:n=>pv(e,t,n,!0),value(n){return ie(t,n)?t[n].count:0}}}function jF(t,e,n,s,r=0){if(s=BF(s||n),!ie(e,n)){const i={condition:s,count:0,name:n,node:t,promise:Promise.resolve(),resolve:()=>{}};e[n]=i,r=t.store.reduce((o,a)=>o+i.condition(a)*1,r),t.each(o=>{o.ledger.count(i.name,i.condition),r+=o.ledger.value(i.name)})}return eA(e[n],r).promise}function BF(t){return typeof t=="function"?t:e=>e.type===t}function eA(t,e){const n=t.count,s=t.count+e;return t.count=s,n===0&&s!==0?(t.node.emit(`unsettled:${t.name}`,t.count,!1),t.promise=new Promise(r=>t.resolve=r)):n!==0&&s===0&&(t.node.emit(`settled:${t.name}`,t.count,!1),t.resolve()),t.node.emit(`count:${t.name}`,t.count,!1),t}function dv(t,e){return n=>{for(const s in t){const r=t[s];r.condition(n.payload)&&eA(r,e)}}}function pv(t,e,n,s=!1){const r=t;for(const i in e){const o=e[i].condition;s||n.ledger.count(i,o);const a=n.ledger.value(i)*(s?-1:1);if(t){do t.ledger.count(i,o,a),t=t.parent;while(t);t=r}}}const ng=new Map,tc=new Map,sg=Xb(),qF=[];function WF(t){t.props.id&&(ng.set(t.props.id,t),tc.set(t,t.props.id),sg(t,{payload:t,name:t.props.id,bubble:!1,origin:t}))}function HF(t){if(tc.has(t)){const e=tc.get(t);tc.delete(t),ng.delete(e),sg(t,{payload:null,name:e,bubble:!1,origin:t})}}function fl(t){return ng.get(t)}function zF(t,e){qF.push(sg.on(t,e))}function Ad(t,e,n){let s=!0;return e in t.config._t?s=!1:t.emit(`config:${e}`,n,!1),e in t.props||(t.emit("prop",{prop:e,value:n}),t.emit(`prop:${e}`,n)),s}function KF(t={}){const e=new Set,n={...t,_add:r=>e.add(r),_rm:r=>e.delete(r)};return new Proxy(n,{set(r,i,o,a){return typeof i=="string"&&e.forEach(l=>Ad(l,i,o)),Reflect.set(r,i,o,a)}})}function tA(t){const e=document.getElementById(t);if(e instanceof HTMLFormElement){const n=new Event("submit",{cancelable:!0,bubbles:!0});e.dispatchEvent(n);return}zr(151,t)}function GF(t){const e=n=>{for(const s in n.store){const r=n.store[s];r.type==="error"||r.type==="ui"&&s==="incomplete"?n.store.remove(s):r.type==="state"&&n.store.set({...r,value:!1})}};e(t),t.walk(e)}function nA(t,e){const n=typeof t=="string"?fl(t):t;if(n){const s=o=>mn(o.props.initial)||(o.type==="group"?{}:o.type==="list"?[]:void 0);n._e.pause(n);const r=mn(e);return e&&!an(e)&&(n.props.initial=ra(r)?Gi(r):r,n.props._init=n.props.initial),n.input(s(n),!1),n.walk(o=>{o.type==="list"&&o.sync||o.input(s(o),!1)}),n.input(an(r)&&r?r:s(n),!1),n.type!=="input"&&e&&!an(e)&&ra(e)&&n.walk(o=>{o.props.initial=ra(o.value)?Gi(o.value):o.value,o.props._init=o.props.initial}),n._e.play(n),GF(n),n.emit("reset",n),n}zr(152,t)}const QF={delimiter:".",delay:0,locale:"en",rootClasses:t=>({[`formkit-${Yb(t)}`]:!0})},sA=Symbol("index"),Rd=Symbol("removed"),Cd=Symbol("moved"),rA=Symbol("inserted");function YF(t){return t.type==="list"&&Array.isArray(t._value)}function dl(t){return t&&typeof t=="object"&&t.__FKNode__===!0}const nc=(t,e,n)=>{tn(102,[t,n])},XF={_c:Te(yU,nc,!1),add:Te(uU),addProps:Te(cU),address:Te(EU,nc,!1),at:Te(wU),bubble:Te(SF),clearErrors:Te(PU),calm:Te(oU),config:Te(!1),define:Te(lU),disturb:Te(iU),destroy:Te(aU),extend:Te(NU),hydrate:Te(sU),index:Te(_U,gU,!1),input:Te(aA),each:Te(dU),emit:Te(CF),find:Te(IU),on:Te(PF),off:Te(kF),parent:Te(!1,hU),plugins:Te(!1),remove:Te(fU),root:Te(AU,nc,!1),reset:Te(SU),resetConfig:Te(mU),setErrors:Te(uA),submit:Te(CU),t:Te(RU),use:Te(rg),name:Te(vU,!1,!1),walk:Te(pU)};function JF(){return new Map(Object.entries(XF))}function Te(t,e,n=!0){return{get:t?(s,r)=>n?(...i)=>t(s,r,...i):t(s,r):!1,set:e!==void 0?e:nc.bind(null)}}function ZF(){const t=new Map;return new Proxy(t,{get(e,n){return t.has(n)||t.set(n,Zm()),t.get(n)}})}let iA=0,eU=0;function tU(t){var e,n;return((e=t.parent)===null||e===void 0?void 0:e.type)==="list"?sA:t.name||`${((n=t.props)===null||n===void 0?void 0:n.type)||"input"}_${++iA}`}function oA(t){return t.type==="group"?Gi(t.value&&typeof t.value=="object"&&!Array.isArray(t.value)?t.value:{}):t.type==="list"?Gi(Array.isArray(t.value)?t.value:[]):t.value}function aA(t,e,n,s=!0){return e._value=nU(t,t.hook.input.dispatch(n)),t.emit("input",e._value),t.isCreated&&t.type==="input"&&$t(e._value,e.value)?(t.emit("commitRaw",e.value),e.settled):(e.isSettled&&t.disturb(),s?(e._tmo&&clearTimeout(e._tmo),e._tmo=setTimeout(Kc,t.props.delay,t,e)):Kc(t,e),e.settled)}function nU(t,e){switch(t.type){case"input":break;case"group":(!e||typeof e!="object")&&tn(107,[t,e]);break;case"list":Array.isArray(e)||tn(108,[t,e]);break}return e}function Kc(t,e,n=!0,s=!0){e._value=e.value=t.hook.commit.dispatch(e._value),t.type!=="input"&&s&&t.hydrate(),t.emit("commitRaw",e.value),t.emit("commit",e.value),n&&t.calm()}function lA(t,{name:e,value:n,from:s}){if(!Object.isFrozen(t._value)){if(YF(t)){const r=n===Rd?[]:n===Cd&&typeof s=="number"?t._value.splice(s,1):[n];t._value.splice(e,n===Cd||s===rA?0:1,...r);return}n!==Rd?t._value[e]=n:delete t._value[e]}}function sU(t,e){const n=e._value;return t.type==="list"&&t.sync&&rU(t,e),e.children.forEach(s=>{if(typeof n=="object")if(s.name in n){const r=s.type!=="input"||n[s.name]&&typeof n[s.name]=="object"?Gi(n[s.name]):n[s.name];if(!s.isSettled||!ra(r)&&$t(r,s._value))return;s.input(r,!1)}else(t.type!=="list"||typeof s.name=="number")&&lA(e,{name:s.name,value:s.value}),n.__init||(s.type==="group"?s.input({},!1):s.type==="list"?s.input([],!1):s.input(void 0,!1))}),t}function rU(t,e){const n=t._value;if(!Array.isArray(n))return;const s=[],r=new Set(e.children),i=new Map;n.forEach((a,l)=>{if(e.children[l]&&e.children[l]._value===a)s.push(e.children[l]),r.delete(e.children[l]);else{s.push(null);const c=i.get(a)||[];c.push(l),i.set(a,c)}}),r.size&&i.size&&r.forEach(a=>{if(i.has(a._value)){const l=i.get(a._value),c=l.shift();s[c]=a,r.delete(a),l.length||i.delete(a._value)}});const o=[];for(i.forEach(a=>{o.push(...a)});r.size&&o.length;){const a=r.values().next().value,l=o.shift();if(l===void 0)break;s[l]=a,r.delete(a)}o.forEach((a,l)=>{s[a]=MU({value:l})}),r.size&&r.forEach(a=>{if(!("__FKP"in a)){const l=a._c.parent;if(!l||LU(l))return;l.ledger.unmerge(a),a._c.parent=null,a.destroy()}}),e.children=s}function iU(t,e){var n;return e._d<=0&&(e.isSettled=!1,t.emit("settled",!1,!1),e.settled=new Promise(s=>{e._resolve=s}),t.parent&&((n=t.parent)===null||n===void 0||n.disturb())),e._d++,t}function oU(t,e,n){var s;if(n!==void 0&&t.type!=="input")return lA(e,n),Kc(t,e,!0,!1);e._d>0&&e._d--,e._d===0&&(e.isSettled=!0,t.emit("settled",!0,!1),t.parent&&((s=t.parent)===null||s===void 0||s.calm({name:t.name,value:e.value})),e._resolve&&e._resolve(e.value))}function aU(t,e){t.emit("destroying",t),t.store.filter(()=>!1),t.parent&&(t.parent.emit("childRemoved",t),t.parent.remove(t)),HF(t),t.emit("destroyed",t),e._e.flush(),e._value=e.value=void 0;for(const n in e.context)delete e.context[n];e.plugins.clear(),e.context=null}function lU(t,e,n){e.type=n.type,e.props.definition=Ki(n),e.value=e._value=oA({type:t.type,value:e.value}),n.forceTypeProp&&(t.props.type&&(t.props.originalType=t.props.type),e.props.type=n.forceTypeProp),n.family&&(e.props.family=n.family),n.features&&n.features.forEach(s=>s(t)),n.props&&t.addProps(n.props),t.emit("defined",n)}function cU(t,e,n){var s;if(t.props.attrs){const r={...t.props.attrs};t.props._emit=!1;for(const o in r){const a=Ri(o);n.includes(a)&&(t.props[a]=r[o],delete r[o])}const i=mn(e._value);t.props.initial=t.type!=="input"?Gi(i):i,t.props._emit=!0,t.props.attrs=r,t.props.definition&&(t.props.definition.props=[...((s=t.props.definition)===null||s===void 0?void 0:s.props)||[],...n])}return t.emit("added-props",n),t}function uU(t,e,n,s){if(t.type==="input"&&tn(100,t),n.parent&&n.parent!==t&&n.parent.remove(n),!e.children.includes(n)){if(s!==void 0&&t.type==="list"){const r=e.children[s];r&&"__FKP"in r?(n._c.uid=r.uid,e.children.splice(s,1,n)):e.children.splice(s,0,n),Array.isArray(t.value)&&t.value.length<e.children.length&&t.disturb().calm({name:s,value:n.value,from:rA})}else e.children.push(n);n.isSettled||t.disturb()}if(n.parent!==t){if(n.parent=t,n.parent!==t)return t.remove(n),n.parent.add(n),t}else n.use(t.plugins);return Kc(t,e,!1),t.ledger.merge(n),t.emit("child",n),t}function hU(t,e,n,s){return dl(s)?(t.parent&&t.parent!==s&&t.parent.remove(t),e.parent=s,t.resetConfig(),s.children.includes(t)?t.use(s.plugins):s.add(t),!0):s===null?(e.parent=null,!0):!1}function fU(t,e,n){const s=e.children.indexOf(n);if(s!==-1){n.isSettled&&t.disturb(),e.children.splice(s,1);let r=gn(n.props.preserve),i=n.parent;for(;r===void 0&&i;)r=gn(i.props.preserve),i=i.parent;r?t.calm():t.calm({name:t.type==="list"?s:n.name,value:Rd}),n.parent=null,n.config._rmn=n}return t.ledger.unmerge(n),t}function dU(t,e,n){e.children.forEach(s=>!("__FKP"in s)&&n(s))}function pU(t,e,n,s=!1,r=!1){e.children.some(i=>{if("__FKP"in i)return!1;const o=n(i);return s&&o===!1?!0:r&&o===!1?!1:i.walk(n,s,r)})}function mU(t,e){const n=t.parent||void 0;e.config=cA(t.config._t,n),t.walk(s=>s.resetConfig())}function rg(t,e,n,s=!0,r=!0){return Array.isArray(n)||n instanceof Set?(n.forEach(i=>rg(t,e,i)),t):(e.plugins.has(n)||(r&&typeof n.library=="function"&&n.library(t),s&&n(t)!==!1&&(e.plugins.add(n),t.children.forEach(i=>i.use(n)))),t)}function gU(t,e,n,s){if(dl(t.parent)){const r=t.parent.children,i=s>=r.length?r.length-1:s<0?0:s,o=r.indexOf(t);return o===-1?!1:(r.splice(o,1),r.splice(i,0,t),t.parent.children=r,t.parent.type==="list"&&t.parent.disturb().calm({name:i,value:Cd,from:o}),!0)}return!1}function _U(t){if(t.parent){const e=[...t.parent.children].indexOf(t);return e===-1?t.parent.children.length:e}return-1}function yU(t,e){return e}function vU(t,e){var n;return((n=t.parent)===null||n===void 0?void 0:n.type)==="list"?t.index:e.name!==sA?e.name:t.index}function EU(t,e){return e.parent?e.parent.address.concat([t.name]):[t.name]}function wU(t,e,n){const s=typeof n=="string"?n.split(t.config.delimiter):n;if(!s.length)return;const r=s[0];let i=t.parent;for(i||(String(s[0])===String(t.name)&&s.shift(),i=t),r==="$parent"&&s.shift();i&&s.length;){const o=s.shift();switch(o){case"$root":i=t.root;break;case"$parent":i=i.parent;break;case"$self":i=t;break;default:i=i.children.find(a=>!("__FKP"in a)&&String(a.name)===String(o))||TU(i,o)}}return i||void 0}function TU(t,e){const n=String(e).match(/^(find)\((.*)\)$/);if(n){const[,s,r]=n,i=r.split(",").map(o=>o.trim());switch(s){case"find":return t.find(i[0],i[1]);default:return}}}function IU(t,e,n,s){return bU(t,n,s)}function bU(t,e,n="name"){const s=typeof n=="string"?i=>i[n]==e:n,r=[t];for(;r.length;){const i=r.shift();if(!("__FKP"in i)){if(s(i,e))return i;r.push(...i.children)}}}function AU(t){let e=t;for(;e.parent;)e=e.parent;return e}function cA(t={},e){let n;return new Proxy(t,{get(...s){const r=s[1];if(r==="_t")return t;const i=Reflect.get(...s);if(i!==void 0)return i;if(e){const o=e.config[r];if(o!==void 0)return o}if(t.rootConfig&&typeof r=="string"){const o=t.rootConfig[r];if(o!==void 0)return o}return r==="delay"&&(n==null?void 0:n.type)==="input"?20:QF[r]},set(...s){const r=s[1],i=s[2];if(r==="_n")return n=i,t.rootConfig&&t.rootConfig._add(n),!0;if(r==="_rmn")return t.rootConfig&&t.rootConfig._rm(n),n=void 0,!0;if(!$t(t[r],i,!1)){const o=Reflect.set(...s);return n&&(n.emit(`config:${r}`,i,!1),Ad(n,r,i),n.walk(a=>Ad(a,r,i),!1,!0)),o}return!0}})}function RU(t,e,n,s="ui"){const r=typeof n=="string"?{key:n,value:n,type:s}:n,i=t.hook.text.dispatch(r);return t.emit("text",i,!1),i.value}function CU(t){const e=t.name;do{if(t.props.isForm===!0)break;t.parent||tn(106,e),t=t.parent}while(t);t.props.id&&tA(t.props.id)}function SU(t,e,n){return nA(t,n)}function uA(t,e,n,s){const r=`${t.name}-set`,i=t.hook.setErrors.dispatch({localErrors:n,childErrors:s});return VF(t,i.localErrors,i.childErrors).forEach(o=>{t.store.apply(o,a=>a.meta.source===r)}),t}function PU(t,e,n=!0,s){return uA(t,e,[]),n&&(s=s||`${t.name}-set`,t.walk(r=>{r.store.filter(i=>!(i.type==="error"&&i.meta&&i.meta.source===s))})),t}function kU(t){const e={initial:typeof t=="object"?mn(t):t};let n,s=!0;return new Proxy(e,{get(...r){const[i,o]=r;if(ie(e,o))return Reflect.get(...r);if(n&&typeof o=="string"&&n.config[o]!==void 0)return n.config[o]},set(r,i,o,a){if(i==="_n")return n=o,!0;if(i==="_emit")return s=o,!0;const{prop:l,value:c}=n.hook.prop.dispatch({prop:i,value:o});if(!$t(e[l],c,!1)||typeof c=="object"){const u=Reflect.set(r,l,c,a);return s&&(n.emit("prop",{prop:l,value:c}),typeof l=="string"&&n.emit(`prop:${l}`,c)),u}return!0}})}function NU(t,e,n,s){return e.traps.set(n,s),t}function OU(t,e){if(t.props.definition)return t.define(t.props.definition);for(const n of e){if(t.props.definition)return;typeof n.library=="function"&&n.library(t)}}function xU(t){const e=oA(t),n=cA(t.config||{},t.parent);return{_d:0,_e:Xb(),uid:Symbol(),_resolve:!1,_tmo:!1,_value:e,children:_F(t.children||[]),config:n,hook:ZF(),isCreated:!1,isSettled:!0,ledger:UF(),name:tU(t),parent:t.parent||null,plugins:new Set,props:kU(e),settled:Promise.resolve(e),store:NF(!0),sync:t.sync||!1,traps:JF(),type:t.type||"input",value:e}}function DU(t,e){var n,s,r;const i=(n=e.props)===null||n===void 0?void 0:n.id;if(i||(s=e.props)===null||s===void 0||delete s.id,t.ledger.init(t.store._n=t.props._n=t.config._n=t),t.props._emit=!1,Object.assign(t.props,i?{}:{id:`input_${eU++}`},(r=e.props)!==null&&r!==void 0?r:{}),t.props._emit=!0,OU(t,new Set([...e.plugins||[],...t.parent?t.parent.plugins:[]])),e.plugins)for(const o of e.plugins)rg(t,t._c,o,!0,!1);return t.each(o=>t.add(o)),t.parent&&t.parent.add(t,e.index),t.type==="input"&&t.children.length&&tn(100,t),aA(t,t._c,t._value,!1),t.store.release(),i&&WF(t),t.emit("created",t),t.isCreated=!0,t}function MU(t){var e,n,s,r;return{__FKP:!0,uid:Symbol(),name:(e=t==null?void 0:t.name)!==null&&e!==void 0?e:`p_${iA++}`,value:(n=t==null?void 0:t.value)!==null&&n!==void 0?n:null,_value:(s=t==null?void 0:t.value)!==null&&s!==void 0?s:null,type:(r=t==null?void 0:t.type)!==null&&r!==void 0?r:"input",use:()=>{},input(i){return this._value=i,this.value=i,Promise.resolve()},isSettled:!0}}function LU(t){return"__FKP"in t}function VU(t){const e=t||{},n=xU(e),s=new Proxy(n,{get(...r){const[,i]=r;if(i==="__FKNode__")return!0;const o=n.traps.get(i);return o&&o.get?o.get(s,n):Reflect.get(...r)},set(...r){const[,i,o]=r,a=n.traps.get(i);return a&&a.set?a.set(s,n,i,o):Reflect.set(...r)}});return DU(s,e)}function Sd(t){return typeof t!="string"&&ie(t,"$el")}function Pd(t){return typeof t!="string"&&ie(t,"$cmp")}function ai(t){return!t||typeof t=="string"?!1:ie(t,"if")&&ie(t,"then")}function $U(t){return typeof t!="string"&&"$formkit"in t}function FU(t){if(typeof t=="string")return{$el:"text",children:t};if($U(t)){const{$formkit:e,for:n,if:s,children:r,bind:i,...o}=t;return Object.assign({$cmp:"FormKit",props:{...o,type:e}},s?{if:s}:{},n?{for:n}:{},r?{children:r}:{},i?{bind:i}:{})}return t}function un(t){let e;const n=new Set,s=function(g,v){return typeof g=="function"?g(v):g},r=[{"&&":(p,g,v)=>s(p,v)&&s(g,v),"||":(p,g,v)=>s(p,v)||s(g,v)},{"===":(p,g,v)=>s(p,v)===s(g,v),"!==":(p,g,v)=>s(p,v)!==s(g,v),"==":(p,g,v)=>s(p,v)==s(g,v),"!=":(p,g,v)=>s(p,v)!=s(g,v),">=":(p,g,v)=>s(p,v)>=s(g,v),"<=":(p,g,v)=>s(p,v)<=s(g,v),">":(p,g,v)=>s(p,v)>s(g,v),"<":(p,g,v)=>s(p,v)<s(g,v)},{"+":(p,g,v)=>s(p,v)+s(g,v),"-":(p,g,v)=>s(p,v)-s(g,v)},{"*":(p,g,v)=>s(p,v)*s(g,v),"/":(p,g,v)=>s(p,v)/s(g,v),"%":(p,g,v)=>s(p,v)%s(g,v)}],i=r.reduce((p,g)=>p.concat(Object.keys(g)),[]),o=new Set(i.map(p=>p.charAt(0)));function a(p,g,v,T){const I=p.filter(w=>w.startsWith(g));return I.length?I.find(w=>T.length>=v+w.length&&T.substring(v,v+w.length)===w?w:!1):!1}function l(p,g,v=1){let T=v?g.substring(p+1).trim():g.substring(0,p).trim();if(!T.length)return-1;if(!v){const w=T.split("").reverse(),N=w.findIndex(b=>o.has(b));T=w.slice(N).join("")}const I=T[0];return r.findIndex(w=>{const N=Object.keys(w);return!!a(N,I,0,T)})}function c(p,g){let v="";const T=g.length;let I=0;for(let w=p;w<T;w++){const N=g.charAt(w);if(N==="(")I++;else if(N===")")I--;else if(I===0&&N===" ")continue;if(I===0&&a(i,N,w,g))return[v,w-1];v+=N}return[v,g.length-1]}function u(p,g=0){const v=r[g],T=p.length,I=Object.keys(v);let w=0,N=!1,b=null,R="",E=null,C,V="",B="",he="",Z="",He=0;const Oe=(K,oe)=>{K?he+=oe:R+=oe};for(let K=0;K<T;K++)if(V=B,B=p.charAt(K),(B==="'"||B==='"')&&V!=="\\"&&(w===0&&!N||w&&!Z)){w?Z=B:N=B,Oe(w,B);continue}else if(N&&(B!==N||V==="\\")||Z&&(B!==Z||V==="\\")){Oe(w,B);continue}else if(N===B){N=!1,Oe(w,B);continue}else if(Z===B){Z=!1,Oe(w,B);continue}else{if(B===" ")continue;if(B==="(")w===0?He=K:he+=B,w++;else if(B===")")if(w--,w===0){const oe=typeof R=="string"&&R.startsWith("$")?R:void 0,de=oe&&p.charAt(K+1)===".";let rt="";de&&([rt,K]=c(K+2,p));const zt=b?g:l(He,p,0),Et=l(K,p);zt===-1&&Et===-1?(R=h(he,-1,oe,rt),typeof R=="string"&&(R=he)):b&&(zt>=Et||Et===-1)&&g===zt?(E=b.bind(null,h(he,-1,oe,rt)),b=null,R=""):Et>zt&&g===Et?R=h(he,-1,oe,rt):R+=`(${he})${de?`.${rt}`:""}`,he=""}else he+=B;else if(w===0&&(C=a(I,B,K,p))){K===0&&tn(103,[C,p]),K+=C.length-1,K===p.length-1&&tn(104,[C,p]),b?R&&(E=b.bind(null,h(R,g)),b=v[C].bind(null,E),R=""):E?(b=v[C].bind(null,h(E,g)),E=null):(b=v[C].bind(null,h(R,g)),R="");continue}else Oe(w,B)}return R&&b&&(b=b.bind(null,h(R,g))),b=!b&&E?E:b,!b&&R&&(b=(K,oe)=>typeof K=="function"?K(oe):K,b=b.bind(null,h(R,g))),!b&&!R&&tn(105,p),b}function h(p,g,v,T){if(v){const I=h(v,r.length);let w,N=T?un(`$${T}`):!1;if(typeof I=="function"){const b=IF(String(p)).map(R=>h(R,-1));return R=>{const E=I(R);return typeof E!="function"?(zr(150,v),E):(w=E(...b.map(C=>typeof C=="function"?C(R):C)),N&&(N=N.provide(C=>{const V=e(C);return C.reduce((he,Z)=>{if(Z===T||(T==null?void 0:T.startsWith(`${Z}(`))){const Oe=bF(w,Z);he[Z]=()=>Oe}else he[Z]=V[Z];return he},{})})),N?N():w)}}}else if(typeof p=="string"){if(p==="true")return!0;if(p==="false")return!1;if(p==="undefined")return;if(wF(p))return TF(p.substring(1,p.length-1));if(!isNaN(+p))return Number(p);if(g<r.length-1)return u(p,g+1);if(p.startsWith("$")){const I=p.substring(1);return n.add(I),function(N){return I in N?N[I]():void 0}}return p}return p}const f=u(t.startsWith("$:")?t.substring(2):t),d=Array.from(n);function m(p){return e=p,Object.assign(f.bind(null,p(d)),{provide:m})}return Object.assign(f,{provide:m})}function sc(t,e,n){return n?typeof n=="string"?n.split(" ").reduce((r,i)=>Object.assign(r,{[i]:!0}),{}):typeof n=="function"?sc(t,e,n(e,t)):n:{}}function UU(t,e,...n){const s=n.reduce((r,i)=>{if(!i)return Zh(r);const{$reset:o,...a}=i;return Zh(o?a:Object.assign(r,a))},{});return Object.keys(t.hook.classes.dispatch({property:e,classes:s}).classes).filter(r=>s[r]).join(" ")||null}function Zh(t){const e="$remove:";let n=!1;const s=Object.keys(t).filter(r=>(t[r]&&r.startsWith(e)&&(n=!0),t[r]));return s.length>1&&n&&s.filter(i=>i.startsWith(e)).map(i=>{const o=i.substring(e.length);t[o]=!1,t[i]=!1}),t}function jU(t,e,n){const s=fl(t);s?s.setErrors(e,n):zr(651,t)}function BU(t,e=!0){const n=fl(t);n?n.clearErrors(e):zr(652,t)}const Gc="1.3.0",hA=new WeakSet;function Va(t,e){const n=e||Object.assign(new Map,{active:!1}),s=new Map,r=function(u){var h;n.active&&(n.has(t)||n.set(t,new Set),(h=n.get(t))===null||h===void 0||h.add(u))},i=function(u){return new Proxy(u,{get(...h){return typeof h[1]=="string"&&r(`prop:${h[1]}`),Reflect.get(...h)}})},o=function(u){return new Proxy(u,{get(...h){return h[1]==="value"?f=>(r(`count:${f}`),u.value(f)):Reflect.get(...h)}})},a=function(u,h){return dl(u)?Va(u,n):(h==="value"&&r("commit"),h==="_value"&&r("input"),h==="props"?i(u):h==="ledger"?o(u):u)},{proxy:l,revoke:c}=Proxy.revocable(t,{get(...u){switch(u[1]){case"_node":return t;case"deps":return n;case"watch":return(f,d)=>pA(l,f,d);case"observe":return()=>{const f=new Map(n);return n.clear(),n.active=!0,f};case"stopObserve":return()=>{const f=new Map(n);return n.active=!1,f};case"receipts":return s;case"kill":return()=>{dA(s),hA.add(u[2]),c()}}const h=Reflect.get(...u);return typeof h=="function"?(...f)=>{const d=h(...f);return a(d,u[1])}:a(h,u[1])}});return l}function fA(t,[e,n],s){e.forEach((r,i)=>{r.forEach(o=>{var a;t.receipts.has(i)||t.receipts.set(i,{}),t.receipts.set(i,Object.assign((a=t.receipts.get(i))!==null&&a!==void 0?a:{},{[o]:i.on(o,s)}))})}),n.forEach((r,i)=>{r.forEach(o=>{if(t.receipts.has(i)){const a=t.receipts.get(i);a&&ie(a,o)&&(i.off(a[o]),delete a[o],t.receipts.set(i,a))}})})}function dA(t){t.forEach((e,n)=>{for(const s in e)n.off(e[s])})}function pA(t,e,n){const s=o=>{const a=t.stopObserve();fA(t,mA(r,a),()=>pA(t,e,n)),n&&n(o)},r=new Map(t.deps);t.observe();const i=e(t);i instanceof Promise?i.then(o=>s(o)):s(i)}function mA(t,e){const n=new Map,s=new Map;return e.forEach((r,i)=>{if(!t.has(i))n.set(i,r);else{const o=new Set,a=t.get(i);r.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),n.set(i,o)}}),t.forEach((r,i)=>{if(!e.has(i))s.set(i,r);else{const o=new Set,a=e.get(i);r.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),s.set(i,o)}}),[n,s]}function gA(t){return hA.has(t)}const kd=Pn({type:"state",blocking:!0,visible:!1,value:!0,key:"validating"});function qU(t={}){return function(n){let s=mn(n.props.validationRules||{}),r={...t,...s},i=Va(n);const o={input:_o(),rerun:null,isPassing:!0};let a=mn(n.props.validation);n.on("prop:validation",({payload:c})=>l(c,s)),n.on("prop:validationRules",({payload:c})=>l(a,c));function l(c,u){var h;$t(Object.keys(s||{}),Object.keys(u||{}))&&$t(a,c)||(s=mn(u),a=mn(c),r={...t,...s},dA(i.receipts),(h=n.props.parsedRules)===null||h===void 0||h.forEach(f=>{var d;f.messageObserver=(d=f.messageObserver)===null||d===void 0?void 0:d.kill()}),n.store.filter(()=>!1,"validation"),n.props.parsedRules=gv(c,r),i.kill(),i=Va(n),Nd(i,n.props.parsedRules,o))}n.props.parsedRules=gv(a,r),Nd(i,n.props.parsedRules,o)}}function Nd(t,e,n){gA(t)||(n.input=_o(),n.isPassing=!0,t.store.filter(s=>!s.meta.removeImmediately,"validation"),e.forEach(s=>s.debounce&&clearTimeout(s.timer)),e.length&&(t.store.set(kd),Od(0,e,t,n,!1,()=>{t.store.remove(kd.key)})))}function Od(t,e,n,s,r,i){const o=e[t];if(!o)return i();const a=s.input;o.state=null;function l(c,u){s.isPassing=s.isPassing&&!!u,o.queued=!1;const h=n.stopObserve();fA(n,mA(o.deps,h),()=>{try{n.store.set(kd)}catch{}o.queued=!0,s.rerun&&clearTimeout(s.rerun),s.rerun=setTimeout(Nd,0,n,e,s)}),o.deps=h,s.input===a&&(o.state=u,u===!1?zU(n,o,r||c):HU(n,o),e.length>t+1?Od(t+1,e,n,s,r||c,i):i())}(!an(n.value)||!o.skipEmpty)&&(s.isPassing||o.force)?o.queued?WU(o,n,c=>{c instanceof Promise?c.then(u=>l(!0,u)):l(!1,c)}):Od(t+1,e,n,s,r,i):an(n.value)&&o.skipEmpty&&s.isPassing?(n.observe(),n.value,l(!1,s.isPassing)):l(!1,null)}function WU(t,e,n){t.debounce?t.timer=setTimeout(()=>{e.observe(),n(t.rule(e,...t.args))},t.debounce):(e.observe(),n(t.rule(e,...t.args)))}function HU(t,e){const n=`rule_${e.name}`;e.messageObserver&&(e.messageObserver=e.messageObserver.kill()),ie(t.store,n)&&t.store.remove(n)}function zU(t,e,n){gA(t)||(e.messageObserver||(e.messageObserver=Va(t._node)),e.messageObserver.watch(s=>GU(s,e),s=>{const r=KU(t,e,s),i=Pn({blocking:e.blocking,key:`rule_${e.name}`,meta:{messageKey:e.name,removeImmediately:n,localize:!r,i18nArgs:s},type:"validation",value:r||"This field is not valid."});t.store.set(i)}))}function KU(t,e,n){const s=t.props.validationMessages&&ie(t.props.validationMessages,e.name)?t.props.validationMessages[e.name]:void 0;return typeof s=="function"?s(...n):s}function GU(t,e){return[{node:t,name:_A(t),args:e.args}]}function _A(t){return typeof t.props.validationLabel=="function"?t.props.validationLabel(t):t.props.validationLabel||t.props.label||t.props.name||String(t.name)}const yA="(?:[\\*+?()0-9]+)",vA="[a-zA-Z][a-zA-Z0-9_]+",QU=new RegExp(`^(${yA}?${vA})(?:\\:(.*)+)?$`,"i"),YU=new RegExp(`^(${yA})(${vA})$`,"i"),XU=/([\*+?]+)?(\(\d+\))([\*+?]+)?/,mv=/\(\d+\)/,JU={blocking:!0,debounce:0,force:!1,skipEmpty:!0,name:""};function gv(t,e){return t?(typeof t=="string"?ZU(t):Ki(t)).reduce((s,r)=>{let i=r.shift();const o={};if(typeof i=="string"){const[a,l]=t4(i);ie(e,a)&&(i=e[a],Object.assign(o,l))}return typeof i=="function"&&s.push({rule:i,args:r,timer:0,state:null,queued:!0,deps:new Map,...JU,...n4(o,i)}),s},[]):[]}function ZU(t){return t.split("|").reduce((e,n)=>{const s=e4(n);return s&&e.push(s),e},[])}function e4(t){const e=t.trim();if(e){const n=e.match(QU);if(n&&typeof n[1]=="string"){const s=n[1].trim(),r=n[2]&&typeof n[2]=="string"?n[2].split(",").map(i=>i.trim()):[];return[s,...r]}}return!1}function t4(t){const e=t.match(YU);if(!e)return[t,{name:t}];const n={"*":{force:!0},"+":{skipEmpty:!1},"?":{blocking:!1}},[,s,r]=e,i=mv.test(s)?s.match(XU)||[]:[,s];return[r,[i[1],i[2],i[3]].reduce((o,a)=>(a&&(mv.test(a)?o.debounce=parseInt(a.substr(1,a.length-1)):a.split("").forEach(l=>ie(n,l)&&Object.assign(o,n[l]))),o),{name:r})]}function n4(t,e){return t.name||(t.name=e.ruleName||e.name),["skipEmpty","force","debounce","blocking"].reduce((n,s)=>(ie(e,s)&&!ie(n,s)&&Object.assign(n,{[s]:e[s]}),n),t)}function ve(t){return t[0].toUpperCase()+t.substr(1)}function _v(t,e="or"){return t.reduce((n,s,r)=>(n+=s,r<=t.length-2&&t.length>2&&(n+=", "),r===t.length-2&&(n+=`${t.length===2?" ":""}${e} `),n),"")}function jl(t){const e=typeof t=="string"?new Date(Date.parse(t)):t;return e instanceof Date?new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}).format(e):"(unknown)"}function s4(t,e){return Number(t)>=Number(e)?[e,t]:[t,e]}const r4={add:"Add",remove:"Remove",removeAll:"Remove all",incomplete:"Sorry, not all fields are filled out correctly.",submit:"Submit",noFiles:"No file chosen",moveUp:"Move up",moveDown:"Move down",isLoading:"Loading...",loadMore:"Load more",next:"Next",prev:"Previous",addAllValues:"Add all values",addSelectedValues:"Add selected values",removeAllValues:"Remove all values",removeSelectedValues:"Remove selected values",chooseDate:"Choose date",changeDate:"Change date",invalidDate:"The selected date is invalid.",summaryHeader:"There were errors in your form.",close:"Close"},i4={accepted({name:t}){return`Please accept the ${t}.`},date_after({name:t,args:e}){return Array.isArray(e)&&e.length?`${ve(t)} must be after ${jl(e[0])}.`:`${ve(t)} must be in the future.`},alpha({name:t}){return`${ve(t)} can only contain alphabetical characters.`},alphanumeric({name:t}){return`${ve(t)} can only contain letters and numbers.`},alpha_spaces({name:t}){return`${ve(t)} can only contain letters and spaces.`},contains_alpha({name:t}){return`${ve(t)} must contain alphabetical characters.`},contains_alphanumeric({name:t}){return`${ve(t)} must contain letters or numbers.`},contains_alpha_spaces({name:t}){return`${ve(t)} must contain letters or spaces.`},contains_symbol({name:t}){return`${ve(t)} must contain a symbol.`},contains_uppercase({name:t}){return`${ve(t)} must contain an uppercase letter.`},contains_lowercase({name:t}){return`${ve(t)} must contain a lowercase letter.`},contains_numeric({name:t}){return`${ve(t)} must contain numbers.`},symbol({name:t}){return`${ve(t)} must be a symbol.`},uppercase({name:t}){return`${ve(t)} can only contain uppercase letters.`},lowercase({name:t}){return`${ve(t)} can only contain lowercase letters.`},date_before({name:t,args:e}){return Array.isArray(e)&&e.length?`${ve(t)} must be before ${jl(e[0])}.`:`${ve(t)} must be in the past.`},between({name:t,args:e}){if(isNaN(e[0])||isNaN(e[1]))return"This field was configured incorrectly and can’t be submitted.";const[n,s]=s4(e[0],e[1]);return`${ve(t)} must be between ${n} and ${s}.`},confirm({name:t}){return`${ve(t)} does not match.`},date_format({name:t,args:e}){return Array.isArray(e)&&e.length?`${ve(t)} is not a valid date, please use the format ${e[0]}`:"This field was configured incorrectly and can’t be submitted"},date_between({name:t,args:e}){return`${ve(t)} must be between ${jl(e[0])} and ${jl(e[1])}`},email:"Please enter a valid email address.",ends_with({name:t,args:e}){return`${ve(t)} doesn’t end with ${_v(e)}.`},is({name:t}){return`${ve(t)} is not an allowed value.`},length({name:t,args:[e=0,n=1/0]}){const s=Number(e)<=Number(n)?e:n,r=Number(n)>=Number(e)?n:e;return s==1&&r===1/0?`${ve(t)} must be at least one character.`:s==0&&r?`${ve(t)} must be less than or equal to ${r} characters.`:s===r?`${ve(t)} should be ${r} characters long.`:s&&r===1/0?`${ve(t)} must be greater than or equal to ${s} characters.`:`${ve(t)} must be between ${s} and ${r} characters.`},matches({name:t}){return`${ve(t)} is not an allowed value.`},max({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have more than ${n[0]} ${t}.`:`${ve(t)} must be less than or equal to ${n[0]}.`},mime({name:t,args:e}){return e[0]?`${ve(t)} must be of the type: ${e[0]}`:"No file formats allowed."},min({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have fewer than ${n[0]} ${t}.`:`Must be at least ${n[0]} ${t} .`},not({name:t,node:{value:e}}){return`“${e}” is not an allowed ${t}.`},number({name:t}){return`${ve(t)} must be a number.`},require_one:({name:t,node:e,args:n})=>{const s=n.map(r=>{const i=e.at(r);return i?_A(i):!1}).filter(r=>!!r);return s.unshift(t),`${s.join(" or ")} is required.`},required({name:t}){return`${ve(t)} is required.`},starts_with({name:t,args:e}){return`${ve(t)} doesn’t start with ${_v(e)}.`},url(){return"Please enter a valid URL."}};var o4=Object.freeze({__proto__:null,ui:r4,validation:i4});function a4(t){return function(n){let s=yv(n.config.locale,t),r=s?t[s]:{};n.on("prop:locale",({payload:i})=>{s=yv(i,t),r=s?t[s]:{},n.store.touch()}),n.on("prop:label",()=>n.store.touch()),n.on("prop:validationLabel",()=>n.store.touch()),n.hook.text((i,o)=>{var a,l;const c=((a=i.meta)===null||a===void 0?void 0:a.messageKey)||i.key;if(ie(r,i.type)&&ie(r[i.type],c)){const u=r[i.type][c];typeof u=="function"?i.value=Array.isArray((l=i.meta)===null||l===void 0?void 0:l.i18nArgs)?u(...i.meta.i18nArgs):u(i):i.value=u}return o(i)})}}function yv(t,e){if(ie(e,t))return t;const[n]=t.split("-");if(ie(e,n))return n;for(const s in e)return s;return!1}function l4(t){const e={};return Object.keys(t).forEach(n=>{Object.keys(t[n]).forEach(s=>{e[s]?e[s][n]=t[n][s]:e[s]={[n]:t[n][s]}})}),Object.keys(e).forEach(n=>{const s=e[n];e[n]=function(r,i){return c4(r,i,s)}}),e}function c4(t,e,n){const s=t.props.type,r=t.props.family;let i="";n.global&&(i+=n.global+" "),n[`family:${r}`]&&(i+=n[`family:${r}`]+" "),n[s]&&(i+=n[s]);const o=i.split("$reset");return o.length>1?`$reset ${o[o.length-1].trim()}`:o[0].trim()}let _n,xn=null,Qc,EA=!1,jo=!1;const u4=new Promise(t=>{Qc=()=>{EA=!0,t()}}),ds=typeof window<"u"&&typeof fetch<"u";_n=ds?getComputedStyle(document.documentElement):void 0;const mi={},ef={};function h4(t,e,n,s){e&&Object.assign(mi,e),ds&&!jo&&(_n!=null&&_n.getPropertyValue("--formkit-theme"))?(Qc(),jo=!0):t&&!jo&&ds?f4(t):!jo&&ds&&Qc();const r=function(o){var a,l;o.addProps(["iconLoader","iconLoaderUrl"]),o.props.iconHandler=vv(!((a=o.props)===null||a===void 0)&&a.iconLoader?o.props.iconLoader:s,!((l=o.props)===null||l===void 0)&&l.iconLoaderUrl?o.props.iconLoaderUrl:n),m4(o,o.props.iconHandler),o.on("created",()=>{var c;!((c=o==null?void 0:o.context)===null||c===void 0)&&c.handlers&&(o.context.handlers.iconClick=u=>{const h=`on${u.charAt(0).toUpperCase()}${u.slice(1)}IconClick`,f=o.props[h];if(f&&typeof f=="function")return d=>f(o,d)})})};return r.iconHandler=vv(s,n),r}function f4(t){if(!(!t||!ds||typeof getComputedStyle!="function")&&(jo=!0,xn=document.getElementById("formkit-theme"),t&&ds&&(!(_n!=null&&_n.getPropertyValue("--formkit-theme"))&&!xn||xn!=null&&xn.getAttribute("data-theme")&&(xn==null?void 0:xn.getAttribute("data-theme"))!==t))){const n=`https://cdn.jsdelivr.net/npm/@formkit/themes@${Gc.startsWith("__")?"latest":Gc}/dist/${t}/theme.css`,s=document.createElement("link");s.type="text/css",s.rel="stylesheet",s.id="formkit-theme",s.setAttribute("data-theme",t),s.onload=()=>{_n=getComputedStyle(document.documentElement),Qc()},document.head.appendChild(s),s.href=n,xn&&xn.remove()}}function vv(t,e){return n=>{if(typeof n!="string")return;if(n.startsWith("<svg"))return n;const s=n.startsWith("default:");n=s?n.split(":")[1]:n;const r=n in mi;let i;if(r)return mi[n];if(!ef[n]){if(i=d4(n),i=ds&&typeof i>"u"?Promise.resolve(i):i,i instanceof Promise)ef[n]=i.then(o=>!o&&typeof n=="string"&&!s?i=typeof t=="function"?t(n):p4(n,e):o).then(o=>(typeof n=="string"&&(mi[s?`default:${n}`:n]=o),o));else if(typeof i=="string")return mi[s?`default:${n}`:n]=i,i}return ef[n]}}function d4(t){if(ds)return EA?Ev(t):u4.then(()=>Ev(t))}function Ev(t){const e=_n==null?void 0:_n.getPropertyValue(`--fk-icon-${t}`);if(e){const n=atob(e);if(n.startsWith("<svg"))return mi[t]=n,n}}function p4(t,e){const n=Gc.startsWith("__")?"latest":Gc,s=typeof e=="function"?e(t):`https://cdn.jsdelivr.net/npm/@formkit/icons@${n}/dist/icons/${t}.svg`;if(ds)return fetch(`${s}`).then(async r=>{const i=await r.text();if(i.startsWith("<svg"))return i}).catch(r=>{console.error(r)})}function m4(t,e){const n=/^[a-zA-Z-]+(?:-icon|Icon)$/;Object.keys(t.props).filter(r=>n.test(r)).forEach(r=>g4(t,e,r))}function g4(t,e,n){const s=t.props[n],r=e(s),i=`_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`,o=`on${n.charAt(0).toUpperCase()}${n.slice(1)}Click`;if(t.addProps([i,o]),t.on(`prop:${n}`,_4),r instanceof Promise)return r.then(a=>{t.props[i]=a});t.props[i]=r}function _4(t){var e;const n=t.origin,s=t.payload,r=(e=n==null?void 0:n.props)===null||e===void 0?void 0:e.iconHandler,i=t.name.split(":")[1],o=`_raw${i.charAt(0).toUpperCase()}${i.slice(1)}`;if(r&&typeof r=="function"){const a=r(s);if(a instanceof Promise)return a.then(l=>{n.props[o]=l});n.props[o]=a}}const y4={config:{classes:l4({global:{label:"block font-bold text-lg",message:"text-red-500 mb-5",wrapper:"space-y-2 mb-3",input:"w-full p-3 border border-gray-300 text-gray-700 placeholder-gray-400"},text:{},number:{},file:{noFiles:"block my-2",fileItem:"hidden"},submit:{input:"$reset bg-red-500 py-2 w-full mt-5 font-bold text-white hover:bg-red-800 transition disabled:opacity-50"}})}},v4="modulepreload",E4=function(t){return"/"+t},wv={},si=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=E4(i),i in wv)return;wv[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":v4,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function w4(...t){const e=t.reduce((s,r)=>Dr(s,r),{}),n=()=>{};return n.library=function(s){const r=Ri(s.props.type);ie(e,r)&&s.define(e[r])},n}const T4=["classes","config","delay","errors","id","index","inputErrors","modelValue","onUpdate:modelValue","name","number","parent","plugins","sectionsSchema","type","validation","validationLabel","validationMessages","validationRules","onInput","onInputRaw","onUpdate:modelValue","onNode","onSubmit","onSubmitInvalid","onSubmitRaw"];function hh(t){return t&&typeof t=="object"&&"group"in t&&Array.isArray(t.options)}function wA(t,e={count:1}){return Array.isArray(t)?t.map(n=>{if(typeof n=="string"||typeof n=="number")return{label:String(n),value:String(n)};if(typeof n=="object"){if("group"in n)return n.options=wA(n.options||[],e),n;"value"in n&&typeof n.value!="string"&&Object.assign(n,{value:`__mask_${e.count++}`,__original:n.value})}return n}):Object.keys(t).map(n=>({label:t[n],value:n}))}function Mr(t,e,n=!1){if(Array.isArray(t)){for(const s of t)if(!(typeof s!="object"&&s)){if(hh(s)){const r=Mr(s.options,e,!0);if(r!==void 0)return r}else if(e==s.value)return"__original"in s?s.__original:s.value}}return n?void 0:e}function Qi(t,e){return t===null&&e===void 0||t===void 0&&e===null?!1:t==e?!0:zi(t)&&zi(e)?$t(t,e):!1}function ig(t){t.hook.prop((e,n)=>(e.prop==="options"&&(typeof e.value=="function"?(t.props.optionsLoader=e.value,e.value=[]):e.value=wA(e.value)),n(e)))}function fe(t,e,n=!1){return(...s)=>{const r=i=>{const o=!e||typeof e=="string"?{$el:e}:e();return(Sd(o)||Pd(o))&&(o.meta||(o.meta={section:t}),s.length&&!o.children&&(o.children=[...s.map(a=>typeof a=="function"?a(i):a)]),Sd(o)&&(o.attrs={class:`$classes.${t}`,...o.attrs||{}})),{if:`$slots.${t}`,then:`$slots.${t}`,else:t in i?Bo(o,i[t]):o}};return r._s=t,n?I4(r):r}}function I4(t){return e=>[t(e)]}function Yc(t){return typeof t=="object"&&("$el"in t||"$cmp"in t||"$formkit"in t)}function Bo(t,e={}){return typeof t=="string"?Yc(e)||typeof e=="string"?e:t:Array.isArray(t)?Yc(e)?e:t:Dr(t,e)}const b4=fe("actions",()=>({$el:"div",if:"$actions"})),Xc=fe("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",name:"$node.props.altName || $node.name",disabled:"$option.attrs.disabled || $disabled",onInput:"$handlers.toggleChecked",checked:"$fns.eq($_value, $onValue)",onBlur:"$handlers.blur",value:"$: true",id:"$id","aria-describedby":{if:"$options.length",then:{if:"$option.help",then:'$: "help-" + $option.attrs.id',else:void 0},else:{if:"$help",then:'$: "help-" + $id',else:void 0}}}})),TA=fe("optionHelp",()=>({$el:"div",if:"$option.help",attrs:{id:'$: "help-" + $option.attrs.id'}})),Jc=fe("inner","span"),Zc=fe("label","span"),IA=fe("option",()=>({$el:"li",for:["option","$options"],attrs:{"data-disabled":"$option.attrs.disabled || $disabled"}})),bA=fe("options","ul"),eu=fe("wrapper",()=>({$el:"label",attrs:{"data-disabled":{if:"$options.length",then:void 0,else:"$disabled || undefined"},"data-checked":{if:"$options == undefined",then:"$fns.eq($_value, $onValue) || undefined",else:"$fns.isChecked($option.value) || undefined"}}})),A4=fe("input",()=>({$el:"button",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",id:"$id"}})),R4=fe("default",null),tu=fe("decorator",()=>({$el:"span",attrs:{"aria-hidden":"true"}})),AA=fe("fieldset",()=>({$el:"fieldset",attrs:{id:"$id","aria-describedby":{if:"$help",then:'$: "help-" + $id',else:void 0}}})),C4=fe("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"file",disabled:"$disabled",name:"$node.name",onChange:"$handlers.files",onBlur:"$handlers.blur",id:"$id","aria-describedby":"$describedBy"}})),S4=fe("fileItem",()=>({$el:"li",for:["file","$value"]})),P4=fe("fileList",()=>({$el:"ul",if:"$value.length",attrs:{"data-has-multiple":"$_hasMultipleFiles"}})),k4=fe("fileName",()=>({$el:"span",attrs:{class:"$classes.fileName"}})),Tv=fe("fileRemove",()=>({$el:"button",attrs:{type:"button",onClick:"$handlers.resetFiles"}})),N4=fe("form",()=>({$el:"form",bind:"$attrs",attrs:{id:"$id",name:"$node.name",onSubmit:"$handlers.submit","data-loading":"$state.loading || undefined"}})),og=fe("wrapper",null,!0),Es=fe("help",()=>({$el:"div",if:"$help",attrs:{id:'$: "help-" + $id'}})),lt=(t,e)=>fe(`${t}Icon`,()=>{const n=`_raw${t.charAt(0).toUpperCase()}${t.slice(1)}Icon`;return{if:`$${t}Icon && $${n}`,$el:`${e||"span"}`,attrs:{class:`$classes.${t}Icon + " " + $classes.icon`,innerHTML:`$${n}`,onClick:`$handlers.iconClick(${t})`,for:{if:`${e==="label"}`,then:"$id"}}}})(),fh=fe("inner","div"),dh=fe("label",()=>({$el:"label",if:"$label",attrs:{for:"$id"}})),RA=fe("legend",()=>({$el:"legend",if:"$label"})),tr=fe("message",()=>({$el:"li",for:["message","$messages"],attrs:{key:"$message.key",id:"$id + '-' + $message.key","data-message-type":"$message.type"}})),nr=fe("messages",()=>({$el:"ul",if:"$defaultMessagePlacement && $fns.length($messages)"})),O4=fe("noFiles",()=>({$el:"span",if:"$value.length == 0"})),x4=fe("optGroup",()=>({$el:"optgroup",bind:"$option.attrs",attrs:{label:"$option.group"}})),Iv=fe("option",()=>({$el:"option",bind:"$option.attrs",attrs:{class:"$classes.option",value:"$option.value",selected:"$fns.isSelected($option)"}})),bv=fe("options",()=>({$el:null,if:"$options.length",for:["option","$option.options || $options"]})),Kr=fe("outer",()=>({$el:"div",attrs:{key:"$id","data-family":"$family || undefined","data-type":"$type","data-multiple":'$attrs.multiple || ($type != "select" && $options != undefined) || undefined',"data-has-multiple":"$_hasMultipleFiles","data-disabled":'$: ($disabled !== "false" && $disabled) || undefined',"data-empty":"$state.empty || undefined","data-complete":"$state.complete || undefined","data-invalid":"$state.valid === false && $state.validationVisible || undefined","data-errors":"$state.errors || undefined","data-submitted":"$state.submitted || undefined","data-prefix-icon":"$_rawPrefixIcon !== undefined || undefined","data-suffix-icon":"$_rawSuffixIcon !== undefined || undefined","data-prefix-icon-click":"$onPrefixIconClick !== undefined || undefined","data-suffix-icon-click":"$onSuffixIconClick !== undefined || undefined"}})),ws=fe("prefix",null),D4=fe("input",()=>({$el:"select",bind:"$attrs",attrs:{id:"$id","data-placeholder":"$fns.showPlaceholder($_value, $placeholder)",disabled:"$disabled",class:"$classes.input",name:"$node.name",onChange:"$handlers.onChange",onInput:"$handlers.selectInput",onBlur:"$handlers.blur","aria-describedby":"$describedBy"}})),M4=fe("submit",()=>({$cmp:"FormKit",bind:"$submitAttrs",props:{type:"submit",disabled:"$disabled",label:"$submitLabel"}})),Ts=fe("suffix",null),CA=fe("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"}})),L4=fe("input",()=>({$el:"textarea",bind:"$attrs",attrs:{disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"},children:"$initialValue"})),pl=fe("wrapper","div");function SA(t){return function(e,n){return e.prop==="options"&&Array.isArray(e.value)&&(e.value=e.value.map(s=>{var r;return!((r=s.attrs)===null||r===void 0)&&r.id?s:Dr(s,{attrs:{id:`${t.props.id}-option-${Jm(String(s.value))}`}})}),t.props.type==="checkbox"&&!Array.isArray(t.value)&&(t.isCreated?t.input([],!1):t.on("created",()=>{Array.isArray(t.value)||t.input([],!1)}))),n(e)}}function V4(t,e){const n=e.target;if(n instanceof HTMLInputElement){const s=Array.isArray(t.props.options)?Mr(t.props.options,n.value):n.value;Array.isArray(t.props.options)&&t.props.options.length?Array.isArray(t._value)?t._value.some(r=>Qi(s,r))?t.input(t._value.filter(r=>!Qi(s,r))):t.input([...t._value,s]):t.input([s]):n.checked?t.input(t.props.onValue):t.input(t.props.offValue)}}function $4(t,e){var n,s;return(n=t.context)===null||n===void 0||n.value,(s=t.context)===null||s===void 0||s._value,Array.isArray(t._value)?t._value.some(r=>Qi(Mr(t.props.options,e),r)):!1}function F4(t){t.on("created",()=>{var e,n;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=V4.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=$4.bind(null,t)),ie(t.props,"onValue")||(t.props.onValue=!0),ie(t.props,"offValue")||(t.props.offValue=!1)}),t.hook.prop(SA(t))}function Ci(t,e){return n=>{n.props[`${t}Icon`]===void 0&&(n.props[`${t}Icon`]=e.startsWith("<svg")?e:`default:${e}`)}}function ag(t){t.on("created",()=>{"disabled"in t.props&&(t.props.disabled=gn(t.props.disabled),t.config.disabled=gn(t.props.disabled))}),t.hook.prop(({prop:e,value:n},s)=>(n=e==="disabled"?gn(n):n,s({prop:e,value:n}))),t.on("prop:disabled",({payload:e})=>{t.config.disabled=gn(e)})}function rc(t,e){return n=>{n.store.set(Pn({key:t,type:"ui",value:e||t,meta:{localize:!0,i18nArgs:[n]}}))}}const tf=typeof window<"u";function PA(t){t.target instanceof HTMLElement&&t.target.hasAttribute("data-file-hover")&&t.target.removeAttribute("data-file-hover")}function Av(t,e){e.target instanceof HTMLInputElement?t==="dragover"&&e.target.setAttribute("data-file-hover","true"):e.preventDefault(),t==="drop"&&PA(e)}function U4(t){rc("noFiles","Select file")(t),rc("removeAll","Remove all")(t),rc("remove")(t),t.addProps(["_hasMultipleFiles"]),tf&&(window._FormKit_File_Drop||(window.addEventListener("dragover",Av.bind(null,"dragover")),window.addEventListener("drop",Av.bind(null,"drop")),window.addEventListener("dragleave",PA),window._FormKit_File_Drop=!0)),t.hook.input((e,n)=>n(Array.isArray(e)?e:[])),t.on("input",({payload:e})=>{t.props._hasMultipleFiles=Array.isArray(e)&&e.length>1?!0:void 0}),t.on("reset",()=>{if(t.props.id&&tf){const e=document.getElementById(t.props.id);e&&(e.value="")}}),t.on("created",()=>{Array.isArray(t.value)||t.input([],!1),t.context&&(t.context.handlers.resetFiles=e=>{if(e.preventDefault(),t.input([]),t.props.id&&tf){const n=document.getElementById(t.props.id);n&&(n.value=""),n==null||n.focus()}},t.context.handlers.files=e=>{var n,s;const r=[];if(e.target instanceof HTMLInputElement&&e.target.files){for(let i=0;i<e.target.files.length;i++){let o;(o=e.target.files.item(i))&&r.push({name:o.name,file:o})}t.input(r)}t.context&&(t.context.files=r),typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&((s=t.props.attrs)===null||s===void 0||s.onChange(e))})})}const Rv=Pn({key:"loading",value:!0,visible:!1});async function j4(t,e){const n=Math.random();if(t.props._submitNonce=n,e.preventDefault(),await t.settled,t.ledger.value("validating")&&(t.store.set(Rv),await t.ledger.settled("validating"),t.store.remove("loading"),t.props._submitNonce!==n))return;const s=r=>r.store.set(Pn({key:"submitted",value:!0,visible:!1}));if(t.walk(s),s(t),t.emit("submit-raw"),typeof t.props.onSubmitRaw=="function"&&t.props.onSubmitRaw(e,t),t.ledger.value("blocking"))typeof t.props.onSubmitInvalid=="function"&&t.props.onSubmitInvalid(t),t.props.incompleteMessage!==!1&&t.store.set(Pn({blocking:!1,key:"incomplete",meta:{localize:t.props.incompleteMessage===void 0,i18nArgs:[{node:t}],showAsMessage:!0},type:"ui",value:t.props.incompleteMessage||"Form incomplete."}));else if(typeof t.props.onSubmit=="function"){const r=t.props.onSubmit(t.hook.submit.dispatch(Ki(t.value)),t);if(r instanceof Promise){const i=t.props.disabled===void 0&&t.props.submitBehavior!=="live";i&&(t.props.disabled=!0),t.store.set(Rv),await r,i&&(t.props.disabled=!1),t.store.remove("loading")}}else e.target instanceof HTMLFormElement&&e.target.submit()}function B4(t){t.props.isForm=!0,t.ledger.count("validating",e=>e.key==="validating"),t.on("created",()=>{var e;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.submit=j4.bind(null,t)),ie(t.props,"actions")||(t.props.actions=!0)}),t.on("settled:blocking",()=>t.store.remove("incomplete"))}function q4(t){t.props.ignore===void 0&&(t.props.ignore=!0,t.parent=null)}function W4(t){t.on("created",()=>{t.context&&(t.context.initialValue=t.value||"")})}function kA(t){if(typeof t.props.number>"u")return;const e=["number","range","hidden"].includes(t.props.type);t.hook.input((n,s)=>{if(n==="")return s(void 0);const r=t.props.number==="integer"?parseInt(n):parseFloat(n);return Number.isFinite(r)?s(r):s(e?void 0:n)})}function H4(t,e){e.target instanceof HTMLInputElement&&t.input(Mr(t.props.options,e.target.value))}function z4(t,e){var n,s;return(n=t.context)===null||n===void 0||n.value,(s=t.context)===null||s===void 0||s._value,Qi(Mr(t.props.options,e),t._value)}function K4(t){t.on("created",()=>{var e,n;Array.isArray(t.props.options)||zr(350,{node:t,inputType:"radio"}),!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=H4.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=z4.bind(null,t))}),t.hook.prop(SA(t))}let G4=0;function Q4(t){t.sync&&t.plugins.add(Y4)}function Y4(t){t.props.type==="radio"&&(t.props.altName=`${t.name}_${G4++}`)}function X4(t,e){if(hh(e))return!1;t.context&&t.context.value;const n="__original"in e?e.__original:e.value;return Array.isArray(t._value)?t._value.some(s=>Qi(s,n)):(t._value===void 0||t._value===null&&!NA(t.props.options,null))&&e.attrs&&e.attrs["data-is-placeholder"]?!0:Qi(n,t._value)}function NA(t,e){return t.some(n=>hh(n)?NA(n.options,e):("__original"in n?n.__original:n.value)===e)}async function J4(t,e){var n;typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&(await new Promise(s=>setTimeout(s,0)),await t.settled,t.props.attrs.onChange(e))}function Z4(t,e){const n=e.target,s=n.hasAttribute("multiple")?Array.from(n.selectedOptions).map(r=>Mr(t.props.options,r.value)):Mr(t.props.options,n.value);t.input(s)}function Cv(t,e){return t.some(n=>n.attrs&&n.attrs["data-is-placeholder"])?t:[{label:e,value:"",attrs:{hidden:!0,disabled:!0,"data-is-placeholder":"true"}},...t]}function OA(t){const e=t.length>0?t[0]:void 0;if(e)return hh(e)?OA(e.options):"__original"in e?e.__original:e.value}function e9(t){t.on("created",()=>{var e,n,s;const r=gn((e=t.props.attrs)===null||e===void 0?void 0:e.multiple);!r&&t.props.placeholder&&Array.isArray(t.props.options)&&(t.hook.prop(({prop:i,value:o},a)=>(i==="options"&&(o=Cv(o,t.props.placeholder)),a({prop:i,value:o}))),t.props.options=Cv(t.props.options,t.props.placeholder)),r?t.value===void 0&&t.input([],!1):t.context&&!t.context.options&&(t.props.attrs=Object.assign({},t.props.attrs,{value:t._value}),t.on("input",({payload:i})=>{t.props.attrs=Object.assign({},t.props.attrs,{value:i})})),!((n=t.context)===null||n===void 0)&&n.handlers&&(t.context.handlers.selectInput=Z4.bind(null,t),t.context.handlers.onChange=J4.bind(null,t)),!((s=t.context)===null||s===void 0)&&s.fns&&(t.context.fns.isSelected=X4.bind(null,t),t.context.fns.showPlaceholder=(i,o)=>{if(!Array.isArray(t.props.options))return!1;const a=t.props.options.some(l=>{if(l.attrs&&"data-is-placeholder"in l.attrs)return!1;const c="__original"in l?l.__original:l.value;return $t(i,c)});return o&&!a?!0:void 0})}),t.hook.input((e,n)=>{var s,r,i;return!t.props.placeholder&&e===void 0&&Array.isArray((s=t.props)===null||s===void 0?void 0:s.options)&&t.props.options.length&&!gn((i=(r=t.props)===null||r===void 0?void 0:r.attrs)===null||i===void 0?void 0:i.multiple)&&(e=OA(t.props.options)),n(e)})}function xd(t){return!!(ai(t)&&t.if&&t.if.startsWith("$slots.")&&typeof t.then=="string"&&t.then.startsWith("$slots.")&&"else"in t)}function ps(t,e,n){const s=r=>{const i=e(r);if(n||Yc(i)&&"if"in i||xd(i)){const o={if:t,then:i};return n&&(o.else=n(r)),o}else xd(i)?Object.assign(i.else,{if:t}):Yc(i)&&Object.assign(i,{if:t});return i};return s._s=_o(),s}function Si(t,e){const n=s=>{const r=t({});return xd(r)?(Array.isArray(r.else)||(r.else=Bo(Bo(r.else,e),t._s?s[t._s]:{})),r):Bo(Bo(r,e),t._s?s[t._s]:{})};return n._s=t._s,n}const Sv={schema:Kr(nr(tr("$message.value")),pl(A4(lt("prefix"),ws(),R4("$label || $ui.submit.value"),Ts(),lt("suffix"))),Es("$help")),type:"input",family:"button",props:[],features:[rc("submit"),q4],schemaMemoKey:"h6st4epl3j8"},t9={schema:Kr(ps("$options == undefined",eu(Jc(ws(),Xc(),tu(lt("decorator")),Ts()),Si(Zc("$label"),{if:"$label"})),AA(RA("$label"),Es("$help"),bA(IA(eu(Jc(ws(),Si(Xc(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),tu(lt("decorator")),Ts()),Si(Zc("$option.label"),{if:"$option.label"})),TA("$option.help"))))),ps("$options == undefined && $help",Es("$help")),nr(tr("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[ig,F4,Ci("decorator","checkboxDecorator")],schemaMemoKey:"qje02tb3gu8"},n9={schema:Kr(pl(dh("$label"),fh(lt("prefix","label"),ws(),C4(),P4(S4(lt("fileItem"),k4("$file.name"),ps("$value.length === 1",Tv(lt("fileRemove"),'$ui.remove.value + " " + $file.name')))),ps("$value.length > 1",Tv("$ui.removeAll.value")),O4(lt("noFiles"),"$ui.noFiles.value"),Ts(),lt("suffix"))),Es("$help"),nr(tr("$message.value"))),type:"input",family:"text",props:[],features:[U4,Ci("fileItem","fileItem"),Ci("fileRemove","fileRemove"),Ci("noFiles","noFiles")],schemaMemoKey:"9kqc4852fv8"},s9={schema:N4("$slots.default",nr(tr("$message.value")),b4(M4())),type:"group",props:["actions","submit","submitLabel","submitAttrs","submitBehavior","incompleteMessage"],features:[B4,ag],schemaMemoKey:"5bg016redjo"},r9={schema:og("$slots.default"),type:"group",props:[],features:[ag]},i9={schema:CA(),type:"input",props:[],features:[kA]},o9={schema:og("$slots.default"),type:"list",props:["sync","dynamic"],features:[ag,Q4]},a9={schema:og(),type:"input",props:[],features:[]},l9={schema:Kr(ps("$options == undefined",eu(Jc(ws(),Xc(),tu(lt("decorator")),Ts()),Si(Zc("$label"),{if:"$label"})),AA(RA("$label"),Es("$help"),bA(IA(eu(Jc(ws(),Si(Xc(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),tu(lt("decorator")),Ts()),Si(Zc("$option.label"),{if:"$option.label"})),TA("$option.help"))))),ps("$options == undefined && $help",Es("$help")),nr(tr("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[ig,K4,Ci("decorator","radioDecorator")],schemaMemoKey:"qje02tb3gu8"},c9={schema:Kr(pl(dh("$label"),fh(lt("prefix"),ws(),D4(ps("$slots.default",()=>"$slots.default",bv(ps("$option.group",x4(bv(Iv("$option.label"))),Iv("$option.label"))))),ps("$attrs.multiple !== undefined",()=>"",lt("select")),Ts(),lt("suffix"))),Es("$help"),nr(tr("$message.value"))),type:"input",props:["options","placeholder","optionsLoader"],features:[ig,e9,Ci("select","select")],schemaMemoKey:"cb119h43krg"},u9={schema:Kr(pl(dh("$label"),fh(lt("prefix","label"),ws(),L4(),Ts(),lt("suffix"))),Es("$help"),nr(tr("$message.value"))),type:"input",props:[],features:[W4],schemaMemoKey:"b1n0td79m9g"},Ut={schema:Kr(pl(dh("$label"),fh(lt("prefix","label"),ws(),CA(),Ts(),lt("suffix"))),Es("$help"),nr(tr("$message.value"))),type:"input",family:"text",props:[],features:[kA],schemaMemoKey:"c3cc4kflsg"};var h9=Object.freeze({__proto__:null,button:Sv,checkbox:t9,color:Ut,date:Ut,datetimeLocal:Ut,email:Ut,file:n9,form:s9,group:r9,hidden:i9,list:o9,meta:a9,month:Ut,number:Ut,password:Ut,radio:l9,range:Ut,search:Ut,select:c9,submit:Sv,tel:Ut,text:Ut,textarea:u9,time:Ut,url:Ut,week:Ut});const xA=function({value:e}){return["yes","on","1",1,!0,"true"].includes(e)};xA.skipEmpty=!1;const f9=function({value:t},e=!1){const n=Date.parse(e||new Date),s=Date.parse(String(t));return isNaN(s)?!1:s>n},d9=function({value:t},e="default"){const n={default:/^\p{L}+$/u,latin:/^[a-z]+$/i},s=ie(n,e)?e:"default";return n[s].test(String(t))},p9=function({value:t},e="default"){const n={default:/^[\p{L} ]+$/u,latin:/^[a-z ]+$/i},s=ie(n,e)?e:"default";return n[s].test(String(t))},m9=function({value:t},e="default"){const n={default:/^[0-9\p{L}]+$/u,latin:/^[0-9a-z]+$/i},s=ie(n,e)?e:"default";return n[s].test(String(t))},g9=function({value:t},e=!1){const n=Date.parse(e||new Date),s=Date.parse(String(t));return isNaN(s)?!1:s<n},_9=function({value:e},n,s){if(!isNaN(e)&&!isNaN(n)&&!isNaN(s)){const r=1*e;n=Number(n),s=Number(s);const[i,o]=n<=s?[n,s]:[s,n];return r>=1*i&&r<=1*o}return!1},Pv=/(_confirm(?:ed)?)$/,y9=function(e,n,s="loose"){var r;n||(n=Pv.test(e.name)?e.name.replace(Pv,""):`${e.name}_confirm`);const i=(r=e.at(n))===null||r===void 0?void 0:r.value;return s==="strict"?e.value===i:e.value==i},v9=function({value:t},e="default"){const n={default:/\p{L}/u,latin:/[a-z]/i},s=ie(n,e)?e:"default";return n[s].test(String(t))},E9=function({value:t},e="default"){const n={default:/[\p{L} ]/u,latin:/[a-z ]/i},s=ie(n,e)?e:"default";return n[s].test(String(t))},w9=function({value:t},e="default"){const n={default:/[0-9\p{L}]/u,latin:/[0-9a-z]/i},s=ie(n,e)?e:"default";return n[s].test(String(t))},T9=function({value:t},e="default"){const n={default:/\p{Ll}/u,latin:/[a-z]/},s=ie(n,e)?e:"default";return n[s].test(String(t))},I9=function({value:e}){return/[0-9]/.test(String(e))},b9=function({value:t}){return/[!-/:-@[-`{-~]/.test(String(t))},A9=function({value:t},e="default"){const n={default:/\p{Lu}/u,latin:/[A-Z]/},s=ie(n,e)?e:"default";return n[s].test(String(t))},R9=function({value:e},n,s){n=n instanceof Date?n.getTime():Date.parse(n),s=s instanceof Date?s.getTime():Date.parse(s);const r=e instanceof Date?e.getTime():Date.parse(String(e));if(n&&!s)s=n,n=Date.now();else if(!n||!r)return!1;return r>=n&&r<=s},C9=function({value:e},n){return n&&typeof n=="string"?EF(n).test(String(e)):!isNaN(Date.parse(String(e)))},S9=function({value:e}){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e))},P9=function({value:e},...n){return typeof e=="string"&&n.length?n.some(s=>e.endsWith(s)):typeof e=="string"&&n.length===0},k9=function({value:e},...n){return n.some(s=>typeof s=="object"?$t(s,e):s==e)},N9=function({value:e},n=0,s=1/0){n=parseInt(n),s=isNaN(parseInt(s))?1/0:parseInt(s);const r=n<=s?n:s,i=s>=n?s:n;if(typeof e=="string"||Array.isArray(e))return e.length>=r&&e.length<=i;if(e&&typeof e=="object"){const o=Object.keys(e).length;return o>=r&&o<=i}return!1},O9=function({value:t},e="default"){const n={default:/^\p{Ll}+$/u,latin:/^[a-z]+$/},s=ie(n,e)?e:"default";return n[s].test(String(t))},x9=function({value:e},...n){return n.some(s=>(typeof s=="string"&&s.substr(0,1)==="/"&&s.substr(-1)==="/"&&(s=new RegExp(s.substr(1,s.length-2))),s instanceof RegExp?s.test(String(e)):s===e))},D9=function({value:e},n=10){return Array.isArray(e)?e.length<=n:Number(e)<=Number(n)},M9=function({value:e},n=1){return Array.isArray(e)?e.length>=n:Number(e)>=Number(n)},L9=function({value:e},...n){return!n.some(s=>typeof s=="object"?$t(s,e):s===e)},V9=function({value:e}){return!isNaN(e)},DA=function(t,...e){return an(t.value)?e.map(s=>{var r;return(r=t.at(s))===null||r===void 0?void 0:r.value}).some(s=>!an(s)):!0};DA.skipEmpty=!1;const MA=function({value:e},n="default"){return n==="trim"&&typeof e=="string"?!an(e.trim()):!an(e)};MA.skipEmpty=!1;const $9=function({value:e},...n){return typeof e=="string"&&n.length?n.some(s=>e.startsWith(s)):typeof e=="string"&&n.length===0},F9=function({value:t}){return/^[!-/:-@[-`{-~]+$/.test(String(t))},U9=function({value:t},e="default"){const n={default:/^\p{Lu}+$/u,latin:/^[A-Z]+$/},s=ie(n,e)?e:"default";return n[s].test(String(t))},j9=function({value:e},...n){try{const s=n.length?n:["http:","https:"],r=new URL(String(e));return s.includes(r.protocol)}catch{return!1}},B9=Object.freeze(Object.defineProperty({__proto__:null,accepted:xA,alpha:d9,alpha_spaces:p9,alphanumeric:m9,between:_9,confirm:y9,contains_alpha:v9,contains_alpha_spaces:E9,contains_alphanumeric:w9,contains_lowercase:T9,contains_numeric:I9,contains_symbol:b9,contains_uppercase:A9,date_after:f9,date_before:g9,date_between:R9,date_format:C9,email:S9,ends_with:P9,is:k9,length:N9,lowercase:O9,matches:x9,max:D9,min:M9,not:L9,number:V9,require_one:DA,required:MA,starts_with:$9,symbol:F9,uppercase:U9,url:j9},Symbol.toStringTag,{value:"Module"})),kv={100:({data:t})=>`Only groups, lists, and forms can have children (${t.name}).`,101:({data:t})=>`You cannot directly modify the store (${t.name}). See: https://formkit.com/advanced/core#message-store`,102:({data:[t,e]})=>`You cannot directly assign node.${e} (${t.name})`,103:({data:[t]})=>`Schema expressions cannot start with an operator (${t})`,104:({data:[t,e]})=>`Schema expressions cannot end with an operator (${t} in "${e}")`,105:({data:t})=>`Invalid schema expression: ${t}`,106:({data:t})=>`Cannot submit because (${t}) is not in a form.`,107:({data:[t,e]})=>`Cannot set ${t.name} to non object value: ${e}`,108:({data:[t,e]})=>`Cannot set ${t.name} to non array value: ${e}`,300:({data:[t]})=>`Cannot set behavior prop to overscroll (on ${t.name} input) when options prop is a function.`,600:({data:t})=>`Unknown input type${typeof t.props.type=="string"?' "'+t.props.type+'"':""} ("${t.name}")`,601:({data:t})=>`Input definition${typeof t.props.type=="string"?' "'+t.props.type+'"':""} is missing a schema or component property (${t.name}).`},Nv={150:({data:t})=>`Schema function "${t}()" is not a valid function.`,151:({data:t})=>`No form element with id: ${t}`,152:({data:t})=>`No input element with id: ${t}`,350:({data:{node:t,inputType:e}})=>`Invalid options prop for ${t.name} input (${e}). See https://formkit.com/inputs/${e}`,650:'Schema "$get()" must use the id of an input to access.',651:({data:t})=>`Cannot setErrors() on "${t}" because no such id exists.`,652:({data:t})=>`Cannot clearErrors() on "${t}" because no such id exists.`,800:({data:t})=>`${t} is deprecated.`},q9=(t,e)=>{if(t.code in kv){const n=kv[t.code];t.message=typeof n=="function"?n(t):n}return e(t)};let Ov=!1;function W9(){Ov||(eg(q9),tg(H9),Ov=!0)}const H9=(t,e)=>{if(t.code in Nv){const n=Nv[t.code];t.message=typeof n=="function"?n(t):n}return e(t)},z9=typeof window>"u",nf=new Map;function K9(t,e){var n;!z9||!t||(nf.has(t)||nf.set(t,new Set),(n=nf.get(t))===null||n===void 0||n.add(e))}const LA=typeof window>"u",ia={},Pi={};let Mt;const rs=new WeakMap,G9="__raw__",Q9=/[a-zA-Z0-9\-][cC]lass$/;function Y9(t,e){const n=Ke(null);if(t==="get"){const r={};return n.value=X9.bind(null,r),n}const s=t.split(".");return ss(()=>{n.value=lg(Me(e)?e.value:e,s)}),n}function lg(t,e){if(Array.isArray(t)){for(const r of t){const i=r!==!1&&lg(r,e);if(i!==void 0)return i}return}let n,s=t;for(const r in e){const i=e[r];if(typeof s!="object"||s===null){n=void 0;break}const o=s[i];if(Number(r)===e.length-1&&o!==void 0){n=typeof o=="function"?o.bind(s):o;break}s=o}return n}function X9(t,e){if(typeof e!="string")return zr(650);if(e in t||(t[e]=Ke(void 0)),t[e].value===void 0){t[e].value=null;const n=fl(e);n&&(t[e].value=n.context),zF(e,({payload:s})=>{t[e].value=dl(s)?s.context:s})}return t[e].value}function xv(t,e,n){function s(d,m){const p=h(un(m.if),{if:!0}),g=c(d,m.then),v=m.else?c(d,m.else):null;return[p,g,v]}function r(d,m){var p,g;const v=h(un(d.if));let T=()=>m,I=()=>m;return typeof d.then=="object"?I=i(d.then,void 0):typeof d.then=="string"&&(!((p=d.then)===null||p===void 0)&&p.startsWith("$"))?I=h(un(d.then)):I=()=>d.then,ie(d,"else")&&(typeof d.else=="object"?T=i(d.else):typeof d.else=="string"&&(!((g=d.else)===null||g===void 0)&&g.startsWith("$"))?T=h(un(d.else)):T=()=>d.else),()=>v()?I():T()}function i(d,m,p={}){const g=new Set(Object.keys(d||{})),v=m?h(un(m)):()=>({}),T=[I=>{const w=v();for(const N in w)g.has(N)||(I[N]=w[N])}];if(d){if(ai(d))return r(d,p);for(let I in d){const w=d[I];let N;const b=typeof w=="string";I.startsWith(G9)?(I=I.substring(7),N=()=>w):b&&w.startsWith("$")&&w.length>1&&!(w.startsWith("$reset")&&Q9.test(I))?N=h(un(w)):typeof w=="object"&&ai(w)?N=r(w,void 0):typeof w=="object"&&zi(w)?N=i(w):N=()=>w,T.push(R=>{R[I]=N()})}}return()=>{const I=Array.isArray(d)?[]:{};return T.forEach(w=>w(I)),I}}function o(d,m){let p=null,g=()=>null,v=!1,T=null,I=null,w=null,N=!1;const b=FU(m);if(Sd(b)?(p=b.$el,g=b.$el!=="text"?i(b.attrs,b.bind):()=>null):Pd(b)?(typeof b.$cmp=="string"?ie(d,b.$cmp)?p=d[b.$cmp]:(p=b.$cmp,N=!0):p=b.$cmp,g=i(b.props,b.bind)):ai(b)&&([v,T,I]=s(d,b)),!ai(b)&&"if"in b?v=h(un(b.if)):!ai(b)&&p===null&&(v=()=>!0),"children"in b&&b.children)if(typeof b.children=="string")if(b.children.startsWith("$slots."))p=p==="text"?"slot":p,T=h(un(b.children));else if(b.children.startsWith("$")&&b.children.length>1){const R=h(un(b.children));T=()=>String(R())}else T=()=>String(b.children);else if(Array.isArray(b.children))T=c(d,b.children);else{const[R,E,C]=s(d,b.children);T=V=>R&&R()?E&&E(V):C&&C(V)}if(Pd(b))if(T){const R=T;T=E=>({default(C,V){var B,he,Z,He;const Oe=Mt;V&&(Mt=V),C&&((B=rs.get(Mt))===null||B===void 0||B.unshift(C)),E&&((he=rs.get(Mt))===null||he===void 0||he.unshift(E));const K=R(E);return C&&((Z=rs.get(Mt))===null||Z===void 0||Z.shift()),E&&((He=rs.get(Mt))===null||He===void 0||He.shift()),Mt=Oe,K}}),T.slot=!0}else T=()=>({});if("for"in b&&b.for){const R=b.for.length===3?b.for[2]:b.for[1];w=[typeof R=="string"&&R.startsWith("$")?h(un(R)):()=>R,b.for[0],b.for.length===3?String(b.for[1]):null]}return[v,p,g,T,I,w,N]}function a(d,m){const p=d(m),g=Mt;return Object.keys(p).reduce((v,T)=>{const I=p&&p[T];return v[T]=w=>I&&I(w,g)||null,v},{})}function l(d,m){const[p,g,v,T,I,w,N]=o(d,m);let b=R=>{if(p&&g===null&&T)return p()?T(R):I&&I(R);if(g&&(!p||p())){if(g==="text"&&T)return ui(String(T()));if(g==="slot"&&T)return T(R);const E=N?JR(g):g,C=T!=null&&T.slot?a(T,R):null;return pa(E,v(),C||(T?T(R):[]))}return typeof I=="function"?I(R):I};if(w){const R=b,[E,C,V]=w;b=()=>{const B=E(),he=Number.isFinite(B)?Array(Number(B)).fill(0).map((K,oe)=>oe):B,Z=[];if(typeof he!="object")return null;const He=rs.get(Mt)||[],Oe=Array.isArray(he);for(const K in he){if(Oe&&K in Array.prototype)continue;const oe=Object.defineProperty({...He.reduce((de,rt)=>de.__idata?{...de,...rt}:rt,{}),[C]:he[K],...V!==null?{[V]:Oe?Number(K):K}:{}},"__idata",{enumerable:!1,value:!0});He.unshift(oe),Z.push(R.bind(null,oe)()),He.shift()}return Z}}return b}function c(d,m){if(Array.isArray(m)){const g=m.map(l.bind(null,d));return v=>g.map(T=>T(v))}const p=l(d,m);return g=>p(g)}const u=[];function h(d,m={}){const p=new WeakMap;return u.push((g,v)=>{p.set(v,d.provide(T=>g(T,m)))}),()=>p.get(Mt)()}function f(d,m){var p;n??(n=JSON.stringify(e));const[g,v]=ie(ia,n)?ia[n]:[c(t,e),u];return LA||((p=Pi[n])!==null&&p!==void 0||(Pi[n]=0),Pi[n]++,ia[n]=[g,v]),v.forEach(T=>{T(d,m)}),()=>(Mt=m,g())}return f}function VA(t,e){const n=rs.get(Mt)||[];let s;return n.length&&(s=lg(n,t.split("."))),s===void 0?e:s}function J9(t,e){return new Proxy(t,{get(...n){let s;const r=n[1];if(typeof r=="string"){const i=Mt;Mt=e,s=VA(r,void 0),Mt=i}return s!==void 0?s:Reflect.get(...n)}})}function Dv(t,e,n){return t((s,r={})=>s.reduce((i,o)=>{if(o.startsWith("slots.")){const a=o.substring(6),l=()=>e.slots&&ie(e.slots,a)&&typeof e.slots[a]=="function";if(r.if)i[o]=l;else if(e.slots){const c=J9(e,n);i[o]=()=>l()?e.slots[a](c):null}}else{const a=Y9(o,e);i[o]=()=>VA(o,a.value)}return i},{}),n)}function Mv(t,e,n){if(e??(e=JSON.stringify(t)),Pi[e]--,Pi[e]===0){delete Pi[e];const[,s]=ia[e];delete ia[e],s.length=0}rs.delete(n)}const $A=pu({name:"FormKitSchema",props:{schema:{type:[Array,Object],required:!0},data:{type:Object,default:()=>({})},library:{type:Object,default:()=>({})},memoKey:{type:String,required:!1}},setup(t,e){var n;const s=Oi();let r={};rs.set(r,[]);const i={FormKit:Lr(cg),...t.library};let o=xv(i,t.schema,t.memoKey),a,l;LA||En(()=>t.schema,(u,h)=>{var f;const d=r;r={},rs.set(r,[]),o=xv(i,t.schema,t.memoKey),a=Dv(o,l,r),u===h&&((f=s==null?void 0:s.proxy)===null||f===void 0?void 0:f.$forceUpdate)(),Mv(t.schema,t.memoKey,d)},{deep:!0}),ss(()=>{var u;l=Object.assign($n((u=t.data)!==null&&u!==void 0?u:{}),{slots:e.slots}),e.slots,a=Dv(o,l,r)});function c(){Mv(t.schema,t.memoKey,r),l.node&&l.node.destroy(),l.slots=null,l=null,a=null}return ep(c),K9((n=Oi())===null||n===void 0?void 0:n.appContext.app,c),()=>a?a():null}}),Z9=typeof window>"u",Lv=Symbol("FormKitParent");function ej(t,e){const n=aj(t,e);if(n.props.definition||tn(600,n),n.props.definition.component)return()=>{var l;return pa((l=n.props.definition)===null||l===void 0?void 0:l.component,{context:n.context},{...e.slots})};const s=Ke([]);let r=n.props.definition.schemaMemoKey;const i=()=>{var l,c;const u=(c=(l=n.props)===null||l===void 0?void 0:l.definition)===null||c===void 0?void 0:c.schema;u||tn(601,n),typeof u=="function"?(s.value=u({...t.sectionsSchema}),(r&&t.sectionsSchema||"memoKey"in u&&typeof u.memoKey=="string")&&(r=(r??(u==null?void 0:u.memoKey))+JSON.stringify(t.sectionsSchema))):s.value=u};i(),Z9||n.on("schema",()=>{r+="♻️",i()}),e.emit("node",n);const o=n.props.definition.library,a={FormKit:Lr(cg),...o};return e.expose({node:n}),()=>pa($A,{schema:s.value,data:n.context,library:a,memoKey:r},{...e.slots})}const cg=pu(ej,{props:T4,inheritAttrs:!1}),tj=Symbol();function nj(t,e){return t.component(e.alias||"FormKit",cg).component(e.schemaAlias||"FormKitSchema",$A),{get:fl,setLocale:n=>{var s;!((s=e.config)===null||s===void 0)&&s.rootConfig&&(e.config.rootConfig.locale=n)},clearErrors:BU,setErrors:jU,submit:tA,reset:nA}}const FA=Symbol.for("FormKitOptions"),sj=Symbol.for("FormKitConfig"),rj={install(t,e){const n=Object.assign({alias:"FormKit",schemaAlias:"FormKitSchema"},typeof e=="function"?e():e),s=KF(n.config||{});n.config={rootConfig:s},t.config.globalProperties.$formkit=nj(t,n),t.provide(FA,n),t.provide(sj,s),typeof window<"u"&&(globalThis.__FORMKIT_CONFIGS__=(globalThis.__FORMKIT_CONFIGS__||[]).concat([s]))}},ij=typeof window<"u",sf=["help","label","ignore","disabled","preserve",/^preserve(-e|E)rrors/,/^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,/^[a-zA-Z-]+(?:-class|Class)$/,"prefixIcon","suffixIcon",/^[a-zA-Z-]+(?:-icon|Icon)$/];function Vv(t,e){e.classes&&Object.keys(e.classes).forEach(n=>{typeof n=="string"&&(t.props[`_${n}Class`]=e.classes[n],ra(e.classes[n])&&n==="inner"&&Object.values(e.classes[n]))})}function oj(t){return t?["Submit","SubmitRaw","SubmitInvalid"].reduce((n,s)=>{const r=`on${s}`;return r in t&&typeof t[r]=="function"&&(n[r]=t[r]),n},{}):{}}function aj(t,e,n={}){var s;const r=Object.assign({},gt(FA)||{},n),i=gt(tj,Ke(ij?document:void 0)),o=Oi(),a=oj(o==null?void 0:o.vnode.props),l=["modelValue","model-value"].some(b=>{var R;return b in((R=o==null?void 0:o.vnode.props)!==null&&R!==void 0?R:{})});let c=!1;ME(()=>{c=!0});const u=t.modelValue!==void 0?t.modelValue:mn(e.attrs.value);function h(){var b;const R={...ni(t),...a,type:(b=t.type)!==null&&b!==void 0?b:"text",__root:i.value,__slots:e.slots},E=uv(ni(e.attrs),sf);E.key||(E.key=_o()),R.attrs=E;const C=hv(ni(e.attrs),sf);for(const B in C)R[Ri(B)]=C[B];const V={props:{}};return Vv(V,t),Object.assign(R,V.props),typeof R.type!="string"&&(R.definition=R.type,delete R.type),R}const f=h(),d=f.ignore?null:t.parent||gt(Lv,null),m=VU(Dr(r||{},{name:t.name||void 0,value:u,parent:d,plugins:(r.plugins||[]).concat((s=t.plugins)!==null&&s!==void 0?s:[]),config:t.config||{},props:f,index:t.index,sync:!!gn(e.attrs.sync||e.attrs.dynamic)},!1,!0));m.props.definition||tn(600,m);const p=Ke(new Set(m.props.definition.props||[]));m.on("added-props",({payload:b})=>{Array.isArray(b)&&b.forEach(R=>p.value.add(R))});const g=dt(()=>sf.concat([...p.value]).reduce((b,R)=>(typeof R=="string"?(b.push(Ri(R)),b.push(Yb(R))):b.push(R),b),[]));ss(()=>Vv(m,t));const v=ni(t);for(const b in v)En(()=>t[b],()=>{t[b]!==void 0&&(m.props[b]=t[b])});ss(()=>{m.props.__root=i.value});const T=new Set,I=ni(e.attrs);ss(()=>{w(hv(I,g.value))});function w(b){T.forEach(R=>{R(),T.delete(R)});for(const R in b){const E=Ri(R);T.add(En(()=>e.attrs[R],()=>{m.props[E]=e.attrs[R]}))}}if(ss(()=>{const b=uv(ni(e.attrs),g.value);"multiple"in b&&(b.multiple=gn(b.multiple)),typeof b.onBlur=="function"&&(b.onBlur=RF(b.onBlur)),m.props.attrs=Object.assign({},m.props.attrs||{},b)}),ss(()=>{var b;const R=((b=t.errors)!==null&&b!==void 0?b:[]).map(E=>Pn({key:Jm(E),type:"error",value:E,meta:{source:"prop"}}));m.store.apply(R,E=>E.type==="error"&&E.meta.source==="prop")}),m.type!=="input"){const b=`${m.name}-prop`;ss(()=>{var R;const E=(R=t.inputErrors)!==null&&R!==void 0?R:{},C=Object.keys(E);C.length||m.clearErrors(!0,b);const V=C.reduce((B,he)=>{let Z=E[he];return typeof Z=="string"&&(Z=[Z]),Array.isArray(Z)&&(B[he]=Z.map(He=>Pn({key:He,type:"error",value:He,meta:{source:b}}))),B},{});m.store.apply(V,B=>B.type==="error"&&B.meta.source===b)})}ss(()=>Object.assign(m.config,t.config)),m.type!=="input"&&Wo(Lv,m);let N;return m.on("modelUpdated",()=>{var b,R;e.emit("inputRaw",(b=m.context)===null||b===void 0?void 0:b.value,m),c&&e.emit("input",(R=m.context)===null||R===void 0?void 0:R.value,m),l&&m.context&&(N=mn(m.value),e.emit("update:modelValue",bd(m.value)))}),l&&(En(FR(t,"modelValue"),b=>{$t(N,b)||m.input(b,!1)},{deep:!0}),m.value!==u&&m.emit("modelUpdated")),LE(()=>m.destroy()),m}const lj=function(e){e.ledger.count("blocking",E=>E.blocking);const n=Ke(!e.ledger.value("blocking"));e.ledger.count("errors",E=>E.type==="error");const s=Ke(!!e.ledger.value("errors"));let r=!1;hu(()=>{r=!0});const i=$n(e.store.reduce((E,C)=>(C.visible&&(E[C.key]=C),E),{})),o=Ke(e.props.validationVisibility||(e.props.type==="checkbox"?"dirty":"blur"));e.on("prop:validationVisibility",({payload:E})=>{o.value=E});const a=Ke(o.value==="live"),l=Ke(e.children.map(E=>E.uid)),c=dt(()=>{if(!I.state)return!1;if(I.state.submitted)return!0;if(!a.value&&!I.state.settled)return!1;switch(o.value){case"live":return!0;case"blur":return I.state.blurred;case"dirty":return I.state.dirty;default:return!1}}),u=dt(()=>I&&h.value?n.value&&!s.value:I.state.dirty&&!an(I.value)),h=Ke(Array.isArray(e.props.parsedRules)&&e.props.parsedRules.length>0);e.on("prop:parsedRules",({payload:E})=>{h.value=Array.isArray(E)&&E.length>0});const f=dt(()=>{const E={};for(const C in i){const V=i[C];(V.type!=="validation"||c.value)&&(E[C]=V)}return E}),d=$n(e.store.reduce((E,C)=>(C.type==="ui"&&C.visible&&(E[C.key]=C),E),{})),m=$n({}),p=new Proxy(m,{get(...E){const[C,V]=E;let B=Reflect.get(...E);return!B&&typeof V=="string"&&!ie(C,V)&&!V.startsWith("__v")&&Va(e).watch(Z=>{const He=typeof Z.config.rootClasses=="function"?Z.config.rootClasses(V,Z):{},Oe=Z.config.classes?sc(V,Z,Z.config.classes[V]):{},K=sc(V,Z,Z.props[`_${V}Class`]),oe=sc(V,Z,Z.props[`${V}Class`]);B=UU(Z,V,He,Oe,K,oe),C[V]=B??""}),B}});e.on("prop:rootClasses",()=>{const E=Object.keys(m);for(const C of E)delete m[C]});const g=dt(()=>{const E=[];I.help&&E.push(`help-${e.props.id}`);for(const C in f.value)E.push(`${e.props.id}-${C}`);return E.length?E.join(" "):void 0}),v=Ke(e.value),T=Ke(e.value),I=$n({_value:T,attrs:e.props.attrs,disabled:e.props.disabled,describedBy:g,fns:{length:E=>Object.keys(E).length,number:E=>Number(E),string:E=>String(E),json:E=>JSON.stringify(E),eq:$t},handlers:{blur:E=>{e&&(e.store.set(Pn({key:"blurred",visible:!1,value:!0})),typeof e.props.attrs.onBlur=="function"&&e.props.attrs.onBlur(E))},touch:()=>{var E;const C=I.dirtyBehavior==="compare";if(!((E=e.store.dirty)===null||E===void 0)&&E.value&&!C)return;const V=!$t(e.props._init,e._value);!V&&!C||e.store.set(Pn({key:"dirty",visible:!1,value:V}))},DOMInput:E=>{e.input(E.target.value),e.emit("dom-input-event",E)}},help:e.props.help,id:e.props.id,items:l,label:e.props.label,messages:f,node:Lr(e),options:e.props.options,defaultMessagePlacement:!0,slots:e.props.__slots,state:{blurred:!1,complete:u,dirty:!1,empty:an(v),submitted:!1,settled:e.isSettled,valid:n,errors:s,rules:h,validationVisible:c},type:e.props.type,family:e.props.family,ui:d,value:v,classes:p});e.on("created",()=>{$t(I.value,e.value)||(T.value=e.value,v.value=e.value,Tl(v),Tl(T)),(async()=>(await e.settled,e&&(e.props._init=mn(e.value))))()}),e.on("settled",({payload:E})=>{I.state.settled=E});function w(E){E.forEach(C=>{C=Ri(C),ie(I,C)||(I[C]=e.props[C]),e.on(`prop:${C}`,({payload:V})=>{I[C]=V})})}w((()=>{const E=["__root","help","label","disabled","options","type","attrs","preserve","preserveErrors","id","dirtyBehavior"],C=/^[a-zA-Z-]+(?:-icon|Icon)$/,V=Object.keys(e.props).filter(B=>C.test(B));return E.concat(V)})());function b(E){E.props&&w(E.props)}e.props.definition&&b(e.props.definition),e.on("added-props",({payload:E})=>w(E)),e.on("input",({payload:E})=>{e.type!=="input"&&!Me(E)&&!Hn(E)?T.value=bd(E):(T.value=E,Tl(T))}),e.on("commitRaw",({payload:E})=>{e.type!=="input"&&!Me(E)&&!Hn(E)?v.value=T.value=bd(E):(v.value=T.value=E,Tl(v)),e.emit("modelUpdated")}),e.on("commit",({payload:E})=>{(!I.state.dirty||I.dirtyBehavior==="compare")&&e.isCreated&&r&&I.handlers.touch(),u&&e.type==="input"&&s.value&&!gn(e.props.preserveErrors)&&e.store.filter(C=>{var V;return!(C.type==="error"&&((V=C.meta)===null||V===void 0?void 0:V.autoClear)===!0)}),e.type==="list"&&e.sync&&(l.value=e.children.map(C=>C.uid)),I.state.empty=an(E)});const R=async E=>{E.type==="ui"&&E.visible&&!E.meta.showAsMessage?d[E.key]=E:E.visible?i[E.key]=E:E.type==="state"&&(I.state[E.key]=!!E.value)};e.on("message-added",E=>R(E.payload)),e.on("message-updated",E=>R(E.payload)),e.on("message-removed",({payload:E})=>{delete d[E.key],delete i[E.key],delete I.state[E.key]}),e.on("settled:blocking",()=>{n.value=!0}),e.on("unsettled:blocking",()=>{n.value=!1}),e.on("settled:errors",()=>{s.value=!1}),e.on("unsettled:errors",()=>{s.value=!0}),En(c,E=>{E&&(a.value=!0)}),e.context=I,e.emit("context",e,!1),e.on("destroyed",()=>{e.context=void 0,e=null})},cj=(t={})=>{W9();const{rules:e={},locales:n={},inputs:s={},messages:r={},locale:i=void 0,theme:o=void 0,iconLoaderUrl:a=void 0,iconLoader:l=void 0,icons:c={},...u}=t,h=qU({...B9,...e||{}}),f=a4(Dr({en:o4,...n||{}},r)),d=w4(h9,s),m=h4(o,c,a,l);return Dr({plugins:[d,m,lj,f,h],...i?{config:{locale:i}}:{}},u||{},!0)};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const li=typeof window<"u";function uj(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function rf(t,e){const n={};for(const s in e){const r=e[s];n[s]=kn(r)?r.map(t):t(r)}return n}const oa=()=>{},kn=Array.isArray,hj=/\/$/,fj=t=>t.replace(hj,"");function of(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=gj(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function dj(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $v(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pj(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Yi(e.matched[s],n.matched[r])&&UA(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function UA(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mj(t[n],e[n]))return!1;return!0}function mj(t,e){return kn(t)?Fv(t,e):kn(e)?Fv(e,t):t===e}function Fv(t,e){return kn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function gj(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var $a;(function(t){t.pop="pop",t.push="push"})($a||($a={}));var aa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(aa||(aa={}));function _j(t){if(!t)if(li){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fj(t)}const yj=/^[^#]+#/;function vj(t,e){return t.replace(yj,"#")+e}function Ej(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ph=()=>({left:window.pageXOffset,top:window.pageYOffset});function wj(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ej(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Uv(t,e){return(history.state?history.state.position-e:-1)+t}const Dd=new Map;function Tj(t,e){Dd.set(t,e)}function Ij(t){const e=Dd.get(t);return Dd.delete(t),e}let bj=()=>location.protocol+"//"+location.host;function jA(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),$v(l,"")}return $v(n,t)+s+r}function Aj(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=jA(t,location),m=n.value,p=e.value;let g=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}g=p?f.position-p.position:0}else s(d);r.forEach(v=>{v(n.value,m,{delta:g,type:$a.pop,direction:g?g>0?aa.forward:aa.back:aa.unknown})})};function l(){o=n.value}function c(f){r.push(f);const d=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Se({},f.state,{scroll:ph()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function jv(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ph():null}}function Rj(t){const{history:e,location:n}=window,s={value:jA(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:bj()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Se({},e.state,jv(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=Se({},r.value,e.state,{forward:l,scroll:ph()});i(u.current,u,!0);const h=Se({},jv(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Cj(t){t=_j(t);const e=Rj(t),n=Aj(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Se({location:"",base:t,go:s,createHref:vj.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Sj(t){return typeof t=="string"||t&&typeof t=="object"}function BA(t){return typeof t=="string"||typeof t=="symbol"}const Cs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qA=Symbol("");var Bv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bv||(Bv={}));function Xi(t,e){return Se(new Error,{type:t,[qA]:!0},e)}function es(t,e){return t instanceof Error&&qA in t&&(e==null||!!(t.type&e))}const qv="[^/]+?",Pj={sensitive:!1,strict:!1,start:!0,end:!0},kj=/[.+*?^${}()[\]/\\]/g;function Nj(t,e){const n=Se({},Pj,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(kj,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:p,optional:g,regexp:v}=f;i.push({name:m,repeatable:p,optional:g});const T=v||qv;if(T!==qv){d+=10;try{new RegExp(`(${T})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${T}): `+w.message)}}let I=p?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(I=g&&c.length<2?`(?:/${I})`:"/"+I),g&&(I+="?"),r+=I,d+=20,g&&(d+=-8),p&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:p,optional:g}=d,v=m in c?c[m]:"";if(kn(v)&&!p)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const T=kn(v)?v.join("/"):v;if(!T)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=T}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Oj(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xj(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Oj(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Wv(s))return 1;if(Wv(r))return-1}return r.length-s.length}function Wv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dj={type:0,value:""},Mj=/[a-zA-Z0-9_]/;function Lj(t){if(!t)return[[]];if(t==="/")return[[Dj]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:Mj.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Vj(t,e,n){const s=Nj(Lj(t.path),n),r=Se(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function $j(t,e){const n=[],s=new Map;e=Kv({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,m=Fj(u);m.aliasOf=f&&f.record;const p=Kv(e,u),g=[m];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of I)g.push(Se({},m,{components:f?f.record.components:m.components,path:w,aliasOf:f?f.record:m}))}let v,T;for(const I of g){const{path:w}=I;if(h&&w[0]!=="/"){const N=h.record.path,b=N[N.length-1]==="/"?"":"/";I.path=h.record.path+(w&&b+w)}if(v=Vj(I,h,p),f?f.alias.push(v):(T=T||v,T!==v&&T.alias.push(v),d&&u.name&&!zv(v)&&o(u.name)),m.children){const N=m.children;for(let b=0;b<N.length;b++)i(N[b],v,f&&f.children[b])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return T?()=>{o(T)}:oa}function o(u){if(BA(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&xj(u,n[h])>=0&&(u.record.path!==n[h].record.path||!WA(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!zv(u)&&s.set(u.record.name,u)}function c(u,h){let f,d={},m,p;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Xi(1,{location:u});p=f.record.name,d=Se(Hv(h.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&Hv(u.params,f.keys.map(T=>T.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(T=>T.re.test(m)),f&&(d=f.parse(m),p=f.record.name);else{if(f=h.name?s.get(h.name):n.find(T=>T.re.test(h.path)),!f)throw Xi(1,{location:u,currentLocation:h});p=f.record.name,d=Se({},h.params,u.params),m=f.stringify(d)}const g=[];let v=f;for(;v;)g.unshift(v.record),v=v.parent;return{name:p,path:m,params:d,matched:g,meta:jj(g)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Hv(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Fj(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Uj(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Uj(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function zv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jj(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Kv(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function WA(t,e){return e.children.some(n=>n===t||WA(t,n))}const HA=/#/g,Bj=/&/g,qj=/\//g,Wj=/=/g,Hj=/\?/g,zA=/\+/g,zj=/%5B/g,Kj=/%5D/g,KA=/%5E/g,Gj=/%60/g,GA=/%7B/g,Qj=/%7C/g,QA=/%7D/g,Yj=/%20/g;function ug(t){return encodeURI(""+t).replace(Qj,"|").replace(zj,"[").replace(Kj,"]")}function Xj(t){return ug(t).replace(GA,"{").replace(QA,"}").replace(KA,"^")}function Md(t){return ug(t).replace(zA,"%2B").replace(Yj,"+").replace(HA,"%23").replace(Bj,"%26").replace(Gj,"`").replace(GA,"{").replace(QA,"}").replace(KA,"^")}function Jj(t){return Md(t).replace(Wj,"%3D")}function Zj(t){return ug(t).replace(HA,"%23").replace(Hj,"%3F")}function eB(t){return t==null?"":Zj(t).replace(qj,"%2F")}function nu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tB(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(zA," "),o=i.indexOf("="),a=nu(o<0?i:i.slice(0,o)),l=o<0?null:nu(i.slice(o+1));if(a in e){let c=e[a];kn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Gv(t){let e="";for(let n in t){const s=t[n];if(n=Jj(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kn(s)?s.map(i=>i&&Md(i)):[s&&Md(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nB(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const sB=Symbol(""),Qv=Symbol(""),mh=Symbol(""),hg=Symbol(""),Ld=Symbol("");function Po(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ks(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Xi(4,{from:n,to:e})):h instanceof Error?a(h):Sj(h)?a(Xi(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function af(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rB(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ks(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=uj(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ks(f,n,s,i,o)()}))}}return r}function rB(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yv(t){const e=gt(mh),n=gt(hg),s=dt(()=>e.resolve(qt(t.to))),r=dt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Yi.bind(null,u));if(f>-1)return f;const d=Xv(l[c-2]);return c>1&&Xv(u)===d&&h[h.length-1].path!==d?h.findIndex(Yi.bind(null,l[c-2])):f}),i=dt(()=>r.value>-1&&aB(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&UA(n.params,s.value.params));function a(l={}){return oB(l)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(oa):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const iB=pu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yv,setup(t,{slots:e}){const n=$n(Yv(t)),{options:s}=gt(mh),r=dt(()=>({[Jv(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jv(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),lr=iB;function oB(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aB(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Xv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jv=(t,e,n)=>t??e??n,lB=pu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=gt(Ld),r=dt(()=>t.route||s.value),i=gt(Qv,0),o=dt(()=>{let c=qt(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=dt(()=>r.value.matched[o.value]);Wo(Qv,dt(()=>o.value+1)),Wo(sB,a),Wo(Ld,r);const l=Ke();return En(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Yi(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Zv(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=pa(f,Se({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Zv(n.default,{Component:g,route:c})||g}}});function Zv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YA=lB;function cB(t){const e=$j(t.routes,t),n=t.parseQuery||tB,s=t.stringifyQuery||Gv,r=t.history,i=Po(),o=Po(),a=Po(),l=TE(Cs);let c=Cs;li&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rf.bind(null,P=>""+P),h=rf.bind(null,eB),f=rf.bind(null,nu);function d(P,W){let F,Q;return BA(P)?(F=e.getRecordMatcher(P),Q=W):Q=P,e.addRoute(Q,F)}function m(P){const W=e.getRecordMatcher(P);W&&e.removeRoute(W)}function p(){return e.getRoutes().map(P=>P.record)}function g(P){return!!e.getRecordMatcher(P)}function v(P,W){if(W=Se({},W||l.value),typeof P=="string"){const A=of(n,P,W.path),S=e.resolve({path:A.path},W),O=r.createHref(A.fullPath);return Se(A,S,{params:f(S.params),hash:nu(A.hash),redirectedFrom:void 0,href:O})}let F;if("path"in P)F=Se({},P,{path:of(n,P.path,W.path).path});else{const A=Se({},P.params);for(const S in A)A[S]==null&&delete A[S];F=Se({},P,{params:h(A)}),W.params=h(W.params)}const Q=e.resolve(F,W),Re=P.hash||"";Q.params=u(f(Q.params));const _=dj(s,Se({},P,{hash:Xj(Re),path:Q.path})),y=r.createHref(_);return Se({fullPath:_,hash:Re,query:s===Gv?nB(P.query):P.query||{}},Q,{redirectedFrom:void 0,href:y})}function T(P){return typeof P=="string"?of(n,P,l.value.path):Se({},P)}function I(P,W){if(c!==P)return Xi(8,{from:W,to:P})}function w(P){return R(P)}function N(P){return w(Se(T(P),{replace:!0}))}function b(P){const W=P.matched[P.matched.length-1];if(W&&W.redirect){const{redirect:F}=W;let Q=typeof F=="function"?F(P):F;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=T(Q):{path:Q},Q.params={}),Se({query:P.query,hash:P.hash,params:"path"in Q?{}:P.params},Q)}}function R(P,W){const F=c=v(P),Q=l.value,Re=P.state,_=P.force,y=P.replace===!0,A=b(F);if(A)return R(Se(T(A),{state:typeof A=="object"?Se({},Re,A.state):Re,force:_,replace:y}),W||F);const S=F;S.redirectedFrom=W;let O;return!_&&pj(s,Q,F)&&(O=Xi(16,{to:S,from:Q}),Et(Q,Q,!0,!1)),(O?Promise.resolve(O):V(S,Q)).catch(x=>es(x)?es(x,2)?x:zt(x):de(x,S,Q)).then(x=>{if(x){if(es(x,2))return R(Se({replace:y},T(x.to),{state:typeof x.to=="object"?Se({},Re,x.to.state):Re,force:_}),W||S)}else x=he(S,Q,!0,y,Re);return B(S,Q,x),x})}function E(P,W){const F=I(P,W);return F?Promise.reject(F):Promise.resolve()}function C(P){const W=Qr.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(P):P()}function V(P,W){let F;const[Q,Re,_]=uB(P,W);F=af(Q.reverse(),"beforeRouteLeave",P,W);for(const A of Q)A.leaveGuards.forEach(S=>{F.push(ks(S,P,W))});const y=E.bind(null,P,W);return F.push(y),wt(F).then(()=>{F=[];for(const A of i.list())F.push(ks(A,P,W));return F.push(y),wt(F)}).then(()=>{F=af(Re,"beforeRouteUpdate",P,W);for(const A of Re)A.updateGuards.forEach(S=>{F.push(ks(S,P,W))});return F.push(y),wt(F)}).then(()=>{F=[];for(const A of _)if(A.beforeEnter)if(kn(A.beforeEnter))for(const S of A.beforeEnter)F.push(ks(S,P,W));else F.push(ks(A.beforeEnter,P,W));return F.push(y),wt(F)}).then(()=>(P.matched.forEach(A=>A.enterCallbacks={}),F=af(_,"beforeRouteEnter",P,W),F.push(y),wt(F))).then(()=>{F=[];for(const A of o.list())F.push(ks(A,P,W));return F.push(y),wt(F)}).catch(A=>es(A,8)?A:Promise.reject(A))}function B(P,W,F){a.list().forEach(Q=>C(()=>Q(P,W,F)))}function he(P,W,F,Q,Re){const _=I(P,W);if(_)return _;const y=W===Cs,A=li?history.state:{};F&&(Q||y?r.replace(P.fullPath,Se({scroll:y&&A&&A.scroll},Re)):r.push(P.fullPath,Re)),l.value=P,Et(P,W,F,y),zt()}let Z;function He(){Z||(Z=r.listen((P,W,F)=>{if(!gl.listening)return;const Q=v(P),Re=b(Q);if(Re){R(Se(Re,{replace:!0}),Q).catch(oa);return}c=Q;const _=l.value;li&&Tj(Uv(_.fullPath,F.delta),ph()),V(Q,_).catch(y=>es(y,12)?y:es(y,2)?(R(y.to,Q).then(A=>{es(A,20)&&!F.delta&&F.type===$a.pop&&r.go(-1,!1)}).catch(oa),Promise.reject()):(F.delta&&r.go(-F.delta,!1),de(y,Q,_))).then(y=>{y=y||he(Q,_,!1),y&&(F.delta&&!es(y,8)?r.go(-F.delta,!1):F.type===$a.pop&&es(y,20)&&r.go(-1,!1)),B(Q,_,y)}).catch(oa)}))}let Oe=Po(),K=Po(),oe;function de(P,W,F){zt(P);const Q=K.list();return Q.length?Q.forEach(Re=>Re(P,W,F)):console.error(P),Promise.reject(P)}function rt(){return oe&&l.value!==Cs?Promise.resolve():new Promise((P,W)=>{Oe.add([P,W])})}function zt(P){return oe||(oe=!P,He(),Oe.list().forEach(([W,F])=>P?F(P):W()),Oe.reset()),P}function Et(P,W,F,Q){const{scrollBehavior:Re}=t;if(!li||!Re)return Promise.resolve();const _=!F&&Ij(Uv(P.fullPath,0))||(Q||!F)&&history.state&&history.state.scroll||null;return hu().then(()=>Re(P,W,_)).then(y=>y&&wj(y)).catch(y=>de(y,P,W))}const Ft=P=>r.go(P);let Gr;const Qr=new Set,gl={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:g,getRoutes:p,resolve:v,options:t,push:w,replace:N,go:Ft,back:()=>Ft(-1),forward:()=>Ft(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:rt,install(P){const W=this;P.component("RouterLink",lr),P.component("RouterView",YA),P.config.globalProperties.$router=W,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),li&&!Gr&&l.value===Cs&&(Gr=!0,w(r.location).catch(Re=>{}));const F={};for(const Re in Cs)Object.defineProperty(F,Re,{get:()=>l.value[Re],enumerable:!0});P.provide(mh,W),P.provide(hg,yE(F)),P.provide(Ld,l);const Q=P.unmount;Qr.add(P),P.unmount=function(){Qr.delete(P),Qr.size<1&&(c=Cs,Z&&Z(),Z=null,l.value=Cs,Gr=!1,oe=!1),Q()}}};function wt(P){return P.reduce((W,F)=>W.then(()=>C(F)),Promise.resolve())}return gl}function uB(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Yi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Yi(c,l))||r.push(l))}return[n,s,r]}function c6(){return gt(mh)}function u6(){return gt(hg)}const hB={__name:"App",setup(t){return(e,n)=>(In(),KE(qt(YA)))}},XA="/sushifav.svg",fB="/sushi.png",dB={class:"container mx-auto w-11/12 md:w-full flex justify-between items-center py-4"},pB=Qs('<div class=""><a href="/" class="flex items-center gap-1"><img src="'+XA+'" alt="sushi" class="w-10 object-cover mx-auto"><p class="text-lg uppercase font-semibold">Aspid <span class="text-red-400">sushi &amp; Cuisine</span></p></a></div>',1),mB={class:"hidden md:block"},gB={class:"flex gap-10"},_B={class:"text-sm font-semibold hover:bg-gray-200 rounded p-1 flex items-center gap-1"},yB=ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})],-1),vB={class:"text-sm font-semibold hover:bg-gray-200 rounded p-1 flex items-center gap-1"},EB=ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})],-1),wB={class:"text-sm font-semibold hover:bg-gray-200 rounded p-1 flex items-center gap-1"},TB=ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})],-1),IB={class:"hidden md:flex gap-2"},bB=ee("a",{href:"#",class:"px-5 py-1 rounded-lg font-semibold text-white bg-black hover:bg-gray-800"},"Rerservar",-1),AB=ee("a",{href:"#",class:"px-5 py-1 rounded-lg font-semibold border border-gray-300 hover:border-gray-400"},"Contacto",-1),RB=ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1),CB=[RB],SB=ee("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ef4444",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[ee("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),ee("path",{d:"M18 6l-12 12"}),ee("path",{d:"M6 6l12 12"})],-1),PB=[SB],kB=ee("div",{class:"flex items-center gap-2 mt-4"},[ee("p",{class:"font-bold text-xl"},"Aspid sushi & Cuisine ©"),ee("img",{src:XA,alt:"sushi",class:"w-10 object-cover mx-auto"})],-1),NB={class:"flex flex-col text-right mt-8 space-y-6"},OB=ee("li",null,[ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})])],-1),xB=ee("span",null,"Local",-1),DB=[OB,xB],MB=ee("li",null,[ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})])],-1),LB=ee("span",null,"Menú",-1),VB=ee("li",null,[ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})])],-1),$B=ee("span",null,"Nosotros",-1),FB=[VB,$B],UB=ee("li",null,[ee("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ef4444",class:"w-6 h-6"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"})])],-1),jB=ee("span",null,"Admin panel",-1),BB=Qs('<div class="flex gap-4 items-center justify-end mt-8"><a href="https://wa.me/3865549184?text=👋Hola. Vengo desde el sitio web de Aspid"><svg xmlns="http://www.w3.org/2000/svg" class="" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg></a><a href="https://www.instagram.com/aspidsushi/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ef4444" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg></a></div>',1),qB=ee("img",{src:fB,alt:"sushi",class:"mt-10 w-56 object-cover mx-auto"},null,-1),WB={__name:"Header",setup(t){const e=Ke(!1),n=()=>{e.value=!0},s=()=>{e.value=!1};return(r,i)=>(In(),ms("header",dB,[pB,ee("nav",mB,[ee("ul",gB,[ee("li",_B,[yB,xe(qt(lr),{to:{name:"home"}},{default:ir(()=>[ui("Local")]),_:1})]),ee("li",vB,[EB,xe(qt(lr),{to:{name:"menu"}},{default:ir(()=>[ui("Menú")]),_:1})]),ee("li",wB,[TB,xe(qt(lr),{to:{name:"home"}},{default:ir(()=>[ui("Nosotros")]),_:1})])])]),ee("nav",IB,[bB,AB,xe(qt(lr),{to:{name:"current-menu"},class:"px-5 py-1 rounded-lg font-semibold border border-gray-300 hover:border-gray-400"},{default:ir(()=>[ui("Admin")]),_:1})]),ee("div",{class:"flex flex-grow justify-end basis-0 md:hidden"},[ee("button",{type:"button",class:"open-menu md:hidden",onClick:n},CB)]),e.value?(In(),ms("div",{key:0,class:lu(["burguer-menu bg-white p-12 absolute right-0 top-0 h-screen z-40 shadow-2xl",e.value?"animate-fade-left animate-duration-300":""])},[ee("button",{class:"close-menu",onClick:s},PB),ee("nav",null,[kB,ee("ul",NB,[ee("a",{href:"/#local",class:"text-sm font-semibold bg-[#efefef] rounded p-1 flex items-center justify-center gap-1",onClick:i[0]||(i[0]=o=>e.value=!1)},DB),xe(qt(lr),{to:{name:"menu"},class:"text-sm font-semibold bg-[#efefef] rounded p-1 flex items-center justify-center gap-1",onClick:i[1]||(i[1]=o=>e.value=!1)},{default:ir(()=>[MB,LB]),_:1}),ee("a",{href:"/#us",class:"text-sm font-semibold bg-[#efefef] rounded p-1 flex items-center justify-center gap-1",onClick:i[2]||(i[2]=o=>e.value=!1)},FB),xe(qt(lr),{to:{name:"current-menu"},class:"text-sm font-semibold bg-[#efefef] rounded p-1 flex items-center justify-center gap-1",onClick:i[3]||(i[3]=o=>e.value=!1)},{default:ir(()=>[UB,jB]),_:1})]),BB]),qB],2)):VC("",!0)]))}},yo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},HB={},zB={class:"container mx-auto py-20"},KB=Qs('<div class="grid grid-cols-1 gap-8 md:flex md:items-center md:justify-center md:gap-24"><article class="flex flex-col items-center gap-1 text-center max-w-[200px] mx-auto md:max-w-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package w-12 h-12" viewBox="0 0 24 24" stroke-width="2" stroke="#ff5e5e" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg><p class="font-bold text-lg">Combos</p><p class="text-gray-500 text-sm mx-auto font-semibold">Combos de 18, 24, 36 y más piezas en variedad</p></article><article class="flex flex-col items-center text-center gap-1 max-w-[200px] mx-auto md:max-w-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moped w-12 h-12" viewBox="0 0 24 24" stroke-width="2" stroke="#ff5e5e" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1"></path><path d="M6 9l3 0"></path></svg><p class="font-bold text-lg">Delivery</p><p class="text-gray-500 text-sm mx-auto font-semibold">¡Enviamos a la puerta de tu casa!</p></article><article class="flex flex-col items-center gap-1 text-center max-w-[200px] mx-auto md:max-w-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2 w-12 h-12" viewBox="0 0 24 24" stroke-width="2" stroke="#ff5e5e" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M10 12h4v4h-4z"></path></svg><p class="font-bold text-lg">Local</p><p class="text-gray-500 text-sm mx-auto font-semibold">Disfrutá de buena comida y comodidad en nuestro local</p></article><article class="flex flex-col items-center gap-1 text-center max-w-[200px] mx-auto md:max-w-full"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card w-12 h-12" viewBox="0 0 24 24" stroke-width="2" stroke="#ff5e5e" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M3 10l18 0"></path><path d="M7 15l.01 0"></path><path d="M11 15l2 0"></path></svg><p class="font-bold text-lg">Formas de pago</p><p class="text-gray-500 text-sm mx-auto font-semibold">Tarjetas de crédito, efectivo, transferencia</p></article></div>',1),GB=[KB];function QB(t,e){return In(),ms("section",zB,GB)}const YB=yo(HB,[["render",QB]]),XB="/start-rolls.jpg",JB={},ZB={class:"container mx-auto w-11/12 md:w-full grid md:grid-cols-2 gap-6 md:gap-40 pt-16 items-center"},e5=Qs('<div class="space-y-4"><h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">Los detalles corren por nuestra cuenta</h1><p class="text-slate-600 text-lg">Ingredientes de altísima calidad y <span class="text-red-400">los mejores momentos</span> en Aspid. Disfrutá de un lugar cómodo y fantástica comida, si pensaste en sushi, pensaste en Aspid ©.</p></div><img src="'+XB+'" alt="sushi" class="animate-fade-right animate-duration-[3000ms]">',2),t5=[e5];function n5(t,e){return In(),ms("section",ZB,t5)}const s5=yo(JB,[["render",n5]]),r5="/1.jpg",i5="/2.jpg",o5="/3.jpg",a5="/4.jpg",l5={},c5={class:"grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto w-11/12 md:w-full py-20"},u5=Qs('<div><img class="max-w-full rounded-lg h-40 md:h-80 w-full object-cover" src="'+r5+'" alt="rolls"></div><div><img class="max-w-full rounded-lg h-40 md:h-80 w-full object-cover" src="'+i5+'" alt="rolls"></div><div><img class="max-w-full rounded-lg h-40 md:h-80 w-full object-cover" src="'+o5+'" alt="rolls"></div><div class="md:hidden"><img class="max-w-full rounded-lg h-40 md:h-80 w-full object-cover" src="'+a5+'" alt="rolls"></div>',4),h5=[u5];function f5(t,e){return In(),ms("section",c5,h5)}const d5=yo(l5,[["render",f5]]),p5="/about-1.jpg",m5="/about-2.jpg",g5={},_5={class:"bg-red-50 py-20",id:"us"},y5=Qs('<div class="container mx-auto w-11/12 md:w-full md:grid md:grid-cols-5 gap-8 md:items-center"><div class="flex flex-col gap-4 col-span-2"><img src="'+p5+'" alt="" class="rounded-lg"><img src="'+m5+'" alt="" class="rounded-lg"></div><article class="space-y-5 col-span-3 md:p-20 mt-12"><h4 class="text-red-700 text-2xl">Acerca de nosotros / 私たちに関しては</h4><h2 class="text-5xl md:text-6xl font-semibold leading-10">El propósito es que disfrutes del buen Sushi y la calidez de Aspid.</h2><p class="text-[#121212] text-xl leading-relaxed">Nuestro menú es una deliciosa exploración de la cocina japonesa. Desde los clásicos como el Nigiri y el Sashimi hasta creaciones modernas como los Rollos de Sushi Especiales de la casa, hay algo para todos los gustos. También ofrecemos opciones para vegetarianos y veganos, asegurándonos de que todos los amantes de la comida puedan disfrutar de nuestras creaciones y de nuestro acogedor local con buena música y riquísimas bebidas para pasar la mejor noche de sushi.</p></article></div>',1),v5=[y5];function E5(t,e){return In(),ms("main",_5,v5)}const w5=yo(g5,[["render",E5]]),T5={},I5={class:"mt-20"},b5=Qs('<div class="container mx-auto w-11/12"><p class="font-bold text-sm mt-10 text-center text-gray-500">Copyright © 2023 <span class="text-red-400">Aspid sushi</span>. Derechos reservados.</p></div><div class="flex gap-3 items-center justify-center mt-6 pb-4 z-10"><p class="text-gray-600 text-center my-1">© Made by Puly - Frontend dev.</p><a href="https://www.instagram.com/puly___garcia/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f87171" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg></a></div>',2),A5=[b5];function R5(t,e){return In(),ms("footer",I5,A5)}const C5=yo(T5,[["render",R5]]),S5="/local.jpg",P5="/local-2.jpg",k5={},N5={class:"py-20",id:"local"},O5=Qs('<div class="container mx-auto w-11/12 md:w-full md:grid md:grid-cols-5 gap-8 md:items-center"><article class="space-y-5 col-span-3 md:p-20 mt-12"><h4 class="text-red-700 text-2xl">Nuestro local</h4><h2 class="text-5xl md:text-6xl font-semibold leading-10">Comodidad, buena música y el mejor sushi.</h2><p class="text-[#121212] text-xl leading-relaxed">En nuestro restaurante, la comodidad es nuestra prioridad número uno. Queremos que cada visita sea una experiencia relajante y deliciosa. Desde el momento en que pones un pie en nuestro local, te sumergirás en un ambiente acogedor y tranquilo, diseñado especialmente para disfrutar del mejor sushi que puedas encontrar.</p><p class="text-[#121212] text-xl leading-relaxed">Nuestro compromiso con la excelencia culinaria se refleja en cada rollo meticulosamente preparado por nuestros talentosos chefs. Utilizamos ingredientes frescos y de la más alta calidad para ofrecerte una amplia gama de sabores y texturas que deleitarán tu paladar.</p></article><div class="flex flex-col gap-4 col-span-2 mt-5 md:mt-0"><img src="'+S5+'" alt="" class="rounded-lg"><img src="'+P5+'" alt="" class="rounded-lg"></div></div>',1),x5=[O5];function D5(t,e){return In(),ms("main",N5,x5)}const M5=yo(k5,[["render",D5]]),L5={__name:"HomeView",setup(t){return(e,n)=>(In(),ms(Dn,null,[xe(WB),xe(s5),xe(YB),xe(d5),xe(w5),xe(M5),xe(C5)],64))}},JA=cB({history:Cj("/"),routes:[{path:"/",name:"home",component:L5},{path:"/menu",name:"menu",component:()=>si(()=>import("./MenuView-971502eb.js"),["assets/MenuView-971502eb.js","assets/index-6a9bc520.js","assets/dialog-d9e7f5fe.js","assets/itemsStore-b03ed189.js"])},{path:"/login",name:"login",component:()=>si(()=>import("./LoginView-f6beab5b.js"),["assets/LoginView-f6beab5b.js","assets/authStore-ccfd02ee.js","assets/Loader-6cf549cd.js","assets/Loader-8c544ac7.css","assets/dialog-d9e7f5fe.js"])},{path:"/admin",name:"admin",component:()=>si(()=>import("./AdminLayoutView-8fd790df.js"),["assets/AdminLayoutView-8fd790df.js","assets/authStore-ccfd02ee.js"]),meta:{requiresAuth:!0},children:[{path:"/admin/new",name:"new-item",component:()=>si(()=>import("./AddNewItemView-d44abf9b.js"),["assets/AddNewItemView-d44abf9b.js","assets/useImage-5c6d027a.js","assets/itemsStore-b03ed189.js","assets/Loader-6cf549cd.js","assets/Loader-8c544ac7.css","assets/dialog-d9e7f5fe.js"])},{path:"/admin/edit/:id",name:"edit-item",component:()=>si(()=>import("./EditItemView-17b5398e.js"),["assets/EditItemView-17b5398e.js","assets/itemsStore-b03ed189.js","assets/useImage-5c6d027a.js","assets/Loader-6cf549cd.js","assets/Loader-8c544ac7.css","assets/dialog-d9e7f5fe.js"])},{path:"/admin/items",name:"current-menu",component:()=>si(()=>import("./CurrentMenuView-b5d608e6.js"),["assets/CurrentMenuView-b5d608e6.js","assets/itemsStore-b03ed189.js","assets/index-6a9bc520.js"])}]}]});JA.beforeEach(async(t,e,n)=>{if(t.matched.some(r=>r.meta.requiresAuth))try{await V5(),n()}catch(r){console.log(r),n({name:"login"})}else n()});function V5(){const t=dF();return new Promise((e,n)=>{t1(t,s=>{s?e(s):n()})})}const ml=yS(hB);ml.use(pF,{firebaseApp:gF,modules:[fF()]});ml.use(wS());ml.use(rj,cj(y4));ml.use(JA);ml.mount("#app");export{e6 as $,o6 as A,En as B,l6 as C,dt as D,r6 as E,Dn as F,t6 as G,n6 as H,yo as I,F5 as J,U5 as K,Ni as L,pa as M,gt as N,ss as O,pu as P,ep as Q,lr as R,Wo as S,B5 as T,TE as U,hu as V,a6 as W,X5 as X,Y5 as Y,i6 as Z,WB as _,JR as a,J5 as a0,Ab as a1,Z5 as a2,s6 as a3,ee as b,ms as c,ui as d,VC as e,xe as f,Qs as g,j5 as h,KE as i,c6 as j,$n as k,YA as l,q5 as m,lu as n,In as o,dF as p,ME as q,Ke as r,t1 as s,$5 as t,qt as u,W5 as v,ir as w,H5 as x,u6 as y,C2 as z};
