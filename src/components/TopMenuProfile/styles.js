import styled from 'styled-components';

export const TopMenu = styled.div`
  width: 150px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  a {
    position: relative;

    &.active::after {
      content: '';
      height: 2px;
      width: 30px;
      background: #ff872c;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
`;
