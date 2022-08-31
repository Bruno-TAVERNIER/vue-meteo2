import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* plugin de traduction + dictionnaire des mots */
import i18n from './plugins/i18n'
import dico from './plugins/dico'
/* pour les API */
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(router).use(VueAxios, axios).use(i18n, dico).mount('#app')
