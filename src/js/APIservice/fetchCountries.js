export default fetchCountries = function (searchValue) {
  let searchUrl = `https://restcountries.com/v2/name/${searchValue}?fields=name,capital,flag,languages,population`;
  return fetch(searchUrl).then(response => response.json());
};
