import styled from 'styled-components/native';
import Button from 'components/Button';
import { BlurView } from '@react-native-community/blur';
import { Modal } from 'react-native';

export const ModalView = styled(Modal)`
  background: red;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  align-items: center;
  border-color: ${({ theme }) => theme.colors.light};
  border-bottom-width: 1px;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 22px;
`;

export const Backdrop = styled(BlurView).attrs({
  blurAmount: 1,
  blurType: 'xlight',
  reducedTransparencyFallbackColor: 'black',
})`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background: white;
  width: 80%;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  elevation: 8;
  padding: 20px;
  position: relative;
`;

export const TextContent = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  text-align: center;
`;

export const OKButton = styled(Button)``;
