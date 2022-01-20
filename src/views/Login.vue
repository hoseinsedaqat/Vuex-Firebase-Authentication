<template>
  <div>
    <h3>Login</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="login" v-model="user.email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="user.password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    ...mapActions(["pressedLogin"]),
    pressed() {
      this.pressedLogin(this.user);
    },
  },
  beforeCreate() {
    if (localStorage.getItem("firebaseAuth")) {
      var auth = JSON.parse(localStorage.getItem("firebaseAuth"));
      if (auth.auth) {
        this.$router.push("/secret");
      } else {
        return;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
.error {
  color: red;
}
</style>
