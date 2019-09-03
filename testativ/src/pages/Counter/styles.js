import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    color: #fff;
    font-size: 32px;
    margin-bottom: 10px;
  }

  button {
    border: 0;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    font-size: 20px;
    padding: 5px;
  }
`;
