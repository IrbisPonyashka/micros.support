import { createStore } from 'vuex'

export default createStore({
  state: {
    userData:{},
    techPortal:{},
  },
  getters: {
    getUserData(state){
      return state.userData
    },
    getAppData(state){
      return state.techPortal
    }
  },
  mutations: {
    userDataMutation(state,userData){
      return state.userData = userData;
    },
    appDataMutation(state,techPortal){
      return state.techPortal = techPortal;
    }
  },
  actions: {
    async getAuth({commit}){
      if(!sessionStorage.client_token){
        if(process.env.NODE_ENV=="development"){
          let url = "proxy/";
          // var clientId = "local.6527f42b2cb1d7.48890337",
          // clientSecret = "KUbOloEPwHSFPLrcfatnGk78BK2xoME4tGMIlXM4C3pKuhFABU",
          var clientId = "app.646477f8473e09.10888687", // токены от приложения устанавливаемого из маркетплейса
              clientSecret = "qE4gqKffHfls71wxPYZ7KFinljEAMgwqNM88UxD6zM993SzTGD",
              refreshToken = "7df658650063daa60000b79b0000014f201c07fbb630cb8f4ba9f034847e5a0d88607e";
              
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Content-Type", "application/json");
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              redirect: 'follow',
              'x-target': 'https://oauth.bitrix.info'
            };
          
            await fetch(`${url}oauth/token/?grant_type=refresh_token&client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}`, requestOptions)
            .then(response => response.text())
            .then(async result => {
              const clientAuthObj = {
                "refresh_token":JSON.parse(result).refresh_token,
                "access_token":JSON.parse(result).access_token
              };
              if(clientAuthObj){
                var options = await getOption(clientAuthObj);
                if(options){
                  sessionStorage.client_token = JSON.stringify(options);
                  commit("userDataMutation",options);
                }
              }
            })
            .catch(error => console.log('error', error));
          
          async function getOption(objectAuth){

            var myHeaders = new Headers();
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              redirect: 'follow'
            };
            return await fetch(`https://micros.bitrix24.ru/rest/app.option.get?auth=${objectAuth.access_token}`, requestOptions)
              .then(response => response.text())
              .then(result => {
                return JSON.parse(result).result;
              })
              .catch(error => console.log('error', error));
          }
        }else{
          // commit("userDataMutation",result.data());
        }
      }else{
        commit("userDataMutation",JSON.parse(sessionStorage.client_token));
      }
    },
    async getAuthPortal({commit}){
      if(!sessionStorage.tech_token){
        if(process.env.NODE_ENV=="development"){
            var myHeaders = new Headers();
            myHeaders.append("Host", "cp.micros.uz");
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              redirect: 'follow',
              'x-target': 'https://oauth.bitrix.info'
            };

            // let url = process.env.NODE_ENV=="development"?"proxy/":"https://oauth.bitrix.info/";
            let url = "proxy/";
            return fetch(url+"oauth/token/?grant_type=refresh_token&client_id=local.65142df8e8d666.01765156&client_secret=l37e9E8Ji4C0isz14qafXuvD8KTNo0WCSKyBVcCfsmJX0X5OPa&refresh_token=8c5354650067361d0004ce04000020460000079b87cb1e822a29dfc4de035dbe9220f8", requestOptions)
              .then(response => response.text())
              .then(result => {
                sessionStorage.tech_token = result;
                commit("appDataMutation",JSON.parse(result));
              })
              .catch(error => console.log('error', error));
        }else{
          var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          return fetch("https://micros.uz/it/solutions_our/micros.tech.support/ajax.php?APP_TOKEN=true", requestOptions)
            .then(response => response.text())
            .then(result => {
              sessionStorage.tech_token = result;
              commit("appDataMutation",JSON.parse(result));
            })
            .catch(error => console.log('error', error));
        }
      }else{
        commit("appDataMutation",JSON.parse(sessionStorage.tech_token));
      }
    }
  },
  modules: {
  }
})
