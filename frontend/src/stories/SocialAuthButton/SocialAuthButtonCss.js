import styled, { css } from 'styled-components';

const sizeCss = {
  small: css`
    width: 2rem;
    height: 2rem;
  `,
  medium: css`
    width: 3rem;
    height: 3rem;
  `,
  large: css`
    width: 4rem;
    height: 4rem;
  `,
};

const socialCss = {
  github: css`
    background-color: #181717;
  `,
  apple: css`
    background-color: #ffffff;
    
  `,
  facebook: css`
   background-color: #3b5998;
  `,
  google: css`
    background-color: #f8f8f8;
  `,
  kakaotalk: css`
    background-color: #f8e325;
  `,
};

export const SocialAuthButton = styled.button`
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0.5rem;
  box-shadow: 0.0625rem 0.0625rem 0.0625rem 0.0625rem lightgrey;
  ${({ size }) => (
    sizeCss[size]
  )}
  ${({ icon }) => (
    socialCss[icon]
  )}
`;
