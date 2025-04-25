<template>
  <div class="p-4 min-h-screen text-gray-300">
    <h2 class="text-xl font-bold mt-6 mb-2">大陸地區頭目</h2>
    <TableBossBlock :items="bossData.mainlandBosses" />

    <h2 class="text-xl font-bold mt-6 mb-2">奧塔區頭目</h2>
    <TableBossBlock :items="bossData.otaBosses" />

    <h2 class="text-xl font-bold mt-6 mb-2">渾沌塔頭目</h2>
    <TableBossBlock :items="bossData.chaosTowerBosses" />

    <h2 class="text-xl font-bold mt-6 mb-2">世界頭目</h2>
    <TableBossBlock :items="bossData.worldBosses" />
  </div>
</template>

<script setup>
import TableBossBlock from "@/components/TableBossBlock.vue";

const bossData = {
  mainlandBosses: [
    { name: "巨大鱷魚", ability: "HP+25" },
    { name: "伊佛利特", ability: "魔防+3%" },
    { name: "飛龍", ability: "遠攻傷害+1" },
    { name: "黑長者", ability: "魔攻+1" },
    { name: "變形怪首領", ability: "魔防+3%" },
    { name: "巴風特", ability: "防禦+2" },
    { name: "巴列斯", ability: "防禦+2" },
    { name: "克特", ability: "近距離傷害+1" },
    { name: "死亡騎士", ability: "PVP傷害+1" },
    { name: "冰之女王", ability: "魔攻+1" },
    { name: "古代巨人", ability: "近距離傷害+1" },
    { name: "巨蟻女皇", ability: "減免傷害+1" },
    { name: "不死鳥", ability: "遠距離傷害+1" },
    { name: "惡魔", ability: "PVP減免+1" },
    { name: "深淵之主", ability: "魔武發動+1%" },
    { name: "漫波兔", ability: "魔防+3%" },
    { name: "巴貝多", ability: "MP+15" },
    { name: "賽尼斯", ability: "魔攻+1" },
    { name: "反王肯恩", ability: "近傷害+1" },
    { name: "冰魔", ability: "遠攻+1" },
    { name: "巨大蜈蚣", ability: "PVP傷害+1" },
    { name: "卡士伯", ability: "MP+25" },
    { name: "巴土瑟", ability: "魔攻+1" },
    { name: "西馬", ability: "HP+25" },
    { name: "馬庫爾", ability: "回魔+2" },
    // { name: "阿利歐克", ability: "體質+1" },
    { name: "力卡溫", ability: "體回+2" },
    // { name: "樹精", ability: "精神+1" },
    { name: "大王烏賊", ability: "防禦+2" },
    { name: "半人魚首領", ability: "MP+25" },
    { name: "大腳的瑪優", ability: "防禦+2" },
    { name: "疾風的夏斯奇", ability: "衝暈+3" },
    { name: "狂風的夏斯奇", ability: "衝暈+3" },
    // { name: "凱巴雷(圖鑑)", ability: "減免+1" },
    // { name: "史派伊斯(圖鑑)", ability: "近距離傷害+2" },
    { name: "烏諾庫斯(圖鑑)", ability: "近命中+1" },
    { name: "奈克偌斯(圖鑑)", ability: "遠命中+1" },
    { name: "阿勒尼亞(圖鑑)", ability: "減免+1" },
    // { name: "傑羅斯(圖鑑)", ability: "抗魔+3%" },
    // { name: "瑪依奴夏門", ability: "近距離傷害+2" },
    // { name: "瑪依奴鑽石高崙", ability: "魔攻+2" },
    // { name: "叛徒可羅蘭斯(圖鑑)", ability: "全能力+1" },
  ],
  otaBosses: [
    // { name: "傲慢之塔1F", ability: "魔防+5%" },
    // { name: "傲慢之塔2F", ability: "精神+1" },
    // { name: "傲慢之塔3F", ability: "魔攻+1" },
    // { name: "傲慢之塔4F", ability: "近遠命中+1" },
    // { name: "傲慢之塔5F", ability: "敏捷+1" },
    // { name: "傲慢之塔6F", ability: "力量+1" },
    // { name: "傲慢之塔7F", ability: "遠距離傷害+2" },
    // { name: "傲慢之塔8F", ability: "近距離傷害+2" },
    // { name: "傲慢之塔9F", ability: "智力+1" },
    // { name: "傲慢之塔10F", ability: "力敏智+1減免+1" },
    { name: "潔尼斯女王", ability: "魔防+5%" },
    { name: "幻象眼魔", ability: "抗石化+5" },
    { name: "吸血鬼", ability: "魔攻+1" },
    { name: "殭屍王 ", ability: "回血+3" },
    { name: "黑豹", ability: "衝暈命中+3" },
    { name: "木乃伊王", ability: "抗石化+5" },
    { name: "艾利絲", ability: "遠距離傷害+1" },
    { name: "騎士范德", ability: "近距離傷害+1" },
    { name: "巫妖", ability: "魔法命中+1" },
    // { name: "烏格奴斯", ability: "減免+3" },
    { name: "鐮刀死神", ability: "魔武發動率+1%" },
  ],
  chaosTowerBosses: [
    { name: "巨大牛人", ability: "HP+100" },
    // { name: "巨翼飛龍", ability: "MP+100" },
    // { name: "哈維女皇", ability: "魔攻+2" },
    // { name: "歐吉王", ability: "防禦+5" },
    // { name: "亞力安王", ability: "PVP傷害+3" },
    // { name: "新巨大牛人", ability: "PVP減免+3" },
    // { name: "古代守護者", ability: "減免+5" },
    { name: "長老．巴陸德", ability: "藥水回復+2, 魔武傷害+5" },
    { name: "長老．安迪斯", ability: "藥水回復+2, 魔武傷害+5" },
    { name: "長老．拉曼斯", ability: "藥水回復+2, 魔武傷害+5" },
    { name: "長老．泰瑪斯", ability: "藥水回復+2, 魔武傷害+5" },
    { name: "長老．巴洛斯", ability: "藥水回復+2, 魔武傷害+5" },
    { name: "長老．巴塔斯", ability: "藥水回復+2, 魔武傷害+5" },
    { name: "長老．艾迪爾", ability: "藥水回復+2, 魔武傷害+5" },
    { name: "長老．琪娜", ability: "藥水回復+2, 魔武傷害+5" },
  ],
  worldBosses: [
    // { name: "底比.賀洛斯", ability: "近距離傷害+3, 減免+1" },
    // { name: "底比.阿努比斯 ", ability: "遠距離傷害+3, 減免+1" },
    // { name: "炎魔", ability: "PVP傷害+2" },
    // { name: "混沌", ability: "力量+1" },
    // { name: "死亡", ability: "PVP減免+1" },
    // { name: "火焰之影 ", ability: "HP+50, 智力+1" },
    { name: "林德拜爾 ", ability: "HP+100, 遠攻傷害+3, 遠攻爆擊+1%" },
    { name: "安塔瑞斯 ", ability: "HP+300, 減免+5, 防禦+5, 無視對方傷害減免10" },
    { name: "巴拉卡斯 ", ability: "HP+100, 近戰傷害+3, 近距離爆擊+1%" },
    { name: "法利昂 ", ability: "MP+200, 治癒效果+5%, 魔法爆擊率+1%" },
    { name: "沙蟲", ability: "治癒效果+5%, 抗昏迷+5, 魔武傷害+10" },
  ],
};
</script>

<script>
export default {
  name: "Collections",
};
</script>

<style scoped>
h2 {
  margin: 10px 0;
  color: rgb(206, 186, 3);
}
</style>
