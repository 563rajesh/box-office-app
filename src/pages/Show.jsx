import { useParams } from 'react-router-dom';
import { getShowById } from '../api/apiGet';
import { useQuery } from 'react-query';
import ShowMainData from '../component/shows/ShowMainData';
import Details from '../component/shows/Details';
import Seasons from '../component/shows/Seasons';
import Casts from '../component/shows/Casts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextCenter } from '../component/common/TextCenter';

const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', 'showId'],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false, //stop to refresh ie prevent
  });

  if (showError) {
    return <TextCenter>we have an error: {showError.message}</TextCenter>;
  }
  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go back to Home</Link>
        </BackHomeWrapper>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          summary={showData.summary}
          genres={showData.genres}
          rating={showData.rating}
        ></ShowMainData>
        <InfoBlock>
          <Details
            status={showData.status}
            premered={showData.premered}
            network={showData.network}
          ></Details>
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons}></Seasons>
        </InfoBlock>
        <InfoBlock>
          <h2>Casts</h2>
          <Casts casts={showData._embedded.cast}></Casts>
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Data is loading</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
