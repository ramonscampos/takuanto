import { Drink } from 'interfaces/Drink';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  BottleAvatar,
  Content,
  Description,
  Row,
  Volume,
  Price,
  EditImage,
} from './styles';

interface DrinkCardProps extends TouchableOpacityProps {
  drink: Drink;
}

export function DrinkCard({ drink, ...rest }: DrinkCardProps): JSX.Element {
  return (
    <Container {...rest}>
      <BottleAvatar />
      <Content>
        <Description>{drink.description}</Description>
        <Row>
          <Volume>{drink.volume}ml</Volume>
          <Price>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(drink.price)}
          </Price>
        </Row>
      </Content>
      <EditImage />
    </Container>
  );
}
