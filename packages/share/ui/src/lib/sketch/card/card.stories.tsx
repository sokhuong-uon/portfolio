import type { Meta, StoryObj } from '@storybook/react';
import { SketchCard } from './card';

const meta: Meta<typeof SketchCard> = {
  component: SketchCard,
  title: 'Sketch/Card',
};
export default meta;
type Story = StoryObj<typeof SketchCard>;

export const Primary: Story = {
  args: {
    children: 'a',
    title: 'Equire-Cubemap',
  },
};
