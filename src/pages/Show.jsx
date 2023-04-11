import { useParams } from 'react-router-dom';
import { getShowById } from '../api/apiGet';
import { useQuery } from 'react-query';
import ShowMainData from '../component/shows/ShowMainData';
import Details from '../component/shows/Details';
import Seasons from '../component/shows/Seasons';
import Casts from '../component/shows/Casts';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', 'showId'],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false, //stop to refresh ie prevent
  });

  if (showError) {
    return <div>we have an error: {showError.message}</div>;
  }
  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          summary={showData.summary}
          genres={showData.genres}
          rating={showData.rating}
        ></ShowMainData>
        <div>
          <Details
            status={showData.status}
            premered={showData.premered}
            network={showData.network}
          ></Details>
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons}></Seasons>
        </div>
        <div>
          <h2>Casts</h2>
          <Casts casts={showData._embedded.cast}></Casts>
        </div>
      </div>
    );
  }

  return <div>Data is loading</div>;
};

export default Show;
