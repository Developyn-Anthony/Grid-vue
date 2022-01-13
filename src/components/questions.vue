<template>
  <div class="grid3-container">
    <form id="multiChoice" action="/">
      <div id="quest1" class="quest-1">
        <p class="multi-questions p-fontSize">What color is dirt?</p>
        <input
          class="multi-radio"
          type="radio"
          name="quest1"
          id="1a"
          value="Green"
        />
        <label class="p-fontSize multi-labels" for="1a">Green</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest1"
          id="1b"
          value="Red"
        />
        <label class="p-fontSize multi-labels" for="1b">Red</label>
        <input
          class="multi-radio"
          type="radio"
          id="1c"
          name="quest1"
          value="Pink"
        />
        <label class="p-fontSize multi-labels" for="1c">Pink</label>
        <input
          class="multi-radio"
          type="radio"
          id="1d"
          name="quest1"
          value="Brown"
        />
        <label class="p-fontSize multi-labels" for="1d">Brown</label>
      </div>
      <div id="quest2" class="quest-2">
        <p class="multi-questions p-fontSize">How old is Big Ben?</p>
        <input
          class="multi-radio"
          type="radio"
          name="quest2"
          id="2a"
          value="4"
        />
        <label class="p-fontSize multi-labels" for="2a">4</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest2"
          id="2b"
          value="180"
        />
        <label class="p-fontSize multi-labels" for="2b">180</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest2"
          id="2c"
          value="1000"
        />
        <label class="p-fontSize multi-labels" for="2c">1000</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest2"
          id="2d"
          value="179"
        />
        <label class="p-fontSize multi-labels" for="2d">179</label>
      </div>
      <div id="quest3" class="quest-3">
        <p class="multi-questions p-fontSize">What color is an Orange?</p>
        <input
          class="multi-radio"
          type="radio"
          name="quest3"
          id="3a"
          value="red"
        />
        <label class="p-fontSize multi-labels" for="3a">Red</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest3"
          id="3b"
          value="green"
        />
        <label class="p-fontSize multi-labels" for="3b">Green</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest3"
          id="3c"
          value="pink"
        />
        <label class="p-fontSize multi-labels" for="3c">Pink</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest3"
          id="3d"
          value="Orange"
        />
        <label class="p-fontSize multi-labels" for="3d">Orange</label>
      </div>
      <div id="quest4" class="quest-4">
        <p class="multi-questions p-fontSize">What time is 17:00?</p>
        <input
          class="multi-radio"
          type="radio"
          name="quest4"
          id="4a"
          value="1am"
        />
        <label class="p-fontSize multi-labels" for="4a">1AM</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest4"
          id="4b"
          value="5am"
        />
        <label class="p-fontSize multi-labels" for="4b">5AM</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest4"
          id="4c"
          value="7pm"
        />
        <label class="p-fontSize multi-labels" for="4c">7PM</label>
        <input
          class="multi-radio"
          type="radio"
          name="quest4"
          id="4d"
          value="5pm"
        />
        <label class="p-fontSize multi-labels" for="4d">5PM</label>
      </div>
      <div class="Center">
        <button type="submit" v-on:click.prevent="answers()">Submit</button>
        <p>Mind your ears</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
    };
  },
  methods: {
    answers() {
      const a1Value = document.getElementById("1d").checked;
      const a2Value = document.getElementById("2d").checked;
      const a3Value = document.getElementById("3d").checked;
      const a4Value = document.getElementById("4d").checked;

      if (a1Value == true && a2Value == true && a3Value == true && a4Value == true) {
        const audio = new Audio(
          "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
        );
        audio.play();
      }
    },
  },
};
</script>

<style scoped>
.grid3-container {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1.6rem;
    width: 100%;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 4rem);
    margin-top: -4rem;
    grid-row-gap: 0.3rem;
    overflow: auto;
}

.grid3-item {
    background-color: white;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.4rem;
}

#multiChoice {
    padding-left: 0.3rem;
    color: #fff;
}

.quest-1, .quest-2, .quest-3, .quest-4 {
    margin-top: -0.8rem;
    padding-left: -0.1rem;
    text-align: center;
    padding-bottom: 0.3rem;
}

.multi-questions {
    margin-bottom: -0.3rem;

}

.multi-radio {
    margin-left: -0.2rem;
    margin-right: -0.2rem;
}

.multi-labels {
    padding-right: 0.3rem;
    padding-left: 0.3rem;
    padding-bottom: 0.5rem;
}

.Center {
    width: 100%;
    height: auto;
    text-align: center;
}
</style>