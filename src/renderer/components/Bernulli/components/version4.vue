<template>
  <div class="container">
    <!-- img - formula -->
    <p class="dataRequest">Введите n, 0 < n <= 15:</p>
    <input type="text" id="n4">
    <br>
    <p class="dataRequest">Введите m1, m1 < n:</p>
    <input type="text" id="m4-1">
    <br>
    <p class="dataRequest">Введите m2, m2 < n:</p>
    <input type="text" id="m4-2">
    <br>
    <p class="dataRequest">Введите p, 0 <= p <= 1:</p>
    <input type="text" id="p4">
    <br>
    <v-btn @click="getData">Расчитать</v-btn>
    <img src="../../../store/lab3/v4.jpg" alt="version 4" id="versionImage" />
    <p class="dataResponse">Ответ: {{result}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: "version4",

  data() {
    return{
      result: 0,
    }
  },

  methods: {
    getData() {
      let n = document.querySelector('#n4');
      let m1 = document.querySelector('#m4-1');
      let m2 = document.querySelector('#m4-2')
      let p = document.querySelector('#p4');
      let q;
      let resultProbability = 0;

      n = Number(n.value);
      m1 = Number(m1.value);
      m2 = Number(m2.value)
      p = Number(p.value);
      q = 1 - p;


      if (n < m1 || n < m2) {
        alert('Неверно введены данные: n < m1 или n < m2')
      } else if (n > 15) {
        alert('Неверно введены данные: n > 15')
      } else if (p < 0 || p > 1) {
        alert('Неверно введены данные: p - вне диапазона')
      } else {
        for (let i = m1; i < m2 + 1; i++) {
          resultProbability += this.calculateProbability(n, i, p, q)
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

#n4, #m4-1, #m4-2, #k4, #p4, #q4 {
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 10px;
  width: 100px;
  display: inline-block;
  margin-left: 5px;
  padding-left: 5px;
}


#p4, #q4 {
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
