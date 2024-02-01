import { Meta, StoryObj } from '@storybook/react';
import NavigationBar from './navigation-bar';

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  title: 'NaviagationBar',
};
export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Primary: Story = {
  args: {},
};
