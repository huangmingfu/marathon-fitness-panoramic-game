import{L as k,H as N,f as L,r as p,v as h,A as I,i as j,w as P,s as $,x as M,z as R,y as z,l as V,h as w,M as Y}from"./index-Dky_G1ZX.js";function me(){}const ye=Object.assign,H=typeof window<"u",B=e=>e!==null&&typeof e=="object",C=e=>e!=null,v=e=>typeof e=="function",he=e=>B(e)&&v(e.then)&&v(e.catch),U=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),W=()=>H?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function D(e,n){const t=n.split(".");let u=e;return t.forEach(r=>{var s;u=B(u)&&(s=u[r])!=null?s:""}),u}function we(e,n,t){return n.reduce((u,r)=>((!t||e[r]!==void 0)&&(u[r]=e[r]),u),{})}const ve=e=>Array.isArray(e)?e:[e],Ae=null,q=[Number,String],Be={type:Boolean,default:!0},Ce=e=>({type:e,required:!0}),De=()=>({type:Array,default:()=>[]}),xe=e=>({type:q,default:e}),Fe=e=>({type:String,default:e});var E=typeof window<"u";function be(e){const n=k(e,null);if(n){const t=$(),{link:u,unlink:r,internalChildren:s}=n;u(t),N(()=>r(t));const i=L(()=>s.indexOf(t));return{parent:n,index:i}}return{parent:null,index:p(-1)}}function K(e){const n=[],t=u=>{Array.isArray(u)&&u.forEach(r=>{var s;Y(r)&&(n.push(r),(s=r.component)!=null&&s.subTree&&(n.push(r.component.subTree),t(r.component.subTree.children)),r.children&&t(r.children))})};return t(e),n}var x=(e,n)=>{const t=e.indexOf(n);return t===-1?e.findIndex(u=>n.key!==void 0&&n.key!==null&&u.type===n.type&&u.key===n.key):t};function G(e,n,t){const u=K(e.subTree.children);t.sort((s,i)=>x(u,s.vnode)-x(u,i.vnode));const r=t.map(s=>s.proxy);n.sort((s,i)=>{const c=r.indexOf(s),o=r.indexOf(i);return c-o})}function Te(e){const n=h([]),t=h([]),u=$();return{children:n,linkChildren:s=>{M(e,Object.assign({link:o=>{o.proxy&&(t.push(o),n.push(o.proxy),G(u,n,t))},unlink:o=>{const a=t.indexOf(o);n.splice(a,1),t.splice(a,1)},children:n,internalChildren:t},s))}}}function J(e){let n;R(()=>{e(),z(()=>{n=!0})}),V(()=>{n&&e()})}function X(e,n,t={}){if(!E)return;const{target:u=window,passive:r=!1,capture:s=!1}=t;let i=!1,c;const o=d=>{if(i)return;const l=w(d);l&&!c&&(l.addEventListener(e,n,{capture:s,passive:r}),c=!0)},a=d=>{if(i)return;const l=w(d);l&&c&&(l.removeEventListener(e,n,s),c=!1)};N(()=>a(u)),I(()=>a(u)),J(()=>o(u));let g;return j(u)&&(g=P(u,(d,l)=>{a(l),o(d)})),()=>{g==null||g(),a(u),i=!0}}function Oe(e,n,t={}){if(!E)return;const{eventName:u="click"}=t;X(u,s=>{(Array.isArray(e)?e:[e]).every(o=>{const a=w(o);return a&&!a.contains(s.target)})&&n(s)},{target:document})}var f,m;function Z(){if(!f&&(f=p(0),m=p(0),E)){const e=()=>{f.value=window.innerWidth,m.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:f,height:m}}var Q=/scroll|auto|overlay/i,ee=E?window:void 0;function ne(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function ke(e,n=ee){let t=e;for(;t&&t!==n&&ne(t);){const{overflowY:u}=window.getComputedStyle(t);if(Q.test(u))return t;t=t.parentNode}return n}var te=Symbol("van-field");function Ne(e){const n=k(te,null);n&&!n.customValue.value&&(n.customValue.value=e,P(e,()=>{n.resetValidation(),n.validateWithTrigger("onChange")}))}function F(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function ue(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function re(e){F(window,e),F(document.body,e)}const se=W();function Pe(){se&&re(ue())}const oe=e=>e.stopPropagation();function $e(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&oe(e)}Z();function y(e){if(C(e))return U(e)?`${e}px`:String(e)}function Se(e){if(C(e)){if(Array.isArray(e))return{width:y(e[0]),height:y(e[1])};const n=y(e);return{width:n,height:n}}}function _e(e){const n={};return e!==void 0&&(n.zIndex=+e),n}const ie=/-(\w)/g,S=e=>e.replace(ie,(n,t)=>t.toUpperCase());function b(e,n,t){const u=e.indexOf(n);return u===-1?e:n==="-"&&u!==0?e.slice(0,u):e.slice(0,u+1)+e.slice(u).replace(t,"")}function Le(e,n=!0,t=!0){n?e=b(e,".",/\./g):e=e.split(".")[0],t?e=b(e,"-",/-/g):e=e.replace(/-/,"");const u=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(u,"")}const{hasOwnProperty:ae}=Object.prototype;function ce(e,n,t){const u=n[t];C(u)&&(!ae.call(e,t)||!B(u)?e[t]=u:e[t]=_(Object(e[t]),u))}function _(e,n){return Object.keys(n).forEach(t=>{ce(e,n,t)}),e}var le={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,n)=>`${e}年${n}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const T=p("zh-CN"),O=h({"zh-CN":le}),de={messages(){return O[T.value]},use(e,n){T.value=e,this.add({[e]:n})},add(e={}){_(O,e)}};var fe=de;function pe(e){const n=S(e)+".";return(t,...u)=>{const r=fe.messages(),s=D(r,n+t)||D(r,t);return v(s)?s(...u):s}}function A(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,u)=>t+A(e,u),""):Object.keys(n).reduce((t,u)=>t+(n[u]?A(e,u):""),""):""}function Ee(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${A(n,t)}`)}function Ie(e){const n=`van-${e}`;return[n,Ee(n),pe(n)]}function je(e){return e.install=n=>{const{name:t}=e;t&&(n.component(t,e),n.component(S(`-${t}`),e))},e}export{me as A,J as B,te as C,ke as D,Oe as E,H as F,Ce as G,U as H,_e as I,y as a,Ne as b,Ie as c,De as d,ye as e,be as f,Se as g,we as h,Ae as i,C as j,ue as k,B as l,Fe as m,q as n,he as o,$e as p,v as q,xe as r,re as s,Be as t,Te as u,X as v,je as w,ve as x,Le as y,Pe as z};
