import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './Home.routes';

const Dash = createStackNavigator();

const DasRoutes: React.FC = () => {
  return (
    <Dash.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Dash.Screen name="Home" component={Home} />
    </Dash.Navigator>
  );
};

export default DasRoutes;
