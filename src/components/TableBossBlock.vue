<template>
  <table class="custom-table w-full border border-[#525252] mt-2">
    <thead class="bg-[#3a3a39] border-b border-[#525252]">
      <tr>
        <th width="30%" class="p-2 border border-[#525252]">名稱</th>

        <th width="70%" class="p-2 border border-[#525252]">能力</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td class="p-2 border border-[#525252]">{{ item.name }}</td>
        <td class="p-2 border border-[#525252]">{{ item.ability }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>
<style scoped>
.custom-table th,
.custom-table td {
  padding: 5px;
  border: 1px solid #525252;
  text-align: left;
}
</style>
