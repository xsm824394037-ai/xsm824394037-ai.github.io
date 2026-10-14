import{A as r}from"./index-C0znTiAL.js";import{_ as d}from"./index-D-OKb4nr.js";import{d as p,f as l,o as f,b as m,ag as _,a2 as u,X as v,a3 as w,Y as x}from"./vue-c2hFjjkA.js";import"./ant-design-vue-CkX7VhhK.js";const g=p({name:"LocationMap"}),k=Object.assign(g,{setup(y){window._AMapSecurityConfig={securityJsCode:"45e64ec59e9253440c6520e12bbe6b01"};const a=l(null);let o;const s=()=>{r.load({key:"40b4f025a29ff254543286fb7f87ab54",version:"2.0",plugins:["AMap.InfoWindow","AMap.Marker"]}).then(e=>{const t={zoom:13,center:[87.573452,43.8464]};o=new e.Map(a.value,t);const n=new e.InfoWindow({content:`
	           <div style="color: #333;">
	             <div style="padding: 5px;font-size: 16px;">小诺信息科技有限公司</div>
	             <div style="padding: 0 5px;">地址: 新疆乌鲁木齐市***号</div>
	             <div style="padding: 0 5px;">电话: 150****0051</div>
	           </div>
	           <a
	             class="ele-text-primary"
	             style="padding: 8px 5px 0;text-decoration: none;display: inline-block;"
	             href="//uri.amap.com/marker?position=87.573452,43.8414&name=小诺信息科技有限公司"
	             target="_blank">到这里去→
	           </a>
	         `});n.open(o,[87.573452,43.8414]);const c=new e.Icon({size:new e.Size(25,34),image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",imageSize:new e.Size(25,34)}),i=new e.Marker({icon:c,position:[114.346084,30.511215],offset:new e.Pixel(-12,-28)});i.setMap(o),i.on("click",()=>{n.open(o)})}).catch(e=>{console.error(e)})};return f(()=>{s()}),m(()=>{o&&o.destroy()}),(e,t)=>{const n=_("a-card");return v(),u(n,{title:"位置标记地图"},{default:w(()=>[x("div",{ref_key:"mapRef",ref:a,class:"location-map"},null,512)]),_:1})}}}),C=d(k,[["__scopeId","data-v-19f83dfd"]]);export{C as default};
