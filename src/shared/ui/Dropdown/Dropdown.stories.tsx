import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { Button } from '../Button/Button';

export default {
  title: 'shared/Dropdown',
  contaent: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'a',
    },
    {
      content: 'b',
    },
    {
      content: 'c',
    },
  ],
};
