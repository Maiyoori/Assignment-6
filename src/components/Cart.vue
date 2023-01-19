<script setup>
import { useStore } from "../store/index.js";
const store = useStore();
</script>

<template>
  <h1 class="header">Movie Net</h1>
  <div class="checkout-container">
    <div v-for="movie in Array.from(store.cart.values())">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
      <div class="flex-container">
      <div class="text">
        <p class="title">{{ movie.title }}</p>
        <p class="date">{{ movie.date }}</p>
        <p class="overview">{{ movie.overview }}</p>
        <button @click="store.removeFromCart(movie.id)">Remove</button>
      </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.checkout-container {
  display: flex;
  flex-direction: column;
  flex-flow: column;
  justify-content: space-between;
  gap: 75px;
  margin-top: -25px;
}

.flex-container{
  display: flex;
  flex-direction: column;
  flex-flow: column;
  margin-top: -40px;
  margin-left: 25%;
}

img {
  width: 300px;
  border: solid white 1px;
}

.header {
  color: rgb(243, 181, 38);
  position: relative;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5cm;
  font-weight: 100;
  padding: 10px;
  margin-top: -17px;
  margin-left: 0px;
  padding-left: 10px;
  z-index: 2;
}

button {
  width: 100px;
  font-size: 17px;
  font-weight: bold;
  background-color: lightgray;
}

button:hover {
  border: solid rgb(243, 181, 38) 0.9px;
  margin-top: 2px;
}

.text {
  color: rgb(243, 181, 38);
  margin-top: -39%;
}

.title {
  font-size: 45px;
  margin-top: -55px;
}

.date {
  font-size: 30px;
  font-weight: 50;
}

.overview{
 font-size: 20px;
  margin-top: 10px;
}

p {
  font-family: Georgia, 'Times New Roman', Times, serif;
} 
</style>