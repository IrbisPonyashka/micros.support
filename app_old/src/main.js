if(process.env.NODE_ENV==="production"){
    const script = document.createElement('script');
    script.src = '//api.bitrix24.com/api/v1/';
    let set = document.head.appendChild(script);
    script.onload = function () {
        // Библиотека загружена
        if (!sessionStorage.client_token) {
          BX24.callMethod("app.option.get", {}, (result) => {
            sessionStorage.client_token = JSON.stringify(result.data());
          });
        }
    }
}
import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import store from './store'


// import "https://micros.bitrix24.ru/bitrix/js/ui/buttons/ui.buttons.min.js"; // ui.buttons
// import "https://micros.bitrix24.ru/bitrix/js/ui/alerts/ui.alerts.min.js"; // ui.buttons

import  "@/assets/scripts/script.js"

import "@/assets/style/style.scss"


createApp(App).use(store).use(router).mount('#app')
