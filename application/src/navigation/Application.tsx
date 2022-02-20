import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './Main'
import Header from './Header'
import Details from '../components/Details'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{header: () => null}} initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />

          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              header: () => {return <Header backButton screenName="Details"/>} ,
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator