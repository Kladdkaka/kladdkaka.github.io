"use strict";!function(){var n,o,a=new Set,t=document.createElement("link"),e=t.relList&&t.relList.supports&&t.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,i="instantAllowQueryString"in document.body.dataset,s="instantAllowExternalLinks"in document.body.dataset,c="instantWhitelist"in document.body.dataset,r="instantMousedownShortcut"in document.body.dataset,d=65,u=!1,l=!1,m=!1;function p(t){t.relatedTarget&&t.target.closest("a")==t.relatedTarget.closest("a")||n&&(clearTimeout(n),n=void 0)}function v(t){return!(!(t&&t.href&&(!c||"instant"in t.dataset)&&(s||t.origin==location.origin||"instant"in t.dataset)&&["http:","https:"].includes(t.protocol))||"http:"==t.protocol&&"https:"==location.protocol||!(i||!t.search||"instant"in t.dataset)||t.hash&&t.pathname+t.search==location.pathname+location.search||"noInstant"in t.dataset)}function f(t){var e;a.has(t)||((e=document.createElement("link")).rel="prefetch",e.href=t,document.head.appendChild(e),a.add(t))}"instantIntensity"in document.body.dataset&&("mousedown"==(t=document.body.dataset.instantIntensity).substr(0,"mousedown".length)?(u=!0,"mousedown-only"==t&&(l=!0)):"viewport"==t.substr(0,"viewport".length)?navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(m=!0):"viewport-all"==t&&(m=!0)):(t=parseInt(t),isNaN(t)||(d=t))),e&&(e={capture:!0,passive:!0},l||document.addEventListener("touchstart",function(t){o=performance.now();t=t.target.closest("a");v(t)&&f(t.href)},e),u?r||document.addEventListener("mousedown",function(t){t=t.target.closest("a");v(t)&&f(t.href)},e):document.addEventListener("mouseover",function(t){var e;performance.now()-o<1111||v(e=t.target.closest("a"))&&(e.addEventListener("mouseout",p,{passive:!0}),n=setTimeout(function(){f(e.href),n=void 0},d))},e),r&&document.addEventListener("mousedown",function(t){var e;performance.now()-o<1111||(e=t.target.closest("a"),1<t.which||t.metaKey||t.ctrlKey||e&&(e.addEventListener("click",function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0}),t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337}),e.dispatchEvent(t)))},e),m&&(window.requestIdleCallback?function(t){requestIdleCallback(t,{timeout:1500})}:function(t){t()})(function(){var e=new IntersectionObserver(function(t){t.forEach(function(t){t.isIntersecting&&(t=t.target,e.unobserve(t),f(t.href))})});document.querySelectorAll("a").forEach(function(t){v(t)&&e.observe(t)})})),console.log("Super fast 💨")}();