import React from 'react';

import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      options: ['email', 'password', 'default'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <Input {...args} />;
}

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: '이메일을 입력해 주세요',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: '비밀번호를 입력해 주세요',
};

export const Title = Template.bind({});
Title.args = {
  title: '비밀번호',
  type: 'password',
  placeholder: '비밀번호를 입력해 주세요',
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  title: '비밀번호',
  type: 'password',
  placeholder: '비밀번호를 입력해 주세요',
  errorMessage: '비밀번호가 다릅니다.',
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  type: 'default',
  width: '100%',
  placeholder: '100% 입력창',
};
