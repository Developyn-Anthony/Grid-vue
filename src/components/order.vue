<template>
  <div id="orderList">
    <form>
      <div>
        <ul class="item-list">
          <li id="listItems" :class="{ active: item.active }" v-for="item in items">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider" v-on:click="toggle(item)"></span>
            </label>
            £{{ item.price }} {{ item.product }}
          </li>
        </ul>
        <div class="order-total">Total - £{{ orderTotal() }}</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      items: [
        { product: "Battlefield", price: 70, active: false },
        { product: "Jeans", price: 25, active: false },
        { product: "Socks", price: 5, active: false },
        { product: "Monitor", price: 135, active: false },
      ],
    };
  },
  methods: {
    toggle: function (e) {
      e.active = !e.active;
    },
    orderTotal: function () {
      let total = 0;
      this.items.forEach(function (e) {
        if (e.active) {
          total += e.price;
        }
      });
      return total;
    },
  },
};
</script>

<style scoped>
.item-list {
    list-style-type: none;
    margin-top: -2rem;
    margin-left: -1rem;
    color: white;
}

#listItems {
    padding-bottom: 2rem;

}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: green;
}

input:focus+.slider {
    box-shadow: 0 0 1px darkgreen;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.order-total {
    text-align: right;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    margin-top: -1.8rem;
    color: white;
}
</style>

