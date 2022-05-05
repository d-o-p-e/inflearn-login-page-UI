import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  width: 330px;
  min-height: 25px;
  margin: 0 auto;
  // margin-top: 100px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 1rem;
  width: 25px;
  cursor: pointer;
`;

export const Header = styled.div``;
export const Content = styled.div``;
export const Footer = styled.div``;
