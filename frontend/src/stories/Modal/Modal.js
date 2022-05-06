import PropTypes from 'prop-types';
import * as Style from './ModalCss';
import { ReactComponent as Close } from '../../assets/close.svg';

export function Modal({ isOpen, showCloseButton, onClose, children, ...props }) {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Style.ModalWrapper isOpen={isOpen} onClick={handleClickOutside}>
      {isOpen
      && (
      <Style.Modal {...props}>
        {showCloseButton && (
        <Style.CloseButton onClick={onClose}>
          <Close width="100%" height="100%" />
        </Style.CloseButton>
        )}
        {children}
      </Style.Modal>
      )}
    </Style.ModalWrapper>
  );
}

Modal.Header = Style.Header;
Modal.Content = Style.Content;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  showCloseButton: true,
};
