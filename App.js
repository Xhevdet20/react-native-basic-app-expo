import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigators/RootNavigator';
import LoginStack from './navigators/LoginNavigation';
import { AuthContext } from './components/context';

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('ghtrhr');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, []);

  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems :'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
 <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken !== null ? (
         <MyStack />
        ) 
      : 
        <LoginStack />
    }
  </NavigationContainer>
 </AuthContext.Provider>
  );
}
