import styled, { css } from 'styled-components/native';
import SImage from 'react-native-scalable-image';
import Button from 'components/Button';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import LogoSrc from 'assets/images/logo.png';
import HomeImageSrc from 'assets/images/home.png';
import CompareIconSrc from 'assets/images/compare-icon.png';
import BottleIconSrc from 'assets/images/bottle-icon.png';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'always',
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 20,
  },
})``;

export const Logo = styled(SImage).attrs({
  source: LogoSrc,
})`
  margin-bottom: 40px;
`;

export const HomeImage = styled(SImage).attrs({
  source: HomeImageSrc,
})`
  margin-bottom: 20px;
`;

export const NewDrinkButton = styled(Button)`
  width: 90%;
  align-self: center;
`;

export const Footer = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding-top: 25px;
  height: ${ifIphoneX('150px', '130px')};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  elevation: 5;
  box-shadow: 0 0 5px black;
  z-index: 9;
`;

export const CompareButton = styled(Button)`
  width: 89%;
  align-self: center;
`;

export const CompareIcon = styled(SImage).attrs({
  source: CompareIconSrc,
})`
  margin-right: 10px;
  top: -4px;
`;

export const BottleIcon = styled(SImage).attrs({
  source: BottleIconSrc,
})`
  margin-right: 10px;
  top: -4px;
`;

export const ClearLinkButton = styled.TouchableOpacity``;

interface ClearLinkTextProps {
  disabled: boolean;
}

export const ClearLinkText = styled.Text<ClearLinkTextProps>`
  text-decoration: underline;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.secondary};

  ${props =>
    props.disabled &&
    css`
      color: ${({ theme }) => theme.colors.dark};
      text-decoration-color: ${({ theme }) => theme.colors.dark};
    `};
`;
