import { Flex, FlexProps } from '../Flex/Flex';

type VerticalStackProps = Omit<FlexProps, 'direction'>

export const VerticalStack = (props: VerticalStackProps) => {
  const { align = 'start' } = props;
  return (
    <Flex
      direction="column"
      align={align}
      {...props}
    />
  );
};
