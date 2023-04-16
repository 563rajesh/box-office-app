import { getShowsByIds } from '../api/apiGet';
import ShowsGrid from '../component/shows/ShowsGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from 'react-query';
import { TextCenter } from '../component/common/TextCenter';

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
    return <TextCenter>No shows were starred</TextCenter>;
  }
  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows}></ShowsGrid>;
  }
  if (starredShowsError) {
    return <div>Error occured: {starredShows.message}</div>;
  }
  return <TextCenter>Starred is loading</TextCenter>;
};

export default Starred;
