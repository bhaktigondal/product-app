import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, productimage, title, price, content, details, features }) {
  return (
    <Link className='product-card-container' to={`/card/${id}`}>
      <img src={productimage} alt={title} className="product-image"/>
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <p>🌟🌟🌟🌟🌟</p>
      <p className='product-content-preview'>{content.substring(0,100)}...</p>
      
    </Link>
  );
}

export default ProductCard;
