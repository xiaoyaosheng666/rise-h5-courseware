!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){this.listeners={},this.maxListener=50}n.r(t),n.d(t,"riseObserver",(function(){return i})),n.d(t,"callRiseIframe",(function(){return d})),r.prototype.on=function(e,t){var n=this.listeners;if(n[e]&&n[e].length>=this.maxListener)throw console.error("监听器的最大数量是%d,您已超出限制",this.maxListener);n[e]instanceof Array?-1===n[e].indexOf(t)&&n[e].push(t):n[e]=[].concat(t)},r.prototype.addListener=r.prototype.on,r.prototype.emit=function(e){var t=Array.prototype.slice.call(arguments);t.shift();var n=this.listeners[e]||[],r=n.map((function(e){var n=e.apply(null,t);return n instanceof Promise?n:new Promise((function(e){return e(n)}))}));return Promise.all(r)},r.prototype.listeners=function(e){return this.listeners[e]},r.prototype.setMaxListeners=function(e){this.maxListener=e},r.prototype.removeListener=function(e,t){var n=this.listeners,r=(n[e]||[]).indexOf(t);r>=0&&n[e].splice(r,1)},r.prototype.removeAllListener=function(e){this.listeners[e]=[]},r.prototype.once=function(e,t){var n=this;this.on(e,(function r(){var i=Array.prototype.slice.call(arguments);t.apply(null,i),n.removeListener(e,r)}))};var i=new r,o=[],a={isLoad:!1,historyMsg:null,isHistorySynchronized:!1,isReady:!1};Object.defineProperty(a,"isReady",{get:function(){return a.isLoad&&a.isHistorySynchronized}});var s={render:function(e){return i.emit(e.behavior,e)},onLoad:function(){a.isLoad=!0,!a.isHistorySynchronized&&a.historyMsg&&s.syncHistory(a.historyMsg),s.flushQueue()},syncHistory:function(e){var t=e.content.list;if(t&&0!==t.length)if(a.isLoad){!function e(n){n<t.length-1?s.render(t[n]).then((function(){e(n++)})):(a.isHistorySynchronized=!0,a.historyMsg=null,s.flushQueue())}(0)}else a.historyMsg=e},flushQueue:function(){if(a.isReady)for(;o.length>0;)s.render(o[0]),o.splice(0,1)}};function u(e){if(window===window.top)return!1;console.log("sdk data:",e),"load"===e.behavior&&s.onLoad(),e&&e.behavior&&window.parent.postMessage&&window.parent.postMessage(e,"*")}window.addEventListener("message",(function(e){if(window!==window.top){var t=e.data;t&&t.behavior&&("$rise-courseware-history"!==t.behavior?a.isReady?s.render(t):o.push(t):s.syncHistory(t))}}));var f=100;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=new Map,p=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"interval",null),c(this,"bufferMap",null),c(this,"timer",null);var r=function(e){var t=e.interval;return"number"==typeof t?t:f}(t);if(r<0)throw new Error("interval 设置错误，无法创建定时任务");this.interval=r;var i=function(e){return"".concat(e.target,"-").concat(e.behavior)}(t);if(l.has(r)){var o=l.get(r);return o.bufferMap.set(i,t),o}return this.bufferMap=new Map,this.bufferMap.set(i,t),this.timer=setInterval((function(){var e=n.bufferMap;e.size>0?e.forEach((function(t,n){u(t),e.delete(n)})):(clearInterval(n.timer),l.delete(r))}),this.interval),l.set(r,this),this};function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){e.interval?new p(e):e.waitOn&&e.waitOn.length>0?function(e){var t,n=e.waitOn.map((function(t){return"".concat(e.target,"-").concat(t)})),r=0,i=y(l.values());try{var o=function(){var e=t.value;if(!e.bufferMap)return"continue";n.forEach((function(t){e.bufferMap.has(t)&&(r=Math.max(e.interval,r))}))};for(i.s();!(t=i.n()).done;)o()}catch(e){i.e(e)}finally{i.f()}setTimeout((function(){u(e)}),r+1)}(e):u(e)}}]));