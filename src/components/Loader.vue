<template>
    <div class="loader">
       Loading...
    </div>    
</template>


<script>
export default {
    name: "Loader"
}
</script>

<style lang="scss" scoped>
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #1e2d3b;
        color: gray;
        font-size: 48px;
    }
</style>