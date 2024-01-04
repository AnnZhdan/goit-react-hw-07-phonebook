import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 0px;
  border: 2px solid pink;
  width: 420px;
  border-radius: 3px;
  font-size: 20px;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 10px;
  border-bottom: 1px solid pink;
`;

export const ButtonRemove = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  border: 1px solid pink;
  border-radius: 10px;
  font-weight: 500px;
  background-color: pink;

  &:hover {
    background-color: lightpink;
  }
`;
