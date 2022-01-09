<template>
  <div class="container">
    <!-- img - formula -->
    <p class="dataRequest">Введите n, 0 < n <= 15:</p>
    <input type="text" id="n3">
    <br>
    <p class="dataRequest">Введите m, m < n:</p>
    <input type="text" id="m3">
    <br>
    <p class="dataRequest">Введите p, 0 < p < 1:</p>
    <input type="text" id="p3">
    <br>
    <v-btn @click="getData">Расчитать</v-btn>
    <img src="../../../store/lab3/v3.jpg" alt="version 3" id="versionImage" />
    <p class="dataResponse">Ответ: {{result}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: "version3",

  data() {
    return{
      result: 0,
    }
  },

  methods: {
    getData() {
      let n = document.querySelector('#n3');
      let m = document.querySelector('#m3');
      let p = document.querySelector('#p3');
      let q;
      let resultProbability = 0;

      n = Number(n.value);
      m = Number(m.value);
      p = Number(p.value);
      q = 1 - p;

      if (n < m) {
        alert('Неверно введены данные: n < m')
      } else if (n > 15) {
        alert('Неверно введены данные: n > 15')
      } else if (p < 0 || p > 1) {
        alert('Неверно введены данные: p - вне диапазона')
      } else {
        for (let i = m; i <= n; i++) {
          resultProbability += this.calculateProbability(n, i, p, q);
        }
        this.$data.result = resultProbability;
      }
    },


    calculateProbability(n, m, p, q) {
      let com = this.combination(n, m);
      let resultProbability = 0;

      p = p**m;
      q = q**(n - m);

      resultProbability = com * p * q;
      return resultProbability;
    },


    factorial(a) {
      let f = 1n;
      let i = 1n;
      a = BigInt(a);

      if (a === 0n) {
        return f;
      } else {
        for (i; i <= a; i++) {
          f *= i;
        }
      }

      return f;
    },


    combination(n, m) {
      let result = 0n;
      result = this.factorial(n) / (this.factorial(m) * this.factorial(n - m));
      result = Number(result);

      return result;
    }
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

  #n3, #m3, #k3, #p3, #q3 {
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    margin-bottom: 10px;
    width: 100px;
    display: inline-block;
    margin-left: 5px;
    padding-left: 5px;
  }


  #p3, #q3 {
    width: 35px;
  }


  #versionImage {
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
