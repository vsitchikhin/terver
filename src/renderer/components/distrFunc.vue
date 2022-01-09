<template>
  <div class="container">
      <canvas id="destruction" ref="canvas"></canvas>
  </div>
</template>

<script>
import file from '~/components/Lab5-1/file.json'

export default {
  name: "distrFunc",


  mounted() {
    // --------------------------------------------------------------------------
    // получение и обработка данных с файла
    function getStatData() {
      let numbers = file.numbers;
      let length = numbers.length;
      let statNumbers = [];
      let set = [...new Set(numbers)];
      let setLength = set.length;
      let values;

      set = sortArray(set, setLength);
      numbers = sortArray(numbers, length);

      values = countValues(numbers, length);

      for (let i = 0; i < setLength; i++) {
        statNumbers.push({number: set[i], value: 0, relValue: 0});
      }

      for (let i = 0; i < setLength; i++) {
        statNumbers[i].value = values[i];
        statNumbers[i].relValue = statNumbers[i].value / length;
      }

      return statNumbers;

    }


    function sortArray(array, length) {
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
    }


    function countValues(array, length) {
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
    }


    function getHorizontalStep () {
      let statData = getStatData();
      let length = statData.length
      let step = 0;

      for (let i = 0; i < length; i++) {
        step += statData[i].relValue;
      }

      step /= length;

      return step;
    }


    function getSetLength() {
      let numbers = file.numbers;
      let set = [...new Set(numbers)];
      return set.length;
    }
    // --------------------------------------------------------------------------


    // --------------------------------------------------------------------------
    // получение точек для рисования графика
    function getDots() {
      let data = getStatData();
      let x1 = [];
      let x2 = [];
      let y1 = [50];
      let y2 = []
      let dots = [];
      let length;

      for(let i = 0; i < data.length; i++) {
        x1.push(data[i].number * 50 - 50);
        if(data[i + 1] !== undefined) {
          x2.push(data[i + 1].number * 50 - 50)
        } else {
          x2.push(21 * 50);
        }
      }

      for (let i = 0; i < data.length; i++) {
        y2.push(y1[i]);
        y1.push(y1[i] + data[i].relValue * 1000)

      }

      length = x1.length;

      for (let i = 0; i < length; i++) {
        dots.push([x1[i], y1[i]], [x2[i], y2[i]])
      }

      return dots;
    }
    // --------------------------------------------------------------------------


    // --------------------------------------------------------------------------
    // график
    function chart(data) {
      let destruction = document.getElementById('destruction');
      let destContext = destruction.getContext('2d');
      let textStep = getHorizontalStep();
      const canvHeight = 1000;
      const canvWidth = 1000;
      let rowsHorizont = getSetLength();
      let rowsVert = getSetLength();

      destruction.width = canvWidth;
      destruction.height = canvHeight;


      // ------------------------------------------------------------------------
      // Разлиновка
      let numbers = file.numbers;
      let set = [...new Set(numbers)];
      set = sortArray(set, set.length);
      let stepHorizont = (canvWidth) / rowsHorizont;
      let stepVert = (canvWidth) / rowsVert;

      destContext.beginPath();
      destContext.lineWidth = 0.5;
      destContext.font = 'normal 15px Roboto, sans-serif';
      destContext.fillStyle = '#1e1d1d';

      for (let i = 1; i <= rowsHorizont; i++) {
        const y = stepHorizont * i;
        destContext.fillText(String(Math.round((1 + textStep - (textStep + textStep * (i - 1))) * 100) / 100), 5, y - 35);
        destContext.moveTo(0, y);
        destContext.lineTo(canvWidth, y);
      }

      for (let i = 1; i <= rowsVert; i++) {
        const x = stepVert * i;
        destContext.fillText(String(set[i]), x, canvHeight - 5);
        destContext.moveTo(x, 0);
        destContext.lineTo(x, canvHeight);
      }

      destContext.fillText('1', 5, canvHeight - 5);
      destContext.stroke();
      destContext.closePath();
      // ------------------------------------------------------------------------
      // конец разлиновки


      // ------------------------------------------------------------------------
      // рисуем функцию
      destContext.beginPath();
      destContext.lineWidth = 5;
      for (const [x, y] of data) {
        destContext.lineTo(x, canvHeight - y);
      }
      destContext.stroke();
      destContext.closePath();
    }


    chart(getDots());
    // ----------------------------------------------------------------------------
    // нарисовали график
  },
}
</script>

<style scoped>

      #destruction {
        width: 500px;
        height: 500px;
        background: #a8a8a8;
        margin: 0 auto;
      }

</style>
