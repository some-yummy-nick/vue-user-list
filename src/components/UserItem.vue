<script setup lang="ts">
import { defineProps } from "vue";
import { User } from "@/types/item";

defineProps<{
  item: User;
}>();

const toLocalString = (date: string) => {
  return new Date(date).toLocaleDateString("ru-Ru");
};
</script>

<template>
  <tr>
    <td class="table__cell">
      <img
        class="table__image"
        :src="item.avatar"
        :alt="item.name"
        loading="lazy"
      />
    </td>
    <td class="table__cell">
      {{ item.title }} {{ item.name }} {{ item.second }}
    </td>
    <td class="table__cell">{{ item.gender }}</td>
    <td class="table__cell">{{ item.country }}</td>
    <td class="table__cell">{{ toLocalString(item.date) }}</td>
    <td class="table__cell">{{ item.email }}</td>
    <td class="table__cell">{{ item.phone }}</td>
  </tr>
</template>

<style scoped lang="scss">
.table {
  &__image {
    min-height: 72px;
    min-width: 72px;
  }
}
</style>
