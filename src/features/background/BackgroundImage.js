import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBackgroundImage } from "./backgroundSlice";

const BackgroundImage = () => {
  const { imageUrls, currentImageUrlIndex } = useSelector(
    (state) => state.backgroundImage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBackgroundImage());
  }, [dispatch]);

  return (
    <div id="background__container" >
      <img  src={imageUrls[currentImageUrlIndex]} alt="background"  style={myPhoto} />
    </div>
  );
};

const myPhoto ={
        filter: 'blur(5px)',
        objectFit: 'fill',
         minWidth: '100vw',
         height: '100vh',
         objectPosition: 'center',
        // backgroundSize: 'cover',
        // background: 'no-repeat',
}


export default BackgroundImage;
