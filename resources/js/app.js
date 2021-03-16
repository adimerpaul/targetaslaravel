import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import home from './components/home';
import personas from './components/personas';
const routes = [
    { path: '/home', component: home },
    { path: '/personas', component: personas },
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});
const app = new Vue({
    el: '#app',
    router,
    mounted() {
        // You are able to access plugin from everywhere via this.$toastr
        // this.$toastr.defaultPosition = "toast-top-left";
        // Send message to browser screen
        // this.$toastr.s(
        //     "This Message From Toastr Plugin\n You can access this plugin : <font color='yellow'>this.$toastr</font>"
        // );
    }
});
