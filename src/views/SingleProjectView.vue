<template>
    <div>


        <div class="container p-3 pt-5 wrap">
            <div v-if="!loading">
                <div class="row">
                    <div class="col-4">
                        <img class="img-fluid" width="400" :src="'http://127.0.0.1:8000/storage/' + project.cover_image"
                            alt="">

                    </div>
                    <div class="col-8">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                        <div class="type pb-3" v-if="project.type">
                            <h5>Project type:</h5>
                            {{ project.type.name }}
                        </div>
                        <div class="technology" v-if="project.technologies">
                            <ul class="list-unstyled">
                                <h5>Technologies used:</h5>
                                <li v-for="technology in project.technologies">
                                    {{ technology.name }}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

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

<style lang="scss" scoped>
.wrap {
    height: 80vh;
}
</style>