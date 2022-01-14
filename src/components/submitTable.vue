<template>
  <div>
    <div>
      <form id="tableSubmitForm" class="table-form" action="/">
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          class="table-inputs"
          v-model="firstName"
          required
        />
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          class="table-inputs"
          v-model="lastName"
          required
        />
        <input
          type="text"
          id="newAge"
          placeholder="Age"
          class="table-inputs"
          v-model="newAge"
          required
        /><br />
        <button class="table-button" type="submit" @click="addRow">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableSubmit",
  props: ['peoples'],
  data() {
    return {
      firstName: "",
      lastName: "",
      newAge: "",
    };
  },
  methods: {
    addRow(e) {
      e.preventDefault();
      let uid = (new Date().getTime()).toString(36);
      this.$emit('submit', {fName: this.firstName, lName: this.lastName, age: this.newAge, nameId: uid});

      this.firstName = "";
      this.lastName = "";
      this.newAge = "";
    },
  },
};
</script>

<style scoped>
.grid-table {
  color: #fff;
  width: 95%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

th,
td {
  border: 0.2rem solid #fff;
  padding-left: 0.2rem;
  position: relative;
}

.table-inputs {
  width: 75%;
  height: 1.5rem;
  border-radius: 1.5rem;
  padding-left: 0.625rem;
  color: black;
  margin-left: 0.5rem;
}

.table-button {
  margin-left: 0.6rem;
}

.delete-btn {
  border-radius: 50%;
  background-color: darkred;
  color: #fff;
  width: 3rem;
  height: 3rem;
  font-size: 18pt;
  cursor: pointer;
}

.table-div {
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
}
</style>

