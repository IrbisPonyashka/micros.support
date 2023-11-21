<template lang="pug">
div.tasks__popup
  div.tasks__popup-detail
    div.tasks__popup-header
      h3.tasks__popup-header-title Task Detail {{$route.params.id}}
      pre {{taskObject}}
</template>

<script>
  import {mapActions, mapGetters} from "vuex"
  import {sendRequest} from "@/assets/scripts/bx24/call.methods"
    export default {
      name: 'Item',
      data() {
        return {
          appAuth:{},
          tasksList:{},
          loader:false,
          taskObject:""
        }
      },
      methods: {
      },
      computed: {
      ...mapGetters(["getUserData","getAppData"]),
      },
      mounted(){
          // let params = {"taskId":this.$route.params.id}
          // this.taskObject = sendRequest("cp.micros.uz","tasks.task.get",params,this.getAppData.access_token);
          console.log(this.getAppData);
      },
      watch: {
        // getAppData:{
        //   immediate: true,
        //   handler(newValue, oldValue) {
        //     console.log(newValue);
        //   }
        // }
      }
    };
</script>