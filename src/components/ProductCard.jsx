import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
    >
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-body">
        <span className="badge">{product.badge}</span>
        <h3>{product.title}</h3>
        <p>{product.subtitle}</p>
        <strong>${product.price.toFixed(2)}</strong>
      </div>
      <div className="product-actions">
        <Link to={`/product/${product.id}`} className="btn btn-secondary">
          View
        </Link>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </motion.article>
  );
}

export default ProductCard;
