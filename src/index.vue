<template>
  <div @androidback="back">
    <router-view class="view"/>
  </div>
</template>

<style scoped>
.view {
  flex: 1;
}
</style>

<script>
export default {
  methods: {
    back: function() {
      this.$router.back();
    }
  }
};
</script>
