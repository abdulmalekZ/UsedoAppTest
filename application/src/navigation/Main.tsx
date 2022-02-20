import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home'
import Header from './Header'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {return <Header screenName="Home"/>},
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={"home"} size={size} color={color} />;
          },
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator