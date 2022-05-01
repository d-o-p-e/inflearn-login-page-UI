import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import * as Style from './Style';

/**
 * Primary UI component for user interaction
 */

export function Input({ title, width, type, errorMessage, ...props }) {
  const inputRef = useRef();
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswordType = (e) => {
    if (passwordShow) {
      inputRef.current.type = 'password';
    } else {
      inputRef.current.type = 'text';
    }
    setPasswordShow((pre) => !pre);
  };
  return (
    <Style.Section>
      {title && <Style.Title>{title}</Style.Title>}
      <Style.Input width={width} type={type} ref={inputRef} {...props} />
      {type === 'password' && <Style.PasswordIcon icon={passwordShow ? faEyeSlash : faEye} onClick={togglePasswordType} />}
      {errorMessage && <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>}
    </Style.Section>
  );
}

Input.propTypes = {
  /**
   * input의 넓이를 설정한다
   */
  width: PropTypes.string,
  /**
   * input의 타입을 설정한다
   */
  type: PropTypes.oneOf(['email', 'password', 'default']),
  /**
   * title 메세지를 설정한다.
   */
  title: PropTypes.string,
  /**
   * error 메세지를 설정한다.
   */
  errorMessage: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Input.defaultProps = {
  type: 'default',
  width: '300px',
  title: '',
};
