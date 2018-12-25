<template>
  <div class="box">
    <span class="result">{{number}}</span>
    <button class="add" @click="add">+</button>
    <button class="minus" @click="minus">-</button>
    <span class="name">name:{{name}}</span>
  </div>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      number: 0
    };
  },
  methods: {
    add() {
      this.number += 1;
    },
    minus() {
      this.number -= 1;
    }
  }
};
</script>
<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  font-size: 20px;
  vertical-align: middle;
}

.result {
  color: red;
}

.add {
  margin: 0 10px;
}
</style>
