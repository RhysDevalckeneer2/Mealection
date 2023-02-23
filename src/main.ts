<<<<<<< Updated upstream
import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";

createApp(App).mount("#app");
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes';

createApp(App).use(router).mount('#app')
>>>>>>> Stashed changes
