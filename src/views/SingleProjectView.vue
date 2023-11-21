<template>
    <div>


        <div class="container pt-4" v-if="!loading">

            <img class="img-fluid" width="400" :src="'http://127.0.0.1:8000/storage/' + project.cover_image" alt="">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

        </div>


    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'SingleProjectView',
    data() {
        return {
            loading: true,
            project: {}
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`;
        axios.get(url)
            .then(resp => {
                console.log(resp.data.result);

                if (resp.data.success) {
                    this.project = resp.data.result;
                    this.loading = false;
                } else {
                    this.$router.push({ name: 'NotFound' });
                }

            })
            .catch(err => {
                console.log(err.message);
            })
    }

}
</script>

<style lang="scss" scoped></style>