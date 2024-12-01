"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(R,o){
var n=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/math-base-special-ln/dist');function p(e,r,a){var t;return n(e)||n(r)||n(a)||a<=0?NaN:(t=(e-r)/a,-(N(t)+l(2*a)))}o.exports=p
});var f=s(function(h,c){
var y=require('@stdlib/utils-constant-function/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-ln/dist');function z(e,r){if(i(e)||i(r)||r<=0)return y(NaN);return a;function a(t){var u;return i(t)?NaN:(u=(t-e)/r,-(d(u)+g(2*r)))}}c.exports=z
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),F=f();x(q,"factory",F);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
