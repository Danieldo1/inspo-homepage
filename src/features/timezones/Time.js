import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {chooseTimezone,} from "../timezones/timeSlice";
import { getIp} from "../../API/time/timezoneAPI";



const Time = () => {
    const timezone = useSelector(chooseTimezone);
    const dispatch = useDispatch();
    const [counter, setCounter] = React.useState(0);

   const [time, setTime] = useState(new Date());

  useEffect(() => {
    dispatch(getIp());
    const interval = setInterval(() => {
      setTime(dispatch(getIp()));
    }, 1000);
    return () => clearInterval(interval);
});
   
return (
    <div  id="time" style={{width: 100, margin: 0}} >
        <p className="timezone">{timezone}</p>
    </div>
)

}

export default Time;
