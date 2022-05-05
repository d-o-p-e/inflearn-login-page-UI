import PropTypes from 'prop-types';
import * as Style from './SocialAuthButtonCss';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Apple } from '../../assets/apple.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Kakaotalk } from '../../assets/kakaotalk.svg';

const social = {
  github: <Github width="100%" height="100%" />,
  apple: <Apple width="100%" height="100%" />,
  facebook: <Facebook width="100%" height="100%" />,
  google: <Google width="100%" height="100%" />,
  kakaotalk: <Kakaotalk width="100%" height="100%" />,
};
export function SocialAuthButton({ size, icon, ...props }) {
  return (
    <Style.SocialAuthButton size={size} icon={icon} {...props}>
      {social[icon]}
    </Style.SocialAuthButton>
  );
}

SocialAuthButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.oneOf(['github', 'apple', 'facebook', 'google', 'kakaotalk']),
};

SocialAuthButton.defaultProps = {
  size: 'medium',
};
