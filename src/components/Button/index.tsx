import React from 'react';
import { TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';
import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  textStyle?: StyleProp<ViewStyle> | undefined;
  type?: 'default' | 'inverse';
  children: React.ReactNode;
  Icon?: React.ComponentType;
}

function Button({
  type = 'default',
  textStyle,
  children,
  Icon,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container type={type} {...rest}>
      {!!Icon && <Icon />}
      <Text style={textStyle} type={type}>
        {children}
      </Text>
    </Container>
  );
}

export default Button;
