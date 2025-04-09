<template>
  <div class="content w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h2 class="text-gray-200 text-xl title">
      玩家可以前往商城或元寶商城購買
      <span class="text-amber-200 font-bold">【神奇寵物蛋】</span
      >，開啟後可獲得各種強力寵物，助力冒險之旅。每隻寵物擁有獨特技能與屬性，讓玩家的戰力更上一層樓，體驗全新養成樂趣。
    </h2>

    <br />
    <p class="text-blue-400">以下為可抽到的【寵物】跟【道具】★</p>
    <table class="w-full">
      <thead>
        <tr class="text-gray-200">
          <th class="px-4 py-2 text-left">寵物名稱</th>
          <th class="px-4 py-2 text-left">圖片</th>
          <th class="px-4 py-2 text-left">獲取難度</th>
        </tr>
      </thead>
      <tbody class="divide-y text-gray-200">
        <tr>
          <td class="w-[130px]">稀有狼</td>
          <td><img src="/pet1.png" class="w-[120px]" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有狼犬</td>
          <td><img src="/pet2.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有杜賓狗</td>
          <td><img src="/pet3.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有哈士奇</td>
          <td><img src="/pet4.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有熊</td>
          <td><img src="/pet5.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有牧羊犬</td>
          <td><img src="/pet6.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有聖伯納犬</td>
          <td><img src="/pet7.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有狐狸</td>
          <td><img src="/pet8.png" /></td>
          <td>
            獲獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有暴走兔</td>
          <td><img src="/pet9.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有珍島犬</td>
          <td><img src="/pet10.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">稀有比格犬</td>
          <td><img src="/pet11.png" /></td>
          <td>
            獲取難度: ★ <br />
            最多進化 [一轉]
          </td>
        </tr>

        <tr>
          <td class="w-[130px]">史詩老虎</td>
          <td><img src="/pet12.png" /></td>
          <td>
            獲取難度: ★★ <br />
            最多進化 [二轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">史詩頑皮龍</td>
          <td><img src="/pet13.png" /></td>
          <td>
            獲取難度: ★★ <br />
            最多進化 [二轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">史詩淘氣龍</td>
          <td><img src="/pet14.png" /></td>
          <td>
            獲取難度: ★★ <br />
            最多進化 [二轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">史詩獨角獸</td>
          <td><img src="/pet15.png" /></td>
          <td>
            獲取難度: ★★ <br />
            最多進化 [二轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">傳說月影鳳</td>
          <td><img src="/pet16.png" /></td>
          <td>
            獲取難度: ★★★ <br />
            最多進化 [三轉]
          </td>
        </tr>

        <tr>
          <td class="w-[130px]">傳說黑霜麟</td>
          <td><img src="/pet17.png" /></td>
          <td>
            獲取難度: ★★★ <br />
            最多進化 [三轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">傳說玄冥狐</td>
          <td><img src="/pet18.png" /></td>
          <td>
            獲取難度: ★★★ <br />
            最多進化 [三轉]
          </td>
        </tr>
        <tr>
          <td class="w-[130px]">傳說炎煌龍</td>
          <td><img src="/pet19.png" /></td>
          <td>
            獲取難度: ★★★ <br />
            最多進化 [三轉]
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup></script>

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
  font-size: 16px;
  font-weight: bold;
}

.my-table {
  margin: 0 10px;
}
</style>
