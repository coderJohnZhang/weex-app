<template>
  <div class="wraper">
    <text class="result">{{result}}</text>
    <div class="row">
      <text class="btn" @click="input(1)">1</text>
      <text class="btn" @click="input(2)">2</text>
      <text class="btn" @click="input(3)">3</text>
      <text class="btn btn-operator" @click="input('+')">+</text>
    </div>
    <div class="row">
      <text class="btn" @click="input(4)">4</text>
      <text class="btn" @click="input(5)">5</text>
      <text class="btn" @click="input(6)">6</text>
      <text class="btn btn-operator" @click="input('-')">-</text>
    </div>
    <div class="row">
      <text class="btn" @click="input(7)">7</text>
      <text class="btn" @click="input(8)">8</text>
      <text class="btn" @click="input(9)">9</text>
      <text class="btn btn-operator" @click="input('*')">*</text>
    </div>
    <div class="row">
      <text class="btn" @click="input(0)">0</text>
      <text class="btn" @click="input('.')">.</text>
      <text class="btn" @click="clear">AC</text>
      <text class="btn btn-operator" @click="calculate">=</text>
    </div>
  </div>
</template>

<style scoped>
.wraper {
  justify-content: center;
  padding: 5px;
  background: linear-gradient(45deg, rgb(20, 20, 20) 0%, rgb(82, 79, 81) 100%);
}
.row {
  flex-direction: row;
}
.result {
  text-align: right;
  background-color: #666;
  font-size: 40px;
  color: white;
}
.btn {
  flex: 1;
  text-align: center;
  color: #333333;
  background-color: #eee;
  font-size: 46px;
}
.btn,
.result {
  height: 120px;
  padding: 35px;
  margin: 5px;
}
.btn-operator {
  background-color: #669;
  font-size: 50px;
  color: white;
}
</style>

<script>
const OP = ["+", "-", "*", "/"];
export default {
  data() {
    return {
      shouldClear: true,
      result: "",
      inputs: []
    };
  },
  methods: {
    input(value) {
      if (this.shouldClear) {
        this.clear();
      }
      this.shouldClear = false;
      const inputs = this.inputs;
      const lastOne = inputs.length ? inputs[inputs.length - 1] : "";
      if (OP.indexOf(lastOne) > -1 && OP.indexOf(value) > -1) {
        return;
      }
      inputs.push(value);
      const buf = [];
      let char = "";
      for (let i = 0; i < inputs.length; i++) {
        char = inputs[i];
        if (OP.indexOf(char) > -1) {
          char = " " + char + " ";
        }
        buf.push(char);
      }
      this.result = buf.join("");
    },
    calculate() {
      const result = eval(this.result);
      this.inputs = [result];
      this.result = result;
      this.shouldClear = true;
    },
    clear() {
      this.inputs = [];
      this.result = "";
    }
  }
};
</script>