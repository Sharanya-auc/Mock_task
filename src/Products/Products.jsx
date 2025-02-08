import React from "react";
import "./product.css";

const Products = ({ products }) => {
  return (
    <div className="displaying_products">
      {products.length > 0 ? (
        products.map((item) => (
          <div className="products" key={item.id}>
            <div className="left_content">
            <img src={item.image} alt={item.title} width="100px" />
            <p>{item.title}</p>
            </div>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Products;
