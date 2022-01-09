<template>
  <div class="container">
    <div class="destruction">
      <h1 class="graphHeader"></h1>
      <destruction :stat_data="stat_data"/>
    </div>

    <div class="polygon">
      <h1 class="graphHeader"></h1>
      <polygon :stat_data="stat_data"/>
    </div>
  </div>
</template>

<script>
import destruction from "~/components/Lab5-2/destruction.vue";
import polygon from "~/components/Lab5-2/polygon.vue";

export default {
  name: "functions",
  components: {
    destruction,
    polygon,

  },


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

</style>
