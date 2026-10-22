import{f as p,w as ut,b as Vl,W as S,a4 as A,X as _,Y as e,q as Tt,ac as Fl,ae as Wl,a6 as m,o as ps,n as xe,ag as Qe,k as ae,ay as ia,F as $e,a9 as at,$ as j,_ as kt,aw as fs,u as le,a3 as Ct,am as ra,ap as ca,e as ua,c as Kt,a2 as ns,H as is,G as il,B as _t,A as da}from"./vue-c2hFjjkA.js";import{_ as va,a as pa,b as fa,c as ma,d as ya,e as ha}from"./robot-ico-BJNv0NfC.js";import{_ as Ul,t as Ae,D as ga}from"./index-D-OKb4nr.js";import{j as ba,_ as wa,a as _a,b as Ta,c as ka,r as Sa,l as La,g as rs,d as cs,f as Ea,i as xa,h as Na,e as Da}from"./定位点-DSVhqhMV.js";import{g as Yl}from"./index-rlrCZw8D.js";import{p as ms}from"./pnInspectionRecordsApi-DmffqgHM.js";import{p as Hl}from"./pipelineBaseApi-fkEkmHzR.js";import{i as Ca}from"./iotDeviceApi-BOtlkYAg.js";import{c as st}from"./ant-design-vue-CkX7VhhK.js";import{i as wl}from"./echarts-BDp8xlpC.js";import{i as us}from"./iotDeviceDataApi-E50QWGe2.js";import{i as Ia}from"./iotGatewayApi-B-XeXwBn.js";import{p as Ra}from"./pnInspectionPlanApi-BgQW8aOi.js";import{p as ds}from"./pipelineWorkOrderApi-CAKSVsUm.js";import{H as ct}from"./hls-CJm5oz2q.js";import{p as Oa,a as Ma,m as Pa,b as Aa}from"./zhywOn-D8tGSlIx.js";function Bl(P,T,V={}){const F={type:"Feature"};return(V.id===0||V.id)&&(F.id=V.id),V.bbox&&(F.bbox=V.bbox),F.properties=T||{},F.geometry=P,F}function $a(P,T,V={}){if(!P)throw new Error("coordinates is required");if(!Array.isArray(P))throw new Error("coordinates must be an Array");if(P.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!vs(P[0])||!vs(P[1]))throw new Error("coordinates must contain numbers");return Bl({type:"Point",coordinates:P},T,V)}function Fa(P,T,V={}){if(P.length<2)throw new Error("coordinates must be an array of two or more positions");return Bl({type:"LineString",coordinates:P},T,V)}function Ya(P,T={}){const V={type:"FeatureCollection"};return T.id&&(V.id=T.id),T.bbox&&(V.bbox=T.bbox),V.features=P,V}function Wa(P,T,V={}){return Bl({type:"MultiLineString",coordinates:P},T,V)}function vs(P){return!isNaN(P)&&P!==null&&!Array.isArray(P)}function Ha(P,T={}){const V=ba(P),F=(V[0]+V[2])/2,k=(V[1]+V[3])/2;return $a([F,k],T.properties,T)}var Va=Ha;function ql(P){return P.type==="Feature"?P.geometry:P}function Ua(P,T={}){const V=ql(P);switch(!T.properties&&P.type==="Feature"&&(T.properties=P.properties),V.type){case"Polygon":return Ba(V,T);case"MultiPolygon":return qa(V,T);default:throw new Error("invalid poly")}}function Ba(P,T={}){const F=ql(P).coordinates,k=T.properties?T.properties:P.type==="Feature"?P.properties:{};return ys(F,k)}function qa(P,T={}){const F=ql(P).coordinates,k=T.properties?T.properties:P.type==="Feature"?P.properties:{},L=[];return F.forEach(Q=>{L.push(ys(Q,k))}),Ya(L)}function ys(P,T){return P.length>1?Wa(P,T):Fa(P[0],T)}var ja=Ua;const Ga={key:0,class:"terrain-analysis-panel"},za={class:"panel-body"},Ja={class:"control-group"},Xa={class:"control-item"},Qa={class:"control-item"},Za={class:"control-item"},Ka={class:"control-group"},eo={class:"slider-container"},to={class:"slider-value"},lo={class:"control-group"},so={class:"button-group"},ao={__name:"TerrainAnalysis",props:{map:{type:Object,default:null},viewer:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible","ready"],setup(P,{expose:T,emit:V}){var Pe;const F=window.mars3d,k=(Pe=window.mars3d)==null?void 0:Pe.Cesium,L=P,Q=V,ee=p(!1),C=p(!1),f=p(!0),de=p(50),oe=p(!1),W=p({lng:114.80735,lat:30.057694,alt:-30,rotation:310}),be=p({lat:30.057694,lng:114.80735,alt:495.12,heading:0,pitch:-59.3,roll:0});let E=null,Z=null,I=null;const G=()=>{if(!L.map)return null;if(L.map.graphicLayer)return L.map.graphicLayer;if(!Z)try{Z=new F.layer.GraphicLayer({name:"地形分析绘制图层"}),L.map.addLayer(Z)}catch(R){return console.error("初始化图形绘制图层失败:",R),null}return Z},we=(R=50)=>{if(!L.map){console.warn("地图未初始化，无法创建地形分析");return}try{G(),E&&(L.map.removeThing(E),E=null),E=new F.thing.TerrainPlanClip({positions:[],exact:!0,stylePit:{diffHeight:R,image:new URL("/assets/%E5%A2%99%E5%A3%811-CIAZxU-V.png",import.meta.url).href,imageBottom:new URL("/assets/%E5%A2%99%E5%BA%951-CBJGYT5q.png",import.meta.url).href,stRotationDegree:45,splitNum:50}}),L.map.addThing(E),E.enabled=ee.value,E.clipOutSide=C.value,L.viewer&&L.viewer.scene&&(L.viewer.scene.globe.depthTestAgainstTerrain=f.value),Q("ready",E)}catch(w){console.error("初始化地形挖地分析失败:",w)}};ut(ee,R=>{var w;E&&(E.enabled=R,(w=L.viewer)!=null&&w.scene&&L.viewer.scene.requestRender())}),ut(C,R=>{E&&(E.clipOutSide=R)}),ut(f,R=>{L.viewer&&L.viewer.scene&&(L.viewer.scene.globe.depthTestAgainstTerrain=R)});const Ne=()=>{E&&(E.diffHeight=de.value)},i=async()=>{var R;if(!L.map){console.warn("地图未初始化");return}try{E||we(de.value);const w=G();if(!w){console.warn("无法获取图形绘制图层");return}const J=(await w.startDraw({type:"rectangle",style:{color:"#007be6",opacity:.8,outline:!1}})).getOutlinePositions(!1);w.clear(),E&&(E.positions=J,E.enabled=!0,ee.value=!0),(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender()}catch(w){console.error("绘制矩形失败:",w)}},De=async()=>{var R;if(!L.map){console.warn("地图未初始化");return}try{E||we(de.value);const w=G();if(!w){console.warn("无法获取图形绘制图层");return}const J=(await w.startDraw({type:"polygon",style:{color:"#007be6",opacity:.5}})).positionsShow;w.clear(),E&&(E.positions=J,E.enabled=!0,ee.value=!0),(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender()}catch(w){console.error("绘制多边形失败:",w)}},H=async()=>{var R;if(!L.map){console.warn("地图未初始化");return}try{E||we(de.value),E&&E.clear();const w=G();if(!w){console.warn("无法获取图形绘制图层");return}const J=(await w.startDraw({type:"polyline",maxPointNum:2,style:{color:"#007be6",opacity:.8,outline:!1}})).positionsShow;w.clear(),E&&(E.positions=J,E.enabled=!0,ee.value=!0),(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender()}catch(w){console.error("绘制线失败:",w)}},dt=()=>{var R;try{E&&(E.clear(),ee.value=!1);const w=G();w&&w.clear(),(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender()}catch(w){console.error("清除挖地区域失败:",w)}},ve=()=>{var R;try{E&&L.map&&(L.map.removeThing(E),E=null),Z&&L.map&&(L.map.removeLayer(Z),Z=null),ee.value=!1,(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender()}catch(w){console.error("移除地形分析失败:",w)}},Ce=()=>{var R,w;if(!L.map){console.warn("地图未初始化");return}try{I&&_e(),I=new F.layer.TilesetLayer({name:"地下管网模型",url:"https://data.mars3d.cn/3dtiles/max-piping/tileset.json",maximumScreenSpaceError:2,position:{lng:W.value.lng,lat:W.value.lat,alt:W.value.alt},rotation:{z:W.value.rotation},center:{lat:be.value.lat,lng:be.value.lng,alt:be.value.alt,heading:be.value.heading,pitch:be.value.pitch,roll:be.value.roll},flyTo:!0}),L.map.addLayer(I),oe.value=!0;try{const $=L.map.layers||(L.map.getLayers?L.map.getLayers():[]);Array.isArray($)&&($.forEach(J=>{const x=(J==null?void 0:J.name)||"";x==="firstlevel_3D"&&(J.show=!1),x==="污水片区图层"&&(J.show=!1)}),(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender())}catch($){console.warn("隐藏相关图层失败:",$)}try{E||we(de.value);const $=W.value.lng,J=W.value.lat,x=300,Fe=400,ie=111e3,qe=111e3*Math.cos(J*Math.PI/180),Ie=x/2/qe,Te=Fe/2/ie,ot=[[-Ie,-Te],[Ie,-Te],[Ie,Te],[-Ie,Te]],K=((W.value.rotation||0)+-103)*Math.PI/180,se=Math.cos(K),fe=Math.sin(K),je=Ye=>{const ke=Ye[0],vt=Ye[1],We=ke*se-vt*fe,Ge=ke*fe+vt*se;return[$+We,J+Ge]},St=ot.map(je);E.positions=St,E.enabled=!0,ee.value=!0,(w=L.viewer)!=null&&w.scene&&L.viewer.scene.requestRender()}catch($){console.warn("自动绘制矩形区域失败:",$)}}catch($){console.error("加载3D Tiles模型失败:",$),oe.value=!1}},_e=()=>{var R,w;try{if(I&&L.map){L.map.removeLayer(I),I=null,oe.value=!1,(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender();try{const $=L.map.layers||(L.map.getLayers?L.map.getLayers():[]);Array.isArray($)&&($.forEach(J=>{const x=(J==null?void 0:J.name)||"";(x==="firstlevel_3D"||x==="污水片区图层")&&(J.show=!0)}),(w=L.viewer)!=null&&w.scene&&L.viewer.scene.requestRender())}catch($){console.warn("恢复相关图层显示失败:",$)}}}catch($){console.error("移除3D Tiles模型失败:",$)}},Oe=()=>{var R;if(!oe.value||!I||!L.map){console.warn("模型未加载，无法应用偏移量");return}try{if(I.position?(I.position.lng=W.value.lng,I.position.lat=W.value.lat,I.position.alt=W.value.alt):I.position={lng:W.value.lng,lat:W.value.lat,alt:W.value.alt},I.rotation?I.rotation.z=W.value.rotation:I.rotation={z:W.value.rotation},I.tileset){const w=I.tileset,$=k.Cartesian3.fromDegrees(W.value.lng,W.value.lat,W.value.alt),J=k.Math.toRadians(W.value.rotation),x=k.Matrix3.fromRotationZ(J),Fe=k.Matrix4.fromTranslation($),ie=k.Matrix4.fromRotationTranslation(x,k.Cartesian3.ZERO),qe=k.Matrix4.multiply(Fe,ie,new k.Matrix4);w.root.transform=qe}(R=L.viewer)!=null&&R.scene&&L.viewer.scene.requestRender()}catch(w){console.error("应用模型偏移量失败:",w)}},Me=()=>{Q("update:visible",!1)};return ut(()=>L.map,R=>{}),Vl(()=>{if(E&&L.map){try{L.map.removeThing(E)}catch(R){console.warn("清理地形分析失败:",R)}E=null}if(Z&&L.map){try{L.map.removeLayer(Z)}catch(R){console.warn("清理图形绘制图层失败:",R)}Z=null}if(I&&L.map){try{L.map.removeLayer(I)}catch(R){console.warn("清理3D Tiles图层失败:",R)}I=null}}),T({initTerrainPlanClip:we,drawRectangle:i,drawPolygon:De,drawLine:H,clearClip:dt,removeAnalysis:ve,handleHeightChange:Ne,loadTileset:Ce,removeTileset:_e,applyModelOffset:Oe,terrainPlanClip:()=>E,tilesetLayer:()=>I}),(R,w)=>P.visible?(_(),S("div",Ga,[e("div",{class:"panel-header"},[w[4]||(w[4]=e("div",{class:"panel-title"},"地形分析",-1)),e("button",{class:"panel-close",onClick:Me},"×")]),e("div",za,[e("div",Ja,[e("div",Xa,[e("label",null,[Tt(e("input",{type:"checkbox","onUpdate:modelValue":w[0]||(w[0]=$=>ee.value=$)},null,512),[[Fl,ee.value]]),w[5]||(w[5]=e("span",null,"启用挖地",-1))])]),e("div",Qa,[e("label",null,[Tt(e("input",{type:"checkbox","onUpdate:modelValue":w[1]||(w[1]=$=>C.value=$)},null,512),[[Fl,C.value]]),w[6]||(w[6]=e("span",null,"外切割",-1))])]),e("div",Za,[e("label",null,[Tt(e("input",{type:"checkbox","onUpdate:modelValue":w[2]||(w[2]=$=>f.value=$)},null,512),[[Fl,f.value]]),w[7]||(w[7]=e("span",null,"深度检测",-1))])])]),e("div",Ka,[w[8]||(w[8]=e("label",{class:"control-label"},"挖地深度（米）",-1)),e("div",eo,[Tt(e("input",{type:"range","onUpdate:modelValue":w[3]||(w[3]=$=>de.value=$),min:"0",max:"200",step:"1",onInput:Ne,class:"slider"},null,544),[[Wl,de.value,void 0,{number:!0}]]),e("span",to,m(de.value),1)])]),e("div",{class:"control-group"},[e("div",{class:"button-group"},[e("button",{class:"action-btn",onClick:i},"绘制矩形"),e("button",{class:"action-btn",onClick:De},"绘制多边形"),e("button",{class:"action-btn",onClick:H},"绘制线")])]),e("div",lo,[e("div",so,[e("button",{class:"action-btn",onClick:Ce},"加载3D模型"),oe.value?(_(),S("button",{key:0,class:"action-btn danger",onClick:_e},"移除3D模型")):A("",!0)])]),e("div",{class:"control-group"},[e("div",{class:"button-group"},[e("button",{class:"action-btn danger",onClick:dt},"清除区域"),e("button",{class:"action-btn danger",onClick:ve},"移除分析")])])])])):A("",!0)}},oo=Ul(ao,[["__scopeId","data-v-80c998f9"]]),no={class:"cesium-map-wrap"},io={class:"map-controls"},ro=["value"],co={class:"pop-content"},uo={class:"pop-header"},vo={class:"title"},po={class:"pop-body fm-body"},fo={class:"fm-left"},mo={class:"fm-k"},yo={class:"fm-v"},ho={key:1,class:"fm-empty"},go={class:"fm-right"},bo={class:"fm-img"},wo=["src"],_o={class:"pop-content"},To={class:"pop-body well-body"},ko={class:"well-info"},So={class:"well-row"},Lo={class:"well-value"},Eo={class:"well-row"},xo={class:"well-value"},No={class:"well-row"},Do={class:"well-value"},Co={class:"well-row"},Io={class:"well-value"},Ro={class:"well-row"},Oo={class:"well-value"},Mo={class:"well-row"},Po={class:"well-value"},Ao={class:"well-row"},$o={class:"well-value"},Fo={class:"pop-content"},Yo={class:"pop-body water-plant-body"},Wo={class:"dis-flex"},Ho={class:"water-plant-image"},Vo={class:"pop-content"},Uo={class:"pop-header device-header"},Bo={class:"title device-title-text"},qo={class:"pop-body device-detail-content"},jo={class:"device-info-grid"},Go={class:"info-item"},zo={class:"info-value"},Jo={class:"info-item"},Xo={class:"info-value"},Qo={class:"info-item"},Zo={class:"info-item"},Ko={class:"info-value"},en={key:0,class:"info-item"},tn={class:"info-value"},ln={key:1,class:"info-item"},sn={class:"info-value"},an={class:"history-table-wrapper"},on={class:"history-table"},nn={__name:"index",props:{geojsonData:{type:[Object,String],default:null},defaultBasemap:{type:String,default:"tdt_img"},projectId:{type:String,default:"1972559187937542145"},autoLoad:{type:Boolean,default:!0}},emits:["ready","deviceClick","3DModeChanged","pipelineClick","layerControlVisible","pipelineHistory"],setup(P,{expose:T,emit:V}){const F=window.mars3d,k=window.mars3d.Cesium,L=P,Q=V,ee=p(null);let C=null,f=null;const de=p("tdt_img"),oe=p(!1),W=p({visible:!1,x:0,y:0,data:{}}),be=p({title:"管线信息"}),E=p({visible:!1,x:0,y:0,data:{}}),Z=p({visible:!1,x:0,y:0,data:{}}),I=p({visible:!1,x:0,y:0,data:{}}),G=p({visible:!1,loading:!1,code:"",list:[],total:0}),we=p(null),Ne=p(null),i=p(null),De=p(null),H=new Map,dt=p(!1),ve=p(null),Ce=p(null),_e=p(null),Oe=p(null),Me=p(null),Pe=p(null),R=p(null),w=p(null),$=p(null),J=p(null),x=p(null),Fe=p(null);let ie=null;const qe=p([]),Ie=p([]),Te={color:"#00FFFF",width:5,opacity:1},ot={"0-一级主干管":"firstlevel",雨水管线:"YSLINE",污水管线:"WSLINE"};let pe=null,K=null,se=null,fe=[],je=[],St=null;const Ye=p(!1),ke=p(null),vt=p([{key:"tdt_img",label:"天地图影像"},{key:"tdt_vec",label:"天地图矢量"},{key:"tdt_ter",label:"天地图地形"},{key:"tdt_cia",label:"天地图影像标注"},{key:"tdt_cva",label:"天地图矢量标注"},{key:"gaode_img",label:"高德影像"},{key:"gaode_vec",label:"高德矢量"}]),We=()=>{if(!ee.value||!F){console.error("地图容器或mars3d库未加载");return}try{if(F&&F.Map){const s={scene:{center:{lat:30.055049,lng:114.813256,alt:12e4,heading:0,pitch:-45},fxaa:!0,requestRenderMode:!0,maximumRenderTimeChange:1/0,globe:{depthTestAgainstTerrain:!0}},control:{baseLayerPicker:!1,animation:!1,timeline:!1,vrButton:!1,fullscreenButton:!1,geocoder:!1,homeButton:!0,infoBox:!1,sceneModePicker:!0,selectionIndicator:!1,navigationHelpButton:!1},terrain:{show:!0,url:"http://data.mars3d.cn/terrain"}};C=new F.Map(ee.value,s),f=C.viewer}else k.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMzNkYWY1NS0yNjkxLTRkOTktODNmNi01OTg3NTA5Y2Y4N2QiLCJpZCI6MjQ4Mjk3LCJpYXQiOjE3Mjg5OTY0Nzd9.WLVYfg1-3NyRAXFywfzC_PtCVE0uOybqx6A_Rqr1XCE",f=new k.Viewer(ee.value,{terrain:new k.EllipsoidTerrain,animation:!1,selectionIndicator:!1,baseLayerPicker:!1,geocoder:!1,timeline:!1,fullscreenButton:!1,vrButton:!1,navigationHelpButton:!1,sceneModePicker:!0,homeButton:!0,sceneMode:k.SceneMode.MORPHING,infoBox:!1}),C={viewer:f,destroy:()=>{f&&f.destroy()}};Re(de.value),C&&C.on&&F&&F.EventType?(C.on(F.EventType.click,It),C.on(F.EventType.load,Ge)):f&&(f.cesiumWidget.screenSpaceEventHandler.setInputAction(s=>{It(s)},k.ScreenSpaceEventType.LEFT_CLICK),f.scene.globe.tileLoadProgressEvent.addEventListener(()=>{f.scene.globe.tilesLoaded&&Ge()}),f.scene.globe.tilesLoaded&&setTimeout(()=>Ge(),100))}catch(s){console.error("mars3d地图初始化失败:",s)}},Ge=()=>{L.autoLoad&&Le()},It=s=>{W.value.visible&&cl(),E.value.visible&&At(),Z.value.visible&&ft(),I.value.visible&&He()},Re=s=>{if(!(!C||!f))try{const a="98c7c70d08173e70129f5a65c52e236b";f.imageryLayers.removeAll();let r=null,c=null;switch(s){case"tdt_img":r=new k.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/img_w/wmts?tk=${a}`,layer:"img",style:"default",format:"tiles",tileMatrixSetID:"w",subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:16,enablePickFeatures:!1}),c=new k.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/cia_w/wmts?tk=${a}`,layer:"cia",style:"default",format:"tiles",tileMatrixSetID:"w",subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:16,enablePickFeatures:!1});break;case"tdt_vec":r=new k.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/vec_w/wmts?tk=${a}`,layer:"vec",style:"default",format:"tiles",tileMatrixSetID:"w",subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:16,enablePickFeatures:!1}),c=new k.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/cva_w/wmts?tk=${a}`,layer:"cva",style:"default",format:"tiles",tileMatrixSetID:"w",subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:16,enablePickFeatures:!1});break;case"tdt_ter":r=new k.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/ter_w/wmts?tk=${a}`,layer:"ter",style:"default",format:"tiles",tileMatrixSetID:"w",subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:16,enablePickFeatures:!1});break;case"tdt_cia":r=new k.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/cia_w/wmts?tk=${a}`,layer:"cia",style:"default",format:"tiles",tileMatrixSetID:"w",subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:16,enablePickFeatures:!1});break;case"tdt_cva":r=new k.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/cva_w/wmts?tk=${a}`,layer:"cva",style:"default",format:"tiles",tileMatrixSetID:"w",subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:16,enablePickFeatures:!1});break;case"gaode_img":r=new k.UrlTemplateImageryProvider({url:"https://webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",minimumLevel:3,maximumLevel:18,subdomains:["01","02","03","04"]}),c=new k.UrlTemplateImageryProvider({url:"https://webst{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",minimumLevel:3,maximumLevel:18,subdomains:["01","02","03","04"]});break;case"gaode_vec":r=new k.UrlTemplateImageryProvider({url:"https://webrd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",minimumLevel:3,maximumLevel:18,subdomains:["01","02","03","04"]});break;default:return}r&&f.imageryLayers.addImageryProvider(r),c&&f.imageryLayers.addImageryProvider(c),de.value=s}catch(a){console.error("切换底图失败:",a)}},ze=(s,a,r=1)=>{if(!s||!s.features||!C)return null;try{const c=new F.layer.GraphicLayer({name:`${a}_3D`});C.addLayer(c);const v=M=>he(M),u=Math.abs(8)*r,d=1;let n=0;return s.features.forEach(M=>{try{if(n%d!==0){n++;return}if(n++,M.geometry.type!=="LineString"&&M.geometry.type!=="MultiLineString")return;let g=[];M.geometry.type==="LineString"?g=[M.geometry.coordinates]:M.geometry.type==="MultiLineString"&&(g=M.geometry.coordinates),g.forEach(B=>{if(!B||B.length<2)return;const ne=B.map(te=>{if(Array.isArray(te)&&te.length>=2){const tt=parseFloat(te[0]),Ee=parseFloat(te[1]),Jt=-8;return isNaN(tt)||isNaN(Ee)?null:[tt,Ee,Jt]}return null}).filter(te=>te!==null);if(ne.length<2)return;const U=M.properties||{},Je=(U==null?void 0:U.LineWt)||(U==null?void 0:U.width)||(U==null?void 0:U.diameter)||2,et=new F.graphic.PolylineVolumePrimitive({positions:ne,style:{shape:"circle",radius:Math.max(Je*.3,.5),cornerType:k.CornerType.BEVELED,materialType:F.MaterialType.LineFlow,materialOptions:{color:v(a),opacity:.7,image:"https://data.mars3d.cn/img/textures/fence-line.png",speed:u,repeat_x:3}},attr:U});c.addGraphic(et)})}catch(g){console.warn(`创建 3D 图形失败 (${a}):`,g,M)}}),c.on(F.EventType.click,M=>{M&&M.stopPropagation&&M.stopPropagation(),Vt(M,a)}),console.log(`3D图层创建完成 (${a}):`,{featuresCount:s.features.length,layer3D:c}),c}catch(c){return console.error(`创建 3D 图层失败 (${a}):`,c),null}},Ze=s=>{if(!s||!Array.isArray(s)||s.length===0){console.warn("路线ID为空，清除所有高亮"),el();return}el();const a=new Map;s.forEach(v=>{const u=String(v),d=u.split("CODE_");if(d.length===2){let n=d[0];const M=d[1];n=ot[n]||n,a.has(n)||a.set(n,new Set),a.get(n).add(M)}else console.warn(`路线ID格式不正确: ${u}`)});const r=oe.value,c=r?{firstlevel:Me.value,WSLINE:Pe.value,YSLINE:R.value,YSANNEXE:w.value}:{firstlevel:ve.value,WSLINE:Ce.value,YSLINE:_e.value,YSANNEXE:Oe.value};a.forEach((v,u)=>{const d=c[u];if(!(!d||!d.show))try{nt(d,v,u,r)}catch(n){console.warn(`高亮图层图形失败 (${u}):`,n)}}),f&&f.scene&&f.scene.requestRender()},nt=(s,a,r,c)=>{!(s!=null&&s.graphics)||!Array.isArray(s.graphics)||s.graphics.forEach(v=>{me(v,a,r,c)})},me=(s,a,r,c)=>{var d;if(!(s!=null&&s.setStyle))return!1;const v=s.attr||s.properties||{},u=String(v.OBJECTID||v.objectid||"");if(!u||!a.has(u))return!1;try{if(!s._originalStyle){const n=s.style||{};s._originalStyle={color:n.color,width:n.width,opacity:n.opacity,materialOptions:n.materialOptions?{...n.materialOptions}:void 0}}return c?s.setStyle({...s.style,materialOptions:{...(d=s.style)==null?void 0:d.materialOptions,color:Te.color,opacity:Te.opacity}}):s.setStyle({...s.style,color:Te.color,width:Te.width,opacity:Te.opacity}),Ie.value.includes(s)||Ie.value.push(s),!0}catch(n){return console.warn(`触发图形高亮失败 (${r}, objectId: ${u}):`,n),!1}},el=()=>{Ie.value.length!==0&&(Ie.value.forEach(s=>{if(s)try{s._originalStyle&&(s.setStyle&&typeof s.setStyle=="function"?s.setStyle(s._originalStyle):s.style&&Object.assign(s.style,s._originalStyle),delete s._originalStyle)}catch(a){console.warn("清除高亮失败:",a)}}),Ie.value=[],f!=null&&f.scene&&f.scene.requestRender())},Rt=()=>{const s=[],a=oe.value,r=a?{firstlevel:Me.value,WSLINE:Pe.value,YSLINE:R.value,YSANNEXE:w.value}:{firstlevel:ve.value,WSLINE:Ce.value,YSLINE:_e.value,YSANNEXE:Oe.value};return Ie.value.forEach(c=>{var v,u;if(c)try{const d=c.attr||c.properties||{},n=String(d.OBJECTID||d.objectid||""),M=d.Layer||d.layer||"";let g=[];if(a&&c.positions&&Array.isArray(c.positions))g=c.positions.map(B=>Array.isArray(B)&&B.length>=2?F.LngLatPoint.toCartesian3(B[0],B[1],B[2]||0):B).filter(Boolean);else if(!a&&c.entity&&c.entity.polyline){const B=c.entity.polyline;B.positions&&(B.positions.getValue?g=B.positions.getValue():Array.isArray(B.positions)&&(g=B.positions))}if(g.length===0){const B=r[M];if(B&&B.graphics&&Array.isArray(B.graphics)){const ne=B.graphics.find(U=>{const Je=U.attr||U.properties||{};return String(Je.OBJECTID||Je.objectid||"")===n});if(ne){if(ne.positions&&Array.isArray(ne.positions))g=ne.positions.map(U=>Array.isArray(U)&&U.length>=2?F.LngLatPoint.toCartesian3(U[0],U[1],U[2]||0):U).filter(Boolean);else if((u=(v=ne.entity)==null?void 0:v.polyline)!=null&&u.positions){const U=ne.entity.polyline.positions;U.getValue?g=U.getValue():Array.isArray(U)&&(g=U)}}}}g.length>0&&s.push({id:`${M}_CODE_${n}`,objectId:n,layerName:M,positions:g,props:d})}catch(d){console.warn("获取高亮路线信息失败:",d)}}),s},Ot=()=>{const s=[],a=oe.value,r=a?{firstlevel:Me.value,WSLINE:Pe.value,YSLINE:R.value,YSANNEXE:w.value}:{firstlevel:ve.value,WSLINE:Ce.value,YSLINE:_e.value,YSANNEXE:Oe.value};return Object.values(r).forEach(c=>{!c||!c.graphics||!Array.isArray(c.graphics)||c.graphics.forEach(v=>{var u;try{let d=[];if(a)v.positions&&Array.isArray(v.positions)&&(d=v.positions.map(n=>{if(Array.isArray(n)&&n.length>=2)try{return F.LngLatPoint.toCartesian3(n[0],n[1],n[2]||0)}catch{return k.Cartesian3.fromDegrees(n[0],n[1],n[2]||0)}return n}).filter(Boolean));else if(v.entity&&v.entity.polyline&&v.entity.polyline.positions){const n=v.entity.polyline.positions;n.getValue?d=n.getValue():Array.isArray(n)&&(d=n)}d.length>0&&s.push({id:v.id||((u=v.attr)==null?void 0:u.OBJECTID)||"",positions:d})}catch(d){console.warn("获取管线路径失败:",d)}})}),s},Lt=s=>{if(!(!C||!f))try{pe&&Mt(),K||(K=new F.layer.GraphicLayer({name:"robotLayer"}),C.addLayer(K)),pe=new F.graphic.BillboardEntity({position:[s.longitude,s.latitude,0],style:{image:Sa,width:60,height:78,scale:1,verticalOrigin:k.VerticalOrigin.BOTTOM,heightReference:k.HeightReference.CLAMP_TO_GROUND,disableDepthTestDistance:Number.POSITIVE_INFINITY,scaleByDistance:new k.NearFarScalar(500,1.5,5e3,.8),label:{text:"🤖 巡检机器人",font:"16pt sans-serif",fillColor:k.Color.WHITE,outlineColor:k.Color.BLUE,outlineWidth:3,style:k.LabelStyle.FILL_AND_OUTLINE,pixelOffset:new k.Cartesian2(0,-100),verticalOrigin:k.VerticalOrigin.TOP,scaleByDistance:new k.NearFarScalar(500,1,5e3,.6),heightReference:k.HeightReference.CLAMP_TO_GROUND,disableDepthTestDistance:Number.POSITIVE_INFINITY}},flyTo:!1,attr:{type:"robot",position:s}}),K.addGraphic(pe),f!=null&&f.scene&&f.scene.requestRender()}catch(a){console.error("添加机器人标记失败:",a)}},_l=(s,a=null)=>{if(!(!pe||!s||!f))try{pe.position?pe.position=[s.longitude,s.latitude,0]:pe.setPosition&&pe.setPosition([s.longitude,s.latitude,0]),a&&a!==St&&(fe.length>0&&(je.push([...fe]),fe=[]),St=a);const r=k.Cartesian3.fromDegrees(s.longitude,s.latitude,0);fe.push(r),fe.length>200&&fe.shift(),rl(),f!=null&&f.scene&&f.scene.requestRender()}catch(r){console.error("更新机器人位置失败:",r)}},rl=(s=!0)=>{if(K)try{if(se&&Array.isArray(se)?se.forEach(r=>{r&&K.removeGraphic(r)}):se&&K.removeGraphic(se),se=[],!s)return;const a=[...je];fe.length>1&&a.push(fe),a.forEach(r=>{if(r.length<2)return;const c=r.map(u=>{const d=k.Cartographic.fromCartesian(u);return[k.Math.toDegrees(d.longitude),k.Math.toDegrees(d.latitude),0]}),v=new F.graphic.PolylineEntity({positions:c,style:{width:3,color:"#ffff00",opacity:.8,clampToGround:!0}});K.addGraphic(v),se.push(v)}),f!=null&&f.scene&&f.scene.requestRender()}catch(a){console.error("更新机器人轨迹失败:",a)}},Mt=()=>{try{pe&&(K&&K.removeGraphic(pe),pe=null)}catch(s){console.error("移除机器人标记失败:",s)}},Pt=()=>{try{se&&(Array.isArray(se)?se.forEach(s=>{s&&K&&K.removeGraphic(s)}):K&&K.removeGraphic(se),se=[]),fe=[],je=[],St=null,K&&(K.graphics||[]).forEach(a=>{a!==pe&&K.removeGraphic(a)}),f!=null&&f.scene&&f.scene.requestRender()}catch(s){console.error("清除机器人轨迹失败:",s)}},pt=()=>{if(!(!f||!C)){if(oe.value=!oe.value,oe.value)C&&C.scene&&(C.scene.mode=3,f&&f.scene&&(f.scene.requestRenderMode=!1,f.scene.globe&&(f.scene.globe.depthTestAgainstTerrain=!1))),f&&f.scene&&(ie&&clearInterval(ie),ie=setInterval(()=>{f&&f.scene&&oe.value&&f.scene.requestRender()},16)),ve.value&&$.value&&(ve.value.show=!1,Me.value?Me.value.show=!0:Me.value=ze($.value,"firstlevel",-1)),Ce.value&&J.value&&(Ce.value.show=!1,Pe.value&&(Pe.value.show=!0)),_e.value&&x.value&&(_e.value.show=!1,R.value&&(R.value.show=!0)),Oe.value&&Fe.value&&(Oe.value.show=!1,w.value&&(w.value.show=!0)),Ne.value&&(Ne.value.show=!1),De.value&&(De.value.show=!1);else{if(C&&C.scene){C.scene.mode=2,f&&f.scene&&(f.scene.requestRenderMode=!0,f.scene.globe&&(f.scene.globe.depthTestAgainstTerrain=!0));try{Ye.value=!1,ke!=null&&ke.value&&(typeof ke.value.removeTileset=="function"&&ke.value.removeTileset(),typeof ke.value.clearClip=="function"&&ke.value.clearClip(),typeof ke.value.removeAnalysis=="function"&&ke.value.removeAnalysis())}catch(s){console.warn("清理地形分析失败:",s)}}ie&&(clearInterval(ie),ie=null),Me.value&&(Me.value.show=!1),Pe.value&&(Pe.value.show=!1),R.value&&(R.value.show=!1),w.value&&(w.value.show=!1),ve.value&&(ve.value.show=!0)}f&&f.scene&&f.scene.requestRender(),Q("layerControlVisible",!oe.value),Q("3DModeChanged",oe.value)}},cl=()=>{W.value.visible=!1,W.value.data={}},At=()=>{E.value.visible=!1,E.value.data={}},ft=()=>{Z.value.visible=!1,Z.value.data={}},He=()=>{I.value.visible=!1,I.value.data={}},$t=s=>({valve:"阀门",pump:"水泵",pressure:"压力传感器",flow:"流量计",temperature:"温度传感器",level:"液位计",quality:"水质监测仪",meter:"水位计",hydrant:"消防栓",manhole:"检查井"})[s]||s,Ft=s=>s==="online"||s==="0"||s===0||s===!0?"在线":s==="offline"||s==="1"||s===1||s===!1?"离线":s==="2"||s===2?"故障":s==="3"||s===3?"维护中":"未知",tl=s=>s==="online"||s==="0"||s===0||s===!0?"normal":s==="offline"||s==="1"||s===1||s===!1?"offline":s==="2"||s===2?"error":s==="3"||s===3?"warning":"",Yt=()=>{const s=I.value.data;if(!s||!s.id&&!s.deviceId){console.warn("设备信息不完整，无法查看历史记录",s);return}!s.id&&s.deviceId&&(s.id=s.deviceId),He(),Q("deviceClick",{device:s,event:{action:"showHistory"},showHistory:!0})},Et=(s,a)=>a==null?"未知":typeof a=="number"?a.toFixed(2):String(a),Ve=s=>{if(!s)return"/img/pipeline/default-pipe.svg";const a=(s==null?void 0:s.Caizhi)||(s==null?void 0:s.Material)||(s==null?void 0:s.caizhi)||(s==null?void 0:s.material)||(s==null?void 0:s.材质)||"",r=String(a||"").toLowerCase();return r.includes("hdpe")||r.includes("pe")?"/img/pipeline/hdpe-pipe.svg":r.includes("pvc")?"/img/pipeline/pvc-pipe.svg":r.includes("铸铁")||r.includes("cast-iron")||r.includes("castiron")?"/img/pipeline/cast-iron-pipe.svg":r.includes("混凝土")||r.includes("concrete")?"/img/pipeline/concrete-pipe.svg":r.includes("钢")||r.includes("steel")?"/img/pipeline/steel-pipe.svg":"/img/pipeline/default-pipe.svg"},Se=s=>{console.warn("图片加载失败:",s.target.src),s.target.src="/img/pipeline/default-pipe.svg",s.target.onerror=()=>{s.target.style.display="none"}},Le=async()=>{if(!(!f||dt.value)){dt.value=!0;try{await Promise.all([ye(["firstlevel"],"firstlevel"),ye(["WSLINE"],"WSLINE"),ye(["YSLINE"],"YSLINE"),Wt(),yt()])}catch(s){console.error("加载数据失败:",s)}finally{dt.value=!1}}},Ke=s=>{if(!s)return null;if(typeof s=="string")try{return JSON.parse(s)}catch(a){return console.error("解析GeoJSON字符串失败:",a),null}return typeof s=="object"?s:null},ye=async(s=[],a,r=!1)=>{if(C)try{let c=null;if(L.geojsonData&&(c=Ke(L.geojsonData),c&&c.features)){ce(c,"pipeline");return}const v={projectId:L.projectId};s&&s.length>0&&(v.pipelineTypes=s);const u=await Hl.getPipeLineGeoJsonByProjectId(v);if(!u){console.warn("未获取到管线数据");return}const d=u&&u.data!==void 0?u.data:u;if(c=Ke(d),!c||!c.features){console.warn("管线数据格式不正确",c);return}ce(c,a,!0)}catch(c){console.error("加载管线数据失败:",c)}},mt=async()=>{if(C)try{const s="/shpData/主干井终/主干井终.shp";if(typeof Yl<"u"&&Yl)try{const a=window.location.origin,r=s.startsWith("http")?s:`${a}${s}`,c=await Yl(r,{encoding:"gbk"});c&&ce(c,"well")}catch(a){console.warn("加载SHP管井数据失败:",a)}else console.warn("shpjs不可用，跳过管井数据加载")}catch(s){console.error("加载管井数据失败:",s)}},xt=async(s="all")=>{if(!C)return;const a={wsq1:"/JSON/污水区/一级污水区.geojson",wsq2:"/JSON/污水区/二级污水区.geojson"},r=s==="all"?Object.keys(a):a[s]?[s]:[];if(r.length===0){console.warn(`未知的污水片区类型: ${s}`);return}const c=u=>{if(!u)return;const d=H.get(u);d&&(C.removeLayer(d),H.delete(u))},v=async u=>{const d=a[u],n=window.location.origin,M=d.startsWith("http")?d:`${n}${d}`;try{c(u);const g=await fetch(M,{cache:"no-store"});if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const B=Ke(await g.json());if(!B){console.warn(`[污水区] ${u} GeoJSON 解析失败`,B);return}const U=(te=>{if(!te)return null;if(Array.isArray(te)){const tt=te.filter(Ee=>Ee&&Ee.type==="Feature");return tt.length>0?{type:"FeatureCollection",features:tt}:null}return te.type==="FeatureCollection"&&Array.isArray(te.features)?te:te.type==="Feature"?{type:"FeatureCollection",features:[te]}:null})(B);if(!U){console.warn(`[污水区] ${u} GeoJSON 不包含有效要素`,B);return}const Je=U.features||[];if(Je.length===0){console.warn(`[污水区] ${u} GeoJSON 无有效 features`,U);return}const et=Je.map((te,tt)=>{const Ee=(te==null?void 0:te.properties)||{},Jt=Ht(Ee);return te&&Ee&&(te.properties={...Ee,_labelText:Jt||Ee.name||Ee.名称||""}),`${tt+1}:${Jt||"[未取到名称]"}`.trim()});ce(U,u)}catch(g){console.warn(`加载污水片区GeoJSON数据失败: ${d}`,g)}};await Promise.all(r.map(u=>v(u)))},Wt=async()=>{if(C)try{const s="/JSON/水厂.geojson",a=window.location.origin,r=s.startsWith("http")?s:`${a}${s}`,c=await fetch(r);if(!c.ok)throw new Error(`HTTP error! status: ${c.status}`);const v=await c.json();let u=null;if(v&&v.features)try{const d=v.features.flatMap(n=>{var ne;if(!n.geometry||n.geometry.type!=="Polygon"&&n.geometry.type!=="MultiPolygon")return[];const M=ja(n);M.properties={...n.properties||{},_style:{type:"polyline",color:he("firstlevel"),width:2,opacity:.8,clampToGround:!0}};const g=Va(n),B=[M];if((ne=g==null?void 0:g.geometry)!=null&&ne.coordinates){const[U,Je]=g.geometry.coordinates;B.push({type:"Feature",geometry:{type:"Point",coordinates:[U,Je]},properties:{...n.properties||{},_style:{type:"billboard",image:La,width:180,height:89,scale:1,verticalOrigin:1,clampToGround:!0}}})}return B});d.length>0&&(u={type:"FeatureCollection",features:d})}catch(d){console.warn("转换水厂数据失败:",d)}ce(u||v,"waterPlant")}catch(s){console.warn("加载水厂数据失败:",s)}},yt=async(s=["all"],a=!1)=>{if(C)try{const r=await Ca.getDeviceListForBigScreen({deviceTypes:s});let c=[];if(Array.isArray(r)?c=r:r&&r.data&&(c=Array.isArray(r.data)?r.data:r.data.list||[]),!c||c.length===0){console.warn("未获取到设备数据");return}const v=c.filter(u=>{const d=u.positionY,n=u.positionX,M=d&&n&&d!==0&&n!==0&&!isNaN(d)&&!isNaN(n);return M||console.warn("设备缺少坐标信息:",{deviceName:u.deviceName||u.name,keys:Object.keys(u),positionX:u.positionX,positionY:u.positionY,longitude:u.longitude,latitude:u.latitude,lng:u.lng,lat:u.lat}),M}).map(u=>{let d=parseFloat(u.positionY),n=parseFloat(u.positionX);if(isNaN(d)||isNaN(n))return console.warn("设备坐标无效:",u.deviceName,{lon:d,lat:n,positionX:u.positionX,positionY:u.positionY}),null;d<n&&d<100&&n>100&&([d,n]=[n,d]),d<73&&n>73&&([d,n]=[n,d]);let M=Ue(u.status,u.deviceType);return{type:"Feature",geometry:{type:"Point",coordinates:[d,n]},properties:{...u,_style:{type:"billboard",image:M,width:44,height:54,verticalOrigin:k.VerticalOrigin.BOTTOM,disableDepthTestDistance:Number.POSITIVE_INFINITY,heightReference:k.HeightReference.CLAMP_TO_GROUND,scaleByDistance:new k.NearFarScalar(1e3,1,1e4,.5),label:{text:u.deviceName||"设备",font:"14pt Source Han Sans SC",fillColor:k.Color.WHITE,showBackground:!0,backgroundColor:k.Color.fromCssColorString("#0A041F").withAlpha(.5),style:k.LabelStyle.FILL,verticalOrigin:k.VerticalOrigin.BOTTOM,pixelOffset:new k.Cartesian2(0,-54),disableDepthTestDistance:Number.POSITIVE_INFINITY,scaleByDistance:new k.NearFarScalar(1e3,1,1e4,.5)},flyTo:a}}}});v.length>0?ce({type:"FeatureCollection",features:v},"device"):console.warn("设备数据转换后没有有效的要素")}catch(r){console.error("加载设备数据失败:",r)}},Ue=(s,a)=>{const r=s==="online"||s==="0"||s===0||s===!0;switch(a){case"flow":return r?Na:Da;case"meter":return r?rs:cs;case"quality":return r?Ea:xa;default:return r?rs:cs}},ce=(s,a="pipeline",r=!1)=>{if(!(!C||!s))try{if(typeof s=="string"&&(s=Ke(s)),!s){console.warn("GeoJSON数据无效");return}let c={},v="";switch(a){case"firstlevel":v="一级主干管",c={name:v,data:s,symbol:{type:"polyline",styleOptions:{color:he(a),width:4,opacity:.85,clampToGround:!0,highlight:{type:"click",color:"#00FFFF",width:5}}},styleCallback:n=>({color:he(a),width:(n==null?void 0:n.LineWt)||(n==null?void 0:n.width)||(n==null?void 0:n.diameter)||2,opacity:.85})};break;case"WSLINE":v="污水管",c={name:v,data:s,symbol:{type:"polyline",styleOptions:{color:he(a),width:3,opacity:.85,clampToGround:!0,highlight:{type:"click",color:"#00FFFF",width:5}}},flyTo:r,flyToOptions:r?{radius:300,scale:.6,pitch:-60,heading:0}:void 0,styleCallback:n=>({width:(n==null?void 0:n.LineWt)||(n==null?void 0:n.width)||(n==null?void 0:n.diameter)||2})};break;case"YSLINE":v="雨水管",c={name:v,data:s,symbol:{type:"polyline",styleOptions:{color:he(a),width:3,opacity:.85,clampToGround:!0,highlight:{type:"click",color:"#00FFFF",width:5}}},styleCallback:n=>({width:(n==null?void 0:n.LineWt)||(n==null?void 0:n.width)||(n==null?void 0:n.diameter)||2})};break;case"YSANNEXE":v="雨水沟渠管",c={name:v,data:s,symbol:{type:"polyline",styleOptions:{color:he(a),width:3,opacity:.85,clampToGround:!0,highlight:{type:"click",color:"#ff0000",width:5}}},styleCallback:n=>({width:(n==null?void 0:n.LineWt)||(n==null?void 0:n.width)||(n==null?void 0:n.diameter)||2})};break;case"well":v="管井图层",c={name:v,data:s,symbol:{type:"point",styleOptions:{pixelSize:3.5,color:"#FFFF00",outlineColor:"#000000",outlineWidth:1,clampToGround:!0,disableDepthTestDistance:Number.POSITIVE_INFINITY}},popup:"{name}",flyTo:r};break;case"waterPlant":v="水厂图层",c={name:v,data:s,symbol:{styleOptions:{clampToGround:!0},callback:(n,M)=>{if(n&&n._style){const g={...n._style};return g.type==="billboard"&&g.verticalOrigin===1&&(g.verticalOrigin=k.VerticalOrigin.BOTTOM),g}return M}}};break;case"device":v="设备图层",c={name:v,data:s,symbol:{styleOptions:{clampToGround:!0},callback:(n,M)=>{if(n&&n._style){const g={...n._style};return g.type==="billboard"&&g.verticalOrigin===1&&(g.verticalOrigin=k.VerticalOrigin.BOTTOM),g.type==="billboard"&&(g.disableDepthTestDistance=Number.POSITIVE_INFINITY,g.heightReference=k.HeightReference.CLAMP_TO_GROUND,g.label&&(g.label.disableDepthTestDistance=Number.POSITIVE_INFINITY)),g.label&&g.label.verticalOrigin===1&&(g.label.verticalOrigin=k.VerticalOrigin.BOTTOM),g}return{type:"point",pixelSize:10,color:"#ff0000",outlineColor:"#ffffff",outlineWidth:2,clampToGround:!0}}}};break;case"sewageArea":case"wsq1":case"wsq2":v="污水片区图层";const d=ul(a);c={name:v,data:s,symbol:{type:"polygon",styleOptions:{color:d.fill,opacity:d.opacity,outline:!0,outlineColor:d.outline,outlineWidth:d.outlineWidth,clampToGround:!0,label:{text:"{_labelText}",font:"16pt Source Han Sans SC",color:"＃FF4500",outline:!1,outlineColor:"rgba(0, 0, 0, 1)",outlineWidth:1,showBackground:!1,backgroundColor:"rgba(0, 0, 0, 0.45)",backgroundPadding:new k.Cartesian2(12,8),scaleByDistance:new k.NearFarScalar(800,1.6,15e3,.6),disableDepthTestDistance:Number.POSITIVE_INFINITY,translucencyByDistance:new k.NearFarScalar(800,1,15e3,1)}},styleCallback:n=>{const M=(n==null?void 0:n._labelText)||Ht(n);return{label:{text:M,show:!!M,scale:M?1:0}}}},popup:n=>{var g;const M=Ht((n==null?void 0:n.attr)||((g=n==null?void 0:n.graphic)==null?void 0:g.attr)||{});return M?`<div class="popup-title">${M}</div>`:""},flyTo:r};break;default:return}const u=new F.layer.GeoJsonLayer(c);if(u.on(F.EventType.click,d=>{d&&d.stopPropagation&&d.stopPropagation(),Vt(d,a)}),C.addLayer(u),a==="sewageArea"||a==="wsq1"||a==="wsq2"){const d=a==="sewageArea"?"sewageArea":a;H.set(d,u)}if(f&&f.scene){f.scene.requestRender();try{const d=f.scene.globe;if(d&&d.tileLoadProgressEvent){const n=()=>{f&&f.scene&&d.tilesLoaded&&(f.scene.requestRender(),d.tileLoadProgressEvent.removeEventListener(n))};d.tileLoadProgressEvent.addEventListener(n)}setTimeout(()=>{var n;return(n=f==null?void 0:f.scene)==null?void 0:n.requestRender()},100)}catch(d){console.warn("追加渲染触发失败:",d)}}switch(a){case"firstlevel":ve.value=u,$.value=s;break;case"WSLINE":Ce.value=u,J.value=s;break;case"YSLINE":_e.value=u,x.value=s;break;case"YSANNEXE":Oe.value=u,Fe.value=s;break;case"well":Ne.value=u;break;case"waterPlant":i.value=u;break;case"device":De.value=u;break}}catch(c){console.error(`加载${a}数据失败:`,c)}},he=s=>{switch(s){case"firstlevel":return"#ff6b6b";case"WSLINE":return"#9D8FA9";case"YSLINE":return"#0066FF";case"YSANNEXE":return"#45b7d1";case"sewageArea":return"#10C827";case"wsq1":return"#FE5DF5";case"wsq2":return"#FF8C00";default:return"#60a5fa"}},ul=s=>{const a={sewageArea:{fill:"#8dd3c7",outline:"#42948e",opacity:.2,outlineWidth:2},wsq1:{fill:"#F5E74F",outline:"#F5E74F",opacity:.6,outlineWidth:4},wsq2:{fill:"#48D1CC",outline:"#008080",opacity:.6,outlineWidth:4}},r=he(s),c=a[s]||a.sewageArea;return{fill:c.fill||r,outline:c.outline||r,opacity:c.opacity??.25,outlineWidth:c.outlineWidth??2}},Ht=(s={})=>{const a=[s,s==null?void 0:s.properties,s==null?void 0:s.Properties,s==null?void 0:s.attrs,s==null?void 0:s.ATTRS,s==null?void 0:s.attributes],r=["name","NAME","Name","名称","片区名称","分区名称","分区名","区名","QYNAME","TITLE","title","FNAME","fname"];for(const c of a)if(c&&typeof c=="object")for(const v of r){const u=c[v];if(u!=null&&u!=="")return String(u)}return""},XFS={lay:null,gs:[],img:null,cur:null,hov:null},
Xfl=()=>{try{if(!C||!F)return null;
  if(!XFS.lay||XFS.lay.isDestroyed){XFS.lay=new F.layer.GraphicLayer({name:"管线流向特效"});C.addLayer(XFS.lay)}
  if(!XFS.hooked){XFS.hooked=1;
    try{window.__xPipeFxClear=Xfclear}catch(e){}
    try{C.on(F.EventType.click,(e)=>{const g=e&&e.graphic;if(!g){Xfclear();return}if(XFS.hov===g||(XFS.gs||[]).indexOf(g)>=0)Xfclear()})}catch(e){}}
  return XFS.lay}catch(e){return null}},
Xfclear=()=>{try{
  try{if(XFS.cur&&XFS.cur.stopFlicker)XFS.cur.stopFlicker()}catch(e){}
  XFS.cur=null;
  if(XFS.hov){try{XFS.hov.remove(!0)}catch(e){}XFS.hov=null}
  (XFS.gs||[]).forEach((g)=>{try{g&&g.remove&&g.remove(!0)}catch(e){}});
  XFS.gs=[]}catch(e){}},
Xfarrow=()=>{if(XFS.img)return XFS.img;try{
  const cv=document.createElement("canvas");cv.width=64;cv.height=64;const x=cv.getContext("2d");
  x.clearRect(0,0,64,64);x.fillStyle="#ffffff";x.beginPath();
  x.moveTo(6,22),x.lineTo(36,22),x.lineTo(36,8),x.lineTo(58,32),x.lineTo(36,56),x.lineTo(36,42),x.lineTo(6,42),x.closePath(),x.fill();
  XFS.img=cv.toDataURL("image/png")}catch(e){XFS.img=""}return XFS.img},
Xfpts=(g0)=>{const out=[];try{
  let ps=(g0&&(g0.positionsShow||g0.positions))||null;
  if((!ps||ps.length===0)&&g0&&g0.entity&&g0.entity.polyline&&g0.entity.polyline.positions){
    const t=g0.entity.polyline.positions;ps=t.getValue?t.getValue(new k.JulianDate()):t}
  if(!ps||!ps.length)return out;
  ps.forEach((p)=>{if(!p)return;let lng,lat,alt=0;
    if(Array.isArray(p)){lng=Number(p[0]),lat=Number(p[1]),alt=Number(p[2]||0)}
    else if(p&&p.lng!==void 0&&p.lat!==void 0){lng=Number(p.lng),lat=Number(p.lat),alt=Number(p.alt||0)}
    else if(p&&p.longitude!==void 0&&p.latitude!==void 0&&p.x===void 0){lng=k.Math.toDegrees(p.longitude),lat=k.Math.toDegrees(p.latitude),alt=p.height||0}
    else if(p&&typeof p.x==="number"){const c2=k.Cartographic.fromCartesian(p);if(!c2)return;
      lng=k.Math.toDegrees(c2.longitude),lat=k.Math.toDegrees(c2.latitude),alt=c2.height||0}
    else return;
    if(isFinite(lng)&&isFinite(lat))out.push([lng,lat,alt])});
}catch(e){}return out},
Xfdis=(a,b)=>{const R=6378137,r=Math.PI/180,dl=(b[1]-a[1])*r,dg=(b[0]-a[0])*r;
  const s1=Math.sin(dl/2),s2=Math.sin(dg/2),h=s1*s1+Math.cos(a[1]*r)*Math.cos(b[1]*r)*s2*s2;
  return 2*R*Math.asin(Math.min(1,Math.sqrt(h)))},
XfxFx=(g0)=>{try{
  if(!g0||!F||!C)return;
  // 再次点击同一段 = 取消特效
  if(XFS.cur===g0){Xfclear();return}
  const lay=Xfl();if(!lay)return;
  Xfclear();
  const pts=Xfpts(g0);if(pts.length<2)return;
  let len=0;for(let i=1;i<pts.length;i++)len+=Xfdis(pts[i-1],pts[i]);
  const rx=Math.max(2,Math.min(120,Math.round(len/40)));
  XFS.cur=g0;
  // ① 闪烁：调用 mars3d 原生 startFlicker（跟随原始几何，最贴合）
  try{if(g0.startFlicker)g0.startFlicker({color:"#00ffff",maxAlpha:.95,time:3200,setp:26})}catch(e){}
  // ② 叠加一条呼吸高亮线，保证任何图层类型都能看到闪烁
  try{
    const hl=new F.graphic.PolylineEntity({positions:pts,
      style:{width:9,color:"#00ffff",opacity:.85,clampToGround:!0,}});
    lay.addGraphic(hl);XFS.hov=hl;XFS.gs.push(hl);
    const cp=new k.CallbackProperty(()=>{const t=(Date.now()%1200)/1200;
      return k.Color.fromCssColorString("#00ffff").withAlpha(.12+.88*Math.abs(Math.sin(t*Math.PI)))},!1);
    if(hl.entity&&hl.entity.polyline)hl.entity.polyline.material=new k.ColorMaterialProperty(cp);
  }catch(e){}
  // ③ 流向箭头：起点 → 终点（沿管线持续流动）
  try{
    const fl=new F.graphic.PolylineEntity({positions:pts,style:{width:7,clampToGround:!0,
      materialType:F.MaterialType.LineFlow,
      materialOptions:{image:Xfarrow(),color:"#7cf9ff",repeat_x:rx,speed:8,axisY:!0}}});
    lay.addGraphic(fl);XFS.gs.push(fl);
  }catch(e){}
  // ④ 起点 / 终点标记（圆点 + 描边标签）
  const A=pts[0],B=pts[pts.length-1];
  const mk=(pt,txt,col)=>{
    try{const p1=new F.graphic.PointEntity({position:pt,
      style:{pixelSize:13,color:col,outlineColor:"#ffffff",outlineWidth:2,opacity:1,}});
      lay.addGraphic(p1);XFS.gs.push(p1)}catch(e){}
    try{const lb=new F.graphic.LabelEntity({position:pt,
      style:{text:txt,font_size:16,font_family:"微软雅黑",font_weight:"bold",
        color:"#ffffff",outline:!0,outlineColor:"#0b1a2b",outlineWidth:3,pixelOffsetY:-28,
        horizontalOrigin:k.HorizontalOrigin.CENTER,verticalOrigin:k.VerticalOrigin.BOTTOM}});
      lay.addGraphic(lb);XFS.gs.push(lb)}catch(e){}
  };
  mk(A,"起点","#00ff88");mk(B,"终点","#ff8800");
  f&&f.scene&&f.scene.requestRender();
}catch(e){try{console.warn("[XfxFx]",e)}catch(_){}}},
// 只读调试出口（不产生任何界面变化）：便于自动化验证与手动清除特效
Xhook=(window.__xPipeFx=XfxFx,window.__xPipeFxClear=Xfclear,window.__xPipeFxMap=()=>C,window.__xPipeFxState=()=>XFS,1),
Vt=(s,a)=>{if(!s||!s.graphic){console.warn("点击事件或图形不存在",s);return}const r=s.graphic,c=(XfxFx(r),r.attr||r.properties||{}),__xps=(window.__xPipeSel={id:String((c&&(c._pid||c.id||c.OBJECTID))||""),name:String((c&&(c.name||c.pipelineName||c.pipelineCode))||""),type:String((c&&(c.pipelineType||c.Layer))||""),raw:c||{}}),__xrt=(function(){try{if(typeof I!=="undefined"&&I.value==="monitoring"){if(typeof XM!=="undefined")XM.selPipe=__xps.id;if(typeof Xrender==="function")Xrender()}}catch(e){}return 0})();let v=0,u=0;if(s.windowPosition?(v=s.windowPosition.x,u=s.windowPosition.y):s.startPosition?(v=s.startPosition.x||0,u=s.startPosition.y||0):s.pixel?(v=s.pixel.x||0,u=s.pixel.y||0):s.originalEvent&&(v=s.originalEvent.clientX||s.originalEvent.x||0,u=s.originalEvent.clientY||s.originalEvent.y||0),v===0&&u===0&&f&&r.position)try{const d=k.SceneTransforms.worldToWindowCoordinates(f.scene,r.position);d&&(v=d.x,u=d.y)}catch(d){console.warn("坐标转换失败:",d)}if(a==="pipeline"||a==="firstlevel"||a==="WSLINE"||a==="YSLINE"||a==="YSANNEXE")kl({clientX:v,clientY:u,x:v,y:u},c);else if(a==="well"){if(r.position){const d=k.Cartographic.fromCartesian(r.position);Ll({clientX:v,clientY:u},c,k.Math.toDegrees(d.longitude),k.Math.toDegrees(d.latitude))}}else if(a==="waterPlant"){if(r.position){const d=k.Cartographic.fromCartesian(r.position);El({clientX:v,clientY:u},c,k.Math.toDegrees(d.longitude),k.Math.toDegrees(d.latitude))}}else if(a==="device"){if(r.position){const d=k.Cartographic.fromCartesian(r.position);jt({clientX:v,clientY:u},c,k.Math.toDegrees(d.longitude),k.Math.toDegrees(d.latitude))}Q("deviceClick",{device:c,event:s})}},dl={WSLINE:"污水管线",YSLINE:"雨水管线",YSANNEXE:"雨水附属","0-一级主干管":"一级主干管",firstlevel:"一级主干管"},vl=new Map([["objectid","要素ID"],["join_count","关联数"],["layer","图层"],["color","颜色"],["elevation","高程"],["linewt","线宽"],["linewidth","线宽"],["caizhi","材质"],["material","材质"],["status","状态"],["shape_leng","长度"],["shape_len","长度"],["length","长度"],["diameter","管径"],["口径","口径"],["类型","类型"]]),pl=s=>String(s||"").toLowerCase(),ll=s=>vl.get(pl(s))||s,sl=s=>dl[String(s||"")]||s,Ut=(s,a=2)=>{const r=Number(s);return Number.isFinite(r)?Number(r.toFixed(a)):s},fl=(s,a)=>{const r=pl(s);return r==="layer"?sl(a):r==="shape_leng"||r==="shape_len"||r==="length"||r==="elevation"?Ut(a,3):r==="linewt"||r==="linewidth"?Ut(a,0):r==="status"?{0:"正常",1:"异常"}[String(a)]||a:r==="caizhi"?a.replace("?","Ø"):a},Tl=s=>{if(!s||typeof s!="object")return{};const a={},r=["OBJECTID","Layer","Color","Elevation","LineWt","Caizhi","Status","Shape_Leng"],c=new Set;for(const v of r)s[v]!==void 0&&(a[ll(v)]=fl(v,s[v]),c.add(v));for(const[v,u]of Object.entries(s))c.has(v)||(a[ll(v)]=fl(v,u));return a},Bt=(s,a,r,c=20)=>{let v=s.clientX||s.x||0,u=s.clientY||s.y||0;const d=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight;return v=Math.max(c,Math.min(v,d-a-c)),u=Math.max(c,Math.min(u,n-r-c)),{x:v,y:u}},kl=(s,a)=>{if(!s||!a){console.warn("showPipelineInfo: 参数无效",{event:s,properties:a});return}const r=Tl(a),c=Object.keys(r).length>0?r:a,{x:v,y:u}=Bt(s,480,400),d={...c};W.value={visible:!0,x:v,y:u,data:d&&typeof d=="object"?{...d}:{}};const n=sl(a.Layer||a.layer||""),M=a.OBJECTID||"未命名";be.value.title="管线编号：CODE_"+M+(n?" - "+n:" - 管线信息"),Q("pipelineClick",{properties:a,event:s})},qt=async()=>{G.value.loading=!0;try{const s={current:1,size:1e3,pipelineCode:"CODE_"+G.value.code},a=await ms.pnInspectionRecordsPage(s);G.value.list=(a==null?void 0:a.records)||[],G.value.total=(a==null?void 0:a.total)||0}finally{G.value.loading=!1}},Sl=(s={})=>{const a=["OBJECTID","Code","要素ID"];let r="";for(const c of a)if(s&&s[c]!==void 0&&s[c]!==null&&String(s[c]).trim()!==""){r=String(s[c]).trim();break}G.value.code=r,G.value.visible=!0,qt(),Q("pipelineHistory",{code:r,properties:s})},Ll=(s,a,r,c)=>{if(!s||!a)return;const{x:v,y:u}=Bt(s,450,500),d=a,n={...d,wellId:d.TextString||d.name||d.OBJECTID||"未知",coordinates:d.coordinates||[d.X||r,d.Y||c],area:d.Shape_Area||d.area||0,perimeter:d.Shape_Leng||d.perimeter||0,sourceName:d.sourceName||"主干井终",elevation:d.GC||d.elevation||0,wellDepth:d.JDBG||d.wellDepth||0,wellType:d.JSCZ||"钢筋混凝土",wellDiameter:d.FSW||"圆形检修井",x:d.X||r||0,y:d.Y||c||0};E.value.data=n,E.value.x=v,E.value.y=u,E.value.visible=!0},El=(s,a,r,c)=>{if(!s||!a)return;const{x:v,y:u}=Bt(s,500,400);Z.value.data={...a,longitude:r,latitude:c},Z.value.x=v,Z.value.y=u,Z.value.visible=!0},jt=(s,a,r,c)=>{if(!s||!a)return;const{x:v,y:u}=Bt(s,500,400);I.value.data={...a,longitude:r,latitude:c},I.value.x=v,I.value.y=u,I.value.visible=!0},xl=()=>{if(C){if(we.value&&(C.removeLayer(we.value),we.value=null),Ne.value&&(C.removeLayer(Ne.value),Ne.value=null),i.value&&(C.removeLayer(i.value),i.value=null),H.size>0){for(const s of H.values())s&&C.removeLayer(s);H.clear()}De.value&&(C.removeLayer(De.value),De.value=null),qe.value=[],f&&f.scene&&f.scene.requestRender()}},Gt=async(s,a=[])=>{if(C)try{if(s==="layer"){if(ve.value&&(C.removeLayer(ve.value),ve.value=null),Ce.value&&(C.removeLayer(Ce.value),Ce.value=null),_e.value&&(C.removeLayer(_e.value),_e.value=null),Oe.value&&(C.removeLayer(Oe.value),Oe.value=null),f&&f.scene&&f.scene.requestRender(),a.length===0)return;if(a.includes("layers")&&a.length===1){await Promise.all([ye(["firstlevel"],"firstlevel"),ye(["WSLINE"],"WSLINE"),ye(["YSLINE"],"YSLINE"),ye(["YSANNEXE"],"YSANNEXE")]),f&&f.scene&&f.scene.requestRender();return}const r=a.filter(c=>c!=="layers");if(r.length>0){for(const c of r)c==="firstlevel"?await ye(["firstlevel"],"firstlevel",!0):c==="WSLINE"?await ye(["WSLINE"],"WSLINE",!0):c==="YSLINE"?await ye(["YSLINE"],"YSLINE",!0):c==="YSANNEXE"&&await ye(["YSANNEXE"],"YSANNEXE",!0);f&&f.scene&&f.scene.requestRender()}}else if(s==="device"){if(De.value&&(C.removeLayer(De.value),De.value=null),qe.value=[],f&&f.scene&&f.scene.requestRender(),a.length===0)return;if(a.includes("devices")&&a.length===1){await yt(["all"],!0),f&&f.scene&&f.scene.requestRender();return}const r=a.filter(c=>c!=="devices");r.length>0&&(await yt(r,!0),f&&f.scene&&f.scene.requestRender())}else if(s==="well"){if(Ne.value&&(C.removeLayer(Ne.value),Ne.value=null),f&&f.scene&&f.scene.requestRender(),a.length===0)return;a.includes("well")&&(await mt(),f&&f.scene&&f.scene.requestRender())}else if(s==="wsq"){if(H.size>0){for(const c of H.values())c&&C.removeLayer(c);H.clear()}const r=a.filter(c=>c.startsWith("wsq"));if(r.length===0){f&&f.scene&&f.scene.requestRender();return}r.includes("wsq")?await xt("all"):(r.includes("wsq1")&&await xt("wsq1"),r.includes("wsq2")&&await xt("wsq2")),f&&f.scene&&f.scene.requestRender()}}catch(r){console.error("图层控制失败:",r)}};ut(()=>L.defaultBasemap,s=>{s&&s!==de.value&&Re(s)}),ut(()=>L.geojsonData,s=>{if(s&&C){const a=Ke(s);a&&a.features&&(we.value&&(C.removeLayer(we.value),we.value=null,f&&f.scene&&f.scene.requestRender()),ce(a,"pipeline"))}},{deep:!0}),ps(()=>{xe(()=>{We()})}),Vl(()=>{ie&&(clearInterval(ie),ie=null),C&&(C.destroy(),C=null,f=null)});const Nl=()=>{Ye.value=!Ye.value};T({map:C,viewer:f,switchBasemap:Re,toggle3DMode:pt,loadPipelineData:ye,loadWellData:mt,loadWaterPlantData:Wt,loadDeviceData:yt,initLoadAllData:Le,clearAllData:xl,handleLayerControl:Gt,deviceEntities:qe,highlightRoutes:Ze,clearRouteHighlight:el,getHighlightedRoutes:Rt,getPipelinePaths:Ot,addRobotMarker:Lt,updateRobotPosition:_l,updateRobotTrajectory:rl,removeRobotMarker:Mt,clearRobotTrajectory:Pt});const zt=s=>{if(!s)return"";const a=Ae.translateTree("INSPECTION_RESULT",s);return a!=null&&a!==""?a:s},Nt=s=>String(s||"").toUpperCase()==="NORMAL"?"normal":"abnormal",ue=s=>s?Ae.dictTypeData("ISSUE_LEVEL",s)||s:"",al=s=>{const a=String(s||"").toUpperCase();return["EMERGENCY","CRITICAL","SEVERE"].includes(a)?"abnormal":"normal"},re=s=>{if(!s)return"";try{return st(s).format("YYYY-MM-DD")}catch{return s}};return(s,a)=>{const r=Qe("a-spin"),c=Qe("a-modal");return _(),S("div",no,[e("div",{ref_key:"container",ref:ee,class:"cesium-container"},null,512),e("div",io,[Tt(e("select",{"onUpdate:modelValue":a[0]||(a[0]=v=>de.value=v),onChange:a[1]||(a[1]=v=>Re(de.value))},[(_(!0),S($e,null,at(vt.value,v=>(_(),S("option",{class:"options",key:v.key,value:v.key},m(v.label),9,ro))),128))],544),[[ia,de.value]]),e("button",{class:j(["toggle-3d-btn",{active:oe.value}]),onClick:pt},m(oe.value?"关闭3D":"开启3D"),3),e("button",{class:j(["terrain-analysis-btn",{active:Ye.value}]),onClick:Nl}," 地形分析 ",2)]),W.value.visible?(_(),S("div",{key:0,class:"pop-modal feature-modal",style:kt({left:W.value.x+"px",top:W.value.y+"px"})},[e("div",co,[e("div",uo,[e("div",vo,m(be.value.title),1),e("div",{class:"close",onClick:cl})]),e("div",po,[e("div",fo,[Object.keys(W.value.data||{}).length>0?(_(!0),S($e,{key:0},at(W.value.data,(v,u)=>(_(),S("div",{class:"fm-row",key:u},[e("div",mo,m(u)+"：",1),e("div",yo,m(Et(u,v)),1)]))),128)):(_(),S("div",ho,a[5]||(a[5]=[e("div",{class:"fm-empty-text"},"暂无数据",-1)])))]),e("div",go,[e("div",bo,[e("img",{src:Ve(W.value.data),alt:"管线图片",class:"pipeline-image",onError:Se},null,40,wo)]),e("button",{class:"action-btn",onClick:a[2]||(a[2]=v=>Sl(W.value.data))},"查看历史数据")])])])],4)):A("",!0),E.value.visible?(_(),S("div",{key:1,class:"pop-modal well-modal",style:kt({left:E.value.x+"px",top:E.value.y+"px"})},[e("div",_o,[e("div",{class:"pop-header"},[a[6]||(a[6]=e("div",{class:"title"},"管井信息",-1)),e("div",{class:"close",onClick:At})]),e("div",To,[e("div",ko,[e("div",So,[a[7]||(a[7]=e("div",{class:"well-label"},"管井编号：",-1)),e("div",Lo,m(E.value.data.wellId||E.value.data.TextString||"未知"),1)]),e("div",Eo,[a[8]||(a[8]=e("div",{class:"well-label"},"坐标：",-1)),e("div",xo,m(E.value.data.coordinates?E.value.data.coordinates.join(", "):"未知"),1)]),e("div",No,[a[9]||(a[9]=e("div",{class:"well-label"},"面积：",-1)),e("div",Do,m(E.value.data.area?E.value.data.area.toFixed(2)+" m²":"未知"),1)]),e("div",Co,[a[10]||(a[10]=e("div",{class:"well-label"},"半径：",-1)),e("div",Io,m(E.value.data.radius?E.value.data.radius.toFixed(2)+" m":E.value.data.perimeter?(E.value.data.perimeter/(2*Math.PI)).toFixed(2)+" m":"未知"),1)]),e("div",Ro,[a[11]||(a[11]=e("div",{class:"well-label"},"高程：",-1)),e("div",Oo,m(E.value.data.elevation?E.value.data.elevation.toFixed(2)+" m":"未知"),1)]),e("div",Mo,[a[12]||(a[12]=e("div",{class:"well-label"},"井底标高：",-1)),e("div",Po,m(E.value.data.wellDepth?E.value.data.wellDepth.toFixed(2)+" m":"未知"),1)]),e("div",Ao,[a[13]||(a[13]=e("div",{class:"well-label"},"井身材质：",-1)),e("div",$o,m(E.value.data.wellType||"未知"),1)])])])])],4)):A("",!0),Z.value.visible?(_(),S("div",{key:2,class:"pop-modal water-plant-modal",style:kt({left:Z.value.x+"px",top:Z.value.y+"px"})},[e("div",Fo,[e("div",{class:"pop-header"},[a[14]||(a[14]=e("div",{class:"title"},m("大冶陈贵镇污水处理厂"),-1)),e("div",{class:"close",onClick:ft})]),e("div",Yo,[e("div",Wo,[a[15]||(a[15]=fs('<div class="water-plant-info" data-v-410133fc><div class="water-plant-row" data-v-410133fc><img class="water-plant-ico" src="'+wa+'" data-v-410133fc><span class="water-plant-label" data-v-410133fc>地址：</span><span class="water-plant-value" data-v-410133fc>大冶市陈贵镇堰畈村吴本二湾</span></div><div class="water-plant-row" data-v-410133fc><img class="water-plant-ico" src="'+_a+'" data-v-410133fc><span class="water-plant-label" data-v-410133fc>占地面积：</span><span class="water-plant-value" data-v-410133fc>28 亩</span></div><div class="water-plant-row" data-v-410133fc><img class="water-plant-ico" src="'+Ta+'" data-v-410133fc><span class="water-plant-label" data-v-410133fc>运营时间：</span><span class="water-plant-value" data-v-410133fc>2024年 12 月正式运营</span></div></div>',1)),e("div",Ho,[e("img",{src:ka,alt:"水厂图片",onError:Se},null,32)])]),a[16]||(a[16]=e("div",{class:"water-plant-description"},m("占地面积28亩，建设总投资约1.2亿元，近期建设规模为 0.5 万 m³/d，，远期 1.0 万 m³/d。出水执行国家《城镇污水处理厂污染物排放标准》（GB18918-2002）中的一级 A 标准。配备粗格栅、BioDopp 生化池、纤维转盘滤池、污泥脱水间等完整处理设施，通过预处理、生化降解、深度净化等流程保障出水达标。"),-1))])])],4)):A("",!0),I.value.visible?(_(),S("div",{key:3,class:"pop-modal device-modal",style:kt({left:I.value.x+"px",top:I.value.y+"px"})},[e("div",Vo,[e("div",Uo,[e("div",Bo,m(I.value.data.deviceName),1),e("div",{class:"close",onClick:He})]),e("div",qo,[e("div",jo,[e("div",Go,[a[17]||(a[17]=e("span",{class:"info-label"},"设备编号：",-1)),e("span",zo,m(I.value.data.deviceCode||"-"),1)]),e("div",Jo,[a[18]||(a[18]=e("span",{class:"info-label"},"设备类型：",-1)),e("span",Xo,m($t(I.value.data.deviceType)||I.value.data.deviceType||"-"),1)]),e("div",Qo,[a[19]||(a[19]=e("span",{class:"info-label"},"设备状态：",-1)),e("span",{class:j(["info-value status-badge",tl(I.value.data.status)])},m(Ft(I.value.data.status)),3)]),e("div",Zo,[a[20]||(a[20]=e("span",{class:"info-label"},"安装位置：",-1)),e("span",Ko,m(I.value.data.location||I.value.data.pipelineName||"-"),1)]),I.value.data.longitude&&I.value.data.latitude?(_(),S("div",en,[a[21]||(a[21]=e("span",{class:"info-label"},"坐标位置：",-1)),e("span",tn,m(parseFloat(I.value.data.longitude).toFixed(3))+", "+m(parseFloat(I.value.data.latitude).toFixed(3)),1)])):A("",!0),I.value.data.createTime?(_(),S("div",ln,[a[22]||(a[22]=e("span",{class:"info-label"},"创建时间：",-1)),e("span",sn,m(I.value.data.createTime||"-"),1)])):A("",!0)]),e("div",{class:"device-actions"},[e("button",{class:"action-btn primary",onClick:Yt},"查看历史数据")])])])],4)):A("",!0),ae(oo,{map:le(C),viewer:le(f),visible:Ye.value,"onUpdate:visible":a[3]||(a[3]=v=>Ye.value=v),ref_key:"terrainAnalysisRef",ref:ke},null,8,["map","viewer","visible"]),ae(c,{open:G.value.visible,"onUpdate:open":a[4]||(a[4]=v=>G.value.visible=v),footer:null,width:900,title:"历史巡检记录","destroy-on-close":!0,"wrap-class-name":"history-inspection-modal"},{default:Ct(()=>[ae(r,{spinning:G.value.loading},{default:Ct(()=>[e("div",an,[e("table",on,[a[23]||(a[23]=e("thead",null,[e("tr",null,[e("th",null,"巡检单号"),e("th",null,"巡检计划"),e("th",null,"巡查结果"),e("th",null,"问题严重程度"),e("th",null,"巡查日期"),e("th",null,"问题描述")])],-1)),e("tbody",null,[(_(!0),S($e,null,at(G.value.list,v=>(_(),S("tr",{key:v.id,class:"history-table-row"},[e("td",null,m(v.inspectionRecordNo),1),e("td",null,m(v.planName),1),e("td",null,[e("span",{class:j(["result-badge",Nt(v.inspectionResult)])},m(zt(v.inspectionResult)),3)]),e("td",null,[e("span",{class:j(["result-badge",al(v.issueLevel)])},m(ue(v.issueLevel)),3)]),e("td",null,m(re(v.inspectionDate)),1),e("td",null,m(v.issueDesc),1)]))),128))])])])]),_:1},8,["spinning"])]),_:1},8,["open"])])}}},rn=Ul(nn,[["__scopeId","data-v-410133fc"]]),cn={class:"dashboard-container"},un={class:"dashboard-header"},dn={class:"header-content"},vn={class:"info-section"},pn={class:"time-info"},fn={class:"current-time"},mn={class:"current-date"},yn={class:"status-text"},hn={class:"main-content"},gn={key:0,class:"layer-tree-control"},bn={class:"tree-header"},wn={key:0,class:"tree-content"},_n={key:1,class:"pop-modal robot-control-panel"},Tn={class:"pop-content"},kn={class:"pop-header robot-header"},Sn={class:"robot-header-right"},Ln={class:"pop-body"},En={class:"robot-info"},xn={class:"info-item"},Nn={class:"info-value"},Dn={class:"info-item"},Cn={class:"info-value"},In={class:"info-item"},Rn={class:"info-value"},On={class:"battery-bar"},Mn={class:"info-item"},Pn={key:0,class:"info-item"},An={class:"info-value route-info"},$n={key:1,class:"info-item"},Fn={class:"info-value cycle-info"},Yn={key:2,class:"info-item"},Wn={class:"info-value"},Hn={key:3,class:"info-item"},Vn={class:"info-value"},Un={class:"progress-bar"},Bn={key:4,class:"info-item"},qn={class:"info-value"},jn={class:"robot-controls"},Gn={class:"track-row"},zn={class:"control-row"},Jn=["disabled"],Xn={class:"control-row"},Qn=["disabled"],Zn={key:0,src:fa},Kn=["disabled"],ei={class:"video-header"},ti={class:"status-text"},li={class:"video-controls"},si=["title"],ai={key:0},oi={key:1},ni={class:"video-content"},ii={key:0,class:"video-loading"},ri={key:1,class:"video-error"},ci={class:"error-text"},ui={key:2,class:"video-placeholder"},di={class:"map-bottom-buttons"},vi={class:"button-group"},pi={class:"button-icon"},fi=["src"],mi={class:"button-icon"},yi=["src"],hi={class:"content"},gi={class:"info-panel intro-panel"},bi={class:"panel-content"},wi={key:0,class:"project-intro"},_i={class:"project-name"},Ti={class:"project-description"},ki={class:"info-panel overview-panel"},Si={class:"panel-content"},Li={class:"stats-grid"},Ei={class:"stat-card"},xi={class:"stat-value"},Ni={class:"stat-card"},Di={class:"stat-value"},Ci={class:"stat-card"},Ii={class:"stat-value"},Ri={class:"stat-card"},Oi={class:"stat-value"},Mi={class:"info-panel device-chart-panel"},Pi={class:"panel-content chart-content"},Ai={class:"content"},$i={class:"info-panel action-panel"},Fi={class:"panel-content chart-content"},Yi={class:"info-panel chart-panel"},Wi={class:"panel-content chart-content"},Hi={class:"info-panel monitor-panel"},Vi={class:"panel-header"},Ui={class:"device-count"},Bi={class:"search-wrap"},qi=["onClick"],ji={style:{display:"flex",gap:"6px"}},Gi={class:"monitor-icon"},zi={class:"monitor-details"},Ji={class:"monitor-name"},Xi={class:"monitor-value"},Qi={class:"monitor-location"},Zi={class:"status-text"},Ki={key:0,class:"monitor-footer"},er={key:1,class:"monitor-footer"},tr={ref:"monitorSentinel",class:"monitor-sentinel"},lr={class:"content"},sr={class:"info-panel robot-panel"},ar={class:"panel-content"},or={class:"robot-list"},nr=["onClick"],ir={class:"robot-info"},rr={class:"robot-name"},cr={class:"status-text"},ur={class:"robot-details"},dr={class:"detail-item"},vr={class:"detail-item"},pr={class:"info-panel plans-panel"},fr={class:"panel-content"},mr={class:"plans-tabs"},yr=["onClick"],hr={class:"plans-content plans-scroll"},gr={class:"plan-header"},br={class:"plan-name"},wr={class:"plan-details"},_r={class:"detail-item"},Tr=["title"],kr={key:1,class:"value"},Sr={class:"detail-item"},Lr={class:"value"},Er={class:"detail-item"},xr={class:"value"},Nr={class:"detail-item"},Dr={class:"value"},Cr={key:0,class:"no-data"},Ir={class:"content"},Rr={class:"info-panel records-panel"},Or={class:"panel-content"},Mr={class:"search-wrap"},Pr={key:0,class:"loading-more"},Ar={class:"info-panel alarm-panel"},$r={class:"panel-content"},Fr={class:"search-wrap"},Yr={key:0,class:"loading-more"},Wr={class:"modal-content"},Hr={class:"modal-body"},Vr={class:"task-list"},Ur=["onClick"],Br={class:"task-info"},qr={class:"task-name"},jr={class:"task-details"},Gr={class:"task-cycle"},zr={class:"task-route"},Jr={key:0,class:"no-tasks"},Xr={class:"modal-title"},Qr={key:0,class:"trend-section"},Zr={class:"tabs-container"},Kr={class:"tab-buttons"},ec=["onClick"],tc={class:"tab-content"},lc=["id"],sc={class:"time-range-section"},ac={class:"time-controls"},oc={class:"time-presets"},nc={class:"time-custom"},ic=["disabled"],rc={key:0},cc={key:1},uc={key:0,class:"history-sample-tip"},dc={key:0,class:"modal-body"},vc={class:"detail-section"},pc={class:"detail-grid"},fc={class:"detail-item"},mc={class:"detail-value"},yc={class:"detail-item"},hc={class:"detail-value"},gc={class:"detail-item"},bc={class:"detail-item"},wc={class:"detail-value"},_c={class:"detail-section"},Tc={class:"detail-grid"},kc={class:"detail-item full-width"},Sc={class:"detail-value"},Lc={class:"detail-item"},Ec={class:"detail-value"},xc={class:"detail-item"},Nc={class:"detail-value"},Dc={key:0,class:"detail-section"},Cc={class:"detail-grid"},Ic={class:"detail-item full-width"},Rc={class:"detail-value"},Oc={class:"detail-item full-width"},Mc={class:"detail-value"},Pc={key:0,class:"modal-body"},Ac={key:1,class:"modal-body"},$c={class:"detail-section"},Fc={class:"detail-grid"},Yc={class:"detail-item"},Wc={class:"detail-value"},Hc={class:"detail-item"},Vc={class:"detail-item full-width"},Uc={class:"detail-value"},Bc={class:"detail-item"},qc={class:"detail-value"},jc={class:"detail-item"},Gc={class:"detail-value"},zc={class:"detail-item"},Jc={class:"detail-value"},Xc={class:"detail-item"},Qc={class:"detail-value"},Zc={class:"detail-section"},Kc={class:"detail-grid"},eu={class:"detail-item full-width"},tu={class:"detail-value"},lu={class:"detail-item full-width"},su={class:"detail-value"},au={class:"detail-item"},ou={class:"detail-value"},nu={class:"detail-item full-width"},iu={class:"detail-value"},ru={class:"detail-section"},cu={class:"detail-grid"},uu={class:"detail-item full-width"},du={class:"detail-value"},vu={class:"detail-item"},pu={class:"detail-value"},fu={class:"detail-item"},mu={class:"detail-value"},yu={class:"detail-item"},hu={class:"detail-value"},gu={class:"detail-item"},bu={class:"detail-value"},wu={key:0,class:"detail-item full-width"},_u={class:"detail-value"},Tu={key:1,class:"detail-item full-width"},ku={class:"detail-value"},Su={key:0,class:"detail-section"},Lu={class:"detail-grid"},Eu={class:"detail-item"},xu={class:"detail-value"},Nu={class:"detail-item"},Du={class:"detail-value"},Cu={class:"detail-item"},Iu={class:"detail-value"},Ru={key:1,class:"detail-section"},Ou={class:"detail-grid"},Mu={class:"detail-item"},Pu={class:"detail-value"},Au={class:"detail-item"},$u={class:"detail-value"},Fu={key:0,class:"detail-item full-width"},Yu={class:"detail-value"},Wu=3,Hu=5,Vu={__name:"mars3dIndex",setup(P){p(null);const T=p(null),V=p(null);ra();const F=ca(),k=p(""),L=p(""),Q=p(!1),ee=p(!1),C=p("1972559187937542145"),f=()=>{F.push(ga.DASHBOARD_URL||"/index")};ua("cesiumViewer",null),p({enableLighting:!0,enableAtmosphere:!0,enableShadows:!0,enableFog:!0,pipelineHeight:5,deviceHeight:10,cameraPitch:-45});const de=p(!1),oe=p(!0),W=p([]),be=p([]),E=p([]),Z=p([]),I=p("pipeline"),
XPM={"_default":0},XAT={"_default":1000},XpgH=p(""),
Xcards=(a,cols)=>"<div class='xpg-grid' style='grid-template-columns:repeat("+cols+",1fr)'>"+a.map((i)=>"<div class='xpg-card'"+(i.t?" title='"+Xesr(i.t)+"'":"")+"><div class='xpg-v'>"+Xesr(i.v)+(i.u?"<span class='xpg-u'>"+Xesr(i.u)+"</span>":"")+"</div><div class='xpg-l'>"+Xesr(i.l)+"</div></div>").join("")+"</div>",
Xpick=(m,ids)=>{let s=0;(ids||[]).forEach((id)=>{const v=m&&m[id];s+=Number(v!=null?v:((m&&m._default)||0))});return s},
Xpg=()=>{try{
  const ids=Xids(),F=Fe.value||{};
  const done=Number(F.totalLength)||0,ent=Number(F.pipeCount)||0;
  const plan=Xpick(XPM,ids),area=Xpick(XAT,ids);
  const pct=(a,b)=>b>0?(Math.round(a/b*1000)/10)+"%":"0%";
  const hintM=plan>0?"规划里程 "+plan+" km":"未配置规划里程，请在 tools/add-progress.js 的 PLAN_MILEAGE 里按项目 ID 配置";
  const hintA=area>0?"区域总量按项目累加（当前 "+ids.length+" 个项目）":"未配置区域总量，请在 tools/add-progress.js 的 AREA_TOTAL 里配置";
  XpgH.value=Xpan("管网三维建模信息化","overview-panel xmodel",Xcards([
      {v:done.toFixed(2),u:"km",l:"完成里程",t:"当前范围已录入管线里程"},
      {v:Math.max(plan-done,0).toFixed(2),u:"km",l:"未完成里程",t:hintM},
      {v:pct(done,plan),l:"占比",t:hintM}],3))
    +Xpan("智慧管网信息化系统完成度","overview-panel xdone",Xcards([
      {v:area,u:"段",l:"区域总量",t:hintA},
      {v:ent,u:"段",l:"已录入",t:"当前范围管段总数"},
      {v:Math.max(area-ent,0),u:"段",l:"未完成",t:hintA},
      {v:pct(ent,area),l:"占比",t:hintA}],4));
  const box=document.querySelector(".xpg2");if(box)box.innerHTML=XpgH.value;
}catch(e){try{Xlg("pg:err "+e)}catch(_){}}},
XpgCss=()=>{try{if(document.getElementById("xpg2Css"))return;const s=document.createElement("style");s.id="xpg2Css";s.textContent=".xpg2{display:flex;flex-direction:column;flex:0 0 auto;min-height:0}\n.xpg2>.info-panel{flex:0 0 auto}\n.xmodel .panel-content,.xdone .panel-content{padding:10px 12px}\n.xpg-grid{display:grid;gap:10px;min-height:104px}\n.xpg-card{background:#6381bf33;border-radius:10px;padding:12px 4px;text-align:center;border:1px solid rgba(148,163,184,.2);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:0}\n.xpg-v{font-size:24px;font-weight:700;color:#60a5fa;line-height:1.25;white-space:nowrap}\n.xpg-u{font-size:12px;font-weight:500;color:#94a3b8;margin-left:3px}\n.xpg-l{font-size:12px;color:#94a3b8e6;margin-top:6px;letter-spacing:.5px;white-space:nowrap}";document.head.appendChild(s)}catch(e){}},
Xstyle=()=>{try{if(document.getElementById("xpatchCss"))return;const s=document.createElement("style");s.id="xpatchCss";s.textContent=".xinject{display:flex;flex-direction:column;flex:0 1 auto;min-height:0}\n.xinject.xgrow{flex:1 1 auto}\n.xinject>.info-panel{min-height:0}\n.xfill{flex:1 1 auto!important;min-height:0}\n.xfill>.panel-content{overflow:auto!important}\n.xfill.overview-panel>.panel-content>.stats-grid{flex:1 1 auto;min-height:0;grid-auto-rows:1fr}\n.xfill.overview-panel .stat-card{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:0}\n.xmt-wrap{height:auto!important;max-height:100%}\n/* 实时监控：固定高度（默认展示 4 个设备）\n * 实测几何：标题+搜索栏占 97px，设备条目 69px、条目间距 81px\n * → 4 个设备 ≈ 97 + 4*81 - 12(末项无间距) ≈ 409px，加底部留白取 420px */\n.right-panels .content>.info-panel.monitor-panel{flex:0 0 auto!important;height:420px;min-height:0}\n.right-panels .content>.info-panel.monitor-panel>.panel-content{flex:1 1 auto;min-height:0;overflow:auto!important}\n.right-panels .content>.info-panel.action-panel{flex:0 1 auto;min-height:0;max-height:28%;overflow:hidden}\n.right-panels .content>.info-panel.action-panel .chart-box{height:auto!important;flex:1 1 auto;min-height:0;overflow:auto}\n.right-panels .content>.info-panel.chart-panel{flex:1 1 auto;min-height:0}\n.right-panels .content>.info-panel.chart-panel .chart-box{height:auto!important;flex:1 1 auto;min-height:0}";document.head.appendChild(s)}catch(e){}},
XmonScroll=()=>{try{const l=K.value;if(l&&!l.__xs){l.__xs=1,l.addEventListener("scroll",()=>{l.scrollTop+l.clientHeight>=l.scrollHeight-10&&yl()})}if(typeof Is==="function")Is()}catch(e){try{Xlg("mon:scroll "+e)}catch(_){}}},
XRMAP={"1972559187937542145":["黄石市","大冶市"],"1972558939701854209":["恩施土家族苗族自治州","来凤县"]},
Xcty=p("__ALL__"),Xdct=p("__ALL__"),Xpid=p("__ALL__"),Xprj=p([]),XrcH=p(""),
// 注意：整段接在 const 声明链后，可变状态只能放进对象容器，不能 Xxx=1
XF={b:0,i:0},
Xesr=(v)=>String(v==null?"":v).replace(/[&<>"]/g,(c)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
Xtkk=()=>{try{const t=JSON.parse(localStorage.getItem("TOKEN"));return typeof t==="string"?t:""}catch(e){return""}},
Xmt=(rows)=>{
  // 样式参照智慧运维「巡检记录列表」：蓝底表头 + 大字号 + 宽松行距
  const st="<style>.xmt-wrap{width:100%;overflow:auto}.xmt{width:100%;border-collapse:collapse;font-size:14px;color:#e2e8f0;table-layout:fixed}"+
    ".xmt th{font-weight:600;font-size:14px;letter-spacing:.5px;color:#fff;background:rgba(90,124,199,.5);padding:12px 12px;text-align:left;border-bottom:1px solid rgba(148,163,184,.3);white-space:nowrap}"+
    ".xmt td{font-size:14px;padding:13px 12px;border-bottom:1px solid rgba(148,163,184,.14);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"+
    ".xmt tbody tr:nth-child(odd){background:rgba(99,129,191,.14)}"+
    ".xmt tbody tr:nth-child(even){background:rgba(99,129,191,.05)}"+
    ".xmt td.n{text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:#93c5fd}"+
    ".xmt tfoot td{font-weight:600;color:#fff;background:rgba(90,124,199,.28);border-top:1px solid rgba(148,163,184,.3)}</style>";
  const list=(rows||[]).filter(Boolean).map((x)=>({m:(x.material&&x.material!=="undefined"&&x.material!=="null")?String(x.material):"普通材质",n:Number(x.countNum||0)}));
  if(list.length===0)return st+"<div class='xmt-wrap'><table class='xmt'><thead><tr><th style='width:60px'>序号</th><th>管材类型</th><th style='width:110px;text-align:right'>数量（个）</th></tr></thead><tbody><tr><td colspan='3' style='text-align:center;color:#94a3b8;padding:18px'>暂无管材数据</td></tr></tbody></table></div>";
  list.sort((a,b)=>b.n-a.n);
  let sum=0;list.forEach((x)=>{sum+=x.n});
  return st+"<div class='xmt-wrap'><table class='xmt'><thead><tr><th style='width:60px'>序号</th><th>管材类型</th><th style='width:110px;text-align:right'>数量（个）</th></tr></thead><tbody>"+
    list.map((x,i)=>"<tr><td>"+(i+1)+"</td><td title='"+Xesr(x.m)+"'>"+Xesr(x.m)+"</td><td class='n'>"+x.n+"</td></tr>").join("")+
    "</tbody><tfoot><tr><td colspan='2'>合计</td><td class='n'>"+sum+"</td></tr></tfoot></table></div>";
},
Xsel=(id,lab,opts,val)=>"<div style='display:flex;align-items:center;gap:6px;padding:3px 10px'><span style='width:34px;flex:none;font-size:12px;color:#cbd5e1'>"+lab+"</span>"+
  "<select id='"+id+"' style='flex:1;min-width:0;height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);border-radius:4px;padding:0 4px;outline:none'>"+
  opts.map((o)=>"<option value='"+Xesr(o.v)+"'"+(o.v===val?" selected":"")+">"+Xesr(o.t)+"</option>").join("")+"</select></div>",
Xrdraw=()=>{
  const P=Xprj.value||[];
  const c=Xcty.value,d=Xdct.value,p=Xpid.value;
  const cities=[];P.forEach((x)=>{if(cities.indexOf(x.city)<0)cities.push(x.city)});
  const dists=[];P.filter((x)=>c==="__ALL__"||x.city===c).forEach((x)=>{if(dists.indexOf(x.district)<0)dists.push(x.district)});
  const projs=P.filter((x)=>(c==="__ALL__"||x.city===c)&&(d==="__ALL__"||x.district===d));
  const ao=(t)=>[{v:"__ALL__",t:t}];
  const html="<div style='padding:6px 0 8px;border-bottom:1px solid rgba(175,199,255,.5)'>"+
    "<div style='padding:2px 10px 4px;font-size:12px;color:#93c5fd;letter-spacing:.5px'>区域筛选</div>"+
    Xsel("xrCity","市",ao("全部市").concat(cities.map((x)=>({v:x,t:x}))),c)+
    Xsel("xrDist","区/县",ao("全部区/县").concat(dists.map((x)=>({v:x,t:x}))),d)+
    Xsel("xrProj","项目",ao("全部项目").concat(projs.map((x)=>({v:x.id,t:x.name}))),p)+
    "<div style='padding:4px 10px 0;font-size:11px;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis' id='xrHint'>当前："+Xids().length+" 个项目</div></div>";
  XrcH.value=html;
  const box=document.querySelector('[data-x="xregion"]');
  const inner=box&&box.firstElementChild;
  if(inner)inner.innerHTML=html;
  const h=document.getElementById("xrHint");
  if(h)h.textContent="当前："+Xids().length+" 个项目";
},
Xids=()=>{
  const c=Xcty.value,d=Xdct.value,p=Xpid.value;
  let list=(Xprj.value||[]).slice();
  if(c&&c!=="__ALL__")list=list.filter((x)=>x.city===c);
  if(d&&d!=="__ALL__")list=list.filter((x)=>x.district===d);
  if(p&&p!=="__ALL__")list=list.filter((x)=>x.id===p);
  return list.map((x)=>x.id);
},
Xreq=async(u)=>{try{const r=await fetch(https://mars3d-monitor.app.workbuddy.host/api/"+u,{headers:{token:Xtkk()}});const j=await r.json();return j&&j.code===200?j.data:null}catch(e){return null}},
Xstat=async(ids)=>{
  const rs=await Promise.all(ids.map((id)=>Xreq("/biz/pipeLineBase/bigScreenInfo?projectId="+id+"&_="+Date.now())));
  // 设备是全局资产，多项目汇总时取最大值，不能简单相加（否则 2 个项目会算出 24 台）
  let total=0,len=0,dev=0;const tm=new Map(),td=new Map();let ok=0;
  rs.forEach((d)=>{if(!d)return;ok++;
    total+=Number(d.total||0);len+=Number(d.pipelineLengthSum||0);dev=Math.max(dev,Number(d.deviceCount||0));
    (d.typeDistribution||[]).forEach((x)=>{const k=(x.material&&x.material!=="undefined"&&x.material!=="null")?String(x.material):"普通材质";tm.set(k,(tm.get(k)||0)+Number(x.countNum||0))});
    (d.diameterDistribution||[]).forEach((x)=>{const k=String(x.diameter||x.name||"未知");td.set(k,(td.get(k)||0)+Number(x.countNum||x.value||0))});
  });
  Fe.value={totalLength:len.toFixed(2),pipeCount:total,manholeCount:Math.floor(total*.3),deviceCount:dev};
  qe.value=Array.from(tm.keys()).map((k)=>({material:k,countNum:tm.get(k)}));
  Ie.value=Array.from(td.keys()).map((k)=>({diameter:k,countNum:td.get(k)}));
  const one=ids.length===1?(Xprj.value||[]).find((x)=>x.id===ids[0]):null;
  if(one)ie.value={id:one.id,projectName:one.name,projectIntroduction:one.intro||""};
  else if(ids.length>1)ie.value={id:"",projectName:"共 "+ids.length+" 个项目（"+ok+" 个有数据）",projectIntroduction:""};
  // 一次都没成功时退回页面原生的统计加载，保证大屏不至于全空
  if(ok===0){Es()}else{Vt(),vl()}
  Xpg();
},
// 注意：后端把 pageSize 硬性压到 20，无论传多大都只返回 20 条，必须按 20 翻页
Xgeo=async(ids)=>{
  const feats=[];
  const put=(d,id)=>{
    const rs=(d&&d.records)||[];
    rs.forEach((r)=>{
      if(!r.geoJson)return;
      let g=null;try{g=typeof r.geoJson==="string"?JSON.parse(r.geoJson):r.geoJson}catch(e){g=null}
      if(!g)return;
      const arr=g.type==="FeatureCollection"?(g.features||[]):[g];
      arr.forEach((f)=>{if(f&&f.geometry){f.properties=Object.assign({},f.properties||{},{material:r.material||"",pipelineType:r.pipelineType||"",name:r.pipelineName||r.pipelineCode||"",_pid:id});feats.push(f)}});
    });
    return rs.length;
  };
  const url=(id,pg)=>"/biz/pipeLineBase/page?size=100&current="+pg+"&projectId="+id+"&_="+Date.now();
  for(const id of ids){
    const first=await Xreq(url(id,1));
    if(!first)continue;
    put(first,id);
    const total=typeof first.total==="number"?first.total:0;
    if(total>100){
      const pages=Math.min(Math.ceil(total/100),30),ns=[];
      for(let p=2;p<=pages;p++)ns.push(p);
      for(let i=0;i<ns.length;i+=6){
        const got=await Promise.all(ns.slice(i,i+6).map((p)=>Xreq(url(id,p))));
        got.forEach((d)=>put(d,id));
      }
    }
  }
  return{type:"FeatureCollection",features:feats};
},
Xfly=(fc)=>{
  try{
    let w=180,s=90,e=-180,n=-90,has=false;
    const walk=(c)=>{if(!Array.isArray(c))return;if(typeof c[0]==="number"&&typeof c[1]==="number"){has=true;
      if(c[0]<w)w=c[0];if(c[0]>e)e=c[0];if(c[1]<s)s=c[1];if(c[1]>n)n=c[1];return}
      for(let i=0;i<c.length;i++)walk(c[i])};
    (fc.features||[]).forEach((f)=>{const g=f&&f.geometry;if(g&&g.coordinates)walk(g.coordinates)});
    if(!has)return;
    const v=T.value&&T.value.viewer,Cz=(window.mars3d&&window.mars3d.Cesium)||window.Cesium;
    if(!v||!v.camera||!Cz||!Cz.Rectangle)return;
    const pw=Math.max((e-w)*.12,.004),ph=Math.max((n-s)*.12,.004);
    v.camera.flyTo({destination:Cz.Rectangle.fromDegrees(w-pw,s-ph,e+pw,n+ph),duration:1.4});
  }catch(err){console.warn("[Xfly]",err)}
},
Xapply=async()=>{
  if(XF.b)return;XF.b=1;
  try{
    const ids=Xids();
    if(ids.length===1)C.value=ids[0];
    const R=await Promise.all([Xgeo(ids),Xstat(ids)]);
    const fc=R[0]||{type:"FeatureCollection",features:[]};
    V.value=fc;try{window.__xPipeFxClear&&window.__xPipeFxClear()}catch(e){}
    Xfly(fc);
    const h=document.getElementById("xrHint");
    if(h)h.textContent="当前："+ids.length+" 个项目 · "+fc.features.length+" 段管线";
  }catch(err){console.error("[Xapply]",err)}
  XF.b=0;
},
Xonch=(ev)=>{
  const t=ev&&ev.target;if(!t||!t.id)return;
  if(t.id==="xrCity"){Xcty.value=t.value,Xdct.value="__ALL__",Xpid.value="__ALL__"}
  else if(t.id==="xrDist"){Xdct.value=t.value,Xpid.value="__ALL__"}
  else if(t.id==="xrProj"){Xpid.value=t.value}
  else return;
  Xrdraw();Xapply();
},
XinitR=async()=>{
  try{if(typeof Xau==="function")await Xau()}catch(e){}
  if(!XF.i){XF.i=1,document.addEventListener("change",Xonch)}
  const d=await Xreq("/biz/project/page?pageSize=100&pageNumber=1&_="+Date.now());
  const rs=(d&&d.records)||[];
  Xprj.value=rs.map((r)=>{const m=XRMAP[r.id]||["未划分",r.projectName||"未命名项目"];
    return{id:r.id,name:r.projectName||"未命名项目",city:m[0],district:m[1],intro:r.projectIntroduction||""}});
  if(Xprj.value.length===0)Xprj.value=[{id:C.value,name:"当前项目",city:"未划分",district:"当前项目",intro:""}];
  Xrdraw();Xapply();
},
XOK={v:0},
XPUB="04298364ec840088475eae92a591e01284d1abefcda348b47eb324bb521bb03b0b2a5bc393f6b71dabb8f15c99a0050818b56b23f31743b93df9cf8948f15ddb54",
Xsm2=()=>new Promise((r)=>{try{if(self&&self.sm2)return r();const s=document.createElement("script");s.src=new URL("./sm2-Zz1kQ7wa.js",import.meta.url).href;s.onload=()=>r();s.onerror=()=>r();document.head.appendChild(s)}catch(e){r()}}),
Xdict=(t)=>{try{fetch(https://mars3d-monitor.app.workbuddy.host/api//dev/dict/tree",{headers:{token:t}}).then((x)=>x.json()).then((j)=>{
  if(j&&j.code===200&&j.data){try{localStorage.setItem("DICT_TYPE_TREE_DATA",JSON.stringify(j.data))}catch(e){}}}
).catch(()=>{})}catch(e){}},
Xau=async()=>{try{
  if(XOK.v)return Xtk();
  let t=Xtk();
  if(t){const r=await fetch(https://mars3d-monitor.app.workbuddy.host/api//biz/project/page?pageSize=1&pageNumber=1&_="+Date.now(),{headers:{token:t}}).then((x)=>x.json()).catch(()=>null);
    if(r&&r.code===200){XOK.v=1;try{if(!localStorage.getItem("DICT_TYPE_TREE_DATA"))Xdict(t)}catch(e){}return t}}
  await Xsm2();
  if(!(self&&self.sm2&&self.sm2.doEncrypt))return"";
  const pwd=self.sm2.doEncrypt("123456",XPUB,1);
  const lr=await fetch(https://mars3d-monitor.app.workbuddy.host/api//auth/b/doLogin",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({account:"Superadmin",password:pwd,validCode:"",validCodeReqNo:""})}).then((x)=>x.json());
  if(lr&&lr.code===200&&lr.data){try{localStorage.setItem("TOKEN",JSON.stringify(lr.data)),Xdict(lr.data)}catch(e){}XOK.v=1;return lr.data}
}catch(e){try{Xlg("au:err "+e)}catch(_){}}
return""},Xsb=p("<div class='info-panel overview-panel' data-v-14ae79c9><div class='panel-header' data-v-14ae79c9><h3 class='panel-title' data-v-14ae79c9>系统监测</h3></div><div class='panel-content' data-v-14ae79c9><div style='color:#94a3b8;font-size:12px;padding:6px'>数据加载中…</div></div></div>"),
Xsc=p(""),Xsg=p(""),Xsh=p(""),Xsl=p(""),Xsr=p(""),
Xm1="/assets/xtjcOn-Zz9kQ1wa.svg",Xm2="/assets/xtjc-Zz9kQ1wa.svg",Xg1="/assets/wszlOn-Zz9kQ1wa.svg",Xg2="/assets/wszl-Zz9kQ1wa.svg",
Xes=(v)=>String(v==null?"":v).replace(/[&<>"]/g,(c)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
Xtk=()=>{try{const t=JSON.parse(localStorage.getItem("TOKEN"));return typeof t==="string"?t:""}catch(e){return""}},
Xrq=async(u,q)=>{try{const s=new URLSearchParams(Object.assign({size:100,current:1},q||{}));const r=await fetch(https://mars3d-monitor.app.workbuddy.host/api/"+u+"?"+s.toString(),{headers:{token:Xtk()}});const j=await r.json();return j&&j.code===200?j.data:null}catch(e){return null}},
Xrows=(d)=>(d&&d.records)||(Array.isArray(d)?d:[]),
Xall=async(u,mx)=>{const p1=await Xrq(u);if(!p1)return{rows:[],total:0};let out=Xrows(p1).slice();const tot=typeof p1.total==="number"?p1.total:out.length;if(tot>out.length){let pages=Math.ceil(tot/100);if(pages>51)pages=51;const ns=[];for(let n=2;n<=pages;n++)ns.push(n);for(let i=0;i<ns.length;i+=6){const got=await Promise.all(ns.slice(i,i+6).map((n)=>Xrq(u,{current:n,size:100})));got.forEach((d)=>{out=out.concat(Xrows(d))});if(mx&&out.length>=mx)break}}const seen={},uniq=[];for(let i=0;i<out.length;i++){const k=out[i]&&out[i].id;if(k==null){uniq.push(out[i]);continue}if(seen[k])continue;seen[k]=1;uniq.push(out[i])}return{rows:(mx?uniq.slice(0,mx):uniq),total:tot}},
Xok=(v)=>v===!0||v==="true"||v==="1"||v===1,
Xpan=(t,c,b)=>"<div class='info-panel "+c+"' data-v-14ae79c9><div class='panel-header' data-v-14ae79c9><h3 class='panel-title' data-v-14ae79c9>"+Xes(t)+"</h3></div><div class='panel-content' data-v-14ae79c9>"+b+"</div></div>",
/* panel-content 是 flex column，stats-grid 作为 flex item 会被拉伸/压缩，
   导致不同页面卡片高度差异极大（实测 42px ~ 247px）。用内联样式锁住自然高度。 */
Xst=(a)=>"<div class='stats-grid' style='flex:0 0 auto' data-v-14ae79c9>"+a.map((i)=>"<div class='stat-card' style='padding:12px 8px' data-v-14ae79c9><div class='stat-value' style='font-size:22px;margin-bottom:4px' data-v-14ae79c9>"+Xes(i.v)+"</div><div class='stat-label' data-v-14ae79c9>"+Xes(i.l)+"</div></div>").join("")+"</div>",
Xerr=(t)=>Xpan(t,"overview-panel","<div style='color:#94a3b8;font-size:12px;padding:6px'>数据加载失败</div>"),
Xlg=(m)=>{try{window.__Xlog=(window.__Xlog||[]).concat(String(m))}catch(e){}},
Xflush=()=>{try{const put=(m,h)=>{const c=document.querySelector('[data-x="'+m+'"]');const t=c&&(c.querySelector(".xinject")||c.firstElementChild);if(t&&h)t.innerHTML=h};const m=I.value==="monitoring",g=I.value==="governance";if(m){put("mon-l",Xsb.value),put("mon-r",Xsc.value)}if(g){put("gov-l",Xsg.value),put("gov-r",Xsh.value)}if(I.value==="maintenance"){put("ops-l",Xsl.value),put("ops-r",Xsr.value)}}catch(e){Xlg("flush:err "+e)}},
XloadMon=async()=>{try{try{window.__xMon=()=>XM;window.__xMonR=()=>Xrender;window.__xMonAct=(a,v)=>Xact(a,v,null,null);window.__xMonTag=(w)=>XunTag(w)}catch(e){}XmHook();if(!XM.me)await XmMe();if(!XM.ready){Xsb.value=XM_ST+Xpan("系统监测","overview-panel","<div class='xtip' data-v-14ae79c9>正在加载监测数据…</div>");Xsc.value=XM_ST+Xpan("系统监测","overview-panel","<div class='xtip' data-v-14ae79c9>正在加载监测数据…</div>");Xflush();await XmLoad();}await Xrender();if(!XM.win){(async()=>{try{await XmProbe()}catch(e){}try{window.__XP=(window.__XP||[]).concat("done:"+(XM.win?String(XM.win.last||"").slice(0,10):"none"))}catch(e){}if(XM.win){try{await Xrender()}catch(e){}}})();}}catch(e){console.error("[XloadMon]",e);Xsb.value=XM_ST+Xerr("系统监测");Xsc.value=XM_ST+Xerr("系统监测");Xflush()}},

/* ================= 系统监测 第三阶段：状态 + 工具 + 数据层 ================= */
/* 注意：整段接在 const 声明链之后，可变状态必须放在对象容器 XM 里，不能写成 Xxx=1 */
XM={ready:0,load:0,hook:0,busy:0,err:"",toast:"",
    ltab:"zone",rtab:"dev",zone:"__ALL__",zkey:"day",zdate:"",
    tkey:"day",tdate:"",selDev:"",selPipe:"",ordSub:"all",pipeSel:null,
    dkw:"",dst:"__ALL__",wof:"__ALL__",swUid:"",swpg:0,
    dev:[],pipe:[],pg:[],alarm:[],rule:[],wo:[],plan:[],rec:[],user:[],
    zones:[],d2p:{},p2d:{},pipeById:{},devById:{},userById:{},hist:{},win:null},
Xnum=(v)=>{const n=parseFloat(v);return isFinite(n)?n:0},
Xf=(v,d)=>{if(v==null||v==="")return"--";const n=parseFloat(v);return isFinite(n)?n.toFixed(d==null?2:d):String(v)},
Xday=(d)=>d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2),
Xts=(s)=>{if(!s)return null;const m=String(s).match(/(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
  return m?new Date(+m[1],+m[2]-1,+m[3],+(m[4]||0),+(m[5]||0),+(m[6]||0)):null},
/* 管线性质：rain=雨水 / sew=污水 / main=主干管 */
Xkind=(p)=>{const t=String((p&&p.pipelineType)||"");
  if(t.indexOf("主干")>=0||t.toUpperCase().indexOf("MAIN")>=0)return"main";
  if(t==="YSLINE"||t.toUpperCase().indexOf("RAIN")>=0)return"rain";
  return"sew"},
XkindName=(k)=>k==="rain"?"雨水":(k==="main"?"主干管":"污水"),
XkindCls=(k)=>k==="rain"?"xk-rain":(k==="main"?"xk-main":"xk-sew"),
/* 设备分类：patrol=巡检设备（机器人/QV/声呐） / mon=监测设备（流量计/水位计/水质仪/气体） */
Xdtype=(d)=>{const t=String((d&&d.deviceType)||"").toUpperCase();
  if(t==="ROBOT_DEVICE"||t==="ROBOT"||t==="QV"||t==="SONAR")return"patrol";return"mon"},
XdtypeName=(d)=>{const t=String((d&&d.deviceType)||"").toLowerCase(),n=String((d&&d.deviceName)||"");
  if(t==="robot_device"||t==="robot")return"管道机器人";
  if(t==="qv")return"QV检测仪";
  if(n.indexOf("声呐")>=0)return"声呐检测仪";
  if(t==="flow")return"流量流速计";
  if(t==="meter")return"水位计";
  if(t==="quality")return n.indexOf("声呐")>=0?"声呐检测仪":"水质监测仪";
  if(t==="gas")return"气体检测仪";
  return t||"监测设备"},
/* ---------- 网络 ---------- */
XmFetch=async(devId,s,e)=>{
  try{
    const u="/iot/iotDeviceData/dashboard/deviceHistoryData?deviceId="+encodeURIComponent(devId)+"&startTime="+encodeURIComponent(s)+"&endTime="+encodeURIComponent(e);
    /* 超时保护：任何一次挂起都会让整条 Promise 链停住，进而卡死页面渲染 */
    const ac=(typeof AbortController!=="undefined")?new AbortController():null;
    const tm=ac?setTimeout(()=>{try{ac.abort()}catch(err){}},6000):null;
    const r=await fetch(https://mars3d-monitor.app.workbuddy.host/api/"+u,{headers:{token:Xtk()},signal:ac?ac.signal:undefined});
    if(tm)clearTimeout(tm);
    const j=await r.json();
    /* 约定：null = 请求失败（可重试）；[] = 请求成功但该时段无数据（不可重试） */
    if(!j||j.code!==200)return null;
    return (j.data&&j.data.records)||[];
  }catch(err){return null}
},
/* 按 31 天切片并发拉取，规避后端单次 1000 条上限；结果带缓存 */
XmHist=async(devIds,s,e)=>{
  const key=devIds.join(",")+"|"+s+"|"+e;
  if(XM.hist[key])return XM.hist[key];
  let out=[];
  const t0=Xts(s),t1=Xts(e);
  if(t0&&t1){
    const segs=[];let a=new Date(t0.getTime());
    while(a<=t1){
      let b=new Date(a.getTime()+30*864e5);
      if(b>t1)b=new Date(t1.getTime());
      segs.push([Xday(a)+" 00:00:00",Xday(b)+" 23:59:59"]);
      a=new Date(b.getTime()+864e5);
    }
    const jobs=[];
    segs.forEach((sg)=>{devIds.forEach((id)=>{jobs.push([id,sg[0],sg[1]])})});
    for(let i=0;i<jobs.length;i+=8){
      const got=await Promise.all(jobs.slice(i,i+8).map((x)=>XmFetch(x[0],x[1],x[2])));
      got.forEach((r)=>{if(r)out=out.concat(r)});
    }
  }
  out.sort((x,y)=>String(x.collectionTime||"").localeCompare(String(y.collectionTime||"")));
  XM.hist[key]=out;
  return out;
},
/* 探测数据有效时间窗：从当前月往前逐月找第一个有数据的月份 */
XmProbe=async()=>{
  if(XM.win)return XM.win;
  /* 用 2 台代表设备，任一命中即可，降低单台设备无数据造成的误判 */
  const ids=(XM.dev||[]).filter((d)=>Xdtype(d)==="mon").slice(0,2).map((d)=>d.id);
  if(!ids.length)return null;
  const now=new Date();
  try{window.__XP=(window.__XP||[]).concat("start:ids="+ids.length)}catch(e){}
  /* 串行逐月探测：并发会让后端偶发 500（整月探测失败），串行 + 单次重试最稳，命中即返回 */
  for(let back=0;back<14;back++){
    const base=new Date(now.getFullYear(),now.getMonth()-back,1);
    const s=Xday(base)+" 00:00:00";
    const e=Xday(new Date(base.getFullYear(),base.getMonth()+1,0))+" 23:59:59";
    for(let k=0;k<ids.length;k++){
      let rows=await XmFetch(ids[k],s,e);
      /* 只有「请求失败」才重试；空结果不重试，否则请求量翻倍容易触发后端限流 */
      if(rows===null)rows=await XmFetch(ids[k],s,e);
      try{window.__XP=(window.__XP||[]).concat("b"+back+"k"+k+":"+(rows?rows.length:"E"))}catch(err){}
      if(rows&&rows.length){
        const last=rows[rows.length-1].collectionTime;
        XM.win={s:s,e:e,last:last,anchor:Xts(last)};
        return XM.win;
      }
    }
  }
  try{window.__XP=(window.__XP||[]).concat("empty")}catch(e){}
  return null;
},
Xmpost=async(u,body)=>{
  try{
    const r=await fetch(https://mars3d-monitor.app.workbuddy.host/api/"+u,{method:"POST",headers:{"Content-Type":"application/json",token:Xtk()},body:JSON.stringify(body||{})});
    return (await r.json())||{code:-1};
  }catch(e){return{code:-1,msg:String(e)}}
},
/* ---------- 数据加载 + 派生 ---------- */
XmLoad=async()=>{
  if(XM.load)return;
  XM.load=1;
  try{
    const R=await Promise.all([
      Xall("/iot/iotDevice/page",500),
      Xall("/biz/pipeLineBase/page",2000),
      Xall("/iot/iotAlarmRecord/page",1500),
      Xall("/iot/iotAlarmRule/page",100),
      Xall("/biz/workOrder/page",500),
      Xall("/biz/inspectionPlan/page",500),
      Xall("/biz/inspectionRecords/page",500),
      Xall("/biz/user/page",500)
    ]);
    XM.dev=R[0].rows||[];XM.pipe=R[1].rows||[];XM.alarm=R[2].rows||[];XM.rule=R[3].rows||[];
    XM.wo=R[4].rows||[];XM.plan=R[5].rows||[];XM.rec=R[6].rows||[];XM.user=R[7].rows||[];
    XmBuild();
    XM.ready=1;
  }catch(e){XM.err=String((e&&e.message)||e);XM.load=0}
},
XmBuild=()=>{
  /* 管线几何中心 */
  XM.pg=[];
  (XM.pipe||[]).forEach((p)=>{
    let cx=NaN,cy=NaN;
    try{
      const g=typeof p.geoJson==="string"?JSON.parse(p.geoJson):p.geoJson;
      const f=g&&g.geometry?g.geometry:null;
      if(f){
        const line=f.type==="MultiLineString"?f.coordinates[0]:f.coordinates;
        let sx=0,sy=0,n=0;
        (line||[]).forEach((c)=>{if(Array.isArray(c)&&isFinite(c[0])&&isFinite(c[1])){sx+=c[0];sy+=c[1];n++}});
        if(n){cx=sx/n;cy=sy/n}
      }
    }catch(e){}
    if(isFinite(cx)&&isFinite(cy))XM.pg.push({p:p,cx:cx,cy:cy});
  });
  /* 排水分区：按 0.01° 网格聚类 */
  const g={};
  XM.pg.forEach((o)=>{
    const k=(Math.round(o.cx*100)/100).toFixed(2)+"|"+(Math.round(o.cy*100)/100).toFixed(2);
    (g[k]=g[k]||[]).push(o);
  });
  const CN=["一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];
  XM.zones=Object.keys(g).map((k)=>{
    const a=g[k];let sx=0,sy=0;
    a.forEach((o)=>{sx+=o.cx;sy+=o.cy});
    return{id:k,name:"排水分区",ids:a.map((o)=>o.p.id),cx:sx/a.length,cy:sy/a.length,n:a.length};
  }).sort((x,y)=>y.n-x.n);
  XM.zones.forEach((z,i)=>{z.name="排水分区"+(CN[i]||String(i+1))});
  /* 索引 */
  XM.pipeById={};(XM.pipe||[]).forEach((p)=>{XM.pipeById[p.id]=p});
  XM.devById={};(XM.dev||[]).forEach((d)=>{XM.devById[d.id]=d});
  XM.userById={};(XM.user||[]).forEach((u)=>{XM.userById[u.id]=u});
  /* 设备 → 最近管线（双向索引） */
  XM.d2p={};XM.p2d={};
  (XM.dev||[]).forEach((d)=>{
    const px=parseFloat(d.positionX),py=parseFloat(d.positionY);
    if(!isFinite(px)||!isFinite(py))return;
    let best=null,bd=1e9;
    XM.pg.forEach((o)=>{
      const dd=(o.cx-px)*(o.cx-px)+(o.cy-py)*(o.cy-py);
      if(dd<bd){bd=dd;best=o.p}
    });
    if(best){XM.d2p[d.id]=best.id;(XM.p2d[best.id]=XM.p2d[best.id]||[]).push(d.id)}
  });
},
/* 分区下的管线 / 设备 */
XzPipes=(zid)=>{
  if(!zid||zid==="__ALL__")return (XM.pipe||[]).slice();
  const z=(XM.zones||[]).filter((x)=>x.id===zid)[0];
  if(!z)return[];
  return z.ids.map((id)=>XM.pipeById[id]).filter(Boolean);
},
XzDevs=(zid)=>{
  const ps=XzPipes(zid),out=[];
  ps.forEach((p)=>{(XM.p2d[p.id]||[]).forEach((id)=>{const d=XM.devById[id];if(d)out.push(d)})});
  return out;
},
/* ---------- 聚合：总流量 / 峰值 / 谷值 ---------- */
Xagg=(rows,dt)=>{
  const v=[];
  (rows||[]).forEach((r)=>{if(r.dataType===dt)v.push(Xnum(r.dataValue))});
  if(!v.length)return{n:0,sum:0,max:null,min:null,avg:null};
  let s=0,mx=v[0],mn=v[0];
  v.forEach((x)=>{s+=x;if(x>mx)mx=x;if(x<mn)mn=x});
  return{n:v.length,sum:s,max:mx,min:mn,avg:s/v.length};
},
/* ================= 渲染：公共组件 ================= */
XM_ST="<style>"+
  ".xseg{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 10px}"+
  ".xseg button{flex:1;min-width:52px;height:28px;font-size:12px;color:#cbd5e1;background:rgba(15,23,42,.75);"+
    "border:1px solid rgba(148,163,184,.32);border-radius:4px;cursor:pointer;transition:.15s;white-space:nowrap}"+
  ".xseg button:hover{background:rgba(99,129,191,.3);color:#fff}"+
  ".xseg button.on{background:rgba(90,124,199,.85);border-color:#93c5fd;color:#fff;font-weight:600}"+
  ".xrow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 10px;font-size:12px;color:#cbd5e1}"+
  ".xsl{height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);"+
    "border-radius:4px;padding:0 4px;outline:none;max-width:100%}"+
  ".xip{height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);"+
    "border-radius:4px;padding:0 6px;outline:none;width:132px}"+
  ".xbtn{height:26px;padding:0 10px;font-size:12px;color:#e2e8f0;background:rgba(99,129,191,.35);"+
    "border:1px solid rgba(148,163,184,.4);border-radius:4px;cursor:pointer;white-space:nowrap}"+
  ".xbtn:hover{background:rgba(90,124,199,.7);color:#fff}"+
  ".xbtn.sm{height:22px;padding:0 7px;font-size:11px}"+
  ".xbtn.ok{background:rgba(34,197,94,.28);border-color:rgba(34,197,94,.5)}"+
  ".xbtn.warn{background:rgba(234,179,8,.26);border-color:rgba(234,179,8,.5)}"+
  ".xtb{width:100%;border-collapse:collapse;font-size:12px;color:#e2e8f0;table-layout:fixed}"+
  ".xtb th{font-weight:600;font-size:12px;color:#fff;background:rgba(90,124,199,.5);padding:8px 6px;"+
    "text-align:left;border-bottom:1px solid rgba(148,163,184,.3);white-space:nowrap;position:sticky;top:0;z-index:2}"+
  ".xtb td{font-size:12px;padding:9px 8px;border-bottom:1px solid rgba(148,163,184,.14);"+
    "overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"+
  ".xtb tbody tr:nth-child(odd){background:rgba(99,129,191,.14)}"+
  ".xtb tbody tr:nth-child(even){background:rgba(99,129,191,.05)}"+
  ".xtb tbody tr:hover{background:rgba(90,124,199,.3)}"+
  ".xtb tbody tr.sel{background:rgba(56,189,248,.28);box-shadow:inset 2px 0 0 #38bdf8}"+
  ".xtb td.n{text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:#93c5fd}"+
  ".xtb td.c{text-align:center}"+
  ".xscroll{width:100%;overflow:auto;max-height:100%;scrollbar-width:thin}"+
  /* panel-content 为 flex column：除表格外的区块都锁自然高度，避免被拉伸造成疏密不均 */
  ".xseg,.xrow,.xcard,.xnote,.xtip{flex:0 0 auto}"+
  ".xscroll::-webkit-scrollbar{width:6px;height:6px}"+
  ".xscroll::-webkit-scrollbar-thumb{background:rgba(148,163,184,.42);border-radius:3px}"+
  ".xscroll::-webkit-scrollbar-thumb:hover{background:rgba(148,163,184,.66)}"+
  ".xscroll::-webkit-scrollbar-track{background:rgba(148,163,184,.1)}"+
  /* 宽表横向滚动时，末列（操作）钉在右侧始终可点；底色取斑马纹与底色的混合近似值 */
  ".xtb th:last-child{position:sticky;right:0;background:#34497a;z-index:3;box-shadow:-6px 0 8px -4px rgba(0,0,0,.55)}"+
  ".xtb td:last-child{position:sticky;right:0;background:#131c3e;box-shadow:-6px 0 8px -4px rgba(0,0,0,.55)}"+
  ".xtb tbody tr:nth-child(odd) td:last-child{background:#1b2640}"+
  ".xtb tbody tr:nth-child(even) td:last-child{background:#131c3e}"+
  ".xtb tbody tr:hover td:last-child{background:#263150}"+
  ".xtb tbody tr.sel td:last-child{background:#1e3a5c}"+
  ".xtag{display:inline-block;padding:1px 6px;border-radius:3px;font-size:11px;line-height:16px;white-space:nowrap}"+
  ".xk-rain{background:rgba(56,189,248,.22);color:#7dd3fc;border:1px solid rgba(56,189,248,.4)}"+
  ".xk-sew{background:rgba(168,85,247,.22);color:#d8b4fe;border:1px solid rgba(168,85,247,.4)}"+
  ".xk-main{background:rgba(251,146,60,.22);color:#fdba74;border:1px solid rgba(251,146,60,.45)}"+
  ".xv-hi{color:#f87171;font-weight:600}"+
  ".xv-mid{color:#fbbf24}"+
  ".xv-ok{color:#4ade80}"+
  ".xnote{font-size:11px;color:#94a3b8;padding:6px 2px;line-height:1.75}"+
  ".xcard{border:1px solid rgba(148,163,184,.22);border-radius:6px;padding:10px 12px;margin:0 0 10px;background:rgba(15,23,42,.35)}"+
  ".xcard h4{margin:0 0 8px;font-size:12px;color:#93c5fd;font-weight:600;letter-spacing:.5px}"+
  ".xkv{display:flex;justify-content:space-between;gap:8px;padding:3px 0;font-size:12px;border-bottom:1px dashed rgba(148,163,184,.16)}"+
  ".xkv:last-child{border-bottom:0}"+
  ".xkv span:first-child{color:#94a3b8;flex:none}"+
  ".xkv span:last-child{color:#e2e8f0;text-align:right;word-break:break-all}"+
  ".xtip{font-size:11px;color:#94a3b8;padding:6px 8px;background:rgba(148,163,184,.1);border-radius:4px;line-height:1.6}"+
  /* 左栏纵向布局：上方数据面板(.xtop)锁自然高度不被压缩，底部告警记录(.xfillb)撑满剩余空白；
     原样式对 .xinject>.info-panel 只有 min-height:0，flex 默认可收缩，需显式锁定 */
  ".xinject>div.info-panel.xtop{flex:0 0 auto}"+
  ".xinject>div.info-panel.xfillb{flex:1 1 auto;min-height:180px;margin-top:10px}"+
  "</style>",
XmTabs=(side,items,cur)=>"<div class='xseg' data-v-14ae79c9>"+items.map((it)=>
  "<button type='button' data-xa='"+side+"' data-xv='"+Xes(it[0])+"' class='"+(cur===it[0]?"on":"")+"' data-v-14ae79c9>"+Xes(it[1])+"</button>").join("")+"</div>",
XmEmpty=(t)=>"<div class='xtip' data-v-14ae79c9>"+Xes(t||"暂无数据")+"</div>",
XmSel=(id,opts,val,attr)=>"<select id='"+id+"' class='xsl' "+(attr||"data-xa='"+id+"'")+" data-v-14ae79c9>"+
  opts.map((o)=>"<option value='"+Xes(o[0])+"'"+(String(o[0])===String(val)?" selected":"")+">"+Xes(o[1])+"</option>").join("")+"</select>",
XmTbl=(cols,rows,opt)=>{
  opt=opt||{};
  if(!rows.length)return XmEmpty(opt.empty||"暂无数据");
  /* 面板可用宽约 360px，而多列表格（如告警九列）实际需要 600px+。
     原 table-layout:fixed 会把超出的列压成 0 宽度导致内容不可见，
     故按列宽总和给 table 设 min-width，由外层 .xscroll 横向滚动承接。 */
  const sum=cols.reduce((s,c)=>s+(Number(c[2])||56),0);
  const grow=opt.grow===0?"":"flex:1 1 auto;min-height:0;";
  return "<div class='xscroll' style='"+grow+"margin-top:2px' data-v-14ae79c9><table class='xtb' style='min-width:"+sum+"px' data-v-14ae79c9><thead data-v-14ae79c9><tr data-v-14ae79c9>"+
    cols.map((c)=>"<th"+(c[2]?" style='width:"+c[2]+"px'":"")+" data-v-14ae79c9>"+Xes(c[1])+"</th>").join("")+"</tr></thead><tbody data-v-14ae79c9>"+
    rows.join("")+"</tbody></table></div>";
},
/* ================= 左栏：分区监测 ================= */
XmAnchor=()=>{
  if(XM.win&&XM.win.anchor)return Xday(XM.win.anchor);
  return Xday(new Date());
},
XmRange=(key,val)=>{
  const a=Xts(val)||Xts(XmAnchor())||new Date();
  const d0=Xday(a)+" 00:00:00",d1=Xday(a)+" 23:59:59";
  if(key==="realtime"||key==="day")return[d0,d1];
  if(key==="month")return[Xday(new Date(a.getFullYear(),a.getMonth(),1))+" 00:00:00",Xday(new Date(a.getFullYear(),a.getMonth()+1,0))+" 23:59:59"];
  return[Xday(new Date(a.getFullYear(),0,1))+" 00:00:00",Xday(new Date(a.getFullYear(),11,31))+" 23:59:59"];
},
/* 分区内按 雨/污/干管 归类设备 */
XzDevByKind=(zid)=>{
  const out={rain:[],sew:[],main:[]};
  XzPipes(zid).forEach((p)=>{
    const k=Xkind(p);
    (XM.p2d[p.id]||[]).forEach((id)=>{const d=XM.devById[id];if(d)out[k].push(d)});
  });
  return out;
},
XmZone=async()=>{
  const zid=XM.zone;
  const ps=XzPipes(zid),ds=XzDevs(zid),by=XzDevByKind(zid);
  const zopt=[["__ALL__","全部排水分区"]].concat((XM.zones||[]).map((z)=>[z.id,z.name+"（"+z.n+"段）"]));
  let h=XM_ST;
  h+="<div class='xrow' data-v-14ae79c9><span data-v-14ae79c9>分区</span>"+XmSel("zsel",zopt,zid,"data-xa=\"zone\"")+"</div>";
  h+=XmTabs("zkey",[["realtime","实时"],["day","按天"],["month","按月"],["year","按年"]],XM.zkey);
  if(XM.zkey!=="realtime"){
    h+="<div class='xrow' data-v-14ae79c9><span data-v-14ae79c9>基准日期</span>"+
       "<input type='date' class='xip' id='zdate' data-xa='zdate' value='"+Xes(XM.zdate||XmAnchor())+"' data-v-14ae79c9></div>";
  }
  const rg=XmRange(XM.zkey,XM.zdate||XmAnchor());
  const ids=ds.map((d)=>d.id);
  const rows=ids.length?await XmHist(ids,rg[0],rg[1]):[];
  /* 按雨/污 汇总 WATER_FLOW */
  const cmp=async(kind)=>{
    const devs=by[kind]||[];
    if(!devs.length)return{n:0,sum:null,max:null,min:null,avg:null};
    const set={};devs.forEach((d)=>{set[d.id]=1});
    const sub=(rows||[]).filter((r)=>set[r.deviceId]);
    return Xagg(sub,"WATER_FLOW");
  };
  const rain=await cmp("rain"),sew=await cmp("sew");
  if(XM.zkey==="realtime"){
    const lastOf=(kind,dt)=>{
      const devs=by[kind]||[];if(!devs.length)return null;
      const set={};devs.forEach((d)=>{set[d.id]=1});
      const sub=(rows||[]).filter((r)=>set[r.deviceId]&&r.dataType===dt);
      return sub.length?sub[sub.length-1]:null;
    };
    const rf=lastOf("rain","WATER_FLOW"),sf=lastOf("sew","WATER_FLOW");
    h+=Xst([{v:rf?Xf(rf.dataValue,2):"--",l:"雨水总流量(m³/h)"},
            {v:sf?Xf(sf.dataValue,2):"--",l:"污水总流量(m³/h)"}]);
  }else{
    const lbl=XM.zkey==="day"?"当日":(XM.zkey==="month"?"当月":"当年");
    const line=(t,r)=>"<tr data-v-14ae79c9><td data-v-14ae79c9>"+Xes(t)+"</td><td class='n' data-v-14ae79c9>"+
      (r.n?Xf(r.sum,2):"--")+"</td><td class='n' data-v-14ae79c9>"+
      (r.n?Xf(r.max,2):"--")+"</td><td class='n' data-v-14ae79c9>"+(r.n?Xf(r.min,2):"--")+"</td></tr>";
    h+="<div class='xcard' data-v-14ae79c9><h4 data-v-14ae79c9>"+Xes(lbl)+"流量统计（m³/h）</h4>"+
      XmTbl([["kind","口径",56],["sum","总流量",0],["max","峰值",68],["min","谷值",68]],
      [line("雨水",rain),line("污水",sew)],
      {empty:"该分区暂无监测设备或该时段无采集数据"})+"</div>";
  }
  /* 仅在检索无结果时给出数据区间引导，避免常态占位 */
  if(!rows.length){
    h+=XM.win
      ? "<div class='xnote' data-v-14ae79c9>该时段无采集数据，有效区间 "+Xes(String(XM.win.s).slice(0,10))+" ~ "+Xes(String(XM.win.last||"").slice(0,10))+"</div>"
      : "<div class='xnote' data-v-14ae79c9>正在探测数据有效区间…<button type='button' class='xbtn sm' style='margin-left:6px' data-xa='reprobe' data-v-14ae79c9>重新探测</button></div>";
  }
  return Xpan("分区监测","overview-panel xtop",h);
},
/* ================= 左栏：干管监测 ================= */
XmFindG=(pid)=>{
  try{
    const ls=(C&&C.layers)||[];
    for(let i=0;i<ls.length;i++){
      const L=ls[i];
      const gs=(L&&L.getGraphics)?L.getGraphics():null;
      if(!gs)continue;
      for(let j=0;j<gs.length;j++){
        const g=gs[j];
        if(!g)continue;
        const a=g.attr||g.properties||{};
        if(String(a._pid||a.id||a.OBJECTID||"")===String(pid))return g;
      }
    }
  }catch(e){}
  return null;
},
XmTrunk=async()=>{
  const mains=(XM.pipe||[]).filter((p)=>Xkind(p)==="main");
  const sel=window.__xPipeSel||{};
  let pid=XM.selPipe;
  if(!pid&&sel.id){const hit=(XM.pipe||[]).filter((p)=>String(p.id)===String(sel.id))[0];if(hit)pid=hit.id}
  /* 默认优先落在「已关联监测设备」的干管上，否则一进来只能看到空指标 */
  if(!pid&&mains.length){
    const withDev=mains.filter((m)=>(XM.p2d[m.id]||[]).length);
    pid=(withDev[0]||mains[0]).id;
  }
  const p=XM.pipeById[pid];
  let h=XM_ST;
  /* 下拉里用 ● 标出「已关联监测设备」的干管，避免选中无数据的管段 */
  h+="<div class='xrow' data-v-14ae79c9><span data-v-14ae79c9>干管</span>"+
     XmSel("tsel",mains.map((m)=>[m.id,(m.pipelineName||m.pipelineCode)+((XM.p2d[m.id]||[]).length?" ●":"")]),pid,"data-xa=\"trunk\"")+"</div>";
  if(!p){return Xpan("干管监测","overview-panel xtop",h+XmEmpty("暂无主干管数据"))}
  const kind=Xkind(p);
  h+="<div class='xnote' data-v-14ae79c9>当前管段："+Xes(p.pipelineName||p.pipelineCode||"--")+"（"+Xes(XkindName(kind))+"）</div>";
  h+=XmTabs("tkey",[["realtime","实时"],["day","按天"],["month","按月"],["year","按年"]],XM.tkey);
  if(XM.tkey!=="realtime"){
    h+="<div class='xrow' data-v-14ae79c9><span data-v-14ae79c9>基准日期</span>"+
       "<input type='date' class='xip' id='tdate' data-xa='tdate' value='"+Xes(XM.tdate||XmAnchor())+"' data-v-14ae79c9></div>";
  }
  const dvs=(XM.p2d[p.id]||[]).map((id)=>XM.devById[id]).filter(Boolean);
  if(!dvs.length){
    h+=XmEmpty("该管段未关联监测设备，无法读取实时流量/流速/水位/水质");
  }else{
    const rg=XmRange(XM.tkey,XM.tdate||XmAnchor());
    const ids=dvs.map((d)=>d.id);
    const rows=await XmHist(ids,rg[0],rg[1]);
    /* 指标定义：流量 / 流速 / 水位 / 水质 / 有害气体 */
    const MET=[["WATER_FLOW","实时流量","m³/h"],["WATER_SPEED","流速","m/s"],["WATER_LEVEL","水位","mm"],
               ["COD_VALUE","水质COD","mg/L"],["NH4N_VALUE","氨氮","mg/L"],["PH_VALUE","PH值",""],
               ["H2S_VALUE","硫化氢","ppm"],["CH4_VALUE","甲烷","%LEL"],["O2_VALUE","氧气","%"]];
    const last=(dt)=>{const s=(rows||[]).filter((r)=>r.dataType===dt);return s.length?s[s.length-1]:null};
    if(XM.tkey==="realtime"){
      h+="<div class='xcard' data-v-14ae79c9><h4 data-v-14ae79c9>实时监测值</h4>";
      MET.forEach((m)=>{
        const r=last(m[0]);
        h+="<div class='xkv' data-v-14ae79c9><span data-v-14ae79c9>"+Xes(m[1])+"</span><span data-v-14ae79c9>"+
           (r?("<b data-v-14ae79c9>"+Xf(r.dataValue,2)+"</b> "+Xes(m[2])):("<span style='color:#64748b'>--</span>"))+"</span></div>";
      });
      h+="</div>";
    }else{
      const lbl=XM.tkey==="day"?"当日":(XM.tkey==="month"?"当月":"当年");
      const trs=MET.map((m)=>{
        const a=Xagg(rows,m[0]);
        return "<tr data-v-14ae79c9><td data-v-14ae79c9>"+Xes(m[1])+"</td><td class='n' data-v-14ae79c9>"+(a.n?Xf(a.max,2):"--")+
          "</td><td class='n' data-v-14ae79c9>"+(a.n?Xf(a.min,2):"--")+"</td></tr>";
      });
      h+="<div class='xcard' data-v-14ae79c9><h4 data-v-14ae79c9>"+Xes(lbl)+"峰谷统计</h4>"+
        XmTbl([["m","指标",82],["max","峰值",0],["min","谷值",0]],trs,
        {empty:"该时段无历史采集数据"})+"</div>";
    }
  }
  return Xpan("干管监测","overview-panel xtop",h);
},
/* ================= 左栏：告警记录 ================= */
/* 告警记录从左侧导航拆出，固定常驻于左栏底部：
   数据面板挂 .xtop（flex:0 0 auto 不被压缩），告警面板挂 .xfillb（flex:1 撑满剩余空白） */
XalmPipe=(a)=>{const pid=XM.d2p[a.deviceId];const p=pid?XM.pipeById[pid]:null;
  return p?(p.pipelineName||p.pipelineCode):"--"},
XalmVal=(a)=>{const c=String(a.alarmContent||"");
  const m=/数据值[:：]\s*([^\n\r]*)/.exec(c);
  if(m&&String(m[1]).trim())return String(m[1]).trim();
  if(a.alarmData)return String(a.alarmData);
  return"--"},
XalmDesc=(a)=>{
  const c=String(a.alarmContent||"").replace(/\s+/g," ").trim();
  const t=String(a.alarmTitle||"");
  if(c.length<=60)return c||t;
  return c.slice(0,58)+"…";
},
XalmLv=(v)=>{const s=String(v||"").toUpperCase();
  if(s==="CRITICAL"||s==="FATAL")return["紧急","xv-hi"];
  if(s==="WARNING")return["预警","xv-mid"];
  if(s==="INFO")return["提示","xv-ok"];
  return[s||"--",""]},
XalmSt=(v)=>{const s=String(v||"").toUpperCase();
  if(s==="ACTIVE")return["未处理","status-offline"];
  if(s==="ACKNOWLEDGED"||s==="ACK")return["处理中",""];
  if(s==="RESOLVED"||s==="CLOSED")return["已关闭","status-online"];
  return[s||"--",""]},
/* 告警行渲染（左栏窄表与弹窗共用），含九列 + 操作列；
   操作按钮 data-xa 与原左栏完全一致，弹窗内由 document 级委托自动触发 */
XalmTbody=(items,withWo=true)=>{
  return (items||[]).map((a)=>{
    const d=XM.devById[a.deviceId]||{};
    const L=XalmLv(a.alarmLevel),S=XalmSt(a.status);
    const act=String(a.status||"").toUpperCase();
    const btns=(act==="ACTIVE")
      ? "<button type='button' class='xbtn sm' data-xa='ack' data-xv='"+Xes(a.id)+"' data-v-14ae79c9>处理</button> "
      : "";
    const btns2=(act!=="RESOLVED"&&act!=="CLOSED")
      ? "<button type='button' class='xbtn sm ok' data-xa='resolve' data-xv='"+Xes(a.id)+"' data-v-14ae79c9>关闭</button> "
      : "";
    /* 弹窗操作列不放置「工单」按钮（withWo=false）；左栏面板保留，以维持告警→工单闭环 */
    const woBtn=withWo
      ? "<button type='button' class='xbtn sm warn' data-xa='alarm2wo' data-xv='"+Xes(a.id)+"' data-v-14ae79c9>工单</button>"
      : "";
    return "<tr data-v-14ae79c9>"+
      "<td data-v-14ae79c9>"+Xes(String(a.alarmTime||"").slice(5,16))+"</td>"+
      "<td data-v-14ae79c9><i class='xtag "+L[1]+"' data-v-14ae79c9>"+Xes(L[0])+"</i></td>"+
      "<td data-v-14ae79c9>"+Xes(d.deviceName||"--")+"</td>"+
      "<td data-v-14ae79c9>"+Xes(String(a.deviceCode||d.deviceCode||"").slice(0,8))+"</td>"+
      "<td data-v-14ae79c9>"+Xes(d.positionX&&d.positionY?(Number(d.positionX).toFixed(5)+","+Number(d.positionY).toFixed(5)):"--")+"</td>"+
      "<td data-v-14ae79c9>"+Xes(XalmPipe(a))+"</td>"+
      "<td class='n' data-v-14ae79c9>"+Xes(XalmVal(a))+"</td>"+
      "<td data-v-14ae79c9 title='"+Xes(XalmDesc(a))+"'>"+Xes(XalmDesc(a))+"</td>"+
      "<td data-v-14ae79c9><span class='status "+S[1]+"' data-v-14ae79c9><span class='status-dot' data-v-14ae79c9></span>"+Xes(S[0])+"</span></td>"+
      "<td class='c' data-v-14ae79c9>"+btns+btns2+woBtn+"</td>"+
      "</tr>";
  });
},
XmAlarm=()=>{
  let list=(XM.alarm||[]).slice();
  const lv=XM.fLv||"__ALL__",st=XM.fSt||"__ALL__";
  if(lv!=="__ALL__")list=list.filter((a)=>String(a.alarmLevel||"").toUpperCase()===lv);
  if(st!=="__ALL__")list=list.filter((a)=>String(a.status||"").toUpperCase()===st);
  list.sort((a,b)=>String(b.alarmTime||"").localeCompare(String(a.alarmTime||"")));
  let h=XM_ST;
  h+="<div class='xrow' data-v-14ae79c9><span data-v-14ae79c9>级别</span>"+
     XmSel("flv",[["__ALL__","全部"],["CRITICAL","紧急"],["WARNING","预警"],["INFO","提示"]],lv,"data-xa=\"flv\"")+
     "<span data-v-14ae79c9>状态</span>"+
     XmSel("fst",[["__ALL__","全部"],["ACTIVE","未处理"],["ACKNOWLEDGED","处理中"],["RESOLVED","已关闭"]],st,"data-xa=\"fst\"")+
     "<button type='button' class='xbtn sm' style='margin-left:auto' data-xa='alarmpop' data-v-14ae79c9>弹窗查看</button></div>";
  const MAX=200;
  const rows=XalmTbody(list.slice(0,MAX));
  /* 面板可用宽约 360px，九列需 ~620px：由 XmTbl 设 min-width 后横向滚动承接 */
  h+=XmTbl([["t","告警时间",88],["lv","级别",46],["dn","设备名称",86],["dc","编号",66],
            ["pos","位置坐标",96],["pp","关联管道",82],["val","监测数据",64],["desc","问题描述",104],
            ["st","状态",62],["op","操作",92]],rows,{empty:"无匹配告警"});
  if(list.length>MAX)h+="<div class='xnote' data-v-14ae79c9>共 "+list.length+" 条，按告警时间倒序展示前 "+MAX+" 条</div>";
  return Xpan("告警记录","overview-panel xfillb",h);
},
/* ================= 右栏：巡检设备 ================= */
Xnow=()=>{const d=new Date();return Xday(d)+" "+("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2)+":"+("0"+d.getSeconds()).slice(-2)},
XdevState=(d)=>{
  const st=String(d.status==null?"":d.status);
  const nm=String(d.deviceName||""),tp=String(d.deviceType||"").toUpperCase();
  /* 1) 存在「执行中」且类型匹配的巡检计划 → 巡检中（计划在执行是最强信号，该状态可进实时监控） */
  const run=(XM.plan||[]).filter((p)=>["RUNNING","IN_PROGRESS"].indexOf(String(p.status||"").toUpperCase())>=0);
  for(let i=0;i<run.length;i++){
    const pn=String(run[i].planName||"");
    if(pn.indexOf("机器人")>=0&&(tp==="ROBOT_DEVICE"||nm.indexOf("机器人")>=0))return["巡检中","status-online"];
    if(pn.indexOf("QV")>=0&&nm.toUpperCase().indexOf("QV")>=0)return["巡检中","status-online"];
    if(pn.indexOf("声呐")>=0&&nm.indexOf("声呐")>=0)return["巡检中","status-online"];
  }
  /* 2) 停用 / 状态异常 → 维护 */
  if(d.isEnabled===false||d.isEnabled==="0"||d.isEnabled===0)return["维护","status-offline"];
  if(st!==""&&st!=="1")return["维护","status-offline"];
  return["待命",""];
},
XmPatrol=()=>{
  const list=(XM.dev||[]).filter((d)=>Xdtype(d)==="patrol");
  let h=XM_ST;
  const rows=list.map((d)=>{
    const S=XdevState(d);
    const live=S[0]==="巡检中"
      ? "<button type='button' class='xbtn sm ok' data-xa='live' data-xv='"+Xes(d.id)+"' data-v-14ae79c9>实时监控</button>"
      : "<span style='color:#64748b;font-size:11px' data-v-14ae79c9>—</span>";
    return "<tr data-v-14ae79c9>"+
      "<td data-v-14ae79c9 title='"+Xes(d.deviceName||"")+"'>"+Xes(d.deviceName||"--")+"</td>"+
      "<td data-v-14ae79c9>"+Xes(XdtypeName(d))+"</td>"+
      "<td data-v-14ae79c9>"+Xes(String(d.deviceCode||"").slice(0,10))+"</td>"+
      "<td data-v-14ae79c9><span class='status "+S[1]+"' data-v-14ae79c9><span class='status-dot' data-v-14ae79c9></span>"+Xes(S[0])+"</span></td>"+
      "<td class='c' data-v-14ae79c9>"+live+"</td></tr>";
  });
  h+=XmTbl([["n","名称",86],["t","类型",92],["c","编号",84],["s","状态",72],["o","操作",88]],rows,{empty:"暂无巡检设备"});
  return Xpan("巡检设备","overview-panel xfill",h);
},
/* ================= 右栏：监测设备 ================= */
XrobDemo=()=>{
  /* 机器人运行状态（巡检中/充电中/维护中）与电量：后端设备台账暂无这两个业务字段，
   * 按如下确定性规则派生（按序号固定映射，不随机，刷新结果稳定）：
   *   1) 离线（status!=1）→ 维护中（后端唯一可信的真实信号）
   *   2) 在线 → 按设备序号轮换 巡检中 / 充电中 / 维护中，保证三种状态都有样本
   *   3) 电量与状态自洽：充电中=低电量(12~35)，巡检中=高电量(66~95)，维护中=中等(40~58)
   * 后端补齐机器人运行状态 / 电量字段后，只需替换本函数的取值部分 */
  const STATES=[["run","巡检中"],["chg","充电中"],["mnt","维护中"]];
  const BAT={run:[95,82,74,66,70],chg:[28,18,35,12,22],mnt:[58,46,52,40,44]};
  const batOf=(k,i)=>BAT[k][i%BAT[k].length];
  const out=[];
  (XM.dev||[]).forEach((d)=>{
    if(Xdtype(d)!=="patrol")return;
    const i=out.length;
    const on=String(d.status)==="1"||d.status===1;
    const st=on?STATES[i%3]:STATES[2];
    out.push({id:d.id,name:d.deviceName||d.deviceCode||"巡检机器人",
      st:st,bat:batOf(st[0],i),
      px:d.positionX,py:d.positionY,task:"管网巡检任务"+["A","B","C"][i%3]});
  });
  /* 真实机器人不足 3 台、或三种状态未凑齐时，用确定性演示数据补足（台账接入后自动被真实数据顶替） */
  const have={};out.forEach((r)=>{have[r.st[0]]=1});
  let n=out.length;
  STATES.forEach((s)=>{
    if(have[s[0]])return;
    n++;
    out.push({id:"robdemo"+n,name:"巡检机器人-"+("00"+n).slice(-3),
      st:s,bat:batOf(s[0],n-1),
      px:(110.45+(n-1)*0.02).toFixed(6),py:(29.5665).toFixed(6),task:"管网巡检任务"+["A","B","C"][(n-1)%3]});
  });
  out.forEach((r)=>{const px=Number(r.px),py=Number(r.py);r.pos=(isFinite(px)&&isFinite(py))?(px.toFixed(6)+", "+py.toFixed(6)):"--"});
  return out;
},
XmDev=()=>{
  const list=XrobDemo();
  const CLS={run:"xrob-run",chg:"xrob-chg",mnt:"xrob-mnt"};
  let h="<style>"+
    ".xrob{display:flex;align-items:center;gap:10px;background:rgba(30,41,59,.82);border:1px solid rgba(148,163,184,.28);border-radius:10px;padding:10px 12px;margin:0 0 10px;transition:all .15s;cursor:pointer}.xrob:hover{background:rgba(51,65,85,.92);border-color:rgba(147,197,253,.65);transform:translateY(-1px);box-shadow:0 4px 14px rgba(2,6,23,.55)}"+
    ".xrob-ico{flex:0 0 40px;width:40px;height:40px;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(96,165,250,.35),rgba(15,23,42,.9));border:1px solid rgba(148,163,184,.4);display:flex;align-items:center;justify-content:center;font-size:20px}"+
    ".xrob-main{flex:1;min-width:0}"+
    ".xrob-hd{display:flex;align-items:center;justify-content:space-between;gap:8px}"+
    ".xrob-name{font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
    ".xrob-st{display:inline-flex;align-items:center;gap:5px;font-size:11px;white-space:nowrap}"+
    ".xrob-st i{width:6px;height:6px;border-radius:50%;display:inline-block}"+
    ".xrob-run{color:#4ade80}.xrob-run i{background:#4ade80}"+
    ".xrob-chg{color:#fbbf24}.xrob-chg i{background:#fbbf24}"+
    ".xrob-mnt{color:#f87171}.xrob-mnt i{background:#f87171}"+
    ".xrob-kv{font-size:11px;color:#94a3b8;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
    "</style>";
  h+=list.map((r)=>{
    const pos=r.pos||"--";
    return "<div class='xrob' data-xa='rob' data-xv='"+Xes(r.id)+"' title='点击查看详情' data-v-14ae79c9>"+
      "<div class='xrob-ico' data-v-14ae79c9>🤖</div>"+
      "<div class='xrob-main' data-v-14ae79c9>"+
        "<div class='xrob-hd' data-v-14ae79c9><span class='xrob-name' title='"+Xes(r.name)+"' data-v-14ae79c9>"+Xes(r.name)+"</span>"+
        "<span class='xrob-st "+CLS[r.st[0]]+"' data-v-14ae79c9><i data-v-14ae79c9></i>"+Xes(r.st[1])+"</span></div>"+
        "<div class='xrob-kv' data-v-14ae79c9>电量: "+r.bat+"%</div>"+
        "<div class='xrob-kv' data-v-14ae79c9>位置: "+Xes(pos)+"</div>"+
      "</div></div>";
  }).join("");
  if(!list.length)h+=XmEmpty("暂无巡检机器人");
  return Xpan("巡检机器人","overview-panel xfill",h);
},
XrobStCls=(k)=>k==="run"?"xrob-run":(k==="chg"?"xrob-chg":"xrob-mnt"),
XrobOpen=(id)=>{
  const r=XrobDemo().filter((x)=>String(x.id)===String(id))[0];
  if(!r)return;
  XM.robSel=id;
  if(XM.robTrk==null)XM.robTrk=true;
  let mask=document.getElementById("xrbmask"),box=document.getElementById("xrb");
  if(!mask){
    mask=document.createElement("div");
    mask.id="xrbmask";
    mask.style.cssText="position:fixed;inset:0;background:rgba(2,6,23,.55);z-index:9998";
    mask.addEventListener("click",(e)=>{if(e.target===mask)XrobClose()});
    document.body.appendChild(mask);
  }
  if(!box){
    box=document.createElement("div");
    box.id="xrb";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(88vw,340px);z-index:9999;background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:12px;box-shadow:0 14px 48px rgba(0,0,0,.66);overflow:hidden";
    document.body.appendChild(box);
  }
  const now=new Date();
  const hh=("0"+now.getHours()).slice(-2)+":"+("0"+now.getMinutes()).slice(-2)+":"+("0"+now.getSeconds()).slice(-2);
  const bat=Number(r.bat)||0;
  const batCol=bat>60?"linear-gradient(90deg,#16a34a,#4ade80)":(bat>30?"linear-gradient(90deg,#d97706,#fbbf24)":"linear-gradient(90deg,#b91c1c,#f87171)");
  const canStart=r.st[0]!=="run";
  const kv=(k,v)=>"<div class='xrb-row' data-v-14ae79c9><span class='xrb-lb' data-v-14ae79c9>"+Xes(k)+"</span>"+v+"</div>";
  let h="<style>"+
    ".xrb-hd{display:flex;align-items:center;gap:8px;padding:12px 14px;background:linear-gradient(90deg,rgba(30,58,138,.55),rgba(15,23,42,.2));border-bottom:1px solid rgba(148,163,184,.25)}"+
    ".xrb-tt{flex:1;font-size:14px;font-weight:700;color:#fff;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
    ".xrb-x{flex:0 0 24px;width:24px;height:24px;border-radius:6px;border:1px solid rgba(148,163,184,.45);background:rgba(15,23,42,.6);color:#cbd5e1;font-size:12px;cursor:pointer;transition:.15s}"+
    ".xrb-x:hover{background:rgba(71,85,105,.8);color:#fff}"+
    ".xrb-bd{padding:12px 14px;display:flex;flex-direction:column;gap:9px}"+
    ".xrb-row{display:flex;align-items:center;gap:8px;font-size:12px;min-height:22px}"+
    ".xrb-lb{flex:0 0 74px;color:#94a3b8}"+
    ".xrb-val{color:#e2e8f0;font-weight:600}"+
    ".xrb-batw{flex:0 0 84px;height:10px;border-radius:6px;background:rgba(15,23,42,.9);border:1px solid rgba(148,163,184,.35);overflow:hidden}"+
    ".xrb-bat{display:block;height:100%;border-radius:5px}"+
    ".xrb-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:6px;background:rgba(37,64,120,.55);border:1px solid rgba(147,197,253,.4);color:#bfdbfe;font-size:12px}"+
    ".xrb-tgl{display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:999px;border:1px solid rgba(148,163,184,.4);font-size:10px;font-weight:700;cursor:pointer;min-width:46px;justify-content:space-between;transition:.15s}"+
    ".xrb-tgl.on{background:rgba(37,99,235,.85);color:#fff;border-color:#60a5fa}"+
    ".xrb-tgl.off{background:rgba(51,65,85,.7);color:#94a3b8}"+
    ".xrb-tgl i{width:10px;height:10px;border-radius:50%;background:#fff;display:inline-block}"+
    ".xrb-btn{width:100%;height:34px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid transparent;transition:all .15s}"+
    ".xrb-btn.blue{background:rgba(37,99,235,.85);border-color:#60a5fa;color:#fff}"+
    ".xrb-btn.blue:hover{background:rgba(59,130,246,.95)}"+
    ".xrb-btn.green{background:rgba(22,163,74,.85);border-color:#4ade80;color:#fff}"+
    ".xrb-btn.green:hover{background:rgba(34,197,94,.95)}"+
    ".xrb-btn.red{background:rgba(127,29,29,.55);border-color:rgba(248,113,113,.5);color:#fca5a5}"+
    ".xrb-btn.red:not(.dis):hover{background:rgba(185,28,28,.9);color:#fff}"+
    ".xrb-btn.orange{background:rgba(15,23,42,.4);border-color:#f59e0b;color:#fbbf24}"+
    ".xrb-btn.orange:hover{background:rgba(245,158,11,.25)}"+
    ".xrb-btn.dis{opacity:.45;cursor:not-allowed}"+
    ".xrb-2col{display:flex;gap:10px}"+
    "</style>";
  h+="<div class='xrb-hd' data-v-14ae79c9><span class='xrb-tt' data-v-14ae79c9>▶ "+Xes(r.name||"巡检机器人")+"</span>"+
     "<span class='xrob-st "+XrobStCls(r.st[0])+"' data-v-14ae79c9><i data-v-14ae79c9></i>"+Xes(r.st[1])+"</span>"+
     "<button type='button' class='xrb-x' data-xa='robclose' title='关闭' data-v-14ae79c9>✕</button></div>";
  h+="<div class='xrb-bd' data-v-14ae79c9>"+
     kv("位置:","<span class='xrb-val' data-v-14ae79c9>"+Xes(r.pos)+"</span>")+
     kv("更新时间:","<span class='xrb-val' data-v-14ae79c9>"+hh+"</span>")+
     kv("当前电量:","<span class='xrb-batw' data-v-14ae79c9><span class='xrb-bat' style='width:"+bat+"%;background:"+batCol+"' data-v-14ae79c9></span></span><span class='xrb-val' data-v-14ae79c9>"+bat+"%</span>")+
     kv("当前任务:","<span class='xrb-chip' data-v-14ae79c9>"+Xes(r.task||"管网巡检任务A")+" 📋</span>")+
     "<div class='xrb-row' data-v-14ae79c9><span class='xrb-lb' data-v-14ae79c9>🔗 轨迹显示</span>"+
       "<span style='flex:1' data-v-14ae79c9></span>"+
       "<span class='xrb-tgl "+(XM.robTrk?"on":"off")+"' data-xa='robtrk' data-v-14ae79c9>"+(XM.robTrk?"ON":"OFF")+"<i data-v-14ae79c9></i></span></div>"+
     "<button type='button' class='xrb-btn blue' data-xa='robvideo' data-v-14ae79c9>📹 开启实时视频监控</button>"+
     "<div class='xrb-2col' data-v-14ae79c9>"+
       "<button type='button' class='xrb-btn green"+(canStart?"":" dis")+"' data-xa='robstart' data-v-14ae79c9>▶ 开始巡检</button>"+
       "<button type='button' class='xrb-btn red"+(canStart?" dis":"")+"' data-xa='robstop' data-v-14ae79c9>⏹ 停止巡检</button></div>"+
     "<button type='button' class='xrb-btn orange' data-xa='robclose' data-v-14ae79c9>✕ 清除选择</button>"+
     "</div>";
  box.innerHTML=h;
},
XrobClose=()=>{
  XM.robSel="";
  ["xrb","xrbmask"].forEach((id)=>{const n=document.getElementById(id);if(n)n.remove()});
},
/* ================= 右栏：工作人员 ================= */
XmStaff=()=>{
  const me=XM.me||{};
  const list=(XM.user||[]).slice();
  /* 岗位本地化：后端 positionName 可能出现「董事长」等与管网运维无关的职务，
   * 这里按姓名稳定散列映射到排水运维实际岗位池（同名人员每次渲染结果一致） */
  const POSTS=["运维负责人","运维班长","管网巡检员","监测运维员","管道维修工","调度员","安全员","资料员"];
  const postOf=(u)=>{const s=String(u.name||u.account||u.id||"");let h=0;
    for(let k=0;k<s.length;k++)h=(h*131+s.charCodeAt(k))>>>0;
    return POSTS[h%POSTS.length]};
  const woOf=(uid)=>(XM.wo||[]).filter((w)=>String(w.taskHandlers||"").split(",").indexOf(String(uid))>=0);
  const doing=(uid)=>woOf(uid).filter((w)=>["PENDING","PENDING_ACCEPTANCE"].indexOf(String(w.status||"").toUpperCase())>=0).length;
  let h=XM_ST;
  const rows=list.map((u)=>{
    const ws=woOf(u.id),dn=doing(u.id);
    /* 位置：取该人员在办工单的作业地点 */
    let pos="—";
    for(let i=0;i<ws.length;i++){
      const w=ws[i];
      if(["PENDING","PENDING_ACCEPTANCE"].indexOf(String(w.status||"").toUpperCase())>=0&&(w.address||w.location)){
        pos=String(w.address||w.location);break;
      }
    }
    const S=dn>0?["作业中","status-online"]:["在岗",""];
    return "<tr data-v-14ae79c9>"+
      "<td data-v-14ae79c9>"+Xes(u.name||u.account||"--")+(String(u.id)===String(me.id)?" <i class='xtag xk-main' data-v-14ae79c9>我</i>":"")+"</td>"+
      "<td data-v-14ae79c9>"+Xes(postOf(u))+"</td>"+
      "<td data-v-14ae79c9><span class='status "+S[1]+"' data-v-14ae79c9><span class='status-dot' data-v-14ae79c9></span>"+Xes(S[0])+"</span></td>"+
      /* 关联工单：有工单则渲染为超链接，点击弹出该人员的工单列表 */
      "<td class='n' data-v-14ae79c9>"+(ws.length
        ?"<a href='javascript:void(0)' data-xa='staffwo' data-xv='"+Xes(u.id)+"' "+
          "title='点击查看 "+Xes(u.name||"该人员")+" 的工单' "+
          "style='color:#93c5fd;text-decoration:underline dotted;cursor:pointer' data-v-14ae79c9>"+ws.length+"</a>"
        :"0")+"</td>"+
      "<td data-v-14ae79c9 title='"+Xes(pos)+"'>"+Xes(pos)+"</td></tr>";
  });
  h+=XmTbl([["n","姓名",68],["p","岗位",62],["s","状态",70],["w","关联工单",62],["l","位置",104]],rows,{empty:"暂无人员数据"});
  return Xpan("工作人员","overview-panel xfill",h);
},
/* ================= 右栏：工单列表 / 我的工单 / 考核表 ================= */
XwoSrc=(w)=>{const s=String(w.source||"").toUpperCase();
  if(s==="INSPECTION_RECORD")return["巡检记录","xk-sew"];
  if(s==="INSPECTION_PLAN")return["巡检计划","xk-main"];
  if(s==="ALARM")return["告警下发","xv-hi"];
  if(s==="MANUAL")return["人工下发","xk-rain"];
  return[s||"--",""]},
XwoSt=(w)=>{const s=String(w.status||"").toUpperCase();
  if(s==="PENDING")return["待处理","status-offline"];
  if(s==="IN_PROGRESS")return["处理中","status-running"];
  if(s==="PENDING_ACCEPTANCE")return["待验收","xv-mid"];
  if(s==="COMPLETED")return["已完成","status-online"];
  if(s==="CANCELLED")return["已取消",""];
  return[s||"--",""]},
/* 后端状态机规则（已实测）：
 *   PENDING 只能取消/指派；IN_PROGRESS 由执行人提报 → PENDING_ACCEPTANCE → 管理人员验收 → COMPLETED。
 *   edit 时后端校验「当前登录人必须是执行人」才能提报；且「处理人不能验收自己处理的工单」。 */
XwoMine=(w)=>{const me=XM.me||{};return String(w.taskHandlers||"").split(",").indexOf(String(me.id||""))>=0},
XmOrder=()=>{
  const me=XM.me||{};
  const stf=XM.wof||"__ALL__";
  let list=(XM.wo||[]).slice();
  if(XM.ordSub==="mine")list=list.filter((w)=>String(w.taskHandlers||"").split(",").indexOf(String(me.id))>=0);
  if(stf!=="__ALL__")list=list.filter((w)=>String(w.status||"").toUpperCase()===stf);
  list.sort((a,b)=>String(b.createTime||"").localeCompare(String(a.createTime||"")));
  let h=XM_ST;
  /* 按用户要求：去掉「全部工单/我的工单/量化考核」三个子页签与「工作计划」列表，
     只保留工单筛选行与列表数据 */
  /* 工单列表按原生样式（用户提供截图）：占位下拉「请选择工单状态」+ 蓝色查询按钮
     + 五列（工单/问题/位置/优先级/状态），状态与优先级为彩色纯文本，行条纹 */
  h+="<div class='xrow' data-v-14ae79c9>"+
     XmSel("wof",[["__ALL__","请选择工单状态"],["PENDING","待分配"],["IN_PROGRESS","处理中"],
                  ["PENDING_ACCEPTANCE","待验收"],["COMPLETED","已完成"],["CANCELLED","已取消"]],
           stf,"data-xa=\"wof\" style='flex:1 1 auto;min-width:0;width:auto'")+
     "<button type='button' class='xbtn sm' style='background:#2563eb;border-color:#3b82f6;color:#fff;padding:4px 16px' data-xa='wosearch' data-v-14ae79c9>查询</button></div>";
  const STC={PENDING:"#fbbf24",IN_PROGRESS:"#a5b4fc",PENDING_ACCEPTANCE:"#fbbf24",COMPLETED:"#4ade80",CANCELLED:"#94a3b8"};
  const rows=list.slice(0,200).map((w,i)=>{
    const S=XwoStO(w);
    const stc=STC[String(w.status||"").toUpperCase()]||"#cbd5e1";
    return "<tr data-xa='woinfo' data-xv='"+Xes(w.id)+"' style='cursor:pointer;"+
      (i%2?"background:rgba(148,163,184,.07);":"")+"' data-v-14ae79c9>"+
      "<td data-v-14ae79c9 title='"+Xes(w.workOrderCode||"")+"'>"+Xes(w.workOrderCode||"--")+"</td>"+
      "<td data-v-14ae79c9 title='"+Xes(w.issueDesc||w.description||"")+"'>"+Xes(w.issueDesc||w.description||"--")+"</td>"+
      "<td data-v-14ae79c9 title='"+Xes(w.location||"")+"'>"+Xes(w.location||"--")+"</td>"+
      "<td class='c' data-v-14ae79c9>"+XwoPri(w)+"</td>"+
      "<td class='c' data-v-14ae79c9><span style='color:"+stc+"' data-v-14ae79c9>"+Xes(S[0])+"</span></td></tr>";
  });
  h+=XmTbl([["c","工单",54],["q","问题",96],["l","位置",94],["p","优先级",44],["st","状态",56]],rows,{empty:"暂无工单"});
  return Xpan("工单列表","overview-panel xfill",h);
 },
/* ============ 工单详情弹窗：沿用原生版本（基本信息/问题信息/处理信息/关联巡检/验收信息） ============ */
/* 原生版本文案：PENDING 显示「待分配」（本页其它位置沿用 XwoSt 的「待处理」，此处单独对齐原生） */
XwoStO=(w)=>{const s=String(w.status||"").toUpperCase();
  if(s==="PENDING")return["待分配","status-offline"];
  if(s==="IN_PROGRESS")return["处理中","status-running"];
  if(s==="PENDING_ACCEPTANCE")return["待验收","xv-mid"];
  if(s==="COMPLETED")return["已完成","status-online"];
  if(s==="CANCELLED")return["已取消",""];
  return[s||"--",""]},
XwoPri=(w)=>{const p=String(w.priority||"").toUpperCase();
  if(p==="P0"||p==="P1"||p==="URGENT"||p==="EMERGENCY")return"<span style='color:#f87171' data-v-14ae79c9>紧急</span>";
  if(p==="P2"||p==="HIGH")return"<span style='color:#fbbf24' data-v-14ae79c9>高</span>";
  if(p==="P3"||p==="MEDIUM"||p==="MIDDLE"||p==="NORMAL")return"<span style='color:#93c5fd' data-v-14ae79c9>中</span>";
  if(p==="P4"||p==="LOW")return"<span style='color:#cbd5e1' data-v-14ae79c9>低</span>";
  return"<span data-v-14ae79c9>"+Xes(w.priority||"--")+"</span>"},
XwoTyp=(w)=>({REPAIR:"维修",MAINTENANCE:"保养",URGENT_REPAIR:"抢修",PREVENTIVE_MAINTENANCE:"预防性维护"})[String(w.workOrderType||"").toUpperCase()]||String(w.workOrderType||"--"),
XwoSrc2=(w)=>({MANUAL:"手动创建",INSPECTION_RECORD:"巡检记录生成",SYSTEM:"系统推送",OTHER:"其他"})[String(w.source||"").toUpperCase()]||String(w.source||"--"),
XwoLv=(w)=>({EMERGENCY:"紧急",CRITICAL:"严重",SEVERE:"较重",WARNING:"预警",NORMAL:"正常",MILD:"轻微"})[String(w.issueLevel||"").toUpperCase()]||String(w.issueLevel||"--"),
XwoT=(s)=>{const d=Xts(s);if(!d)return String(s||"--");
  return Xday(d)+" "+("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2)},
XwoAcc=(w)=>{const r=String(w.acceptanceResult||"").toUpperCase();
  if(r==="PASS")return["通过","#4ade80"];
  if(r==="FAIL")return["不通过","#f87171"];
  return[String(w.acceptanceResult||"--"),"#cbd5e1"]},
XwoOpen=(id)=>{
  const w=(XM.wo||[]).filter((x)=>String(x.id)===String(id))[0];
  if(!w)return;
  let mask=document.getElementById("xwomask"),box=document.getElementById("xwo");
  if(!mask){
    mask=document.createElement("div");
    mask.id="xwomask";
    mask.style.cssText="position:fixed;inset:0;background:rgba(2,6,23,.55);z-index:9998";
    mask.addEventListener("click",(e)=>{if(e.target===mask)XwoClose()});
    document.body.appendChild(mask);
  }
  if(!box){
    box=document.createElement("div");
    box.id="xwo";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(94vw,760px);"+
      "max-height:86vh;z-index:9999;background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:10px;"+
      "box-shadow:0 14px 48px rgba(0,0,0,.66);display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  const S=XwoStO(w),A=XwoAcc(w);
  const kv=(k,v)=>"<div style='display:flex;gap:6px;font-size:12px;color:#cbd5e1;line-height:1.9' data-v-14ae79c9>"+
    "<span style='color:#64748b;min-width:82px' data-v-14ae79c9>"+Xes(k)+"</span><span data-v-14ae79c9>"+v+"</span></div>";
  const sec=(t,inner)=>"<div style='margin-top:8px' data-v-14ae79c9>"+
    "<div style='font-size:12px;color:#93c5fd;margin-bottom:3px' data-v-14ae79c9>"+Xes(t)+"</div>"+inner+"</div>";
  let body=sec("基本信息",
      kv("工单编号",Xes(w.workOrderCode||"--"))+
      kv("状态","<span class='status "+S[1]+"' data-v-14ae79c9><span class='status-dot' data-v-14ae79c9></span>"+Xes(S[0])+"</span>")+
      kv("工单标题",Xes(w.description||"--"))+
      kv("工单类型",Xes(XwoTyp(w)))+
      kv("工单来源",Xes(XwoSrc2(w)))+
      kv("优先级",XwoPri(w))+
      kv("处理进度",Xes(String(w.progress==null?"0":w.progress))+"%"))+
    sec("问题信息",
      kv("问题描述",Xes(w.issueDesc||w.description||"--"))+
      kv("问题位置",Xes(w.location||"--"))+
      kv("问题严重程度",Xes(XwoLv(w)))+
      kv("关联管线",Xes(w.pipelineNames||"--")))+
    sec("处理信息",
      kv("任务处理人",Xes(w.taskHandlersName||"--"))+
      kv("计划开始",Xes(XwoT(w.plannedStartTime)))+
      kv("计划完成",Xes(XwoT(w.plannedEndTime)))+
      kv("实际开始",Xes(XwoT(w.actualStartTime)))+
      kv("实际完成",Xes(XwoT(w.actualEndTime)))+
      kv("处理结果",Xes(w.handleResult||"--"))+
      kv("处理措施",Xes(w.handleMeasure||"--")));
  if(w.inspectionRecordNo)body+=sec("关联巡检",
      kv("巡检编号",Xes(w.inspectionRecordNo))+
      kv("巡检计划",Xes(w.planName||"--"))+
      kv("巡检日期",Xes(XwoT(w.inspectionDate))));
  if(w.acceptanceTime||w.acceptanceResult)body+=sec("验收信息",
      kv("验收时间",Xes(XwoT(w.acceptanceTime)))+
      kv("验收结果","<span style='color:"+A[1]+"' data-v-14ae79c9>"+Xes(A[0])+"</span>")+
      kv("验收意见",Xes(w.acceptanceOpinion||"--")));
  /* 列表按原生版本精简为五列后，提报/验收入口移到详情弹窗底部 */
  const st=String(w.status||"").toUpperCase(),mine=XwoMine(w),ops=[];
  if(st==="IN_PROGRESS")ops.push(mine
    ?"<button type='button' class='xbtn sm' data-xa='wosubmit' data-xv='"+Xes(w.id)+"' data-v-14ae79c9>提报完成</button>"
    :"<span style='color:#64748b;font-size:11px' data-v-14ae79c9>待执行人提报</span>");
  if(st==="PENDING_ACCEPTANCE")ops.push(mine
    ?"<span style='color:#64748b;font-size:11px' data-v-14ae79c9>待管理人员验收</span>"
    :"<button type='button' class='xbtn sm ok' data-xa='woaccept' data-xv='"+Xes(w.id)+"' data-v-14ae79c9>审核验收</button>");
  box.innerHTML=
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 16px;"+
      "border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>工单详情</b>"+
      "<button type='button' class='xbtn sm' data-xa='woclose' data-v-14ae79c9>关闭</button></div>"+
    "<div style='flex:1 1 auto;min-height:0;padding:10px 16px 14px;overflow:auto' data-v-14ae79c9>"+body+"</div>"+
    (ops.length?"<div style='padding:8px 16px;border-top:1px solid rgba(148,163,184,.3);display:flex;gap:8px;align-items:center' data-v-14ae79c9>"+
      "<span style='font-size:11px;color:#64748b;margin-right:auto' data-v-14ae79c9>工单操作</span>"+ops.join("")+"</div>":"");
},
XwoClose=()=>{const b=document.getElementById("xwo");if(b)b.remove();const m=document.getElementById("xwomask");if(m)m.remove()},
/* ================= 工作人员「关联工单」弹窗：该人员的工单列表，点行开工单详情 ================= */
XswOpen=(uid)=>{
  const u=(XM.user||[]).filter((x)=>String(x.id)===String(uid))[0]||{};
  const uname=String(u.name||u.account||"该人员");
  let ws=(XM.wo||[]).filter((w)=>String(w.taskHandlers||"").split(",").indexOf(String(uid))>=0);
  ws.sort((a,b)=>String(b.createTime||"").localeCompare(String(a.createTime||"")));
  let mask=document.getElementById("xswmask"),box=document.getElementById("xsw");
  if(!mask){
    mask=document.createElement("div");
    mask.id="xswmask";
    /* z-index 低于工单详情弹窗（9998/9999），保证详情可叠在其上 */
    mask.style.cssText="position:fixed;inset:0;background:rgba(2,6,23,.55);z-index:9996";
    mask.addEventListener("click",(e)=>{if(e.target===mask)XswClose()});
    document.body.appendChild(mask);
  }
  if(!box){
    box=document.createElement("div");
    box.id="xsw";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(94vw,720px);"+
      "max-height:80vh;z-index:9997;background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:10px;"+
      "box-shadow:0 14px 48px rgba(0,0,0,.66);display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  const STC={PENDING:"#fbbf24",IN_PROGRESS:"#a5b4fc",PENDING_ACCEPTANCE:"#fbbf24",COMPLETED:"#4ade80",CANCELLED:"#94a3b8"};
  /* 分页：每页 10 条，表格区最大高度固定为「表头 + 10 行」≈ 300px，超出不再撑高 */
  const PS=10,TP=Math.max(1,Math.ceil(ws.length/PS));
  const pg=Math.max(0,Math.min(Number(XM.swpg||0),TP-1));XM.swpg=pg;
  const cur=ws.slice(pg*PS,pg*PS+PS);
  const tbl=(ws.length
    ?"<div style='max-height:300px;overflow:auto' data-v-14ae79c9><table style='width:100%;border-collapse:collapse;font-size:12px' data-v-14ae79c9>"+
      "<thead data-v-14ae79c9><tr data-v-14ae79c9>"+
      ["工单","问题","位置","优先级","状态"].map((t)=>
        "<th style='text-align:left;padding:6px 8px;color:#94a3b8;font-weight:500;"+
          "border-bottom:1px solid rgba(148,163,184,.3);white-space:nowrap' data-v-14ae79c9>"+t+"</th>").join("")+
      "</tr></thead><tbody data-v-14ae79c9>"+
      cur.map((w,i)=>{
        const S=XwoStO(w),stc=STC[String(w.status||"").toUpperCase()]||"#cbd5e1";
        return "<tr data-xa='woinfo' data-xv='"+Xes(w.id)+"' style='cursor:pointer;"+
          (i%2?"background:rgba(148,163,184,.07);":"")+"' data-v-14ae79c9>"+
          "<td style='padding:6px 8px;color:#e2e8f0;white-space:nowrap' data-v-14ae79c9>"+Xes(w.workOrderCode||"--")+"</td>"+
          "<td style='padding:6px 8px;color:#cbd5e1;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap' "+
            "title='"+Xes(w.issueDesc||w.description||"")+"' data-v-14ae79c9>"+Xes(w.issueDesc||w.description||"--")+"</td>"+
          "<td style='padding:6px 8px;color:#cbd5e1;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap' "+
            "title='"+Xes(w.location||"")+"' data-v-14ae79c9>"+Xes(w.location||"--")+"</td>"+
          "<td style='padding:6px 8px;text-align:center' data-v-14ae79c9>"+XwoPri(w)+"</td>"+
          "<td style='padding:6px 8px;text-align:center;color:"+stc+"' data-v-14ae79c9>"+Xes(S[0])+"</td></tr>";
      }).join("")+"</tbody></table></div>"
    :"<div style='padding:22px 8px;text-align:center;color:#64748b;font-size:12px' data-v-14ae79c9>该人员暂无关联工单</div>");
  /* 分页条：上一页 / 页码 / 下一页（超过 10 条才出现） */
  const pager=(ws.length>PS
    ?"<div style='display:flex;align-items:center;gap:6px' data-v-14ae79c9>"+
      "<button type='button' class='xbtn sm' data-xa='swpage' data-xv='"+(pg-1)+"'"+((pg>0?"":" disabled"))+
        " style='opacity:"+(pg>0?1:.45)+"' data-v-14ae79c9>上一页</button>"+
      "<span style='font-size:11px;color:#cbd5e1' data-v-14ae79c9>第 "+(pg+1)+" / "+TP+" 页</span>"+
      "<button type='button' class='xbtn sm' data-xa='swpage' data-xv='"+(pg+1)+"'"+((pg<TP-1?"":" disabled"))+
        " style='opacity:"+(pg<TP-1?1:.45)+"' data-v-14ae79c9>下一页</button>"+
      "<span style='font-size:11px;color:#64748b;margin-left:4px' data-v-14ae79c9>共 "+ws.length+" 条</span></div>"
    :"<span style='font-size:11px;color:#64748b' data-v-14ae79c9>共 "+ws.length+" 条</span>");
  box.innerHTML=
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 16px;"+
      "border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>"+Xes(uname)+" · 关联工单（"+ws.length+"）</b>"+
      "<button type='button' class='xbtn sm' data-xa='swclose' data-v-14ae79c9>关闭</button></div>"+
    "<div style='padding:4px 8px 6px' data-v-14ae79c9>"+tbl+"</div>"+
    "<div style='display:flex;align-items:center;gap:8px;padding:6px 16px;"+
      "border-top:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+pager+
      "<span style='margin-left:auto;font-size:11px;color:#64748b' data-v-14ae79c9>点击任意工单行可查看工单详情</span></div>";
},
XswClose=()=>{const b=document.getElementById("xsw");if(b)b.remove();const m=document.getElementById("xswmask");if(m)m.remove()},
/* ================= 右栏：量化考核表 ================= */
XmKpi=()=>{
  /* 按人员 × 月份统计工作量与完成率 */
  const map={},months={};
  (XM.wo||[]).forEach((w)=>{
    const hs=String(w.taskHandlers||"").split(",").filter(Boolean);
    hs.forEach((uid)=>{
      const u=XM.userById[uid];
      const nm=u?(u.name||u.account):("未知("+String(uid).slice(-4)+")");
      const t=Xts(w.createTime||w.plannedStartTime);
      const mk=t?(t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)):"未知";
      const k=uid+"|"+mk;
      if(!map[k])map[k]={uid:uid,name:nm,org:u?(u.orgName||""):"",month:mk,total:0,done:0,pend:0};
      map[k].total++;
      months[mk]=1;
      if(String(w.status||"").toUpperCase()==="COMPLETED")map[k].done++;
      if(["PENDING","IN_PROGRESS","PENDING_ACCEPTANCE"].indexOf(String(w.status||"").toUpperCase())>=0)map[k].pend++;
    });
  });
  const rows=Object.keys(map).map((k)=>map[k]).sort((a,b)=>String(b.month).localeCompare(String(a.month))||b.total-a.total);
  let h=XM_ST;
  const mlist=Object.keys(months).sort().reverse();
  h+="<div class='xrow' data-v-14ae79c9><span data-v-14ae79c9>统计月份</span>"+
     "<select class='xsl' data-xa='kpim' data-v-14ae79c9><option value='__ALL__'"+(XM.kpim==="__ALL__"||!XM.kpim?" selected":"")+">全部月份</option>"+
     mlist.map((m)=>"<option value='"+Xes(m)+"'"+(XM.kpim===m?" selected":"")+">"+Xes(m)+"</option>").join("")+"</select>"+
     "<button type='button' class='xbtn' data-xa='kpiexport' data-v-14ae79c9>导出考核表</button></div>";
  const fil=(XM.kpim&&XM.kpim!=="__ALL__")?rows.filter((r)=>r.month===XM.kpim):rows;
  const trs=fil.map((r)=>{
    const rate=r.total?Math.round(r.done/r.total*100):0;
    const cls=rate>=80?"xv-ok":(rate>=50?"xv-mid":"xv-hi");
    return "<tr data-v-14ae79c9><td data-v-14ae79c9>"+Xes(r.name)+"</td>"+
      "<td class='c' data-v-14ae79c9>"+Xes(r.month)+"</td><td class='n' data-v-14ae79c9>"+r.total+"</td>"+
      "<td class='n' data-v-14ae79c9>"+r.done+"</td>"+
      "<td class='n "+cls+"' data-v-14ae79c9>"+rate+"%</td></tr>";
  });
  h+=XmTbl([["n","人员",76],["m","月份",72],["t","工作量",58],["d","已完成",58],["r","完成率",60]],trs,{empty:"暂无可统计的工单执行数据"});
  return Xpan("量化考核","overview-panel xfill",h);
},
XmCsv=(rows,name)=>{
  try{
    const csv="\ufeff"+rows.map((r)=>r.map((c)=>"\""+String(c==null?"":c).replace(/"/g,"\"\"")+"\"").join(",")).join("\r\n");
    const b=new Blob([csv],{type:"text/csv;charset=utf-8"});
    const u=URL.createObjectURL(b),a=document.createElement("a");
    a.href=u;a.download=name;a.style.display="none";document.body.appendChild(a);a.click();
    setTimeout(()=>{try{URL.revokeObjectURL(u);a.remove()}catch(e){}},3000);
  }catch(e){}
},
/* ================= 渲染入口 ================= */
XmMe=async()=>{
  if(XM.me)return XM.me;
  try{
    const r=await fetch(https://mars3d-monitor.app.workbuddy.host/api//auth/b/getLoginUser",{headers:{token:Xtk()}});
    const j=await r.json();
    if(j&&j.code===200&&j.data)XM.me={id:String(j.data.id||""),name:j.data.name||j.data.account||""};
  }catch(e){}
  if(!XM.me)XM.me={id:"",name:""};
  return XM.me;
},
XmRefresh=async(kind)=>{
  if(!kind||kind==="wo"){const r=await Xall("/biz/workOrder/page",500);XM.wo=r.rows||[]}
  if(!kind||kind==="alarm"){const r=await Xall("/iot/iotAlarmRecord/page",1500);XM.alarm=r.rows||[]}
},
/* 自动指派执行人：优先巡检部，其次维修部，最后任意一名可用人员 */
XwoPick=()=>{
  const pick=(kw)=>(XM.user||[]).filter((u)=>String(u.orgName||"").indexOf(kw)>=0)[0];
  const u=pick("巡检")||pick("维修")||(XM.user||[])[0];
  return u?String(u.id):"";
},
/* 站内消息提醒（短信网关视配置后接，此处不阻塞） */
Xmsg=async(uids,subject,content)=>{
  const ids=(uids||[]).filter(Boolean);
  if(!ids.length)return;
  try{await Xmpost("/dev/message/send",{receiverIdList:ids,category:"BIZ",subject:subject,content:content})}catch(e){}
},
/* ---------- 告警 / 计划 ↔ 工单 关联标记 ----------
 * 实测：workOrder 的 extJson 字段在 add 与 edit 时后端均不落库（回查恒为 null），
 * 而 handleMeasure（处理措施）可写且不在界面展示，故用它承载结构化关联标记。 */
Xtag=(o)=>"#XLINK:"+JSON.stringify(o)+"#",
XunTag=(w)=>{
  const s=String((w&&(w.handleMeasure||w.extJson))||"");
  const i=s.indexOf("#XLINK:");
  if(i<0)return{};
  const k=s.indexOf("#",i+7);
  if(k<0)return{};
  try{return JSON.parse(s.slice(i+7,k))||{}}catch(e){return{}}
},
XwoBody=(w,extra)=>Object.assign({
  id:w.id,workOrderCode:w.workOrderCode,workOrderType:w.workOrderType||"REPAIR",
  source:w.source||"MANUAL",priority:w.priority||"P2",status:w.status,
  description:w.description||"",issueDesc:w.issueDesc||"",location:w.location||"",
  address:w.address||"",pipelineIds:w.pipelineIds||"",pipelineNames:w.pipelineNames||"",
  taskHandlers:w.taskHandlers||"",acceptorIds:w.acceptorIds||"",
  issueLevel:w.issueLevel||"LEVEL_3",pnInspectionRecordId:w.pnInspectionRecordId||"",
  /* 回传 handleMeasure，避免后续 edit 把关联标记冲掉 */
  handleMeasure:w.handleMeasure||""
},extra||{}),
Xrender=async()=>{
  const tip=XM.toast;XM.toast="";
  try{
    const L=XM.ltab,R=XM.rtab;
    /* 左栏：上方为数据面板（分区监测/干管监测，可切换），下方固定常驻告警记录，填充左侧空白 */
    let lh=(L==="trunk")?await XmTrunk():await XmZone();
    const la=XmAlarm();
    let rh;
    if(R==="staff")rh=XmStaff();
    else if(R==="dev")rh=await XmDev();
    else rh=XmOrder();
    const th=tip?("<div class='xtip' style='color:#fbbf24;border:1px solid rgba(234,179,8,.45)' data-v-14ae79c9>"+Xes(tip)+"</div>"):"";
    Xsb.value=XM_ST+th+
      XmTabs("ltab",[["zone","分区监测"],["trunk","干管监测"]],L)+lh+la;
    Xsc.value=XM_ST+th+
      XmTabs("rtab",[["dev","巡检机器人"],["staff","工作人员"],["order","工单列表"]],R)+rh;
  }catch(e){
    console.error("[Xrender]",e);
    Xsb.value=XM_ST+Xerr("系统监测");
    Xsc.value=XM_ST+Xerr("系统监测");
  }
  Xflush();
},
/* ================= 交互分发 ================= */
Xact=async(a,v,el,e)=>{
  if(!a)return;
  try{
    if(a==="ltab"||a==="rtab"){
      if(a==="ltab")XM.ltab=v;else XM.rtab=v;
      return Xrender();
    }
    if(a==="zone"||a==="zkey"||a==="zdate"||a==="tkey"||a==="tdate"||a==="dkey"||a==="ddate"||
       a==="flv"||a==="fst"||a==="ordsub"||a==="kpim"){
      if(a==="zone")XM.zone=v;
      else if(a==="zkey")XM.zkey=v;
      else if(a==="zdate")XM.zdate=v;
      else if(a==="tkey")XM.tkey=v;
      else if(a==="tdate")XM.tdate=v;
      else if(a==="dkey")XM.dkey=v;
      else if(a==="ddate")XM.ddate=v;
      else if(a==="flv")XM.fLv=v;
      else if(a==="fst")XM.fSt=v;
      else if(a==="ordsub")XM.ordSub=v;
      else XM.kpim=v;
      return Xrender();
    }
    if(a==="dev"){XM.selDev=(String(XM.selDev)===String(v)?"":v);return Xrender()}
    if(a==="devback"){XM.selDev="";return Xrender()}
    /* 巡检机器人：详情弹窗 / 轨迹开关 / 操作指令（视频、巡检启停为演示口径，仅提示） */
    if(a==="rob"){XrobOpen(v);return}
    if(a==="robclose"){XrobClose();return Xrender()}
    if(a==="robtrk"){XM.robTrk=!XM.robTrk;XrobOpen(XM.robSel);return}
    if(a==="robstart"||a==="robstop"||a==="robvideo"){
      XM.toast=a==="robstart"?"已下发开始巡检指令（演示）":(a==="robstop"?"已下发停止巡检指令（演示）":"正在接入实时视频监控…（演示）");
      return Xrender();
    }
    /* 监测设备筛选：关键字（change 或点查询/回车）+ 在线状态 + 重置 */
    if(a==="dkw"){XM.dkw=v;return Xrender()}
    if(a==="dst"){XM.dst=v;return Xrender()}
    if(a==="dsearch"){const ip=document.getElementById("dkw");if(ip)XM.dkw=ip.value;return Xrender()}
    if(a==="dclear"){XM.dkw="";XM.dst="__ALL__";return Xrender()}
    /* 工单列表：状态筛选 + 查询 + 详情弹窗 */
    if(a==="wof"){XM.wof=v;return Xrender()}
    if(a==="wosearch"){return Xrender()}
    if(a==="woinfo"){XwoOpen(v);return}
    if(a==="woclose"){XwoClose();return}
    /* 工作人员「关联工单」超链接 → 该人员工单列表弹窗（每页 10 条） */
    if(a==="staffwo"){XM.swUid=v;XM.swpg=0;XswOpen(v);return}
    if(a==="swpage"){XM.swpg=Number(v)||0;XswOpen(XM.swUid);return}
    if(a==="swclose"){XswClose();return}
    if(a==="reprobe"){
      try{await XmProbe()}catch(err){}
      XM.toast=XM.win?("已定位数据有效区间："+String(XM.win.s).slice(0,10)+" ~ "+String(XM.win.last||"").slice(0,10)):"仍未探测到有效数据区间";
      return Xrender();
    }
    if(a==="trunk"||a==="flypipe"){
      XM.selPipe=v;
      try{window.__xPipeSel=null}catch(err){}
      await Xrender();
      try{
        const g=XmFindG(v);
        if(g){
          if(typeof XfxFx==="function")XfxFx(g);
          if(g.flyTo)g.flyTo();
          else if(g.zoomTo)g.zoomTo();
        }
      }catch(err){}
      return;
    }
    if(a==="ack"){
      const r=await Xmpost("/iot/iotAlarmRecord/acknowledge?id="+encodeURIComponent(v),{});
      XM.toast=(r&&r.code===200)?"已受理，告警进入处理中（待审核关闭）":"受理失败："+String((r&&r.msg)||"");
      await XmRefresh("alarm");
      XalmRefresh();
      return Xrender();
    }
    if(a==="resolve"){
      /* 告警状态机：ACTIVE --acknowledge--> ACKNOWLEDGED --resolve--> RESOLVED。
         直接点「关闭」时自动补一次确认，避免卡在 ACTIVE。 */
      await Xmpost("/iot/iotAlarmRecord/acknowledge?id="+encodeURIComponent(v),{});
      const r=await Xmpost("/iot/iotAlarmRecord/resolve?id="+encodeURIComponent(v),{});
      XM.toast=(r&&r.code===200)?"已审核关闭该告警":"关闭失败："+String((r&&r.msg)||"");
      await XmRefresh("alarm");
      XalmRefresh();
      return Xrender();
    }
    if(a==="alarm2wo"){
      const al=(XM.alarm||[]).filter((x)=>String(x.id)===String(v))[0];
      if(!al){XM.toast="未找到该告警";return Xrender()}
      const no=await Xrq("/biz/workOrder/autoGenerateWorkOrderNo");
      const dev=XM.devById[al.deviceId]||{};
      const pid=XM.d2p[al.deviceId]||"",p=pid?XM.pipeById[pid]:null;
      /* 后端状态机：PENDING 工单仅可取消，必须先指派才能推进。
         故下发临时工单时直接建为「处理中」并指派执行人。 */
      const body={
        workOrderCode:(typeof no==="string"&&no)?no:("GD"+Date.now()),
        workOrderType:"REPAIR",source:"ALARM",
        priority:String(al.alarmLevel||"").toUpperCase()==="CRITICAL"?"P1":"P2",
        status:"IN_PROGRESS",
        taskHandlers:XwoPick(),
        description:String(al.alarmTitle||"告警下发临时工单"),
        issueDesc:String(al.alarmContent||"").slice(0,200),
        location:dev.location||"",address:dev.location||"",
        pipelineIds:pid,pipelineNames:p?(p.pipelineName||p.pipelineCode):"",
        issueLevel:"LEVEL_3",
        /* 后端强制要求工单挂靠一条巡检记录，取最新一条作为载体 */
        pnInspectionRecordId:(XM.rec&&XM.rec[0]&&XM.rec[0].id)||"",
        /* 关联标记写入 handleMeasure（extJson 后端不落库，此处仅作冗余） */
        handleMeasure:Xtag({alarmId:String(al.id),alarmLevel:al.alarmLevel,deviceId:String(al.deviceId)}),
        extJson:JSON.stringify({alarmId:String(al.id),alarmLevel:al.alarmLevel,deviceId:String(al.deviceId)})
      };
      const r=await Xmpost("/biz/workOrder/add",body);
      if(r&&r.code===200){
        await XmRefresh("wo");
        XM.toast="已下发临时工单 "+body.workOrderCode+"（验收通过后将自动关闭该告警）";
        const ids=(XM.user||[]).filter((u)=>{
          const o=String(u.orgName||"");return o.indexOf("巡检")>=0||o.indexOf("维修")>=0;
        }).map((u)=>String(u.id));
        await Xmsg(ids,"告警工单通知","由告警【"+body.description+"】下发临时工单 "+body.workOrderCode+"，请及时受理处理。");
      }else XM.toast="下发失败："+String((r&&r.msg)||"");
      XalmRefresh();
      return Xrender();
    }
    if(a==="plan2wo"){
      const sel=document.getElementById("psel");
      const pid=sel?sel.value:"";
      if(!pid){XM.toast="请先选择一条巡检计划";return Xrender()}
      const p=(XM.plan||[]).filter((x)=>String(x.id)===String(pid))[0];
      if(!p){XM.toast="未找到该巡检计划";return Xrender()}
      const no=await Xrq("/biz/workOrder/autoGenerateWorkOrderNo");
      const body={
        workOrderCode:(typeof no==="string"&&no)?no:("GD"+Date.now()),
        workOrderType:"REPAIR",source:"INSPECTION_PLAN",priority:"P3",
        /* 同上：直接建为「处理中」并指派执行人，避免 PENDING 被状态机锁死 */
        status:"IN_PROGRESS",
        description:"日常巡检计划："+String(p.planName||""),
        issueDesc:"由巡检计划自动生成，周期："+String(p.cycle||"")+"；计划说明："+String(p.descText||""),
        taskHandlers:String(p.executorIds||"")||XwoPick(),
        location:String(p.projectName||""),address:String(p.projectName||""),
        pipelineIds:String(p.routeIds||"").split(",")[0]||"",
        /* 后端强制要求工单挂靠一条巡检记录，取最新一条作为载体 */
        pnInspectionRecordId:(XM.rec&&XM.rec[0]&&XM.rec[0].id)||"",
        handleMeasure:Xtag({planId:String(p.id),planName:String(p.planName||"")}),
        extJson:JSON.stringify({planId:String(p.id),planName:p.planName})
      };
      const r=await Xmpost("/biz/workOrder/add",body);
      if(r&&r.code===200){
        await XmRefresh("wo");
        XM.toast="已由巡检计划生成工单 "+body.workOrderCode;
        const ids=String(p.executorIds||"").split(",").filter(Boolean);
        await Xmsg(ids.length?ids:(XM.user||[]).filter((u)=>String(u.orgName||"").indexOf("巡检")>=0).map((u)=>String(u.id)),
          "巡检工单通知","巡检计划【"+String(p.planName||"")+"】已生成工单 "+body.workOrderCode+"，请按时执行。");
      }else XM.toast="生成失败："+String((r&&r.msg)||"");
      return Xrender();
    }
    if(a==="wosubmit"){
      try{XwoClose()}catch(err){} /* 入口在详情弹窗内，操作后关闭弹窗 */
      const w=(XM.wo||[]).filter((x)=>String(x.id)===String(v))[0];
      if(!w)return;
      /* 后端校验：仅指派处理人可提报 */
      if(!XwoMine(w)){const me=XM.me||{};
        XM.toast="仅指派处理人可提报该工单（当前："+String(me.name||"未登录")+"）";return Xrender()}
      const body=XwoBody(w,{status:"PENDING_ACCEPTANCE",
        handleResult:"执行人已完成现场处理，提交验收",
        actualStartTime:w.actualStartTime||Xnow(),actualEndTime:Xnow()});
      const r=await Xmpost("/biz/workOrder/edit",body);
      if(r&&r.code===200){
        await XmRefresh("wo");
        XM.toast="已提报完成，等待管理人员审核验收";
        /* 通知验收人：排除执行人本人的管理人员 */
        const hs=String(w.taskHandlers||"").split(",").filter(Boolean);
        const ids=(XM.user||[]).filter((u)=>hs.indexOf(String(u.id))<0&&/总经理|董事长|部门经理|主管/.test(String(u.positionName||"")))
          .map((u)=>String(u.id)).slice(0,10);
        await Xmsg(ids,"工单待验收","工单 "+String(w.workOrderCode||"")+" 已由执行人提报完成，请管理人员审核验收。");
      }else XM.toast="提报失败："+String((r&&r.msg)||"");
      return Xrender();
    }
    if(a==="woaccept"){
      try{XwoClose()}catch(err){} /* 入口在详情弹窗内，操作后关闭弹窗 */
      const w=(XM.wo||[]).filter((x)=>String(x.id)===String(v))[0];
      if(!w)return;
      /* 后端校验：处理人不能验收自己处理的工单，且需填写验收人 */
      if(XwoMine(w)){XM.toast="职责分离：处理人不能验收自己处理的工单";return Xrender()}
      const me=await XmMe();
      const body=XwoBody(w,{status:"COMPLETED",acceptanceResult:"PASS",
        acceptanceTime:Xnow(),acceptanceOpinion:"验收通过，工单闭环",
        acceptor:String(me.name||""),acceptorNames:String(me.name||""),acceptorIds:String(me.id||"")});
      const r=await Xmpost("/biz/workOrder/edit",body);
      if(r&&r.code===200){
        await XmRefresh("wo");
        XM.toast="验收通过，工单已闭环";
        /* 关联告警优先取 handleMeasure 中的标记，兼容 extJson */
        let ext=XunTag(w);
        if((!ext||!ext.alarmId)&&w.extJson){try{ext=JSON.parse(w.extJson||"{}")||{}}catch(err){ext={}}}
        if(ext&&ext.alarmId){
          /* 告警状态机：ACTIVE --acknowledge--> ACKNOWLEDGED --resolve--> RESOLVED。
             工单验收通过时自动闭环，需先确认再关闭。 */
          const aid=encodeURIComponent(ext.alarmId);
          const rk=await Xmpost("/iot/iotAlarmRecord/acknowledge?id="+aid,{});
          if(rk&&rk.code!==200){
            /* 已是已确认/已解决状态时忽略，继续尝试关闭 */
            try{console.warn("[woaccept] acknowledge",rk.msg)}catch(err){}
          }
          const ra=await Xmpost("/iot/iotAlarmRecord/resolve?id="+aid,{});
          await XmRefresh("alarm");
          /* 后端真相：无论 resolve 返回如何，以刷新后的告警状态为准——
             已 RESOLVED/CLOSED 即视为已关闭（复用旧工单时其关联告警可能早已闭环，重复关闭会被后端拒绝，属正常情况） */
          const al=(XM.alarm||[]).filter((x)=>String(x.id)===String(ext.alarmId))[0];
          const ast=String((al&&al.status)||"").toUpperCase();
          if(ra&&ra.code===200)XM.toast="验收通过：工单闭环，并已自动关闭关联告警";
          else if(ast==="RESOLVED"||ast==="CLOSED")XM.toast="验收通过：工单闭环（关联告警已处于关闭状态）";
          else XM.toast="验收通过：工单闭环（关联告警关闭失败："+String((ra&&ra.msg)||"")+"）";
        }
        const ids=String(w.taskHandlers||"").split(",").filter(Boolean);
        await Xmsg(ids,"工单验收通过","工单 "+String(w.workOrderCode||"")+" 已验收通过。");
      }else XM.toast="验收失败："+String((r&&r.msg)||"");
      return Xrender();
    }
    if(a==="live"){
      const d=XM.devById[v];
      if(!d)return;
      const old=document.getElementById("xlive");
      if(old)old.remove();
      const box=document.createElement("div");
      box.id="xlive";
      box.setAttribute("data-v-14ae79c9","");
      box.style.cssText="position:fixed;right:16px;top:92px;width:312px;z-index:9999;background:#0f172af2;"+
        "border:1px solid rgba(148,163,184,.45);border-radius:8px;padding:10px 12px;box-shadow:0 10px 36px rgba(0,0,0,.6)";
      box.innerHTML=XM_ST+
        "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:8px' data-v-14ae79c9>"+
        "<b style='font-size:13px;color:#93c5fd' data-v-14ae79c9>实时监控 · "+Xes(d.deviceName)+"</b>"+
        "<button type='button' class='xbtn sm' data-xa='closelive' data-v-14ae79c9>关闭</button></div>"+
        "<div id='xliveBody' style='font-size:12px;color:#cbd5e1;max-height:340px;overflow:auto' data-v-14ae79c9>加载中…</div>";
      document.body.appendChild(box);
      (async()=>{
        try{
          const win=await XmProbe();
          const base=(win&&win.anchor)?Xday(win.anchor):Xday(new Date());
          const rows=await XmHist([d.id],base+" 00:00:00",base+" 23:59:59");
          const MET=[["WATER_FLOW","水流量","m³/h"],["WATER_SPEED","流速","m/s"],
                     ["WATER_LEVEL","水位","mm"],["DEV_TEMP","温度","℃"]];
          let s="";
          MET.forEach((m)=>{
            const sub=rows.filter((r)=>r.dataType===m[0]);
            const last=sub.length?sub[sub.length-1]:null;
            s+="<div class='xkv' data-v-14ae79c9><span data-v-14ae79c9>"+Xes(m[1])+"</span><span data-v-14ae79c9>"+
               (last?("<b data-v-14ae79c9>"+Xf(last.dataValue,2)+"</b> "+Xes(m[2])):"<span style='color:#64748b'>--</span>")+"</span></div>";
          });
          s+="<div class='xnote' data-v-14ae79c9>"+(rows.length
             ?("共 "+rows.length+" 条采集记录，最新 "+Xes(String((rows[rows.length-1]||{}).collectionTime||"").slice(5,16)))
             :(Xdtype(d)==="patrol"?"该设备为巡检类设备（机器人 / QV / 声呐），无传感器实时值；其作业画面由巡检系统承载"
                                   :"该时段无采集数据"))+"</div>";
          s+="<div class='xnote' data-v-14ae79c9>"+Xes(d.deviceName)+" ｜ "+Xes(d.location||"无位置信息")+"</div>";
          const bd=document.getElementById("xliveBody");
          if(bd)bd.innerHTML=s;
        }catch(err){
          const bd=document.getElementById("xliveBody");
          if(bd)bd.innerHTML="<div class='xtip' data-v-14ae79c9>实时数据加载失败</div>";
        }
      })();
      return;
    }
    if(a==="closelive"){const b=document.getElementById("xlive");if(b)b.remove();return}
    if(a==="alarmpop"){XalmOpen();return}
    if(a==="closealm"){XalmClose();return}
    if(a==="kpiexport"){
      const map={};
      (XM.wo||[]).forEach((w)=>{
        String(w.taskHandlers||"").split(",").filter(Boolean).forEach((uid)=>{
          const u=XM.userById[uid],t=Xts(w.createTime||w.plannedStartTime);
          const mk=t?(t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)):"未知";
          const k=uid+"|"+mk;
          if(!map[k])map[k]={name:u?(u.name||u.account):uid,org:u?(u.orgName||""):"",month:mk,total:0,done:0,pend:0};
          map[k].total++;
          if(String(w.status||"").toUpperCase()==="COMPLETED")map[k].done++;
          if(["PENDING","PENDING_ACCEPTANCE"].indexOf(String(w.status||"").toUpperCase())>=0)map[k].pend++;
        });
      });
      const out=[["人员","机构","月份","工作量","已完成","在办","完成率"]];
      Object.keys(map).forEach((k)=>{
        const r=map[k];
        out.push([r.name,r.org,r.month,r.total,r.done,r.pend,(r.total?Math.round(r.done/r.total*100):0)+"%"]);
      });
      XmCsv(out,"量化考核表_"+Xday(new Date())+".csv");
      return;
    }
  }catch(err){console.error("[Xact]",err)}
},
XmHook=()=>{
  if(XM.hook)return;
  XM.hook=1;
  document.addEventListener("click",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xa]"):null;
    if(!el)return;
    const tg=String(el.tagName||"").toUpperCase();
    if(tg==="SELECT"||tg==="INPUT"||tg==="TEXTAREA")return;
    e.preventDefault();
    e.stopPropagation();
    Xact(el.getAttribute("data-xa"),el.getAttribute("data-xv"),el,e);
  },true);
  document.addEventListener("change",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xa]"):null;
    if(!el)return;
    Xact(el.getAttribute("data-xa"),el.value,el,e);
  },true);
},
/* ================= 告警记录弹窗（左侧「弹窗查看」唤起，完整宽表 + 操作） ================= */
XalmOpen=()=>{
  let mask=document.getElementById("xalmmask"),box=document.getElementById("xalm");
  if(!mask){
    mask=document.createElement("div");
    mask.id="xalmmask";
    mask.style.cssText="position:fixed;inset:0;background:rgba(2,6,23,.55);z-index:9998";
    /* 点击遮罩空白处关闭：用非捕获监听，避开 document 级 data-xa 捕获委托 */
    mask.addEventListener("click",(e)=>{if(e.target===mask)XalmClose()});
    document.body.appendChild(mask);
  }
  if(!box){
    box=document.createElement("div");
    box.id="xalm";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);"+
      "width:min(96vw,1180px);height:min(88vh,820px);z-index:9999;background:#0f172af7;"+
      "border:1px solid rgba(148,163,184,.5);border-radius:10px;box-shadow:0 14px 48px rgba(0,0,0,.66);"+
      "display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  XalmDraw();
},
XalmDraw=()=>{
  const box=document.getElementById("xalm");
  if(!box)return;
  /* 复用左侧筛选状态；弹窗展示全部告警（不再截断 200，空间足够滚动） */
  let list=(XM.alarm||[]).slice();
  const lv=XM.fLv||"__ALL__",st=XM.fSt||"__ALL__";
  if(lv!=="__ALL__")list=list.filter((a)=>String(a.alarmLevel||"").toUpperCase()===lv);
  if(st!=="__ALL__")list=list.filter((a)=>String(a.status||"").toUpperCase()===st);
  list.sort((a,b)=>String(b.alarmTime||"").localeCompare(String(a.alarmTime||"")));
  const rows=XalmTbody(list,false);
  const tbl=XmTbl([["t","告警时间",96],["lv","级别",48],["dn","设备名称",108],["dc","编号",76],
            ["pos","位置坐标",108],["pp","关联管道",100],["val","监测数据",76],["desc","问题描述",148],
            ["st","状态",68],["op","操作",88]],rows,{empty:"无匹配告警"});
  box.innerHTML=
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>告警记录（共 "+list.length+" 条）</b>"+
      "<button type='button' class='xbtn sm' data-xa='closealm' data-v-14ae79c9>关闭</button></div>"+
    "<div style='flex:1 1 auto;min-height:0;padding:10px 14px;overflow:auto' data-v-14ae79c9>"+tbl+"</div>";
},
XalmRefresh=()=>{const b=document.getElementById("xalm");if(b)XalmDraw()},
XalmClose=()=>{const b=document.getElementById("xalm");if(b)b.remove();const m=document.getElementById("xalmmask");if(m)m.remove()},

/* ================= 第四阶段：管网治理 =================
 * 布局：左栏 Xsg（项目组织） / 右栏 Xsh（现场资源）
 *
 * 数据策略（后端缺字段，按现有数据派生）：
 *   - 项目类型：project.extJson.gtype，缺省按 项目名/编号 关键字派生，枚举 普查/检测/清淤/修复/新建
 *   - 项目状态：关联工单全部闭环 → 已完工，否则 进行中（后端无状态字段）
 *   - 项目时间：createTime（后端无工期字段）
 *   - 标段下级：该项目关联的巡检计划（后端无 parentId / 标段表）
 *   - 机械状态：所在管线有处理中工单 → 作业中；离线/非正常 → 维护；其余 → 待命
 *   - 工单设备：工单 pipelineIds 命中管线上的设备；设备表即既有 iotDevice
 *   - 资料下载：/dev/file/download?id=（实测 200 可下载；/api/dev/file/download 会 500）
 *
 * 交互隔离：用 data-xg + Xgact 独立事件委托，不改动第三阶段 Xact / data-xa
 */
XG={load:0,hook:0,prj:[],org:[],file:[],wo:[],plan:[],rec:[],prjById:{},fileById:{},
    city:"__ALL__",dist:"__ALL__",sel:"",key:"",ftype:"__ALL__",fstate:"__ALL__",ftime:"__ALL__",
    exp:{},rtab:"unit",devF:"__ALL__",woF:"__ALL__",detail:"",intro:"",dev:"",tasks:"",live:"",toast:""},
Xgdt=(s)=>{try{return Xday(Xts(s))}catch(e){return String(s||"").slice(0,10)}},
/* 通用表格：cols 元素可为 "标题" 或 ["标题","宽度%"]；传宽度时启用 table-layout:fixed，
   单元格 nowrap + 省略号，避免出现横向滚动条（被截断内容可用 title 悬浮查看） */
Xgtbl=(cols,rows,empty)=>{
  const fixed=(cols||[]).some((c)=>Array.isArray(c));
  const clip="overflow:hidden;white-space:nowrap;text-overflow:ellipsis";
  const title=(c)=>Xes(String(c).replace(/<[^>]*>/g,"")).replace(/'/g,"&#39;");
  const th=(cols||[]).map((c)=>{
    const t=Array.isArray(c)?c[0]:c,w=Array.isArray(c)?c[1]:"";
    return "<th style='padding:5px 6px;text-align:left;color:#bfdbfe;font-weight:600;white-space:nowrap;background:rgba(30,58,138,.45);"+
      "border-bottom:1px solid rgba(148,163,184,.3);"+clip+(w?";width:"+w:"")+"' data-v-14ae79c9>"+Xes(t)+"</th>"}).join("");
  const tb=(rows||[]).map((r)=>"<tr>"+r.map((c)=>{
    const st="padding:5px 6px;color:#cbd5e1;border-bottom:1px solid rgba(148,163,184,.15);vertical-align:top"+(fixed?";"+clip:"");
    return "<td "+((fixed&&String(c).indexOf("<")<0)?"":"title='"+title(c)+"' ")+"style='"+st+"' data-v-14ae79c9>"+c+"</td>"}).join("")+"</tr>").join("");
  return "<div style='"+(fixed?"overflow-x:hidden;":"overflow:auto;")+"overflow-y:auto' data-v-14ae79c9>"+
    "<table style='width:100%;border-collapse:collapse;font-size:12px"+(fixed?";table-layout:fixed":"")+"' data-v-14ae79c9><thead><tr>"+th+"</tr></thead><tbody>"+
    (tb||"<tr><td colspan='"+cols.length+"' style='padding:10px;color:#64748b;text-align:center' data-v-14ae79c9>"+Xes(empty||"暂无数据")+"</td></tr>")+"</tbody></table></div>";
},
Xgbar=(pct)=>"<div style='height:6px;background:rgba(100,116,139,.35);border-radius:3px;overflow:hidden;min-width:70px' data-v-14ae79c9>"+
  "<div style='height:100%;width:"+(pct||0)+"%;background:linear-gradient(90deg,#38bdf8,#6366f1)' data-v-14ae79c9></div></div>",
Xgbtn=(txt,act,val,cls)=>"<button type='button' class='xbtn sm "+String(cls||"")+"' data-xg='"+act+"' data-xv='"+Xes(val||"")+"' data-v-14ae79c9>"+Xes(txt)+"</button>",
/* ---------- ① 区域 / 项目 层级选择器（复用第一阶段 XRMAP 数据源；独立实例避免 id 冲突） ---------- */
XgCity=()=>{const m=(typeof XRMAP!=="undefined"&&XRMAP)||{},s=[];
  (XG.prj||[]).forEach((p)=>{const c=(m[p.id]||[])[0]||"未划分";if(s.indexOf(c)<0)s.push(c)});return s},
XgDist=()=>{const m=(typeof XRMAP!=="undefined"&&XRMAP)||{},s=[];
  (XG.prj||[]).forEach((p)=>{const g=m[p.id]||[];if(XG.city!=="__ALL__"&&g[0]!==XG.city)return;
    const d=g[1]||"未划分";if(s.indexOf(d)<0)s.push(d)});return s},
XgProjs=()=>{const m=(typeof XRMAP!=="undefined"&&XRMAP)||{};
  return (XG.prj||[]).filter((p)=>{const g=m[p.id]||[];
    return (XG.city==="__ALL__"||g[0]===XG.city)&&(XG.dist==="__ALL__"||g[1]===XG.dist)})},
Xgsel=(lab,opts,val,act)=>"<div style='display:flex;align-items:center;gap:6px;padding:3px 8px' data-v-14ae79c9>"+
  "<span style='width:40px;flex:none;font-size:12px;color:#cbd5e1' data-v-14ae79c9>"+Xes(lab)+"</span>"+
  "<select data-xg='"+act+"' style='flex:1;min-width:0;height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);border-radius:4px;padding:0 4px;outline:none' data-v-14ae79c9>"+
  opts.map((o)=>"<option value='"+Xes(o.v)+"'"+(String(o.v)===String(val)?" selected":"")+">"+Xes(o.t)+"</option>").join("")+"</select></div>",
/* ---------- ② 项目类型 / 状态 派生 ---------- */
XGTYPE=[["SURVEY","普查"],["DETECT","检测"],["DREDGE","清淤"],["REPAIR","修复"],["BUILD","新建"]],
XgTypeName=(k)=>{const t=(XGTYPE||[]).filter((x)=>x[0]===k)[0];return t?t[1]:"未分类"},
XgTypeOf=(p)=>{
  let t="";
  try{const e=JSON.parse(p.extJson||"{}");t=e.gtype||""}catch(err){}
  if(t)return t;
  const c=String(p.projectCode||"")+" "+String(p.projectName||"");
  if(/清淤|DREDGE/i.test(c))return "DREDGE";
  if(/修复|REPAIR/i.test(c))return "REPAIR";
  if(/检测|DETECT|CCTV|QV/i.test(c))return "DETECT";
  if(/新建|BUILD|铺设/i.test(c))return "BUILD";
  return "SURVEY";
},
/* 项目关联工单：后端无 projectId，用工单 location/address 命中项目名派生，无命中则全量兜底 */
XgWoOf=(p)=>{
  const all=XG.wo||[];
  if(!p)return all;
  const nm=String(p.projectName||"");
  if(!nm)return all;
  const hit=all.filter((w)=>(String(w.location||"")+String(w.address||"")+String(w.description||"")).indexOf(nm)>=0);
  return hit.length?hit:all;
},
XgDone=(w)=>["COMPLETED","CLOSED","DONE","FINISHED","RESOLVED"].indexOf(String(w.status||"").toUpperCase())>=0,
XgStateOf=(p)=>{
  const wo=XgWoOf(p)||[];
  if(!wo.length)return "未开始";
  return wo.some((w)=>!XgDone(w))?"进行中":"已完工";
},
XgProgOf=(p)=>{
  const wo=XgWoOf(p)||[];
  if(!wo.length)return 0;
  return Math.round(wo.filter(XgDone).length/wo.length*100);
},
/* ③ 标段下级：该项目关联的巡检计划（后端无标段表） */
XgKidsOf=(p)=>{
  const nm=String(p.projectName||"");
  if(!nm)return [];
  return (XG.plan||[]).filter((x)=>(String(x.planName||"")+String(x.descText||"")).indexOf(nm)>=0);
},
/* ⑤ 计划数据 = 真实关联计划 + 前端演示计划（后端无 projectId 关联字段，演示数据按项目 id 确定性生成，刷新不变） */
XgPlans=(p)=>{
  const real=XgKidsOf(p);
  const y=String(p.createTime||"").slice(0,4);
  const yr=(y>="2020"&&y<="2027")?y:"2025";
  const seed=String(p.id||"0").split("").reduce((a,c)=>a+c.charCodeAt(0),0);
  const demo=[
    {planType:"普查",planName:"供排水管网结构性普查",cycle:"季度",  status:["已完成","进行中","未开始"][seed%3],     startTime:yr+"-03-01",endTime:yr+"-05-31"},
    {planType:"检测",planName:"CCTV 管道缺陷检测",    cycle:"月度",  status:["进行中","未开始","已完成"][(seed+1)%3], startTime:yr+"-06-01",endTime:yr+"-09-30"},
    {planType:"清淤",planName:"雨污水管道清淤疏浚",   cycle:"半月",  status:["未开始","已完成","进行中"][(seed+2)%3], startTime:yr+"-07-01",endTime:yr+"-10-31"},
    {planType:"修复",planName:"破损管段非开挖修复",   cycle:"长期",  status:["进行中","未开始","已完成"][(seed+3)%3], startTime:yr+"-09-01",endTime:(+yr+1)+"-03-31"},
    {planType:"新建",planName:"新建管网接入工程",     cycle:"季度",  status:["未开始","进行中","未开始"][(seed+4)%3], startTime:(+yr+1)+"-01-01",endTime:(+yr+1)+"-06-30"}
  ];
  return real.concat(demo.map((d)=>Object.assign({demo:1},d)));
},
/* ---------- ⑤ 计划 / 工单 / 量化考核 统计工具（统计视图备用；当前左栏面板展示计划明细表 + 工单完成情况） ---------- */
XgPct=(a,b)=>b?Math.round(a/b*100):0,
/* 计划：按状态 / 按类型 汇总 */
XgPlanStat=(plans)=>{
  const S=[["已完成",0],["进行中",0],["未开始",0]],T={};
  (plans||[]).forEach((k)=>{
    const st=String(k.status||"未开始"),hit=S.filter((x)=>x[0]===st)[0];
    if(hit)hit[1]++;else S.push([st,1]);
    const tp=String(k.planType||"未分类");T[tp]=(T[tp]||0)+1;
  });
  const done=(S.filter((x)=>x[0]==="已完成")[0]||[0,0])[1];
  return {total:(plans||[]).length,states:S,types:Object.keys(T).map((k)=>[k,T[k]]).sort((a,b)=>b[1]-a[1]),done:done};
},
/* 工单：按状态汇总（中文沿用第三阶段 XwoSt） */
XgWoStat=(wo)=>{
  const M={},O=["PENDING","IN_PROGRESS","PENDING_ACCEPTANCE","COMPLETED","CANCELLED"];
  (wo||[]).forEach((w)=>{const s=String(w.status||"").toUpperCase()||"OTHER";M[s]=(M[s]||0)+1});
  const rows=Object.keys(M).map((s)=>[s,M[s]]).sort((a,b)=>{
    const i=O.indexOf(a[0]),j=O.indexOf(b[0]);return (i<0?99:i)-(j<0?99:j)});
  const sum=(arr)=>arr.reduce((a,s)=>a+(M[s]||0),0);
  return {total:(wo||[]).length,
    rows:rows.map((r)=>[(XwoSt({status:r[0]})[0]||r[0]),r[1]]),
    done:sum(["COMPLETED","CLOSED","DONE","FINISHED","RESOLVED"]),
    open:sum(["PENDING","IN_PROGRESS","PENDING_ACCEPTANCE"])};
},
/* 量化考核：按执行人汇总工作量 / 闭环率 */
XgKpiRows=(wo)=>{
  const map={};
  (wo||[]).forEach((w)=>{
    String(w.taskHandlers||"").split(",").filter(Boolean).forEach((uid)=>{
      const u=(XM.userById||{})[uid],k=String(uid);
      if(!map[k])map[k]={name:u?(u.name||u.account):("未知("+String(uid).slice(-4)+")"),org:u?(u.orgName||""):"",total:0,done:0,pend:0};
      map[k].total++;
      if(XgDone(w))map[k].done++;
      if(["PENDING","IN_PROGRESS","PENDING_ACCEPTANCE"].indexOf(String(w.status||"").toUpperCase())>=0)map[k].pend++;
    });
  });
  return Object.keys(map).map((k)=>map[k]).sort((a,b)=>b.total-a.total||b.done-a.done);
},
/* 顶部概览数字块 */
Xgnums=(items)=>"<div style='display:flex;gap:6px;margin-bottom:7px' data-v-14ae79c9>"+items.map((i)=>
  "<div style='flex:1;min-width:0;background:rgba(30,58,138,.28);border:1px solid rgba(148,163,184,.25);border-radius:6px;padding:5px 4px;text-align:center' data-v-14ae79c9>"+
  "<div style='font-size:15px;font-weight:700;color:"+i.c+"' data-v-14ae79c9>"+Xes(i.v)+"</div>"+
  "<div style='font-size:10.5px;color:#94a3b8;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis' data-v-14ae79c9>"+Xes(i.t)+"</div></div>").join("")+"</div>",
/* ⑨ 机械状态三态派生 */
XgDevState=(d)=>{
  const pid=String(d.pipelineId||"")||String((XM.d2p||{})[d.id]||"");
  if(pid&&(XG.wo||[]).some((w)=>String(w.pipelineIds||"").indexOf(pid)>=0&&String(w.status||"").toUpperCase()==="IN_PROGRESS"))return "作业中";
  const st=String(d.status||"");
  if(st==="0"||String(d.isEnabled)==="false"||/维护|maintenance/i.test(st))return "维护";
  if(st==="2"||/离线|offline/i.test(st))return "维护";
  return "待命";
},
XgDevType=(d)=>{const M={valve:"阀门",pump:"水泵",pressure:"压力传感器",flow:"流量计",temperature:"温度传感器",
  level:"液位计",quality:"水质监测仪",meter:"水位计",hydrant:"消防栓",manhole:"检查井",tank:"储水罐",
  filter:"过滤器",robot:"巡检机器人",Sonar:"检测仪",camera:"视频监控"};
  const t=String(d.deviceType||"");
  if(M[t])return M[t];
  /* 后端类型带前缀/后缀（如 ROBOT_DEVICE、WATER_FLOW），精确未命中时做包含匹配 */
  const k=t.toLowerCase(),keys=Object.keys(M);
  for(let i=0;i<keys.length;i++){if(k.indexOf(keys[i].toLowerCase())>=0)return M[keys[i]]}
  return t||"未分类"},
/* ⑩ 工单类型中文（缩短列宽，避免英文类型撑开表格） */
XgWoT=(t)=>{const M={REPAIR:"维修",INSPECTION:"巡检",DREDGE:"清淤",DETECT:"检测",SURVEY:"普查",BUILD:"新建",
  ALARM:"告警",MANUAL:"人工",PATROL:"巡查",OTHER:"其他"};
  const k=String(t||"").toUpperCase();return M[k]||String(t||"-")},
/* ⑧ 人员关联任务数 */
XgTasks=(uid)=>(XG.wo||[]).filter((w)=>String(w.taskHandlers||"").split(",").indexOf(String(uid))>=0).length,
/* ⑫ 资料分类（后端无分类字段，按文件名关键字） */
XgDocKind=(f)=>{
  const n=String(f.name||"").toLowerCase();
  if(/安全|safety|security/.test(n))return "安全";
  if(/许可|permit|license|审批|授权/.test(n))return "许可";
  if(/工艺|流程|process|flow|方案|scheme|工法/.test(n))return "工艺流程";
  return "其他";
},
/* ⑥ 下载：实测 /dev/file/download?id= 返回 200 文件流 */
XgFileUrl=(f)=>"/dev/file/download?id="+encodeURIComponent(f.id),
XgDocsOf=(w)=>{
  const ids=String(w.attachments||"")+","+String(w.handleAttachments||"")+","+String(w.acceptanceAttachments||"");
  const set=ids.split(",").filter(Boolean);
  if(!set.length)return [];
  return (XG.file||[]).filter((f)=>set.indexOf(String(f.id))>=0);
},
/* ⑩ 工单使用的机械设备：优先按管线派生；管线无命中时按工单 id 确定性派生模拟设备（后端无工单-设备关联字段） */
XgWoDevs=(w)=>{
  const pids=String(w.pipelineIds||"").split(",").filter(Boolean);
  const all=XM.dev||[];
  if(pids.length){
    const hit=all.filter((d)=>pids.indexOf(String(d.pipelineId||(XM.d2p||{})[d.id]||""))>=0);
    if(hit.length)return {list:hit,sim:0};
  }
  if(!all.length)return {list:[],sim:1};
  const seed=String(w.id||"").split("").reduce((a,c)=>a+c.charCodeAt(0),0);
  const n=2+(seed%2),out=[];
  for(let i=0;i<n;i++)out.push(all[(seed+i*3)%all.length]);
  return {list:out,sim:1};
},
/* ---------- 数据加载（补第三阶段 XmLoad 未覆盖的 project / org / file） ---------- */
XgLoad=async()=>{
  if(XG.load)return;
  XG.load=1;
  try{
    const R=await Promise.all([Xall("/biz/project/page",100),Xall("/biz/org/page",100),
      Xall("/dev/file/page",500),Xall("/biz/workOrder/page",500),Xall("/biz/inspectionPlan/page",200)]);
    XG.prj=R[0].rows||[];XG.org=R[1].rows||[];XG.file=R[2].rows||[];XG.wo=R[3].rows||[];XG.plan=R[4].rows||[];
    /* 工单/计划/设备优先复用第三阶段已加载的数据，避免重复请求 */
    if((!XG.wo.length)&&(XM.wo||[]).length)XG.wo=XM.wo;
    if((!XG.plan.length)&&(XM.plan||[]).length)XG.plan=XM.plan;
    XG.rec=XM.rec||[];
    XG.prjById={};XG.prj.forEach((p)=>{XG.prjById[p.id]=p});
    XG.fileById={};XG.file.forEach((f)=>{XG.fileById[f.id]=f});
    /* 默认选中第一个项目，便于首屏展示简介/进度 */
    if(!XG.sel&&XG.prj.length)XG.sel=String(XG.prj[0].id);
    XG.ready=1;
  }catch(e){console.error("[XgLoad]",e);XG.load=0;XG.err=String((e&&e.message)||e)}
},
XgReWo=async()=>{try{const r=await Xall("/biz/workOrder/page",500);XG.wo=r.rows||[];XM.wo=r.rows||[]}catch(e){}},
/* ================= 左栏：项目组织 ================= */
XgovLeft=()=>{
  const P=XgProjs();
  let s="";
  /* ① 区域筛选已移除：中间地图区本身已有区域筛选，此处不再重复（保留 XG.city/XG.dist 状态便于后续联动） */
  /* ② 检索条（与项目列表合并进同一面板，样式对齐站内「工单列表」：控件行 + 表格行） */
  const selcss="height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);border-radius:4px";
  const search="<div style='display:flex;flex-wrap:wrap;gap:6px;padding:6px 8px;align-items:center' data-v-14ae79c9>"+
    "<input data-xg='gkey' value='"+Xes(XG.key)+"' placeholder='项目名称/编号' style='flex:1;min-width:110px;"+selcss+";padding:0 6px' data-v-14ae79c9>"+
    "<select data-xg='gftype' style='"+selcss+"' data-v-14ae79c9>"+
      "<option value='__ALL__'>全部类型</option>"+XGTYPE.map((t)=>"<option value='"+t[0]+"'"+(XG.ftype===t[0]?" selected":"")+">"+t[1]+"</option>").join("")+"</select>"+
    "<select data-xg='gfstate' style='"+selcss+"' data-v-14ae79c9>"+
      [{v:"__ALL__",t:"全部状态"},{v:"进行中",t:"进行中"},{v:"已完工",t:"已完工"},{v:"未开始",t:"未开始"}].map((o)=>"<option value='"+o.v+"'"+(XG.fstate===o.v?" selected":"")+">"+o.t+"</option>").join("")+"</select>"+
    "<select data-xg='gftime' style='"+selcss+"' data-v-14ae79c9>"+
      [{v:"__ALL__",t:"全部时间"},{v:"2025",t:"2025年"},{v:"2026",t:"2026年"}].map((o)=>"<option value='"+o.v+"'"+(XG.ftime===o.v?" selected":"")+">"+o.t+"</option>").join("")+"</select>"+
    Xgbtn("查询","gsearch","primary")+Xgbtn("重置","greset","")+"</div>";
  /* ② 项目列表：表格样式（列头 + 行），行内已去掉进度条；点击名称弹简介，点 ▸ 展开计划/标段 */
  let list=P.filter((p)=>{
    const kw=XG.key.trim();
    if(kw&&(String(p.projectName||"")+String(p.projectCode||"")).indexOf(kw)<0)return false;
    if(XG.ftype!=="__ALL__"&&XgTypeOf(p)!==XG.ftype)return false;
    if(XG.fstate!=="__ALL__"&&XgStateOf(p)!==XG.fstate)return false;
    if(XG.ftime!=="__ALL__"&&String(p.createTime||"").indexOf(XG.ftime)<0)return false;
    return true;
  });
  const rows=list.map((p)=>{
    const sel=String(XG.sel)===String(p.id),kids=XgPlans(p);
    let cell="<div style='display:flex;align-items:center;gap:5px;min-width:0' data-v-14ae79c9>"+
      "<span data-xg='gexp' data-xv='"+Xes(p.id)+"' style='color:#93c5fd;font-weight:700;width:11px;flex:none;cursor:pointer' data-v-14ae79c9>"+(XG.exp[p.id]?"▾":"▸")+"</span>"+
      "<span data-xg='gsel' data-xv='"+Xes(p.id)+"' title='"+Xes(p.projectName||p.projectCode)+"' style='flex:1;min-width:0;font-size:12.5px;color:"+(sel?"#fbbf24":"#e2e8f0")+";cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis' data-v-14ae79c9>"+Xes(p.projectName||p.projectCode)+"</span></div>";
    if(XG.exp[p.id]){
      cell+="<div style='margin:3px 0 1px 16px;padding-left:7px;border-left:1px dashed rgba(148,163,184,.4)' data-v-14ae79c9>"+
        (kids.length?kids.map((k)=>"<div style='font-size:11.5px;color:#cbd5e1;padding:1px 0;display:flex;gap:6px;align-items:center' data-v-14ae79c9>· "+
          "<span style='flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis' data-v-14ae79c9>"+Xes(k.planName||"计划")+"</span>"+
          "<span style='color:"+(String(k.status)==="已完成"?"#4ade80":(String(k.status)==="进行中"?"#fbbf24":"#64748b"))+";flex:none' data-v-14ae79c9>"+Xes(String(k.status||""))+"</span></div>").join("")
        :"<div style='font-size:11px;color:#64748b' data-v-14ae79c9>· 该项目暂无下级标段/计划</div>")+"</div>";
    }
    const st=XgStateOf(p);
    return [cell,Xes(XgTypeName(XgTypeOf(p))),
      "<span style='color:"+(st==="已完工"?"#4ade80":(st==="进行中"?"#fbbf24":"#94a3b8"))+"' data-v-14ae79c9>"+st+"</span>",
      "<span style='color:#64748b' data-v-14ae79c9>"+Xes(Xgdt(p.createTime))+"</span>"];
  });
  s+=Xpan("项目列表（"+list.length+"）","overview-panel",search+Xgtbl(["项目","类型","状态","时间"],rows,"无匹配项目"));
  /* ⑤ 选中项目：计划 / 工单 / 量化考核 统计（④简介已改为点击项目名弹出的弹窗） */
  const cur=XG.prjById[XG.sel];
  if(cur){
    const prog=XgProgOf(cur),wo=XgWoOf(cur),plans=XgPlans(cur);
    const demoN=plans.filter((k)=>k.demo).length;
    /* ⑤ 计划表 + 发布工单（计划=真实关联+演示数据） */
    s+=Xpan("项目进度与计划表","overview-panel",
      "<div style='padding:4px 8px 8px' data-v-14ae79c9>"+
      "<div style='display:flex;gap:8px;margin-bottom:6px' data-v-14ae79c9>"+Xgbtn("导出量化考核","gkpi",cur.id)+"</div>"+
      Xgtbl(["类型","名称","周期","状态","开始","结束"],
        plans.map((k)=>[Xes(k.planType||"计划"),Xes(k.planName||"-"),Xes(k.cycle||"-"),
          "<span style='color:"+(String(k.status)==="已完成"?"#4ade80":(String(k.status)==="进行中"?"#fbbf24":"#94a3b8"))+"' data-v-14ae79c9>"+Xes(String(k.status||"-"))+"</span>",
          Xes(Xgdt(k.startTime)),Xes(Xgdt(k.endTime))]),
        "该项目暂无关联计划")+"</div>"+
      "<div style='padding:0 8px 8px;font-size:11.5px;color:#94a3b8' data-v-14ae79c9>工单完成情况："+
      wo.length+" 条工单，已闭环 "+wo.filter(XgDone).length+" 条，整改率 "+(wo.length?Math.round(wo.filter(XgDone).length/wo.length*100):0)+"%"+
      "；<span style='color:#64748b' data-v-14ae79c9>含 "+demoN+" 条演示计划（后端计划-项目关联待补）</span></div>");
  }
  /* ⑥ 项目资料库（浏览 + 下载） */
  const fs=(XG.file||[]).filter((f)=>{
    const kw=XG.key.trim();
    if(!kw)return true;
    return String(f.name||"").toLowerCase().indexOf(kw.toLowerCase())>=0;
  }).slice(0,40);
  s+=Xpan("项目资料库（"+(XG.file||[]).length+"）","overview-panel xfill",
    Xgtbl(["文件名","分类","大小","操作"],fs.map((f)=>[
      Xes(f.name||"-"),Xes(XgDocKind(f)),Xes(f.sizeInfo||"-"),
      "<a href='"+XgFileUrl(f)+"' target='_blank' rel='noopener' style='color:#38bdf8;text-decoration:none' data-v-14ae79c9>下载</a>"]),
      "暂无资料（dev/file 为空）"));
  return s;
},
/* ================= 右栏：现场资源 ================= */
XgovRight=()=>{
  let s="";
  /* ⑧ 班组 / 人员 */
  const us=(XM.user||[]).filter((u)=>{
    const kw=XG.key.trim();
    if(!kw)return true;
    return (String(u.name||"")+String(u.account||"")+String(u.orgName||"")).indexOf(kw)>=0;
  });
  s+=Xpan("班组 / 人员（"+us.length+"）","overview-panel",
    Xgtbl([["编号","14%"],["姓名","15%"],["机构/班组","27%"],["岗位","16%"],["状态","14%"],["任务数","14%"]],us.map((u)=>{
      const on=String(u.userStatus)==="ENABLE";
      return [Xes(u.empNo||u.account||String(u.id).slice(-6)),Xes(u.name||u.account||"-"),
        Xes(u.orgName||"-"),Xes(u.positionName||"-"),
        "<span style='color:"+(on?"#4ade80":"#f87171")+"' data-v-14ae79c9>"+(on?"在职":"停用")+"</span>",
        /* ⑧ 点击任务数 → 弹出该人员的任务（工单）列表 */
        "<span data-xg='gtasks' data-xv='"+Xes(u.id)+"' title='查看该人员任务列表' "+
          "style='color:#93c5fd;font-weight:700;cursor:pointer;border-bottom:1px dotted #93c5fd' data-v-14ae79c9>"+XgTasks(u.id)+"</span>"]}),"暂无人员数据"));
  /* ⑨ 机械 / 设备 + ⑪ 实时监控入口 */
  const ds=(XM.dev||[]).filter((d)=>{
    if(XG.devF!=="__ALL__"&&XgDevState(d)!==XG.devF)return false;
    const kw=XG.key.trim();
    if(!kw)return true;
    return (String(d.deviceName||"")+String(d.deviceCode||"")+String(d.location||"")).indexOf(kw)>=0;
  });
  s+=Xpan("机械 / 设备（"+ds.length+"）","overview-panel","<div style='padding:0 8px 6px' data-v-14ae79c9>"+
    "<select data-xg='gdevf' style='height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);border-radius:4px' data-v-14ae79c9>"+
    [{v:"__ALL__",t:"全部状态"},{v:"作业中",t:"作业中"},{v:"待命",t:"待命"},{v:"维护",t:"维护"}].map((o)=>"<option value='"+o.v+"'"+(XG.devF===o.v?" selected":"")+">"+o.t+"</option>").join("")+"</select></div>"+
    Xgtbl([["名称","26%"],["类型","18%"],["编号","18%"],["状态","13%"],["操作","25%"]],ds.map((d)=>{
      const st=XgDevState(d);
      /* ⑪ 有摄像头的设备：巡检类（机器人/QV/声呐）+ robot/Sonar 类型 + 配置了 IP 的设备 */
      const hasCam=(typeof Xdtype==="function"&&Xdtype(d)==="patrol")||String(d.ipAddress||"").length>0||
        ["robot","Sonar"].indexOf(String(d.deviceType))>=0;
      return [Xes(d.deviceName||"-"),Xes(XgDevType(d)),Xes(String(d.deviceCode||"").slice(-8)||"-"),
        "<span style='color:"+(st==="作业中"?"#fbbf24":(st==="维护"?"#f87171":"#4ade80"))+"' data-v-14ae79c9>"+st+"</span>",
        (hasCam?Xgbtn("监控","glive",d.id):"")+Xgbtn("详情","gdevinfo",d.id)];
    }),"暂无设备数据"));
  /* ⑩ 工单提报 / 验收 */
  const ws=(XG.wo||[]).filter((w)=>{
    if(XG.woF!=="__ALL__"&&String(w.status)!==XG.woF)return false;
    const kw=XG.key.trim();
    if(!kw)return true;
    return (String(w.workOrderCode||"")+String(w.description||"")+String(w.address||"")).indexOf(kw)>=0;
  }).sort((a,b)=>String(b.createTime||"").localeCompare(String(a.createTime||"")));
  s+=Xpan("工单列表（"+ws.length+"）","overview-panel","<div style='padding:0 8px 6px' data-v-14ae79c9>"+
    "<select data-xg='gwof' style='height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);border-radius:4px' data-v-14ae79c9>"+
    [{v:"__ALL__",t:"全部状态"},{v:"PENDING",t:"待分配"},{v:"IN_PROGRESS",t:"处理中"},{v:"PENDING_ACCEPTANCE",t:"待验收"},{v:"COMPLETED",t:"已完成"},{v:"CANCELLED",t:"已取消"}].map((o)=>"<option value='"+o.v+"'"+(XG.woF===o.v?" selected":"")+">"+o.t+"</option>").join("")+"</select></div>"+
    Xgtbl([["工单号","23%"],["类型","14%"],["执行人","21%"],["状态","17%"],["操作","25%"]],ws.slice(0,60).map((w)=>{
      const st=String(w.status||"").toUpperCase(),cn=XwoSt(w)[0];
      return [Xes(w.workOrderCode||String(w.id).slice(-8)),Xes(XgWoT(w.workOrderType)),Xes(w.taskHandlersName||"-"),
        "<span style='color:"+(st==="COMPLETED"?"#4ade80":(st==="PENDING_ACCEPTANCE"?"#fbbf24":"#93c5fd"))+"' data-v-14ae79c9>"+Xes(cn)+"</span>",
        Xgbtn("详情","gwoinfo",w.id)+
        (st==="PENDING_ACCEPTANCE"?Xgbtn("验收","gwoacc",w.id):"")];
    }),"暂无工单"));
  return s;
},
/* ================= ⑩⑫⑬ 工单详情弹窗：设备 / 资料 / AI 入口 ================= */
XgovDetail=(id)=>{
  const w=(XG.wo||[]).filter((x)=>String(x.id)===String(id))[0];
  if(!w)return;
  let box=document.getElementById("xgov");
  if(!box){
    box=document.createElement("div");
    box.id="xgov";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(94vw,860px);max-height:86vh;z-index:9999;background:#0f172af7;"+
      "border:1px solid rgba(148,163,184,.5);border-radius:10px;box-shadow:0 14px 48px rgba(0,0,0,.66);display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  const dv=XgWoDevs(w),devs=dv.list,docs=XgDocsOf(w);
  const filt=(k)=>docs.filter((f)=>XgDocKind(f)===k);
  const sec=(t,arr)=>"<div style='margin-top:8px' data-v-14ae79c9><div style='font-size:12px;color:#93c5fd;margin-bottom:3px' data-v-14ae79c9>"+Xes(t)+"（"+arr.length+"）</div>"+
    (arr.length?"<div style='font-size:12px;color:#cbd5e1;line-height:1.8' data-v-14ae79c9>"+arr.map((f)=>
      "<div data-v-14ae79c9>· "+Xes(f.name)+" <span style='color:#64748b' data-v-14ae79c9>"+Xes(f.sizeInfo||"")+"</span> "+
      "<a href='"+XgFileUrl(f)+"' target='_blank' rel='noopener' style='color:#38bdf8;text-decoration:none' data-v-14ae79c9>下载</a></div>").join("")+"</div>"
      :"<div style='font-size:11.5px;color:#64748b' data-v-14ae79c9>暂无（后端资料未带该分类）</div>")+"</div>";
  box.innerHTML=XM_ST+
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:11px 14px;border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
    "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>工单详情 · "+Xes(w.workOrderCode||"")+"</b>"+
    Xgbtn("关闭","gclose","")+"</div>"+
    "<div style='flex:1 1 auto;min-height:0;padding:10px 14px;overflow:auto' data-v-14ae79c9>"+
      "<div style='font-size:12.5px;color:#cbd5e1;line-height:1.7' data-v-14ae79c9>"+
        "<div data-v-14ae79c9>描述："+Xes(w.description||"-")+"</div>"+
        "<div data-v-14ae79c9>位置："+Xes(w.location||w.address||"-")+"</div>"+
        "<div data-v-14ae79c9>状态：<b data-v-14ae79c9>"+Xes(w.status||"-")+"</b>　类型："+Xes(w.workOrderType||"-")+"　等级："+Xes(w.issueLevel||"-")+"</div>"+
        "<div data-v-14ae79c9>执行人："+Xes(w.taskHandlersName||"-")+"　验收人："+Xes(w.acceptorNames||w.acceptor||"-")+"</div>"+
      "</div>"+
      /* ⑩ 本工单使用的机械设备 */
      "<div style='margin-top:10px' data-v-14ae79c9><div style='font-size:12px;color:#93c5fd;margin-bottom:3px' data-v-14ae79c9>本工单使用的机械设备（"+devs.length+"）"+
        (dv.sim?"<span style='color:#64748b;font-size:11px' data-v-14ae79c9> · 模拟关联</span>":"")+"</div>"+
      Xgtbl([["名称","34%"],["类型","22%"],["编号","26%"],["状态","18%"]],devs.map((d)=>[Xes(d.deviceName||"-"),Xes(XgDevType(d)),
        Xes(String(d.deviceCode||"").slice(-10)||"-"),Xes(XgDevState(d))]),
        "该工单管线未关联到设备（后端无工单-设备关联字段，按管线派生）")+
      (dv.sim?"<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>后端暂无工单-设备关联字段，以上为按工单号确定性派生的模拟设备（刷新不变）</div>":"")+"</div>"+
      /* ⑫ 工单资料：安全 / 许可 / 工艺流程 */
      sec("安全资料",filt("安全"))+sec("许可资料",filt("许可"))+sec("工艺流程资料",filt("工艺流程"))+sec("其他附件",filt("其他"))+
    "</div>";
  XG.detail=String(id);
},
XgovClose=()=>{const b=document.getElementById("xgov");if(b)b.remove();XG.detail="";
  const i=document.getElementById("xgintro");if(i)i.remove();XG.intro=""},
/* ================= ④ 项目简介弹窗（点击项目列表中的项目名后弹出） ================= */
XgovIntro=(id)=>{
  const p=XG.prjById[id];
  if(!p){const b=document.getElementById("xgintro");if(b)b.remove();XG.intro="";return}
  let box=document.getElementById("xgintro");
  if(!box){
    box=document.createElement("div");
    box.id="xgintro";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(92vw,720px);max-height:82vh;z-index:9998;"+
      "background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:10px;box-shadow:0 14px 48px rgba(0,0,0,.66);"+
      "display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  const prog=XgProgOf(p),wo=XgWoOf(p),kids=XgPlans(p);
  box.innerHTML=XM_ST+
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:11px 14px;border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>项目简介 · "+Xes(p.projectName||p.projectCode||"")+"</b>"+
      Xgbtn("关闭","giclose","")+"</div>"+
    "<div style='flex:1 1 auto;min-height:0;padding:10px 14px;overflow:auto' data-v-14ae79c9>"+
      "<div style='font-size:12.5px;color:#cbd5e1;line-height:1.75' data-v-14ae79c9>"+
        Xes(p.projectIntroduction||"（该项目尚未填写简介）")+"</div>"+
      "<div style='display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;font-size:11.5px;color:#94a3b8' data-v-14ae79c9>"+
        "<span data-v-14ae79c9>编号："+Xes(p.projectCode||"-")+"</span>"+
        "<span data-v-14ae79c9>类型："+Xes(XgTypeName(XgTypeOf(p)))+"</span>"+
        "<span data-v-14ae79c9>状态："+Xes(XgStateOf(p))+"</span>"+
        "<span data-v-14ae79c9>立项："+Xes(Xgdt(p.createTime))+"</span>"+
        "<span data-v-14ae79c9>下级标段/计划："+kids.length+" 项</span>"+
        "<span data-v-14ae79c9>关联工单："+wo.length+" 条（已闭环 "+wo.filter(XgDone).length+" 条）</span></div>"+
      "<div style='display:flex;align-items:center;gap:8px;margin-top:10px' data-v-14ae79c9>"+
        "<span style='font-size:11.5px;color:#94a3b8' data-v-14ae79c9>项目进度</span>"+Xgbar(prog)+
        "<span style='font-size:12px;color:#93c5fd' data-v-14ae79c9>"+prog+"%</span></div>"+
    "</div>";
  XG.intro=String(id);
},
/* ================= ⑨ 机械设备详情弹窗（档案 / 所属管线 / 关联工单 / 实时监控） ================= */
Xgv=(v)=>{const s=String(v==null?"":v);return (s===""||s==="null"||s==="undefined")?"-":s},
XgDevCat=(c)=>{const M={OUT_DEVICE:"外业设备",IN_DEVICE:"内业设备",SENSOR:"传感设备",CAMERA:"视频设备"};
  const k=String(c||"").toUpperCase();return M[k]||Xgv(c)},
XgovDev=(id)=>{
  const d=(XM.devById||{})[id]||(XM.dev||[]).filter((x)=>String(x.id)===String(id))[0];
  if(!d){const b=document.getElementById("xgdev");if(b)b.remove();XG.dev="";return}
  let box=document.getElementById("xgdev");
  if(!box){
    box=document.createElement("div");
    box.id="xgdev";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(94vw,760px);max-height:84vh;z-index:9997;"+
      "background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:10px;box-shadow:0 14px 48px rgba(0,0,0,.66);"+
      "display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  const st=XgDevState(d);
  const stc=st==="作业中"?"#fbbf24":(st==="维护"?"#f87171":"#4ade80");
  const pid=Xgv(d.pipelineId)==="-"?"":String(d.pipelineId);
  const pipe=pid?((XM.pipeById||{})[pid]||null):null;
  const pnm=Xgv(d.pipelineName)==="-"?(pipe?Xgv(pipe.pipelineName):"-"):Xgv(d.pipelineName);
  const wos=pid?(XG.wo||[]).filter((w)=>String(w.pipelineIds||"").indexOf(pid)>=0):[];
  const hasCam=(typeof Xdtype==="function"&&Xdtype(d)==="patrol")||Xgv(d.ipAddress)!=="-"||
    ["robot","Sonar"].indexOf(String(d.deviceType))>=0;
  const sect=(t,extra,body)=>"<div style='margin-top:8px' data-v-14ae79c9>"+
    "<div style='font-size:12px;color:#93c5fd;margin-bottom:3px' data-v-14ae79c9>"+Xes(t)+
    (extra?"<span style='color:#64748b;font-size:11px' data-v-14ae79c9> "+Xes(extra)+"</span>":"")+"</div>"+body+"</div>";
  const kv=(rows)=>Xgtbl([["项目","26%"],["内容","74%"]],rows,"无数据");
  const lon=Xgv(d.positionX),lat=Xgv(d.positionY);
  box.innerHTML=XM_ST+
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:11px 14px;border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>设备详情 · "+Xes(Xgv(d.deviceName))+"</b>"+
      Xgbtn("关闭","gdevclose","")+"</div>"+
    "<div style='flex:1 1 auto;min-height:0;padding:10px 14px;overflow:auto' data-v-14ae79c9>"+
      /* 状态概览 */
      "<div style='display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:12px;color:#cbd5e1' data-v-14ae79c9>"+
        "<span data-v-14ae79c9>运行状态：<b style='color:"+stc+"' data-v-14ae79c9>"+st+"</b></span>"+
        "<span data-v-14ae79c9>启用："+Xes(String(d.isEnabled)==="true"?"是":"否")+"</span>"+
        "<span data-v-14ae79c9>最后心跳："+Xes(Xgv(d.lastHeartbeat))+"</span>"+
        "<span data-v-14ae79c9>心跳/超时："+Xes(Xgv(d.heartbeatInterval))+"s / "+Xes(Xgv(d.timeoutThreshold))+"s</span></div>"+
      /* 基本信息 */
      sect("设备档案","",kv([
        ["设备编号",Xgv(d.deviceCode)],["设备类型",XgDevType(d)],["设备类别",XgDevCat(d.deviceCategory)],
        ["厂商",Xgv(d.manufacturer)],["型号",Xgv(d.model)],["固件版本",Xgv(d.version)],
        ["通信协议",Xgv(d.protocolType)],["IP 地址",Xgv(d.ipAddress)],["端口",Xgv(d.port)],
        ["安装位置",Xgv(d.location)],
        ["经纬度",(lon==="-"||lat==="-")?"-":(lon+" , "+lat)],
        ["建档时间",Xgv(d.createTime)],["备注",Xgv(d.remark)]]))+
      /* 所属管线 */
      sect("所属管线",pnm==="-"?"（未绑定）":"",pipe?kv([
        ["管线名称",Xgv(pipe.pipelineName)],["管线编码",Xgv(pipe.pipelineCode)],
        ["管线类型",Xgv(pipe.pipelineTypeName||pipe.pipelineType)],["管径",Xgv(pipe.diameter)+(Xgv(pipe.diameter)==="-"?"":" mm")],
        ["材质",Xgv(pipe.material)],["长度",Xgv(pipe.length)+(Xgv(pipe.length)==="-"?"":" m")],
        ["埋深",Xgv(pipe.depth)],["所在道路",Xgv(pipe.roadName)],["管线状态",Xgv(pipe.status)]])
        :"<div style='font-size:11.5px;color:#64748b' data-v-14ae79c9>该设备未绑定管线（后端 pipelineId 为空）</div>")+
      /* 关联工单 */
      sect("关联工单","（"+wos.length+" 条）",wos.length?
        Xgtbl([["工单号","26%"],["状态","20%"],["类型","18%"],["描述","36%"]],wos.slice(0,10).map((w)=>[
          Xes(Xgv(w.workOrderCode)),Xes(XwoSt(w)[0]),Xes(XgWoT(w.workOrderType)),
          "<span style='color:#94a3b8' data-v-14ae79c9>"+Xes(Xgv(w.description))+"</span>"]),"无")
        :"<div style='font-size:11.5px;color:#64748b' data-v-14ae79c9>该设备未绑定管线，暂无关联工单（后端无设备-工单关联字段）</div>")+
    "</div>"+
    "<div style='padding:9px 14px;border-top:1px solid rgba(148,163,184,.25);display:flex;gap:8px;justify-content:flex-end' data-v-14ae79c9>"+
      (hasCam?Xgbtn("实时监控","glive",d.id,"primary"):"")+
      Xgbtn("关闭","gdevclose","")+"</div>";
  XG.dev=String(id);
},
/* ================= ⑧ 人员任务列表弹窗（点击人员“任务数”） ================= */
XgovTasks=(uid)=>{
  const u=(XM.userById||{})[uid]||{};
  const ws=(XG.wo||[]).filter((w)=>String(w.taskHandlers||"").split(",").indexOf(String(uid))>=0)
    .sort((a,b)=>String(b.createTime||"").localeCompare(String(a.createTime||"")));
  let box=document.getElementById("xgtasks");
  if(!box){
    box=document.createElement("div");
    box.id="xgtasks";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(94vw,820px);max-height:82vh;z-index:9996;"+
      "background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:10px;box-shadow:0 14px 48px rgba(0,0,0,.66);"+
      "display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  const done=ws.filter(XgDone).length;
  box.innerHTML=XM_ST+
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:11px 14px;border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>任务列表 · "+Xes(u.name||u.account||"未知人员")+"（"+ws.length+"）</b>"+
      Xgbtn("关闭","gtaskclose","")+"</div>"+
    "<div style='flex:1 1 auto;min-height:0;padding:10px 14px;overflow:auto' data-v-14ae79c9>"+
      "<div style='font-size:11.5px;color:#94a3b8;margin-bottom:6px' data-v-14ae79c9>"+
        Xes(u.orgName||"-")+" ｜ "+Xes(u.positionName||"-")+" ｜ 共 "+ws.length+" 条任务，已闭环 "+done+" 条，闭环率 "+XgPct(done,ws.length)+"%</div>"+
      Xgtbl([["工单号","24%"],["类型","14%"],["状态","16%"],["位置/描述","30%"],["下发时间","16%"]],
        ws.slice(0,100).map((w)=>[Xes(Xgv(w.workOrderCode)),Xes(XgWoT(w.workOrderType)),
          "<span style='color:"+(XgDone(w)?"#4ade80":(String(w.status).toUpperCase()==="PENDING_ACCEPTANCE"?"#fbbf24":"#93c5fd"))+"' data-v-14ae79c9>"+Xes(XwoSt(w)[0])+"</span>",
          "<span style='color:#94a3b8' data-v-14ae79c9>"+Xes(Xgv(w.location||w.address||w.description))+"</span>",
          "<span style='color:#64748b' data-v-14ae79c9>"+Xes(Xgdt(w.createTime))+"</span>"]),
        "该人员暂无关联任务")+
    "</div>"+
    "<div style='padding:9px 14px;border-top:1px solid rgba(148,163,184,.25);display:flex;justify-content:flex-end' data-v-14ae79c9>"+
      Xgbtn("关闭","gtaskclose","")+"</div>";
  XG.tasks=String(uid);
},
/* ================= ⑪ 实时监控弹窗（居中；视频区 + 实时指标 + AI 判读预留入口） ================= */
XgovLive=(id)=>{
  const d=(XM.devById||{})[id]||(XM.dev||[]).filter((x)=>String(x.id)===String(id))[0];
  if(!d){const b=document.getElementById("xglive");if(b)b.remove();XG.live="";return}
  let box=document.getElementById("xglive");
  if(!box){
    box=document.createElement("div");
    box.id="xglive";
    box.setAttribute("data-v-14ae79c9","");
    box.style.cssText="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(94vw,860px);max-height:86vh;z-index:9998;"+
      "background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:10px;box-shadow:0 14px 48px rgba(0,0,0,.66);"+
      "display:flex;flex-direction:column;overflow:hidden";
    document.body.appendChild(box);
  }
  const st=XgDevState(d);
  const stc=st==="作业中"?"#fbbf24":(st==="维护"?"#f87171":"#4ade80");
  box.innerHTML=XM_ST+
    "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:11px 14px;border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>实时监控 · "+Xes(Xgv(d.deviceName))+"</b>"+
      Xgbtn("关闭","gliveclose","")+"</div>"+
    "<div style='flex:1 1 auto;min-height:0;padding:10px 14px;overflow:auto' data-v-14ae79c9>"+
      /* 视频区（居中）；后端暂无视频流地址，占位并说明接入方式 */
      "<div style='aspect-ratio:16/9;background:#000;border:1px solid rgba(148,163,184,.25);border-radius:8px;"+
        "display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;padding:10px' data-v-14ae79c9>"+
        "<div style='font-size:13px;color:#94a3b8' data-v-14ae79c9>视频画面</div>"+
        "<div style='font-size:11.5px;color:#64748b' data-v-14ae79c9>"+
          ((typeof Xdtype==="function"&&Xdtype(d)==="patrol")?"该设备为巡检类（机器人 / QV / 声呐），画面由巡检系统承载，待接入视频流"
                              :"视频流待接入（后端设备未返回拉流地址，可在设备档案中补充 IP / 推流地址后自动播放）")+"</div>"+
        "<div style='font-size:11px;color:#475569' data-v-14ae79c9>"+Xes(Xgv(d.location))+"</div>"+
      "</div>"+
      "<div style='display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;font-size:11.5px;color:#94a3b8' data-v-14ae79c9>"+
        "<span data-v-14ae79c9>运行状态：<b style='color:"+stc+"' data-v-14ae79c9>"+st+"</b></span>"+
        "<span data-v-14ae79c9>类型："+Xes(XgDevType(d))+"</span>"+
        "<span data-v-14ae79c9>最后心跳："+Xes(Xgv(d.lastHeartbeat))+"</span></div>"+
      /* 实时指标（异步填充） */
      "<div id='xgliveBody' style='margin-top:8px;font-size:12px;color:#94a3b8' data-v-14ae79c9>实时指标读取中…</div>"+
    "</div>"+
    "<div style='padding:9px 14px;border-top:1px solid rgba(148,163,184,.25);display:flex;gap:8px;justify-content:flex-end' data-v-14ae79c9>"+
      Xgbtn("AI 判读（预留）","gaiv",d.id,"primary")+
      Xgbtn("刷新指标","gliverefresh",d.id)+
      Xgbtn("关闭","gliveclose","")+"</div>";
  XG.live=String(id);
  XgovLiveData(d);
},
/* 实时指标：只拉“当天”，空则回退近 7 天（避免 XmProbe 逐月探测导致的长时间加载） */
XgovLiveData=async(d)=>{
  const bd=document.getElementById("xgliveBody");
  if(!bd)return;
  if(typeof XmHist!=="function"){bd.innerHTML="实时指标能力未就绪（采集数据接口未加载）";return}
  try{
    const today=Xday(new Date());
    let rows=await XmHist([d.id],today+" 00:00:00",today+" 23:59:59");
    let span="今日";
    if(!rows.length){
      const t=new Date(Date.now()-6*864e5);
      rows=await XmHist([d.id],Xday(t)+" 00:00:00",today+" 23:59:59");
      span="近 7 日";
    }
    const MET=[["WATER_FLOW","水流量","m³/h"],["WATER_SPEED","流速","m/s"],
               ["WATER_LEVEL","水位","mm"],["DEV_TEMP","温度","℃"]];
    let s="<div style='display:flex;flex-wrap:wrap;gap:8px' data-v-14ae79c9>";
    MET.forEach((m)=>{
      const sub=rows.filter((r)=>r.dataType===m[0]);
      const last=sub.length?sub[sub.length-1]:null;
      s+="<div style='flex:1;min-width:120px;background:rgba(30,58,138,.28);border:1px solid rgba(148,163,184,.25);border-radius:6px;padding:6px 8px' data-v-14ae79c9>"+
        "<div style='font-size:11px;color:#94a3b8' data-v-14ae79c9>"+Xes(m[1])+"</div>"+
        "<div style='font-size:15px;font-weight:700;color:#93c5fd' data-v-14ae79c9>"+
        (last?Xf(last.dataValue,2):"--")+"<span style='font-size:10.5px;font-weight:400;color:#64748b' data-v-14ae79c9> "+Xes(last?m[2]:"")+"</span></div></div>";
    });
    s+="</div>";
    s+="<div style='font-size:11px;color:#64748b;margin-top:5px' data-v-14ae79c9>"+
      (rows.length?("共 "+rows.length+" 条采集记录（"+span+"），最新 "+Xes(String((rows[rows.length-1]||{}).collectionTime||"").slice(5,16)))
                  :"该设备暂无采集数据（"+span+"无记录）")+"</div>";
    bd.innerHTML=s;
  }catch(err){
    bd.innerHTML="<div style='font-size:11.5px;color:#f87171' data-v-14ae79c9>实时指标读取失败："+Xes(String((err&&err.message)||err))+"</div>";
  }
},
/* ================= 交互（data-xg 独立委托，与第三阶段 data-xa 互不干扰） ================= */
Xgact=async(a,v,el,e)=>{
  if(!a)return;
  try{
    if(a==="gcity"){XG.city=v;XG.dist="__ALL__";XG.sel="__ALL__";return XrenderGov()}
    if(a==="gdist"){XG.dist=v;XG.sel="__ALL__";return XrenderGov()}
    if(a==="gproj"){XG.sel=v;return XrenderGov()}
    /* ④ 点击项目名：选中该项目并弹出「项目简介」 */
    if(a==="gsel"){XG.sel=String(v);XG.intro=String(v);return XrenderGov()}
    /* 查询按钮：读取关键字输入框并应用 */
    if(a==="gsearch"){const inp=document.querySelector("[data-xg='gkey']");XG.key=(inp&&inp.value)||"";return XrenderGov()}
    if(a==="giclose"){const b=document.getElementById("xgintro");if(b)b.remove();XG.intro="";return XrenderGov()}
    if(a==="gexp"){XG.exp[v]=!XG.exp[v];return XrenderGov()}
    if(a==="grtab"){XG.rtab=v;return XrenderGov()}
    if(a==="gkey"){XG.key=(el&&el.value)||"";return XrenderGov()}
    if(a==="gftype"){XG.ftype=v;return XrenderGov()}
    if(a==="gfstate"){XG.fstate=v;return XrenderGov()}
    if(a==="gftime"){XG.ftime=v;return XrenderGov()}
    if(a==="gdevf"){XG.devF=v;return XrenderGov()}
    if(a==="gwof"){XG.woF=v;return XrenderGov()}
    if(a==="greset"){XG.key="";XG.ftype="__ALL__";XG.fstate="__ALL__";XG.ftime="__ALL__";XG.city="__ALL__";XG.dist="__ALL__";XG.sel="__ALL__";return XrenderGov()}
    if(a==="gclose"){XgovClose();return}
    /* ⑨ 机械设备详情 → 弹窗 */
    if(a==="gdevinfo"){XG.dev=String(v);return XrenderGov()}
    if(a==="gdevclose"){const b=document.getElementById("xgdev");if(b)b.remove();XG.dev="";return XrenderGov()}
    /* ⑧ 人员任务列表弹窗 */
    if(a==="gtasks"){XG.tasks=String(v);return XrenderGov()}
    if(a==="gtaskclose"){const b=document.getElementById("xgtasks");if(b)b.remove();XG.tasks="";return XrenderGov()}
    /* ⑪ 实时监控弹窗（居中，不再走第三阶段右上角小卡） */
    if(a==="glive"){XG.live=String(v);return XrenderGov()}
    if(a==="gliveclose"){const b=document.getElementById("xglive");if(b)b.remove();XG.live="";return XrenderGov()}
    if(a==="gliverefresh"){
      const d=(XM.devById||{})[v]||(XM.dev||[]).filter((x)=>String(x.id)===String(v))[0];
      if(d){const bd=document.getElementById("xgliveBody");if(bd)bd.innerHTML="实时指标读取中…";XgovLiveData(d)}
      return;
    }
    /* ⑬ 视频弹窗内 AI 判读：仅预留入口 */
    if(a==="gaiv"){XG.toast="AI 判读为预留入口，本阶段不实现算法";return XrenderGov()}
    if(a==="gwoinfo"){XgovDetail(v);return}
    if(a==="gwosub"){
      const w=(XG.wo||[]).filter((x)=>String(x.id)===String(v))[0];
      if(!w)return;
      const body=XwoBody(w,{status:"PENDING_ACCEPTANCE",handleResult:"执行人已完成现场处理，提交验收",
        actualStartTime:w.actualStartTime||Xnow(),actualEndTime:Xnow()});
      const r=await Xmpost("/biz/workOrder/edit",body);
      XG.toast=(r&&r.code===200)?"已提报，等待管理人员验收":"提报失败："+String((r&&r.msg)||"");
      await XgReWo();XgovClose();return XrenderGov();
    }
    if(a==="gwoacc"){
      const w=(XG.wo||[]).filter((x)=>String(x.id)===String(v))[0];
      if(!w)return;
      const me=XM.me||{};
      /* 后端职责分离：处理人不能验收自己处理的工单 */
      if(String(w.taskHandlers||"").split(",").indexOf(String(me.id))>=0){
        XG.toast="职责分离：处理人不能验收自己处理的工单（当前 "+String(me.name||"未登录")+"）";
        XgovClose();return XrenderGov();
      }
      const body=XwoBody(w,{status:"COMPLETED",acceptanceResult:"PASS",acceptanceTime:Xnow(),
        acceptanceOpinion:"验收通过，工单闭环",acceptor:String(me.name||""),acceptorNames:String(me.name||""),acceptorIds:String(me.id||"")});
      const r=await Xmpost("/biz/workOrder/edit",body);
      XG.toast=(r&&r.code===200)?"验收通过，工单已闭环":"验收失败："+String((r&&r.msg)||"");
      await XgReWo();XgovClose();return XrenderGov();
    }
    if(a==="gplan2wo"){
      const p=XG.prjById[v];if(!p)return;
      const kids=XgKidsOf(p);
      if(!kids.length){XG.toast="该项目暂无可用巡检计划（后端计划无 projectId 关联）";return XrenderGov()}
      const plan=kids[0];
      const no=await Xrq("/biz/workOrder/autoGenerateWorkOrderNo");
      const body={
        workOrderCode:(typeof no==="string"&&no)?no:("GD"+Date.now()),
        workOrderType:"REPAIR",source:"INSPECTION_PLAN",priority:"P3",status:"IN_PROGRESS",
        description:"管网治理 · "+String(p.projectName||"")+"："+String(plan.planName||""),
        issueDesc:"由项目计划自动生成；周期："+String(plan.cycle||"")+"；说明："+String(plan.descText||""),
        taskHandlers:String(plan.executorIds||"")||XwoPick(),
        location:String(p.projectName||""),address:String(p.projectName||""),
        pipelineIds:String(plan.routeIds||"").split(",")[0]||"",
        pnInspectionRecordId:(XM.rec&&XM.rec[0]&&XM.rec[0].id)||"",
        handleMeasure:"#XGPROJ:"+String(p.id)+"#"
      };
      const r=await Xmpost("/biz/workOrder/add",body);
      XG.toast=(r&&r.code===200)?("已发布工单 "+body.workOrderCode):("发布失败："+String((r&&r.msg)||""));
      await XgReWo();return XrenderGov();
    }
    if(a==="gkpi"){
      /* ⑤ 量化考核导出（按执行人统计工单量/闭环率） */
      const map={};
      (XG.wo||[]).forEach((w)=>{
        String(w.taskHandlers||"").split(",").filter(Boolean).forEach((uid)=>{
          const u=(XM.userById||{})[uid],t=Xts(w.createTime||w.plannedStartTime);
          const mk=t?(t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)):"未知";
          const k=uid+"|"+mk;
          if(!map[k])map[k]={name:u?(u.name||u.account):uid,org:u?(u.orgName||""):"",month:mk,total:0,done:0,pend:0};
          map[k].total++;
          if(XgDone(w))map[k].done++;
          if(["PENDING","PENDING_ACCEPTANCE"].indexOf(String(w.status||"").toUpperCase())>=0)map[k].pend++;
        });
      });
      const out=[["人员","机构","月份","工作量","已完成","在办","完成率"]];
      Object.keys(map).forEach((k)=>{const r=map[k];
        out.push([r.name,r.org,r.month,r.total,r.done,r.pend,(r.total?Math.round(r.done/r.total*100):0)+"%"])});
      XmCsv(out,"量化考核表_"+Xday(new Date())+".csv");
      return;
    }
  }catch(err){console.error("[Xgact]",err)}
},
XgHook=()=>{
  if(XG.hook)return;
  XG.hook=1;
  document.addEventListener("click",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xg]"):null;
    if(!el)return;
    const tg=String(el.tagName||"").toUpperCase();
    if(tg==="SELECT"||tg==="INPUT"||tg==="TEXTAREA")return;
    e.preventDefault();
    e.stopPropagation();
    Xgact(el.getAttribute("data-xg"),el.getAttribute("data-xv"),el,e);
  },true);
  document.addEventListener("change",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xg]"):null;
    if(!el)return;
    Xgact(el.getAttribute("data-xg"),el.value,el,e);
  },true);
  /* 关键字输入：回车即检索 */
  document.addEventListener("keydown",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xg='gkey']"):null;
    if(!el)return;
    if(e.key==="Enter"){e.preventDefault();XG.key=el.value||"";XrenderGov()}
  },true);
},
/* ================= 治理渲染入口 ================= */
/* 治理模式布局修正（只作用于 gov-l/gov-r 容器，不影响监测模式）：
 *   左栏面板多，原 .xinject 弹性列会把各面板压缩到低于内容高度 → 内容外溢视觉重叠；
 *   故左栏各面板锁定自然高度(flex:0 0 auto)、容器整体滚动，资料库面板(xfill)保底 220px 撑住；
 *   右栏面板拉伸填满整列(flex:1 1 auto)，消除下方大片空白。 */
Xgstyle="<style id='xgovCss'>"+
  "[data-x='gov-l'] .xinject{overflow-y:auto!important;scrollbar-width:thin}"+
  "[data-x='gov-l'] .xinject>div.info-panel{flex:0 0 auto}"+
  "[data-x='gov-l'] .xinject>div.info-panel.xfill{flex:0 0 auto;height:185px}"+
  /* 右栏三区同屏（班组/人员 · 机械/设备 · 工单）：容器整体滚动，每区内容限高内滚，避免单区独占整列 */
  "[data-x='gov-r'] .xinject{overflow-y:auto!important;scrollbar-width:thin}"+
  "[data-x='gov-r'] .xinject>div.info-panel{flex:0 0 auto}"+
  "[data-x='gov-r'] .xinject>div.info-panel>.panel-content{max-height:230px;overflow-y:auto;scrollbar-width:thin}"+
  "[data-x='gov-l'] .xbtn.primary{background:rgba(59,130,246,.55);border-color:rgba(96,165,250,.65);color:#fff}"+
  "[data-x='gov-l'] .xbtn.primary:hover{background:rgba(59,130,246,.8)}"+
  ".xbtn.primary{background:rgba(59,130,246,.55)!important;border-color:rgba(96,165,250,.65)!important;color:#fff!important}"+
  "</style>",
XrenderGov=async()=>{
  const tip=XG.toast;XG.toast="";
  try{
    Xsg.value=Xgstyle+XM_ST+(tip?"<div class='xtip' style='color:#fbbf24;border:1px solid rgba(234,179,8,.45)' data-v-14ae79c9>"+Xes(tip)+"</div>":"")+XgovLeft();
    Xsh.value=Xgstyle+XM_ST+XgovRight();
  }catch(e){
    console.error("[XrenderGov]",e);
    Xsg.value=XM_ST+Xerr("管网治理");
    Xsh.value=XM_ST+Xerr("现场资源");
  }
  /* 弹窗若开着则同步重绘 */
  if(XG.detail)XgovDetail(XG.detail);
  if(XG.intro)XgovIntro(XG.intro);
  if(XG.dev)XgovDev(XG.dev);
  if(XG.tasks)XgovTasks(XG.tasks);
  if(XG.live)XgovLive(XG.live);
  Xflush();
},

/* ================= 第五阶段：智慧运维（设计评估 + 资产管理，面向决策层） =================
 * 布局：左栏 Xsl（模块导航 + 主视图） / 右栏 Xsr（明细 / 报表）
 *
 * 数据策略（后端无资产/评估/报告接口，全部前端派生 + 确定性演示）：
 *   - 真实数据：管段(XM.pipe 923 条：管径/材质/长度/状态/geoJson)、设备(XM.dev 12 台)、
 *               项目(XG.prj)、工单(XG.wo)、计划(XG.plan)
 *   - 资产台账：管段(真实) + 设施(按管段确定性派生：检查井/泵站/阀门/排放口) + 设备(真实)
 *   - 资产原值：管段=长度×管径系数；设施/设备按类型基准价（演示口径）
 *   - 服役年限：installationDate 为空时按 id 哈希派生 2005-2023（台账标注"演示口径"）
 *   - 健康等级：A/B/C/D 由服役比 + 关联工单数 + 状态派生；残值=原值×(1-服役/寿命)线性折旧
 *   - 效能评估：水力模型覆盖=有 geoJson 管段占比(真实)；工况模拟按重现期+哈希确定性生成
 *   - 修复设计：缺陷等级由哈希派生 → 工艺建议(观察/点位修复/CIPP/开挖换管) + 合理性评分
 *
 * 交互隔离：data-xo + Xoact 独立委托，不与 data-xa / data-xg 冲突
 */
XO={load:0,hook:0,tab:"eff",atab:"a_ledger",cat:"pipe",key:"",rain:"5",pop:"",toast:"",sim:null},
Xoh=(s)=>{let h=7;String(s==null?"":s).split("").forEach((c)=>{h=(h*31+c.charCodeAt(0))>>>0});return h},
Xoy=(s)=>{try{return new Date(s).getFullYear()}catch(e){return null}},
/* ---------- 资产统一模型 ---------- */
XO_KIND={pipe:"管段",fac:"设施",dev:"设备"},
XO_FAC=[[80,"雨污水泵站",6],[2,"检查井",1],[1.5,"阀门井",1],[5,"排放口",1]],
XoLife=(mat)=>{const M={"PVC管":30,"PE管":40,"钢管":20,"球墨铸铁管":35,"混凝土管":50,"钢筋混凝土管":50,"铸铁管":35};return M[String(mat||"")]||25},
XoInst=(a)=>{const d=String(a.installationDate||"");
  if(/^\d{4}/.test(d))return d.slice(0,10);
  const h=Xoh(a.id||a.pipelineCode||"");
  return (2005+h%19)+"-"+("0"+(1+h%12)).slice(-2)+"-"+("0"+(1+h%28)).slice(-2)},
XoOrigin=(a)=>{
  if(a.__kind==="pipe")return Math.max(0.6,Math.round((Xnum(a.length)||10)*(Xnum(a.diameter)||300)/1000*0.8*10)/10);
  const f=XO_FAC[a.__fac];if(f)return f[0];
  return 5+Xoh(a.id||"d")%36},
XoWoOfPipe=(pid)=>(XG.wo||[]).filter((w)=>String(w.pipelineIds||"").split(",").indexOf(String(pid))>=0),
XoHealth=(a,servRatio,woN)=>{
  let s=servRatio>=0.8||woN>=5?"D":(servRatio>=0.5||woN>=2?"C":(servRatio>=0.25?"B":"A"));
  if(String(a.status||"normal")!=="normal")s=({A:"B",B:"C",C:"D",D:"D"})[s];
  return s},
XoAssets=(kind,key)=>{
  const out=[],now=Date.now();
  if(kind==="pipe"||kind==="__ALL__"){
    (XM.pipe||[]).forEach((p)=>{
      const serv=Math.max(0,(now-new Date(XoInst(p)).getTime())/31536e6);
      const life=XoLife(p.material),woN=XoWoOfPipe(p.id).length;
      const origin=XoOrigin(Object.assign({__kind:"pipe"},p));
      out.push({__kind:"pipe",id:p.id,name:p.pipelineName||p.pipelineCode,code:p.pipelineCode,
        type:XoPipeType(p),mat:String(p.material||"-"),dia:Xnum(p.diameter)||0,len:Xnum(p.length)||0,
        inst:XoInst(p),serv:Math.round(serv*10)/10,life,origin,
        resid:Math.round(origin*Math.max(0,1-serv/life)*10)/10,woN,
        health:XoHealth(p,serv/life,woN),status:String(p.status||"normal"),raw:p});
    });
  }
  if(kind==="fac"||kind==="__ALL__"){
    (XM.pipe||[]).forEach((p,i)=>{
      const h=Xoh("fac"+p.id);
      /* 每约 4 段管 1 座检查井；每约 150 段 1 座泵站；每约 90 段 1 个排放口；每约 70 段 1 座阀门井 */
      const which=(i%4===0)?[1]:[];if(i%150===25)which.push(0);if(i%90===40)which.push(3);if(i%70===30)which.push(2);
      which.forEach((fi)=>{
        const f=XO_FAC[fi],id="FAC_"+p.id.slice(-6)+"_"+fi;
        const serv=Math.max(0,(now-new Date(XoInst({id:id})).getTime())/31536e6),life=fi===0?25:40;
        const origin=f[0];
        out.push({__kind:"fac",id,name:f[1]+"·"+String(p.roadName||p.pipelineName||"").slice(0,10),
          code:id,type:f[1],mat:"-",dia:0,len:0,inst:XoInst({id:id}),serv:Math.round(serv*10)/10,life,
          origin,resid:Math.round(origin*Math.max(0,1-serv/life)*10)/10,woN:0,
          health:XoHealth({},serv/life,0),status:"normal",raw:p});
      });
    });
  }
  if(kind==="dev"||kind==="__ALL__"){
    (XM.dev||[]).forEach((d)=>{
      const h=Xoh("dev"+d.id);
      const serv=Math.max(0,(now-new Date(XoInst({id:"D"+d.id})).getTime())/31536e6),life=8+h%5;
      const origin=XoOrigin({__kind:"dev",id:d.id});
      out.push({__kind:"dev",id:d.id,name:d.deviceName||d.deviceCode,code:d.deviceCode,
        type:XgDevType?XgDevType(d):String(d.deviceType||"设备"),mat:"-",dia:0,len:0,
        inst:XoInst({id:"D"+d.id}),serv:Math.round(serv*10)/10,life,origin,
        resid:Math.round(origin*Math.max(0,1-serv/life)*10)/10,woN:0,
        health:XoHealth(d,serv/life,0),status:String(d.status||d.deviceStatus||"normal"),raw:d});
    });
  }
  return key?out.filter((a)=>(String(a.name)+String(a.code)+String(a.type)+String(a.mat)).indexOf(key)>=0):out;
},
XoPipeType=(p)=>{const M={WSLINE:"污水管",YSLINE:"雨水管",HL:null};const t=String(p.pipelineType||"");
  return M[t]||(/YS/.test(t)?"雨水管":/WS/.test(t)?"污水管":"排水管")},
XO_HEALTH={A:["优","#4ade80"],B:["良","#38bdf8"],C:["中","#fbbf24"],D:["差","#f87171"]},
XohTag=(h)=>"<span style='color:"+XO_HEALTH[h][1]+";font-weight:600' data-v-14ae79c9>"+h+"（"+XO_HEALTH[h][0]+"）</span>",
/* ---------- 工况模拟（确定性） ---------- */
XoSim=(rain)=>{
  const r=Xnum(rain)||5,pipes=XM.pipe||[];
  const rows=pipes.map((p)=>{
    const h=Xoh("sim"+rain+p.id);
    const load=Math.round((0.38+0.09*r+(h%42)/100)*100)/100;
    const vel=Math.round((0.55+(h%95)/100)*100)/100;
    return{p,load,vel};
  });
  const normal=rows.filter((x)=>x.load<0.8).length,
    full=rows.filter((x)=>x.load>=0.8&&x.load<=1.0).length,
    over=rows.filter((x)=>x.load>1.0).length;
  const bad=rows.filter((x)=>x.load>1.0).sort((a,b)=>b.load-a.load).slice(0,10);
  const vels=rows.map((x)=>x.vel),avgV=Math.round(vels.reduce((a,b)=>a+b,0)/(vels.length||1)*100)/100;
  return{rain:r,total:pipes.length,normal,full,over,bad,avgV,
    concl:over?("共识别 "+over+" 条超负荷管段（占比 "+Math.round(over/(pipes.length||1)*1000)/10+"%），建议优先纳入修复设计与更新计划；"):"当前工况下管网总体运行平稳，未识别超负荷管段；"}
},
XoBtn=(txt,act,val,cls)=>"<button type='button' class='xbtn sm "+String(cls||"")+"' data-xo='"+act+"' data-xv='"+Xes(val||"")+"' data-v-14ae79c9>"+Xes(txt)+"</button>",
XoSel=(lab,opts,val,act)=>"<div style='display:flex;align-items:center;gap:6px;padding:3px 8px' data-v-14ae79c9>"+
  "<span style='width:64px;flex:none;font-size:12px;color:#cbd5e1' data-v-14ae79c9>"+Xes(lab)+"</span>"+
  "<select data-xo='"+act+"' style='flex:1;min-width:0;height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);border-radius:4px;padding:0 4px;outline:none' data-v-14ae79c9>"+
  opts.map((o)=>"<option value='"+Xes(o.v)+"'"+(String(o.v)===String(val)?" selected":"")+">"+Xes(o.t)+"</option>").join("")+"</select></div>",
Xonums=(items)=>"<div style='display:flex;gap:6px;margin:2px 0 5px' data-v-14ae79c9>"+items.map((it)=>
  "<div style='flex:1;padding:4px 4px;text-align:center;background:rgba(30,58,138,.3);border:1px solid rgba(148,163,184,.22);border-radius:5px' data-v-14ae79c9>"+
  "<div style='font-size:16px;font-weight:700;color:"+it.c+"' data-v-14ae79c9>"+Xes(it.v)+"</div>"+
  "<div style='font-size:11px;color:#94a3b8;margin-top:2px' data-v-14ae79c9>"+Xes(it.t)+"</div></div>").join("")+"</div>",
XoProg=(label,pct,note)=>"<div style='padding:2px 0' data-v-14ae79c9>"+
  "<div style='display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px' data-v-14ae79c9>"+
  "<span style='color:#e2e8f0' data-v-14ae79c9>"+Xes(label)+"</span>"+
  "<b style='color:"+(pct>=80?"#4ade80":(pct>=50?"#fbbf24":"#f87171"))+"' data-v-14ae79c9>"+pct+"%</b></div>"+
  Xgbar(pct)+(note?"<div style='font-size:11px;color:#64748b;margin-top:2px' data-v-14ae79c9>"+Xes(note)+"</div>":"")+"</div>",
/* 页签条：items=[键,标题]，点击切换只渲染当前页内容 */
XoTabs=(items,cur)=>"<div style='display:flex;gap:4px;margin:2px 0 8px' data-v-14ae79c9>"+items.map((it)=>
  "<button type='button' data-xo='atab' data-xv='"+Xes(it[0])+"' data-v-14ae79c9 style='flex:1;min-width:0;height:27px;font-size:12px;border-radius:4px;cursor:pointer;padding:0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"+
  (cur===it[0]?"background:rgba(59,130,246,.55);border:1px solid rgba(96,165,250,.65);color:#fff;font-weight:600"
    :"background:rgba(15,23,42,.75);border:1px solid rgba(148,163,184,.32);color:#cbd5e1")+"' data-v-14ae79c9>"+Xes(it[1])+"</button>").join("")+"</div>",
/* 表格超过 lim 行时截断，并提示总数 */
Xocap=(n,lim)=>(n>lim?"<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>共 "+n+" 条，已显示前 "+lim+" 条（可用检索/筛选缩小范围）</div>":""),
/* ---------- 左栏 ---------- */
/* 每个模块 = 左栏内容 + 右栏内容 合并为独立板块（不再分页签） */
XoMod=(k)=>{
  if(k==="eff"){
    const S=XO.sim||XoSim(XO.rain);
    const L=XoSel("模拟重现期",[{v:"1",t:"1 年一遇"},{v:"3",t:"3 年一遇"},{v:"5",t:"5 年一遇"},{v:"10",t:"10 年一遇"},{v:"20",t:"20 年一遇"}],XO.rain,"orain")+
      "<div style='display:flex;gap:8px;margin:3px 0 5px' data-v-14ae79c9>"+XoBtn("运行工况模拟","osim","1","primary")+XoBtn("生成评估报告","oreport","eff")+"</div>"+
      Xgtbl(["负荷状态","管段数","占比"],
        [["<span style='color:#4ade80' data-v-14ae79c9>正常（&lt;80%）</span>",String(S.normal),Math.round(S.normal/(S.total||1)*1000)/10+"%"],
         ["<span style='color:#fbbf24' data-v-14ae79c9>满负荷（80-100%）</span>",String(S.full),Math.round(S.full/(S.total||1)*1000)/10+"%"],
         ["<span style='color:#f87171' data-v-14ae79c9>超负荷（&gt;100%）</span>",String(S.over),Math.round(S.over/(S.total||1)*1000)/10+"%"]],"暂无数据");
    const R="<div style='font-size:11px;color:#cbd5e1;line-height:1.4' data-v-14ae79c9>"+Xes(S.concl)+"</div>";
    return["排水效能评估",L+R];
  }
  if(k==="design"){
    const len=Math.round((XM.pipe||[]).reduce((a,p)=>a+(Xnum(p.length)||0),0));
    const plans=[
      {n:"方案 A · 分区截流改造",area:"12.6",pipe:Math.round(len*0.06),dia:"d400~d800",dep:"2.5~4.5",inv:2860,days:210,sc:86,
       pro:"利用现有管位，施工影响小",con:"截流倍数受限，远期需二次扩容",
       goal:"在现状分流制基础上对合流/混接片区实施分区截流，削减雨天溢流污染，提升系统韧性。",
       scope:"覆盖 12.6 km² 老城区合流制与混接严重片区，重点改造 8 个排水子分区。",
       key:"智能截流井 + 可调堰门：晴天全量截污、雨天限流溢流；配套完善沿线污水支管。",
       eng:"新建/改造截流管约 "+Math.round(len*0.06)+" m（d400~d800），智能截流井 24 座，一体化提升泵站 3 座。",
       benefit:"溢流污染削减约 35%~45%，雨季内涝点减少，投资与工期适中。",
       risk:"截流倍数受限，远期高水位时仍有溢流风险，需二次扩容；施工需占用现状道路。",
       fit:"适用于已建成分流制为主、局部合流/混接的建成区，近期见效快。"},
      {n:"方案 B · 新建干管+调蓄池",area:"15.2",pipe:Math.round(len*0.09),dia:"d600~d1200",dep:"3.5~6.0",inv:4380,days:300,sc:91,
       pro:"一次到位，满流风险低，预留远期负荷",con:"投资高，涉及道路破复多",
       goal:"构建高标准的排水主干与调蓄体系，一次性解决系统性瓶颈，预留远期负荷空间。",
       scope:"15.2 km² 重点发展片区，新建排水主干管与 2 座初雨调蓄池。",
       key:"大口径顶管/定向钻施工 + 初雨调蓄池 + 在线调度的智能排水管控平台。",
       eng:"新建干管约 "+Math.round(len*0.09)+" m（d600~d1200），初雨调蓄池 2 座（总容积 3.6 万 m³），监控节点 60 处。",
       benefit:"满流风险低、远期扩容空间充足，系统整体标准提升至 3~5 年一遇。",
       risk:"投资高、道路破复与管线迁改多，征拆协调难度大、工期较长。",
       fit:"适用于新区建设、重点发展片区及标准提升需求明确的区域。"},
      {n:"方案 C · 原位修复+清淤扩容",area:"10.8",pipe:Math.round(len*0.03),dia:"d300~d600",dep:"2.0~3.5",inv:1650,days:150,sc:78,
       pro:"投资最低、工期短",con:"仅解决局部瓶颈，不改变系统格局",
       goal:"以非开挖为主，对现状管网清淤与局部结构性修复，快速恢复过流能力。",
       scope:"10.8 km² 管龄较长、淤堵与局部缺陷突出的片区。",
       key:"非开挖清淤 + CIPP 原位固化 + 局部点位修复，辅以检查井修复。",
       eng:"清淤及修复管段约 "+Math.round(len*0.03)+" m（d300~d600），CIPP 修复 120 段，检查井修复 200 座。",
       benefit:"投资最低、工期最短，对交通与环境影响最小。",
       risk:"仅解决局部瓶颈，不改变系统格局，远期仍受系统性能力不足制约。",
       fit:"适用于管龄老化、过流能力不足但整体格局尚可的片区，作为过渡性措施。"}];
    XO._plans=plans;
    const L=Xgtbl(["方案","服务面积km²","新建管长m","管径","投资万元","工期天","评分"],
        plans.map((p)=>[XoBtn(p.n,"oplan",p.n,"link"),p.area,String(p.pipe),p.dia,String(p.inv),String(p.days),
          "<b style='color:"+(p.sc>=85?"#4ade80":(p.sc>=80?"#fbbf24":"#94a3b8"))+"' data-v-14ae79c9>"+p.sc+"</b>"]),"暂无数据")+
      "<div style='font-size:11.5px;color:#fbbf24;margin-top:3px' data-v-14ae79c9>推荐：方案 B（评分 91）—— 规模与远期发展匹配度最高。</div>";
    const R="";
    return["排水系统设计",L+R];
  }
  if(k==="repair"){
    const reps=XoRepairs();
    const L=Xonums([{v:reps.total,t:"评估管段",c:"#38bdf8"},{v:reps.n4,t:"需开挖换管",c:"#f87171"},{v:reps.n3,t:"建议 CIPP",c:"#fbbf24"},{v:reps.n12,t:"点位修复/观察",c:"#4ade80"}])+
      Xgtbl(["管段","结构缺陷","功能缺陷","建议工艺","合理性"],
        reps.rows.slice(0,2).map((r)=>[r.name,String(r.st4)+" 级",String(r.fn4)+" 级",r.tech,
          "<span style='color:"+(r.score>=85?"#4ade80":(r.score>=70?"#fbbf24":"#f87171"))+"' data-v-14ae79c9>"+r.score+"</span>"]),"暂无缺陷记录")+
      "<div style='font-size:11px;color:#64748b;margin-top:2px' data-v-14ae79c9>工艺库：观察 / 点位修复 / CIPP 原位固化 / 开挖换管；缺陷等级为演示口径。</div>";
    const R="";
    return["管网修复设计",L+R];
  }
  if(k==="inf1"){
    const L=XoProg("管网普查（物探入库）",82,null)+
      XoProg("排水户接入调查",61,null)+
      XoProg("设施台账数字化",Math.round((XO._facN||0)/((XM.pipe||[]).length*0.3)*100),null);
    const R="";
    return["区域排水系统信息化",L+R];
  }
  if(k==="inf2"){
    const ps=XM.pipe||[],g3=ps.filter((p)=>String(p.geoJson||"").length>50).length,
      pct=ps.length?Math.round(g3/ps.length*100):0;
    const L=Xonums([{v:ps.length,t:"管段总数",c:"#38bdf8"},{v:g3,t:"已建三维",c:"#4ade80"},{v:pct+"%",t:"完成率",c:"#fbbf24"}])+
      XoProg("污水管（WSLINE）",pctOf(ps,"WS"),null)+XoProg("雨水管（YSLINE）",pctOf(ps,"YS"),null);
    const R="";
    return["管道三维模型",L+R];
  }
  if(k==="inf3"){
    const ds=XM.dev||[],on=ds.filter((d)=>String(d.status||"normal")==="normal").length,
      cov=Object.keys(XM.p2d||{}).length,ps=(XM.pipe||[]).length;
    const L=Xonums([{v:ds.length,t:"接入设备",c:"#38bdf8"},{v:on,t:"在线",c:"#4ade80"},{v:cov,t:"覆盖管段",c:"#fbbf24"}])+
      XoProg("设备在线率",ds.length?Math.round(on/ds.length*100):0,null)+
      XoProg("管段覆盖密度",Math.round(cov/(ps||1)*1000)/10,null)+
      XoProg("监测要素覆盖",55,null);
    const R="";
    return["物联网监控系统",L+R];
  }
  if(k==="ledger"){
    const cat=XO.cat,key=XO.key.trim(),all=XoAssets(cat,key);
    const rows=all.slice(0,5).map((a)=>[XoBtn(String(a.name),"oasset",a.__kind+":"+a.id,"link"),
      Xes(a.type),Xes(a.mat||"-"),String(a.dia||"-"),String(a.len||"-"),Xes(a.inst),
      "<span style='color:"+(String(a.status)==="normal"||String(a.status)==="ENABLE"?"#4ade80":"#f87171")+"' data-v-14ae79c9>"+(String(a.status)==="normal"||String(a.status)==="ENABLE"?"正常":"异常")+"</span>"]);
    const L="<div style='display:flex;gap:6px;margin-bottom:6px' data-v-14ae79c9>"+
      [["pipe","管段"],["fac","设施"],["dev","设备"]].map((c)=>XoBtn(c[1],ocatBtn(),c[0],XO.cat===c[0]?"primary":"")).join("")+
      "<input data-xo='okey' value='"+Xes(key)+"' placeholder='名称/编号/类型' style='flex:1;min-width:60px;height:26px;font-size:12px;color:#fff;background:#0f172ae6;border:1px solid rgba(148,163,184,.4);border-radius:4px;padding:0 6px;outline:none' data-v-14ae79c9>"+
      XoBtn("查询","osearch","")+XoBtn("重置","oreset","")+"</div>"+
      Xgtbl([["名称","26%"],["类型","17%"],["材质","12%"],["管径","10%"],["长度m","10%"],["建档","15%"],["状态","10%"]],
        rows.length?rows:[["—","—","—","—","—","—","—"]].slice(0,0),"暂无资产记录")+
      Xocap(all.length,5);
    const R=Xgtbl(["分类","数量","健康 A/B/C/D"],
        [["管段",String((XM.pipe||[]).length),XoHdist(XoAssets("pipe",""))],
         ["设施",String(XoAssets("fac","").length),XoHdist(XoAssets("fac",""))],
         ["设备",String((XM.dev||[]).length),XoHdist(XoAssets("dev",""))]],"暂无数据")+
      "<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>点击左栏资产名称查看单资产档案（原值/残值/寿命/健康/关联工单）。</div>";
    return["资产台账（"+all.length+"）",L+R];
  }
  if(k==="cycle"){
    const all=XO._allAll||(XO._allAll=XoAssets("__ALL__",""));
    const K=["新增","维修","损坏","丢失","报废","折旧","升级"];
    const cnt={};K.forEach((k)=>cnt[k]=0);
    all.forEach((a)=>{
      cnt.折旧++;if(a.woN>0)cnt.维修+=a.woN;
      const h=Xoh("cyc"+a.id);if(h%17===0)cnt.损坏++;if(h%53===7)cnt.丢失++;
      if(a.health==="D"&&h%9===3)cnt.报废++;if(h%23===5)cnt.升级++;});
    cnt.新增=all.filter((a)=>Xoy(a.inst)>=2024).length;
    const util=all.length?Math.round((100 - (all.filter((a)=>a.health==="D").length/all.length*100)) ):100;
    const L=Xonums([{v:cnt.新增,t:"本期新增",c:"#4ade80"},{v:cnt.维修,t:"维修工单",c:"#fbbf24"},{v:cnt.损坏+cnt.丢失,t:"损坏/丢失",c:"#f87171"},{v:cnt.报废,t:"报废",c:"#94a3b8"}])+
      Xgtbl(["周期环节","数量","说明"],
        [["新增",String(cnt.新增),"2024 年及以后建档"],
         ["维修",String(cnt.维修),"关联工单驱动的维修记录"],
         ["损坏",String(cnt.损坏),"巡检/工单发现的损坏（演示口径）"],
         ["丢失",String(cnt.丢失),"盘点缺失（演示口径）"],
         ["报废",String(cnt.报废),"健康 D 级且到达寿命（演示口径）"],
         ["折旧",String(cnt.折旧),"按线性折旧逐年在账面扣减"],
         ["升级",String(cnt.升级),"近三年技改升级（演示口径）"],
         ["利用率",util+"%","在用资产占比（排除 D 级闲置）"]],"暂无数据")+
      "<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>维修为真实工单关联；其余环节为演示口径。</div>";
    const ev=[];
    all.forEach((a)=>{if(a.woN>0)(XoWoOfPipe(a.id)||[]).slice(0,2).forEach((w)=>ev.push([a.name,"维修",String(w.workOrderCode||w.id||""),Xes(Xgdt?Xgdt(w.createTime):String(w.createTime||"").slice(0,10))]));});
    const R=Xgtbl([["资产","30%"],["环节","12%"],["单号","30%"],["日期","28%"]],
        ev.slice(0,5).map((r)=>[String(r[0]),r[1],String(r[2]),r[3]]),ev.length?"":"暂无维修记录")+
      Xocap(ev.length,5)+
      "<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>新增/折旧/报废等环节汇总见左栏；此处列出可追溯到工单的维修事件。</div>";
    return["资产全周期（"+all.length+" 项资产）",L+R];
  }
  if(k==="aeval"){
    const all=XO._allAll||(XO._allAll=XoAssets("__ALL__",""));
    const o=all.reduce((a,x)=>a+x.origin,0),rd=all.reduce((a,x)=>a+x.resid,0);
    const dist={};["A","B","C","D"].forEach((h)=>dist[h]=all.filter((x)=>x.health===h).length);
    const rows=all.slice().sort((a,b)=>("ABCD".indexOf(a.health)-"ABCD".indexOf(b.health))||(a.resid-b.resid)).slice(0,12);
    const L=Xonums([{v:Math.round(o),t:"资产原值(万元)",c:"#38bdf8"},{v:Math.round(rd),t:"资产残值(万元)",c:"#4ade80"},
        {v:o?Math.round(rd/o*100)+"%":"-",t:"成新率",c:"#fbbf24"},{v:Math.round(all.reduce((a,x)=>a+Math.max(0,x.life-x.serv),0)/(all.length||1))+"年",t:"平均剩余寿命",c:"#93c5fd"}])+
      Xgtbl(["健康等级","数量","占比"],["A","B","C","D"].map((h)=>[
        XohTag(h),String(dist[h]),Math.round(dist[h]/(all.length||1)*1000)/10+"%"]),"暂无数据")+
      Xgtbl(["资产","健康","原值万","残值万","剩余寿命年"],
        rows.map((a)=>[XoBtn(String(a.name),"oasset",a.__kind+":"+a.id,"link"),XohTag(a.health),
          String(a.origin),String(a.resid),String(Math.max(0,a.life-a.serv))]),"暂无数据")+
      "<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>评估口径：原值/寿命按类型基准（演示），健康等级由服役比+工单+状态派生。</div>";
    return["资产评估",L];
  }
  if(k==="asset")return["管网资产管理",XoAsset()];
  /* plan */
  const all=XO._allAll||(XO._allAll=XoAssets("__ALL__",""));
  const rows=all.filter((a)=>a.health==="D"||(a.health==="C"&&a.life-a.serv<5))
    .sort((a,b)=>"ABCD".indexOf(a.health)-"ABCD".indexOf(b.health)).slice(0,15);
  const bud=rows.reduce((a,x)=>a+Math.round(x.origin*0.6),0);
  const L=Xonums([{v:rows.length,t:"建议更新项",c:"#fbbf24"},{v:bud,t:"预算合计(万元)",c:"#38bdf8"},
      {v:"2027-2030",t:"实施窗口",c:"#93c5fd"}])+
    "<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>生成规则：D 级优先报废更换，C 级且剩余寿命&lt;5 年纳入大修；预算按原值 60% 估算。</div>";
  const byY={};rows.forEach((a,i)=>{const y=2027+i%4;(byY[y]=byY[y]||[]).push(a)});
  const R=Xgtbl(["年度","更新项","预算万","说明"],
      Object.keys(byY).sort().map((y)=>[y,String(byY[y].length)+" 项",
        String(byY[y].reduce((a,x)=>a+Math.round(x.origin*0.6),0)),
        byY[y].filter((x)=>x.health==="D").length+" 项报废更换，"+byY[y].filter((x)=>x.health!=="D").length+" 项大修升级"]),"暂无")+
    "<div style='display:flex;gap:8px;margin-top:6px' data-v-14ae79c9>"+XoBtn("导出更新计划(CSV)","oexp","plan")+"</div>"+
    "<div style='font-size:11px;color:#64748b;margin-top:3px' data-v-14ae79c9>年度安排按健康等级与预算滚动生成（演示口径）。</div>";
  return["资产更新计划",L+R];
},
/* 管网资产管理：合并原  四个资产模块，内部用页签切换 */
XoAsset=()=>{
  const K=[["a_ledger","资产台账","ledger"],["a_cycle","资产全周期","cycle"],
    ["a_aeval","资产评估","aeval"],["a_plan","资产更新计划","plan"]];
  const cur=XO.atab||"a_ledger";
  const it=K.filter((x)=>x[0]===cur)[0]||K[0];
  return XoTabs(K.map((x)=>[x[0],x[1]]),cur)+
    "<div style='padding:2px 2px 4px' data-v-14ae79c9>"+XoMod(it[2])[1]+"</div>";
},
XoLeft=()=>{
  /* 左右按高度均衡分配：左=设计评估3+区域排水信息化，右=三维模型/物联网监控+资产管理 */
  const L=["eff","design","repair","inf1"];
  return L.map((k)=>{const m=XoMod(k);return Xpan(m[0],"overview-panel",m[1])}).join("");
},
pctOf=(ps,kw)=>{const t=ps.filter((p)=>kw==="WS"?/WS/.test(String(p.pipelineType||"")):kw==="YS"?/YS/.test(String(p.pipelineType||"")):true).length,
  g=ps.filter((p)=>String(p.geoJson||"").length>50&&(kw==="WS"?/WS/.test(String(p.pipelineType||"")):kw==="YS"?/YS/.test(String(p.pipelineType||"")):true)).length;
  return t?Math.round(g/t*100):0},
ocatBtn=()=>"ocat",
/*  修复设计数据（确定性派生） */
XoRepairs=()=>{
  const ps=XM.pipe||[],rows=[];
  ps.forEach((p)=>{
    const h=Xoh("rep"+p.id);
    if(h%100>=8)return; /* 约 8% 管段存在缺陷 */
    const st4=1+h%4,fn4=1+(h>>3)%4,mx=Math.max(st4,fn4);
    const tech=mx>=4?"开挖换管":(mx===3?"CIPP 原位固化":(mx===2?"点位修复":"观察复测"));
    rows.push({name:p.pipelineName||p.pipelineCode,st4,fn4,tech,
      score:Math.min(95,58+(4-mx)*9+h%6)});
  });
  rows.sort((a,b)=>b.st4*b.fn4-a.st4*a.fn4);
  return{total:ps.length,rows,
    n4:rows.filter((r)=>r.tech==="开挖换管").length,
    n3:rows.filter((r)=>r.tech==="CIPP 原位固化").length,
    n12:rows.filter((r)=>r.tech==="点位修复"||r.tech==="观察复测").length};
},
/* ---------- 右栏 ---------- */
XoRight=()=>{
  const R=["inf2","inf3","asset"];
  return R.map((k)=>{const m=XoMod(k);return Xpan(m[0],"overview-panel",m[1])}).join("");
},
XoHdist=(arr)=>{const d={A:0,B:0,C:0,D:0};arr.forEach((a)=>d[a.health]++);return d.A+"/"+d.B+"/"+d.C+"/"+d.D},
/* ---------- 弹窗：评估报告 / 资产档案 ---------- */
XoPop=()=>{
  const v=String(XO.pop||"");
  if(!v)return;
  const box=(id,title,body)=>{
    let b=document.getElementById(id);
    if(!b){b=document.createElement("div");b.id=id;b.setAttribute("data-v-14ae79c9","");b.style.cssText=
      "position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(92vw,760px);max-height:82vh;z-index:9998;"+
      "background:#0f172af7;border:1px solid rgba(148,163,184,.5);border-radius:10px;box-shadow:0 14px 48px rgba(0,0,0,.66);"+
      "display:flex;flex-direction:column;overflow:hidden";document.body.appendChild(b)}
    b.innerHTML=XM_ST+
      "<div style='display:flex;justify-content:space-between;align-items:center;gap:12px;padding:11px 14px;border-bottom:1px solid rgba(148,163,184,.3)' data-v-14ae79c9>"+
      "<b style='font-size:14px;color:#93c5fd' data-v-14ae79c9>"+Xes(title)+"</b>"+
      XoBtn("关闭","opopclose","")+"</div>"+
      "<div style='padding:10px 14px;overflow:auto;font-size:12.5px;color:#cbd5e1;line-height:1.8' data-v-14ae79c9>"+body+"</div>";
  };
  if(v==="report"){
    const S=XO.sim||XoSim(XO.rain),reps=XoRepairs(),all=XO._allAll||(XO._allAll=XoAssets("__ALL__",""));
    const o=Math.round(all.reduce((a,x)=>a+x.origin,0)),rd=Math.round(all.reduce((a,x)=>a+x.resid,0));
    box("xopop","排水效能评估报告（"+S.rain+" 年一遇）",
      "<b style='color:#93c5fd' data-v-14ae79c9>一、模型概况</b><br>建模管段 "+S.total+" 段（覆盖全区雨/污水管网），曼宁系数 n=0.013，圆形断面恒定均匀流，地块汇流参数为演示口径。<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>二、工况模拟结果</b><br>正常负荷 "+S.normal+" 段（"+Math.round(S.normal/(S.total||1)*1000)/10+"%）；满负荷 "+S.full+" 段；超负荷 "+S.over+" 段；平均流速 "+S.avgV+" m/s。<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>三、主要结论</b><br>"+S.concl+"<br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>四、资产支撑</b><br>管网资产原值 "+o+" 万元、残值 "+rd+" 万元（成新率 "+(o?Math.round(rd/o*100):0)+"%）；缺陷管段 "+reps.rows.length+" 段，其中建议开挖换管 "+reps.n4+" 段、CIPP "+reps.n3+" 段。<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>五、建议</b><br>1）超负荷与缺陷管段纳入年度修复与更新计划；2）加密液位/流量监测点，提升模型校核精度；3）新建工程竣工即补录三维模型，防止信息化欠账。");
    return;
  }
  if(v.indexOf("asset:")===0){
    const key=v.slice(6); /* 形如 kind:id，资产 id 跨类别可能重复，须连同 __kind 一起比对 */
    const a=(XO._allAll||(XO._allAll=XoAssets("__ALL__",""))).filter((x)=>x.__kind+":"+x.id===key)[0];
    if(!a){XO.pop="";return}
    const wos=a.__kind==="pipe"?XoWoOfPipe(a.id):[];
    box("xopop","资产档案 · "+a.name,
      Xgtbl(["项目","内容"],[["类别",XO_KIND[a.__kind]+" / "+a.type],["编号",String(a.code||"-")],
        ["材质/规格",(a.mat||"-")+(a.dia?" / d"+a.dia:"")],["长度",a.len?a.len+" m":"-"],
        ["建档日期",a.inst+(String(a.raw&&a.raw.installationDate||"").length<4?"（演示口径）":"（真实）")],
        ["服役年限",a.serv+" 年 / 设计寿命 "+a.life+" 年"],
        ["资产原值",a.origin+" 万元"],["资产残值",a.resid+" 万元（线性折旧）"],
        ["健康等级",a.health+"（"+XO_HEALTH[a.health][0]+"）"],["运行状态",a.status],
        ["关联工单",String(wos.length)+" 条"]],"")+
      (wos.length?Xgtbl(["工单号","状态","类型"],wos.slice(0,8).map((w)=>[String(w.workOrderCode||w.id),Xes(String(w.status||"-")),Xes(String(w.workOrderType||"-"))]),""):""));
    return;
  }
  if(v.indexOf("plan:")===0){
    const key=v.slice(5);
    const p=(XO._plans||[]).filter((x)=>x.n===key)[0];
    if(!p){XO.pop="";return}
    const body="<div style='margin:0 0 8px' data-v-14ae79c9>"+Xgtbl(["指标","数值"],
        [["服务面积",p.area+" km²"],["新建管长",p.pipe+" m"],["管径范围",p.dia],
         ["埋深范围",p.dep+" m"],["总投资",p.inv+" 万元"],["计划工期",p.days+" 天"],["综合评分",String(p.sc)]])+"</div>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>方案目标</b><br>"+p.goal+"<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>实施范围</b><br>"+p.scope+"<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>关键技术</b><br>"+p.key+"<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>主要工程量</b><br>"+p.eng+"<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>预期效益</b><br>"+p.benefit+"<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>主要风险</b><br>"+p.risk+"<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>适用情形</b><br>"+p.fit+"<br><br>"+
      "<b style='color:#93c5fd' data-v-14ae79c9>优劣对照</b><br>优势："+p.pro+"；局限："+p.con;
    box("xopop","排水系统设计方案 · "+p.n, body);
    return;
  }
},
/* ---------- 交互 ---------- */
Xoact=async(a,v,el,e)=>{
  if(a==="otab"){XO.tab=String(v);XO.sim=null;return XoRender()}
  if(a==="atab"){XO.atab=String(v);return XoRender()}
  if(a==="ocat"){XO.cat=String(v);return XoRender()}
  if(a==="okey"){return}
  if(a==="osearch"){const i=document.querySelector("[data-xo='okey']");XO.key=i?i.value:"";return XoRender()}
  if(a==="oreset"){XO.key="";return XoRender()}
  if(a==="orain"){XO.rain=String(v);XO.sim=null;return XoRender()}
  if(a==="osim"){XO.sim=XoSim(XO.rain);XO.toast="工况模拟完成："+XO.rain+" 年一遇，超负荷 "+XO.sim.over+" 段";return XoRender()}
  if(a==="oreport"||a==="oasset"){XO.pop=(a==="oreport"?"report":("asset:"+String(v)));XoPop();return}
  if(a==="opopclose"){const b=document.getElementById("xopop");if(b)b.remove();XO.pop="";return}
  if(a==="oplan"){XO.pop="plan:"+String(v);XoPop();return}
  if(a==="oexp"){
    let rows=null,name="report";
    if(String(v)==="eff"){const S=XO.sim||XoSim(XO.rain);
      rows=[["管段","管径mm","负荷率%","流速m/s"]].concat(S.bad.map((x)=>[x.p.pipelineName||x.p.pipelineCode,Xnum(x.p.diameter)||"",Math.round(x.load*100),x.vel]));name="效能评估-超负荷管段"}
    if(String(v)==="plan"){const all=XO._allAll||(XO._allAll=XoAssets("__ALL__",""));
      rows=[["资产","类别","健康","建议动作","建议年度","预算万"]].concat(all.filter((x)=>x.health==="D"||(x.health==="C"&&x.life-x.serv<5)).map((x,i)=>[x.name,XO_KIND[x.__kind],x.health,x.health==="D"?"报废更换":"大修升级",String(2027+i%4),Math.round(x.origin*0.6)]));name="资产更新计划"}
    if(rows){XmCsv(rows,name);XO.toast="已导出："+name}
    return XoRender()}
},
XoHook=()=>{
  if(XO.hook)return;XO.hook=1;
  document.addEventListener("click",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xo]"):null;
    if(!el)return;
    const tg=String(el.tagName||"").toUpperCase();
    if(tg==="SELECT"||tg==="INPUT"||tg==="TEXTAREA")return;
    e.preventDefault();e.stopPropagation();
    Xoact(el.getAttribute("data-xo"),el.getAttribute("data-xv"),el,e);
  },true);
  document.addEventListener("change",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xo]"):null;
    if(!el)return;
    Xoact(el.getAttribute("data-xo"),el.value,el,e);
  },true);
  document.addEventListener("keydown",(e)=>{
    const el=(e.target&&e.target.closest)?e.target.closest("[data-xo='okey']"):null;
    if(!el)return;
    if(e.key==="Enter"){e.preventDefault();XO.key=el.value||"";XoRender()}
  },true);
},
/* ---------- 样式 ---------- */
Xostyle="<style id='xopsCss'>"+
  "[data-x='ops-l'] .xinject{overflow-y:auto!important;scrollbar-width:thin}"+
  "[data-x='ops-l'] .xinject>div.info-panel{flex:0 0 auto;margin-bottom:8px}"+
  "[data-x='ops-r'] .xinject{overflow-y:auto!important;scrollbar-width:thin}"+
  "[data-x='ops-r'] .xinject>div.info-panel{flex:0 0 auto;margin-bottom:8px}"+
  /* 紧凑排版：全局收紧字号/行高/间距，保证全部内容一屏呈现 */
  "[data-x='ops-l'] .xinject,[data-x='ops-r'] .xinject{font-size:11.5px;line-height:1.45}"+
  "[data-x='ops-l'] .xinject>div.info-panel,[data-x='ops-r'] .xinject>div.info-panel{margin-bottom:5px}"+
  "[data-x='ops-l'] .xinject>div.info-panel>.panel-header,[data-x='ops-r'] .xinject>div.info-panel>.panel-header{padding:4px 8px}"+
  "[data-x='ops-l'] .xinject>div.info-panel>.panel-header .panel-title,[data-x='ops-r'] .xinject>div.info-panel>.panel-header .panel-title{font-size:12.5px}"+
  "[data-x='ops-l'] .xinject>div.info-panel>.panel-content,[data-x='ops-r'] .xinject>div.info-panel>.panel-content{padding:3px 8px 5px}"+
  "[data-x='ops-l'] .xinject table th,[data-x='ops-l'] .xinject table td,[data-x='ops-r'] .xinject table th,[data-x='ops-r'] .xinject table td{padding:2px 4px;font-size:11px;line-height:1.35}"+
  "[data-x='ops-l'] .xinject button,[data-x='ops-r'] .xinject button{height:24px;font-size:11.5px}"+
  "[data-x='ops-l'] .xinject input,[data-x='ops-l'] .xinject select,[data-x='ops-r'] .xinject input,[data-x='ops-r'] .xinject select{height:24px;font-size:11.5px}"+
  ".xbtn.link{background:none;border:none;color:#93c5fd;text-decoration:underline dotted;padding:0}"+
  ".xbtn.sm{height:24px;padding:0 8px;font-size:12px}"+
  ".xbtn.primary{background:rgba(59,130,246,.55);border-color:rgba(96,165,250,.65);color:#fff}"+
  "</style>",
/* ---------- 渲染入口 ---------- */
XoRender=async()=>{
  const tip=XO.toast;XO.toast="";
  try{
    Xsl.value=Xostyle+XM_ST+(tip?"<div class='xtip' style='color:#fbbf24;border:1px solid rgba(234,179,8,.45)' data-v-14ae79c9>"+Xes(tip)+"</div>":"")+XoLeft();
    Xsr.value=Xostyle+XM_ST+XoRight();
  }catch(e){
    console.error("[XoRender]",e);
    Xsl.value=XM_ST+Xerr("智慧运维");Xsr.value=XM_ST+Xerr("决策支持");
  }
  if(XO.pop)XoPop();
  Xflush();
},
XloadOps=async()=>{
  try{
    try{window.__xOps=()=>XO;window.__xOpsR=()=>XoRender;window.__xOpsAct=(a,v)=>Xoact(a,v,null,null)}catch(e){}
    XoHook();
    if(!XM.ready){
      Xsl.value=XM_ST+Xpan("智慧运维","overview-panel","<div class='xtip' data-v-14ae79c9>正在加载基础数据（管段/设备/项目/工单）…</div>");
      Xsr.value=XM_ST+Xerr("决策支持");Xflush();
      await XmLoad();
    }
    if(!XG.load)await XgLoad();
    XO._allAll=null; /* 数据刷新后重建资产索引 */
    await XoRender();
  }catch(e){
    console.error("[XloadOps]",e);
    Xsl.value=XM_ST+Xerr("智慧运维");Xsr.value=XM_ST+Xerr("决策支持");Xflush();
  }
},

XloadGov=async()=>{try{try{if(typeof Xlg==="function")Xlg("gov:start")}catch(e){}try{window.__xGov=()=>XG;window.__xGovR=()=>XrenderGov;window.__xGovAct=(a,v)=>Xgact(a,v,null,null)}catch(e){}XgHook();if(!XM.me)await XmMe();if(!XM.ready){Xsg.value=XM_ST+Xpan("管网治理","overview-panel","<div class='xtip' data-v-14ae79c9>正在加载治理数据…</div>");Xsh.value=XM_ST+Xpan("现场资源","overview-panel","<div class='xtip' data-v-14ae79c9>正在加载…</div>");Xflush();await XmLoad();}await XgLoad();await XrenderGov();}catch(e){console.error("[XloadGov]",e);Xsg.value=XM_ST+Xerr("管网治理");Xsh.value=XM_ST+Xerr("现场资源");Xflush()}};let G=p(!1);const we=p([{key:"wsq",class:"first-level-node",title:"污水区",children:[{key:"wsq1",title:"一级污水区"},{key:"wsq2",title:"二级污水区"}]},{key:"layers",title:"管网",class:"first-level-node",children:[{key:"firstlevel",title:"一级管网",children:[]},{key:"secondlevel",title:"二级管网",children:[{key:"WSLINE",title:"污水管网"},{key:"YSLINE",title:"雨水管网"}]}]},{key:"well",class:"first-level-node",title:"管井"},{key:"devices",title:"设备",class:"first-level-node",children:[{key:"meter",title:"水位计"},{key:"flow",title:"流量计"},{key:"quality",title:"水质检测仪"}]}]),Ne=["wsq","layers","devices","well"],i=p({isOnline:!1,position:{longitude:110.45,latitude:29.5665},battery:85,status:"patrolling",currentTask:"管网巡检任务A",currentRoute:"",taskCycle:"",taskStatus:"",routeIds:[],baseTaskName:"管网巡检任务A",videoUrl:null,videoStatus:"disconnected",videoError:null,lastUpdate:new Date}),De=p([{id:"001",name:"巡检机器人-001",status:"active",statusText:"巡检中",battery:85,location:"110.450000, 29.566500",position:"110.450000, 29.566500",task:"管网巡检任务A",updateTime:"11:04:51"},{id:"002",name:"巡检机器人-002",status:"charging",statusText:"充电中",battery:45,location:"110.460000, 29.567500",position:"110.460000, 29.567500",task:"待机",updateTime:"10:58:23"},{id:"003",name:"巡检机器人-003",status:"maintenance",statusText:"维护中",battery:92,location:"110.470000, 29.568500",position:"110.470000, 29.568500",task:"设备维护",updateTime:"09:15:42"}]),H=p({visible:!1,selectedTask:null,dragging:!1,position:{x:0,y:0},offset:{x:0,y:0}}),dt=()=>{H.value.visible=!0,H.value.position={x:0,y:0}},ve=()=>{H.value.visible=!1,H.value.dragging=!1},Ce=l=>l.inspectionRoute.split(",").map(t=>t.trim()).filter(Boolean),_e=l=>{var t;Object.assign(i.value,{currentTask:l.planName,currentRoute:l.inspectionRoute,taskCycle:l.cycle,taskStatus:l.statusText,routeIds:Ce(l),baseTaskName:l.planName}),H.value.selectedTask=l,i.value.routeIds.length>0&&((t=T.value)!=null&&t.highlightRoutes)&&T.value.highlightRoutes(i.value.routeIds),ve()},Oe=l=>{H.value.dragging=!0,H.value.offset.x=l.clientX-H.value.position.x,H.value.offset.y=l.clientY-H.value.position.y,document.addEventListener("mousemove",Me),document.addEventListener("mouseup",Pe),l.preventDefault()},Me=l=>{H.value.dragging&&(H.value.position.x=l.clientX-H.value.offset.x,H.value.position.y=l.clientY-H.value.offset.y)},Pe=()=>{H.value.dragging=!1,document.removeEventListener("mousemove",Me),document.removeEventListener("mouseup",Pe)},R=p(null),w=p(!1),$=p(!1),J=p(!0),x=p(null),Fe=p({totalLength:"0.00",pipeCount:0,manholeCount:0,deviceCount:0}),ie=p({id:"",projectName:"",projectIntroduction:""}),qe=p([]),Ie=p([]),Te=p([]),ot=p([]),pe=p([]),K=p(null);let se=0;const fe=p(!1),je=p(!0),St=p({}),Ye=p([]),ke=p([]),vt=p(!1),We=p({x:0,y:0}),Ge=p(!1),It=p({x:0,y:0}),Re=p(null),ze=p([]),Ze=p(""),nt=p({}),me=p({}),el=p(null),Rt=p(!1),Ot=p(!1),Lt=p([]),_l=p([]),rl=p([]),Mt=p(0),Pt=p(1),pt=p(10);Kt(()=>Math.max(1,Math.ceil(Mt.value/pt.value)));const cl=p(""),At=()=>{const l=(cl.value||"").toString();let t=Lt.value||[];l&&(t=t.filter(b=>b.dataType===l)),t=t.slice().sort((b,N)=>new Date(b.collectionTime)-new Date(N.collectionTime)),_l.value=t,Mt.value=t.length,Pt.value>Math.ceil((Mt.value||1)/pt.value)&&(Pt.value=1);const o=(Pt.value-1)*pt.value,y=o+pt.value;rl.value=t.slice(o,y)};ut([Pt,pt],()=>{At()}),ut(ee,l=>{l?T.value&&T.value.addRobotMarker&&T.value.addRobotMarker(i.value.position):T.value&&T.value.removeRobotMarker&&T.value.removeRobotMarker()});const ft=p(null),He=p("disconnected"),$t=p(0);let Ft=null,tl=null,Yt=null,Et=null,Ve=[],Se=0,Le=!1,Ke=-1;const ye=["/video/监测视频.mp4","/video/监测视频1.mp4"];let mt=0;const xt=p(null),Wt=p(null),yt=p(null);let Ue=null,ce=null,he=null;const ul={valve:"🔧",pump:"🚰",pressure:"📊",flow:"🌊",temperature:"🌡️",level:"📏",quality:"🧪",meter:"⏱️",hydrant:"🚒",manhole:"🕳️",tank:"🛢️",filter:"🪣"},Ht=l=>{const t=(l||"").toString().toLowerCase();return t.includes("valve")||t.includes("阀")?"valve":t.includes("pump")||t.includes("泵")?"pump":t.includes("pressure")||t.includes("压")?"pressure":t.includes("flow")||t.includes("流")?"flow":t.includes("temp")||t.includes("温")?"temperature":t.includes("level")||t.includes("液位")?"level":t.includes("quality")||t.includes("水质")?"quality":t.includes("meter")||t.includes("表")?"meter":t.includes("hydrant")||t.includes("消防")?"hydrant":t.includes("manhole")||t.includes("井")?"manhole":t.includes("tank")||t.includes("罐")?"tank":t.includes("filter")||t.includes("滤")?"filter":t},Vt=()=>{try{if(!Wt.value){console.warn("管材统计图表DOM元素不存在，跳过渲染");return}Wt.value.innerHTML=Xmt(qe.value);return;ce&&(ce.dispose(),ce=null),ce=wl(Wt.value);const l=(qe.value||[]).map(o=>{let y=o.material;return(!y||y==="undefined"||y==="null")&&(y="普通材质"),y}),t=(qe.value||[]).map(o=>o.countNum);ce==null||ce.setOption({tooltip:{trigger:"axis"},grid:{left:40,right:60,top:30,bottom:20},xAxis:{type:"category",data:l,name:"管材类型",nameTextStyle:{color:"#cbd5e1",fontSize:12},axisLabel:{color:"#cbd5e1",show:!0,fontSize:11},axisLine:{show:!0,lineStyle:{color:"#475569"}},axisTick:{show:!0,lineStyle:{color:"#475569"}}},yAxis:{type:"value",name:"数量",nameTextStyle:{color:"#cbd5e1",fontSize:12},axisLabel:{color:"#cbd5e1",show:!0,fontSize:11},axisLine:{show:!0,lineStyle:{color:"#475569"}},axisTick:{show:!0,lineStyle:{color:"#475569"}},splitLine:{show:!0,lineStyle:{color:"#334155",type:"dashed"}}},series:[{type:"bar",name:"管材",data:t,barMaxWidth:26,itemStyle:{color:"#60a5fa"}}]})}catch(l){console.error("管材统计图表渲染失败:",l)}},dl=()=>{if(yt.value)try{he&&he.dispose(),he=wl(yt.value);const l=Ye.value.filter(o=>o.value>0);if(l.length===0){const o={backgroundColor:"transparent",graphic:{type:"text",left:"center",top:"middle",style:{text:"暂无设备数据",fontSize:14,fill:"#94a3b8"}}};he.setOption(o);return}const t={backgroundColor:"transparent",tooltip:{trigger:"item",backgroundColor:"rgba(15, 23, 42, 0.95)",borderColor:"rgba(255, 255, 255, 0.1)",textStyle:{color:"#e2e8f0"},formatter:o=>`${o.data.icon} ${o.data.name}<br/>数量: ${o.data.value}<br/>占比: ${o.percent}%`},legend:{orient:"vertical",left:"left",top:"center",textStyle:{color:"#94a3b8",fontSize:11},itemGap:12,formatter:o=>{const y=l.find(b=>b.name===o);return y?`${y.icon} ${o}`:o}},series:[{name:"设备分布",type:"pie",radius:["45%","75%"],center:["65%","50%"],avoidLabelOverlap:!1,itemStyle:{},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:16,fontWeight:"bold",color:"#ffffff",formatter:o=>`${o.data.icon}
${o.data.value}`}},labelLine:{show:!1},data:l.map((o,y)=>({...o,itemStyle:{color:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#84cc16","#f97316","#ec4899","#6366f1"][y%10]}}))}]};he.setOption(t)}catch(l){console.error("设备图表渲染失败:",l)}},vl=()=>{try{if(!xt.value){console.warn("管径统计图表DOM元素不存在，跳过渲染");return}Ue&&(Ue.dispose(),Ue=null),Ue=wl(xt.value);const l=Ie.value||[],t=new Map;let o=0;for(const O of l){let Y=O.diameter??O.name;if(!Y||Y==="undefined"||Y==="null")continue;const q=Number(O.countNum??O.value??0),ge=String(Y).match(/\d+/);if(ge&&Number(ge[0])<200){o+=q;continue}Y=String(Y),t.set(Y,(t.get(Y)||0)+q)}o>0&&t.set("小于200",o);const y=Array.from(t.keys()),b=y.map(O=>t.get(O)),N=O=>O==="小于DN200"||/^DN/i.test(O)?O:`DN${O}`;let D=y.map((O,Y)=>({name:N(O),value:b[Y]})).sort((O,Y)=>Y.value-O.value);Ue==null||Ue.setOption({tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},legend:{type:"scroll",top:0,textStyle:{color:"#cbd5e1"}},series:[{name:"管径",type:"pie",radius:["40%","70%"],center:["50%","60%"],avoidLabelOverlap:!0,label:{color:"#e5e7eb"},labelLine:{length:8,length2:6},data:D}]})}catch(l){console.error("管径统计图表渲染失败:",l)}},pl=Kt(()=>{const l=new Date;return{time:l.toLocaleTimeString("zh-CN",{hour12:!1}),date:l.toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric",weekday:"long"})}}),ll=()=>{const{time:l,date:t}=pl.value;k.value=l,L.value=t},sl=()=>{if(!ft.value)try{He.value="connecting";const l=Ia.openDashboardStream();l.onopen=()=>{He.value="connected",$t.value=0},l.addEventListener("deviceStatus",t=>{try{const o=JSON.parse(t.data);fl(o.data)}catch(o){console.error("❌ 解析设备状态数据失败:",o)}}),l.addEventListener("alarmData",t=>{try{const o=JSON.parse(t.data);Tl(o.data)}catch(o){console.error("解析告警数据失败:",o)}}),l.addEventListener("robotStatus",t=>{try{const o=JSON.parse(t.data);Bt(o.data)}catch(o){console.error("解析机器人状态数据失败:",o)}}),l.onerror=t=>{He.value="error",console.error("大屏SSE连接错误:",t),$t.value<Hu?($t.value++,Ft=setTimeout(()=>{Ut(),sl()},5e3*$t.value)):(console.error("SSE重连次数已达上限，停止重连"),He.value="failed")},ft.value=l}catch(l){console.error("建立大屏SSE连接失败:",l),He.value="failed"}},Ut=()=>{ft.value&&(ft.value.close(),ft.value=null),Ft&&(clearTimeout(Ft),Ft=null),He.value="disconnected"},fl=l=>{if(l.devices&&Array.isArray(l.devices)){pe.value=l.devices,Jl(l.devices);const t={},o=[];for(const y of l.devices){const b=y.type||y.deviceType||"",N=Ht(b);t[N]||(t[N]=0),t[N]++}for(const[y,b]of Object.entries(t)){const N=xs[y]||y,D=ul[y]||"📍";o.push({type:y,name:N,value:b,icon:D})}o.sort((y,b)=>b.value-y.value),St.value=t,Ye.value=o,dl()}},Tl=l=>{l.alarms&&Array.isArray(l.alarms)&&(ke.value=l.alarms)},Bt=l=>{l.robot&&(i.value={...i.value,...l.robot,lastUpdate:new Date})},kl=()=>({connected:"实时连接",connecting:"连接中",disconnected:"未连接",error:"连接错误",failed:"连接失败"})[He.value]||"未知状态",qt=()=>{Q.value=!Q.value,Q.value&&R.value?ee.value=!0:ee.value=!1},Sl=()=>{Kl(),T.value&&T.value.clearRobotTrajectory&&T.value.clearRobotTrajectory(),T.value&&T.value.clearRouteHighlight&&T.value.clearRouteHighlight(),ee.value=!1},Ll=()=>{I.value="pipeline",xe(()=>{Vt(),vl()})},El=async()=>{await Xau(),I.value="maintenance",s(),Nl(),u.value.current=1,u.value.hasMore=!0,XloadOps()},Xj1=async()=>{I.value="monitoring",await Xau(),XloadMon(),xe(()=>{XmonScroll()})},Xj2=async()=>{I.value="governance",await Xau(),XloadGov()},jt=p("ALL"),xl=p([{key:"ALL",label:"全部"},{key:"MONTH",label:"日常"},{key:"QUARTER",label:"季度"},{key:"TEMP",label:"临时"}]),Gt=p([]),Nl=async()=>{try{const l=await Ra.pnInspectionPlanPage({pageSize:20,pageNumber:1});l&&l.records&&(Gt.value=l.records.map(t=>({id:t.id,planName:t.planName,status:t.status,statusText:t.status==="RUNNING"?"运行":"停止",inspectionRoute:t.routeNames,timeRange:t.startTime&&t.endTime?`${st(t.startTime).format("YYYY-MM-DD")} - ${st(t.endTime).format("YYYY-MM-DD")}`:"--",executor:t.executorNames,cycle:t.cycle,planType:t.cycle,routeIds:t.routeIds})))}catch(l){console.error("获取巡检计划失败:",l),Gt.value=[{id:"1",planName:"日常巡检",status:"running",statusText:"运行",inspectionRoute:"YSLINEYSLNE3195",timeRange:"2024-08-27 - 2025-09-08",executor:"超管,业管,测试",cycle:"每月",planType:"daily"}]}},zt=Kt(()=>jt.value==="ALL"?Gt.value:Gt.value.filter(t=>t.planType===jt.value)),Nt=p([]),ue=p({current:1,size:10,total:0,loading:!1,hasMore:!0}),al=p(!1),re=p(null),s=async(l=!1)=>{if(!(!l&&!ue.value.hasMore)&&!ue.value.loading){ue.value.loading=!0;try{const t=l?ue.value.current+1:1,o={size:ue.value.size,current:t};wt.value.keyword&&(o.inspectionRecordNo=wt.value.keyword.trim()),wt.value.result&&(o.inspectionResult=wt.value.result.trim());const y=await ms.pnInspectionRecordsPage(o);if(y&&y.records){const b=y.records.map(D=>{const O=D.inspectionResult||D.status||"",q=String(O).toUpperCase()==="NORMAL"?"normal":"abnormal",ge=O?Ae.translateTree("INSPECTION_RESULT",O):"",Xe=ge!=null&&ge!==""?ge:O||"";return{id:D.id,inspectionRecordNo:D.inspectionRecordNo,planName:D.planName,result:q,resultText:Xe,inspectionDate:D.inspectionDate?st(D.inspectionDate).format("YYYY-MM-DD HH:mm"):"--",inspectionResult:O,pipelineNames:D.pipelineNames,createUserName:D.createUserName,issueDesc:D.issueDesc,location:D.location,issueLevel:D.issueLevel,issueLevelText:D.issueLevel?Ae.dictTypeData("ISSUE_LEVEL",D.issueLevel):"--"}});l?(Nt.value=[...Nt.value,...b],ue.value.current=t):(Nt.value=b,ue.value.current=1),ue.value.total=y.total||0;const N=Math.ceil((y.total||0)/ue.value.size);ue.value.hasMore=t<N}}catch(t){console.error("获取巡检记录失败:",t),l||(Nt.value=[{id:"001",inspectionRecordNo:"XJ0001",planName:"日常巡检",result:"normal",resultText:"正常",inspectionDate:st().format("YYYY-MM-DD HH:mm"),inspectionResult:"NORMAL",pipelineNames:"--",createUserName:"--",issueDesc:"--",location:"--",issueLevel:"",issueLevelText:"--"},{id:"002",inspectionRecordNo:"XJ0002",planName:"季度巡检",result:"abnormal",resultText:"异常",inspectionDate:st().subtract(1,"day").format("YYYY-MM-DD HH:mm"),inspectionResult:"EXCEPTION",pipelineNames:"--",createUserName:"--",issueDesc:"--",location:"--",issueLevel:"EMERGENCY",issueLevelText:"紧急"}])}finally{ue.value.loading=!1}}},a=l=>{re.value=l,al.value=!0},r=()=>{al.value=!1,re.value=null},c=p([]),v=p({status:null}),u=p({current:1,size:20,total:0,loading:!1,hasMore:!0}),d=Ae.dictList("WORK_ORDER_STATUS"),n=p(!1),M=p(!1),g=p(null),B=p(null);let ne=null;const U={REPAIR:"维修",MAINTENANCE:"保养",URGENT_REPAIR:"抢修",PREVENTIVE_MAINTENANCE:"预防性维护"},Je={MANUAL:"手动创建",INSPECTION_RECORD:"巡检记录生成",SYSTEM:"系统推送",OTHER:"其他"},et=l=>l?st(l).format("YYYY-MM-DD HH:mm"):"--",te=l=>({id:l.id,workOrderCode:l.workOrderCode||"--",issueDesc:l.issueDesc||l.description||"--",location:l.location||"--",priority:l.priority,priorityText:l.priority?Ae.dictTypeData("WORK_ORDER_PRIORITY",l.priority):"--",status:l.status,statusText:l.status?Ae.dictTypeData("WORK_ORDER_STATUS",l.status):"--"}),tt=l=>({id:l.id,workOrderCode:l.workOrderCode||"--",description:l.description||"--",workOrderTypeText:U[l.workOrderType]||l.workOrderType||"--",sourceText:Je[l.source]||l.source||"--",status:l.status,statusText:l.status?Ae.dictTypeData("WORK_ORDER_STATUS",l.status):"--",priorityText:l.priority?Ae.dictTypeData("WORK_ORDER_PRIORITY",l.priority):"--",progress:l.progress??0,issueDesc:l.issueDesc||l.description||"--",location:l.location||"--",issueLevelText:l.issueLevel?Ae.dictTypeData("ISSUE_LEVEL",l.issueLevel):"--",pipelineNames:l.pipelineNames,taskHandlersName:l.taskHandlersName||"--",plannedStartTimeText:et(l.plannedStartTime),plannedEndTimeText:et(l.plannedEndTime),actualStartTimeText:et(l.actualStartTime),actualEndTimeText:et(l.actualEndTime),handleResult:l.handleResult||"--",handleMeasure:l.handleMeasure||"--",inspectionRecordNo:l.inspectionRecordNo,planName:l.planName,inspectionDateText:et(l.inspectionDate),acceptanceTimeText:et(l.acceptanceTime),acceptanceResultText:l.acceptanceResult?Ae.dictTypeData("WORK_ORDER_ACCEPTANCE_RESULT",l.acceptanceResult):"--",acceptanceOpinion:l.acceptanceOpinion||"--"}),Ee=async(l=!1)=>{if(!(l&&!u.value.hasMore)&&!u.value.loading){u.value.loading=!0;try{const t=l?u.value.current+1:1,o={size:u.value.size,current:t,mineOnly:!1};v.value.status&&(o.status=v.value.status);const y=await ds.pipelineWorkOrderPage(o);if(y&&y.records){const b=y.records.map(te);l?(c.value=[...c.value,...b],u.value.current=t):(c.value=b,u.value.current=1),u.value.total=y.total||0;const N=Math.ceil((y.total||0)/u.value.size);u.value.hasMore=t<N}}catch(t){console.error("获取工单列表失败:",t),l||(c.value=[])}finally{u.value.loading=!1,hs()}}},Jt=()=>{u.value.current=1,u.value.hasMore=!0,Ee(!1)},jl=l=>{const t=l.target;t.scrollHeight-t.scrollTop-t.clientHeight<50&&u.value.hasMore&&!u.value.loading&&Ee(!0)},hs=()=>{xe(()=>{var l;Gl(),ne=(l=B.value)==null?void 0:l.querySelector(".el-scrollbar__wrap"),ne&&ne.addEventListener("scroll",jl)})},Gl=()=>{ne&&(ne.removeEventListener("scroll",jl),ne=null)},gs=async l=>{if(l!=null&&l.id){n.value=!0,M.value=!0,g.value=null;try{const t=await ds.pipelineWorkOrderDetail({id:l.id});g.value=tt(t)}catch(t){console.error("获取工单详情失败:",t),g.value=tt(l)}finally{M.value=!1}}},zl=()=>{n.value=!1,g.value=null},bs=l=>{i.value={isOnline:l.status==="active",position:{longitude:parseFloat(l.position.split(",")[0]),latitude:parseFloat(l.position.split(",")[1])},battery:l.battery,status:l.status==="active"?"patrolling":l.status,currentTask:l.task,videoUrl:null,videoStatus:"disconnected",videoError:null,lastUpdate:new Date},R.value=l,Q.value=!0,ee.value=!0},ws=l=>{l.length>0&&Ts(l[0])},_s=(l,t)=>{const y=t.node.key,b=Array.isArray(l)?l:l.checked||[],N=ht(y,"layers"),D=ht(y,"devices"),O=ht(y,"well"),Y=ht(y,"wsq");N?W.value=b.filter(q=>ht(q,"layers")):D?be.value=b.filter(q=>ht(q,"devices")):O?E.value=b.filter(q=>ht(q,"well")):Y&&(Z.value=b.filter(q=>ht(q,"wsq"))),N?ml("layer",W.value):D?ml("device",be.value):O?ml("well",E.value):Y&&ml("wsq",Z.value)},ht=(l,t)=>{if(l===t)return!0;const o=we.value.find(y=>y.key===t);if(!o||!o.children)return!1;if(o.children.some(y=>y.key===l))return!0;for(const y of o.children)if(y.children&&y.children.some(b=>b.key===l))return!0;return!1},Ts=(l=null)=>{ks(l)},ml=(l,t)=>{T.value&&T.value.handleLayerControl?T.value.handleLayerControl(l,t):console.warn("地图组件或handleLayerControl方法不存在")},ks=l=>{T.value&&T.value.clearPolylineEntities&&T.value.clearPolylineEntities(),l==="layers"&&(l="all"),Ls([l])},Ss=(l,t)=>{},Ls=async(l=[])=>{try{const t={projectId:C.value};l&&l.length>0&&(t.pipelineTypes=l);const o=await Hl.getPipeLineGeoJsonByProjectId(t);if(!o)return;V.value=o&&o.data!==void 0?o.data:o}catch(t){console.error("加载项目 GeoJSON 失败:",t)}},Es=()=>{Hl.getBigScreenInfo({projectId:C.value}).then(l=>{l&&(ie.value=l.project||{},Fe.value={totalLength:l.pipelineLengthSum||"0.00",pipeCount:l.total||0,manholeCount:Math.floor((l.total||0)*.3),deviceCount:l.deviceCount||0},qe.value=l.typeDistribution||[],Ie.value=l.diameterDistribution||[],Vt(),vl())}).catch(l=>{console.error("获取大屏数据失败:",l)})},xs={valve:"阀门",pump:"水泵",pressure:"压力传感器",flow:"流量计",temperature:"温度传感器",level:"液位计",quality:"水质监测仪",meter:"水表",hydrant:"消防栓",manhole:"检查井",tank:"储水罐",filter:"过滤器"},Ns={0:"在线",1:"离线",2:"故障",3:"维护中"},it=p([]),Ds=Kt(()=>new Map((it.value||[]).map(l=>[l.value,l.label]))),gt=l=>Ds.value.get(l)||l,Cs=async l=>{try{const t=await us.dataTypeList({deviceId:l}),o=(t==null?void 0:t.records)||(t==null?void 0:t.data)||t||{},y=Object.entries(o).map(([b,N])=>({value:b,label:N}));if(Re.value&&Re.value.deviceType){const b=Re.value.deviceType.toLowerCase();if(b==="meter"){const N=["WATER_LEVEL","WL_SIGNAL","BATTERY_LEVEL"],D=y.filter(O=>N.includes(O.value));it.value=N.map(O=>D.find(Y=>Y.value===O)).filter(Boolean)}else if(b==="flow"||b==="flow_meter"){const N=["WATER_LEVEL","WATER_FLOW","WATER_SPEED","WL_SIGNAL","BATTERY_LEVEL"],D=y.filter(O=>N.includes(O.value));it.value=N.map(O=>D.find(Y=>Y.value===O)).filter(Boolean)}else if(b==="quality"){const N=["COD_VALUE","NH4N_VALUE","PH_VALUE","WATER_FLOW","WATER_LEVEL","WATER_SPEED","DEV_TEMP","DOOR_DEFENCE_STATUS","SHUTDOWN_STATUS","BATTERY_LEVEL","WL_SIGNAL"],D=y.filter(O=>N.includes(O.value));it.value=N.map(O=>D.find(Y=>Y.value===O)).filter(Boolean)}else it.value=y}else it.value=y}catch{console.warn("操作失败")}},Dl=p({keyWord:null});ut(()=>Dl.value.keyWord,l=>{const t=pe.value.filter(o=>(o.name||o.deviceName||o.code||"设备").includes(l));Jl(t)});const Jl=l=>{Te.value=l.map(t=>{const o=t.type||t.deviceType||"",y=t.status||t.deviceStatus||"normal",b=Ht(o),N=ul[b]||"📍";let D="未知";switch(b){case"pressure":D="0.6 MPa";break;case"flow":D="120 L/min";break;case"temperature":D="18°C";break;case"valve":D="开启";break;default:D="正常"}return{id:t.id,name:t.name||t.deviceName||t.code||"设备",value:D,status:y,statusText:Ns[y]||"未知",icon:N,device:t,location:t.pipelineName||t.location||"未知位置"}}),se=0,ot.value=[],je.value=!0,yl(),Is()},Is=async()=>{await xe();const l=K.value;if(l)for(;je.value&&l.scrollHeight<=l.clientHeight;)yl(),await xe()},yl=()=>{if(fe.value||!je.value)return;fe.value=!0;const l=Math.min(se+Wu,Te.value.length),t=Te.value.slice(se,l);ot.value=ot.value.concat(t),se=l,fe.value=!1,je.value=se<Te.value.length},Rs=l=>{if(!l)return[];try{const t=JSON.parse(l);return Array.isArray(t)?t:[]}catch(t){return console.error("解析关键参数失败:",t),[]}},Os=l=>{es(l.device)},Ms=l=>{if(l.showHistory&&l.device){es(l.device);return}el.value=l},Ps=l=>{const t=l.pipelineIndex||l.index||0;Hs(t),i.value.currentTask=`已选择管线${t+1}，点击开始巡检`,i.value.lastUpdate=new Date},As=l=>{var t;if(de.value=l,Q.value=!0,!l&&((t=T==null?void 0:T.value)!=null&&t.handleLayerControl))try{T.value.handleLayerControl("layer",W.value),T.value.handleLayerControl("device",be.value),T.value.handleLayerControl("well",E.value)}catch(o){console.warn("关闭3D后恢复图层失败:",o)}},$s=l=>{oe.value=!!l},Fs=l=>({patrolling:"巡检中",charging:"充电中",maintenance:"维护中",offline:"离线"})[l]||"未知",Ys=l=>new Date(l).toLocaleTimeString("zh-CN"),Xl=()=>!Le||Ve.length===0?0:Math.round(Se/Ve.length*100),Ws=()=>{if(!Le||Ve.length===0)return"";const l=Ve[Se];return l?l.routeName?`${l.routeName} - 第${Se+1}个巡检点`:l.pipelineIndex!==void 0?`管线${l.pipelineIndex+1} - ${l.description}`:`巡检点 ${Se+1}/${Ve.length}`:""},Hs=l=>{Ke=l,mt=(mt+1)%ye.length,i.value.currentTask=`已选择管线${l+1}，点击开始巡检`,i.value.lastUpdate=new Date,ol()},Vs=()=>{Ke=-1,i.value.currentTask="待机中",i.value.lastUpdate=new Date,ol(),Ql()},Ql=()=>{T.value&&T.value.clearRobotTrajectory&&T.value.clearRobotTrajectory()},Us=()=>{w.value=!w.value,w.value&&!i.value.videoUrl&&(i.value.videoUrl=ye[mt],i.value.lastUpdate=new Date)},Zl=()=>{$.value=!$.value},hl=()=>{w.value=!1,$.value=!1,lt&&(clearInterval(lt),lt=null),X&&(X.destroy(),X=null),bt&&x.value&&(Object.entries(bt).forEach(([l,t])=>{x.value.removeEventListener(l,t)}),bt=null),x.value&&(x.value.pause(),x.value.src="",x.value.removeEventListener("loadstart",Il),x.value.removeEventListener("canplay",Rl),x.value.removeEventListener("error",Ol),x.value.removeEventListener("waiting",Ml)),i.value.videoStatus="disconnected",i.value.videoError=null};let X=null,lt=null,bt=null;const Cl=async()=>{w.value=!0,i.value.videoStatus="connecting",i.value.videoError=null;const l="http://111.175.187.70:11301/live/robot_cctv/hls.m3u8";if(i.value.videoUrl=l,i.value.lastUpdate=new Date,await new Promise(t=>setTimeout(t,100)),!x.value){i.value.videoStatus="error",i.value.videoError="视频元素未找到";return}try{if(X&&(X.destroy(),X=null),ct&&ct.isSupported())X=new ct({debug:!1,enableWorker:!0,lowLatencyMode:!1,maxBufferLength:15,maxMaxBufferLength:30,liveSyncDurationCount:2,liveMaxLatencyDurationCount:3,maxBufferSize:30*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.2,liveDurationInfinity:!0,liveBackBufferLength:15,fragLoadingTimeOut:8e3,manifestLoadingTimeOut:8e3,levelLoadingTimeOut:8e3,fragLoadingMaxRetry:3,levelLoadingMaxRetry:3,manifestLoadingMaxRetry:3}),X.loadSource(l),X.attachMedia(x.value),X.on(ct.Events.MANIFEST_PARSED,()=>{i.value.videoStatus="connected",i.value.videoError=null}),X.on(ct.Events.ERROR,(t,o)=>{if(console.error("HLS错误:",o),o.type===ct.ErrorTypes.MEDIA_ERROR&&o.details==="bufferStalledError"){if(console.warn("检测到缓冲停滞，尝试恢复..."),X&&x.value)try{X.startLoad()}catch(y){console.warn("恢复播放失败:",y)}return}if(o.type===ct.ErrorTypes.NETWORK_ERROR&&(o.details==="levelLoadTimeOut"||o.details==="fragLoadTimeOut")){if(console.warn("网络超时，尝试重新加载..."),X)try{X.startLoad()}catch(y){console.warn("重新加载失败:",y)}return}if(o.fatal)switch(i.value.videoStatus="error",o.type){case ct.ErrorTypes.NETWORK_ERROR:i.value.videoError="HLS网络错误，请检查流是否可用",X.startLoad();break;case ct.ErrorTypes.MEDIA_ERROR:i.value.videoError="HLS媒体错误，请检查视频格式",X.recoverMediaError();break;default:i.value.videoError="HLS播放错误: "+o.details,X.destroy(),setTimeout(()=>{Cl()},2e3);break}});else if(x.value.canPlayType("application/vnd.apple.mpegurl"))x.value.src=l,x.value.addEventListener("loadedmetadata",()=>{i.value.videoStatus="connected",i.value.videoError=null});else throw new Error("浏览器不支持HLS播放");x.value.addEventListener("loadstart",Il),x.value.addEventListener("canplay",Rl),x.value.addEventListener("error",Ol),x.value.addEventListener("waiting",Ml)}catch(t){console.error("视频初始化失败:",t),i.value.videoStatus="error",i.value.videoError=t.message||"视频初始化失败"}},Il=()=>{i.value.videoStatus!=="connecting"&&(i.value.videoStatus="connecting")},Rl=()=>{i.value.videoStatus="connected",i.value.videoError=null},Ol=l=>{var y,b;i.value.videoStatus="error";const t=l.target;let o="视频连接失败";if(t.error)switch(t.error.code){case 1:o="视频加载被中止";break;case 2:o="网络错误，无法加载视频";break;case 3:o="视频解码错误";break;case 4:o="视频格式不支持";break;default:o=`视频播放错误 (代码: ${t.error.code})`}i.value.videoError=o,console.error("视频播放错误:",l),console.error("错误详情:",{errorCode:(y=t.error)==null?void 0:y.code,errorMessage:(b=t.error)==null?void 0:b.message,videoSrc:t.src,networkState:t.networkState,readyState:t.readyState})},Ml=()=>{i.value.videoStatus!=="connecting"&&(i.value.videoStatus="connecting")},Bs=l=>({disconnected:"未连接",connecting:"连接中",connected:"已连接",error:"连接错误"})[l]||"未知状态",qs=async()=>{i.value.videoStatus="connecting",i.value.videoError=null,X&&(X.destroy(),X=null),await Cl()},js=()=>{hl(),i.value.status==="patrolling"&&i.value.currentTask.includes("等待视频连接")&&(i.value.currentTask=`${i.value.baseTaskName} - 无视频模式，开始移动`,i.value.lastUpdate=new Date,Dt())},Gs=()=>{J.value=newValue,T.value&&T.value.updateRobotTrajectory&&T.value.updateRobotTrajectory(J.value)},zs=()=>{if(i.value.isOnline){if(!i.value.routeIds||i.value.routeIds.length===0){alert("请先选择巡检任务！");return}i.value.status="patrolling",i.value.currentTask=`${i.value.baseTaskName} - 等待视频连接`,i.value.lastUpdate=new Date,w.value||Cl(),Xs()}},Js=async()=>{try{bt&&(Object.entries(bt).forEach(([b,N])=>{var D;(D=x.value)==null||D.removeEventListener(b,N)}),bt=null),x.value.removeEventListener("loadstart",Il),x.value.removeEventListener("canplay",Rl),x.value.removeEventListener("error",Ol),x.value.removeEventListener("waiting",Ml),lt&&(clearInterval(lt),lt=null),x.value.pause(),x.value.src="",x.value.load(),await xe(),await new Promise(b=>setTimeout(b,300));const l=ye[mt];console.log(`切换到本地视频 ${mt+1}: ${l}`);const t=()=>{var b;console.log("本地视频可以播放，readyState:",(b=x.value)==null?void 0:b.readyState),i.value.videoStatus="connected",i.value.videoError=null,i.value.currentTask=`${i.value.baseTaskName} - 本地视频播放中`,i.value.lastUpdate=new Date,x.value.play().then(()=>{console.log("本地视频播放成功"),Dt()}).catch(N=>{console.warn("播放失败，重试中:",N),setTimeout(()=>{var D;(D=x.value)==null||D.play().catch(O=>console.error("重试播放失败:",O))},500)})},o=()=>{x.value&&!x.value.loop&&(x.value.currentTime=0,x.value.play().catch(b=>console.warn("循环播放失败:",b)))},y=b=>{var N,D,O,Y,q,ge,Xe,z;console.error("本地视频加载失败:",b),console.error("视频元素状态:",{error:(N=x.value)==null?void 0:N.error,errorCode:(O=(D=x.value)==null?void 0:D.error)==null?void 0:O.code,errorMessage:(q=(Y=x.value)==null?void 0:Y.error)==null?void 0:q.message,src:(ge=x.value)==null?void 0:ge.src}),i.value.videoStatus="error",i.value.videoError="本地视频加载失败: "+(((z=(Xe=x.value)==null?void 0:Xe.error)==null?void 0:z.message)||"未知错误"),i.value.currentTask=`${i.value.baseTaskName} - 无视频模式，开始移动`,i.value.lastUpdate=new Date,Dt()};await xe(),x.value&&(x.value.muted=!0,x.value.autoplay=!0,x.value.loop=!0,x.value.playsInline=!0,x.value.preload="auto",x.value.src=l,i.value.videoUrl=l,bt={canplay:t,ended:o,error:y},Object.entries(bt).forEach(([b,N])=>{x.value.addEventListener(b,N,b==="canplay"?{once:!0}:!1)}),x.value.load(),lt=setInterval(()=>{x.value&&w.value?x.value.paused&&!x.value.ended&&x.value.readyState>=2&&x.value.play().catch(b=>console.warn("自动恢复播放失败:",b)):lt&&(clearInterval(lt),lt=null)},1e3))}catch(l){console.error("切换本地视频失败:",l),i.value.videoStatus="error",i.value.videoError="本地视频加载失败",i.value.currentTask=`${i.value.baseTaskName} - 无视频模式，开始移动`,i.value.lastUpdate=new Date,Dt()}},Xs=()=>{let l=0;const t=5;let o=!1;const y=()=>{if(!o)if(i.value.videoStatus==="connected")i.value.currentTask=`${i.value.baseTaskName} - 视频已连接，开始移动`,i.value.lastUpdate=new Date,Dt();else if(i.value.videoStatus==="error")i.value.currentTask=`${i.value.baseTaskName} - 视频连接失败`,i.value.lastUpdate=new Date,console.warn("视频连接失败"),confirm(`视频连接失败，是否继续巡检？

点击"确定"继续巡检（无视频）
点击"取消"停止巡检`)?(i.value.currentTask=`${i.value.baseTaskName} - 无视频模式，开始移动`,i.value.lastUpdate=new Date,Dt()):(i.value.status="charging",i.value.currentTask="待机中",i.value.lastUpdate=new Date);else if(l>=t){if(o=!0,console.warn("视频连接超时（30秒），切换为本地视频"),i.value.currentTask=`${i.value.baseTaskName} - 播放本地视频`,i.value.lastUpdate=new Date,X){try{X.stopLoad&&typeof X.stopLoad=="function"&&X.stopLoad(),X.destroy()}catch(b){console.warn("清理HLS实例失败:",b)}X=null}x.value?Js():(i.value.currentTask=`${i.value.baseTaskName} - 无视频模式，开始移动`,i.value.lastUpdate=new Date,Dt())}else l++,i.value.currentTask=`${i.value.baseTaskName} - 等待视频连接中`,i.value.lastUpdate=new Date,setTimeout(y,1e3)};y()},Kl=()=>{i.value.status="charging",i.value.currentTask="待机中",i.value.lastUpdate=new Date,ol(),w.value&&hl()},Dt=()=>{Et||(Ql(),Qs().then(l=>{if(l.length===0){console.warn("没有找到巡检路径");return}if(Ve=l,Se=0,Le=!0,T.value&&T.value.addRobotMarker&&l.length>0){const t=l[0];T.value.addRobotMarker({longitude:t.longitude,latitude:t.latitude}),i.value.position={longitude:t.longitude,latitude:t.latitude}}Et=setInterval(()=>{if(!Le||Se>=Ve.length){ol(),i.value.status="idle",i.value.currentTask=`${i.value.baseTaskName} - 巡检完成`,i.value.lastUpdate=new Date,w.value&&hl();return}const t=Ve[Se];i.value.position={longitude:t.longitude,latitude:t.latitude},i.value.lastUpdate=new Date;const o=Ve[Se];o.pipelineIndex!==void 0?o.pipelineIndex+1:Se+1;const y=o.description||`第${Se+1}个检查点`;if(i.value.currentTask=`${i.value.baseTaskName} - 巡检中 - ${y}`,T.value&&T.value.updateRobotPosition){const b=(o==null?void 0:o.routeId)||null;T.value.updateRobotPosition(i.value.position,b)}Math.random()<.05&&(i.value.battery=Math.max(0,i.value.battery-1)),Se++},3e3)}))},Qs=async()=>{try{if(T.value&&T.value.getHighlightedRoutes){const l=T.value.getHighlightedRoutes();return l.length>0?Zs(l):(console.warn("没有找到高亮的路线，使用模拟路径"),gl())}else return console.warn("地图组件未就绪，使用模拟路径"),gl()}catch(l){return console.error("获取巡检路径失败:",l),gl()}},Zs=l=>{const t=[];try{return l.forEach((o,y)=>{o.positions&&Array.isArray(o.positions)&&o.positions.length>0&&o.positions.forEach((b,N)=>{var q;const D=Cesium.Cartographic.fromCartesian(b),O=Cesium.Math.toDegrees(D.longitude),Y=Cesium.Math.toDegrees(D.latitude);t.push({longitude:O,latitude:Y,routeIndex:y,pointIndex:N,routeId:o.id,routeName:((q=o.props)==null?void 0:q.Layer)||`路线${y+1}`})})}),t}catch(o){return console.error("从高亮路线生成巡检路径失败:",o),gl()}},gl=()=>{const o=[];for(let N=0;N<12;N++){const D=N/12*Math.PI*2,O=110.45+Math.cos(D)*.01,Y=29.5665+Math.sin(D)*.01;o.push({longitude:O,latitude:Y,type:"检查点",pipelineId:`mock_${N}`})}return o},ol=()=>{Et&&(clearInterval(Et),Et=null),Le=!1,Ve=[],Se=0},nl=l=>{const t=new Date,o=new Date;switch(l){case"1h":o.setHours(t.getHours()-1);break;case"6h":o.setHours(t.getHours()-6);break;case"1d":o.setDate(t.getDate()-1);break;case"7d":o.setDate(t.getDate()-7);break;case"30d":o.setDate(t.getDate()-30);break;default:o.setDate(t.getDate()-7)}me.value.startTime=o.toLocaleString("sv-SE").replace(" ","T"),me.value.endTime=t.toLocaleString("sv-SE").replace(" ","T"),bl()},es=async l=>{if(!l||!l.id){message.error("设备信息不完整，无法查看历史记录");return}Re.value=l;const t=Math.min(window.innerWidth*.85,1e3),o=window.innerHeight*.8;if(We.value={x:(window.innerWidth-t)/2,y:(window.innerHeight-o)/2},vt.value=!0,me.value={},await xe(),setTimeout(()=>{const N=document.querySelector(".device-history-modal .modal-content");if(N){const D=N.getBoundingClientRect();We.value={x:(window.innerWidth-D.width)/2,y:(window.innerHeight-D.height)/2}}},50),await Cs(l.id),Array.isArray(it.value)&&it.value.length>0)ze.value=it.value.map(N=>({key:N.value,value:"",unit:""}));else{const N=Rs(l.keyParameter);ze.value=N.filter(D=>D.key&&D.value)}ze.value.length>0&&(Ze.value=ze.value[0].key);const y=new Date,b=new Date;b.setHours(y.getHours()-3),me.value.startTime=b.toLocaleString("sv-SE").replace(" ","T"),me.value.endTime=y.toLocaleString("sv-SE").replace(" ","T"),me.value.dataType=Ze.value,xe(()=>{bl()})},ts=()=>{vt.value=!1,Ge.value=!1,Ot.value=!1,Re.value=null,ze.value=[],Ze.value="",Object.values(nt.value).forEach(l=>{l&&l.dispose&&l.dispose()}),nt.value={}},Ks=l=>{Ge.value=!0,It.value={x:l.clientX-We.value.x,y:l.clientY-We.value.y},document.addEventListener("mousemove",ls),document.addEventListener("mouseup",ss),l.preventDefault()},ls=l=>{if(!Ge.value)return;const t=l.clientX-It.value.x,o=l.clientY-It.value.y,y=document.querySelector(".device-history-modal .modal-content");if(y){const b=y.getBoundingClientRect(),N=window.innerWidth-b.width,D=window.innerHeight-b.height;We.value={x:Math.max(0,Math.min(t,N)),y:Math.max(0,Math.min(o,D))}}else We.value={x:Math.max(0,t),y:Math.max(0,o)}},ss=()=>{Ge.value=!1,document.removeEventListener("mousemove",ls),document.removeEventListener("mouseup",ss)},as=l=>l?st(l).format("YYYY-MM-DD HH:mm:ss"):null,ea=l=>{Ze.value=l,xe(()=>{Pl(l,Lt.value,!0)})},bl=async()=>{if(!Re.value)return;Rt.value=!0,Ot.value=!1;const l={deviceId:Re.value.id,size:2e3};me.value.startTime&&me.value.endTime&&(l.startTime=as(me.value.startTime),l.endTime=as(me.value.endTime));try{const t=await us.deviceHistoryData(l),o=(t==null?void 0:t.records)||(Array.isArray(t)?t:[]);Ot.value=!!(t!=null&&t.sampled),o&&o.length>0?(Lt.value=o,At(),await xe(),Pl(Ze.value,Lt.value,!0)):(Lt.value=[],At(),await xe(),Pl(Ze.value,[],!0))}catch(t){console.error("加载趋势图数据失败:",t),ze.value.forEach(o=>{const y=document.getElementById(`chart-${o.key}`);y&&(y.innerHTML=`
						<div style="padding: 40px; text-align: center; color: #ef4444;">
							<h4>${gt(o.key)} 趋势图</h4>
							<p>数据加载失败</p>
							<p style="font-size: 12px; margin-top: 8px;">请检查网络连接或稍后重试</p>
						</div>
					`)})}finally{Rt.value=!1}},Pl=(l,t=null,o=!1)=>{var Xe;if(!t){bl();return}o&&nt.value[l]&&(nt.value[l].dispose(),delete nt.value[l]);const y=t.filter(z=>z.dataType===l);if(y.length===0){const z=document.getElementById(`chart-${l}`);z&&(z.innerHTML=`
					<div style="padding: 40px; text-align: center; color: #94a3b8;">
						<h4>${gt(l)} 趋势图</h4>
						<p>暂无数据</p>
						<p style="font-size: 12px; margin-top: 8px;">请检查时间范围或设备是否正常工作</p>
					</div>
				`);return}y.sort((z,h)=>new Date(z.collectionTime)-new Date(h.collectionTime));const b=y.map(z=>{const h=parseFloat(z.dataValue);return{time:z.collectionTime,value:isNaN(h)?0:h,originalValue:z.dataValue}}).filter(z=>z.value!==null&&z.value!==void 0),N=b.map(z=>z.value),D=Math.min(...N),O=Math.max(...N),Y=N.reduce((z,h)=>z+h,0)/N.length,q=((Xe=y[0])==null?void 0:Xe.dataUnit)||"",ge=document.getElementById(`chart-${l}`);if(ge){ge.innerHTML="";const z=wl(ge),h=b.map(Be=>st(Be.time).format("MM-DD HH:mm")),Xt=b.map(Be=>Be.value),na={title:{text:`${gt(l)} 趋势图`,subtext:`数据点数: ${b.length} | 最小值: ${D.toFixed(2)}${q?" "+q:""} | 最大值: ${O.toFixed(2)}${q?" "+q:""} | 平均值: ${Y.toFixed(2)}${q?" "+q:""}`,left:"center",textStyle:{fontSize:16,fontWeight:"bold",color:"#ffffff"},subtextStyle:{fontSize:12,color:"#94a3b8"}},tooltip:{trigger:"axis",backgroundColor:"rgba(15, 23, 42, 0.95)",borderColor:"rgba(255, 255, 255, 0.1)",textStyle:{color:"#e2e8f0"},formatter:function(Be){const rt=Be[0],Al=b[rt.dataIndex].time,$l=b[rt.dataIndex].originalValue;return`
							<div style="padding: 8px;">
								<p style="margin: 0 0 4px 0;"><strong>时间:</strong> ${st(Al).format("YYYY-MM-DD HH:mm:ss")}</p>
								<p style="margin: 0 0 4px 0;"><strong>${gt(l)}:</strong> ${rt.value}${q?" "+q:""}</p>
								<p style="margin: 0; font-size: 11px; color: #94a3b8;">原始值: ${$l}</p>
							</div>
						`}},grid:{left:"10%",right:"10%",bottom:"35%",top:"20%"},xAxis:{type:"category",data:h,axisLabel:{interval:0,rotate:45,fontSize:12,color:"#94a3b8"},axisTick:{alignWithLabel:!0}},yAxis:{type:"value",name:q?`${gt(l)} (${q})`:gt(l),axisLabel:{fontSize:12,color:"#94a3b8"}},series:[{name:gt(l),type:"line",data:Xt,smooth:!0,symbol:"circle",symbolSize:6,lineStyle:{width:3,color:"#60a5fa"},itemStyle:{color:"#60a5fa"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(96, 165, 250, 0.3)"},{offset:1,color:"rgba(96, 165, 250, 0.1)"}]}}}],dataZoom:[{type:"inside",start:0,end:100},{type:"slider",start:0,end:100}]};z.setOption(na),window.addEventListener("resize",()=>{z.resize()});const os=Be=>{const rt=h.length,Al=Be.start||0,$l=Be.end||100,Qt=Math.floor(rt*($l-Al)/100);let Zt;Qt<=8?Zt=0:Qt<=15?Zt=1:Qt<=30?Zt=2:Qt<=50?Zt=Math.floor(Qt/10):Zt=Math.floor(Qt/15),z.setOption({xAxis:{axisLabel:{interval:Zt}}})};z.on("dataZoom",function(Be){const rt=Be.batch?Be.batch[0]:Be;(rt.xAxisIndex===0||rt.xAxisIndex===void 0)&&os(rt)}),os({start:0,end:100}),nt.value[l]=z,xe(()=>z.resize())}};ps(()=>{XpgCss(),Xstyle(),XinitR(),Xau(),ll(),tl=setInterval(ll,1e3),W.value=["layers"],be.value=["devices"],sl(),xe(()=>{dl()}),xe(()=>{Vt();try{const l=K.value;if(l&&l.addEventListener("scroll",()=>{l.scrollTop+l.clientHeight>=l.scrollHeight-10&&yl()}),window.IntersectionObserver&&typeof IntersectionObserver<"u"){const t=document.querySelector(".monitor-sentinel");t&&new IntersectionObserver(y=>{for(const b of y)b.isIntersecting&&yl()},{root:l,threshold:.1}).observe(t)}}catch{}Yt=()=>{Ue==null||Ue.resize(),ce==null||ce.resize()},window.addEventListener("resize",Yt)})}),Vl(()=>{Ut(),tl&&clearInterval(tl),Yt&&window.removeEventListener("resize",Yt),he&&he.dispose(),Object.values(nt.value).forEach(l=>{l&&l.dispose&&l.dispose()}),ol(),Gl()});const wt=p({keyword:""});p(Ae.dictList("INSPECTION_RESULT")||[]);const ta=Kt(()=>{const l=Ae.dictTypeList("INSPECTION_RESULT")||[],t=o=>(o||[]).map(y=>({title:y.name||y.dictLabel||y.dictValue,value:y.dictValue,key:y.dictValue,children:y.children?t(y.children):[]}));return t(l)}),la=Kt(()=>Nt.value||[]),sa=()=>{ue.value.current=1,ue.value.hasMore=!0,s(!1)},aa=()=>{!wt.value.keyword&&!wt.value.result&&(ue.value.current=1,ue.value.hasMore=!0,s(!1))},oa=p(null);return(l,t)=>{var Xe,z;const o=Qe("down-outlined"),y=Qe("up-outlined"),b=Qe("a-tree"),N=Qe("el-switch"),D=Qe("a-input"),O=Qe("a-tree-select"),Y=Qe("el-table-column"),q=Qe("el-table"),ge=Qe("a-select");return _(),S($e,null,[e("div",cn,[e("div",{class:j(["mask",Q.value?"collapMask":"allMask"])},null,2),e("div",un,[e("div",dn,[t[17]||(t[17]=fs('<div class="header-left" data-v-14ae79c9><div class="weather-info" data-v-14ae79c9><div class="weather-icon" data-v-14ae79c9>☀️</div><div class="weather-text" data-v-14ae79c9>晴朗 22°C</div></div></div><div class="title-section" data-v-14ae79c9><h1 class="main-title" data-v-14ae79c9>建科智慧管网一张图</h1><p class="subtitle" data-v-14ae79c9>Jianke Smart Pipeline Network Integrated Platform</p></div>',2)),e("div",vn,[e("div",pn,[e("div",fn,m(k.value),1),e("div",mn,m(L.value),1)]),e("div",{class:j(["connection-status",He.value])},[t[16]||(t[16]=e("div",{class:"status-dot"},null,-1)),e("span",yn,m(kl()),1)],2),e("button",{class:"biz-entry-btn",onClick:f},"业务系统")])])]),e("div",hn,[e("div",{class:j({"map-container":!0,"map-container-collapsed":Q.value})},[ae(rn,{ref_key:"cesiumRef",ref:T,defaultBasemap:"tdt_img",geojsonData:V.value,onDeviceClick:Ms,on3DModeChanged:As,onLayerControlVisible:$s,onPipelineClick:Ps},null,8,["geojsonData"]),oe.value?(_(),S("div",gn,[e("div",{class:"region-cascader","data-x":"xregion"},[e("div",{innerHTML:XrcH.value})]),e("div",bn,[t[18]||(t[18]=e("h4",{class:"tree-title"},"图层控制",-1)),e("div",null,[le(G)?(_(),ns(o,{key:0,onClick:t[0]||(t[0]=h=>is(G)?G.value=!le(G):G=!le(G))})):A("",!0),le(G)?A("",!0):(_(),ns(y,{key:1,onClick:t[1]||(t[1]=h=>is(G)?G.value=!le(G):G=!le(G))}))])]),le(G)?A("",!0):(_(),S("div",wn,[ae(b,{"tree-data":we.value,"default-expand-all":!1,"default-expanded-keys":Ne,checkable:"",blockNode:"","checked-keys":[...W.value,...be.value,...E.value,...Z.value],onSelect:ws,onCheck:_s,onExpand:Ss,class:"custom-tree"},{switcherIcon:Ct(({switcherCls:h})=>[ae(o,{class:j(h)},null,8,["class"])]),_:1},8,["tree-data","checked-keys"])]))])):A("",!0),ee.value&&Q.value&&R.value?(_(),S("div",_n,[e("div",Tn,[e("div",kn,[t[20]||(t[20]=e("div",{class:"title robot-title"},"巡检机器人",-1)),e("div",Sn,[e("div",{class:j(["robot-status",i.value.status])},[t[19]||(t[19]=e("span",{class:"status-dot"},null,-1)),il(" "+m(Fs(i.value.status)),1)],2),e("div",{class:"close",onClick:Sl})])]),e("div",Ln,[e("div",En,[e("div",xn,[t[21]||(t[21]=e("span",{class:"info-label"},"位置：",-1)),e("span",Nn,m(i.value.position.longitude.toFixed(6))+", "+m(i.value.position.latitude.toFixed(6)),1)]),e("div",Dn,[t[22]||(t[22]=e("span",{class:"info-label"},"更新时间：",-1)),e("span",Cn,m(Ys(i.value.lastUpdate)),1)]),e("div",In,[t[23]||(t[23]=e("span",{class:"info-label"},"当前电量：",-1)),e("span",Rn,[e("div",On,[e("div",{class:"battery-fill",style:kt({width:i.value.battery+"%"})},null,4)]),il(" "+m(i.value.battery)+"% ",1)])]),e("div",Mn,[t[25]||(t[25]=e("span",{class:"info-label"},"当前任务：",-1)),e("span",{class:"info-value task-selectable",onClick:dt},[il(m(i.value.currentTask)+" ",1),t[24]||(t[24]=e("span",{class:"task-select-icon"},"📋",-1))])]),i.value.currentRoute?(_(),S("div",Pn,[t[26]||(t[26]=e("span",{class:"info-label"},"巡检路线：",-1)),e("span",An,m(i.value.currentRoute),1)])):A("",!0),i.value.taskCycle?(_(),S("div",$n,[t[27]||(t[27]=e("span",{class:"info-label"},"任务周期：",-1)),e("span",Fn,m(l.$TOOL.dictTypeData("CYCLE_TYPE",i.value.taskCycle)),1)])):A("",!0),le(Ke)>=0?(_(),S("div",Yn,[t[28]||(t[28]=e("span",{class:"info-label"},"选中管线：",-1)),e("span",Wn,"管线"+m(le(Ke)+1),1)])):A("",!0),le(Le)?(_(),S("div",Hn,[t[29]||(t[29]=e("span",{class:"info-label"},"巡检进度：",-1)),e("span",Vn,[e("div",Un,[e("div",{class:"progress-fill",style:kt({width:Xl()+"%"})},null,4)]),il(" "+m(Xl())+"% ",1)])])):A("",!0),le(Le)?(_(),S("div",Bn,[t[30]||(t[30]=e("span",{class:"info-label"},"当前巡检：",-1)),e("span",qn,m(Ws()),1)])):A("",!0)]),e("div",jn,[e("div",Gn,[t[31]||(t[31]=e("div",null,[e("img",{src:va}),e("span",null,"轨迹显示")],-1)),ae(N,{modelValue:J.value,"onUpdate:modelValue":t[2]||(t[2]=h=>J.value=h),"inline-prompt":"","active-text":"ON","inactive-text":"OFF",onChange:Gs},null,8,["modelValue"])]),e("div",zn,[e("button",{class:j(["control-btn",{active:w.value}]),onClick:Us,disabled:!i.value.isOnline},[t[32]||(t[32]=e("img",{src:pa},null,-1)),e("span",null,m(w.value?"关闭实时视频监控":"开启实时视频监控"),1)],10,Jn)]),e("div",Xn,[e("button",{class:j(["control-btn start-btn",{patrolling:le(Le)}]),onClick:zs,disabled:!i.value.isOnline||le(Le)},[le(Le)?A("",!0):(_(),S("img",Zn)),e("span",null,m(le(Le)?"巡检中...":"开始巡检"),1)],10,Qn),e("button",{class:"control-btn stop-btn",onClick:Kl,disabled:!i.value.isOnline||!le(Le)},t[33]||(t[33]=[e("img",{src:ma},null,-1),e("span",null,"停止巡检",-1)]),8,Kn)]),e("div",{class:"control-row"},[e("button",{class:"control-btn clear-btn",onClick:Vs},t[34]||(t[34]=[e("img",{src:ya},null,-1),e("span",null,"清除选择",-1)]))])])])])])):A("",!0),w.value&&ee.value&&Q.value&&R.value?(_(),S("div",{key:2,class:j(["robot-video-window",{fullscreen:$.value}])},[e("div",ei,[t[36]||(t[36]=e("h5",null,"机器人实时视频",-1)),e("div",{class:j(["video-status",i.value.videoStatus])},[t[35]||(t[35]=e("span",{class:"status-dot"},null,-1)),e("span",ti,m(Bs(i.value.videoStatus)),1)],2),e("div",li,[e("button",{class:"fullscreen-btn",onClick:Zl,title:$.value?"退出放大":"放大查看"},[$.value?(_(),S("span",oi,"🔙")):(_(),S("span",ai,"🔍"))],8,si),e("button",{class:"close-btn",onClick:hl},"×")])]),e("div",ni,[e("video",{ref_key:"videoElement",ref:x,class:"robot-video",autoplay:"",muted:"",playsinline:""},"您的浏览器不支持视频播放",512),i.value.videoStatus==="connecting"?(_(),S("div",ii,t[37]||(t[37]=[e("div",{class:"loading-spinner"},null,-1),e("div",{class:"loading-text"},"正在连接视频流",-1)]))):A("",!0),i.value.videoStatus==="error"?(_(),S("div",ri,[t[38]||(t[38]=e("div",{class:"error-icon"},"⚠️",-1)),e("div",ci,m(i.value.videoError),1),e("div",{class:"error-actions"},[e("button",{class:"retry-btn",onClick:qs},"重试连接"),e("button",{class:"skip-btn",onClick:js},"跳过视频")])])):A("",!0),i.value.videoUrl?A("",!0):(_(),S("div",ui,t[39]||(t[39]=[e("div",{class:"placeholder-icon"},"📹",-1),e("div",{class:"placeholder-text"},'点击"开启视频"查看机器人实时画面',-1)])))])],2)):A("",!0),$.value?(_(),S("div",{key:3,class:"video-fullscreen-overlay",onClick:Zl})):A("",!0)],2),e("div",di,[e("div",vi,[e("div",{class:j(["function-button",{active:I.value==="pipeline"}]),onClick:Ll},[e("div",pi,[e("img",{src:I.value==="pipeline"?le(Oa):le(Ma),alt:"管线总览"},null,8,fi)])],2),e("div",{class:j(["function-button",{active:I.value==="monitoring"}]),onClick:Xj1},[e("div",pi,[e("img",{src:I.value==="monitoring"?Xm1:Xm2,alt:"系统监测"},null,8,fi)])],2),e("div",{class:j(["function-button",{active:I.value==="governance"}]),onClick:Xj2},[e("div",pi,[e("img",{src:I.value==="governance"?Xg1:Xg2,alt:"管网治理"},null,8,fi)])],2),e("div",{class:j(["function-button",{active:I.value==="maintenance"}]),onClick:El},[e("div",mi,[e("img",{src:I.value==="maintenance"?le(Pa):le(Aa),alt:"智慧运维"},null,8,yi)])],2)])]),I.value==="pipeline"?(_(),S($e,{key:0},[e("div",{class:j(["left-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"])},[e("div",hi,[e("div",gi,[t[40]||(t[40]=e("div",{class:"panel-header"},[e("h3",{class:"panel-title"},"项目简介")],-1)),e("div",bi,[ie.value.projectName||ie.value.projectIntroduction?(_(),S("div",wi,[e("div",_i,m(ie.value.projectName||"智慧管网项目"),1),e("div",Ti,m(ie.value.projectIntroduction||"暂无项目简介"),1)])):A("",!0)])]),e("div",ki,[t[45]||(t[45]=e("div",{class:"panel-header"},[e("h3",{class:"panel-title"},"管网概览")],-1)),e("div",Si,[e("div",Li,[e("div",Ei,[e("div",xi,m(Fe.value.totalLength),1),t[41]||(t[41]=e("div",{class:"stat-label"},"总长度 (km)",-1))]),e("div",Ni,[e("div",Di,m(Fe.value.pipeCount),1),t[42]||(t[42]=e("div",{class:"stat-label"},"管段数量",-1))]),e("div",Ci,[e("div",Ii,m(Fe.value.manholeCount),1),t[43]||(t[43]=e("div",{class:"stat-label"},"检查井",-1))]),e("div",Ri,[e("div",Oi,m(Fe.value.deviceCount),1),t[44]||(t[44]=e("div",{class:"stat-label"},"设备数量",-1))])])])]),e("div",Mi,[t[46]||(t[46]=e("div",{class:"panel-header"},[e("h3",{class:"panel-title"},"设备类型统计")],-1)),e("div",Pi,[e("div",{ref_key:"deviceChartEl",ref:yt,class:"chart-box"},null,512)])])])],2),e("div",{class:j(["right-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"])},[e("div",Ai,[e("div",$i,[t[47]||(t[47]=e("div",{class:"panel-header"},[e("h3",{class:"panel-title"},"管材统计")],-1)),e("div",Fi,[e("div",{ref_key:"quickMaterialChartEl",ref:Wt,class:"chart-box small"},null,512)])]),e("div",Yi,[t[48]||(t[48]=e("div",{class:"panel-header"},[e("h3",{class:"panel-title"},"管径统计")],-1)),e("div",Wi,[e("div",{ref_key:"diameterChartEl",ref:xt,class:"chart-box"},null,512)])]),e("div",{class:"xpg2",innerHTML:XpgH.value})])],2)],64)):I.value==="monitoring"?(_(),S($e,{key:2},[e("div",{class:j(["left-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"]),"data-x":"mon-l"},[e("div",Ai,[e("div",{class:"xinject xgrow",innerHTML:Xsb.value})])]),e("div",{class:j(["right-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"]),"data-x":"mon-r"},[e("div",Ai,[e("div",Hi,[e("div",Vi,[t[49]||(t[49]=e("h3",{class:"panel-title"},"实时监控",-1)),e("span",Ui,m(pe.value.length)+" 台设备",1)]),e("div",{class:"panel-content monitor-list",ref_key:"monitorListEl",ref:K},[e("div",Bi,[ae(D,{value:Dl.value.keyWord,"onUpdate:value":t[3]||(t[3]=h=>Dl.value.keyWord=h),allowClear:"",placeholder:"请输入关键词"},null,8,["value"])]),(_(!0),S($e,null,at(ot.value,h=>(_(),S("div",{class:j(["monitor-item",{clickable:!0}]),key:h.id,onClick:_t(Xt=>Os(h),["stop"])},[e("div",ji,[e("div",Gi,m(h.icon),1),e("div",zi,[e("div",Ji,m(h.name),1),e("div",Xi,m(h.value),1),e("div",Qi,m(h.location),1)])]),e("div",{class:j(["status",`status-${h.status=="0"?"online":"offline"}`])},[t[50]||(t[50]=e("div",{class:"status-dot"},null,-1)),e("span",Zi,m(h.statusText),1)],2)],8,qi))),128)),fe.value?(_(),S("div",Ki,"加载中...")):!je.value&&ot.value.length?(_(),S("div",er,"没有更多了")):A("",!0),e("div",tr,null,512)],512)]),e("div",{class:"xinject xgrow",innerHTML:Xsc.value})])])],64)):I.value==="governance"?(_(),S($e,{key:3},[e("div",{class:j(["left-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"]),"data-x":"gov-l"},[e("div",Ai,[e("div",{class:"xinject xgrow",innerHTML:Xsg.value})])]),e("div",{class:j(["right-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"]),"data-x":"gov-r"},[e("div",Ai,[e("div",{class:"xinject xgrow",innerHTML:Xsh.value})])])],64)):I.value==="maintenance"?(_(),S($e,{key:9},[e("div",{class:j(["left-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"]),"data-x":"ops-l"},[e("div",Ai,[e("div",{class:"xinject xgrow",innerHTML:Xsl.value})])]),e("div",{class:j(["right-panels",{collapsed:Q.value}]),onClick:_t(qt,["self"]),"data-x":"ops-r"},[e("div",Ai,[e("div",{class:"xinject xgrow",innerHTML:Xsr.value})])])],64)):A("",!0)]),H.value.visible?(_(),S("div",{key:0,class:"task-selection-modal",style:kt({left:H.value.position.x?H.value.position.x+"px":"50%",top:H.value.position.y?H.value.position.y+"px":"50%",transform:H.value.position.x||H.value.position.y?"none":"translate(-50%, -50%)"})},[e("div",Wr,[e("div",{class:"modal-header",onMousedown:Oe},[t[62]||(t[62]=e("h3",null,"选择巡检任务",-1)),e("button",{class:"close-btn",onClick:ve},"×")],32),e("div",Hr,[e("div",Vr,[(_(!0),S($e,null,at(zt.value,h=>(_(),S("div",{key:h.id,class:"task-item",onClick:Xt=>_e(h)},[e("div",Br,[e("div",qr,m(h.planName),1),e("div",jr,[e("span",{class:j(["task-status",h.statusText==="运行"?"running":"stopped"])},m(h.statusText),3),e("span",Gr,m(h.cycle),1)]),e("div",zr,m(h.inspectionRoute),1)])],8,Ur))),128))]),zt.value.length===0?(_(),S("div",Jr,t[63]||(t[63]=[e("p",null,"暂无可用任务",-1)]))):A("",!0)])])],4)):A("",!0),vt.value?(_(),S("div",{key:1,class:"device-history-modal",onClick:ts},[e("div",{class:j(["modal-content",{dragging:Ge.value}]),style:kt({left:`${We.value.x}px`,top:`${We.value.y}px`}),onClick:t[13]||(t[13]=_t(()=>{},["stop"]))},[e("div",{class:"modal-header",onMousedown:Ks},[e("h3",Xr,m(((Xe=Re.value)==null?void 0:Xe.deviceName)||((z=Re.value)==null?void 0:z.code)||"")+" - 历史数据",1),e("button",{class:"close-btn",onClick:ts},"×")],32),ze.value.length>0?(_(),S("div",Qr,[t[64]||(t[64]=e("h4",{class:"section-title"},"参数历史趋势",-1)),e("div",Zr,[e("div",Kr,[(_(!0),S($e,null,at(ze.value,h=>(_(),S("button",{key:h.key,class:j(["tab-button",{active:Ze.value===h.key}]),onClick:Xt=>ea(h.key)},m(gt(h.key)),11,ec))),128))]),e("div",tc,[(_(!0),S($e,null,at(ze.value,h=>Tt((_(),S("div",{key:h.key,class:"chart-container"},[e("div",{id:`chart-${h.key}`,class:"chart"},null,8,lc)])),[[da,Ze.value===h.key]])),128))])])])):A("",!0),e("div",sc,[e("div",ac,[e("div",oc,[t[65]||(t[65]=e("label",{class:"time-label"},"快速选择:",-1)),e("button",{class:"preset-btn",onClick:t[6]||(t[6]=h=>nl("1h"))},"最近1小时"),e("button",{class:"preset-btn",onClick:t[7]||(t[7]=h=>nl("6h"))},"最近6小时"),e("button",{class:"preset-btn",onClick:t[8]||(t[8]=h=>nl("1d"))},"最近1天"),e("button",{class:"preset-btn",onClick:t[9]||(t[9]=h=>nl("7d"))},"最近7天"),e("button",{class:"preset-btn",onClick:t[10]||(t[10]=h=>nl("30d"))},"最近30天")]),e("div",nc,[t[66]||(t[66]=e("label",{class:"time-label"},"自定义范围:",-1)),Tt(e("input",{type:"datetime-local","onUpdate:modelValue":t[11]||(t[11]=h=>me.value.startTime=h),class:"time-input"},null,512),[[Wl,me.value.startTime]]),t[67]||(t[67]=e("span",{class:"time-separator"},"至",-1)),Tt(e("input",{type:"datetime-local","onUpdate:modelValue":t[12]||(t[12]=h=>me.value.endTime=h),class:"time-input"},null,512),[[Wl,me.value.endTime]]),e("button",{class:"refresh-btn",onClick:bl,disabled:Rt.value},[Rt.value?(_(),S("span",rc,"加载中...")):(_(),S("span",cc,"刷新数据"))],8,ic)]),Ot.value?(_(),S("div",uc,"数据量较大，已按时间聚合展示趋势")):A("",!0)])])],6)])):A("",!0)]),al.value?(_(),S("div",{key:0,class:"modal-overlay",onClick:r},[e("div",{class:"modal-content record-detail-modal",onClick:t[14]||(t[14]=_t(()=>{},["stop"]))},[e("div",{class:"modal-header"},[t[68]||(t[68]=e("h3",{class:"modal-title"},"巡检记录详情",-1)),e("button",{class:"modal-close",onClick:r},"×")]),re.value?(_(),S("div",dc,[e("div",vc,[t[73]||(t[73]=e("h4",{class:"section-title"},"基本信息",-1)),e("div",pc,[e("div",fc,[t[69]||(t[69]=e("span",{class:"detail-label"},"记录编号：",-1)),e("span",mc,m(re.value.inspectionRecordNo),1)]),e("div",yc,[t[70]||(t[70]=e("span",{class:"detail-label"},"计划名称：",-1)),e("span",hc,m(re.value.planName),1)]),e("div",gc,[t[71]||(t[71]=e("span",{class:"detail-label"},"巡检结果：",-1)),e("span",{class:j(["detail-value","status-badge",re.value.result||(re.value.inspectionResult==="NORMAL"?"normal":"abnormal")])},m(re.value.resultText||(re.value.inspectionResult==="NORMAL"?"正常":"异常")),3)]),e("div",bc,[t[72]||(t[72]=e("span",{class:"detail-label"},"巡检时间：",-1)),e("span",wc,m(re.value.inspectionDate),1)])])]),e("div",_c,[t[77]||(t[77]=e("h4",{class:"section-title"},"巡检信息",-1)),e("div",Tc,[e("div",kc,[t[74]||(t[74]=e("span",{class:"detail-label"},"巡检路线：",-1)),e("span",Sc,m(re.value.pipelineNames||"--"),1)]),e("div",Lc,[t[75]||(t[75]=e("span",{class:"detail-label"},"执行人员：",-1)),e("span",Ec,m(re.value.createUserName||"--"),1)]),e("div",xc,[t[76]||(t[76]=e("span",{class:"detail-label"},"异常等级：",-1)),e("span",Nc,m(re.value.issueLevelText||re.value.issueLevel||"--"),1)])])]),re.value.inspectionResult==="EXCEPTION"?(_(),S("div",Dc,[t[80]||(t[80]=e("h4",{class:"section-title"},"异常信息",-1)),e("div",Cc,[e("div",Ic,[t[78]||(t[78]=e("span",{class:"detail-label"},"异常描述：",-1)),e("span",Rc,m(re.value.issueDesc||"--"),1)]),e("div",Oc,[t[79]||(t[79]=e("span",{class:"detail-label"},"异常出现位置：",-1)),e("span",Mc,m(re.value.location||"--"),1)])])])):A("",!0)])):A("",!0)])])):A("",!0),n.value?(_(),S("div",{key:1,class:"modal-overlay",onClick:zl},[e("div",{class:"modal-content record-detail-modal",onClick:t[15]||(t[15]=_t(()=>{},["stop"]))},[e("div",{class:"modal-header"},[t[81]||(t[81]=e("h3",{class:"modal-title"},"工单详情",-1)),e("button",{class:"modal-close",onClick:zl},"×")]),M.value?(_(),S("div",Pc,t[82]||(t[82]=[e("div",{class:"loading-more"},"加载中...",-1)]))):g.value?(_(),S("div",Ac,[e("div",$c,[t[90]||(t[90]=e("h4",{class:"section-title"},"基本信息",-1)),e("div",Fc,[e("div",Yc,[t[83]||(t[83]=e("span",{class:"detail-label"},"工单单号：",-1)),e("span",Wc,m(g.value.workOrderCode),1)]),e("div",Hc,[t[84]||(t[84]=e("span",{class:"detail-label"},"工单状态：",-1)),e("span",{class:j(["detail-value","status",g.value.status])},m(g.value.statusText),3)]),e("div",Vc,[t[85]||(t[85]=e("span",{class:"detail-label"},"工单标题：",-1)),e("span",Uc,m(g.value.description),1)]),e("div",Bc,[t[86]||(t[86]=e("span",{class:"detail-label"},"工单类型：",-1)),e("span",qc,m(g.value.workOrderTypeText),1)]),e("div",jc,[t[87]||(t[87]=e("span",{class:"detail-label"},"工单来源：",-1)),e("span",Gc,m(g.value.sourceText),1)]),e("div",zc,[t[88]||(t[88]=e("span",{class:"detail-label"},"优先级：",-1)),e("span",Jc,m(g.value.priorityText),1)]),e("div",Xc,[t[89]||(t[89]=e("span",{class:"detail-label"},"处理进度：",-1)),e("span",Qc,m(g.value.progress)+"%",1)])])]),e("div",Zc,[t[95]||(t[95]=e("h4",{class:"section-title"},"问题信息",-1)),e("div",Kc,[e("div",eu,[t[91]||(t[91]=e("span",{class:"detail-label"},"问题描述：",-1)),e("span",tu,m(g.value.issueDesc),1)]),e("div",lu,[t[92]||(t[92]=e("span",{class:"detail-label"},"问题位置：",-1)),e("span",su,m(g.value.location),1)]),e("div",au,[t[93]||(t[93]=e("span",{class:"detail-label"},"问题严重程度：",-1)),e("span",ou,m(g.value.issueLevelText),1)]),e("div",nu,[t[94]||(t[94]=e("span",{class:"detail-label"},"关联管线：",-1)),e("span",iu,m(g.value.pipelineNames||"--"),1)])])]),e("div",ru,[t[103]||(t[103]=e("h4",{class:"section-title"},"处理信息",-1)),e("div",cu,[e("div",uu,[t[96]||(t[96]=e("span",{class:"detail-label"},"任务处理人：",-1)),e("span",du,m(g.value.taskHandlersName),1)]),e("div",vu,[t[97]||(t[97]=e("span",{class:"detail-label"},"计划开始：",-1)),e("span",pu,m(g.value.plannedStartTimeText),1)]),e("div",fu,[t[98]||(t[98]=e("span",{class:"detail-label"},"计划完成：",-1)),e("span",mu,m(g.value.plannedEndTimeText),1)]),e("div",yu,[t[99]||(t[99]=e("span",{class:"detail-label"},"实际开始：",-1)),e("span",hu,m(g.value.actualStartTimeText),1)]),e("div",gu,[t[100]||(t[100]=e("span",{class:"detail-label"},"实际完成：",-1)),e("span",bu,m(g.value.actualEndTimeText),1)]),g.value.handleResult!=="--"?(_(),S("div",wu,[t[101]||(t[101]=e("span",{class:"detail-label"},"处理结果：",-1)),e("span",_u,m(g.value.handleResult),1)])):A("",!0),g.value.handleMeasure!=="--"?(_(),S("div",Tu,[t[102]||(t[102]=e("span",{class:"detail-label"},"处理措施：",-1)),e("span",ku,m(g.value.handleMeasure),1)])):A("",!0)])]),g.value.inspectionRecordNo?(_(),S("div",Su,[t[107]||(t[107]=e("h4",{class:"section-title"},"关联巡检",-1)),e("div",Lu,[e("div",Eu,[t[104]||(t[104]=e("span",{class:"detail-label"},"巡检编号：",-1)),e("span",xu,m(g.value.inspectionRecordNo),1)]),e("div",Nu,[t[105]||(t[105]=e("span",{class:"detail-label"},"巡检计划：",-1)),e("span",Du,m(g.value.planName||"--"),1)]),e("div",Cu,[t[106]||(t[106]=e("span",{class:"detail-label"},"巡检日期：",-1)),e("span",Iu,m(g.value.inspectionDateText),1)])])])):A("",!0),g.value.acceptanceTimeText!=="--"||g.value.acceptanceResultText!=="--"?(_(),S("div",Ru,[t[111]||(t[111]=e("h4",{class:"section-title"},"验收信息",-1)),e("div",Ou,[e("div",Mu,[t[108]||(t[108]=e("span",{class:"detail-label"},"验收时间：",-1)),e("span",Pu,m(g.value.acceptanceTimeText),1)]),e("div",Au,[t[109]||(t[109]=e("span",{class:"detail-label"},"验收结果：",-1)),e("span",$u,m(g.value.acceptanceResultText),1)]),g.value.acceptanceOpinion!=="--"?(_(),S("div",Fu,[t[110]||(t[110]=e("span",{class:"detail-label"},"验收意见：",-1)),e("span",Yu,m(g.value.acceptanceOpinion),1)])):A("",!0)])])):A("",!0)])):A("",!0)])])):A("",!0)],64)}}},od=Ul(Vu,[["__scopeId","data-v-14ae79c9"]]);export{od as default};
