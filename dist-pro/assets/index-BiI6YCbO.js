import{e as x,c as v,a as r,n as m,m as O,t as E,j as P,H as h,w as _}from"./base-D6XJdCEG.js";import{s as B,f as S,g as $,e as g,I as y,m as T}from"./index-DgobHWvc.js";const b="van-hairline",U=`${b}--right`,Y=`${b}--bottom`,G=`${b}--surround`,V=`${b}--top-bottom`,W="van-haptics-feedback",Z=Symbol("van-form"),L=5;function X(t){const n=B();n&&x(n.proxy,t)}const[D,R]=v("badge"),C={dot:Boolean,max:m,tag:O("div"),color:String,offset:Array,content:m,showZero:E,position:O("top-right")};var F=S({name:D,props:C,setup(t,{slots:n}){const i=()=>{if(n.content)return!0;const{content:e,showZero:o}=t;return P(e)&&e!==""&&(o||e!==0&&e!=="0")},f=()=>{const{dot:e,max:o,content:s}=t;if(!e&&i())return n.content?n.content():P(o)&&h(s)&&+s>+o?`${o}+`:s},u=e=>e.startsWith("-")?e.replace("-",""):`-${e}`,p=$(()=>{const e={background:t.color};if(t.offset){const[o,s]=t.offset,{position:d}=t,[a,l]=d.split("-");n.default?(typeof s=="number"?e[a]=r(a==="top"?s:-s):e[a]=a==="top"?r(s):u(s),typeof o=="number"?e[l]=r(l==="left"?o:-o):e[l]=l==="left"?r(o):u(o)):(e.marginTop=r(s),e.marginLeft=r(o))}return e}),c=()=>{if(i()||t.dot)return g("div",{class:R([t.position,{dot:t.dot,fixed:!!n.default}]),style:p.value},[f()])};return()=>{if(n.default){const{tag:e}=t;return g(e,{class:R("wrapper")},{default:()=>[n.default(),c()]})}return c()}}});const w=_(F),[N,q]=v("config-provider"),A=Symbol(N),[H,I]=v("icon"),M=t=>t==null?void 0:t.includes("/"),j={dot:Boolean,tag:O("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String};var k=S({name:H,props:j,setup(t,{slots:n}){const i=y(A,null),f=$(()=>t.classPrefix||(i==null?void 0:i.iconPrefix)||I());return()=>{const{tag:u,dot:p,name:c,size:e,badge:o,color:s}=t,d=M(c);return g(w,T({dot:p,tag:u,class:[f.value,d?"":`${f.value}-${c}`],style:{color:s,fontSize:r(e)},content:o},t.badgeProps),{default:()=>{var a;return[(a=n.default)==null?void 0:a.call(n),d&&g("img",{class:I("image"),src:c},null)]}})}}});const J=_(k),Q=()=>{var t;const{scopeId:n}=((t=B())==null?void 0:t.vnode)||{};return n?{[n]:""}:null};export{G as B,Z as F,W as H,J as I,L as T,Q as a,V as b,U as c,Y as d,X as u};