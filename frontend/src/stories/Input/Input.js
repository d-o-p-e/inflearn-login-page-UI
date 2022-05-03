import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import * as Style from './inputCss';

const Input = forwardRef(
  ({ type, label, placeholder, status = 'default', message, ...props }, ref) => {
    const hasMessage = message != null && message !== undefined;
    const hasLabel = label != null && label !== undefined;
    return (
      <Style.InputWrapper>
        {hasLabel && <Style.Label>{label}</Style.Label>}
        <Style.Input
          type={type}
          status={status}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {hasMessage && <Style.Message status={status}>{message}</Style.Message>}
      </Style.InputWrapper>
    );
  },
);

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['default', 'success', 'error']),
  message: PropTypes.string,
};

export default Input;
