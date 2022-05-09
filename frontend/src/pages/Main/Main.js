import React, { useState } from 'react';
import { Button } from '../../stories/Button/Button';
import { SocialAuthButton } from '../../stories/SocialAuthButton/SocialAuthButton';
import { Modal } from '../../stories/Modal/Modal';
import PasswordInput from '../../stories/Input/PasswordInput';
import { ReactComponent as Inflearn } from '../../assets/inflearnLogo.svg';
import * as Style from './MainCss';

export default function Main() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => { setOpen(false); }}>
        <Modal.Header>
          <Inflearn width="40%" fill="#1dc078" />
        </Modal.Header>
        <Modal.Content>
          <Style.EmailInput
            type="email"
            placeholder="이메일"
          />
          <PasswordInput placeholder="비밀번호" />
          <Button
            size="maxWidth"
            round="round"
          >
            로그인
          </Button>
          <Style.LinkAction>
            <Style.CustomLink to="/">
              비밀번호 찾기
            </Style.CustomLink>
            <span>|</span>
            <Style.CustomLink to="/register" content="|">
              회원가입
            </Style.CustomLink>
          </Style.LinkAction>
          <Style.Footer>
            <hr />
            <span>간편 로그인</span>
            <Style.SocialAuth>
              <SocialAuthButton icon="kakaotalk" />
              <SocialAuthButton icon="github" />
              <SocialAuthButton icon="google" />
              <SocialAuthButton icon="facebook" />
              <SocialAuthButton icon="apple" />
            </Style.SocialAuth>
          </Style.Footer>
        </Modal.Content>
      </Modal>
      <Button round="round" onClick={() => { setOpen(true); }}>로그인</Button>
      <Style.CustomLink to="/register">
        <Button round="round">회원가입</Button>
      </Style.CustomLink>
    </>
  );
}
