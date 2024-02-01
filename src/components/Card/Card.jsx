import React from 'react';

const Card = ({meal}) => {

  const {categoryImg, categoryName} = meal;

  return <div className="Card">
            <img src={categoryImg} alt="meal-img" />
            <h2>{categoryName}</h2>
          </div>
};

export default Card;
