<template>
    <div>
        <div class="container d-flex flex-column justify-content-center align-items-center nfcont">
            <div class="not-found">
                <h2>Not Found 404</h2>
                <router-link :to="{ name: 'home' }">Go back to the Home Page</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'NotFoundView'
}
</script>

<style lang="scss" scoped>
.nfcont {
    height: 80vh;
}
</style>