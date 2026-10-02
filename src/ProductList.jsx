import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { categories, products } from './products.js';
import { formatCurrency } from './formatCurrency.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <main className="page-container plants-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Find your next favourite</p>
          <h1>Plants for every corner</h1>
          <p className="page-lede">
            Take a look through our indoor favourites, easy-care succulents, and
            leafy tropical plants.
          </p>
        </div>
        <p className="collection-note">18 plants <span aria-hidden="true">·</span> 3 collections</p>
      </div>

      {categories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category);
        const headingId = category.toLowerCase().replaceAll(' ', '-');

        return (
          <section className="product-category" key={category} aria-labelledby={headingId}>
            <div className="category-heading">
              <h2 id={headingId}>{category}</h2>
              <span>{categoryProducts.length} plants</span>
            </div>
            <div className="product-grid">
              {categoryProducts.map((product) => {
                const inCart = cartItems.some((item) => item.id === product.id);

                return (
                  <article className="product-card" key={product.id}>
                    <div className="product-image-wrap">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <span className="product-label">{category}</span>
                    </div>
                    <div className="product-details">
                      <div className="product-title-row">
                        <h3>{product.name}</h3>
                        <span className="product-price">{formatCurrency(product.price)}</span>
                      </div>
                      <p>{product.description}</p>
                      <button
                        className={`button add-button${inCart ? ' added' : ''}`}
                        type="button"
                        disabled={inCart}
                        onClick={() => dispatch(addItem(product))}
                        aria-label={inCart ? `${product.name} is in your cart` : `Add ${product.name} to cart`}
                      >
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
