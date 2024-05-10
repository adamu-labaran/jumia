import React from "react";

export default function shopingItems({ items }) {
  return (
    <div className="clearance-items">
      <div className="product-img">
        <img src={items.productImg} alt="" />
      </div>
      <p className="product-decription">{items.name} </p>
      <p className="product-price">{items.price} </p>
    </div>
  );
}
