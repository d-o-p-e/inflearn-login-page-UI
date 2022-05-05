import PropTypes from 'prop-types';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Style from './Styles';

export function Modal({ status, onClose, footerContent, bodyContent, headerContent }) {
  return (
    <Style.Overlay status={status}>
      <Style.Modal>
        <Style.ModalHeader>
          <Style.HeaderContent>
            {headerContent}
          </Style.HeaderContent>
          <Style.CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </Style.CloseButton>
        </Style.ModalHeader>
        <Style.ModalBody>
          {bodyContent}
        </Style.ModalBody>
        <Style.ModalFooter>
          {footerContent}
        </Style.ModalFooter>
      </Style.Modal>
    </Style.Overlay>

  );
}

Modal.propTypes = {
  /**
   * modal 창의 상태
   */
  status: PropTypes.bool.isRequired,
  /**
   * modal창을 닫는 function
   */
  onClose: PropTypes.func,
  /**
   * footer의 내용
   */
  footerContent: PropTypes.object,
  /**
   * body의 내용
   */
  bodyContent: PropTypes.object,
  /**
   * header의 내용
   */
  headerContent: PropTypes.object,
};
