import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

export const useLocation = () => {
  const router = useRouter();
  const route = useRoute();
  const getSearchQuery = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const q: string | null = urlParams.get("q");
    return q;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchQuery: any = ref(getSearchQuery());

  const setPageNumberQuery = (pageNumber: number) => {
    router.push({
      path: route.path,
      query: { q: getSearchQuery(), page: pageNumber },
    });
  };
  const setSearchQuery = (q: string) => {
    searchQuery.value = q;
    router.push({
      path: route.path,
      query: { q },
    });
  };

  const getPageNumberQuery = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page: number | null = Number(urlParams.get("page"));
    if (page === null) return 1;
    const current: number = page - 1;
    if (current < 0) return 0;
    return current;
  };

  return {
    setPageNumberQuery,
    getPageNumberQuery,
    setSearchQuery,
    getSearchQuery,
    searchQuery,
  };
};
