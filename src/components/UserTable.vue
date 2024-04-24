<script setup lang="ts">
import UserItem from "@/components/UserItem.vue";
import UserTableHead from "@/components/UserTableHead.vue";
import { User } from "@/types/item";
defineProps<{
  items: User[];
}>();
</script>

<template>
  <div class="list">
    <table class="table">
      <UserTableHead />
      <tbody>
        <UserItem v-for="item in items" :key="item.id" :item="item" />
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table {
  margin-bottom: 10px;
}
</style>
