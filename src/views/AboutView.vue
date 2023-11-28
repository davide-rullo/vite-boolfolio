<template>
    <div>
        <section class="about p-5">
            <div class="container p-5 d-flex gap-5">
                <div class="row">
                    <div class="col-12 col-sm-4 d-flex align-items-center justify-content-center">
                        <div class="circle">
                            <img class="img-fluid rounded-circle" src="../assets/T91QPE3BP-U05E8JG7UTA-60f76f0c5d3e-512.jpg"
                                alt="">
                        </div>
                    </div>
                    <div class="col-12 col-sm-8">
                        <div class="text-about justify-content-center align-items-center">
                            <h2 class="titlepar">Overview</h2>
                            <p>Hi! I am a Junior Web Developer and I have attended Boolean's Full Stack Developer course.
                            </p>
                            <p>Boolean bootcamp consists of 700 hours of educational and interactive activities focused on
                                teaching
                                the main web development technologies. During the course I was able to improve my skills on
                                both the
                                front-end and back-end sides, using languages and technologies such as HTML, CSS,
                                JavaScript, VueJS,
                                PHP and Laravel </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container p-5 d-flex gap-5">
                <div class="row">
                    <div class="col-12 col-sm-4 d-flex align-items-center justify-content-center">
                        <div class="circle">
                            <img class="img-fluid" src="../assets/codingic.png" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-sm-8">
                        <div class="text-about justify-content-center align-items-center">
                            <h2 class="titlepar">My Portfolio</h2>
                            <p class="pb-4">During the bootcamp, I worked on several projects that I have collected on this
                                site and in
                                my personal Github profile.
                            </p>
                            <router-link class=" cta" to="/projects">Go to my projects</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>


export default {
    name: 'AboutView',

}
</script>

<style lang="scss" scoped>
.circle {
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 16rem;
}



.titlepar {
    color: #fec021;
}
</style>