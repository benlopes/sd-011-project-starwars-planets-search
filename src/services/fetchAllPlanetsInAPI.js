const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchAllPlanetsInAPI() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export default fetchAllPlanetsInAPI;