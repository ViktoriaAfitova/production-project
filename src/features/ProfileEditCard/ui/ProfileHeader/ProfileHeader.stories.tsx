import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileHeader, ProfileHeaderProps } from './ProfileHeader';

export default {
  title: 'features/ProfileHeader/ProfileHeader',
  contaent: ProfileHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileHeader>;

const Template: ComponentStory<typeof ProfileHeader> = (args: ProfileHeaderProps) => <ProfileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
