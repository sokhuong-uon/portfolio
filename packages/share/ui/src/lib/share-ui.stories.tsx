import type { Meta, StoryObj } from '@storybook/react';
import { ShareUi } from './share-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShareUi> = {
  component: ShareUi,
  title: 'ShareUi',
};
export default meta;
type Story = StoryObj<typeof ShareUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ShareUi!/gi)).toBeTruthy();
  },
};
