import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/shopify';

function ProductsPage({ embedded = false }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then((data) => {
        if (mounted) {
          setProducts(data);
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
  }, []);

  return (
    <section className={`container ${embedded ? 'embedded-shop' : 'shop-page'}`}>
      {!embedded && (
        <header className="section-heading">
          <h1>Shop Programs</h1>
          <p>Choose your next growth system and add it to cart.</p>
        </header>
      )}

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsPage;
