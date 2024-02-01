import React from 'react';

const Card = ({getDescription, meal}) => {

  const {categoryImg, categoryName} = meal;

  return <div className="Card" onClick={getDescription}>
            <img src={categoryImg} alt="meal-img" />
            <h2>{categoryName}</h2>
          </div>
};

export default Card;
