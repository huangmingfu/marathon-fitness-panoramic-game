import{e as S,c as v,a as r,n as m,m as O,t as E,j as P,H as h,w as _}from"./base-cf59494a.js";import{s as $,f as B,g as I,e as g,J as y,m as T}from"./index-cb9c9254.js";const b="van-hairline",U=`${b}--right`,Y=`${b}--bottom`,G=`${b}--surround`,V=`${b}--top-bottom`,W="van-haptics-feedback",Z=Symbol("van-form"),J=5;function L(t){const n=$();n&&S(n.proxy,t)}const[D,R]=v("badge"),C={dot:Boolean,max:m,tag:O("div"),color:String,offset:Array,content:m,showZero:E,position:O("top-right")};var F=B({name:D,props:C,setup(t,{slots:n}){const i=()=>{if(n.content)return!0;const{content:e,showZero:o}=t;return P(e)&&e!==""&&(o||e!==0&&e!=="0")},d=()=>{const{dot:e,max:o,content:s}=t;if(!e&&i())return n.content?n.content():P(o)&&h(s)&&+s>+o?`${o}+`:s},f=e=>e.startsWith("-")?e.replace("-",""):`-${e}`,p=I(()=>{const e={background:t.color};if(t.offset){const[o,s]=t.offset,{position:u}=t,[a,l]=u.split("-");n.default?(typeof s=="number"?e[a]=r(a==="top"?s:-s):e[a]=a==="top"?r(s):f(s),typeof o=="number"?e[l]=r(l==="left"?o:-o):e[l]=l==="left"?r(o):f(o)):(e.marginTop=r(s),e.marginLeft=r(o))}return e}),c=()=>{if(i()||t.dot)return g("div",{class:R([t.position,{dot:t.dot,fixed:!!n.default}]),style:p.value},[d()])};return()=>{if(n.default){const{tag:e}=t;return g(e,{class:R("wrapper")},{default:()=>[n.default(),c()]})}return c()}}});const w=_(F),[N,X]=v("config-provider"),A=Symbol(N),[H,x]=v("icon"),M=t=>t==null?void 0:t.includes("/"),j={dot:Boolean,tag:O("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String};var k=B({name:H,props:j,setup(t,{slots:n}){const i=y(A,null),d=I(()=>t.classPrefix||(i==null?void 0:i.iconPrefix)||x());return()=>{const{tag:f,dot:p,name:c,size:e,badge:o,color:s}=t,u=M(c);return g(w,T({dot:p,tag:f,class:[d.value,u?"":`${d.value}-${c}`],style:{color:s,fontSize:r(e)},content:o},t.badgeProps),{default:()=>{var a;return[(a=n.default)==null?void 0:a.call(n),u&&g("img",{class:x("image"),src:c},null)]}})}}});const q=_(k),Q=()=>{var t;const{scopeId:n}=((t=$())==null?void 0:t.vnode)||{};return n?{[n]:""}:null};export{G as B,Z as F,W as H,q as I,J as T,Q as a,V as b,U as c,Y as d,L as u};
