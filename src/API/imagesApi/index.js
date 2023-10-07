
const randomInteger = () => {
  return Math.floor(Math.random() * 100) + 1;
}


const API_URL = `https://api.unsplash.com/search/photos?query=thoughts=&per_page=${randomInteger()}&client_id=${process.env.REACT_APP_API_KEY_PICTURES}`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
};

const unsplashApi = {
  getImage
};

export default unsplashApi;
