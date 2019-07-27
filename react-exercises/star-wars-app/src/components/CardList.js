import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ arrayObjValues, arrayValueCaption }) => {
  return (
    <div className="container-card">
      {arrayObjValues.map((info, i) => {
        const valuesArray = Object.values(info);

        return (
          <Card
            firstField={`${arrayValueCaption[0]}: ${valuesArray[0]}`}
            secondField={`${arrayValueCaption[1]}: ${valuesArray[1]}`}
            thirdField={`${arrayValueCaption[2]}: ${valuesArray[2]}`}
            fourthField={`${arrayValueCaption[3]}: ${valuesArray[3]}`}
            fifthField={`${arrayValueCaption[4]}: ${valuesArray[4]}`}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default CardList;
