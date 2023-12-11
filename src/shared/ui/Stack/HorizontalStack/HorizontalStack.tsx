import { Flex, FlexProps } from '../Flex/Flex';

type HorizontalStackProps = Omit<FlexProps, 'direction'>

export const HorizontalStack = (props: HorizontalStackProps) => {
  return (
    <Flex direction="row" {...props} />
  );
};
