!function(){var e={753:function(){!function(e,t,n){function r(e){var t;27===e.which&&(t=h(e.target,".menupop"))&&(t.querySelector(".menupop > .ab-item").focus(),d(t,"hover"))}function o(e){var t;13===e.which&&(h(e.target,".ab-sub-wrapper")||(t=h(e.target,".menupop"))&&(e.preventDefault(),l(t,"hover")?d(t,"hover"):u(t,"hover")))}function i(t){var r;13===t.which&&(r=t.target.getAttribute("href"),n.userAgent.toLowerCase().indexOf("applewebkit")>-1&&r&&"#"===r.charAt(0)&&setTimeout((function(){var t=e.getElementById(r.replace("#",""));t&&(t.setAttribute("tabIndex","0"),t.focus())}),100))}function a(e,t){var n;h(t.target,".ab-sub-wrapper")||(t.preventDefault(),(n=h(t.target,".menupop"))&&(l(n,"hover")?d(n,"hover"):(f(e),u(n,"hover"))))}function s(e){var t,n=e.target.parentNode;if(n&&(t=n.querySelector(".shortlink-input")),t)return e.preventDefault&&e.preventDefault(),e.returnValue=!1,u(n,"selected"),t.focus(),t.select(),t.onblur=function(){d(n,"selected")},!1}function c(){if("sessionStorage"in t)try{for(var e in sessionStorage)e.indexOf("wp-autosave-")>-1&&sessionStorage.removeItem(e)}catch(e){}}function l(e,t){return!!e&&(e.classList&&e.classList.contains?e.classList.contains(t):!!e.className&&e.className.split(" ").indexOf(t)>-1)}function u(e,t){e&&(e.classList&&e.classList.add?e.classList.add(t):l(e,t)||(e.className&&(e.className+=" "),e.className+=t))}function d(e,t){var n,r;if(e&&l(e,t))if(e.classList&&e.classList.remove)e.classList.remove(t);else{for(n=" "+t+" ",r=" "+e.className+" ";r.indexOf(n)>-1;)r=r.replace(n,"");e.className=r.replace(/^[\s]+|[\s]+$/g,"")}}function f(e){if(e&&e.length)for(var t=0;t<e.length;t++)d(e[t],"hover")}function p(e){if(!e.target||"wpadminbar"===e.target.id||"wp-admin-bar-top-secondary"===e.target.id)try{t.scrollTo({top:-32,left:0,behavior:"smooth"})}catch(e){t.scrollTo(0,-32)}}function h(n,r){for(t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});n&&n!==e;n=n.parentNode)if(n.matches(r))return n;return null}e.addEventListener("DOMContentLoaded",(function(){var l,m,v,g,b,y,w,E,L,S=e.getElementById("wpadminbar");if(S&&"querySelectorAll"in S){l=S.querySelectorAll("li.menupop"),m=S.querySelectorAll(".ab-item"),v=e.getElementById("wp-admin-bar-logout"),g=e.getElementById("adminbarsearch"),b=e.getElementById("wp-admin-bar-get-shortlink"),y=S.querySelector(".screen-reader-shortcut"),w=/Mobile\/.+Safari/.test(n.userAgent)?"touchstart":"click",d(S,"nojs"),"ontouchstart"in t&&(e.body.addEventListener(w,(function(e){h(e.target,"li.menupop")||f(l)})),S.addEventListener("touchstart",(function e(){for(var t=0;t<l.length;t++)l[t].addEventListener("click",a.bind(null,l));S.removeEventListener("touchstart",e)}))),S.addEventListener("click",p);for(L=0;L<l.length;L++)t.hoverintent(l[L],u.bind(null,l[L],"hover"),d.bind(null,l[L],"hover")).options({timeout:180}),l[L].addEventListener("keydown",o);for(L=0;L<m.length;L++)m[L].addEventListener("keydown",r);g&&((E=e.getElementById("adminbar-search")).addEventListener("focus",(function(){u(g,"adminbar-focused")})),E.addEventListener("blur",(function(){d(g,"adminbar-focused")}))),y&&y.addEventListener("keydown",i),b&&b.addEventListener("click",s),t.location.hash&&t.scrollBy(0,-32),v&&v.addEventListener("click",c)}}))}(document,window,navigator)},635:function(e,t,n){var r=n(753),o=n(672);void 0===o.wp&&(o.wp=r),e.exports=r},672:function(e,t,n){"use strict";e.exports=function(){if("object"==typeof globalThis)return globalThis;var e;try{e=this||new Function("return this")()}catch(e){if("object"==typeof window)return window;if("object"==typeof self)return self;if(void 0!==n.g)return n.g}return e}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n(635)}();