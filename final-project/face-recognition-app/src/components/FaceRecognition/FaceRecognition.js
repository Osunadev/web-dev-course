import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
  if (imageUrl === '') {
    return <div />;
  } else {
    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputimage"
            alt="img-submit"
            src={imageUrl}
            height="500px"
            width="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }}
          />
        </div>
      </div>
    );
  }
};

export default FaceRecognition;
