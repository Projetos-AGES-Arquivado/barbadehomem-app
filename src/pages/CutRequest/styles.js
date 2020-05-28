import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 131px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);

  display: flex;
  align-items: center;

  & h1 {
    margin: auto;
  }

  & svg {
    margin-left: 10px;
  }
`;