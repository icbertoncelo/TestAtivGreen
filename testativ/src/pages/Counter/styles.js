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
    color: #aa805a;
    font-size: 24px;
    margin-bottom: 10px;
  }

  h1 {
    color: #aa805a;
    font-size: 100px;
    margin-bottom: 40px;
  }

  img {
    height: 180px;
    width: 180px;
    margin-bottom: 60px;
  }

  button {
    border: 0;
    border-radius: 4px;
    background-color: #41B441;
    color: #fff;
    font-size: 18px;
    padding: 10px 20px;
  }
`;
