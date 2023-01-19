<script setup>
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
const router = useRouter();
</script>

<template>
  <img class="background" src="../assets/background.jpg" />
  <Header />
  <Hero />
  <Footer />
</template>

<style>
.background {
  position: absolute;
  width: 1257px;
  height: 800px;
  border: solid white;
  margin-top: 80px;
  margin-left: -8px;
  z-index: 0;
}

body {
  background-color: rgb(35, 31, 32);
}
</style>