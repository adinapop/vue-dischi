<template>

  <div id="app">
    <Header @select="searchAlbum" :varGenre="varGenre"/>

    <Main :albums="getFilteredGenreAlbums" 
          :inputSelectGenre="inputSelectGenre" />

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
      albums: [],
      inputSelectGenre: "",
      varGenre: [],
    }
  },
  
  created() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result) => {
      this.albums = result.data.response;
      this.searchAlbum('')
      this.pickGenre();
      });

  },

  computed: {
    // function per filtrare in base al genre
    getFilteredGenreAlbums() {

        return this.albums.filter((album) => {

          if(this.inputSelectGenre === "all") {
            return true;
          }
          //else
          return album.genre.toLowerCase().includes(this.inputSelectGenre.toLowerCase());

       // versione di Ottavio, da analizzare:
       // return searchIn(this.inputSearch, [item.name, item.species, item.origin])
      });
    },
  },

  methods: {

    // creo una function che mi salvi in una array i generi musicali
    pickGenre: function() {
      let arrayGenre = [];
      for(let x = 0; x < this.albums.length; x++) {
        let album = this.albums[x];
        if(!arrayGenre.includes(album.genre)) {
          arrayGenre.push(album.genre);
        }
      }
      this.varGenre = arrayGenre;
    },

    // creo una function che mi salvi in una variabile quello che seleziona l'utente
    searchAlbum(selectGenre) {
      this.inputSelectGenre = selectGenre;
    },
    
  }

}

</script>

<style lang="scss">
@import "./style/app.scss";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

</style>
