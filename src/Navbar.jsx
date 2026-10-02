import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice.jsx';

export default function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <NavLink className="brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <path d="M25.7 5.6C15.6 5.4 8.7 8.1 7.1 14.2c-1.2 4.7 2.5 8.1 6.3 6.8 6.1-2.1 8.8-9.8 12.3-15.4Z" />
              <path d="M5.6 26.4c4-7.3 8.5-11.5 15.2-15.2" />
            </svg>
          </span>
          <span className="brand-name">paradise <strong>nursery</strong></span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/plants" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Plants
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => `nav-link cart-link${isActive ? ' active' : ''}`}
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.9-1.4L21 8H6" />
              <circle cx="10" cy="19" r="1.2" />
              <circle cx="18" cy="19" r="1.2" />
            </svg>
            <span>Cart</span>
            <span className="cart-count" aria-live="polite">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
