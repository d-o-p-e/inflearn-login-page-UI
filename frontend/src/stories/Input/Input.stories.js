import React from 'react';
import Input from './Input';

export default {
  title: 'components/Input/Input',
  component: Input,
  argTypes: {
    status: {
      options: ['default', 'error', 'success'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <Input {...args} />;
}

export const EmailInputStory = Template.bind({});
EmailInputStory.args = {
  type: 'email',
  placeholder: '이메일',
};

export const ErrorInputStory = Template.bind({});
ErrorInputStory.args = {
  type: 'email',
  placeholder: '이메일',
  status: 'error',
  message: '불가능한 이메일입니다.',
};

export const SuccessInputStory = Template.bind({});
SuccessInputStory.args = {
  type: 'email',
  placeholder: '이메일',
  status: 'success',
  message: '사용가능한 이메일입니다.',
};
