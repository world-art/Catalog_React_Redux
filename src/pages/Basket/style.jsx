import styled from 'styled-components';

export const EmptyBasket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
export const FullCost = styled.div`
  float: right;
`;
export const PriceBlockContainter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
    margin-right: 10px;
  }
`;
