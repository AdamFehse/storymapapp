"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{3761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(5155),o=r(833),s=r(5402),i=r(3710),c=r(3314),a=r(8741),l=r.n(a),d=r(2115),h=r(6521),p=r(8143);function u(e){let{onSelectCategory:t}=e;return(0,n.jsxs)(p.A,{id:"dropdown-basic-button",title:"Select Category",onSelect:t,children:[(0,n.jsx)(h.A.Item,{eventKey:"Art-Based Projects",onClick:()=>t("Art-Based Projects"),children:"Art-Based Projects"}),(0,n.jsx)(h.A.Item,{eventKey:"Research Projects",onClick:()=>t("Research Projects"),children:"Research Projects"}),(0,n.jsx)(h.A.Item,{eventKey:"Education and Community Outreach",onClick:()=>t("Education and Community Outreach"),children:"Education and Community Outreach"})]})}function j(e){let{projects:t,onFlyTo:r}=e;return 0===t.length?(0,n.jsx)("p",{children:"No projects found for the selected category."}):(0,n.jsx)("ul",{children:t.map((e,t)=>(0,n.jsxs)("li",{onClick:()=>r(e.Latitude,e.Longitude),style:{cursor:"pointer",marginBottom:"10px",padding:"5px",border:"1px solid #ddd",borderRadius:"5px"},children:[(0,n.jsx)("strong",{children:e["Project Name"]}),(0,n.jsx)("p",{children:e.DescriptionShort})]},t))})}var m=r(2963),x=r(3187),g=r(6756);function f(){let[e,t]=(0,d.useState)(!1),{filteredProjects:r,filterProjects:o}=function(){let[e,t]=(0,d.useState)([]),[r,n]=(0,d.useState)([]);return(0,d.useEffect)(()=>{fetch("https://adamfehse.github.io/storymapapp/storymapdata.json").then(e=>e.json()).then(e=>{t(e)}).catch(e=>console.error("Error fetching data:",e))},[]),{projects:e,filteredProjects:r,filterProjects:t=>{n(e.filter(e=>e["Project Category"]===t))}}}(),s=(0,g.ko)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.A,{variant:"primary",onClick:()=>t(!0),style:{position:"absolute",top:"1rem",right:"1rem",zIndex:999},children:"Open Sidebar"}),(0,n.jsxs)(x.A,{show:e,onHide:()=>t(!1),placement:"end",children:[(0,n.jsx)(x.A.Header,{closeButton:!0,children:(0,n.jsx)(x.A.Title,{children:"Sidebar"})}),(0,n.jsxs)(x.A.Body,{children:[(0,n.jsx)(u,{onSelectCategory:o}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("h5",{children:"Projects:"}),(0,n.jsx)(j,{projects:r,onFlyTo:(e,t)=>{s&&s.flyTo([parseFloat(e),parseFloat(t)],13,{animate:!0,duration:2})}})]})]})]})]})}function y(){return(0,n.jsxs)(o.W,{center:[31.820797,-110.95],zoom:9,style:{height:"100vh",width:"100%",position:"relative"},maxBounds:[[31.2,-112],[32.4,-109]],maxBoundsViscosity:1,children:[(0,n.jsx)(s.e,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 OpenStreetMap contributors"}),(0,n.jsx)(i.p,{position:[31.3256,-110.9412],children:(0,n.jsx)(c.z,{children:"Welcome to Nogales, MX!"})}),(0,n.jsx)(i.p,{position:[32.2226,-110.9747],children:(0,n.jsx)(c.z,{children:"Welcome to Tucson, AZ!"})}),(0,n.jsx)(i.p,{position:[31.9122,-111.8411],children:(0,n.jsx)(c.z,{children:"Welcome to Sells, AZ!"})}),(0,n.jsx)(f,{})]})}delete l().Icon.Default.prototype._getIconUrl,l().Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"})}}]);