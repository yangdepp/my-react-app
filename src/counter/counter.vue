<template>
  <div class="box">
    <span class="result">{{number}}</span>
    <button class="add" @click="add">+</button>
    <button class="minus" @click="minus">-</button>
    <span class="name">父组件的名字:{{name}}</span>
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
      this.$emit('selectType',1);
    },
    minus() {
      this.number -= 1;
      this.$emit('selectType',2);
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
