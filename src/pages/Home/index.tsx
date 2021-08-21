import React from 'react';

import { useDrink } from 'hooks/drinks';
import { DrinkCard } from 'components/DrinkCard';
import { HomeScreenNavigationProp } from 'routes/Types';

import {
  Container,
  ScrollView,
  Logo,
  HomeImage,
  NewDrinkButton,
  BottleIcon,
  Footer,
  CompareButton,
  CompareIcon,
  ClearLinkButton,
  ClearLinkText,
} from './styles';

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

function Home({ navigation }: HomeProps): JSX.Element {
  const { drinks, reset } = useDrink();

  return (
    <Container>
      <ScrollView>
        <Logo />
        <HomeImage />

        <NewDrinkButton
          Icon={BottleIcon}
          type="inverse"
          onPress={() => {
            navigation.navigate('Drink');
          }}
        >
          + Adicionar bebida
        </NewDrinkButton>

        {drinks.map(drink => (
          <DrinkCard
            key={drink.id}
            onPress={() => navigation.navigate('Drink', { drink })}
            drink={drink}
          />
        ))}
      </ScrollView>
      <Footer>
        <CompareButton
          disabled={drinks.length < 2}
          Icon={CompareIcon}
          onPress={() => {
            navigation.navigate('Result');
          }}
        >
          Comparar!
        </CompareButton>

        <ClearLinkButton
          disabled={!drinks.length}
          onPress={() => {
            reset();
          }}
        >
          <ClearLinkText disabled={!drinks.length}>Limpar tudo</ClearLinkText>
        </ClearLinkButton>
      </Footer>
    </Container>
  );
}

export default Home;
