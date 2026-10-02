import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import CartItem from './CartItem.jsx';
import Navbar from './Navbar.jsx';
import ProductList from './ProductList.jsx';
import './App.css';

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Paradise Nursery · a greener kind of home</p>
          <h1>Bring a little <em>green</em> home.</h1>
          <p className="hero-copy">
            Find a houseplant that feels right for your space. We have healthy,
            happy greenery for first-time growers and longtime plant lovers alike.
          </p>
          <Link className="button hero-button" to="/plants">Get Started</Link>
          <p className="hero-note"><span aria-hidden="true">✳</span> Good plants, good days.</p>
        </div>
      </section>
      <AboutUs />
      <section className="home-invite">
        <div>
          <p className="eyebrow">Your next favourite is waiting</p>
          <h2>Make a little room for something green.</h2>
        </div>
        <Link className="button button-light" to="/plants">Explore the plants</Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="site-footer">
        <Link className="footer-brand" to="/">paradise nursery</Link>
        <p>Thoughtful houseplants for everyday spaces.</p>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </div>
  );
}
