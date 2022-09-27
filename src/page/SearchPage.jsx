import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { AnimeItem, AnimeItemSkeleton, CharacterItem } from '../components';

import useSearchAnime from '../hooks/useSearchAnime';

const SearchPage = ({ type }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('naruto');

  const inputRef = useRef(null);
  const searchBtnRef = useRef(null);

  const url = `https://api.jikan.moe/v4/${type}?q=${query}`;

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useSearchAnime(type, query, url);

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
    <div className='w-full page-container'>
      <div className='flex flex-col gap-y-4'>
        <div className='relative w-full'>
          <input
            type='text'
            className='w-full p-3 font-semibold rounded-md outline-none'
            placeholder='Enter your keyword'
            ref={inputRef}
            defaultValue={query}
          />
          <button
            ref={searchBtnRef}
            onClick={() => setQuery(inputRef.current.value)}
            className='absolute top-0 bottom-0 right-0 p-3 font-semibold text-white duration-300 bg-purple-600 hover:opacity-75 active:scale-90 rounded-r-md'
          >
            Search
          </button>
        </div>

        <div className='mt-4 text-white'>
          {isLoading && (
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4'>
              {new Array(4).fill(0).map(() => (
                <AnimeItemSkeleton key={v4()} />
              ))}
            </div>
          )}
          <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4'>
              {!isLoading &&
                data.pages.map((pageData) =>
                  pageData.data.map((item) => (
                    <>
                      {type === 'anime' ? (
                        <AnimeItem anime={item} key={item.mal_id} />
                      ) : (
                        <CharacterItem character={item} key={item.mal_id} />
                      )}
                    </>
                  )),
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
