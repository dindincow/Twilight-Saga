<template>
  <BreadCrumbs :title="title" router="贊助介紹" />
  <div class="sponsor-page">
    <div class="left">
      <router-link to="/sponsor/sponsorDeclar" :class="[tabIndex === 0 ? 'active' : '']" @click="changeMenu(0)">贊助說明</router-link>
      <router-link to="/sponsor/firstDeposit" :class="[tabIndex === 1 ? 'active' : '']" @click="changeMenu(1)">首儲獎勵</router-link>
      <router-link to="/sponsor/accumulated" :class="[tabIndex === 2 ? 'active' : '']" @click="changeMenu(2)">累計獎勵</router-link>
      <router-link to="/sponsor/monthlyPlan" :class="[tabIndex === 3 ? 'active' : '']" @click="changeMenu(3)">包月禮包</router-link>
      <router-link to="/sponsor/childrenDay" :class="[tabIndex === 4 ? 'active' : '']" @click="changeMenu(4)">(永久)兒童節活動</router-link>
      <router-link to="/sponsor/daysave" :class="[tabIndex === 5 ? 'active' : '']" @click="changeMenu(5)">當日儲值獎勵</router-link>
      <router-link to="/sponsor/collectionGuide" :class="[tabIndex === 6 ? 'active' : '']" @click="changeMenu(6)">蒐藏懶人包</router-link>
    </div>

    <div class="right">
      <h1 class="title">{{ title }}</h1>
      <hr />
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import BreadCrumbs from "../../components/BreadCrumbs.vue";

const route = useRoute();
const router = useRouter();

const tabTitle = ["贊助說明", "首儲獎勵", "累計獎勵", "包月禮包", "(永久)兒童節活動"];
const tabIndex = ref(0);
const title = computed(() => tabTitle[tabIndex.value]);

// 頁面對應的 tabIndex 設定
const pathMap = {
  "/sponsor/sponsorDeclar": 0,
  "/sponsor/firstDeposit": 1,
  "/sponsor/accumulated": 2,
  "/sponsor/monthlyPlan": 3,
  "/sponsor/childrenDay": 4,
  "/sponsor/daysave": 5,
  "/sponsor/collectionGuide": 6,
};

watch(
  () => route.path,
  (newPath) => {
    if (pathMap[newPath] !== undefined) {
      tabIndex.value = pathMap[newPath];
    }
  },
  { immediate: true } // 確保初始化時也會執行一次
);

const changeMenu = (index) => {
  tabIndex.value = index;
};

onMounted(() => {
  const entries = performance.getEntriesByType("navigation");
  const isReload = entries.length > 0 && entries[0].type === "reload";

  if (isReload) {
    router.replace("/sponsor/sponsorDeclar"); // `replace` 避免影響歷史紀錄
  }
});
</script>

<style scoped>
.sponsor-page {
  display: flex;

  margin: 50px auto;
  width: 1140px;
  justify-content: space-between;
}
.left {
  width: 20%;
  border: 1px solid #3e3e3e;
  display: flex;
  flex-direction: column;
}
.left a {
  padding: 10px;
  color: rgb(209, 209, 209);
  border-bottom: 1px solid #3e3e3e;
}

.left a:hover {
  background: #4d4d4d;
}
.left .active {
  background: #957c5c;
}
.right {
  width: 70%;
}
.right h1 {
  margin-bottom: 15px;
  font-size: 36px;
}
</style>
