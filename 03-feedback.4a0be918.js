!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var o,r,u,f,a,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function h(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(O,t),s?h(e):f}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=p();if(w(e))return T(e);a=setTimeout(O,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function T(e){return a=void 0,g&&o?h(e):(o=r=void 0,f)}function S(){var e=p(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===a)return j(l);if(d)return a=setTimeout(O,t),h(l)}return void 0===a&&(a=setTimeout(O,t)),f}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=r=a=void 0},S.flush=function(){return void 0===a?f:T(p())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const h="feedback-form-state",j={},w=document.querySelector("form");w.addEventListener("submit",(function(e){e.preventDefault(),j.email=w.elements.email.value,j.message=w.elements.message.value,console.log(j),w.reset(),localStorage.removeItem(h)})),w.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(j))}),500)),function(){const e=localStorage.getItem(h);if(e){const t=JSON.parse(e);for(const e in t)t.hasOwnProperty(e)&&(w.elements[e].value=t[e],j[e]=t[e])}}()}();
//# sourceMappingURL=03-feedback.4a0be918.js.map