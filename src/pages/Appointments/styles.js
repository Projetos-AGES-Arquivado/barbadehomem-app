import styled, { css } from 'styled-components';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-bottom: 15px;
  }
`;

export const Solicitation = styled.ul`
  margin-top: 25px;
  width: 100%;
  font-size: 19px;
  width: 95%;
  padding: 3px 10px;

  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;

  & > li {
    display: flex;
    justify-content: space-between;
    align-items:baseline;
  }

  & a {
    text-decoration: underline;
  }

  &  p{
    border: 1px solid;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding: 5px 5px;
    margin-top: 3px;

    ${props =>
      props.status === 'pending' &&
      css`
        border-color: #c1981c;
        background-color: #c1981c;
      `}

    ${props =>
      props.status === 'booked' &&
      css`
        border-color: #4267b2;
        background-color: #4267b2;
      `}

      ${props =>
        props.status === 'done' &&
        css`
          border-color: #228b22;
          background-color: #228b22;
        `}

        ${props =>
          props.status === 'cancelled' &&
          css`
            border-color: #b22222;
            background-color: #b22222;
          `}
  }

  & span {
    color: #808080;
  }

  & button {
    padding: 5px; 
    width: 70px; 
    margin-bottom: 3px;
    border-radius: 3px;
    border-style: none;
    background-color: #b22222;
    font-size: 15px;
  }
`;
