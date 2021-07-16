<template>
    <header>
        <div class="header-content">

            <div class="logo-container">
                <img src="../assets/spotify-logo.png" alt="Spotify Logo">
            </div>

            <div class="select-container">

                <select 
                    v-model="selectGenre">
                    
                    <option value="all">All</option>
                    <option v-for="(option, index) in varGenre"
                        :key="index"
                        :value="option">
                        {{option}}</option>

                </select>

                <button @click="$emit('select', selectGenre)">Search</button>
            
            </div>

        </div>

    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        varGenre: Array,
    },

    data() {
        return {
            selectGenre: "",
        }
    }
}
</script>

<style lang="scss" scoped>
.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;



    .logo-container {
        width: 100px;
    
        img {width: 100%;}
    }
}

</style>
