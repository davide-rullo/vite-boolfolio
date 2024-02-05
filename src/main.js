import { createApp } from 'vue'
import { router } from "./router.js";
import './style.scss'
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App);

// Usa VueUse Motion come plugin
app.use(MotionPlugin);

// Usa il router
app.use(router);

// Monta l'applicazione
app.mount('#app');
