this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-tag"]=function(e){function t(t){for(var c,a,i=t[0],s=t[1],l=t[2],b=0,d=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={16:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;return o.push([614,2,1,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},17:function(e,t){!function(){e.exports=this.wp.compose}()},19:function(e,t,n){"use strict";n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return O})),n.d(t,"h",(function(){return j}));var c=n(6),r=n.n(c),o=n(22),a=n(21),i=n.n(a),s=n(4),l=n(5);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.selected,n=void 0===t?[]:t,c=e.search,r=void 0===c?"":c,a=e.queryArgs,u=function(e){var t=e.selected,n=void 0===t?[]:t,c=e.search,r=void 0===c?"":c,a=e.queryArgs,i=void 0===a?[]:a,s={per_page:l.i?100:-1,catalog_visibility:"any",status:"publish",search:r,orderby:"title",order:"asc"},u=[Object(o.addQueryArgs)(l.e.products,b({},s,{},i))];return l.i&&n.length&&u.push(Object(o.addQueryArgs)(l.e.products,{catalog_visibility:"any",status:"publish",include:n})),u}({selected:n,search:r,queryArgs:void 0===a?[]:a});return Promise.all(u.map((function(e){return i()({path:e})}))).then((function(e){return Object(s.uniqBy)(Object(s.flatten)(e),"id").map((function(e){return b({},e,{parent:0})}))})).catch((function(e){throw e}))},g=function(e){return i()({path:"".concat(l.e.products,"/").concat(e)})},p=function(e){var t=e.selected,n=function(e){var t=e.selected,n=void 0===t?[]:t,c=e.search,r=[Object(o.addQueryArgs)("".concat(l.e.products,"/tags"),{per_page:l.j?100:-1,orderby:l.j?"count":"name",order:l.j?"desc":"asc",search:c})];return l.j&&n.length&&r.push(Object(o.addQueryArgs)("".concat(l.e.products,"/tags"),{include:n})),r}({selected:void 0===t?[]:t,search:e.search});return Promise.all(n.map((function(e){return i()({path:e})}))).then((function(e){return Object(s.uniqBy)(Object(s.flatten)(e),"id")}))},f=function(e){return i()({path:"".concat(l.e.categories,"/").concat(e)})},h=function(){return i()({path:Object(o.addQueryArgs)("".concat(l.e.products,"/categories"),{per_page:-1})})},m=function(e){return i()({path:Object(o.addQueryArgs)("".concat(l.e.products,"/").concat(e,"/variations"),{per_page:-1})})},O=function(){return i()({path:Object(o.addQueryArgs)("".concat(l.e.products,"/attributes"),{per_page:-1})})},j=function(e){return i()({path:Object(o.addQueryArgs)("".concat(l.e.products,"/attributes/").concat(e,"/terms"),{per_page:-1})})}},2:function(e,t){!function(){e.exports=this.wp.components}()},21:function(e,t){!function(){e.exports=this.wp.apiFetch}()},22:function(e,t){!function(){e.exports=this.wp.url}()},23:function(e,t){!function(){e.exports=this.React}()},24:function(e,t){!function(){e.exports=this.moment}()},25:function(e,t){!function(){e.exports=this.wp.editor}()},26:function(e,t){!function(){e.exports=this.wp.blocks}()},27:function(e,t,n){"use strict";var c=n(0),r=n(2),o=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 22.41"},Object(c.createElement)("g",null,Object(c.createElement)("g",null,Object(c.createElement)("path",{d:"M16.55 0H1.75C.56 0 0 .52 0 1.68v9.24c0 1.15.56 1.92 1.75 1.92H2V4.76a2.51 2.51 0 0 1 2.74-2.68H18v-.4A1.51 1.51 0 0 0 16.55 0z"}),Object(c.createElement)("path",{d:"M19.54 3.11H4.74C3.55 3.11 3 3.64 3 4.79V14c0 1.19.55 2 1.74 2H5V7.88A2.51 2.51 0 0 1 7.73 5.2H21v-.41a1.51 1.51 0 0 0-1.46-1.68z"}),Object(c.createElement)("path",{d:"M22.53 6.23H7.73C6.54 6.23 6 6.75 6 7.91v9.24c0 1.15.56 1.92 1.75 1.92h7a.59.59 0 0 1 .32.11l1.61 1.15 2.83 2a.31.31 0 0 0 .18.05.3.3 0 0 0 .31-.3v-2.73a.3.3 0 0 1 .28-.28h2.31A1.47 1.47 0 0 0 24 17.6V7.91a1.52 1.52 0 0 0-1.47-1.68z"}),Object(c.createElement)("path",{fill:"#ffffff",d:"M10.2 10.92l1.06-2.14 1.05 2.14 2.37.35-1.71 1.66.4 2.36-2.11-1.11-.17.09-.52.27-.51.26-.92.49.18-1.02.09-.57.1-.56.03-.21-1.71-1.66 2.37-.35zM21.46 14.25h-4.4a.69.69 0 0 1-.69-.69.68.68 0 0 1 .69-.68h4.4a.68.68 0 0 1 .69.68.69.69 0 0 1-.69.69zM21.46 11.19h-4.4a.69.69 0 1 1 0-1.37h4.4a.69.69 0 1 1 0 1.37z"}))))})},a=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fillRule:"nonzero",d:"M21.913 7.0946H2.0254c-1.1708 0-2.0984.9908-2.0205 2.16l.741 11.0724c.0714 1.0638.9552 1.8892 2.0206 1.8892h18.4054c1.0654 0 1.9492-.8254 2.0205-1.8892l.7411-11.0724c.0779-1.1692-.8497-2.16-2.0205-2.16zm-8.8006-4.6573h5.987c1.119 0 2.0255.9065 2.0255 2.0254v.934H2.8103V2.0255C2.8103.9064 3.7168 0 4.8357 0h6.2513c1.119 0 2.0254.9065 2.0254 2.0254v.4119zm-7.0589 11.619a.926.926 0 1 1 0-1.852h11.8297a.926.926 0 1 1 0 1.852H6.0535z"}))})},i=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M22 7.5H2c-1.2 0-2.1 1-2 2.2l.7 11.1c.1 1.1 1 1.9 2 1.9h18.5c1.1 0 2-.8 2-1.9L24 9.6c.1-1.1-.9-2.1-2-2.1zM13.1 2.8v-.4c0-1.1-.9-2-2-2H4.8c-1.1 0-2 .9-2 2v3.4h18.4v-1c0-1.1-.9-2-2-2h-6.1z"}),Object(c.createElement)("path",{fill:"#fff",d:"M14.4 18.7L12 17.4l-2.4 1.3.5-2.6-1.9-1.9 2.6-.4 1.2-2.4 1.2 2.4 2.6.4-1.9 1.9z"}))})},s=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"M21.5,0h-9.3L0.8,11.4c-1,1-1,2.6,0,3.6L9,23.2c1,1,2.6,1,3.6,0c0,0,0,0,0,0L24,11.9V2.5C24,1.1,22.9,0,21.5,0z"}),Object(c.createElement)("circle",{fill:"#fff",cx:"18.1",cy:"5.8",r:"2.5"}),Object(c.createElement)("path",{fill:"#fff",d:"M5.8,10.5C5.8,10,6,9.6,6.3,9.2s0.8-0.5,1.3-0.5c0.6,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3V11 c0,0.5-0.2,1-0.5,1.3s-0.8,0.5-1.3,0.5c-0.6,0-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3V10.5z M7,11c0,0.2,0.1,0.4,0.2,0.6 s0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2s0.2-0.3,0.2-0.6v-0.4c0-0.2-0.1-0.4-0.2-0.6S7.9,9.7,7.7,9.7c-0.2,0-0.4,0.1-0.5,0.2 S7,10.3,7,10.5V11z M8,16.8l-0.8-0.4l4.2-6.7l0.8,0.4L8,16.8z M9.9,15.3c0-0.5,0.2-1,0.5-1.3s0.8-0.5,1.3-0.5 c0.6,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3v0.4c0,0.5-0.2,0.9-0.5,1.3s-0.8,0.5-1.3,0.5c-0.6,0-1-0.2-1.4-0.5s-0.5-0.8-0.5-1.3V15.3z  M11,15.8c0,0.2,0.1,0.4,0.2,0.6s0.3,0.2,0.5,0.2c0.5,0,0.7-0.3,0.7-0.8v-0.4c0-0.2-0.1-0.4-0.2-0.6s-0.3-0.2-0.5-0.2 s-0.4,0.1-0.5,0.2S11,15.1,11,15.3V15.8z"}))})},l=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 23"},Object(c.createElement)("path",{d:"M13.0993 2.41207V2.01231C13.0993 0.912976 12.1999 0.0135193 11.1005 0.0135193H4.80435C3.70501 0.0135193 2.80556 0.912976 2.80556 2.01231V5.41026H21.1944V4.5108C21.1944 3.41147 20.295 2.51201 19.1957 2.51201H13.0993V2.41207Z"}),Object(c.createElement)("path",{d:"M8.60759 11.3092C7.50759 12.4092 7.50759 14.2092 8.60759 15.3092C9.70759 16.4092 11.5076 16.4092 12.6076 15.3092C13.7076 14.2092 13.7076 12.4092 12.6076 11.3092C11.5076 10.2092 9.70759 10.2092 8.60759 11.3092Z"}),Object(c.createElement)("path",{d:"M22.0076 7.10919H2.00759C0.80759 7.10919 -0.0924101 8.10919 0.00758988 9.30919L0.70759 20.4092C0.80759 21.5092 1.70759 22.3092 2.70759 22.3092H21.2076C22.3076 22.3092 23.2076 21.5092 23.2076 20.4092L24.0076 9.30919C24.1076 8.10919 23.1076 7.10919 22.0076 7.10919ZM16.5076 20.2092L13.4076 17.1092V16.5092L13.3076 16.4092C11.7076 17.8092 9.30759 17.7092 7.80759 16.2092C6.20759 14.6092 6.20759 12.0092 7.80759 10.4092C9.40759 8.80919 12.0076 8.80919 13.6076 10.4092C15.1076 11.9092 15.2076 14.3092 13.8076 15.9092L13.9076 16.0092H14.4076L17.5076 19.1092L16.5076 20.2092Z"}))})},u=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"M21.45,0H12.14L.75,11.4A2.55,2.55,0,0,0,.75,15L9,23.25a2.55,2.55,0,0,0,3.61,0L24,11.86V2.55A2.55,2.55,0,0,0,21.45,0Z"}),Object(c.createElement)("circle",{fill:"#fff",cx:"18.07",cy:"5.75",r:"2.47"}),Object(c.createElement)("path",{fill:"#fff",d:"M9.27,9.53c-.14-.53.19-.85.72-.72l3.17.82a1.83,1.83,0,0,1,1.21,1.21L15.19,14c.13.53-.19.86-.72.72l-3.17-.81a1.9,1.9,0,0,1-1.22-1.22Z"}),Object(c.createElement)("path",{fill:"#fff",d:"M14.14,15.71a.52.52,0,0,1,.26,1L12.09,19a1.94,1.94,0,0,1-1.68.46l-3.16-.81a.52.52,0,0,1-.26-1L9.3,15.36A1.93,1.93,0,0,1,11,14.9Z"}),Object(c.createElement)("path",{fill:"#fff",d:"M8.29,9.86a.52.52,0,0,0-1-.26L5,11.91a1.94,1.94,0,0,0-.46,1.68l.81,3.16a.52.52,0,0,0,1,.26L8.64,14.7A1.93,1.93,0,0,0,9.1,13Z"}))})},b=function(){return Object(c.createElement)(r.Icon,{className:"material-icon",icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(c.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}))})},d=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"#1E8CBE",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},g=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"#6C7781",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},p=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"M2.3,17.3h9.3c0.1,0,0.3,0,0.4,0.1l5.9,4.2c0.3,0.2,0.7,0,0.7-0.3v-3.7c0-0.2,0.2-0.4,0.4-0.4H22 c1.1,0,2-0.9,2-2V2.5c0-1.2-0.7-2.2-2-2.2H2.3C0.7,0.2,0,0.9,0,2.5v12.3C0,16.3,0.7,17.3,2.3,17.3z"}),Object(c.createElement)("polygon",{fill:"#ffffff",points:"8.8,12.1 6.5,10.9 4.1,12.1 4.5,9.5 2.6,7.6 5.3,7.2 6.5,4.8 7.6,7.2 10.3,7.6 8.4,9.5"}),Object(c.createElement)("path",{fill:"#ffffff",d:"M20.7,7.9h-7c-0.5,0-0.9-0.4-0.9-0.9S13.2,6,13.7,6h7c0.5,0,0.9,0.4,0.9,0.9S21.2,7.9,20.7,7.9z"}),Object(c.createElement)("path",{fill:"#ffffff",d:"M20.7,11.5h-7c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h7c0.5,0,0.9,0.4,0.9,0.9S21.2,11.5,20.7,11.5z"}))})},f=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 23"},Object(c.createElement)("path",{d:"M21.9943 7.0957H2.00638C0.807102 7.0957 -0.0923543 8.0951 0.0075853 9.29437L0.707162 20.3877C0.807102 21.487 1.70656 22.2865 2.70595 22.2865H21.1948C22.2941 22.2865 23.1936 21.487 23.1936 20.3877L23.9931 9.29437C24.093 8.0951 23.0936 7.0957 21.9943 7.0957Z"}),Object(c.createElement)("path",{d:"M13.0921 2.39855V1.99879C13.0921 0.899456 12.1926 0 11.0933 0H4.7971C3.69777 0 2.79831 0.899456 2.79831 1.99879V5.39674H21.1872V4.49728C21.1872 3.39795 20.2877 2.49849 19.1884 2.49849H13.0921V2.39855Z"}),Object(c.createElement)("path",{fill:"white",d:"M8.63115 17.126L6.5415 15.9449L4.361 17.126L4.72442 14.6729L2.99819 13.0376L5.45125 12.6742L6.5415 10.4937L7.5409 12.6742L9.99396 13.0376L8.26773 14.6729L8.63115 17.126Z"}),Object(c.createElement)("path",{fill:"white",d:"M19.1907 13.5918H12.9899C12.547 13.5918 12.1926 13.1921 12.1926 12.6924C12.1926 12.1927 12.547 11.7929 12.9899 11.7929H19.1907C19.6336 11.7929 19.9879 12.1927 19.9879 12.6924C19.9879 13.1921 19.6336 13.5918 19.1907 13.5918Z"}),Object(c.createElement)("path",{fill:"white",d:"M19.1907 17.1897H12.9899C12.547 17.1897 12.1926 16.7899 12.1926 16.2902C12.1926 15.7905 12.547 15.3907 12.9899 15.3907H19.1907C19.6336 15.3907 19.9879 15.7905 19.9879 16.2902C19.9879 16.7899 19.6336 17.1897 19.1907 17.1897Z"}))})},h=function(){return Object(c.createElement)(r.Icon,{className:"material-icon",icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),Object(c.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}))})},m=n(10),O=n.n(m),j=(n(3),function(e){var t=e.size,n=void 0===t?20:t,o=e.className;return Object(c.createElement)(r.Icon,{className:O()("woo-icon",o),icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:n,width:Math.floor(1.67*n),viewBox:"0 0 245 145"},Object(c.createElement)("path",{fill:"#96588A",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),Object(c.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))})}),w=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("mask",{id:"money-mask",width:"20",height:"14",x:"2",y:"5",maskUnits:"userSpaceOnUse"},Object(c.createElement)("path",{fill:"#fff",fillRule:"evenodd",d:"M2 5v14h20V5H2zm5 12c0-1.657-1.343-3-3-3v-4c1.657 0 3-1.343 3-3h10c0 1.657 1.343 3 3 3v4c-1.657 0-3 1.343-3 3H7zm7-5c0-1.7-.9-3-2-3s-2 1.3-2 3 .9 3 2 3 2-1.3 2-3z",clipRule:"evenodd"})),Object(c.createElement)("g",{mask:"url(#money-mask)"},Object(c.createElement)("path",{d:"M0 0h24v24H0z"})))})},v=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(c.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(c.createElement)("g",{mask:"url(#external-mask)"},Object(c.createElement)("path",{d:"M0 0h24v24H0z"})))})};n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return g})),n.d(t,"m",(function(){return p})),n.d(t,"l",(function(){return f})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return j})),n.d(t,"e",(function(){return w})),n.d(t,"b",(function(){return v}))},4:function(e,t){!function(){e.exports=this.lodash}()},42:function(e,t){!function(){e.exports=this.wp.keycodes}()},45:function(e,t,n){"use strict";var c=n(6),r=n.n(c),o=n(0),a=n(1),i=(n(3),n(2));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.onChange,n=e.settings,c=n.button,r=n.price,s=n.rating,u=n.title;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.ToggleControl,{label:Object(a.__)("Product title","woo-gutenberg-products-block"),help:u?Object(a.__)("Product title is visible.","woo-gutenberg-products-block"):Object(a.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:u,onChange:function(){return t(l({},n,{title:!u}))}}),Object(o.createElement)(i.ToggleControl,{label:Object(a.__)("Product price","woo-gutenberg-products-block"),help:r?Object(a.__)("Product price is visible.","woo-gutenberg-products-block"):Object(a.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return t(l({},n,{price:!r}))}}),Object(o.createElement)(i.ToggleControl,{label:Object(a.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(a.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(a.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return t(l({},n,{rating:!s}))}}),Object(o.createElement)(i.ToggleControl,{label:Object(a.__)("Add to Cart button","woo-gutenberg-products-block"),help:c?Object(a.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(a.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:c,onChange:function(){return t(l({},n,{button:!c}))}}))}},46:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(4),a=(n(3),n(2)),i=n(5);t.a=function(e){var t=e.columns,n=e.rows,s=e.setAttributes,l=e.alignButtons;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.RangeControl,{label:Object(r.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(o.clamp)(e,i.m,i.k);s({columns:Object(o.isNaN)(t)?"":t})},min:i.m,max:i.k}),Object(c.createElement)(a.RangeControl,{label:Object(r.__)("Rows","woo-gutenberg-products-block"),value:n,onChange:function(e){var t=Object(o.clamp)(e,i.o,i.l);s({rows:Object(o.isNaN)(t)?"":t})},min:i.o,max:i.l}),Object(c.createElement)(a.ToggleControl,{label:Object(r.__)("Align Buttons","woo-gutenberg-products-block"),help:l?Object(r.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(r.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:l,onChange:function(){return s({alignButtons:!l})}}))}},5:function(e,t,n){"use strict";var c=n(7),r=Object(c.getSetting)("enableReviewRating",!0),o=Object(c.getSetting)("showAvatars",!0),a=Object(c.getSetting)("max_columns",6),i=Object(c.getSetting)("min_columns",1),s=Object(c.getSetting)("default_columns",3),l=Object(c.getSetting)("max_rows",6),u=Object(c.getSetting)("min_rows",1),b=Object(c.getSetting)("default_rows",2),d=Object(c.getSetting)("min_height",500),g=Object(c.getSetting)("default_height",500),p=Object(c.getSetting)("placeholderImgSrc",""),f=(Object(c.getSetting)("thumbnail_size",300),Object(c.getSetting)("isLargeCatalog")),h=Object(c.getSetting)("limitTags"),m=Object(c.getSetting)("hasProducts",!0),O=Object(c.getSetting)("hasTags",!0),j=Object(c.getSetting)("homeUrl",""),w=Object(c.getSetting)("productCount",0),v={root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")};n.d(t,"d",(function(){return r})),n.d(t,"r",(function(){return o})),n.d(t,"k",(function(){return a})),n.d(t,"m",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"l",(function(){return l})),n.d(t,"o",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"n",(function(){return d})),n.d(t,"b",(function(){return g})),n.d(t,"p",(function(){return p})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return j})),n.d(t,"q",(function(){return w})),n.d(t,"e",(function(){return v}))},53:function(e,t){!function(){e.exports=this.ReactDOM}()},55:function(e,t){!function(){e.exports=this.wp.viewport}()},584:function(e,t,n){var c=n(585);"string"==typeof c&&(c=[[e.i,c,""]]);var r={insert:"head",singleton:!1};n(38)(c,r);c.locals&&(e.exports=c.locals)},585:function(e,t,n){},614:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n(26),a=n(5),i=(n(584),n(6)),s=n.n(i),l=n(11),u=n.n(l),b=n(16),d=n.n(b),g=n(12),p=n.n(g),f=n(13),h=n.n(f),m=n(8),O=n.n(m),j=n(14),w=n.n(j),v=n(25),E=n(2),y=(n(3),n(45)),_=n(46),k=n(15),C=n.n(k),x=n(4),S=n(34),M=n(19),P=(n(586),function(e){function t(){var e;return u()(this,t),(e=p()(this,h()(t).apply(this,arguments))).state={list:[],loading:!0},e.renderItem=e.renderItem.bind(O()(e)),e.debouncedOnSearch=Object(x.debounce)(e.onSearch.bind(O()(e)),400),e}return w()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(M.e)({selected:t}).then((function(t){e.setState({list:t,loading:!1})})).catch((function(){e.setState({list:[],loading:!1})}))}},{key:"onSearch",value:function(e){var t=this,n=this.props.selected;this.setState({loading:!0}),Object(M.e)({selected:n,search:e}).then((function(e){t.setState({list:e,loading:!1})})).catch((function(){t.setState({list:[],loading:!1})}))}},{key:"renderItem",value:function(e){var t=e.item,n=e.search,o=e.depth,a=void 0===o?0:o,i=["woocommerce-product-tags__item"];n.length&&i.push("is-searching"),0===a&&0!==t.parent&&i.push("is-skip-level");var s=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name;return Object(c.createElement)(S.b,C()({className:i.join(" ")},e,{showCount:!0,"aria-label":Object(r.sprintf)(Object(r._n)("%d product tagged as %s","%d products tagged as %s",t.count,"woo-gutenberg-products-block"),t.count,s)}))}},{key:"render",value:function(){var e=this.state,t=e.list,n=e.loading,o=this.props,i=o.onChange,s=o.onOperatorChange,l=o.operator,u=o.selected,b={clear:Object(r.__)("Clear all product tags","woo-gutenberg-products-block"),list:Object(r.__)("Product Tags","woo-gutenberg-products-block"),noItems:Object(r.__)("Your store doesn't have any product tags.","woo-gutenberg-products-block"),search:Object(r.__)("Search for product tags","woo-gutenberg-products-block"),selected:function(e){return Object(r.sprintf)(Object(r._n)("%d tag selected","%d tags selected",e,"woo-gutenberg-products-block"),e)},updated:Object(r.__)("Tag search results updated.","woo-gutenberg-products-block")};return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(S.a,{className:"woocommerce-product-tags",list:t,isLoading:n,selected:u.map((function(e){return Object(x.find)(t,{id:e})})).filter(Boolean),onChange:i,onSearch:a.j?this.debouncedOnSearch:null,renderItem:this.renderItem,messages:b,isHierarchical:!0}),!!s&&Object(c.createElement)("div",{className:u.length<2?"screen-reader-text":""},Object(c.createElement)(E.SelectControl,{className:"woocommerce-product-tags__operator",label:Object(r.__)("Display products matching","woo-gutenberg-products-block"),help:Object(r.__)("Pick at least two tags to use this setting.","woo-gutenberg-products-block"),value:l,onChange:s,options:[{label:Object(r.__)("Any selected tags","woo-gutenberg-products-block"),value:"any"},{label:Object(r.__)("All selected tags","woo-gutenberg-products-block"),value:"all"}]})))}}]),t}(c.Component));P.defaultProps={operator:"any"};var z=P,A=n(69),H=n(27);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(){var e;return u()(this,t),(e=p()(this,h()(t).apply(this,arguments))).state={changedAttributes:{},isEditing:!1},e.startEditing=e.startEditing.bind(O()(e)),e.stopEditing=e.stopEditing.bind(O()(e)),e.setChangedAttributes=e.setChangedAttributes.bind(O()(e)),e.save=e.save.bind(O()(e)),e}return w()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.props.attributes.tags.length||this.setState({isEditing:!0})}},{key:"startEditing",value:function(){this.setState({isEditing:!0,changedAttributes:{}})}},{key:"stopEditing",value:function(){this.setState({isEditing:!1,changedAttributes:{}})}},{key:"setChangedAttributes",value:function(e){this.setState((function(t){return{changedAttributes:B({},t.changedAttributes,{},e)}}))}},{key:"save",value:function(){var e=this.state.changedAttributes;(0,this.props.setAttributes)(e),this.stopEditing()}},{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,o=this.state.isEditing,a=t.columns,i=t.tagOperator,s=t.contentVisibility,l=t.orderby,u=t.rows,b=t.alignButtons;return Object(c.createElement)(v.InspectorControls,{key:"inspector"},Object(c.createElement)(E.PanelBody,{title:Object(r.__)("Product Tag","woo-gutenberg-products-block"),initialOpen:!t.tags.length&&!o},Object(c.createElement)(z,{selected:t.tags,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));n({tags:t})},operator:i,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return n({tagOperator:e})}})),Object(c.createElement)(E.PanelBody,{title:Object(r.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(_.a,{columns:a,rows:u,alignButtons:b,setAttributes:n})),Object(c.createElement)(E.PanelBody,{title:Object(r.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(y.a,{settings:s,onChange:function(e){return n({contentVisibility:e})}})),Object(c.createElement)(E.PanelBody,{title:Object(r.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(A.a,{setAttributes:n,value:l})))}},{key:"renderEditMode",value:function(){var e=this,t=this.props,n=t.attributes,o=t.debouncedSpeak,a=B({},n,{},this.state.changedAttributes);return Object(c.createElement)(E.Placeholder,{icon:Object(c.createElement)(H.i,{className:"block-editor-block-icon"}),label:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(r.__)("Display a grid of products from your selected tags.","woo-gutenberg-products-block"),Object(c.createElement)("div",{className:"wc-block-product-tag__selection"},Object(c.createElement)(z,{selected:a.tags,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=t.map((function(e){return e.id}));e.setChangedAttributes({tags:n})},operator:a.tagOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return e.setChangedAttributes({tagOperator:t})}}),Object(c.createElement)(E.Button,{isDefault:!0,onClick:function(){e.save(),o(Object(r.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(r.__)("Done","woo-gutenberg-products-block")),Object(c.createElement)(E.Button,{className:"wc-block-product-tag__cancel-button",isTertiary:!0,onClick:function(){e.stopEditing(),o(Object(r.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(r.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var e=this.props,t=e.attributes,n=e.name,o=t.tags.length;return Object(c.createElement)(E.Disabled,null,o?Object(c.createElement)(v.ServerSideRender,{block:n,attributes:t}):Object(c.createElement)(E.Placeholder,{icon:Object(c.createElement)(H.i,{className:"block-editor-block-icon"}),label:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(r.__)("This block displays products from selected tags. Select at least one tag to display its products.","woo-gutenberg-products-block")))}},{key:"render",value:function(){var e=this,t=this.state.isEditing;return Object(c.createElement)(c.Fragment,null,a.g?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(v.BlockControls,null,Object(c.createElement)(E.Toolbar,{controls:[{icon:"edit",title:Object(r.__)("Edit"),onClick:function(){return t?e.stopEditing():e.startEditing()},isActive:t}]})),this.getInspectorControls(),t?this.renderEditMode():this.renderViewMode()):Object(c.createElement)(E.Placeholder,{icon:Object(c.createElement)(H.i,{className:"block-editor-block-icon"}),label:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(r.__)("This block displays products from selected tags. In order to preview this you'll first need to create a product and assign it some tags.","woo-gutenberg-products-block")))}}]),t}(c.Component),V=Object(E.withSpokenMessages)(N);Object(o.registerBlockType)("woocommerce/product-tag",{title:Object(r.__)("Products by Tag","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(H.i,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(r.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(r.__)("Display a grid of products from your selected tags.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:{columns:{type:"number",default:a.a},rows:{type:"number",default:a.c},alignButtons:{type:"boolean",default:!1},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},tags:{type:"array",default:[]},tagOperator:{type:"string",default:"any"},orderby:{type:"string",default:"date"}},edit:function(e){return Object(c.createElement)(V,e)},save:function(){return null}})},64:function(e,t){!function(){e.exports=this.wp.hooks}()},66:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},67:function(e,t){!function(){e.exports=this.wp.date}()},69:function(e,t,n){"use strict";var c=n(0),r=n(1),o=n(2);n(3);t.a=function(e){var t=e.value,n=e.setAttributes;return Object(c.createElement)(o.SelectControl,{label:Object(r.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(r.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(r.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(r.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(r.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(r.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(r.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(r.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return n({orderby:e})}})}},7:function(e,t){!function(){e.exports=this.wc.wcSettings}()},73:function(e,t){!function(){e.exports=this.wp.dom}()},76:function(e,t){},77:function(e,t){},78:function(e,t){},80:function(e,t){},81:function(e,t){}});