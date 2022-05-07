import React from 'react';
import { Button } from '../../stories/Button/Button';
import Input from '../../stories/Input/Input';
import PasswordInput from '../../stories/Input/PasswordInput';
import * as Style from './RegisterCss';

export default function Register() {
  return (
    <Style.RegisterForm>
      <h2>회원가입</h2>
      <h4>성장이 목마를 때, 인프런</h4>
      <Input type="email" placeholder="example@inflab.com" label="이메일" />
      <PasswordInput placeholder="******" label="비밀번호" />
      <PasswordInput placeholder="******" label="비밀번호 확인" />
      <Button color="primary" size="maxWidth" round="round">가입하기</Button>
    </Style.RegisterForm>
  );
}
