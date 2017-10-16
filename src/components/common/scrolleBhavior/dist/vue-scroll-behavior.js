/**
 * vue-scroll-behavior v0.1.6
 * (c) 2017 jeneser <jeneserwang@gmail.com>
 * @license MIT
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.vueScrollBehavior=n()}(this,function(){"use strict";function e(e){void 0!==e.maxLength&&"number"==typeof e.maxLength&&(u._maxLength=e.maxLength),void 0!==e.ignore&&Array.isArray(e.ignore)&&(u._ignore=e.ignore)}function n(){return{x:window.pageXOffset,y:window.pageYOffset}}function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0};e.nextTick(function(){window.scrollTo(n.x,n.y)})}function o(e){e.splice(0,parseInt(e.length/2))}function r(e){u._ignore.some(function(n){return e.fullPath.match(n)})}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=(function(){function e(e){this.value=e}function n(n){function t(e,n){return new Promise(function(t,r){var f={key:e,arg:n,resolve:t,reject:r,next:null};u?u=u.next=f:(i=u=f,o(e,n))})}function o(t,i){try{var u=n[t](i),f=u.value;f instanceof e?Promise.resolve(f.value).then(function(e){o("next",e)},function(e){o("throw",e)}):r(u.done?"return":"normal",u.value)}catch(e){r("throw",e)}}function r(e,n){switch(e){case"return":i.resolve({value:n,done:!0});break;case"throw":i.reject(n);break;default:i.resolve({value:n,done:!1})}i=i.next,i?o(i.key,i.arg):u=null}var i,u;this._invoke=t,"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(e){return this._invoke("next",e)},n.prototype.throw=function(e){return this._invoke("throw",e)},n.prototype.return=function(e){return this._invoke("return",e)}}(),{_maxLength:50,_ignore:[]});return u.install=function(f,c){e(c),f.vsbHistoryList=[],f.vueScrollBehavior=function(e){var c=this;"object"===(void 0===e?"undefined":i(e))&&"function"==typeof e.beforeEach?(e.beforeEach(function(e,t,i){if(r(t))i();else{var f=c.vsbHistoryList,a=n(),l=f.findIndex(function(e){return e.path===t.fullPath});f.length>=u._maxLength&&o(f),-1!==l?f[l].position=a:f.push({path:t.fullPath,position:a}),i()}}),e.afterEach(function(e){if(r(e))t(f);else{var n=c.vsbHistoryList.find(function(n){return n.path===e.fullPath});void 0!==n?t(f,n.position):t(f)}})):console.warn("Vue-scroll-behavior dependent on vue-router! Please create the router instance.")},f.vueScrollBehavior(c.router)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(u),u});
