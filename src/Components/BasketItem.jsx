import React from 'react';

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    increaseQuantity = Function.prototype,
    decreaseQuantity = Function.prototype,
  } = props;
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
