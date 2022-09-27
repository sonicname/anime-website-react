import { AnimeList } from '../components';

const AnimePage = () => {
  return (
    <div className='flex flex-col page-container gap-y-10'>
      <section id='top-anime' className='text-white'>
        <h2 className='mb-3 text-2xl font-semibold'>Top Anime</h2>
        <AnimeList type='top/anime' />
      </section>

      <section id='season-now' className='text-white'>
        <h2 className='mb-3 text-2xl font-semibold'>Season now</h2>
        <AnimeList type='seasons/now' />
      </section>

      <section id='season-upcoming' className='text-white'>
        <h2 className='mb-3 text-2xl font-semibold'>Season Upcoming</h2>
        <AnimeList type='seasons/upcoming' />
      </section>
    </div>
  );
};

export default AnimePage;
