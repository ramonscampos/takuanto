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
} from './styles';

interface ResultCardProps extends TouchableOpacityProps {
  drink: Drink;
}

export function ResultCard({ drink, ...rest }: ResultCardProps): JSX.Element {
  return (
    <Container {...rest}>
      <BottleAvatar />
      <Content>
        <Description>{drink.description}</Description>
        <Row>
          <Volume>{drink.volume}ml</Volume>
        </Row>
      </Content>
      <Price>
        {`${new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(drink.pricePerLiter)}/Litro`}
      </Price>
    </Container>
  );
}
