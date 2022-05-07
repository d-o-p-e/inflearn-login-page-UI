import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../stories/Button/Button';
import { Modal } from '../../stories/Modal/Modal';
import Input from '../../stories/Input/Input';
import PasswordInput from '../../stories/Input/PasswordInput';

function Main() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => { setOpen(false); }}>
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
      <Link to="/register">
        <Button round="round">회원가입</Button>
      </Link>
    </>
  );
}

export default Main;
