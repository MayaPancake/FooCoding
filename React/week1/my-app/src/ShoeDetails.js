import React from 'react';
import './ShoeDetails.css';

const ShoeDetails = ({ name, price, image, category }) => {

  return (
      <div className='shoes'>
      <img src={image} alt='shoes' />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  )

}



export default ShoeDetails;