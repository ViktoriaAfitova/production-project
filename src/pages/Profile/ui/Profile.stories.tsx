import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybookImage.jpg';
import ProfilePage from './Profile';

export default {
  title: 'pages/Profile',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      firstName: 'Viki',
      lastName: 'Afitova',
      age: 37,
      currency: Currency.BYN,
      country: Country.Belarus,
      city: 'Minsk',
      username: 'admin',
      avatar,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      firstName: 'Viki',
      lastName: 'Afitova',
      age: 37,
      currency: Currency.BYN,
      country: Country.Belarus,
      city: 'Minsk',
      username: 'admin',
      avatar,
    },
  },
})];
