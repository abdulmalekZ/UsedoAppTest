import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

const StartupContainer = () => {
  const navigation = useNavigation();

  const init = async () => {
    console.log("asdasfa");
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
      )
      navigation.reset({
        index: 0,
        // @ts-expect-error navigation
      routes: [{ name: 'Main' }],
    })
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[]}>
      <ActivityIndicator size={'large'} style={[]} />
    </View>
  )
}

export default StartupContainer