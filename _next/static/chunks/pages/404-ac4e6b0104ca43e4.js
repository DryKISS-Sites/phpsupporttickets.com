(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197],{2313:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(1171),i=t(2784),a=t(316),o=t(3841),d=t(7947),c=t(6666),l=t(3980),g=t(6802),p=t(7068),m=t(6612),s=t(9973);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v,b,h,O=f(f({align:l.string,className:l.string,children:l.node,content:l.string,context:(0,l.oneOf)(Object.values(m.Z)),size:(0,l.oneOf)(Object.values(s.Z)),stroked:l.bool,weight:(0,l.oneOf)(["light","regular","semiBold","bold"])},g.Z),p.Z),Z=function(e){var n=e.align,t=e.children,r=e.className,a=e.content,o=e.context,d=e.size;e.weight;return i.createElement(y,{align:n,className:r,context:o,size:d},a||t)};Z.displayName="Text";var y=a.ZP.p(v||(v=(0,r.Z)(["\n  color: ",";\n  margin: 0;\n  padding: 0;\n  text-align: ",";\n\n  ","\n\n  ","\n  ","\n\n  ","\n"])),(function(e){var n=e.context,t=e.theme,r=t.COLOUR,i=t.TEXT;return n?r[n]:i.DEFAULT_COLOUR}),(function(e){return e.align}),(function(e){var n,t,i=e.size,o=e.theme;return(0,a.iv)(b||(b=(0,r.Z)(["\n    font-size: ",";\n    line-height: ",";\n  "])),null!==(n=o.TEXT.FONT_SIZE[i])&&void 0!==n?n:"1rem",null!==(t=o.TEXT.LINE_HEIGHT[i])&&void 0!==t?t:"1rem")}),(function(e){return(0,d.Z)(e)}),(function(e){return(0,o.Z)(e)}),(function(e){var n=e.weight;return n&&(0,a.iv)(h||(h=(0,r.Z)(["\n      font-weight: ",";\n    "])),"light"===n?400:"regular"===n?500:"semiBold"===n?600:"bold"===n?700:500)}));Z.propTypes=O,Z.defaultProps={context:"dark",size:"md",stroked:!1};var E=Z},5556:function(e,n,t){"use strict";t.d(n,{Z:function(){return F}});var r=t(1171),i=t(2784),a=t(3980),o=t(316),d=t(7316),c=t(4073),l=t(7729),g=t.n(l),p=function(e){var n=e.canonical,t=e.brand,r=e.meta,a=r.description,o=r.path,d=r.title;return i.createElement(g(),null,i.createElement("title",null,d," | ",t),i.createElement("meta",{name:"description",content:a,key:"description"}),i.createElement("meta",{rel:"canonical",href:n+o,key:"canonical"}),i.createElement("meta",{property:"og:title",content:d}),i.createElement("meta",{property:"og:description",content:a}),i.createElement("meta",{property:"og:url",content:n+o}),i.createElement("meta",{name:"twitter:url",content:n+o}),i.createElement("meta",{name:"twitter:title",content:d}),i.createElement("meta",{name:"twitter:description",content:a}))};p.displayName="MetaHead",p.propTypes={brand:a.string.isRequired,meta:a.object.isRequired};var m,s,u,f,v,b=p,h=t(2324),O=t(4070),Z=t(6612),y=function(e){var n=e.center,t=e.children,r=e.context,a=e.divider,o=e.heading,d=e.help,c=e.helpContent,l=e.strapline;return i.createElement(E,{center:n,divider:a},i.createElement(k,null,i.createElement(x,{content:o,context:r,pageHeading:!0}),l&&i.createElement("div",null,l)),(t||d)&&i.createElement(j,null,t||c),a&&i.createElement(T,{size:"md"}))};y.displayName="PageHeading";var E=o.ZP.header(m||(m=(0,r.Z)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ",";\n  text-align: ",";\n"])),(function(e){return!e.divider&&"2rem"}),(function(e){return e.center&&"center"})),k=o.ZP.span(s||(s=(0,r.Z)(["\n  flex: 1;\n"]))),j=o.ZP.span(u||(u=(0,r.Z)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]))),x=(0,o.ZP)(O.Z)(f||(f=(0,r.Z)(["\n  margin-bottom: ",";\n"])),(function(e){return e.divider?"0.5rem":"0"})),T=(0,o.ZP)(h.Z)(v||(v=(0,r.Z)(["\n  width: 100%;\n"])));y.propTypes={center:a.bool,children:a.element,context:(0,a.oneOf)(Object.values(Z.Z)),divider:a.bool,heading:a.any.isRequired,help:a.bool,helpContent:a.any,strapline:a.string},y.defaultProps={center:!1,context:"primary",divider:!0,help:!1,helpContent:"",strapline:""};var w=y,P=t(926);var S=t(9147);function R(e){return function(e){if(Array.isArray(e))return(0,P.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,S.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z,N,_,X,B,L=t(9973),C=t(8064),D={xxsSize:"0.25rem",xsSize:"0.5rem",smSize:"0.75rem",mdSize:"1rem",lgSize:"1.5rem",xlSize:"2rem",xxlSize:"2.5rem",xxxlSize:"3rem"},Y=function(e){var n="",t=0;return e.forEach((function(e){e.v&&(t++,n+="".concat(e.k,": ").concat(D[e.v+"Size"],";\n      ").concat(C.Z.desktop(z||(z=(0,r.Z)(["\n        ",": calc("," * 2);"])),e.k,D[e.v+"Size"]),"\n      "))})),0===t?(0,o.iv)(N||(N=(0,r.Z)(["\n      margin-bottom: ",";\n      ","\n    "])),D.mdSize,C.Z.desktop(_||(_=(0,r.Z)(["\n        margin-bottom: calc("," * 2);"])),D.mdSize)):(0,o.iv)(X||(X=(0,r.Z)(["\n    ","\n  "])),n)},q=function(e){var n=e.children,t=e.className,r=e.content,a=e.margin,o=e.marginX,d=e.marginY,c=e.marginTop,l=e.marginRight,g=e.marginBottom,p=e.marginLeft,m=e.padding,s=e.paddingX,u=e.paddingY,f=e.paddingTop,v=e.paddingRight,b=e.paddingBottom,h=e.paddingLeft;return i.createElement(H,{className:t,margin:a,marginX:o,marginY:d,marginTop:c,marginRight:l,marginBottom:g,marginLeft:p,padding:m,paddingX:s,paddingY:u,paddingTop:f,paddingRight:v,paddingBottom:b,paddingLeft:h},r||n)};q.displayName="Space";var H=o.ZP.div(B||(B=(0,r.Z)(["\n  margin: 0;\n  padding: 0;\n  ","\n"])),(function(e){var n=e.margin,t=e.marginBottom,r=e.marginTop,i=e.marginLeft,a=e.marginRight,o=e.marginX,d=e.marginY,c=e.padding,l=e.paddingBottom,g=e.paddingLeft,p=e.paddingRight,m=e.paddingTop,s=e.paddingX,u=e.paddingY;return Y([{k:"margin",v:n},{k:"margin-bottom",v:t},{k:"margin-left",v:i},{k:"margin-right",v:a},{k:"margin-top",v:r},{k:"padding",v:c},{k:"padding-bottom",v:l},{k:"padding-left",v:g},{k:"padding-right",v:p},{k:"padding-top",v:m}].concat(R(d?[{k:"margin-top",v:d},{k:"margin-bottom",v:d}]:[]),R(o?[{k:"margin-left",v:o},{k:"margin-right",v:o}]:[]),R(u?[{k:"padding-top",v:u},{k:"padding-bottom",v:u}]:[]),R(s?[{k:"padding-left",v:s},{k:"padding-right",v:s}]:[])))}));q.propTypes={children:a.node,content:a.string,margin:(0,a.oneOf)(Object.values(L.Z)),marginY:(0,a.oneOf)(Object.values(L.Z)),marginX:(0,a.oneOf)(Object.values(L.Z)),marginTop:(0,a.oneOf)(Object.values(L.Z)),marginRight:(0,a.oneOf)(Object.values(L.Z)),marginBottom:(0,a.oneOf)(Object.values(L.Z)),marginLeft:(0,a.oneOf)(Object.values(L.Z)),padding:(0,a.oneOf)(Object.values(L.Z)),paddingY:(0,a.oneOf)(Object.values(L.Z)),paddingX:(0,a.oneOf)(Object.values(L.Z)),paddingTop:(0,a.oneOf)(Object.values(L.Z)),paddingRight:(0,a.oneOf)(Object.values(L.Z)),paddingBottom:(0,a.oneOf)(Object.values(L.Z)),paddingLeft:(0,a.oneOf)(Object.values(L.Z))};var I,A=q,G=function(e){var n=e.children,t=e.fluid,r=e.meta,a=e.padding,o=e.pageHeading,l=(0,i.useContext)(d.Z).config,g=l.Brand,p=l.Canonical;return i.createElement(U,null,a&&i.createElement(A,{paddingTop:a}),r&&i.createElement(b,{canonical:p,brand:g.name,meta:r}),i.createElement(c.Z,{fluid:t},o&&i.createElement(w,o),n),a&&i.createElement(A,{paddingBottom:a}))};G.displayName="Page";var U=o.ZP.div(I||(I=(0,r.Z)(["\n  background-color: ",";\n"])),(function(e){return e.theme.PAGE.backGroundColour}));G.propTypes={children:a.node.isRequired,fluid:a.bool,meta:(0,a.shape)({description:a.string.isRequired,path:a.string,title:a.string.isRequired}),padding:(0,a.oneOfType)([a.bool,(0,a.oneOf)(Object.values(L.Z))]),pageHeading:(0,a.shape)({center:a.bool,context:(0,a.oneOf)(Object.values(Z.Z)),divider:a.bool,heading:a.any.isRequired,help:a.bool,helpContent:a.any,strapline:a.string})},G.defaultProps={fluid:!1,padding:"md"};var F=G},2534:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(2448)}])},2448:function(e,n,t){"use strict";t.r(n);var r=t(2322),i=t(5556),a=t(2313);n.default=function(){return(0,r.jsx)(i.Z,{heading:"404 ERROR PAGE \u2013 NOT FOUND",meta:{description:"\n      DryKISS is a full service internet and mobile digital production house.\n      Our services span consulting, strategy; planning; development; testing\n      and analytics.",path:"/404",title:"DryKISS develops hybrid mobile and responsive websites"},children:(0,r.jsx)(a.Z,{children:"The page you were looking for no longer exists or never did. Please use the links at the top of your screen to get back in the game, or click here to go home and start again."})})}}},function(e){e.O(0,[9774,2888,179],(function(){return n=2534,e(e.s=n);var n}));var n=e.O();_N_E=n}]);