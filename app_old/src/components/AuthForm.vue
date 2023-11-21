<template lang="pug">
div.container
  form.form__auth(@submit="formHandler" v-if="!getUserData.request")
    div.form__auth-wrapp
      span.form__auth-header
        img.form__auth-logo(src="@/assets/img/logo/micros.svg")
        h3.form__auth-title {{ msg }}
      div.ui-form-row(v-if="fieldError")
        div.ui-form-content
          div.ui-alert.ui-alert-danger.ui-alert-icon-danger
            span.ui-alert-message
              strong Введите корректные данны sе
            span.ui-alert-close-btn(@click="setStatus")
      div.ui-form-row
        div.ui-form-content
          div.ui-ctl.ui-ctl-textbox.ui-ctl-w100(
            :class="{'ui-ctl-warning':fieldError}"
          )
            input(type="text").ui-ctl-element(
              placeholder="Login" v-model="login" @input="setStatus"
            )
      div.ui-form-row
        div.ui-form-content
          div.ui-ctl.ui-ctl-textbox.ui-ctl-w100(
            :class="{'ui-ctl-warning':fieldError}"
          )
            input(type="password").ui-ctl-element(
              placeholder="Password" v-model="password" @input="setStatus"
            )
      div.ui-form-row
        div.ui-form-content
          button.ui-btn.ui-btn-round(
            :disabled="btnDisable" :class="{'ui-btn-primary':false}"
          )(
            type="submit" @click="checkstatus")  Авторизация
</template>

<script>
  import {mapActions, mapGetters} from "vuex"

  export default {
    name: 'AuthForm',
    props: {
      msg: String
    },
    data () {
      return {
        login:"",
        password:"",
        fieldError:false,
        btnDisable:true
      }
    },
    methods: {
      ...mapActions(["getAuth"]),
      setStatus(e){
        if(e.type=="click"){
          this.login="";
          this.password="";
        }
        this.fieldError = false;
      },
      formHandler(e){
        e.preventDefault();
        this.getAuth({login:this.login, password:this.password});
      }
    },
    computed: {
      ...mapGetters(["getUserData"]),
    },
    watch: {
      getUserData: {
        immediate: true,
        handler(newValue, oldValue) {
          if (newValue.request === false) {
            this.fieldError = true;
          }else if(newValue.request===true){
            BX24.init(function(){
                BX24.callMethod("app.option.set",{
                    "options":{
                        "login"   :newValue.data.LOGIN,
                        "password":this.password,
                        "userID" : newValue.data.ID,              
                    } 
                    },function(result){
                      if(result.error()){
                        console.log(result.error());
                      }else{
                        console.log(result.data());
                        BX24.installFinish();
                      }
                });
            })
          }
        }
      },
      login:function(val){
        if(this.login!=""&&this.password!=""){
          this.btnDisable = false;
        }
      },
      password:function(val){
        if(this.login!=""&&this.password!=""){
          this.btnDisable = false;
        }
      }
    }, 
  }
</script>

