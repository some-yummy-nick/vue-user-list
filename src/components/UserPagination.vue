<script setup lang="ts">
import { defineProps } from "vue";

defineEmits(["prevPage", "nextPage", "setPage"]);

defineProps<{
  pageCount: number;
  pageNumber: number;
}>();
</script>

<template>
  <div class="pagination">
    <button class="reset-btn pagination__button" @click="$emit('prevPage')">
      prev
    </button>
    <div class="pagination__numbers">
      <button
        class="reset-btn pagination__button pagination__number"
        v-for="page in pageCount"
        :class="{ active: pageNumber === page }"
        :key="'page-' + page"
        @click="$emit('setPage', page)"
      >
        {{ page }}
      </button>
    </div>
    <button class="reset-btn pagination__button" @click="$emit('nextPage')">
      next
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  z-index: 2;
  background-color: white;

  &__number {
    &.active {
      background-color: black;
      color: white;
    }
  }
}
</style>
