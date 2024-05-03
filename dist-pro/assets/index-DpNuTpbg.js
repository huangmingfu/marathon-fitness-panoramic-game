import{c as $,e as G,g as H,n as z,m as S,a as J,w,p as A,u as N,t as F,b as D,d as W,f as X,h as Q}from"./base-wjtTqOzR.js";import{I as Z}from"./index-BNxOJoj6.js";import{r as ee,u as ne,F as te,C as ae}from"./index-CxAFOvSv.js";import{c as le,s as oe,R as ie,a as re}from"./index-uBDmRU0M.js";import{d as t,e as q,f as M,w as K,m as se,_ as ue,u as ce,r as y,c as de,a as O,g,o as me,h as B,i as P,j as x}from"./index-B_uOBndp.js";import{B as fe,u as R,F as ge}from"./use-scope-id-BMty6NaO.js";const[pe,T]=$("loading"),he=Array(12).fill(null).map((e,m)=>t("i",{class:T("line",String(m+1))},null)),_e=t("svg",{class:T("circular"),viewBox:"25 25 50 50"},[t("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),be={size:z,type:S("circular"),color:String,vertical:Boolean,textSize:z,textColor:String};var ve=q({name:pe,props:be,setup(e,{slots:m}){const f=M(()=>G({color:e.color},H(e.size))),r=()=>{const s=e.type==="spinner"?he:_e;return t("span",{class:T("spinner",e.type),style:f.value},[m.icon?m.icon():s])},_=()=>{var s;if(m.default)return t("span",{class:T("text"),style:{fontSize:J(e.textSize),color:(s=e.textColor)!=null?s:e.color}},[m.default()])};return()=>{const{type:s,vertical:h}=e;return t("div",{class:T([s,{vertical:h}]),"aria-live":"polite","aria-busy":!0},[r(),_()])}}});const xe=w(ve),[Ve,C]=$("button"),ke=G({},ee,{tag:S("button"),text:String,icon:String,type:S("default"),size:S("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:S("button"),loadingSize:z,loadingText:String,loadingType:String,iconPosition:S("left")});var Se=q({name:Ve,props:ke,emits:["click"],setup(e,{emit:m,slots:f}){const r=ne(),_=()=>f.loading?f.loading():t(xe,{size:e.loadingSize,type:e.loadingType,class:C("loading")},null),s=()=>{if(e.loading)return _();if(f.icon)return t("div",{class:C("icon")},[f.icon()]);if(e.icon)return t(Z,{name:e.icon,class:C("icon"),classPrefix:e.iconPrefix},null)},h=()=>{let o;if(e.loading?o=e.loadingText:o=f.default?f.default():e.text,o)return t("span",{class:C("text")},[o])},a=()=>{const{color:o,plain:u}=e;if(o){const i={color:u?o:"white"};return u||(i.background=o),o.includes("gradient")?i.border=0:i.borderColor=o,i}},v=o=>{e.loading?A(o):e.disabled||(m("click",o),r())};return()=>{const{tag:o,type:u,size:i,block:d,round:k,plain:V,square:I,loading:n,disabled:l,hairline:p,nativeType:c,iconPosition:b}=e,E=[C([u,i,{plain:V,block:d,round:k,square:I,loading:n,disabled:l,hairline:p}]),{[fe]:p}];return t(o,{type:c,class:E,style:a(),disabled:l,onClick:v},{default:()=>[t("div",{class:C("content")},[b==="left"&&s(),h(),b==="right"&&s()])]})}}});const ye=w(Se),[Be,Pe]=$("form"),Ce={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:z,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:F,showErrorMessage:F,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var ze=q({name:Be,props:Ce,emits:["submit","failed"],setup(e,{emit:m,slots:f}){const{children:r,linkChildren:_}=N(ge),s=n=>n?r.filter(l=>n.includes(l.name)):r,h=n=>new Promise((l,p)=>{const c=[];s(n).reduce((E,Y)=>E.then(()=>{if(!c.length)return Y.validate().then(U=>{U&&c.push(U)})}),Promise.resolve()).then(()=>{c.length?p(c):l()})}),a=n=>new Promise((l,p)=>{const c=s(n);Promise.all(c.map(b=>b.validate())).then(b=>{b=b.filter(Boolean),b.length?p(b):l()})}),v=n=>{const l=r.find(p=>p.name===n);return l?new Promise((p,c)=>{l.validate().then(b=>{b?c(b):p()})}):Promise.reject()},o=n=>typeof n=="string"?v(n):e.validateFirst?h(n):a(n),u=n=>{typeof n=="string"&&(n=[n]),s(n).forEach(p=>{p.resetValidation()})},i=()=>r.reduce((n,l)=>(n[l.name]=l.getValidationStatus(),n),{}),d=(n,l)=>{r.some(p=>p.name===n?(p.$el.scrollIntoView(l),!0):!1)},k=()=>r.reduce((n,l)=>(l.name!==void 0&&(n[l.name]=l.formValue.value),n),{}),V=()=>{const n=k();o().then(()=>m("submit",n)).catch(l=>{m("failed",{values:n,errors:l}),e.scrollToError&&l[0].name&&d(l[0].name)})},I=n=>{A(n),V()};return _({props:e}),R({submit:V,validate:o,getValues:k,scrollToField:d,resetValidation:u,getValidationStatus:i}),()=>{var n;return t("form",{class:Pe(),onSubmit:I},[(n=f.default)==null?void 0:n.call(f)])}}});const Ie=w(ze),[j,Te]=$("checkbox-group"),$e={max:z,shape:S("round"),disabled:Boolean,iconSize:z,direction:String,modelValue:W(),checkedColor:String},L=Symbol(j);var we=q({name:j,props:$e,emits:["change","update:modelValue"],setup(e,{emit:m,slots:f}){const{children:r,linkChildren:_}=N(L),s=a=>m("update:modelValue",a),h=(a={})=>{typeof a=="boolean"&&(a={checked:a});const{checked:v,skipDisabled:o}=a,i=r.filter(d=>d.props.bindGroup?d.props.disabled&&o?d.checked.value:v??!d.checked.value:!1).map(d=>d.name);s(i)};return K(()=>e.modelValue,a=>m("change",a)),R({toggleAll:h}),D(()=>e.modelValue),_({props:e,updateValue:s}),()=>{var a;return t("div",{class:Te([e.direction])},[(a=f.default)==null?void 0:a.call(f)])}}});const[qe,Ee]=$("checkbox"),Fe=G({},le,{shape:String,bindGroup:F,indeterminate:{type:Boolean,default:null}});var Ge=q({name:qe,props:Fe,emits:["change","update:modelValue"],setup(e,{emit:m,slots:f}){const{parent:r}=X(L),_=a=>{const{name:v}=e,{max:o,modelValue:u}=r.props,i=u.slice();if(a)!(o&&i.length>=+o)&&!i.includes(v)&&(i.push(v),e.bindGroup&&r.updateValue(i));else{const d=i.indexOf(v);d!==-1&&(i.splice(d,1),e.bindGroup&&r.updateValue(i))}},s=M(()=>r&&e.bindGroup?r.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),h=(a=!s.value)=>{r&&e.bindGroup?_(a):m("update:modelValue",a),e.indeterminate!==null&&m("change",a)};return K(()=>e.modelValue,a=>{e.indeterminate===null&&m("change",a)}),R({toggle:h,props:e,checked:s}),D(()=>e.modelValue),()=>t(oe,se({bem:Ee,role:"checkbox",parent:r,checked:s.value,onToggle:h},e),Q(f,["default","icon"]))}});const Re=w(Ge),Ue=w(we),Oe={class:"login"},Ae={class:"login-form"},Ne={style:{margin:"16px"}},De={__name:"index",setup(e){const m=ce(),f=y("Inspectorrrrrr"),r=y("Inspectorrrrrr"),_=y(18),s=y("1"),h=y("2"),a=y(["1","3"]);function v(){const o={m:361,km:305.52,runIcon:150};sessionStorage.setItem("hasUser",JSON.stringify(o)),m.back()}return(o,u)=>{const i=te,d=ie,k=re,V=Re,I=Ue,n=ae,l=ye,p=Ie;return me(),de("div",Oe,[O("div",Ae,[t(p,{onSubmit:v},{default:g(()=>[t(n,{inset:""},{default:g(()=>[t(i,{modelValue:B(f),"onUpdate:modelValue":u[0]||(u[0]=c=>P(f)?f.value=c:null),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),t(i,{modelValue:B(r),"onUpdate:modelValue":u[1]||(u[1]=c=>P(r)?r.value=c:null),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"]),t(i,{modelValue:B(_),"onUpdate:modelValue":u[2]||(u[2]=c=>P(_)?_.value=c:null),type:"age",name:"年龄",label:"年龄",placeholder:"年龄",rules:[{required:!0,message:"请填写年龄"}]},null,8,["modelValue"]),t(i,{name:"radio",label:"性别"},{input:g(()=>[t(k,{modelValue:B(s),"onUpdate:modelValue":u[3]||(u[3]=c=>P(s)?s.value=c:null),direction:"horizontal"},{default:g(()=>[t(d,{name:"1"},{default:g(()=>[x("男")]),_:1}),t(d,{name:"2"},{default:g(()=>[x("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{name:"radio2",label:"平时健身习惯"},{input:g(()=>[t(k,{modelValue:B(h),"onUpdate:modelValue":u[4]||(u[4]=c=>P(h)?h.value=c:null),direction:"horizontal"},{default:g(()=>[t(d,{name:"1"},{default:g(()=>[x("从不")]),_:1}),t(d,{name:"2"},{default:g(()=>[x("偶尔")]),_:1}),t(d,{name:"3"},{default:g(()=>[x("经常")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{name:"checkboxGroup",label:"健身方式（多选）"},{input:g(()=>[t(I,{modelValue:B(a),"onUpdate:modelValue":u[5]||(u[5]=c=>P(a)?a.value=c:null),direction:"horizontal"},{default:g(()=>[t(V,{name:"1",shape:"square"},{default:g(()=>[x("跑步")]),_:1}),t(V,{name:"2",shape:"square"},{default:g(()=>[x("游泳")]),_:1}),t(V,{name:"3",shape:"square"},{default:g(()=>[x("瑜伽")]),_:1}),t(V,{name:"4",shape:"square"},{default:g(()=>[x("自行车")]),_:1}),t(V,{name:"5",shape:"square"},{default:g(()=>[x("球类运动")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),O("div",Ne,[t(l,{round:"",block:"",type:"primary","native-type":"submit"},{default:g(()=>[x(" 注册/登录 ")]),_:1})])]),_:1})])])}}},Je=ue(De,[["__scopeId","data-v-c0d3c329"]]);export{Je as default};
