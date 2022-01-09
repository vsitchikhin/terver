<template>
  <div class="container">
    <div class="inputTable__inner">
      <table class="inputTable">
        <tr>
          <td>Xi;X(i+1)</td>
          <td v-for="item in x" :key="x.id"><input type="text" v-model="item.title"></td>
        </tr>
        <tr>
          <td>Ni</td>
          <td v-for="item in n" :key="n.id"><input type="text" v-model="item.title"></td>
        </tr>
      </table>
      <v-btn class="btn" @click="getData(); getStatData()">Подтвердить</v-btn>

      <div class="checkValuesInner" v-if="showData">
        <label class="checkedValue" for="relRow" >Интервальный ряд относительных частот</label>
        <input class="checkbox" type="checkbox" id="relRow" value="varRow" @change="changeValue(intervalRow)">
        <label class="checkedValue" for="statRow" >Статистический ряд частот</label>
        <input class="checkbox" type="checkbox" id="statRow" value="statRow" @change="changeValue(statGroupRow)">
        <label class="checkedValue" for="statRelRow" >Статистический ряд относительных частот</label>
        <input class="checkbox" type="checkbox" id="statRelRow" value="stateRelRow" @change="changeValue(statGroupRelRow)">
<!--        <label class="checkedValue" for="distrFunc"  >Эмпирическая функция распределения</label>-->
<!--        <input class="checkbox" type="checkbox" id="distrFunc" value="distrFunc" @change="changeValue(functions)">-->
        <label class="checkedValue" for="X" >Хв</label>
        <input class="checkbox" type="checkbox" id="X" value="X" @change="changeValue(X); getTitleX()">
        <p v-if="X.isChecked">{{X.title}}</p>
        <label class="checkedValue" for="D" >Dв</label>
        <input class="checkbox" type="checkbox" id="D" value="D" @change="changeValue(D); getTitleD()">
        <p v-if="D.isChecked">{{D.title}}</p>
        <label class="checkedValue" for="O">Oв</label>
        <input class="checkbox" type="checkbox" id="O" value="O" @change="changeValue(O); getTitleO()">
        <p v-if="O.isChecked">{{O.title}}</p>
        <label class="checkedValue" for="S" >S</label>
        <input class="checkbox" type="checkbox" id="S" value="S" @change="changeValue(S); getTitleS()">
        <p v-if="S.isChecked">{{S.title}}</p>

        <rows v-if="intervalRow.isChecked" :x="relData.x" :n="relData.w" :title="relData.title[0]"/>
        <rows v-if="statGroupRow.isChecked" :x="relData.xRel" :n="relData.n" :title="relData.title[1]"/>
        <rows v-if="statGroupRelRow.isChecked" :x="relData.xRel" :n="relData.w" :title="relData.title[2]"/>
<!--        <functions v-if="functions.isChecked" :stat_data="statData"/>-->
      </div>
    </div>
  </div>
</template>

<script>
import rows from '~/components/Lab5-2/rows.vue';
import functions from '~/components/Lab5-2/functions.vue';

