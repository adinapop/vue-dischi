<template>

  <div id="app">
    <Header />
    <Main />
  </div>

</template>

<script>
import axios from "axios"
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"

export default {
  name: 'App',

  data: function() {
    return {
      // creo array vuoto che sarà popolato dal data che arriva dalla library axios
      albums: [],
    }
  },

  components: {
    name: Header,
    name: Main,
  },

  // una volta importato axios, dobbiamo prenderlo in created
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {
      this.albums = this.result.response
    });
  }
}
</script>

<style lang="scss">

</style>
