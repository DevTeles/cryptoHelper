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
        activeTintColor: '#181818',
        activeBackgroundColor: '#fff',
        iactiveTintColor: '#00CC83 ',
      }}
      appearence={{
        tabBarBackground: '#1B1C21',
        dotCornerRadius: 10,
      }}
    >
      <TabsNavigator.Screen
        name="TableCoins"
        component={TableCoins}
        options={{
          title: 'Cotações',
          tabBarIcon: ({ focused, color, size }: any) => (
            <FontAwesome5
              name="chart-area"
              size={size || 24}
              color={focused ? color : notActiveColor}
            />
          ),
        }}
      />
      <TabsNavigator.Screen
        name="Discover"
        component={Discover}
        options={{
          title: 'Noticias',
          tabBarIcon: ({ focused, color, size }: any) => (
            <FontAwesome5
              name="compass"
              size={size || 24}
              color={focused ? color : notActiveColor}
            />
          ),
        }}
      />
    </TabsNavigator.Navigator>
  );
};

export default HomeRoutes;