export default {
  name: "lab5_2",


  components: {
    rows,
    functions,
  },


  data() {
    return {
      showData: false,
      x: [
        {title: '0;0', id: 1},
        {title: '0;0', id: 2},
        {title: '0;0', id: 3},
        {title: '0;0', id: 4},
        {title: '0;0', id: 5},
      ],
      n: [
        {title: 0, id: 1},
        {title: 0, id: 2},
        {title: 0, id: 3},
        {title: 0, id: 4},
        {title: 0, id: 5},
      ],
      statData: [],
      relData: {
        n: [],
        x: [],
        w: [],
        xRel: [],
        title: [],
      },
      intervalRow: {isChecked: false},
      statGroupRow: {isChecked: false},
      statGroupRelRow: {isChecked: false},
      functions: {isChecked: false},
      X: {title: 0, isChecked: false},
      D: {title: 0, isChecked: false},
      O: {title: 0, isChecked: false},
      S: {title: 0, isChecked: false},
    }
  },


  model: {
    ivent: 'getData'
  },


  methods: {
    getData() {
      let x = this.x;
      let length = x.length ;
      this.showData = true;

      for (let i = 0; i < length; i++) {
        if (typeof x[i].title === "string") {
          x[i].title = x[i].title.split(';');
        }
      }
    },


    changeValue(value) {
      value.isChecked = !value.isChecked;
      return value;
    },

    getTitleX() {
      let data = this.statData
      let length = data.length
      let x = []
      let n = []
      let nAll = data[0].nAll
      let sum = 0

      for (let i = 0; i < length; i++) {
        x.push(data[i].xRel)
        n.push(data[i].n)
      }

      for (let i = 0; i < length; i++) {
        sum += x[i] * n[i];
      }

      sum /= nAll
      sum = Math.round(sum * 100) / 100

      this.X.title = sum
      return sum
    },


    getTitleD() {
      let data = this.statData
      let length = data.length
      let x = []
      let n = []
      let nAll = data[0].nAll
      let X = this.getTitleX()
      let sum = 0

      for (let i = 0; i < length; i++) {
        x.push(data[i].xRel)
        n.push(data[i].n)
      }

      for (let i = 0; i < length; i++) {
        sum += Math.pow((x[i] - X), 2) * n[i]
      }

      sum /= nAll
      sum = Math.round(sum * 100) / 100

      this.D.title = sum
      return sum
    },


    getTitleO() {
      let o = Math.sqrt(this.getTitleD())
      o = Math.round(o * 100) / 100
      this.O.title = o
    },


    getTitleS() {
      let n = this.statData[0].nAll
      let d = this.getTitleD()
      let s = Math.sqrt(n / (n - 1) * d)

      s = Math.round(s * 100) / 100

      this.S.title = s
    },


    getStatData() {
      let x = this.x;
      let n = this.n;
      let statData = [];
      let length = x.length;
      let allN = 0;
      let xRel = [];
      let w = [];

      for (let i = 0; i < length; i++) {
        allN += Number(n[i].title)
      }

      for (let i = 0; i < length; i++) {
        xRel.push((Number(x[i].title[0]) + Number(x[i].title[1])) / 2)
      }

      for (let i = 0; i < length; i++) {
        w.push(Number(n[i].title) / allN);
      }

      for (let i = 0; i < length; i++) {
        statData.push({n: n[i].title, x: x[i].title, w: w[i], nAll: allN, xRel: xRel[i], title: ''});
      }

      this.relData.title[0] = 'Интервальный ряд относительных частот'
      this.relData.title[1] = 'Статистический ряд частот'
      this.relData.title[2] = 'Статистический ряд относительных частот'

      this.statData = statData;
      this.getRelData()
    },


    getRelData() {
      let data = this.statData;
      let length = data.length;

      if (this.relData.x.length === 0) {
        for (let i = 0; i < length; i++) {
          this.relData.x.push(data[i].x)
          this.relData.n.push(data[i].n)
          this.relData.xRel.push(data[i].xRel)
          this.relData.w.push(data[i].w)
        }
      } else {
        for (let i = 0; i < length; i++) {
          this.relData.x[i] = data[i].x
          this.relData.n[i] = data[i].n
          this.relData.xRel[i] = Math.round(data[i].xRel * 100) / 100
          this.relData.w[i] = Math.round(data[i].w * 100) / 100
        }
      }
      console.log('rel data:')
      console.log(this.relData)
    },
  }

}
</script>

<style scoped >
input {
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 10px;
  width: 100px;
  display: inline-block;
  margin-left: 5px;
  padding-left: 5px;
}

.btn {
  margin-bottom: 20px;
}

.inputTable__inner {
  align-items: center;
}

.inputTable, td, tr {
  padding: 10px;
  margin-bottom: 5px;
  border: 2px solid #a8a8a8;
  border-collapse: collapse;
}

.checkbox {
  width: 13px;
  margin: 0;
  padding: 0;
}

.checkedValue {
  display: block;
}

</style>
