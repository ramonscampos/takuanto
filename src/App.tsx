// import 'react-native-gestrure-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { useFonts } from 'expo-font';
import {
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { View } from 'react-native';
import Routes from 'routes';
import AppProvider from 'hooks';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <AppProvider>
      <View style={{ flex: 1 }}>
        <Routes />
        <StatusBar style="auto" />
      </View>
    </AppProvider>
  );
}
