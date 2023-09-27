import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Calendar from 'primevue/calendar';
import OverlayPanel from 'primevue/overlaypanel';
import Ripple from 'primevue/ripple';
import Checkbox from 'primevue/checkbox';
import Avatar from 'primevue/avatar';
import Timeline from 'primevue/timeline';
import Rating from 'primevue/rating';

import Password from 'primevue/password';

import Dropdown from 'primevue/dropdown';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("InputText",InputText)
    nuxtApp.vueApp.component("Calendar",Calendar)
    nuxtApp.vueApp.component("OverlayPanel",OverlayPanel)
    nuxtApp.vueApp.component('Checkbox',Checkbox)
    nuxtApp.vueApp.component('Avatar',Avatar)
    nuxtApp.vueApp.component('Timeline',Timeline)
    nuxtApp.vueApp.component('Dropdown',Dropdown)
    nuxtApp.vueApp.component('Rating',Rating)
    nuxtApp.vueApp.component('Password',Password)
    //  ! Driectives
    nuxtApp.vueApp.directive('ripple',Ripple)
    //other components that you need
});