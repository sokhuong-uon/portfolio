import type { Meta, StoryObj } from '@storybook/react';
import { SubMenuCard } from './sub-menu-card';

const meta: Meta<typeof SubMenuCard> = {
  component: SubMenuCard,
  title: 'SubMenuCard',
};
export default meta;
type Story = StoryObj<typeof SubMenuCard>;

export const Primary: Story = {
  args: {
    title: 'HTML',
  },
};
