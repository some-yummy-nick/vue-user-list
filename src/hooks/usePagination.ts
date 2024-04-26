import { computed, ref } from "vue";
import { User } from "@/types/item";

export const usePagination = (
  list: User[],
  page: number,
  searchQuery: string
) => {
  const pageNumber = ref(page);
  const q = ref(searchQuery);
  const size = 20;

  const start = computed(() => {
    return pageNumber.value * size;
  });

  const end = computed(() => {
    return start.value + size;
  });
  const filteredItems = computed(() => {
    const search: string = q.value;
    let items: User[] = [];
    if (search) {
      items = list.filter(
        (item) =>
          item.title.includes(search) ||
          item.name.includes(search) ||
          item.second.includes(search) ||
          `${item.name} ${item.second}`.includes(search) ||
          `${item.title} ${item.name} ${item.second}`.includes(search)
      );
    }
    return items;
  });
  const paginatedItems = computed(() => {
    const search: string = q.value;
    let items: User[] = list;
    if (search) {
      items = filteredItems.value;
    }
    if (items.length) {
      items = items.slice(start.value, end.value);
    }
    return items;
  });

  const pageCount = computed(() => {
    let current = list;
    if (q.value) {
      current = filteredItems.value;
    }
    return Math.ceil(current.length / size) || 1;
  });
  const increasePageNumber = () => {
    const page = pageNumber.value;
    if (page >= pageCount.value - 1) {
      pageNumber.value = pageCount.value - 1;
    } else {
      pageNumber.value = page + 1;
    }
  };
  const decreasePageNumber = () => {
    const page = pageNumber.value;
    if (page > 0) {
      pageNumber.value -= 1;
    } else {
      pageNumber.value = 0;
    }
  };
  const setPage = (page: number) => {
    pageNumber.value = page - 1;
  };

  return {
    pageNumber,
    pageCount,
    paginatedItems,
    increasePageNumber,
    decreasePageNumber,
    setPage,
  };
};
