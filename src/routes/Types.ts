import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Drink } from 'interfaces/Drink';

export type RootStackParamList = {
  Start: undefined;
  Home: undefined;
  Drink: { drink: Drink } | undefined;
  Result: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type DrinkScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Drink'
>;

export type DrinkScreenRouteProp = RouteProp<RootStackParamList, 'Drink'>;
