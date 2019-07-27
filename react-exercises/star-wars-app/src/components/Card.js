import React from 'react';
import image from '../eye-2387853_640.png';

const Card = ({
  firstField,
  secondField,
  thirdField,
  fourthField,
  fifthField
}) => {
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 w-100">
      <div className="tc">
        <img
          src={image}
          className="br-100 h3 w3 dib"
          title="Profile Photo"
          alt="item"
        />
        <h1 className="f4 black-90">{firstField}</h1>
        <p className="black-90">{secondField}</p>
        <hr className="mw4 bb bw1 b--black-10" />
      </div>
      <div className="center black-80">
        <p>{thirdField}</p>
        <p>{fourthField}</p>
        <p>{fifthField}</p>
      </div>
    </article>
  );
};

export default Card;
