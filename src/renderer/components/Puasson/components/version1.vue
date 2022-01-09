<template>
  <div class="container">
    <h2 class="puassonHeader">Формула Пуассона</h2>
    <p class="dataRequest">Введите n, 0 < n <= 12000: </p>
    <input type="text" id="n2-3">
    <br>
    <p class="dataRequest">Введите m, 0 < m <= 15: </p>
    <input type="text" id="m2-3">
    <br>
    <p class="dataRequest">Введите p, 0 < p <= 1: </p>
    <input type="text" id="p2-3">
    <br>
    <v-btn @click="getData">Расчитать</v-btn>
    <img src="../../../store/lab3/puasson.jpg" alt="Puasson" id="puassonImage">
    <p class="dataResponse">Ответ: {{result}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: "version1",

  data() {
    return{
      result: 0,
    }
  },

  methods: {
    getData() {
      let n = document.querySelector('#n2-3');
      let m = document.querySelector('#m2-3');
      let p = document.querySelector('#p2-3');
      let la = n.value * p.value;

      n = n.value;
      m = m.value;
      p = p.value;

      let result;


      if (n < 0 || n > 12000) {
        alert('Неверно введены данные: n вне диапазона')
      } else if (m < 0 || m > 15) {
        alert('Неверно введены данные: m вне диапазона')
      } else if (p < 0 || p > 1) {
        alert('Неверно введены данные: p вне диапазона')
      } else {
        result = (la ** m) / Number(this.factorial(m)) * Math.exp(-la);
        //alert('Ответ: ' + result);
        this.$data.result = result;
      }
    },

    factorial(a) {
      let f = 1;
      let i = 1;

      if (a === 0) {
        return f;
      } else {
        for (i; i <= a; i++) {
          f *= i;
        }
      }
      return f;
    },
  },
}
</script>

<style scoped >
.container {
  position: relative;
}

.dataRequest {
  font-size: 20px;
  display: inline-block;
}

#n2-3, #m2-3, #p2-3 {
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 10px;
  width: 100px;
  display: inline-block;
  margin-left: 5px;
  padding-left: 5px;
}


#p {
  width: 35px;
}


#puassonImage {
  display: inline-block;
  width: 400px;
  position: absolute;
  top: 0;
  right: 10px;
}

.dataResponse {
  font-size: 20px;
  margin-top: 10px;

}
</style>
