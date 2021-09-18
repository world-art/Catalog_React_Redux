import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../redux/catalog/action';
import { Loader } from '../../components/Loader';
import { CatalogBlock } from './style';
import { buyItem } from '../../redux/basket/action';
import { NavLink } from 'react-router-dom';

export const Catalog = () => {
  const dispatch = useDispatch();
  const { catalog, isLoading } = useSelector((state) => state.catalog);
  const { basket } = useSelector((state) => state.basket);

  const handleBuyButton = (item) => {
    dispatch(buyItem(item));
    const selectItems = JSON.parse(localStorage.getItem('selectItems'));
    localStorage.setItem('selectItems', JSON.stringify(selectItems.concat([item])));
  };

  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <div className='_container'>
      {isLoading ? (
        <Loader />
      ) : (
        <CatalogBlock>
          {catalog.map((item) => (
            <Card key={item.id} style={{ width: '25rem' }}>
              <Card.Img variant='top' style={{ height: '300px' }} src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {item.price} руб.{' '}
                  {basket.findIndex((el) => el.id === item.id) === -1 ? (
                    <Button variant='secondary' onClick={() => handleBuyButton(item)}>
                      Купить
                    </Button>
                  ) : (
                    <NavLink to='/basket'>
                      <Button variant='success'>Оформить заказ</Button>
                    </NavLink>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CatalogBlock>
      )}
    </div>
  );
};
