import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button 
        onPress={() => {navigation.navigate('Content1')}} 
        title="Content1"
      />
      <Button 
        onPress={() => {navigation.navigate('Content2')}} 
        title="Content2"
      />
      <Button 
        onPress={() => {navigation.navigate('Content3')}} 
        title="Content3"
      />
      <Button 
        onPress={() => {navigation.navigate('User')}} 
        title="User Info"
      />
         
    </View>
  )
}
