import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 26px;
  color: #545454;
`;

export const List = styled.ul`
  display: grid;
  gap: 30px;
  margin: 0 auto;
  padding-bottom: 40px;
  grid-template-columns: repeat(4, minmax(260px, 1fr));
`;

export const ListItem = styled.li`
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.04);
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTitleWrapper = styled.div`
  margin-top: 10px;
`;

export const Image = styled.img`
  border-radius: 5px;
`;
