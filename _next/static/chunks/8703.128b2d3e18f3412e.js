"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8703],{8703:function(e,n,o){o.r(n);var r=o(7896),l=o(2784),t=o(9089),a=o(6050),i=function(e){return l.createElement(a.Z,(0,r.Z)({},e,{mainSize:19}),l.createElement("path",{d:"M12.7065 0.495703C12.3902 0.179297 11.9613 0 11.5149 0H6.48506C6.03866 0 5.60984 0.179297 5.2935 0.495703L0.495606 5.29102C0.179262 5.60742 0 6.03633 0 6.48281V11.5137C0 11.9602 0.179262 12.3891 0.495606 12.7055L5.2935 17.5043C5.60984 17.8207 6.03866 18 6.48506 18H11.5149C11.9613 18 12.3902 17.8207 12.7065 17.5043L17.5044 12.7055C17.8207 12.3891 18 11.9602 18 11.5137V6.48633C18 6.03984 17.8207 5.61094 17.5044 5.29453L12.7065 0.495703Z"}))};i.displayName="OctagonIcon",i.propTypes=t.Z,n.default=i},9089:function(e,n,o){var r=o(3980),l={colour:r.string,disabled:r.bool,disabledColour:r.string,fixColour:r.string,hoverColour:(0,r.oneOfType)([r.bool,r.string]),onClick:r.func,size:(0,r.oneOfType)([r.number,r.string])};n.Z=l},6050:function(e,n,o){var r,l,t,a,i=o(1171),s=o(7896),u=o(9740),c=o(2784),d=o(316),C=["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"],f=function(e){var n=e.children,o=e.colour,r=e.disabled,l=e.disabledColour,t=e.hoverColour,a=e.onClick,i=e.size,d=e.stroke,f=e.translate,b=(0,u.Z)(e,C),v=b.mainSize,h="";if("string"===typeof i)switch(i){case"xs":h=12;break;case"sm":h=16;break;case"lg":h=24;break;case"xl":h=32;break;default:h=20}else h=i||20;var k=1;return v&&h!==v&&(k=Number(h/v)),c.createElement(p,(0,s.Z)({colour:o,disabled:r,disabledColour:l,hoverColour:t,onClick:a,scale:k,size:h,stroke:d,translate:f,xmlns:"http://www.w3.org/2000/svg"},b),n)};f.displayName="IconWrapper";var b="default",v="hover",h=function(e,n){var o=n.colour,r=n.context,l=n.disabled,t=n.disabledColour,a=n.hoverColour,i=n.theme,s=i.ICONS,u=i.THEME_COLOUR,c=r?u.context:o||s.defaultIconColour;return e===b?l&&t?t:l?s.disabledIconColour:c:e===v&&a?(!0===a&&(a=s.hoverIconColour),l&&t?t:l?s.disabledIconColour:a||s.hoverIconColour||c):l?t||s.disabledIconColour:c},p=d.ZP.svg(r||(r=(0,i.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"])),(function(e){var n=e.size;if("number"===typeof n)return(0,d.iv)(l||(l=(0,i.Z)(["\n        height: ","px;\n        width: ","px;\n      "])),n,n)}),(function(e){return h(b,e)}),(function(e){return e.stroke}),(function(e){var n=e.scale,o=e.translate;return n&&(0,d.iv)(t||(t=(0,i.Z)(["\n          transform: scale(",") ",";\n        "])),n,o||"")}),(function(e){return h(v,e)}),(function(e){var n=e.onClick,o=e.disabled;return n&&!o&&(0,d.iv)(a||(a=(0,i.Z)(["\n      cursor: pointer;\n    "])))}));n.Z=f}}]);