<script>
import axios from 'axios';
export default {
    name: 'ProjectCard',
    data() {
        return {
            projects: null,
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
    <section class="projects" v-if="projects">
        <div class="container pt-4">
            <h2 class="text-white p-2">Projects</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                <div class="col" v-for="project in projects.data">

                    <router-link :to="{ name: 'project', params: { slug: project.slug } }">
                        <div class="card">
                            <img :src="base_url + '/storage/' + project.cover_image" alt="">
                            <div class="card-body">
                                <h4 class="card-title">{{ project.title }}</h4>
                                <p class="card-text">{{ project.description }}</p>
                            </div>
                        </div>
                    </router-link>
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

    </section>
    <div class="container text-center pt-5" v-else>
        <span class="loader"></span>
    </div>
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
</style>
