<template lang="pug">
div.main-grid-header
    div.main-grid-row-head
        div.main-grid-cell-head.main-grid-cell-left(v-for="title in headerTitles" :class="title")
            div.main-grid-cell-inner
                span.main-grid-cell-head-container
                    span.main-grid-head-title {{title}}
                    span.main-grid-resize-button(title="{{title}}")
                    span.main-grid-control-sortmain-grid-control-sort-desc

</template>

<script>

  import {mapActions, mapGetters} from "vuex"

  export default {
    name: 'GridHead',
    data() {
      return {
        headerTitles:["Название","Активность","Крайний срок","Постановщик","Ответственный","Проект"],
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

