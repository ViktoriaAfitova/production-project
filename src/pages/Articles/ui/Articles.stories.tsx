import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesPage from './Articles';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
