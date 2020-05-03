import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {TabBarIcon, TabBarIconMain} from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import ChatScreen from '../screens/ChatScreen';
import CartScreen from '../screens/CartScreen';
import ConfigScreen from '../screens/ConfigScreen';

import IconHome from '../assets/images/home.png';
import IconShop from '../assets/images/supermercados.png';
import IconChat from '../assets/images/chat.png';
import IconCart from '../assets/images/carrinho.png'
import IconConfig from '../assets/images/configuracoes.png';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        tabStyle: { width: 100 },
        showLabel: false,
        style: { backgroundColor: '#fff' },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={IconHome} />,
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={IconShop} />,
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIconMain focused={focused} icon={IconChat} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={IconCart} />,
        }}
      />
      <BottomTab.Screen
        name="Config"
        component={ConfigScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={IconConfig} />,
        }}
      />

    </BottomTab.Navigator>
  );
}