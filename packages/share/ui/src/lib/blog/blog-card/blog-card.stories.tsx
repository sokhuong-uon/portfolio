import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './blog-card';

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
  title: 'Blog/BlogCard',
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Primary: Story = {
  args: {
    title: 'This is Title',
    subtitle:
      'Capturing highlight. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    imgUrl: 'https://source.unsplash.com/random',
  },
};
