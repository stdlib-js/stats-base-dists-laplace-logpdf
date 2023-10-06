// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function r(t,i,r){return s(t)||s(i)||s(r)||r<=0?NaN:-(e((t-i)/r)+n(2*r))}function m(t,r){return s(t)||s(r)||r<=0?i(NaN):function(i){if(s(i))return NaN;return-(e((i-t)/r)+n(2*r))}}t(r,"factory",m);export{r as default,m as factory};
//# sourceMappingURL=index.mjs.map
