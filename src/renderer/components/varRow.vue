<template>
  <div class="container">
    <h1>Вариационный ряд</h1>
    <br>
    <div class="varRowInner">
      <div class="rowData" v-model="rowData[item]" v-for="item in rowData" :key="rowData">{{item}}</div>
    </div>
  </div>
</template>

<script>
import file from '~/components/Lab5-1/file.json'

export default {
  name: "varRow",

  data() {
    return {
      file,
      rowData: this.sortRowData(),
    }
  },

  methods: {
    sortRowData() {
      let row = file.numbers;
      let length = row.length

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (row[j] > row[j + 1]) {
            let temp = row[j];
            row[j] = row[j + 1];
            row[j + 1] = temp;
          }
        }
      }

      return row;
    }
  }
}
</script>

<style scoped >

    .varRowInner {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 550px;
      margin: auto;

    }

    .rowData {
       margin: 5px;
     }

    h1 {
      text-align: center;
    }

</style>
