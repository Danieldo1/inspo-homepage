
const API_KEY = ''

const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=7670088d9fd3025436e2f7e907ba9c31&units=metric`

export const getWeather = async ( city, state ) => {
    const response = await fetch(`${API_URL}&q=${city},${state}`);
    const json = await response.json();

    return { 
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
}
}

const weatherApi = {
    
    getWeather
}

export default weatherApi;