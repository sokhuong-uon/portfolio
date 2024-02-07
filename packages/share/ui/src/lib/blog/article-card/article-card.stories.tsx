import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './article-card';

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  title: 'Blog/ArticleCard',
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Primary: Story = {
  args: {
    title: 'This is Title',
    subtitle:
      'Capturing highlight. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
};
