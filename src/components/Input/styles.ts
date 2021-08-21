import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import CI from 'react-native-currency-input';
import { TextInput as TI } from 'react-native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.lighter};
  border-radius: 8px;
`;

export const TextInput = styled(TI)`
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  height: 55px;
  border-radius: 8px;
  padding: 0 10px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const MaskedInput = styled(TextInputMask)`
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  height: 55px;
  border-radius: 8px;
  padding: 0 10px;
`;

export const CurrencyInput = styled(CI)`
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  height: 55px;
  border-radius: 8px;
  padding: 0 10px;
`;
