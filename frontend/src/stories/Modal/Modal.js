import PropTypes from 'prop-types';
import * as Style from './ModalCss';
import { ReactComponent as Close } from '../../assets/close.svg';

export function Modal({ open, showCloseButton, onClose, children, ...props }) {
  return (
    <Style.ModalWrapper open={open}>
      <Style.Modal {...props}>
        {showCloseButton && (
        <Style.CloseButton onClick={onClose}>
          <Close width="100%" height="100%" />
        </Style.CloseButton>
        )}
        {children}
      </Style.Modal>
    </Style.ModalWrapper>
  );
}

Modal.Header = Style.Header;
Modal.Content = Style.Content;

Modal.propTypes = {
  open: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
};
