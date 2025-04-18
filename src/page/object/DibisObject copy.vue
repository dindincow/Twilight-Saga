<template>
  <div class="content">
    <h2>收集「歐西里斯的象徵」、「太陽神的象徵」以及「歐貝利斯克的象徵」各一枚，並將它們升級至 Lv.5，即可兌換象徵榮耀與力量的「法老王象徵勳章」。</h2>
    <img src="../../assets/dibis_01.png" />
    <img src="../../assets/dibis_02.png" />
    <img src="../../assets/dibis_03.png" />

    <br />
    <img src="../../assets/dibis_04.png" />
  </div>
</template>
<script setup></script>

<style scoped>
.content {
  color: rgb(220, 220, 220);
  padding: 20px 0px;
  line-height: 35px;
  display: flex;
  flex-wrap: wrap;
}
h2 {
  font-size: 20px;
  margin: 20px 0;
  font-weight: bold;
}
img {
  display: block;
  margin: 5px;
  width: auto; /* 保證圖片寬度根據原始比例調整 */

  object-fit: contain; /* 保持圖片比例，不會變形 */
}
</style>
