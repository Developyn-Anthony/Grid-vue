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
        <Questions />
      </div>
      <div class="grid-item grid-item4">
        <Table />
      </div>
      <div class="grid-item grid-item5">
        <TableSubmit />
      </div>
      <div class="grid-item grid-item6">
        <Orders />
      </div>
      <div class="grid-item grid-item7">
        <Search />
      </div>
      <div class="grid-item grid-item8">
        <ListGrid />
      </div>
      <div class="grid-item grid-item9">
        <EightBall />
      </div>
    </div>
  </div>
</template>

<script>
// import component from './components/component.vue'
import Clock from "./components/clock.vue";
import Signup from "./components/signup.vue";
import Questions from "./components/questions.vue";
import Orders from "./components/order.vue";
import Table from "./components/table.vue";
import TableSubmit from "./components/submitTable.vue";
import Search from "./components/search.vue";
import ListGrid from "./components/list-grid.vue";
import EightBall from "./components/ball.vue";

export default {
  name: "App",
  components: {
    Clock,
    Signup,
    Questions,
    Orders,
    Table,
    TableSubmit,
    Search,
    ListGrid,
    EightBall,
  },
  data() {},
};
</script>

<style>
body {
  background-color: gray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  width: 98%;
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

  .img-text {
    margin-top: -0.1rem;
  }

  .circle p {
    font-size: 16px;
  }
}
</style>
