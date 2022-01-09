<template>
  <div class="container">
    <h2 class="puassonHeader">Формула Пуассона</h2>
    <p class="dataRequest">Введите n, 0 < n <= 12000: </p>
    <input type="text" id="n2-4">
    <br>
    <p class="dataRequest">Введите m1, 0 < m <= 15: </p>
    <input type="text" id="m1-4">
    <br>
    <p class="dataRequest">Введите m2, 0 < m <= 15: </p>
    <input type="text" id="m2-4">
    <br>
    <p class="dataRequest">Введите p, 0 < p <= 1: </p>
    <input type="text" id="p2-4">
    <br>
    <v-btn @click="getData">Расчитать</v-btn>
    <img src="../../../store/lab3/puasson2.jpeg" alt="Puasson" id="puassonImage">
    <p class="dataResponse">Ответ: {{result}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: "version2",

  data() {
    return{
      result: 0,
    }
  },

  methods: {
    getData() {
      let n = document.querySelector('#n2-4');
      let m1 = document.querySelector('#m1-4');
      let m2 = document.querySelector('#m2-4');
      let p = document.querySelector('#p2-4');
      let la = n.value * p.value;

      n = n.value;
      m1 = m1.value;
      m2 = m2.value;
      p = p.value;

      let result = 0;


      if (n < 0 || n > 12000) {
        alert('Неверно введены данные: n вне диапазона')
      } else if (m1 < 0 || m1 > 15) {
        alert('Неверно введены данные: m1 вне диапазона')
      } else if (m2 < 0 || m2 > 15) {
        alert('Неверно введены данные: m2 вне диапазона')
      } else if (m2 < m1) {
        alert('Неверно введены данные: m2 < m1')
      } else if (p < 0 || p > 1) {
        alert('Неверно введены данные: p вне диапазона')
      } else {

        for (let i = m1; i <= m2; i++) {
          result += (la ** i) / Number(this.factorial(i)) * Math.exp(-la);
        }


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

<style scoped>
.container {
  position: relative;
}

.dataRequest {
  font-size: 20px;
  display: inline-block;
}

#n2-4, #m1-4, #m2-4, #p2-4 {
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
  right: 0;
}

.dataResponse {
  font-size: 20px;
  margin-top: 10px;

}
</style>
