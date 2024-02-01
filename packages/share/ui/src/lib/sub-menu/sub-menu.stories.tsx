import type { Meta, StoryObj } from '@storybook/react';
import { SubMenu } from './sub-menu';

const meta: Meta<typeof SubMenu> = {
  component: SubMenu,
  title: 'SubMenu',
};
export default meta;
type Story = StoryObj<typeof SubMenu>;

export const Primary: Story = {
  args: {},
};
