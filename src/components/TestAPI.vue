<template>
  <scroller>
    <div class="panel">
      <text class="button" @click="toComputer">计算器</text>
    </div>
    <div class="panel">
      <text class="button" @click="toBanner">轮播效果</text>
    </div>
    <div class="panel">
      <text class="button" @click="toTab">底部导航</text>
    </div>
    <div class="panel">
      <text class="button" @click="toLogin">输入框</text>
    </div>
    <div class="panel">
      <text class="button" @click="toScroller">Scroller</text>
    </div>
    <div class="panel">
      <text class="button" @click="toAnim">动画</text>
    </div>
    <div class="panel">
      <text class="button" @click="toList">列表</text>
    </div>
    <div class="panel">
      <text class="button" @click="toPicker">日期选择</text>
    </div>
    <div class="panel">
      <text class="button" @click="toRecycler">Recycle-list</text>
    </div>
    <div class="panel">
      <text class="button" @click="toWaterfall">瀑布流</text>
    </div>
    <div class="panel">
      <text class="button" @click="toWebSocket">WebSocket</text>
    </div>
    <div class="panel">
      <text class="button" @click="storage">Storage</text>
    </div>
    <div class="panel">
      <text class="button" @click="nativeCall">原生交互</text>
      <text>当前系统电池电量：{{level}}</text>
      <text>当前系统电池状态：{{status}}</text>
    </div>
  </scroller>
</template>

<style scoped>
.panel {
  width: 700px;
  height: 240px;
  margin: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
.button {
  width: 350px;
  background-color: #008cba;
  border: 4px solid;
  color: white;
  padding: 20px 40px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 36px;
}
</style>

<script>
const modal = weex.requireModule("modal");
const batteryModule = weex.requireModule("batteryModule");
var globalEvent = weex.requireModule("globalEvent");

export default {
  data() {
    return {
      level: "-1",
      status: "unknown"
    };
  },
  methods: {
    toComputer() {
      this.$router.push("calculator");
    },
    toBanner() {
      this.$router.push("banner");
    },
    toTab() {
      this.$router.push("tab");
    },
    toLogin() {
      this.$router.push("input");
    },
    toLogin() {
      this.$router.push("input");
    },
    toScroller() {
      this.$router.push("scroller");
    },
    toAnim() {
      this.$router.push("anim");
    },
    toList() {
      this.$router.push("list");
    },
    toPicker() {
      this.$router.push("picker");
    },
    toRecycler() {
      this.$router.push("recycler");
    },
    toWaterfall() {
      this.$router.push("waterfall");
    },
    toWebSocket() {
      this.$router.push("websocket");
    },
    storage() {
      this.$router.push("storage");
    },
    //js中const、var、let区别：
    //1.const定义的变量不可以修改，而且必须初始化
    //2.var定义的变量可以修改，如果不初始化会输出undefined，不会报错
    //3.let是块级作用域，函数内部使用let定义后，对函数外部无影响
    nativeCall() {
      var self = this;
      batteryModule.getBatteryLevel(function(data) {
        console.log("getBatteryLevel data = " + data);
        if (data == -1) {
          self.level = data;
        } else {
          self.level = data + "%";
          var level2 = batteryModule.getBatteryLevel2();
          if (level2 == -1) {
            self.level = level2;
          } else {
            self.level = level2 + "%";
          }
        }
      });
      console.log("battery level = " + this.level);
    }
  },
  created(event) {
    var self = this;
    globalEvent.addEventListener("batteryStatus", function(e) {
      self.status = e.status;
      console.log("battery status = " + e.status);
    });
  }
};
</script>