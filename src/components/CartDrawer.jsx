import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { getCheckoutUrl } from '../services/shopify';

function CartDrawer({ open, onClose }) {
  const { items, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="drawer-head">
              <h2>Your Cart</h2>
              <button onClick={onClose} className="btn btn-secondary">
                Close
              </button>
            </div>
            <div className="drawer-items">
              {items.length === 0 && <p>Your cart is empty.</p>}
              {items.map((item) => (
                <article key={item.id} className="drawer-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="qty-row">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="drawer-foot">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <a href={getCheckoutUrl()} className="btn btn-primary">
                Checkout
              </a>
              <button className="btn btn-secondary" onClick={clearCart}>
                Clear cart
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
