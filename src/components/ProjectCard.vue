<script>
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            projects: [],
            base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/projects',
        }
    },
    mounted() {
        axios
            .get(this.base_url + this.portfolio_api)
            .then(response => {
                console.log(response);
                this.projects = response.data.result
            })
            .catch(err => {
                console.error(err);
            })
    }
}

</script>

<template>
    <div class="container pt-4">
        <h1>Progetti</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <div class="col" v-for="project in projects.data">
                <div class="card">
                    <img :src="base_url + '/storage/' + project.cover_image" alt="">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container pt-3">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.admin a:hover {
    color: white;
}

.admin-icon {
    fill: white;
}
</style>
