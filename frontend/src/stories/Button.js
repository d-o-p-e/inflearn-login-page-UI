import PropTypes from 'prop-types';
import * as Style from './buttonCss';

/**
 * Primary UI component for user interaction
 */
export function Button({ color, children, size, ...props }) {
  return (
    <Style.StoryBookButton color={color} size={size} {...props}>
      {children}
    </Style.StoryBookButton>
  );
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  color: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: 'primary',
  size: 'medium',
  onClick: undefined,
};
