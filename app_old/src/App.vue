<template lang="pug"> 
h1 micros.app
router-link.main-grid-cell-task(:to="'/tasks/'") list
router-view
</template>


<script>
// @ is an alias to /src
  // import {mapActions, mapGetters} from "vuex"
  // import {sendRequest} from "../src/assets/scripts/bx24/call.methods"

export default {
  name: 'HomeView',
  data () {
    return {
      appAuth:{},
      tasksList:{},
      projectsId:[]
    }
  },
  components: {
  },
  // computed: {
  //   ...mapGetters(["getUserData"]),
  //   ...mapGetters(["getAppData"]),
  // },
  // async created() {
  //   // Запустите действия при инициализации приложения
  //   await this.$store.dispatch('getAuthPortal');
  //   await this.$store.dispatch('getAuth');
  //   // console.log(this.getUserData.projectsID.replace(" ",""));
  //   this.projectsId = [this.getUserData.projectsID];
  // },
  // watch: {
  //   projectsId: {
  //     immediate: true,
  //     async handler(newValue, oldValue) {
  //       if(sessionStorage.tasks_list){
  //         this.tasksList = JSON.parse(sessionStorage.tasks_list);
  //         console.log("из сессии");
  //       }else{
  //         if(newValue.length>0){
  //           this.appAuth = this.getAppData;
  //             let projectsId = this.projectsId;
  //             let params = {"filter":{"GROUP_ID": projectsId[0]}}
  //             var tasksObj = await sendRequest("cp.micros.uz","tasks.task.list",params,this.appAuth.access_token);
  //             if(JSON.parse(tasksObj)){
  //               sessionStorage.tasks_list = JSON.stringify(JSON.parse(tasksObj).result.tasks); 
  //               this.tasksList = JSON.parse(tasksObj).result.tasks;
  //               console.log("из rest запроса");
  //             }
  //           // }
  //         }
  //       }
  //     }
  //   }
  //   // getAppData: {
  //   //   immediate: true,
  //   //   async handler(newValue, oldValue) {
  //   //     if(sessionStorage.tasks_list){
  //   //       this.tasksList = JSON.parse(sessionStorage.tasks_list);
  //   //       console.log("из сессии");
  //   //     }else{
  //   //       if(Object.keys(newValue).length>0){
  //   //         this.appAuth = this.getAppData;
  //   //           await nextTick();
  //   //           let projectsId = this.projectsId;
  //   //           console.log(this.$store.getters.getUserData);
  //   //           let params = {"filter":{"GROUP_ID": projectsId[0]}}
  //   //           var tasksObj = await sendRequest("cp.micros.uz","tasks.task.list",params,this.appAuth.access_token);
  //   //           if(JSON.parse(tasksObj)){
  //   //             sessionStorage.tasks_list = JSON.stringify(JSON.parse(tasksObj).result.tasks); 
  //   //             this.tasksList = JSON.parse(tasksObj).result.tasks;
  //   //             console.log("из rest запроса");
  //   //           }
  //   //         // }
  //   //       }
  //   //     }
  //   //   }
  //   // }
  // },
}
</script>