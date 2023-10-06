


const API_URL = `https://api.unsplash.com/search/photos?query=nature&page=100&per_page=10&client_id=${process.env.REACT_APP_API_KEY_PICTURES}`;

export const getImage = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json.results.map((result) => result.urls.full);
};

const unsplashApi = {
  getImage
};

export default unsplashApi;
