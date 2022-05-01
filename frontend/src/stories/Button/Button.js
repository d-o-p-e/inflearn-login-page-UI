import PropTypes from 'prop-types';
import * as Style from './buttonCss';

export function Button({ color, children, size, round, ...props }) {
  return (
    <Style.StoryBookButton color={color} size={size} round={round} {...props}>
      {children}
    </Style.StoryBookButton>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['default', 'wide']),
  round: PropTypes.oneOf(['round', 'rounder']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: 'primary',
  size: 'default',
  round: 'none',
  onClick: undefined,
};
