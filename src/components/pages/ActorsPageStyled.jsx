import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-top: -15px;
`;

export const GalleryItem = styled.li`
  flex-basis: calc(33.33333% - 15px);
  margin-right: 15px;
  margin-top: 15px;
`;

export const Text = styled.p`
  padding: 5px;
`;
