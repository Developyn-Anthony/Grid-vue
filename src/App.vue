<template>
  <div id="app">
    <div class="grid-container">
      <div class="grid-item grid-item1">
        <Clock />
      </div>
      <div class="grid-item grid-item2">
        <Signup />
      </div>
      <div class="grid-item grid-item3">
        <p>f</p>
      </div>
      <div class="grid-item grid-item4">
        <p>f</p>
      </div>
      <div class="grid-item grid-item5">
        <p>f</p>
      </div>
      <div class="grid-item grid-item6">
        <p>f</p>
      </div>
      <div class="grid-item grid-item7">
        <p>f</p>
      </div>
      <div class="grid-item grid-item8">
        <p>f</p>
      </div>
      <div class="grid-item grid-item9">
        <p>f</p>
      </div>
    </div>
  </div>
</template>

<script>
// import component from './components/component.vue'
import Clock from './components/clock.vue'
import Signup from './components/signup.vue'

export default {
  name: "App",
  components: {
    Clock,
    Signup,
  },
};
</script>

<style>
body {
  background-color: gray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.grid-container {
  position: relative;
  padding-top: 1.6rem;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.grid-item {
  position: relative;
  font-size: 1.6rem;
  padding-top: 3.1rem;
  background-color: #379ad6;
  color: #222;
  border: 0.1rem solid white;
  overflow: auto;
}

/* Main CSS */

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 20rem);
  grid-row-gap: 1.25rem;
}

/* Media queries */
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0.5rem;
    }

    .input-control {
        width: 80%;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .grid-container {
        grid-template-rows: repeat(9, 22rem);
    }

    .p-fontSize {
        font-size: medium;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1279px) {
    .grid-container {
        grid-template-rows: repeat(9, 25rem);
        grid-template-columns: repeat(3, 1fr);
    }
}

@media only screen and (min-width: 1650px) {
}

</style>
