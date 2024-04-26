<script setup lang="ts">
import UserTable from "@/components/UserTable.vue";
import UserPagination from "@/components/UserPagination.vue";
import { usePagination } from "@/hooks/usePagination";
import { preparedData } from "@/data/preparedData";
import UserSearch from "@/components/UserSearch.vue";
import { watch } from "vue";
import { useLocation } from "@/hooks/useLocation";

const {
  setPageNumberQuery,
  getPageNumberQuery,
  setSearchQuery,
  getSearchQuery,
  searchQuery,
} = useLocation();

const {
  pageNumber,
  paginatedItems,
  pageCount,
  decreasePageNumber,
  increasePageNumber,
  setPage,
} = usePagination(preparedData, getPageNumberQuery(), searchQuery);

watch(pageNumber, (newValue: number) => {
  setPageNumberQuery(newValue + 1);
  return newValue;
});

const setSearch = (q: string) => {
  setSearchQuery(q);
};
</script>

<template>
  <UserSearch :searchQuery="getSearchQuery()" @setSearch="setSearch" />
  <template v-if="paginatedItems.length">
    <UserTable :items="paginatedItems" />
    <UserPagination
      :pageCount="pageCount"
      :pageNumber="pageNumber + 1"
      @prevPage="decreasePageNumber"
      @nextPage="increasePageNumber"
      @setPage="setPage"
    />
  </template>
  <div class="text-center" v-else>Ничего не найдено</div>
</template>
<style lang="scss">
@import "./assets/style/style.scss";
</style>
