<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
import FetchService from '@/services/FetchService'

export default {
  name: 'App',
  components: {
  },
  async created () {
    const url = `${process.env.VUE_APP_ATLAS_API_URL}/trades`
    const data = await FetchService.get(url)
    console.log(data)
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
