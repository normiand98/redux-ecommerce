import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCart, removeFromCart } from '../features/cartSlice';
import { purchaseProduct } from '../features/productSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleCheckout = () => {
    cartItems.forEach(product => {
      dispatch(purchaseProduct({ id: product.id, quantity: product.quantity }));
    });
    dispatch(checkoutCart());
    alert('Product Bought!');
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Cart</h2>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <p>Your cart is empty</p>
          <Link to="/shopper" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', textDecoration: 'none' }}>
            Buy Products
          </Link>
        </div>
      ) : (
        <>
          {/* Product Items */}
          <div style={{ marginBottom: '20px' }}>
            {cartItems.map(product => (
              <div key={product.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
                <div>
                  <strong>{product.name}</strong> - Quantity: {product.quantity}
                </div>
                <div>
                  Price: ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
                  <button 
                    onClick={() => handleRemoveFromCart(product.id)} 
                    style={{ 
                      backgroundColor: '#f44336', 
                      color: '#fff', 
                      border: 'none', 
                      padding: '5px 10px', 
                      cursor: 'pointer' 
                    }}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
          <button 
            onClick={handleCheckout} 
            style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Complete Payment
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
