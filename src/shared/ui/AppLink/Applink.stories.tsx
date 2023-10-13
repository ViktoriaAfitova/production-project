import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import { AppLink, AppLinkColor } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  color: AppLinkColor.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  color: AppLinkColor.Secondary,
};

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  color: AppLinkColor.Red,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  color: AppLinkColor.Primary,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  color: AppLinkColor.Secondary,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  color: AppLinkColor.Red,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
