import React from 'react';
import { ModalProps } from 'react-native';

import {
  ModalView,
  Backdrop,
  TitleContainer,
  Title,
  Container,
  Content,
  TextContent,
  Text,
  OKButton,
} from './styles';

interface CustomModalProps extends ModalProps {
  close: () => void;
  title: string;
  text: string;
}

export function Modal({
  close,
  title,
  text,
  ...rest
}: CustomModalProps): JSX.Element {
  return (
    <ModalView {...rest} animationType="slide" transparent>
      <Backdrop />
      <Container>
        <Content>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <TextContent>
            <Text>{text}</Text>
          </TextContent>
          <OKButton onPress={close}>OK</OKButton>
        </Content>
      </Container>
    </ModalView>
  );
}
