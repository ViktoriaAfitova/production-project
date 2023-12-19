import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from 'entities/Article';
import { ArticleRecommendations, ArticleRecommendationsProps } from './ArticleRecommendations';

export default {
  title: 'features/ArticleRecommendations/ArticleRecommendations',
  contaent: ArticleRecommendations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendations>;

const Template: ComponentStory<typeof ArticleRecommendations> = (args: ArticleRecommendationsProps) => <ArticleRecommendations {...args} />;

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  userId: { id: '1', username: 'admin' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'aaaaaaaaa',
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
