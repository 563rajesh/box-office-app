import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/apiGet';
import SearchForm from '../component/SearchForm';
import ShowsGrid from '../component/shows/ShowsGrid';
import ActorsGrid from '../component/actors/ActorsGrid';
import { useQuery } from 'react-query';
import { TextCenter } from '../component/common/TextCenter';

const Home = () => {
  const [filter, setFilter] = useState(null);
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setapiDataError] = useState(null);
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
    // try {
    //   setapiDataError(null);

    //   let result;
    //   if (searchOption === 'shows') {
    //     result = await searchForShows(q);
    //   } else {
    //     result = await searchForPeople(q);
    //   }
    //   setApiData(result);
    // } catch (error) {
    //   setapiDataError(error);
    // }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured: {apiDataError.message}</TextCenter>;
    }
    //if apidata length is 0 not null
    if (apiData?.length === 0) {
      return <TextCenter>No result</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData}></ShowsGrid>
      ) : (
        <ActorsGrid actors={apiData}></ActorsGrid>
      );
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch}></SearchForm>
      {renderApiData()}
    </div>
  );
};

export default Home;
