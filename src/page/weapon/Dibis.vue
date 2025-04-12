<template>
  <div class="content w-full">
    <h2 class="text-blue-300 text-xl">底比斯系列為魔法武器，魔武發動率固定5%，不吃力敏智，固定傷害80-100</h2>
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
            <div><img :src="`/icons/weapon/${item.img}`" /></div>
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
  </div>
</template>
<script setup>
const data = [
  {
    img: "dibis1.png",
    name: "底比斯歐西里斯雙手劍",
    desc: ["攻擊：21/26", "單手", "安定：6", "材料：金屬"],
    ability: ["近距離命中+5", "力量+1", "體質+1", "不會損壞"],
    job: "王族/騎士",
    get: "開箱子",
  },
  {
    img: "dibis2.png",
    name: "底比斯歐西里斯之弓",
    desc: ["攻擊：3/3", "雙手", "安定：0", "材料：金屬"],
    ability: ["遠距離命中+3", "精神+1", "智力+2", "不會損壞"],
    job: "妖精",
    get: "開箱子",
  },
  {
    img: "dibis3.png",
    name: "底比斯歐西里斯雙刀",
    desc: ["16/11", "單手", "安定：6", "材料：金屬"],
    ability: ["額外攻擊+3", "敏捷+2", "精神+1", "不會損壞"],
    job: "黑暗妖精",
    get: "開箱子",
  },
  {
    img: "dibis4.png",
    name: "底比斯歐西里斯魔杖",
    desc: ["20/18", "單手", "安定：6", "材料：金屬"],
    ability: ["近距離命中+5", "力量+2", "魔攻+3", "魔力恢復量+5", "不會損壞"],
    job: "法師",
    get: "開箱子",
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
  margin: 20px 0;
}
</style>
