import{i}from"./index-Dc08itA2.js";import{_ as l,r,y as d,c as p,a as e,t as a,F as u,o as _,p as m,b as h}from"./index-BiTSbLRa.js";const t=s=>(m("data-v-ec3cc06f"),s=s(),h(),s),f=t(()=>e("div",{id:"map"},null,-1)),v={class:"banner"},y={class:"item"},b=t(()=>e("span",null,"公里",-1)),g={class:"item"},S=t(()=>e("span",null,"用时",-1)),k={class:"item"},B=t(()=>e("span",null,"实时配速",-1)),I={__name:"index",setup(s){const n=r();return d(()=>{i(()=>{AMapLoader.load({key:"0f856426f4d2dae17c00b8949e9730dc",version:"2.0"}).then(o=>{n.value=new o.Map("map",{resizeEnable:!0,zoom:10}),o.plugin("AMap.Geolocation",function(){const c=new o.Geolocation({enableHighAccuracy:!0,timeout:1e4,position:"LB",offset:[10,20],zoomToAccuracy:!0});n.value.addControl(c)})}).catch(o=>{console.error(o)})})}),(o,c)=>(_(),p(u,null,[f,e("div",v,[e("div",y,[e("span",null,a(o.$route.query.km),1),b]),e("div",g,[e("span",null,a(o.$route.query.time),1),S]),e("div",k,[e("span",null,a(o.$route.query.pace),1),B])])],64))}},z=l(I,[["__scopeId","data-v-ec3cc06f"]]);export{z as default};
