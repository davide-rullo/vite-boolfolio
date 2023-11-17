<script>

import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      projects: [],
      portfolio_api: 'http://127.0.0.1:8000/api/projects',
    }
  },
  mounted() {
    axios
      .get(this.portfolio_api)
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
  <div>
    <h1>Progetti</h1>
    <div class="container">
      <div class="row">
        <div class="col" v-for="project in projects.data">
          <div class="card">
            <h4>{{ project.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
