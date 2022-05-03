import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as Style from './inputCss';

const PasswordInput = forwardRef(
  ({ type, label, placeholder, status = 'default', message, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Style.InputWrapper>
        {label && <Style.Label>{label}</Style.Label>}
        <Style.Input
          type={showPassword ? 'text' : 'password'}
          status={status}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <Style.EyeIcon
          onClick={() => { setShowPassword(!showPassword); }}
          icon={showPassword ? faEyeSlash : faEye}
        />
        {message && <Style.Message status={status}>{message}</Style.Message>}
      </Style.InputWrapper>
    );
  },
);

PasswordInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['default', 'success', 'error']),
  message: PropTypes.string,
};

export default PasswordInput;
