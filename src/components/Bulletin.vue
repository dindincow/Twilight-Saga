<template>
  <div class="bulletin">
    <div class="left">
      <div class="bulletin-title">最新公告</div>

      <router-link to="/announcement/post6">
        <div class="content"><span class="event">永久活動</span>🔥 抖音分享案讚留言送好禮！</div>
      </router-link>
      <router-link to="/announcement/post14">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/29 更新日誌!</div>
      </router-link>
      <router-link to="/announcement/post13">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/28 更新日誌!</div>
      </router-link>
      <router-link to="/announcement/post12">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/27 更新日誌!</div>
      </router-link>
      <router-link to="/announcement/post11">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/25 更新日誌!</div>
      </router-link>
      <!-- <router-link to="/announcement/post9">
        <div class="content"><span class="announcement">開服公告</span>2025/03/22 暮光之城-血服~晚上8點正式開服</div>
      </router-link> -->
      <router-link to="/announcement/post10">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/24 更新日誌!</div>
      </router-link>
      <router-link to="/announcement/post8">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/22 更新日誌!</div>
      </router-link>
      <router-link to="/announcement/post7">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/21 更新日誌!</div>
      </router-link>
      <router-link to="/announcement/post5">
        <div class="content"><span class="update">遊戲更新</span> 2025/03/16 更新日誌!</div>
      </router-link>
      <router-link to="/announcement/post2">
        <div class="content"><span class="announcement">開服公告</span> 2025/03/15 晚上8點正式開服</div>
      </router-link>
      <!-- <router-link to="/announcement/post3">
        <div class="content"><span class="limit-event">限時活動</span> 慶開服，開服元寶金幣雙倍送!!</div>
      </router-link> -->
      <router-link to="/announcement/post4">
        <div class="content"><span class="event">永久活動</span> 每週日世界王，掉寶爆多，機會不容錯過！</div>
      </router-link>
      <router-link to="/gameFeature/royalClanPack">
        <div class="content"><span class="event">永久活動</span> 創王族拿好禮!</div>
      </router-link>
      <router-link to="/announcement/post1">
        <div class="content"><span class="event">永久活動</span> 加 line 拿好禮</div>
      </router-link>
    </div>
    <div class="right"><iframe width="100%" height="298" :src="videoUrl" frameborder="0" allowfullscreen></iframe></div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const videoUrl = ref("https://www.youtube.com/embed/vSdGfDtgJTM");
</script>

<style scoped>
.bulletin {
  margin: 0 auto;
  width: 1120px;
  display: flex;
  justify-content: space-between;
  height: 300px;
  position: relative;
  margin-bottom: 50px;
  z-index: 9;
}
.bulletin .left {
  background: #232323;
  border: 1px solid #a9793b;
  width: 58%;
  overflow-y: scroll;
}
.bulletin .right {
  background: #232323;
  border: 1px solid #a9793b;
  width: 40%;
}
.bulletin-title {
  font-family: "Noto Serif TC", serif;
  padding: 15px 0;
  background: #241919;
  color: #f0f0f0;
  text-align: center;
  font-size: 24px;
  font-weight: bolder;
  border-bottom: 1px solid #a9793b;
}

.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  margin-right: 15px;
}
.active {
  background: rgb(10, 158, 131);
}
.news {
  background: rgb(225, 63, 45);
}
.important {
  background: rgb(132, 85, 242);
}

.content {
  padding: 10px;
  color: #f0f0f0;
  border-bottom: 1px solid #353535;
  letter-spacing: 1px;
}
</style>
