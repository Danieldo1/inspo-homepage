import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFact } from "./quoteSlice";
import { getFact } from "../../API/facts/index";

const Quote = () => {
    const dispatch = useDispatch();
    const fact = useSelector(selectFact);

    useEffect(() => {
        dispatch(getFact());
    }, [dispatch]);

    return (
        <div  id="quote" onClick={() => dispatch(getFact())} >
            <p className="quote-message">{fact}</p>
        </div>
    )
}

export default Quote;