/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("HelloWorldExample",[],t):"object"==typeof exports?exports.HelloWorldExample=t():e.HelloWorldExample=t()}(self,(()=>(()=>{"use strict";var e={"./node_modules/react/cjs/react-jsx-runtime.development.js":(e,t,r)=>{(function(){var e=r("./node_modules/react/index.js"),n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),v=Symbol.iterator,h="@@iterator";var g=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];!function(e,t,r){var n=g.ReactDebugCurrentFrame,o=n.getStackAddendum();""!==o&&(t+="%s",r=r.concat([o]));var a=r.map((function(e){return String(e)}));a.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,a)}("error",e,r)}var _,w=!1,k=!1,j=!1,S=!1,O=!1;function R(e){return e.displayName||"Context"}function C(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case a:return"Fragment";case o:return"Portal";case u:return"Profiler";case i:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return R(e)+".Consumer";case s:return R(e._context)+".Provider";case l:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case d:var t=e.displayName||null;return null!==t?t:C(e.type)||"Memo";case y:var r=e,n=r._payload,m=r._init;try{return C(m(n))}catch(e){return null}}return null}_=Symbol.for("react.module.reference");var E,P,x,T,$,D,N,I=Object.assign,F=0;function L(){}L.__reactDisabledLog=!0;var M,A=g.ReactCurrentDispatcher;function W(e,t,r){if(void 0===M)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return"\n"+M+e}var U,z=!1,V="function"==typeof WeakMap?WeakMap:Map;function H(e,t){if(!e||z)return"";var r,n=U.get(e);if(void 0!==n)return n;z=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=A.current,A.current=null,function(){if(0===F){E=console.log,P=console.info,x=console.warn,T=console.error,$=console.group,D=console.groupCollapsed,N=console.groupEnd;var e={configurable:!0,enumerable:!0,value:L,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){r=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){r=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var u=t.stack.split("\n"),s=r.stack.split("\n"),c=u.length-1,l=s.length-1;c>=1&&l>=0&&u[c]!==s[l];)l--;for(;c>=1&&l>=0;c--,l--)if(u[c]!==s[l]){if(1!==c||1!==l)do{if(c--,--l<0||u[c]!==s[l]){var f="\n"+u[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&U.set(e,f),f}}while(c>=1&&l>=0);break}}}finally{z=!1,A.current=o,function(){if(0==--F){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:E}),info:I({},e,{value:P}),warn:I({},e,{value:x}),error:I({},e,{value:T}),group:I({},e,{value:$}),groupCollapsed:I({},e,{value:D}),groupEnd:I({},e,{value:N})})}F<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?W(p):"";return"function"==typeof e&&U.set(e,d),d}function Y(e,t,r){if(null==e)return"";if("function"==typeof e)return H(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return W(e);switch(e){case f:return W("Suspense");case p:return W("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case l:return H(e.render,!1);case d:return Y(e.type,t,r);case y:var o=e,a=o._payload,i=o._init;try{return Y(i(a),t,r)}catch(e){}}return""}U=new V;var B=Object.prototype.hasOwnProperty,q={},K=g.ReactDebugCurrentFrame;function G(e){if(e){var t=e._owner,r=Y(e.type,e._source,t?t.type:null);K.setExtraStackFrame(r)}else K.setExtraStackFrame(null)}var J=Array.isArray;function X(e){return J(e)}function Q(e){return""+e}function Z(e){if(function(e){try{return Q(e),!1}catch(e){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),Q(e)}var ee,te,re,ne=g.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};re={};var ae=function(e,t,r,o,a,i,u){var s={$$typeof:n,type:e,key:t,ref:r,props:u,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,t,r,n,o){var a,i={},u=null,s=null;for(a in void 0!==r&&(Z(r),u=""+r),function(e){if(B.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(t)&&(Z(t.key),u=""+t.key),function(e){if(B.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(t)&&(s=t.ref,function(e,t){if("string"==typeof e.ref&&ne.current&&t&&ne.current.stateNode!==t){var r=C(ne.current.type);re[r]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(ne.current.type),e.ref),re[r]=!0)}}(t,o)),t)B.call(t,a)&&!oe.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps){var c=e.defaultProps;for(a in c)void 0===i[a]&&(i[a]=c[a])}if(u||s){var l="function"==typeof e?e.displayName||e.name||"Unknown":e;u&&function(e,t){var r=function(){ee||(ee=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(i,l),s&&function(e,t){var r=function(){te||(te=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(i,l)}return ae(e,u,s,o,n,ne.current,i)}var ue,se=g.ReactCurrentOwner,ce=g.ReactDebugCurrentFrame;function le(e){if(e){var t=e._owner,r=Y(e.type,e._source,t?t.type:null);ce.setExtraStackFrame(r)}else ce.setExtraStackFrame(null)}function fe(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}function pe(){if(se.current){var e=C(se.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ue=!1;var de={};function ye(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=pe();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!de[r]){de[r]=!0;var n="";e&&e._owner&&e._owner!==se.current&&(n=" It was passed a child from "+C(e._owner.type)+"."),le(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),le(null)}}}function me(e,t){if("object"==typeof e)if(X(e))for(var r=0;r<e.length;r++){var n=e[r];fe(n)&&ye(n,t)}else if(fe(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var t=v&&e[v]||e[h];return"function"==typeof t?t:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)fe(a.value)&&ye(a.value,t)}}function ve(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==l&&r.$$typeof!==d)return;t=r.propTypes}if(t){var n=C(r);!function(e,t,r,n,o){var a=Function.call.bind(B);for(var i in e)if(a(e,i)){var u=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}u=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){u=e}!u||u instanceof Error||(G(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof u),G(null)),u instanceof Error&&!(u.message in q)&&(q[u.message]=!0,G(o),b("Failed %s type: %s",r,u.message),G(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!ue){ue=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",C(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function he(e,t,r,o,v,h){var g=function(e){return"string"==typeof e||"function"==typeof e||!!(e===a||e===u||O||e===i||e===f||e===p||S||e===m||w||k||j)||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===s||e.$$typeof===c||e.$$typeof===l||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!g){var R="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E,P=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(v);R+=P||pe(),null===e?E="null":X(e)?E="array":void 0!==e&&e.$$typeof===n?(E="<"+(C(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,R)}var x=ie(e,t,r,v,h);if(null==x)return x;if(g){var T=t.children;if(void 0!==T)if(o)if(X(T)){for(var $=0;$<T.length;$++)me(T[$],e);Object.freeze&&Object.freeze(T)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else me(T,e)}return e===a?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){le(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),le(null);break}}null!==e.ref&&(le(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),le(null))}(x):ve(x),x}var ge=function(e,t,r){return he(e,t,r,!1)},be=function(e,t,r){return he(e,t,r,!0)};t.Fragment=a,t.jsx=ge,t.jsxs=be})()},"./node_modules/react/cjs/react.development.js":(e,t,r)=>{e=r.nmd(e),function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator,v="@@iterator";function h(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e[v];return"function"==typeof t?t:null}var g={current:null},b={transition:null},_={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},w={current:null},k={},j=null;function S(e){j=e}k.setExtraStackFrame=function(e){j=e},k.getCurrentStack=null,k.getStackAddendum=function(){var e="";j&&(e+=j);var t=k.getCurrentStack;return t&&(e+=t()||""),e};var O=!1,R=!1,C=!1,E=!1,P=!1,x={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:b,ReactCurrentOwner:w};function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];D("warn",e,r)}function $(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];D("error",e,r)}function D(e,t,r){var n=x.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}x.ReactDebugCurrentFrame=k,x.ReactCurrentActQueue=_;var N={};function I(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;N[o]||($("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),N[o]=!0)}var F={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){I(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){I(e,"replaceState")},enqueueSetState:function(e,t,r,n){I(e,"setState")}},L=Object.assign,M={};function A(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||F}Object.freeze(M),A.prototype.isReactComponent={},A.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},A.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var W={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},U=function(e,t){Object.defineProperty(A.prototype,e,{get:function(){T("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var z in W)W.hasOwnProperty(z)&&U(z,W[z]);function V(){}function H(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||F}V.prototype=A.prototype;var Y=H.prototype=new V;Y.constructor=H,L(Y,A.prototype),Y.isPureReactComponent=!0;var B=Array.isArray;function q(e){return B(e)}function K(e){return""+e}function G(e){if(function(e){try{return K(e),!1}catch(e){return!0}}(e))return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),K(e)}function J(e){return e.displayName||"Context"}function X(e){if(null==e)return null;if("number"==typeof e.tag&&$("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return J(e)+".Consumer";case u:return J(e._context)+".Provider";case c:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var t=e.displayName||null;return null!==t?t:X(e.type)||"Memo";case d:var r=e,y=r._payload,m=r._init;try{return X(m(y))}catch(e){return null}}return null}var Q,Z,ee,te=Object.prototype.hasOwnProperty,re={key:!0,ref:!0,__self:!0,__source:!0};function ne(e){if(te.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function oe(e){if(te.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}ee={};var ae=function(e,t,n,o,a,i,u){var s={$$typeof:r,type:e,key:t,ref:n,props:u,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,t,r){var n,o={},a=null,i=null,u=null,s=null;if(null!=t)for(n in ne(t)&&(i=t.ref,function(e){if("string"==typeof e.ref&&w.current&&e.__self&&w.current.stateNode!==e.__self){var t=X(w.current.type);ee[t]||($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),ee[t]=!0)}}(t)),oe(t)&&(G(t.key),a=""+t.key),u=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)te.call(t,n)&&!re.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){Q||(Q=!0,$("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),i&&function(e,t){var r=function(){Z||(Z=!0,$("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return ae(e,a,i,u,s,w.current,o)}function ue(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=L({},e.props),i=e.key,u=e.ref,s=e._self,c=e._source,l=e._owner;if(null!=t)for(n in ne(t)&&(u=t.ref,l=w.current),oe(t)&&(G(t.key),i=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)te.call(t,n)&&!re.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ae(e.type,i,u,s,c,l,a)}function se(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var ce=".",le=":";var fe=!1,pe=/\/+/g;function de(e){return e.replace(pe,"$&/")}function ye(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(G(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function me(e,t,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s,c,l,f=!1;if(null===e)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=i(p),y=""===a?ce+ye(p,0):a;if(q(d)){var m="";null!=y&&(m=de(y)+"/"),me(d,t,m,"",(function(e){return e}))}else null!=d&&(se(d)&&(!d.key||p&&p.key===d.key||G(d.key),s=d,c=o+(!d.key||p&&p.key===d.key?"":de(""+d.key)+"/")+y,d=ae(s.type,c,s.ref,s._self,s._source,s._owner,s.props)),t.push(d));return 1}var v=0,g=""===a?ce:a+le;if(q(e))for(var b=0;b<e.length;b++)v+=me(l=e[b],t,o,g+ye(l,b),i);else{var _=h(e);if("function"==typeof _){var w=e;_===w.entries&&(fe||T("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),fe=!0);for(var k,j=_.call(w),S=0;!(k=j.next()).done;)v+=me(l=k.value,t,o,g+ye(l,S++),i)}else if("object"===u){var O=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}}return v}function ve(e,t,r){if(null==e)return e;var n=[],o=0;return me(e,n,"","",(function(e){return t.call(r,e,o++)})),n}var he,ge=-1,be=0,_e=1,we=2;function ke(e){if(e._status===ge){var t=(0,e._result)();if(t.then((function(t){if(e._status===be||e._status===ge){var r=e;r._status=_e,r._result=t}}),(function(t){if(e._status===be||e._status===ge){var r=e;r._status=we,r._result=t}})),e._status===ge){var r=e;r._status=be,r._result=t}}if(e._status===_e){var n=e._result;return void 0===n&&$("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||$("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function je(e){return"string"==typeof e||"function"==typeof e||(!!(e===o||e===i||P||e===a||e===l||e===f||E||e===y||O||R||C)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===u||e.$$typeof===s||e.$$typeof===c||e.$$typeof===he||void 0!==e.getModuleId))}function Se(){var e=g.current;return null===e&&$("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}he=Symbol.for("react.module.reference");var Oe,Re,Ce,Ee,Pe,xe,Te,$e=0;function De(){}De.__reactDisabledLog=!0;var Ne,Ie=x.ReactCurrentDispatcher;function Fe(e,t,r){if(void 0===Ne)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Ne=n&&n[1]||""}return"\n"+Ne+e}var Le,Me=!1,Ae="function"==typeof WeakMap?WeakMap:Map;function We(e,t){if(!e||Me)return"";var r,n=Le.get(e);if(void 0!==n)return n;Me=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Ie.current,Ie.current=null,function(){if(0===$e){Oe=console.log,Re=console.info,Ce=console.warn,Ee=console.error,Pe=console.group,xe=console.groupCollapsed,Te=console.groupEnd;var e={configurable:!0,enumerable:!0,value:De,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$e++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){r=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){r=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var u=t.stack.split("\n"),s=r.stack.split("\n"),c=u.length-1,l=s.length-1;c>=1&&l>=0&&u[c]!==s[l];)l--;for(;c>=1&&l>=0;c--,l--)if(u[c]!==s[l]){if(1!==c||1!==l)do{if(c--,--l<0||u[c]!==s[l]){var f="\n"+u[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&Le.set(e,f),f}}while(c>=1&&l>=0);break}}}finally{Me=!1,Ie.current=o,function(){if(0==--$e){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:Oe}),info:L({},e,{value:Re}),warn:L({},e,{value:Ce}),error:L({},e,{value:Ee}),group:L({},e,{value:Pe}),groupCollapsed:L({},e,{value:xe}),groupEnd:L({},e,{value:Te})})}$e<0&&$("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Fe(p):"";return"function"==typeof e&&Le.set(e,d),d}function Ue(e,t,r){if(null==e)return"";if("function"==typeof e)return We(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Fe(e);switch(e){case l:return Fe("Suspense");case f:return Fe("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case c:return We(e.render,!1);case p:return Ue(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return Ue(a(o),t,r)}catch(e){}}return""}Le=new Ae;var ze,Ve={},He=x.ReactDebugCurrentFrame;function Ye(e){if(e){var t=e._owner,r=Ue(e.type,e._source,t?t.type:null);He.setExtraStackFrame(r)}else He.setExtraStackFrame(null)}function Be(e){if(e){var t=e._owner;S(Ue(e.type,e._source,t?t.type:null))}else S(null)}function qe(){if(w.current){var e=X(w.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ze=!1;var Ke={};function Ge(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=qe();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ke[r]){Ke[r]=!0;var n="";e&&e._owner&&e._owner!==w.current&&(n=" It was passed a child from "+X(e._owner.type)+"."),Be(e),$('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Be(null)}}}function Je(e,t){if("object"==typeof e)if(q(e))for(var r=0;r<e.length;r++){var n=e[r];se(n)&&Ge(n,t)}else if(se(e))e._store&&(e._store.validated=!0);else if(e){var o=h(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)se(a.value)&&Ge(a.value,t)}}function Xe(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==c&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=X(r);!function(e,t,r,n,o){var a=Function.call.bind(te);for(var i in e)if(a(e,i)){var u=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}u=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){u=e}!u||u instanceof Error||(Ye(o),$("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof u),Ye(null)),u instanceof Error&&!(u.message in Ve)&&(Ve[u.message]=!0,Ye(o),$("Failed %s type: %s",r,u.message),Ye(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!ze){ze=!0,$("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",X(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||$("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Qe(e,t,n){var a,i,u=je(e);if(!u){var s="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c,l=null!=(a=t)&&void 0!==(i=a.__source)?"\n\nCheck your code at "+i.fileName.replace(/^.*[\\\/]/,"")+":"+i.lineNumber+".":"";s+=l||qe(),null===e?c="null":q(e)?c="array":void 0!==e&&e.$$typeof===r?(c="<"+(X(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,$("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var f=ie.apply(this,arguments);if(null==f)return f;if(u)for(var p=2;p<arguments.length;p++)Je(arguments[p],e);return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Be(e),$("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Be(null);break}}null!==e.ref&&(Be(e),$("Invalid attribute `ref` supplied to `React.Fragment`."),Be(null))}(f):Xe(f),f}var Ze=!1;var et=!1,tt=null;var rt=0,nt=!1;function ot(e){e!==rt-1&&$("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),rt=e}function at(t,r,n){var o=_.current;if(null!==o)try{ut(o),function(t){if(null===tt)try{var r=("require"+Math.random()).slice(0,7),n=e&&e[r];tt=n.call(e,"timers").setImmediate}catch(e){tt=function(e){!1===et&&(et=!0,"undefined"==typeof MessageChannel&&$("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}tt(t)}((function(){0===o.length?(_.current=null,r(t)):at(t,r,n)}))}catch(e){n(e)}else r(t)}var it=!1;function ut(e){if(!it){it=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{it=!1}}}var st=Qe,ct=function(e,t,r){for(var n=ue.apply(this,arguments),o=2;o<arguments.length;o++)Je(arguments[o],n.type);return Xe(n),n},lt=function(e){var t=Qe.bind(null,e);return t.type=e,Ze||(Ze=!0,T("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return T("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ft={map:ve,forEach:function(e,t,r){ve(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return ve(e,(function(){t++})),t},toArray:function(e){return ve(e,(function(e){return e}))||[]},only:function(e){if(!se(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=ft,t.Component=A,t.Fragment=o,t.Profiler=i,t.PureComponent=H,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x,t.cloneElement=ct,t.createContext=function(e){var t={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:u,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:s,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,$("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,$("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(T("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=st,t.createFactory=lt,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===p?$("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?$("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&$("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||$("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:c,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},t.isValidElement=se,t.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:ge,_result:e},_init:ke};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){$("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){$("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){je(e)||$("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},t.startTransition=function(e,t){var r=b.transition;b.transition={};var n=b.transition;b.transition._updatedFibers=new Set;try{e()}finally{if(b.transition=r,null===r&&n._updatedFibers)n._updatedFibers.size>10&&T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear()}},t.unstable_act=function(e){var t=rt;rt++,null===_.current&&(_.current=[]);var r,n=_.isBatchingLegacy;try{if(_.isBatchingLegacy=!0,r=e(),!n&&_.didScheduleLegacyUpdate){var o=_.current;null!==o&&(_.didScheduleLegacyUpdate=!1,ut(o))}}catch(e){throw ot(t),e}finally{_.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,i=!1,u={then:function(e,r){i=!0,a.then((function(n){ot(t),0===rt?at(n,e,r):e(n)}),(function(e){ot(t),r(e)}))}};return nt||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){i||(nt=!0,$("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),u}var s=r;if(ot(t),0===rt){var c=_.current;return null!==c&&(ut(c),_.current=null),{then:function(e,t){null===_.current?(_.current=[],at(s,e,t)):e(s)}}}return{then:function(e,t){e(s)}}},t.useCallback=function(e,t){return Se().useCallback(e,t)},t.useContext=function(e){var t=Se();if(void 0!==e._context){var r=e._context;r.Consumer===e?$("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&$("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return Se().useDebugValue(e,t)},t.useDeferredValue=function(e){return Se().useDeferredValue(e)},t.useEffect=function(e,t){return Se().useEffect(e,t)},t.useId=function(){return Se().useId()},t.useImperativeHandle=function(e,t,r){return Se().useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return Se().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return Se().useLayoutEffect(e,t)},t.useMemo=function(e,t){return Se().useMemo(e,t)},t.useReducer=function(e,t,r){return Se().useReducer(e,t,r)},t.useRef=function(e){return Se().useRef(e)},t.useState=function(e){return Se().useState(e)},t.useSyncExternalStore=function(e,t,r){return Se().useSyncExternalStore(e,t,r)},t.useTransition=function(){return Se().useTransition()},t.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()},"./node_modules/react/index.js":(e,t,r)=>{e.exports=r("./node_modules/react/cjs/react.development.js")},"./node_modules/react/jsx-runtime.js":(e,t,r)=>{e.exports=r("./node_modules/react/cjs/react-jsx-runtime.development.js")},"./src/screens/HelloWorld.tsx":(e,t,r)=>{r.r(t),r.d(t,{HelloWorld:()=>a});var n=r("./node_modules/react/jsx-runtime.js"),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(){return(0,n.jsx)("div",o({className:"w-full h-full flex items-center justify-center"},{children:(0,n.jsx)("h1",{children:"Hello World from Plugin"})}))}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n](a,a.exports,r),a.loaded=!0,a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var n={};return(()=>{r.r(n);var e=r("./node_modules/react/jsx-runtime.js"),t=r("./src/screens/HelloWorld.tsx"),o=window.WebordPlugin;o.registerCategory({key:"hello-world",name:"Hello World Category",path:"/"}),o.registerLink({key:"hello-world",name:"Hello World from Plugin",path:"/hello-world",categoryKey:"hello-world",component:(0,e.jsx)(t.HelloWorld,{})})})(),n})()));
//# sourceMappingURL=index.js.map