<template>
  <div class="announcement-detail-page">
    <div class="content">
      <p>📍凡是參與攻擊並成功觸碰到世界王的生還者，皆可獲得「世界王寶箱」。</p>
      <p>📍而最後擊殺世界王的玩家，將額外獲得一個「特級寶箱」作為獎勵。 ※ 世界王無法透過魔法防禦來抵擋任何攻擊。</p>
      <!-- <div class="box1"><img src="../../../assets/boss.png" /></div> -->
      <div class="flex justify-center">
        <div class="box">
          <p>底比斯歐西里斯雙刀</p>
          <p>底比斯歐西里斯雙手劍</p>
          <p>底比斯歐西里斯弓</p>
          <p>底比斯歐西里斯魔杖</p>
          <p>阿努比斯脛甲</p>
          <p>泰芙努特脛甲</p>
          <p>賀洛斯脛甲</p>
          <p>魔法書(火風暴)</p>
          <p>魔法書(聖結界)</p>
          <p>魔法書(流星雨)</p>
        </div>
        <div class="box">
          <p>精靈水晶(三重矢)</p>
          <p>精靈水晶(生命的祝福)</p>
          <p>精靈水晶(屬性之火)</p>
          <p>精靈水晶(暴風神射)</p>
          <p>黑暗精靈水晶(雙重破壞)</p>
          <p>技術書(堅固防護)</p>
          <p>魔法書(究極光裂術)</p>
          <p>黑暗精靈水晶(破壞盔甲)</p>
          <p>技術書(反擊屏障)</p>
          <p>精靈水晶(烈焰之魂)</p>
        </div>
        <div class="box">
          <p>精靈水晶(精準射擊)</p>
          <p>金蘋果</p>
          <p>底比斯賀洛斯戒指</p>
          <p>底比斯阿努比斯戒指</p>
          <p>星星月亮強化石</p>
          <p>進化理論</p>
          <p>(祝福)對盔甲施法的卷軸</p>
          <p>(祝福)對武器施法的卷軸</p>
          <p>(詛咒)對盔甲施法的卷軸</p>
          <p>(詛咒)對武器施法的卷軸</p>
        </div>
        <div class="box">
          <p>千年神器</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.announcement-detail-page {
  color: aliceblue;
  margin: 50px auto;
  width: 1000px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #949494;
  padding-bottom: 5px;
}
.content {
  color: #d9d9d9;
  margin-top: 20px;
  line-height: 36px;
}
.content p {
  font-size: 18px;
}
.content p.desc {
  font-size: 18px;
}
.box1 {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
}
.box {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
}

.box h2 {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
