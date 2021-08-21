import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from 'pages/Start';
import Home from 'pages/Home';
import Drink from 'pages/Drink';
import Result from 'pages/Result';
import { RootStackParamList } from './Types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Start"
  >
    <Stack.Screen name="Start" component={Start} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Drink" component={Drink} />
    <Stack.Screen name="Result" component={Result} />
  </Stack.Navigator>
);

export default AppRoutes;
