import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImage from './storybookImage.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const ImageDefault = Template.bind({});
ImageDefault.args = {
  size: 150,
  src: AvatarImage,
};

export const ImageSmall = Template.bind({});
ImageSmall.args = {
  size: 50,
  src: AvatarImage,
};
