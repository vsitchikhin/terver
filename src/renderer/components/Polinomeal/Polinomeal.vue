<template>
  <div class="container">
    <h2 class="polinomealHeader">Полиномеальная функция</h2>
    <p class="dataRequest">Введите n, 0 < n <= 100: </p>
    <input type="text" id="n3-1">
    <br>
    <p class="dataRequest">Введите количество m (k), k < 20: </p>
    <input type="text" id="k3-1">
    <img src="../../store/lab3/polinomeal.jpg" alt="Polinomeal" id="polinomealImage">
    <br>
    <v-btn @click="getData">Подтвердить</v-btn>
    <p class="dataResponse">Ответ: {{result}}</p>
    <hr>

  </div>
</template>

<script>
  export default {
    name: 'Polinomeal',

    data() {
      return{
        result: 0,
      }
    },

    methods: {
      getData() {
        let k = document.querySelector('#k3-1');
        let m = [];
        let p = [];
        let isValid;
        k = k.value;

        alert('Сумма всех m должна быть равной n');
        for (let i = 0; i < k; i++) {
          m[i] = prompt('Введите m' + (i + 1) + ', m < 20');
        }

        for (let i = 0; i < k; i++) {
          p[i] = prompt('Введит p' + (i + 1) + ', 0 < p < 1');
        }

        isValid = this.checkData(m,p);
        if (isValid) {
          this.calculate(m, p);
        }
      },

      checkData(m,p) {
        let length = m.length;
        let n = document.querySelector('#n3-1');
        let sum = 0;

        n = n.value;

        for (let i = 0; i < length; i++) {
          sum += Number(m[i]);
        }

        for (let i = 0; i < length; i++) {
          if(p[i] < 0 || p[i] > 1) {
            alert('Неверно введены данные: p' + (i + 1) + 'не входит в диапазон');
            return false;
          }
        }

        if (sum < n || sum > n) {
          alert('Неверно введены данные: сумма всех значений m != n');
          return false;
        }

        return true
      },

      calculate(m, p) {
        let n = document.querySelector('#n3-1');
        let result;
        let length = m.length;
        let mValue = 1;
        let pValue = 1;

        n = n.value;

        for (let i = 0; i < length; i++) {
          mValue *= this.factorial(Number(m[i]));
        }

        for (let i = 0; i < length; i++) {
          pValue *= p[i]**m[i];
        }

        result = (this.factorial(n) / mValue) * pValue;
        //alert('Ответ: ' + result);
        this.$data.result = result;
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
    }
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

  #n3-1, #k3-1 {
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


  #polinomealImage {
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
