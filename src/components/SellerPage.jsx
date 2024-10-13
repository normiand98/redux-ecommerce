import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct, removeProduct, addProduct } from '../features/productSlice';

const SellerPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); 
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '' });

  // Handle product updates
  const handleProductUpdate = (id, updatedProduct) => {
    dispatch(updateProduct({ id, updatedProduct }));
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    const product = { id: Date.now(), ...newProduct };
    dispatch(addProduct(product));
    setNewProduct({ name: '', price: '', quantity: '' }); // Reset form
  };

  // Handle removing a product
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="seller-page p-4">
      <h2>Market Dashboard</h2>
      <h3>Edit Product(s)</h3>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleProductUpdate(product.id, { ...product, name: e.target.value })}
            placeholder="Product Name"
            className="input-field"
          />
          <input
            type="number"
            value={product.price}
            onChange={(e) => handleProductUpdate(product.id, { ...product, price: e.target.value })}
            placeholder="Product Price"
            className="input-field"
          />
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => handleProductUpdate(product.id, { ...product, quantity: e.target.value })}
            placeholder="Product Quantity"
            className="input-field"
          />
          <button onClick={() => handleRemoveProduct(product.id)} className="remove-btn">
            Remove
          </button>
        </div>
      ))}

      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Product Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Product Quantity"
        value={newProduct.quantity}
        onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
        className="input-field"
      />
      <button onClick={handleAddProduct} className="add-btn">
        Add Product
      </button>
    </div>
  );
};

export default SellerPage;
