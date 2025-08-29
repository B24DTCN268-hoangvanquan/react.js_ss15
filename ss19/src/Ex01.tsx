import React, { useMemo } from "react";

const cartItems = [
  { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
  { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
  { id: 3, name: "Sản phẩm c", price: 600000, quantity: 2 },
];

function ShoppingCart() {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {item.price.toLocaleString()} VND
          </li>
        ))}
      </ul>
      <h3>Tổng cộng: {totalPrice.toLocaleString()} VND</h3>
    </div>
  );
}

export default ShoppingCart;