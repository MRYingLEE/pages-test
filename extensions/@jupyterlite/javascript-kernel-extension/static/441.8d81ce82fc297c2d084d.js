(self.webpackChunk_jupyterlite_javascript_kernel_extension=self.webpackChunk_jupyterlite_javascript_kernel_extension||[]).push([[441],{632:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportedKernelWebSocketProtocols=t.isInputReplyMsg=t.isInputRequestMsg=t.isDebugReplyMsg=t.isDebugRequestMsg=t.isExecuteReplyMsg=t.isInfoRequestMsg=t.isCommMsgMsg=t.isCommCloseMsg=t.isCommOpenMsg=t.isDebugEventMsg=t.isClearOutputMsg=t.isStatusMsg=t.isErrorMsg=t.isExecuteResultMsg=t.isExecuteInputMsg=t.isUpdateDisplayDataMsg=t.isDisplayDataMsg=t.isStreamMsg=t.createMessage=void 0;const n=r(930);t.createMessage=function(e){var t,r,o,s,i;return{buffers:null!==(t=e.buffers)&&void 0!==t?t:[],channel:e.channel,content:e.content,header:{date:(new Date).toISOString(),msg_id:null!==(r=e.msgId)&&void 0!==r?r:n.UUID.uuid4(),msg_type:e.msgType,session:e.session,username:null!==(o=e.username)&&void 0!==o?o:"",version:"5.2"},metadata:null!==(s=e.metadata)&&void 0!==s?s:{},parent_header:null!==(i=e.parentHeader)&&void 0!==i?i:{}}},t.isStreamMsg=function(e){return"stream"===e.header.msg_type},t.isDisplayDataMsg=function(e){return"display_data"===e.header.msg_type},t.isUpdateDisplayDataMsg=function(e){return"update_display_data"===e.header.msg_type},t.isExecuteInputMsg=function(e){return"execute_input"===e.header.msg_type},t.isExecuteResultMsg=function(e){return"execute_result"===e.header.msg_type},t.isErrorMsg=function(e){return"error"===e.header.msg_type},t.isStatusMsg=function(e){return"status"===e.header.msg_type},t.isClearOutputMsg=function(e){return"clear_output"===e.header.msg_type},t.isDebugEventMsg=function(e){return"debug_event"===e.header.msg_type},t.isCommOpenMsg=function(e){return"comm_open"===e.header.msg_type},t.isCommCloseMsg=function(e){return"comm_close"===e.header.msg_type},t.isCommMsgMsg=function(e){return"comm_msg"===e.header.msg_type},t.isInfoRequestMsg=function(e){return"kernel_info_request"===e.header.msg_type},t.isExecuteReplyMsg=function(e){return"execute_reply"===e.header.msg_type},t.isDebugRequestMsg=function(e){return"debug_request"===e.header.msg_type},t.isDebugReplyMsg=function(e){return"debug_reply"===e.header.msg_type},t.isInputRequestMsg=function(e){return"input_request"===e.header.msg_type},t.isInputReplyMsg=function(e){return"input_reply"===e.header.msg_type},(t.supportedKernelWebSocketProtocols||(t.supportedKernelWebSocketProtocols={})).v1KernelWebsocketJupyterOrg="v1.kernel.websocket.jupyter.org"},411:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.deserialize=t.serialize=void 0;const i=s(r(632));var a;t.serialize=function(e,t=""){return t===i.supportedKernelWebSocketProtocols.v1KernelWebsocketJupyterOrg?a.serializeV1KernelWebsocketJupyterOrg(e):a.serializeDefault(e)},t.deserialize=function(e,t=""){return t===i.supportedKernelWebSocketProtocols.v1KernelWebsocketJupyterOrg?a.deserializeV1KernelWebsocketJupyterOrg(e):a.deserializeDefault(e)},function(e){e.deserializeV1KernelWebsocketJupyterOrg=function(e){let t;const r=new DataView(e),n=Number(r.getBigUint64(0,!0));let o=[];for(let e=0;e<n;e++)o.push(Number(r.getBigUint64(8*(e+1),!0)));const s=new TextDecoder("utf8"),i=s.decode(e.slice(o[0],o[1])),a=JSON.parse(s.decode(e.slice(o[1],o[2]))),c=JSON.parse(s.decode(e.slice(o[2],o[3]))),u=JSON.parse(s.decode(e.slice(o[3],o[4]))),l=JSON.parse(s.decode(e.slice(o[4],o[5])));let h=[];for(let t=5;t<o.length-1;t++)h.push(new DataView(e.slice(o[t],o[t+1])));return t={channel:i,header:a,parent_header:c,metadata:u,content:l,buffers:h},t},e.serializeV1KernelWebsocketJupyterOrg=function(e){const t=JSON.stringify(e.header),r=null==e.parent_header?"{}":JSON.stringify(e.parent_header),n=JSON.stringify(e.metadata),o=JSON.stringify(e.content),s=void 0!==e.buffers?e.buffers:[],i=5+s.length+1;let a=[];a.push(8*(1+i)),a.push(e.channel.length+a[a.length-1]);const c=new TextEncoder,u=c.encode(e.channel),l=c.encode(t),h=c.encode(r),p=c.encode(n),f=c.encode(o),d=new Uint8Array(u.length+l.length+h.length+p.length+f.length);d.set(u),d.set(l,u.length),d.set(h,u.length+l.length),d.set(p,u.length+l.length+h.length),d.set(f,u.length+l.length+h.length+p.length);for(let e of[l.length,h.length,p.length,f.length])a.push(e+a[a.length-1]);let y=0;for(let e of s){let t=e.byteLength;a.push(t+a[a.length-1]),y+=t}const g=new Uint8Array(8*(1+i)+d.byteLength+y),v=new ArrayBuffer(8),m=new DataView(v);m.setBigUint64(0,BigInt(i),!0),g.set(new Uint8Array(v),0);for(let e=0;e<a.length;e++)m.setBigUint64(0,BigInt(a[e]),!0),g.set(new Uint8Array(v),8*(e+1));g.set(d,a[0]);for(let e=0;e<s.length;e++){const t=s[e];g.set(new Uint8Array(ArrayBuffer.isView(t)?t.buffer:t),a[5+e])}return g.buffer},e.deserializeDefault=function(e){let t;return t="string"==typeof e?JSON.parse(e):function(e){const t=new DataView(e),r=t.getUint32(0),n=[];if(r<2)throw new Error("Invalid incoming Kernel Message");for(let e=1;e<=r;e++)n.push(t.getUint32(4*e));const o=new Uint8Array(e.slice(n[0],n[1])),s=JSON.parse(new TextDecoder("utf8").decode(o));s.buffers=[];for(let t=1;t<r;t++){const r=n[t],o=n[t+1]||e.byteLength;s.buffers.push(new DataView(e.slice(r,o)))}return s}(e),t},e.serializeDefault=function(e){var t;let r;return r=(null===(t=e.buffers)||void 0===t?void 0:t.length)?function(e){const t=[],r=[],n=new TextEncoder;let o=[];void 0!==e.buffers&&(o=e.buffers,delete e.buffers);const s=n.encode(JSON.stringify(e));r.push(s.buffer);for(let e=0;e<o.length;e++){const t=o[e];r.push(ArrayBuffer.isView(t)?t.buffer:t)}const i=r.length;t.push(4*(i+1));for(let e=0;e+1<r.length;e++)t.push(t[t.length-1]+r[e].byteLength);const a=new Uint8Array(t[t.length-1]+r[r.length-1].byteLength),c=new DataView(a.buffer);c.setUint32(0,i);for(let e=0;e<t.length;e++)c.setUint32(4*(e+1),t[e]);for(let e=0;e<r.length;e++)a.set(new Uint8Array(r[e]),t[e]);return a.buffer}(e):JSON.stringify(e),r}}(a||(a={}))},810:(e,t,r)=>{"use strict";r.d(t,{WU:()=>i}),new Error("timeout while waiting for mutex to become available"),new Error("mutex already locked");const n=new Error("request for lock canceled");var o=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};class s{constructor(e,t=n){if(this._maxConcurrency=e,this._cancelError=t,this._queue=[],this._waiters=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}acquire(){const e=this.isLocked(),t=new Promise(((e,t)=>this._queue.push({resolve:e,reject:t})));return e||this._dispatch(),t}runExclusive(e){return o(this,void 0,void 0,(function*(){const[t,r]=yield this.acquire();try{return yield e(t)}finally{r()}}))}waitForUnlock(){return o(this,void 0,void 0,(function*(){return this.isLocked()?new Promise((e=>this._waiters.push({resolve:e}))):Promise.resolve()}))}isLocked(){return this._value<=0}release(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){const e=this._currentReleaser;this._currentReleaser=void 0,e()}}cancel(){this._queue.forEach((e=>e.reject(this._cancelError))),this._queue=[]}_dispatch(){const e=this._queue.shift();if(!e)return;let t=!1;this._currentReleaser=()=>{t||(t=!0,this._value++,this._resolveWaiters(),this._dispatch())},e.resolve([this._value--,this._currentReleaser])}_resolveWaiters(){this._waiters.forEach((e=>e.resolve())),this._waiters=[]}}class i{constructor(e){this._semaphore=new s(1,e)}acquire(){return e=this,t=void 0,n=function*(){const[,e]=yield this._semaphore.acquire();return e},new((r=void 0)||(r=Promise))((function(o,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}));var e,t,r,n}runExclusive(e){return this._semaphore.runExclusive((()=>e()))}isLocked(){return this._semaphore.isLocked()}waitForUnlock(){return this._semaphore.waitForUnlock()}release(){this._semaphore.release()}cancel(){return this._semaphore.cancel()}}},988:function(e,t,r){var n=r(406);!function(e){"use strict";var t="undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},o=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e},s=Object.prototype.hasOwnProperty;function i(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function a(e){try{return encodeURIComponent(e)}catch(e){return null}}var c={stringify:function(e,t){t=t||"";var r,n,o=[];for(n in"string"!=typeof t&&(t="?"),e)if(s.call(e,n)){if((r=e[n])||null!=r&&!isNaN(r)||(r=""),n=a(n),r=a(r),null===n||null===r)continue;o.push(n+"="+r)}return o.length?t+o.join("&"):""},parse:function(e){for(var t,r=/([^=?#&]+)=?([^&]*)/g,n={};t=r.exec(e);){var o=i(t[1]),s=i(t[2]);null===o||null===s||o in n||(n[o]=s)}return n}},u=/[\n\r\t]/g,l=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,p=/^[a-zA-Z]:/,f=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;function d(e){return(e||"").toString().replace(f,"")}var y=[["#","hash"],["?","query"],function(e,t){return m(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};function v(e){var r,n=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},o={},s=typeof(e=e||n);if("blob:"===e.protocol)o=new E(unescape(e.pathname),{});else if("string"===s)for(r in o=new E(e,{}),g)delete o[r];else if("object"===s){for(r in e)r in g||(o[r]=e[r]);void 0===o.slashes&&(o.slashes=l.test(e.href))}return o}function m(e){return"file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function b(e,t){e=(e=d(e)).replace(u,""),t=t||{};var r,n=h.exec(e),o=n[1]?n[1].toLowerCase():"",s=!!n[2],i=!!n[3],a=0;return s?i?(r=n[2]+n[3]+n[4],a=n[2].length+n[3].length):(r=n[2]+n[4],a=n[2].length):i?(r=n[3]+n[4],a=n[3].length):r=n[4],"file:"===o?a>=2&&(r=r.slice(2)):m(o)?r=n[4]:o?s&&(r=r.slice(2)):a>=2&&m(t.protocol)&&(r=n[4]),{protocol:o,slashes:s||m(o),slashesCount:a,rest:r}}function E(e,t,r){if(e=(e=d(e)).replace(u,""),!(this instanceof E))return new E(e,t,r);var n,s,i,a,l,h,f=y.slice(),g=typeof t,w=this,O=0;for("object"!==g&&"string"!==g&&(r=t,t=null),r&&"function"!=typeof r&&(r=c.parse),n=!(s=b(e||"",t=v(t))).protocol&&!s.slashes,w.slashes=s.slashes||n&&t.slashes,w.protocol=s.protocol||t.protocol||"",e=s.rest,("file:"===s.protocol&&(2!==s.slashesCount||p.test(e))||!s.slashes&&(s.protocol||s.slashesCount<2||!m(w.protocol)))&&(f[3]=[/(.*)/,"pathname"]);O<f.length;O++)"function"!=typeof(a=f[O])?(i=a[0],h=a[1],i!=i?w[h]=e:"string"==typeof i?~(l="@"===i?e.lastIndexOf(i):e.indexOf(i))&&("number"==typeof a[2]?(w[h]=e.slice(0,l),e=e.slice(l+a[2])):(w[h]=e.slice(l),e=e.slice(0,l))):(l=i.exec(e))&&(w[h]=l[1],e=e.slice(0,l.index)),w[h]=w[h]||n&&a[3]&&t[h]||"",a[4]&&(w[h]=w[h].toLowerCase())):e=a(e,w);r&&(w.query=r(w.query)),n&&t.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==t.pathname)&&(w.pathname=function(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],s=!1,i=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),i++):i&&(0===n&&(s=!0),r.splice(n,1),i--);return s&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(w.pathname,t.pathname)),"/"!==w.pathname.charAt(0)&&m(w.protocol)&&(w.pathname="/"+w.pathname),o(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(~(l=w.auth.indexOf(":"))?(w.username=w.auth.slice(0,l),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=w.auth.slice(l+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(w.auth)),w.auth=w.password?w.username+":"+w.password:w.username),w.origin="file:"!==w.protocol&&m(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString()}E.prototype={set:function(e,t,r){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||c.parse)(t)),n[e]=t;break;case"port":n[e]=t,o(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":if(t){var s="pathname"===e?"/":"#";n[e]=t.charAt(0)!==s?s+t:t}else n[e]=t;break;case"username":case"password":n[e]=encodeURIComponent(t);break;case"auth":var i=t.indexOf(":");~i?(n.username=t.slice(0,i),n.username=encodeURIComponent(decodeURIComponent(n.username)),n.password=t.slice(i+1),n.password=encodeURIComponent(decodeURIComponent(n.password))):n.username=encodeURIComponent(decodeURIComponent(t))}for(var a=0;a<y.length;a++){var u=y[a];u[4]&&(n[u[1]]=n[u[1]].toLowerCase())}return n.auth=n.password?n.username+":"+n.password:n.username,n.origin="file:"!==n.protocol&&m(n.protocol)&&n.host?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(e){e&&"function"==typeof e||(e=c.stringify);var t,r=this,n=r.host,o=r.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var s=o+(r.protocol&&r.slashes||m(r.protocol)?"//":"");return r.username?(s+=r.username,r.password&&(s+=":"+r.password),s+="@"):r.password?(s+=":"+r.password,s+="@"):"file:"!==r.protocol&&m(r.protocol)&&!n&&"/"!==r.pathname&&(s+="@"),":"===n[n.length-1]&&(n+=":"),s+=n+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(s+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(s+=r.hash),s}},E.extractProtocol=b,E.location=v,E.trimLeft=d,E.qs=c;var w=E;function O(e,t){setTimeout((function(t){return e.call(t)}),4,t)}function S(e,t){void 0!==n&&console[e].call(null,t)}function _(e,t){void 0===e&&(e=[]);var r=[];return e.forEach((function(e){t(e)||r.push(e)})),r}var C=function(){this.listeners={}};function L(e){var t=e.indexOf("?");return t>=0?e.slice(0,t):e}C.prototype.addEventListener=function(e,t){"function"==typeof t&&(Array.isArray(this.listeners[e])||(this.listeners[e]=[]),0===function(e,t){void 0===e&&(e=[]);var r=[];return e.forEach((function(e){t(e)&&r.push(e)})),r}(this.listeners[e],(function(e){return e===t})).length&&this.listeners[e].push(t))},C.prototype.removeEventListener=function(e,t){var r=this.listeners[e];this.listeners[e]=_(r,(function(e){return e===t}))},C.prototype.dispatchEvent=function(e){for(var t=this,r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var o=e.type,s=this.listeners[o];return!!Array.isArray(s)&&(s.forEach((function(n){r.length>0?n.apply(t,r):n.call(t,e)})),!0)};var R=function(){this.urlMap={}};R.prototype.attachWebSocket=function(e,t){var r=L(t),n=this.urlMap[r];if(n&&n.server&&-1===n.websockets.indexOf(e))return n.websockets.push(e),n.server},R.prototype.addMembershipToRoom=function(e,t){var r=this.urlMap[L(e.url)];r&&r.server&&-1!==r.websockets.indexOf(e)&&(r.roomMemberships[t]||(r.roomMemberships[t]=[]),r.roomMemberships[t].push(e))},R.prototype.attachServer=function(e,t){var r=L(t);if(!this.urlMap[r])return this.urlMap[r]={server:e,websockets:[],roomMemberships:{}},e},R.prototype.serverLookup=function(e){var t=L(e),r=this.urlMap[t];if(r)return r.server},R.prototype.websocketsLookup=function(e,t,r){var n,o=L(e),s=this.urlMap[o];return n=s?s.websockets:[],t&&(n=s.roomMemberships[t]||[]),r?n.filter((function(e){return e!==r})):n},R.prototype.removeServer=function(e){delete this.urlMap[L(e)]},R.prototype.removeWebSocket=function(e,t){var r=L(t),n=this.urlMap[r];n&&(n.websockets=_(n.websockets,(function(t){return t===e})))},R.prototype.removeMembershipFromRoom=function(e,t){var r=this.urlMap[L(e.url)],n=r.roomMemberships[t];r&&null!==n&&(r.roomMemberships[t]=_(n,(function(t){return t===e})))};var k=new R,N={CLOSE_NORMAL:1e3,CLOSE_GOING_AWAY:1001,CLOSE_PROTOCOL_ERROR:1002,CLOSE_UNSUPPORTED:1003,CLOSE_NO_STATUS:1005,CLOSE_ABNORMAL:1006,UNSUPPORTED_DATA:1007,POLICY_VIOLATION:1008,CLOSE_TOO_LARGE:1009,MISSING_EXTENSION:1010,INTERNAL_ERROR:1011,SERVICE_RESTART:1012,TRY_AGAIN_LATER:1013,TLS_HANDSHAKE:1015},T={CONSTRUCTOR_ERROR:"Failed to construct 'WebSocket':",CLOSE_ERROR:"Failed to execute 'close' on 'WebSocket':",EVENT:{CONSTRUCT:"Failed to construct 'Event':",MESSAGE:"Failed to construct 'MessageEvent':",CLOSE:"Failed to construct 'CloseEvent':"}},M=function(){};M.prototype.stopPropagation=function(){},M.prototype.stopImmediatePropagation=function(){},M.prototype.initEvent=function(e,t,r){void 0===e&&(e="undefined"),void 0===t&&(t=!1),void 0===r&&(r=!1),this.type=""+e,this.bubbles=Boolean(t),this.cancelable=Boolean(r)};var A=function(e){function t(t,r){if(void 0===r&&(r={}),e.call(this),!t)throw new TypeError(T.EVENT_ERROR+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(T.EVENT_ERROR+" parameter 2 ('eventInitDict') is not an object.");var n=r.bubbles,o=r.cancelable;this.type=""+t,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!o&&Boolean(o),this.cancelBubble=!1,this.bubbles=!!n&&Boolean(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(M),I=function(e){function t(t,r){if(void 0===r&&(r={}),e.call(this),!t)throw new TypeError(T.EVENT.MESSAGE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(T.EVENT.MESSAGE+" parameter 2 ('eventInitDict') is not an object");var n=r.bubbles,o=r.cancelable,s=r.data,i=r.origin,a=r.lastEventId,c=r.ports;this.type=""+t,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!o&&Boolean(o),this.canncelBubble=!1,this.bubbles=!!n&&Boolean(n),this.origin=""+i,this.ports=void 0===c?null:c,this.data=void 0===s?null:s,this.lastEventId=""+(a||"")}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(M),U=function(e){function t(t,r){if(void 0===r&&(r={}),e.call(this),!t)throw new TypeError(T.EVENT.CLOSE+" 1 argument required, but only 0 present.");if("object"!=typeof r)throw new TypeError(T.EVENT.CLOSE+" parameter 2 ('eventInitDict') is not an object");var n=r.bubbles,o=r.cancelable,s=r.code,i=r.reason,a=r.wasClean;this.type=""+t,this.timeStamp=Date.now(),this.target=null,this.srcElement=null,this.returnValue=!0,this.isTrusted=!1,this.eventPhase=0,this.defaultPrevented=!1,this.currentTarget=null,this.cancelable=!!o&&Boolean(o),this.cancelBubble=!1,this.bubbles=!!n&&Boolean(n),this.code="number"==typeof s?parseInt(s,10):0,this.reason=""+(i||""),this.wasClean=!!a&&Boolean(a)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(M);function D(e){var t=e.type,r=e.target,n=new A(t);return r&&(n.target=r,n.srcElement=r,n.currentTarget=r),n}function x(e){var t=e.type,r=e.origin,n=e.data,o=e.target,s=new I(t,{data:n,origin:r});return o&&(s.target=o,s.srcElement=o,s.currentTarget=o),s}function P(e){var t=e.code,r=e.reason,n=e.type,o=e.target,s=e.wasClean;s||(s=t===N.CLOSE_NORMAL||t===N.CLOSE_NO_STATUS);var i=new U(n,{code:t,reason:r,wasClean:s});return o&&(i.target=o,i.srcElement=o,i.currentTarget=o),i}function j(e,t,r){e.readyState=G.CLOSING;var n=k.serverLookup(e.url),o=P({type:"close",target:e.target,code:t,reason:r});O((function(){k.removeWebSocket(e,e.url),e.readyState=G.CLOSED,e.dispatchEvent(o),n&&n.dispatchEvent(o,n)}),e)}function W(e){return"[object Blob]"===Object.prototype.toString.call(e)||e instanceof ArrayBuffer||(e=String(e)),e}var q=new WeakMap;function B(e){if(q.has(e))return q.get(e);var t=new Proxy(e,{get:function(r,n){if("close"===n)return function(e){void 0===e&&(e={});var r=e.code||N.CLOSE_NORMAL,n=e.reason||"";j(t,r,n)};if("send"===n)return function(t){t=W(t),e.dispatchEvent(x({type:"message",data:t,origin:this.url,target:e}))};var o=function(e){return"message"===e?"server::"+e:e};return"on"===n?function(t,r){e.addEventListener(o(t),r)}:"off"===n?function(t,r){e.removeEventListener(o(t),r)}:"target"===n?e:r[n]}});return q.set(e,t),t}var G=function(e){function t(r,n){e.call(this),this._onopen=null,this._onmessage=null,this._onerror=null,this._onclose=null,this.url=function(e){var t=new w(e),r=t.pathname,n=t.protocol,o=t.hash;if(!e)throw new TypeError(T.CONSTRUCTOR_ERROR+" 1 argument required, but only 0 present.");if(r||(t.pathname="/"),""===n)throw new SyntaxError(T.CONSTRUCTOR_ERROR+" The URL '"+t.toString()+"' is invalid.");if("ws:"!==n&&"wss:"!==n)throw new SyntaxError(T.CONSTRUCTOR_ERROR+" The URL's scheme must be either 'ws' or 'wss'. '"+n+"' is not allowed.");if(""!==o)throw new SyntaxError(T.CONSTRUCTOR_ERROR+" The URL contains a fragment identifier ('"+o+"'). Fragment identifiers are not allowed in WebSocket URLs.");return t.toString()}(r),n=function(e){if(void 0===e&&(e=[]),!Array.isArray(e)&&"string"!=typeof e)throw new SyntaxError(T.CONSTRUCTOR_ERROR+" The subprotocol '"+e.toString()+"' is invalid.");"string"==typeof e&&(e=[e]);var t=e.map((function(e){return{count:1,protocol:e}})).reduce((function(e,t){return e[t.protocol]=(e[t.protocol]||0)+t.count,e}),{}),r=Object.keys(t).filter((function(e){return t[e]>1}));if(r.length>0)throw new SyntaxError(T.CONSTRUCTOR_ERROR+" The subprotocol '"+r[0]+"' is duplicated.");return e}(n),this.protocol=n[0]||"",this.binaryType="blob",this.readyState=t.CONNECTING;var o=B(this),s=k.attachWebSocket(o,this.url);O((function(){if(s)if(s.options.verifyClient&&"function"==typeof s.options.verifyClient&&!s.options.verifyClient())this.readyState=t.CLOSED,S("error","WebSocket connection to '"+this.url+"' failed: HTTP Authentication failed; no valid credentials available"),k.removeWebSocket(o,this.url),this.dispatchEvent(D({type:"error",target:this})),this.dispatchEvent(P({type:"close",target:this,code:N.CLOSE_NORMAL}));else{if(s.options.selectProtocol&&"function"==typeof s.options.selectProtocol){var e=s.options.selectProtocol(n),r=""!==e,i=-1!==n.indexOf(e);if(r&&!i)return this.readyState=t.CLOSED,S("error","WebSocket connection to '"+this.url+"' failed: Invalid Sub-Protocol"),k.removeWebSocket(o,this.url),this.dispatchEvent(D({type:"error",target:this})),void this.dispatchEvent(P({type:"close",target:this,code:N.CLOSE_NORMAL}));this.protocol=e}this.readyState=t.OPEN,this.dispatchEvent(D({type:"open",target:this})),s.dispatchEvent(D({type:"connection"}),o)}else this.readyState=t.CLOSED,this.dispatchEvent(D({type:"error",target:this})),this.dispatchEvent(P({type:"close",target:this,code:N.CLOSE_NORMAL})),S("error","WebSocket connection to '"+this.url+"' failed")}),this)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={onopen:{},onmessage:{},onclose:{},onerror:{}};return r.onopen.get=function(){return this._onopen},r.onmessage.get=function(){return this._onmessage},r.onclose.get=function(){return this._onclose},r.onerror.get=function(){return this._onerror},r.onopen.set=function(e){this.removeEventListener("open",this._onopen),this._onopen=e,this.addEventListener("open",e)},r.onmessage.set=function(e){this.removeEventListener("message",this._onmessage),this._onmessage=e,this.addEventListener("message",e)},r.onclose.set=function(e){this.removeEventListener("close",this._onclose),this._onclose=e,this.addEventListener("close",e)},r.onerror.set=function(e){this.removeEventListener("error",this._onerror),this._onerror=e,this.addEventListener("error",e)},t.prototype.send=function(e){var r=this;if(this.readyState===t.CLOSING||this.readyState===t.CLOSED)throw new Error("WebSocket is already in CLOSING or CLOSED state");var n=x({type:"server::message",origin:this.url,data:W(e)}),o=k.serverLookup(this.url);o&&O((function(){r.dispatchEvent(n,e)}),o)},t.prototype.close=function(e,r){if(void 0!==e&&("number"!=typeof e||1e3!==e&&(e<3e3||e>4999)))throw new TypeError(T.CLOSE_ERROR+" The code must be either 1000, or between 3000 and 4999. "+e+" is neither.");if(void 0!==r&&(n=r,o=encodeURIComponent(n).match(/%[89ABab]/g),n.length+(o?o.length:0)>123))throw new SyntaxError(T.CLOSE_ERROR+" The message must not be greater than 123 bytes.");var n,o;if(this.readyState!==t.CLOSING&&this.readyState!==t.CLOSED){var s=B(this);this.readyState===t.CONNECTING?function(e,t,r){e.readyState=G.CLOSING;var n=k.serverLookup(e.url),o=P({type:"close",target:e.target,code:t,reason:r,wasClean:!1}),s=D({type:"error",target:e.target});O((function(){k.removeWebSocket(e,e.url),e.readyState=G.CLOSED,e.dispatchEvent(s),e.dispatchEvent(o),n&&n.dispatchEvent(o,n)}),e)}(s,e||N.CLOSE_ABNORMAL,r):j(s,e||N.CLOSE_NO_STATUS,r)}},Object.defineProperties(t.prototype,r),t}(C);G.CONNECTING=0,G.prototype.CONNECTING=G.CONNECTING,G.OPEN=1,G.prototype.OPEN=G.OPEN,G.CLOSING=2,G.prototype.CLOSING=G.CLOSING,G.CLOSED=3,G.prototype.CLOSED=G.CLOSED;var V=function(e){function t(r,n){var o=this;void 0===r&&(r="socket.io"),void 0===n&&(n=""),e.call(this),this.binaryType="blob";var s=new w(r);s.pathname||(s.pathname="/"),this.url=s.toString(),this.readyState=t.CONNECTING,this.protocol="",this.target=this,"string"==typeof n||"object"==typeof n&&null!==n?this.protocol=n:Array.isArray(n)&&n.length>0&&(this.protocol=n[0]);var i=k.attachWebSocket(this,this.url);O((function(){i?(this.readyState=t.OPEN,i.dispatchEvent(D({type:"connection"}),i,this),i.dispatchEvent(D({type:"connect"}),i,this),this.dispatchEvent(D({type:"connect",target:this}))):(this.readyState=t.CLOSED,this.dispatchEvent(D({type:"error",target:this})),this.dispatchEvent(P({type:"close",target:this,code:N.CLOSE_NORMAL})),S("error","Socket.io connection to '"+this.url+"' failed"))}),this),this.addEventListener("close",(function(e){o.dispatchEvent(P({type:"disconnect",target:e.target,code:e.code}))}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={broadcast:{}};return t.prototype.close=function(){if(this.readyState===t.OPEN){var e=k.serverLookup(this.url);return k.removeWebSocket(this,this.url),this.readyState=t.CLOSED,this.dispatchEvent(P({type:"close",target:this,code:N.CLOSE_NORMAL})),e&&e.dispatchEvent(P({type:"disconnect",target:this,code:N.CLOSE_NORMAL}),e),this}},t.prototype.disconnect=function(){return this.close()},t.prototype.emit=function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];if(this.readyState!==t.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var o=x({type:e,origin:this.url,data:r}),s=k.serverLookup(this.url);return s&&s.dispatchEvent.apply(s,[o].concat(r)),this},t.prototype.send=function(e){return this.emit("message",e),this},r.broadcast.get=function(){if(this.readyState!==t.OPEN)throw new Error("SocketIO is already in CLOSING or CLOSED state");var e=this,r=k.serverLookup(this.url);if(!r)throw new Error("SocketIO can not find a server at the specified URL ("+this.url+")");return{emit:function(t,n){return r.emit(t,n,{websockets:k.websocketsLookup(e.url,null,e)}),e},to:function(t){return r.to(t,e)},in:function(t){return r.in(t,e)}}},t.prototype.on=function(e,t){return this.addEventListener(e,t),this},t.prototype.off=function(e,t){this.removeEventListener(e,t)},t.prototype.hasListeners=function(e){var t=this.listeners[e];return!!Array.isArray(t)&&!!t.length},t.prototype.join=function(e){k.addMembershipToRoom(this,e)},t.prototype.leave=function(e){k.removeMembershipFromRoom(this,e)},t.prototype.to=function(e){return this.broadcast.to(e)},t.prototype.in=function(){return this.to.apply(null,arguments)},t.prototype.dispatchEvent=function(e){for(var t=this,r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var o=e.type,s=this.listeners[o];if(!Array.isArray(s))return!1;s.forEach((function(n){r.length>0?n.apply(t,r):n.call(t,e.data?e.data:e)}))},Object.defineProperties(t.prototype,r),t}(C);V.CONNECTING=0,V.OPEN=1,V.CLOSING=2,V.CLOSED=3;var J=function(e,t){return new V(e,t)};J.connect=function(e,t){return J(e,t)};function z(){return"undefined"!=typeof window?window:"object"==typeof n&&"object"==typeof r.g?r.g:this}var K={mock:!0,verifyClient:null,selectProtocol:null},F=function(e){function t(t,r){void 0===r&&(r=K),e.call(this);var n=new w(t);if(n.pathname||(n.pathname="/"),this.url=n.toString(),this.originalWebSocket=null,!k.attachServer(this,this.url))throw this.dispatchEvent(D({type:"error"})),new Error("A mock server is already listening on this url");this.options=Object.assign({},K,r),this.options.mock&&this.mockWebsocket()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.mockWebsocket=function(){var e=z();this.originalWebSocket=e.WebSocket,e.WebSocket=G},t.prototype.restoreWebsocket=function(){var e=z();null!==this.originalWebSocket&&(e.WebSocket=this.originalWebSocket),this.originalWebSocket=null},t.prototype.stop=function(e){void 0===e&&(e=function(){}),this.options.mock&&this.restoreWebsocket(),k.removeServer(this.url),"function"==typeof e&&e()},t.prototype.on=function(e,t){this.addEventListener(e,t)},t.prototype.off=function(e,t){this.removeEventListener(e,t)},t.prototype.close=function(e){void 0===e&&(e={});var t=e.code,r=e.reason,n=e.wasClean,o=k.websocketsLookup(this.url);k.removeServer(this.url),o.forEach((function(e){e.readyState=G.CLOSED,e.dispatchEvent(P({type:"close",target:e.target,code:t||N.CLOSE_NORMAL,reason:r||"",wasClean:n}))})),this.dispatchEvent(P({type:"close"}),this)},t.prototype.emit=function(e,t,r){var n=this;void 0===r&&(r={});var o,s=r.websockets;s||(s=k.websocketsLookup(this.url)),"object"!=typeof r||arguments.length>3?(t=Array.prototype.slice.call(arguments,1,arguments.length),o=t.map((function(e){return W(e)}))):o=W(t),s.forEach((function(r){var s=r instanceof V?t:o;Array.isArray(s)?r.dispatchEvent.apply(r,[x({type:e,data:s,origin:n.url,target:r.target})].concat(s)):r.dispatchEvent(x({type:e,data:s,origin:n.url,target:r.target}))}))},t.prototype.clients=function(){return k.websocketsLookup(this.url)},t.prototype.to=function(e,t,r){var n=this;void 0===r&&(r=[]);var o=this,s=r.concat(k.websocketsLookup(this.url,e,t)).reduce((function(e,t){return e.indexOf(t)>-1?e:e.concat(t)}),[]);return{to:function(e,t){return n.to.call(n,e,t,s)},emit:function(e,t){o.emit(e,t,{websockets:s})}}},t.prototype.in=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return this.to.apply(null,e)},t.prototype.simulate=function(e){var t=k.websocketsLookup(this.url);"error"===e&&t.forEach((function(e){e.readyState=G.CLOSED,e.dispatchEvent(D({type:"error",target:e.target}))}))},t}(C);F.of=function(e){return new F(e)};var H=F,Y=G,Z=J;e.Server=H,e.WebSocket=Y,e.SocketIO=Z,Object.defineProperty(e,"__esModule",{value:!0})}(t)},406:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],u=!1,l=-1;function h(){u&&a&&(u=!1,a.length?c=a.concat(c):l=-1,c.length&&p())}function p(){if(!u){var e=i(h);u=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||u||i(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);