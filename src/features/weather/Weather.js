import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    chooseTemp,
    chooseLocation,
    chooseLon,
    chooseLat,
    chooseDescription,
    chooseIcon,
    chooseCountry,
} from "./weatherSlice";
import {    getWeather,
    getCords } from '../../API/weatherApi/index';



const Weather = () => {
    const location = useSelector(chooseLocation);
    const lon = useSelector(chooseLon);
    const lat = useSelector(chooseLat);
    const temp = Math.round(useSelector(chooseTemp));
    const description = useSelector(chooseDescription);
    const icon = useSelector(chooseIcon);
    const country = useSelector(chooseCountry);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather({ lat, lon }));
        dispatch(getCords());
    })

return (
    <div className="weather" >
        <div className="weather-container" style={{width: 100}} >   
        <img 
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        />
        <h4 className="location">{`${location}, ${country}`}</h4>
        <div className="weather-text">
            <p className="temperature">{temp}C°</p> 
            <p className="weather-description"> {description.charAt(0).toUpperCase() + description.slice(1)}</p>
        </div>
        </div>
    </div>
)
}

export default Weather;