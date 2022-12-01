// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&a&&a.call(t,r,n.set),t};var c=t;function l(t){return t!=t}function y(t){return Math.abs(t)}var p,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,v=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"";p=b&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return d.call(t);n=t[A],i=A,r=null!=(o=t)&&v.call(o,i);try{t[A]=void 0}catch(r){return d.call(t)}return e=d.call(t),r?t[A]=n:delete t[A],e}:function(t){return d.call(t)};var _,m=p,s="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(s&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?U:function(){throw new Error("not implemented")};var h,j=_,g="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof N)return!1;try{r=new N([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?S:function(){throw new Error("not implemented")};var E,F=h,T="function"==typeof Uint8Array,O="function"==typeof Uint8Array?Uint8Array:null,P="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var t,r,n;if("function"!=typeof O)return!1;try{r=new O(r=[1,3.14,-3.14,256,257]),n=r,t=(T&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?P:function(){throw new Error("not implemented")};var x,I=E,G="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var t,r,n;if("function"!=typeof V)return!1;try{r=new V(r=[1,3.14,-3.14,65536,65537]),n=r,t=(G&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?k:function(){throw new Error("not implemented")};var C,M={uint16:x,uint8:I};(C=new M.uint16(1))[0]=4660;var Y=52===new M.uint8(C.buffer)[0],q=!0===Y?1:0,z=new F(1),B=new j(z.buffer);function D(t){return z[0]=t,B[q]}var H=!0===Y?1:0,J=new F(1),K=new j(J.buffer),L=Number.NEGATIVE_INFINITY,Q=.6931471803691238,R=1.9082149292705877e-10,W=1048575;function X(t){var r,n,e,o,i,a,u,f,c,y,p,b;return 0===t?L:l(t)||t<0?NaN:(i=0,(n=D(t))<1048576&&(i-=54,n=D(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-1023|0,i+=(f=614244+(n&=W)&1048576|0)>>20|0,u=(t=function(t,r){return J[0]=t,K[H]=r>>>0,J[0]}(t,n|1072693248^f))-1,(W&2+n)<3?0===u?0===i?0:i*Q+i*R:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*Q-(a-i*R-u)):(f=n-398458|0,c=440401-n|0,o=(p=(b=(y=u/(2+u))*y)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),a=e+o,(f|=c)>0?(r=.5*u*u,0===i?u-(r-y*(r+a)):i*Q-(r-(y*(r+a)+i*R)-u)):0===i?u-y*(u-a):i*Q-(y*(u-a)-i*R-u))))}function Z(t,r,n){return l(t)||l(r)||l(n)||n<=0?NaN:-(y((t-r)/n)+X(2*n))}return c(Z,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(t,r){return l(t)||l(r)||r<=0?(n=NaN,function(){return n}):function(n){return l(n)?NaN:-(y((n-t)/r)+X(2*r))};var n}}),Z},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).logpdf=r();
//# sourceMappingURL=index.js.map
