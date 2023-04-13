const BASE_URL = 'https://api.tvmaze.com';
const apiGet = async querySearch => {
  const response = await fetch(`${BASE_URL}${querySearch}`);
  const body = await response.json();
  return body;
};

export const searchForShows = qurey => apiGet(`/search/shows?q=${qurey}`);
export const searchForPeople = qurey => apiGet(`/search/people?q=${qurey}`);
export const getShowById = showId =>
  apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async showIds => {
  const promises = showIds.map(showId => apiGet(`/shows/${showId}`));
  return Promise.all(promises);
};
