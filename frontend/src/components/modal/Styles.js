import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(11,19,30,.37);
  display: ${({ status }) => (status ? 'flex' : 'none')}; 
  left: 0;
  position: fixed; 
  top: 0;
  width: 100%; 
  z-index: 5; 
  justify-content: center;
  height: 100%;
  align-items: center;
  backdrop-filter: blur(2px);
  
`;

export const Modal = styled.div`
  display: flex;
  min-width: 320px;
  max-width: 768px;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 320px;
  max-width: 768px;
  background-color: white;
  color: black;
`;

export const HeaderContent = styled.div`
  min-width: 320px;
  max-width: 768px;
  padding: 14px 22px;
  font-size: large;
`;

export const ModalBody = styled.div`
  min-width: 320px;
  max-width: 768px;
  padding: 14px 22px;
  background-color: white;
`;

export const ModalFooter = styled.div`
  min-width: 320px;
  max-width: 768px;
  padding: 10px 10px;
  background-color: white;
  float:right;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  &:hover {
    opacity: 0.7;
  }
`;