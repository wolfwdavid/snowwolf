const Yn=!1;var Hn=Array.isArray,tn=Array.prototype.indexOf,jn=Array.from,Bn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Un=Object.prototype,Vn=Array.prototype,rn=Object.getPrototypeOf;const Gn=()=>{};function Kn(t){return t()}function Tt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,j=8,it=16,I=32,B=64,K=128,g=256,$=512,v=1024,R=2048,F=4096,P=8192,tt=16384,en=32768,At=65536,$n=1<<17,sn=1<<19,kt=1<<20,dt=Symbol("$state"),Zn=Symbol("legacy props"),zn=Symbol("");function It(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Dt(t){return!an(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Wn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Xn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function tr(){nt=!0}const nr=1,rr=2,er=4,sr=8,ar=16,lr=1,ur=2,or=4,fr=8,ir=16,_r=1,cr=2,vn="[",pn="[!",hn="]",Rt={},vr=Symbol();function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function Et(t){i=t}function pr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(i.l={s:null,u:null,r1:[],r2:_t(!1)})}function hr(t){const n=i;if(n!==null){const l=n.e;if(l!==null){var r=f,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];W(a.effect),J(a.reaction),Lt(a.fn)}}finally{W(r),J(e)}}i=n.p,n.m=!0}return{}}function rt(){return!nt||i!==null&&i.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:It,rv:0,wv:0};return r}function dr(t){return xt(_t(t))}function dn(t,n=!1){var e;const r=_t(t);return n||(r.equals=Dt),nt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Er(t,n=!1){return xt(dn(t,n))}function xt(t){return u!==null&&!m&&u.f&y&&(T===null?On([t]):T.push(t)),t}function yr(t,n){return u!==null&&!m&&rt()&&u.f&(y|it)&&(T===null||!T.includes(t))&&cn(),En(t,n)}function En(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=$t(),Ot(t,R),rt()&&f!==null&&f.f&v&&!(f.f&(I|B))&&(k===null?Cn([t]):k.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),s=r.length,a=0;a<s;a++){var l=r[a],_=l.f;_&R||!e&&l===f||(A(l,n),_&(v|g)&&(_&y?Ot(l,F):st(l)))}}let x=!1;function wr(t){x=t}let w;function M(t){if(t===null)throw St(),Rt;return w=t}function mr(){return M(C(w))}function Tr(t){if(x){if(C(w)!==null)throw St(),Rt;w=t}}function gr(t=1){if(x){for(var n=t,r=w;n--;)r=C(r);w=r}}function Ar(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var yt,yn,Ct,Nt;function kr(){if(yt===void 0){yt=window,yn=document;var t=Element.prototype,n=Node.prototype;Ct=ht(n,"firstChild").get,Nt=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function lt(t){return Ct.call(t)}function C(t){return Nt.call(t)}function Ir(t,n){if(!x)return lt(t);var r=lt(w);if(r===null)r=w.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),M(e),e}return M(r),r}function Dr(t,n){if(!x){var r=lt(t);return r instanceof Comment&&r.data===""?C(r):r}return w}function Rr(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=C(e);if(!x)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=at();return e===null?s==null||s.after(l):e.before(l),M(l),l}return M(e),e}function Sr(t){t.textContent=""}function bt(t){var n=y|R,r=u!==null&&u.f&y?u:null;return f===null||r!==null&&r.f&g?n|=g:f.f|=kt,{ctx:i,deps:null,effects:null,equals:It,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function xr(t){const n=bt(t);return n.equals=Dt,n}function qt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function mn(t){var n,r=f;W(wn(t));try{qt(t),n=zt(t)}finally{W(r)}return n}function Pt(t){var n=mn(t),r=(D||t.f&g)&&t.deps!==null?F:v;A(t,r),t.equals(n)||(t.v=n,t.wv=$t())}function Ft(t){f===null&&u===null&&on(),u!==null&&u.f&g&&f===null&&un(),ct&&ln()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var s=(t&B)!==0,a=f,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=b;try{wt(!0),vt(l),l.f|=en}catch(N){throw O(l),N}finally{wt(_)}}else n!==null&&st(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(kt|K))===0;if(!E&&!s&&e&&(a!==null&&Tn(l,a),u!==null&&u.f&y)){var c=u;(c.effects??(c.effects=[])).push(l)}return l}function Or(){return u===null||m?!1:!D}function Cr(t){const n=L(j,null,!1);return A(n,v),n.teardown=t,n}function Nr(t){Ft();var n=f!==null&&(f.f&I)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Lt(t);return e}}function br(t){return Ft(),gn(t)}function qr(t){const n=L(B,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Lt(t){return L(gt,t,!1)}function gn(t){return L(j,t,!0)}function Pr(t,n=[],r=bt){const e=n.map(r);return An(()=>t(...e.map(Ln)))}function An(t,n=0){return L(j|it|n,t,!0)}function Fr(t,n=!0){return L(j|I,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;mt(!0),J(null);try{n.call(null)}finally{mt(r),J(e)}}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function kn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&I||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:C(e);e.remove(),e=a}r=!0}Yt(t,n&&!r),Q(t,0),A(t,tt);var l=t.transitions;if(l!==null)for(const E of l)E.stop();Mt(t);var _=t.parent;_!==null&&_.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];jt(t,r,!0),Dn(r,()=>{O(t),n&&n()})}function Dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&At)!==0||(e.f&I)!==0;jt(e,n,a?r:!1),e=s}}}function Lr(t){Bt(t,!0)}function Bt(t,n){if(t.f&P){t.f^=P,t.f&v||(t.f^=v),U(t)&&(A(t,R),st(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&I)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Rn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Z=!1,z=!1,ut=[],ot=[];function Ut(){Z=!1;const t=ut.slice();ut=[],Tt(t)}function Vt(){z=!1;const t=ot.slice();ot=[],Tt(t)}function Mr(t){Z||(Z=!0,queueMicrotask(Ut)),ut.push(t)}function Yr(t){z||(z=!0,Rn(Vt)),ot.push(t)}function Sn(){Z&&Ut(),z&&Vt()}const Gt=0,xn=1;let V=!1,G=Gt,Y=!1,H=null,b=!1,ct=!1;function wt(t){b=t}function mt(t){ct=t}let S=[],q=0;let u=null,m=!1;function J(t){u=t}let f=null;function W(t){f=t}let T=null;function On(t){T=t}let p=null,d=0,k=null;function Cn(t){k=t}let Kt=1,X=0,D=!1;function $t(){return++Kt}function U(t){var c;var n=t.f;if(n&R)return!0;if(n&F){var r=t.deps,e=(n&g)!==0;if(r!==null){var s,a,l=(n&$)!==0,_=e&&f!==null&&!D,E=r.length;if(l||_){for(s=0;s<E;s++)a=r[s],(l||!((c=a==null?void 0:a.reactions)!=null&&c.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);l&&(t.f^=$)}for(s=0;s<E;s++)if(a=r[s],U(a)&&Pt(a),a.wv>t.wv)return!0}(!e||f!==null&&!D)&&A(t,v)}return!1}function Nn(t,n){for(var r=n;r!==null;){if(r.f&K)try{r.fn(t);return}catch{r.f^=K}r=r.parent}throw V=!1,t}function bn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&K)===0)}function et(t,n,r,e){if(V){if(r===null&&(V=!1),bn(n))throw t;return}r!==null&&(V=!0);{Nn(t,n);return}}function Zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var a=e[s];a.f&y?Zt(a,n,r+1):n===a&&(r===0?A(a,R):a.f&v&&A(a,F),st(a))}}function zt(t){var pt;var n=p,r=d,e=k,s=u,a=D,l=T,_=i,E=m,c=t.f;p=null,d=0,k=null,u=c&(I|B)?null:t,D=(c&g)!==0&&(!b||(s===null||E)&&t.parent!==null),T=null,Et(t.ctx),m=!1,X++;try{var N=(0,t.fn)(),h=t.deps;if(p!==null){var o;if(Q(t,d),h!==null&&d>0)for(h.length=d+p.length,o=0;o<p.length;o++)h[d+o]=p[o];else t.deps=h=p;if(!D)for(o=d;o<h.length;o++)((pt=h[o]).reactions??(pt.reactions=[])).push(t)}else h!==null&&d<h.length&&(Q(t,d),h.length=d);if(rt()&&k!==null&&!(t.f&(y|F|R)))for(o=0;o<k.length;o++)Zt(k[o],t);return s!==null&&X++,N}finally{p=n,d=r,k=e,u=s,D=a,T=l,Et(_),m=E}}function qn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(p===null||!p.includes(n))&&(A(n,F),n.f&(g|$)||(n.f^=$),qt(n),Q(n,0))}function Q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)qn(t,r[e])}function vt(t){var n=t.f;if(!(n&tt)){A(t,v);var r=f,e=i;f=t;try{n&it?kn(t):Yt(t),Mt(t);var s=zt(t);t.teardown=typeof s=="function"?s:null,t.wv=Kt;var a=t.deps,l}catch(_){et(_,t,r,e||t.ctx)}finally{f=r}}}function Jt(){if(q>1e3){q=0;try{fn()}catch(t){if(H!==null)et(t,H,null);else throw t}}q++}function Wt(t){var n=t.length;if(n!==0){Jt();var r=b;b=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&v||(s.f^=v);var a=[];Xt(s,a),Pn(a)}}finally{b=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(tt|P)))try{U(e)&&(vt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(s){et(s,e,null,e.ctx)}}}function Fn(){if(Y=!1,q>1001)return;const t=S;S=[],Wt(t),Y||(q=0,H=null)}function st(t){G===Gt&&(Y||(Y=!0,queueMicrotask(Fn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|I)){if(!(r&v))return;n.f^=v}}S.push(n)}function Xt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&I)!==0,l=a&&(s&v)!==0,_=r.next;if(!l&&!(s&P))if(s&j){if(a)r.f^=v;else{var E=u;try{u=r,U(r)&&vt(r)}catch(o){et(o,r,null,r.ctx)}finally{u=E}}var c=r.first;if(c!==null){r=c;continue}}else s&gt&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var N=o.next;if(N!==null){r=N;continue t}o=o.parent}}r=_}for(var h=0;h<e.length;h++)c=e[h],n.push(c),Xt(c,n)}function Qt(t){var n=G,r=S;try{Jt();const s=[];G=xn,S=s,Y=!1,Wt(r);var e=t==null?void 0:t();return Sn(),(S.length>0||s.length>0)&&Qt(),q=0,H=null,e}finally{G=n,S=r}}async function Hr(){await Promise.resolve(),Qt()}function Ln(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!m){T!==null&&T.includes(t)&&_n();var e=u.deps;t.rv<X&&(t.rv=X,p===null&&e!==null&&e[d]===t?d++:p===null?p=[t]:p.push(t))}else if(r&&t.deps===null&&t.effects===null){var s=t,a=s.parent;a!==null&&!(a.f&g)&&(s.f^=g)}return r&&(s=t,U(s)&&Pt(s)),t.v}function jr(t){var n=m;try{return m=!0,t()}finally{m=n}}const Mn=-7169;function A(t,n){t.f=t.f&Mn|n}function Br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Yn as $,hn as A,Lr as B,Fr as C,In as D,er as E,jn as F,Mr as G,pn as H,P as I,f as J,nr as K,En as L,rr as M,dn as N,_t as O,sr as P,jt as Q,Sr as R,Dn as S,O as T,ar as U,C as V,Hn as W,Yr as X,zn as Y,rn as Z,nn as _,hr as a,tr as a0,sn as a1,vn as a2,yn as a3,Gn as a4,an as a5,nt as a6,dt as a7,Un as a8,Vn as a9,qr as aA,_r as aB,cr as aC,gr as aD,rt as aE,gn as aF,Er as aG,Lt as aH,Qt as aI,dr as aJ,Hr as aK,Or as aL,yt as aM,Qn as aa,vr as ab,yr as ac,ht as ad,Xn as ae,At as af,Zn as ag,I as ah,B as ai,W as aj,fr as ak,Wn as al,$n as am,or as an,Dt as ao,ir as ap,ur as aq,lr as ar,J as as,u as at,Cr as au,Bn as av,kr as aw,Rt as ax,St as ay,Jn as az,i as b,Ir as c,Nr as d,Tt as e,Dr as f,jr as g,Kn as h,Ln as i,Br as j,bt as k,at as l,An as m,M as n,x as o,pr as p,lt as q,Tr as r,Rr as s,Pr as t,br as u,mr as v,xr as w,Ar as x,wr as y,w as z};
