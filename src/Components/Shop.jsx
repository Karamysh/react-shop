import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShown, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const onclickHandler = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const handelBasketShow = () => {
    setBasketShow(!isBasketShown);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  const increaseQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === itemId) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  const decreaseQuantity = (itemId) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === itemId && orderItem.quantity >= 1) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handelBasketShow={handelBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} onclickHandler={onclickHandler} />
      )}
      {isBasketShown && (
        <BasketList
          order={order}
          handelBasketShow={handelBasketShow}
          removeFromBasket={removeFromBasket}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
