<template>
    <div class="album-container">
        <div class="inner-album-container">
            <img :src="poster" :alt="`poster album of ${poster}`">
            <h3> {{title}} </h3>
            <p> {{author}} </p>
            <p> {{year}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Album",
    props: {
        poster: String,
        title: String,
        author: String,
        year: String // in teoria intero, ma è tra apici nel data
    }
}
</script>

<style lang="scss" scoped>

</style>