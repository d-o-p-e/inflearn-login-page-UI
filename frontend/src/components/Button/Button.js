import PropTypes from 'prop-types';
import * as Style from './styles';

/**
 * Primary UI component for user interaction
 */
export function Button({ children, color, round, size, width, ...props }) {
  return (
    <Style.StoryBookButton color={color} size={size} round={round} width={width} {...props}>
      {children}
    </Style.StoryBookButton>
  );
}

Button.propTypes = {
  /**
   * 버튼의 text 내용
   */
  children: PropTypes.string.isRequired,
  /**
   * 기본색 선택
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * 버튼 모서리의 둥근 모양 여부
   */
  round: PropTypes.bool,
  /**
   * 버튼 크기 선택
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * 버튼의 넓이를 고정하는 값
   */
  width: PropTypes.string,
  /**
   * 클릭 이벤트
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'primary',
  round: false,
  size: 'medium',
  onClick: undefined,
};
