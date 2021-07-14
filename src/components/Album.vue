<template>
    <div class="album-container">
        <div class="inner">
            <img :src="poster" :alt="`poster album of ${poster}`">
            <h3 class="title"> {{title}} </h3>
            <p class="author"> {{author}} </p>
            <p class="year"> {{year}} </p>
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
.album-container {
    // width: ;
    text-align: center;
    margin: 12px;

    .inner {
        padding: 12px;
        
            .title {
                font-size: 20px;
                margin-top: 12px;
                color: #fffffb;
                }

            .author, .year {
                color: #717375;
                margin-bottom: 0;
                font-size: 14px;
                }

            .author {margin-top: 24px;}

                img {
                    width: 100%;
                }
                
            
            
    }

}
</style>