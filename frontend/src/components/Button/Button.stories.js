import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  children: 'Button Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button Test',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button Test',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Button Test',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button Test',
};

export const Round = Template.bind({});
Round.args = {
  size: 'medium',
  round: true,
  children: 'Button Test',
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  size: 'medium',
  round: true,
  children: 'Button Test',
  width: '100%',
};
