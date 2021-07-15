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
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Metal">Metal</option>
                </select>

                <button @click="$emit('select', selectGenre)">Search</button>
            
            </div>

        </div>

    </header>
</template>

<script>
export default {
    name: "Header",
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
