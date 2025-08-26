import React, { useState } from 'react'

export default function Exercise02() {
    interface Product {
        id : number;
        name : string;
        price : number;
        quantity :number;
    }

    const [product, setProduct ] = useState<Product > ({
        id : 1,
        name : "coca",
        price : 100,
        quantity :1,

    });

  return (
    <div>
        <h2>Thông tin sản phẩm </h2>
        <p>id : {product.id}</p>
        <p>name : {product.name}</p>
        <p>price : {product.price}</p>
        <p>quantity : {product.quantity}</p>

    </div>
  );
}
