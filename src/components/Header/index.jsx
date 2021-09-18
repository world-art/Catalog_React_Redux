import React from 'react';
import { useSelector } from 'react-redux';
import { CountBasketItems, HeaderBlock, LinkElem, LinksBlock } from './style';
import { BiBasket } from 'react-icons/bi';

export const Header = () => {
  const { basket } = useSelector((state) => state.basket);

  return (
    <HeaderBlock>
      <div className="_container">
        <LinksBlock>
          <LinkElem to="/">
            <h4>Каталог</h4>
          </LinkElem>
          <LinkElem to="/basket">
            <BiBasket size="2em" />
            {basket.length ? <CountBasketItems>{basket?.length}</CountBasketItems> : <></>}
          </LinkElem>
        </LinksBlock>
      </div>
    </HeaderBlock>
  );
};
