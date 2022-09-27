import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

import { IconEmail, IconFavorite, LoadingComponent } from '../components';

import useGetCharacterDetail from '../hooks/useGetCharacterDetail';

const CharacterDetailPage = () => {
  const navigate = useNavigate();
  const { characterID } = useParams();
  const { data, isError, isLoading } = useGetCharacterDetail(characterID);

  if (isError) {
    toast.error('Something went wrong! Please try again!');
    return navigate('/');
  }

  if (isLoading) return <LoadingComponent />;

  const { images, name, name_kanji, nicknames, favorites, about, url } =
    data.data;

  return (
    <div className='page-container'>
      {data && (
        <div>
          <div className='grid grid-cols-1 gap-5 text-white md:grid-cols-2'>
            <div className='max-w-[800px] max-h-[600px] mx-auto rounded-lg'>
              <a target='_blank' href={url}>
                <img
                  src={images.jpg.image_url}
                  alt=''
                  className='object-cover w-full h-full rounded-lg'
                />
              </a>
            </div>
            <div className='flex flex-col gap-y-3'>
              <div id='anime-details' className='flex flex-col gap-y-5'>
                <h2 className='text-2xl font-bold'>
                  {name} ({name_kanji || 'empty japanese name'})
                </h2>

                <div className='flex items-center gap-x-1'>
                  <span className='font-semibold'>{favorites || '0'}</span>
                  <IconFavorite className={'h-5 w-5 text-red-500'} />
                </div>

                <div className='flex items-center gap-x-1'>
                  <IconEmail className={'h-5 w-5 text-green-500'} />
                  <span className='font-semibold'>
                    {nicknames.length > 0 ? nicknames.join(', ') : 'Empty'}
                  </span>
                </div>
              </div>

              <div id='anime-content' className='text-gray-300 text-md'>
                <p className='text-justify'>
                  <span className='font-semibold text-white'>About: </span>
                  <span className='text-sm'>
                    {about || "Description's empty"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetailPage;
