import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
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
