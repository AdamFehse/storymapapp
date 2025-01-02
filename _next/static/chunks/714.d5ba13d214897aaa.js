"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{714:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var s=r(5155),n=r(833),o=r(3314),a=r(3710),i=r(933),c=r(2115),l=r(6521),d=r(8143);function p(e){let{onSelectCategory:t}=e;return(0,s.jsxs)(d.A,{id:"dropdown-basic-button",title:"Select Category",onSelect:t,children:[(0,s.jsx)(l.A.Item,{eventKey:"All",onClick:()=>t(""),children:"All Projects"}),(0,s.jsx)(l.A.Item,{eventKey:"Art-Based Projects",onClick:()=>t("Art-Based Projects"),children:"Art-Based Projects"}),(0,s.jsx)(l.A.Item,{eventKey:"Research Projects",onClick:()=>t("Research Projects"),children:"Research Projects"}),(0,s.jsx)(l.A.Item,{eventKey:"Education and Community Outreach",onClick:()=>t("Education and Community Outreach"),children:"Education and Community Outreach"})]})}function h(e){let{projects:t,onFlyTo:r}=e,n=t.filter(e=>e["Project Name"]&&!isNaN(parseFloat(e.Latitude))&&!isNaN(parseFloat(e.Longitude)));return 0===n.length?(0,s.jsx)("p",{children:"No projects found for the selected category."}):(0,s.jsx)("ul",{children:n.map((e,t)=>(0,s.jsxs)("li",{onClick:()=>r(parseFloat(e.Latitude),parseFloat(e.Longitude),t),style:{cursor:"pointer",marginBottom:"10px",padding:"5px",border:"1px solid #ddd",borderRadius:"5px"},children:[(0,s.jsx)("strong",{children:e["Project Name"]}),(0,s.jsx)("p",{children:e.DescriptionShort})]},"".concat(e["Project Name"],"-").concat(t)))})}var u=r(2963);function m(){let[e,t]=(0,c.useState)(!1);return(0,s.jsx)(u.A,{onClick:()=>{let r=!e;t(r);let s=document.body;r?s.classList.add("dark-mode"):s.classList.remove("dark-mode")},className:"moon-button",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"50px",position:"relative",overflow:"hidden"},children:e?(0,s.jsx)("span",{className:"moon-icon",children:"\uD83C\uDF19"}):(0,s.jsx)("span",{className:"sun-icon",children:"☀️"})})}var j=r(3187),x=r(6756);function f(e){let{setMapProjects:t,markerRefs:r}=e,[n,o]=(0,c.useState)(!1),{projects:a,filteredProjects:i,filterProjects:l}=function(){let[e,t]=(0,c.useState)([]),[r,s]=(0,c.useState)([]);return(0,c.useEffect)(()=>{fetch("https://adamfehse.github.io/storymapapp/storymapdata.json").then(e=>e.json()).then(e=>{t(e),s(e)}).catch(e=>console.error("Error fetching data:",e))},[]),{projects:e,filteredProjects:r,filterProjects:t=>{""===t?s(e):s(e.filter(e=>e["Project Category"]===t))}}}(),d=(0,x.ko)(),f=(e,t,s)=>{if(!d)return;d.flyTo([parseFloat(e),parseFloat(t)],13,{animate:!0,duration:2});let n=r.current[s];n&&n.openPopup()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{position:"absolute",top:"1rem",right:"1rem",display:"flex",alignItems:"center",gap:"0.5rem",zIndex:999},children:[(0,s.jsx)(u.A,{variant:"primary",onClick:()=>o(!0),children:"Open Sidebar"}),(0,s.jsx)(m,{})]}),(0,s.jsxs)(j.A,{show:n,onHide:()=>o(!1),placement:"end",children:[(0,s.jsx)(j.A.Header,{closeButton:!0,children:(0,s.jsx)(j.A.Title,{children:"Sidebar"})}),(0,s.jsxs)(j.A.Body,{children:[(0,s.jsx)(p,{onSelectCategory:e=>{"All"===e?(t(a),l("")):(t(a.filter(t=>t["Project Category"]===e)),l(e))}}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("h5",{children:"Projects:"}),(0,s.jsx)(h,{projects:i,onFlyTo:(e,t,r)=>f(e,t,r)})]})]})]})]})}var g=r(8741),y=r.n(g);function k(){let[e,t]=(0,c.useState)([]),r=(0,c.useRef)([]);(0,c.useEffect)(()=>{fetch("https://adamfehse.github.io/storymapapp/storymapdata.json").then(e=>e.json()).then(e=>t(e)).catch(e=>console.error("Error fetching data:",e))},[]);let l=(e,t)=>!isNaN(e)&&!isNaN(t)&&e>=-90&&e<=90&&t>=-180&&t<=180;return(0,s.jsxs)(n.W,{center:[31.916004,-110.990274],zoom:9,style:{height:"100vh",width:"100%"},children:[(0,s.jsx)(o.e,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 OpenStreetMap contributors"}),(0,s.jsx)(f,{setMapProjects:t,markerRefs:r}),e.filter(e=>l(parseFloat(e.Latitude),parseFloat(e.Longitude))).map((e,t)=>(0,s.jsx)(a.p,{position:[parseFloat(e.Latitude),parseFloat(e.Longitude)],ref:e=>r.current[t]=e,children:(0,s.jsxs)(i.z,{children:[(0,s.jsx)("strong",{children:e["Project Name"]}),(0,s.jsx)("p",{children:e.DescriptionShort})]})},"".concat(e["Project Name"],"-").concat(t)))]})}delete y().Icon.Default.prototype._getIconUrl,y().Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"})}}]);