<template lang="pug">
div.container
  //- form.form__auth(@submit="formHandler" v-if="!getUserData.request")
  form.form__auth(@submit="formHandler")
    div.form__auth-wrapp
      span.form__auth-header
        img.form__auth-logo(src="@/assets/img/logo/micros.svg")
        h3.form__auth-title {{ msg }}
      div.ui-form-row(v-if="fieldError")
        div.ui-form-content
          div.ui-alert.ui-alert-danger.ui-alert-icon-danger
            span.ui-alert-message
              strong Введите корректные данные
            span.ui-alert-close-btn(@click="setStatus")
      div.ui-form-row
        div.ui-form-content
          div.ui-ctl.ui-ctl-textbox.ui-ctl-w100(
            :class="{'ui-ctl-warning':fieldError, 'ui-ctl-success':succesAuth}"
          )
            input(type="text").ui-ctl-element(
              placeholder="URL портала" v-model="portalUrl" @input="setStatus"
            )
      div.ui-form-row
        div.ui-form-content
          div.ui-ctl.ui-ctl-textbox.ui-ctl-w100(
            :class="{'ui-ctl-warning':fieldError, 'ui-ctl-success':succesAuth}"
          )
            input(type="text").ui-ctl-element(
              placeholder="client_id" v-model="clientId" @input="setStatus"
            )
      div.ui-form-row
        div.ui-form-content
          div.ui-ctl.ui-ctl-textbox.ui-ctl-w100(
            :class="{'ui-ctl-warning':fieldError, 'ui-ctl-success':succesAuth}"
          )
            input(type="text").ui-ctl-element(
              placeholder="client_secret" v-model="clientSecret" @input="setStatus"
            )
      div.ui-form-row
        div.ui-form-content
          div.ui-ctl.ui-ctl-textbox.ui-ctl-w100(
            :class="{'ui-ctl-warning':fieldError, 'ui-ctl-success':succesAuth}"
          )
            input(type="text").ui-ctl-element(
              placeholder="Login" v-model="login" @input="setStatus"
            )
      div.ui-form-row
        div.ui-form-content
          div.ui-ctl.ui-ctl-textbox.ui-ctl-w100(
            :class="{'ui-ctl-warning':fieldError, 'ui-ctl-success':succesAuth}"
          )
            input(type="password").ui-ctl-element(
              placeholder="Password" v-model="password" @input="setStatus"
            )
      div.ui-form-row
        div.ui-form-content
          button.ui-btn.ui-btn-round(
            :disabled="btnDisable" :class="{'ui-btn-success':succesAuth}"
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
        clientId:"",
        clientSecret:"",
        portalUrl:"",
        fieldError:false,
        btnDisable:true,
        succesAuth:false
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
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic "+btoa(`${this.login}:${this.password}`));

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        let url = process.env.NODE_ENV === "production"?"https://micros.uz":"proxy";

        fetch(`${url}/it/solutions_our/micros.tech.support/ajax.php?client_id=${this.clientId}&client_secret=${this.clientSecret}&portal_url=${this.portalUrl}`, requestOptions)
          .then(response => response.text())
          .then(result => {
            if(JSON.parse(result).access_token && JSON.parse(result).refresh_token){
              this.succesAuth = true;
              const accessToken = JSON.parse(result).access_token,
                    refreshToken = JSON.parse(result).refresh_token,
                    portal_url = this.portalUrl,
                    clientId = this.clientId,
                    clientSecret = this.clientSecret;
                    console.log(JSON.parse(result),portal_url);

              if(process.env.NODE_ENV === 'production'){
                  BX24.init(function(){
                    BX24.callMethod("app.option.set",{
                        "options":{
                          "tokens":{
                            "access_token":accessToken, 
                            "refresh_token":refreshToken,
                            "client_id":clientId, 
                            "client_secret":clientSecret, 
                            "portal_url":portal_url, 
                          }
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
          })
          .catch(error => {
            this.fieldError = true;
            console.log('error', error);
          });
        // fetch(`${this.portalUrl}/oauth/authorize/?client_id=${this.clientId}`, requestOptions)
        // fetch(`https://${this.portalUrl}/oauth/authorize/?client_id=${this.clientId}?state=${this.clientSecret}`, requestOptions)
        // this.getAuth({login:this.login, password:this.password});
      }
    },
    computed: {
      allFieldsFilled() {
        return (
          this.login && this.password && this.clientId && this.clientSecret && this.portalUrl
        );
      },
    },
    watch: {
      allFieldsFilled(newVal) {
        if(newVal){
          this.btnDisable = false;
        }
      }
    }, 
  }
</script>

