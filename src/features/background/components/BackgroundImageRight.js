import React from "react";
import { useDispatch } from "react-redux";
import { switchToNextImage } from "../backgroundSlice";

const BackgroundImageRight = () => {
    const dispatch = useDispatch();

    return (
        <button   onClick={() => dispatch(switchToNextImage())}>  
        {">"}
        </button>
    )
}

export default BackgroundImageRight;