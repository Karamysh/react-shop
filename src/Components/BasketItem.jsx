import React, { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, increaseQuantity, decreaseQuantity } = useContext(
    ShopContext,
  );

  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} руб.
      <button
        className="waves-effect waves-light btn-small"
        onClick={() => increaseQuantity(id)}
      >
        +
      </button>
      <button
        className="waves-effect waves-light btn-small"
        onClick={() => decreaseQuantity(id)}
      >
        -
      </button>
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
