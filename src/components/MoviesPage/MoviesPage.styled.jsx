import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  position: relative;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-width: 0;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #bdbdbd;
  }
`;

export const Input = styled.input`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  z-index: 2;
`;

export const ListItem = styled.li`
  padding: 5px;

  &:nth-child(even) {
    background-color: #d6d6d6;
  }
`;
