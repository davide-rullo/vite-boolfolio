import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";


import NotFoundView from "./views/NotFoundView.vue";

import SingleTechnologyView from "./views/SingleTechnologyView.vue";
import SingleTypeView from "./views/SingleTypeView.vue";






const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    },
    {
        path: '/projects/:slug',
        name: 'project',
        component: SingleProjectView
    },

    {
        path: '/technology/:slug',
        name: 'technology',
        component: SingleTechnologyView
    },

    {
        path: '/type/:slug',
        name: 'type',
        component: SingleTypeView
    },


    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    },



];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If the route has a hash (anchor), scroll to that hash position
        if (to.hash) {
            const offset = 56; // Adjust this value based on your fixed header height
            return {
                el: to.hash,
                top: document.querySelector(to.hash).offsetTop - offset,
                behavior: 'smooth'
            };
        }
        // If there's no hash, scroll to the top of the page
        return { top: 0, behavior: 'smooth' };
    },
})

export { router }