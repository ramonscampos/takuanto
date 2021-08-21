import React from 'react';
import { StyleProp, TextInput, TextInputProps, ViewStyle } from 'react-native';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import { useTheme } from 'styled-components';
import {
  Container,
  TextInput as TI,
  MaskedInput,
  CurrencyInput,
} from './styles';

export type CustomTextInputProps = Omit<TextInputProps, 'value'>;

interface InputProps extends CustomTextInputProps {
  type?: string | TextInputMaskTypeProp;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  mask?: string;
  value: number | string | null;
  unit?: string;
  onChangeValue?: (value: number) => void;
}

export const Input = React.forwardRef<TextInput | TextInputMask, InputProps>(
  (props: InputProps, ref: React.Ref<TextInput | TextInputMask>) => {
    const theme = useTheme();
    if (props.type === 'currency') {
      return (
        <Container style={props.style}>
          <CurrencyInput
            {...props}
            placeholderTextColor={theme.colors.textColor}
            ref={ref as React.Ref<TextInput>}
            delimiter="."
            separator=","
            style={props.inputStyle}
            value={props.value ? Number(props.value) : null}
          />
        </Container>
      );
    }

    if (props.type === 'text') {
      return (
        <Container style={props.style}>
          <TI
            {...props}
            placeholderTextColor={theme.colors.textColor}
            ref={ref as React.Ref<TextInput>}
            style={props.inputStyle}
            value={props.value ? String(props.value) : null}
          />
        </Container>
      );
    }

    return (
      <Container style={props.style}>
        <MaskedInput
          {...props}
          placeholderTextColor={theme.colors.textColor}
          ref={ref as React.Ref<TextInputMask>}
          type={props.type as TextInputMaskTypeProp}
          style={props.inputStyle}
          options={{ mask: props.mask }}
          value={props.value ? String(props.value) : null}
        />
      </Container>
    );
  },
);

Input.defaultProps = {
  type: 'text',
};
