<template>
  <div class="announcement-detail-page">
    <div class="title">
      <h1>2025/03/31 更新日誌!</h1>
      <p>2025/03/31</p>
    </div>
    <div class="content">
      <div class="ad">
        <img src="/ad01.png" />
        <div class="adbox">
          <h2>🎉 永久活動：歡慶兒童節!童心未泯，戰力無限！閃耀左肩強勢登場！ 🎉</h2>
          <p>🛒 ✨ 9階 閃耀的防禦左肩甲(無法交易)✨</p>
          <p>每個帳號限購 1次 💰 售價：3,000 NT</p>
          <p class="text-red-500">無法與其他活動並用!</p>
          <!-- <a href="https://twilight-saga.vercel.app/armor/pandoraArmor" class="link">查看閃耀的防禦左肩甲</a> -->
        </div>
        <div class="adbox">
          <h2>🎉 新增「任務商城」,可購買：+0 閃耀的防禦左肩甲🎉</h2>
          <p>閃耀左肩強化卷，可強化+0 閃耀的防禦左肩甲，提升戰力！</p>
        </div>
      </div>
      <hr />
      <div>
        <h2>1️⃣【新增內容】</h2>
        <h3>📍 新增「精靈的秘密」掉落地點：精靈墓穴</h3>
        <p>用途 : 可強化黑帝斯斗篷</p>
        <h3>📍 新增「屬性斗篷」掉落地點：精靈墓穴</h3>
        <p>可獲得 屬性斗篷</p>
      </div>
      <hr />
      <div>
        <h2>2️⃣ 【新增製作與掉落物】</h2>
        <h3>📍 光之加護轉換石 掉落地點：遺忘之島</h3>
        <p>用途 : 強化殷海薩系列腰帶，機率性轉換🎲 。轉換成功會成為<span class="text-green-300"> "光之殷海薩腰帶"</span></p>
        <p>如果使用光之加護轉換石100%，須扣<span class="text-red-500"> 1億天幣</span></p>
      </div>
      <hr />
      <div>
        <h2>3️⃣ 【商城新增商品】</h2>
        <p>📜 黑帝斯強化卷軸</p>
        <p>📜 光之殷海薩強化卷軸</p>
        <p>💎 光之加護100%（可轉換為殷海薩系列腰帶）， 💰 使用時需消耗 <span class="text-red-500">1億天幣</span></p>
      </div>
      <hr />
      <div>
        <h2>4️⃣ 【光之殷海薩腰帶強化機制】</h2>
        <p>殷海薩腰帶可轉換為「光之殷海薩腰帶」</p>
        <p>轉換成功後，後可使用<span class="text-green-300"> 強化飾品寶石進行強化</span>，提升屬性與戰力！</p>
      </div>
      <hr />
      <div>
        <h2>5️⃣ 💰 當日贊助回饋獎勵 🎁</h2>
        <p class="text-red-400">⚠️ 無法與其他活動和包月並用，請聯繫客服領取！</p>
        <div class="flex">
          <div class="box">
            <h3>💎 贊助 10,000 獎勵</h3>
            <p>💰 金幣 3,000萬</p>
            <p>📜 100% 對盔甲施法的卷軸1張</p>
            <p>🪙 金元寶 2,000</p>
            <p>🗡️ 頭目擊殺證明 100張</p>
          </div>
          <div class="box">
            <h3>💎 贊助 20,000 獎勵</h3>
            <p>📜 100% 對武器施法的卷軸 1張</p>
            <p>📜 100% 對盔甲施法的卷軸 1張</p>
            <p>🪙 金元寶 5,000</p>
            <p>🏆 黃金 （1億）1個</p>
            <p>🗡️ 頭目擊殺證明 200張</p>
          </div>
        </div>
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
