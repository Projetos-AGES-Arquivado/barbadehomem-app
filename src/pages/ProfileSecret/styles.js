import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & header {
    & svg {
      position: absolute;
    }
  }

  & form {
    & #email {
      color: #c3c3c3;
    }

    & button {
      margin-top: 35px;
    }
  }
`;

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

export const LoaderContainer = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 30px;
    height: 30px;
  }
`;
