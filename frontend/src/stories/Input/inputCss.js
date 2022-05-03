import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const messageCss = {
  error: css`
    color: red;
  `,
  success: css`
    color: blue;
  `,
};

const borderCss = {
  default: css`
    border: 0.0625rem solid lightgrey;
  `,
  error: css`
    border: 0.13rem solid red;
  `,
  success: css`
    border: 0.13rem solid blue;`,
};

export const EyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1rem;
  top: 2.4rem;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 1rem 0.6rem;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
  width: 100%;
  font-size: 0.9rem;
  border-radius: 0.25rem;
  &:focus { 
    outline: none;
  }
  transition: border 0.2s;
  ${({ status }) => (
    borderCss[status]
  )}
`;

export const Message = styled.p`
  position: absolute;
  left: 0.75rem;
  top: 3.7rem;
  font-size: 0.8rem;
  ${({ status }) => (
    messageCss[status]
  )}
`;

export const Label = styled.p`
    position: absolute;
    bottom: 3.8rem;
    font-size: 0.9rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;
