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

  export default {
    name: 'GridBody',
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
</script>

