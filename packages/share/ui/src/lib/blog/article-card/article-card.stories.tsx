import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './article-card';

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  title: 'Blog/ArticleCard',
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    title: 'This is Title',
  },
};
