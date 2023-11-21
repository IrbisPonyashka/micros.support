import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const script = document.createElement('script');
script.src = '//api.bitrix24.com/api/v1/';
document.head.appendChild(script);


// import "https://micros.bitrix24.ru/bitrix/js/ui/buttons/ui.buttons.min.js"; // ui.buttons
// import "https://micros.bitrix24.ru/bitrix/js/ui/alerts/ui.alerts.min.js"; // ui.buttons

import "@/assets/scripts/script.js"

import "@/assets/style/style.scss"


createApp(App).use(store).use(router).mount('#app')
