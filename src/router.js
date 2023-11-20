import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";

import ContactsView from "./views/ContactsView.vue";





const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/projects', component: ProjectsView },
    {
        path: '/projects/:slug',
        name: 'project',
        component: SingleProjectView
    },

    { path: '/contacts', component: ContactsView },


];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router }