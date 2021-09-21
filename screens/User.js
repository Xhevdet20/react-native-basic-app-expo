import React from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../components/context'

export default function User() {

  const {signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>User Info</Text>
      <Button 
        title="Logout"
        onPress = {() => {
          signOut()
        }}
      />
    </View>
  )
}
