import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesFilter, ArticlesFilterProps } from './ArticlesFilter';

export default {
  title: 'pages/Article/ArticlesFilter',
  contaent: ArticlesFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesFilter>;

const Template: ComponentStory<typeof ArticlesFilter> = (args: ArticlesFilterProps) => <ArticlesFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};
