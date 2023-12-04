import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SortArticle, SortArticleProps } from './SortArticle';

export default {
  title: 'features/Article/SortArticle',
  contaent: SortArticle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SortArticle>;

const Template: ComponentStory<typeof SortArticle> = (args: SortArticleProps) => <SortArticle {...args} />;

export const Default = Template.bind({});
Default.args = {};
