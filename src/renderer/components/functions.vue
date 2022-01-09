<template>
  <div class="container">
    <div class="distrFuncInner">
      <h1>Эмпирическая функция распределения</h1>
      <div class="distrFunc__graph">
        <distrFunc />
      </div>
    </div>
    <div class="outputInner">
      <div class="outputInem" v-for="item in stat_data" :key="stat_data">{{item.output}}</div>
    </div>
    <div class="poligonInner">
      <h1>Полигон частот</h1>
      <div class="poligon__graph">
        <poligon />
      </div>
    </div>
  </div>
</template>

<script>
import distrFunc from "~/components/distrFunc.vue";
import poligon from "~/components/poligon.vue";

export default {
  name: "functions",

  props: {
    stat_data: {
      type: Array,
      default() {
        return []
      },
    },
  },


  components: {
    distrFunc,
    poligon,
  }
}
</script>

<style scoped>

    h1 {
      text-align: center;
    }

</style>
