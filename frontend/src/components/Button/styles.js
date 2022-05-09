import styled, { css } from 'styled-components';

const sizeCss = {
  small: css`
  font-size: 12px;
  padding: 10px 16px;
  `,
  medium: css`
  font-size: 14px;
  padding: 11px 20px;
  `,
  large: css`
  font-size: 16px;
  padding: 12px 24px;
  `,
};

const colorCss = {
  primary: css`
  color: white;
  background-color: #00C471;
  `,
  secondary: css`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
};
const roundCss = {
  default: css`
  border-radius: 0.5rem;
`,
  round: css`
  border-radius: 1rem;
`,
};

export const StoryBookButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  height: 48px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${({ size }) => sizeCss[size]}
  ${({ color }) => colorCss[color]}
  ${({ round }) => (round ? roundCss.round : roundCss.default)}
  width:${({ width }) => width}
`;
