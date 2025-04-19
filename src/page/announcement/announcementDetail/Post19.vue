<template>
  <div class="announcement-detail-page">
    <div class="title">
      <h1>2025/04/12 更新日誌!</h1>
      <p>2025/04/12</p>
    </div>
    <div class="content">
      <div>
        <h2>1️⃣【新增底比斯象徵製作】</h2>
        <p>📍可製作，底比斯象徵勳章，詳情請看到具介紹~</p>
      </div>
      <hr />
      <div>
        <h2>2️⃣ 【新增底比斯商人】</h2>
        <p>📍 底比斯商人出現在底比斯沙漠</p>
      </div>
      <hr />
      <div>
        <h2>3️⃣ 【新增底比斯金幣】</h2>
        <p>📍底比斯金幣，為底比斯全區掉落，可到底比斯商人購買物品</p>
      </div>
      <hr />
      <div>
        <h2>4️⃣ 【調整掉落物】</h2>
        <p>📍木乃伊繃帶和進化碎片調整為金字塔1F/2F/3F掉落(樓層越高，掉落率越高)</p>
      </div>
      <hr />
      <div>
        <h2>5️⃣ 【新增星期日底比斯世界王 晚上10:00】</h2>
        <p>
          📍凡是參與攻擊並成功觸碰到世界王的生還者，皆可獲得「世界王寶箱」。 而最後擊殺世界王的玩家，將額外獲得一個「特級寶箱」作為獎勵。 ※
          世界王無法透過魔法防禦來抵擋任何攻擊。
        </p>
      </div>
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
