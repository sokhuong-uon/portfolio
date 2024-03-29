import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Home',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home/gi)).toBeTruthy();
  },
};

export const Link: Story = {
  args: {
    children: 'Home',
    variant: 'link',
    dark: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home/gi)).toBeTruthy();
  },
};
