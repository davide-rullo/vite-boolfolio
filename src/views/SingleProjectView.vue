<template>
    <div>


        <div class="container pt-4">

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
            project: {}
        }
    },
    mounted() {
        const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`;
        axios.get(url)
            .then(resp => {
                console.log(resp.data.result);
                this.project = resp.data.result;
            })
            .catch(err => {
                console.log(err.message);
            })
    }

}
</script>

<style lang="scss" scoped></style>