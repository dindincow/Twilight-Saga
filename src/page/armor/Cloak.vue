<template>
  <div class="content w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h2 class="text-sky-400">【屬性斗篷】</h2>
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">道具介紹</th>
          <th class="px-4 py-2 text-left">能力</th>
          <th class="px-4 py-2 text-left">職業</th>
          <th class="px-4 py-2 text-left">獲取方式</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data" :key="index">
          <td>
            <div><img :src="`/icons/armor/${item.img}`" /></div>
            <span class="text-center block">{{ item.name }}</span>
          </td>
          <td>
            <p v-for="(d, dIndex) in item.desc" :key="dIndex">{{ d }}</p>
          </td>
          <td>
            <p v-for="(a, aIndex) in item.ability" :key="aIndex">{{ a }}</p>
          </td>
          <td>
            <p>{{ item.job }}</p>
          </td>
          <td>{{ item.get }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <!-- 黑蒂絲斗篷 -->
    <h2 class="text-red-400">【黑帝斯斗篷】</h2>
    <h3 class="text-blue-300 text-xl">精靈的秘密 跟 黑帝斯強化卷軸，這兩種道具皆為 強化「黑帝斯斗篷」 專用道具</h3>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold get">✨【黑帝斯強化卷軸（元寶商城）】✨</h2>
    <p>強化 1 次消耗 10,000 天幣</p>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold get">✨【 秘密（精靈墓穴）】✨</h2>
    <p>強化 1 次消耗 20,000 天幣</p>

    <br />
    <p class="text-green-300">2者強化，失敗部會消失，也部會退皆</p>
    <div class="info">
      <p>黑帝斯斗篷從6階開始獲得反傷效果，具體效果如下：</p>
      <p>6階：反傷1%，反傷值40</p>
      <p>7階：反傷3%，反傷值50</p>
      <p>8階：反傷6%，反傷值60</p>
      <p>9階：反傷10%，反傷值70</p>
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>

          <th class="px-4 py-2 text-left w-[90px]">獲取</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data2" :key="index">
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
    img: "coach1.png",
    name: "強化屬性斗篷(火)",
    desc: ["防禦：-2", "安定：4"],
    ability: ["體力+50", "魔力+30", "魔力回復+3", "火屬性抗性+20"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "coach2.png",
    name: "強化屬性斗篷(風)",
    desc: ["防禦：-2", "安定：4"],
    ability: ["體力+50", "魔力+30", "魔力回復+3", "風屬性抗性+20"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "coach3.png",
    name: "強化屬性斗篷(水)",
    desc: ["防禦：-2", "安定：4"],
    ability: ["體力+50", "魔力+30", "魔力回復+3", "水屬性抗性+20"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "coach4.png",
    name: "強化屬性斗篷(地)",
    desc: ["防禦：-2", "安定：4"],
    ability: ["體力+50", "魔力+30", "魔力回復+3", "地屬性抗性+20"],
    job: "全職",
    get: "掉落",
  },
];

const data2 = [
  {
    img: "coach11.png",
    name: "黑帝斯斗篷(抗火)",
    ability: [
      "【 0階 】- 防禦+4，體力上限+10，魔力上限+5",
      "【 1階 】- 防禦+5，力敏智+1，體力上限+10，魔力上限+10，抗魔+5",
      "【 2階 】- 防禦+6，力敏智+1，體力上限+20，魔力上限+15，抗魔+10",
      "【 3階 】- 防禦+7，力敏智+1，體力上限+30，魔力上限+25，抗魔+15",
      "【 4階 】- 防禦+8，力敏智+1，體力上限+50，魔力上限+50，抗魔+20，減傷+1",
      "【 5階 】- 防禦+9，力敏智+1，體力上限+70，魔力上限+60，抗魔+22，減傷+2",
      "【 6階 】- 防禦+10，力敏智+1，體力上限+90，魔力上限+70，抗魔+24，減傷+3，火屬抗性+15",
      "【 7階 】- 防禦+11，力敏智+2，體力上限+110，魔力上限+80，抗魔+26，減傷+4，火屬抗性+20",
      "【 8階 】- 防禦+12，力敏智+2，體力上限+130，魔力上限+90，抗魔+28，減傷+5，火屬抗性+20",
      "【 9階 】- 防禦+13，力敏智+2，體力上限+150，魔力上限+100，抗魔+30，減傷+7，火屬抗性+25",
    ],
    job: "全職",
    get: "商城/任務",
  },

  {
    img: "coach22.png",
    name: "黑帝斯斗篷(抗風)",
    ability: [
      "【 0階 】- 防禦+4，體力上限+10，魔力上限+5",
      "【 1階 】- 防禦+5，力敏智+1，體力上限+10，魔力上限+10，抗魔+5",
      "【 2階 】- 防禦+6，力敏智+1，體力上限+20，魔力上限+15，抗魔+10",
      "【 3階 】- 防禦+7，力敏智+1，體力上限+30，魔力上限+25，抗魔+15",
      "【 4階 】- 防禦+8，力敏智+1，體力上限+50，魔力上限+50，抗魔+20，減傷+1",
      "【 5階 】- 防禦+9，力敏智+1，體力上限+70，魔力上限+60，抗魔+22，減傷+2",
      "【 6階 】- 防禦+10，力敏智+1，體力上限+90，魔力上限+70，抗魔+24，減傷+3，風屬抗性+15",
      "【 7階 】- 防禦+11，力敏智+2，體力上限+110，魔力上限+80，抗魔+26，減傷+4，風屬抗性+20",
      "【 8階 】- 防禦+12，力敏智+2，體力上限+130，魔力上限+90，抗魔+28，減傷+5，風屬抗性+20",
      "【 9階 】- 防禦+13，力敏智+2，體力上限+150，魔力上限+100，抗魔+30，減傷+7，風屬抗性+25",
    ],
    job: "全職",
    get: "商城/任務",
  },

  {
    img: "coach33.png",
    name: "黑帝斯斗篷(抗水)",
    ability: [
      "【 0階 】- 防禦+4，體力上限+10，魔力上限+5",
      "【 1階 】- 防禦+5，力敏智+1，體力上限+10，魔力上限+10，抗魔+5",
      "【 2階 】- 防禦+6，力敏智+1，體力上限+20，魔力上限+15，抗魔+10",
      "【 3階 】- 防禦+7，力敏智+1，體力上限+30，魔力上限+25，抗魔+15",
      "【 4階 】- 防禦+8，力敏智+1，體力上限+50，魔力上限+50，抗魔+20，減傷+1",
      "【 5階 】- 防禦+9，力敏智+1，體力上限+70，魔力上限+60，抗魔+22，減傷+2",
      "【 6階 】- 防禦+10，力敏智+1，體力上限+90，魔力上限+70，抗魔+24，減傷+3，水屬抗性+15",
      "【 7階 】- 防禦+11，力敏智+2，體力上限+110，魔力上限+80，抗魔+26，減傷+4，水屬抗性+20",
      "【 8階 】- 防禦+12，力敏智+2，體力上限+130，魔力上限+90，抗魔+28，減傷+5，水屬抗性+20",
      "【 9階 】- 防禦+13，力敏智+2，體力上限+150，魔力上限+100，抗魔+30，減傷+7，水屬抗性+25",
    ],
    job: "全職",
    get: "商城/任務",
  },

  {
    img: "coach44.png",
    name: "黑帝斯斗篷(抗地)",
    ability: [
      "【 0階 】- 防禦+4，體力上限+10，魔力上限+5",
      "【 1階 】- 防禦+5，力敏智+1，體力上限+10，魔力上限+10，抗魔+5",
      "【 2階 】- 防禦+6，力敏智+1，體力上限+20，魔力上限+15，抗魔+10",
      "【 3階 】- 防禦+7，力敏智+1，體力上限+30，魔力上限+25，抗魔+15",
      "【 4階 】- 防禦+8，力敏智+1，體力上限+50，魔力上限+50，抗魔+20，減傷+1",
      "【 5階 】- 防禦+9，力敏智+1，體力上限+70，魔力上限+60，抗魔+22，減傷+2",
      "【 6階 】- 防禦+10，力敏智+1，體力上限+90，魔力上限+70，抗魔+24，減傷+3，地屬抗性+15",
      "【 7階 】- 防禦+11，力敏智+2，體力上限+110，魔力上限+80，抗魔+26，減傷+4，地屬抗性+20",
      "【 8階 】- 防禦+12，力敏智+2，體力上限+130，魔力上限+90，抗魔+28，減傷+5，地屬抗性+20",
      "【 9階 】- 防禦+13，力敏智+2，體力上限+150，魔力上限+100，抗魔+30，減傷+7，地屬抗性+25",
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

h2 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
}
.info {
  margin: 20px 0;
  padding: 10px;
  background: #2a2a2a;
  border: 1px solid #414141;
}
.get {
  font-size: 23px;
}
</style>
