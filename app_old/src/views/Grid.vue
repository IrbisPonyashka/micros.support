<template lang="pug">
div.main-grid
  div.main-grid-container
    GridHead
    GridBody(:tasksObj="tasksList")
    
</template>

<script>

  import {mapActions, mapGetters} from "vuex"
  import GridHead from '@/components/grid/GridHead.vue'
  import GridBody from '@/components/grid/GridBody.vue'
  import {sendRequest} from "@/assets/scripts/bx24/call.methods"

  // sendRequest("cp.micros.uz","tasks.task.list")
  console.log(process.env);
  export default {
    name: 'Grid',
    data () {
      return {
        appAuth:{},
        tasksList:{},
        projectsId:[]
      }
    },
    components: {
      GridHead,
      GridBody
    },
    methods: {
    },
    computed: {
      ...mapGetters(["getUserData"]),
      ...mapGetters(["getAppData"]),
    },
    async created() {
      // Запустите действия при инициализации приложения
      await this.$store.dispatch('getAuthPortal');
      await this.$store.dispatch('getAuth');
      // console.log(this.getUserData.projectsID.replace(" ",""));
      this.projectsId = [this.getUserData.projectsID];
    },
    watch: {
      projectsId: {
        immediate: true,
        async handler(newValue, oldValue) {
          if(sessionStorage.tasks_list){
            this.tasksList = JSON.parse(sessionStorage.tasks_list);
            console.log("из сессии");
          }else{
            if(newValue.length>0){
              this.appAuth = this.getAppData;
                let projectsId = this.projectsId;
                let params = {"filter":{"GROUP_ID": projectsId[0]}}
                var tasksObj = await sendRequest("cp.micros.uz","tasks.task.list",params,this.appAuth.access_token);
                if(JSON.parse(tasksObj)){
                  sessionStorage.tasks_list = JSON.stringify(JSON.parse(tasksObj).result.tasks); 
                  this.tasksList = JSON.parse(tasksObj).result.tasks;
                  console.log("из rest запроса");
                }
              // }
            }
          }
        }
      }
    },
  }
          
</script>

