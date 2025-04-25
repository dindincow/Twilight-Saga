<template>
  <div class="p-4 min-h-screen text-gray-300">
    <h2 class="text-xl font-bold mt-6 mb-2">四色石收集</h2>
    <TableBlock :items="elementStones" />

    <h2 class="text-xl font-bold mt-6 mb-2">奇美拉之皮</h2>
    <TableBlock :items="chimeraSkins" />

    <h2 class="text-xl font-bold mt-6 mb-2">寶石愛好者</h2>
    <TableBlock :items="gemLovers" />

    <h2 class="text-xl font-bold mt-6 mb-2">短劍的武器</h2>
    <TableBlock :items="shortSwordWeapons" />
    <h2 class="text-xl font-bold mt-6 mb-2">單手的武器</h2>
    <TableBlock :items="oneHandedWeapons" />
    <h2 class="text-xl font-bold mt-6 mb-2">雙手的武器</h2>
    <TableBlock :items="twoHandedWeapons" />
    <h2 class="text-xl font-bold mt-6 mb-2">弓的武器</h2>
    <TableBlock :items="bowWeapons" />
    <h2 class="text-xl font-bold mt-6 mb-2">魔杖的武器</h2>
    <TableBlock :items="wandWeapons" />

    <h2 class="text-xl font-bold mt-6 mb-2">防具收藏家</h2>
    <TableBlock :items="armorSets" />

    <h2 class="text-xl font-bold mt-6 mb-2">特殊收藏家</h2>
    <TableBlock :items="collectibles" />
  </div>
</template>

<script setup>
import TableBlock from "@/components/TableBlock.vue";

const elementStones = [
  {
    name: "四色石收集A",
    materials: "馬普勒之石、帕格里奧之石、伊娃之石、沙哈之石",
    ability: "MP+30",
  },
  {
    name: "四色石收集B",
    materials: "馬普勒之石、帕格里奧之石、伊娃之石、沙哈之石",
    ability: "MP+35",
  },
  {
    name: "四色石收集C",
    materials: "馬普勒之石、帕格里奧之石、伊娃之石、沙哈之石",
    ability: "MP+50",
  },
];

const chimeraSkins = [
  {
    name: "奇美拉之皮A",
    materials: "詛咒的皮革(水)、詛咒的皮革(火)、詛咒的皮革(風)、詛咒的皮革(地)",
    ability: "治癒效果+2%",
  },
  {
    name: "奇美拉之皮B",
    materials: "詛咒的皮革(水)、詛咒的皮革(火)、詛咒的皮革(風)、詛咒的皮革(地)",
    ability: "治癒效果+3%",
  },
  {
    name: "奇美拉之皮C",
    materials: "詛咒的皮革(水)、詛咒的皮革(火)、詛咒的皮革(風)、詛咒的皮革(地)",
    ability: "治癒效果+5%",
  },
];

const gemLovers = [
  {
    name: "寶石愛好者A",
    materials: "鑽石、紅寶石、藍寶石、綠寶石",
    ability: "魔武傷害+5",
  },
  {
    name: "寶石愛好者B",
    materials: "品質（鑽石、紅寶石、藍寶石、綠寶石）",
    ability: "魔武傷害+10",
  },
  {
    name: "寶石愛好者C",
    materials: "高品質（鑽石、紅寶石、藍寶石、綠寶石）",
    ability: "魔武傷害+15",
  },
];

const shortSwordWeapons = [
  {
    name: "短劍的武器A",
    materials: "奧里哈魯根短劍+7、米索莉短劍+7、小武士刀+7、拉斯塔巴德短劍+7、水晶短劍+7",
    ability: "近距離傷害+1 近距離命中+1",
  },
  {
    name: "短劍的武器B",
    materials: "奧里哈魯根短劍+8、米索莉短劍+8、小武士刀+8、拉斯塔巴德短劍+8、水晶短劍+8",
    ability: "近距離傷害+1 近距離命中+1",
  },
  {
    name: "短劍的武器C",
    materials: "奧里哈魯根短劍+9、米索莉短劍+9、小武士刀+9、拉斯塔巴德短劍+9、水晶短劍+9",
    ability: "近距離傷害+2 近距離命中+2 近距離爆擊+1",
  },
];

