import React from "react";
import { useDispatch} from "react-redux";
import { switchToPreviousImage } from "../backgroundSlice";


const BackgroundImageLeft = () => {
    const dispatch = useDispatch();

    return (
        
        <button onClick={() => dispatch(switchToPreviousImage())}>
        {'<'}
        </button>
    )
}

export default BackgroundImageLeft;