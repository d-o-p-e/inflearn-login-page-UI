import React from 'react';
import PasswordInput from './PasswordInput';

export default {
  title: 'Components/Input/PasswordInput',
  component: PasswordInput,
  argTypes: {
    status: {
      options: ['default', 'error', 'success'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <PasswordInput {...args} />;
}

export const PasswordInputStory = Template.bind({});
PasswordInputStory.args = {
  type: 'password',
  label: '비밀번호',
  placeholder: '비밀번호',
};

export const ErrorPasswordInputStory = Template.bind({});
ErrorPasswordInputStory.args = {
  type: 'password',
  label: '비밀번호',
  placeholder: '비밀번호',
  status: 'error',
  message: '불가능한 비밀번호입니다.',
};

export const SuccessPasswordStory = Template.bind({});
SuccessPasswordStory.args = {
  type: 'password',
  label: '비밀번호',
  placeholder: '비밀번호',
  status: 'success',
  message: '사용가능한 비밀번호입니다.',
};