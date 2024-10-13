import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { addToCart } from '../features/cartSlice';
import { fetchProducts } from '../features/productSlice';

const ShopperPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const currentUser = useSelector((state) => state.users.currentUser);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!currentUser) {
      alert('You are not logged in.');
      return;
    }

    if (product.price && product.quantity > 0) {
      const quantityToAdd = 1;
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        quantity: quantityToAdd
      }));

      setNotification(`Added!`);
      setTimeout(() => setNotification(''), 3000);
    } else {
      alert('This product is out of stock or has an invalid price!');
    }
  };

  const handleCheckout = () => {
    navigate('/cart'); 
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Products</h1>

      {notification && (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          {notification}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px', width: '100%', maxWidth: '400px', backgroundColor: '#fff' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{product.name}</h3>
            <p>Price: ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}</p>
            <p>Quantity: {product.quantity}</p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                padding: '10px',
                backgroundColor: product.quantity > 0 ? '#007BFF' : '#ccc',
                color: '#fff',
                border: 'none',
                cursor: product.quantity > 0 ? 'pointer' : 'not-allowed',
                width: '100%',
                marginTop: '10px'
              }}
              disabled={product.quantity <= 0}
            >
              {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          width: '100%',
          maxWidth: '200px',
          cursor: 'pointer'
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default ShopperPage;
