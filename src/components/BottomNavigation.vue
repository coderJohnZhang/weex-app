<template>
    <div>
        <div class="tab-panels" :style="{ left: activeTab * -750 + 'px'}">
            <div class="panel" v-for="(panel, pi) in panels" :key="pi">
                <text class="content">{{panel.content}}</text>
            </div>
        </div>
        <div class="tabbar">
            <div class="tab active" :style="{ left: activeTab * 150 + 'px'}"></div>
            <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
                <image class="icon" :src="tab.icon"></image>
                <text class="title">{{tab.title}}</text>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "首页",
          icon: "//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png"
        },
        {
          title: "耍帅",
          icon: "//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png"
        },
        {
          title: "旅行",
          icon: "//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png"
        },
        {
          title: "潮玩",
          icon: "//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png"
        },
        {
          title: "穿搭",
          icon: "//gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png"
        }
      ]
    };
  },
  computed: {
    panels() {
      return this.tabs.map(tab => ({ content: tab.title }));
    }
  }
};
</script>

<style scoped>
.tabbar {
  flex-direction: row;
  background-color: #ff4563;
}
.tab {
  height: 120px;
  width: 150px;
  justify-content: center;
  align-items: center;
}
.active {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(218, 59, 85);
  transition: left 0.2s ease-in-out;
}
.icon {
  width: 45px;
  height: 45px;
}
.title {
  font-size: 28px;
  color: #fff;
  margin-top: 10px;
}
.tab-panels {
  position: relative;
  width: 3750;
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  background-color: #f5f5f5;
  transition: left 0.2s ease-in-out;
}
.panel {
  width: 750px;
  justify-content: center;
  align-items: center;
}
.content {
  font-size: 100px;
  color: #707070;
}
</style>
