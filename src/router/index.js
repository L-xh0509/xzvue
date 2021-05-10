import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from "../views/Index.vue";
import Details from "../views/Details.vue";
import Products from "../views/Products.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: "/", name: 'Index', component: Index },
        { path: "/details", component: Details },
        { path: "/products",  component: Products },
        { path: "*",component: NotFound },
    ]
})
export default router