import "./ProductCard.css";

function ProductCard({ id, productimage, title, price, content, details, features }) {
  return (
    <div className='product-card-container'>
      <img src={productimage} alt={title} className="product-image"/>
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <p className='product-content-preview'>{content.substring(0,150)}...</p>
      
    </div>
  );
}

export default ProductCard;
