<template>
    <div>
        <section class="jumbo">
            <div class="wrapper d-flex justify-content-center align-items-center">
                <div class="container text-center text-white jumbo-cont">
                    <h1 class="pb-5">Hi! I'm Davide Rullo, <br> and this is my Coding Portfolio</h1>
                    <router-link class=" cta" to="/projects">Go to my projects</router-link>
                </div>
            </div>
        </section>
        <section class="skills d-flex justify-content-center align-items-center">
            <div class="container">
                <h2 class="skill-title text-center pb-5">Skills</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
                    <div class="col d-flex justify-content-center">
                        <img class="img-fluid skill-icon" src="../assets/htmlicon.png" alt="">
                    </div>
                    <div class="col d-flex justify-content-center">
                        <img class="img-fluid skill-icon" src="../assets/cssicon.png" alt="">
                    </div>
                    <div class="col d-flex justify-content-center">
                        <img class="img-fluid skill-icon" src="../assets/jslogo.png" alt="">
                    </div>
                    <div class="col d-flex justify-content-center">
                        <img class="img-fluid skill-icon" src="../assets/vuejs.png" alt="">
                    </div>
                    <div class="col d-flex justify-content-center">
                        <img class="img-fluid skill-icon" src="../assets/phplogo.png" alt="">
                    </div>
                    <div class="col d-flex justify-content-center">
                        <img class="img-fluid skill-icon" src="../assets/laravelsvg.png" alt="">
                    </div>
                </div>
            </div>

        </section>
        <section class="latest p-4">


            <div class="container">
                <h2 class="p-4 text-center text-white">My Latest Projects</h2>
                <div class="row row-cols-1 row-cols-sm-3 g-4 p-4">
                    <div class="col d-flex justify-content-center align-items-center" v-for="project in latest">

                        <router-link :to="{ name: 'project', params: { slug: project.slug } }">
                            <div class="card">
                                <img class="img-fluid" :src="base_url + '/storage/' + project.cover_image" alt="">
                                <div class="card-body">
                                    <h4 class="card-title">{{ project.title }}</h4>
                                    <p class="card-text">{{ project.description }}</p>
                                </div>
                            </div>
                        </router-link>

                    </div>

                </div>






            </div>
        </section>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'HomeView',
    data() {
        return {
            latest: null,
            base_url: 'http://127.0.0.1:8000',
            portfolio_latest: '/api/latest',

        }
    },

    mounted() {
        axios
            .get(this.base_url + this.portfolio_latest)
            .then(response => {
                console.log(response);
                this.latest = response.data.result

            })
            .catch(err => {
                console.error(err);
            })



    }
}



</script>

<style lang="scss" scoped>
.wrapper {
    height: 70vh;
}

.jumbo-cont {
    padding: 8rem;
}


.card:hover {
    filter: brightness(0.8);
    transition: all .3s linear;
}


.skills {
    background-color: #ffc0d0;
    padding: 2rem 0 6rem;
    color: black;

}

.skill-icon {
    width: 150px;
}
</style>