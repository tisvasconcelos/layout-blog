window.Modernizr=function(n,e,x){function s(a,b){return typeof a===b}function y(a,b){for(var c in a){var f=a[c];if(!~(""+f).indexOf("-")&&p[f]!==x)return"pfx"==b?f:!0}return!1}function q(a,b,c){var f=a.charAt(0).toUpperCase()+a.slice(1),d=(a+" "+E.join(f+" ")+f).split(" ");if(s(b,"string")||s(b,"undefined"))b=y(d,b);else{d=(a+" "+z.join(f+" ")+f).split(" ");a:{a=d;for(var e in a)if(f=b[a[e]],f!==x){b=!1===c?a[e]:s(f,"function")?f.bind(c||b):f;break a}b=!1}}return b}function M(){h.input=function(a){for(var b=
0,c=a.length;b<c;b++)A[a[b]]=a[b]in g;return A.list&&(A.list=!!e.createElement("datalist")&&!!n.HTMLDataListElement),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));h.inputtypes=function(a){for(var b=0,c,f,d,h=a.length;b<h;b++)g.setAttribute("type",f=a[b]),(c="text"!==g.type)&&(g.value=w,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&g.style.WebkitAppearance!==x?(u.appendChild(g),d=e.defaultView,c=d.getComputedStyle&&"textfield"!==
d.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,u.removeChild(g)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?c=g.checkValidity&&!1===g.checkValidity():c=g.value!=w)),B[a[b]]=!!c;return B}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var h={},u=e.documentElement,d=e.createElement("modernizr"),p=d.style,g=e.createElement("input"),w=":)",v=" -webkit- -moz- -o- -ms- ".split(" "),E=["Webkit","Moz","O","ms"],z=["webkit","moz",
"o","ms"],d={},B={},A={},F=[],G=F.slice,C,H=function(a,b,c,f){var d,h,g,N,k=e.createElement("div"),r=e.body,l=r||e.createElement("body");if(parseInt(c,10))for(;c--;)g=e.createElement("div"),g.id=f?f[c]:"modernizr"+(c+1),k.appendChild(g);return d=['&#173;<style id="smodernizr">',a,"</style>"].join(""),k.id="modernizr",(r?k:l).innerHTML+=d,l.appendChild(k),r||(l.style.background="",l.style.overflow="hidden",N=u.style.overflow,u.style.overflow="hidden",u.appendChild(l)),h=b(k,a),r?k.parentNode.removeChild(k):
(l.parentNode.removeChild(l),u.style.overflow=N),!!h},J=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(b,c){c=c||e.createElement(a[b]||"div");b="on"+b;var f=b in c;return f||(c.setAttribute||(c=e.createElement("div")),c.setAttribute&&c.removeAttribute&&(c.setAttribute(b,""),f=s(c[b],"function"),s(c[b],"undefined")||(c[b]=x),c.removeAttribute(b))),f}}(),D={}.hasOwnProperty,t;!s(D,"undefined")&&!s(D.call,"undefined")?t=
function(a,b){return D.call(a,b)}:t=function(a,b){return b in a&&s(a.constructor.prototype[b],"undefined")};Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),f=function(){if(this instanceof f){var d=function(){};d.prototype=b.prototype;var d=new d,e=b.apply(d,c.concat(G.call(arguments)));return Object(e)===e?e:d}return b.apply(a,c.concat(G.call(arguments)))};return f});d.flexbox=function(){return q("flexWrap")};
d.flexboxlegacy=function(){return q("boxDirection")};d.canvas=function(){var a=e.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};d.canvastext=function(){return!!h.canvas&&!!s(e.createElement("canvas").getContext("2d").fillText,"function")};d.postmessage=function(){return!!n.postMessage};d.websqldatabase=function(){return!!n.openDatabase};d.indexedDB=function(){return!!q("indexedDB",n)};d.hashchange=function(){return J("hashchange",n)&&(e.documentMode===x||7<e.documentMode)};d.history=
function(){return!!n.history&&!!history.pushState};d.draganddrop=function(){var a=e.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a};d.websockets=function(){return"WebSocket"in n||"MozWebSocket"in n};d.rgba=function(){p.cssText="background-color:rgba(150,255,150,.5)";return!!~(""+p.backgroundColor).indexOf("rgba")};d.hsla=function(){p.cssText="background-color:hsla(120,40%,100%,.5)";return!!~(""+p.backgroundColor).indexOf("rgba")||!!~(""+p.backgroundColor).indexOf("hsla")};
d.multiplebgs=function(){p.cssText="background:url(https://),url(https://),red url(https://)";return/(url\s*\(.*?){3}/.test(p.background)};d.backgroundsize=function(){return q("backgroundSize")};d.borderimage=function(){return q("borderImage")};d.borderradius=function(){return q("borderRadius")};d.boxshadow=function(){return q("boxShadow")};d.textshadow=function(){return""===e.createElement("div").style.textShadow};d.opacity=function(){var a=v.join("opacity:.55;")+"";p.cssText=a;return/^0.55$/.test(p.opacity)};
d.cssanimations=function(){return q("animationName")};d.csscolumns=function(){return q("columnCount")};d.cssgradients=function(){var a=("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:"+v.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);p.cssText=a;return!!~(""+p.backgroundImage).indexOf("gradient")};d.cssreflections=function(){return q("boxReflect")};d.csstransforms=function(){return!!q("transform")};d.csstransforms3d=
function(){var a=!!q("perspective");return a&&"webkitPerspective"in u.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a};d.csstransitions=function(){return q("transition")};d.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(b,c){var f=e.getElementById("smodernizr"),f=(f=f.sheet||f.styleSheet)?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:
f.cssText||"":"";a=/src/i.test(f)&&0===f.indexOf(c.split(" ")[0])}),a};d.generatedcontent=function(){var a;return H(['#modernizr{font:0/0 a}#modernizr:after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=3<=b.offsetHeight}),a};d.video=function(){var a=e.createElement("video"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),b.webm=
a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(c){}return b};d.audio=function(){var a=e.createElement("audio"),b=!1;try{if(b=!!a.canPlayType)b=new Boolean(b),b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),b.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),b.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),b.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(c){}return b};d.localstorage=function(){try{return localStorage.setItem("modernizr",
"modernizr"),localStorage.removeItem("modernizr"),!0}catch(a){return!1}};d.sessionstorage=function(){try{return sessionStorage.setItem("modernizr","modernizr"),sessionStorage.removeItem("modernizr"),!0}catch(a){return!1}};d.webworkers=function(){return!!n.Worker};d.applicationcache=function(){return!!n.applicationCache};for(var I in d)t(d,I)&&(C=I.toLowerCase(),h[C]=d[I](),F.push((h[C]?"":"no-")+C));h.input||M();h.addTest=function(a,b){if("object"==typeof a)for(var c in a)t(a,c)&&h.addTest(c,a[c]);
else{a=a.toLowerCase();if(h[a]!==x)return h;b="function"==typeof b?b():b;u.className+=" "+(b?"":"no-")+a;h[a]=b}return h};p.cssText="";return d=g=null,function(a,b){function c(){var c=K.elements;return"string"==typeof c?c.split(" "):c}function f(c){var b=n[c[L]];return b||(b={},q++,c[L]=q,n[q]=b),b}function d(c,a,l){a||(a=b);if(m)return a.createElement(c);l||(l=f(a));var e;return l.cache[c]?e=l.cache[c].cloneNode():r.test(c)?e=(l.cache[c]=l.createElem(c)).cloneNode():e=l.createElem(c),e.canHaveChildren&&
!k.test(c)?l.frag.appendChild(e):e}function e(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag());b.createElement=function(c){return K.shivMethods?d(c,b,a):a.createElem(c)};b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(c){return a.createElem(c),a.frag.createElement(c),'c("'+c+'")'})+");return n}")(K,a.frag)}function h(c){c||(c=b);var a=
f(c);if(K.shivCSS&&!l&&!a.hasCSS){var d,r=c;d=r.createElement("p");r=r.getElementsByTagName("head")[0]||r.documentElement;d=(d.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",r.insertBefore(d.lastChild,r.firstChild));a.hasCSS=!!d}return m||e(c,a),c}var g=a.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
l,L="_html5shiv",q=0,n={},m;(function(){try{var c=b.createElement("a");c.innerHTML="<xyz></xyz>";l="hidden"in c;var a;if(!(a=1==c.childNodes.length)){b.createElement("a");var f=b.createDocumentFragment();a="undefined"==typeof f.cloneNode||"undefined"==typeof f.createDocumentFragment||"undefined"==typeof f.createElement}m=a}catch(d){m=l=!0}})();var K={elements:g.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
shivCSS:!1!==g.shivCSS,supportsUnknownElements:m,shivMethods:!1!==g.shivMethods,type:"default",shivDocument:h,createElement:d,createDocumentFragment:function(a,d){a||(a=b);if(m)return a.createDocumentFragment();d=d||f(a);for(var l=d.frag.cloneNode(),e=0,r=c(),h=r.length;e<h;e++)l.createElement(r[e]);return l}};a.html5=K;h(b)}(this,e),h._version="2.6.2",h._prefixes=v,h._domPrefixes=z,h._cssomPrefixes=E,h.hasEvent=J,h.testProp=function(a){return y([a])},h.testAllProps=q,h.testStyles=H,u.className=u.className.replace(/(^|\s)no-js(\s|$)/,
"$1$2")+(" js "+F.join(" ")),h}(this,this.document);
(function(n,e,x){function s(c){return"[object Function]"==E.call(c)}function y(c){return"string"==typeof c}function q(){}function M(c){return!c||"loaded"==c||"complete"==c||"uninitialized"==c}function h(){var c=z.shift();B=1;c?c.t?w(function(){("c"==c.t?b.injectCss:b.injectJs)(c.s,0,c.a,c.x,c.e,1)},0):(c(),h()):B=0}function u(c,a,d,g,q,n,k){function r(b){if(!L&&M(l.readyState)&&(s.r=L=1,!B&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=c&&w(function(){G.removeChild(l)},50);for(var d in t[a])t[a].hasOwnProperty(d)&&
t[a][d].onload()}}k=k||b.errorTimeout;var l=e.createElement(c),L=0,p=0,s={t:d,s:a,e:q,a:n,x:k};1===t[a]&&(p=1,t[a]=[]);"object"==c?l.data=a:(l.src=a,l.type=c);l.width=l.height="0";l.onerror=l.onload=l.onreadystatechange=function(){r.call(this,p)};z.splice(g,0,s);"img"!=c&&(p||2===t[a]?(G.insertBefore(l,F?null:v),w(r,k)):t[a].push(l))}function d(c,a,b,d,e){return B=0,a=a||"j",y(c)?u("c"==a?H:C,c,a,this.i++,b,d,e):(z.splice(this.i++,0,c),1==z.length&&h()),this}function p(){var a=b;return a.loader={load:d,
i:0},a}var g=e.documentElement,w=n.setTimeout,v=e.getElementsByTagName("script")[0],E={}.toString,z=[],B=0,A="MozAppearance"in g.style,F=A&&!!e.createRange().compareNode,G=F?g:v.parentNode,g=n.opera&&"[object Opera]"==E.call(n.opera),g=!!e.attachEvent&&!g,C=A?"object":g?"script":"img",H=g?"script":C,J=Array.isArray||function(a){return"[object Array]"==E.call(a)},D=[],t={},I={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},a,b;b=function(a){function d(a){a=a.split("!");var c=D.length,b=
a.pop(),e=a.length,b={url:b,origUrl:b,prefixes:a},f,m,h;for(m=0;m<e;m++)h=a[m].split("="),(f=I[h.shift()])&&(b=f(b,h));for(m=0;m<c;m++)b=D[m](b);return b}function e(a,b,c,h,g){var m=d(a),k=m.autoCallback;m.url.split(".").pop().split("?").shift();m.bypass||(b&&(b=s(b)?b:b[a]||b[h]||b[a.split("/").pop().split("?")[0]]),m.instead?m.instead(a,b,c,h,g):(t[m.url]?m.noexec=!0:t[m.url]=1,c.load(m.url,m.forceCSS||!m.forceJS&&"css"==m.url.split(".").pop().split("?").shift()?"c":x,m.noexec,m.attrs,m.timeout),
(s(b)||s(k))&&c.load(function(){p();b&&b(m.origUrl,g,h);k&&k(m.origUrl,g,h);t[m.url]=2})))}function h(a,b){function c(a,f){if(a)if(y(a))f||(m=function(){var a=[].slice.call(arguments);g.apply(this,a);k()}),e(a,m,b,0,d);else{if(Object(a)===a)for(p in n=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(p)&&(!f&&!--n&&(s(m)?m=function(){var a=[].slice.call(arguments);g.apply(this,a);k()}:m[p]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,
b);k()}}(g[p])),e(a[p],m,b,p,d))}else!f&&k()}var d=!!a.test,f=a.load||a.both,m=a.callback||q,g=m,k=a.complete||q,n,p;c(d?a.yep:a.nope,!!f);f&&c(f)}var g,n,k=this.yepnope.loader;if(y(a))e(a,0,k,0);else if(J(a))for(g=0;g<a.length;g++)n=a[g],y(n)?e(n,0,k,0):J(n)?b(n):Object(n)===n&&h(n,k);else Object(a)===a&&h(a,k)};b.addPrefix=function(a,b){I[a]=b};b.addFilter=function(a){D.push(a)};b.errorTimeout=1E4;null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",
a=function(){e.removeEventListener("DOMContentLoaded",a,0);e.readyState="complete"},0));n.yepnope=p();n.yepnope.executeStack=h;n.yepnope.injectJs=function(a,d,g,n,p,s){var k=e.createElement("script"),r,l;n=n||b.errorTimeout;k.src=a;for(l in g)k.setAttribute(l,g[l]);d=s?h:d||q;k.onreadystatechange=k.onload=function(){!r&&M(k.readyState)&&(r=1,d(),k.onload=k.onreadystatechange=null)};w(function(){r||(r=1,d(1))},n);p?k.onload():v.parentNode.insertBefore(k,v)};n.yepnope.injectCss=function(a,b,d,g,n,p){g=
e.createElement("link");var k;b=p?h:b||q;g.href=a;g.rel="stylesheet";g.type="text/css";for(k in d)g.setAttribute(k,d[k]);n||(v.parentNode.insertBefore(g,v),w(b,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};