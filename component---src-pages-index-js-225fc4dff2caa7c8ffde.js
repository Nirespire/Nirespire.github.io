(self.webpackChunknirespire_github_io=self.webpackChunknirespire_github_io||[]).push([[678],{3549:function(e){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(0!==(t=t.filter((function(e){return null!=e}))).length)return 1===t.length?t[0]:t.reduce((function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}))}},2130:function(e,t,n){"use strict";e.exports=n(4877)},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,u,l,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(u=c.next()).done;)if(!a.has(u.value[0]))return!1;for(c=e.entries();!(u=c.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(u=c.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function c(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),c()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}},4877:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=l(n(7294)),o=l(n(5697)),a=l(n(2643)),s=l(n(3274)),u=n(279);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}u.nameShape.isRequired,o.default.bool,o.default.bool,o.default.bool,(0,u.transitionTimeout)("Appear"),(0,u.transitionTimeout)("Enter"),(0,u.transitionTimeout)("Leave");var p=function(e){function t(){var n,r;c(this,t);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=f(this,e.call.apply(e,[this].concat(a))),r._wrapChild=function(e){return i.default.createElement(s.default,{name:r.props.transitionName,appear:r.props.transitionAppear,enter:r.props.transitionEnter,leave:r.props.transitionLeave,appearTimeout:r.props.transitionAppearTimeout,enterTimeout:r.props.transitionEnterTimeout,leaveTimeout:r.props.transitionLeaveTimeout},e)},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return i.default.createElement(a.default,r({},this.props,{childFactory:this._wrapChild}))},t}(i.default.Component);p.displayName="CSSTransitionGroup",p.propTypes={},p.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0},t.default=p,e.exports=t.default},3274:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=p(n(8141)),o=p(n(602)),a=p(n(5177)),s=n(702),u=p(n(7294)),l=p(n(5697)),c=n(3935),f=n(279);function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=[];s.transitionEnd&&h.push(s.transitionEnd),s.animationEnd&&h.push(s.animationEnd);l.default.node,f.nameShape.isRequired,l.default.bool,l.default.bool,l.default.bool,l.default.number,l.default.number,l.default.number;var y=function(e){function t(){var n,r;d(this,t);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return n=r=m(this,e.call.apply(e,[this].concat(o))),r.componentWillAppear=function(e){r.props.appear?r.transition("appear",e,r.props.appearTimeout):e()},r.componentWillEnter=function(e){r.props.enter?r.transition("enter",e,r.props.enterTimeout):e()},r.componentWillLeave=function(e){r.props.leave?r.transition("leave",e,r.props.leaveTimeout):e()},m(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach((function(e){clearTimeout(e)})),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var r=(0,c.findDOMNode)(this);if(r){var a=this.props.name[e]||this.props.name+"-"+e,u=this.props.name[e+"Active"]||a+"-active",l=null,f=void 0;(0,i.default)(r,a),this.queueClassAndNode(u,r);var p=function(e){e&&e.target!==r||(clearTimeout(l),f&&f(),(0,o.default)(r,a),(0,o.default)(r,u),f&&f(),t&&t())};n?(l=setTimeout(p,n),this.transitionTimeouts.push(l)):s.transitionEnd&&(f=function(e,t){return h.length?h.forEach((function(n){return e.addEventListener(n,t,!1)})):setTimeout(t,0),function(){h.length&&h.forEach((function(n){return e.removeEventListener(n,t,!1)}))}}(r,p))}else t&&t()},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,a.default)((function(){return n.flushClassNameAndNodeQueue()})))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach((function(e){e.node.scrollTop,(0,i.default)(e.node,e.className)})),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=r({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,u.default.cloneElement(u.default.Children.only(this.props.children),e)},t}(u.default.Component);y.displayName="CSSTransitionGroupChild",y.propTypes={},t.default=y,e.exports=t.default},2643:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=u(n(3549)),o=u(n(7294)),a=u(n(5697)),s=(u(n(670)),n(1777));function u(e){return e&&e.__esModule?e:{default:e}}a.default.any,a.default.func,a.default.node;var l=function(e){function t(n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,i));return o.performAppear=function(e,t){o.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(o._handleDoneAppearing.bind(o,e,t)):o._handleDoneAppearing(e,t)},o._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete o.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(o.props.children);n&&n.hasOwnProperty(e)||o.performLeave(e,t)},o.performEnter=function(e,t){o.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(o._handleDoneEntering.bind(o,e,t)):o._handleDoneEntering(e,t)},o._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete o.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(o.props.children);n&&n.hasOwnProperty(e)||o.performLeave(e,t)},o.performLeave=function(e,t){o.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(o._handleDoneLeaving.bind(o,e,t)):o._handleDoneLeaving(e,t)},o._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete o.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(o.props.children);n&&n.hasOwnProperty(e)?o.keysToEnter.push(e):o.setState((function(t){var n=r({},t.children);return delete n[e],{children:n}}))},o.childRefs=Object.create(null),o.state={children:(0,s.getChildMapping)(n.children)},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,s.getChildMapping)(e.children),n=this.state.children;for(var r in this.setState({children:(0,s.mergeChildMappings)(n,t)}),t){var i=n&&n.hasOwnProperty(r);!t[r]||i||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(var o in n){var a=t&&t.hasOwnProperty(o);!n[o]||a||this.currentlyTransitioningKeys[o]||this.keysToLeave.push(o)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach((function(t){return e.performEnter(t,e.childRefs[t])}));var n=this.keysToLeave;this.keysToLeave=[],n.forEach((function(t){return e.performLeave(t,e.childRefs[t])}))},t.prototype.render=function(){var e=this,t=[],n=function(n){var r=e.state.children[n];if(r){var a="string"!=typeof r.ref,s=e.props.childFactory(r),u=function(t){e.childRefs[n]=t};s===r&&a&&(u=(0,i.default)(r.ref,u)),t.push(o.default.cloneElement(s,{key:n,ref:u}))}};for(var a in this.state.children)n(a);var s=r({},this.props);return delete s.transitionLeave,delete s.transitionName,delete s.transitionAppear,delete s.transitionEnter,delete s.childFactory,delete s.transitionLeaveTimeout,delete s.transitionEnterTimeout,delete s.transitionAppearTimeout,delete s.component,o.default.createElement(this.props.component,s,t)},t}(o.default.Component);l.displayName="TransitionGroup",l.propTypes={},l.defaultProps={component:"span",childFactory:function(e){return e}},t.default=l,e.exports=t.default},1777:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=function(e){if(!e)return e;var t={};return r.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=e})),t},t.mergeChildMappings=function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},i=[];for(var o in e)t.hasOwnProperty(o)?i.length&&(r[o]=i,i=[]):i.push(o);var a=void 0,s={};for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var l=r[u][a];s[r[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<i.length;a++)s[i[a]]=n(i[a]);return s};var r=n(7294)},279:function(e,t,n){"use strict";t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=function(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}};i(n(7294));var r=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}t.nameShape=r.default.oneOfType([r.default.string,r.default.shape({enter:r.default.string,leave:r.default.string,active:r.default.string}),r.default.shape({enter:r.default.string,enterActive:r.default.string,leave:r.default.string,leaveActive:r.default.string,appear:r.default.string,appearActive:r.default.string})])},8141:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,i.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var i=r(n(404));e.exports=t.default},404:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},602:function(e){"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}},702:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var i,o,a,s,u,l,c,f,p,d,m,h=r(n(139)),y="transform";if(t.transform=y,t.animationEnd=a,t.transitionEnd=o,t.transitionDelay=c,t.transitionTiming=l,t.transitionDuration=u,t.transitionProperty=s,t.animationDelay=m,t.animationTiming=d,t.animationDuration=p,t.animationName=f,h.default){var v=function(){for(var e,t,n=document.createElement("div").style,r={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},i=Object.keys(r),o="",a=0;a<i.length;a++){var s=i[a];if(s+"TransitionProperty"in n){o="-"+s.toLowerCase(),e=r[s]("TransitionEnd"),t=r[s]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:o}}();i=v.prefix,t.transitionEnd=o=v.transitionEnd,t.animationEnd=a=v.animationEnd,t.transform=y=i+"-"+y,t.transitionProperty=s=i+"-transition-property",t.transitionDuration=u=i+"-transition-duration",t.transitionDelay=c=i+"-transition-delay",t.transitionTiming=l=i+"-transition-timing-function",t.animationName=f=i+"-animation-name",t.animationDuration=p=i+"-animation-duration",t.animationTiming=d=i+"-animation-delay",t.animationDelay=m=i+"-animation-timing-function"}var b={transform:y,end:o,property:s,timing:l,delay:c,duration:u};t.default=b},139:function(e,t){"use strict";t.__esModule=!0,t.default=void 0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=n,e.exports=t.default},5177:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var i,o=r(n(139)),a="clearTimeout",s=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-l)),r=setTimeout(e,n);return l=t,r},u=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};o.default&&["","webkit","moz","o","ms"].some((function(e){var t=u(e,"request");if(t in window)return a=u(e,"cancel"),s=function(e){return window[t](e)}}));var l=(new Date).getTime();(i=function(e){return s(e)}).cancel=function(e){window[a]&&"function"==typeof window[a]&&window[a](e)};var c=i;t.default=c,e.exports=t.default},810:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var r,i,o,a,s=n(7294),u=n(5697),l=n.n(u),c=n(4839),f=n.n(c),p=n(2993),d=n.n(p),m=n(6494),h=n.n(m),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",E="href",A="http-equiv",O="innerHTML",C="itemprop",k="name",N="property",S="rel",_="src",L="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",x="encodeSpecialCharacters",D="onChangeClientState",I="titleTemplate",R=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),F=[g.NOSCRIPT,g.SCRIPT,g.STYLE],K="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=X(e,g.TITLE),n=X(e,I);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,P);return t||r||void 0},G=function(e){return X(e,D)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],u=s.toLowerCase();-1===t.indexOf(u)||n===S&&"canonical"===e[n].toLowerCase()||u===S&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==O&&s!==w&&s!==C||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],u=h()({},r[s],i[s]);r[s]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,c=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,i),se(f,p);var d={baseTag:le(g.BASE,n),linkTags:le(g.LINK,o),metaTags:le(g.META,a),noscriptTags:le(g.NOSCRIPT,s),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,c)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(K),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var u=a[s],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var c=o.indexOf(u);-1!==c&&o.splice(c,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(K):n.getAttribute(K)!==a.join(",")&&n.setAttribute(K,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(K,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[K]=!0,i=fe(n,r),[s.createElement(g.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=ce(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Q(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[K]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,c=e.title,f=void 0===c?"":c,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(v,i,r),link:pe(g.LINK,o,r),meta:pe(g.META,a,r),noscript:pe(g.NOSCRIPT,s,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,l,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:$([E,L],e),bodyAttributes:V(y,e),defer:X(e,M),encode:X(e,x),htmlAttributes:V(v,e),linkTags:J(g.LINK,[S,E],e),metaTags:J(g.META,[k,T,A,N,C],e),noscriptTags:J(g.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:J(g.SCRIPT,[_,O],e),styleTags:J(g.STYLE,[w],e),title:z(e),titleAttributes:V(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),he=(i=me,a=o=function(e){function t(){return q(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TITLE:return B({},i,((t={})[r.type]=a,t.titleAttributes=B({},o),t));case g.BODY:return B({},i,{bodyAttributes:B({},o)});case g.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(U(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(i,r)},H(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=he,ve=n(5444);function be(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title,a=(0,ve.K2)("63159454").site,u=t||a.siteMetadata.description;return s.createElement(ye,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}be.defaultProps={lang:"en",meta:[],keywords:[],description:""};var ge=be,Te=n(2130),we=n.n(Te),Ee=function(e){var t=e.data,n=(0,s.useState)(!1),r=n[0],i=n[1],o=t.allFeedMedium.edges.map((function(e,t){return t<5?s.createElement("h4",{key:t},s.createElement("a",{href:e.node.link,target:"_blank",rel:"noopener noreferrer"},s.createElement("p",null,e.node.title))):null})),a=s.createElement("div",null,o),u=function(){i(!r)},l=r?s.createElement("span",{onClick:u,onKeyPress:u,role:"button",tabIndex:"0","aria-label":"Close Article List"},s.createElement("i",{className:"fas fa-caret-up fa-fw icon-medium-right"})):s.createElement("span",{onClick:u,onKeyPress:u,role:"button",tabIndex:"-1","aria-label":"Open Article List"},s.createElement("i",{className:"fas fa-caret-down fa-fw icon-medium-right"}));return s.createElement("section",null,s.createElement(ge,{title:"Sanjay Nair"}),s.createElement("div",null,s.createElement("div",{className:"background"}),s.createElement("div",{className:"container pad-top"},s.createElement("div",{className:"row image-header"},s.createElement("div",{className:"column center"},s.createElement("img",{src:"headshot.webp",className:"headshot",alt:"That's me!"}),s.createElement("h1",null,"Sanjay Nair"),s.createElement("h4",null,"Software Engineer"))),s.createElement("div",{className:"row"},s.createElement("div",{className:"column column-50 column-offset-25 center"},s.createElement("p",null,"I am a software engineer based in Atlanta, Georgia. I enjoy working with full stack teams on value driven projects. In my spare time I like building software, speaking about tech, and writing."))),s.createElement("div",null,s.createElement("div",{className:"row"},s.createElement("div",{className:"column center"},s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fab fa-medium fa-fw icon-link"}),s.createElement("a",{href:"https://medium.com/@nirespire",target:"_blank",rel:"noopener noreferrer"},"Articles"),l)),s.createElement(we(),{transitionName:"fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},r?a:""),s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fab fa-youtube fa-fw icon-link"}),s.createElement("a",{href:"https://www.youtube.com/playlist?list=PLEes72Fb4Ddh27N8XIbD7RQFaKwxPWCE3",target:"_blank",rel:"noopener noreferrer"},"Talks"))),s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fab fa-youtube fa-fw icon-link"}),s.createElement("a",{href:"https://www.youtube.com/playlist?list=PLEes72Fb4DdiRQ1Jxs9AG0ynJUAWJHp5S",target:"_blank",rel:"noopener noreferrer"},"Live Coding"))),s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fab fa-twitter fa-fw icon-link"}),s.createElement("a",{href:"https://twitter.com/Nirespire",target:"_blank",rel:"noopener noreferrer"},"Twitter"))),s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fab fa-linkedin fa-fw icon-link"}),s.createElement("a",{href:"https://www.linkedin.com/in/sanjaynair8/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"))),s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fab fa-github-square fa-fw icon-link"}),s.createElement("a",{href:"https://github.com/Nirespire",target:"_blank",rel:"noopener noreferrer"},"Github"))),s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fas fa-book fa-fw icon-link"}),s.createElement("a",{href:"https://www.mendeley.com/authors/57192428597/",target:"_blank",rel:"noopener noreferrer"},"Publications"))),s.createElement("div",null,s.createElement("h3",null,s.createElement("i",{className:"fas fa-envelope fa-fw icon-link"}),s.createElement("a",{href:"mailto:contact@sanjaynair.dev",target:"_blank",rel:"noopener noreferrer"},"Contact")))))))))}},670:function(e){"use strict";e.exports=function(){}}}]);
//# sourceMappingURL=component---src-pages-index-js-225fc4dff2caa7c8ffde.js.map