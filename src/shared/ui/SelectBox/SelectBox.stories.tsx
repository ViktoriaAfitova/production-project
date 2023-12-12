import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectBox, SelectBoxProps } from './SelectBox';

export default {
  title: 'shared/SelectBox',
  contaent: SelectBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args: SelectBoxProps) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
};
