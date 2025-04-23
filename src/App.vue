<template>
  <div class="app">
    <a class="box1" target="_blank" href="https://pay.maple-moon.tw/order/249t38q"><img src="./assets/sponser1.png" /></a>
    <!-- <a class="box4" target="_blank" href="https://pay.maple-moon.tw/order/%E4%BA%8C%E6%9C%8D"><img src="./assets/sponser2.png" /></a> -->
    <div class="box2"><img src="./assets/cscontact.png" /></div>
    <div class="box3"><img src="./assets/sponser3.png" /></div>
    <img src="./assets/logo1.png" class="hide" />
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
</script>

<style lang="css" scoped>
.box1 {
  display: block;
  position: fixed;
  top: 20%;
  left: 0.5%;
  z-index: 9;
}

.box2 {
  position: fixed;
  top: 50%;
  right: 0.5%;
  z-index: 9;
}

.box3 {
  display: block;
  position: fixed;
  top: 20%;
  right: 0.5%;
  z-index: 9;
}
.box4 {
  display: block;
  position: fixed;
  top: 50%;
  left: 0.5%;
  z-index: 9;
}
.hide {
  display: none;
}
</style>
