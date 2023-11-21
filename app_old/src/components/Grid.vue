<template lang="pug">
div.main-grid
  //- pre {{tasksObj.result.tasks}}
  div.main-grid-container
    div.main-grid-header
      div.main-grid-row-head
        div.main-grid-cell-head.main-grid-cell-left
          div.main-grid-cell-inner
            span.main-grid-cell-head-container
              span.main-grid-head-title Название
              span.main-grid-resize-button(title="")
              span.main-grid-control-sortmain-grid-control-sort-desc
        div.main-grid-cell-head.main-grid-cell-left
          div.main-grid-cell-inner
            span.main-grid-cell-head-container
              span.main-grid-head-title Активность
              span.main-grid-resize-button(title="")
              span.main-grid-control-sortmain-grid-control-sort-desc
        div.main-grid-cell-head.main-grid-cell-left
          div.main-grid-cell-inner
            span.main-grid-cell-head-container
              span.main-grid-head-title Крайний срок
              span.main-grid-resize-button(title="")
              span.main-grid-control-sortmain-grid-control-sort-desc
        div.main-grid-cell-head.main-grid-cell-left
          div.main-grid-cell-inner
            span.main-grid-cell-head-container
              span.main-grid-head-title Постановщик
              span.main-grid-resize-button(title="")
              span.main-grid-control-sortmain-grid-control-sort-desc
        div.main-grid-cell-head.main-grid-cell-left
          div.main-grid-cell-inner
            span.main-grid-cell-head-container
              span.main-grid-head-title Ответственный
              span.main-grid-resize-button(title="")
              span.main-grid-control-sortmain-grid-control-sort-desc
    div.main-grid-body
      div.main-grid-row.main-grid-row-body
      


</template>

<script>

  import {mapActions, mapGetters} from "vuex"
  import {sendRequest} from "../assets/scripts/bx24/call.methods"
  // sendRequest("cp.micros.uz","tasks.task.list")
  export default {
    name: 'Grid',
    props: {
      taskssObj: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        appAuth:{},
        tasksList:{}
      }
    },
    methods: {
    },
    computed: {
    },
    created() {
    },
    watch: {
    }, 
  }
            // BX24.init(function(){
            //     BX24.callMethod("app.option.set",{
            //         "options":{
            //             "login"   :newValue.data.LOGIN,
            //             "password":this.password,
            //             "userID" : newValue.data.ID,              
            //         } 
            //         },function(result){
            //           if(result.error()){
            //             console.log(result.error());
            //           }else{
            //             console.log(result.data());
            //             BX24.installFinish();
            //           }
            //     });
            // })
          
</script>

