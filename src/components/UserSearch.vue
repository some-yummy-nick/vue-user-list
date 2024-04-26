<script setup lang="ts">
import { defineProps, toRef } from "vue";

const props = defineProps<{
  searchQuery: string | null;
}>();
const q = toRef(props.searchQuery);
</script>

<template>
  <div class="user-search">
    <form @submit.prevent="$emit('setSearch', q)">
      <div class="user-search__line">
        <input
          type="search"
          class="input"
          id="user-input"
          placeholder="Имя пользователя"
          v-model="q"
        />
        <button class="reset-btn" type="submit">Поиск</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.user-search {
  margin-bottom: 20px;
  text-align: center;

  &__label {
    display: block;
    margin-bottom: 5px;
  }

  &__line {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
