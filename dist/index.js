"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(y,i){
var s=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/array-dtypes/dist'),v=require('@stdlib/array-dtype/dist'),d=require('@stdlib/array-base-assert-contains/dist'),l=require('@stdlib/array-base-join/dist'),m=require('@stdlib/stats-base-nanmin/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),t=o("real_and_generic"),c="generic";function g(e){var r;if(!s(e))throw new TypeError(a('2HP2O',e));if(r=v(e)||c,!d(t,r))throw new TypeError(a('2HPHZ',l(t,'", "'),r));return m(e.length,e,1,0)}i.exports=g
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
