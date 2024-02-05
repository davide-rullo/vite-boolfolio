<template>
    <div>
        <section class="jumbo">
            <div class="wrapper d-flex justify-content-center align-items-center">
                <div class="container text-center text-white jumbo-cont">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col d-flex align-items-center flex-column justify-content-center">
                            <h1 class="typing-demo">Hello World!</h1>
                            <h1 class=" " v-motion-fade> Mi chiamo Davide, <br> e questo è il mio Portfolio</h1>
                            <router-link class="pt-5 " to="/projects"><button v-motion-fade class="learn-more">
                                    <span class="circle pt-5" aria-hidden="true">
                                        <span class="icon arrow"></span>
                                    </span>
                                    <span class="button-text">I miei progetti</span>
                                </button></router-link>

                        </div>
                        <div class="col">
                            <img src="../assets/codingai2.png" v-motion-fade class="img-fluid" height="350" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="wrapper-grad" v-motion-fade-visible>
            <section class="home-about full  text-black" id="aboutsec">
                <div class="wrapper d-flex justify-content-center align-items-center">

                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-sm-8">

                                <h3>About me</h3>
                                <hr>
                                <p class="mb-5">Mi chiamo Davide Rullo e sono un Junior Full-Stack Web Developer. Ho una
                                    grande passione
                                    per la tecnologia e amo sperimentare e imparare nel mondo dello sviluppo Web.
                                    <br><br>
                                    Dopo la laurea magistrale in comunicazione digitale, ho intrapreso un corso intensivo di
                                    programmazione Web che mi ha permesso di esplorare questo meraviglioso campo.
                                </p>

                            </div>
                            <div class="col-7 col-sm-4 d-flex align-items-center">
                                <div class="circle">
                                    <img class="img-fluid rounded-circle" src="../assets/dr.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="skills d-flex justify-content-center align-items-center full" id="skillssec">
                <div class="container" v-motion-fade-visible>
                    <div class="row pb-5">
                        <div class="col d-flex flex-column flex-wrap align-items-end">
                            <h2 class="skill-title">Skills</h2>
                            <hr>
                            <!-- <div class="line"></div> -->
                            <div class="text-center">
                                <WordRotation class="">
                                </WordRotation>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-2 row-cols-md-5 g-4 pt-4">
                        <div class="col d-flex justify-content-center mb-md-5">
                            <img class="img-fluid skill-icon" src="../assets/htmlicon.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center mb-md-5">
                            <img class="img-fluid skill-icon" src="../assets/cssicon.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center mb-md-5">
                            <img class="img-fluid skill-icon" src="../assets/bootstrap.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center mb-md-5">
                            <img class="img-fluid skill-icon" src="../assets/jslogo.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center mb-md-5">
                            <img class="img-fluid skill-icon" src="../assets/vuejs.png" alt="">
                        </div>

                        <div class="col d-flex justify-content-center ">
                            <img class="img-fluid skill-icon" src="../assets/vitejs.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center ">
                            <img class="img-fluid skill-icon" src="../assets/phplogo.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center ">
                            <img class="img-fluid skill-icon" src="../assets/laravelsvg.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center ">
                            <img class="img-fluid skill-icon" src="../assets/illustrator.png" alt="">
                        </div>
                        <div class="col d-flex justify-content-center ">
                            <img class="img-fluid skill-icon" src="../assets/photoshop.png" alt="">
                        </div>
                    </div>



                </div>

            </section>
            <section class="latest p-4" id="latest">


                <div class="container" v-motion-fade-visible>
                    <h2 class="p-4 text-center text-black">I progetti più recenti</h2>
                    <div class="row row-cols-1 row-cols-lg-3 g-4 p-4">
                        <div class="col d-flex justify-content-center align-items-center" v-for="project in latest">

                            <router-link :to="{ name: 'project', params: { slug: project.slug } }">
                                <div class="card ">
                                    <img class="card-img-top img-fluid" :src="base_url + '/storage/' + project.cover_image"
                                        alt="">
                                    <div class="card-body">
                                        <h4 class="card-title">{{ project.title }}</h4>
                                        <p class="card-text">{{ project.description }}</p>
                                    </div>
                                </div>
                            </router-link>

                        </div>

                    </div>
                    <div class="d-flex justify-content-center">
                        <router-link class="pt-5 " to="/projects"><button class="learn-more sm-bt">
                                <span class="circle pt-5" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text text-black ">Portfolio</span>
                            </button></router-link>

                    </div>




                </div>
            </section>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import WordRotation from '../components/WordRotation.vue';

export default {

    name: 'HomeView',
    components: {
        WordRotation,
    },
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
    height: 94vh;
}

.full {
    height: 100vh;
}






.card:hover {
    filter: brightness(0.8);
    transition: all .3s linear;
}


.skills {


    color: black;

}

.skill-icon {
    width: 94px;
}

button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
}

button.learn-more {
    width: 15rem;
    height: auto;
}

button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #f2216c;
    ;
    border-radius: 1.625rem;
}

button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
}

button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
}

button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0 0.75rem 1rem;
    margin: 0 0 0 1.85rem;
    color: white;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
}

button:hover .circle {
    width: 100%;
}

button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
}

button:hover .button-text {
    color: #fff;
}

.sm-bt {
    width: 13rem !important;
}

.wrapper-grad {
    background: linear-gradient(90deg, rgba(224, 187, 253, 1) 0%, rgba(255, 255, 255, 1) 100%);
}

hr {
    width: 15rem;
}

// .line {
//     width: 15rem;
//     height: .1rem;
// }




.typing-demo {
    width: 16rem;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    // border-right: 3px solid;


}

@keyframes typing {
    from {
        width: 0
    }
}

@keyframes blink {
    50% {
        border-color: transparent
    }
}

.skill-under {
    padding-top: 10rem;
}

.proj {
    max-width: 300px;
}

.card {
    max-width: 400px;
}

.latest {
    min-height: 100vh;
}
</style>