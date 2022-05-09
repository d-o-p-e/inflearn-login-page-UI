import styled, { css } from 'styled-components';

const socialCss = {
  kakao: css`
    background-color: #FAE500;
  `,
  google: css`
    background-color: #F8F8F8;
  `,
  github: css`
    background-color: #3C4043;
  `,
  facebook: css`
    background-color: #325CA6;
  `,
  apple: css`
    background-color: #FFFFFF;
  `,
};

export const SocialLoginButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  display: flex;
  height: 44px;
  justify-content: center;
  width:44px;
  ${({ social }) => socialCss[social]}
`;
