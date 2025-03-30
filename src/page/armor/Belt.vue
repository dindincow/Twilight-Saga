<template>
  <div class="content w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h2 class="text-sky-400">【殷海薩腰帶】</h2>
    <h3 class="text-blue-300 text-xl">「光之加護轉換石」 和 「光之加護轉換石100%」道具皆為 強化「殷海薩腰帶」 專用道具</h3>
    <h3 class="text-blue-300 text-xl">強化成功就變成「光之殷海薩腰帶」</h3>

    <br />
    <h2 class="text-orange-300 text-2xl font-bold get">✨【光之加護轉換石100%（元寶商城）】✨</h2>
    <p>強化 1 次消耗 <span class="text-red-500 font-bold">1億</span> 天幣</p>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold get">✨【 光之加護轉換石（遺忘之島）】✨</h2>
    <p>強化 1 次消耗 20,000 天幣</p>
    <p class="text-green-300">2者強化，失敗部會消失，也部會退皆</p>
    <br />
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
    <hr />
    <!-- 光之殷海薩腰帶 -->
    <br />
    <h2 class="text-red-400">【光之殷海薩腰帶】</h2>
    <h3 class="text-blue-300 text-xl">飾品寶石強化石可強化「光之殷海薩腰帶」 專用道具</h3>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold get">✨【光之殷海薩腰帶捲（元寶商城）】✨</h2>
    <p>強化 1 次消耗 10,000 天幣</p>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold get">✨【 飾品寶石強化石（奧塔70f-100f）】✨</h2>
    <p>強化 1 次消耗 20,000 天幣</p>
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
        <tr v-for="(item, index) in data2" :key="index">
          <td class="w-[100px]">
            <div><img :src="`/icons/armor/${item.img}`" /></div>
            <span class="text-center block">{{ item.name }}</span>
          </td>

          <td>
            <p class="line" v-for="(a, aIndex) in item.ability" :key="aIndex">{{ a }}</p>
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
    img: "belt11.png",
    name: "殷海薩智力腰帶 ",
    desc: ["防禦：0"],
    ability: ["智力+1 ,體力+20 ,負重減免+1200"],
    job: "全職",
    get: "製作",
  },
  {
    img: "belt22.png",
    name: "殷海薩力量腰帶",
    desc: ["防禦：0"],
    ability: ["力量+1 ,體力+20 ,負重減免+1200"],
    job: "全職",
    get: "製作",
  },
  {
    img: "belt33.png",
    name: "殷海薩敏捷腰帶",
    desc: ["防禦：0"],
    ability: ["敏捷+1  ,體力+20  ,負重減免+1200"],
    job: "全職",
    get: "製作",
  },
];

const data2 = [
  {
    img: "belt1.png",
    name: "光之殷海薩智力腰帶",
    ability: [
      "【 0階 】- 防禦+2，智力+1，體力上限+50，魔力上限+20，負重減免+1500",
      "【 1階 】- 防禦+2，智力+1，體力上限+60，魔力上限+30，負重減免+1500，體力回復3，魔力回復3，傷害減免+1",
      "【 2階 】- 防禦+2，智力+1，體力上限+70，魔力上限+40，負重減免+1500，體力回復3，魔力回復3，傷害減免+2",
      "【 3階 】- 防禦+2，智力+1，體力上限+80，魔力上限+50，負重減免+1500，體力回復4，魔力回復4，傷害減免+3",
      "【 4階 】- 防禦+2，智力+1，體力上限+90，魔力上限+60，負重減免+1500，體力回復5，魔力回復5，傷害減免+4",
      "【 5階 】- 防禦+2，智力+2，體力上限+100，魔力上限+70，負重減免+1500，體力回復7，魔力回復7，傷害減免+5",
    ],
    job: "全職",
    get: "合成",
  },

  {
    img: "belt2.png",
    name: "光之殷海薩力量腰帶",
    ability: [
      "【 0階 】- 防禦+2，力量+1，體力上限+50，魔力上限+20，負重減免+1500",
      "【 1階 】- 防禦+2，力量+1，體力上限+60，魔力上限+30，負重減免+1500，體力回復3，魔力回復3，傷害減免+1",
      "【 2階 】- 防禦+2，力量+1，體力上限+70，魔力上限+40，負重減免+1500，體力回復3，魔力回復3，傷害減免+2",
      "【 3階 】- 防禦+2，力量+1，體力上限+80，魔力上限+50，負重減免+1500，體力回復4，魔力回復4，傷害減免+3",
      "【 4階 】- 防禦+2，力量+1，體力上限+90，魔力上限+60，負重減免+1500，體力回復5，魔力回復5，傷害減免+4",
      "【 5階 】- 防禦+2，力量+2，敏捷+1，智力+1，體力上限+100，魔力上限+70，負重減免+1500，體力回復7，魔力回復7，傷害減免+5",
    ],
    job: "全職",
    get: "合成",
  },

  {
    img: "belt3.png",
    name: "光之殷海薩敏捷腰帶",
    ability: [
      "【 0階 】- 防禦+2，敏捷+1，體力上限+50，魔力上限+20，負重減免+1500",
      "【 1階 】- 防禦+2，敏捷+1，體力上限+60，魔力上限+30，負重減免+1500，體力回復3，魔力回復3，傷害減免+1",
      "【 2階 】- 防禦+2，敏捷+1，體力上限+70，魔力上限+40，負重減免+1500，體力回復3，魔力回復3，傷害減免+2",
      "【 3階 】- 防禦+2，敏捷+1，體力上限+80，魔力上限+50，負重減免+1500，體力回復4，魔力回復4，傷害減免+3",
      "【 4階 】- 防禦+2，敏捷+1，體力上限+90，魔力上限+60，負重減免+1500，體力回復5，魔力回復5，傷害減免+4",
      "【 5階 】- 防禦+2，力量+1，敏捷+2，智力+1，體力上限+100，魔力上限+70，負重減免+1500，體力回復7，魔力回復7，傷害減免+5",
    ],
    job: "全職",
    get: "合成",
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
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 10px;
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

hr {
  color: rgb(100, 99, 99);
  margin: 15px 0;
}

.line {
  border-bottom: 1px solid #676767;
}
</style>
