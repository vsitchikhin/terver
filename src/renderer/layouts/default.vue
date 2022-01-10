<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {  }
}
</script>

<style>
body {
  margin: 0 !important;
  background: #121212;
  color: #fff;
  font-family: "Roboto", sans-serif;
}
a {
  display: block;
  font-size: 25px;
  text-decoration: none;
  margin-top: 15px;
  color: #1051af;
  transition: .5s;
}
a:hover {
  font-size: 30px;
  transition: .5s;
}
input {
  background: #121212;
  border: 1px solid #fff;
  border-radius: 5px;
}
v-btn {
  margin: 10px;
  padding: 7px;
  background-color: #262626;
  border-radius: 5px;
  display: block;
  max-width: 100px;
  transition: .3s;
}

v-btn:hover {
  background-color: #343436;
  padding: 10px;
}
</style>
