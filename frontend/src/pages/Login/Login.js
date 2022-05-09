import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Modal } from '../../components/modal/Modal';
import { SocialLoginButton } from '../../components/SocialLoginButton/SocialLoginButton';

import { ReactComponent as Inflearn } from '../../svg/inflearn.svg';
import { FindPassword, InflearnLogo, LoginForm, MoreAction, SignUp, SocialLogin, SocialLoginButtons } from './LoginStyle';

function Login() {
  const [loginStatus, setLoginStatus] = useState(false);
  const toggleLoginModal = () => {
    setLoginStatus((pre) => !pre);
  };
  return (
    <>
      <Button onClick={toggleLoginModal}>로그인하기</Button>
      <Modal
        onClose={toggleLoginModal}
        status={loginStatus}
        footerContent={(
          <SocialLogin>
            <hr />
            <span>간편로그인</span>
            <SocialLoginButtons>
              <SocialLoginButton social="kakao" />
              <SocialLoginButton social="google" />
              <SocialLoginButton social="github" />
              <SocialLoginButton social="facebook" />
              <SocialLoginButton social="apple" />
            </SocialLoginButtons>
          </SocialLogin>
      )}
      >
        <InflearnLogo>
          <Inflearn fill="#00C471" />
        </InflearnLogo>
        <LoginForm>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button>로그인</Button>
        </LoginForm>
        <MoreAction>
          <FindPassword>비밀번호 찾기</FindPassword>
          <SignUp>회원가입</SignUp>
        </MoreAction>
      </Modal>
    </>
  );
}

export default Login;
