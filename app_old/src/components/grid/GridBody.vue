<template lang="pug">
div.main-grid-body
    div.main-grid-row.main-grid-row-body(v-for="task in tasksList")
        div.main-grid-cell(v-for="taskItem in task" :class="taskItem.name")
            div.main-grid-cell-inner
                span.main-grid-cell-content
                    a.main-grid-cell-task(
                      v-if="taskItem.name!='title'"
                      :class="{'ui-label ui-label-default ui-label-fill ui-label-link':taskItem.name==='deadline'}") {{ taskItem.value.name?taskItem.value.name:taskItem.value}}
                    router-link.main-grid-cell-task(
                      :to="'/tasks/item/'+taskItem.value.id"
                      v-if="taskItem.name=='title'"
                      :class="{'ui-label ui-label-default ui-label-fill ui-label-link':taskItem.name==='deadline'}") {{ taskItem.value.title}}
    div.main-grid-loader(v-if="loader")
      img.main-grid-loader-gif(alt="loader.gif" src="@/assets/img/elems/loader.gif")
</template>

<script>

console.log(process.env.BASE_URL);
  import {mapActions, mapGetters} from "vuex"
  export default {
    name: 'GridBody',
    props: {
      tasksObj: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        appAuth:{},
        tasksList:{},
        loader:false
      }
    },
    methods: {
    },
    computed: {
    },
    created() {
    },
    watch: {
      tasksObj:{
        immediate: true,
        handler(newValue, oldValue) {
          if(Object.keys(newValue).length>0){
            // let requiredKeys = ["id","title","activityDate","deadline","createdBy","responsibleId","description","createdDate","groupId"];
            let requiredKeys = ["title","activityDate","deadline","creator","responsible","group"];
            var transformedArray = [];
            function formatDate(dateString) {
                const options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  // hour: "numeric",
                  // minute: "numeric",
                  // timeZoneName: "short"
                };
                  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
                  return formattedDate;
              };
            for(let j = 0;j<this.tasksObj.length;j++){
              let i = 0;
              transformedArray.push(requiredKeys.map(key => { i++;
                if(key=="activityDate"||key=="deadline"){
                  this.tasksObj[j][key] = this.tasksObj[j][key]==null?"Без срока":formatDate(this.tasksObj[j][key]);
                  return ({ id: i, name:key, value: this.tasksObj[j][key] })
                }else if(key=="title"){
                  return ({ id: i, name:key, value: {id:this.tasksObj[j]["id"],title:this.tasksObj[j]["title"]} })
                }else{
                  return ({ id: i, name:key, value: this.tasksObj[j][key] })
                }
              }));
            }
            this.tasksList = transformedArray;
            this.loader = false;
          }else if(Object.keys(newValue).length==0){
            this.loader = true;
          }
        }
      }
    }, 
  }
</script>

