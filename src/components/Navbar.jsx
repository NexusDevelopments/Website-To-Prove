import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar({ onOpenCart }) {
  const { count } = useCart();

  return (
    <header className="site-header">
      <div className="announcement">Welcome to Mastery Of Sales!</div>
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          Mastery Of Sales
        </Link>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <button type="button" onClick={onOpenCart} className="cart-button">
          <svg
            className="cart-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6.5 8.25C6.5 5.35051 8.85051 3 11.75 3C14.6495 3 17 5.35051 17 8.25V9.5H18.875C19.4273 9.5 19.875 9.94772 19.875 10.5V19.5C19.875 20.0523 19.4273 20.5 18.875 20.5H4.625C4.07272 20.5 3.625 20.0523 3.625 19.5V10.5C3.625 9.94772 4.07272 9.5 4.625 9.5H6.5V8.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M9 9.5V8.25C9 6.73122 10.2312 5.5 11.75 5.5C13.2688 5.5 14.5 6.73122 14.5 8.25V9.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>Cart</span>
          <span className="cart-count">{count}</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
