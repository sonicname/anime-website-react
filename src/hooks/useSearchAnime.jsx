import { useInfiniteQuery } from '@tanstack/react-query';

const useSearchAnime = (type, query, url) => {
  return useInfiniteQuery(
    ['search', { type, query }],
    async ({ pageParam = url }) => (await fetch(pageParam)).json(),
    {
      getNextPageParam: (lastPage, _) =>
        lastPage.pagination.has_next_page
          ? `${url}&page=${lastPage.pagination.current_page + 1}`
          : undefined,
    },
  );
};

export default useSearchAnime;
