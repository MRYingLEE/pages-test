"use strict";(self.webpackChunk_jupyterlite_javascript_kernel_extension=self.webpackChunk_jupyterlite_javascript_kernel_extension||[]).push([[102],{102:(e,s,t)=>{t.r(s),t.d(s,{BaseKernel:()=>i,FALLBACK_KERNEL:()=>m,IKernelSpecs:()=>y,IKernels:()=>g,KernelSpecs:()=>v,Kernels:()=>_});var n=t(788),a=t(901);class i{constructor(e){this._history=[],this._executionCount=0,this._isDisposed=!1,this._disposed=new a.Signal(this),this._parentHeader=void 0,this._parent=void 0;const{id:s,name:t,location:n,sendMessage:i}=e;this._id=s,this._name=t,this._location=n,this._sendMessage=i}get ready(){return Promise.resolve()}get isDisposed(){return this._isDisposed}get disposed(){return this._disposed}get id(){return this._id}get name(){return this._name}get location(){return this._location}get executionCount(){return this._executionCount}get parentHeader(){return this._parentHeader}get parent(){return this._parent}dispose(){this.isDisposed||(this._isDisposed=!0,this._disposed.emit(void 0))}async handleMessage(e){switch(this._busy(e),this._parent=e,e.header.msg_type){case"kernel_info_request":await this._kernelInfo(e);break;case"execute_request":await this._execute(e);break;case"input_reply":this.inputReply(e.content);break;case"inspect_request":await this._inspect(e);break;case"is_complete_request":await this._isCompleteRequest(e);break;case"complete_request":await this._complete(e);break;case"history_request":await this._historyRequest(e);break;case"comm_open":await this.commOpen(e);break;case"comm_msg":await this.commMsg(e);break;case"comm_close":await this.commClose(e)}this._idle(e)}stream(e,s=void 0){var t;const a=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"stream",session:null!==(t=null==a?void 0:a.session)&&void 0!==t?t:"",parentHeader:a,content:e});this._sendMessage(i)}displayData(e,s=void 0){var t,a;const i=void 0!==s?s:this._parentHeader;e.metadata=null!==(t=e.metadata)&&void 0!==t?t:{};const r=n.KernelMessage.createMessage({channel:"iopub",msgType:"display_data",session:null!==(a=null==i?void 0:i.session)&&void 0!==a?a:"",parentHeader:i,content:e});this._sendMessage(r)}inputRequest(e,s=void 0){var t;const a=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"stdin",msgType:"input_request",session:null!==(t=null==a?void 0:a.session)&&void 0!==t?t:"",parentHeader:a,content:e});this._sendMessage(i)}publishExecuteResult(e,s=void 0){var t;const a=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"execute_result",session:null!==(t=null==a?void 0:a.session)&&void 0!==t?t:"",parentHeader:a,content:e});this._sendMessage(i)}publishExecuteError(e,s=void 0){var t;const a=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"error",session:null!==(t=null==a?void 0:a.session)&&void 0!==t?t:"",parentHeader:a,content:e});this._sendMessage(i)}updateDisplayData(e,s=void 0){var t;const a=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"update_display_data",session:null!==(t=null==a?void 0:a.session)&&void 0!==t?t:"",parentHeader:a,content:e});this._sendMessage(i)}clearOutput(e,s=void 0){var t;const a=void 0!==s?s:this._parentHeader,i=n.KernelMessage.createMessage({channel:"iopub",msgType:"clear_output",session:null!==(t=null==a?void 0:a.session)&&void 0!==t?t:"",parentHeader:a,content:e});this._sendMessage(i)}handleComm(e,s,t,a,i=void 0){var r;const o=void 0!==i?i:this._parentHeader,l=n.KernelMessage.createMessage({channel:"iopub",msgType:e,session:null!==(r=null==o?void 0:o.session)&&void 0!==r?r:"",parentHeader:o,content:s,metadata:t,buffers:a});this._sendMessage(l)}_idle(e){const s=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"idle"}});this._sendMessage(s)}_busy(e){const s=n.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"busy"}});this._sendMessage(s)}async _kernelInfo(e){const s=await this.kernelInfoRequest(),t=n.KernelMessage.createMessage({msgType:"kernel_info_reply",channel:"shell",session:e.header.session,parentHeader:e.header,content:s});this._sendMessage(t)}async _historyRequest(e){const s=e,t=n.KernelMessage.createMessage({msgType:"history_reply",channel:"shell",parentHeader:s.header,session:e.header.session,content:{status:"ok",history:this._history}});this._sendMessage(t)}_executeInput(e){const s=e,t=s.content.code,a=n.KernelMessage.createMessage({msgType:"execute_input",parentHeader:s.header,channel:"iopub",session:e.header.session,content:{code:t,execution_count:this._executionCount}});this._sendMessage(a)}async _execute(e){const s=e,t=s.content;t.store_history&&this._executionCount++,this._parentHeader=s.header,this._executeInput(s),t.store_history&&this._history.push([0,0,t.code]);const a=await this.executeRequest(s.content),i=n.KernelMessage.createMessage({msgType:"execute_reply",channel:"shell",parentHeader:s.header,session:e.header.session,content:a});this._sendMessage(i)}async _complete(e){const s=e,t=await this.completeRequest(s.content),a=n.KernelMessage.createMessage({msgType:"complete_reply",parentHeader:s.header,channel:"shell",session:e.header.session,content:t});this._sendMessage(a)}async _inspect(e){const s=e,t=await this.inspectRequest(s.content),a=n.KernelMessage.createMessage({msgType:"inspect_reply",parentHeader:s.header,channel:"shell",session:e.header.session,content:t});this._sendMessage(a)}async _isCompleteRequest(e){const s=e,t=await this.isCompleteRequest(s.content),a=n.KernelMessage.createMessage({msgType:"is_complete_reply",parentHeader:s.header,channel:"shell",session:e.header.session,content:t});this._sendMessage(a)}}var r=t(220),o=t(411),l=t(632),c=t(930),d=t(988),h=t(810),p=t(614);const u=l.supportedKernelWebSocketProtocols.v1KernelWebsocketJupyterOrg;class _{constructor(e){this._kernels=new r.ObservableMap,this._clients=new r.ObservableMap,this._kernelClients=new r.ObservableMap;const{kernelspecs:s}=e;this._kernelspecs=s}async startNew(e){const{id:s,name:t,location:n}=e,a=this._kernelspecs.factories.get(t);if(!a)return{id:s,name:t};const i=new h.WU,r=(e,s,t)=>{var n;const a=this._kernels.get(e);if(!a)throw Error(`No kernel ${e}`);this._clients.set(s,t),null===(n=this._kernelClients.get(e))||void 0===n||n.add(s),t.on("message",(async e=>{let s;if(e instanceof ArrayBuffer)e=new Uint8Array(e).buffer,s=(0,o.deserialize)(e,u);else{if("string"!=typeof e)return;{const t=(new TextEncoder).encode(e);s=(0,o.deserialize)(t.buffer,u)}}"input_reply"===s.header.msg_type?a.handleMessage(s):(async e=>{await i.runExclusive((async()=>{await a.ready,await a.handleMessage(e)}))})(s)}));const r=()=>{var t;this._clients.delete(s),null===(t=this._kernelClients.get(e))||void 0===t||t.delete(s)};a.disposed.connect(r),t.onclose=r},l=null!=s?s:c.UUID.uuid4(),p=`${_.WS_BASE_URL}api/kernels/${l}/channels`,g=this._kernels.get(l);if(g)return{id:g.id,name:g.name};const m=await a({id:l,sendMessage:e=>{const s=e.header.session,t=this._clients.get(s);if(!t)return void console.warn(`Trying to send message on removed socket for kernel ${l}`);const n=(0,o.serialize)(e,u);if("iopub"!==e.channel)t.send(n);else{const e=this._kernelClients.get(l);null==e||e.forEach((e=>{var s;null===(s=this._clients.get(e))||void 0===s||s.send(n)}))}},name:t,location:n});this._kernels.set(l,m),this._kernelClients.set(l,new Set);const y=new d.Server(p,{mock:!1,selectProtocol:()=>u});return y.on("connection",(e=>{var s;const t=null!==(s=new URL(e.url).searchParams.get("session_id"))&&void 0!==s?s:"";r(l,t,e)})),y.on("close",(()=>{this._clients.keys().forEach((e=>{var s;const t=this._clients.get(e);(null==t?void 0:t.readyState)===WebSocket.CLOSED&&(this._clients.delete(e),null===(s=this._kernelClients.get(l))||void 0===s||s.delete(e))}))})),m.disposed.connect((()=>{y.close(),this._kernels.delete(l),this._kernelClients.delete(l)})),{id:m.id,name:m.name}}async restart(e){const s=this._kernels.get(e);if(!s)throw Error(`Kernel ${e} does not exist`);const{id:t,name:n,location:a}=s;return s.dispose(),this.startNew({id:t,name:n,location:a})}async list(){return[...this._kernels.values()].map((e=>({id:e.id,name:e.name})))}async shutdown(e){var s;null===(s=this._kernels.delete(e))||void 0===s||s.dispose()}async get(e){return this._kernels.get(e)}}!function(e){e.WS_BASE_URL=p.PageConfig.getBaseUrl().replace(/^http/,"ws")}(_||(_={}));const g=new c.Token("@jupyterlite/kernel:IKernels"),m="javascript",y=new c.Token("@jupyterlite/kernel:IKernelSpecs");class v{constructor(){this._specs=new Map,this._factories=new Map}get specs(){return 0===this._specs.size?null:{default:this.defaultKernelName,kernelspecs:Object.fromEntries(this._specs)}}get defaultKernelName(){let e=p.PageConfig.getOption("defaultKernelName");if(!e&&this._specs.size){const s=Array.from(this._specs.keys());s.sort(),e=s[0]}return e||m}get factories(){return this._factories}register(e){const{spec:s,create:t}=e;this._specs.set(s.name,s),this._factories.set(s.name,t)}}}}]);