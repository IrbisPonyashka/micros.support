<template lang="pug"> 
router-view
  div.auth__page
    AuthForm(msg="Вход в систему")
</template>


<script>
// @ is an alias to /src
import AuthForm from '@/components/AuthForm.vue'

export default {
  name: 'HomeView',
  components: {
    AuthForm
  }
}
</script>