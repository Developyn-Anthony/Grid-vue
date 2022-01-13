<template>
  <div id="search">
    <div>
      <input
        type="search"
        id="searchBar"
        v-model="search"
        placeholder="Search"
      />
    </div>
    <ul class="game-list" v-for="game in sortGames">
      <li>
        <a class="list-li-anchor"
          ><img class="game-imgs" v-bind:src="game.img" />
          <p class="img-text">{{ game.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
      games: [
        { name: "Farming Sim 22", img: require("@/assets/fs22.jpg") },
        { name: "Battlefield 2042", img: require("@/assets/bf2042.jpg") },
        { name: "Destiny", img: require("@/assets/dest1.jpg") },
        { name: "Destiny 2", img: require("@/assets/dest2.jpg") },
        { name: "Halo Infinite", img: require("@/assets/infinite.png") },
      ],
    };
  },
  computed: {
    sortGames() {
      return this.games.filter((game) => {
        return game.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.game-list {
    list-style-type: none;
    border-bottom: 0.1rem white solid;
}

.game-imgs {
    display: table-cell;
    vertical-align: middle;
    width: 8rem;
    height: auto;
    padding-bottom: 5%;
}

.img-text {
    color: white;
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    text-align: justify;
    font-size: 16pt;
}

#searchBar {
    width: 50%;
    height: 2rem;
    margin-left: 1rem;
    padding-left: 0.8rem;
    border-radius: 1rem;
}
</style>

