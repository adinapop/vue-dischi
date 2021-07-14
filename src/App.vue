<template>

  <div id="app">
    <Header />
    <Main :albums="albums" />
  </div>

</template>

<script>
import axios from "axios"
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"

export default {
  name: 'App',
    components: {
      Header,
      Main,
    },

  data: function() {
    return {
      // creo array vuoto che sarà popolato dal data che arriva dalla library axios
      albums: [],
    }
  },

  // una volta importato axios, dobbiamo prenderlo in created
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {
      this.albums = result.data.response
    });
  }
}
</script>

<style lang="scss">
@import "./style/app.scss";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

</style>
