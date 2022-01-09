<template>
  <div class="container">
    <div class="tests" v-model="file.numbers[item]" v-for="item in file.numbers" :key="file.numbers">{{item}}</div>
  </div>
</template>

<script>
import file from '~/components/Lab5-1/file.json'

export default {
  name: "fileData",
  data() {
    return {
      file
    }
  }
}
</script>

<style scoped>
  .container {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 550px;
  }
  .tests {
     margin: 5px;
   }
</style>
