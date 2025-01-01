"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{7624:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var r=t(5155),u=t(2115);let o=(0,u.createContext)(null);function l(){let e=(0,u.use)(o);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var i=t(8741),a=t.n(i);let c=(0,u.forwardRef)(function({bounds:e,boundsOptions:n,center:t,children:r,className:l,id:a,placeholder:c,style:f,whenReady:p,zoom:s,...d},m){let[v]=(0,u.useState)({className:l,id:a,style:f}),[g,b]=(0,u.useState)(null),y=(0,u.useRef)(void 0);(0,u.useImperativeHandle)(m,()=>g?.map??null,[g]);let x=(0,u.useCallback)(r=>{if(null!==r&&!y.current){let u=new i.Map(r,d);y.current=u,null!=t&&null!=s?u.setView(t,s):null!=e&&u.fitBounds(e,n),null!=p&&u.whenReady(p),b(Object.freeze({__version:1,map:u}))}},[]);(0,u.useEffect)(()=>()=>{g?.map.remove()},[g]);let h=g?u.createElement(o,{value:g},r):c??null;return u.createElement("div",{...v,ref:x},h)});var f=t(7650);function p(e,n){let t=(0,u.useRef)(n);(0,u.useEffect)(function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}function s(e,n){let t=(0,u.useRef)(void 0);(0,u.useEffect)(function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}},[e,n])}function d(e,n){let t=e.pane??n.pane;return t?{...e,pane:t}:e}function m(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function v(e,n){return null==n?function(n,t){let r=(0,u.useRef)(void 0);return r.current||(r.current=e(n,t)),r}:function(t,r){let o=(0,u.useRef)(void 0);o.current||(o.current=e(t,r));let l=(0,u.useRef)(t),{instance:i}=o.current;return(0,u.useEffect)(function(){l.current!==t&&(n(i,t,l.current),l.current=t)},[i,t,n]),o}}function g(e){return function(n){var t;let r=l(),o=e(d(n,r),r);return p(r.map,n.attribution),s(o.current,n.eventHandlers),t=o.current,(0,u.useEffect)(function(){return(r.layerContainer??r.map).addLayer(t.instance),function(){r.layerContainer?.removeLayer(t.instance),r.map.removeLayer(t.instance)}},[r,t]),o}}let b=function(e,n){var t;return t=g(v(e,n)),(0,u.forwardRef)(function(e,n){let{instance:r}=t(e).current;return(0,u.useImperativeHandle)(n,()=>r),null})}(function({url:e,...n},t){return m(new i.TileLayer(e,d(n,t)),t)},function(e,n,t){!function(e,n,t){let{opacity:r,zIndex:u}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=u&&u!==t.zIndex&&e.setZIndex(u)}(e,n,t);let{url:r}=n;null!=r&&r!==t.url&&e.setUrl(r)}),y=function(e,n){var t;return t=g(v(e,n)),(0,u.forwardRef)(function(e,n){let{instance:r,context:l}=t(e).current;(0,u.useImperativeHandle)(n,()=>r);let{children:i}=e;return null==i?null:u.createElement(o,{value:l},i)})}(function({position:e,...n},t){var r;let u=new i.Marker(e,n);return m(u,(r={overlayContainer:u},Object.freeze({...t,...r})))},function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())}),x=function(e,n){var t,r;return t=v(e),r=function(e,r){let u=l(),o=t(d(e,u),u);return p(u.map,e.attribution),s(o.current,e.eventHandlers),n(o.current,u,e,r),o},(0,u.forwardRef)(function(e,n){let[t,o]=(0,u.useState)(!1),{instance:l}=r(e,o).current;(0,u.useImperativeHandle)(n,()=>l),(0,u.useEffect)(function(){t&&l.update()},[l,t,e.children]);let i=l._contentNode;return i?(0,f.createPortal)(e.children,i):null})}(function(e,n){return m(new i.Popup(e,n.overlayContainer),n)},function(e,n,{position:t},r){(0,u.useEffect)(function(){let{instance:u}=e;function o(e){e.popup===u&&(u.update(),r(!0))}function l(e){e.popup===u&&r(!1)}return n.map.on({popupopen:o,popupclose:l}),null==n.overlayContainer?(null!=t&&u.setLatLng(t),u.openOn(n.map)):n.overlayContainer.bindPopup(u),function(){n.map.off({popupopen:o,popupclose:l}),n.overlayContainer?.unbindPopup(),n.map.removeLayer(u)}},[e,n,r,t])});function h(){let e=l().map;return(0,r.jsx)("button",{onClick:function(){e.flyTo([32.2226,-110.9747],13,{animate:!0,duration:2})},style:{position:"absolute",top:"10px",right:"10px",zIndex:1e3,padding:"8px 12px",background:"#fff",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},children:"Fly to Tucson"})}function C(){return(0,r.jsxs)(c,{center:[51.505,-.09],zoom:13,style:{height:"100vh",width:"100%",position:"relative"},children:[(0,r.jsx)(b,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 OpenStreetMap contributors"}),(0,r.jsx)(y,{position:[51.505,-.09],children:(0,r.jsx)(x,{children:"Hello from Leaflet!"})}),(0,r.jsx)(h,{})]})}delete a().Icon.Default.prototype._getIconUrl,a().Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"})}}]);