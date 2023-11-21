import { createStore } from 'vuex'
// clientId:"local.65142df8e8d666.01765156",
// clientSecret:"l37e9E8Ji4C0isz14qafXuvD8KTNo0WCSKyBVcCfsmJX0X5OPa",  

export default createStore({
  state: {
    userData:{
      request:null
    }
  },
  getters: {
    getUserData(state){
      return state.userData
    }
  },
  mutations: {
    userDataMutation(state,userData){
      return state.userData = userData;
    }
  },
  actions: {
    getAuth({commit},objectAuth){
      
      let login = objectAuth.login,
        password = objectAuth.password;
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic "+btoa(`${login}:${password}`));

      let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow',
          'x-target': 'https://micros.uz'
      };
      let url = process.env.NODE_ENV=="production"?"https://micros.uz":"/proxy";
      fetch(url+"/it/solutions_our/micros.tech.support/ajax.php?auth=true", requestOptions)
      .then(response => response.text())
      .then(result => {
        if(JSON.parse(result).request!=false){
          let obj = {
            request : true,
            password : objectAuth.password,
            data : JSON.parse(result).data
          }
          console.log(obj);
          commit("userDataMutation",obj);
        }else{
          commit("userDataMutation",JSON.parse(result));
        };
      })
      .catch(error => console.log('error', error));
      
    }
  },
  modules: {
  }
})
