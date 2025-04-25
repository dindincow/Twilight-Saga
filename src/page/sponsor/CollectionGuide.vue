<template>
  <div class="firstDeposit-page">
    <div class="content">
      <div class="box">
        <h2 class="text-orange-300 text-2xl font-bold">✨蒐藏懶人包✨</h2>
        <div>
          <p class="text-red-400">⚠️ 無法與其他活動和包月並用，請聯繫客服領取！</p>
          <div class="flex">
            <div class="box">
              <h3>💎 贊助 10,000 獎勵，送蒐藏A全套</h3>
              <h3>💎 贊助 15,000 獎勵，送蒐藏B全套</h3>
              <h3>💎 贊助 20,000 獎勵，送蒐藏C全套</h3>
            </div>
          </div>
        </div>

        <p>ps. 以上活動皆為單筆計算，例如單筆贊助20000，就只會送蒐藏C全套</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.firstDeposit-page {
  color: aliceblue;
  margin: 0px auto;

  width: 1000px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #949494;
}
.content {
  line-height: 34px;
}
.box {
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #454545;
}
.box h3 {
  border-bottom: 1px solid #5b5b5b;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 900;
}
.box p {
  text-indent: 0;
}
.desc {
  padding-top: 20px;
}
p {
  margin-top: 10px;
  font-size: 20px;
}
</style>
