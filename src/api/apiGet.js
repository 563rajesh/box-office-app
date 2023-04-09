const BASE_URL = 'https://api.tvmaze.com';
const apiGet = async querySearch => {
  const response = await fetch(`${BASE_URL}${querySearch}`);
  const body = await response.json();
  return body;
};

export const searchForShows = qurey => apiGet(`/search/shows?q=${qurey}`);
