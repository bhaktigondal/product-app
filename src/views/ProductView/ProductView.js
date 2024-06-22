import React from 'react';
import "./ProductView.css";
import { useParams } from "react-router-dom";
import cards from '../../data';

function ProductView() {
  const { id } = useParams();
  const selectedCard = cards.find((cardObject) => cardObject.id === id);

  return (
    <div className="product-view-container">
      <img src={selectedCard.productimage} alt={selectedCard.title} className="product-view-image" />
      <h1 className="product-view-title">{selectedCard.title}</h1>
      <p className='product-view-price'>{selectedCard.price}</p>
      <p className='product-view-content'>{selectedCard.content}</p>
      
      <div className='product-view-details'>
        {selectedCard.details.map((detail, index) => (
          <ul key={index}>{detail}</ul>
        ))}
      </div>
      <div className='product-view-features'>
        {selectedCard.features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </div>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
}

export default ProductView;
