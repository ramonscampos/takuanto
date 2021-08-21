import styled from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import BottleAvatarSrc from 'assets/images/bottle-avatar.png';

export const Container = styled.TouchableOpacity`
  border: 1.5px solid #d7d7d777;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  height: 70px;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const BottleAvatar = styled(SImage).attrs({
  source: BottleAvatarSrc,
})``;

export const Content = styled.View`
  flex: 1;
  margin: 10px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
  top: 5px;
  font-size: 16px;
`;

export const Volume = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
  opacity: 0.5;
  margin-right: 10px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 18px;
`;
