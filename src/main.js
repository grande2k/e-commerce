import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import Toast from "vue-toastification";

import "@/assets/styles/main.scss";
import "vue-toastification/dist/index.css";

const toastOptions = {
    position: 'top-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
};

const app = createApp(App)

app.use(router)
app.use(Toast, toastOptions);
app.mount("#app")