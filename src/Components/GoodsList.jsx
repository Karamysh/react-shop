import React from 'react';
import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [], onclickHandler = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} onclickHandler={onclickHandler} />
      ))}
    </div>
  );
}

export { GoodsList };
