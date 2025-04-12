<template>
  <div class="content w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h1 class="font-bold object-title">【帕拉斯項鍊】</h1>
    <h2 class="text-blue-300 text-xl">帕拉斯項鍊強化捲軸 跟 強化飾品寶石，這兩種道具皆為 強化「帕拉斯項鍊」 專用道具</h2>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【帕拉斯項鍊強化捲軸（元寶商城）】✨</h2>
    <p>強化不扣天幣</p>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【 強化飾品寶石（奧塔70f-100f）】✨</h2>
    <p>強化 1 次消耗 20,000 天幣</p>
    <p>強化機率為 1/3（33.3%）</p>
    <p>樓層越高掉落率越高</p>
    <p class="text-green-300">2者強化，失敗不會消失，也部會退皆</p>
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
    <br />
    <div class="line"></div>
    <!-- 月亮項鍊 -->
    <h1 class="font-bold object-title">【月亮項鍊】</h1>
    <h2 class="text-blue-300 text-xl">「星星月亮碎片」 跟「星星月亮強化石」，這兩種道具皆為 強化「星星耳環」和 「月亮項鍊」專用道具。</h2>
    <h2 class="text-blue-300 text-xl">
      當角色持有<span class="text-[#ef59ff] text-xl font-bold"> 8階帕拉斯項鍊 </span>時，使用上述兩種道具即可將其<span
        class="text-[#ef59ff] text-xl font-bold"
        >升級為 1階月亮項鍊</span
      >，開啟全新強化階段！📢若原本帕拉斯項鍊為「祝福」狀態，升階後的飾品將保留祝福屬性，讓您的裝備更具價值！
    </h2>
    <p class="text-green-300 text-xl">ps.當5階後，5%機率施展，月光氣息，傷害50，無視傷害減免，跟魔法防禦</p>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【星星月亮強化石（元寶商城）】✨</h2>
    <p>強化1次消耗 15000 天幣</p>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【 星星月亮碎片-底比斯沙漠取得）】✨</h2>
    <p>強化 1 次消耗 30,000 天幣</p>
    <p>強化機率為較低</p>
    <p class="text-green-300">2者強化，失敗不會消失，也部會退皆</p>
    <br />
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>

          <th class="px-4 py-2 text-left w-[50px]">獲取</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data1" :key="index">
          <td class="w-[100px]">
            <div><img :src="`/icons/armor/${item.img}`" /></div>
            <span
              class="text-center block"
              :class="[index === 0 ? 'text-[#ff93cb]' : index === 1 ? 'text-[#76c887]' : index === 2 ? 'text-[#85dae3]' : '']"
              >{{ item.name }}</span
            >
          </td>
          <td>
            <p
              class="item"
              :class="[index === 0 ? 'text-[#ff93cb]' : index === 1 ? 'text-[#76c887]' : index === 2 ? 'text-[#85dae3]' : '']"
              v-for="(a, aIndex) in item.ability"
              :key="aIndex"
            >
              {{ a }}
            </p>
          </td>
          <td>{{ item.get }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const data = [
  {
    img: "p4.png",
    name: "帕拉斯力量項鍊",
    ability: [
      "【 +0 】- 防禦+0，力量+1，體力上限+10",
      "【 +1 】- 防禦+1，力量+1，體力上限+20",
      "【 +2 】- 防禦+1，力量+1，體力上限+30",
      "【 +3 】- 防禦+1，力量+1，體力上限+40",
      "【 +4 】- 防禦+1，力量+1，體力上限+50",
      "【 +5 】- 防禦+2，力量+1，體力上限+60，近距離攻擊+1",
      "【 +6 】- 防禦+2，力量+1，體力上限+70，近距離命中+1，近距離攻擊+2",
      "【 +7 】- 防禦+3，力量+1，體力上限+80，近距離命中+1，近距離攻擊+3",
      "【 +8 】- 防禦+4，力量+2，體力上限+100，近距離命中+2，近距離攻擊+4",
    ],
    job: "全職",
    get: "商城/任務",
  },
  {
    img: "p5.png",
    name: "帕拉斯敏捷項鍊",

    ability: [
      "【 +0 】- 防禦+0，力量+1，體力上限+5，魔力上限+5",
      "【 +1 】- 防禦+1，力量+1，體力上限+10，魔力上限+10",
      "【 +2 】- 防禦+1，力量+1，體力上限+15，魔力上限+15",
      "【 +3 】- 防禦+1，力量+1，體力上限+20，魔力上限+20",
      "【 +4 】- 防禦+1，力量+1，體力上限+25，魔力上限+25",
      "【 +5 】- 防禦+2，力量+1，體力上限+30，魔力上限+30，遠距離命中+1",
      "【 +6 】- 防禦+2，力量+1，體力上限+35，魔力上限+35，遠距離命中+1，遠距離攻擊+2",
      "【 +7 】- 防禦+3，力量+1，體力上限+40，魔力上限+40，遠距離命中+1，遠距離攻擊+3",
      "【 +8 】- 防禦+4，力量+2，體力上限+50，魔力上限+50，遠距離命中+2，遠距離攻擊+4",
    ],
    job: "全職",
    get: "商城/任務",
  },
  {
    img: "p6.png",
    name: "帕拉斯智力項鍊",

    ability: [
      "【 +0 】- 防禦+0，智力+1，體力上限+5，魔力上限+5",
      "【 +1 】- 防禦+1，智力+1，體力上限+10，魔力上限+10",
      "【 +2 】- 防禦+1，智力+1，體力上限+15，魔力上限+15",
      "【 +3 】- 防禦+1，智力+1，體力上限+20，魔力上限+20",
      "【 +4 】- 防禦+1，智力+1，體力上限+25，魔力上限+25",
      "【 +5 】- 防禦+2，智力+1，體力上限+30，魔力上限+30，魔攻+1",
      "【 +6 】- 防禦+2，智力+1，體力上限+35，魔力上限+35，魔攻+2",
      "【 +7 】- 防禦+3，智力+1，體力上限+40，魔力上限+40，魔攻+3",
      "【 +8 】- 防禦+4，智力+1，體力上限+50，魔力上限+50，魔攻+4",
    ],
    job: "全職",
    get: "商城/任務",
  },
];

const data1 = [
  {
    img: "moon1.png",
    name: "月亮力量項鍊",
    ability: [
      "【 1階 】- 防禦+4，力量+2，近距離命中+2，近距離攻擊+4，體力上限+110，魔防+3，pvp減免+1，傷害減免+2",
      "【 2階 】- 防禦+4，力量+2，近距離命中+2，近距離攻擊+4，體力上限+120，魔防+5，pvp減免+2，傷害減免+3",
      "【 3階 】- 防禦+5，力量+3，近距離命中+3，近距離攻擊+5，體力上限+130，魔防+7，pvp減免+3，傷害減免+4",
      "【 4階 】- 防禦+5，力量+3，近距離命中+3，近距離攻擊+5，體力上限+140，魔防+10，pvp減免+4，傷害減免+5",
      "【 5階 】- 防禦+5，力量+3，近距離命中+3，近距離攻擊+5，體力上限+150，魔防+15，pvp減免+5，傷害減免+6",
    ],
    job: "全職",
    get: "升階",
  },
  {
    img: "moon2.png",
    name: "月亮敏捷項鍊",

    ability: [
      "【 1階 】- 防禦+4，敏捷+2，遠距離命中+2，遠距離攻擊+4，體力上限+55，魔力上限+55，魔防+3，pvp減免+1，傷害減免+2",
      "【 2階 】- 防禦+4，敏捷+2，遠距離命中+2，遠距離攻擊+4，體力上限+60，魔力上限+60，魔防+5，pvp減免+2，傷害減免+3",
      "【 3階 】- 防禦+5，敏捷+3，遠距離命中+3，遠距離攻擊+5，體力上限+65，魔力上限+65，魔防+7，pvp減免+3，傷害減免+4",
      "【 4階 】- 防禦+5，敏捷+3，遠距離命中+3，遠距離攻擊+5，體力上限+70，魔力上限+70，魔防+10，pvp減免+4，傷害減免+5",
      "【 5階 】- 防禦+5，敏捷+3，遠距離命中+3，遠距離攻擊+5，體力上限+75，魔力上限+75，魔防+15，pvp減免+5，傷害減免+6",
    ],
    job: "全職",
    get: "升階",
  },
  {
    img: "moon3.png",
    name: "月亮智力項鍊",

    ability: [
      "【 1階 】- 防禦+4，智力+2，魔攻+4，體力上限+55，魔力上限+55，魔防+3，pvp減免+1，傷害減免+2",
      "【 2階 】- 防禦+4，智力+2，魔攻+4，體力上限+60，魔力上限+60，魔防+5，pvp減免+2，傷害減免+3",
      "【 3階 】- 防禦+5，智力+3，魔攻+5，體力上限+65，魔力上限+65，魔防+7，pvp減免+3，傷害減免+4",
      "【 4階 】- 防禦+5，智力+3，魔攻+5，體力上限+70，魔力上限+70，魔防+10，pvp減免+4，傷害減免+5",
      "【 5階 】- 防禦+5，智力+3，魔攻+5，體力上限+75，魔力上限+75，魔防+15，pvp減免+5，傷害減免+6",
    ],
    job: "全職",
    get: "升階",
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
.object-title {
  margin-bottom: 20px;
}
</style>
