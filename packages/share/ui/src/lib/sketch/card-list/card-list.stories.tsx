import type { Meta, StoryObj } from '@storybook/react';
import { SketchCardList } from './card-list';
import { SketchCard } from '../card/card';

const meta: Meta<typeof SketchCardList> = {
  component: SketchCardList,
  title: 'Sketch/CardList',
};
export default meta;
type Story = StoryObj<typeof SketchCardList>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <SketchCard title="Equire-Cubemap">a</SketchCard>
        <SketchCard title="Glow Effect">b</SketchCard>
      </>
    ),
  },
};
