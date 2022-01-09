<template>
  <div class="container">
    <h2 class="bernulliHeader">Формула Бернулли</h2>
    <select  id="chooseVersion" class="version">
      <option value="0">Выберите вариант</option>
      <option value="1">k = m</option>
      <option value="2">k < m</option>
      <option value="3">k >= m</option>
      <option value="4">m1 <= k <= m2</option>
    </select>
    <v-btn @click="getVersion">Подтвердить</v-btn>

    <h1 id="v0">Вы не выбрали вариант.</h1>
    <hr id="v0-hr">
    <version1 id="v1" />
    <version2 id="v2" />
    <version3 id="v3" />
    <version4 id="v4" />
  </div>
</template>

<script>
import version1 from "../../components/Bernulli/components/version1.vue";
import version2 from "../../components/Bernulli/components/version2.vue";
import version3 from "../../components/Bernulli/components/version3.vue";
import version4 from "../../components/Bernulli/components/version4.vue";

export default {
  name: "Bernulli",


  components: {
    version1,
    version2,
    version3,
    version4,
  },

  methods: {
    printVersion(version) {
      let v0 = document.querySelector('#v0');
      let v1 = document.querySelector('#v1');
      let v2 = document.querySelector('#v2');
      let v3 = document.querySelector('#v3');
      let v4 = document.querySelector('#v4');
      let hr = document.querySelector('#v0-hr')

      switch (version) {
        case '1':
          v1.style.display = 'block';

          v0.style.display = 'none';
          v2.style.display = 'none';
          v3.style.display = 'none';
          v4.style.display = 'none';
          hr.style.display = 'none';
          break;
        case '2':
          v2.style.display = 'block';

          v0.style.display = 'none';
          v1.style.display = 'none';
          v3.style.display = 'none';
          v4.style.display = 'none';
          hr.style.display = 'none';
          break;
        case '3':
          v3.style.display = 'block';

          v0.style.display = 'none';
          v2.style.display = 'none';
          v1.style.display = 'none';
          v4.style.display = 'none';
          hr.style.display = 'none';
          break;
        case '4':
          v4.style.display = 'block';

          v0.style.display = 'none';
          v2.style.display = 'none';
          v3.style.display = 'none';
          v1.style.display = 'none';
          hr.style.display = 'none';
          break;
        default:
          v0.style.display = 'block';
          hr.style.display = 'block';

          v4.style.display = 'none';
          v2.style.display = 'none';
          v3.style.display = 'none';
          v1.style.display = 'none';
      }
    },


    getVersion() {
      let version;
      version = document.querySelector('#chooseVersion');

      this.printVersion(version.value);
      return version.value;
    },


  },
}
</script>

<style scoped>
    #v1, #v2, #v3, #v4 {
      display: none;
    }

    #chooseVersion {
      color: #fff;
      cursor: pointer;
      background-color: #121212;
      border: 1px solid #fff;
      border-radius: 5px;
      height: 35px;
      width: 160px;
      padding-left: 10px;
      margin-top: 10px;
    }
</style>