const oneHandedWeapons = [
  {
    name: "單手的武器A",
    materials: "細劍+7、大馬士革刀+7、侵略者之劍+7、長劍+7、拉斯塔巴德長劍+7",
    ability: "近距離傷害+1 近距離命中+1",
  },
  {
    name: "單手的武器B",
    materials: "細劍+8、大馬士革刀+8、侵略者之劍+8、長劍+8、拉斯塔巴德長劍+8",
    ability: "近距離傷害+1 近距離命中+1",
  },
  {
    name: "單手的武器C",
    materials: "細劍+9、大馬士革刀+9、侵略者之劍+9、長劍+9、拉斯塔巴德長劍+9",
    ability: "近距離傷害+2 近距離命中+2 怪物增傷+20(全職通用)",
  },
];

const twoHandedWeapons = [
  {
    name: "雙手的武器A",
    materials: "武士刀+7、雙手劍+7、狂戰士斧+7、拉斯塔巴德矛+7、拉斯塔巴德雙刀+7",
    ability: "近距離傷害+1 近距離命中+1",
  },
  {
    name: "雙手的武器B",
    materials: "武士刀+8、雙手劍+8、狂戰士斧+8、拉斯塔巴德矛+8、拉斯塔巴德雙刀+8",
    ability: "近距離傷害+1 近距離命中+1",
  },
  {
    name: "雙手的武器C",
    materials: "武士刀+9、雙手劍+9、狂戰士斧+9、拉斯塔巴德矛+9、拉斯塔巴德雙刀+9",
    ability: "近距離傷害+2 近距離命中+2 昏迷命中+2",
  },
];

const bowWeapons = [
  {
    name: "弓的武器A",
    materials: "十字弓+7、獵人之弓+7、拉斯塔巴德十字弓+7、拉斯塔巴德重十字弓+7、拉斯塔巴德弓+7",
    ability: "遠距離傷害+2 遠距離命中+2",
  },
  {
    name: "弓的武器B",
    materials: "十字弓+8、獵人之弓+8、拉斯塔巴德十字弓+8、拉斯塔巴德重十字弓+8、拉斯塔巴德弓+8",
    ability: "遠距離傷害+2 遠距離命中+2 無視減傷+1",
  },
  {
    name: "弓的武器C",
    materials: "十字弓+9、獵人之弓+9、拉斯塔巴德十字弓+9、拉斯塔巴德重十字弓+9、拉斯塔巴德弓+9",
    ability: "遠距離傷害+2 遠距離命中+2 無視減傷+2",
  },
];

const wandWeapons = [
  {
    name: "魔杖的武器A",
    materials: "力量魔杖+7、巫術魔法杖+7、橡木魔法杖+7、美基魔法杖+7、拉斯塔巴德魔杖+7",
    ability: "近距離命中+2 魔攻+1",
  },
  {
    name: "魔杖的武器B",
    materials: "力量魔杖+8、巫術魔法杖+8、橡木魔法杖+8、美基魔法杖+8、拉斯塔巴德魔杖+8",
    ability: "近距離命中+2 魔攻+1",
  },
  {
    name: "魔杖的武器C",
    materials: "力量魔杖+9、巫術魔法杖+9、橡木魔法杖+9、美基魔法杖+9、拉斯塔巴德魔杖+9",
    ability: "近距離命中+2 魔攻+2 魔法命中+2",
  },
];

