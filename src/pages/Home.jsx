import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/apiGet';
import SearchForm from '../component/SearchForm';
import ShowsGrid from '../component/shows/ShowsGrid';
import ActorsGrid from '../component/actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);
  const onSearch = async ({ q, searchOption }) => {
    try {
      setapiDataError(null);

      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);
    } catch (error) {
      setapiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    //if apidata length is 0 not null
    if (apiData?.length === 0) {
      return <div>No result</div>;
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
