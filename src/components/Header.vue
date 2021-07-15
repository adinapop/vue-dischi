<template>
    <header>
        <div class="header-content">

            <div class="logo-container">
                <img src="../assets/spotify-logo.png" alt="Spotify Logo">
            </div>

            <div class="select-genre">

                <select 
                    v-model="selectGenre">
                    <option disabled value="">Please select one</option>
                    <option> {{albumGenre}} </option>
                </select>

                <!-- per fare l'emit -->
                <button>Search</button>

            </div>
        </div>

    </header>
</template>

<script>
export default {
    name: "Header",
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
