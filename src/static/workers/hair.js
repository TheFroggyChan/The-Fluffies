/*!
 * Content of the-fluffies.net
 * 
 * Author: Electrum18
 * License: CC BY-NC-ND 4.0 https://creativecommons.org/licenses/by-nc-nd/4.0/
 * 
 * 2018 - 2019
 */!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=30)}({30:function(t,e,n){var r;r=n(5).interpolate,self.addEventListener("message",function(t){var e,n,o,i,s,l,c,f,a,u,p,h,d,g,y,x,m,b,v,M,S;if((l=(t=t.data).hair).info[l.id]){for(c=t.hairs[l.name],y=["front","back","tail"],a=-1,f=p=0,h=(o=["hair","hairSecond","hairNape","hairNapeSecond","hairTail","hairTailSecond"]).length;p<h;f=++p)n=o[f],f%2==0&&a++,u=f%2==0?"main":t.mane.second.isEnds&&c[y[a]].ends?"ends":"second",x=c[y[a]][u],s=2*t.x,i=Math.floor(s),m=s-i,d=l.info[l.id].mirroring,g=c.fix&&c.fix[y[a]]&&c.fix[y[a]][u]&&c.fix[y[a]][u].x?{origin:c.fix[y[a]][u]}:{origin:{x:0,y:0}},b=function(){return self.postMessage({type:"refs",key:n,path:e(m)}),self.postMessage({type:"refs",key:n+"Front",path:""})},M=function(){return self.postMessage({type:"refs",key:n+"Front",path:e(m)}),self.postMessage({type:"refs",key:n,path:""})},v=function(){return self.postMessage({type:"refs",key:n,path:""}),self.postMessage({type:"refs",key:n+"Front",path:""})},(i=2+i)>3&&(i=3,m=1),0!==x.length?(e=r(i>1&&d?[x[4-i],x[3-i]]:[x[i],x[i+1]],g),u&&self.postMessage({type:"clips",key:n+"Clip",path:e(m)}),"hair"===n||"hairSecond"===n?M():"hairTail"!==n&&"hairTailSecond"!==n||"Curly ends"===l?("hairTail"===n||"hairTailSecond"===n)&&"Curly ends"!==l&&t.degress>0?M():"Curly ends"===l.name?(("hairTail"===n||"hairTailSecond"===n)&&t.degress>0&&M(),("hairNape"===n||"hairNapeSecond"===n)&&t.degress<0?M():b()):b():M()):v();return S=l.side,t.degress<0&&!d?(S.basic={transform:"scale(-1, 1)"},S.alt={transform:""},S.front={transform:""}):(S.basic={transform:""},S.alt={transform:"scale(-1, 1)"},S.front={transform:"scale(-1, 1) translate(-100%)"})}},!1)},5:function(t,e,n){"use strict";n.r(e);const r=void 0,o="V",i="H",s="L",l="Z",c="M",f="C",a="S",u="Q",p="T",h="A",d=" ",g="fill",y="none";function x(t){return"string"==typeof t}const m=Math,b=m.abs,v=m.min,M=m.max,S=m.floor,w=m.round,T=m.sqrt,A=m.pow,j=m.cos,P=m.asin,k=m.sin,O=m.tan,z=m.PI,C=2/3,q=A(2,-52);function _(){throw new Error(Array.prototype.join.call(arguments,d))}function E(t,e){for(let n in e)t.hasOwnProperty(n)||(t[n]=e[n]);return t}var F="undefined"!=typeof window&&window.navigator.userAgent;const N=/(MSIE |Trident\/|Edge\/)/i.test(F)?Array:Float32Array;function L(t){return new N(t)}function $(t,e,n,r){return T((t-n)*(t-n)+(e-r)*(e-r))}function H(t,e,n){let o=n.length;if(n[o-2]!==n[0]||n[o-1]!==n[1])return;const i=n.slice(2);let s,l;o=i.length;for(let n=0;n<o;n+=6){const o=$(t,e,i[n],i[n+1]);(l===r||o<l)&&(l=o,s=n)}!function(t,e){const n=t.length,r=n-e,o=L(e);let i;for(i=0;i<e;i++)o[i]=t[i];for(i=e;i<n;i++)t[i-e]=t[i];for(i=0;i<e;i++)t[r+i]=o[i]}(i,s),n[0]=i[o-2],n[1]=i[o-1];for(let t=0;t<i.length;t++)n[t+2]=i[t]}function I(t,e){let n=e-t.length;const r=Math.ceil(n/t.length),o=L(e);o[0]=t[0],o[1]=t[1];let i=1,s=1;for(;s<e-1;){o[++s]=t[++i],o[++s]=t[++i],o[++s]=t[++i],o[++s]=t[++i];const e=o[++s]=t[++i],l=o[++s]=t[++i];if(n)for(let t=0;t<r&&n;t++)o[s+5]=o[s+3]=o[s+1]=e,o[s+6]=o[s+4]=o[s+2]=l,s+=6,n-=6}return o}function Q(t,e){return e.p-t.p}function V(t,e,n){const r=Z(t),o=Z(e),i=n.origin,s=i.x,l=i.y,c=i.absolute;r.length!==o.length&&(n.optimize===g?function t(e,n,r){const o=e.length,i=n.length;if(o<i)return t(n,e,r);n.length=o;for(let t=i;t<o;t++){const o=e[t],i=L(o.d.length);for(let t=0;t<o.d.length;t+=2)i[t]=r.absolute?r.x:o.x+o.w*r.x,i[t+1]=r.absolute?r.y:o.y+o.y*r.y;n[t]=E({d:i},o)}}(r,o,n.origin):_("optimize:none requires equal lengths"));const f=Array(2);if(f[0]=r.map(U),f[1]=o.map(U),n.optimize!==y)for(let t=0;t<r.length;t++){const e=r[t],n=o[t];H(c?s:e.x+e.w*s,c?l:e.y+e.h*l,f[0][t]),H(c?s:n.x+n.w*s,c?l:n.y+n.h*l,f[1][t])}return n.optimize===g&&function(t,e){const n=t[0].length;for(let r=0;r<n;r++){const n=t[0][r],o=t[1][r],i=M(n.length+e,o.length+e);t[0][r]=I(n,i),t[1][r]=I(o,i)}}(f,6*n.addPoints),f}function Z(t){return t.data.slice().sort(Q)}function U(t){return t.d}const B={addPoints:0,optimize:g,origin:{x:0,y:0},precision:0};function D(t,e){e=E(e,B),(!t||t.length<2)&&_("invalid arguments");const n=t.length-1,r=Array(n);for(let o=0;o<n;o++)r[o]=G(t[o],t[o+1],e);const o=e.precision?t=>t.toFixed(e.precision):w;return t=>{const e=n*t,i=v(S(e),n-1);return function(t,e){if(x(t))return t;let n=[];for(let r=0;r<t.length;r++){const o=t[r];let i;n.push(c,e(o[0]),e(o[1]),f);for(let t=2;t<o.length;t+=6){const r=e(o[t]),s=e(o[t+1]),l=e(o[t+2]),c=e(o[t+3]),f=e(o[t+4]),a=e(o[t+5]);r==f&&l==f&&s==a&&c==a&&i==(i=""+r+s+l+c+f+a)||n.push(r,s,l,c,f,a)}}return n.join(d)}(r[i]((e-i)/(i+1)),o)}}function G(t,e,n){const r=V(t,e,n),o=r[0].length;return n=>{if(b(n-0)<q)return t.path;if(b(n-1)<q)return e.path;const i=Array(o);for(let t=0;t<o;t++)i[t]=J(r[0][t],r[1][t],n);return i}}function J(t,e,n){const r=t.length,o=L(r);for(let i=0;i<r;i++)o[i]=t[i]+(e[i]-t[i])*n;return o}function K(t,e){return t===r?e:t}const R=120*z/180,W=2*z;function X(t,e,n,r,o,i,s,l,c,f,a,u,p){if(n<=0||r<=0)return[t,e,l,c,l,c];const h=z/180*(+o||0),d=j(h),g=k(h),y=!!f;if(!y){const o=t,h=l,y=((t=o*d-e*-g)-(l=h*d-c*-g))/2,x=((e=o*-g+e*d)-(c=h*-g+c*d))/2;let m=y*y/(n*n)+x*x/(r*r);m>1&&(n*=m=T(m),r*=m);const v=(i===s?-1:1)*T(b((n*n*r*r-n*n*x*x-r*r*y*y)/(n*n*x*x+r*r*y*y)));u=v*n*x/r+(t+l)/2,f=P((e-(p=v*-r*y/n+(e+c)/2))/r),a=P((c-p)/r),t<u&&(f=z-f),l<u&&(a=z-a),f<0&&(f+=W),a<0&&(a+=W),s&&f>a&&(f-=W),!s&&a>f&&(a-=W)}let x;if(b(a-f)>R){const t=a,e=l,i=c;x=X(l=u+n*j(a=f+R*(s&&a>f?1:-1)),c=p+r*k(a),n,r,o,0,s,e,i,a,t,u,p)}else x=[];const m=4/3*O((a-f)/4);if(x.splice(0,0,2*t-(t+m*n*k(f)),2*e-(e-m*r*j(f)),l+m*n*k(a),c-m*r*j(a),l,c),!y)for(let t=0,e=x.length;t<e;t+=2){const e=x[t],n=x[t+1];x[t]=e*d-n*g,x[t+1]=e*g+n*d}return x}const Y={M:2,H:1,V:1,L:2,Z:0,C:6,S:4,Q:4,T:2,A:7};function tt(t,e,n,r,o,i,s){const l=t.x,c=t.y;t.x=K(i,l),t.y=K(s,c),t.p.push(K(e,l),n=K(n,c),r=K(r,l),o=K(o,c),t.x,t.y),t.lc=t.c}function et(t){const e=t.c,n=t.t,r=t.x,s=t.y;if(e===o)n[0]+=s;else if(e===i)n[0]+=r;else if(e===h)n[5]+=r,n[6]+=s;else for(let t=0;t<n.length;t+=2)n[t]+=r,n[t+1]+=s}function nt(t){return t.split(d).map(rt)}function rt(t,e){return 0===e?t:+t}function ot(t){const e={x:0,y:0,s:[]},n=function(t){return t.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi," $1").replace(/([mhvlzcsqta])/gi," $1").trim().split("  ").map(nt)}(t);for(let t=0;t<n.length;t++){const d=n[t],g=d[0],y=g.toUpperCase(),x=y!==l&&y!==g;e.c=y;const m=Y[y],b=d;let v=1;do{e.t=1===b.length?b:b.slice(v,v+m),x&&et(e);const t=e.t,n=e.x,d=e.y;let g,M,S,w,T,A;if(y===c)e.s.push(e.p=[e.x=t[0],e.y=t[1]]);else if(y===i)tt(e,r,r,r,r,t[0],r);else if(y===o)tt(e,r,r,r,r,r,t[0]);else if(y===s)tt(e,r,r,r,r,t[0],t[1]);else if(y===l)tt(e,r,r,r,r,e.p[0],e.p[1]);else if(y===f)tt(e,t[0],t[1],t[2],t[3],t[4],t[5]),e.cx=t[2],e.cy=t[3];else if(y===a){const o=e.lc!==a&&e.lc!==f;tt(e,g=o?r:2*n-e.cx,M=o?r:2*d-e.cy,t[0],t[1],t[2],t[3]),e.cx=t[0],e.cy=t[1]}else if(y===u){const r=t[0],o=t[1];S=t[2],w=t[3],tt(e,n+(r-n)*C,d+(o-d)*C,S+(r-S)*C,w+(o-w)*C,S,w),e.cx=r,e.cy=o}else if(y===p)S=t[0],w=t[1],e.lc===u||e.lc===p?(g=n+(2*n-e.cx-n)*C,M=d+(2*d-e.cy-d)*C,T=S+(2*n-e.cx-S)*C,A=w+(2*d-e.cy-w)*C):(g=T=n,M=A=d),tt(e,g,M,T,A,S,w),e.cx=T,e.cy=A;else if(y===h){const r=X(n,d,t[0],t[1],t[2],t[3],t[4],t[5],t[6]);for(let t=0;t<r.length;t+=6)tt(e,r[t],r[t+1],r[t+2],r[t+3],r[t+4],r[t+5])}else _(e.c," is not supported");v+=m}while(v<b.length)}return e.s}function it(t){const e=t.length;let n=t[e-2],r=t[e-1],o=0;for(let i=0;i<e;i+=6)o+=$(t[i],t[i+1],n,r),n=t[i],r=t[i+1];return S(o)}function st(t){let e=t[0],n=t[1],r=n,o=e;for(let i=2;i<t.length;i+=6){let s=t[i+4],l=t[i+5];e=v(e,s),o=M(o,s),n=v(n,l),r=M(r,l)}return{d:t,x:e,y:n,w:o-e,h:r-n,p:it(t)}}const lt=/^([#|\.]|path)/i;function ct(t){return function(t){return{path:t,data:ot(t).map(st)}}(function(t){if(x(t)){if(!lt.test(t))return t;t=document.querySelector(t)}return t.getAttribute("d")}(t))}function ft(t,e){return D(t.map(ct),e||{})}n.d(e,"interpolate",function(){return ft})}});