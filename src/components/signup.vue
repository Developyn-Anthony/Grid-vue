<template>
    <form id="submitForm" action="/">
            <div class="input-control">
                <label class="submit-label-style" for="username">Username:</label></br>
                <input type="text" name="username" id="username" v-model="username" placeholder="Developyn">
            </div>
            <div class="input-control">
                <label class="submit-label-style" for="password">Password:</label></br>
                <input type="password" name="password" id="password" v-model="password" placeholder="Password1!">
            </div>
            <div>
                <button id="submit" v-on:click.prevent="login()" type="submit">Submit</button>
                <div id="validated" class="success-style" v-if="loggedIn">Log in Successful!</div>
                <div id="validated" class="fail-style" v-if="logError">Incorrect Login</div>
                <div id="validated" class="fail-style" v-if="missing">Fields cannot be empty</div>
            </div>
        </form>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      missing: false,
      loggedIn: false,
      logError: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username === "Developyn" && this.password === "Password1!") {
        this.loggedIn = true;
        this.missing = false;
        this.logError = false;
      } else if (this.username === "" || this.password === "") {
        this.missing = true;
        this.logError = false;
        this.loggedIn = false;
      } else {
        this.logError = true;
        this.loggedIn = false;
        this.missing = false;
      }
    },
  },
};
</script>

<style scoped>
#submitForm {
  text-align: center;
  color: white;
  margin-top: -1.9rem;
}

.input-control {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

#username,
#password {
  width: 75%;
  height: 1.5rem;
  border-radius: 1.5rem;
  padding-left: 0.625rem;
  color: black;
}

.submit-label-style {
  float: left;
  padding-left: 1.5rem;
}

.success-style {
  background-color: darkgreen;
  width: 50%;
  height: 2rem;
  border: 0.1rem #fff solid;
  color: white;
  border-radius: 1.5rem;
  padding-top: 0.8rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  font-size: small;
}

.fail-style {
  background-color: darkred;
  width: 50%;
  height: 2rem;
  border: 0.1rem #fff solid;
  color: white;
  border-radius: 1.5rem;
  padding-top: 0.8rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  font-size: small;
}

.p-fontSize {
  font-size: small;
}
</style>