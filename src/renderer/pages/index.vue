<<template>
  <div class="container">
    <h1 class="mainPageHeader">Главная страница</h1>
    <Nuxt-link to="/lab3" id="lab3">Лабораторная работа №3</Nuxt-link>
    <Nuxt-link to="/lab5" id="lab5">Лабораторная работа №5</Nuxt-link>
  </div>
</template>

<script>


export default {
  components: {

  }
}
</script>

<style scoped>
  .mainPageHeader {
    font-size: 50px;
    text-align: center;
  }
</style>
