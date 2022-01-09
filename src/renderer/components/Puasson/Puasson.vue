<template>
  <div class="container">
    <div class="container">
      <h2 class="puassonHeader">Формула Пуассона</h2>
      <select  id="chooseVersion-2" class="version">
        <option value="0">Выберите вариант</option>
        <option value="1">X = m</option>
        <option value="2">m1 <= X <= m2</option>
      </select>
      <v-btn @click="getVersion">Подтвердить</v-btn>

      <h1 id="v0-3">Вы не выбрали вариант.</h1>
      <hr id="v0-hr-3">
      <version1 id="v1-3" />
      <version2 id="v2-3" />
    </div>
  </div>
</template>

<script>
import version1 from "../../components/Puasson/components/version1.vue";
import version2 from "../../components/Puasson/components/version2.vue";

export default {
  name: "Puasson",

  components: {
    version1,
    version2,
  },

  methods: {
    printVersion(version) {
      let v0 = document.querySelector('#v0-3');
      let v1 = document.querySelector('#v1-3');
      let v2 = document.querySelector('#v2-3');
      let hr = document.querySelector('#v0-hr-3')

      switch (version) {
        case '1':
          v1.style.display = 'block';

          v0.style.display = 'none';
          v2.style.display = 'none';
          hr.style.display = 'none';
          break;
        case '2':
          v2.style.display = 'block';

          v0.style.display = 'none';
          v1.style.display = 'none';
          hr.style.display = 'none';
          break;

        default:
          v0.style.display = 'block';
          hr.style.display = 'block';

          v1.style.display = 'none';
          v2.style.display = 'none';
      }
    },


    getVersion() {
      let version;
      version = document.querySelector('#chooseVersion-2');

      this.printVersion(version.value);
    },
  },

}
</script>

<style scoped>
  #v1-3, #v2-3 {
    display: none;
  }

  #chooseVersion-2 {
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
