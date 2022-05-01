import React from 'react';

import { SocialLoginButton } from './SocialLoginButton';

export default {
  title: 'SocialLoginButton',
  component: SocialLoginButton,
  argTypes: {
    social: {
      options: ['google', 'facebook', 'apple', 'kakao', 'github'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <SocialLoginButton {...args} />;
}

export const Google = Template.bind({});
Google.args = {
  social: 'google',
};

export const Facebook = Template.bind({});
Facebook.args = {
  social: 'facebook',
};
export const Kakao = Template.bind({});
Kakao.args = {
  social: 'kakao',
};
export const Github = Template.bind({});
Github.args = {
  social: 'github',
};
export const Apple = Template.bind({});
Apple.args = {
  social: 'apple',
};
