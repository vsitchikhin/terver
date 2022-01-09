<template>
  <div class="container">
    <h1 class="labHeader">Лабораторная работа №3</h1>
    <Nuxt-link to="/" class="home">На главную</Nuxt-link>
    <bernulli/>
    <polinomeal/>
    <puasson/>
  </div>
</template>

<script lang="ts">
import bernulli from '../components/Bernulli/Bernulli.vue'
import polinomeal from '../components/Polinomeal/Polinomeal.vue'
import puasson from '../components/Puasson/Puasson.vue'

export default {
  name: "lab3",
  components: {
    bernulli,
    polinomeal,
    puasson,
  }
}
</script>

<style scoped>

</style>
