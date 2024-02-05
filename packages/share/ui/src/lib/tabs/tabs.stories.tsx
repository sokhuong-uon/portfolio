import type { Meta, StoryObj } from '@storybook/react';
import { SketchTabs } from './tabs';

const meta: Meta<typeof SketchTabs> = {
  component: SketchTabs,
  title: 'Sketch/Tabs',
};
export default meta;
type Story = StoryObj<typeof SketchTabs>;

export const Primary: Story = {
  args: {},
};
