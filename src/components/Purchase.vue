<script setup>
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';
import { useStore } from "../store/index.js"


const store = useStore();
const genre = ref(28);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};


const getGenres = async () => {
  await store.getMovies(genre.value);
}
</script>

<template>
  <h1 class="header">Movie Net</h1>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <select class="dropdown" v-model="genre" @change="getGenres()">
    <option value="28">Action</option>
    <option value="35">Adventure</option>
    <option value="16">Animation</option>
    <option value="35">Crime</option>
    <option value="80">Documentary</option>
    <option value="12">Family</option>
    <option value="80">Fantasy</option>
    <option value="27">Horror</option>
    <option value="9648">Mystery</option>
    <option value="10749">Romance</option>
    <option value="878">Science Fiction</option>
    <option value="10770">TV Movie</option>
    <option value="53">Thriller</option>
  </select>
  <div class="icon-container">
    <img class="cart-icon" src="../assets/cart.png" alt="cart" />
    <RouterLink to="/Cart" custom v-slot="{ navigate }">
      <button class="button" @click="navigate" role="link">Login</button>
      <a class="cart-text" @click="navigate" role="link">Cart</a>
    </RouterLink>
  </div>
  <div class="purchase-container">
    <img class='poster' v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style>
.header {
  color: rgb(243, 181, 38);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5cm;
  font-weight: 100;
  padding: 10px;
  padding-left: 10px;
  margin-top: -18px;
}

.purchase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 39px;
  padding: 12px;
  margin-top: -55px;
}

.poster {
  height: 400px;
  border: solid rgb(243, 181, 38);
  margin-left: -3px;
}

.dropdown {
  margin-top: -95px;
  margin-left: 1015px;
  font-size: larger;
  text-align: center;
  position: absolute;
}

.button,
.cart-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: -105px;
  margin-left: 1187px;
}


.button {
  opacity: 0%;
}


.cart-text {
  position: absolute;
  color: white;
  font-size: 18px;
  margin-top: -67px;
  margin-left: 1190px;
}

.icon-container:hover .cart-icon {
  position: absolute;
  border: solid rgb(243, 181, 38) 1px;
  margin-top: -106px;
  margin-left: 1186px;
}

a:hover {
  color: rgb(243, 181, 38);
}
</style>