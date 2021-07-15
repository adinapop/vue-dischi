<template>
    <main>
        <div class="container">
            <div class="row">
                <Album 
                    class="col-2 .justify-content-center"
                    v-for="(album, index) in albums"
                    :key="index"
                    :poster="album.poster"
                    :title="album.title"
                    :author="album.author"
                    :year="album.year"
                    :inputSelectGenre="inputSelectGenre"
                />
            </div>
        </div>
    </main>
</template>

<script>
import Album from "./Album.vue"

export default {
    name: "Main",
    components: {
        Album,
    },
    // qui si aspetta un array di oggetti dall'app
    props: {
        albums: Array,
        inputSelectGenre: String,
    }
}

</script>

<style lang="scss" scoped>
.row {
    padding-top: 72px;
}
</style>