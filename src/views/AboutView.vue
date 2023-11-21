<template>
    <div>
        <section class="about d-flex justify-content-center align-items-center">
            <div class="container pt-4 pb-4 d-flex gap-5">
                <div class="circle">
                    <img class="img-fluid rounded-circle" src="../assets/T91QPE3BP-U05E8JG7UTA-60f76f0c5d3e-512.jpg" alt="">
                </div>
                <div class="text-about justify-content-center align-items-center">
                    <p>Ciao! Sono uno Sviluppatore Web Junior e ho frequentato il corso per Full Stack Developer di Boolean.
                    </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, aliquam ut. Eum nisi commodi,
                        necessitatibus facere quia impedit. Nesciunt sint nulla officiis rem ducimus dolore accusantium
                        facilis
                        vero pariatur error!</p>
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
    width: 10rem;
}

.about {
    height: 70vh;
}
</style>