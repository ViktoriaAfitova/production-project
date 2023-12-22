import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectBox, SelectBoxProps } from './SelectBox';

export default {
  title: 'shared/SelectBox',
  contaent: SelectBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}>Story</div>,
  ],
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args: SelectBoxProps) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { content: '11111', value: '111111111' },
    { content: '22222222', value: '22222' },
    { content: '3333', value: '333333333333' },
  ],
};

export const TopLeftDirection = Template.bind({});
TopLeftDirection.args = {
  direction: 'top left',
  value: 'content',
  items: [
    { content: '11111', value: '111111111' },
    { content: '22222222', value: '22222' },
    { content: '3333', value: '333333333333' },
  ],
};

export const TopRightDirection = Template.bind({});
TopRightDirection.args = {
  direction: 'top right',
  value: 'content',
  items: [
    { content: '11111', value: '111111111' },
    { content: '22222222', value: '22222' },
    { content: '3333', value: '333333333333' },
  ],
};

export const BottomLeftDirection = Template.bind({});
BottomLeftDirection.args = {
  direction: 'bottom left',
  value: 'content',
  items: [
    { content: '11111', value: '111111111' },
    { content: '22222222', value: '22222' },
    { content: '3333', value: '333333333333' },
  ],
};

export const BottomRightDirection = Template.bind({});
BottomRightDirection.args = {
  direction: 'bottom right',
  value: 'content',
  items: [
    { content: '11111', value: '111111111' },
    { content: '22222222', value: '22222' },
    { content: '3333', value: '333333333333' },
  ],
};
