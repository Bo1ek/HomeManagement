import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  text-align: center;
`;

export const HomeHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const HomeLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
