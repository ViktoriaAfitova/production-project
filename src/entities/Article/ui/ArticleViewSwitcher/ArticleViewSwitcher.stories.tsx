import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewSwitcher, ArticleViewSwitcherProps } from './ArticleViewSwitcher';

export default {
  title: 'entities/Article/ArticleViewSwitcher',
  contaent: ArticleViewSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args: ArticleViewSwitcherProps) => <ArticleViewSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