const armorSets = [
  {
    name: "潘朵拉套裝A",
    materials: "潘朵拉盔甲+5, 潘朵拉頭盔+5, 潘朵拉斗篷+5, 潘朵拉手套+5, 潘朵拉長靴+5",
    ability: "回血魔+2",
  },
  {
    name: "潘朵拉套裝B",
    materials: "潘朵拉盔甲+6, 潘朵拉頭盔+6, 潘朵拉斗篷+6, 潘朵拉手套+6, 潘朵拉長靴+6",
    ability: "回血魔+3, PVP傷害+1",
  },
  {
    name: "潘朵拉套裝C",
    materials: "潘朵拉盔甲+7, 潘朵拉頭盔+7, 潘朵拉斗篷+7, 潘朵拉手套+7, 潘朵拉長靴+7",
    ability: "回血魔+5, PVP傷害+3",
  },
  {
    name: "鋼鐵的套裝A",
    materials: "鋼鐵金屬盔甲+5, 鋼鐵頭盔+5, 鋼鐵盾牌+5, 鋼鐵手套+5, 鋼鐵長靴+5",
    ability: "AC+1",
  },
  {
    name: "鋼鐵的套裝B",
    materials: "鋼鐵金屬盔甲+6, 鋼鐵頭盔+6, 鋼鐵盾牌+6, 鋼鐵手套+6, 鋼鐵長靴+6",
    ability: "AC+2, PVP減免+1",
  },
  {
    name: "鋼鐵的套裝C",
    materials: "鋼鐵金屬盔甲+7, 鋼鐵頭盔+7, 鋼鐵盾牌+7, 鋼鐵手套+7, 鋼鐵長靴+7",
    ability: "AC+3, PVP減免+3",
  },
  {
    name: "侏儒的套裝A",
    materials: "侏儒鐵盔+5, 侏儒斗篷+5, 侏儒圓盾+5",
    ability: "HP+20, MP10",
  },
  {
    name: "侏儒的套裝B",
    materials: "侏儒鐵盔+6, 侏儒斗篷+6, 侏儒圓盾+6",
    ability: "HP+30, MP15",
  },
  {
    name: "侏儒的套裝C",
    materials: "侏儒鐵盔+7, 侏儒斗篷+7, 侏儒圓盾+7",
    ability: "HP+50, MP25",
  },
  {
    name: "藍海賊套裝A",
    materials: "藍海賊長靴+5, 藍海賊手套+5, 藍海賊頭巾+5, 藍海賊皮盔甲+5",
    ability: "魅力+1",
  },
  {
    name: "藍海賊套裝B",
    materials: "藍海賊長靴+6, 藍海賊手套+6, 藍海賊頭巾+6, 藍海賊皮盔甲+6",
    ability: "魅力+1, 治癒效果+1%",
  },
  {
    name: "藍海賊套裝C",
    materials: "藍海賊長靴+7, 藍海賊手套+7, 藍海賊頭巾+7, 藍海賊皮盔甲+7",
    ability: "魅力+2, 治癒效果+2%",
  },
  {
    name: "抗魔的裝備A",
    materials: "抗魔法斗篷+5, 抗魔法鏈甲+5, 抗魔法頭盔+5",
    ability: "魔防+2",
  },
  {
    name: "抗魔的裝備B",
    materials: "抗魔法斗篷+6, 抗魔法鏈甲+6, 抗魔法頭盔+6",
    ability: "魔防+3, 魔武減傷+3",
  },
  {
    name: "抗魔的裝備C",
    materials: "抗魔法斗篷+7, 抗魔法鏈甲+7, 抗魔法頭盔+7",
    ability: "魔防+5, 魔武減傷+5",
  },
  {
    name: "脛甲的收藏A",
    materials: "阿努比斯脛甲+5, 泰芙努特脛甲+5, 賀洛斯脛甲+5",
    ability: "魔武發動率+1",
  },
  {
    name: "脛甲的收藏B",
    materials: "阿努比斯脛甲+6, 泰芙努特脛甲+5, 賀洛斯脛甲+6",
    ability: "魔武發動率+1",
  },
  {
    name: "脛甲的收藏C",
    materials: "阿努比斯脛甲+7, 泰芙努特脛甲+7, 賀洛斯脛甲+7",
    ability: "魔武發動率+2",
  },
];

const collectibles = [
  {
    name: "腰帶的蒐藏",
    materials: "光明身體腰帶*1, 光明靈魂腰帶*1, 光明精神腰帶*1",
    ability: "HP+50, MP+50, 回血魔+5",
  },
  {
    name: "能力的項鍊",
    materials: "力量項鍊*1, 敏捷項鍊*1, 智力項鍊*1, 精神項鍊*1, 體質項鍊*1, 魅力項鍊*1",
    ability: "全能力+1",
  },
  {
    name: "四屬的戒指",
    materials: "水靈戒指*1, 火靈戒指*1, 地靈戒指*1, 風靈戒指*1",
    ability: "增加火風地水抗性+5",
  },

  {
    name: "古老的防具",
    materials: "古老的金屬盔甲*1, 古老的皮盔甲*1, 古老的鱗甲*1, 古老的長袍*1",
    ability: "HP+500, MP+200, 傷害減免+3, 回血+5, 回魔+5",
  },
  {
    name: "古老的武器",
    materials: "古老的巨劍*1, 古老的弩槍*1, 古老的劍*1, 鋼鐵瑪那*1",
    ability: "近距離傷害+5, 遠距離傷害+5, 近距離命中+5, 遠距離命中+5, 魔攻+3",
  },
  {
    name: "必備的技能",
    materials: "技術書(衝擊之暈)*1, 精靈水晶(三重矢)*1, 黑暗精靈水晶(雙重破壞)*1, 精靈水晶(魂體轉換)*1, 精靈水晶(屬性之火)*1, 魔法書(聖結界)*1",
    ability: "近戰爆擊率+1%, 近戰爆擊傷害+1%, 魔法擊率+1%, 魔法爆擊傷害+1%, 遠距離爆擊率+1%, 遠距離爆擊傷害+1%",
  },
];
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
