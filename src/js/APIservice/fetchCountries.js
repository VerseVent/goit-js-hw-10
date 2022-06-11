export default function fetchCountries(searchValue) {
  let searchUrl = `https://restcountries.com/v2/name/${searchValue}?fields=name,capital,currencies,flag,languages,population`;
  return fetch(searchUrl).then(response => response.json());
}
