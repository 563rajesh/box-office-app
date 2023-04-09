import { useState } from 'react';

const Home = () => {
  const [searchStr, setsearchStr] = useState('');

  const onSearchInputChange = ev => {
    setsearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    const responce = await fetch(
      ` https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await responce.json();
    console.log(body);
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
