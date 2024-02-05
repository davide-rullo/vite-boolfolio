<template>
    <div>
        <section>


            <ProjectCard></ProjectCard>
        </section>
    </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsView',
    components: { ProjectCard }
}
</script>

<style lang="scss" scoped></style>