<template>
  <div class="container">
    <h1 class="exHeader">{{title}}</h1>
    <table class="inputTable">
      <tr>
        <td>Xi</td>
        <td v-for="item in x" :key="x"><p>{{item}}</p></td>
      </tr>
      <tr>
        <td>Ni</td>
        <td v-for="item in n" :key="n">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "rows",


  props: {
    x: {
      type: Array,
      default() {
        return []
      }
    },
    n: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
}
</script>

<style scoped >

    .inputTable, td, tr {
      padding: 10px;
      margin-bottom: 5px;
      border: 2px solid #a8a8a8;
      border-collapse: collapse;
    }

</style>
