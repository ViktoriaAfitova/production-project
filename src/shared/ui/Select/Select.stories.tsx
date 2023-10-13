import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

export const SelectDefault = Template.bind({});
SelectDefault.args = {
  label: 'test',
  options: [
    { value: '1', content: 'point 1' },
    { value: '2', content: 'point 2' },
    { value: '3', content: 'point 3' },
  ],
};
