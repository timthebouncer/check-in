<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">上班/下班</router-link>
      <router-link to="/apply">單據申請</router-link>
      <router-link to="/schedule">日程表</router-link>
    </div>
    <router-view/>


  </div>
</template>
<script>
  export default {
    name:'app',

  }
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    width:150px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>