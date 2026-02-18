import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar({ onOpenCart }) {
  const { count } = useCart();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          Mastery Growth
        </Link>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <button type="button" onClick={onOpenCart} className="cart-button">
          Cart ({count})
        </button>
      </div>
    </header>
  );
}

export default Navbar;
