import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProducts } from '../services/shopify';

function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then((products) => {
        if (mounted) {
          setProduct(products.find((item) => item.id === productId) || null);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [productId]);

  if (loading) {
    return (
      <section className="container page-simple">
        <h1>Loading product...</h1>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="container page-simple">
        <h1>Product not found</h1>
        <Link to="/shop" className="btn btn-primary">
          Back to shop
        </Link>
      </section>
    );
  }

  return (
    <section className="container product-detail">
      <img src={product.image} alt={product.title} />
      <div>
        <span className="badge">{product.badge}</span>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>${product.price.toFixed(2)}</h3>
        <div className="product-actions">
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to cart
          </button>
          <Link to="/shop" className="btn btn-secondary">
            Continue shopping
          </Link>
        </div>
        <div className="video-wrap">
          {product.video ? (
            <iframe
              src={product.video}
              title={`${product.title} preview`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="media-fallback">
              <img src={product.image} alt={product.title} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
