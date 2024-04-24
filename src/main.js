import { createApp } from 'vue'
import App from './App.vue'
import LoginComponent from './components/LoginComponent.vue'

const app = createApp(App);

app.component("LoginComponent", LoginComponent);

app.mount("#app");

