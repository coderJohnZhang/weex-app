<template>
  <div style="justify-content:center; align-items: center">
    <input class="input" type="text" placeholder="text" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur" />
    <input class="input" type="password" placeholder="password" />
    <input class="input" type="tel" placeholder="tel" />
    <input class="input" type="url" placeholder="url" />
    <input class="input" type="email" placeholder="email" />
  </div>
</template>

<style scoped>
.input {
  font-size: 45px;
  width: 600px;
  margin-top: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
  color: #666666;
  border-width: 2px;
  border-style: solid;
  border-color: #0080ff;
}
</style>

<script>
const modal = weex.requireModule("modal");
export default {
  methods: {
    oninput(event) {
      modal.toast({
        message: `input: ${event.value}`,
        duration: 0.5
      });
    },
    onchange(event) {
      modal.toast({
        message: `change: ${event.value}`,
        duration: 0.5
      });
    },
    onfocus(event) {
      console.log("focus:", event.value);
      modal.toast({
        message: `focus: ${event.value}`,
        duration: 0.5
      });
    },
    onblur(event) {
      modal.toast({
        message: `blur: ${event.value}`,
        duration: 0.5
      });
    }
  }
};
</script>