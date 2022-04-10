const Me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Me();const M={},je=(e,t)=>e===t,Q={equals:je};let ve=xe;const T={},P=1,X=2,me={owned:null,cleanups:null,context:null,owner:null},[qe,Ot]=$(!1);var h=null;let V=null,g=null,j=null,w=null,S=null,ie=0;function ye(e,t){const n=g,s=h,r=e.length===0?me:{owned:null,cleanups:null,context:null,owner:t||s};h=r,g=null;try{return ee(()=>e(()=>ce(r)),!0)}finally{g=n,h=s}}function $(e,t){t=t?Object.assign({},Q,t):Q;const n={value:e,observers:null,observerSlots:null,pending:T,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.pending!==T?n.pending:n.value)),le(n,r));return[Se.bind(n),s]}function De(e,t,n){const s=k(e,t,!0,P);O(s)}function K(e,t,n){const s=k(e,t,!1,P);O(s)}function Ke(e,t,n){ve=Qe;const s=k(e,t,!1,P);s.user=!0,S?S.push(s):queueMicrotask(()=>O(s))}function b(e,t,n){n=n?Object.assign({},Q,n):Q;const s=k(e,t,!0,0);return s.pending=T,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),Se.bind(s)}function we(e){if(j)return e();let t;const n=j=[];try{t=e()}finally{j=null}return ee(()=>{for(let s=0;s<n.length;s+=1){const r=n[s];if(r.pending!==T){const i=r.pending;r.pending=T,le(r,i)}}},!1),t}function _(e){let t,n=g;return g=null,t=e(),g=n,t}function be(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=[];for(let u=0;u<e.length;u++)o.push(e[u]())}else o=e();if(i){i=!1;return}const c=_(()=>t(o,r,l));return r=o,c}}function Ae(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Fe(){return h}function Ve(e,t){const n=h;h=e;try{return ee(t,!0)}finally{h=n}}function We(e){const t=g,n=h;return Promise.resolve().then(()=>{g=t,h=n;let s;return we(e),s?s.done:void 0})}function Ge(){return[qe,We]}function Ce(e){const t=Symbol("context");return{id:t,Provider:Xe(t),defaultValue:e}}function oe(e){let t;return(t=Ee(h,e.id))!==void 0?t:e.defaultValue}function He(e){const t=b(e);return b(()=>se(t()))}function Se(){const e=V;if(this.sources&&(this.state||e)){const t=w;w=null,this.state===P||e?O(this):Y(this),w=t}if(g){const t=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(t)):(g.sources=[this],g.sourceSlots=[t]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function le(e,t,n){if(j)return e.pending===T&&j.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&ee(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r];s&&V.disposed.has(i),(s&&!i.tState||!s&&!i.state)&&(i.pure?w.push(i):S.push(i),i.observers&&Pe(i)),s||(i.state=P)}if(w.length>1e6)throw w=[],new Error},!1),t}function O(e){if(!e.fn)return;ce(e);const t=h,n=g,s=ie;g=h=e,ze(e,e.value,s),g=n,h=t}function ze(e,t,n){let s;try{s=e.fn(t)}catch(r){_e(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?le(e,s):e.value=s,e.updatedAt=n)}function k(e,t,n,s=P,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==me&&(h.owned?h.owned.push(i):h.owned=[i]),i}function q(e){const t=V;if(e.state===0||t)return;if(e.state===X||t)return Y(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ie);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===P||t)O(e);else if(e.state===X||t){const r=w;w=null,Y(e,n[0]),w=r}}function ee(e,t){if(w)return e();let n=!1;t||(w=[]),S?n=!0:S=[],ie++;try{return e()}catch(s){_e(s)}finally{Je(n)}}function Je(e){w&&(xe(w),w=null),!e&&(S.length?we(()=>{ve(S),S=null}):S=null)}function xe(e){for(let t=0;t<e.length;t++)q(e[t])}function Qe(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:q(r)}const s=e.length;for(t=0;t<n;t++)q(e[t]);for(t=s;t<e.length;t++)q(e[t])}function Y(e,t){const n=V;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===P||n?r!==t&&q(r):(r.state===X||n)&&Y(r,t))}}function Pe(e){const t=V;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=X,s.pure?w.push(s):S.push(s),s.observers&&Pe(s))}}function ce(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)ce(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function _e(e){throw e}function Ee(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ee(e.owner,t):void 0}function se(e){if(typeof e=="function"&&!e.length)return se(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=se(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Xe(e){return function(n){let s;return De(()=>s=_(()=>(h.context={[e]:n.value},He(()=>n.children)))),s}}function A(e,t){return _(()=>e(t))}function Re(e){let t=!1;const n=b(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return b(()=>{const s=n();if(s){const r=e.children;return(t=typeof r=="function"&&r.length>0)?_(()=>r(s)):r}return e.fallback})}function Ye(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,c=t[r-1].nextSibling,u=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const a=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<r;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[r]=n[i]}else{if(!u){u=new Map;let v=o;for(;v<i;)u.set(n[v],v++)}const a=u.get(t[l]);if(a!=null)if(o<a&&a<i){let v=l,m=1,f;for(;++v<r&&v<i&&!((f=u.get(t[v]))==null||f!==a+m);)m++;if(m>a-o){const x=t[l];for(;o<a;)e.insertBefore(n[o++],x)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}function Ze(e,t,n){let s;return ye(r=>{s=r,t===document?e():Le(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function ue(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Le(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Z(e,t,s,n);K(r=>Z(e,t(),r,n),s)}function Z(e,t,n,s,r){for(M.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(M.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=N(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(M.context)return n;n=N(e,n,s)}else{if(i==="function")return K(()=>{let o=t();for(;typeof o=="function";)o=o();n=Z(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[];if(re(o,t,r))return K(()=>n=Z(e,o,n,s,!0)),()=>n;if(M.context){for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=N(e,n,s),l)return n}else Array.isArray(n)?n.length===0?pe(e,o,s):Ye(e,n,o):(n&&N(e),pe(e,o));n=o}else if(t instanceof Node){if(M.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=N(e,n,s,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function re(e,t,n){let s=!1;for(let r=0,i=t.length;r<i;r++){let l=t[r],o;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=re(e,l)||s;else if((o=typeof l)=="string")e.push(document.createTextNode(l));else if(o==="function")if(n){for(;typeof l=="function";)l=l();s=re(e,Array.isArray(l)?l:[l])||s}else e.push(l),s=!0;else e.push(document.createTextNode(l.toString()))}return s}function pe(e,t,n){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function N(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function ke(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function et([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function tt(e,t){const n=document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function nt(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=et($(i(e()),{equals:(o,c)=>o.value===c.value}),void 0,o=>(!r&&t(o),o));return n&&Ae(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function st(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:$({value:""})};return e}function rt(){return nt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),tt(window.location.hash.slice(1),n)},e=>ke(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const it=/^(?:[a-z0-9]+:)?\/\//i,ot=/^\/+|\/+$|\s+/g;function D(e){const t=e.replace(ot,"");return t?t.startsWith("?")?t:"/"+t:""}function J(e,t,n){if(it.test(t))return;const s=D(e),r=n&&D(n);let i="";return!r||t.charAt(0)==="/"?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,i+D(t)||"/"}function lt(e,t){if(e==null)throw new Error(t);return e}function Ne(e,t){return D(e).replace(/\/*(\*.*)?$/g,"")+D(t)}function ct(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function ut(e,t){const[n,s]=e.split("/*",2),r=n.split("/").filter(Boolean),i=r.length;return l=>{const o=l.split("/").filter(Boolean),c=o.length-i;if(c<0||c>0&&s===void 0&&!t)return null;const u={path:i?"":"/",params:{}};for(let a=0;a<i;a++){const v=r[a],m=o[a];if(v[0]===":")u.params[v.slice(1)]=m;else if(v.localeCompare(m,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${m}`}return s&&(u.params[s]=c?o.slice(-c).join("/"):""),u}}function at(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function Te(e){const t=new Map,n=Fe();return new Proxy({},{get(s,r){return t.has(r)||Ve(n,()=>t.set(r,b(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const ft=100,$e=Ce(),te=Ce(),Oe=()=>lt(oe($e),"Make sure your app is wrapped in a <Router />");let F;const Be=()=>F||oe(te)||Oe().base;function dt(e,t="",n){const{path:s,component:r,data:i,children:l}=e,o=!l||Array.isArray(l)&&!l.length,c=Ne(t,s),u=o?c:c.split("/*",1)[0];return{originalPath:s,pattern:u,element:r?()=>A(r,{}):()=>{const{element:a}=e;return a===void 0&&n?A(n,{}):a},preload:e.component?r.preload:e.preload,data:i,matcher:ut(u,!o)}}function ht(e,t=0){return{routes:e,score:at(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function Ie(e,t="",n,s=[],r=[]){const i=Array.isArray(e)?e:[e];for(let l=0,o=i.length;l<o;l++){const c=i[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const u=dt(c,t,n);if(s.push(u),c.children)Ie(c.children,u.pattern,n,s,r);else{const a=ht([...s],r.length);r.push(a)}s.pop()}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function pt(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function gt(e,t){const n=new URL("http://sar"),s=b(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),r=b(()=>s().pathname),i=b(()=>s().search.slice(1)),l=b(()=>s().hash.slice(1)),o=b(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Te(be(i,()=>ct(s())))}}function vt(e,t="",n,s){const{signal:[r,i],utils:l={}}=st(e),o=l.parsePath||(p=>p),c=l.renderPath||(p=>p),u=J("",t),a=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&i({value:u,replace:!0,scroll:!1});const[v,m]=Ge(),[f,x]=$(r().value),[E,W]=$(r().state),G=gt(f,E),B=[],R={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(p){return J(u,p)}};if(n)try{F=R,R.data=n({data:void 0,params:{},location:G,navigate:fe(R)})}finally{F=void 0}function ae(p,d,y){_(()=>{if(typeof d=="number"){d&&(l.go?l.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:I,resolve:U,scroll:de,state:L}={replace:!1,resolve:!0,scroll:!0,...y},C=U?p.resolvePath(d):J("",d);if(C===void 0)throw new Error(`Path '${d}' is not a routable path`);if(B.length>=ft)throw new Error("Too many redirects");const H=f();if(C!==H||L!==E()){const z=B.push({value:H,replace:I,scroll:de,state:E});m(()=>{x(C),W(L)}).then(()=>{B.length===z&&Ue({value:C,state:L})})}})}function fe(p){return p=p||oe(te)||R,(d,y)=>ae(p,d,y)}function Ue(p){const d=B[0];d&&((p.value!==d.value||p.state!==d.state)&&i({...p,replace:d.replace,scroll:d.scroll}),B.length=0)}K(()=>{const{value:p,state:d}=r();p!==_(f)&&m(()=>{x(p),W(d)})});{let p=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const y=d.composedPath().find(he=>he instanceof Node&&he.nodeName.toUpperCase()==="A");if(!y)return;const I=y instanceof SVGAElement,U=I?y.href.baseVal:y.href;if((I?y.target.baseVal:y.target)||!U&&!y.hasAttribute("state"))return;const L=(y.getAttribute("rel")||"").split(/\s+/);if(y.hasAttribute("download")||L&&L.includes("external"))return;const C=I?new URL(U,document.baseURI):new URL(U);if(C.origin!==window.location.origin||u&&C.pathname&&!C.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const H=o(C.pathname+C.search+C.hash),z=y.getAttribute("state");d.preventDefault(),ae(R,H,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:z&&JSON.parse(z)})};var Bt=p;document.addEventListener("click",p),Ae(()=>document.removeEventListener("click",p))}return{base:R,out:a,location:G,isRouting:v,renderPath:c,parsePath:o,navigatorFactory:fe}}function mt(e,t,n,s){const{base:r,location:i,navigatorFactory:l}=e,{pattern:o,element:c,preload:u,data:a}=s().route,v=b(()=>s().path),m=Te(()=>s().params);u&&u();const f={parent:t,pattern:o,get child(){return n()},path:v,params:m,data:t.data,outlet:c,resolvePath(x){return J(r.path(),x,v())}};if(a)try{F=f,f.data=a({data:t.data,params:m,location:i,navigate:l(f)})}finally{F=void 0}return f}const yt=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||rt(),o=vt(l,s,r);return A($e.Provider,{value:o,get children(){return e.children}})},wt=e=>{const t=Oe(),n=Be(),s=b(()=>Ie(e.children,Ne(n.pattern,e.base||""),bt)),r=b(()=>pt(s(),t.location.pathname));t.out&&t.out.matches.push(r().map(({route:c,path:u,params:a})=>({originalPath:c.originalPath,pattern:c.pattern,path:u,params:a})));const i=[];let l;const o=b(be(r,(c,u,a)=>{let v=u&&c.length===u.length;const m=[];for(let f=0,x=c.length;f<x;f++){const E=u&&u[f],W=c[f];a&&E&&W.route.pattern===E.route.pattern?m[f]=a[f]:(v=!1,i[f]&&i[f](),ye(G=>{i[f]=G,m[f]=mt(t,m[f-1]||n,()=>o()[f+1],()=>r()[f])}))}return i.splice(c.length).forEach(f=>f()),a&&v?a:(l=m[0],m)}));return A(Re,{get when(){return o()&&l},children:c=>A(te.Provider,{value:c,get children(){return c.outlet()}})})},ge=e=>e,bt=()=>{const e=Be();return A(Re,{get when(){return e.child},children:t=>A(te.Provider,{value:t,get children(){return t.outlet()}})})};const At=ue("<div>this is auth </div>");function Ct(){return At.cloneNode(!0)}const St="_masterhead_4v4pf_5",xt="_title_4v4pf_19",Pt="_subtitle_4v4pf_25",_t="_content_4v4pf_32",Et="_footer_4v4pf_36",Rt="_hidden_4v4pf_43";var ne={masterhead:St,title:xt,subtitle:Pt,content:_t,footer:Et,hidden:Rt};const Lt=ue('<div><div><h1>NotionPaper</h1><p>Turn your Notion pages to a static site.</p></div><div class="ui container"><div class="ui grid"><div class="five wide column"><div class="ui fluid ordered vertical steps"><div id="step1Menu" class="active step"><div class="content"><div class="title">Login</div><div class="description">Let us recognize you</div></div></div><div id="step2Menu" class="step"><div class="content"><div class="title">Prepare</div><div class="description">Get your Notion Database done</div></div></div><div id="step3Menu" class="step"><div class="content"><div class="title">Authorize</div><div class="description">Let us access to your database</div></div></div><div id="step4Menu" class="step"><div class="content"><div class="title">Download</div><div class="description">Download the site</div></div></div></div></div><div class="eleven wide column"><div id="contentLoader" class="ui dimmer"><div class="ui loader"></div></div><div id="step1Content"><p>Please use the button below to sign in our service</p><div id="google_login_btn"></div></div><div id="step2Content" style="display: none;"></div><div id="step3Content" style="display: none;"></div><div id="step4Content" style="display: none;"></div></div></div></div></div>');function Nt(){$(0);function e(t){document.getElementById("contentLoader").classList.add("active"),result=parseJwt(t.credential);const n=result.sub;result.name,accountCreator(n).then(s=>{console.log(s)})}return Ke(()=>{google.accounts.id.initialize({client_id:"934272751254-hdrod6b4ssep8plavq46fansmkv51lhs.apps.googleusercontent.com",callback:e}),google.accounts.id.renderButton(document.getElementById("google_login_btn"),{theme:"outline",size:"large"})}),(()=>{const t=Lt.cloneNode(!0),n=t.firstChild,s=n.firstChild,r=s.nextSibling;return K(i=>{const l=ne.masterhead,o=ne.title,c=ne.subtitle;return l!==i._v$&&(n.className=i._v$=l),o!==i._v$2&&(s.className=i._v$2=o),c!==i._v$3&&(r.className=i._v$3=c),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()}const Tt=ue("<div></div>");function $t(){return(()=>{const e=Tt.cloneNode(!0);return Le(e,A(wt,{get children(){return[A(ge,{path:"/auth",get element(){return A(Ct,{})}}),A(ge,{path:"/",get element(){return A(Nt,{})}})]}})),e})()}Ze(()=>A(yt,{get children(){return A($t,{})}}),document.getElementById("root"));