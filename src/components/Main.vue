<template>
    <main>
        <div class="container">
            <div class="row">
                <div>
                    <Album 
                        v-for="(album, index) in albums"
                        :key="index"
                        :poster="album.poster"
                        :title="album.title"
                        :author="album.author"
                        :year="album.year"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Album from "./Album.vue"

export default {
    name: "Main",
    components: {
        Album
    },
    // qui si aspetta un array di oggetti dall'app
    props: {
        albums: Array,
    }
}

</script>

<style lang="scss" scoped>

</style>