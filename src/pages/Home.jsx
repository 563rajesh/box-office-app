import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/apiGet';
import SearchForm from '../component/SearchForm';

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

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
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
