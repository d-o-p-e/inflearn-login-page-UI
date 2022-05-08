import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import { Modal } from './Modal';

const ButtonWrapper = styled.div`
    display:flex;
    float:right;
    > * {
        margin-left:10px;
    }
`;

export default {
  title: 'Modal',
  component: Modal,
};

function Template(args) {
  return (
    <Modal {...args} />
  );
}

export const PasswordModal = Template.bind({});
PasswordModal.args = {
  status: true,
  title: '예약시 사용하신 비밀번호를 입력해주세요',
  children: (<Input type="password" width="100%" placeholder="비밀번호" />),
  footerContent: (
    <ButtonWrapper>
      <Button>취소</Button>
      <Button>확인</Button>
    </ButtonWrapper>
  ),
};

export const LongBodyModal = Template.bind({});
LongBodyModal.args = {
  status: true,
  title: 'Ipsum Lorem',
  children: (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industrys standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
    </p>),
};
