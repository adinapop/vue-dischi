<template>

  <div id="app">
    <Header />
    <Main :selectGenre="selectGenre" :albums="albums" />
    <Loader v-if="albums.length == 0"/>
  </div>

</template>

<script>
import axios from "axios"
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Loader from "./components/Loader.vue"

export default {
  name: 'App',
    components: {
      Header,
      Main,
      Loader,
    },

  data: function() {
    return {
      // creo array vuoto che sarà popolato dal data che arriva dalla library axios
      albums: [],
      selectGenre: "",
    }
  },

  // una volta importato axios, dobbiamo prenderlo in created
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {
      this.albums = result.data.response
    });
  },
}
</script>

<style lang="scss">
@import "./style/app.scss";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

</style>
