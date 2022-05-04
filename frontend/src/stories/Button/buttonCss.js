import styled, { css } from 'styled-components';

const sizeCss = {
  default: css`
    font-size: 14px;
    padding: 16px;
  `,
  wide: css`
    font-size: 14px;
    padding: 16px;
    width: 270px;
    letter-spacing: -1px;
  `,
  maxWidth: css`
    font-size: 14px;
    padding: 16px;
    width: 100%;
    letter-spacing: -1px;
  `,
};

const colorCss = {
  primary: css`
    color: white;
    background-color: rgba(25, 196, 115);
    &:active {
      background-color: rgba(20, 163, 95);
    }
  `,
  secondary: css`
    color: #333;
    background-color: transparent;
    &:active {
      background-color: #eee;
    }
  `,
};

const roundCss = {
  round: css`
    border-radius: 4px;
  `,
  rounder: css`
    border-radius: 10px;
  `,
};

export const StoryBookButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  ${({ size }) => (
    sizeCss[size]
  )}
  ${({ color }) => (
    colorCss[color]
  )}
  ${({ round }) => (
    roundCss[round]
  )}
`;
