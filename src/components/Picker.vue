<template>
    <div class="wrapper">
        <div class="group">
            <text class="label">Date: </text>
            <text class="title">{{value}}</text>
        </div>
        <div class="group">
            <text class="button" @click="pickDate">Pick Date</text>
        </div>
    </div>
</template>

<script>
const picker = weex.requireModule("picker");
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    pickDate() {
      picker.pickDate(
        {
          value: this.value,
          max: "2029-11-28",
          min: "2005-11-28"
        },
        event => {
          if (event.result === "success") {
            this.value = event.data;
          }
        }
      );
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.group {
  flex-direction: row;
  justify-content: center;
  margin-bottom: 60px;
  align-items: center;
}
.label {
  font-size: 40px;
  color: #888888;
}
.title {
  font-size: 80px;
  color: #41b883;
}
.button {
  font-size: 50px;
  width: 280px;
  color: #41b883;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
</style>
