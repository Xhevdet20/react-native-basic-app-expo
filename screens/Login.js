import React from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AuthContext } from '../components/context'

export default function Login({navigation}) {

  const {signIn } = React.useContext(AuthContext);

  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Navigation</Text>
      <TextInput 
        placeholder="Username"
      />
      <TextInput 
        placeholder="Password"
      />
      <Button 
        title="Login"
        onPress = {() => {
          signIn()
      }}
      />
    </View>
  )
}
