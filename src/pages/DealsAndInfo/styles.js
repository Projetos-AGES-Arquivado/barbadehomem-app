import styled from 'styled-components';

export const Header = styled.header`
width: 100%;
height: 131px;
border-bottom: 1px solid rgba(255, 255, 255, 0.8);

display: flex;
align-items: center;

& h1 {
  font-size: 150%;
  margin: auto;
  align-items: center;
}

& svg {
  margin-left: 30px;
}
`;