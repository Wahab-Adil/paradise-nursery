import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import { formatCurrency } from './formatCurrency.js';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="page-container cart-page">
      <div className="page-heading cart-page-heading">
        <div>
          <p className="eyebrow">Your little green collection</p>
          <h1>Shopping cart</h1>
        </div>
        {items.length > 0 && <span className="cart-items-label">{items.length} {items.length === 1 ? 'plant' : 'plants'}</span>}
      </div>

      {items.length === 0 ? (
        <section className="empty-cart" aria-live="polite">
          <div className="empty-cart-icon" aria-hidden="true">✿</div>
          <h2>Your cart is empty.</h2>
          <p>There are plenty of lovely plants waiting to come home with you.</p>
          <Link className="button" to="/plants">Browse plants</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-list" aria-label="Items in your cart">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <p className="eyebrow">{item.category}</p>
                  <h2>{item.name}</h2>
                  <p className="unit-price">{formatCurrency(item.price)} <span>each</span></p>
                  <div className="cart-item-actions">
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button
                        type="button"
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        disabled={item.quantity <= 1}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-button"
                      type="button"
                      onClick={() => dispatch(removeItem(item.id))}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="line-total" aria-label={`Total for ${item.name}`}>
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </article>
            ))}
            <Link className="text-link continue-link" to="/plants">
              <span aria-hidden="true">←</span> Continue Shopping
            </Link>
          </section>

          <aside className="cart-summary" aria-label="Order summary">
            <p className="eyebrow">A little more green</p>
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatCurrency(cartTotal)}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <strong>{formatCurrency(cartTotal)}</strong>
            </div>
            <p className="summary-note">Shipping and care notes are sorted at checkout.</p>
            <button
              className="button checkout-button"
              type="button"
              onClick={() => setCheckoutMessage('Coming Soon')}
            >
              Checkout
            </button>
            {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
          </aside>
        </div>
      )}
    </main>
  );
}
