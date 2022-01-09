<template>
  <div class="container">
    <canvas id="polygon" ref="canvas">

    </canvas>
  </div>
</template>

<script>
import file from '~/components/Lab5-1/file.json'

export default {
  name: "poligon",

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


    function findBiggestValue() {
      let biggestValue = -1;
      let statData = getStatData();
      let length = statData.length;

      for (let i = 0; i < length; i++) {
        biggestValue = biggestValue > statData[i].value ? biggestValue : statData[i].value;
      }

      return biggestValue;
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
      let x = [];
      let y = [];
      let dots = [];
      let length;

      for (let i = 0; i < data.length; i++) {
        x.push(data[i].number * 50 - 50);
        y.push(data[i].value * 100);
      }

      length = x.length;

      for (let i = 0; i < length; i++) {
        dots.push([x[i], y[i]]);
      }

      return dots;
    }
    // --------------------------------------------------------------------------


    // --------------------------------------------------------------------------
    // график
    function chart(data) {
      let canvas = document.getElementById('polygon');
      let ctx = canvas.getContext('2d');
      const canvasHeight = 1000;
      const canvasWidth = 1000;
      let rowsHorizontal = findBiggestValue() + 1;
      let rowsVertical = getSetLength();

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;


      // ------------------------------------------------------------------------
      // разлиновка
      let numbers = file.numbers;
      let set = [...new Set(numbers)];
      set = sortArray(set, set.length);
      let stepHorizontal = (canvasWidth - 100) / rowsHorizontal;
      let stepVertical = canvasWidth / rowsVertical;

      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.font = 'normal 20px Roboto, sans-serif';
      ctx.fillStyle = '#1e1d1d'

      for (let i = 1; i <= rowsHorizontal; i++) {
        const y = stepHorizontal * i;
        ctx.fillText(String(rowsHorizontal - i + 1), 5, y - 5);
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
      }

      for (let i = 1; i <= rowsVertical; i++) {
        const x = stepVertical * i;
        ctx.fillText(String(set[i]), x, canvasHeight - 5);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
      }

      ctx.fillText('1', 5, canvasHeight - 5);
      ctx.stroke();
      ctx.closePath();
      // ------------------------------------------------------------------------
      // конец разлиновки


      // ------------------------------------------------------------------------
      // рисуем функцию
      ctx.beginPath();
      ctx.lineWidth = 4;
      for (const [x, y] of data) {
        ctx.lineTo(x, canvasHeight - y);
      }
      ctx.stroke();
      ctx.closePath();
    }


    chart(getDots());
    // ----------------------------------------------------------------------------
    // нарисовали график
  },
}
</script>

<style scoped>

    #polygon {
      width: 500px;
      height: 500px;
      background: #a8a8a8;
      margin: 0 auto;
    }

</style>
