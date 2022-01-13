<template>
  <div class="magic-ball">
    <div id="eightball">
      <form class="question-box" @submit.prevent="getAnswer()">
        <div class="question-game">
          <input v-model="question" placeholder=" Ask:" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div class="circle">
        <img :src="image" alt="Magic 8 Ball" />
        <div class="response-div">
          <p>{{ response }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Ask again",
];
export default {
  name: "eightBall",
  data() {
    return {
      question: "",
      response: "",
      image: require("@/assets/magic-eight-ball.png"),
    };
  },
  methods: {
    getAnswer() {
      if (!this.question) {
        return;
      }
      const index = Math.floor(Math.random() * responses.length);
      this.response = responses[index];
    },
  },
};
</script>

<style scoped>
.circle {
  background-position: center;
  background-size: 100%;
  width: 80%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}

.circle img {
  width: 80%;
  position: absolute;
}

.circle p {
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 12px;
  padding-top: 48%;
}

.question-game {
  width: 95%;
  height: 3rem;
}

.question-box {
  display: flex;
  flex-direction: row;
}

.question-box button {
  background-color: #0a1813;
  color: white;
  border: none;
  cursor: pointer;
  width: 10.125rem;
  height: 2.5rem;
  margin-right: 0.5rem;
}

.question-box input {
  width: 9rem;
  height: 2rem;
  margin-left: 0.2rem;
}

.question-box label {
  font-size: 25px;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1279px) {
  .circle p {
    font-size: 16px;
  }
}
</style>

