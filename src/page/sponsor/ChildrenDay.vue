<template>
  <div class="accumulated-page">
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
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.accumulated-page {
  color: aliceblue;
  margin: 0px auto;

  width: 1000px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #949494;
}
.content {
  line-height: 34px;
}
h2 {
  margin-top: 20px;
  font-size: 26px;
  font-weight: 900;
  color: rgb(0, 204, 255);
}

.adbox p {
  font-size: 20px;
}
</style>
