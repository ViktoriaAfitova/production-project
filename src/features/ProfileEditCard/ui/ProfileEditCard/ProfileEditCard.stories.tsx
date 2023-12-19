import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileEditCard, ProfileEditCardProps } from './ProfileEditCard';

export default {
  title: 'features/ProfileEditCard/ProfileEditCard',
  contaent: ProfileEditCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileEditCard>;

const Template: ComponentStory<typeof ProfileEditCard> = (args: ProfileEditCardProps) => <ProfileEditCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
