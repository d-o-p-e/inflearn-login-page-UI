import PropTypes from 'prop-types';
import * as Style from './Styles';
import { ReactComponent as GithubIcon } from '../../svg/github.svg';
import { ReactComponent as GoogleIcon } from '../../svg/google.svg';
import { ReactComponent as AppleIcon } from '../../svg/apple.svg';
import { ReactComponent as KakaoIcon } from '../../svg/kakao.svg';
import { ReactComponent as FacebookIcon } from '../../svg/facebook.svg';

const socialIcon = {
  github: <GithubIcon />,
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
  kakao: <KakaoIcon />,
  apple: <AppleIcon />,
};

export function SocialLoginButton({ social, ...props }) {
  return (
    <Style.SocialLoginButton social={social} {...props}>
      {socialIcon[social]}
    </Style.SocialLoginButton>
  );
}

SocialLoginButton.propTypes = {
  /**
   * 소셜 선택
   */
  social: PropTypes.oneOf(['google', 'facebook', 'apple', 'kakao', 'github']).isRequired,
  /**
   * 클릭 이벤트
   */
  onClick: PropTypes.func,
};

SocialLoginButton.defaultProps = {
};
