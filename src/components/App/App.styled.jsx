import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  font-weight: 700;
`;

export const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
`;
