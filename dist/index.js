"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=s(function(R,o){
var n=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/math-base-special-ln/dist');function p(a,r,e){var t;return n(a)||n(r)||n(e)||e<=0?NaN:(t=(a-r)/e,-(N(t)+l(2*e)))}o.exports=p
});var f=s(function(h,c){
var y=require('@stdlib/utils-constant-function/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-ln/dist');function z(a,r){if(i(a)||i(r)||r<=0)return y(NaN);return e;function e(t){var u;return i(t)?NaN:(u=(t-a)/r,-(d(u)+g(2*r)))}}c.exports=z
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),F=f();x(q,"factory",F);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
