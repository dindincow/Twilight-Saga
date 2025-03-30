<template>
  <div class="content w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h2 class="text-blue-300 text-xl">史奈普戒指強化捲軸 跟 強化飾品寶石，這兩種道具皆為 強化「史奈普戒指」 專用道具</h2>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【史奈普戒指強化捲軸（元寶商城）】✨</h2>
    <p>強化不扣天幣</p>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【 強化飾品寶石（奧塔70f-100f）】✨</h2>
    <p>強化 1 次消耗 20,000 天幣</p>
    <p>強化機率為 1/3（33.3%）</p>
    <p>樓層越高掉落率越高</p>
    <p class="text-green-300">2者強化，失敗部會消失，也部會退皆</p>
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
    img: "p1.png",
    name: "史奈普的勇士戒子",
    ability: [
      "【 +0 】- 防禦+1，體力上限+10，魔防+1",
      "【 +1 】- 防禦+1，體力上限+15，魔防+1",
      "【 +2 】- 防禦+1，體力上限+20，魔防+3",
      "【 +3 】- 防禦+2，體力上限+25，魔防+4",
      "【 +4 】- 防禦+2，體力上限+30，魔防+5，近距離攻擊+1",
      "【 +5 】- 防禦+2，體力上限+35，魔防+6，近距離攻擊+2",
      "【 +6 】- 防禦+3，體力上限+40，魔防+7，近距離攻擊+3，減傷+1",
      "【 +7 】- 防禦+4，體力上限+50，魔防+8，近距離攻擊+4，減傷+2",
      "【 +8 】- 防禦+5，體力上限+60，魔防+10，近距離攻擊+5，減傷+3",
    ],
    job: "全職",
    get: "商城/任務",
  },
  {
    img: "p2.png",
    name: "史奈普的靈巧戒子",

    ability: [
      "【 +0 】- 防禦+1，體力上限+5，魔力上限+5，魔防+1",
      "【 +1 】- 防禦+1，體力上限+8，魔力上限+8，魔防+2",
      "【 +2 】- 防禦+1，體力上限+10，魔力上限+10，魔防+3",
      "【 +3 】- 防禦+2，體力上限+12，魔力上限+12，魔防+4",
      "【 +4 】- 防禦+2，體力上限+15，魔力上限+15，魔防+5，遠距離攻擊+1",
      "【 +5 】- 防禦+2，體力上限+18，魔力上限+18，魔防+6，遠距離攻擊+2",
      "【 +6 】- 防禦+3，體力上限+20，魔力上限+20，魔防+7，遠距離攻擊+3，傷害減免+1",
      "【 +7 】- 防禦+4，體力上限+25，魔力上限+25，魔防+8，遠距離攻擊+4，傷害減免+2",
      "【 +8 】- 防禦+5，體力上限+30，魔力上限+30，魔防+10，遠距離攻擊+5，傷害減免+3",
    ],
    job: "全職",
    get: "商城/任務",
  },
  {
    img: "p3.png",
    name: "史奈普的智慧戒子",

    ability: [
      "【 +0 】- 防禦+1，體力上限+5，魔力上限+5，魔防+1",
      "【 +1 】- 防禦+1，體力上限+8，魔力上限+8，魔防+2",
      "【 +2 】- 防禦+1，體力上限+10，魔力上限+10，魔防+3",
      "【 +3 】- 防禦+2，體力上限+12，魔力上限+12，魔防+4",
      "【 +4 】- 防禦+2，體力上限+15，魔力上限+15，魔防+5，魔攻+1",
      "【 +5 】- 防禦+2，體力上限+18，魔力上限+18，魔防+6，魔攻+2",
      "【 +6 】- 防禦+3，體力上限+20，魔力上限+20，魔防+7，魔攻+3，傷害減免+1",
      "【 +7 】- 防禦+4，體力上限+25，魔力上限+25，魔防+8，魔攻+4，傷害減免+2",
      "【 +8 】- 防禦+5，體力上限+30，魔力上限+30，魔防+10，魔攻+5，傷害減免+3",
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
