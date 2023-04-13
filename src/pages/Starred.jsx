import { getShowsByIds } from '../api/apiGet';
import ShowsGrid from '../component/shows/ShowsGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from 'react-query';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  console.log({ starredShows });

  //check everything here
  if (starredShows?.length === 0) {
    return <div>No shows were starred</div>;
  }
  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows}></ShowsGrid>;
  }
  if (starredShowsError) {
    return <div>Error occured: {starredShows.message}</div>;
  }
  return <div>Starred is loading</div>;
};

export default Starred;
