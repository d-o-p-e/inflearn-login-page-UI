import React from 'react';

import { SocialAuthButton } from './SocialAuthButton';

export default {
  title: 'Components/SocialAuthButton',
  component: SocialAuthButton,
  argTypes: {
  },
};

function Template(args) {
  return <SocialAuthButton {...args} />;
}

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
  icon: 'github',
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  size: 'medium',
  icon: 'github',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: 'large',
  icon: 'github',
};

export const AppleButton = Template.bind({});
AppleButton.args = {
  icon: 'apple',
};

export const FacebookButton = Template.bind({});
FacebookButton.args = {
  icon: 'facebook',
};

export const googleButton = Template.bind({});
googleButton.args = {
  icon: 'google',
};

export const kakaotalkButton = Template.bind({});
kakaotalkButton.args = {
  icon: 'kakaotalk',
};

export const GithubButton = Template.bind({});
GithubButton.args = {
  icon: 'github',
};
