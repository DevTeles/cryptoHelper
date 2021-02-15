import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import Routes from './routes';

const src: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default src;
