<template>
  <div id="app">
    <TopHeader />
    <div id="nav"><Header /></div>
    <router-view />
  </div>
</template>

<script>
import TopHeader from "./components/Top-Header";
import Header from "./components/Header";
export default {
  data() {
    return {
      showLink: true,
    };
  },
  components: {
    TopHeader,
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
