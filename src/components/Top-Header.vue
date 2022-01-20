<template>
  <div>
    <!-- Logged In
    <span v-if="auth">Yes</span>
    <span v-else>No</span> -->
    <div v-if="loggedIn">
      <button @click="SignOutPressed()">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loggedIn: false,
      // text: "",
    };
  },
  // computed: {
  //   ...mapState(["auth"]),
  // },
  methods: {
    ...mapActions(["SignOut"]),
    SignOutPressed() {
      this.SignOut();
    },
  },
  mounted() {
    if (localStorage.getItem("firebaseAuth")) {
      var auth = JSON.parse(localStorage.getItem("firebaseAuth"));
      if (auth.auth) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    } else {
      this.loggedIn = false;
    }
  },
};
</script>

<style lang="scss" scoped></style>
