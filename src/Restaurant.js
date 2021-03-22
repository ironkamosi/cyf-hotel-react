import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = _ => {
    setOrders(orders + 1);
  };
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
