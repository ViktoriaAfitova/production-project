import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments, ArticleDetailsCommentsProps } from './ArticleDetailsComments';

export default {
  title: 'pages/ArticleDetailsComments/ArticleDetailsComments',
  contaent: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args: ArticleDetailsCommentsProps) => <ArticleDetailsComments {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
};
Default.decorators = [StoreDecorator({})];
