import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from '@tanstack/react-query';

import { search } from '../apis/apis';
import { AnimeItem, AnimeItemSkeleton, CharacterItem } from '../components';

const SearchPage = ({ type }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('naruto');
  const inputRef = useRef(null);
  const searchBtnRef = useRef(null);

  const url = `https://api.jikan.moe/v4/${type}?q=${query}`;

  const { data, hasNextPage, fetchNextPage, isError, isLoading, isFetchingNextPage } =
    useInfiniteQuery([`search-${type}`, query], ({ pageParam = url }) => search(pageParam), {
      getNextPageParam: (lastPage, _) =>
        lastPage.pagination.has_next_page
          ? `${url}&page=${lastPage.pagination.current_page + 1}`
          : undefined,
    });

  if (isError) {
    toast.error('Something went wrong! Please try again!');
    return navigate('/');
  }

  useEffect(() => {
    const handlerEnterKeyPress = (e) => {
      if (e.code === 'Enter') {
        setQuery(inputRef.current.value);
      }
    };

    document.addEventListener('keyup', handlerEnterKeyPress);

    return () => {
      document.removeEventListener('keyup', handlerEnterKeyPress);
    };
  }, []);

  return (
    <div className='page-container w-full'>
      <div className='flex flex-col gap-y-4'>
        <div className='w-full relative'>
          <input
            type='text'
            className='p-3 w-full font-semibold outline-none rounded-md'
            placeholder='Enter your keyword'
            ref={inputRef}
            defaultValue={query}
          />
          <button
            ref={searchBtnRef}
            onClick={() => setQuery(inputRef.current.value)}
            className='p-3 absolute top-0 right-0 bottom-0 bg-purple-600 text-white font-semibold hover:opacity-75 duration-300 active:scale-90 rounded-r-md'
          >
            Search
          </button>
        </div>

        <div className='text-white mt-4'>
          {isLoading && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4'>
              {new Array(4).fill(0).map(() => (
                <AnimeItemSkeleton key={v4()} />
              ))}
            </div>
          )}
          <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-4'>
              {!isLoading &&
                data.pages.map((pageData) =>
                  pageData.data.map((item) => (
                    <>
                      {type === 'anime' ? (
                        <AnimeItem anime={item} key={v4()} />
                      ) : (
                        <CharacterItem character={item} key={v4()} />
                      )}
                    </>
                  ))
                )}
              {isFetchingNextPage && <AnimeItemSkeleton key={v4()} />}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
