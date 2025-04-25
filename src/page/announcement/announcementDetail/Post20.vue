<template>
  <div class="announcement-detail-page">
    <div class="title">
      <h1>2025/04/25 更新日誌!</h1>
      <p>2025/04/25</p>
    </div>
    <div class="content">
      <div>
        <h2>1️⃣【新增BOSS蒐藏系統】</h2>
        <p>📍集齊所有BOSS圖鑑，證明你是BOSS世界的王者！<span class="text-red-400">詳情請到遊戲特色查看</span></p>
      </div>
      <hr />
      <div>
        <h2>2️⃣ 【新增防武蒐藏系統】</h2>
        <p>📍 防具武器一次收藏，戰力成長看得見!!<span class="text-red-400">詳情請到遊戲特色查看</span></p>
      </div>
      <hr />
      <div>
        <h2>3️⃣ 【新增贊助蒐藏懶人包】</h2>
        <p>📍你的支持我們看得見，收藏系統替你留！<span class="text-red-400">詳情請到遊戲贊助查看</span></p>
      </div>
      <hr />
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.announcement-detail-page {
  color: aliceblue;
  margin: 50px auto;
  width: 1000px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #949494;
  padding-bottom: 5px;
}

.content {
  color: #d9d9d9;
  margin-top: 20px;
  line-height: 36px;
}
.content p {
  font-size: 18px;
  text-indent: 30px;
}
.content p.desc {
  font-size: 18px;
}
h2 {
  padding: 10px 0;
  font-size: 26px;

  color: oklch(0.685 0.169 237.323);
  font-weight: bold;
}

h3 {
  font-size: 20px;
  color: oklch(0.828 0.111 230.318);
  font-weight: 800;
}
.box {
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #454545;
}
.box h3 {
  border-bottom: 1px solid #5b5b5b;
  margin-bottom: 10px;
}
.box p {
  text-indent: 0;
}
.adbox {
}

a.link {
  font-size: 16px;
  color: orange;
}

.sub-title {
  font-size: 16px;
  color: rgb(71, 149, 71);
}
a.link {
  padding-left: 30px;
  text-decoration: underline;

  font-size: 20px;
  color: rgb(118, 215, 118);
}
hr {
  color: rgb(77, 77, 77);
  margin: 15px 0;
}
.ad {
  padding: 20px;
  background: #373737;
}

.adbox {
  border: 1px dashed #ccc;
}

.adbox h2 {
  color: rgb(211, 163, 19);
}
</style>
