import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybookImage.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const CardWithData = Template.bind({});
CardWithData.args = {
  data: {
    firstName: 'Viki',
    lastName: 'Afitova',
    age: 37,
    currency: Currency.BYN,
    country: Country.Belarus,
    city: 'Minsk',
    username: 'admin',
    avatar,
  },
};

export const Error = Template.bind({});
Error.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
