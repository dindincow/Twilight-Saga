<template>
  <div class="announcement-detail-page">
    <div class="title">
      <h1>2025/04/12 更新日誌!</h1>
      <p>2025/04/12</p>
    </div>
    <div class="content">
      <div>
        <h2>1️⃣【底比斯地下城開放】</h2>
        <h3>
          📍底比斯地下城共分為 三層樓層，各樓層內皆隱藏大量寶箱，分為「初階」、「中階」、「高階」三種等級。 📦寶箱等級越高，開出稀有寶物的機率也越高！
        </h3>
        <p>➤底比斯 1F : 適合新手玩家挑戰，怪物強度較低，適合熟悉地下城機制</p>
        <p>➤底比斯 2F : 適合已有基礎裝備的玩家，怪物強度中等，寶箱掉落品質提升</p>
        <p>➤底比斯 3F : 精銳怪物盤踞，建議組隊挑戰。高階寶箱集中分布，是高風險高報酬的關鍵樓層！</p>
        <p class="text-green-300">進入方式 : 欲前往底比斯地下城，需使用【底比斯傳送捲】。可至「天幣商城」購買該傳送道具。</p>
      </div>
      <hr />
      <div>
        <h2>2️⃣ 【全新寵物商人登場】</h2>
        <h3>📍 全新「寵物商人 NPC」正式現身，喜愛蒐集寵物的玩家千萬別錯過！🧸</h3>
        <p>
          可到<span class="text-red-500"> 天幣商城 </span>和<span class="text-red-500"> 元寶商城 </span>購買<span class="text-yellow-500 font-black"
            >神奇寵物蛋</span
          >，🎲快來試試手氣，看你能不能抽中心儀的夥伴吧！
        </p>
        <!-- <router-link to="/gameFeature/cutePet"> <p class="text-green-300">【👉寵物詳細介紹請點此】</p></router-link> -->
      </div>
      <hr />
      <div>
        <h2>3️⃣ 【裝備強化與獲取全面新增】</h2>
        <p>📜 冒險者們久等了！本次更新正式開放以下全新裝備功能與取得方式</p>
        <h3>✨飾品升級系統</h3>
        <p>➤ 新增月亮項鍊與星星耳環</p>

        <h3>🪖頭盔製作</h3>
        <p>➤ 收集指定材料，即可打造屬於自己的強化頭盔！</p>

        <h3>🧤手套製作</h3>
        <p>➤ 製作專屬手套，讓您在戰鬥中攻守更平衡！</p>

        <h3>🦿脛甲取得</h3>
        <p>➤ 新增脛甲裝備部位，可到底比斯3f寶箱開出獲取</p>
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
