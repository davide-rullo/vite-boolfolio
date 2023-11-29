<template>
    <div>



        <h1>prova</h1>
        <section v-if="technology">

            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div class="" v-for="project in technology.data">
                        <h1>{{ project.name }}</h1>
                    </div>
                </div>
            </div>
            <li>


            </li>

        </section>




    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleTechnologyView',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',

            technology: null
        }
    },
    mounted() {

        const url = `${this.base_url}/api/technologies/${this.$route.params.slug}`;
        axios
            .get(url)
            .then(response => {
                console.log(response);
                this.technology = response.data.result

            })
            .catch(err => {
                console.error(err);
            })



    }
}
</script>

<style lang="scss" scoped></style>