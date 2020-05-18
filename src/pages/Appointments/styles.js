import React from 'react';
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
  }

  & a {
    text-decoration: underline;
  }

  & .status {
    ${props =>
      props.pending &&
      css`
        color: #ff5;
      `}

    ${props =>
      props.done &&
      css`
        color: #32cd32;
      `}

    ${props =>
      props.canceled &&
      css`
        color: #fa8072;
      `}

      ${props =>
        props.booked &&
        css`
          color: #0000FF;
        `}

    } 
`;
