import React, { useState } from 'react';
import { Button } from '../../stories/Button/Button';
import { Modal } from '../../stories/Modal/Modal';
import { SocialAuthButton } from '../../stories/SocialAuthButton/SocialAuthButton';
import Input from '../../stories/Input/Input';
import PasswordInput from '../../stories/Input/PasswordInput';

function Main() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} onClose={() => { setOpen(false); }} showCloseButton>
        <Modal.Header>
          <h2>로그인</h2>
        </Modal.Header>
        <Modal.Content>
          <Input
            type="email"
            label="이메일"
            placeholder="이메일"
          />
          <PasswordInput
            label="비밀번호"
            placeholder="비밀번호"
          />
          <Button
            size="maxWidth"
            round="round"
          >
            로그인
          </Button>
        </Modal.Content>
      </Modal>
      <Button round="round" onClick={() => { setOpen(true); }}>로그인</Button>
      <hr />
      <form style={{ width: '500px' }}>
        <h2>회원가입</h2>
        <Input type="email" placeholder="example@inflab.com" label="이메일" />
        <PasswordInput placeholder="******" label="비밀번호" />
        <PasswordInput placeholder="******" label="비밀번호 확인" />
        <Button color="primary" size="maxWidth" round="round">로그인</Button>
      </form>
      <SocialAuthButton icon="github" />
      <SocialAuthButton icon="apple" />
      <SocialAuthButton icon="google" />
      <SocialAuthButton icon="facebook" />
      <SocialAuthButton icon="kakaotalk" />
    </>
  );
}

export default Main;
