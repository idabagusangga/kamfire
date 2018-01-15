<template>
  <div id="app">
    <header>
      <ComponentNavBar></ComponentNavBar>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA"><br><br>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import ComponentNavBar from '@/components/ComponentNavBar'
export default {
  name: 'app',
  components: {
    ComponentNavBar: ComponentNavBar
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}



</style>
