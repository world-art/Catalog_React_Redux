import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBlock = styled.div`
  height: 50px;
  background-color: #0c0b0b;
  margin-bottom: 20px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 10px black;
`;
export const LinksBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 10px;
`;
export const LinkElem = styled(NavLink)`
  position: relative;
  color: #ffffff;
  text-decoration: none;
  &:hover > svg {
    text-decoration: none;
    color: orange;
  }
  &:hover {
    text-decoration: none;
    color: orange;
  }
`;
export const CountBasketItems = styled.div`
  position: absolute;
  top: -7px;
  left: 80%;
`;
