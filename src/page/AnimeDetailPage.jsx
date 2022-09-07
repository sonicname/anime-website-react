import { useNavigate, useParams } from 'react-router-dom';

import { getRating } from '../utils/getRating';
import { useQuery } from '@tanstack/react-query';
import { getAnimeDetail } from '../apis/apis';
import { toast } from 'react-toastify';

import {
  DetailListItem,
  DetailStatus,
  IconFavorite,
  IconRank,
  IconStar,
  IconUserGroup,
  LoadingComponent,
} from '../components';

const AnimeDetailPage = () => {
  const { animeID } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery(
    ['anime', animeID],
    () => getAnimeDetail(animeID)
  );

  if (error) {
    toast.error('Something went wrong! Please try again!');
    return navigate('/');
  }
  if (isLoading) return <LoadingComponent />;

  const {
    images,
    title,
    title_japanese,
    synopsis,
    url,
    trailer,
    type,
    source,
    episodes,
    status,
    duration,
    rating,
    year,
    score,
    favorites,
    members,
    rank,
    genres,
  } = data.data;

  return (
    <div className="page-container">
      {data && (
        <div>
          <div className="text-white grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="max-w-[800px] max-h-[600px] mx-auto rounded-lg">
              <a target="_blank" href={url}>
                <img
                  src={images.jpg.large_image_url}
                  alt=""
                  className="h-full w-full object-cover rounded-lg"
                />
              </a>
            </div>
            <div className="flex flex-col gap-y-3">
              <div
                id="anime-details"
                className="flex flex-col gap-y-5"
              >
                <div className="flex flex-col gap-y-[4px]">
                  <h2 className="font-bold text-2xl">
                    {title} ({year || 'Empty year'})
                  </h2>
                  <h3 className="opacity-75 text-sm">
                    {title_japanese} - {`Rank: ${rank}`}
                  </h3>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-1">
                      <IconRank className={'h-5 w-5 text-cyan-400'} />
                      <span className="font-semibold">
                        {rank || 'null'}
                      </span>
                    </div>

                    <div className="flex items-center gap-x-1">
                      <span className="font-semibold">
                        {score || '0'}
                      </span>
                      <IconStar
                        className={'h-5 w-5 text-yellow-300'}
                      />
                    </div>

                    <div className="flex items-center gap-x-1">
                      <span className="font-semibold">
                        {favorites || '0'}
                      </span>
                      <IconFavorite
                        className={'h-5 w-5 text-red-500'}
                      />
                    </div>

                    <div className="flex items-center gap-x-1">
                      <span className="font-semibold">
                        {members || '0'}
                      </span>
                      <IconUserGroup
                        className={'h-5 w-5 text-blue-400'}
                      />
                    </div>
                  </div>
                </div>

                {genres.length > 0 && (
                  <DetailListItem items={genres} title={'Genres'} />
                )}

                <div className="flex flex-wrap gap-3">
                  <DetailStatus
                    type={'Rating'}
                    content={getRating(rating)}
                    className="text-sm"
                  />
                  <DetailStatus
                    type={'Status'}
                    content={status}
                    className="text-sm"
                  />

                  <DetailStatus
                    type={'Duration'}
                    content={duration || 'Unknown'}
                    className="text-sm"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <DetailStatus
                    type={'Type'}
                    content={type}
                    className="text-sm"
                  />
                  <DetailStatus
                    type={'Source'}
                    content={source || 'Unknown'}
                    className="text-sm"
                  />
                  <DetailStatus
                    type={'Episodes'}
                    content={episodes || 'Unknown'}
                    className="text-sm"
                  />
                </div>
              </div>

              <div
                id="anime-content"
                className="text-md text-gray-300"
              >
                <p className="text-justify">
                  <span className="font-semibold text-white">
                    Description:{' '}
                  </span>
                  <span className="text-sm">
                    {synopsis || "Description's empty"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {trailer.embed_url && (
            <div className="mt-[50px] mx-auto">
              <iframe
                className="w-full h-[600px]"
                src={`${trailer.embed_url}?autoplay=0&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimeDetailPage;
