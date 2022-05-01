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
  size: PropTypes.oneOf(['default', 'wide']),
  round: PropTypes.oneOf(['none', 'round', 'rounder']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'primary',
  size: 'default',
  round: 'none',
  onClick: undefined,
};
