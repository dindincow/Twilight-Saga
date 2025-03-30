<template>
  <div class="content w-full">
    <h2 class="text-blue-300 text-xl">閃耀左肩強化卷為強化「閃耀的肩甲」 專用道具</h2>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【閃耀左肩強化卷（任務商城）】✨</h2>
    <p>強化 1 次消耗 50,000 天幣</p>

    <p class="text-green-300">強化失敗部會消失，也部會退皆</p>
    <br />
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>

          <th class="px-4 py-2 text-left w-[90px]">獲取</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data" :key="index">
          <td class="w-[100px]">
            <div><img :src="`/icons/armor/${item.img}`" /></div>
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
    img: "s01.png",
    name: "閃耀的防禦肩甲",
    ability: [
      "【 0階 】- 防禦+1， 體力+30，魔力+5",
      "【 1階 】- 防禦2，精神1，體力+50， 魔力+10",
      "【 2階 】- 防禦3，精神1， 體力+70 ，魔力+15",
      "【 3階 】- 防禦4，精神1， 體力+100， 魔力+20， 減傷+1",
      "【 4階 】- 防禦5，精神2， 體力+130， 魔力+25， 減傷+2",
      "【 5階 】- 防禦6，精神2， 體力+160， 魔力+30，回魔+2，體回+2，減傷+3",
      "【 6階 】- 防禦7，精神2， 體力+200， 魔力+40， 回魔+3，體回+3，減傷+4",
      "【 7階 】- 防禦8，精神3，體力+250 ，魔力+50 ，回魔+5，體回+5，減傷+6",
      "【 8階 】- 防禦9，精神3，體力+300， 魔力+70， 回魔+6，體回+6，減傷+8",
      "【 9階 】- 防禦12，精神5，體力+500，魔力+100， 回魔+8，體回+8，減傷+12",
    ],
    job: "全職",
    get: "商城/任務",
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
</style>
