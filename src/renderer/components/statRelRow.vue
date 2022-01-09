<template>
  <div class="container">
    <h1>Статистический ряд относительных частот</h1>
    <div class="statRowInner">
      <div class="statRow__item" v-for="item in stat_data" :key="stat_data">{{item.number + ' - ' + item.relValue}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statRow",

  props: {
    stat_data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>

  .statRowInner {
    margin: auto;
    width: 90px;
  }

  h1 {
    text-align: center;
  }

</style>
