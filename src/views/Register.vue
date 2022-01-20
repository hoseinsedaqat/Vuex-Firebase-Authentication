<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="user.email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="user.password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
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
    ...mapActions(["pressedRegister"]),
    pressed() {
      this.pressedRegister(this.user);
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
.error {
  color: red;
  font-size: 18px;
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
</style>
