<template>
  <div class="content w-full">
    <h2 class="text-blue-300 text-xl title-desc">當手套每突破 1點安定值，將根據其職業類型獲得以下屬性加成：</h2>
    <br />
    <div class="text-red-300">➤ 近戰類型 : 近距離命中 +1, 近距離攻擊 +1</div>
    <div class="text-red-300">➤ 遠距類型 : 遠距離命中 +1, 遠距離攻擊 +1</div>
    <div class="text-red-300">➤ 魔法類型 : 魔法攻擊 +1</div>
    <!-- <div class="text-blue-300 title">閃耀左肩強化卷為強化「閃耀的肩甲」 專用道具</div>
      <br />
      <h2 class="text-orange-300 text-2xl font-bold">✨【閃耀左肩強化卷（任務商城）】✨</h2>
      <p>強化 1 次消耗 50,000 天幣</p>
  
      <p class="text-green-300">強化失敗部會消失，也部會退皆</p>
      <br /> -->
    <br />
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left w-[150px]">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>

          <th class="px-4 py-2 text-left w-[90px]">獲取</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data" :key="index">
          <td class="w-[100px]">
            <div><img :src="`/${item.img}`" /></div>
            <span class="text-center block">{{ item.name }}</span>
          </td>

          <td>
            <p v-for="(a, aIndex) in item.ability" :key="aIndex">{{ a }}</p>
          </td>

          <td class="w-[50px]">{{ item.get }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const data = [
  {
    img: "golve1.png",
    name: "憤怒手套(力量)",
    ability: ["防禦+3，安定6，力量+2， 近距離命中+5，近距離攻擊+2，體力+50，魔力+15，昏迷命中+3"],
    job: "全職",
    get: "製作",
  },
  {
    img: "golve2.png",
    name: "憤怒手套(敏捷)",
    ability: ["防禦+3，安定6，敏捷+2， 遠距離命中+5，遠距離攻擊+2，體力+50，魔力+15"],
    job: "全職",
    get: "製作",
  },
  {
    img: "golve3.png",
    name: "憤怒手套(智慧)",
    ability: ["防禦+3，安定6，智力+2， 魔法命中+5，魔攻+2，體力+50，魔力+15"],
    job: "全職",
    get: "製作",
  },
];
</script>

<style scoped>
.content {
  /* color: rgb(240, 240, 240); */
  padding: 20px 0px;
  line-height: 28px;
}
table {
  width: 100%;
  border-collapse: collapse; /* 邊框合併 */
  border: 1px solid rgb(75, 75, 75); /* 設定表格外框 */
}
th,
td {
  border: 1px solid rgb(62, 62, 62); /* 設定內部格線 */
  padding: 8px;
  text-align: left;
  font-size: 14px;
}
th {
  background-color: #3a3a39; /* 表頭背景色 */
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
}
img {
  width: 45px;
  height: 45px;
  margin: 0 auto;
}

td:nth-child(1) {
  text-align: center;
}

.title {
  font-size: 20px;
}
</style>
