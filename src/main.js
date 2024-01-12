import { createApp, defineComponent } from "vue";
import App from "./App.vue";
import BaseButton from "../src/components/BaseElements/BaseButton.vue";
import BaseInput from "../src/components/BaseElements/BaseInput.vue";
import GradientBG from "../src/components/GradientBG.vue";

const app = createApp(App);

const buttonWrapper = defineComponent(BaseButton);
const inputWrapper = defineComponent(BaseInput);
const gradientBGWrapper = defineComponent(GradientBG);

app.component("BaseButton", buttonWrapper);
app.component("BaseInput", inputWrapper);
app.component("GradientBG", gradientBGWrapper);

app.mount("#app");
