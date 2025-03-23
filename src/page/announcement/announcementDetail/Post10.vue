<template>
  <div class="announcement-detail-page">
    <div class="title">
      <h1>2025/03/24 更新日誌!</h1>
      <p>2025/03/24</p>
    </div>
    <div class="content">
      <h2>2025/03/24 維修後更新:</h2>
      <p>1. 調整經驗娃娃可以和祭司娃娃共用，但娃娃數量上限為2隻</p>
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
  text-indent: 20px;
}
.content p.desc {
  font-size: 18px;
}
h2 {
  padding: 10px 0;
  font-size: 26px;
  color: #00b6ff;
  font-weight: bold;
}

a.link {
  font-size: 16px;
  color: orange;
}
</style>
