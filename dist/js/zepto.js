!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(c){var e,f,g,h,F,G,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z,A,B,C,D,E,H,I,J,Uj,d=(j=(i=[]).concat,k=i.filter,l=i.slice,m=c.document,n={},o={},p={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},q=/^\s*<(\w+|!)[^>]*>/,r=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,s=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,t=/^(?:body|html)$/i,u=/([A-Z])/g,v=["val","css","html","text","data","width","height","offset"],x=m.createElement("table"),y=m.createElement("tr"),z={tr:m.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:y,th:y,"*":m.createElement("div")},A=/complete|loaded|interactive/,B=/^[\w-]*$/,D=(C={}).toString,E={},H=m.createElement("div"),I={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array},E.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=H).appendChild(t),i=~E.qsa(r,e).indexOf(t),o&&H.removeChild(t),i},F=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},G=function(n){return k.call(n,function(t,e){return n.indexOf(t)==e})},E.fragment=function(t,n,i){var o,a,c;return r.test(t)&&(o=g(m.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(s,"<$1></$2>")),n===e&&(n=q.test(t)&&RegExp.$1),n in z||(n="*"),(c=z[n]).innerHTML=""+t,o=g.each(l.call(c.childNodes),function(){c.removeChild(this)})),P(i)&&(a=g(o),g.each(i,function(t,e){-1<v.indexOf(t)?a[t](e):a.attr(t,e)})),o},E.Z=function(t,e){return new Y(t,e)},E.isZ=function(t){return t instanceof E.Z},E.init=function(t,n){var i;if(!t)return E.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&q.test(t))i=E.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return g(n).find(t);i=E.qsa(m,t)}else{if(L(t))return g(m).ready(t);if(E.isZ(t))return t;if(J(t))i=function(t){return k.call(t,function(t){return null!=t})}(t);else if(O(t))i=[t],t=null;else if(q.test(t))i=E.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return g(n).find(t);i=E.qsa(m,t)}}return E.Z(i,t)},(g=function(t,e){return E.init(t,e)}).extend=function(n){var i,t=l.call(arguments,1);return"boolean"==typeof n&&(i=n,n=t.shift()),t.forEach(function(t){!function t(n,i,r){for(f in i)r&&(P(i[f])||J(i[f]))?(P(i[f])&&!P(n[f])&&(n[f]={}),J(i[f])&&!J(n[f])&&(n[f]=[]),t(n[f],i[f],r)):i[f]!==e&&(n[f]=i[f])}(n,t,i)}),n},E.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=B.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:l.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},g.contains=m.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e=e&&e.parentNode;)if(e===t)return!0;return!1},g.type=K,g.isFunction=L,g.isWindow=M,g.isArray=J,g.isPlainObject=P,g.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},g.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},g.inArray=function(t,e,n){return i.indexOf.call(e,t,n)},g.camelCase=F,g.trim=function(t){return null==t?"":String.prototype.trim.call(t)},g.uuid=0,g.support={},g.expr={},g.noop=function(){},g.map=function(t,e){var n,i,r,o=[];if(Q(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&o.push(n);else for(r in t)null!=(n=e(t[r],r))&&o.push(n);return function(t){return 0<t.length?g.fn.concat.apply([],t):t}(o)},g.each=function(t,e){var n,i;if(Q(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},g.grep=function(t,e){return k.call(t,e)},c.JSON&&(g.parseJSON=JSON.parse),g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){C["[object "+e+"]"]=e.toLowerCase()}),g.fn={constructor:E.Z,length:0,forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,splice:i.splice,indexOf:i.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=E.isZ(e)?e.toArray():e;return j.apply(E.isZ(this)?this.toArray():this,n)},map:function(n){return g(g.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return g(l.apply(this,arguments))},ready:function(t){return A.test(m.readyState)&&m.body?t(g):m.addEventListener("DOMContentLoaded",function(){t(g)},!1),this},get:function(t){return t===e?l.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return i.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return L(e)?this.not(this.not(e)):g(k.call(this,function(t){return E.matches(t,e)}))},add:function(t,e){return g(G(this.concat(g(t,e))))},is:function(t){return 0<this.length&&E.matches(this[0],t)},not:function(n){var i=[];if(L(n)&&n.call!==e)this.each(function(t){n.call(this,t)||i.push(this)});else{var r="string"==typeof n?this.filter(n):Q(n)&&L(n.item)?l.call(n):g(n);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return g(i)},has:function(t){return this.filter(function(){return O(t)?g.contains(this,t):g(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!O(t)?t:g(t)},last:function(){var t=this[this.length-1];return t&&!O(t)?t:g(t)},find:function(t){var n=this;return t?"object"==typeof t?g(t).filter(function(){var e=this;return i.some.call(n,function(t){return g.contains(t,e)})}):1==this.length?g(E.qsa(this[0],t)):this.map(function(){return E.qsa(this,t)}):g()},closest:function(n,i){var r=[],o="object"==typeof n&&g(n);return this.each(function(t,e){for(;e&&!(o?0<=o.indexOf(e):E.matches(e,n));)e=e!==i&&!N(e)&&e.parentNode;e&&r.indexOf(e)<0&&r.push(e)}),g(r)},parents:function(t){for(var e=[],n=this;0<n.length;)n=g.map(n,function(t){if((t=t.parentNode)&&!N(t)&&e.indexOf(t)<0)return e.push(t),t});return $(e,t)},parent:function(t){return $(G(this.pluck("parentNode")),t)},children:function(t){return $(this.map(function(){return X(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||l.call(this.childNodes)})},siblings:function(t){return $(this.map(function(t,e){return k.call(X(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return g.map(this,function(t){return t[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=function(t){var e,i;return n[t]||(e=m.createElement(t),m.body.appendChild(e),i=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==i&&(i="block"),n[t]=i),n[t]}(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=L(e);if(this[0]&&!n)var i=g(e).get(0),r=i.parentNode||1<this.length;return this.each(function(t){g(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){var e;for(g(this[0]).before(t=g(t));(e=t.children()).length;)t=e.first();g(t).append(this)}return this},wrapInner:function(r){var o=L(r);return this.each(function(t){var e=g(this),n=e.contents(),i=o?r.call(this,t):r;n.length?n.wrapAll(i):e.append(i)})},unwrap:function(){return this.parent().each(function(){g(this).replaceWith(g(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(n){return this.each(function(){var t=g(this);(n===e?"none"==t.css("display"):n)?t.show():t.hide()})},prev:function(t){return g(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return g(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;g(this).empty().append(_(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=_(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(n,i){var t;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(O(n))for(f in n)aa(this,f,n[f]);else aa(this,n,_(this,i,t,this.getAttribute(n)))}):0 in this&&1==this[0].nodeType&&null!=(t=this[0].getAttribute(n))?t:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){aa(this,t)},this)})},prop:function(e,n){return e=I[e]||e,1 in arguments?this.each(function(t){this[e]=_(this,n,t,this[e])}):this[0]&&this[0][e]},removeProp:function(t){return t=I[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var i="data-"+t.replace(u,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?ca(r):e},val:function(e){return 0 in arguments?(null==e&&(e=""),this.each(function(t){this.value=_(this,e,t,this.value)})):this[0]&&(this[0].multiple?g(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=g(this),n=_(this,o,t,e.offset()),i=e.offsetParent().offset(),r={top:n.top-i.top,left:n.left-i.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(!this.length)return null;if(m.documentElement!==this[0]&&!g.contains(m.documentElement,this[0]))return{top:0,left:0};var t=this[0].getBoundingClientRect();return{left:t.left+c.pageXOffset,top:t.top+c.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n=this[0];if("string"==typeof t){if(!n)return;return n.style[F(t)]||getComputedStyle(n,"").getPropertyValue(t)}if(J(t)){if(!n)return;var i={},r=getComputedStyle(n,"");return g.each(t,function(t,e){i[e]=n.style[F(e)]||r.getPropertyValue(e)}),i}}var o="";if("string"==K(t))e||0===e?o=T(t)+":"+V(t,e):this.each(function(){this.style.removeProperty(T(t))});else for(f in t)t[f]||0===t[f]?o+=T(f)+":"+V(f,t[f])+";":this.each(function(){this.style.removeProperty(T(f))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(g(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&i.some.call(this,function(t){return this.test(ba(t))},U(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){h=[];var e=ba(this);_(this,n,t,e).split(/\s+/g).forEach(function(t){g(this).hasClass(t)||h.push(t)},this),h.length&&ba(this,e+(e?" ":"")+h.join(" "))}}):this},removeClass:function(n){return this.each(function(t){if("className"in this){if(n===e)return ba(this,"");h=ba(this),_(this,n,t,h).split(/\s+/g).forEach(function(t){h=h.replace(U(t)," ")}),ba(this,h.trim())}})},toggleClass:function(i,r){return i?this.each(function(t){var n=g(this);_(this,i,t,ba(this)).split(/\s+/g).forEach(function(t){(r===e?!n.hasClass(t):r)?n.addClass(t):n.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var e=this[0],n=this.offsetParent(),i=this.offset(),r=t.test(n[0].nodeName)?{top:0,left:0}:n.offset();return i.top-=parseFloat(g(e).css("margin-top"))||0,i.left-=parseFloat(g(e).css("margin-left"))||0,r.top+=parseFloat(g(n[0]).css("border-top-width"))||0,r.left+=parseFloat(g(n[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||m.body;e&&!t.test(e.nodeName)&&"static"==g(e).css("position");)e=e.offsetParent;return e})}},g.fn.detach=g.fn.remove,["width","height"].forEach(function(r){var o=r.replace(/./,function(t){return t[0].toUpperCase()});g.fn[r]=function(n){var t,i=this[0];return n===e?M(i)?i["inner"+o]:N(i)?i.documentElement["scroll"+o]:(t=this.offset())&&t[r]:this.each(function(t){(i=g(this)).css(r,_(this,n,t,i[r]()))})}}),["after","prepend","before","append"].forEach(function(n,s){var u=s%2;g.fn[n]=function(){var i,r,o=g.map(arguments,function(t){var n=[];return"array"==(i=K(t))?(t.forEach(function(t){return t.nodeType!==e?n.push(t):g.zepto.isZ(t)?n=n.concat(t.get()):void(n=n.concat(E.fragment(t)))}),n):"object"==i||null==t?t:E.fragment(t)}),a=1<this.length;return o.length<1?this:this.each(function(t,e){r=u?e:e.parentNode,e=0==s?e.nextSibling:1==s?e.firstChild:2==s?e:null;var n=g.contains(m.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return g(t).remove();r.insertBefore(t,e),n&&function t(e,n){n(e);for(var i=0,r=e.childNodes.length;i<r;i++)t(e.childNodes[i],n)}(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:c;e.eval.call(e,t.innerHTML)}})})})},g.fn[u?n+"To":"insert"+(s?"Before":"After")]=function(t){return g(t)[n](this),this}}),E.Z.prototype=Y.prototype=g.fn,E.uniq=G,E.deserializeValue=ca,g.zepto=E,g);function K(t){return null==t?String(t):C[D.call(t)]||"object"}function L(t){return"function"==K(t)}function M(t){return null!=t&&t==t.window}function N(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function O(t){return"object"==K(t)}function P(t){return O(t)&&!M(t)&&Object.getPrototypeOf(t)==Object.prototype}function Q(t){var e=!!t&&"length"in t&&t.length,n=g.type(t);return"function"!=n&&!M(t)&&("array"==n||0===e||"number"==typeof e&&0<e&&e-1 in t)}function T(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function U(t){return t in o?o[t]:o[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function V(t,e){return"number"!=typeof e||p[T(t)]?e:e+"px"}function X(t){return"children"in t?l.call(t.children):g.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function Y(t,e){var n,i=t?t.length:0;for(n=0;n<i;n++)this[n]=t[n];this.length=i,this.selector=e||""}function $(t,e){return null==e?g(t):g(t).filter(e)}function _(t,e,n,i){return L(e)?e.call(t,n,i):e}function aa(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function ba(t,n){var i=t.className||"",r=i&&i.baseVal!==e;if(n===e)return r?i.baseVal:i;r?i.baseVal=n:t.className=n}function ca(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?g.parseJSON(e):e):e}catch(t){return e}}return c.Zepto=d,void 0===c.$&&(c.$=d),function(l){function u(t){return"string"==typeof t}var f,e=1,h=Array.prototype.slice,p=l.isFunction,d={},o={},n="onfocusin"in c,i={focus:"focusin",blur:"focusout"},g={mouseenter:"mouseover",mouseleave:"mouseout"};function m(t){return t._zid||(t._zid=e++)}function a(t,e,n,i){if((e=v(e)).ns)var r=function(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}(e.ns);return(d[m(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||m(t.fn)===m(n))&&(!i||t.sel==i)})}function v(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function y(t,e){return t.del&&!n&&t.e in i||!!e}function j(t){return g[t]||n&&i[t]||t}function E(r,t,e,o,a,s,c){var n=m(r),u=d[n]||(d[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=v(t);n.fn=e,n.sel=a,n.e in g&&(e=function(t){var e=t.relatedTarget;if(!e||e!==this&&!l.contains(this,e))return n.fn.apply(this,arguments)});var i=(n.del=s)||e;n.proxy=function(t){if(!(t=$(t)).isImmediatePropagationStopped()){t.data=o;var e=i.apply(r,t._args==f?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=u.length,u.push(n),"addEventListener"in r&&r.addEventListener(j(n.e),n.proxy,y(n,c))})}function b(e,t,n,i,r){var o=m(e);(t||"").split(/\s/).forEach(function(t){a(e,t,n,i).forEach(function(t){delete d[o][t.i],"removeEventListener"in e&&e.removeEventListener(j(t.e),t.proxy,y(t,r))})})}o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:E,remove:b},l.proxy=function(t,e){var n=2 in arguments&&h.call(arguments,2);if(p(t)){function i(){return t.apply(e,n?n.concat(h.call(arguments)):arguments)}return i._zid=m(t),i}if(u(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var s=function(){return!0},x=function(){return!1},r=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function $(i,r){return!r&&i.isDefaultPrevented||(r=r||i,l.each(t,function(t,e){var n=r[t];i[t]=function(){return this[e]=s,n&&n.apply(r,arguments)},i[e]=x}),i.timeStamp||(i.timeStamp=Date.now()),(r.defaultPrevented!==f?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(i.isDefaultPrevented=s)),i}function T(t){var e,n={originalEvent:t};for(e in t)r.test(e)||t[e]===f||(n[e]=t[e]);return $(n,t)}l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,r,n,o,a){var s,c,i=this;return e&&!u(e)?(l.each(e,function(t,e){i.on(t,r,n,e,a)}),i):(u(r)||p(o)||!1===o||(o=n,n=r,r=f),o!==f&&!1!==n||(o=n,n=f),!1===o&&(o=x),i.each(function(t,i){a&&(s=function(t){return b(i,t.type,o),o.apply(this,arguments)}),r&&(c=function(t){var e,n=l(t.target).closest(r,i).get(0);if(n&&n!==i)return e=l.extend(T(t),{currentTarget:n,liveFired:i}),(s||o).apply(n,[e].concat(h.call(arguments,1)))}),E(i,e,o,n,r,c||s)}))},l.fn.off=function(t,n,e){var i=this;return t&&!u(t)?(l.each(t,function(t,e){i.off(t,n,e)}),i):(u(n)||p(e)||!1===e||(e=n,n=f),!1===e&&(e=x),i.each(function(){b(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=u(t)||l.isPlainObject(t)?l.Event(t):$(t))._args=e,this.each(function(){t.type in i&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,i){var r,o;return this.each(function(t,e){(r=T(u(n)?l.Event(n):n))._args=i,r.target=e,l.each(a(e,n.type||n),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){u(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),$(n)}}(d),function(Bh){var Eh,Fh,Ch=+new Date,Dh=c.document,Gh=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Hh=/^(?:text|application)\/javascript/i,Ih=/^(?:text|application)\/xml/i,Jh="application/json",Kh="text/html",Lh=/^\s*$/,Mh=Dh.createElement("a");function Oh(t,e,n,i){if(t.global)return function(t,e,n){var i=Bh.Event(e);return Bh(t).trigger(i,n),!i.isDefaultPrevented()}(e||Dh,n,i)}function Rh(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===Oh(e,n,"ajaxBeforeSend",[t,e]))return!1;Oh(e,n,"ajaxSend",[t,e])}function Sh(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),Oh(n,r,"ajaxSuccess",[e,n,t]),Uh(o,e,n)}function Th(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),Oh(i,o,"ajaxError",[n,i,t||e]),Uh(e,n,i)}function Uh(t,e,n){var i=n.context;n.complete.call(i,e,t),Oh(n,i,"ajaxComplete",[e,n]),function(t){t.global&&!--Bh.active&&Oh(t,null,"ajaxStop")}(n)}function Wh(){}function Yh(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function $h(t,e,n,i){return Bh.isFunction(e)&&(i=n,n=e,e=void 0),Bh.isFunction(n)||(i=n,n=void 0),{url:t,data:e,success:n,dataType:i}}Mh.href=c.location.href,Bh.active=0,Bh.ajaxJSONP=function(n,i){if(!("type"in n))return Bh.ajax(n);function t(t){Bh(s).triggerHandler("error",t||"abort")}var r,o,e=n.jsonpCallback,a=(Bh.isFunction(e)?e():e)||"Zepto"+Ch++,s=Dh.createElement("script"),u=c[a],l={abort:t};return i&&i.promise(l),Bh(s).on("load error",function(t,e){clearTimeout(o),Bh(s).off().remove(),"error"!=t.type&&r?Sh(r[0],l,n,i):Th(null,e||"error",l,n,i),c[a]=u,r&&Bh.isFunction(u)&&u(r[0]),u=r=void 0}),!1===Rh(l,n)?t("abort"):(c[a]=function(){r=arguments},s.src=n.url.replace(/\?(.+)=\?/,"?$1="+a),Dh.head.appendChild(s),0<n.timeout&&(o=setTimeout(function(){t("timeout")},n.timeout))),l},Bh.ajaxSettings={type:"GET",beforeSend:Wh,success:Wh,error:Wh,complete:Wh,context:null,global:!0,xhr:function(){return new c.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:Jh,xml:"application/xml, text/xml",html:Kh,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:Wh},Bh.ajax=function(Zi){var aj,bj,$i=Bh.extend({},Zi||{}),_i=Bh.Deferred&&Bh.Deferred();for(Eh in Bh.ajaxSettings)void 0===$i[Eh]&&($i[Eh]=Bh.ajaxSettings[Eh]);!function(t){t.global&&0==Bh.active++&&Oh(t,null,"ajaxStart")}($i),$i.crossDomain||((aj=Dh.createElement("a")).href=$i.url,aj.href=aj.href,$i.crossDomain=Mh.protocol+"//"+Mh.host!=aj.protocol+"//"+aj.host),$i.url||($i.url=c.location.toString()),-1<(bj=$i.url.indexOf("#"))&&($i.url=$i.url.slice(0,bj)),function(t){t.processData&&t.data&&"string"!=Bh.type(t.data)&&(t.data=Bh.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=Yh(t.url,t.data),t.data=void 0)}($i);var cj=$i.dataType,dj=/\?.+=\?/.test($i.url);if(dj&&(cj="jsonp"),!1!==$i.cache&&(Zi&&!0===Zi.cache||"script"!=cj&&"jsonp"!=cj)||($i.url=Yh($i.url,"_="+Date.now())),"jsonp"==cj)return dj||($i.url=Yh($i.url,$i.jsonp?$i.jsonp+"=?":!1===$i.jsonp?"":"callback=?")),Bh.ajaxJSONP($i,_i);function gj(t,e){fj[t.toLowerCase()]=[t,e]}var kj,ej=$i.accepts[cj],fj={},hj=/^([\w-]+:)\/\//.test($i.url)?RegExp.$1:c.location.protocol,ij=$i.xhr(),jj=ij.setRequestHeader;if(_i&&_i.promise(ij),$i.crossDomain||gj("X-Requested-With","XMLHttpRequest"),gj("Accept",ej||"*/*"),(ej=$i.mimeType||ej)&&(-1<ej.indexOf(",")&&(ej=ej.split(",",2)[0]),ij.overrideMimeType&&ij.overrideMimeType(ej)),($i.contentType||!1!==$i.contentType&&$i.data&&"GET"!=$i.type.toUpperCase())&&gj("Content-Type",$i.contentType||"application/x-www-form-urlencoded"),$i.headers)for(Fh in $i.headers)gj(Fh,$i.headers[Fh]);if(ij.setRequestHeader=gj,!(ij.onreadystatechange=function(){if(4==ij.readyState){ij.onreadystatechange=Wh,clearTimeout(kj);var oj,pj=!1;if(200<=ij.status&&ij.status<300||304==ij.status||0==ij.status&&"file:"==hj){if(cj=cj||function(t){return(t=t&&t.split(";",2)[0])&&(t==Kh?"html":t==Jh?"json":Hh.test(t)?"script":Ih.test(t)&&"xml")||"text"}($i.mimeType||ij.getResponseHeader("content-type")),"arraybuffer"==ij.responseType||"blob"==ij.responseType)oj=ij.response;else{oj=ij.responseText;try{oj=function(t,e,n){if(n.dataFilter==Wh)return t;var i=n.context;return n.dataFilter.call(i,t,e)}(oj,cj,$i),"script"==cj?eval(oj):"xml"==cj?oj=ij.responseXML:"json"==cj&&(oj=Lh.test(oj)?null:Bh.parseJSON(oj))}catch(t){pj=t}if(pj)return Th(pj,"parsererror",ij,$i,_i)}Sh(oj,ij,$i,_i)}else Th(ij.statusText||null,ij.status?"error":"abort",ij,$i,_i)}})===Rh(ij,$i))return ij.abort(),Th(null,"abort",ij,$i,_i),ij;var lj=!("async"in $i)||$i.async;if(ij.open($i.type,$i.url,lj,$i.username,$i.password),$i.xhrFields)for(Fh in $i.xhrFields)ij[Fh]=$i.xhrFields[Fh];for(Fh in fj)jj.apply(ij,fj[Fh]);return 0<$i.timeout&&(kj=setTimeout(function(){ij.onreadystatechange=Wh,ij.abort(),Th(null,"timeout",ij,$i,_i)},$i.timeout)),ij.send($i.data?$i.data:null),ij},Bh.get=function(){return Bh.ajax($h.apply(null,arguments))},Bh.post=function(){var t=$h.apply(null,arguments);return t.type="POST",Bh.ajax(t)},Bh.getJSON=function(){var t=$h.apply(null,arguments);return t.dataType="json",Bh.ajax(t)},Bh.fn.load=function(t,e,n){if(!this.length)return this;var i,r=this,o=t.split(/\s/),a=$h(t,e,n),s=a.success;return 1<o.length&&(a.url=o[0],i=o[1]),a.success=function(t){r.html(i?Bh("<div>").html(t.replace(Gh,"")).find(i):t),s&&s.apply(r,arguments)},Bh.ajax(a),this};var _h=encodeURIComponent;Bh.param=function(t,e){var n=[];return n.add=function(t,e){Bh.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(_h(t)+"="+_h(e))},function n(i,t,r,o){var a,s=Bh.isArray(t),c=Bh.isPlainObject(t);Bh.each(t,function(t,e){a=Bh.type(e),o&&(t=r?o:o+"["+(c||"object"==a||"array"==a?t:"")+"]"),!o&&s?i.add(e.name,e.value):"array"==a||!r&&"object"==a?n(i,e,r,t):i.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(d),(Uj=d).fn.serializeArray=function(){var n,i,e=[],r=function(t){if(t.forEach)return t.forEach(r);e.push({name:n,value:t})};return this[0]&&Uj.each(this[0].elements,function(t,e){i=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||e.checked)&&r(Uj(e).val())}),e},Uj.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},Uj.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=Uj.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this},function(){try{getComputedStyle(void 0)}catch(t){var n=getComputedStyle;c.getComputedStyle=function(t,e){try{return n(t,e)}catch(t){return null}}}}(),d});