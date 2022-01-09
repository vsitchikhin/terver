<template>
  <div class="container">
    <h1 class="labHeader">Лабораторная работа №5</h1>
    <Nuxt-link to="/" class="home">На главную</Nuxt-link>
    <h2 class="exHeader">Задание 1</h2>
    <Lab5_1 />
    <h2 class="exHeader">Задание 3</h2>
    <lab5_2 />
  </div>
</template>

<script>
import Lab5_1 from '~/components/Lab5-1/lab5_1.vue'
import Lab5_2 from '~/components/Lab5-2/lab5_2.vue'

export default {
  name: "lab5",

  components: {
    Lab5_1,
    Lab5_2,
  }
}
</script>

<style scoped>
.home {
  display: block;
  font-size: 25px;
  text-decoration: none;
  margin-top: 15px;
}

.labHeader {
  font-size: 50px;
  text-align: center;
}

.exHeader {
  font-size: 25px;
  text-align: center;
}
</style>
