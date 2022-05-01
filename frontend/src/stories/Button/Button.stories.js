import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'wide'],
      control: { type: 'radio' },
    },
    round: {
      options: ['none', 'round', 'rounder'],
      control: { type: 'radio' },
    },
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Button',
  children: 'Button Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  color: 'secondary',
};

export const wide = Template.bind({});
wide.args = {
  size: 'wide',
  label: 'Button',
  children: 'Button Test',
};

export const Round = Template.bind({});
Round.args = {
  round: 'round',
  label: 'Button',
  children: 'Button Test',
};

export const Rounder = Template.bind({});
Rounder.args = {
  ...Round.args,
  round: 'rounder',
};
