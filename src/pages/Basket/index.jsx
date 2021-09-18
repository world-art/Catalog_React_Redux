import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { EmptyBasket, FullCost, PriceBlockContainter } from './style';
import { BiBasket } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { deleteItemFromLS } from '../../redux/basket/action';

export const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const fullCostOfItems = basket.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
  const deleteItemFromBasket = (item) => {
    dispatch(deleteItemFromLS(item));
  };

  return (
    <div className="_container">
      {basket.length ? (
        <>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Картинка</th>
                <th>Имя продукта</th>
                <th>Цена,руб</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item, key) => (
                <tr key={item.id}>
                  <td>{key + 1}</td>
                  <td style={{ maxWidth: '200px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100px', height: '80px' }} />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <PriceBlockContainter>
                      {item.price}
                      <GrClose onClick={() => deleteItemFromBasket(item)} />
                    </PriceBlockContainter>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <FullCost>
            <h4>Итого: {fullCostOfItems} руб.</h4>
          </FullCost>
        </>
      ) : (
        <EmptyBasket>
          <h4>Корзина пустая</h4>
          <BiBasket size="5em" />
        </EmptyBasket>
      )}
    </div>
  );
};
