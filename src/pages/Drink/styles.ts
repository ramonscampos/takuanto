import styled from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Button from 'components/Button';
import { Input } from 'components/Input';
import BottleIconSrc from 'assets/images/bottle-icon.png';
import TrashIconSrc from 'assets/images/trash-icon.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const HeaderContent = styled.View`
  margin-top: 10%;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackSymbol = styled.Text`
  color: #3b4c68;
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-right: 20px;
  top: -5px;
`;

export const Title = styled.Text`
  color: #3b4c68;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Content = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'always',
  contentContainerStyle: {
    flex: 1,
    paddingTop: 50,
  },
})`
  flex: 1;
`;

export const InsertButton = styled(Button).attrs(({ theme }) => ({
  textStyle: {
    color: theme.colors.secondary,
  },
}))`
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const RemoveButton = styled(Button)`
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.danger};
  width: 60%;
  align-self: center;
  height: 40px;
`;

export const Description = styled(Input)``;

export const Volume = styled(Input)`
  margin-top: 20px;
`;

export const Price = styled(Input)`
  margin-top: 20px;
`;

export const ButtonsContainer = styled.View`
  margin-top: auto;
  padding-bottom: ${ifIphoneX('40px', '20px')};
`;

export const BottleIcon = styled(SImage).attrs({
  source: BottleIconSrc,
  width: 30,
})`
  margin-right: 10px;
`;

export const TrashIcon = styled(SImage).attrs({
  source: TrashIconSrc,
  width: 20,
})`
  margin-right: 10px;
`;
