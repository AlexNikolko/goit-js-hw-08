!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,a=setTimeout(T,t),d?y(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=p();if(O(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function h(e){return a=void 0,m&&r?y(e):(r=i=void 0,f)}function w(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(T,t),y(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},w.flush=function(){return void 0===a?f:h(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")},O={},T="feedback-form-state",h=localStorage.getItem(T,JSON.stringify(O)),w=JSON.parse(h);j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),e.currentTarget.reset(),localStorage.removeItem(T)})),j.form.addEventListener("input",e(t)((function(){return localStorage.setItem(T,JSON.stringify(O))}),500)),j.form.addEventListener("input",(function(e){O[e.target.name]=e.target.value})),localStorage.getItem(T)&&(j.form.email.value=w.email,j.form.message.value=w.message)}();
//# sourceMappingURL=03-feedback.27255991.js.map
