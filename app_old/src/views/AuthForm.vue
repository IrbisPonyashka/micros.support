<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AuthForm msg="Welcome to Your Vue.js App"/>
  </div>
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