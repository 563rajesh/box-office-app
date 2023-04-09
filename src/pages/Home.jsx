import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/apiGet';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setapiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setapiDataError(null);
      if (searchOption === 'shows') {
        const result = await searchForShows(searchStr);
        console.log(result);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        console.log(result);
        setApiData(result);
      }
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
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="searchOption"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="searchOption"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">Search</button>
      </form>
      {renderApiData()}
    </div>
  );
};

export default Home;
