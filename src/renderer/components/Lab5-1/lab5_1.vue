<template>
  <div class="container">
    <fileData />
    <label class="checkedValue" for="varRow" @click="checkVarRow">Вариационный ряд</label>
    <input class="checkbox" type="checkbox" id="varRow" value="varRow" @change="checkVarRow">
    <label class="checkedValue" for="statRow" @click="checkStatRow">Статистический ряд частот</label>
    <input class="checkbox" type="checkbox" id="statRow" value="statRow" @change="checkStatRow">
    <label class="checkedValue" for="statRelRow" @click="checkStatRelRow">Статистический ряд относительных частот</label>
    <input class="checkbox" type="checkbox" id="statRelRow" value="stateRelRow" @change="checkStatRelRow">
    <label class="checkedValue" for="distrFunc" @click="checkDistrFunc" >Эмпирическая функция распределения</label>
    <input class="checkbox" type="checkbox" id="distrFunc" value="distrFunc" @change="checkDistrFunc" >
    <label class="checkedValue" for="X" @click="checkX">Хв</label>
    <input class="checkbox" type="checkbox" id="X" value="X" @change="checkX">
    <p v-if="X.isChecked"> {{X.title}}</p>
    <label class="checkedValue" for="D" @click="checkD">Dв</label>
    <input class="checkbox" type="checkbox" id="D" value="D" @change="checkD">
    <p v-if="D.isChecked">{{D.title}}</p>
    <label class="checkedValue" for="O" @click="checkO">Oв</label>
    <input class="checkbox" type="checkbox" id="O" value="O" @change="checkO">
    <p v-if="O.isChecked">{{O.title}}</p>
    <label class="checkedValue" for="S" @click="checkS">S</label>
    <input class="checkbox" type="checkbox" id="S" value="S" @change="checkS">
    <p v-if="S.isChecked">{{S.title}}</p>

    <varRow v-if="varRowChecked" />
    <statRow v-if="statRowChecked" :stat_data="statData"/>
    <statRelRow v-if="statRelRowChecked" :stat_data="statData"/>
    <functions v-if="distrFuncChecked" :stat_data="statData"/>
  </div>
</template>

<script>
import file from '~/components/Lab5-1/file.json'
import fileData from "~/components/fileData.vue"
import varRow from '~/components/varRow.vue'
import statRow from "~/components/statRow.vue";
import statRelRow from "~/components/statRelRow.vue";
import functions from "~/components/functions.vue";

export default {
  name: "lab5_1",
  components: {
    fileData,
    varRow,
    statRow,
    statRelRow,
    functions
  },

  data() {
    return {
      file,
      fileData: [],
      statData: this.getStatData(file.numbers, file.numbers.length),
      variationalRow: [],
      varRowChecked: false,
      statRowChecked: false,
      statRelRowChecked: false,
      distrFuncChecked: false,
      X: {title: 0, isChecked: false},
      D: {title: 0, isChecked: false},
      O: {title: 0, isChecked: false},
      S: {title: 0, isChecked: false},
    }
  },


  methods: {
    checkVarRow() {this.varRowChecked = !this.varRowChecked;},

    checkStatRow() {this.statRowChecked = !this.statRowChecked;},

    checkStatRelRow() {this.statRelRowChecked = !this.statRelRowChecked;},

    checkDistrFunc() {this.distrFuncChecked = !this.distrFuncChecked},

    checkX() {this.X.isChecked = !this.X.isChecked; this.X.title = this.getXTitle()},

    checkD() {this.D.isChecked = !this.D.isChecked; this.D.title = this.getDTitle()},

    checkO() {this.O.isChecked = !this.O.isChecked; this.O.title = this.getOTitle()},

    checkS() {this.S.isChecked = !this.S.isChecked; this.S.title = this.getSTitle()},

    getStatData(arr, length) {
      let array = [];
      let statNumbers = [];
      let set;
      let setLength;
      let values;

      for (let i = 0; i < length; i++) {
        array.push(arr[i]);
      }

      set = [...new Set(array)];
      setLength = set.length;
      set = this.sortArray(set, setLength);
      array = this.sortArray(array, length);

      values = this.countValues(array, length);

      for (let i = 0; i < setLength; i++) {
        statNumbers.push({number: set[i], value: 0, relValue: 0});
      }

      for (let i = 0; i < setLength; i++) {
        statNumbers[i].value = values[i]
        statNumbers[i].relValue = statNumbers[i].value / length;
      }

      statNumbers = this.getOutput(statNumbers)

      this.fileData = array

      return statNumbers;
    },

    getXTitle() {
      let numbers = file.numbers;
      let length = numbers.length;
      let sum = 0;

      for (let i = 0; i < length; i++) sum += numbers[i];

      sum /= length;

      sum = Math.round(sum * 100) / 100;

      return sum;
    },

    getDTitle() {
      let X = this.getXTitle();
      let numbers = file.numbers;
      let length = numbers.length;
      let sum = 0;
      let pow = 0;

      for (let i = 0; i < length; i++) {
        pow = Math.pow((numbers[i] - X), 2);
        sum += pow;
      }

      sum /= length;

      sum = Math.round(sum * 100) / 100;

      return sum;
    },

    getOTitle() {
      let D = this.getDTitle();
      D = Math.sqrt(D);
      D = Math.round(D * 100) / 100;
      return D;
    },

    getSTitle() {
      let length = file.numbers.length;
      let D = this.getDTitle();
      let S = Math.sqrt(length/(length - 1) * D);
      S = Math.round(S * 100) / 100;
      return S;
    },

    sortArray(array, length) {
      let temp;

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
      return array;
    },

    countValues(array, length) {
      let counter = 0;
      let values = [];
      let currentNumber = array[0];

      for (let i = 0; i < length; i++) {
        if (currentNumber === array[i]) {
          counter++
        } else {
          values.push(counter);
          counter = 1;
          currentNumber = array[i];
        }
      }
      values.push(counter);

      return values;
    },

    getOutput(data) {
      let length = data.length;
      let out = []
      out[0] = data[0].relValue;

      for (let i = 1; i < length; i++) {
        out[i] = Math.round((data[i - 1].relValue + out[i - 1]) * 10000) / 10000
      }

      for (let i = 0; i < length; i++) {
        data[i].output = 'При ' + data[i].number + ' <= x <= ' + data[i].number + ', F = ' + out[i]
      }

      return data
    }
  }
}
</script>

<style scoped >
  .checkedValue {
    display: block;
  }
</style>
