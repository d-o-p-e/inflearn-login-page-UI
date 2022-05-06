import React, { useState } from 'react';
import styled from 'styled-components';
import { useArgs } from '@storybook/client-api';
import { Modal } from './Modal';
import Input from '../Input/Input';
import PasswordInput from '../Input/PasswordInput';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
  },
};

function Template(args) {
  const [{ isOpen }, setOpen] = useArgs();
  const ModalOpen = () => {
    setOpen({ isOpen: true });
  };
  const ModalClose = () => {
    setOpen({ isOpen: false });
  };
  return (
    <div>
      <Button onClick={ModalOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={ModalClose} {...args} />
    </div>
  );
}

const Header = styled.h2`
  text-align: center;
`;

export const LoginModal = Template.bind({});
LoginModal.args = {
  isOpen: true,
  showCloseButton: true,
  children: (
    <>
      <Modal.Header>
        <Header>로그인</Header>
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
    </>
  ),
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  isOpen: true,
};
