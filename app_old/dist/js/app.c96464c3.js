(function(){"use strict";var t={9356:function(t,e,a){var s=a(9242),i=a(3396);function r(t,e,a,s,r,n){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o)}var n={name:"HomeView",data(){return{appAuth:{},tasksList:{},projectsId:[]}}},o=a(89);const l=(0,o.Z)(n,[["render",r]]);var c=l,u=a(2483),d=a(7139);const p={class:"tasks__popup"},h={class:"tasks__popup-detail"},g={class:"tasks__popup-header"},m={class:"tasks__popup-header-title"};function f(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("div",h,[(0,i._)("div",g,[(0,i._)("h3",m,"Task Detail "+(0,d.zw)(t.$route.params.id),1)])])])}var v=a(65),k={name:"Item",data(){return{appAuth:{},tasksList:{},loader:!1,taskId:""}},methods:{},computed:{...(0,v.Se)(["getUserData"]),...(0,v.Se)(["getAppData"])},async created(){await this.$store.dispatch("getAuthPortal"),await this.$store.dispatch("getAuth")},watch:{getAppData:{immediate:!0,handler(t,e){console.log(t);this.$route.params.id;console.log(this.getAppData)}}}};const w=(0,o.Z)(k,[["render",f]]);var b=w;const _={class:"main-grid"},O={class:"main-grid-container"};function D(t,e,a,s,r,n){const o=(0,i.up)("GridHead"),l=(0,i.up)("GridBody");return(0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("div",O,[(0,i.Wm)(o),(0,i.Wm)(l,{tasksObj:r.tasksList},null,8,["tasksObj"])])])}const y={class:"main-grid-header"},j={class:"main-grid-row-head"},S={class:"main-grid-cell-inner"},A={class:"main-grid-cell-head-container"},P={class:"main-grid-head-title"},N=(0,i._)("span",{class:"main-grid-resize-button",title:"{{title}}"},null,-1),I=(0,i._)("span",{class:"main-grid-control-sortmain-grid-control-sort-desc"},null,-1);function J(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",j,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.headerTitles,(t=>((0,i.wg)(),(0,i.iD)("div",{class:(0,d.C_)(["main-grid-cell-head main-grid-cell-left",t])},[(0,i._)("div",S,[(0,i._)("span",A,[(0,i._)("span",P,(0,d.zw)(t),1),N,I])])],2)))),256))])])}var L={name:"GridHead",data(){return{headerTitles:["Название","Активность","Крайний срок","Постановщик","Ответственный","Проект"]}},methods:{},computed:{},created(){},watch:{}};const T=(0,o.Z)(L,[["render",J]]);var x=T,G=a.p+"img/loader.87bd8715.gif";const $={class:"main-grid-body"},C={class:"main-grid-row main-grid-row-body"},H={class:"main-grid-cell-inner"},M={class:"main-grid-cell-content"},z={key:0,class:"main-grid-loader"},U=(0,i._)("img",{class:"main-grid-loader-gif",alt:"loader.gif",src:G},null,-1),Z=[U];function q(t,e,a,s,r,n){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",$,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.tasksList,(t=>((0,i.wg)(),(0,i.iD)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t,(t=>((0,i.wg)(),(0,i.iD)("div",{class:(0,d.C_)(["main-grid-cell",t.name])},[(0,i._)("div",H,[(0,i._)("span",M,["title"!=t.name?((0,i.wg)(),(0,i.iD)("a",{key:0,class:(0,d.C_)(["main-grid-cell-task",{"ui-label ui-label-default ui-label-fill ui-label-link":"deadline"===t.name}])},(0,d.zw)(t.value.name?t.value.name:t.value),3)):(0,i.kq)("",!0),"title"==t.name?((0,i.wg)(),(0,i.j4)(o,{key:1,class:(0,d.C_)(["main-grid-cell-task",{"ui-label ui-label-default ui-label-fill ui-label-link":"deadline"===t.name}]),to:"/item/"+t.value.id},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(t.value.title),1)])),_:2},1032,["to","class"])):(0,i.kq)("",!0)])])],2)))),256))])))),256)),r.loader?((0,i.wg)(),(0,i.iD)("div",z,Z)):(0,i.kq)("",!0)])}a(7658);var B={name:"GridBody",props:{tasksObj:{type:Object,required:!0}},data(){return{appAuth:{},tasksList:{},loader:!1}},methods:{},computed:{},created(){},watch:{tasksObj:{immediate:!0,handler(t,e){if(Object.keys(t).length>0){let s=["title","activityDate","deadline","creator","responsible","group"];var a=[];function i(t){const e={year:"numeric",month:"long",day:"numeric"},a=new Date(t).toLocaleDateString(void 0,e);return a}for(let r=0;r<this.tasksObj.length;r++){let n=0;a.push(s.map((t=>(n++,"activityDate"==t||"deadline"==t?(this.tasksObj[r][t]=null==this.tasksObj[r][t]?"Без срока":i(this.tasksObj[r][t]),{id:n,name:t,value:this.tasksObj[r][t]}):"title"==t?(console.log(this.tasksObj[r]),{id:n,name:t,value:{id:this.tasksObj[r]["id"],title:this.tasksObj[r]["title"]}}):{id:n,name:t,value:this.tasksObj[r][t]}))))}this.tasksList=a,this.loader=!1}else 0==Object.keys(t).length&&(this.loader=!0)}}}};const K=(0,o.Z)(B,[["render",q]]);var E=K;async function Y(t,e,a,s){var i=new Headers;i.append("Content-Type","application/json");var r=JSON.stringify(a),n={method:"POST",headers:i,body:r,redirect:"follow"};return fetch(`https://${t}/rest/${e}?auth=${s}`,n).then((t=>t.text())).then((t=>t)).catch((t=>console.log("error",t)))}var W={name:"Grid",data(){return{appAuth:{},tasksList:{},projectsId:[]}},components:{GridHead:x,GridBody:E},methods:{},computed:{...(0,v.Se)(["getUserData"]),...(0,v.Se)(["getAppData"])},async created(){await this.$store.dispatch("getAuthPortal"),await this.$store.dispatch("getAuth"),this.projectsId=[this.getUserData.projectsID]},watch:{projectsId:{immediate:!0,async handler(t,e){if(sessionStorage.tasks_list)this.tasksList=JSON.parse(sessionStorage.tasks_list),console.log("из сессии");else if(t.length>0){this.appAuth=this.getAppData;let t=this.projectsId,e={filter:{GROUP_ID:t[0]}};var a=await Y("cp.micros.uz","tasks.task.list",e,this.appAuth.access_token);JSON.parse(a)&&(sessionStorage.tasks_list=JSON.stringify(JSON.parse(a).result.tasks),this.tasksList=JSON.parse(a).result.tasks,console.log("из rest запроса"))}}}}};const F=(0,o.Z)(W,[["render",D]]);var R=F;const V=(0,u.p7)({history:(0,u.PO)(),routes:[{path:"/",name:"Grid",component:R},{path:"/item/:id",name:"Item",component:b}]});var X=V,Q=(0,v.MT)({state:{userData:{},techPortal:{}},getters:{getUserData(t){return t.userData},getAppData(t){return t.techPortal}},mutations:{userDataMutation(t,e){return t.userData=e},appDataMutation(t,e){return t.techPortal=e}},actions:{async getAuth({commit:t}){if(sessionStorage.client_token)t("userDataMutation",JSON.parse(sessionStorage.client_token));else;},async getAuthPortal({commit:t}){if(!sessionStorage.tech_token){var e={method:"POST",redirect:"follow"};return fetch("https://micros.uz/it/solutions_our/micros.tech.support/ajax.php?APP_TOKEN=true",e).then((t=>t.text())).then((e=>{sessionStorage.tech_token=e,t("appDataMutation",JSON.parse(e))})).catch((t=>console.log("error",t)))}t("appDataMutation",JSON.parse(sessionStorage.tech_token))}},modules:{}});{const t=document.createElement("script");t.src="//api.bitrix24.com/api/v1/";document.head.appendChild(t);t.onload=function(){sessionStorage.client_token||BX24.callMethod("app.option.get",{},(t=>{sessionStorage.client_token=JSON.stringify(t.data())}))}}(0,s.ri)(c).use(Q).use(X).mount("#app")}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,r){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],r=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,i,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/micros.support/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,r,n=s[0],o=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var u=l(a)}for(e&&e(s);c<n.length;c++)r=n[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkmicros_support"]=self["webpackChunkmicros_support"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9356)}));s=a.O(s)})();
//# sourceMappingURL=app.c96464c3.js.map