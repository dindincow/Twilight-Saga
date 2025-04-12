<template>
  <div class="content w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h1 class="font-bold object-title">【倫提斯耳環】</h1>
    <h2 class="text-blue-300 text-xl">倫提斯耳環強化捲軸 跟 強化飾品寶石，這兩種道具皆為 強化「倫提斯耳環」 專用道具</h2>
    <br />
    <h2 class="text-orange-300 text-2xl font-bold">✨【倫提斯耳環強化捲軸（元寶商城）】✨</h2>
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
    <!-- 星星耳環 -->
    <h1 class="font-bold object-title">【星星耳環】</h1>
    <h2 class="text-blue-300 text-xl">「星星月亮碎片」 跟「星星月亮強化石」，這兩種道具皆為 強化「星星耳環」和 「月亮項鍊」 專用道具。</h2>
    <h2 class="text-blue-300 text-xl">
      當角色持有<span class="text-[#ef59ff] text-xl font-bold"> 8階倫提斯耳環 </span>時，使用上述兩種道具即可將其<span
        class="text-[#ef59ff] text-xl font-bold"
        >升級為 1階星星耳環</span
      >，開啟全新強化階段！📢若原本倫提斯耳環為「祝福」狀態，升階後的飾品將保留祝福屬性，讓您的裝備更具價值！
    </h2>
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
        <tr v-for="(item, index) in data2" :key="index">
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
    img: "earing01.png",
    name: "倫提斯力量耳環",
    ability: [
      "【 +0 】- 防禦+1，力量+1，體力上限+10，藥水回復+2",
      "【 +1 】- 防禦+1，力量+1，體力上限+20，藥水回復+3",
      "【 +2 】- 防禦+1，力量+1，體力上限+30，藥水回復+4",
      "【 +3 】- 防禦+1，力量+1，體力上限+40，藥水回復+5",
      "【 +4 】- 防禦+1，力量+1，體力上限+50，藥水回復+6",
      "【 +5 】- 防禦+2，力量+1，體力上限+60，藥水回復+8，傷害減免+1",
      "【 +6 】- 防禦+3，力量+1，體力上限+70，藥水回復+10，傷害減免+1",
      "【 +7 】- 防禦+3，力量+2，體力上限+80，藥水回復+12，傷害減免+2，pvp額外傷害+1",
      "【 +8 】- 防禦+4，力量+2，體力上限+100，藥水回復+14，傷害減免+2，pvp額外傷害+2",
    ],
    job: "全職",
    get: "商城/任務",
  },
  {
    img: "earing02.png",
    name: "倫提斯敏捷耳環",

    ability: [
      "【 +0 】- 防禦+1，敏捷+1，體力上限+5，魔力上限+5，藥水回復+2",
      "【 +1 】- 防禦+1，敏捷+1，體力上限+10，魔力上限+10，藥水回復+3",
      "【 +2 】- 防禦+1，敏捷+1，體力上限+15，魔力上限+15，藥水回復+4",
      "【 +3 】- 防禦+1，敏捷+1，體力上限+20，魔力上限+20，藥水回復+5",
      "【 +4 】- 防禦+1，敏捷+1，體力上限+25，魔力上限+25，藥水回復+6",
      "【 +5 】- 防禦+2，敏捷+1，體力上限+30，魔力上限+30，藥水回復+8，傷害減免+1",
      "【 +6 】- 防禦+3，敏捷+1，體力上限+35，魔力上限+35，藥水回復+10，傷害減免+1",
      "【 +7 】- 防禦+3，敏捷+2，體力上限+40，魔力上限+40，藥水回復+12，傷害減免+2，pvp額外傷害+1",
      "【 +8 】- 防禦+4，敏捷+2，體力上限+50，魔力上限+50，藥水回復+14，傷害減免+2，pvp額外傷害+2",
    ],
    job: "全職",
    get: "商城/任務",
  },
  {
    img: "earing03.png",
    name: "倫提斯智力耳環",

    ability: [
      "【 +0 】- 防禦+1，智力+1，體力上限+5，魔力上限+5，藥水回復+2",
      "【 +1 】- 防禦+1，智力+1，體力上限+10，魔力上限+10，藥水回復+3",
      "【 +2 】- 防禦+1，智力+1，體力上限+15，魔力上限+15，藥水回復+4",
      "【 +3 】- 防禦+1，智力+1，體力上限+20，魔力上限+20，藥水回復+5",
      "【 +4 】- 防禦+1，智力+1，體力上限+25，魔力上限+25，藥水回復+6",
      "【 +5 】- 防禦+2，智力+1，體力上限+30，魔力上限+30，藥水回復+8，傷害減免+1",
      "【 +6 】- 防禦+3，智力+1，體力上限+35，魔力上限+35，藥水回復+10，傷害減免+1",
      "【 +7 】- 防禦+3，智力+2，體力上限+40，魔力上限+40，藥水回復+12，傷害減免+2，pvp額外傷害+1",
      "【 +8 】- 防禦+4，智力+2，體力上限+50，魔力上限+50，藥水回復+14，傷害減免+2，pvp額外傷害+2",
    ],
    job: "全職",
    get: "商城/任務",
  },
];
const data2 = [
  {
    img: "star1.png",
    name: "星星力量耳環",
    ability: [
      "【 1階 】- 防禦+4，力量+2，近距離攻擊+1，體力上限+110，PVP傷害+1，魔防+1，傷害減免+2，藥水回復+14",
      "【 2階 】- 防禦+4，力量+2，近距離攻擊+2，體力上限+120，PVP傷害+2，魔防+2，傷害減免+3，藥水回復+15",
      "【 3階 】- 防禦+5，力量+3，近距離攻擊+3，體力上限+130，PVP傷害+3，魔防+3，傷害減免+4，藥水回復+16",
      "【 4階 】- 防禦+5，力量+3，近距離攻擊+4，體力上限+140，PVP傷害+4，魔防+4，傷害減免+5，藥水回復+17",
      "【 5階 】- 防禦+5，力量+3，近距離攻擊+5，體力上限+150，PVP傷害+5，魔防+5，傷害減免+6，藥水回復+18",
    ],
    job: "全職",
    get: "升階",
  },
  {
    img: "star2.png",
    name: "星星敏捷耳環",

    ability: [
      "【 1階 】- 防禦+4，敏捷+2，遠距離攻擊+1，體力上限+55，魔力上限+55，PVP傷害+1，魔防+1，傷害減免+2，藥水回復+14",
      "【 2階 】- 防禦+4，敏捷+2，遠距離攻擊+2，體力上限+60，魔力上限+60，PVP傷害+2，魔防+2，傷害減免+3，藥水回復+15",
      "【 3階 】- 防禦+5，敏捷+3，遠距離攻擊+3，體力上限+65，魔力上限+65，PVP傷害+3，魔防+3，傷害減免+4，藥水回復+16",
      "【 4階 】- 防禦+5，敏捷+3，遠距離攻擊+4，體力上限+70，魔力上限+70，PVP傷害+4，魔防+4，傷害減免+5，藥水回復+17",
      "【 5階 】- 防禦+5，敏捷+3，遠距離攻擊+5，體力上限+75，魔力上限+75，PVP傷害+5，魔防+5，傷害減免+6，藥水回復+18",
    ],
    job: "全職",
    get: "升階",
  },
  {
    img: "star3.png",
    name: "星星智力耳環",
    ability: [
      "【 1階 】- 防禦+4，智力+2，魔攻+1，體力上限+55，魔力上限+55，PVP傷害+1，魔防+1，傷害減免+2，藥水回復+14",
      "【 2階 】- 防禦+4，智力+2，魔攻+2，體力上限+60，魔力上限+60，PVP傷害+2，魔防+2，傷害減免+3，藥水回復+15",
      "【 3階 】- 防禦+5，智力+3，魔攻+3，體力上限+65，魔力上限+65，PVP傷害+3，魔防+3，傷害減免+4，藥水回復+16",
      "【 4階 】- 防禦+5，智力+3，魔攻+4，體力上限+70，魔力上限+70，PVP傷害+4，魔防+4，傷害減免+5，藥水回復+17",
      "【 5階 】- 防禦+5，智力+3，魔攻+5，體力上限+75，魔力上限+75，PVP傷害+5，魔防+5，傷害減免+6，藥水回復+18",
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
h1 {
  margin-bottom: 20px;
}
.object-title {
  font-size: 36px;
}
.item {
  border-bottom: 1px dashed #4d4d4d;
  padding: 10px 0;
}
.item:last-child {
  border-bottom: none;
}
</style>
