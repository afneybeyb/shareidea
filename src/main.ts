import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import of the base stylesheet
import './assets/base.css';

// Initialize Vue app
const app = createApp(App);
app.use(router);

// Mount the app to the #app element
app.mount("#app");
