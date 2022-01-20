<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/login" v-if="showLink">Login</router-link>
    <router-link to="/secret">Secret</router-link>
    <router-link to="/register" v-if="showLink">Register</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  beforeCreate() {
    if (localStorage.getItem("firebaseAuth")) {
      var auth = JSON.parse(localStorage.getItem("firebaseAuth"));
      if (auth.auth) {
        this.showLink = false;
        console.log(this.showLink);
      } else {
        this.showLink = true;
        console.log(this.showLink);
      }
    } else {
      this.showLink = true;
      console.log(this.showLink);
    }
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #444;
  padding: 1rem;
  a {
    margin: 0 1rem;
    text-decoration: underline;
  }
}
</style>
