<script>
import axios from 'axios';
import { state } from "../state.js"
import CursorEffect from './CursorEffect.vue';

export default {
    mixins: [CursorEffect],
    name: 'ProjectCard',
    components:{
        CursorEffect
    },
    data() {
        return {
            projects: null,
            technologies: null,
            portfolio_types: '/api/types',
            types: null,
            state,
        }
    },

    methods: {

    },

    mounted() {
        
    }
}

</script>

<template>
    <section class="projects pt-3 pb-5">
        <div v-if="!isMobile" class="light-effect" :style="{ top: mouseY + 'px', left: mouseX + 'px', width: lightSize + 'px', height: lightSize + 'px' }"></div>
        <div class="container pt-4">
            <div class="intro p-4" @mouseover="expandLight" @mouseout="shrinkLight">
                <h2 class="text-white ">Progetti</h2>
                <p class="intro-p">Ecco alcuni progetti che ho svolto durante il corso intensivo di Full-Stack Web
                    Development. All'interno
                    di
                    ognuno ho inserito una breve descrizione, le tecnologie utilizzate e il link al codice su Github.</p>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 justify-content-center p-4">
                <div class="col" v-for="project in state.projects">

                     <router-link :to="{ name: 'project', params: { slug: project.slug } }" @mouseover="disappearLight" @mouseout="shrinkLight"> 
                    <div class="card ">
                        <img height="" :src="'./src/assets/thumbs/' + project.thumb" alt="">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.name }}</h4>
                            <p class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                   </router-link> 
                </div>
            </div>

            <a class="link-git" href="https://github.com/davide-rullo" target="_blank" @mouseover="disappearLight" @mouseout="shrinkLight">
                <div class="d-flex justify-content-center gap-3 p-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            class="bi bi-github" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </div>
                    <div>
                        <h4>Github</h4>
                    </div>
                </div>
            </a>


        </div>


    </section>
</template>

<style scoped>
.admin a:hover {
    color: white;
}

.admin-icon {
    fill: white;
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid black;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

a {
    text-decoration: none;
}

.card:hover {
    filter: brightness(0.8);
    transition: all .3s linear;
}

.pagination {
    margin: 0;
    padding: 2rem 0 2rem;
}

p {
    font-size: 1rem;
}

.intro-p {
    font-size: 1.3rem;
}


</style>
