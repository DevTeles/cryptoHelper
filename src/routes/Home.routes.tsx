import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';

import Discover from '../pages/Discover';
import TableCoins from '../pages/TableCoins';

const TabsNavigator = AnimatedTabBarNavigator();

const notActiveColor = '#6C7876';

const HomeRoutes: React.FC = () => {
  return (
    <TabsNavigator.Navigator
      tabBarOptions={{
        activeTintColor: '#00CC83',
        activeBackgroundColor: 'rgba(244, 156, 0, 0.2)',
        iactiveTintColor: '#00CC83 ',
      }}
      appearence={{
        tabBarBackground: '#1B1C21',
      }}
    >
      <TabsNavigator.Screen
        name="TableCoins"
        component={TableCoins}
        options={{
          tabBarIcon: ({ focused, color, size }: any) => {
            <FontAwesome5
              name="chart-area"
              size={size || 24}
              color={focused ? color : notActiveColor}
            />;
          },
        }}
      />
      <TabsNavigator.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused, color, size }: any) => {
            <FontAwesome5
              name="compass"
              size={size || 24}
              color={focused ? color : notActiveColor}
            />;
          },
        }}
      />
    </TabsNavigator.Navigator>
  );
};

export default HomeRoutes;
