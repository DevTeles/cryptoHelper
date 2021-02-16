import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import { LoadingOverlay } from './components/LoadingOverlay';
import Hooks from './hooks';
import Routes from './routes';

const src: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />
      <Hooks>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <LoadingOverlay />
      </Hooks>
    </>
  );
};

export default src;
