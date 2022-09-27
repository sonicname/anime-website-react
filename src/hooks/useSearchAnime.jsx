import { useInfiniteQuery } from '@tanstack/react-query';

import { search } from '../apis/apis';

const useSearchAnime = (type, query, url) => {
  return useInfiniteQuery(
    ['search', { type, query }],
    ({ pageParam = url }) => search(pageParam),
    {
      getNextPageParam: (lastPage, _) =>
        lastPage.pagination.has_next_page
          ? `${url}&page=${lastPage.pagination.current_page + 1}`
          : undefined,
    },
  );
};

export default useSearchAnime;
