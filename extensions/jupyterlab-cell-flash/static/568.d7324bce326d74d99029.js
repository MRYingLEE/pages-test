"use strict";(self.webpackChunkjupyterlab_cell_flash=self.webpackChunkjupyterlab_cell_flash||[]).push([[568],{568:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(972);const s={id:"jupyterlab-cell-flash:plugin",autoStart:!0,optional:[a(921).ISettingRegistry],activate:async(e,t)=>{if(t){const e=await t.load(s.id),a=document.documentElement,n=()=>{const t=e.get("color").composite,n=e.get("duration").composite;a.style.setProperty("--jp-cell-flash-color",t),a.style.setProperty("--jp-cell-flash-duration",`${n}s`)};n(),e.changed.connect(n)}n.NotebookActions.executed.connect(((e,t)=>{const{cell:a}=t,n=a.editor.host;n.classList.remove("flash-effect"),n.offsetWidth;const s=()=>{n.removeEventListener("animationcancel",s),n.removeEventListener("animationend",s),n.classList.remove("flash-effect")};requestAnimationFrame((()=>{n.addEventListener("animationend",s),n.addEventListener("animationcancel",s),n.classList.add("flash-effect")}))}))}},o=s}}]);