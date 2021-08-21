import React, { useCallback, useState, createRef } from 'react';

import { Modal } from 'components/Modal';
import { useDrink } from 'hooks/drinks';
import { DrinkScreenNavigationProp, DrinkScreenRouteProp } from 'routes/Types';
import { TextInput } from 'react-native';
import { TextInputMask, TextInputMaskMethods } from 'react-native-masked-text';
import {
  Container,
  HeaderContent,
  BackButton,
  BackSymbol,
  Title,
  Content,
  InsertButton,
  RemoveButton,
  Description,
  Volume,
  Price,
  BottleIcon,
  TrashIcon,
  ButtonsContainer,
} from './styles';

interface DrinkProps {
  navigation: DrinkScreenNavigationProp;
  route: DrinkScreenRouteProp;
}

type InputMask = TextInputMask & TextInputMaskMethods;

function Drink({ navigation, route }: DrinkProps): JSX.Element {
  const drink = route.params?.drink;
  const [description, setDescription] = useState(drink?.description || '');
  const [volume, setVolume] = useState(drink?.volume || '');
  const [price, setPrice] = useState(drink?.price || '');
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const { drinks, addDrink, updateDrink, removeDrink } = useDrink();

  const descriptionRef = createRef<TextInput>();
  const volumeRef = createRef<InputMask>();
  const priceRef = createRef<TextInput>();

  const handleInsert = useCallback(() => {
    if (!description || !volume || !price) {
      setValidationMessage(
        'O preenchimento de todos os campos são obrigatórios.',
      );
      setModalVisible(true);
      return;
    }

    if (drinks.find(x => x.description === description && x.price === price)) {
      setValidationMessage('Este produto já foi inserido.');
      setModalVisible(true);
      return;
    }

    if (!drink) {
      addDrink({ description, volume: Number(volume), price: Number(price) });
    } else {
      updateDrink({
        id: drink.id,
        description,
        volume: Number(volume),
        price: Number(price),
      });
    }
    navigation.goBack();
  }, [
    navigation,
    addDrink,
    description,
    volume,
    price,
    drink,
    updateDrink,
    drinks,
  ]);

  const handleRemove = useCallback(() => {
    removeDrink(drink);
    navigation.goBack();
  }, [navigation, drink, removeDrink]);

  return (
    <Container>
      <HeaderContent>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackSymbol>{'<'}</BackSymbol>
        </BackButton>
        <Title>{drink ? 'Editar' : 'Adicionar'} bebida</Title>
      </HeaderContent>

      <Content>
        <Description
          ref={descriptionRef}
          placeholder="Descrição"
          value={description}
          keyboardType="default"
          returnKeyLabel="Próximo"
          returnKeyType="next"
          onChangeText={value => setDescription(value)}
          onSubmitEditing={() => {
            volumeRef.current?.getElement().focus();
          }}
        />

        <Volume
          ref={volumeRef}
          type="custom"
          mask="9999"
          maxLength={4}
          placeholder="Volume (ml)"
          value={volume}
          keyboardType="number-pad"
          returnKeyLabel="Próximo"
          returnKeyType="next"
          onChangeText={value => setVolume(value)}
          onSubmitEditing={() => priceRef.current?.focus()}
        />

        <Price
          ref={priceRef}
          type="currency"
          placeholder="Preço"
          value={price}
          unit="R$ "
          maxLength={9}
          keyboardType="number-pad"
          returnKeyLabel="Salvar"
          returnKeyType="done"
          onChangeValue={value => setPrice(value)}
          onSubmitEditing={handleInsert}
        />

        <ButtonsContainer>
          <InsertButton Icon={BottleIcon} onPress={handleInsert}>
            {drink ? 'Salvar bebida' : 'Adicionar bebida'}
          </InsertButton>
          <RemoveButton Icon={TrashIcon} onPress={handleRemove}>
            Remover
          </RemoveButton>
        </ButtonsContainer>
      </Content>

      <Modal
        visible={modalVisible}
        close={() => {
          setModalVisible(false);
        }}
        title="Ops!"
        text={validationMessage}
      />
    </Container>
  );
}

export default Drink;
