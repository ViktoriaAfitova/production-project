import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex, FlexProps } from './Flex';

export default {
  title: 'shared/Flex',
  contaent: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args: FlexProps) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  direction: 'column',
  gap: '4',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  direction: 'column',
  gap: '8',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  direction: 'column',
  gap: '16',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  direction: 'column',
  gap: '32',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
  direction: 'column',
  align: 'end',
  children: (
    <>
      <div>a</div>
      <div>b</div>
      <div>c</div>
      <div>d</div>
    </>
  ),
};
