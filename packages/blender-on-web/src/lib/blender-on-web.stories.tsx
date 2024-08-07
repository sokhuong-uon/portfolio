import type { Meta, StoryObj } from '@storybook/react';
import { BlenderOnWeb } from './blender-on-web';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BlenderOnWeb> = {
  component: BlenderOnWeb,
  title: 'BlenderOnWeb',
};
export default meta;
type Story = StoryObj<typeof BlenderOnWeb>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BlenderOnWeb!/gi)).toBeTruthy();
  },
};
